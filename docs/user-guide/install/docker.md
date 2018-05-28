---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard using Docker (Linux or Mac OS)
description: Installing ThingsBoard IoT Platform using Docker (Linux or Mac OS)

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide will help you to install and start ThingsBoard using Docker on Linux or Mac OS.


## Installation steps

- [Install Docker](https://docs.docker.com/engine/installation/)
- [Install Docker Compose (Linux only)](https://docs.docker.com/compose/install/) - Mac OS Docker installation already contains Docker Compose. 
{% include templates/docker-files.md %}
   
- If you have already installed ThingsBoard using docker and want to upgrade or cleanup your installation, please cleanup HSQLDB data directory
      
```bash
sudo rm -rf /home/docker/hsqldb_volume
```

{% include templates/start-docker.md %}
   
- Once started, you will be able to open Web UI using following link:
   
```bash
http://localhost:8080/
```

## Advanced usage

### .env file

One can modify **.env** file to configure following parameters:

 - CASSANDRA_DATA_DIR - location of cassandra data folder on host machine
 - POSTGRES_DATA_DIR - location of postgres data folder on host machine
 - HSQLDB_DATA_DIR - location of hsqldb data folder on host machine
 - ADD_SCHEMA_AND_SYSTEM_DATA - create schema and add system user and rule chains. by default *false*
 - ADD_DEMO_DATA - add demo accounts, dashboards and devices. by default *false*
 - CASSANDRA_URL - url of cassandra container 
  
### tb.env file

One can set thingsboard service environment variables using this file. See [configuration](/docs/user-guide/install/config/#thingsboardyml) for more details.

## Troubleshooting

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use Google public DNS servers. 
See corresponding [Linux](https://developers.google.com/speed/public-dns/docs/using#linux) and [Mac OS](https://developers.google.com/speed/public-dns/docs/using#mac_os) instructions.

