---
layout: docwithnav-pe
assignees:
- ashvayka
title: Microservices setup using GCP infrastructure 
description: ThingsBoard IoT platform microservices setup with Kubernetes in GKE

---

* TOC
{:toc}

This guide will help you to set up ThingsBoard in microservices mode in GKE. 

## Prerequisites

{% include templates/install/gcp/gke-prerequisites.md %}

### Pull ThingsBoard PE images from docker hub

{% assign checkoutMode = "microservices" %}
{% include templates/install/dockerhub/checkout.md %}

## Step 1. Clone ThingsBoard PE K8S scripts repository

Clone the repository and change the working directory to GCP scripts.

```bash
git clone -b release-{{ site.release.ver }} https://github.com/thingsboard/thingsboard-pe-k8s.git --depth 1
cd thingsboard-pe-k8s/gcp/microservices
```
{: .copy-code}

## Step 2. Define environment variables

{% assign tbClusterName = "tb-pe-msa" %}
{% include templates/install/gcp/env-variables-msa.md %}

## Step 3. Configure and create GKE cluster

{% include templates/install/gcp/regional-gke-cluster.md %}

## Step 4. Update the context of kubectl

{% include templates/install/gcp/update-kubectl-region.md %}

## Step 5. Provision Databases

### Step 5.1 Google Cloud SQL (PostgreSQL) Instance

{% include templates/install/gcp/provision-postgresql.md %}

### Step 5.2 Cassandra (optional)

{% include templates/install/gcp/configure-cassandra.md %}

## Step 6. Configure license key

{% include templates/install/k8s-license-secret.md %}

## Step 7. Installation

{% include templates/install/gcp/install.md %}

## Step 8. Starting

{% include templates/install/gcp/start-msa.md %}

## Step 9. Configure Load Balancers

### 9.1 Configure HTTP(S) Load Balancer

{% include templates/install/gcp/http-lb.md %}

### 9.2. Configure MQTT Load Balancer (Optional)

{% assign tbServicesFile = "transport/tb-mqtt-transport.yml" %}
{% include templates/install/gcp/configure-mqtt.md %}

### 9.3. Configure CoAP Load Balancer (Optional)

{% assign tbServicesFile = "transport/tb-coap-transport.yml" %}
{% include templates/install/gcp/configure-coap.md %}

### 9.4. Configure LwM2M Load Balancer (Optional)

{% assign tbServicesFile = "transport/tb-lwm2m-transport.yml" %}
{% include templates/install/gcp/configure-lwm2m.md %}

### 9.5. Configure Edge Load Balancer (Optional)

{% include templates/install/k8s-configure-edge-load-balancer.md %}

## Step 10. Using

{% include templates/install/gcp/using.md %}

## Upgrading

{% include templates/install/gcp/upgrading-msa.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}

