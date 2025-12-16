---
layout: docwithnav-pe
assignees:
- ashvayka
title: ThingsBoard Professional Edition cluster setup with Docker Compose guide
description: ThingsBoard Professional Edition cluster setup with Docker Compose guide
redirect_from: "/docs/user-guide/install/pe/docker-cassandra/"  

---

* TOC
{:toc}

{% assign docsPrefix = "pe/" %}

This guide will help you to setup ThingsBoard in cluster mode with Docker Compose. 
For this purpose, we will use docker container images available on [Docker Hub](https://hub.docker.com/search?q=thingsboard&type=image&image_filter=store).

## Prerequisites

ThingsBoard Microservices are running in dockerized environment.
Before starting please make sure Docker Engine and Docker Compose are installed in your system. 

{% include templates/install/docker-install.md %}

{% capture rule_engine_note %}
Please note that for the deployment of Rule Engine as a separate service, an additional separate License Key is required. 
{% endcapture %}
{% include templates/info-banner.md content=rule_engine_note %}

{% include templates/install/docker-install-note.md %}

## Step 1. Pull ThingsBoard PE Images

{% include templates/install/dockerhub/pull.md %}

## Step 2. Clone ThingsBoard PE Docker Compose scripts

```bash
git clone -b release-{{ site.release.ce_ver }} https://github.com/thingsboard/thingsboard-pe-docker-compose.git tb-pe-docker-compose --depth 1
cd tb-pe-docker-compose
```
{: .copy-code}

## Step 3. Obtain your license key

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

**IMPORTANT NOTE:** if you decide to use an [advanced deployment type](/docs/user-guide/install/pe/cluster/docker-compose-setup/#step-6-configure-deployment-type), make sure you have purchased a license key for at least four instances of ThingsBoard PE. 
Otherwise, you need to modify the local copy of [docker-compose.yml](https://github.com/thingsboard/thingsboard-pe-docker-compose/blob/master/advanced/docker-compose.yml)) 
to use the number of ThingsBoard instances that you've purchased.
We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.


## Step 4. Configure your license key

```bash
nano tb-node.env
```
{: .copy-code}

and put the license secret parameter instead of "PUT_YOUR_LICENSE_SECRET_HERE":

```bash
# ThingsBoard server configuration
...
TB_LICENSE_SECRET=PUT_YOUR_LICENSE_SECRET_HERE
```

## Step 5. Configure deployment type

Starting ThingsBoard v2.2, it is possible to install ThingsBoard cluster using new microservices architecture and docker containers. 
See [**microservices**](/docs/reference/msa/) architecture page for more details.

The docker compose scripts support three deployment modes. In order to set the deployment mode, change the value of `TB_SETUP` variable in `.env` file to one of the following:

- `basic` **(recommended, set by default)** - ThingsBoard Core and Rule Engine are launched inside one JVM (requires only one license).
  MQTT, CoAP and HTTP transports are launched in separate containers.
- `monolith` - ThingsBoard Core and Rule Engine are launched inside one JVM (requires only one license). 
  MQTT, CoAP and HTTP transports are also launched in the same JVM to minimize memory footprint and server requirements.
- `advanced`- ThingsBoard Core and Rule Engine are launched in separate containers and are replicated one JVM (requires 4 licenses).  
  
All deployment modes support separate JS executors, Redis, and different [queues](/docs/user-guide/install/pe/cluster/docker-compose-setup/#step-8-choose-thingsboard-queue-service).

## Step 6. Configure ThingsBoard database

{% include templates/install/configure-db-docker-compose.md %}

## Step 7. Choose ThingsBoard queue service 

{% include templates/install/install-queue-docker-compose.md %}

{% capture contenttogglespecqueue %}
Kafka <small>(default, recommended for on-prem, production installations)</small>%,%kafka%,%templates/install/cluster-queue-kafka.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/cluster-queue-confluent-cloud.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}

## Step 8. Enable monitoring (optional)

{% include templates/install/configure-monitoring-docker-compose.md %}

## Step 9. Enable Trendz Analytics (optional)

In order to start Trendz Analytics addon, please edit the configuration file:

```bash
nano .env
```
{: .copy-code}

You'll need to make sure that `TRENDZ_ENABLED` variable set to `true`:

```bash
TRENDZ_ENABLED=true
```

You can read about Trendz Analytics [here](/docs/trendz/what-is-trendz/).

## Step 10. Running

### Create and check required host volumes
{% include templates/install/docker/docker-compose-setup-volumes.md %}

### Install and run ThingsBoard
{% assign dockerComposeFileLocation = "-f $TB_SETUP/docker-compose.yml " %}
{% include templates/install/docker/docker-compose-setup-running.md %}

## Upgrading

### Upgrading to new ThingsBoard version

{% include templates/install/upgrade-docker-compose.md %}

### Upgrading to new Trendz version (Optional)

Trendz Analytics have different version system, and should be updated separately from ThingsBoard platform main services.

To update Trendz, it's necessary to edit .env file to set "TRENDZ_VERSION" to target version (e.g. set it to {{ site.release.trendz_ver }} if you are upgrading to the latest). Then, execute the following commands:

```bash
./docker-stop-services.sh
./docker-upgrade-trendz.sh
./docker-start-services.sh
```
{: .copy-code}

Note that you can upgrade Trendz from any version to the latest (for example, 1.12.0 -> {{ site.release.trendz_ver }} etc).

{% include templates/install/generate_certificate_docker-compose.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
