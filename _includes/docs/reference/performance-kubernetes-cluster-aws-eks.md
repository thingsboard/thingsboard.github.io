* TOC
{:toc}
<!-- This will parse content of HTML tags as markdown when uncomment {::options parse_block_html="true" /} -->

ThingsBoard has been run in production by numerous companies in both [monolithic](/docs/{{docsPrefix}}reference/monolithic/)
and [microservices](/docs/{{docsPrefix}}reference/msa/) deployment modes.

This article describes the performance of ThingsBoard microservices deployment in the most popular usage scenarios.
It is helpful to understand how ThingsBoard scales horizontally (cluster mode).

### ThingsBoard cluster test methodology

For simplicity, we have deployed a ThingsBoard cluster on AWS Kubernetes cluster.
To simplify the 3rd party deployment (PostgreSQL, Cassandra, Kafka, Zookeeper, Redis) we are going to use the respective helm charts. 
The test agent provisions and connects a configurable number of device emulators that constantly publish time-series data over MQTT.

### Setting up a Kubernetes cluster on AWS

Here the quick [introduction to Elastic Kubernetes Service (Amazon EKS)](https://www.youtube.com/watch?v=p6xDCz00TxU)  

[Install eksctl tool](https://eksctl.io/introduction/#installation), configure autocompletion.

[Install AWS CLI tool](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) 

[Configure AWC CLI autocompletion](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-completion.html)

[Configure access for AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) (this will authenticate eksctl as well)

Test AWS connection
```bash
$ aws eks list-clusters
{
    "clusters": []
}
$ eksctl get cluster 
2022-03-25 09:32:41 [ℹ]  eksctl version 0.88.0
2022-03-25 09:32:41 [ℹ]  using region eu-west-1
No clusters found
```

Create cluster with 3 nodes (m6a.2xlarge, 8 vCPU, 32GiB).
It may take about 20 minutes, so grab a coffee and take your time.

```bash
cat > cluster.yml
```

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: performance-test
  region: eu-west-1

availabilityZones: ['eu-west-1a', 'eu-west-1b', 'eu-west-1c']

managedNodeGroups:
  - name: worker-xlarge
    labels: { role: worker }
    instanceType: m6a.xlarge
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
  - name: transport-large
    labels: { role: transport }
    instanceType: c6a.large
    desiredCapacity: 6
    volumeType: gp3
    volumeSize: 20
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
  - name: cassandra-xlarge
    labels: { role: cassandra }
    instanceType: c6i.xlarge
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
  - name: kafka
    labels: { role: kafka }
    instanceType: c6i.large
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
  - name: postgresql-xlarge
    labels: { role: postgresql }
    instanceType: c6i.xlarge
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
  - name: pgpool-2xlarge
    labels: { role: pgpool }
    instanceType: c6a.2xlarge
    desiredCapacity: 1
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
```

Experiment:

```yaml
  - name: transport-small-netfilter-conntrack-max
    labels: { role: transport }
    instanceType: t3a.small
    desiredCapacity: 1
    volumeType: gp3
    volumeSize: 20
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
    preBootstrapCommands:
      - echo "BEGIN eksctl managedNodeGroups preBootstrapCommands"
      - echo "net.netfilter.nf_conntrack_max = 1048576" | sudo tee -a /etc/sysctl.conf
      - echo "net.nf_conntrack_max = 1048576" | sudo tee -a /etc/sysctl.conf
      - echo "modprobe ip_conntrack"
      - sudo modprobe ip_conntrack
      - echo "reload systcl"
      - sudo -s sysctl -p
      - echo "END eksctl managedNodeGroups preBootstrapCommands"
```

Work note: the good source how to set linux networking
See https://kubedex.com/90-days-of-aws-eks-in-production/


```yaml
- |
          cat <<EOF > /etc/sysctl.d/99-kubelet-network.conf
          # Have a larger connection range available
          net.ipv4.ip_local_port_range=1024 65000
          #
          # Reuse closed sockets faster
          net.ipv4.tcp_tw_reuse=1
          net.ipv4.tcp_fin_timeout=15
          #
          # The maximum number of "backlogged sockets".  Default is 128.
          net.core.somaxconn=4096
          net.core.netdev_max_backlog=4096
          #
          # 16MB per socket - which sounds like a lot,
          # but will virtually never consume that much.
          net.core.rmem_max=16777216
          net.core.wmem_max=16777216
        
          # Various network tunables
          net.ipv4.tcp_max_syn_backlog=20480
          net.ipv4.tcp_max_tw_buckets=400000
          net.ipv4.tcp_no_metrics_save=1
          net.ipv4.tcp_rmem=4096 87380 16777216
          net.ipv4.tcp_syn_retries=2
          net.ipv4.tcp_synack_retries=2
          net.ipv4.tcp_wmem=4096 65536 16777216
          #vm.min_free_kbytes=65536
          #
          # Connection tracking to prevent dropped connections (usually issue on LBs)
          net.netfilter.nf_conntrack_max=262144
          net.ipv4.netfilter.ip_conntrack_generic_timeout=120
          net.netfilter.nf_conntrack_tcp_timeout_established=86400
          #
          # ARP cache settings for a highly loaded docker swarm
          net.ipv4.neigh.default.gc_thresh1=8096
          net.ipv4.neigh.default.gc_thresh2=12288
          net.ipv4.neigh.default.gc_thresh3=16384
          EOF
          #
          # Don't forget to...
          systemctl restart systemd-sysctl.service
```

```bash
eksctl create cluster -f cluster.yml
```

```bash
eksctl create cluster \
  --name performance-test \
  --region eu-west-1 \
  --nodegroup-name linux-amd64 \
  --node-volume-type gp3 \
  --node-type m6a.xlarge \
  --nodes 6 \
  --ssh-access \
  --ssh-public-key smatvienko \
  --tags environment=performance-test,owner=smatvienko
```

eksctl create nodegroup --config-file=cluster.yml

# eksctl delete nodegroup transport-arm --cluster=performance-test

Check the cluster
```bash
kubectl get nodes
```

Switch context between clusters (like local minikube and remote AWS ECS)
```bash
kubectl config get-contexts
# kubectl config use-context minikube
kubectl config use-context aws-cli-user@performance-test.eu-west-1.eksctl.io
```

### GP3 storage on AWS EKS 

General Purpose (GP2) storage with a small volume size is quite slow relatively to the modern GP3. 
GP3 is provided 3000 IOPS and 125 MB/s throughput for each persistent volume with no additional cost.
It is enough to gain top performance needed for our services.

**Important**! Please, do not skip this step. Otherwise, you will face the major performance issue in a mean time.
With GP2 you probably face with extra costs when you order the same IOPS and throughput as GP3 provided as a base level wand only charge you for the disk space claimed.   

Install [gp3 storage class on AWS EKS](https://docs.aws.amazon.com/eks/latest/userguide/managing-ebs-csi-self-managed-add-on.html) 

Here some notes, but we advise you to use the up-to-date AWS user guide and follow each step precise and carefully.  

```bash

eksctl utils associate-iam-oidc-provider --cluster=performance-test --approve

eksctl create iamserviceaccount \
  --name ebs-csi-controller-sa \
  --namespace kube-system \
  --cluster performance-test \
  --attach-policy-arn arn:aws:iam::378560561651:policy/AmazonEKS_EBS_CSI_Driver_Policy \
  --approve

aws cloudformation describe-stacks \
  --stack-name eksctl-performance-test-addon-iamserviceaccount-kube-system-ebs-csi-controller-sa \
  --query='Stacks[].Outputs[?OutputKey==`Role1`].OutputValue' \
  --output text

helm upgrade -install aws-ebs-csi-driver aws-ebs-csi-driver/aws-ebs-csi-driver \
  --namespace kube-system \
  --set image.repository=602401143452.dkr.ecr.eu-west-1.amazonaws.com/eks/aws-ebs-csi-driver \
  --set controller.serviceAccount.create=false \
  --set controller.serviceAccount.name=ebs-csi-controller-sa
```

Create storage class gp3 and make it default

```bash
cat > gp3-def-sc.yaml
```

```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: gp3
  annotations:
    storageclass.kubernetes.io/is-default-class: "true"
allowVolumeExpansion: true
provisioner: ebs.csi.aws.com
volumeBindingMode: WaitForFirstConsumer
parameters:
  type: gp3
```

```bash
kubectl apply -f gp3-def-sc.yaml
```

Make gp2 storage class non-default
```bash
kubectl patch storageclass gp2 -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```
Or delete legacy gp2 storage class
```bash
kubectl delete storageclass gp2
```

Check the storage class available
```bash
kubectl get sc
# NAME            PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
# gp2             kubernetes.io/aws-ebs   Delete          WaitForFirstConsumer   false                  46m
# gp3 (default)   ebs.csi.aws.com         Delete          WaitForFirstConsumer   true                   14s
```

### Minikube (debug only)

```bash
minikube start --nodes=3 --memory 16384 --cpus 8
# Ingress
minikube addons enable ingress
# LoadBalancer
minikube tunnel
```

```bash
curl https://raw.githubusercontent.com/rancher/local-path-provisioner/master/deploy/local-path-storage.yaml | sed 's/\/opt\/local-path-provisioner/\/var\/opt\/local-path-provisioner/ ' | kubectl apply -f -
kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
kubectl patch storageclass local-path -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
```

### Create ThingsBoard's namespace

```bash
cat > tb-namespace.yml
```

```yaml
apiVersion: v1
kind: Namespace
metadata: 
  name: thingsboard
  labels:
    name: thingsboard
---
```

Create namespace for ThingsBoard
```bash
kubectl config current-context
kubectl apply -f tb-namespace.yml
kubectl get namespaces
kubectl config set-context --current --namespace=thingsboard
kubectl get pods -o wide
```

### Setup databases with Helm

Setup helm
```bash
sudo apt install helm
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm list
```

We are going to use Bitnami docker images and Bitnami helm charts as well.

Setup [Zookeeper cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/zookeeper)
```bash
helm install zookeeper bitnami/zookeeper --version 10.0.0 \
  --set nodeSelector.role=kafka \
  --set replicaCount=3 \
  --set persistence.size=1Gi \
  --set dataLogDir="/bitnami/zookeeper/log" \
  --set persistence.dataLogDir.size=1Gi \
  --set heapSize=192 \
  --set autopurge.purgeInterval=24 \
  --set jvmFlags="-Dzookeeper.electionPortBindRetry=0" \
  --set resources.limits.cpu=250m \
  --set resources.limits.memory=256Mi \
  --set resources.requests.cpu=100m \
  --set resources.requests.memory=256Mi
```

Setup [Kafka cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/kafka)
```bash
helm install kafka bitnami/kafka --version 18.0.3 \
  --set nodeSelector.role=kafka \
  --set replicaCount=3 \
  --set offsetsTopicReplicationFactor=3 \
  --set transactionStateLogReplicationFactor=3 \
  --set defaultReplicationFactor=2 \
  --set persistence.size=20Gi \
  --set zookeeper.enabled=false \
  --set externalZookeeper.servers=zookeeper-headless
```

Setup [Cassandra cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/cassandra)
```bash
helm install cassandra bitnami/cassandra --version 9.2.7 \
  --set nodeSelector.role=cassandra \
  --set replicaCount=3 \
  --set persistence.size=50Gi \
  --set persistence.commitLogsize=2Gi \
  --set persistence.commitLogMountPath=/bitnami/cassandra/commitlog \
  --set cluster.name=cassandra \
  --set cluster.datacenter=datacenter1 \
  --set cluster.seedCount=3 \
  --set jvm.maxHeapSize=2048M \
  --set jvm.newHeapSize=400M \
  --set resources.limits.memory=3Gi \
  --set resources.requests.cpu=1 \
  --set resources.requests.memory=3Gi
```

Setup [Redis cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/redis-cluster)
```bash
helm install redis bitnami/redis-cluster --version 7.6.4 \
  --set redis.nodeSelector.role=worker \
  --set cluster.nodes=6 \
  --set cluster.replicas=1 \
  --set redis.useAOFPersistence=no \
  --set fullnameOverride=redis \
  --set redis.resources.limits.memory=1Gi \
  --set redis.resources.requests.cpu=100m \
  --set redis.resources.requests.memory=1Gi
```

Setup [Postgres cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/postgresql-ha)
```bash
helm install postgresql bitnami/postgresql-ha --version 9.2.1 \
  --set postgresql.nodeSelector.role=postgresql \
  --set postgresql.replicaCount=2 \
  --set postgresql.database=thingsboard \
  --set postgresql.maxConnections=250 \
  --set postgresql.sharedPreloadLibraries='pgaudit\,repmgr\,pg_stat_statements' \
  --set pgpool.nodeSelector.role=postgresql \
  --set pgpool.replicaCount=1 \
  --set pgpool.numInitChildren=200 \
  --set pgpool.useLoadBalancing=false \
  --set pgpool.extraEnvVars[0].name=PGPOOL_AUTO_FAILBACK \
  --set pgpool.extraEnvVars[0].value=yes \
  --set pgpool.extraEnvVars[1].name=PGPOOL_BACKEND_APPLICATION_NAMES \
  --set pgpool.extraEnvVars[1].value='postgresql-postgresql-0\,postgresql-postgresql-1' \
  --set persistence.size=30Gi \
  --set postgresqlImage.debug=true \
  --set pgpoolImage.debug=true \
  --set fullnameOverride=postgresql \
  --set postgresql.resources.requests.cpu=3 \
  --set postgresql.resources.requests.memory=1Gi \
  --set pgpool.resources.requests.cpu=3 \
  --set pgpool.resources.requests.memory=500Mi \
  --set postgresql.readinessProbe.enabled=false \
  --set postgresql.startupProbe.enabled=true \
  --set postgresql.startupProbe.failureThreshold=100
```

Wait while all pods up and running
```bash
kubectl get pods
```

### Check the cluster health

Check the Kafka cluster state and effectively Zookeeper cluster state as Kafka is dependent on Zookeeper.
```bash
kubectl exec kafka-0 -- /opt/bitnami/kafka/bin/kafka-broker-api-versions.sh --bootstrap-server kafka-headless:9092 | grep kafka
```
You may find a 3 different kafka brokers in the output
```bash
kafka-2.kafka-headless.thingsboard.svc.cluster.local:9092 (id: 2 rack: null) -> (
kafka-0.kafka-headless.thingsboard.svc.cluster.local:9092 (id: 0 rack: null) -> (
kafka-1.kafka-headless.thingsboard.svc.cluster.local:9092 (id: 1 rack: null) -> (
```

Kafka cluster state is stored inside Zookeeper. Lest fetch the actual broker list.
```bash
kubectl exec kafka-0 -- /bin/bash -c "/opt/bitnami/kafka/bin/zookeeper-shell.sh zookeeper-headless:2181 ls /brokers/ids 2> /dev/null | tail -n 1"
```
Zookeeper will return the list with broker ids.
```bash
[0, 1, 2]
```

Check that Cassandra cluster is up and running
```bash
kubectl exec cassandra-0 -- nodetool status
```
All nodes have to be present in the list and have a status UN (Up Normal)
```bash
Datacenter: datacenter1
=======================
Status=Up/Down
|/ State=Normal/Leaving/Joining/Moving
--  Address         Load       Tokens  Owns (effective)  Host ID                               Rack 
UN  192.168.79.59   73.49 KiB  256     33.1%             b741387d-1577-41dc-bd54-c4013927cc50  rack1
UN  192.168.22.113  73.42 KiB  256     33.5%             fe9de861-a1d0-4815-9118-38c896b02acd  rack1
UN  192.168.62.247  78.26 KiB  256     33.4%             12c94af5-308d-4640-b828-d58f696d581e  rack1
UN  192.168.35.117  73.48 KiB  256     36.1%             b8d73281-7755-4503-9872-be8aa9994aab  rack1
UN  192.168.82.241  73.45 KiB  256     31.6%             8e02210f-d265-40e6-9682-ca7c5f16fac5  rack1
UN  192.168.11.79   73.47 KiB  256     32.2%             d6588e20-942b-4aeb-a88a-b0c06c6e6b8d  rack1
```

Check the Redis cluster is up and running
```bash
kubectl exec redis-0 -- redis-cli cluster info
# cluster_state:ok
# cluster_known_nodes:6
# cluster_size:3

for i in {0..5}; do kubectl exec redis-${i} -- redis-cli cluster nodes; done
# all connected
# 93a4392688ab0ff17f00c95ab88260ac584a4119 192.168.4.34:6379@16379 master - 0 1657531358000 3 connected 10923-16383
```

The output will show cluster state is ok, known nodes is equal 6, cluster size is 3 (master nodes).
```bash
cluster_state:ok
cluster_slots_assigned:16384
cluster_slots_ok:16384
cluster_slots_pfail:0
cluster_slots_fail:0
cluster_known_nodes:6
cluster_size:3
cluster_current_epoch:6
cluster_my_epoch:1
cluster_stats_messages_ping_sent:1872
cluster_stats_messages_pong_sent:1875
cluster_stats_messages_sent:3747
cluster_stats_messages_ping_received:1870
cluster_stats_messages_pong_received:1872
cluster_stats_messages_meet_received:5
cluster_stats_messages_received:3747
```

Check the Postgres status
```bash
kubectl exec postgresql-postgresql-0 -- /opt/bitnami/scripts/postgresql-repmgr/entrypoint.sh repmgr -f /opt/bitnami/repmgr/conf/repmgr.conf cluster show
```
The output have to have all 3 nodes running, 1 primary and 2 standby.
```bash
 ID   | Name                    | Role    | Status    | Upstream                | Location | Priority | Timeline | Connection string                                                                                                                                                  
------+-------------------------+---------+-----------+-------------------------+----------+----------+----------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------
 1000 | postgresql-postgresql-0 | primary | * running |                         | default  | 100      | 1        | user=repmgr password=fdArM4aFOW host=postgresql-postgresql-0.postgresql-postgresql-headless.thingsboard.svc.cluster.local dbname=repmgr port=5432 connect_timeout=5
 1001 | postgresql-postgresql-1 | standby |   running | postgresql-postgresql-0 | default  | 100      | 1        | user=repmgr password=fdArM4aFOW host=postgresql-postgresql-1.postgresql-postgresql-headless.thingsboard.svc.cluster.local dbname=repmgr port=5432 connect_timeout=5
 1002 | postgresql-postgresql-2 | standby |   running | postgresql-postgresql-0 | default  | 100      | 1        | user=repmgr password=fdArM4aFOW host=postgresql-postgresql-2.postgresql-postgresql-headless.thingsboard.svc.cluster.local dbname=repmgr port=5432 connect_timeout=5
```

Finally, check that all pods are up and running:

```bash
kubectl get pods
```

```bash
NAME                                 READY   STATUS    RESTARTS   AGE
cassandra-0                          1/1     Running   0          9m56s
cassandra-1                          1/1     Running   0          8m31s
cassandra-2                          1/1     Running   0          7m6s
cassandra-3                          1/1     Running   0          5m40s
cassandra-4                          1/1     Running   0          4m5s
cassandra-5                          1/1     Running   0          2m39s
kafka-0                              1/1     Running   0          10m
kafka-1                              1/1     Running   0          10m
kafka-2                              1/1     Running   0          10m
postgresql-pgpool-58c6ccd956-6m5gv   1/1     Running   0          8m58s
postgresql-postgresql-0              1/1     Running   0          8m58s
postgresql-postgresql-1              1/1     Running   0          8m58s
postgresql-postgresql-2              1/1     Running   0          8m58s
redis-0                              1/1     Running   0          9m17s
redis-1                              1/1     Running   0          9m17s
redis-2                              1/1     Running   0          9m17s
redis-3                              1/1     Running   0          9m17s
redis-4                              1/1     Running   0          9m17s
redis-5                              1/1     Running   0          9m17s
zookeeper-0                          1/1     Running   0          10m
zookeeper-1                          1/1     Running   0          10m
zookeeper-2                          1/1     Running   0          10m
```

### Install the ThingsBoard schema

Persist common settings

```bash
cat > tb-cm.yml 
```

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: tb-cluster-stack-config
  labels:
    name: tb-cluster-stack-config
data:
  # PostgreSQL
  SPRING_JPA_DATABASE_PLATFORM: org.hibernate.dialect.PostgreSQLDialect
  SPRING_DRIVER_CLASS_NAME: org.postgresql.Driver
  SPRING_DATASOURCE_URL: jdbc:postgresql://postgresql-pgpool:5432/thingsboard
  SPRING_DATASOURCE_USERNAME: postgres
  SQL_BATCH_SORT: "true"                        # default false
  SQL_TS_LATEST_BATCH_SIZE: "1000"
  SQL_TS_LATEST_BATCH_MAX_DELAY_MS: "20"
  SQL_TS_BATCH_MAX_DELAY_MS: "20"
  SQL_ATTRIBUTES_BATCH_MAX_DELAY_MS: "20"
  # Kafka
  TB_QUEUE_TYPE: "kafka"
  TB_KAFKA_SERVERS: "kafka-headless:9092"
  TB_QUEUE_KAFKA_REPLICATION_FACTOR: "2" # IMPORTANT for CLUSTER
  TB_KAFKA_ACKS: "1"
  TB_KAFKA_BATCH_SIZE: "65536" # default is 16384 - it helps to produce messages much efficiently
  TB_KAFKA_LINGER_MS: "5" # default is 1
  TB_KAFKA_COMPRESSION_TYPE: "gzip" # none or gzip
  TB_QUEUE_KAFKA_MAX_POLL_RECORDS: "4096" # default is 8192
  TB_QUEUE_KAFKA_JE_TOPIC_PROPERTIES: "partitions:12;retention.ms:604800000;segment.bytes:26214400;retention.bytes:104857600" # have to be multiple to tb-js-executor replicas count
  TB_QUEUE_KAFKA_TA_TOPIC_PROPERTIES: "partitions:12;retention.ms:604800000;segment.bytes:26214400;retention.bytes:104857600" # have to be multiple to tb-core (tb-node) replicas count
  TB_QUEUE_CORE_PARTITIONS: "6"
  TB_QUEUE_RE_MAIN_PARTITIONS: "6" # since 3.4 you have to login under sysadmin and change /settings/queues or use API
  TB_QUEUE_RE_HP_PARTITIONS: "6" # since 3.4 you have to login under sysadmin and change /settings/queues or use API
  TB_QUEUE_RE_SQ_PARTITIONS: "6" # since 3.4 you have to login under sysadmin and change /settings/queues or use API
  TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS: "30000"
  TB_QUEUE_CORE_PACK_PROCESSING_TIMEOUT_MS: "20000"
  TB_QUEUE_RE_MAIN_CONSUMER_PER_PARTITION: "false"
  TB_QUEUE_RE_HP_CONSUMER_PER_PARTITION: "false"
  TB_QUEUE_RE_SQ_CONSUMER_PER_PARTITION: "false"
  ACTORS_SYSTEM_RULE_DISPATCHER_POOL_SIZE: "16"
  # Zookeeper
  ZOOKEEPER_ENABLED: "true"
  ZOOKEEPER_URL: "zookeeper-headless:2181"
  # Cassandra
  DATABASE_TS_TYPE: "cassandra"
  TS_KV_PARTITIONING: "INDEFINITE" # MONTHS
#  DATABASE_TS_LATEST_TYPE: "cassandra" # this is a key difference
  PERSIST_STATE_TO_TELEMETRY: "true"
  CASSANDRA_URL: "cassandra-headless:9042"
  CASSANDRA_CLUSTER_NAME: "cassandra" # see https://github.com/bitnami/charts/blob/master/bitnami/cassandra/values.yaml
  CASSANDRA_LOCAL_DATACENTER: "datacenter1" # see https://github.com/bitnami/charts/blob/master/bitnami/cassandra/values.yaml
  CASSANDRA_USE_CREDENTIALS: "true"
  CASSANDRA_USERNAME: "cassandra"
  CASSANDRA_READ_CONSISTENCY_LEVEL: "QUORUM" # IMPORTANT for the CLUSTER data consistency
  CASSANDRA_WRITE_CONSISTENCY_LEVEL: "QUORUM" # IMPORTANT for the CLUSTER data consistency
  CASSANDRA_QUERY_BUFFER_SIZE: "1000000"
  CASSANDRA_QUERY_CONCURRENT_LIMIT: "500"
  CASSANDRA_QUERY_POLL_MS: "5"
  # Redis
  CACHE_TYPE: "redis"
  REDIS_CONNECTION_TYPE: "cluster"
  REDIS_NODES: "redis-headless:6379"
  REDIS_USE_DEFAULT_POOL_CONFIG: "false"
  REDIS_POOL_CONFIG_BLOCK_WHEN_EXHAUSTED: "false"
  REDIS_POOL_CONFIG_TEST_ON_BORROW: "false"
  REDIS_POOL_CONFIG_TEST_ON_RETURN: "false"
  CACHE_MAXIMUM_POOL_SIZE: "50"
  # JS executors
  JS_EVALUATOR: "remote"
  REMOTE_JS_MAX_PENDING_REQUESTS: "100000"
  REMOTE_JS_MAX_EVAL_REQUEST_TIMEOUT: "60000"
  REMOTE_JS_MAX_REQUEST_TIMEOUT: "60000"
  REMOTE_JS_SANDBOX_MAX_ERRORS: "100000"
  REMOTE_JS_SANDBOX_MAX_BLACKLIST_DURATION_SEC: "1"
  # Common settings
  HTTP_LOG_CONTROLLER_ERROR_STACK_TRACE: "false"
  # Cache specs
  #1M devices
  CACHE_SPECS_DEVICES_MAX_SIZE: "1048000" # default is 10000
  CACHE_SPECS_DEVICE_CREDENTIALS_MAX_SIZE: "1048000" # default is 10000 
  CACHE_SPECS_SESSIONS_MAX_SIZE: "1048000" # default is 10000
  TS_KV_PARTITIONS_MAX_CACHE_SIZE: "4194000" # default is 100000
  # Device state service
  DEFAULT_INACTIVITY_TIMEOUT: "1800" # defailt is 600 sec (10min)
  DEFAULT_STATE_CHECK_INTERVAL: "900" # default is 60 sec(1min)
  TB_TRANSPORT_SESSIONS_REPORT_TIMEOUT: "60000" # default is 3000 msec
  TB_TRANSPORT_SESSIONS_INACTIVITY_TIMEOUT: "600000" # default is 300000 msec
  #Transport API
  TB_QUEUE_TRANSPORT_MAX_PENDING_REQUESTS: "1000000" # default is 10k
  # Edge
  EDGES_ENABLED: "false"
  # etc
  JSON_TYPE_CAST_ENABLED: "false"
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: tb-node-config
  labels:
    name: tb-node-config
data:
  conf: |
    export JAVA_OPTS="$JAVA_OPTS -Dplatform=deb -Dinstall.data_dir=/usr/share/thingsboard/data"
    export JAVA_OPTS="$JAVA_OPTS -Xlog:gc*,heap*,age*,safepoint=debug:file=/var/log/thingsboard/gc.log:time,uptime,level,tags:filecount=10,filesize=10M"
    export JAVA_OPTS="$JAVA_OPTS -XX:+IgnoreUnrecognizedVMOptions -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/log/thingsboard/heapdump.bin"
    export JAVA_OPTS="$JAVA_OPTS -XX:-UseBiasedLocking -XX:+UseTLAB -XX:+ResizeTLAB -XX:+PerfDisableSharedMem -XX:+UseCondCardMark"
    export JAVA_OPTS="$JAVA_OPTS -XX:+UseG1GC -XX:MaxGCPauseMillis=500 -XX:+UseStringDeduplication -XX:+ParallelRefProcEnabled -XX:MaxTenuringThreshold=10"
    export JAVA_OPTS="$JAVA_OPTS -XX:+ExitOnOutOfMemoryError"
    export LOG_FILENAME=thingsboard.out
    export LOADER_PATH=/usr/share/thingsboard/conf,/usr/share/thingsboard/extensions
  logback: |
    <!DOCTYPE configuration>
    <configuration scan="true" scanPeriod="10 seconds">
        <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
            <encoder>
                <pattern>%d{ISO8601} [%thread] %-5level %logger{36} - %msg%n</pattern>
            </encoder>
        </appender>
        <logger name="org.thingsboard.server" level="INFO" />
        <logger name="com.google.common.util.concurrent.AggregateFuture" level="OFF" />
        
        <logger name="com.microsoft.azure.servicebus.primitives.CoreMessageReceiver" level="OFF" />
        <logger name="org.apache.kafka.common.utils.AppInfoParser" level="WARN"/>
        <logger name="org.apache.kafka.clients" level="WARN"/>
        
        <!-- Top Rule Nodes by max execution time DEBUG-->
        <logger name="org.thingsboard.server.service.queue.TbMsgPackProcessingContext" level="INFO" />
        <root level="INFO">
            <appender-ref ref="STDOUT"/>
        </root>
    </configuration>
---
```

Apply config map
```bash
kubectl apply -f tb-cm.yml
```

Prepare database setup yaml

```bash
cat > tb-db-setup.yml 
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: tb-db-setup
spec:
  nodeSelector:
    role: worker
  securityContext:
    runAsUser: 799
    runAsNonRoot: true
    fsGroup: 799
  volumes:
    - name: tb-node-config
      configMap:
        name: tb-node-config
        items:
          - key: conf
            path: thingsboard.conf
          - key: logback
            path: logback.xml
    - name: tb-node-logs
      emptyDir: {}
  containers:
    - name: tb-db-setup
      imagePullPolicy: Always
      image: sevlamat/tb-node:3.4.0-SNAPSHOT
      env:
        - name: TB_SERVICE_ID
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: INSTALL_TB
          value: "true"
        - name: LOAD_DEMO
          value: "true"
        - name: REDIS_PASSWORD
          valueFrom:
            secretKeyRef:
              name: redis
              key: redis-password
        - name: CASSANDRA_PASSWORD
          valueFrom:
            secretKeyRef:
              name: cassandra
              key: cassandra-password
        - name: SPRING_DATASOURCE_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgresql-postgresql
              key: postgresql-password
      envFrom:
        - configMapRef:
            name: tb-cluster-stack-config
      volumeMounts:
        - mountPath: /config
          name: tb-node-config
        - mountPath: /var/log/thingsboard
          name: tb-node-logs
  restartPolicy: Never
---
```

Install the ThingsBoard schema, follow logs and cleanup.

```bash
kubectl apply -f tb-db-setup.yml
kubectl logs -f tb-db-setup && kubectl delete pod tb-db-setup
```

The output end will look like the below:
```bash
Starting ThingsBoard Installation...
Installing DataBase schema for entities...
Installing SQL DataBase schema part: schema-entities.sql
Installing SQL DataBase schema indexes part: schema-entities-idx.sql
Installing SQL DataBase schema PostgreSQL specific indexes part: schema-entities-idx-psql-addon.sql
Installing DataBase schema for timeseries...
Installing Cassandra DataBase schema part: schema-ts.cql
Loading system data...
Loading demo data...
Installation finished successfully!
pod "tb-db-setup" deleted
```

### Fault tolerance

**IMPORTANT**. Make **Cassandra** fault tolerance by increasing **replication factor up to 3** with **full repair**.
This will guarantee that we can tolerate 1 Cassandra node outage (restart, out of disk, out of memory, crush, etc.) with no downtime for the ThingsBoard cluster for any read/write operations. 
There are two keyspace to upgrade:
* system_auth (authorization and internal authentication data)
* thingsboard (ThingsBoard's data)

```bash
$ kubectl exec -it cassandra-0 -- /bin/bash
I have no name!@cassandra-0:/$ cqlsh -u ${CASSANDRA_USER} -p ${CASSANDRA_PASSWORD} ${POD_IP}
cassandra@cqlsh> DESC KEYSPACE system_auth;
cassandra@cqlsh> ALTER KEYSPACE system_auth WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };
cassandra@cqlsh> DESC KEYSPACE thingsboard;
cassandra@cqlsh> ALTER KEYSPACE thingsboard WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };
cassandra@cqlsh> exit
I have no name!@cassandra-0:/$ exit
```

When increasing replication factor you need to run a full (-full) repair to distribute the data.
Repair needs to be run one by one on each Cassandra node. As we have a new cluster, the repair process takes a few seconds per node.
```bash
for i in {0..2}; do kubectl exec -it cassandra-${i} -- nodetool repair --full ; done
```

**IMPORTANT**. Make sure that your ThingsBoard cluster have a **Cassandra consistency** read/write **level** **QUORUM** (for SimpleStrategy) or **LOCAL_QUORUM** (for NetworkTopologyStrategy)!
See the example from configmap: 
```yaml
  CASSANDRA_READ_CONSISTENCY_LEVEL: "QUORUM" # IMPORTANT for the CLUSTER data consistency
  CASSANDRA_WRITE_CONSISTENCY_LEVEL: "QUORUM" # IMPORTANT for the CLUSTER data consistency
```
       
### Deploy ThingsBoard services

Prepare ThingsBoard services yaml

```bash
cat > tb-services.yml 
```

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: tb-node
spec:
  serviceName: tb-node
  podManagementPolicy: Parallel
  replicas: 3
  selector:
    matchLabels:
      app: tb-node
  template:
    metadata:
      labels:
        app: tb-node
    spec:
      nodeSelector:
        role: worker
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 9
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: app
                      operator: In
                      values:
                        - tb-node
                topologyKey: kubernetes.io/hostname
            - weight: 1
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: app
                      operator: In
                      values:
                        - tb-rule-engine
                topologyKey: kubernetes.io/hostname
      securityContext:
        runAsUser: 799
        runAsNonRoot: true
        fsGroup: 799
      volumes:
        - name: tb-node-config
          configMap:
            name: tb-node-config
            items:
              - key: conf
                path:  thingsboard.conf
              - key: logback
                path:  logback.xml
        - name: tb-node-logs
          emptyDir: {}
      containers:
        - name: tb-node
          imagePullPolicy: Always
          image: sevlamat/tb-node:3.4.0-SNAPSHOT
          ports:
            - containerPort: 8080
              name: http
            - containerPort: 7070
              name: edge
          resources:
            limits:
#              cpu: 8
              memory: 3Gi
            requests:
              cpu: "1"
              memory: 3Gi
          env:
            - name: JAVA_OPTS
              value: "-Xmx2048M -Xms2048M -Xss384k -XX:+AlwaysPreTouch -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
            - name: TB_SERVICE_TYPE
              value: "tb-core"
            - name: TB_SERVICE_ID
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: TB_HOST
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: REDIS_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: redis
                  key: redis-password
            - name: CASSANDRA_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: cassandra
                  key: cassandra-password
            - name: SPRING_DATASOURCE_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: postgresql-postgresql
                  key: postgresql-password
            - name: HTTP_ENABLED
              value: "false"
            - name: MQTT_ENABLED
              value: "false"
            - name: COAP_ENABLED
              value: "false"
            - name: SNMP_ENABLED
              value: "false"
            - name: LWM2M_ENABLED
              value: "false"
          envFrom:
            - configMapRef:
                name: tb-cluster-stack-config
          volumeMounts:
            - mountPath: /config
              name: tb-node-config
            - mountPath: /var/log/thingsboard
              name: tb-node-logs
          startupProbe:
            httpGet:
              path: /login
              port: http
            initialDelaySeconds: 30
            periodSeconds: 10
            timeoutSeconds: 10
            successThreshold: 1
            failureThreshold: 10
          livenessProbe:
            httpGet:
              path: /login
              port: http
            initialDelaySeconds: 460
            periodSeconds: 10
            timeoutSeconds: 10
            successThreshold: 1
            failureThreshold: 6
      restartPolicy: Always
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: tb-rule-engine
spec:
  serviceName: tb-rule-engine
  podManagementPolicy: Parallel
  replicas: 3
  selector:
    matchLabels:
      app: tb-rule-engine
  template:
    metadata:
      labels:
        app: tb-rule-engine
    spec:
      nodeSelector:
        role: worker
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 9
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: app
                      operator: In
                      values:
                        - tb-rule-engine            
                topologyKey: kubernetes.io/hostname
            - weight: 1
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: app
                      operator: In
                      values:
                        - tb-node
                topologyKey: kubernetes.io/hostname
      securityContext:
        runAsUser: 799
        runAsNonRoot: true
        fsGroup: 799
      volumes:
        - name: tb-node-config
          configMap:
            name: tb-node-config
            items:
              - key: conf
                path:  thingsboard.conf
              - key: logback
                path:  logback.xml
        - name: tb-node-logs
          emptyDir: {}
      containers:
        - name: tb-rule-engine
          imagePullPolicy: Always
          image: sevlamat/tb-node:3.4.0-SNAPSHOT
          ports:
            - containerPort: 8080
              name: http
            - containerPort: 7070
              name: edge
          resources:
            limits:
#              cpu: 8
              memory: 3Gi
            requests:
              cpu: "1"
              memory: 3Gi
          env:
            - name: JAVA_OPTS
              value: "-Xmx2048M -Xms2048M -Xss384k -XX:+AlwaysPreTouch -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
            - name: TB_SERVICE_TYPE
              value: "tb-rule-engine"
            - name: TB_SERVICE_ID
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: TB_HOST
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: REDIS_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: redis
                  key: redis-password
            - name: CASSANDRA_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: cassandra
                  key: cassandra-password
            - name: SPRING_DATASOURCE_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: postgresql-postgresql
                  key: postgresql-password
          envFrom:
            - configMapRef:
                name: tb-cluster-stack-config
          volumeMounts:
            - mountPath: /config
              name: tb-node-config
            - mountPath: /var/log/thingsboard
              name: tb-node-logs
          startupProbe:
            httpGet:
              path: /login
              port: http
            initialDelaySeconds: 30
            periodSeconds: 10
            timeoutSeconds: 10
            successThreshold: 1
            failureThreshold: 10
          livenessProbe:
            httpGet:
              path: /login
              port: http
            initialDelaySeconds: 460
            periodSeconds: 10
            timeoutSeconds: 10
            successThreshold: 1
            failureThreshold: 6
      restartPolicy: Always
---
apiVersion: v1
kind: Service
metadata:
  name: tb-node
spec:
  type: ClusterIP
  selector:
    app: tb-node
  ports:
    - port: 8080
      name: http
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tb-web-ui
spec:
  replicas: 3
  selector:
    matchLabels:
      app: tb-web-ui
  template:
    metadata:
      labels:
        app: tb-web-ui
    spec:
      nodeSelector:
        role: worker
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 1
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: app
                      operator: In
                      values:
                        - tb-web-ui
                topologyKey: kubernetes.io/hostname
      containers:
      - name: tb-web-ui
        imagePullPolicy: Always
        image: sevlamat/tb-web-ui:3.4.0-SNAPSHOT
        ports:
        - containerPort: 8080
          name: http
        resources:
          limits:
            cpu: "1"
            memory: 100Mi
          requests:
            cpu: "100m"
            memory: 100Mi
        env:
        - name: HTTP_BIND_ADDRESS
          value: "0.0.0.0"
        - name: HTTP_BIND_PORT
          value: "8080"
        livenessProbe:
          httpGet:
            path: /index.html
            port: http
          initialDelaySeconds: 120
          timeoutSeconds: 10
      restartPolicy: Always
---
apiVersion: v1
kind: Service
metadata:
  name: tb-web-ui
spec:
  type: ClusterIP
  selector:
    app: tb-web-ui
  ports:
  - port: 8080
    name: http
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: tb-js-executor
spec:
  serviceName: tb-js-executor
  replicas: 6
  podManagementPolicy: Parallel
  selector:
    matchLabels:
      app: tb-js-executor
  template:
    metadata:
      labels:
        app: tb-js-executor
    spec:
      nodeSelector:
        role: worker
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 1
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: app
                      operator: In
                      values:
                        - tb-js-executor
                topologyKey: kubernetes.io/hostname
      containers:
        - name: tb-js-executor
          imagePullPolicy: Always
          image: sevlamat/tb-js-executor:3.4.0-SNAPSHOT
          resources:
            limits:
              cpu: "1"
              memory: 400Mi
            requests:
              cpu: "100m"
              memory: 100Mi
          ports:
            - containerPort: 8888
              name: http # /livenessProbe
          env:
            - name: KAFKA_CLIENT_ID
              valueFrom:
                fieldRef:
                  apiVersion: v1
                  fieldPath: metadata.name
            - name: SLOW_QUERY_LOG_MS
              value: "100.000"
            - name: SCRIPT_STAT_PRINT_FREQUENCY
              value: "10000"
            - name: SCRIPT_BODY_TRACE_FREQUENCY
              value: "1000000"
            - name: SLOW_QUERY_LOG_BODY
              value: "false"
            - name: TB_KAFKA_LINGER_MS
              value: "10"
            - name: TB_KAFKA_BATCH_SIZE
              value: "250"
            - name: TB_KAFKA_COMPRESSION_TYPE
              value: "gzip"
            - name: SCRIPT_USE_SANDBOX
              value: "false"
          envFrom:
            - configMapRef:
                name: tb-cluster-stack-config
          startupProbe:
            httpGet:
              path: /livenessProbe
              port: http
            initialDelaySeconds: 10
            timeoutSeconds: 3
            periodSeconds: 10
            successThreshold: 1
            failureThreshold: 7
          livenessProbe:
            httpGet:
              path: /livenessProbe
              port: http
            initialDelaySeconds: 15
            timeoutSeconds: 3
            periodSeconds: 10
            successThreshold: 1
            failureThreshold: 6
      restartPolicy: Always
---
```

Deploy ThingsBoard cluster
```bash
kubectl apply -f tb-services.yml
```

Wait until all pods are up and running for a couple of minutes.
```bash
kubectl get pods --watch
```

## First login to the ThingsBoard cluster

Let's connect to the ThingsBoard's user interface inside the cluster.
  
```bash
kubectl port-forward pod/tb-node-0 8080:8080
```

Open the ThingsBoard in your browser using the http://localhost:8080 

## MQTT transport deployment

```bash
cat > tb-mqtt-transport.yml
```

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: tb-mqtt-transport-config
  labels:
    name: tb-mqtt-transport-config
data:
  conf: |
    export JAVA_OPTS="$JAVA_OPTS -Xlog:gc*,heap*,age*,safepoint=debug:file=/var/log/tb-mqtt-transport/${TB_SERVICE_ID}-gc.log:time,uptime,level,tags:filecount=10,filesize=10M"
    export JAVA_OPTS="$JAVA_OPTS -XX:+IgnoreUnrecognizedVMOptions -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/log/tb-mqtt-transport/${TB_SERVICE_ID}-heapdump.bin"
    export JAVA_OPTS="$JAVA_OPTS -XX:-UseBiasedLocking -XX:+UseTLAB -XX:+ResizeTLAB -XX:+PerfDisableSharedMem -XX:+UseCondCardMark"
    export JAVA_OPTS="$JAVA_OPTS -XX:+UseG1GC -XX:MaxGCPauseMillis=500 -XX:+UseStringDeduplication -XX:+ParallelRefProcEnabled -XX:MaxTenuringThreshold=10"
    export JAVA_OPTS="$JAVA_OPTS -XX:+ExitOnOutOfMemoryError"
    export LOG_FILENAME=tb-mqtt-transport.out
    export LOADER_PATH=/usr/share/tb-mqtt-transport/conf
  logback: |
    <!DOCTYPE configuration>
    <configuration scan="true" scanPeriod="10 seconds">
        <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
            <encoder>
                <pattern>%d{ISO8601} [%thread] %-5level %logger{36} - %msg%n</pattern>
            </encoder>
        </appender>
        <logger name="org.thingsboard.server" level="INFO" />

        <logger name="com.microsoft.azure.servicebus.primitives.CoreMessageReceiver" level="OFF" />
        <logger name="org.apache.kafka.common.utils.AppInfoParser" level="WARN"/>
        <logger name="org.apache.kafka.clients" level="WARN"/>
    
        <root level="INFO">
            <appender-ref ref="STDOUT"/>
        </root>
    </configuration>
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: tb-mqtt-transport
spec:
  serviceName: "tb-mqtt-transport"
  podManagementPolicy: Parallel
  replicas: 3
  selector:
    matchLabels:
      app: tb-mqtt-transport
  template:
    metadata:
      labels:
        app: tb-mqtt-transport
    spec:
      nodeSelector:
        role: transport
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            - labelSelector:
                matchExpressions:
                  - key: app
                    operator: In
                    values:
                      - tb-mqtt-transport
              topologyKey: kubernetes.io/hostname
      volumes:
        - name: tb-mqtt-transport-config
          configMap:
            name: tb-mqtt-transport-config
            items:
              - key: conf
                path:  tb-mqtt-transport.conf
              - key: logback
                path:  logback.xml
      containers:
        - name: tb-mqtt-transport
          image: sevlamat/tb-mqtt-transport:3.4.0-SNAPSHOT
          imagePullPolicy: Always
          ports:
            - containerPort: 1883
              name: mqtt
            - containerPort: 8883
              name: mqtts
          resources:
            limits:
              cpu: "2"
#              memory: 2Gi
            requests:
              cpu: 100m
#              memory: 1Gi
          env:
            - name: JAVA_OPTS
              value: "-Xmx1024M -Xms1024M -Xss256k -XX:+AlwaysPreTouch -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
            - name: TB_SERVICE_ID
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: REDIS_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: redis
                  key: redis-password
#            - name: TB_QUEUE_TRANSPORT_MAX_PENDING_REQUESTS
#              value: "100000"
#            - name: TB_QUEUE_TRANSPORT_MAX_REQUEST_TIMEOUT
#              value: "10000"
#            - name: TB_QUEUE_TRANSPORT_MAX_CALLBACK_THREADS
#              value: "100"
#            - name: TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS
#              value: "10"
          envFrom:
            - configMapRef:
                name: tb-cluster-stack-config
          volumeMounts:
            - mountPath: /config
              name: tb-mqtt-transport-config
          startupProbe:
            failureThreshold: 15
            periodSeconds: 20
            tcpSocket:
              port: 1883
          livenessProbe:
            periodSeconds: 30
            tcpSocket:
              port: 1883
            timeoutSeconds: 10
            successThreshold: 1
            failureThreshold: 6
---
```

Apply MQTT transport config
```bash
kubectl apply -f tb-mqtt-transport.yml
```

# Create Connector Role to observer ESK dashboards (WIP)

https://docs.aws.amazon.com/eks/latest/userguide/connector_IAM_role.html#create-connector-role

kubectl apply -f https://s3.us-west-2.amazonaws.com/amazon-eks/docs/eks-console-full-access.yaml

eksctl get iamidentitymapping --cluster performance-test --region=eu-west-1

See: https://docs.aws.amazon.com/eks/latest/userguide/troubleshooting_iam.html#security-iam-troubleshoot-cannot-view-nodes-or-workloads

# Daemon set to tune the network (Optional)

cat > sysctl-conntrack-daemonset.yml

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: sysctl-conntrack
spec:
  selector:
    matchLabels:
      name: sysctl-conntrack
  template:
    metadata:
      labels:
        name: sysctl-conntrack
    spec:
#      securityContext:
#        sysctls:
#        - name: net.netfilter.nf_conntrack_max
#          value: "1048576"
#      hostPID: true
      containers:
        - name: sysctl-buddy
          image: busybox
          securityContext:
            privileged: true            
          command:
            - /bin/sh
            - -c
            - |
              echo "tuning the network parameters"
              ulimit -n 1048576
              ulimit -n
              sysctl -a | grep conntrack_max
              sysctl -w net.netfilter.nf_conntrack_max=1048576
              sysctl -a | grep conntrack_max
              echo "all done"
              sleep infinity
---
```

kubectl apply -f sysctl-conntrack-daemonset.yml

# Provisioning AWS Load Balancer

Here the instruction how to setup [Load Balancer on AWS EKS](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html)

```bash
curl -o iam_policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.1/docs/install/iam_policy.json
aws iam create-policy \
    --policy-name AWSLoadBalancerControllerIAMPolicy \
    --policy-document file://iam_policy.json
# AWSLoadBalancerControllerIAMPolicy may already exists
eksctl create iamserviceaccount \
  --cluster=performance-test \
  --namespace=kube-system \
  --name=aws-load-balancer-controller \
  --role-name "AmazonEKSLoadBalancerControllerRolePT" \
  --attach-policy-arn=arn:aws:iam::378560561651:policy/AWSLoadBalancerControllerIAMPolicy \
  --approve
# If errors then delete, change and try again: eksctl delete iamserviceaccount   --cluster=performance-test   --namespace=kube-system   --name=aws-load-balancer-controller 
helm repo add eks https://aws.github.io/eks-charts
helm repo update
helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
  -n kube-system \
  --set clusterName=performance-test \
  --set serviceAccount.create=false \
  --set serviceAccount.name=aws-load-balancer-controller \
  --set image.repository=602401143452.dkr.ecr.eu-west-1.amazonaws.com/amazon/aws-load-balancer-controller
kubectl get deployment -n kube-system aws-load-balancer-controller
kubectl get events -n kube-system | grep aws-load-balancer-controller
```

# Deploy HTTP Load Balancer

```bash
cat > http-load-balancer.yml
```

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: tb-http-loadbalancer
  namespace: thingsboard
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
spec:
  rules:
    - http:
        paths:
          - path: /api/v1/*
            pathType: ImplementationSpecific
            backend:
              service:
                name: tb-http-transport
                port:
                  number: 8080
          - path: /static/rulenode/*
            pathType: ImplementationSpecific
            backend:
              service:
                name: tb-node
                port:
                  number: 8080
          - path: /static/*
            pathType: ImplementationSpecific
            backend:
              service:
                name: tb-web-ui
                port:
                  number: 8080
          - path: /index.html
            pathType: ImplementationSpecific
            backend:
              service:
                name: tb-web-ui
                port:
                  number: 8080
          - path: /*
            pathType: ImplementationSpecific
            backend:
              service:
                name: tb-node
                port:
                  number: 8080
---
```

```bash
kubectl apply -f http-load-balancer.yml
kubectl get ingress
# NAME                   CLASS    HOSTS   ADDRESS                                                                   PORTS   AGE
# tb-http-loadbalancer   <none>   *       k8s-thingsbo-tbhttplo-784e0efb43-1467549612.eu-west-1.elb.amazonaws.com   80      12m
```

Visit the ThingsBoard's web page http://k8s-thingsbo-tbhttplo-784e0efb43-1467549612.eu-west-1.elb.amazonaws.com

# Deploy MQTT Load Balancer

```bash
cat > mqtt-load-balancer.yml
```

```yaml
apiVersion: v1
kind: Service
metadata:
  name: tb-mqtt-loadbalancer
  annotations:
    service.beta.kubernetes.io/aws-load-balancer-type: "nlb"
    service.beta.kubernetes.io/aws-load-balancer-cross-zone-load-balancing-enabled: "true"
    service.beta.kubernetes.io/aws-load-balancer-target-group-attributes: "stickiness.enabled=true,stickiness.type=source_ip"
    service.beta.kubernetes.io/aws-load-balancer-additional-resource-tags: ThingsBoardClusterELB=ThingsBoardMqtt
spec:
  type: LoadBalancer
  externalTrafficPolicy: Local
  selector:
    app: tb-mqtt-transport
  ports:
    - port: 1883
      targetPort: 1883
      name: mqtt
    # This way NLB acts as transparent load balancer and forwards all traffic to port 8883 without decryption.
    - port: 8883
      targetPort: 8883
      name: mqtts
---
```

Apply the balancer config:
```bash
kubectl apply -f mqtt-load-balancer.yml
```

Check the balancer is up and running

```bash
kubectl get svc | grep -i balancer
# tb-mqtt-loadbalancer             LoadBalancer   10.100.38.17     aff16c87439c84d4ca7cf942ca5ef84c-4f1e51aef8129250.elb.eu-west-1.amazonaws.com   1883:32385/TCP,8883:30876/TCP         5m32s
telnet aff16c87439c84d4ca7cf942ca5ef84c-4f1e51aef8129250.elb.eu-west-1.amazonaws.com 1883
# Trying 52.16.93.146...
# Connected to aff16c87439c84d4ca7cf942ca5ef84c-4f1e51aef8129250.elb.eu-west-1.amazonaws.com.
# Escape character is '^]'.
# ^C
```

# Small performance test

```bash
# Put your ThingsBoard private IP address here, assuming both ThingsBoard and performance tests EC2 instances are in the same VPC.
export REST_URL=http://k8s-thingsbo-tbhttplo-784e0efb43-20626500.eu-west-1.elb.amazonaws.com:80
export MQTT_HOST=af9ec4fe2ef8345aba197f1cd65a99ed-b046860c9de97400.elb.eu-west-1.amazonaws.com
docker run -it --rm --network host --name tb-perf-test \
  --env REST_URL=http://127.0.0.1:8080 \
  --env MQTT_HOST=10.102.104.87 \
  --env DEVICE_END_IDX=15000 \
  --env MESSAGES_PER_SECOND=15000 \
  --env ALARMS_PER_SECOND=1 \
  --env DURATION_IN_SECONDS=86400 \
  --env DEVICE_CREATE_ON_START=true \
  thingsboard/tb-ce-performance-test:3.3.3
```

Kafka UI Kowl

cat > tb-kafka-ui-kowl.yml
```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: tb-kafka-ui-kowl
spec:
  serviceName: tb-kafka-ui-kowl
  replicas: 1
  selector:
    matchLabels:
      app: tb-kafka-ui-kowl
  template:
    metadata:
      labels:
        app: tb-kafka-ui-kowl
    spec:
      nodeSelector:
        role: kafka
      containers:
        - name: server
          imagePullPolicy: Always
          image: quay.io/cloudhut/kowl:master
          resources:
            requests:
#              cpu: 200m
              memory: 200Mi
            limits:
              cpu: "1"
              memory: 1Gi
          ports:
            - containerPort: 8080
              name: http8080
          env:
            - name: KAFKA_BROKERS
              value: "kafka-headless:9092" # put your broker here
      restartPolicy: Always
---
```

```bash
kubectl apply -f tb-kafka-ui-kowl.yml
kubectl port-forward tb-kafka-ui-kowl-0 8080:8080
```

If Kafka UI does not need, scale it down:

```bash
kubectl scale --replicas=0 statefulset tb-kafka-ui-kowl
```

To connect to the Postgresql from PgAdmin tool use port forwarding:
```bash
# detect primary node
kubectl exec postgresql-postgresql-0 -- /opt/bitnami/scripts/postgresql-repmgr/entrypoint.sh repmgr -f /opt/bitnami/repmgr/conf/repmgr.conf cluster show
# fetch postgres password
kubectl get secret postgresql-postgresql -o jsonpath="{.data.postgresql-password}" | base64 --decode ; echo
# forward port 5432 from postgresql primary node
kubectl port-forward postgresql-postgresql-0 5432:5232
```

# Performance tests

## Set up the device payload generator fleet

Let's spin up 32 instances to generate the load via mqtt

I found the cheapest `m3a.small` in Mumbai, so lets try how its work across Pacific.

Let's prepare the instances

```bash
cat > test-ips.sh
```

```bash
#!/bin/bash
SSH_KEY="~/.ssh/aws/smatvienko-ap-south-1.pem"

IPS="
13.233.135.93
13.235.210.232
13.235.65.194
15.206.188.214
3.108.222.97

3.108.6.63
3.108.9.124
3.109.138.222
3.109.138.232
3.110.113.42

3.110.126.37
3.110.200.210
3.110.202.11
3.110.231.18
3.110.235.89

3.110.82.190
3.110.98.113
3.110.98.9
3.111.43.201
3.111.45.74

3.6.43.206
3.7.59.56
3.7.62.78
3.7.74.138
65.0.120.186

65.0.67.72
65.1.129.57
65.1.13.134
65.1.145.31
65.1.146.81

65.1.168.122
65.2.56.171
"

COUNT=0

for IP in ${IPS}; do
  let COUNT++
  echo "LIST id ${COUNT} IP ${IP}"
done
```

```bash
cat > init-tests.sh
```

```bash
#!/bin/bash
. test-ips.sh

COUNTER=0

for IP in ${IPS}; do
  let COUNTER++
  echo "INIT ${COUNTER} FOR ${IP}"
  ssh -i ${SSH_KEY} -o StrictHostKeyChecking=accept-new ubuntu@${IP} <<'ENDSSH'
set +x
#optional. replace with your Thingsboard instance ip
#echo '52.50.5.45 thingsboard' | sudo tee -a /etc/hosts
#extend the local port range up to 64500
cat /proc/sys/net/ipv4/ip_local_port_range
#32768  60999
echo "net.ipv4.ip_local_port_range = 1024 65535" | sudo tee -a /etc/sysctl.conf
sudo -s sysctl -p
cat /proc/sys/net/ipv4/ip_local_port_range
#1024   65535
ulimit -n 1048576
sudo sysctl -w net.netfilter.nf_conntrack_max=1048576
sudo apt update
sudo apt install -y git maven docker docker-compose htop iotop mc screen
# manage Docker as a non-root user
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
# test non-root docker run
docker run hello-world
rm -rf ~/performance-tests
cd ~
git clone https://github.com/thingsboard/performance-tests.git
cd performance-tests
screen -d -m ~/performance-tests/build.sh
screen -ls
ENDSSH

done
```

```bash
cat > reboot-tests.sh
```

```bash
#!/bin/bash
. test-ips.sh

COUNTER=0

for IP in ${IPS}; do
  let COUNTER++
  echo "REBOOT ${COUNTER} FOR ${IP}"

  ssh -i ${SSH_KEY} -o StrictHostKeyChecking=accept-new ubuntu@${IP} <<'ENDSSH'
echo "going to reboot"
sudo reboot now
echo "over"
ENDSSH
done
```

```bash
cat > run-test.sh
```

```bash
#!/bin/bash
. test-ips.sh

COUNTER=0
DEVICES_PER_NODE=9375
MESSAGES_PER_NODE=315
START_IDX=0

for IP in ${IPS}; do
  let COUNTER++
  let DEVICE_START_IDX=START_IDX+COUNTER*DEVICES_PER_NODE-DEVICES_PER_NODE
  let DEVICE_END_IDX=START_IDX+COUNTER*DEVICES_PER_NODE
  echo "********** RUN TEST ${COUNTER} FOR ${IP} **********"

SCRIPT="
ulimit -n 1048576;
sudo sysctl -w net.netfilter.nf_conntrack_max=1048576;
cd ~/performance-tests;
export WARMUP_PACK_SIZE=25;
export REST_URL=http://k8s-thingsbo-tbhttplo-784e0efb43-1467549612.eu-west-1.elb.amazonaws.com:80;
export MQTT_HOST=aff16c87439c84d4ca7cf942ca5ef84c-4f1e51aef8129250.elb.eu-west-1.amazonaws.com;
export DEVICE_START_IDX=${DEVICE_START_IDX};
export DEVICE_END_IDX=${DEVICE_END_IDX};
export MESSAGES_PER_SECOND=${MESSAGES_PER_NODE};
export ALARMS_PER_SECOND=1;
export DURATION_IN_SECONDS=999000;
export DEVICE_CREATE_ON_START=true;
screen -d -m mvn spring-boot:run;
screen -list;
"

  ssh -i ${SSH_KEY} -o StrictHostKeyChecking=accept-new ubuntu@${IP} ${SCRIPT}
done
```

```bash
chmod +x run-test.sh test-ips.sh reboot-tests.sh init-tests.sh
```

First, test IPs need to be pasted to the `test-ips.sh`
Then path to SSH access key have to be placed to the `test-ips.sh`
After it done, start the `init-tests.sh` once. It may take a while
Finally we can start the test using `run-test.sh`
To stop the test, just reboot every node `reboot-tests.sh`

To login the performance test instance please, use this command:
```bash
source test-ips.sh > /dev/null ; ssh -i ${SSH_KEY} -o StrictHostKeyChecking=accept-new ubuntu@$(echo $IP | head -1)
```

To follow the performance test logs under the screen, use this:
```bash
screen -r
```

To detach screen again press `Ctrl+A`, then press `d`

## Performance tests

### 100k devices, 20k data points 

Let's build a ThingsBoard cluster and start from 100k devices and 20k data points per second  

To produce the load, we will spin x10 AWS EC2 t3a.small instances, far away from the cluster.

Data will flow from `performance-test` instances through the AWS load balancer and feed the cluster using the `tb-mqtt-transport` service

Cluster config is there:

| Node group | Instances (vCPU/Gi)   | Micro services                                                                                           |
|------------|-----------------------|----------------------------------------------------------------------------------------------------------|
| worker     | 3 * m6a.xlarge (4/16) | 3 * tb-core </br> 3 * tb-rule-engine </br>3 * tb-mqtt-transport </br> 6 * tb-js-executor </br> 6 * redis |
| cassandra  | 3 * c6i.xlarge (4/8)  | 3 * cassandra                                                                                            |
| postgresql | 3 * c6i.xlarge (4/8)  | 2 * postgresql </br> 1 * pgpool                                                                          |
| kafka      | 3 * c6i.large (2/4)   | 3 * zokeeper </br>3 * kafka </br> 3 * tb-web-ui                                                          |

We run the cluster more than 24h and find that the cluster able to handle the load.

{% include images-gallery.html imageCollection="cluster-100k-6k-20k" %}

<details markdown="1">
<summary>
How to reproduce the Kubernetes cluster setup
</summary>

```bash
cat > cluster.yml
```

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: performance-test
  region: eu-west-1

availabilityZones: ['eu-west-1a', 'eu-west-1b', 'eu-west-1c']

managedNodeGroups:
  - name: worker-xlarge
    labels: { role: worker }
    instanceType: m6a.xlarge
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
  - name: cassandra-xlarge
    labels: { role: cassandra }
    instanceType: c6i.xlarge
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
  - name: kafka
    labels: { role: kafka }
    instanceType: c6i.large
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
  - name: postgresql-xlarge
    labels: { role: postgresql }
    instanceType: c6i.xlarge
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
```
{: .copy-code}

```bash
eksctl create cluster -f cluster.yml
```

</details>

### 100k devices, 30k data points

Let's try to increase the load up to 30k data point per second. We may see that the system is ok.

For some reason the pgpool has been scheduled at the same node as postgresql and that pushed CPU load to maximum.
To fix this fast, lets spin a new node group dedicated to pgpool:  

| Node group | Instances (vCPU/Gi)    | Micro services                                                               |
|------------|------------------------|------------------------------------------------------------------------------|
| pgpoool    | 1 * c6a.2xlarge (8/16) | 1 * pgpool                                                                   |

Here are some screenshots: 

{% include images-gallery.html imageCollection="cluster-100k-10k-30k" %}

### 100k devices, 45k data points

Increasing the load up to 45k data point per second. The system is performing ok, but close to the CPU limits for Postgresql and Cassandra.

Note: for some reason, the pgpool is consuming about 4 CPU cores, even more than Posgresql itself. Probably it related to some bug in the latest update. We will take a look on it later and probably the upgrade/downgrade will be a solution.

Cluster config is there:

| Node group | Instances (vCPU/Gi)    | Micro services                                                                                           |
|------------|------------------------|----------------------------------------------------------------------------------------------------------|
| worker     | 3 * m6a.xlarge (4/16)  | 3 * tb-core </br> 3 * tb-rule-engine </br>3 * tb-mqtt-transport </br> 6 * tb-js-executor </br> 6 * redis |
| cassandra  | 3 * c6i.xlarge (4/8)   | 3 * cassandra                                                                                            |
| postgresql | 2 * c6i.xlarge (4/8)   | 2 * postgresql                                                                                           |
| pgpoool    | 1 * c6a.2xlarge (8/16) | 1 * pgpool                                                                                               |
| kafka      | 3 * c6i.large (2/4)    | 3 * zokeeper </br>3 * kafka </br> 3 * tb-web-ui                                                          |

Here you can see the screenshots of the working cluster with the 100k/15k/30k load.

{% include images-gallery.html imageCollection="cluster-100k-15k-45k" %}

### 300k devices, 15k data points

We will go forward and increase device count even more.
The main challenge is this approach is manage a lot of TCP connections.
You have to be able to accept a much more TCP connection than usual.

Verifying through JMX have shown that tb-mqtt-transport is low on heap memory (garbage collection spikes) and it is time to increase the memory from 1Gi up to 2Gi:
```yaml
JAVA_OPTS: "-Xmx2048M -Xms2048M -Xss256k" 
```

Here the screenshots for a short period of time.

{% include images-gallery.html imageCollection="cluster-300k-5k-15k" %}

### 500k devices, 15k data points

Lets create a 500k devices 

#### Experiments 

Connecting the 500k failed using 3 nodes because out of TCP connections tracked.
You can check the connection status using via SSH on the worker node

```bash
ulimit -n 1048576
sudo sysctl -a | grep conntrack_max
# net.netfilter.nf_conntrack_max = 131072
# net.nf_conntrack_max = 131072

# errors:
# sudo yum install -y ethtool 
ethtool -S eth0 | grep exceeded
# conntrack_allowance_exceeded: 39878822

# set maximum connection allowed until next restart
sudo sysctl -w net.netfilter.nf_conntrack_max=1048576
```

Let's try to spin another 10 nodes dedicated for transport adding the next lined to the `cluster.yml`

```yaml
  - name: transport
    labels: { role: transport }
    instanceType: c6a.large
    desiredCapacity: 10
    volumeType: gp3
    volumeSize: 20
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
```

```bash
eksctl create nodegroup --config-file=cluster.yml
```

Let's move tb-mqtt-transport using node selector in `tb-mqtt-transport.yml`

```yaml
      nodeSelector:
        role: transport
```

Scaling nodes

```bash
eksctl scale nodegroup --cluster=performance-test --nodes=6 --nodes-max=6 transport-large
```

```bash
kubectl scale --replicas=6 sts tb-mqtt-transport
```

Check the pod distribution across the nodes and roles:

```bash
kubectl get pods -o=custom-columns=ROLE:spec.nodeSelector.role,NODE:.spec.nodeName,POD:.metadata.name | tail +2 | sort
```

Check the conntrack available:

```bash
kubectl exec -it tb-mqtt-transport-0 -- sysctl -a | grep conntrack_max
```

Restart all pods affected on affected nodes
```bash
kubectl rollout restart sts redis
# wait for restart
kubectl rollout restart sts tb-node tb-rule-engine tb-js-executor
```

Finally, let's config the kube-proxy to track one million connections
```bash
kubectl edit -n kube-system configmap/kube-proxy-config
# conntrack:
#   maxPerCore: 262144
#   min: 1048576
kubectl rollout restart -n kube-system daemonset kube-proxy
```

Wait for a kube proxy restart on all nodes and check the max connections adjusted 

```bash
kubectl get pods -w -n kube-system
# Ctrl + C when all in Running state
kubectl exec -it tb-mqtt-transport-0 -- sysctl -a | grep conntrack_max
# net.netfilter.nf_conntrack_max = 1048576
```

Note: when the resources not set for the container the Java application will show a single CPU available. It is possible the Kubernetes cluster have a default resources limits, so the best practice is to assign resources limits and requests. Sometime application choose parallelism level depends on CPU available, so take care with this parameter.

Here is the screenshots with tunings

{% include images-gallery.html imageCollection="500k-5k-15k-experiments" %}

Rolling update for ThingsBoars MQTT transport leads to all devices reconnecting. 
Here the screenshots how the cluster handle a full reconnect issue at this moment.
For the big scale this is a good point to improve the [source](https://github.com/thingsboard/thingsboard).

{% include images-gallery.html imageCollection="500k-5k-15k-reconnect-all" %}

#### Tuning Postgresql

```bash
cat > psql-override-conf.yml
```

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: psql-override-conf
data:
  override.conf: |+
    # DISCLAIMER - Software and the resulting config files are provided "AS IS" - IN NO EVENT SHALL
    # BE THE CREATOR LIABLE TO ANY PARTY FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL
    # DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION.
    
    # The tool used: http://pgconfigurator.cybertec.at/

    # Connectivity
    max_connections = 300
    superuser_reserved_connections = 3

    # Memory Settings
    shared_buffers = '2048 MB'
    work_mem = '64 MB'
    maintenance_work_mem = '320 MB'
    huge_pages = off
    effective_cache_size = '6 GB'
    effective_io_concurrency = 0   # concurrent IO only really activated if OS supports posix_fadvise function
    random_page_cost = 1.5 # speed of random disk access relative to sequential access (1.0)

    # Monitoring
    # NOTE: repmgr is required for cluster mode !!!
    shared_preload_libraries = 'repmgr, pgaudit, pg_stat_statements'    # per statement resource usage stats
    track_io_timing=on        # measure exact block IO times
    track_functions=pl        # track execution times of pl-language procedures if any

    # Replication
    wal_level = replica
    max_wal_senders = 10
    synchronous_commit = on

    # Checkpointing: 
    checkpoint_timeout  = '15 min' 
    checkpoint_completion_target = 0.9
    max_wal_size = '1024 MB'
    min_wal_size = '512 MB'

    # WAL archiving
    archive_mode = on # having it on enables activating P.I.T.R. at a later time without restart
    archive_command = '/bin/true'  # not doing anything yet with WAL-s

    # WAL writing
    wal_compression = on
    wal_buffers = -1    # auto-tuned by Postgres till maximum of segment size (16MB by default)
    wal_writer_delay = 200ms
    wal_writer_flush_after = 1MB
    wal_keep_size = '3650 MB'

    # Background writer
    bgwriter_delay = 200ms
    bgwriter_lru_maxpages = 100
    bgwriter_lru_multiplier = 2.0
    bgwriter_flush_after = 0

    # Parallel queries: 
    max_worker_processes = 4
    max_parallel_workers_per_gather = 2
    max_parallel_maintenance_workers = 2
    max_parallel_workers = 4
    parallel_leader_participation = on

    # Advanced features 

    enable_partitionwise_join = on
    enable_partitionwise_aggregate = on
    jit = on

    # General notes: 
    # We recommend not to use read-only replicas for scaling
    # Note that not all settings are automatically tuned. 
    #   Consider contacting experts at 
    #   https://www.cybertec-postgresql.com 
    #   for more professional expertise.    
---
```

```bash
kubectl apply -f psql-override-conf.yml
```

```bash
helm update postgresql bitnami/postgresql-ha --version 9.2.1 \
 ...
  --set postgresql.extendedConfCM=psql-override-conf \
 ...
```

#### Final test

Summary config for 500k devices, 5k messages per second, 15k datapoints.

To gain the 500k connection in AWS EKS with Amazon Load Balancer we allowed to receive about 100k+ connections per `c6a.large` (2 CPU / 4 Gi) instance. Tuning the node itself using kube-proxy or sysctl has no effect because of limits are on the network level (security group tracked connection limit). See the [AWS Security group connection tracking and throttling](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html) for details. 

Total connections per `tb-mqtt-transport` pod (and node as well) is about 500k / (5+1) = 83k. 

Why we are using one more node and leaving the spare connections? It is all about fault tolerance. 
During a single pod/pod restart, the rest of 5 nodes can handle the load. So +1 nodes means that we tolerate 1 node failure.
You can add as many nodes as fault tolerance required in your cluster design.

The summary cluster config: 

| Node group | Instances (vCPU/Gi)    | Micro services                                                                |
|------------|------------------------|-------------------------------------------------------------------------------|
| transport  | 6 * c6a.large (2/4)    | 6 * tb-mqtt-transport                                                         |
| worker     | 3 * m6a.xlarge (4/16)  | 3 * tb-core </br> 3 * tb-rule-engine </br> 6 * tb-js-executor </br> 6 * redis |
| cassandra  | 3 * c6i.xlarge (4/8)   | 3 * cassandra                                                                 |
| postgresql | 2 * c6i.xlarge (4/8)   | 2 * postgresql                                                                |
| pgpool     | 1 * c6a.2xlarge (8/16) | 1 * pgpool                                                                    |
| kafka      | 3 * c6i.large (2/4)    | 3 * kafka </br> 3 * zokeeper </br> 3 * tb-web-ui                              |

The Postgresql has been configured for better performance to utilize all resources available and handling the bigger data set.
Note: With standard settings the Postgresql performance are low on 500k devices. Without tuning the Postgresql the only way to handle is to make a tradeoff considering disable persisting latest telemetry value to the Postgres in the SaveTelemetry Rule Node in the root Rule Chain.

MQTT load was generated by x20 't3a.small' instances of performance-test application using `run-test.sh` script to automate the process.

```bash
# 20 instances, 500 000 devices, 5 000 messages, 15 000 data points (SMART_METER)
DEVICES_PER_NODE=25000
MESSAGES_PER_NODE=250
ALARMS_PER_SECOND=1
```

Here is the screenshots

{% include images-gallery.html imageCollection="500k-5k-15k" %}

#### Cost-cutting

It is cost-effective to pay about 1$/mo per 1000 connections for EC2 instances only? It's all depends on your use case.
Probably you can **cut the expenses** using the **NodePort** service instead of LoadBalancer. 
It needs to advertise the **node external IP address** to some **DNS service** using **initContainer** attached to `tb-mqtt-transport` pod. 
Connecting to nodes directly will consider by AWS as **untracked** traffic and your instance can handle **up to the 1M TCP connections**. 
On the application level you probably will not put a 1M connections on a single instance, because of **fault tolerance**.
In case of instance failure it will lead to the 1M reconnect requests.
In the worst case scenario the MQTT clients will try to reconnect and auth immediately at the same time.
Sounds like self-made DDoS attack? Exactly!
That is not a good idea at all. 
You can try to spin up many small and cheap `ARM` arch instances like `c6g.medium` (1CPU/2Gi) for 26$ (or 13$ reserved for 3 year).
And put about 130k connections each. This may cut the costs down to 1$ per 10k devices for mqtt connectivity. 
You can try and share your experience with [ThingsBoard's community](https://github.com/thingsboard/thingsboard/issues).

## Million device

Scaling Transport node group up to 12 instances, core and rule engine up to 6.

```bash
eksctl scale nodegroup --cluster=performance-test --nodes=12 --nodes-max=12 transport-large
eksctl scale nodegroup --cluster=performance-test --nodes=6 --nodes-max=6 worker-xlarge
``` 

Applying hard (required) anti affinity and node selector for `tb-mqtt-transport` statefulset.

```yaml
spec:
  nodeSelector:
    role: transport
  affinity:
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        - labelSelector:
            matchExpressions:
              - key: app
                operator: In
                values:
                  - tb-mqtt-transport
          topologyKey: kubernetes.io/hostname
```

Memory setting for tb-mqtt-transport is 1 GiB only:
```yaml
JAVA_OPTS: "-Xmx1024M -Xms1024M -Xss256k -XX:+AlwaysPreTouch"
```

Scaling up ThingsBoard pods.

```bash
kubectl scale --replicas=12 sts tb-mqtt-transport
kubectl scale --replicas=6 sts tb-node tb-rule-engine
```

Check pods layout on nodes by roles:

```bash
kubectl get pods -o=custom-columns=ROLE:spec.nodeSelector.role,NODE:.spec.nodeName,POD:.metadata.name | tail +2 | sort
```

The summary cluster config:

| Node group | Instances (vCPU/Gi)    | Micro services         |
|------------|------------------------|------------------------|
| transport  | 12 * c6a.large (2/4)   | 12 * tb-mqtt-transport |
| worker     | 6 * m6a.xlarge (4/16)  | 6 * tb-core            |
|            |                        | 6 * tb-rule-engine     |
|            |                        | 6 * tb-js-executor     |
|            |                        | 6 * redis              |
| cassandra  | 3 * c6i.xlarge (4/8)   | 3 * cassandra          |
| postgresql | 2 * c6i.xlarge (4/8)   | 2 * postgresql         |
| pgpool     | 1 * c6a.2xlarge (8/16) | 1 * pgpool             |
| kafka      | 3 * c6i.large (2/4)    | 3 * kafka              |
|            |                        | 3 * zookeeper          |
|            |                        | 3 * tb-web-ui          |

Here are some fresh screenshots:

{% include images-gallery.html imageCollection="1million-5k-15k" %}

## Conclusion

...to be written soon