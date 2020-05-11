---
layout: docwithnav
assignees:
- ashvayka
title: Cluster setup
description: ThingsBoard IoT platform cluster setup guide

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in cluster mode. 
For simplicity, we will use docker-compose tool to setup our cluster.

## Prerequisites

ThingsBoard Microservices are running in dockerized environment.
Before starting please make sure [Docker CE](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) are installed in your system. 

## Step 1. Checkout all ThingsBoard СE Images

Please checkout all ThingsBoard CE Images from Docker Hub.
You will need to open all [verified images](https://hub.docker.com/search?q=thingsboard&type=image&image_filter=store).

Listing all images **mandatory** for checkout for your convenience below:

 - [ThingsBoard CE Node Microservice](https://hub.docker.com/_/thingsboard-ce-node)
 - [ThingsBoard CE Web UI Microservice](https://hub.docker.com/_/thingsboard-ce-web-ui)
 - [ThingsBoard CE Web Report Microservice](https://hub.docker.com/_/thingsboard-ce-web-report) 
 - [ThingsBoard CE JS Executor Microservice](https://hub.docker.com/_/thingsboard-ce-js-executor)
 - [ThingsBoard CE HTTP Transport Microservice](https://hub.docker.com/_/thingsboard-ce-http-transport)    
 - [ThingsBoard CE MQTT Transport Microservice](https://hub.docker.com/_/thingsboard-ce-mqtt-transport)
 - [ThingsBoard CE CoAP Transport Microservice](https://hub.docker.com/_/thingsboard-ce-coap-transport) 

## Step 2. Pull ThingsBoard CE Images

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

```bash
docker pull store/thingsboard/tb-ce-node:2.5.0
docker pull store/thingsboard/tb-ce-web-ui:2.5.0
docker pull store/thingsboard/tb-ce-web-report:2.5.0
docker pull store/thingsboard/tb-ce-js-executor:2.5.0
docker pull store/thingsboard/tb-ce-http-transport:2.5.0
docker pull store/thingsboard/tb-ce-mqtt-transport:2.5.0
docker pull store/thingsboard/tb-ce-coap-transport:2.5.0
```

## Step 3. Review the architecture page

Starting ThingsBoard v2.2, it is possible to install ThingsBoard cluster using new microservices architecture and docker containers. 
See [**microservices**](/docs/reference/msa/) architecture page for more details.

## Step 4. Clone ThingsBoard CE repository

```bash
git clone https://github.com/thingsboard/thingsboard.git
cd docker
```

## Step 5. Configure ThingsBoard database

Before performing initial installation you can configure the type of database to be used with ThingsBoard.
In order to set database type change the value of `DATABASE` variable in `.env` file to one of the following:

- `postgres` - use PostgreSQL database;
- `cassandra` - use Cassandra database;

**NOTE**: According to the database type corresponding docker service will be deployed (see `docker-compose.postgres.yml`, `docker-compose.cassandra.yml` for details).

## Step 6. Choose ThingsBoard queue service 

{% include templates/install/install-queue.md %}

{% capture contenttogglespecqueue %}
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka%,%templates/install/cluster-queue-kafka.md%br%
AWS SQS <small>(managed service from AWS)</small>%,%aws-sqs%,%templates/install/cluster-queue-aws-sqs.md%br%
Google Pub/Sub <small>(managed service from Google)</small>%,%pubsub%,%templates/install/cluster-queue-pub-sub.md%br%
Azure Service Bus <small>(managed service from Azure)</small>%,%service-bus%,%templates/install/cluster-queue-service-bus.md%br%
RabbitMQ <small>(for small on-prem installations)</small>%,%rabbitmq%,%templates/install/cluster-queue-rabbitmq.md{% endcapture %}

{% include content-toggle.html content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %} 

## Step 7. Running

Execute the following command to create log folders for the services and chown of these folders to the docker container users. 
To be able to change user, **chown** command is used, which requires sudo permissions (script will request password for a sudo access): 

`
$ ./docker-create-log-folders.sh
`

Execute the following command to run installation:

`
$ ./docker-install-tb.sh --loadDemo
`

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

Execute the following command to start services:

`
$ ./docker-start-services.sh
`

After a while when all services will be successfully started you can open `http://{your-host-ip}` in you browser (for ex. `http://localhost`).
You should see ThingsBoard login page.

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

If you installed DataBase with demo data (using `--loadDemo` flag) you can also use the following credentials:

- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

`
$ docker-compose logs -f tb-core1 tb-rule-engine1
`

Or use `docker-compose ps` to see the state of all the containers.
Use `docker-compose logs --f` to inspect the logs of all running services.
See [docker-compose logs](https://docs.docker.com/compose/reference/logs/) command reference for details.

Execute the following command to stop services:

`
$ ./docker-stop-services.sh
`

Execute the following command to stop and completely remove deployed docker containers:

`
$ ./docker-remove-services.sh
`

Execute the following command to update particular or all services (pull newer docker image and rebuild container):

`
$ ./docker-update-service.sh [SERVICE...]
`

Where:

- `[SERVICE...]` - list of services to update (defined in docker-compose configurations). If not specified all services will be updated.

## Upgrading

In case when database upgrade is needed, execute the following commands:

```
$ ./docker-stop-services.sh
$ ./docker-upgrade-tb.sh --fromVersion=[FROM_VERSION]
$ ./docker-start-services.sh
```

Where:

- `FROM_VERSION` - from which version upgrade should be started. See [Upgrade Instructions](https://thingsboard.io/docs/user-guide/install/upgrade-instructions) for valid `fromVersion` values.

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
