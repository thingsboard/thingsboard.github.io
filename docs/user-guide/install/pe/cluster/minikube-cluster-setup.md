---
layout: docwithnav-pe
assignees:
- ashvayka
title: ThingsBoard Professional Edition cluster setup with Kubernetes and Minikube guide
description: ThingsBoard Professional Edition cluster setup with Kubernetes and Minikube guide

---

{% assign docsPrefix = "pe/" %}

* TOC
{:toc}

This guide will help you to setup ThingsBoard in cluster mode with Kubernetes and Minikube. 
For this purpose, we will use docker container images available on [Docker Hub](https://hub.docker.com/search?q=thingsboard&type=image&image_filter=store).  

## Prerequisites

ThingsBoard Microservices run on the Kubernetes cluster. You need to have a Kubernetes cluster, and the `kubectl` command-line tool must be configured to communicate with your cluster. 
If you don't have Minikube installed, please follow [these instructions](https://kubernetes.io/docs/setup/learning-environment/minikube/).

### Enable ingress addon

Ingress addon disabled by default in the Minikube, and available only in cluster providers.
To enable ingress, please execute the following command:

```
minikube addons enable ingress
```
{: .copy-code}

### Pull ThingsBoard PE images from docker hub

{% include templates/install/dockerhub/checkout.md %}

## Step 1. Review the architecture page

Starting ThingsBoard v2.2, it is possible to install ThingsBoard cluster using new microservices architecture and docker containers. 
See [**microservices**](/docs/reference/msa/) architecture page for more details.

## Step 2. Clone ThingsBoard PE Kubernetes scripts

```bash
git clone -b release-{{ site.release.ver }} https://github.com/thingsboard/thingsboard-pe-k8s.git --depth 1
cd thingsboard-pe-k8s/minikube
```
{: .copy-code}

## Step 3. Obtain your license key

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

{% capture multiple_instances_license %}

We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.

{% endcapture %}
{% include templates/warn-banner.md content=multiple_instances_license %}

## Step 4. Configure your license key

```bash
nano tb-node.yml
```
{: .copy-code}

and put the license secret parameter:

```
# tb-node StatefulSet configuration

- name: TB_LICENSE_SECRET
  value: "PUT_YOUR_LICENSE_SECRET_HERE"
```

## Step 5. Review the architecture page

Starting ThingsBoard v2.2, it is possible to install ThingsBoard cluster using new microservices architecture and docker containers. 
See [**microservices**](/docs/reference/msa/) architecture page for more details.

## Step 6. Configure Minikube

By default ingress addon is disabled in the Minikube, and available only in cluster providers.
To enable ingress, please execute the following command:

```
minikube addons enable ingress
```
{: .copy-code} 

## Step 7. Configure ThingsBoard database

Before performing initial installation you can configure the type of database to be used with ThingsBoard.
In order to set database type change the value of `DATABASE` variable in `.env` file to one of the following:

- `postgres` - use PostgreSQL database;
- `hybrid` - use PostgreSQL for entities database and Cassandra for timeseries database;

**NOTE**: According to the database type corresponding kubernetes resources will be deployed (see `postgres.yml`, `cassandra.yml` for details).

## Step 8. Running

Execute the following command to run installation:

```
./k8s-install-tb.sh --loadDemo
```
{: .copy-code}

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

Execute the following command to deploy third-party resources:

```
./k8s-deploy-thirdparty.sh
```
{: .copy-code}

Type **'yes'** when prompted, if you are running ThingsBoard in `high-availability` `DEPLOYMENT_TYPE` for the first time or don't have configured Redis cluster.

Execute the following command to deploy ThingsBoard resources:
 
```
./k8s-deploy-resources.sh
```
{: .copy-code}

After a while when all resources will be successfully started you can open `http://{your-cluster-ip}` in your browser (for ex. `http://192.168.99.101`).
You can see your cluster IP using command:

```
minikube ip
```
{: .copy-code}

You should see ThingsBoard login page.

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

If you installed DataBase with demo data (using `--loadDemo` flag) you can also use the following credentials:

- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

1) Get the list of the running tb-node pods:

```
kubectl get pods -l app=tb-node
```
{: .copy-code}

2) Fetch logs of the tb-node pod:

```
kubectl logs -f [tb-node-pod-name]
```
{: .copy-code}

Where:

- `tb-node-pod-name` - tb-node pod name obtained from the list of the running tb-node pods.

Or use `kubectl get pods` to see the state of all the pods.
Or use `kubectl get services` to see the state of all the services.
Or use `kubectl get deployments` to see the state of all the deployments.
See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for details.

Execute the following command to delete all ThingsBoard microservices:

```
./k8s-delete-resources.sh
```
{: .copy-code}

Execute the following command to delete all third-party microservices:

```
./k8s-delete-thirdparty.sh
```
{: .copy-code}

Execute the following command to delete all resources (including database):

```
./k8s-delete-all.sh
```
{: .copy-code}

## Upgrading

In case you would like to upgrade, please pull the *latest* changes from `master` branch:
```
git pull origin master
```
{: .copy-code}

and then execute the following commands:

```
./k8s-delete-resources.sh
```
{: .copy-code}
```
./k8s-upgrade-tb.sh --fromVersion=[FROM_VERSION]
```
{: .copy-code}
```
./k8s-deploy-resources.sh
```
{: .copy-code}

Where:

- `FROM_VERSION` - from which version upgrade should be started. See [Upgrade Instructions](/docs/user-guide/install/pe/upgrade-instructions) for valid `fromVersion` values. Note, that you have to upgrade versions one by one (for example 3.6.1 -> 3.6.2 -> 3.6.3 etc). 


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
