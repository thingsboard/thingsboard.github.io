---
layout: docwithnav-mqtt-broker
assignees:
- dshvaika
title: Cluster setup using GCP infrastructure
description: TBMQ microservices setup with Kubernetes in GCP GKE

---

* TOC
{:toc}

This guide will help you to setup TBMQ in microservices mode in GKE. 

## Prerequisites

{% include templates/install/gcp/gke-prerequisites.md %}

## Step 1. Clone TBMQ K8S scripts repository

```bash
git clone -b {{ site.release.broker_branch }} https://github.com/thingsboard/tbmq.git
cd tbmq/k8s/gcp
```
{: .copy-code}

## Step 2. Define environment variables

{% assign tbClusterName = "tbmq-cluster" %}
{% assign tbDbClusterName = "tbmq-db" %}
{% include templates/mqtt-broker/install/gcp/env-variables.md %}

## Step 3. Configure and create GKE cluster

{% include templates/install/gcp/regional-gke-cluster.md %}

## Step 4. Update the context of kubectl

{% include templates/install/gcp/update-kubectl-region.md %}

## Step 5. Provision Google Cloud SQL (PostgreSQL) Instance

{% assign tbDbName = "thingsboard_mqtt_broker" %}
{% include templates/mqtt-broker/install/gcp/provision-postgresql.md %}

#### 5.5 Edit database settings

Replace **YOUR_DB_IP_ADDRESS**, **YOUR_DB_PASSWORD** and **YOUR_DB_NAME** with the correct values:

```bash
nano tb-broker-db-configmap.yml
```
{: .copy-code}

## Step 6. Create Namespace

Let's create a dedicated namespace for our TBMQ cluster deployment to ensure better resource isolation and management.

```bash
kubectl apply -f tb-broker-namespace.yml
kubectl config set-context $(kubectl config current-context) --namespace=thingsboard-mqtt-broker
```
{: .copy-code}

## Step 7. Provision Valkey cluster

{% include templates/mqtt-broker/install/cluster-common/provision-redis-cluster.md %}

## Step 8. Installation

{% include templates/mqtt-broker/install/gcp/install.md %}

{% capture aws-rds %}

Otherwise, please check if you set the PostgreSQL URL and PostgreSQL password in the `tb-broker-db-configmap.yml` correctly.

{% endcapture %}
{% include templates/info-banner.md content=aws-rds %}

## Step 9. Provision Kafka

{% include templates/mqtt-broker/install/cluster-common/provision-kafka-new.md %}

## Step 10. Starting

{% include templates/mqtt-broker/install/cluster-common/starting.md %}

## Step 11. Configure Load Balancers

### 11.1 Configure HTTP(S) Load Balancer

Configure HTTP(S) Load Balancer to access web interface of your TBMQ instance. Basically, you have 2 possible configuration options:

* http - Load Balancer without HTTPS support. Recommended for **development**. The only advantage is simple configuration and minimum costs. May be good option for development server but definitely not suitable for production.
* https - Load Balancer with HTTPS support. Recommended for **production**. Acts as an SSL termination point. You may easily configure it to issue and maintain a valid SSL certificate. Automatically redirects all non-secure (HTTP) traffic to secure (HTTPS) port.

See links/instructions below on how to configure each of the suggested options.

#### HTTP Load Balancer

{% include templates/mqtt-broker/install/cluster-common/configure-http-load-balancer.md %}

#### HTTPS Load Balancer

{% assign staticIP = "tbmq-http-lb-address" %}
{% include templates/mqtt-broker/install/gcp/configure-https-load-balancer.md %}
Once provisioned, you may use your domain name to access Web UI (over https).

### 11.2 Configure MQTT Load Balancer

{% include templates/mqtt-broker/install/cluster-common/configure-mqtt-load-balancer.md %}

## Step 12. Validate the setup

{% include templates/mqtt-broker/install/cluster-common/validate-the-setup.md %}

### Validate MQTT access

{% include templates/mqtt-broker/install/cluster-common/validate-mqtt-access.md %}

### Troubleshooting

{% include templates/mqtt-broker/install/cluster-common/troubleshooting.md %}

## Upgrading

{% include templates/mqtt-broker/upgrade/upgrading.md %}

### Backup and restore (Optional)

While backing up your PostgreSQL database is highly recommended, it is optional before proceeding with the upgrade.
For further guidance, follow the [next instructions](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-backup-restore).

### Upgrade to 2.2.0

In this release, the MQTT authentication mechanism was migrated from YAML/env configuration into the database.
During upgrade, TBMQ needs to know which authentication providers are enabled in your deployment.
This information is provided through environment variables passed to the **upgrade pod**.

The upgrade script requires a file named **`database-setup.yml`** that explicitly defines these variables.
Environment variables from your `tb-broker.yml` file are not applied during the upgrade — only the values in `database-setup.yml` will be used.

> **Tips**
> If you use only Basic authentication, set `SECURITY_MQTT_SSL_ENABLED=false`.
> If you use only X.509 authentication, set `SECURITY_MQTT_BASIC_ENABLED=false` and `SECURITY_MQTT_SSL_ENABLED=true`.

**Supported variables**

* `SECURITY_MQTT_BASIC_ENABLED` (`true|false`)
* `SECURITY_MQTT_SSL_ENABLED` (`true|false`)
* `SECURITY_MQTT_SSL_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT` (`true|false`) — usually `false`.

Once the file is prepared and the values verified, proceed with the [upgrade process](#run-upgrade).

### Upgrade to 2.1.0

{% include templates/mqtt-broker/upgrade/update-to-2.1.0-release-cluster.md %}

### Upgrade to 2.0.0

For the TBMQ v2.0.0 upgrade, if you haven't installed Redis yet, please follow [step 7](#step-7-provision-valkey-cluster) to complete the installation.
Only then you can proceed with the [upgrade](#run-upgrade).

### Run upgrade

In case you would like to upgrade, please pull the recent changes from the latest release branch:

```bash
git pull origin {{ site.release.broker_branch }}
```
{: .copy-code}

{% include templates/mqtt-broker/upgrade/upgrade-to-custom-release.md %}

**Note**: Make sure custom changes of yours if available are not lost during the merge process.

{% include templates/mqtt-broker/install/upgrade-hint.md %}

After that, execute the following command:

{% capture tabspec %}tbmq-upgrade
tbmq-upgrade-without-from-version,Since v2.1.0,shell,resources/upgrade-options/k8s-upgrade-tbmq-without-from-version.sh,/docs/mqtt-broker/install/cluster/resources/upgrade-options/k8s-upgrade-tbmq-without-from-version.sh
tbmq-upgrade-with-from-version,Before v2.1.0,markdown,resources/upgrade-options/k8s-upgrade-tbmq-with-from-version.md,/docs/mqtt-broker/install/cluster/resources/upgrade-options/k8s-upgrade-tbmq-with-from-version.md{% endcapture %}
{% include tabs.html %}

{% include templates/mqtt-broker/upgrade/stop-tbmq-pods-before-upgrade.md %}

## Cluster deletion

Execute the following command to delete TBMQ nodes:

```bash
./k8s-delete-tbmq.sh
```
{: .copy-code}

Execute the following command to delete all TBMQ nodes and configmaps, load balancers, etc.:

```bash
./k8s-delete-all.sh
```
{: .copy-code}

Execute the following command to delete the GKE cluster:

```bash
gcloud container clusters delete $TB_CLUSTER_NAME --region=$GCP_REGION
```
{: .copy-code}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
