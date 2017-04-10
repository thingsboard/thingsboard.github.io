---
layout: docwithnav
assignees:
- ashvayka
title: Installing Thingsboard using Docker (Linux or Mac OS)
description: Installing Thingsboard IoT Platform using Docker (Linux or Mac OS)

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide will help you to install and start Thingsboard using Docker on Linux or Mac OS.


## Installation steps

- [Install Docker](https://docs.docker.com/engine/installation/)
- [Install Docker Compose (Linux only)](https://docs.docker.com/compose/install/) - Mac OS Docker installation already contains Docker Compose. 
- Make folder to store docker files:

```bash
mkdir <docker-folder>
cd <docker-folder>
```

- Download the following files from thingsboard repo:
    1. **[docker-compose.yml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2/docker/docker-compose.yml)** - main docker-compose file.
    1. **[docker-compose.random.yml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2/docker/docker-compose.random.yml)** - overwrite docker-compose file with thirdparty ports configuration.
    1. **[.env](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2/docker/.env)** - main env file that contains default location of cassandra data folder.
    1. **[thingsboard.env](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2/docker/thingsboard.env)** - default thingsboard environment variables.
    1. **[thingsboard-db-schema.env](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2/docker/thingsboard-db-schema.env)** - default db-schema environment variables.
      
```bash
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2/docker/docker-compose.yml > docker-compose.yml
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2/docker/docker-compose.random.yml > docker-compose.random.yml
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2/docker/.env > .env
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2/docker/thingsboard.env > thingsboard.env
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2/docker/thingsboard-db-schema.env > thingsboard-db-schema.env
```
   
- If you have already installed Thingsboard using docker and want to upgrade or cleanup your installation, please cleanup Cassandra data directory
      
```bash
sudo rm -rf /home/docker/cassandra_volume
```
      
- Execute docker-compose command to start Thingsboard node and all thirdparty components 

```bash
sudo docker-compose -f docker-compose.yml -f docker-compose.random.yml up -d
```
   
- Once started, you will be able to open Web UI using following link:
   
```bash
http://localhost:8080/
```

## Advanced usage

### .env file

One can modify **.env** file to configure following parameters:

 - CASSANDRA_DATA_DIR - location of cassandra data folder

### thingsboard.env file

One can set thingsbord service environment variables using this file. See [configuration](/docs/user-guide/install/config/#thingsboardyml) for more details.

### thingsboard-db-schema.env file

One can modify **thingsboard-db-schema.env** file to configure following parameters:

 - SKIP_SCHEMA_CREATION - to avoid cassandra keyspace creation
 - SKIP_SYSTEM_DATA - to avoid creation of system user, plugins and rules
 - SKIP_DEMO_DATA - to avoid creation of demo accounts, plugins and rules
 
### Thirdparty components
 
One can start only Thingsboard thirdparty components. This may be useful for Thingsboard contributors in order to launch Thingsboard node from IDE.
In order to do this, download **[docker-compose.static.yml](https://raw.githubusercontent.com/thingsboard/thingsboard/master/docker/docker-compose.static.yml)** file and replace last installation step with

```bash
sudo docker-compose -f docker-compose.yml -f docker-compose.static.yml up -d
```

## Troubleshooting

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use Google public DNS servers. 
See corresponding [Linux](https://developers.google.com/speed/public-dns/docs/using#linux) and [Mac OS](https://developers.google.com/speed/public-dns/docs/using#mac_os) instructions.

