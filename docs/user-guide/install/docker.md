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
    1. **[docker-compose.yml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/docker-compose.yml)** - main docker-compose file.
    1. **[.env](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/.env)** - main env file that contains default location of cassandra data folder and cassandra schema.
    1. **[tb.env](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/tb.env)** - default thingsboard environment variables.
      
```bash
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/docker-compose.yml > docker-compose.yml
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/.env > .env
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/tb.env > tb.env
```
   
- If you have already installed Thingsboard using docker and want to upgrade or cleanup your installation, please cleanup Cassandra data directory
      
```bash
rm -rf /home/docker/cassandra_volume
```

- If you would like to create system and demo data and to start Thingsboard node and all thirdparty components execute next command 
 
```bash
ADD_SYSTEM_DATA=true ADD_DEMO_DATA=true bash -c 'docker-compose -f docker-compose.yml up -d'
``` 

- In case you would like to skip creation of system and demo data or you already added and you only need to start Thingsboard node and all thirdparty components then execute *docker-compose* command 

```bash
docker-compose -f docker-compose.yml up -d
```
   
- Once started, you will be able to open Web UI using following link:
   
```bash
http://localhost:8080/
```

## Advanced usage

### .env file

One can modify **.env** file to configure following parameters:

 - CASSANDRA_DATA_DIR - location of cassandra data folder
 - CREATE_SCHEMA - create cassandra keyspace. by default *true*
 - ADD_SYSTEM_DATA - add system user, plugins and rules. by default *false*
 - ADD_DEMO_DATA - add demo accounts, plugins and rules. by default *false*
 - CASSANDRA_URL - url of cassandra container. by default name of the container
 
### tb.env file

One can set thingsboard service environment variables using this file. See [configuration](/docs/user-guide/install/config/#thingsboardyml) for more details.
 
### Thirdparty components
 
One can start only Thingsboard thirdparty components. This may be useful for Thingsboard contributors in order to launch Thingsboard node from IDE.
In order to do this, download **[docker-compose.static.yml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/docker-compose.static.yml)** file and replace last installation step with

```bash
docker-compose -f docker-compose.yml -f docker-compose.static.yml up -d cassandra tb-cassandra-schema
```

## Troubleshooting

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use Google public DNS servers. 
See corresponding [Linux](https://developers.google.com/speed/public-dns/docs/using#linux) and [Mac OS](https://developers.google.com/speed/public-dns/docs/using#mac_os) instructions.

