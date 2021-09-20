---
layout: docwithnav
assignees:
- ashvayka
title: Microservices setup using GCP infrastructure
description: ThingsBoard IoT platform microservices setup with Kubernetes in GKE

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in microservices mode in GKE. 

## Prerequisites

ThingsBoard Microservices run on the Kubernetes cluster. You need to have a Kubernetes cluster, and the `kubectl` command-line tool must be configured to communicate with your cluster. 

## Step 1. Clone ThingsBoard CE K8S scripts repository

```bash
git clone https://github.com/thingsboard/thingsboard-ce-k8s.git
cd thingsboard-ce-k8s/gcp/microservices
```

## Step 2. Configure and create GKE cluster

Please follow [this](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster) guide to set up a GCP cluster.

For this deployment you'll need **4** nodes of **e2-standard-2** machine type. You can find this configuration in the `NODE POOLS` submenu:

![image](/images/install/cloud/gcp-cluster-create.png)

To update context of Kubectl execute this command:

```
gcloud container clusters get-credentials $CLUSTER_NAME
```

where **$CLUSTER_NAME** is the name you gave to your cluster.

## Step 3. CPU and Memory resources allocation

The scripts have preconfigured values of resources for each service. You can change them in `.yml` files under `resources` submenu.

**Note**: if you want to allocate more resources you'll need to increase the number of Amazon nodes or use larger machines. 

Recommended CPU/memory resources allocation:
- TB Node: 1.5 CPU / 6Gi memory
- TB HTTP Transport: 0.4 CPU / 1.6Gi memory
- TB MQTT Transport: 0.4 CPU / 1.6Gi memory
- TB COAP Transport: 0.4 CPU / 1.6Gi memory
- TB Web UI: 0.3 CPU / 0.5Gi memory
- JS Executor: 0.1 CPU / 0.3Gi memory
- Zookeeper: 0.3 CPU / 1Gi memory
- Kafka: 1 CPU / 4Gi memory
- Redis: 0.3 CPU / 1.2Gi memory
- PostgreSQL: 0.8 CPU / 3.2Gi memory

## Step 4. Installation

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

Otherwise, please check if you set the PostgreSQL URL in the `tb-node-db-configmap.yml` correctly.

## Step 5. Starting

Execute the following command to deploy third-party resources:

```
 ./k8s-deploy-thirdparty.sh
```

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to see 
`tb-kafka`, `tb-redis` and 3 `zookeeper` pods.
Every pod should be in the `READY` state. 

Execute the following command to deploy ThingsBoard resources:

```
 ./k8s-deploy-resources.sh
```

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to see 
`tb-coap-transport-0`, `tb-http-transport-0`, `tb-mqtt-transport-0`, two `tb-js-executor`, `tb-node-0` and `tb-web-ui` pods.
Every pod should be in the `READY` state. 

## Step 6. Using

Now you can open ThingsBoard web interface in your browser using DNS name of the load balancer.

You can see DNS name (the `ADDRESS` column) of the HTTP load-balancer using command:
```
kubectl get ingress
```

You should see the similar picture:

![image](/images/install/cloud/microservices-application-loadbalancers.png)

To connect to the cluster via MQTT or COAP you'll need to get corresponding service, you can do it with command:
```
kubectl get service
```

You should see the similar picture:

![image](/images/install/cloud/microservices-network-loadbalancers.png)


There are two load-balancers:
- tb-mqtt-loadbalancer-external - for MQTT protocol
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

Or use `kubectl get pods` to see the state of the pods.
Or use `kubectl get services` to see the state of all the services.
Or use `kubectl get deployments` to see the state of all the deployments.
See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for details.

Execute the following command to delete all ThingsBoard pods:

```
./k8s-delete-resources.sh
```


Execute the following command to delete all third-party resources:

```
./k8s-delete-thirdparty.sh
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
