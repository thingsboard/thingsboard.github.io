---
layout: docwithnav-mqtt-broker
title: Setup using AWS infrastructure
description: ThingsBoard MQTT Broker microservices setup with Kubernetes in AWS EKS

---

* TOC
{:toc}

This guide will help you to set up ThingsBoard MQTT Broker in AWS EKS.

## Prerequisites

{% include templates/install/aws/eks-prerequisites.md %}

## Step 1. Clone ThingsBoard CE K8S scripts repository

```bash
git clone https://github.com/thingsboard/thingsboard-mqtt-broker.git
cd thingsboard-mqtt-broker/k8s/aws
```
{: .copy-code}

## Step 2. Configure and create EKS cluster

In the `cluster.yml` file you can find suggested cluster configuration.
Here are the fields you can change depending on your needs:
- `region` - should be the AWS region where you want your cluster to be located (the default value is `us-east-1`)
- `availabilityZones` - should specify the exact IDs of the region's availability zones
  (the default value is `[us-east-1a,us-east-1b,us-east-1c]`)
- `instanceType` - the type of the instance with TB node (the default value is `m5.large`)

**Note**: if you don't make any changes to `instanceType` and `desiredCapacity` fields, the EKS will deploy **1** node of type **m5.large**.

{% capture aws-eks-security %}
In case you want to secure access to the PostgreSQL and MSK, you'll need to configure the existing VPC or create a new one,
set it as the VPC for the ThingsBoard MQTT Broker cluster, create security groups for PostgreSQL and MSK,
set them for `main-node-group` node-group in the ThingsBoard MQTT Broker cluster and configure the access from the ThingsBoard MQTT Broker cluster nodes to PostgreSQL/MSK using another security group.

You can find more information about configuring VPC for `eksctl` [here](https://eksctl.io/usage/vpc-networking/).
{% endcapture %}
{% include templates/info-banner.md content=aws-eks-security %}

Command to create AWS cluster:

```
eksctl create cluster -f cluster.yml
```
{: .copy-code}

## Step 3. Create AWS load-balancer controller

After the cluster is ready you'll need to create AWS load-balancer controller.
You can do it by following [this](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html) guide.

## Step 4. Amazon PostgreSQL DB Configuration

You'll need to set up PostgreSQL on Amazon RDS.
One of the ways to do it is by following [this](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html) guide.

**Note**: Make sure your database is accessible from the cluster, one of the way to achieve this is to create
the database in the same VPC and subnets as ThingsBoard MQTT Broker cluster.

Here you should choose VPC with the name of your cluster:

![image](/images/install/cloud/aws-rds-connectivity-vpc.png)

Here you should choose security group corresponding to the one on the screen:

![image](/images/install/cloud/aws-rds-connectivity-security-group.png)

**Note**: in order to make PostgreSQL more secure you may create the separate security group,
configure access only to the 5432 port and from the ThingsBoard MQTT Broker nodes.
This can be achieved if you assigned security group to the `main-node-group` node-group in the `cluster.yml` file.

Make sure that `thingsboard_mqtt_broker` database is created along with PostgreSQL instance (or create it afterwards).

![image](/images/mqtt-broker/install/aws-rds-default-database.png)

**Note:** You may also change `username` and `password` fields.

## Step 5. Amazon MSK Configuration

You'll need to set up Amazon MSK.
To do so you need to open AWS console, MSK submenu, press `Create cluster` button and choose `Custom create` mode.
You should see the similar image:

![image](/images/install/cloud/aws-msk-creation.png)

Now you should choose the ThingsBoard MQTT Broker cluster's VPC for the Kafka cluster:

![image](/images/install/cloud/aws-msk-vpc.png)

You can choose any zones and subnets.

After that you need to select `Custom settings` of security groups and choose groups corresponding to the group on the screen:

![image](/images/install/cloud/aws-msk-security-groups.png)

Also you should enable `Plaintext` communication between clients and brokers:

![image](/images/install/cloud/aws-msk-encryption.png)

**Note**: in order to make MSK more secure you may create the separate security group,
configure access only to the 9092 port and from the ThingsBoard MQTT Broker nodes.
This can be achieved if you assigned security group to the `main-node-group` node-group in the `cluster.yml` file.

## Step 6. Configure links to the Kafka (Amazon MSK)/Redis/Postgres

### Amazon RDS PostgreSQL

On AWS Console get the `Endpoint` of the RDS PostgreSQL and paste it to `SPRING_DATASOURCE_URL` in the `tb-broker-configmap.yml` instead of `your_url`.

![image](/images/install/cloud/aws-postgres-endpoint.png)

Also, you'll need to set `SPRING_DATASOURCE_USERNAME` and `SPRING_DATASOURCE_PASSWORD` with PostgreSQL `username` and `password` corresponding.

### Amazon MSK

To get the list of brokers call the command:
```
aws kafka get-bootstrap-brokers --region us-east-1 --cluster-arn $CLUSTER_ARN
```
{: .copy-code}
Where **$CLUSTER_ARN** is the Amazon Resource Name (ARN) of the MSK cluster:

![image](/images/install/cloud/aws-msk-arn.png)

You'll need to paste data from the `BootstrapBrokerString` to the `TB_KAFKA_SERVERS` environment variable in the `tb-broker.yml` file.

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

Execute the following command to run installation:

```bash
./k8s-deploy-tb-broker.sh
```
{: .copy-code}

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to see `tb-broker-0` pod.
Every pod should be in the `READY` state.

## Step 9. Using

Now you can open ThingsBoard MQTT Broker web interface in your browser using DNS name of the load balancer.

You can see DNS name of the load-balancers using command:

```
kubectl get service
```
{: .copy-code}

You should see the similar picture:

![image](/images/mqtt-broker/install/aws-loadbalancer.png)

Use `EXTERNAL-IP` field of the `tb-broker-loadbalancer-external` to connect to the cluster.

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

```
kubectl logs -f tb-broker-0
```
{: .copy-code}

Or use `kubectl get pods` to see the state of the pods.
Or use `kubectl get services` to see the state of all the services.
Or use `kubectl get statefulsets` to see the state of all the deployments.
See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for details.

Execute the following command to delete ThingsBoard MQTT Broker nodes:

```
./k8s-delete-tb-broker.sh
```
{: .copy-code}

Execute the following command to delete all ThingsBoard MQTT Broker nodes and configmaps:

```
./k8s-delete-all.sh
```
{: .copy-code}

Execute the following command to delete EKS cluster (you should change the name of the cluster and zone):
```
eksctl delete cluster -r us-east-1 -n thingsboard-mqtt-broker-cluster -w
```
{: .copy-code}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}