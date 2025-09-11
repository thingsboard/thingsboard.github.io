* TOC
{:toc}

This guide will help you to set up TBMQ in Azure AKS.

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
* Make sure your Azure Database for PostgreSQL version is 16.x;
* Make sure your Azure Database for PostgreSQL instance is accessible from the TBMQ cluster;
* Make sure you use "thingsboard_mqtt_broker" as the initial database name.

**Note**: Use "High availability" enabled. It enables a lot of useful settings by default.

Another way by which you can create Azure Database for PostgreSQL is using az tool (don’t forget to replace ‘POSTGRESS_USER’ and ‘POSTGRESS_PASS’ with your username and password):

```bash
az postgres flexible-server create --location $AKS_LOCATION --resource-group $AKS_RESOURCE_GROUP \
  --name $TB_DATABASE_NAME --admin-user POSTGRESS_USER --admin-password POSTGRESS_PASS \
  --public-access 0.0.0.0 --storage-size 32 \
  --version 16 -d thingsboard_mqtt_broker
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
  "version": "16"
}
```

Note the value of host from the command output (**tbmq-db.postgres.database.azure.com** in our case). Also note username and password (**postgres**) from the command.

Edit the database settings file and replace YOUR_AZURE_POSTGRES_ENDPOINT_URL with the host value, YOUR_AZURE_POSTGRES_USER and YOUR_AZURE_POSTGRES_PASSWORD with the correct values:

```bash
nano tb-broker-db-configmap.yml
```
{: .copy-code}

## Step 6. Azure Cache for Redis

You need to set up Azure Cache for Redis. TBMQ uses cache to store messages for [DEVICE persistent clients](/docs/{{docsPrefix}}mqtt-broker/architecture/#persistent-device-client),
to improve performance and avoid frequent DB reads (see below for more details).

It is useful when clients connect to TBMQ with the authentication enabled.
For every connection, the request is made to find MQTT client credentials that can authenticate the client.
Thus, there could be an excessive amount of requests to be processed for a large number of connecting clients at once.

{% capture redis-azure-version %}
**Note:** Starting from **TBMQ v2.1.0**, Redis 7.2.5 is the officially supported version for third-party Redis deployments.
Please be aware that, as of now, only the **Enterprise** and **Enterprise Flash** SKUs of Azure Cache for Redis support Redis 7.2.x.
The Basic, Standard, and Premium SKUs continue to support only up to **Redis 6.x**. To ensure full compatibility, we recommend using an
Enterprise-tier SKU to ensure proper alignment with the Redis 7.2.5 features and behavior expected by TBMQ.
{% endcapture %}
{% include templates/info-banner.md content=redis-azure-version %}

In order to set up the Redis, follow one of the following guides:

- [Quickstart: Create a Redis Enterprise cache (Recommended)](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/quickstart-create-redis-enterprise)
- [Quickstart: Create an open-source Redis cache](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/quickstart-create-redis)

For the open-source (legacy) Redis cache, we provide alternative instructions using the `az` tools, extracted from the official Azure documentation:

```bash
az redis create --name $TB_REDIS_NAME --location $AKS_LOCATION --resource-group $AKS_RESOURCE_GROUP --sku basic --vm-size C0 --enable-non-ssl-port
```
{: .copy-code}

`az redis create` has a lot of options and a few of them are required:

* **name** (or -n) - name of the Redis cache;
* **resource-group** (or -g) - name of resource group;
* **sku** - type of Redis cache (accepted values: Basic, Premium, Standard);
* **vm-size** - size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P (accepted values: c0, c1, c2, c3, c4, c5, c6, p1, p2, p3, p4, p5);
* **location** (or -l) - location. Values from: `az account list-locations`.

To see the full list of parameters go to the following [page](https://learn.microsoft.com/en-us/cli/azure/redis?view=azure-cli-latest).

Example of response:

```text
{
  "accessKeys": null,
  "enableNonSslPort": true,
  "hostName": "tbmq-redis.redis.cache.windows.net",
  "id": "/subscriptions/daff3288-1d5d-47c7-abf0-bfb7b738a18c/resourceGroups/myResourceGroup/providers/Microsoft.Cache/Redis/tbmq-redis",
  "instances": [
    {
      "isMaster": false,
      "isPrimary": false,
      "nonSslPort": 13000,
      "shardId": null,
      "sslPort": 15000,
      "zone": null
    }
  ],
  "linkedServers": [],
  "location": "East US",
  "minimumTlsVersion": null,
  "name": "tbmq-redis",
  "port": 6379,
  "privateEndpointConnections": null,
  "provisioningState": "Creating",
  "publicNetworkAccess": "Enabled",
  "redisConfiguration": {
    "maxclients": "256",
    "maxfragmentationmemory-reserved": "12",
    "maxmemory-delta": "2",
    "maxmemory-reserved": "2"
  },
  "redisVersion": "6.0.20",
  "replicasPerMaster": null,
  "replicasPerPrimary": null,
  "resourceGroup": "myResourceGroup",
  "shardCount": null,
  "sku": {
    "capacity": 0,
    "family": "C",
    "name": "Basic"
  },
  "sslPort": 6380,
  "staticIp": null,
  "subnetId": null,
  "tags": {},
  "tenantSettings": {},
  "type": "Microsoft.Cache/Redis",
  "zones": null
}
```

We need to take `hostName` parameter and replace `YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT` in the file _tb-broker-cache-configmap.yml_.

After this we need to get redis keys for connection, for this we need to execute:

```bash
az redis list-keys --name $TB_REDIS_NAME --resource-group $AKS_RESOURCE_GROUP
```
{: .copy-code}

Take "primary" and paste into _tb-broker-cache-configmap.yml_ file replacing `YOUR_REDIS_PASSWORD`.

For more information, see the following [script](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/scripts/create-manage-cache#run-the-script).

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

Otherwise, please check if you set the PostgreSQL URL and PostgreSQL password in the `tb-broker-db-configmap.yml` correctly.

{% endcapture %}
{% include templates/info-banner.md content=aws-rds %}

## Step 8. Provision Kafka

{% include templates/mqtt-broker/install/cluster-common/provision-kafka.md %}

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

For the TBMQ v2.0.0 upgrade, if you haven't installed Redis yet, please follow [step 6](#step-6-azure-cache-for-redis) to complete the installation.
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