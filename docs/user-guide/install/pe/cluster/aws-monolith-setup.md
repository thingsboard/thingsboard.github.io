---
layout: docwithnav-pe
assignees:
- ashvayka
title: Monolith setup using AWS infrastructure
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

{% assign tbServicesFile = "tb-node.yml" %}

This guide will help you to set up ThingsBoard in monolith mode in AWS EKS. 

## Prerequisites

{% include templates/install/aws/eks-prerequisites.md %}

### Checkout ThingsBoard PE images from docker store

{% assign checkoutMode = "monolith" %}
{% include templates/install/dockerhub/checkout.md %}

## Step 1. Clone ThingsBoard PE K8S scripts repository

```bash
git clone -b release-{{ site.release.ver }} https://github.com/thingsboard/thingsboard-pe-k8s.git
cd thingsboard-pe-k8s/aws/monolith
```
{: .copy-code}

## Step 2. Configure and create EKS cluster

{% assign eksNote = "**1** node of type **m5.xlarge**" %}
{% include templates/install/aws/eks-create-cluster.md %}

## Step 3. Create AWS load-balancer controller

{% include templates/install/aws/eks-lb-controller.md %}

## Step 4. Amazon PostgreSQL DB Configuration

{% include templates/install/aws/rds-setup.md %}

## Step 5. Obtain and configure license key

{% include templates/install/k8s-license-secret.md %}

## Step 6. Upload Docker credentials

{% assign checkoutMode = "monolith" %}
{% include templates/install/dockerhub/pull.md %}

If the above command fails, repeat the [prerequisites](#checkout-thingsboard-pe-images-from-docker-store) step.

{% include templates/install/dockerhub/upload-docker-credentials.md %}

## Step 7. Installation

Edit "tb-node-db-configmap.yml" and replace **YOUR_RDS_ENDPOINT_URL** and **YOUR_RDS_PASSWORD** with the values you have obtained during [step 4](#step-4-amazon-postgresql-db-configuration).

{% include templates/install/aws/eks-installation.md %}

## Step 8. Starting

Execute the following command to deploy resources:

```
 ./k8s-deploy-resources.sh
```
{: .copy-code}

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to
see `tb-node-0` pod in the `READY` state.

## Step 9. Configure Load Balancers

### 10.1 Configure HTTP(S) Load Balancer

{% include templates/install/aws/http-lb.md %}

### 10.2. Configure MQTT Load Balancer (Optional)

{% include templates/install/aws/configure-mqtt.md %}

### 10.3. Configure UDP Load Balancer (Optional)

{% include templates/install/aws/configure-udp.md %}

## Step 11. Validate the setup

{% include templates/install/aws/eks-validate.md %}

{% include templates/install/aws/eks-upgrading.md %}

{% include templates/install/aws/eks-deletion.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
