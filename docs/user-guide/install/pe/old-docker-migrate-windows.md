---
layout: docwithnav-pe
assignees:
- ashvayka
title: Migrate from old Docker deployment files
description: Migrate from old Docker deployment files
---

* TOC
{:toc}


This guide will help you to move from the old deployment files for Docker installation using deprecated image `thingsboard/tb-pe` and volume bindings instead of local volumes. 
This guide covers standalone ThingsBoard PE installation. 

## Why deployment files were changed? 

- they used deprecated image `thingsboard/tb-pe` without arm64 architecture support.
- data was persited in local folders with specific ownerships instead of Docker volumes mechanism

## Who needs this guide?

Customers who has docker compose file as below or similar:

```yml
version: '3.0'
services:
  mytbpe:
    restart: always
    image: "thingsboard/tb-pe:{{ site.release.pe_full_ver }}"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "7070:7070"
      - "5683-5688:5683-5688/udp"
    environment:
      TB_QUEUE_TYPE: in-memory
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/thingsboard
      TB_LICENSE_SECRET: PUT_YOUR_LICENSE_SECRET_HERE
      TB_LICENSE_INSTANCE_DATA_FILE: /data/license.data
    volumes:
      - mytbpe-data:/data
      - mytbpe-logs:/var/log/thingsboard
  postgres:
    restart: always
    image: "postgres:15"
    ports:
    - "5432"
    environment:
      POSTGRES_DB: thingsboard
      POSTGRES_PASSWORD: postgres
    volumes:
      - mytbpe-data-db:/var/lib/postgresql/data
volumes:
  mytbpe-data:
    external: true
  mytbpe-logs:
    external: true
  mytbpe-data-db:
    external: true
```

## Move Postgres data to Docker volume

Create a named Docker volume:

```bash
docker volume create --name tb-postgres-data
```
{: .copy-code}

Run container with attached volumes to copy data from folder to newly created volume

```bash
docker run --rm -v mytbpe-data-db:/source -v tb-postgres-data:/destination alpine sh -c "cp -rp /source/* /destination/"
```
{: .copy-code}

{% capture old_postgres_info %}
**Note that previously we have PostgreSQL 15 image in our docker compose, which is replaced with PostgreSQL 16 now.**
**In order to start Postgres DB container you need either use `postgres:15` image in new deployment files or upgrade database files**
{% endcapture %}
{% include templates/info-banner.md content=old_postgres_info %}

## Move License data to Docker volume

Create a named Docker volume:

```bash
docker volume create --name tb-pe-license-data
```
{: .copy-code}

Run container with attached volumes to copy data from folder to newly created volume:

```bash
docker run --rm -v mytbpe-data:/source -v tb-pe-license-data:/destination alpine sh -c "cp -a /source/license.data /destination/ && chown 799:799 /destination/license.data"
```
{: .copy-code}

## Move to new deployment files

Open `docker-compose.yml` file with text editor:

```bash
notepad docker-compose.yml
```
{: .copy-code}

Copy current Docker Compose [manifest](https://thingsboard.io/docs/user-guide/install/pe/docker-windows/#step-2-choose-thingsboard-queue-service) and replace old one with current manifest. Replace Postgres docker image if needed. 

{% capture image_tags %}
**Make sure that `thingsboard/tb-pe-node` and `thingsboard/tb-web-report` have the same tag as your previous manifests**
{% endcapture %}
{% include templates/info-banner.md content=image_tags %}

Don't forget to replace license key in the environment variables section.

After data is moved to the docker volumes and `docker-compose.yml` file have the same structure as the installation example - you can proceed with [upgrade](https://thingsboard.io/docs/user-guide/install/pe/docker-windows/#upgrading) of the ThingsBoard. 