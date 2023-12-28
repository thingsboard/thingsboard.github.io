* TOC
{:toc}

This guide will help you to set up TBMQ in AWS EKS.

### Prerequisites

{% include templates/mqtt-broker/install/aws/eks-prerequisites.md %}

### Step 1. Open TBMQ K8S scripts repository

```bash
git clone -b {{ site.release.broker_branch }} https://github.com/thingsboard/tbmq.git
cd tbmq/k8s/aws
```
{: .copy-code}

### Step 2. Configure and create EKS cluster

In the `cluster.yml` file you can find suggested cluster configuration.
Here are the fields you can change depending on your needs:
- `region` - should be the AWS region where you want your cluster to be located (the default value is `us-east-1`)
- `availabilityZones` - should specify the exact IDs of the region's availability zones
  (the default value is `[us-east-1a,us-east-1b,us-east-1c]`)
- `instanceType` - the type of the instance with TBMQ node (the default value is `m7a.large`)

**Note**: If you don't make any changes to `instanceType` and `desiredCapacity` fields, the EKS will deploy 2 nodes of type m7a.large.

{% capture aws-eks-security %}
In case you want to secure access to the PostgreSQL and MSK, you'll need to configure the existing VPC or create a new one,
set it as the VPC for TBMQ cluster, create security groups for PostgreSQL and MSK,
set them for `managed` node-group in TBMQ cluster and configure the access from TBMQ cluster nodes to PostgreSQL/MSK using another security group.

