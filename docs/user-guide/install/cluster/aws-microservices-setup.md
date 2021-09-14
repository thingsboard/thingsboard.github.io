---
layout: docwithnav
assignees:
- ashvayka
title: Microservices setup using AWS infrastructure
description: ThingsBoard IoT platform microservices setup with Kubernetes in AWS EKS

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in microservices mode in AWS EKS. 

## Prerequisites

{% include templates/install/aws-eks-prerequisites.md %}

## Step 1. Clone ThingsBoard CE K8S scripts repository

```bash
git clone https://github.com/thingsboard/thingsboard-ce-k8s.git
cd thingsboard-ce-k8s/aws/microservices
```

## Step 2. Set AWS account ID and cluster name 

You need to set `ACCOUNT_ID` and `CLUSTER_NAME` properties in `.env` file.
[Here](https://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html#FindingYourAWSId) a guide how to find your account ID.
Set `CLUSTER_NAME` to desired name of your ThingsBoard cluster.


## Step 3. Configure and create EKS cluster

In the `cluster.yml` file you can find suggested cluster configuration. 
Here are the fields you can change depending on your needs:
- `region` - should be the AWS region where you want your cluster to be located
- `availabilityZones` - should specify the exact IDs of the region's availability zones
- `instanceType` - the type of the instance with TB node

Command to create AWS cluster:
```
eksctl create cluster -f cluster.yml
```

After the cluster is ready you need to call this command to create `aws-load-balancer-controller`:
```
./aws-configure-cluster.sh
```

**Note:** You can delete AWS cluster with command:
```
eksctl delete cluster -r us-east-1 -n thingsboard-cluster -w
```

## Step 4. Amazon PostgreSQL DB Configuration

You'll need to set up PostgreSQL on Amazon RDS. 
One of the ways to do it is by following [this](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html) guide.
**Note**: Make sure your database is accessible from the cluster, one of the way to achieve this is to create 
the database in the same VPC and subnets as ThingsBoard cluster.
**Note**: Make sure that `thingsboard` database is created along with PostgreSQL instance (or create it afterwards).

On AWS Console get the `Endpoint` of the RDS PostgreSQL and paste it to `SPRING_DATASOURCE_URL` in the `tb-node-db-configmap.yml` instead of `your_url`.

**Note:** You should also change `username` and `password` fields.

## Step 5. Amazon MSK Configuration

You'll need to set up Amazon MSK. 
You can do it by following [this](https://docs.aws.amazon.com/msk/latest/developerguide/getting-started.html) guide.
**Note**: Make sure the configured security group allows access to the Kafka brokers from your ThingsBoard cluster. 
You can do it by setting Security Group ID of the ThingsBoard cluster in the inbound rules of Security Group of the Kafka cluster.

## Step 6. Amazon ElactiCache (Redis) Configuration

You'll need to set up Amazon ElastiCache (Redis).

**Note:** Make sure the configured security group allows access to the Redis cluster from your ThingsBoard cluster. 

For more detailed info please follow [this](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/GettingStarted.AuthorizeAccess.html) guide.

## Step 7. Configure links to the Kafka (Amazon MSK)/Redis/Postgres

You'll need to create Kafka, Redis and PostgreSQL in the same VPC as your ThingsBoard cluster 
and allow traffic between nodes of your cluster and Kafka/Redis/PostgreSQL.

### Amazon MSK

To get the list of brokers call the command:
```
aws kafka get-bootstrap-brokers --region us-east-1 --cluster-arn $CLUSTER_ARN
```
Where $CLUSTER_ARN is the Amazon Resource Name (ARN) of the MSK cluster.

You'll need to paste data from the `BootstrapBrokerString` to the `TB_KAFKA_SERVERS` environment variable in the `tb-kafka-configmap.yml` file.

### Amazon ElastiCache Redis

[Here](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/GettingStarted.ConnectToCacheNode.html) you can find information on how to get Redis endpoints.

You'll need to paste data from the `Reader Endpoint` to the `REDIS_HOST` environment variable in the `tb-redis-configmap.yml` file.

### Amazon RDS PostgreSQL

On AWS Console get the `Endpoint` of the RDS PostgreSQL and paste it to `SPRING_DATASOURCE_URL` in the `tb-node-db-configmap.yml` instead of `db_url_and_port`.

## Step 8. CPU and Memory resources allocation

The scripts have preconfigured values of resources for each service. You can change them in `.yml` files under `resources` submenu.

**Note**: if you want to allocate more resources you'll need to increase the number of Amazon nodes or use larger machines. 

Recommended CPU/memory resources allocation:
- TB Node: 1.5 CPU / 6Gi memory
- TB HTTP Transport: 0.5 CPU / 2Gi memory
- TB MQTT Transport: 0.5 CPU / 2Gi memory
- TB COAP Transport: 0.5 CPU / 2Gi memory
- TB Web UI: 0.3 CPU / 0.5Gi memory
- JS Executor: 0.1 CPU / 0.3Gi memory
- Zookeeper: 0.3 CPU / 1Gi memory

## Step 9. Installation

Execute the following command to run installation:
```
 ./k8s-install-tb.sh --loadDemo
```

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

## Step 10. Starting

Execute the following command to deploy resources:

```
 ./k8s-deploy-resources.sh
```

## Step 11. Using

Now you can open ThingsBoard web interface in your browser using DNS name of the load balancer.

You can see DNS name (the `ADDRESS` column) of the HTTP load-balancer using command:
```
kubectl get ingress
```

To connect to the cluster via MQTT or COAP you'll need to get corresponding service, you can do it with command:
```
kubectl get service
```

There are two load-balancers:
- tb-mqtt-loadbalancer-external - for MQTT protocol
- tb-coap-loadbalancer-external - for COAP protocol

Use `EXTERNAL-IP` field of the load-balancers to connect to the cluster.

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

If you installed DataBase with demo data (using `--loadDemo` flag) you can also use the following credentials:

- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

```
kubectl logs -f tb-node-0
```

Or use `kubectl get pods` to see the state of the pods.
Or use `kubectl get services` to see the state of all the services.
Or use `kubectl get deployments` to see the state of all the deployments.
See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for details.

Execute the following command to delete all ThingsBoard pods:

```
./k8s-delete-resources.sh
```

Execute the following command to delete all ThingsBoard pods and configmaps:

```
./k8s-delete-all.sh
```

## Upgrading

In case when database upgrade is needed, execute the following commands:

```
 ./k8s-delete-resources.sh
 ./k8s-upgrade-tb.sh --fromVersion=[FROM_VERSION]
 ./k8s-deploy-resources.sh
```

Where:

- `FROM_VERSION` - from which version upgrade should be started. See [Upgrade Instructions](/docs/user-guide/install/upgrade-instructions) for valid `fromVersion` values.

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
