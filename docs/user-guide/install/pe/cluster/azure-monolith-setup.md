---
layout: docwithnav-pe
assignees:
- amykolaichuk
title: Monolith setup using AKS infrastructure
description: ThingsBoard IoT platform monolith setup with Kubernetes in Azure AKS 

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in monolith mode in Azure AKS.

## Prerequisites

{% include templates/install/azure/aks-prerequisites.md %}

### Pull ThingsBoard PE images from docker hub

{% assign checkoutMode = "monolith" %}
{% include templates/install/dockerhub/checkout.md %}

## Step 1. Clone ThingsBoard PE K8S scripts repository

```bash
git clone -b release-{{ site.release.ver }} https://github.com/thingsboard/thingsboard-pe-k8s.git --depth 1
cd thingsboard-pe-k8s/azure/monolith
```
{: .copy-code}

## Step 2. Define environment variables

{% include templates/install/azure/aks-env.md %}

## Step 3. Configure and create AKS cluster

{% assign nodeCount = "1" %}
{% include templates/install/azure/aks-create-cluster.md %}

## Step 4. Update the context of kubectl

{% include templates/install/azure/aks-kubectl-update-context.md %}

## Step 5. Provision Databases

### 5.1. Create Azure Database for PostgreSQL servers

{% include templates/install/azure/aks-create-db.md %}

### 5.2. Cassandra

{% include templates/install/azure/configure-cassandra.md %}

## Step 6. Configure license key

{% include templates/install/k8s-license-secret.md %}

## Step 7. Installation

{% include templates/install/azure/aks-installation.md %}

## Step 8. Starting

Execute the following command to deploy ThingsBoard services:

```
 ./k8s-deploy-resources.sh
```
{: .copy-code}

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to see `tb-node-0` pod in the `READY` state.

## Step 9. Configure Load Balancers

### 9.1. Configure HTTP(S) Load Balancer
{% include templates/install/azure/aks-http-lb.md %}

### 9.2. Configure MQTT Load Balancer (Optional)

{% assign tbServicesFile = "tb-node.yml" %}
{% include templates/install/azure/configure-mqtt.md %}

### 9.3. Configure UDP Load Balancer (Optional)

{% assign tbServicesFile = "tb-node.yml" %}
{% include templates/install/azure/configure-udp.md %}

### 9.4. Configure Edge Load Balancer (Optional)

{% include templates/install/k8s-configure-edge-load-balancer.md %}

## Step 10. Using

{% include templates/install/azure/using.md %}

## Upgrading

{% include templates/install/azure/upgrading-msa.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
