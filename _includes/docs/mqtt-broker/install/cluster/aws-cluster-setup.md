* TOC
{:toc}

This guide will help you set up TBMQ {{tbmqSuffix}} in AWS EKS.

## Prerequisites

{% include templates/mqtt-broker/install/aws/eks-prerequisites.md %}

{% if docsPrefix == null %}
## Clone TBMQ repository

```bash
git clone -b {{ site.release.broker_branch }} https://github.com/thingsboard/tbmq.git
cd tbmq/k8s/aws
```
{: .copy-code}

{% else %}
## Clone TBMQ PE K8S repository

```bash
git clone -b {{ site.release.broker_branch }} https://github.com/thingsboard/tbmq-pe-k8s.git
cd tbmq-pe-k8s/aws
```
{: .copy-code}
{% endif %}

## Configure and create EKS cluster

In the `cluster.yml` file you will find a sample cluster configuration.
You can adjust the following fields according to your requirements:

* `region` – the AWS region where the cluster will be created.
  Default: `us-east-1`.

* `availabilityZones` – the availability zones within the chosen region.
  Default: `[us-east-1a, us-east-1b, us-east-1c]`.

* `managedNodeGroups` – defines the node groups used by the cluster.
  By default, there are two groups: one for **TBMQ core services** and another for **TBMQ Integration Executors**.
  If preferred, you may co-locate both workloads in the same node group.

* `instanceType` – the EC2 instance type for TBMQ and TBMQ IE nodes.
  Default: `m7a.large`.

**Note**: If you don't make any changes to `instanceType` and `desiredCapacity` fields, the EKS will deploy 4 nodes of type m7a.large.

Command to create the AWS cluster:

```bash
eksctl create cluster -f cluster.yml
```
{: .copy-code}

## Create an AWS load-balancer controller

Once the cluster is ready, you'll need to create AWS load-balancer controller.
You can do it by following [this](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html) guide.
The cluster provisioning scripts will create several load balancers:

* tbmq-http-loadbalancer - AWS ALB that is responsible for the web UI and REST API;
* tbmq-mqtt-loadbalancer - AWS NLB that is responsible for the MQTT communication.

Provisioning of the AWS load-balancer controller is a **very important step** that is required for those load balancers to work properly.

## Amazon PostgreSQL DB Configuration

You’ll need to provision a PostgreSQL database on **Amazon RDS**.
One recommended way is to follow the [official AWS RDS setup guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html).

**Recommendations:**

* **PostgreSQL version**: Use version **17.x**.
* **Template**: Use **Production** for real workloads. It enables important settings by default to improve resilience and reliability; reserve **Dev/Test** only for non-critical testing.
* **Availability**: Enable **Multi-AZ deployment** to ensure automatic failover and minimize downtime.
* **Credentials**: Change the default `username` and set (or auto-generate) a secure `password`. Be sure to store the password safely for future use.
* **Instance configuration**: Use a small general-purpose Graviton instance (e.g., **db.m7g.large**) — TBMQ’s PostgreSQL load is modest; right-size first, optimize later.
* **Scaling**: **Scale vertically** (instance class/size) if sustained CPU >80% or active connections near limits; change type during a maintenance window.
* **Storage**: Choose **gp3 or io1** volumes for production; avoid magnetic storage.
* **Connectivity**: Ensure your RDS database is accessible from your EKS cluster.
  A straightforward approach is to create the database in the **same VPC and subnets** as your TBMQ cluster, and assign the
  `eksctl-tbmq-cluster-ClusterSharedNodeSecurityGroup-*` security group to the RDS instance.
  See the screenshots below for guidance.
* **Parameter group**: Create a **custom parameter group** for your instance. This makes it easier to adjust database parameters later without affecting other databases.
* **Monitoring**: Enable **enhanced monitoring** and set up CloudWatch alarms for key metrics.

{% include images-gallery.html imageCollection="tbmq-rds-set-up" %}

## Amazon MSK Configuration

You’ll need to provision an **Amazon MSK** cluster.
To do this, open the **AWS Console**, navigate to **MSK**, click **Create cluster**, and select **Custom create** mode.
You should see a screen similar to this:

{% include images-gallery.html imageCollection="tbmq-msk-set-up" %}

**Recommendations:**

