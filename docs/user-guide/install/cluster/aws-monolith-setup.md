---
layout: docwithnav
assignees:
- ashvayka
title: Monolith setup using AWS EKS
description: ThingsBoard IoT platform monolith setup with Kubernetes in AWS EKS
rdsSetup:
    0:
        image: /images/install/cloud/aws/rds-1.png
        title: 'Make sure your PostgreSQL version is latest 12.x, not 13.x yet.'
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

This guide will help you to setup ThingsBoard in monolith mode using AWS EKS. 
See [monolithic](/docs/reference/monolithic/) architecture page for more details about how it works. 
The advantage of monolithic deployment via K8S comparing to Docker Compose is that in case of AWS instance outage, 
K8S will restart the service on another instance. We will use Amazon RDS for managed PostgreSQL.

## Prerequisites

{% include templates/install/aws/eks-prerequisites.md %}

## Step 1. Clone ThingsBoard CE K8S scripts repository

```bash
git clone https://github.com/thingsboard/thingsboard-ce-k8s.git
cd thingsboard-ce-k8s/aws/monolith
```

## Step 2. Configure and create EKS cluster

{% assign eksNote = "**1** node of type **m5.xlarge**" %}
{% include templates/install/aws/eks-create-cluster.md %}

## Step 3. Create AWS load-balancer controller

{% include templates/install/aws/eks-lb-controller.md %}

## Step 4. Amazon PostgreSQL DB Configuration

You'll need to set up PostgreSQL on Amazon RDS. 
One of the ways to do it is by following [this](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html) guide.

**Note**: Make sure your database is accessible from the cluster, one of the way to achieve this is to create 
the database in the same VPC and subnets as ThingsBoard cluster.

Here you should choose VPC with the name of your cluster:

![image](/images/install/cloud/aws-rds-connectivity-vpc.png)

Here you should choose security group corresponding to the one on the screen:

![image](/images/install/cloud/aws-rds-connectivity-security-group.png)

**Note**: in order to make PostgreSQL more secure you may create the separate security group, 
configure access only to the 5432 port and from the ThingsBoard nodes.
This can be achieved if you assigned security group to the `node` node-group in the `cluster.yml` file. 

Make sure that `thingsboard` database is created along with PostgreSQL instance (or create it afterwards).

![image](/images/install/cloud/aws-rds-default-database.png)

On AWS Console get the `Endpoint` of the RDS PostgreSQL and paste it to `SPRING_DATASOURCE_URL` in the `tb-node-db-configmap.yml` instead of `your_url`:

![image](/images/install/cloud/aws-postgres-endpoint.png)

Also, you'll need to set `SPRING_DATASOURCE_USERNAME` and `SPRING_DATASOURCE_PASSWORD` with PostgreSQL `username` and `password` corresponding.

## Step 5. Configure HTTPS (Optional)

{% include templates/install/aws/configure-https.md %}

## Step 6. Configure MQTTS (Optional)

{% assign eksTbServicesFile = "tb-node.yml" %}
{% include templates/install/aws/configure-mqtts.md %}

## Step 7. Installation

Edit "tb-node-db-configmap.yml" and replace **YOUR_RDS_ENDPOINT_URL** and **YOUR_RDS_PASSWORD** with the values you have obtained during [step 4](#step-4-amazon-postgresql-db-configuration).

{% include templates/install/aws/eks-installation.md %}

## Step 8. Starting

Execute the following command to deploy resources:

```
 ./k8s-deploy-resources.sh
```

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to 
see `tb-node-0` pod in the `READY` state. 

## Step 9. Validate the setup

{% include templates/install/aws/eks-validate.md %}

{% include templates/install/aws/eks-upgrading.md %}

{% include templates/install/aws/eks-deletion.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
