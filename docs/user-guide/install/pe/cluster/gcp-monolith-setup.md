---
layout: docwithnav-pe
assignees:
- ashvayka
title: Monolith setup using GCP infrastructure 
description: ThingsBoard IoT platform monolith setup with Kubernetes in GKE

---

* TOC
{:toc}

This guide will help you to set up ThingsBoard in monolith mode using [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine). 

## Prerequisites

{% include templates/install/gcp/gke-prerequisites.md %}

#### Checkout ThingsBoard PE images from docker store

{% assign checkoutMode = "monolith" %}
{% include templates/install/dockerhub/checkout.md %}

## Step 1. Clone ThingsBoard PE K8S scripts repository

Clone the repository and change the working directory to GCP scripts.

```bash
git clone -b release-{{ site.release.ver }} https://github.com/thingsboard/thingsboard-pe-k8s.git
cd thingsboard-pe-k8s/gcp/monolith
```
{: .copy-code}

## Step 2. Configure and create GKE cluster

Create a zonal cluster with **1** node of **e2-standard-4** machine type.

Follow [this](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster) guide (recommended) or execute the following command: 

```bash
gcloud container clusters create tb3 \
--release-channel stable \
--zone us-central1-a \
--node-locations us-central1-a \
--enable-ip-alias \
--num-nodes=1 \
--machine-type=e2-standard-4
```
{: .copy-code}

where:

 * *thingsboard* is the name of your cluster. You may input a different name. We will refer to it later in this guide using **CLUSTER_NAME**;
 * *us-central1-a* is one of the available compute [zones](https://cloud.google.com/compute/docs/regions-zones#available). We will refer to it later in this guide using **COMPUTE_ZONE**;

Then, update context of kubectl using command:

```
gcloud container clusters get-credentials $CLUSTER_NAME
```
{: .copy-code}

where **$CLUSTER_NAME** is the name you gave to your cluster.

## Step 3. Provision Google Cloud SQL (PostgreSQL) Instance

Create the PostgreSQL instance with database version "**PostgreSQL 12**" and the following recommendations:

 * use the same region where your K8S cluster **COMPUTE_ZONE** is located;
 * use the same VPC network where your K8S cluster **COMPUTE_ZONE** is located;
 * use private IP address to connect to your instance and disable public IP address;  
 * use highly available DB instance for production and single zone instance for development clusters;  
 * use at least 2 vCPUs and 7.5 GB RAM, which is sufficient for most of the workloads. You may scale it later if needed;
 

Follow [this](https://cloud.google.com/sql/docs/postgres/create-instance) guide (recommended) or execute the following command:

```bash
gcloud beta sql instances create thingsboard-db4 \
--database-version=POSTGRES_12 \
--region=us-central1 --availability-type=regional \
--no-assign-ip --network=projects/tb-ce-gke/global/networks/default \
--cpu=2 --memory=7680MB \
```
{: .copy-code}

where:

* *thingsboard-db* is the name of your database server instance;
* *us-central1* is one of the available compute [regions](https://cloud.google.com/compute/docs/regions-zones#available). Should contain the **COMPUTE_ZONE** you have previously specified during cluster creation;

Note your IP address (**YOUR_DB_IP_ADDRESS**) from command output. Successful command output should look similar to this:

```text
Created [https://sqladmin.googleapis.com/sql/v1beta4/projects/YOUR_PROJECT_ID/instances/thingsboard-db].
NAME            DATABASE_VERSION  LOCATION       TIER              PRIMARY_ADDRESS  PRIVATE_ADDRESS  STATUS
thingsboard-db  POSTGRES_12       us-central1-f  db-custom-2-7680  35.192.189.68    -                RUNNABLE
```

Set password for your new database server instance:

```bash
gcloud sql users set-password postgres \
--instance=thingsboard-db4 \
--password=secret
```

where:
* *thingsboard* is the name of your database. You may input a different name. We will refer to it later in this guide using **YOUR_DB_NAME**;
* *secret* is the password. You **should** input a different password. We will refer to it later in this guide using **YOUR_DB_PASSWORD**;

Create "thingsboard" database inside your postgres database server instance:

```bash
gcloud sql databases create thingsboard --instance=thingsboard-db4
```

## Step 4. Upload Docker credentials

{% include templates/install/dockerhub/upload-docker-credentials.md %}

## Step 5. Installation

Edit "tb-node-db-configmap.yml" and replace **YOUR_DB_IP_ADDRESS**, **YOUR_DB_NAME** and **YOUR_DB_PASSWORD** with the values you have obtained during [step 3](#step-3-provision-google-cloud-sql-postgresql-instance).

{% include templates/install/aws/eks-installation.md %}

## Step 5. Configure secure HTTP connection

**Note**: if you don't need SSL connection over HTTP, you'll need to remove **tls:** and **- secretName: ssl-cert-secret** 
lines in the `routes.yml` file and skip this step.

Follow [this guide](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-multi-ssl#creating_certificates_and_keys) to create your own SSL certificate.
After the certificate is created call the next command:

```
kubectl create secret tls ssl-cert-secret --cert CERT_FILE --key KEY_FILE
```
where:
- CERT_FILE: the path to your certificate file.
- KEY_FILE: the path to the key file that goes with your certificate.
 
## Step 6. Configure secure MQTT connection

Follow [this guide](/docs/user-guide/mqtt-over-ssl/) to create a **.jks** file with the SSL certificate.
Afterwards, you need to set **MQTT_SSL_KEY_STORE_PASSWORD** and **MQTT_SSL_KEY_PASSWORD** environment variables in the `tb-node.yml` file
to the corresponding key-store and certificate key passwords.

You'll need to create a config-map with your JKS file, you can do it by calling command:

```
kubectl create configmap tb-mqtts-config \
             --from-file=server.jks=YOUR_JKS_FILENAME.jks -o yaml --dry-run=client | kubectl apply -f -
```
{: .copy-code}

where **YOUR_JKS_FILENAME** is the name of your **.jks** file.

**Note**: if you don't need SSL connection over MQTT, you'll need to set **MQTT_SSL_ENABLED** environment variable to **false**
and delete all notions of **tb-mqtts-config** in the `tb-node.yml` file.

## Step 7. Starting

Configure your license key:

```
nano tb-node.yml
```

and put the license secret parameter 

```
# tb-node StatefulSet configuration

- name: TB_LICENSE_SECRET
  value: "PUT_YOUR_LICENSE_SECRET_HERE"
```

Execute the following command to deploy third-party resources:

```
./k8s-deploy-resources.sh
```
{: .copy-code}

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to 
see `tb-node-0` pod in the `READY` state. 

## Step 8. Using

Now you can open ThingsBoard web interface in your browser using DNS name of the load balancer.

You can see DNS name (the `ADDRESS` column) of the HTTP load-balancer using command:
```
kubectl get ingress
```

You should see the similar picture:

![image](/images/install/cloud/application-loadbalancers.png)

To connect to the cluster via MQTT or COAP you'll need to get corresponding service, you can do it with command:

```
kubectl get service
```
{: .copy-code}

You should see the similar picture:

![image](/images/install/cloud/network-loadbalancers.png)

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

Or use `kubectl get pods` to see the state of all the pods.
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

- `FROM_VERSION` - from which version upgrade should be started. See [Upgrade Instructions](/docs/user-guide/install/pe/upgrade-instructions) for valid `fromVersion` values.

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
