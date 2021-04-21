---
layout: docwithnav-pe
assignees:
- ashvayka
title: Cluster setup using GCP infrastructure 
description: ThingsBoard IoT platform cluster setup with Kubernetes and KOPS in Google Cloude Platform

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in cluster mode in Google Cloude Platform. 

## Prerequisites

ThingsBoard Microservices run on the Kubernetes cluster.
You need to install a gcloud, kops, terraform (v0.11+) and the kubectl (v1.16+).

[gcloud](https://cloud.google.com/sdk/gcloud) - for manage GCP infrastructure.

[kops](https://github.com/kubernetes/kops) - for create and manage kubernetes cluster.

[terraform](https://www.terraform.io/) - for create and manage cloud infrastructure in GCP.

You can choose any other available [Kubernetes cluster deployment solutions](https://kubernetes.io/docs/setup/pick-right-solution/).

## Step 1. Enter the terraform working directory

`
cd ./gcp
`

## Step 2. GCP credentials and access
Also you need access to GCP.

To login, please execute the following command:

`
gcloud auth application-default login
`

Get your project id:

`
gcloud projects list
`

To set your project for k8s cluster, please execute following command:

`
gcloud config set project $your_project_id
`

## Step 3. Installation GCP cloud infrastructure
To create a service account, a storage bucket and a rules for a k8s cluster, please create variables file:

```
cat << EOF > terraform.tfvars
project     = "$your_project_id"
svca_name   = "$name_for_new_service_account"
bucket_name = "$bucket_name_for_kops"
vpc_name    = "$vpc_name"
EOF
```

To initialize terraform states, please execute the following command:

`
terraform init
`

To review what infrastructure will be created, please execute the following command:

`
terraform plan
`

To create infrastructure for the k8s cluster, please execute the following command:

`
terraform apply
`

In output of this command you will have your bucket name and service account email.

To get your service account id, email, name with gcloud, please execute the following command:

`
gcloud iam service-accounts list
` 

To create a new json key for your service account, please execute the following command:

`
gcloud iam service-accounts keys create --iam-account $serviceAccountEMAIL kops-cluster-gcp-key.json
`

To export a JSON file content of the created service account json key, please execute the following command:

`
export GOOGLE_CREDENTIALS=$(cat ./kops-cluster-gcp-key.json)
`

To create the k8s cluster, please execute the following commands:

```
PROJECT=$your_project_id
export KOPS_FEATURE_FLAGS=AlphaAllowGCE # to unlock the GCE features
kops create cluster kops-example-dev.k8s.local --zones=us-central1-a,us-central1-b,us-central1-c --gce-service-account $serviceAccountEMAIL --vpc $vpc_name --state gs://$bucket_name_for_kops/ --project=${PROJECT} --kubernetes-version=1.18.0 --node-count 3 --node-size n2-standard-4
```

If you want a high-available cluster, please add this option to the last command:

`
--master-count 3
--master-zones=us-central1-a,us-central1-b,us-central1-c
--node-count 6
--node-size n2-standard-4
`

To get the k8s cluster name from the bucket, please execute following command:

`
kops get cluster --state gs://$bucket_name_for_kops/
`

To deploy the cluster to the gcp infrastructure, please execute following command:

`
kops update cluster kops-example-dev.k8s.local --state gs://$bucket_name_for_kops/ --yes
`

To check status of your cluster, please execute following command:

`
kops validate cluster --wait 10m --state gs://$bucket_name_for_kops/
`

After that you can check your nodes:

`
kubectl get ndoes
`

If you want to export a kubectl config, please execute following command:

`
kops export kubecfg kops-example-dev.k8s.local
`

## Step 4. Review the architecture page

Starting ThingsBoard v2.2, it is possible to install ThingsBoard cluster using new microservices architecture and docker containers. 
See [**microservices**](/docs/reference/msa/) architecture page for more details.

## Step 5. Environment file.

Please go to back in root folder `cd ../`.

In `.env` file set the value of `PLATFORM` field to `gcp`.

## Step 6. Configure ThingsBoard database

Before performing initial installation you can configure the type of database to be used with ThingsBoard.
In order to set database type change the value of `DATABASE` variable in `.env` file to one of the following:

- `postgres` - use PostgreSQL database;
- `hybrid` - use PostgreSQL for entities database and Cassandra for timeseries database;

**NOTE**: According to the database type corresponding kubernetes resources will be deployed (see `basic/postgres.yml` or `high-availability/postgres-ha.yaml` for postgres with replication, `common/cassandra.yml` for details).

## Step 7. Choose deployment type

Before performing initial installation you can configure the type of ThingsBoard deployment.
In order to set deployment type change the value of `DEPLOYMENT_TYPE` variable in `.env` file to one of the following:

- `basic` - startup with a single instance of Zookeeper, Kafka and Redis;
- `high-availability` - startup with Zookeeper, Kafka, and Redis in cluster modes;

**NOTE**: According to the deployment type corresponding kubernetes resources will be deployed (see the content of the directories `basic` and `high-availability` for details).

If you selected `cassandra` as `DATABASE` you can also configure the number of Cassandra nodes (`StatefulSet.spec.replicas` property in `common/cassandra.yml` config file) and the `CASSANDRA_REPLICATION_FACTOR` in `.env` file. 
It is recommended to have 3 Cassandra nodes with `CASSANDRA_REPLICATION_FACTOR` equal to 1.

**NOTE**: If you want to configure `CASSANDRA_REPLICATION_FACTOR` please read Cassandra documentation first.  

Also, to run PostgreSQL in `high-availability` deployment mode you'll need to  [install](https://helm.sh/docs/intro/install/) `helm`.

## Step 8. Upload Docker credentials

Make sure your have logged in to docker hub using command line. To upload Docker credentials, please execute next command:

`
./k8s-upload-docker-credentials.sh
`

Or you can use the following command:

`
kubectl create secret docker-registry regcred --docker-server=https://index.docker.io/v1/ --docker-username=$YOUR_USERNAME --docker-password=$YOUR_PASSWORD --docker-email=$YOUR_EMAIL
`

## Step 9. Running

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

After a while when all resources will be successfully started you can open ThingsBoard web interface in your browser using dns name of the load balancer. 

You can see DNS name of the loadbalancer using command:

`
 kubectl get ingress -oyaml
`

Or you can see this name on the AWS ELB page.

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
 kubectl logs -f [tb-node-pod-name]
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

To destroy the k8s cluster and GCP resources, please execute following commands:

```
kops delete cluster kops-example-dev.k8s.local --state gs://$bucket_name_for_kops/ --yes
export GOOGLE_CREDENTIALS=""
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

- `FROM_VERSION` - from which version upgrade should be started. See [Upgrade Instructions](/docs/user-guide/install/pe/upgrade-instructions) for valid `fromVersion` values.

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
