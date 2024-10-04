---
layout: docwithnav-pe
assignees:
- ashvayka
title: Microservices setup using AWS infrastructure
description: ThingsBoard IoT platform microservices setup with Kubernetes in AWS EKS 

rdsSetup:
    0:
        image: /images/install/cloud/aws/rds-1.png
        title: 'Make sure your PostgreSQL version is latest 16.x.'
    1:
        image: /images/install/cloud/aws/rds-2.png
        title: 'Keep your PostgreSQL master password in a safe place. We will refer to it later in this guide using YOUR_RDS_PASSWORD.'
    2:
        image: /images/install/cloud/aws/rds-3.png
        title: 'Use "Provisioned IOPS" for better performance.'
    3:
        image: /images/install/cloud/aws/rds-4.png
        title: 'Make sure your PostgreSQL RDS instance is accessible from the ThingsBoard cluster; The easiest way to achieve this is to deploy the PostgreSQL RDS instance in the same VPC and use "eksctl-thingsboard-cluster-ClusterSharedNodeSecurityGroup-*" security group.'
    4:
        image: /images/install/cloud/aws/rds-5.png
        title: 'Make sure you use "thingsboard" as initial database name.'
    5:
        image: /images/install/cloud/aws/rds-6.png
        title: 'Disable "auto minor version update".'  

rdsEndpointUrl:
    0:
        image: /images/install/cloud/aws/rds-endpoint-url.png
        title: 'Once the database switch to the "Available" state, navigate to the "Connectivity and Security" and copy the endpoint value. We will refer to it later in this guide using **YOUR_RDS_ENDPOINT_URL**.'

mskSetup:
    0:
        image: /images/install/cloud/aws/msk-1.png
        title: 'Make sure your Apache Kafka version is 3.7.x.'
    1:
        image: /images/install/cloud/aws/msk-2.png
        title: 'Make sure your MSK instance is accessible from the ThingsBoard cluster. The easiest way to achieve this is to deploy the MSK instance in the same VPC. We also recommend to use private subnets. This way it will be nearly impossible to accidentally expose it to the internet.'
    2:
        image: /images/install/cloud/aws/msk-3.png
        title: 'Use m5.large or similar instance types.'
    3:
        image: /images/install/cloud/aws/msk-4.png
        title: 'Choose default security settings. Make sure "Plaintext" mode is enabled.'
    4:
        image: /images/install/cloud/aws/msk-5.png
        title: 'Use default "Monitoring" settings or enable "Enhenced topic level monitoring".'

mskConnectionParams:
    0:
        image: /images/install/cloud/aws/msk-connection-params.png
        title: 'Once the MSK cluster switch to the "Active" state, navigate to "Details" and click "View client information".'
    1:
        image: /images/install/cloud/aws/msk-connection-params2.png
        title: 'Copy bootstrap server information in plaintext. We will refer to it later in this guide using **YOUR_MSK_BOOTSTRAP_SERVERS_PLAINTEXT**.'

redisSetup:
    0:
        image: /images/install/cloud/aws/redis-single-1.png
        title: 'Specify Redis Engine version 7.x and node type with at least 1 GB of RAM.'
    1:
        image: /images/install/cloud/aws/redis-single-2.png
        title: 'Make sure your Redis cluster is accessible from the ThingsBoard cluster. The easiest way to achieve this is to deploy the Redis cluster in the same VPC. We also recommend to use private subnets. Use "eksctl-thingsboard-cluster-ClusterSharedNodeSecurityGroup-*" security group.'
    2:
        image: /images/install/cloud/aws/redis-single-3.png
        title: 'Disable automatic backups.'

redisEndpointUrl:
    0:
        image: /images/install/cloud/aws/redis-endpoint-url.png
        title: 'Once the Redis cluster switch to the "Available" state, navigate to "Details" and copy "Primary Endpoint" without ":6379" port sufix. We will refer to it later in this guide using **YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT**.'


---

* TOC
{:toc}

{% assign tbServicesFile = "tb-services.yml" %}

This guide will help you to setup ThingsBoard in microservices mode in AWS EKS. 

## Prerequisites

{% include templates/install/aws/eks-prerequisites.md %}

### Pull ThingsBoard PE images from docker hub

{% include templates/install/dockerhub/checkout.md %}

## Step 1. Clone ThingsBoard PE K8S scripts repository

```bash
git clone -b release-{{ site.release.ver }} https://github.com/thingsboard/thingsboard-pe-k8s.git --depth 1
cd thingsboard-pe-k8s/aws/microservices
```
{: .copy-code}

## Step 2. Configure and create EKS cluster

{% assign eksNote = "**3** nodes of type **m5.xlarge**" %}
{% include templates/install/aws/eks-create-cluster.md %}

## Step 3. Create AWS load-balancer controller

{% include templates/install/aws/eks-lb-controller.md %}

## Step 4. Provision Databases

### Step 4.1 Amazon PostgreSQL DB Configuration

{% include templates/install/aws/rds-setup.md %}

### Step 4.2 Cassandra (optional)

{% include templates/install/aws/configure-cassandra.md %}

## Step 5. Amazon MSK Configuration

{% include templates/install/aws/msk-setup.md %}

## Step 6. Amazon ElastiCache (Redis) Configuration

{% include templates/install/aws/redis-setup.md %}

## Step 7. Configure links to the Kafka (Amazon MSK)/Redis/Postgres

{% include templates/install/aws/links.md %}

## Step 8. Obtain and configure license key

{% include templates/install/k8s-license-secret.md %}

## Step 9. CPU and Memory resources allocation

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

## Step 10. Installation

{% include templates/install/aws/eks-installation.md %}

## Step 11. Starting

Execute the following command to deploy ThingsBoard services:

```
 ./k8s-deploy-resources.sh
```
{: .copy-code}

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to see:

* 5x `tb-js-executor`
* 1x `tb-node` (We setup one node by default, you may scale it to many nodes if you have additional instances attached to your license key)
* 2x `tb-web-ui`
* 3x `zookeeper`.

Every pod should be in the `READY` state.

{% include templates/install/aws/start-transports.md %}

## Step 12. Configure Load Balancers

### 12.1 Configure HTTP(S) Load Balancer

{% include templates/install/aws/http-lb.md %}

### 12.2. Configure MQTT Load Balancer (Optional)

{% assign tbServicesFile = "tb-services.yml" %}
{% include templates/install/aws/configure-mqtt.md %}

### 12.3. Configure UDP Load Balancer (Optional)

{% include templates/install/aws/configure-udp.md %}

### 12.4. Configure Edge Load Balancer (Optional)

{% include templates/install/k8s-configure-edge-load-balancer.md %}

## Step 13. Validate the setup

{% include templates/install/aws/eks-validate.md %}

{% include templates/install/aws/eks-upgrading.md %}

{% include templates/install/aws/eks-deletion.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
