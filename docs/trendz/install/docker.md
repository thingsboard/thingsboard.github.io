---
layout: docwithnav-trendz
assignees:
- ashvayka
title: Installing ThingsBoard Trendz Analytics using Docker (Linux or Mac OS)
description: Installing ThingsBoard Trendz Analytics using Docker (Linux or Mac OS)

---

* TOC
{:toc}


This guide will help you to install and start Trendz Analytics using Docker on Linux or Mac OS. 

## Prerequisites

- [Install Docker CE](https://docs.docker.com/engine/installation/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

## Step 1. Obtain the license key 

We assume you have already chosen subscription plan for Trendz and have license key. If not, please get your [Free Trial license](/pricing/?section=trendz-options&product=trendz-self-managed&solution=trendz-pay-as-you-go) before you proceed.
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} for more details.

Note: We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.

## Step 2. Running Trendz service

##### Docker Compose setup

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

Create docker compose file for Trendz Analytics service:

```text
sudo nano docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don't forget to replace “PUT_YOUR_LICENSE_SECRET_HERE” with your **license secret obtained on the first step**

```yml

version: '3.0'
services:
  mytrendz:
    restart: always
    image: "thingsboard/trendz:1.10.1"
    ports:
      - "8888:8888"
    environment:
      TB_API_URL: http://10.0.0.101:8080
      TRENDZ_LICENSE_SECRET: PUT_YOUR_LICENSE_SECRET_HERE
      TRENDZ_LICENSE_INSTANCE_DATA_FILE: /data/license.data
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/trendz
      SPRING_DATASOURCE_USERNAME: postgres
      SPRING_DATASOURCE_PASSWORD: postgres
    volumes:
      - ~/.mytrendz-data:/data
      - ~/.mytrendz-logs:/var/log/trendz
  postgres:
    restart: always
    image: "postgres:12"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: trendz
      POSTGRES_PASSWORD: postgres
    volumes:
      - ~/.mytrendz-data/db:/var/lib/postgresql/data
```
{: .copy-code}

Where: 
    
- `TB_API_URL` - url for connecting to ThingsBoard Rest API (for example http://10.5.0.11:8080). Note that ThingsBoard IP address should be resolvable from Trendz docker container
- `PUT_YOUR_LICENSE_SECRET_HERE` - placeholder for your license secret obtained on the first step
- `8888:8888`            - connect local port 8888 to exposed internal HTTP port 8888
- `~/.mytrendz-data:/data`   - mounts the volume `~/.mytrendz-data` to Trendz data directory
- `~/.mytrendz-data/db:/var/lib/postgresql/datad`   - mounts the volume `~/.mytrendz-data/db` to Postgres data directory
- `~/.mytrendz-logs:/var/log/thingsboard`   - mounts the volume `~/.mytrendz-logs` to Trendz logs directory
- `mytrendz`             - friendly local name of this machine
- `--restart always`        - automatically start Trendz in case of system reboot and restart in case of failure.
- `thingsboard/trendz:1.10.1`          - docker image


Run following commands, before starting docker container(s), to create folders for storing data and logs.
These commands additionally will change owner of newly created folders to docker container user.
To do this (to change user) **chown** command is used, and this command requires *sudo* permissions (command will request password for a *sudo* access):

```bash
mkdir -p ~/.mytrendz-data && sudo chown -R 799:799 ~/.mytrendz-data
mkdir -p ~/.mytrendz-logs && sudo chown -R 799:799 ~/.mytrendz-logs
```
{: .copy-code}

**NOTE**: replace directory ~/.mytrendz-data and ~/.mytrendz-logs with directories you’re planning to used in docker-compose.yml.

##### Running service

{% assign serviceName = "trendz" %}
{% include templates/install/docker/docker-compose-up.md %}
    
After executing this command you can open `http://{your-host-ip}:8888` in you browser (for ex. `http://localhost:8888`). 
You should see Trendz login page.

##### Authentication

For first authentication you need to use **Tenant Administrator** credentials from your **ThingsBoard**

Trendz uses ThingsBoard as an authentication service. During first sign in ThingsBoard service should be also available 
to validate credentials.

## Detaching, stop and start commands

{% assign serviceName = "trendz" %}
{% assign serviceFullName = "Trendz" %}
{% include templates/install/docker/detaching-stop-start-commands.md %}

## Upgrade Trendz Service

Below is example on how to upgrade from 1.10.0 to 1.10.1


* Create a dump of your database:

```bash
docker compose exec postgres sh -c "pg_dump -U postgres trendz > /var/lib/postgresql/data/trendz_dump"
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose exec postgres sh -c "pg_dump -U postgres trendz > /var/lib/postgresql/data/trendz_dump"**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

* Set upgradeversion variable to your **previous** Trendz version.

```bash
docker compose exec mytrendz sh -c "echo '1.10.0' > /data/.upgradeversion" 
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose exec mytrendz sh -c "echo '1.10.0' > /data/.upgradeversion"**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

* After this you need to update docker-compose.yml as in [Step 3](#step-3-running-trendz-service) but with 1.10.1 instead of 1.10.0:

* Restart Trendz container

```bash
docker compose stop mytrendz
docker compose up -d
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) here is the list of the above commands:
<br>**docker-compose stop mytrendz**
<br>**docker-compose up -d**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

To upgrade Trendz to the latest version those steps should be done **for each intermediate version**.

## Troubleshooting

### DNS issues

{% include templates/troubleshooting/dns-issues.md %}

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}