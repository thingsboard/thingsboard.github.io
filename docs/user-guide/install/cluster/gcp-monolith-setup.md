---
layout: docwithnav
assignees:
- ashvayka
title: Monolith setup using GCP infrastructure
description: ThingsBoard IoT platform monolith setup with Kubernetes in GKE

---

* TOC
{:toc}

This guide will help you to set up ThingsBoard in monolith mode in GKE. 

## Prerequisites

{% include templates/install/gcp/gke-prerequisites.md %}

## Step 1. Clone ThingsBoard CE K8S scripts repository

Clone the repository and change the working directory to GCP scripts.

```bash
git clone -b release-{{ site.release.ver }} https://github.com/thingsboard/thingsboard-сe-k8s.git
cd thingsboard-сe-k8s/gcp/monolith
```
{: .copy-code}

## Step 2. Define environment variables

Define environment variables that you will use in various commands later in this guide.

We assume you are using Linux. Execute the following command:

```bash
export GCP_PROJECT=$(gcloud config get-value project)
export GCP_REGION=us-central1
export GCP_ZONE=us-central1-a
export GCP_NETWORK=default
export TB_CLUSTER_NAME=tb-ce
export TB_DATABASE_NAME=tb-db
echo "You have selected project: $GCP_PROJECT, region: $GCP_REGION, network: $GCP_NETWORK zone: $GCP_ZONE, cluster: $TB_CLUSTER_NAME and database: $TB_DATABASE_NAME"
```
{: .copy-code}

