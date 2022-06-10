* TOC
  {:toc}

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
eksctl create cluster \
  --name performance-test \
  --region eu-west-1 \
  --nodegroup-name linux-amd64 \
  --node-volume-type gp3 \
  --node-type m6a.2xlarge \
  --nodes 3 \
  --nodes-min 2 \
  --nodes-max 4 \
  --ssh-access \
  --ssh-public-key smatvienko \
  --tags environment=performance-test,owner=smatvienko
```

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

gp3-def-sc.yaml
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

Delete legacy gp2 storage class
```bash
kubectl delete storageclass gp2
```

Check the storage class available
```bash
kubectl get storageclasses
```

### Create ThingsBoard's namespace

Create namespace for ThingsBoard
```bash
kubectl config current-context
kubectl apply -f https://raw.githubusercontent.com/thingsboard/thingsboard-ce-k8s/master/aws/microservices/tb-namespace.yml
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
helm upgrade zookeeper bitnami/zookeeper --version 9.0.0 \
  --set replicaCount=3 \
  --set persistence.size=1Gi \
  --set heapSize=192 \
  --set resources.limits.cpu=1 \
  --set resources.limits.memory=256Mi \
  --set resources.requests.cpu=100m \
  --set resources.requests.memory=256Mi
```

Setup [Kafka cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/kafka)
```bash
helm upgrade kafka bitnami/kafka --version 17.2.3 \
  --set replicaCount=3 \
  --set persistence.size=20Gi \
  --set zookeeper.enabled=false \
  --set externalZookeeper.servers=zookeeper-headless
```

Setup [Cassandra cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/cassandra)
```bash
helm install cassandra bitnami/cassandra --version 9.1.11 \
  --set replicaCount=3 \
  --set persistence.size=100Gi \
  --set persistence.commitLogsize=2Gi \
  --set persistence.commitLogMountPath=/bitnami/cassandra/commitlog \
  --set persistence.commitStorageClass=gp3 \
  --set cluster.name=cassandra \
  --set cluster.datacenter=datacenter1 \
  --set cluster.seedCount=3 \
  --set jvm.maxHeapSize=4096M \
  --set jvm.newHeapSize=800M \
  --set resources.limits.cpu=8 \
  --set resources.limits.memory=8Gi \
  --set resources.requests.cpu=1 \
  --set resources.requests.memory=8Gi
```

Setup [Redis cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/redis-cluster)
```bash
helm upgrade redis bitnami/redis-cluster --version 7.4.1 \
  --set cluster.nodes=6 \
  --set cluster.replicas=1 \
  --set redis.useAOFPersistence=no \
  --set fullnameOverride=redis \
  --set redis.resources.limits.memory=2Gi \
  --set redis.resources.requests.cpu=100m \
  --set redis.resources.requests.memory=1Gi
```

Setup [Postgres cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/postgresql-ha)
```bash
helm upgrade postgresql  bitnami/postgresql-ha --version 9.1.2 \
  --set postgresql.replicaCount=3 \
  --set postgresql.database=thingsboard \
  --set postgresql.maxConnections=250 \
  --set postgresql.sharedPreloadLibraries='pgaudit\,repmgr\,pg_stat_statements' \
  --set pgpool.replicaCount=1 \
  --set pgpool.numInitChildren=110 \
  --set pgpool.useLoadBalancing=false \
  --set pgpool.extraEnvVars[0].name=PGPOOL_AUTO_FAILBACK \
  --set pgpool.extraEnvVars[0].value=yes \
  --set pgpool.extraEnvVars[1].name=PGPOOL_BACKEND_APPLICATION_NAMES \
  --set pgpool.extraEnvVars[1].value='postgresql-postgresql-0\,postgresql-postgresql-1\,postgresql-postgresql-2' \
  --set persistence.size=30Gi \
  --set postgresqlImage.debug=true \
  --set pgpoolImage.debug=true \
  --set fullnameOverride=postgresql \
  --set postgresql.resources.limits.memory=4Gi \
  --set postgresql.resources.requests.cpu=1 \
  --set postgresql.resources.requests.memory=4Gi \
  --set pgpool.resources.limits.cpu=3 \
  --set pgpool.resources.limits.memory=3Gi \
  --set pgpool.resources.requests.cpu=100m \
  --set pgpool.resources.requests.memory=1Gi \
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
kubectl exec kafka-0 -- /opt/bitnami/kafka/bin/zookeeper-shell.sh zookeeper-headless:2181 ls /brokers/ids | tail -n 1
```
Zookeeper will return the list with broker ids.
```bash
[0, 1, 2]
```

Check that Cassandra cluster is up and running
```bash
kubectl exec cassandra-0 -- nodetool status
```
All 3 nodes have to be present in the list and have a status UN (Up Normal)
```bash
Datacenter: datacenter1
=======================
Status=Up/Down
|/ State=Normal/Leaving/Joining/Moving
--  Address         Load       Tokens  Owns (effective)  Host ID                               Rack 
UN  192.168.32.8    98.23 KiB  256     30.9%             dfc50a97-881e-4f19-8a82-904f4457c69b  rack1
UN  192.168.64.96   98.26 KiB  256     34.0%             150c23b2-52fc-4b0c-936e-78c192ab7628  rack1
UN  192.168.28.238  98.23 KiB  256     35.2%             8020a3ea-b242-4915-bed9-d4a2e06cd7aa  rack1
```

Check the Redis cluster is up and running
```bash
kubectl exec redis-0 -- redis-cli cluster info
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
postgresql-repmgr 08:53:55.54 
postgresql-repmgr 08:53:55.54 Welcome to the Bitnami postgresql-repmgr container
postgresql-repmgr 08:53:55.54 Subscribe to project updates by watching https://github.com/bitnami/bitnami-docker-postgresql-repmgr
postgresql-repmgr 08:53:55.54 Submit issues and feature requests at https://github.com/bitnami/bitnami-docker-postgresql-repmgr/issues
postgresql-repmgr 08:53:55.54 

 ID   | Name                    | Role    | Status    | Upstream                | Location | Priority | Timeline | Connection string                                                                                                                                                  
