---
layout: docwithnav
assignees:
- ashvayka
title: Installing Thingsboard using Docker (Windows)
description: Installing Thingsboard IoT Platform using Docker (Windows)

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide will help you to install and start Thingsboard using Docker on Windows.


## Installation steps

- [Install Docker Toolbox for Windows](https://docs.docker.com/toolbox/toolbox_install_windows/)
- Open "Docker Quickstart Terminal"
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
docker-machine ssh default 'sudo rm -rf /home/docker/cassandra_volume'
```                  
      
- Execute docker-compose command to start Thingsboard node and all thirdparty components 

```bash
docker-compose -f docker-compose.yml -f docker-compose.random.yml up -d
```
   
- In order to get access to necessary resources from external IP/Host after Thingsboard docker container installation, 
  please execute the following commands on windows host machine:

```bash
# Web UI port
VBoxManage controlvm "default" natpf1 "tcp-port8080,tcp,,8080,,8080"
# MQTT port
VBoxManage controlvm "default" natpf1 "tcp-port1883,tcp,,1883,,1883"
# CoAP port
VBoxManage controlvm "default" natpf1 "tcp-port5683,tcp,,5683,,5683"
```
   
- Now you should be able to open Web UI using following link:
   
```bash
http://localhost:8080/
```

## Advanced usage

See corresponding page in [linux guide](/docs/user-guide/install/docker/#advanced-usage) for more details.

## Troubleshooting

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use [Google public DNS servers](https://developers.google.com/speed/public-dns/docs/using#windows)

