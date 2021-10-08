---
layout: docwithnav
assignees:
- ashvayka
title: Microservices setup using AWS EKS
description: ThingsBoard IoT platform microservices setup with Kubernetes in AWS EKS 
rdsSetup:
    0:
        image: /images/install/cloud/aws/rds-1.png  
        title: 'Make sure your PostgreSQL version is latest 12.x, not 13.x yet.'
    1:
        image: /images/install/cloud/aws/rds-2.png  
        title: 'Keep your PosgreSQL master password in a safe place. We will refer to it later in this guide using YOUR_RDS_PASSWORD'
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
        title: 'Make sure your Apache Kafka version is 2.6.x.'
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
        title: 'Specify Redis Engine version 6.x and node type with at least 1 GB of RAM.'
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

This guide will help you to setup ThingsBoard in microservices mode using AWS EKS. 
See [microservices](/docs/reference/msa/) architecture page for more details about each component that will be installed.
We will use Amazon RDS for managed PostgreSQL, Amazon MSK for managed Kafka and Amazon ElastiCache for managed Redis.

## Prerequisites

{% include templates/install/aws/eks-prerequisites.md %}

## Step 1. Clone ThingsBoard CE K8S scripts repository

```bash
git clone https://github.com/thingsboard/thingsboard-ce-k8s.git
cd thingsboard-ce-k8s/aws/microservices
```

## Step 2. Configure and create EKS cluster

{% assign eksNote = "**3** nodes of type **m5.xlarge**" %}
{% include templates/install/aws/eks-create-cluster.md %}

## Step 3. Create AWS load-balancer controller

{% include templates/install/aws/eks-lb-controller.md %}

## Step 4. Amazon PostgreSQL DB Configuration

{% include templates/install/aws/rds-setup.md %}

## Step 5. Amazon MSK Configuration

You'll need to set up Kafka using Amazon MSK. ThingsBoard will use it to communicate between microservices, store unprocessed messages, etc.
Kafka is useful to survive peak loads and hardware failures to make sure that all messages from devices will be processed.

Please open AWS console and navigate to MSK, press `Create cluster` button and choose `Custom create` mode.

* Make sure your Apache Kafka version is 2.6.x;
* Make sure your MSK instance is accessible from the ThingsBoard cluster.
  The easiest way to achieve this is to deploy the MSK instance in the same VPC. 
  We also recommend to use private subnets. This way it will be nearly impossible to accidentally expose it to the internet;
* Use m5.large or similar instance types;
* Choose default security settings. Make sure 'Plaintext' mode is enabled;
* Use default 'Monitoring' settings or enable 'Enhenced topic level monitoring'. 

{% include images-gallery.html imageCollection="mskSetup"%}

Once the MSK cluster switch to the 'Active' state, navigate to 'Details' and click 'View client information'. 
Copy bootstrap server information in plaintext.
We will refer to it later in this guide using **YOUR_MSK_BOOTSTRAP_SERVERS_PLAINTEXT**.

{% include images-gallery.html imageCollection="mskConnectionParams"%}

## Step 6. Amazon ElactiCache (Redis) Configuration

You'll need to set up [Amazon ElastiCache (Redis)](https://aws.amazon.com/elasticache/redis/). ThingsBoard uses cache to improve performance and avoid frequent DB reads.

Please open AWS console and navigate to ElastiCache->Redis->Create.

* Specify Redis Engine version 6.x and node type with at least 1 GB of RAM;
* Make sure your Redis cluster is accessible from the ThingsBoard cluster. The easiest way to achieve this is to deploy the Redis cluster in the same VPC. We also recommend to use private subnets. Use "eksctl-thingsboard-cluster-ClusterSharedNodeSecurityGroup-*" security group; 
* Disable automatic backups.

{% include images-gallery.html imageCollection="redisSetup"%}

Once the Redis cluster switch to the 'Available' state, navigate to 'Details' and copy 'Primary Endpoint' without ':6379' port sufix. 
We will refer to it later in this guide using **YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT**.

{% include images-gallery.html imageCollection="redisEndpointUrl"%}

## Step 7. Configure links to the Kafka (Amazon MSK)/Redis/Postgres

Edit "tb-node-db-configmap.yml" and replace **YOUR_RDS_ENDPOINT_URL** and **YOUR_RDS_PASSWORD** with the values you have obtained during [step 4](#step-4-amazon-postgresql-db-configuration).

Edit "tb-kafka-configmap.yml" and replace **YOUR_MSK_BOOTSTRAP_SERVERS_PLAINTEXT** with the values you have obtained during [step 5](#step-5-amazon-msk-configuration).

Edit "tb-redis-configmap.yml" and replace **YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT** with the values you have obtained during [step 6](#step-6-amazon-elacticache-redis-configuration).

## Step 8. Configure HTTPS (Optional)

{% include templates/install/aws/configure-https.md %}

## Step 9. Configure MQTTS (Optional)

{% assign eksTbServicesFile = "tb-services.yml" %}
{% include templates/install/aws/configure-mqtts.md %}

## Step 10. CPU and Memory resources allocation

The scripts have preconfigured values of resources for each service. You can change them in `.yml` files under `resources` submenu.

**Note**: if you want to allocate more resources you'll need to increase the number of Amazon nodes or use larger machines. 

Recommended CPU/memory resources allocation:
- TB Node: 1.0 CPU / 2Gi memory
- TB HTTP Transport: 0.5 CPU / 0.5Gi memory
- TB MQTT Transport: 0.5 CPU / 0.5Gi memory
- TB COAP Transport: 0.5 CPU / 0.5Gi memory
- TB Web UI: 0.1 CPU / 100Mi memory
- JS Executor: 0.1 CPU / 100Mi memory
- Zookeeper: 0.1 CPU / 0.5Gi memory

## Step 11. Installation

{% include templates/install/aws/eks-installation.md %}

## Step 12. Starting

Execute the following command to deploy ThingsBoard services:

```
 ./k8s-deploy-resources.sh
```
{: .copy-code}

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to see:

* 3x `tb-coap-transport`
* 3x `tb-http-transport`
* 3x `tb-mqtt-transport`
* 5x `tb-js-executor`
* 3x `tb-node`
* 2x `tb-web-ui`
* 3x `zookeeper`.
  
Every pod should be in the `READY` state. 

## Step 13. Validate the setup

{% include templates/install/aws/eks-validate.md %}

{% include templates/install/aws/eks-upgrading.md %}

{% include templates/install/aws/eks-deletion.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