You can find more information about configuring VPC for `eksctl` [here](https://eksctl.io/usage/vpc-networking/).
{% endcapture %}
{% include templates/info-banner.md content=aws-eks-security %}

Command to create AWS cluster:

```bash
eksctl create cluster -f cluster.yml
```
{: .copy-code}

### Step 3. Create AWS load-balancer controller

Once the cluster is ready you'll need to create AWS load-balancer controller.
You can do it by following [this](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html) guide.
The cluster provisioning scripts will create several load balancers:

* tb-broker-http-loadbalancer - AWS ALB that is responsible for the web UI and REST API;
* tb-broker-mqtt-loadbalancer - AWS NLB that is responsible for the MQTT communication.

Provisioning of the AWS load-balancer controller is a **very important step** that is required for those load balancers to work properly.

### Step 4. Amazon PostgreSQL DB Configuration

You'll need to set up PostgreSQL on Amazon RDS.
One of the ways to do it is by following [this](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html) guide.

**Note**: Some recommendations:

* Make sure your PostgreSQL version is 15.x;
* Use ‘Production’ template for high availability. It enables a lot of useful settings by default;
* Consider creation of custom parameters group for your RDS instance. It will make change of DB parameters easier;
* Consider deployment of the RDS instance into private subnets. This way it will be nearly impossible to accidentally expose it to the internet.
* You may also change `username` field and set or auto-generate `password` field (keep your postgresql password in a safe place).

**Note**: Make sure your database is accessible from the cluster, one of the way to achieve this is to create
the database in the same VPC and subnets as TBMQ cluster and use 
`eksctl-tbmq-cluster-ClusterSharedNodeSecurityGroup-*` security group. See screenshots below.

{% include images-gallery.html imageCollection="tbmq-rds-set-up" %}

### Step 5. Amazon MSK Configuration

You'll need to set up Amazon MSK.
To do so you need to open AWS console, MSK submenu, press `Create cluster` button and choose `Custom create` mode.
You should see the similar image:

{% include images-gallery.html imageCollection="tbmq-msk-set-up" %}

**Note**: Some recommendations:

* Apache Kafka version can be safely set to the 3.5.1 version as TBMQ is fully tested on it;
* Use m5.large or similar instance types;
* Consider creation of custom cluster configuration for your MSK. It will make change of Kafka parameters easier;
* Use default 'Monitoring' settings or enable 'Enhanced topic-level monitoring'.

**Note**: Make sure your MSK instance is accessible from TBMQ cluster.
The easiest way to achieve this is to deploy the MSK instance in the same VPC.
We also recommend to use private subnets. This way it will be nearly impossible to accidentally expose it to the internet;

{% include images-gallery.html imageCollection="tbmq-msk-configuration" %}

At the end, carefully review the whole configuration of the MSK and then finish the cluster creation.

### Step 6. Amazon ElastiCache (Redis) Configuration (Optional)

Optionally, you can set up [ElastiCache](https://aws.amazon.com/elasticache/redis/) for Redis. TBMQ uses cache to improve performance and avoid frequent DB reads.

We recommend enabling this in case you have several thousand MQTT clients (devices) connected to TBMQ. It is useful when clients connect to TBMQ with the authentication enabled.
For every connection, the request is made to find MQTT client credentials that can authenticate the client.
Thus, there could be an excessive amount of requests to be processed for a large number of connecting clients at once.

Please open AWS console and navigate to ElastiCache->Redis clusters->Create Redis cluster.

**Note**: Some recommendations:

* Specify Redis Engine version 7.x and node type with at least 1 GB of RAM;
* Make sure your Redis cluster is accessible from the TBMQ cluster.
  The easiest way to achieve this is to deploy the Redis cluster in the same VPC.
  We also recommend to use private subnets. Use `eksctl-tbmq-cluster-ClusterSharedNodeSecurityGroup-*` security group;
* Disable automatic backups.

{% include images-gallery.html imageCollection="tbmq-redis-set-up" %}

### Step 7. Configure links to the Kafka (Amazon MSK)/Postgres/Redis

#### Amazon RDS PostgreSQL

Once the database switch to the ‘Available’ state, on AWS Console get the `Endpoint` of the RDS PostgreSQL and paste it to
`SPRING_DATASOURCE_URL` in the `tb-broker-db-configmap.yml` instead of `RDS_URL_HERE` part.

{% include images-gallery.html imageCollection="tbmq-rds-link-configure" %}

Also, you'll need to set `SPRING_DATASOURCE_USERNAME` and `SPRING_DATASOURCE_PASSWORD` with PostgreSQL `username` and `password` corresponding.

#### Amazon MSK

Once the MSK cluster switch to the ‘Active’ state, to get the list of brokers execute the next command:
```bash
aws kafka get-bootstrap-brokers --region us-east-1 --cluster-arn $CLUSTER_ARN
```
{: .copy-code}
Where **$CLUSTER_ARN** is the Amazon Resource Name (ARN) of the MSK cluster:

{% include images-gallery.html imageCollection="tbmq-msk-link-configure" %}

You'll need to paste data from the `BootstrapBrokerString` to the `TB_KAFKA_SERVERS` environment variable in the `tb-broker.yml` file.

Otherwise, click `View client information` seen on the screenshot above. Copy bootstrap server information in plaintext.

#### Amazon ElastiCache

Once the Redis cluster switch to the ‘Available’ state, open the ‘Cluster details’ and copy `Primary endpoint` without ":6379" port suffix, it`s **YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT**.

{% include images-gallery.html imageCollection="tbmq-redis-link-configure" %}

Edit `tb-broker-cache-configmap.yml` and replace **YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT**.

### Step 8. Installation

Execute the following command to run installation:
```bash
./k8s-install-tbmq.sh
```
{: .copy-code}

After this command finish you should see the next line in the console:

```
INFO  o.t.m.b.i.ThingsboardMqttBrokerInstallService - Installation finished successfully!
```

{% capture aws-rds %}

Otherwise, please check if you set the PostgreSQL URL and PostgreSQL password in the `tb-broker-db-configmap.yml` correctly.

{% endcapture %}
{% include templates/info-banner.md content=aws-rds %}

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
NAME                          CLASS    HOSTS   ADDRESS                                                                  PORTS   AGE
tb-broker-http-loadbalancer   <none>   *       k8s-thingsbo-tbbroker-000aba1305-222186756.eu-west-1.elb.amazonaws.com   80      3d1h
```

##### HTTPS Load Balancer

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

#### 10.2 Configure MQTT Load Balancer

Configure MQTT load balancer to be able to use MQTT protocol to connect devices.

Create TCP load balancer using following command:

```bash
kubectl apply -f receipts/mqtt-load-balancer.yml
```
{: .copy-code}

The load balancer will forward all TCP traffic for ports 1883 and 8883.

##### One-way TLS

The simplest way to configure MQTTS is to make your MQTT load balancer (AWS NLB) to act as a TLS termination point.
This way we set up the one-way TLS connection, where the traffic between your devices and load balancers is encrypted, and the traffic between your load balancer and TBMQ is not encrypted.
There should be no security issues, since the ALB/NLB is running in your VPC.
The only major disadvantage of this option is that you can’t use “X.509 certificate” MQTT client credentials,
since information about client certificate is not transferred from the load balancer to the TBMQ.

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

##### Two-way TLS

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

Then, uncomment all sections in the ‘tb-broker.yml’ file that are marked with “Uncomment the following lines to enable two-way MQTTS”.

Execute command to apply changes:

```bash
kubectl apply -f tb-broker.yml
```
{: .copy-code}

Finally, deploy the "transparent" load balancer:

```bash
kubectl apply -f receipts/mqtt-load-balancer.yml
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
NAME                          CLASS    HOSTS   ADDRESS                                                                  PORTS   AGE
tb-broker-http-loadbalancer   <none>   *       k8s-thingsbo-tbbroker-000aba1305-222186756.eu-west-1.elb.amazonaws.com   80      3d1h
```

Use `ADDRESS` field of the `tb-broker-http-loadbalancer` to connect to the cluster.

{% include templates/mqtt-broker/login.md %}

#### Validate MQTT access

To connect to the cluster via MQTT you will need to get corresponding service IP. You can do this with the command:

```bash
kubectl get services
```
{: .copy-code}

You should see the similar picture:

```text
NAME                          TYPE           CLUSTER-IP       EXTERNAL-IP                                                                     PORT(S)                         AGE
tb-broker-mqtt-loadbalancer   LoadBalancer   10.100.119.170   k8s-thingsbo-tbbroker-b9f99d1ab6-1049a98ba4e28403.elb.eu-west-1.amazonaws.com   1883:30308/TCP,8883:31609/TCP   6m58s
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

In case you would like to upgrade, please pull the recent changes from the latest release branch:

```bash
git pull origin {{ site.release.broker_branch }}
```
{: .copy-code}

**Note**: Make sure custom changes of yours if available are not lost during the merge process.

{% include templates/mqtt-broker/install/upgrade-hint.md %}

After that execute the following command:

```bash
./k8s-upgrade-tbmq.sh --fromVersion=FROM_VERSION
```
{: .copy-code}

Where `FROM_VERSION` - from which version upgrade should be started.
See [Upgrade Instructions](/docs/mqtt-broker/install/upgrade-instructions/) for valid `fromVersion` values.

**Note**: You may optionally stop the TBMQ pods while you run the upgrade of the database with the below command. 

```bash
./k8s-delete-tbmq.sh
```
{: .copy-code}

This will cause downtime, but will make sure that the DB state will be consistent after the update. 
Most of the updates do not require the TBMQ to be stopped.

Once completed, execute deployment of the resources again. This will cause rollout restart of the TBMQ with the newest version.

```bash
./k8s-deploy-tbmq.sh
```
{: .copy-code}

### Cluster deletion

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

### Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
