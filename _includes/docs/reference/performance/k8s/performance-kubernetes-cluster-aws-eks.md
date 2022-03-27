* TOC
  {:toc}

ThingsBoard has been run in production by numerous companies in both [monolithic](/docs/{{docsPrefix}}reference/monolithic/)
and [microservices](/docs/{{docsPrefix}}reference/msa/) deployment modes.

This article describes the performance of ThingsBoard microservices deployment in the most popular usage scenarios.
It is helpful to understand how ThingsBoard scales horizontally (cluster mode).

## Test methodology

For simplicity, we have deployed a ThingsBoard cluster on AWS Kubernetes cluster.
To simplify the 3rd party deployment (PostgreSQL, Cassandra, Kafka, Zookeeper, Redis) we are going to use the respective helm charts. 
The test agent provisions and connects a configurable number of device emulators that constantly publish time-series data over MQTT.

## Setting up a Kubernetes cluster on AWS

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

Create cluster with 3 nodes (m6a.2xlarge, 8 vCPU, 32GiB)
```bash
eksctl create cluster \
  --name performance-test \
  --region eu-west-1 \
  --nodegroup-name linux-amd64 \
  --node-volume-type gp3 \
  --storage-class gp3 \
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

Install [gp3 storage class on AWS EKS](https://docs.aws.amazon.com/eks/latest/userguide/managing-ebs-csi-self-managed-add-on.html) 

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
kubectl delete storageclass gp2
kubectl get storageclasses
```

Create namespace for ThingsBoard
```bash
kubectl config current-context
kubectl apply -f https://raw.githubusercontent.com/thingsboard/thingsboard-ce-k8s/master/aws/microservices/tb-namespace.yml
kubectl get namespaces
kubectl config set-context --current --namespace=thingsboard
kubectl get pods -o wide
```

Setup helm
```bash
sudo apt install helm
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm list
```

We are going to use Bitnami docker images and Bitnami helm charts as well.

Setup [Zookeeper cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/zookeeper/#installing-the-chart)
```bash
helm install zookeeper bitnami/zookeeper --version 9.0.0 --set replicaCount=3
```

Setup [Kafka cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/kafka)
```bash
helm install kafka bitnami/kafka --version 16.1.0 \
  --set replicaCount=3 \
  --set persistence.size=20Gi \
  --set zookeeper.enabled=false \
  --set externalZookeeper.servers=zookeeper-headless
```

Setup [Cassandra cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/cassandra)
```bash
helm install cassandra bitnami/cassandra --version 9.1.11 \
  --set replicaCount=3 \
  --set persistence.size=30Gi \
  --set cluster.name=cassandra \
  --set cluster.datacenter=datacenter1 \
  --set cluster.seedCount=3
```

Setup [Redis cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/redis-cluster)
```bash
helm install redis bitnami/redis-cluster --version 7.4.1 \
  --set cluster.nodes=6 \
  --set cluster.replicas=1 \
  --set redis.useAOFPersistence=no \
  --set fullnameOverride=redis
```

Setup [Postgres cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/postgresql-ha)
```bash
helm install postgresql bitnami/postgresql-ha --version 8.6.4 \
  --set postgresql.replicaCount=3 \
  --set postgresql.database=thingsboard \
  --set postgresql.maxConnections=120 \
  --set pgpool.replicaCount=1 \
  --set pgpool.numInitChildren=120 \
  --set persistence.size=30Gi \
  --set fullnameOverride=postgresql
```

Wait while all pods up and running
```bash
kubectl get pods
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


Setup tb-services:
tb-services.yml
```yaml

```
tb-db-setup.yml
```yaml

```

Persist common settings
```bash
kubectl apply -f tb-cm.yml
```

Install once the ThingsBoard schema
```bash
kubectl apply -f tb-db-setup.yml
kubectl logs -f tb-db-setup
kubectl delete pod tb-db-setup
```

Deploy ThingsBoard cluster
```bash
kubectl apply -f tb-services.yml
#kubectl scale --replicas=1 statefulset tb-node
#kubectl wait --for=condition=Ready pod/tb-node-0 --timeout=120s
#kubectl scale --replicas=1 statefulset tb-rule-engine
#kubectl wait --for=condition=Ready pod/tb-rule-engine-0 --timeout=120s
#kubectl scale --replicas=3 statefulset tb-node
#kubectl scale --replicas=3 statefulset tb-rule-engine
```

