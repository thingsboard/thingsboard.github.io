---
layout: docwithnav
assignees:
- ashvayka
title: Cluster setup using AWS infrastructure
description: ThingsBoard IoT platform cluster setup with Kubernetes in AWS EKS

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in cluster mode in AWS EKS. 

## Prerequisites

ThingsBoard Microservices run on the Kubernetes cluster.
You need to install a terraform (v0.12+) and the kubectl (v1.16+).

[terraform](https://www.terraform.io/) - for create and manage cloud infrastructure in AWS EKS.

You can choose any other available [Kubernetes cluster deployment solutions](https://kubernetes.io/docs/setup/production-environment/tools/)

## Step 1. Enter the terraform working directory

`
cd ./aws/eks
`

## Step 2. AWS credentials
Also you need access to AWS. It can be iam user or iam role. You need have a AWS_ACCESS_KEY and AWS_SECRET_ACCESS_KEY.
To add environment variables, please execute the following command:

`
export AWS_ACCESS_KEY=xxxxxxxxx
`

`
export AWS_SECRET_ACCESS_KEY=xxxxxxxxxxxxxx
`

## Step 3. Installation EKS cluster

To initialize a working directory for terraform, please execute the following command:

`
terraform init
`

To create configure file for terraform, please execute the following command:

`
nano terraform.tfvars
`

And add this example config:
```
cluster_name = "k8s-cluster-example"
aws_region = "eu-west-1"
worker_type = "t3.medium"
cluster_version = "1.17"
```
Now we use this example config, but you can see all the variables in `variables.tf`.

To see what infrastructure will be created, please execute the following command:

`
terraform plan
`

To create this infrastructure, please execute the following command:

`
terraform apply
`

We will get cluster_name from the output of this command.
And after executing this command we will have the k8s cluster.

To set KUBECONFIG variable for kubectl, please execute the following command:

`
export KUBECONFIG=$(pwd)/$your_kubeconfig_thingsboard_name
`

And check your nodes in the cluster:

`
kubectl get nodes 
`

To scale your nodes you need to install "cluster_autoscaler". Please, change "cluster_name" in `../../common/cluster-autoscaler-autodiscover.yaml`, 
and please execute the following command for install "cluster_autoscaler":

`
kubectl apply -f ../../common/cluster-autoscaler-autodiscover.yaml
`

## Step 3. Review the architecture page

Starting ThingsBoard v2.2, it is possible to install ThingsBoard cluster using new microservices architecture and docker containers. 
See [**microservices**](/docs/reference/msa/) architecture page for more details.

## Step 4. Environment file.

Please go to back in root folder `cd ../../`.

In `.env` file set the value of `PLATFORM` field to `aws-eks`.

## Step 5. Configure ThingsBoard database

Before performing initial installation you can configure the type of database to be used with ThingsBoard.
In order to set database type change the value of `DATABASE` variable in `.env` file to one of the following:

- `postgres` - use PostgreSQL database;
- `hybrid` - use PostgreSQL for entities database and Cassandra for timeseries database;

**NOTE**: According to the database type corresponding kubernetes resources will be deployed (see `basic/postgres.yml` or `high-availability/postgres-ha.yaml` for postgres with replication, `common/cassandra.yml` for details).

## Step 6. Choose deployment type

Before performing initial installation you can configure the type of ThingsBoard deployment.
In order to set deployment type change the value of `DEPLOYMENT_TYPE` variable in `.env` file to one of the following:

- `basic` - startup with a single instance of Zookeeper, Kafka and Redis;
- `high-availability` - startup with Zookeeper, Kafka, and Redis in cluster modes;

**NOTE**: According to the deployment type corresponding kubernetes resources will be deployed (see the content of the directories `basic` and `high-availability` for details).

If you selected `cassandra` as `DATABASE` you can also configure the number of Cassandra nodes (`StatefulSet.spec.replicas` property in `common/cassandra.yml` config file) and the `CASSANDRA_REPLICATION_FACTOR` in `.env` file. 
It is recommended to have 3 Cassandra nodes with `CASSANDRA_REPLICATION_FACTOR` equal to 1.

**NOTE**: If you want to configure `CASSANDRA_REPLICATION_FACTOR` please read Cassandra documentation first.  

Also, to run PostgreSQL in `high-availability` deployment mode you'll need to  [install](https://helm.sh/docs/intro/install/) `helm`.

## Step 7. Running

Execute the following command to run installation:

`
 ./k8s-install-tb.sh --loadDemo
`

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

Execute the following command to deploy third-party resources:

`
 ./k8s-deploy-thirdparty.sh
`

Type **'yes'** when prompted, if you are running ThingsBoard in `high-availability` `DEPLOYMENT_TYPE` for the first time or don't have configured Redis cluster.


Execute the following command to deploy ThingsBoard resources:

`
 ./k8s-deploy-resources.sh
`

After a while when all resources will be successfully started you can open ThingsBoard web interface in your browser using ip of the load balancer. 

You can see ip of the loadbalancer using command:

`
 kubectl get ingress -oyaml
`

Or you can see this name on the GCP LB page.

You should see ThingsBoard login page.

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

If you installed DataBase with demo data (using `--loadDemo` flag) you can also use the following credentials:

- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

1) Get the list of the running tb-node pods:

`
 kubectl get pods -l app=tb-node
`

2) Fetch logs of the tb-node pod:

`
 kubectl logs -f $tb-node-pod-name
`

Where:

- `tb-node-pod-name` - tb-node pod name obtained from the list of the running tb-node pods.

Or use `kubectl get pods` to see the state of all the pods.
Or use `kubectl get services` to see the state of all the services.
Or use `kubectl get deployments` to see the state of all the deployments.
See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for details.

Execute the following command to delete all ThingsBoard microservices:

`
 ./k8s-delete-resources.sh
`

Execute the following command to delete all third-party microservices:

`
 ./k8s-delete-thirdparty.sh
`

Execute the following command to delete all resources (including database):

`
 ./k8s-delete-all.sh
`

To remove k8s cluster and aws resources, you can execute the following command:

```
terraform destroy
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
