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
{% include templates/docker-files.md %}
      
- If you have already installed Thingsboard using docker and want to upgrade or cleanup your installation, please cleanup HSQLDB data directory
      
```bash
docker-machine ssh default 'rm -rf /home/docker/hsqldb_volume'
```

{% include templates/start-docker.md %}
   
- In order to get access to necessary resources from external IP/Host after Thingsboard docker container installation, 
  please execute the following commands on windows host machine:

```bash
# Web UI port
"C:\Program Files\Oracle\VirtualBox\VBoxManage.exe" controlvm "default" natpf1 "tcp-port8080,tcp,,8080,,8080"
# MQTT port
"C:\Program Files\Oracle\VirtualBox\VBoxManage.exe" controlvm "default" natpf1 "tcp-port1883,tcp,,1883,,1883"
# CoAP port
"C:\Program Files\Oracle\VirtualBox\VBoxManage.exe" controlvm "default" natpf1 "tcp-port5683,tcp,,5683,,5683"
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

