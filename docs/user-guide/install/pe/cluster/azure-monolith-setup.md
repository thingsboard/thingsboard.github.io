---
layout: docwithnav-pe
assignees:
- amykolaichuk
title: Microservices setup using AKS infrastructure
description: ThingsBoard IoT platform microservices setup with Kubernetes in Azure AKS 

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in microservices mode in Azure AKS.

## Prerequisites

{% include templates/install/azure/aks-prerequisites.md %}

### Checkout ThingsBoard PE images from docker store

{% assign checkoutMode = "monolith" %}
{% include templates/install/dockerhub/checkout.md %}

## Step 1. Clone ThingsBoard PE K8S scripts repository

```bash
git clone -b release-{{ site.release.ver }} https://github.com/thingsboard/thingsboard-pe-k8s.git
cd thingsboard-pe-k8s/azure/monolith
```
{: .copy-code}

## Step 2. Define environment variables

{% include templates/install/azure/aks-env.md %}

## Step 3. Configure and create AKS cluster

{% include templates/install/azure/aks-create-cluster.md %}

## Step 4 Update the context of kubectl

{% include templates/install/azure/aks-kubectl-update-context.md %}

## Step 5. Create Azure Database for PostgreSQL servers

{% include templates/install/azure/aks-create-db.md %}

## Step 6. Upload Docker credentials

{% include templates/install/dockerhub/pull.md %}

If the above command fails, repeat the [prerequisites](#checkout-thingsboard-pe-images-from-docker-store) step.

{% include templates/install/dockerhub/upload-docker-credentials.md %}

## Step 7. Configure license key

{% include templates/install/k8s-license-secret.md %}

## Step 8. Installation

{% include templates/install/azure/aks-installation.md %}

## Step 9. Starting

Execute the following command to deploy ThingsBoard services:

```
 ./k8s-deploy-resources.sh
```
{: .copy-code}

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to see `tb-node-0` pod in the `READY` state.

## Step 10 Configure Load Balancers

### 10.1 Configure HTTP(S) Load Balancer
{% include templates/install/azure/aks-http-lb.md %}

### 10.2. Configure MQTT Load Balancer (Optional)

{% assign tbServicesFile = "transport/tb-mqtt-transport.yml" %}
{% include templates/install/azure/configure-mqtt.md %}

### 10.3. Configure CoAP Load Balancer (Optional)

{% assign tbServicesFile = "transport/tb-coap-transport.yml" %}
{% include templates/install/azure/configure-coap.md %}

### 10.4. Configure LwM2M Load Balancer (Optional)

{% assign tbServicesFile = "transport/tb-lwm2m-transport.yml" %}
{% include templates/install/azure/configure-lwm2m.md %}

## Step 11. Using

{% include templates/install/azure/using.md %}

## Upgrading

{% include templates/install/azure/upgrading-msa.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
