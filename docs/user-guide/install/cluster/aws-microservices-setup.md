---
layout: docwithnav
assignees:
- ashvayka
title: Microservices setup using AWS infrastructure
description: ThingsBoard IoT platform microservices setup with Kubernetes in AWS EKS 
rdsSetup:
    0:
        image: /images/install/cloud/aws/rds-1.png  
        title: 'Make sure your PostgreSQL version is latest 12.x, not 13.x yet.'
    1:
        image: /images/install/cloud/aws/rds-2.png  
        title: 'Keep your PosgreSQL master password in a safe place. We will refer to it later in this guide using YOUR_RDS_PASSWORD.'
    2:
        image: /images/install/cloud/aws/rds-3.png  
        title: 'Use "Provisioned IOPS" for better performance.'
    3:
        image: /images/install/cloud/aws/rds-4.png  
        title: 'Make sure your PostgreSQL RDS instance is accessible from the ThingsBoard cluster; The easiest way to achieve this is to deploy the PostgreSQL RDS instance in the same VPC and use "eksctl-thingsboard-cluster-ClusterSharedNodeSecurityGroup-*" security group.'
    4:
        image: /images/install/cloud/aws/rds-5.png  
        title: 'Make sure you use "thingsboard" as initial database name.'
    5:
        image: /images/install/cloud/aws/rds-6.png  
        title: 'Disable "auto minor version update".'  

rdsEndpointUrl:
    0:
        image: /images/install/cloud/aws/rds-endpoint-url.png  
        title: 'Once the database switch to the "Available" state, navigate to the "Connectivity and Security" and copy the endpoint value. We will refer to it later in this guide using **YOUR_RDS_ENDPOINT_URL**.'

mskSetup:
    0:
        image: /images/install/cloud/aws/msk-1.png  
        title: 'Make sure your Apache Kafka version is 2.6.x.'
    1:
        image: /images/install/cloud/aws/msk-2.png  
        title: 'Make sure your MSK instance is accessible from the ThingsBoard cluster. The easiest way to achieve this is to deploy the MSK instance in the same VPC. We also recommend to use private subnets. This way it will be nearly impossible to accidentally expose it to the internet.'
    2:
        image: /images/install/cloud/aws/msk-3.png  
        title: 'Use m5.large or similar instance types.'
    3:
        image: /images/install/cloud/aws/msk-4.png  
        title: 'Choose default security settings. Make sure "Plaintext" mode is enabled.'
    4:
        image: /images/install/cloud/aws/msk-5.png  
        title: 'Use default "Monitoring" settings or enable "Enhenced topic level monitoring".'

mskConnectionParams:
    0:
        image: /images/install/cloud/aws/msk-connection-params.png  
        title: 'Once the MSK cluster switch to the "Active" state, navigate to "Details" and click "View client information".'
    1:
        image: /images/install/cloud/aws/msk-connection-params2.png  
        title: 'Copy bootstrap server information in plaintext. We will refer to it later in this guide using **YOUR_MSK_BOOTSTRAP_SERVERS_PLAINTEXT**.'

redisSetup:
    0:
        image: /images/install/cloud/aws/redis-single-1.png  
        title: 'Specify Redis Engine version 6.x and node type with at least 1 GB of RAM.'
    1:
        image: /images/install/cloud/aws/redis-single-2.png  
        title: 'Make sure your Redis cluster is accessible from the ThingsBoard cluster. The easiest way to achieve this is to deploy the Redis cluster in the same VPC. We also recommend to use private subnets. Use "eksctl-thingsboard-cluster-ClusterSharedNodeSecurityGroup-*" security group.'
    2:
        image: /images/install/cloud/aws/redis-single-3.png  
        title: 'Disable automatic backups.'

redisEndpointUrl:
    0:
        image: /images/install/cloud/aws/redis-endpoint-url.png  
        title: 'Once the Redis cluster switch to the "Available" state, navigate to "Details" and copy "Primary Endpoint" without ":6379" port sufix. We will refer to it later in this guide using **YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT**.'

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in microservices mode in AWS EKS. 

## Prerequisites

