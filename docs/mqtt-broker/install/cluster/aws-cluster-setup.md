---
layout: docwithnav-mqtt-broker
title: Cluster setup using AWS infrastructure
description: TBMQ microservices setup with Kubernetes in AWS EKS

---

* TOC
{:toc}

This guide will help you to set up TBMQ in AWS EKS.

## Prerequisites

{% include templates/install/aws/eks-prerequisites.md %}

### Pull TBMQ image from docker hub

Run the following command to verify that you can pull the image from the Docker hub.

```bash
docker pull thingsboard/tbmq-node:{{ site.release.broker_full_ver }}
```
{: .copy-code}

## Step 1. Open TBMQ K8S scripts repository

```bash
git clone https://github.com/thingsboard/tbmq.git
cd tbmq/k8s/aws
```
{: .copy-code}

## Step 2. Configure and create EKS cluster

In the `cluster.yml` file you can find suggested cluster configuration.
Here are the fields you can change depending on your needs:
- `region` - should be the AWS region where you want your cluster to be located (the default value is `us-east-1`)
- `availabilityZones` - should specify the exact IDs of the region's availability zones
  (the default value is `[us-east-1a,us-east-1b,us-east-1c]`)
- `instanceType` - the type of the instance with TB node (the default value is `m6a.large`)

**Note**: if you don't make any changes to `instanceType` and `desiredCapacity` fields, the EKS will deploy 2 nodes of type m6a.large.

{% capture aws-eks-security %}
In case you want to secure access to the PostgreSQL and MSK, you'll need to configure the existing VPC or create a new one,
set it as the VPC for TBMQ cluster, create security groups for PostgreSQL and MSK,
set them for `tb-mqtt-broker` node-group in TBMQ cluster and configure the access from TBMQ cluster nodes to PostgreSQL/MSK using another security group.

