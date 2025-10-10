* TOC
{:toc}

This guide will help you set up TBMQ in AKS.

## Prerequisites

{% include templates/mqtt-broker/install/azure/aks-prerequisites.md %}

## Step 1. Open TBMQ K8S scripts repository

```bash
git clone -b {{ site.release.broker_branch }} https://github.com/thingsboard/tbmq.git
cd tbmq/k8s/azure
```
{: .copy-code}

## Step 2. Define environment variables

{% include templates/mqtt-broker/install/azure/aks-define-env-variables.md %}

## Step 3. Configure and create AKS cluster

{% include templates/mqtt-broker/install/azure/aks-configure-and-create-cluster.md %}

## Step 4. Update the context of kubectl

{% include templates/mqtt-broker/install/azure/aks-update-kubectl-ctx.md %}

## Step 5. Provision PostgreSQL DB

You’ll need to set up PostgreSQL on Azure. You may follow [this](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/quickstart-create-server-portal) guide,
but take into account the following requirements:

* Keep your postgresql password in a safe place. We will refer to it later in this guide using YOUR_AZURE_POSTGRES_PASSWORD;
* Make sure your Azure Database for PostgreSQL version is 17.x;
* Make sure your Azure Database for PostgreSQL instance is accessible from the TBMQ cluster;
* Make sure you use "thingsboard_mqtt_broker" as the initial database name.

**Note**: Use "High availability" enabled. It enables a lot of useful settings by default.

Another way by which you can create Azure Database for PostgreSQL is using az tool (don’t forget to replace ‘POSTGRESS_USER’ and ‘POSTGRESS_PASS’ with your username and password):

```bash
az postgres flexible-server create --location $AKS_LOCATION --resource-group $AKS_RESOURCE_GROUP \
  --name $TB_DATABASE_NAME --admin-user POSTGRESS_USER --admin-password POSTGRESS_PASS \
  --public-access 0.0.0.0 --storage-size 32 \
  --version 17 -d thingsboard_mqtt_broker
```
{: .copy-code}

`az postgres flexible-server create` has a lot of parameters, a few of them are:

* **location** - Location. Values from: `az account list-locations`;
* **resource-group (or -g)** - Name of resource group;
* **name** - Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters;
* **admin-user** - Administrator username for the server. Once set, it cannot be changed;
* **admin-password** - The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters;
* **public-access** - Determines the public access. Enter single or range of IP addresses to be included in the allowed list of IPs. IP address ranges must be dash-separated and not contain any spaces. Specifying 0.0.0.0 allows public access from any resources deployed within Azure to access your server. Setting it to “None” sets the server in public access mode but does not create a firewall rule;
* **storage-size** - The storage capacity of the server. Minimum is 32 GiB and maximum is 16 TiB;
* **version** - Server major version;
* **high-availability** - enable or disable high availability feature. High availability can only be set during flexible server creation (accepted values: Disabled, Enabled. Default value: Disabled);
* **database-name (or -d)** - The name of the database to be created when provisioning the database server.

