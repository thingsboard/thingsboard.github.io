---
layout: docwithnav-pe
assignees:
- ashvayka
title: Microservices custom setup using AWS infrastructure
description: ThingsBoard IoT platform microservices custom setup with Kubernetes in AWS EKS

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in microservices custom mode in AWS EKS. 

## Prerequisites

{% include templates/install/aws-eks-prerequisites.md %}

## Step 1. Clone ThingsBoard PE K8S scripts repository

```bash
git clone https://github.com/thingsboard/thingsboard-pe-k8s.git
cd thingsboard-pe-k8s/aws/custom-microservices
```

## Step 2. Configure and create EKS cluster

In the `cluster.yml` file you can find suggested cluster configuration. 
Here are the fields you can change depending on your needs:
- `region` - should be the AWS region where you want your cluster to be located (the default value is `us-east-1`)
- `availabilityZones` - should specify the exact IDs of the region's availability zones 
(the default value is `[us-east-1a,us-east-1b,us-east-1c]`)
- `instanceType` - the type of the instance with TB node (the default value is `m5.large`)

**Note**: if you don't make any changes to `instanceType` and `desiredCapacity` fields, the EKS will deploy **4** nodes of type **m5.large**.

Command to create AWS cluster:
```
eksctl create cluster -f cluster.yml
```
{: .copy-code}

## Step 3. Create AWS load-balancer controller

After the cluster is ready you'll need to create AWS load-balancer controller.
You can do it by following [this](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html) guide.

## Step 4. Upload Docker credentials

Make sure your have logged in to docker hub using command line. To upload Docker credentials, please execute next command:

```
./k8s-upload-docker-credentials.sh
```
{: .copy-code}

Or you can use the following command:

```
kubectl create secret docker-registry regcred --docker-server=https://index.docker.io/v1/ --docker-username=$YOUR_USERNAME --docker-password=$YOUR_PASSWORD --docker-email=$YOUR_EMAIL
```
{: .copy-code}

## Step 5. Installation

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

## Step 6. Configure secure HTTP connection

**Note**: if you don't need SSL connection over HTTP, you'll need to remove **alb.ingress.kubernetes.io/listen-ports** and **alb.ingress.kubernetes.io/certificate-arn** 
lines in the `routes.yml` file and skip this step.

Use [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) to create or import SSL certificate.
After creation/import you'll need to copy certificate's ARN and paste it instead of **ARN_VALUE** in the `routes.yml` file:

![image](/images/install/cloud/aws-certificate-arn.png)
 
## Step 7. Configure secure MQTT connection

Follow [this guide](/docs/user-guide/mqtt-over-ssl/) to create a **.jks** file with the SSL certificate.
Afterwards, you need to set **MQTT_SSL_KEY_STORE_PASSWORD** and **MQTT_SSL_KEY_PASSWORD** environment variables in the `thingsboard.yml` file
to the corresponding key-store and certificate key passwords.

You'll need to create a config-map with your JKS file, you can do it by calling command:

```
kubectl create configmap tb-mqtts-config \
             --from-file=server.jks=YOUR_JKS_FILENAME.jks -o yaml --dry-run=client | kubectl apply -f -
```
{: .copy-code}

where **YOUR_JKS_FILENAME** is the name of your **.jks** file.

**Note**: if you don't need SSL connection over MQTT, you'll need to set **MQTT_SSL_ENABLED** environment variable to **false**
and delete all notions of **tb-mqtts-config** in the `thingsboard.yml` file.

## Step 8. CPU and Memory resources allocation

The scripts have preconfigured values of resources for each service. You can change them in `.yml` files under `resources` submenu.

**Note**: if you want to allocate more resources you'll need to increase the number of Amazon nodes or use larger machines. 

Recommended CPU/memory resources allocation:
- TB Node: 1.5 CPU / 6Gi memory
- TB HTTP Transport: 0.5 CPU / 2Gi memory
- TB MQTT Transport: 0.5 CPU / 2Gi memory
- TB COAP Transport: 0.5 CPU / 2Gi memory
- TB Web UI: 0.3 CPU / 0.5Gi memory
- JS Executor: 0.1 CPU / 0.3Gi memory
- Zookeeper: 0.3 CPU / 1Gi memory
- Kafka: 1 CPU / 4Gi memory
- Redis: 0.3 CPU / 1.2Gi memory
- PostgreSQL: 0.8 CPU / 3.2Gi memory

## Step 9. Starting

Execute the following command to deploy third-party resources:

```
./k8s-deploy-thirdparty.sh
```

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to see 
`tb-kafka-0`, `tb-redis` and 3 `zookeeper` pods in `READY` state.

Execute the following command to deploy ThingsBoard resources:

```
./k8s-deploy-resources.sh
```

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to see 
`tb-coap-transport-0`, `tb-http-transport-0`, `tb-mqtt-transport-0`, two `tb-js-executor`, `tb-node-0` and `tb-web-ui` pods in `READY` state.

## Step 10. Using

Now you can open ThingsBoard web interface in your browser using DNS name of the load balancer.

You can see DNS name (the `ADDRESS` column) of the HTTP load-balancer using command:
```
kubectl get ingress
```

You should see the similar picture:

![image](/images/install/cloud/aws-application-loadbalancers.png)

To connect to the cluster via MQTT or COAP you'll need to get corresponding service, you can do it with command:
```
kubectl get service
```

You should see the similar picture:

![image](/images/install/cloud/aws-network-loadbalancers.png)

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

Execute the following command to delete all third-party pods:

```
./k8s-delete-thirdparty.sh
```

Execute the following command to delete all resources including the database:

```
./k8s-delete-all.sh
```

Execute the following command to delete EKS cluster (you should change the name of the cluster and zone):
```
eksctl delete cluster -r us-east-1 -n thingsboard-cluster -w
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