You can find more information about configuring VPC for `eksctl` [here](https://eksctl.io/usage/vpc-networking/).
{% endcapture %}
{% include templates/info-banner.md content=aws-eks-security %}

Command to create AWS cluster:

```
eksctl create cluster -f cluster.yml
```
{: .copy-code}

## Step 3. Create AWS load-balancer controller

Once the cluster is ready you'll need to create AWS load-balancer controller.
You can do it by following [this](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html) guide.

Provisioning of the AWS load-balancer controller is a **very important step** that is required for those load balancers to work properly.

## Step 4. Amazon PostgreSQL DB Configuration

You'll need to set up PostgreSQL on Amazon RDS.
One of the ways to do it is by following [this](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html) guide.

**Note**: Make sure your database is accessible from the cluster, one of the way to achieve this is to create
the database in the same VPC and subnets as TBMQ cluster and use 
‘eksctl-thingsboard-mqtt-broker-cluster-ClusterSharedNodeSecurityGroup-*’ security group. See screenshots below.

Here you should choose VPC with the name of your cluster:

![image](/images/mqtt-broker/install/aws-rds-vpc.png)

Here you should choose security group corresponding to the one on the screen:

![image](/images/mqtt-broker/install/aws-rds-vpc-sg.png)

**Note**, some recommendations:

* Make sure your PostgreSQL version is latest 12.x, not 13.x yet;
* Use ‘Production’ template for high availability. It enables a lot of useful settings by default;
* Consider creation of custom parameters group for your RDS instance. It will make change of DB parameters easier;
* Consider deployment of the RDS instance into private subnets. This way it will be nearly impossible to accidentally expose it to the internet.

Make sure that `thingsboard_mqtt_broker` database is created along with PostgreSQL instance (or create it afterwards).

![image](/images/mqtt-broker/install/aws-rds-default-database.png)

**Note:** You may also change `username` field and set or auto-generate `password` field (keep your postgresql password in a safe place).

## Step 5. Amazon MSK Configuration

You'll need to set up Amazon MSK.
To do so you need to open AWS console, MSK submenu, press `Create cluster` button and choose `Custom create` mode.
You should see the similar image:

![image](/images/mqtt-broker/install/aws-msk-creation.png)

**Note**: Make sure your MSK instance is accessible from TBMQ cluster.
The easiest way to achieve this is to deploy the MSK instance in the same VPC.
We also recommend to use private subnets. This way it will be nearly impossible to accidentally expose it to the internet;

Now you should choose TBMQ cluster's VPC for the Kafka cluster:

![image](/images/mqtt-broker/install/aws-msk-vpc.png)

After that you need to browse the security groups and choose group corresponding to the one on the screen:

![image](/images/mqtt-broker/install/aws-msk-vpc-sg.png)

Also, you should enable `Plaintext` communication between clients and brokers:

![image](/images/mqtt-broker/install/aws-msk-security.png)

**Note**, some recommendations:

* Apache Kafka version can be safely set to the latest 3.4.0 version as TBMQ is fully tested on it;
* Use m5.large or similar instance types;
* Use default 'Monitoring' settings or enable 'Enhanced topic-level monitoring'.

## Step 6. Configure links to the Kafka (Amazon MSK)/Postgres

### Amazon RDS PostgreSQL

Once the database switch to the ‘Available’ state, on AWS Console get the `Endpoint` of the RDS PostgreSQL and paste it to 
`SPRING_DATASOURCE_URL` in the `tb-broker-configmap.yml` instead of `RDS_URL_HERE` part.

![image](/images/mqtt-broker/install/aws-rds-endpoint.png)

Also, you'll need to set `SPRING_DATASOURCE_USERNAME` and `SPRING_DATASOURCE_PASSWORD` with PostgreSQL `username` and `password` corresponding.

### Amazon MSK

Once the MSK cluster switch to the ‘Active’ state, to get the list of brokers execute the next command:
```
aws kafka get-bootstrap-brokers --region us-east-1 --cluster-arn $CLUSTER_ARN
```
{: .copy-code}
Where **$CLUSTER_ARN** is the Amazon Resource Name (ARN) of the MSK cluster:

![image](/images/mqtt-broker/install/aws-msk-arn.png)

You'll need to paste data from the `BootstrapBrokerString` to the `TB_KAFKA_SERVERS` environment variable in the `tb-broker.yml` file.

Otherwise, click `View client information` seen on the screenshot above. Copy bootstrap server information in plaintext.

## Step 7. Installation

Execute the following command to run installation:
```
./k8s-install-tb-mqtt-broker.sh
```
{: .copy-code}

After this command finish you should see the next line in the console:

```
INFO  o.t.m.b.i.ThingsboardMqttBrokerInstallService - Installation finished successfully!
```

Otherwise, please check if you set the PostgreSQL URL in the `tb-broker-configmap.yml` correctly.

## Step 8. Starting

Execute the following command to deploy the broker:

```bash
./k8s-deploy-tb-broker.sh
```
{: .copy-code}

After a few minutes, you may execute the next command to check the state of all pods.
```bash
kubectl get pods
```
{: .copy-code}

If everything went fine, you should be able to see `tb-broker-0` and `tb-broker-1` pods. Every pod should be in the `READY` state.

## Step 9. Validate the setup

Now you can open TBMQ web interface in your browser using DNS name of the load balancer.

You can get DNS name of the load-balancers using the next command:

```
kubectl get services
```
{: .copy-code}

You should see the similar picture:

![image](/images/mqtt-broker/install/aws-loadbalancer.png)

Use `EXTERNAL-IP` field of the `tb-broker-loadbalancer-external` to connect to the cluster.

{% include templates/mqtt-broker/login.md %}

#### Troubleshooting

In case of any issues you can examine service logs for errors. For example to see TBMQ logs execute the following command:

```
kubectl logs -f tb-broker-0
```
{: .copy-code}

Use the next command to see the state of all statefulsets.
```bash
kubectl get statefulsets
```
{: .copy-code}

See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for more details.

## Cluster deletion

Execute the following command to delete TBMQ nodes:

```
./k8s-delete-tb-broker.sh
```
{: .copy-code}

Execute the following command to delete all TBMQ nodes and configmaps:

```
./k8s-delete-all.sh
```
{: .copy-code}

Execute the following command to delete the EKS cluster (you should change the name of the cluster and the region if those differ):
```
eksctl delete cluster -r us-east-1 -n thingsboard-mqtt-broker-cluster -w
```
{: .copy-code}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}