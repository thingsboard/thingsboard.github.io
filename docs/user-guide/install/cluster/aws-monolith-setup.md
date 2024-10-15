---
layout: docwithnav
assignees:
- ashvayka
title: Monolith setup using AWS EKS
description: ThingsBoard IoT platform monolith setup with Kubernetes in AWS EKS
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
---

* TOC
{:toc}

{% assign tbServicesFile = "tb-node.yml" %}

This guide will help you to setup ThingsBoard in monolith mode using AWS EKS. 
See [monolithic](/docs/reference/monolithic/) architecture page for more details about how it works. 
The advantage of monolithic deployment via K8S comparing to Docker Compose is that in case of AWS instance outage, 
K8S will restart the service on another instance. We will use Amazon RDS for managed PostgreSQL.

## Prerequisites

{% include templates/install/aws/eks-prerequisites.md %}

## Step 1. Clone ThingsBoard CE K8S scripts repository

```bash
git clone -b release-{{ site.release.ver }} https://github.com/thingsboard/thingsboard-ce-k8s.git
cd thingsboard-ce-k8s/aws/monolith
```

## Step 2. Configure and create EKS cluster

{% assign eksNote = "**1** node of type **m5.xlarge**" %}
{% include templates/install/aws/eks-create-cluster.md %}

## Step 3. Create AWS load-balancer controller

{% include templates/install/aws/eks-lb-controller.md %}

## Step 4. Provision Databases

### Step 4.1 Amazon PostgreSQL DB Configuration

{% include templates/install/aws/rds-setup.md %}

### Step 4.2 Cassandra (optional)

{% include templates/install/aws/configure-cassandra.md %}

## Step 5. Installation

{% include templates/install/aws/eks-installation.md %}

## Step 6. Starting

Execute the following command to deploy resources:

```
 ./k8s-deploy-resources.sh
```
{: .copy-code}

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to 
see `tb-node-0` pod in the `READY` state.

## Step 7. Configure Load Balancers

### 7.1 Configure HTTP(S) Load Balancer

{% include templates/install/aws/http-lb.md %}

### 7.2. Configure MQTT Load Balancer (Optional)

{% include templates/install/aws/configure-mqtt.md %}

### 7.3. Configure UDP Load Balancer (Optional)

{% include templates/install/aws/configure-udp.md %}

### 7.4. Configure Edge Load Balancer (Optional)

{% include templates/install/k8s-configure-edge-load-balancer.md %}

## Step 8. Validate the setup

{% include templates/install/aws/eks-validate.md %}

{% include templates/install/aws/eks-upgrading.md %}

{% include templates/install/aws/eks-deletion.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