------+-------------------------+---------+-----------+-------------------------+----------+----------+----------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------
 1000 | postgresql-postgresql-0 | primary | * running |                         | default  | 100      | 1        | user=repmgr password=fdArM4aFOW host=postgresql-postgresql-0.postgresql-postgresql-headless.thingsboard.svc.cluster.local dbname=repmgr port=5432 connect_timeout=5
 1001 | postgresql-postgresql-1 | standby |   running | postgresql-postgresql-0 | default  | 100      | 1        | user=repmgr password=fdArM4aFOW host=postgresql-postgresql-1.postgresql-postgresql-headless.thingsboard.svc.cluster.local dbname=repmgr port=5432 connect_timeout=5
 1002 | postgresql-postgresql-2 | standby |   running | postgresql-postgresql-0 | default  | 100      | 1        | user=repmgr password=fdArM4aFOW host=postgresql-postgresql-2.postgresql-postgresql-headless.thingsboard.svc.cluster.local dbname=repmgr port=5432 connect_timeout=5
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
  TB_QUEUE_KAFKA_JE_TOPIC_PROPERTIES: "retention.ms:604800000;segment.bytes:26214400;retention.bytes:104857600;partitions:6" # have to be equal tb-js-executor replicas count
  TB_QUEUE_CORE_PARTITIONS: "6"
  TB_QUEUE_RE_MAIN_PARTITIONS: "6"
  TB_QUEUE_RE_HP_PARTITIONS: "6"
  TB_QUEUE_RE_SQ_PARTITIONS: "6"
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
  namespace: thingsboard
spec:
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
      imagePullPolicy: IfNotPresent
      image: thingsboard/tb-node:3.3.4.1
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
kubectl apply -f tb-db-setup.yml && sleep 30 && kubectl logs -f tb-db-setup && kubectl delete pod tb-db-setup
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
  replicas: 3
  selector:
    matchLabels:
      app: tb-node
  template:
    metadata:
      labels:
        app: tb-node
    spec:
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
        - name: tb-node
          imagePullPolicy: Always
          image: sevlamat/tb-node:3.3.4-SNAPSHOT
          ports:
            - containerPort: 8080
              name: http
            - containerPort: 7070
              name: edge
          resources:
            limits:
#              cpu: 8
              memory: 4Gi
            requests:
              cpu: 1
              memory: 3Gi
          env:
            - name: JAVA_OPTS
              value: "-Xmx3072M -Xms3072M -Xss384k -XX:+AlwaysPreTouch -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
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
          readinessProbe:
            httpGet:
              path: /login
              port: http
          livenessProbe:
            httpGet:
              path: /login
              port: http
            initialDelaySeconds: 460
            timeoutSeconds: 10
      restartPolicy: Always
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: tb-rule-engine
spec:
  serviceName: tb-rule-engine
  replicas: 3
  selector:
    matchLabels:
      app: tb-rule-engine
  template:
    metadata:
      labels:
        app: tb-rule-engine
    spec:
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
        - name: tb-rule-engine
          imagePullPolicy: Always
          image: sevlamat/tb-node:3.3.4-SNAPSHOT
          ports:
            - containerPort: 8080
              name: http
            - containerPort: 7070
              name: edge
          resources:
            limits:
#              cpu: 8
              memory: 6Gi
            requests:
              cpu: 1
              memory: 4Gi
          env:
            - name: JAVA_OPTS
              value: "-Xmx4096M -Xms4096M -Xss384k -XX:+AlwaysPreTouch -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
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
          readinessProbe:
            httpGet:
              path: /login
              port: http
          livenessProbe:
            httpGet:
              path: /login
              port: http
            initialDelaySeconds: 460
            timeoutSeconds: 10
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
        imagePullPolicy: IfNotPresent
        image: thingsboard/tb-web-ui:3.3.4.1
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
  podManagementPolicy: "Parallel"
  selector:
    matchLabels:
      app: tb-js-executor
  template:
    metadata:
      labels:
        app: tb-js-executor
    spec:
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
          imagePullPolicy: IfNotPresent
          image: thingsboard/tb-js-executor:3.3.4.1
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
                  fieldPath: metadata.name
          envFrom:
            - configMapRef:
                name: tb-cluster-stack-config
          readinessProbe:
            httpGet:
              path: /livenessProbe
              port: http
            initialDelaySeconds: 10
            timeoutSeconds: 1
            periodSeconds: 10
            successThreshold: 1
            failureThreshold: 7
          livenessProbe:
            httpGet:
              path: /livenessProbe
              port: http
            initialDelaySeconds: 15
            timeoutSeconds: 1
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

