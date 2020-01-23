---
layout: docwithnav
assignees:
- ashvayka
title: ThingsBoard Professional Edition using Docker with Cassandra (Linux or Mac OS)
description: ThingsBoard Professional Edition using Docker with Cassandra (Linux or Mac OS)

---

* TOC
{:toc}
This guide will help you to setup ThingsBoard in Docker with Cassandra DB. 
For this purpose, we will use docker container images available on [Docker Hub](https://hub.docker.com/search?q=thingsboard&type=image&image_filter=store).  

## Prerequisites

Before starting please make sure [Docker CE](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) are installed in your system. 

## Step 1. Checkout ThingsBoard PE Node Image

Please checkout ThingsBoard PE Node Image from Docker Hub.
You will need to open all [verified images](https://hub.docker.com/search?q=thingsboard&type=image&image_filter=store) and click on "Proceed to checkout" to accept ThingsBoard PE license agreement.

Listing image **mandatory** for checkout for your convenience below:

 - [ThingsBoard PE Node Microservice](https://hub.docker.com/_/thingsboard-pe-node)  


![image](/images/user-guide/install/docker-pe/checkout-pe-node.png)


Populate basic information about yourself and click "Get Content"


![image](/images/user-guide/install/docker-pe/details.png)


## Step 2. Pull ThingsBoard PE Image

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

```bash
docker pull store/thingsboard/tb-pe-node:2.4.3PE
```

## Step 3. Clone ThingsBoard PE Docker Compose scripts

```bash
git clone https://github.com/thingsboard/thingsboard-pe-docker-compose.git tb-pe-docker-compose
cd tb-pe-docker-compose
git checkout develop/cassandra-standalone
```

## Step 4. Obtain your license key

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.
We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.


## Step 5. Configure your license key

```bash
nano tb-node.env
```

and put the license secret parameter

```bash
# ThingsBoard server configuration

RPC_HOST=${TB_HOST}
HTTP_LOG_CONTROLLER_ERROR_STACK_TRACE=false

TB_LICENSE_SECRET=PUT_YOUR_LICENSE_SECRET_HERE
```

## Step 6. Installation

Check docker-compose.yml and configure ports if you need

```bash
nano docker-compose.yml
```

```bash
services:
  tbpe:
    restart: always
    image: "${DOCKER_REPO}/${TB_NODE_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "9090:8080"
      - "1883:1883"
      - "5683:5683"
```

Execute installation script

`$ ./docker-install-tb.sh --loadDemo`

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

## Step 7. Running

Execute the following command to start services:

`
$ ./docker-start-services.sh
`

After a while when all services will be successfully started you can open `http://{your-host-ip}:9090` in you browser (for ex. `http://localhost:9090`).
You should see ThingsBoard login page.

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

If you installed DataBase with demo data (using `--loadDemo` flag) you can also use the following credentials:

- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

`
$ docker-compose logs -f tbpe
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

`$ ./docker-update-service.sh`

## Post-installation steps

{% include templates/install/ubuntu-haproxy-postinstall.md %}

## Upgrading

In case when database upgrade is needed, execute the following commands:

```bash
$ ./docker-stop-services.sh
$ ./docker-upgrade-tb.sh --fromVersion=[FROM_VERSION]
$ ./docker-start-services.sh
```

Where:

- `FROM_VERSION` - from which version upgrade should be started. See [Upgrade Instructions](https://thingsboard.io/docs/user-guide/install/upgrade-instructions) for valid `fromVersion` values.


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