* **Cluster type**: Select **Provisioned** for full control over broker capacity and configuration.
* **Kafka version**: Use **Apache Kafka 4.0.x** — this version has been fully validated with TBMQ.
* **Metadata mode**: Choose **KRaft** (controller quorum) for simplified operations and improved resiliency compared to ZooKeeper.
* **Instance type**: Start with **m7g.large** brokers (or equivalent) for a good balance of performance and cost; scale up later if required.
* **Cluster configuration**: Create a **custom configuration** to simplify future parameter changes without needing to recreate the cluster.
* **Networking**: Deploy the MSK cluster in the **same VPC** as your TBMQ cluster, using **private subnets** to minimize exposure.
  Attach the security group `eksctl-tbmq-cluster-ClusterSharedNodeSecurityGroup-*` to allow connectivity from EKS nodes.
* **Security**: Allow **Unauthenticated access** and **Plaintext** communication. Adjust later if you need stricter security policies.
* **Monitoring**: Use the **default monitoring** options or enable **enhanced topic-level monitoring** for detailed Kafka metrics.

{% include images-gallery.html imageCollection="tbmq-msk-configuration" %}

Carefully review the full cluster configuration, then proceed with cluster creation.

## Amazon ElastiCache (Valkey) Configuration

TBMQ relies on **Valkey** to store messages for [DEVICE persistent clients](/docs/{{docsPrefix}}mqtt-broker/architecture/#persistent-device-client).
The cache also improves performance by reducing the number of direct database reads, especially when authentication is enabled and multiple clients connect at once.
Without caching, every new connection triggers a database query to validate MQTT client credentials, which can cause the unnecessary load under high connection rates.

To set up Valkey, open the **AWS Console** → **ElastiCache** → **Valkey caches** → **Create cache**.

**Recommendations:**

* **Engine**: Select **Valkey** (recommended) as the engine type.
* **Deployment option**: Choose **Design your own cache** → **Cluster cache** to customize node type, shard count, and replicas.
* **Cluster mode**:
  * Set to **Enabled** if you configure TBMQ with `REDIS_CONNECTION_TYPE=cluster` (in this guide, we follow this approach).
  * Set to **Disabled** if you configure TBMQ with `REDIS_CONNECTION_TYPE=standalone`.
* **Engine version**: Use **8.x**, fully supported and compatible with Redis OSS v7.
* **Node type**: Start with **cache.r7g.large** (13 GB memory, good network performance). A smaller type with at least **1 GB RAM** can be used for dev/test environments.
* **Shards**: For production, configure **3 shards** with **1 replica per shard** to balance durability and scalability.
* **Parameter groups**: Use the default Valkey 8.x group or create a **custom parameter group** for easier tuning later.
* **Networking**:
  * Deploy into the **same VPC** as your TBMQ cluster.
  * Use **private subnets** to avoid exposure to the internet.
  * Assign the security group `eksctl-tbmq-cluster-ClusterSharedNodeSecurityGroup-*` to allow secure communication between EKS nodes and Valkey.
* **Security**: Disable encryption at rest and in transit if you plan to use **plaintext/unauthenticated** connections. Enable them if stricter security is required.
* **Backups**: **Enable automatic backups** to protect persistent cache data. Choose a retention period that matches your recovery needs (e.g., 1–7 days).
  This ensures you can restore the cache in case of accidental data loss or cluster issues.

{% include images-gallery.html imageCollection="tbmq-redis-set-up" %}

## Configure links to the Kafka/Postgres/Valkey

### Amazon RDS (PostgreSQL)

When the RDS PostgreSQL instance switches to the **Available** state, open the AWS Console and copy its **Endpoint**.
Update the `SPRING_DATASOURCE_URL` field in `tbmq-db-configmap.yml` by replacing the placeholder `RDS_URL_HERE` with the copied endpoint.

{% include images-gallery.html imageCollection="tbmq-rds-link-configure" %}

Also, set the following environment variables with your RDS credentials:

* `SPRING_DATASOURCE_USERNAME` → your PostgreSQL username
* `SPRING_DATASOURCE_PASSWORD` → your PostgreSQL password

### Amazon MSK (Kafka)

When the MSK cluster becomes **Active**, retrieve the list of bootstrap brokers with:

```bash
aws kafka get-bootstrap-brokers --region us-east-1 --cluster-arn $CLUSTER_ARN
```
{: .copy-code}

Here, **$CLUSTER_ARN** is the Amazon Resource Name of your MSK cluster.

{% include images-gallery.html imageCollection="tbmq-msk-link-configure" %}

Copy the value from **BootstrapBrokerString** and set it as the `TB_KAFKA_SERVERS` environment variable in `tbmq.yml` and `tbmq-ie.yml`.

Alternatively, click **View client information** in the MSK Console and copy the **plaintext bootstrap servers** from the UI.

### Amazon ElastiCache (Valkey)

When the Valkey cluster reaches the **Available** state, open **Cluster details** and copy the connection endpoints:

* For **standalone mode**: use the **Primary endpoint** (without the `:6379` port suffix) → **YOUR_VALKEY_ENDPOINT_URL_WITHOUT_PORT**.
* For **cluster mode**: use the **Cluster configuration endpoint** → **YOUR_VALKEY_CLUSTER_ENDPOINT_URL**.

{% include images-gallery.html imageCollection="tbmq-redis-link-configure" %}

Next, edit `tbmq-cache-configmap.yml`:

* If running **standalone**:

  ```yaml
  REDIS_CONNECTION_TYPE: "standalone"
  REDIS_HOST: "YOUR_VALKEY_ENDPOINT_URL_WITHOUT_PORT"
  #REDIS_PASSWORD: "YOUR_REDIS_PASSWORD"
  ```

* If running **cluster**:

  ```yaml
  REDIS_CONNECTION_TYPE: "cluster"
  REDIS_NODES: "YOUR_VALKEY_CLUSTER_ENDPOINT_URL"
  #REDIS_PASSWORD: "YOUR_REDIS_PASSWORD"
  # Recommended for Kubernetes clusters to handle dynamic IP changes and failover:
  #REDIS_LETTUCE_CLUSTER_TOPOLOGY_REFRESH_ENABLED: "true"
  #REDIS_JEDIS_CLUSTER_TOPOLOGY_REFRESH_ENABLED: "true"
  ```

## Installation

Execute the following command to run the installation:

```bash
./k8s-install-tbmq.sh
```
{: .copy-code}

After this command is finished, you should see the next line in the console:

```
INFO  o.t.m.b.i.ThingsboardMqttBrokerInstallService - Installation finished successfully!
```

{% capture aws-rds %}

Otherwise, please check if you set the PostgreSQL URL and PostgreSQL password in the `tbmq-db-configmap.yml` correctly.

{% endcapture %}
{% include templates/info-banner.md content=aws-rds %}

{% include templates/mqtt-broker/install/cluster-common/configure-license-key.md %}

## Configure gp3 as the Default Storage Class in Your EKS Cluster

To ensure that all newly created PersistentVolumeClaims (PVCs) in your EKS cluster use gp3-backed Amazon EBS volumes, you must create the `gp3` StorageClass and set it as the default. 
This section walks you through applying the gp3 StorageClass manifest, disabling or removing the existing `gp2` class if present, and verifying that gp3 is now the cluster’s default.

Before proceeding, follow the official [AWS EBS CSI Driver instructions](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html)
to install the driver on your EKS cluster.
Once the add-on is successfully installed, you can configure gp3 as the default StorageClass.

{% include templates/mqtt-broker/install/aws/gp3-sc.md %}

## Starting

{% include templates/mqtt-broker/install/cluster-common/starting.md %}

## Configure Load Balancers

### Configure HTTP(S) Load Balancer

Configure HTTP(S) Load Balancer to access the web interface of your TBMQ {{tbmqSuffix}} instance. Basically, you have 2 possible options of configuration:

* http — Load Balancer without HTTPS support. Recommended for **development**. The only advantage is simple configuration and minimum costs. May be a good option for development server but definitely not suitable for production.
* https — Load Balancer with HTTPS support. Recommended for **production**. Acts as an SSL termination point. You may easily configure it to issue and maintain a valid SSL certificate. Automatically redirects all non-secure (HTTP) traffic to secure (HTTPS) port.

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

Once provisioned, you should see a similar output:

```text
NAME                     CLASS    HOSTS   ADDRESS                                                              PORTS   AGE
tbmq-http-loadbalancer   <none>   *       k8s-thingsbo-tbmq-000aba1305-222186756.eu-west-1.elb.amazonaws.com   80      3d1h
```

#### HTTPS Load Balancer

Use [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) to create or import SSL certificate. Note your certificate ARN.

Edit the load balancer configuration and replace YOUR_HTTPS_CERTIFICATE_ARN with your certificate ARN:

```bash
nano receipts/https-load-balancer.yml
```
{: .copy-code}

Execute the following command to deploy plain https load balancer:

```bash
kubectl apply -f receipts/https-load-balancer.yml
```
{: .copy-code}

### Configure MQTT Load Balancer

Configure MQTT load balancer to be able to use MQTT protocol to connect devices.

Create TCP load balancer using the following command:

```bash
kubectl apply -f receipts/mqtt-load-balancer.yml
```
{: .copy-code}

The load balancer will forward all TCP traffic for ports 1883 and 8883.

#### One-way TLS

The simplest way to configure MQTTS is to make your MQTT load balancer (AWS NLB) to act as a TLS termination point.
This way we set up the one-way TLS connection, where the traffic between your devices and load balancers is encrypted, and the traffic between your load balancer and TBMQ is not encrypted.
There should be no security issues, since the ALB/NLB is running in your VPC.
The only major disadvantage of this option is that you can’t use “X.509 certificate” MQTT client credentials,
since information about the client certificate is not transferred from the load balancer to the TBMQ.

To enable the one-way TLS:

Use [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) to create or import SSL certificate. Note your certificate ARN.

Edit the load balancer configuration and replace YOUR_MQTTS_CERTIFICATE_ARN with your certificate ARN:

```bash
nano receipts/mqtts-load-balancer.yml
```
{: .copy-code}

Execute the following command to deploy plain MQTTS load balancer:

```bash
kubectl apply -f receipts/mqtts-load-balancer.yml
```
{: .copy-code}

#### Two-way TLS

The more complex way to enable MQTTS is to obtain valid (signed) TLS certificate and configure it in the TBMQ.
The main advantage of this option is that you may use it in combination with “X.509 certificate” MQTT client credentials.

To enable the two-way TLS:

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

Then, uncomment all sections in the ‘tbmq.yml’ file that are marked with “Uncomment the following lines to enable two-way MQTTS”.

Execute command to apply changes:

```bash
kubectl apply -f tbmq.yml
```
{: .copy-code}

Finally, deploy the "transparent" load balancer:

```bash
kubectl apply -f receipts/mqtt-load-balancer.yml
```
{: .copy-code}

## Validate the setup

Now you can open the TBMQ web interface in your browser using the DNS name of the load balancer.

You can get the DNS name of the load-balancers using the next command:

```bash
kubectl get ingress
```
{: .copy-code}

You should see the similar picture:

```text
NAME                     CLASS    HOSTS   ADDRESS                                                              PORTS   AGE
tbmq-http-loadbalancer   <none>   *       k8s-thingsbo-tbmq-000aba1305-222186756.eu-west-1.elb.amazonaws.com   80      3d1h
```

Use `ADDRESS` field of the `tbmq-http-loadbalancer` to connect to the cluster.

{% include templates/mqtt-broker/login.md %}

### Validate MQTT access

To connect to the cluster via MQTT, you will need to get the corresponding service IP. You can do this with the command:

```bash
kubectl get services
```
{: .copy-code}

You should see the similar picture:

```text
NAME                     TYPE           CLUSTER-IP       EXTERNAL-IP                                                                 PORT(S)                         AGE
tbmq-mqtt-loadbalancer   LoadBalancer   10.100.119.170   k8s-thingsbo-tbmq-b9f99d1ab6-1049a98ba4e28403.elb.eu-west-1.amazonaws.com   1883:30308/TCP,8883:31609/TCP   6m58s
```

Use `EXTERNAL-IP` field of the load-balancer to connect to the cluster via MQTT protocol.

### Troubleshooting

In case of any issues, you can examine service logs for errors. For example, to see TBMQ logs, execute the following command:

```bash
kubectl logs -f tbmq-0
```
{: .copy-code}

Use the next command to see the state of all statefulsets.

```bash
kubectl get statefulsets
```
{: .copy-code}

See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for more details.

## Upgrading

{% include templates/mqtt-broker/upgrade/upgrading.md %}

### Backup and restore (Optional)

While backing up your PostgreSQL database is highly recommended, it is optional before proceeding with the upgrade.
For further guidance, follow the [next instructions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_CommonTasks.BackupRestore.html).

{% if docsPrefix == null %}

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

{% include templates/mqtt-broker/upgrade/update-to-2.1.0-release-aws-cluster.md %}

### Upgrade to 2.0.0

For the TBMQ v2.0.0 upgrade, if you haven't installed Redis yet, please follow [step 6](#step-6-amazon-elasticache-valkey-configuration) to complete the installation.
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

{% else %}

{% include templates/mqtt-broker/install/cluster-common/k8s-type-upgrade-ce-to-pe.md %}

{% endif %}

## Cluster deletion

Execute the following command to delete TBMQ nodes:

```bash
./k8s-delete-tbmq.sh
```
{: .copy-code}

Execute the following command to delete all TBMQ nodes and configmaps:

```bash
./k8s-delete-all.sh
```
{: .copy-code}

Execute the following command to delete the EKS cluster (you should change the name of the cluster and the region if those differ):

```bash
eksctl delete cluster -r us-east-1 -n tbmq -w
```
{: .copy-code}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