cat > tb-mqtt-transport.yml
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
          image: thingsboard/tb-mqtt-transport:3.3.4.1
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 1883
              name: mqtt
            - containerPort: 8883
              name: mqtts
          resources:
            limits:
#              cpu: 8
              memory: 3Gi
            requests:
              cpu: 100m
              memory: 1Gi
          env:
            - name: JAVA_OPTS
              value: "-Xmx2048M -Xms2048M -Xss384k -XX:+AlwaysPreTouch -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
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
            periodSeconds: 20
            tcpSocket:
              port: 1883
---
```
Apply MQTT transport config
```bash
kubectl apply -f tb-mqtt-transport.yml
```


Create Connector Role to observer ESK dashboards
https://docs.aws.amazon.com/eks/latest/userguide/connector_IAM_role.html#create-connector-role

kubectl apply -f https://s3.us-west-2.amazonaws.com/amazon-eks/docs/eks-console-full-access.yaml

eksctl get iamidentitymapping --cluster performance-test --region=eu-west-1

# Daemon set to tune the network

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
      hostPID: true
      containers:
        - name: sysctl-buddy
          image: ubuntu:20.04
          securityContext:
            privileged: true
          command:
            - /bin/sh
            - -c
            - |
              echo "tuning the network parameters"
              ulimit -n 1048576
              sysctl -a | grep conntrack_max
              sysctl -w net.netfilter.nf_conntrack_max=1048576
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
  --role-name "AmazonEKSLoadBalancerControllerRole" \
  --attach-policy-arn=arn:aws:iam::378560561651:policy/AWSLoadBalancerControllerIAMPolicy \
  --approve
helm repo add eks https://aws.github.io/eks-charts
helm repo update
helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
  -n kube-system \
  --set clusterName=performance-test \
  --set serviceAccount.create=false \
  --set serviceAccount.name=aws-load-balancer-controller \
  --set image.repository=602401143452.dkr.ecr.eu-west-1.amazonaws.com/amazon/aws-load-balancer-controller
kubectl get deployment -n kube-system aws-load-balancer-controller
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
```

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

# Small performance test

```bash
# Put your ThingsBoard private IP address here, assuming both ThingsBoard and performance tests EC2 instances are in same VPC.
export REST_URL=http://k8s-thingsbo-tbhttplo-784e0efb43-1020620715.eu-west-1.elb.amazonaws.com:80
export MQTT_HOST=a1435f2586389421f82397b52b690867-b454cc0b7f996e3b.elb.eu-west-1.amazonaws.com
docker run -it --rm --network host --name tb-perf-test \
  --env REST_URL=http://127.0.0.1:8080 \
  --env MQTT_HOST=127.0.0.1 \
  --env DEVICE_END_IDX=1000 \
  --env MESSAGES_PER_SECOND=1000 \
  --env ALARMS_PER_SECOND=5 \
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
      containers:
        - name: server
          imagePullPolicy: IfNotPresent
          image: quay.io/cloudhut/kowl:master
          resources:
            requests:
#              cpu: 200m
              memory: 200Mi
            limits:
              cpu: 1
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

kubectl apply -f tb-kafka-ui-kowl.yml

If Kafka UI does not need, scale it down:

kubectl scale --replicas=0 statefulset tb-kafka-ui-kowl

oc rsh postgresql-postgresql-0 /opt/bitnami/scripts/postgresql-repmgr/entrypoint.sh repmgr -f /opt/bitnami/repmgr/conf/repmgr.conf cluster show
oc port-forward postgresql-postgresql-1 54321:5432

export POSTGRES_PASSWORD=$(kubectl get secret --namespace thingsboard postgresql-postgresql -o jsonpath="{.data.postgresql-password}" | base64 -d)

CLUSTER VERBOSE ts_kv_latest USING ts_kv_latest_pkey;

INFO:  clustering "public.ts_kv_latest" using index scan on "ts_kv_latest_pkey"
INFO:  "ts_kv_latest": found 695932 removable, 6464658 nonremovable row versions in 81269 pages
DETAIL:  2 dead row versions cannot be removed yet.
CPU: user: 10.84 s, system: 20.92 s, elapsed: 62.94 s.
CLUSTER

Query returned successfully in 1 min 11 secs.

SELECT calls, * FROM public.pg_stat_statements
ORDER BY  calls DESC LIMIT 100;


SELECT calls, mean_exec_time, max_exec_time, * FROM public.pg_stat_statements
ORDER BY  calls DESC LIMIT 100;

--SELECT pg_stat_statements_reset();