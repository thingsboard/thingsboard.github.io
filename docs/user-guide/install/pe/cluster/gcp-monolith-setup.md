---
layout: docwithnav-pe
assignees:
- ashvayka
title: Monolith setup using GCP infrastructure 
description: ThingsBoard IoT platform monolith setup with Kubernetes in GKE

---

{% assign docsPrefix = "pe/" %}

* TOC
{:toc}

This guide will help you to set up ThingsBoard in monolith mode using [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine). 

## Prerequisites

{% include templates/install/gcp/gke-prerequisites.md %}

### Pull ThingsBoard PE images from docker hub

{% assign checkoutMode = "monolith" %}
{% include templates/install/dockerhub/checkout.md %}

## Step 1. Clone ThingsBoard PE K8S scripts repository

Clone the repository and change the working directory to GCP scripts.

```bash
git clone -b release-{{ site.release.ver }} https://github.com/thingsboard/thingsboard-pe-k8s.git --depth 1
cd thingsboard-pe-k8s/gcp/monolith
```
{: .copy-code}

## Step 2. Define environment variables

{% assign tbClusterName = "tb-pe" %}
{% include templates/install/gcp/env-variables-monolith.md %}

## Step 3. Configure and create GKE cluster

{% include templates/install/gcp/zonal-gke-cluster.md %}

## Step 4. Update the context of kubectl

{% include templates/install/gcp/update-kubectl-zone.md %}

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

{% include templates/install/gcp/start-monolith.md %}

## Step 9. Configure Load Balancers

### 9.1 Configure HTTP(S) Load Balancer

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


### 9.2. Configure MQTT Load Balancer (Optional)

{% assign tbServicesFile = "tb-node.yml" %}
{% include templates/install/gcp/configure-mqtt.md %}

### 9.3. Configure UDP Load Balancer (Optional)

{% include templates/install/gcp/configure-udp.md %}

### 9.4. Configure Edge Load Balancer (Optional)

{% include templates/install/k8s-configure-edge-load-balancer.md %}

## Step 10. Using

{% include templates/install/gcp/using.md %}

## Upgrading

{% include templates/install/gcp/upgrading-monolith.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
