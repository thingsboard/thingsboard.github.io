---
layout: docwithnav
assignees:
- ashvayka
title: Microservices custom setup using AWS infrastructure
description: ThingsBoard IoT platform microservices custom setup with Kubernetes in AWS EKS

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in microservices custom mode in AWS EKS. 

## Prerequisites

{% include templates/install/aws-eks-prerequisites.md %}

## Step 1. Clone ThingsBoard CE K8S scripts repository

```bash
git clone https://github.com/thingsboard/thingsboard-ce-k8s.git
cd thingsboard-ce-k8s/aws/custom-microservices
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

## Step 4. CPU and Memory resources allocation

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
- Kafka: 1 CPU / 4Gi memory
- Redis: 0.3 CPU / 1.2Gi memory
- PostgreSQL: 0.8 CPU / 3.2Gi memory

## Step 5. Installation

Execute the following command to run installation:
```
 ./k8s-install-tb.sh --loadDemo
```

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

## Step 6. Starting

Execute the following command to deploy third-party resources:

```
./k8s-deploy-thirdparty.sh
```

Execute the following command to deploy ThingsBoard resources:

```
./k8s-deploy-resources.sh
```

## Step 7. Using

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

Execute the following command to delete all third-party pods:

```
./k8s-delete-thirdparty.sh
```

Execute the following command to delete all resources including the database:

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
