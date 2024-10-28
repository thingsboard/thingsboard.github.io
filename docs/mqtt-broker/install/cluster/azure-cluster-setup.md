---
layout: docwithnav-mqtt-broker
title: Cluster setup using Microsoft Azure infrastructure
description: TBMQ microservices setup with Kubernetes in AKS

---

* TOC
{:toc}

This guide will help you to set up TBMQ in Azure AKS.

### Prerequisites

#### Install and configure tools

To deploy TBMQ on the AKS cluster you will need to install [kubectl](https://kubernetes.io/docs/tasks/tools/), 
[helm](https://helm.sh/docs/intro/install/), and [az](https://learn.microsoft.com/en-us/cli/azure/) tools.

After installation is done you need to log in to the cli using the next command.

```bash
az login
```
{: .copy-code}

### Step 1. Open TBMQ K8S scripts repository

```bash
git clone -b {{ site.release.broker_branch }} https://github.com/thingsboard/tbmq.git
cd tbmq/k8s/azure
```
{: .copy-code}

### Step 2. Define environment variables

Define environment variables that you will use in various commands later in this guide.

We assume you are using Linux. Execute the following command:

```bash
export AKS_RESOURCE_GROUP=TBMQResources
export AKS_LOCATION=eastus
export AKS_GATEWAY=tbmq-gateway
export TB_CLUSTER_NAME=tbmq-cluster
export TB_DATABASE_NAME=tbmq-db
export TB_REDIS_NAME=tbmq-redis
echo "You variables ready to create resource group $AKS_RESOURCE_GROUP in location $AKS_LOCATION 
and cluster in it $TB_CLUSTER_NAME with database $TB_DATABASE_NAME"
```
{: .copy-code}

where:

* TBMQResources - a logical group in which Azure resources are deployed and managed. We will refer to it later in this guide using **AKS_RESOURCE_GROUP**;
* eastus - is the location where you want to create resource group. We will refer to it later in this guide using **AKS_LOCATION**. You can see all locations list by executing `az account list-locations`;
* tbmq-gateway - the name of Azure application gateway;
* tbmq-cluster - cluster name. We will refer to it later in this guide using **TB_CLUSTER_NAME**;
* tbmq-db is the name of your database server. You may input a different name. We will refer to it later in this guide using **TB_DATABASE_NAME**.

### Step 3. Configure and create AKS cluster

Before creating the AKS cluster we need to create Azure Resource Group. We will use Azure CLI for this:

```bash
az group create --name $AKS_RESOURCE_GROUP --location $AKS_LOCATION
```
{: .copy-code}

To see more info about `az group` please follow the next [link](https://learn.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest).

After the Resource group is created we can create AKS cluster by using the next command:

```bash
az aks create --resource-group $AKS_RESOURCE_GROUP \
    --name $TB_CLUSTER_NAME \
    --generate-ssh-keys \
    --enable-addons ingress-appgw \
    --appgw-name $AKS_GATEWAY \
    --appgw-subnet-cidr "10.2.0.0/16" \
    --node-vm-size Standard_DS3_v2 \
    --node-count 3
```
{: .copy-code}

`az aks create` has two required parameters - `name` and `resource-group` (we use variables that we have set earlier), 
and a lot of not required parameters (defaults values will be used if not set). A few of them are:

* **node-count** - Number of nodes in the Kubernetes node pool. After creating a cluster, you can change the size of its node pool with `az aks scale` (default value is 3);
* **enable-addons** - Enable the Kubernetes addons in a comma-separated list (use `az aks addon list` to get available addons list);
* **node-osdisk-size** - OS disk type to be used for machines in a given agent pool: Ephemeral or Managed. Defaults to ‘Ephemeral’ when possible in conjunction with VM size and OS disk size. May not be changed for this pool after creation;
* **node-vm-size** (or -s) - Size of Virtual Machines to create as Kubernetes nodes (default value is Standard_DS2_v2);
* **generate-ssh-keys** - Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory.

From the command above we add AKS addon for [ApplicationGateway](https://learn.microsoft.com/en-us/azure/application-gateway/). 
We will use this gateway as Path-Based Load Balancer for the TBMQ.

Full list af `az aks create` options can be found [here](https://learn.microsoft.com/en-us/cli/azure/aks?view=azure-cli-latest#az_aks_create).

Alternatively, you may use this [guide](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal?tabs=azure-cli) for custom cluster setup.

### Step 4. Update the context of kubectl

When the cluster is created we can connect kubectl to it using the next command:

```bash
az aks get-credentials --resource-group $AKS_RESOURCE_GROUP --name $TB_CLUSTER_NAME
```
{: .copy-code}

For validation, you can execute the following command:

```bash
kubectl get nodes
```
{: .copy-code}

You should see cluster`s nodes list.

### Step 5. Provision PostgreSQL DB

You’ll need to set up PostgreSQL on Azure. You may follow [this](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/quickstart-create-server-portal) guide, 
but take into account the following requirements:

* Keep your postgresql password in a safe place. We will refer to it later in this guide using YOUR_AZURE_POSTGRES_PASSWORD;
* Make sure your Azure Database for PostgreSQL version is 15.x;
* Make sure your Azure Database for PostgreSQL instance is accessible from the TBMQ cluster;
* Make sure you use "thingsboard_mqtt_broker" as the initial database name.

**Note**: Use "High availability" enabled. It enables a lot of useful settings by default.

Another way by which you can create Azure Database for PostgreSQL is using az tool (don’t forget to replace ‘POSTGRESS_USER’ and ‘POSTGRESS_PASS’ with your username and password):

```bash
az postgres flexible-server create --location $AKS_LOCATION --resource-group $AKS_RESOURCE_GROUP \
  --name $TB_DATABASE_NAME --admin-user POSTGRESS_USER --admin-password POSTGRESS_PASS \
  --public-access 0.0.0.0 --storage-size 32 \
  --version 15 -d thingsboard_mqtt_broker
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
  "version": "15"
}
```

Note the value of host from the command output (**tbmq-db.postgres.database.azure.com** in our case). Also note username and password (**postgres**) from the command.

Edit the database settings file and replace YOUR_AZURE_POSTGRES_ENDPOINT_URL with the host value, YOUR_AZURE_POSTGRES_USER and YOUR_AZURE_POSTGRES_PASSWORD with the correct values:

```bash
nano tb-broker-db-configmap.yml
```
{: .copy-code}

### Step 6. Azure Cache for Redis

You need to set up Azure Cache for Redis. TBMQ uses cache to store messages for [DEVICE persistent clients](/docs/mqtt-broker/architecture/#persistent-device-client),
to improve performance and avoid frequent DB reads (see below for more details).

It is useful when clients connect to TBMQ with the authentication enabled.
For every connection, the request is made to find MQTT client credentials that can authenticate the client.
Thus, there could be an excessive amount of requests to be processed for a large number of connecting clients at once.

In order to set up the Redis, follow this [guide](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/quickstart-create-redis).

Another way to do this is by using `az` tool:

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

### Step 7. Installation

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

### Step 8. Provision Kafka

We recommend deploying Bitnami Kafka from Helm. For that, review the `kafka` folder.

```bash
ls kafka/
```
{: .copy-code}

You can find there _default-values-kafka.yml_ file - default values downloaded from [Bitnami artifactHub](https://artifacthub.io/packages/helm/bitnami/kafka). And _values-kafka.yml_ file with modified values.
We recommend keeping the first file untouched and making changes to the second one only. This way the upgrade process to the next version will go more smoothly as it will be possible to see diff.

To add the Bitnami helm repo:

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
```
{: .copy-code}

To install Bitnami Kafka execute the following command:

```bash
helm install kafka -f kafka/values-kafka.yml bitnami/kafka --version 25.3.3
```
{: .copy-code}

Wait up to several minutes until Kafka and Zookeeper pods are up and running.

### Step 9. Starting

Execute the following command to deploy the broker:

```bash
./k8s-deploy-tbmq.sh
```
{: .copy-code}

After a few minutes, you may execute the next command to check the state of all pods.

```bash
kubectl get pods
```
{: .copy-code}

If everything went fine, you should be able to see `tb-broker-0` and `tb-broker-1` pods. Every pod should be in the `READY` state.

### Step 10. Configure Load Balancers

#### 10.1 Configure HTTP(S) Load Balancer

Configure HTTP(S) Load Balancer to access web interface of your TBMQ instance. Basically you have 2 possible options of configuration:

* http - Load Balancer without HTTPS support. Recommended for **development**. The only advantage is simple configuration and minimum costs. May be good option for development server but definitely not suitable for production.
* https - Load Balancer with HTTPS support. Recommended for **production**. Acts as an SSL termination point. You may easily configure it to issue and maintain a valid SSL certificate. Automatically redirects all non-secure (HTTP) traffic to secure (HTTPS) port.

See links/instructions below on how to configure each of the suggested options.

##### HTTP Load Balancer

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
NAME                          CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-broker-http-loadbalancer   <none>   *       34.111.24.134   80      3d1h
```

##### HTTPS Load Balancer

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

#### 10.2 Configure MQTT Load Balancer

Configure MQTT load balancer to be able to use MQTT protocol to connect devices.

Create TCP load balancer using following command:

```bash
kubectl apply -f receipts/mqtt-load-balancer.yml
```
{: .copy-code}

The load balancer will forward all TCP traffic for ports 1883 and 8883.

##### MQTT over SSL

Follow [this guide](https://thingsboard.io/docs/user-guide/mqtt-over-ssl/) to create a .pem file with the SSL certificate. Store the file as _server.pem_ in the working directory.

You’ll need to create a config-map with your PEM file, you can do it by calling command:

```bash
kubectl create configmap tbmq-mqtts-config \
 --from-file=server.pem=YOUR_PEM_FILENAME \
 --from-file=mqttserver_key.pem=YOUR_PEM_KEY_FILENAME \
 -o yaml --dry-run=client | kubectl apply -f -
```
{: .copy-code}

* where **YOUR_PEM_FILENAME** is the name of your **server certificate file**.
* where **YOUR_PEM_KEY_FILENAME** is the name of your **server certificate private key file**.

Then, uncomment all sections in the ‘tb-broker.yml’ file that are marked with “Uncomment the following lines to enable two-way MQTTS”.

Execute command to apply changes:

```bash
kubectl apply -f tb-broker.yml
```
{: .copy-code}

### Step 11. Validate the setup

Now you can open TBMQ web interface in your browser using DNS name of the load balancer.

You can get DNS name of the load-balancers using the next command:

```bash
kubectl get ingress
```
{: .copy-code}

You should see the similar picture:

```text
NAME                          CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-broker-http-loadbalancer   <none>   *       34.111.24.134   80      3d1h
```

Use `ADDRESS` field of the tb-broker-http-loadbalancer to connect to the cluster.

{% include templates/mqtt-broker/login.md %}

#### Validate MQTT access

To connect to the cluster via MQTT you will need to get corresponding service IP. You can do this with the command:

```bash
kubectl get services
```
{: .copy-code}

You should see the similar picture:

```text
NAME                          TYPE           CLUSTER-IP       EXTERNAL-IP              PORT(S)                         AGE
tb-broker-mqtt-loadbalancer   LoadBalancer   10.100.119.170   *******                  1883:30308/TCP,8883:31609/TCP   6m58s
```

Use `EXTERNAL-IP` field of the load-balancer to connect to the cluster via MQTT protocol.

#### Troubleshooting

In case of any issues you can examine service logs for errors. For example to see TBMQ logs execute the following command:

```bash
kubectl logs -f tb-broker-0
```
{: .copy-code}

Use the next command to see the state of all statefulsets.
```bash
kubectl get statefulsets
```
{: .copy-code}

See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for more details.

### Upgrading

Review the [release notes](/docs/mqtt-broker/releases/) and [upgrade instruction](/docs/mqtt-broker/install/upgrade-instructions/)
for detailed information on the latest changes.

#### Backup and restore (Optional)

While backing up your PostgreSQL database is highly recommended, it is optional before proceeding with the upgrade.
For further guidance, follow the [next instructions](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-backup-restore).

#### Upgrade to 2.0.0

For the TBMQ v2.0.0 upgrade, if you haven't installed Redis yet, please follow [step 6](#step-6-azure-cache-for-redis) to complete the installation.
Only then can you proceed with the [upgrade](#run-upgrade).

#### Upgrade to 1.3.0

{% include templates/mqtt-broker/install/migration.md %}

#### Run upgrade

In case you would like to upgrade, please pull the recent changes from the latest release branch:

```bash
git pull origin {{ site.release.broker_branch }}
```
{: .copy-code}

**Note**: Make sure custom changes of yours if available are not lost during the merge process.

{% include templates/mqtt-broker/install/upgrade-hint.md %}

After that execute the following commands:

```bash
./k8s-delete-tbmq.sh
./k8s-upgrade-tbmq.sh --fromVersion=FROM_VERSION
./k8s-deploy-tbmq.sh
```
{: .copy-code}

Where `FROM_VERSION` - from which version upgrade should be started.
See [Upgrade Instructions](/docs/mqtt-broker/install/upgrade-instructions/) for valid `fromVersion` values.

### Cluster deletion

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

### Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
