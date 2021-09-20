---
layout: docwithnav
assignees:
- ashvayka
title: Monolith setup using GCP infrastructure
description: ThingsBoard IoT platform monolith setup with Kubernetes in GKE

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in monolith mode in GKE. 

## Prerequisites

ThingsBoard Microservices run on the Kubernetes cluster. You need to have a Kubernetes cluster, and the `kubectl` command-line tool must be configured to communicate with your cluster. 

## Step 1. Clone ThingsBoard CE K8S scripts repository

```bash
git clone https://github.com/thingsboard/thingsboard-ce-k8s.git
cd thingsboard-ce-k8s/gcp/monolith
```

## Step 2. Configure and create GKE cluster

Please follow [this](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster) guide to set up a GCP cluster.

For this deployment you'll need **2** nodes of **e2-standard-2** machine type. You can find this configuration in the `NODE POOLS` submenu:

![image](/images/install/cloud/gcp-cluster-create.png)

To update context of Kubectl execute this command:

```
gcloud container clusters get-credentials $CLUSTER_NAME
```

where **$CLUSTER_NAME** is the name you gave to your cluster.

## Step 3. Installation

Execute the following command to run installation:
```
 ./k8s-install-tb.sh --loadDemo
```

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

After this command finish you should see the next line in the console:

```
Installation finished successfully!
```

## Step 4. Starting

Execute the following command to deploy resources:

```
 ./k8s-deploy-resources.sh
```

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to 
see `tb-node-0` pod in the `READY` state. 

## Step 5. Using

Now you can open ThingsBoard web interface in your browser using DNS name of the load balancer.

You can see DNS name of the load-balancers using command:

```
kubectl get service
```

You should see the similar picture:

![image](/images/install/cloud/monolith-loadbalancers.png)

There are two load-balancers:
- tb-loadbalancer-external - for MQTT and HTTP protocols
- tb-coap-loadbalancer-external - for COAP protocol

Use `EXTERNAL-IP` field of the load-balancers to connect to the cluster.

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

If you installed DataBase with demo data (using `--loadDemo` flag) you can also use the following credentials:

- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

```
kubectl logs -f tb-node-0
```

Or use `kubectl get pods` to see the state of the pod.
Or use `kubectl get services` to see the state of all the services.
Or use `kubectl get deployments` to see the state of all the deployments.
See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for details.

Execute the following command to delete **tb-node** and **load-balancers**:

```
./k8s-delete-resources.sh
```

Execute the following command to delete all data (including database):

```
./k8s-delete-all.sh
```

## Upgrading

In case when database upgrade is needed, execute the following commands:

```
 ./k8s-delete-resources.sh
 ./k8s-upgrade-tb.sh --fromVersion=[FROM_VERSION]
 ./k8s-deploy-resources.sh
```

Where:

- `FROM_VERSION` - from which version upgrade should be started. See [Upgrade Instructions](/docs/user-guide/install/upgrade-instructions) for valid `fromVersion` values.

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