where:

 * first line uses gcloud command to fetch your current GCP project id. We will refer to it later in this guide using **GCP_PROJECT**;
 * *us-central1* is one of the available compute [regions](https://cloud.google.com/compute/docs/regions-zones#available). We will refer to it later in this guide using **GCP_REGION**;  
 * *us-central1-a* is one of the available compute [zones](https://cloud.google.com/compute/docs/regions-zones#available). Should match the selected region. We will refer to it later in this guide using **GCP_ZONE**;
 * *default* is a default GCP network name; We will refer to it later in this guide using **;GCP_NETWORK**;
 * *tb-ce* is the name of your cluster. You may input a different name. We will refer to it later in this guide using **$TB_CLUSTER_NAME**;
 * *tb-db* is the name of your database server. You may input a different name. We will refer to it later in this guide using **TB_DATABASE_NAME**;

## Step 3. Configure and create GKE cluster

Create a zonal cluster with **1** node of **e2-standard-4** machine type.

Execute the following command (recommended):

```bash
gcloud container clusters create $TB_CLUSTER_NAME \
--release-channel stable \
--zone $GCP_ZONE \
--node-locations $GCP_ZONE \
--network=$GCP_NETWORK \
--enable-ip-alias \
--num-nodes=1 \
--machine-type=e2-standard-4
```
{: .copy-code}

Alternatively, you may use [this](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster) guide for custom cluster setup.

## Step 4. Update the context of kubectl

Update the context of kubectl using command:

```
gcloud container clusters get-credentials $TB_CLUSTER_NAME --zone $GCP_ZONE
```
{: .copy-code}
 

## Step 5. Provision Google Cloud SQL (PostgreSQL) Instance

#### 5.1 Prerequisites

Enable service networking to allow your K8S cluster connect to the DB instance:

```bash
gcloud services enable servicenetworking.googleapis.com --project=$GCP_PROJECT

gcloud compute addresses create google-managed-services-$GCP_NETWORK \
--global \
--purpose=VPC_PEERING \
--prefix-length=16 \
--network=projects/$GCP_PROJECT/global/networks/$GCP_NETWORK

gcloud services vpc-peerings connect \
--service=servicenetworking.googleapis.com \
--ranges=google-managed-services-$GCP_NETWORK \
--network=$GCP_NETWORK \
--project=$GCP_PROJECT
    
```
{: .copy-code}

#### 5.2 Create database server instance

Create the PostgreSQL instance with database version "**PostgreSQL 12**" and the following recommendations:

* use the same region where your K8S cluster **COMPUTE_ZONE** is located;
* use the same VPC network where your K8S cluster **COMPUTE_ZONE** is located;
* use private IP address to connect to your instance and disable public IP address;
* use highly available DB instance for production and single zone instance for development clusters;
* use at least 2 vCPUs and 7.5 GB RAM, which is sufficient for most of the workloads. You may scale it later if needed;

Execute the following command:

```bash

gcloud beta sql instances create $TB_DATABASE_NAME \
--database-version=POSTGRES_12 \
--region=$GCP_REGION --availability-type=regional \
--no-assign-ip --network=projects/$GCP_PROJECT/global/networks/$GCP_NETWORK \
--cpu=2 --memory=7680MB
```
{: .copy-code}

Alternatively, you may follow [this](https://cloud.google.com/sql/docs/postgres/create-instance) guide to configure your database.

Note your IP address (**YOUR_DB_IP_ADDRESS**) from command output. Successful command output should look similar to this:

```text
Created [https://sqladmin.googleapis.com/sql/v1beta4/projects/YOUR_PROJECT_ID/instances/thingsboard-db].
NAME            DATABASE_VERSION  LOCATION       TIER              PRIMARY_ADDRESS  PRIVATE_ADDRESS  STATUS
tb-db           POSTGRES_12       us-central1-f  db-custom-2-7680  35.192.189.68    -                RUNNABLE
```

#### 5.3 Set database password

Set password for your new database server instance:

```bash
gcloud sql users set-password postgres \
--instance=$TB_DATABASE_NAME \
--password=secret
```

where:

 * *thingsboard* is the name of your database. You may input a different name. We will refer to it later in this guide using **YOUR_DB_NAME**;
 * *secret* is the password. You **should** input a different password. We will refer to it later in this guide using **YOUR_DB_PASSWORD**;

#### 5.4 Create database

Create "thingsboard" database inside your postgres database server instance:

```bash
gcloud sql databases create thingsboard --instance=$TB_DATABASE_NAME
```

## Step 6. Installation

Edit "tb-node-db-configmap.yml" and replace **YOUR_DB_IP_ADDRESS** and **** with the values you have obtained during [step 3](#step-3-provision-google-cloud-sql-postgresql-instance).

```bash
nano tb-node-db-configmap.yml
```
{: .copy-code}

Execute the following command to run installation:

```bash
 ./k8s-install-tb.sh --loadDemo
```
{: .copy-code}

where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

After this command finish you should see the next line in the console:

```
Installation finished successfully!
```

## Step 7. Starting

Execute the following command to deploy resources:

```
./k8s-deploy-resources.sh
```
{: .copy-code}

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to
see `tb-node-0` pod in the `READY` state.

## Step 8. Configure Load Balancers

### 8.1 Configure HTTP(S) Load Balancer

Configure HTTP(S) Load Balancer to access web interface of your ThingsBoard instance. Basically you have 3 possible options of configuration:

 * http - Load Balancer without HTTPS support. Recommended **for development.** 
   The only advantage is simple configuration and minimum costs. May be good option for development server but definitely not suitable for production.
 * https - Load Balancer with HTTPS support. Recommended **for production.** Acts as an SSL termination point. 
   You may easily configure it to issue and maintain a valid SSL certificate. Automatically redirects all non-secure (HTTP) traffic to secure (HTTPS) port.
 * transparent - Load Balancer that simply forwards traffic to http and https ports of the ThingsBoard. Requires you to provision and maintain valid SSL certificate. 
   Useful for production environments that can't tolerate the LB to be an SSL termination point.

See links/instructions below on how to configure each of the suggested options.

#### HTTP Load Balancer

Execute the following command to deploy plain http load balancer:

```bash
kubectl apply -f receipts/http-load-balancer.yml
```
{: .copy-code}

The process of load balancer provisioning may take some time. You may periodically check the status of the load balancer using the following command:

```bash
kubectl get ingress
```
{: .copy-code}

Once provisioned, you should see similar output:

```text
NAME                   CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-http-loadbalancer   <none>   *       34.111.24.134   80      7m25s
```

Now, you may use the address (the one you see instead of 34.111.24.134 in the command output) to access HTTP web UI (port 80) and connect your devices via [HTTP API](/docs/{{docsPrefix}}reference/http-api/)
Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

#### HTTPS Load Balancer

The process of configuring the load balancer using Google-managed SSL certificates is described on the official [documentation page](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs).
The instructions below are extracted from the official documentation. Make sure you read [prerequisites](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs#prerequisites) carefully before proceeding.

```bash
gcloud compute addresses create thingsboard-http-lb-address --global
```

Replace the *PUT_YOUR_DOMAIN_HERE* with valid domain name in the *https-load-balancer.yml* file:

```bash
nano https-load-balancer.yml
```

Execute the following command to deploy secure http load balancer:

```bash
 kubectl apply -f receipts/https-load-balancer.yml
```
{: .copy-code}

The process of load balancer provisioning may take some time. You may periodically check the status of the load balancer using the following command:

```bash
kubectl get ingress
```
{: .copy-code}

Once provisioned, you should see similar output:

```text
NAME                   CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-https-loadbalancer   <none>   *       34.111.24.134   80      7m25s
```

Now, **assign the domain name** you have used to the load balancer IP address (the one you see instead of 34.111.24.134 in the command output).

Check that the domain name is configured correctly using dig:

```bash
dig YOUR_DOMAIN_NAME
```

Sample output:

```text

; <<>> DiG 9.11.3-1ubuntu1.16-Ubuntu <<>> YOUR_DOMAIN_NAME
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12513
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;YOUR_DOMAIN_NAME.	IN	A

;; ANSWER SECTION:
YOUR_DOMAIN_NAME. 36 IN	A	34.111.24.134

;; Query time: 0 msec
;; SERVER: 127.0.0.53#53(127.0.0.53)
;; WHEN: Fri Nov 19 13:00:00 EET 2021
;; MSG SIZE  rcvd: 74

```

Once assigned, wait for the Google-managed certificate to finish provisioning. This might take up to 60 minutes. You can check the status of the certificate using the following command:

```bash
kubectl describe managedcertificate managed-cert
```

Certificate will be eventually provisioned if you have configured domain records properly.
Once provisioned, you may use your domain name to access Web UI (over https) and connect your devices via [HTTP API](/docs/{{docsPrefix}}reference/http-api/).

{% capture https_lb_device_api_warn %}
**NOTE**: The load balancer will redirect all HTTP traffic to HTTPS. Devices that do not support HTTPS will not be able to connect to ThingsBoard. 
If you would like to support such devices, you may either deploy separate load balancer for HTTP transport (recommended) 
or disable the redirect behavior by changing the *redirectToHttps* setting in the *https-load-balancer.yml* file.

{% endcapture %}
{% include templates/warn-banner.md content=https_lb_device_api_warn %}

#### Transparent Load Balancer

This type of the load balancer requires you to provision and maintain valid SSL certificate on your own. 
Follow the generic [HTTP over SSL](/docs/{{docsPrefix}}user-guide/ssl/http-over-ssl/#ssl-configuration-using-pem-certificates-file) guide 
to configure required environment variables in the *tb-node.yml* file.

Afterwards, setup TCP load balancer to forward traffic from 443 port to corresponding services port 8080. 
This version of setup does not support an automatic redirect of http port 80 to https port 443.

```bash
 kubectl apply -f receipts/transparent-http-load-balancer.yml.yml
```
{: .copy-code}
 
## 8.2. Configure MQTT Load Balancer

{% assign tbServicesFile = "tb-node.yml" %}
{% include templates/install/aws/configure-mqtts.md %}

## Step 7. Using

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
