---
layout: docwithnav
assignees:
- ashvayka
title: ThingsBoard Professional Edition cluster setup guide
description: ThingsBoard Professional Edition cluster setup guide

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in cluster mode. 
For this purpose, we will use docker container images available on [Docker Hub](https://hub.docker.com/search?q=thingsboard&type=image&image_filter=store).  
For simplicity, we will use docker-compose tool to setup our cluster. You might use the same images with Docker Swarm, Kubernetes, OpenShift or other tools.

## Prerequisites

ThingsBoard Microservices are running in dockerized environment.
Before starting please make sure [Docker CE](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) are installed in your system. 

## Step 1. Checkout all ThingsBoard PE Images

Please checkout all ThingsBoard PE Images from Docker Hub.
You will need to open all [verified images](https://hub.docker.com/search?q=thingsboard&type=image&image_filter=store) and click on "Proceed to checkout" to accept ThingsBoard PE license agreement.

Listing all images **mandatory** for checkout for your convenience below:

 - [ThingsBoard PE Node Microservice](https://hub.docker.com/_/thingsboard-pe-node)  
 - [ThingsBoard PE Web UI Microservice](https://hub.docker.com/_/thingsboard-pe-web-ui)
 - [ThingsBoard PE Web Report Microservice](https://hub.docker.com/_/thingsboard-pe-web-report) 
 - [ThingsBoard PE JS Executor Microservice](https://hub.docker.com/_/thingsboard-pe-js-executor)
 - [ThingsBoard PE HTTP Transport Microservice](https://hub.docker.com/_/thingsboard-pe-http-transport)    
 - [ThingsBoard PE MQTT Transport Microservice](https://hub.docker.com/_/thingsboard-pe-mqtt-transport)
 - [ThingsBoard PE CoAP Transport Microservice](https://hub.docker.com/_/thingsboard-pe-coap-transport) 


![image](/images/user-guide/install/docker-pe/checkout-pe-node.png)


Populate basic information about yourself and click "Get Content"


![image](/images/user-guide/install/docker-pe/details.png)
 

## Step 2. Pull ThingsBoard PE Images

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

```bash
docker pull store/thingsboard/tb-pe-node:2.4.3PE
docker pull store/thingsboard/tb-pe-web-ui:2.4.3PE
docker pull store/thingsboard/tb-pe-web-report:2.4.3PE
docker pull store/thingsboard/tb-pe-js-executor:2.4.3PE
docker pull store/thingsboard/tb-pe-http-transport:2.4.3PE
docker pull store/thingsboard/tb-pe-mqtt-transport:2.4.3PE
docker pull store/thingsboard/tb-pe-coap-transport:2.4.3PE
```

## Step 3. Clone ThingsBoard PE Docker Compose scripts

```bash
git clone https://github.com/thingsboard/thingsboard-pe-docker-compose.git tb-pe-docker-compose
```

## Step 4. Obtain your license key

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

**IMPORTANT NOTE:** Make sure you have purchased a license key for at least two instances of ThingsBoard PE. Otherwise you need to modify local copy of 
[docker-compose.yml](https://github.com/thingsboard/thingsboard-pe-docker-compose/blob/master/docker-compose.yml) to use only one ThingsBoard instance. 
We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.


## Step 5. Configure your license key

```bash
cd tb-pe-docker-compose
nano tb-node.env
```

and put the license secret parameter

```bash
# ThingsBoard server configuration

ZOOKEEPER_ENABLED=true
...

TB_LICENSE_SECRET=PUT_YOUR_LICENSE_SECRET_HERE
```


## Step 6. Review the architecture page

Starting ThingsBoard v2.2, it is possible to install ThingsBoard cluster using new microservices architecture and docker containers. 
See [**microservices**](/docs/reference/msa/) architecture page for more details.


## Step 7. Installation

Before performing initial installation you can configure the type of database to be used with ThingsBoard.
In order to set database type change the value of `DATABASE` variable in `.env` file to one of the following:

- `postgres` - use PostgreSQL database;
- `cassandra` - use Cassandra database;

**NOTE**: According to the database type corresponding docker service will be deployed (see `docker-compose.postgres.yml`, `docker-compose.cassandra.yml` for details).

Execute the following command to run installation:

`
$ ./docker-install-tb.sh --loadDemo
`

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

## Step 8. Running

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
$ docker-compose logs -f tb1
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
