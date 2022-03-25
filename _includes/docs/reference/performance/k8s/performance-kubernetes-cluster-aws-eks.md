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
  --nodes 3
```