{% include templates/install/aws-eks-prerequisites.md %}

## Step 1. Clone ThingsBoard CE K8S scripts repository

```bash
git clone https://github.com/thingsboard/thingsboard-ce-k8s.git
cd thingsboard-ce-k8s/aws/microservices
```

## Step 2. Configure and create EKS cluster

In the `cluster.yml` file you can find suggested cluster configuration. 
Here are the fields you can change depending on your needs:
- `region` - should be the AWS region where you want your cluster to be located (the default value is `us-east-1`)
- `availabilityZones` - should specify the exact IDs of the region's availability zones 
(the default value is `[us-east-1a,us-east-1b,us-east-1c]`)
- `instanceType` - the type of the instance with TB node (the default value is `m5.xlarge`)

**Note**: if you don't make any changes to `instanceType` and `desiredCapacity` fields, the EKS will deploy **3** nodes of type **m5.xlarge**.

{% capture aws-eks-vpc %}

The following command will create new VPC for your ThingsBoard cluster. This guide assumes you will create new VPC. 
Although it is fine to use existing VPC and subnets as well. 
You can find more information about configuring VPC for `eksctl` [here](https://eksctl.io/usage/vpc-networking/).

{% endcapture %}
{% include templates/info-banner.md content=aws-eks-vpc %}

Command to create AWS cluster:

```
eksctl create cluster -f cluster.yml
```
{: .copy-code}

## Step 3. Create AWS load-balancer controller

Once the cluster is ready you must create AWS load-balancer controller.
You can do it by following [this](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html) guide.
The cluster provisioning scripts will create several load balancers:

* "tb-http-loadbalancer" - AWS ALB that is responsible for the web UI, REST API and HTTP transport;
* "tb-mqtt-loadbalancer" - AWS NLB that is responsible for the MQTT transport;
* "tb-coap-loadbalancer" - AWS NLB that is responsible for the CoAP transport;

Provisioning of the AWS load-balancer [controller](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html) 
is a **very important step** that is required for those load balancers to work properly. 

## Step 4. Amazon PostgreSQL DB Configuration

You'll need to set up PostgreSQL on Amazon RDS. ThingsBoard will use it as a main database to store devices, dashboards, rule chains and device telemetry. 
You may follow [this](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html) guide,
but take into account the following requirements:

* Keep your postgresql password in a safe place. We will refer to it later in this guide using **YOUR_RDS_PASSWORD**.
* Make sure your PostgreSQL version is latest 12.x, not 13.x yet;
* Make sure your PostgreSQL RDS instance is accessible from the ThingsBoard cluster;
  The easiest way to achieve this is to deploy the PostgreSQL RDS instance in the same VPC 
  and use 'eksctl-thingsboard-cluster-ClusterSharedNodeSecurityGroup-*' security group.
  We assume you locate it in the same VPC in this guide;
* Make sure you use "thingsboard" as initial database name;

, and recommendations:  

* Use 'Production' template for high availability. It enables a lot of useful settings by default;
* Use 'Provisioned IOPS' for better performance;
* Consider creation of custom parameters group for your RDS instance. It will make change of DB parameters easier;
* Consider deployment of the RDS instance into private subnets. This way it will be nearly impossible to accidentally expose it to the internet.

{% include images-gallery.html imageCollection="rdsSetup"%}

Once the database switch to the 'Available' state, navigate to the 'Connectivity and Security' and copy the endpoint value.
We will refer to it later in this guide using **YOUR_RDS_ENDPOINT_URL**.

{% include images-gallery.html imageCollection="rdsEndpointUrl"%}

## Step 5. Amazon MSK Configuration

You'll need to set up Kafka using Amazon MSK. ThingsBoard will use it to communicate between microservices, store unprocessed messages, etc.
Kafka is useful to survive peak loads and hardware failures to make sure that all messages from devices will be processed.

Please open AWS console and navigate to MSK, press `Create cluster` button and choose `Custom create` mode.

* Make sure your Apache Kafka version is 2.6.x;
* Make sure your MSK instance is accessible from the ThingsBoard cluster.
  The easiest way to achieve this is to deploy the MSK instance in the same VPC. 
  We also recommend to use private subnets. This way it will be nearly impossible to accidentally expose it to the internet;
* Use m5.large or similar instance types;
* Choose default security settings. Make sure 'Plaintext' mode is enabled;
* Use default 'Monitoring' settings or enable 'Enhenced topic level monitoring'. 

{% include images-gallery.html imageCollection="mskSetup"%}

Once the MSK cluster switch to the 'Active' state, navigate to 'Details' and click 'View client information'. 
Copy bootstrap server information in plaintext.
We will refer to it later in this guide using **YOUR_MSK_BOOTSTRAP_SERVERS_PLAINTEXT**.

{% include images-gallery.html imageCollection="mskConnectionParams"%}

## Step 6. Amazon ElactiCache (Redis) Configuration

You'll need to set up [Amazon ElastiCache (Redis)](https://aws.amazon.com/elasticache/redis/). ThingsBoard uses cache to improve performance and avoid frequent DB reads.

Please open AWS console and navigate to ElastiCache->Redis->Create.

* Specify Redis Engine version 6.x and node type with at least 1 GB of RAM;
* Make sure your Redis cluster is accessible from the ThingsBoard cluster. The easiest way to achieve this is to deploy the Redis cluster in the same VPC. We also recommend to use private subnets. Use "eksctl-thingsboard-cluster-ClusterSharedNodeSecurityGroup-*" security group; 
* Disable automatic backups.

{% include images-gallery.html imageCollection="redisSetup"%}

Once the Redis cluster switch to the 'Available' state, navigate to 'Details' and copy 'Primary Endpoint' without ':6379' port sufix. 
We will refer to it later in this guide using **YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT**.

{% include images-gallery.html imageCollection="redisEndpointUrl"%}

## Step 7. Configure links to the Kafka (Amazon MSK)/Redis/Postgres

Edit "tb-node-db-configmap.yml" and replace **YOUR_RDS_ENDPOINT_URL** and **YOUR_RDS_PASSWORD** with the values you have obtained during [step 4](#step-4-amazon-postgresql-db-configuration).

Edit "tb-kafka-configmap.yml" and replace **YOUR_MSK_BOOTSTRAP_SERVERS_PLAINTEXT** with the values you have obtained during [step 5](#step-5-amazon-msk-configuration).

Edit "tb-redis-configmap.yml" and replace **YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT** with the values you have obtained during [step 6](#step-6-amazon-elacticache-redis-configuration).

## Step 8. Configure HTTPS (Optional)

Use [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) to create or import SSL certificate.
After creation/import you'll need to uncomment the 'alb.ingress.kubernetes.io/certificate-arn' setting and paste certificate's ARN instead of **YOUR_CERTIFICATE_ARN** in the `routes.yml` file:

```yaml
...
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: thingsboard
  name: tb-http-loadbalancer
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    # Uncomment the following line to enable HTTPS. Don't forget to replace YOUR_CERTIFICATE_ARN with the correct value
    # See https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates for more info
    # alb.ingress.kubernetes.io/certificate-arn: YOUR_CERTIFICATE_ARN
...
```

## Step 9. Configure MQTTS (Optional)

Follow [this guide](/docs/user-guide/mqtt-over-ssl/) to create a **.jks** file with the SSL certificate.
Afterwards, you need to set **MQTT_SSL_KEY_STORE_PASSWORD** and **MQTT_SSL_KEY_PASSWORD** environment variables in the `thingsboard.yml` file
to the corresponding key-store and certificate key passwords.

You'll need to create a config-map with your JKS file, you can do it by calling command:

```
kubectl create configmap tb-mqtts-config \
             --from-file=server.jks=YOUR_JKS_FILENAME.jks -o yaml --dry-run=client | kubectl apply -f -
```
{: .copy-code}

where **YOUR_JKS_FILENAME** is the name of your **.jks** file. Then, uncomment all sections in the 'thingsboard.yml' file that are marked with "Uncomment the following section to enable MQTTS".

## Step 10. CPU and Memory resources allocation

The scripts have preconfigured values of resources for each service. You can change them in `.yml` files under `resources` submenu.

**Note**: if you want to allocate more resources you'll need to increase the number of Amazon nodes or use larger machines. 

Recommended CPU/memory resources allocation:
- TB Node: 1.0 CPU / 2Gi memory
- TB HTTP Transport: 0.5 CPU / 0.5Gi memory
- TB MQTT Transport: 0.5 CPU / 0.5Gi memory
- TB COAP Transport: 0.5 CPU / 0.5Gi memory
- TB Web UI: 0.1 CPU / 100Mi memory
- JS Executor: 0.1 CPU / 100Mi memory
- Zookeeper: 0.1 CPU / 0.5Gi memory

## Step 11. Installation

Execute the following command to run installation:
```
 ./k8s-install-tb.sh --loadDemo
```
{: .copy-code}

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

After this command finish you should see the next line in the console:

```
Installation finished successfully!
```

Otherwise, please check if you set the PostgreSQL URL in the `tb-node-db-configmap.yml` correctly.

## Step 12. Starting

Execute the following command to deploy resources:

```
 ./k8s-deploy-resources.sh
```
{: .copy-code}

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to see:

* 3x`tb-coap-transport`
* 3x`tb-http-transport`
* 3x`tb-mqtt-transport`
* 5x`tb-js-executor`
* 3x`tb-node`
* 2x`tb-web-ui`
* 3x`zookeeper`.
  
Every pod should be in the `READY` state. 

## Step 13. Validate the setup

#### Validate Web UI access

Now you can open ThingsBoard web interface in your browser using DNS name of the load balancer.

You can see DNS name (the `ADDRESS` column) of the HTTP load-balancer using command:

```bash
kubectl get ingress
```
{: .copy-code}

You should see the similar picture:

![image](/images/install/cloud/aws-application-loadbalancers.png)

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

If you installed DataBase with demo data (using `--loadDemo` flag) you can also use the following credentials:

- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

#### Validate MQTT/CoAP access

To connect to the cluster via MQTT or COAP you'll need to get corresponding service, you can do it with command:

```bash
kubectl get service
```
{: .copy-code}

You should see the similar picture:

![image](/images/install/cloud/aws-network-loadbalancers.png)


There are two load-balancers:
- tb-mqtt-loadbalancer-external - for MQTT protocol
- tb-coap-loadbalancer-external - for COAP protocol

Use `EXTERNAL-IP` field of the load-balancers to connect to the cluster.

#### Troubleshooting

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

```bash
kubectl logs -f tb-node-0
```
{: .copy-code}

Or use `kubectl get pods` to see the state of the pods.
Or use `kubectl get services` to see the state of all the services.
Or use `kubectl get deployments` to see the state of all the deployments.
See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for details.

Execute the following command to delete all ThingsBoard pods:

```bash
./k8s-delete-resources.sh
```
{: .copy-code}

Execute the following command to delete all ThingsBoard pods and configmaps:

```bash
./k8s-delete-all.sh
```
{: .copy-code}

Execute the following command to delete EKS cluster (you should change the name of the cluster and zone):

```bash
eksctl delete cluster -r us-east-1 -n thingsboard-cluster -w
```
{: .copy-code}

## Upgrading

Merge your local changes with the latest release branch from the repo you have used in the [Step 1](#step-1-clone-thingsboard-ce-k8s-scripts-repository).


In case when database upgrade is needed, execute the following commands:

```bash
 ./k8s-upgrade-tb.sh --fromVersion=[FROM_VERSION]
```
{: .copy-code}

Where:

- `FROM_VERSION` - from which version upgrade should be started. See [Upgrade Instructions](/docs/user-guide/install/upgrade-instructions) for valid `fromVersion` values.

Note: You may optionally stop the tb-node pods while you run the upgrade of the database. This will cause downtime, but will make sure that the DB state will be consistent after the update. 
Most of the updates do not require the tb-nodes to be stopped. 

Once completed, execute deployment of the resources again. This will cause rollout restart of the thingsboard components with the newest version.

```yaml
./k8s-deploy-resources.sh
```


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
