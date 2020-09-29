---
layout: docwithnav
assignees:
- ashvayka
title: Cluster setup using OpenShift
description: ThingsBoard IoT platform cluster setup with Kubernetes and OpenShift guide

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in cluster mode using OpenShift. 

## Prerequisites

ThingsBoard Microservices run on the Kubernetes cluster. To deploy OpenShift cluster locally you'll need to have Docker CE to run OpenShift containers and OpenShift Origin itself. 
Please follow [these instructions](https://www.techrepublic.com/article/how-to-install-openshift-origin-on-ubuntu-18-04/) to install all required software.


### Log in to OpenShift cluster

To access OpenShift cluster you'll have to login first. By default, you may login as the `developer` user:

`
$  oc login -u developer -p developer
` 

### Create project

On the first start-up you should create the `thingsboard` project.
To create it, please execute next command:

`
$ oc new-project thingsboard
` 


## Step 1. Review the architecture page

Starting ThingsBoard v2.2, it is possible to install ThingsBoard cluster using new microservices architecture and docker containers. 
See [**microservices**](/docs/reference/msa/) architecture page for more details.

## Step 2. Clone ThingsBoard CE Kubernetes scripts repository

```bash
git clone https://github.com/thingsboard/thingsboard-ce-k8s.git
```

In `.env` file set the value of `PLATFORM` field to `openshift`.

## Step 3. Configure ThingsBoard database

Before performing initial installation you can configure the type of database to be used with ThingsBoard.
In order to set database type change the value of `DATABASE` variable in `.env` file to one of the following:

- `postgres` - use PostgreSQL database;
- `hybrid` - use PostgreSQL for entities database and Cassandra for timeseries database;

**NOTE**: According to the database type corresponding kubernetes resources will be deployed (see `basic/postgres.yml` or `high-availability/postgres-ha.yaml` for postgres with replication, `common/cassandra.yml` for details).

## Step 4. Choose deployment type

Before performing initial installation you can configure the type of ThingsBoard deployment.
In order to set deployment type change the value of `DEPLOYMENT_TYPE` variable in `.env` file to one of the following:

- `basic` - startup with a single instance of Zookeeper, Kafka and Redis;
- `high-availability` - startup with Zookeeper, Kafka, and Redis in cluster modes;

**NOTE**: According to the deployment type corresponding kubernetes resources will be deployed (see the content of the directories `basic` and `high-availability` for details).

If you selected `cassandra` as `DATABASE` you can also configure the number of Cassandra nodes (`StatefulSet.spec.replicas` property in `common/cassandra.yml` config file) and the `CASSANDRA_REPLICATION_FACTOR` in `.env` file. 
It is recommended to have 3 Cassandra nodes with `CASSANDRA_REPLICATION_FACTOR` equal to 1.

**NOTE**: If you want to configure `CASSANDRA_REPLICATION_FACTOR` please read Cassandra documentation first.  

Also, to run PostgreSQL in `high-availability` deployment mode you'll need to  [install](https://helm.sh/docs/intro/install/) `helm`.

## Step 5. Running

Execute the following command to run installation:

`
$ ./k8s-install-tb.sh --loadDemo
`

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

Execute the following command to deploy third-party resources:

`
$ ./k8s-deploy-thirdparty.sh
`

Type **'yes'** when prompted, if you are running ThingsBoard in `high-availability` `DEPLOYMENT_TYPE` for the first time or don't have configured Redis cluster.


Execute the following command to deploy ThingsBoard resources:

`
$ ./k8s-deploy-resources.sh
`

To see how to reach your ThingsBoard application on cluster, login as ***developer*** user (default password is ***developer*** too), open `thingsboard` project, then go to `Application -> Routes` menu and you'll see all your configured routes.
The *root* route should look like `https://tb-route-node-root-thingsboard.127.0.0.1.nip.io/`.

When you open it, you should see ThingsBoard login page.

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

If you installed DataBase with demo data (using `--loadDemo` flag) you can also use the following credentials:

- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

1) Get the list of the running tb-node pods:

`
$ oc get pods -l app=tb-node
`

2) Fetch logs of the tb-node pod:

`
$ oc logs -f [tb-node-pod-name]
`

Where:

- `tb-node-pod-name` - tb-node pod name obtained from the list of the running tb-node pods.

Or use `oc get pods` to see the state of all the pods.
Or use `oc get services` to see the state of all the services.
Or use `oc get deployments` to see the state of all the deployments.
See [oc Cheat Sheet](https://design.jboss.org/redhatdeveloper/marketing/openshift_cheatsheet/cheatsheet/images/openshift_cheat_sheet_r1v1.pdf) command reference for details.

Execute the following command to delete all ThingsBoard microservices:

`
$ ./k8s-delete-resources.sh
`

Execute the following command to delete all third-party microservices:

`
$ ./k8s-delete-thirdparty.sh
`

Execute the following command to delete all resources (including database):

`
$ ./k8s-delete-all.sh
`

## Upgrading

In case when database upgrade is needed, execute the following commands:

```
$ ./k8s-delete-resources.sh
$ ./k8s-upgrade-tb.sh --fromVersion=[FROM_VERSION]
$ ./k8s-deploy-resources.sh
```

Where:

- `FROM_VERSION` - from which version upgrade should be started. See [Upgrade Instructions](https://thingsboard.io/docs/user-guide/install/upgrade-instructions) for valid `fromVersion` values.

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