You can see full parameters list [here](https://learn.microsoft.com/en-us/cli/azure/postgres/flexible-server?view=azure-cli-latest#az_postgres_flexible_server_create).

Example of response:

```text
{
  "connectionString": "postgresql://postgres:postgres@$tbmq-db.postgres.database.azure.com/postgres?sslmode=require",
  "databaseName": "thingsboard_mqtt_broker",
  "firewallName": "AllowAllAzureServicesAndResourcesWithinAzureIps_2021-11-17_15-45-6",
  "host": "tbmq-db.postgres.database.azure.com",
  "id": "/subscriptions/daff3288-1d5d-47c7-abf0-bfb7b738a18c/resourceGroups/myResourceGroup/providers/Microsoft.DBforPostgreSQL/flexibleServers/thingsboard_mqtt_broker",
  "location": "East US",
  "password": "postgres",
  "resourceGroup": "TBMQResources",
  "skuname": "Standard_D2s_v3",
  "username": "postgres",
  "version": "17"
}
```

Note the value of host from the command output (**tbmq-db.postgres.database.azure.com** in our case). Also note username and password (**postgres**) from the command.

Edit the database settings file and replace YOUR_AZURE_POSTGRES_ENDPOINT_URL with the host value, YOUR_AZURE_POSTGRES_USER and YOUR_AZURE_POSTGRES_PASSWORD with the correct values:

```bash
nano tbmq-db-configmap.yml
```
{: .copy-code}

## Step 6. Azure Cache for Valkey

TBMQ relies on **Valkey** to store messages for [DEVICE persistent clients](/docs/{{docsPrefix}}mqtt-broker/architecture/#persistent-device-client).
The cache also improves performance by reducing the number of direct database reads, especially when authentication is enabled and multiple clients connect at once.
Without caching, every new connection triggers a database query to validate MQTT client credentials, which can cause unnecessary load under high connection rates.

{% capture valkey-azure-version %}
**Note:** Starting from **TBMQ v2.3.0**, [Valkey](https://valkey.io/) **8.0** is officially supported.
Azure currently does **not** provide a managed Valkey service. However, Valkey is fully compatible with **Redis 7.2.x**, which is supported on Azure **Cache for Redis Enterprise** and **Enterprise Flash** SKUs.
The Basic, Standard, and Premium SKUs only support up to **Redis 6.x**, and are therefore **not recommended** for TBMQ deployments.
To ensure compatibility with TBMQ v2.3.0 and later, deploy your own Valkey cluster or use an Enterprise-tier SKU.
{% endcapture %}
{% include templates/info-banner.md content=valkey-azure-version %}

You can choose one of the following paths depending on your environment:

- [Deploy a Valkey cluster on AKS (Recommended)](https://learn.microsoft.com/en-us/azure/aks/valkey-overview)
- [Quickstart: Create a Redis Enterprise cache](https://learn.microsoft.com/en-us/azure/redis/quickstart-create-managed-redis)

Once your Valkey cluster is ready, update the cache configuration in `tbmq-cache-configmap.yml` with the correct endpoint values:

* **For standalone Valkey**:
  Uncomment and set the following values. Make sure the `REDIS_HOST` value does **not** include the port (`:6379`).

  ```yaml
  REDIS_CONNECTION_TYPE: "standalone"
  REDIS_HOST: "YOUR_VALKEY_ENDPOINT_URL_WITHOUT_PORT"
  #REDIS_PASSWORD: "YOUR_REDIS_PASSWORD"
  ```

* **For Valkey cluster**:
  Provide a comma-separated list of "host:port" node endpoints to bootstrap from.

  ```yaml
  REDIS_CONNECTION_TYPE: "cluster"
  REDIS_NODES: "COMMA_SEPARATED_LIST_OF_NODES"
  #REDIS_PASSWORD: "YOUR_REDIS_PASSWORD"
  # Recommended in Kubernetes for handling dynamic IPs and failover:
  #REDIS_LETTUCE_CLUSTER_TOPOLOGY_REFRESH_ENABLED: "true"
  #REDIS_JEDIS_CLUSTER_TOPOLOGY_REFRESH_ENABLED: "true"
  ```

## Step 7. Installation

Execute the following command to run the initial setup of the database.
This command will launch short-living TBMQ pod to provision necessary DB tables, indexes, etc.

```bash
./k8s-install-tbmq.sh
```
{: .copy-code}

After this command finish you should see the next line in the console:

```text
INFO  o.t.m.b.i.ThingsboardMqttBrokerInstallService - Installation finished successfully!
```

{% capture aws-rds %}

Otherwise, please check if you set the PostgreSQL URL and PostgreSQL password in the `tbmq-db-configmap.yml` correctly.

{% endcapture %}
{% include templates/info-banner.md content=aws-rds %}

## Step 8. Provision Kafka

{% include templates/mqtt-broker/install/cluster-common/provision-kafka-new.md %}

## Step 9. Starting

{% include templates/mqtt-broker/install/cluster-common/starting.md %}

## Step 10. Configure Load Balancers

### 10.1 Configure HTTP(S) Load Balancer

Configure HTTP(S) Load Balancer to access web interface of your TBMQ instance. Basically you have 2 possible options of configuration:

* http - Load Balancer without HTTPS support. Recommended for **development**. The only advantage is simple configuration and minimum costs. May be good option for development server but definitely not suitable for production.
* https - Load Balancer with HTTPS support. Recommended for **production**. Acts as an SSL termination point. You may easily configure it to issue and maintain a valid SSL certificate. Automatically redirects all non-secure (HTTP) traffic to secure (HTTPS) port.

See links/instructions below on how to configure each of the suggested options.

#### HTTP Load Balancer

{% include templates/mqtt-broker/install/cluster-common/configure-http-load-balancer.md %}

#### HTTPS Load Balancer

For using ssl certificates we can add our certificate directly in Azure ApplicationGateway using command:

```bash
az network application-gateway ssl-cert create \
   --resource-group $(az aks show --name $TB_CLUSTER_NAME --resource-group $AKS_RESOURCE_GROUP --query nodeResourceGroup | tr -d '"') \
   --gateway-name $AKS_GATEWAY\
   --name TBMQHTTPSCert \
   --cert-file YOUR_CERT \
   --cert-password YOUR_CERT_PASS
```
{: .copy-code}

Execute the following command to deploy plain https load balancer:

```bash
kubectl apply -f receipts/https-load-balancer.yml
```
{: .copy-code}

### 10.2 Configure MQTT Load Balancer

{% include templates/mqtt-broker/install/cluster-common/configure-mqtt-load-balancer.md %}

## Step 11. Validate the setup

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

For the TBMQ v2.0.0 upgrade, if you haven't installed Redis yet, please follow [step 6](#step-6-azure-cache-for-valkey) to complete the installation.
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
tbmq-upgrade-without-from-version,Since v2.1.0,shell,resources/upgrade-options/k8s-upgrade-tbmq-without-from-version.sh,/docs/{{docsPrefix}}mqtt-broker/install/cluster/resources/upgrade-options/k8s-upgrade-tbmq-without-from-version.sh
tbmq-upgrade-with-from-version,Before v2.1.0,markdown,resources/upgrade-options/k8s-upgrade-tbmq-with-from-version.md,/docs/{{docsPrefix}}mqtt-broker/install/cluster/resources/upgrade-options/k8s-upgrade-tbmq-with-from-version.md{% endcapture %}
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

Execute the following command to delete the AKS cluster:

```bash
az aks delete --resource-group $AKS_RESOURCE_GROUP --name $TB_CLUSTER_NAME
```
{: .copy-code}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}