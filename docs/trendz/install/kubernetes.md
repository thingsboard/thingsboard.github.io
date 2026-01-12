---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Installing ThingsBoard Trendz Analytics on Kubernetes
description: Installing ThingsBoard Trendz Analytics on Kubernetes

trendz-settings:
  0:
    image: /images/trendz/install/sync/trendz-settings-1.png
    title: "Log in to <b>ThingsBoard</b> as a <b>Sysadmin</b>."
  1:
    image: /images/trendz/install/sync/trendz-settings-2.png
    title: "Open the <b>Trendz Settings</b> page."
  2:
    image: /images/trendz/install/sync/trendz-settings-3.png
    title: "If you see the message <b>\"Synchronization completed successfully\"</b>, the synchronization has been completed automatically and no further action is required."
trendz-sync:
  0:
    image: /images/trendz/install/sync/trendz-sync-1.png
    title: "If you see an error message, follow these steps."
  1:
    image: /images/trendz/install/sync/trendz-sync-2.png
    title: "Enter the correct <b>Trendz internal URL</b> and <b>ThingsBoard internal URL</b>."
  2:
    image: /images/trendz/install/sync/trendz-sync-3.png
    title: "Click <b>Save configuration</b>."
  3:
    image: /images/trendz/install/sync/trendz-sync-4.png
    title: "Click <b>Retry discovery</b>."
  4:
    image: /images/trendz/install/sync/trendz-sync-5.png
    title: "Once the message <b>\"Synchronization completed successfully\"</b> appears, the synchronization is complete."

---
* TOC
{:toc}

This guide describes how to setup Trendz Analytics cluster with Kubernetes and Minikube.

## Prerequisites

{% include templates/trendz/install/thingsboard-requirements.md %}

You need to have a Kubernetes cluster, and the `kubectl` command-line tool must be configured to communicate with your cluster.
If you don't have Minikube installed, please follow [these instructions](https://kubernetes.io/docs/setup/learning-environment/minikube/).

Configure your cluster by designating a node for the Trendz instance and labeling it with a custom label. Utilize affinity settings to instruct Kubernetes to deploy the Trendz instance on the specified node.
Ensure that the node meets specific CPU and RAM requirements, with the typical usage being around 4 CPU and 8GB RAM. While you can set your own limits, we advise adhering to or exceeding the recommended specifications mentioned earlier.

## Installation Steps

### Step 1. Clone Trendz Kubernetes scripts

```bash
git clone https://github.com/thingsboard/trendz-k8s.git --depth 1
cd trendz-k8s
```
{: .copy-code}

### Step 2. Configure Trendz database

Set up an external Postgresql database instance with an empty database named "trendz." This instance can be hosted on services like RDS (AWS) or as your stateful deployment.
Ensure you have the following information:

- URL (Example: jdbc:postgresql://trendz-db-service:5432/trendz)
- Username (Example: postgres)
- Password (Example: postgres)

Now we can configure the Trendz database by editing the trendz-secret.yml file:

```bash
nano trendz-secret.yml
```
{: .copy-code}

```
  SPRING_DATASOURCE_URL: jdbc:postgresql://trendz-db-service:5432/trendz
  SPRING_DATASOURCE_USERNAME: postgres
  SPRING_DATASOURCE_PASSWORD: postgres

```

### Step 3. Running

```bash
kubectl apply -f trendz-namespace.yml
kubectl apply -f trendz-app-config.yml
kubectl apply -f trendz-app-db-config.yml
kubectl apply -f trendz-app-pvc.yml
kubectl apply -f trendz-app-deployment.yml
kubectl apply -f trendz-python-executor-config.yml
kubectl apply -f trendz-python-executor-deployment.yml

```
{: .copy-code}

### Step 4. Check the logs

Now check the logs and be sure that the instance is started successfully.
There should be a next line:

```bash
kubectl logs -f [trendz-pod-name]

Started TrendzApplication in 5.654 seconds (JVM running for 6.229)
```

Where:

* `trendz-pod-name` - trendz pod name obtained from the list of the running trendz pods.

### Step 5. Set up a load balancer

The last thing is to set up a load balancer to route requests to the Trendz instance. Just update your current load balancer config using reference from the `trendz-ingress.yml` file.

**Do not apply this file, it is just an example.**
Different environments have different requirements for these configurations, so you need to adjust these settings to your environment.

### Step 6. Sync ThingsBoard With Trendz

{% include templates/trendz/install/sync-with-tb.md %}

## Authentication

{% include templates/trendz/install/authentication.md %}

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}
