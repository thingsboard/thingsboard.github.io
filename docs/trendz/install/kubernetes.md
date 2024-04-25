---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Installing ThingsBoard Trendz Analytics on Kubernetes
description: Installing ThingsBoard Trendz Analytics on Kubernetes

---
* TOC
{:toc}

This guide describes how to setup Trendz Analytics cluster with Kubernetes and Minikube.

### Prerequisites
 
You need to have a Kubernetes cluster, and the `kubectl` command-line tool must be configured to communicate with your cluster.
If you don't have Minikube installed, please follow [these instructions](https://kubernetes.io/docs/setup/learning-environment/minikube/).

Configure your cluster by designating a node for the Trendz instance and labeling it with a custom label. Utilize affinity settings to instruct Kubernetes to deploy the Trendz instance on the specified node. 
Ensure that the node meets specific CPU and RAM requirements, with the typical usage being around 4 CPU and 8GB RAM. While you can set your own limits, we advise adhering to or exceeding the recommended specifications mentioned earlier.

### Step 1 Clone Trendz Kubernetes scripts

```bash
git clone https://github.com/thingsboard/trendz-k8s.git --depth 1
cd trendz-k8s
```
{: .copy-code}

## Step 2. Obtain the license key

We assume you have already chosen subscription plan for Trendz and have license key. If not, please get your [Free Trial license](/pricing/?section=trendz-options&product=trendz-self-managed&solution=trendz-pay-as-you-go) before you proceed.
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} for more details.

Note: We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.

## Step 3. Configure your license key

```bash
nano trendz-app-deployment.yml
```
{: .copy-code}

and put the license secret parameter:

```
# tb-node StatefulSet configuration

- name: TRENDZ_LICENSE_SECRET
  value: "PUT_LICENSE_HERE"

```

### Step 4 Configure Trendz database

Set up an external Postgresql database instance with an empty database named "trendz." This instance can be hosted on services like RDS (AWS) or as your stateful deployment. 
Ensure you have the following information:

- URL (Example: jdbc:postgresql://trendz-db-service:5432/trendz)
- Username (Example: postgres)
- Password (Example: postgres)

Now we can configure the Trendz database by editing the trendz-db-config.yml file:

```bash
nano trendz-app-db-config.yml
```
{: .copy-code}

```
  SPRING_DATASOURCE_URL: jdbc:postgresql://trendz-db-service:5432/trendz
  SPRING_DATASOURCE_USERNAME: postgres
  SPRING_DATASOURCE_PASSWORD: postgres

```

### Step 5 Connect Trendz to ThingsBoard service

We must set an url for connecting to ThingsBoard Rest API (for example https://my-tb.com). Note that ThingsBoard IP address or domain name should be resolvable from Trendz docker container

```bash
nano trendz-app-deployment.yml
```
{: .copy-code}

And update TB_API_URL and :

```
- name: TB_API_URL
  value: "https://my-tb.com"
- name: JWT_TOKEN_SIGNING_KEY
  value: "myTbSignKey"
```

### Step 4 Running

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

### Step 5 Check the logs

Now check the logs and be sure that the instance is started successfully.
There should be a next line:

```bash
kubectl logs -f [trendz-pod-name]

Started TrendzApplication in 5.654 seconds (JVM running for 6.229)
```

Where:

* `trendz-pod-name` - trendz pod name obtained from the list of the running trendz pods.

### Step 6 Set up a load balancer

The last thing is to set up a load balancer to route requests to the Trendz instance. Just update your current load balancer config using reference from the `trendz-ingress.yml` file.

**Do not apply this file, it is just an example.** 
Different environments have different requirements for these configurations, so you need to adjust these settings to your environment.

### Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}