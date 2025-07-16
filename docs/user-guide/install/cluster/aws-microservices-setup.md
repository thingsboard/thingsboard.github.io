---
layout: docwithnav
assignees:
- ashvayka
title: Microservices setup using AWS EKS
description: ThingsBoard IoT platform microservices setup with Kubernetes in AWS EKS

rdsSetup:
    0:
        image: https://img.thingsboard.io/install/cloud/aws/rds-1.png
        title: 'Make sure your PostgreSQL version is latest 16.x.'
    1:
        image: https://img.thingsboard.io/install/cloud/aws/rds-2.png
        title: 'Keep your PostgreSQL master password in a safe place. We will refer to it later in this guide using YOUR_RDS_PASSWORD.'
    2:
        image: https://img.thingsboard.io/install/cloud/aws/rds-3.png
        title: 'Use "Provisioned IOPS" for better performance.'
    3:
        image: https://img.thingsboard.io/install/cloud/aws/rds-4.png
        title: 'Make sure your PostgreSQL RDS instance is accessible from the ThingsBoard cluster; The easiest way to achieve this is to deploy the PostgreSQL RDS instance in the same VPC and use "eksctl-thingsboard-cluster-ClusterSharedNodeSecurityGroup-*" security group.'
    4:
        image: https://img.thingsboard.io/install/cloud/aws/rds-5.png
        title: 'Make sure you use "thingsboard" as initial database name.'
    5:
        image: https://img.thingsboard.io/install/cloud/aws/rds-6.png
        title: 'Disable "auto minor version update".'  

rdsEndpointUrl:
    0:
        image: https://img.thingsboard.io/install/cloud/aws/rds-endpoint-url.png
        title: 'Once the database switch to the "Available" state, navigate to the "Connectivity and Security" and copy the endpoint value. We will refer to it later in this guide using **YOUR_RDS_ENDPOINT_URL**.'

mskSetup:
    0:
        image: https://img.thingsboard.io/install/cloud/aws/msk-1.png
        title: 'Open the <b>AWS console</b>, go to <b>MSK</b> and click the "<b>Create Cluster</b>" button. Select "<b>Custom creation</b>" method. Specify a <b>name for your cluster</b> and select "<b>Cluster type</b>" - "<b>Provisioned</b>", which will allow you to specify the <b>number of brokers and storage volume</b>. Select <b>Apache Kafka version 3.8.x</b> to use <b>Express brokers</b> or <b>version 4.0.x</b> for <b>Standard brokers</b>.'
    1:
        image: https://img.thingsboard.io/install/cloud/aws/msk-2.png
        title: 'Choose <b>kafka.m7.large</b> or similar instance types.'
    2:
        image: https://img.thingsboard.io/install/cloud/aws/msk-3.png
        title: 'Select the <b>storage size</b> for the broker (with the default ThingsBoard partition settings, Kafka can use up to <b>100 GB</b>).'
    3:
        image: https://img.thingsboard.io/install/cloud/aws/msk-4.png
        title: 'Make sure your <b>MSK instance is accessible</b> from the <b>ThingsBoard cluster</b>. The easiest way to achieve this is by <b>deploying the MSK instance in the same VPC</b>.   
                We also recommend using <b>private subnets</b>, as this will make it virtually impossible to accidentally expose the instance to the <b>Internet</b>.'
    4:
        image: https://img.thingsboard.io/install/cloud/aws/msk-5.png
        title: 'Use the <b>default security settings</b>. Make sure that "<b>Plaintext" mode</b> is enabled.'
    5:
        image: https://img.thingsboard.io/install/cloud/aws/msk-6.png
        title: 'Use either the "<b>Basic monitoring</b>" or "<b>Enhanced topic-level monitoring</b>" settings.'
    
mskConnectionParams:
    0:
        image: https://img.thingsboard.io/install/cloud/aws/msk-connection-params-1.png
        title: 'Once the <b>MSK cluster</b> switches to the "<b>Active</b>" state, navigate to "<b>Details</b>" and click "<b>View client information</b>".'
    1:
        image: https://img.thingsboard.io/install/cloud/aws/msk-connection-params-2.png
        title: 'Copy the <b>bootstrap server information in plaintext</b> – this is your <b>Kafka endpoint</b>.'

redisSetup:
    0:
        image: https://img.thingsboard.io/install/cloud/aws/valkey-1.png
        title: 'Specify <b>Valkey Engine version 8.x</b> and node type with at least 1 GB of RAM.'
    1:
        image: https://img.thingsboard.io/install/cloud/aws/valkey-3.png
        title: 'Make sure your <b>Valkey cluster</b> is accessible from the <b>ThingsBoard cluster</b>. The easiest way to achieve this is by <b>deploying the Valkey cluster in the same VPC</b>. We also recommend using <b>private subnets</b>. Use your <b>group ID</b>.'
    2:
        image: https://img.thingsboard.io/install/cloud/aws/valkey-2.png
        title: 'Disable the "<b>Enable automatic backups</b>" option.'

redisEndpointUrl:
    0:
        image: https://img.thingsboard.io/install/cloud/aws/valkey-4.png
        title: 'Once the <b>Valkey cluster</b> switches to the "<b>Available" state</b>, navigate to the "<b>Details</b>" section and copy the "<b>Endpoint</b>" field <b>without the ":6379" port suffix</b> – this is the <b>Valkey endpoint</b> for ThingsBoard.'

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
git clone -b release-{{ site.release.ce_full_ver }} https://github.com/thingsboard/thingsboard-ce-k8s.git
cd thingsboard-ce-k8s/aws/microservices
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

### Step 4.2 Cassandra

{% include templates/install/aws/configure-cassandra.md %}

## Step 5. Amazon MSK Configuration (optional)

{% include templates/install/aws/msk-setup.md %}

## Step 6. Amazon ElastiCache Configuration (optional)

{% include templates/install/aws/redis-setup.md %}

## Step 7. CPU and Memory resources allocation

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

## Step 8. Installation

{% include templates/install/aws/eks-installation.md %}

## Step 9. Starting

Execute the following command to deploy ThingsBoard services:

```
 ./k8s-deploy-resources.sh
```
{: .copy-code}

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to see:

* 5x `tb-pe-js-executor`
* 2x `tb-pe-web-ui`
* 1x `tb-pe-node`
* 1x `tb-pe-web-report`
* 3x `zookeeper`.
  
Every pod should be in the `READY` state.

{% include templates/install/aws/start-transports.md %}

## Step 10. Configure Load Balancers

### 10.1 Configure HTTP(S) Load Balancer

{% include templates/install/aws/http-lb.md %}

### 10.2. Configure MQTT Load Balancer (Optional)

{% assign tbServicesFile = "tb-services.yml" %}
{% include templates/install/aws/configure-mqtt.md %}

### 10.3. Configure UDP Load Balancer (Optional)

{% include templates/install/aws/configure-udp.md %}

### 10.4. Configure Edge Load Balancer (Optional)

{% include templates/install/k8s-configure-edge-load-balancer.md %}

## Step 11. Validate the setup

{% include templates/install/aws/eks-validate.md %}

{% include templates/install/aws/eks-upgrading.md %}

{% include templates/install/aws/eks-deletion.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
