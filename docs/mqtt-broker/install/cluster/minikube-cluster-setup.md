---
layout: docwithnav-mqtt-broker
title: Cluster setup using Minikube
description: ThingsBoard MQTT Broker cluster setup with Kubernetes and Minikube guide

---

* TOC
  {:toc}

This guide will help you to setup ThingsBoard MQTT Broker in cluster mode using Minikube.

## Prerequisites

You need to have a Kubernetes cluster, and the `kubectl` command-line tool must be configured to communicate with your cluster.
If you don't have Minikube installed, please follow [these instructions](https://kubernetes.io/docs/setup/learning-environment/minikube/).

## Step 1. Clone ThingsBoard MQTT Broker repository

```bash
git clone https://github.com/thingsboard/thingsboard-mqtt-broker.git
cd thingsboard-mqtt-broker/k8s
```
{: .copy-code}

## Step 2. Installation

To install ThingsBoard MQTT Broker execute the following command:

```bash
./k8s-install-tb-mqtt-broker.sh
```
{: .copy-code}

## Step 3. Running

Execute the following command to run installation:

```bash
./k8s-deploy-tb-broker.sh
```
{: .copy-code}

After a while when all resources will be successfully started you can open `http://{your-cluster-ip}:30001` in your browser (for ex. `http://172.17.0.3:30001`).
You should see the ThingsBoard MQTT Broker login page.
**Note:** you can check your Minikube IP with this command:

```
minikube ip
```

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

In case of any issues, you can examine service logs for errors.
For example to see ThingsBoard MQTT Broker node logs execute the following commands:

1) Get the list of the running tb-broker pods:

```bash
kubectl get pods -l app=tb-broker
```
{: .copy-code}

2) Fetch logs of the tb-broker pod:

```bash
kubectl logs -f [tb-broker-pod-name]
```
{: .copy-code}

Where:

- `tb-broker-pod-name` - tb-broker pod name obtained from the list of the running tb-broker pods.

Or use `kubectl get pods` to see the state of all the pods.
Or use `kubectl get services` to see the state of all the services.
Or use `kubectl get deployments` to see the state of all the deployments.
See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for details.

Execute the following command to delete ThingsBoard MQTT Broker nodes:

```bash
./k8s-delete-tb-broker.sh
```
{: .copy-code}

Execute the following command to delete all resources (including database):

```bash
./k8s-delete-all.sh
```
{: .copy-code}
