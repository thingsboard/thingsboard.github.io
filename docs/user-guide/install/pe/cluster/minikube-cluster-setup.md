---
layout: docwithnav
assignees:
- ashvayka
title: ThingsBoard Professional Edition cluster setup with Kubernetes and Minikube guide
description: ThingsBoard Professional Edition cluster setup with Kubernetes and Minikube guide

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in cluster mode with Kubernetes and Minikube. 
For this purpose, we will use docker container images available on [Docker Hub](https://hub.docker.com/search?q=thingsboard&type=image&image_filter=store).  

## Prerequisites

ThingsBoard Microservices run on the Kubernetes cluster. You need to have a Kubernetes cluster, and the `kubectl` command-line tool must be configured to communicate with your cluster. 
If you don't have Minikube installed, please follow [these instructions](https://kubernetes.io/docs/setup/learning-environment/minikube/).

## Step 1. Checkout all ThingsBoard PE Images

Please checkout all ThingsBoard PE Images from Docker Hub.
You will need to open all [verified images](https://hub.docker.com/search?q=thingsboard&type=image&image_filter=store) and click on "Proceed to checkout" to accept ThingsBoard PE license agreement.

Listing all images **mandatory** for checkout for your convenience below:

 - [ThingsBoard PE Node Microservice](https://hub.docker.com/_/thingsboard-pe-node)  
 - [ThingsBoard PE Web UI Microservice](https://hub.docker.com/_/thingsboard-pe-web-ui)
 - [ThingsBoard PE Web Report Microservice](https://hub.docker.com/_/thingsboard-pe-web-report) 
 - [ThingsBoard PE JS Executor Microservice](https://hub.docker.com/_/thingsboard-pe-js-executor)
 - [ThingsBoard PE HTTP Transport Microservice](https://hub.docker.com/_/thingsboard-pe-http-transport)    
 - [ThingsBoard PE MQTT Transport Microservice](https://hub.docker.com/_/thingsboard-pe-mqtt-transport)
 - [ThingsBoard PE CoAP Transport Microservice](https://hub.docker.com/_/thingsboard-pe-coap-transport) 


![image](/images/user-guide/install/docker-pe/checkout-pe-node.png)


Populate basic information about yourself and click "Get Content"


![image](/images/user-guide/install/docker-pe/details.png)
 

## Step 2. Upload Docker credentials

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.
To upload Docker credentials, please execute next command:

`
$ ./k8s-upload-docker-credentials.sh
` 

## Step 3. Clone ThingsBoard PE Kubernetes scripts

```bash
git clone https://github.com/thingsboard/thingsboard-pe-k8s.git
```

In `.env` file set the value of `PLATFORM` field to `minikube`.

## Step 4. Obtain your license key

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

**IMPORTANT NOTE:** Make sure you have purchased a license key for at least two instances of ThingsBoard PE. Otherwise you need to modify local copy of 
[docker-compose.yml](https://github.com/thingsboard/thingsboard-pe-docker-compose/blob/master/docker-compose.yml) to use only one ThingsBoard instance. 
We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.


## Step 5. Configure your license key

```bash
cd thingsboard-pe-k8s
nano common/tb-node.yml
```

and put the license secret parameter

```
# tb-node StatefulSet configuration

- name: TB_LICENSE_SECRET
  value: "PUT_YOUR_LICENSE_SECRET_HERE"
```


## Step 6. Review the architecture page

Starting ThingsBoard v2.2, it is possible to install ThingsBoard cluster using new microservices architecture and docker containers. 
See [**microservices**](/docs/reference/msa/) architecture page for more details.

## Step 7. Configure Minikube

By default ingress addon is disabled in the Minikube, and available only in cluster providers.
To enable ingress, please execute the following command:

`
$ minikube addons enable ingress
`

## Step 8. Configure ThingsBoard database

Before performing initial installation you can configure the type of database to be used with ThingsBoard.
In order to set database type change the value of `DATABASE` variable in `.env` file to one of the following:

- `postgres` - use PostgreSQL database;
- `hybrid` - use PostgreSQL for entities database and Cassandra for timeseries database;

**NOTE**: According to the database type corresponding kubernetes resources will be deployed (see `common/postgres.yml`, `common/cassandra.yml` for details).

## Step 9. Choose deployment type 

Before performing initial installation you can configure the type of ThingsBoard deployment.
In order to set deployment type change the value of `DEPLOYMENT_TYPE` variable in `.env` file to one of the following:

- `basic` - startup with a single instance of Zookeeper, Kafka and Redis;
- `high-availability` - startup with Zookeeper, Kafka, and Redis in cluster modes;

**NOTE**: According to the deployment type corresponding kubernetes resources will be deployed (see the content of the directories `basic` and `high-availability` for details).

## Step 10. Running

Execute the following command to run installation:

`
$ ./k8s-install-tb.sh --loadDemo
`

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

Execute the following command to deploy third-party resources:

`
$ ./k8s-deploy-thirdparty.sh
`

Type **'yes'** when prompted, if you are running ThingsBoard in `high-availability` `DEPLOYMENT_TYPE` for the first time or don't have configured Redis cluster.

Execute the following command to deploy ThingsBoard resources:
 
`
$ ./k8s-deploy-resources.sh
`

After a while when all resources will be successfully started you can open `http://{your-cluster-ip}` in your browser (for ex. `http://192.168.99.101`).
You can see your cluster IP using command:

`
$ minikube ip
`
You should see ThingsBoard login page.

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

If you installed DataBase with demo data (using `--loadDemo` flag) you can also use the following credentials:

- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

n case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

1) Get the list of the running tb-node pods:

`
$ kubectl get pods -l app=tb-node
`

2) Fetch logs of the tb-node pod:

`
$ kubectl logs -f [tb-node-pod-name]
`

Where:

- `tb-node-pod-name` - tb-node pod name obtained from the list of the running tb-node pods.

Or use `kubectl get pods` to see the state of all the pods.
Or use `kubectl get services` to see the state of all the services.
Or use `kubectl get deployments` to see the state of all the deployments.
See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for details.

Execute the following command to delete all ThingsBoard microservices:

`
$ ./k8s-delete-resources.sh
`

Execute the following command to delete all third-party microservices:

`
$ ./k8s-delete-thirdparty.sh
`

Execute the following command to delete all resources (including database):

`
$ ./k8s-delete-all.sh
`

## Upgrading

In case when database upgrade is needed, execute the following commands:

```
$ ./k8s-delete-resources.sh
$ ./k8s-upgrade-tb.sh --fromVersion=[FROM_VERSION]
$ ./k8s-deploy-resources.sh
```

Where:

- `FROM_VERSION` - from which version upgrade should be started. See [Upgrade Instructions](https://thingsboard.io/docs/user-guide/install/upgrade-instructions) for valid `fromVersion` values.


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
