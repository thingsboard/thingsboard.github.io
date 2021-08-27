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

We assume you have already chosen subscription plan for Trendz and have license key. If not, please get your [Free Trial license](/pricing/?active=trendz) before you proceed.
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} for more details.

Note: We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.

## Step 2. Checkout Trendz Analytics image on Docker Hub

Open official [Trendz Analytics](https://hub.docker.com/_/trndz) Docker Hub page and proceed to checkout.

Populate basic information about yourself and click "Get Content"
 

## Step 3. Running Trendz service

##### Docker Compose setup

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

Create docker compose file for Trendz Analytics service:

```text
sudo nano docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don't forget to replace “PUT_YOUR_LICENSE_SECRET_HERE” with your **license secret obtained on the first step**

```yml

version: '2.2'
services:
  mytrendz:
    restart: always
    image: "thingsboard/trendz:1.8.0-SNAPSHOT"
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
- `thingsboard/trendz:1.8.0-SNAPSHOT`          - docker image
    
Before starting Docker container run following commands to create a directory for storing data and logs and then change 
its owner to docker container user, to be able to change user, chown command is used, which requires sudo permissions 
(command will request password for a sudo access):

```yml
mkdir -p ~/.mytrendz-data && sudo chown -R 799:799 ~/.mytrendz-data
mkdir -p ~/.mytrendz-logs && sudo chown -R 799:799 ~/.mytrendz-logs
```
{: .copy-code}

**NOTE**: replace directory ~/.mytrendz-data and ~/.mytrendz-logs with directories you’re planning to used in docker-compose.yml.

##### Running service
 
Execute the following command to up this docker compose directly:

**NOTE**: For running docker compose commands you have to be in a directory with docker-compose.yml file.    
    
```yml
docker-compose up -d
docker-compose logs -f mytrendz
```
{: .copy-code}    
    
After executing this command you can open `http://{your-host-ip}:8888` in you browser (for ex. `http://localhost:8888`). 
You should see Trendz login page.

##### Authentication

For first authentication you need to use **Tenant Administrator** credentials from your **ThingsBoard**

Trendz uses ThingsBoard as an authentication service. During first sign in ThingsBoard service should be also available 
to validate credentials.

## Detaching, stop and start commands

You can detach from session terminal with `Ctrl-p` `Ctrl-q` - the container will keep running in the background.

In case of any issues you can examine service logs for errors. For example to see Trendz logs execute the following command:

```
docker-compose logs -f mytrendz
```

To stop the container:

```
docker-compose stop mytrendz
```

To start the container:

```
docker-compose start mytrendz
```

## Upgrade Trendz Service

Below is example on how to upgrade from 1.6.0 to 1.7.0

1. Stop mytrendz container

    ```text
    docker-compose stop mytrendz
    ```
    {: .copy-code}


2. Create a dump of your database:

    ```text
    docker-compose exec postgres sh -c "pg_dump -U postgres trendz > /var/lib/postgresql/data/trendz_dump"
    ```
    {: .copy-code}

3. After this you need to update docker-compose.yml as in [Step 3](#step-3-running) but with 1.8.0-SNAPSHOT instead of 1.7.0-SNAPSHOT:
    
4. Change upgradeversion version to your **current** ThingsBoard version.
       
    ```text
    sudo sh -c "echo '1.7.0' > ~/.mytrendz-data/.upgradeversion"
    ```
    {: .copy-code}

5. Then execute the following commands:
    ```text
    docker-compose run mytrendz upgrade-trendz.sh
    ```
    {: .copy-code}
    
6. Start Trendz:
    
    ```text
    docker-compose up -d
    ```
    {: .copy-code}

To upgrade Trendz to latest version those steps should be done **for each intermediate version**.

## Troubleshooting

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use Google public DNS servers. 
See corresponding [Linux](https://developers.google.com/speed/public-dns/docs/using#linux) and [Mac OS](https://developers.google.com/speed/public-dns/docs/using#mac_os) instructions.

### Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}