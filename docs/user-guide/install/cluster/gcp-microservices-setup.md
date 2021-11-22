---
layout: docwithnav
assignees:
- ashvayka
title: Microservices setup using GCP infrastructure
description: ThingsBoard IoT platform microservices setup with Kubernetes in GKE

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in microservices mode in GKE. 

## Prerequisites

{% include templates/install/gcp/gke-prerequisites.md %}


## Step 1. Clone ThingsBoard CE K8S scripts repository

```bash
git clone -b release-{{ site.release.ver }} https://github.com/thingsboard/thingsboard-ce-k8s.git
cd thingsboard-ce-k8s/gcp/microservices
```

## Step 2. Define environment variables

Define environment variables that you will use in various commands later in this guide.

We assume you are using Linux. Execute the following command:

```bash
export GCP_PROJECT=$(gcloud config get-value project)
export GCP_REGION=us-central1
export GCP_NETWORK=default
export TB_CLUSTER_NAME=tb-ce
export TB_DATABASE_NAME=tb-db
echo "You have selected project: $GCP_PROJECT, region: $GCP_REGION, network: $GCP_NETWORK, cluster: $TB_CLUSTER_NAME and database: $TB_DATABASE_NAME"
```
{: .copy-code}

where:

* first line uses gcloud command to fetch your current GCP project id. We will refer to it later in this guide using **GCP_PROJECT**;
* *us-central1* is one of the available compute [regions](https://cloud.google.com/compute/docs/regions-zones#available). We will refer to it later in this guide using **GCP_REGION**;
* *default* is a default GCP network name; We will refer to it later in this guide using **;GCP_NETWORK**;
* *tb-ce* is the name of your cluster. You may input a different name. We will refer to it later in this guide using **$TB_CLUSTER_NAME**;
* *tb-db* is the name of your database server. You may input a different name. We will refer to it later in this guide using **TB_DATABASE_NAME**;

## Step 2. Configure and create GKE cluster

Create a regional cluster with **3** nodes of **e2-standard-4** machine type.

Execute the following command (recommended):

```bash
gcloud container clusters create $TB_CLUSTER_NAME \
--release-channel stable \
--region $GCP_REGION \
--network=$GCP_NETWORK \
--enable-ip-alias \
--num-nodes=1 \
--machine-type=e2-standard-4
```
{: .copy-code}

Alternatively, you may use [this](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-regional-cluster) guide for custom cluster setup.

## Step 4. Update the context of kubectl

{% include templates/install/gcp/update-kubectl-region.md %}

## Step 5. Provision Google Cloud SQL (PostgreSQL) Instance

{% include templates/install/gcp/provision-postgresql.md %}

## Step 6. Installation

{% include templates/install/gcp/install.md %}

## Step 7. Starting

{% include templates/install/gcp/start-msa.md %}

## Step 8. Configure Load Balancers

{% include templates/install/gcp/http-lb.md %}

### 8.2. Configure MQTT Load Balancer (Optional)

{% assign tbServicesFile = "transport/tb-mqtt-transport.yml" %}
{% include templates/install/gcp/configure-mqtt.md %}

### 8.3. Configure CoAP Load Balancer (Optional)

{% assign tbServicesFile = "transport/tb-coap-transport.yml" %}
{% include templates/install/gcp/configure-coap.md %}

### 8.4. Configure LwM2M Load Balancer (Optional)

{% assign tbServicesFile = "transport/tb-lwm2m-transport.yml" %}
{% include templates/install/gcp/configure-lwm2m.md %}

## Step 9. Using

{% include templates/install/gcp/using.md %}

## Upgrading

{% include templates/install/gcp/upgrading-msa.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}