---
layout: docwithnav-mqtt-broker
title: Cluster setup using Minikube
description: TBMQ cluster setup with Kubernetes and Minikube guide

---

* TOC
{:toc}

This guide will help you to set up TBMQ in cluster mode using Minikube.

## Prerequisites

You need to have a Kubernetes cluster, and the `kubectl` command-line tool must be configured to communicate with your cluster.
If you don't have Minikube installed, please follow [these instructions](https://kubernetes.io/docs/setup/learning-environment/minikube/).

## Step 1. Clone TBMQ repository

```bash
git clone https://github.com/thingsboard/tbmq.git
cd tbmq/k8s/minikube
```
{: .copy-code}

## Step 2. Installation

To install TBMQ execute the following command:

```bash
./k8s-install-tbmq.sh
```
{: .copy-code}

## Step 3. Running

Execute the following command to deploy TBMQ:

```bash
./k8s-deploy-tbmq.sh
```
{: .copy-code}

After a while when all resources will be successfully started you can open `http://{your-cluster-ip}:30001` in your browser (e.g. **http://192.168.49.2:30001**).
You can check your cluster IP using command:
```bash
minikube ip
```
{: .copy-code}

{% include templates/mqtt-broker/login.md %}

## Step 4. Logs, delete statefulsets and services

In case of any issues, you can examine service logs for errors.
For example to see TBMQ node logs execute the following commands:

1) Get the list of the running tb-broker pods:

```bash
kubectl get pods -l app=tb-broker
```
{: .copy-code}

2) Fetch logs of the tb-broker pod:

```bash
kubectl logs -f TB_BROKER_POD_NAME
```
{: .copy-code}

Where:

- `TB_BROKER_POD_NAME` - tb-broker pod name obtained from the list of the running tb-broker pods.

Or use the next command to see the state of all the pods.
```bash
kubectl get pods
```
{: .copy-code}

Use the next command to see the state of all the services.
```bash
kubectl get services
```
{: .copy-code}

Use the next command to see the state of all the deployments.
```bash
kubectl get deployments
```
{: .copy-code}

Use the next command to see the state of all the statefulsets.
```bash
kubectl get statefulsets
```
{: .copy-code}

See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for more details.

Execute the following command to delete TBMQ nodes:

```bash
./k8s-delete-tbmq.sh
```
{: .copy-code}

Execute the following command to delete all resources (including database):

```bash
./k8s-delete-all.sh
```
{: .copy-code}

## Upgrading

In case you would like to upgrade, please pull the latest changes from `main` branch:

```bash
git pull origin main
```
{: .copy-code}

**Note**: Make sure custom changes of yours if available are not lost during the merge process.

After that execute the following commands:

```bash
./k8s-delete-tbmq.sh
./k8s-upgrade-tbmq.sh --fromVersion=FROM_VERSION
./k8s-deploy-tbmq.sh
```
{: .copy-code}

Where `FROM_VERSION` - from which version upgrade should be started.
See [Upgrade Instructions](/docs/mqtt-broker/install/upgrade-instructions/) for valid `fromVersion` values.

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
