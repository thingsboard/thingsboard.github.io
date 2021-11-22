---
layout: docwithnav
assignees:
- ashvayka
title: Monolith setup using GCP infrastructure
description: ThingsBoard IoT platform monolith setup with Kubernetes in GKE

---

* TOC
{:toc}

This guide will help you to set up ThingsBoard in monolith mode in GKE. 

## Prerequisites

{% include templates/install/gcp/gke-prerequisites.md %}

## Step 1. Clone ThingsBoard CE K8S scripts repository

Clone the repository and change the working directory to GCP scripts.

```bash
git clone -b release-{{ site.release.ver }} https://github.com/thingsboard/thingsboard-сe-k8s.git
cd thingsboard-сe-k8s/gcp/monolith
```
{: .copy-code}

## Step 2. Define environment variables

Define environment variables that you will use in various commands later in this guide.

We assume you are using Linux. Execute the following command:

```bash
export GCP_PROJECT=$(gcloud config get-value project)
export GCP_REGION=us-central1
export GCP_ZONE=us-central1-a
export GCP_NETWORK=default
export TB_CLUSTER_NAME=tb-ce
export TB_DATABASE_NAME=tb-db
echo "You have selected project: $GCP_PROJECT, region: $GCP_REGION, network: $GCP_NETWORK zone: $GCP_ZONE, cluster: $TB_CLUSTER_NAME and database: $TB_DATABASE_NAME"
```
{: .copy-code}

where:

 * first line uses gcloud command to fetch your current GCP project id. We will refer to it later in this guide using **GCP_PROJECT**;
 * *us-central1* is one of the available compute [regions](https://cloud.google.com/compute/docs/regions-zones#available). We will refer to it later in this guide using **GCP_REGION**;  
 * *us-central1-a* is one of the available compute [zones](https://cloud.google.com/compute/docs/regions-zones#available). Should match the selected region. We will refer to it later in this guide using **GCP_ZONE**;
 * *default* is a default GCP network name; We will refer to it later in this guide using **;GCP_NETWORK**;
 * *tb-ce* is the name of your cluster. You may input a different name. We will refer to it later in this guide using **$TB_CLUSTER_NAME**;
 * *tb-db* is the name of your database server. You may input a different name. We will refer to it later in this guide using **TB_DATABASE_NAME**;

## Step 3. Configure and create GKE cluster

Create a zonal cluster with **1** node of **e2-standard-4** machine type.

Execute the following command (recommended):

```bash
gcloud container clusters create $TB_CLUSTER_NAME \
--release-channel stable \
--zone $GCP_ZONE \
--node-locations $GCP_ZONE \
--network=$GCP_NETWORK \
--enable-ip-alias \
--num-nodes=1 \
--machine-type=e2-standard-4
```
{: .copy-code}

Alternatively, you may use [this](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster) guide for custom cluster setup.

## Step 4. Update the context of kubectl

{% include templates/install/gcp/update-kubectl-zone.md %}

## Step 5. Provision Google Cloud SQL (PostgreSQL) Instance

{% include templates/install/gcp/provision-postgresql.md %}

## Step 6. Installation

{% include templates/install/gcp/install.md %}

## Step 7. Starting

{% include templates/install/gcp/start-monolith.md %}

## Step 8. Configure Load Balancers

{% include templates/install/gcp/http-lb.md %}

#### Transparent Load Balancer

This type of the load balancer requires you to provision and maintain valid SSL certificate on your own.
Follow the generic [HTTP over SSL](/docs/{{docsPrefix}}user-guide/ssl/http-over-ssl/#ssl-configuration-using-pem-certificates-file) guide
to configure required environment variables in the *tb-node.yml* file.

Afterwards, setup TCP load balancer to forward traffic from 443 port to corresponding services port 8080.
This version of setup does not support an automatic redirect of http port 80 to https port 443.

```bash
 kubectl apply -f receipts/transparent-http-load-balancer.yml.yml
```
{: .copy-code}
 
### 8.2. Configure MQTT Load Balancer (Optional)

{% assign tbServicesFile = "tb-node.yml" %}
{% include templates/install/gcp/configure-mqtt.md %}

### 8.3. Configure UDP Load Balancer (Optional)

{% include templates/install/gcp/configure-udp.md %}

## Step 9. Using

{% include templates/install/gcp/using.md %}

## Upgrading

{% include templates/install/gcp/upgrading-monolith.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
