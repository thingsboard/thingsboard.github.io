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
  --name perf-cluster \
  --region eu-west-1 \
  --nodegroup-name linux-amd64 \
  --node-type m6a.2xlarge \
  --tags environment=performance-test \
  --nodes 3
```

Check the cluster
```bash
kubectl get nodes
```

Switch context between clusters (like local minikube and remote AWS ECS)
```bash
kubectl config get-contexts
kubectl config use-context minikube
kubectl config use-context aws-cli-user@perf-cluster.eu-west-1.eksctl.io
```

Create namespace ThingsBoard and check the 
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
  --set externalZookeeper.servers=zookeeper
```

Setup [Cassandra cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/cassandra)
```bash
helm install cassandra bitnami/cassandra --version 9.1.11 \
  --set replicaCount=3 \
  --set persistence.size=30Gi
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
  --set pgpool.replicaCount=1 \
  --set persistence.size=30Gi \
  --set postgresql.database=thingsboard \
  --set fullnameOverride=postgresql
```
