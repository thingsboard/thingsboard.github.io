---
layout: docwithnav-mqtt-broker
title: Cluster setup using AWS infrastructure
description: TBMQ microservices setup with Kubernetes in AWS EKS

---

* TOC
{:toc}

This guide will help you to set up TBMQ in Azure AKS.

## Prerequisites



### Pull TBMQ image from docker hub

Run the following command to verify that you can pull the image from the Docker hub.

```bash
docker pull thingsboard/tbmq-node:{{ site.release.broker_full_ver }}
```
{: .copy-code}

## Step 1. Open TBMQ K8S scripts repository

```bash
git clone https://github.com/thingsboard/tbmq.git
cd tbmq/k8s/azure
```
{: .copy-code}





## Upgrading

In case you would like to upgrade, please pull the latest changes from `main` branch:

```bash
git pull origin main
```
{: .copy-code}

**Note**: Make sure custom changes of yours if available are not lost during the merge process.

After that execute the following command:

```bash
./k8s-upgrade-tbmq.sh --fromVersion=FROM_VERSION
```
{: .copy-code}

Where `FROM_VERSION` - from which version upgrade should be started.
See [Upgrade Instructions](/docs/mqtt-broker/install/upgrade-instructions/) for valid `fromVersion` values.

**Note**: You may optionally stop the TBMQ pods while you run the upgrade of the database with the below command. 

```bash
./k8s-delete-tbmq.sh
```
{: .copy-code}

This will cause downtime, but will make sure that the DB state will be consistent after the update. 
Most of the updates do not require the TBMQ to be stopped.

Once completed, execute deployment of the resources again. This will cause rollout restart of the TBMQ with the newest version.

```bash
./k8s-deploy-tbmq.sh
```
{: .copy-code}

## Cluster deletion

Execute the following command to delete TBMQ nodes:

```bash
./k8s-delete-tbmq.sh
```
{: .copy-code}

Execute the following command to delete all TBMQ nodes and configmaps:

```bash
./k8s-delete-all.sh
```
{: .copy-code}

Execute the following command to delete the EKS cluster (you should change the name of the cluster and the region if those differ):
```bash
something different
```
{: .copy-code}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
