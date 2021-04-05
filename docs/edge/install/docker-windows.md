---
layout: docwithnav-edge
title: Installing ThingsBoard Edge using Docker (Windows)
description: Installing ThingsBoard Edge using Docker (Windows)
---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Edge using Docker on Windows. 
The container image used in this guide has embedded PostgreSQL 11 to simplify setup. 

{% include templates/edge/install/hardware-requirements.md %}

- [Install Docker Toolbox for Windows](https://docs.docker.com/toolbox/toolbox_install_windows/){:target="_blank"}

### Step 1. Running ThingsBoard Edge

Here you can find ThingsBoard Edge single instance docker image with PostgreSQL database: 

* [thingsboard/tb-edge](https://hub.docker.com/r/thingsboard/tb-edge){:target="_blank"}

Windows users should use docker managed volume for ThingsBoard Edge DataBase. 
Create docker volume (for ex. `mytb-edge-data`) before executing docker run command:
Open "Docker Quickstart Terminal". Execute the following command to create docker volume:

``` 
$ docker volume create mytb-edge-data
$ docker volume create mytb-edge-logs
```

Create docker compose file for ThingsBoard Edge service:
```
docker-compose.yml
```
```
version: '2.2'

services:
  mytbedge:
    restart: always
    image: "thingsboard/tb-edge:3.3.0-edge"
    ports:
      - "18080:8080"
      - "11883:1883"
      - "15683:5683/udp"
    environment:
      EDGE_LICENSE_INSTANCE_DATA_FILE: /data/instance-edge-license.data
      CLOUD_ROUTING_KEY: PUT_YOUR_EDGE_KEY_HERE # e.g. 19ea7ee8-5e6d-e642-4f32-05440a529015
      CLOUD_ROUTING_SECRET: PUT_YOUR_EDGE_SECRET_HERE # e.g. bztvkvfqsye7omv9uxlp
      CLOUD_PRC_HOST: PUT_YOUR_CLOUD_IP # e.g. 192.168.1.250 or demo.thingsboard.io
    volumes:
      - mytb-edge-data:/data
      - mytb-edge-logs:/var/log/tb-edge
volumes:
  mytb-edge-data:
    external: true
  mytb-edge-logs:
    external: true
```

Where:    
- `18080:8080` - connect local port 18080 to exposed internal HTTP port 8080
- `11883:1883` - connect local port 11883 to exposed internal MQTT port 1883  
- `15683:5683` - connect local port 15683 to exposed internal COAP port 5683   
- `mytb-edge-data:/data` - mounts the host's dir `mytb-edge-data` to ThingsBoard Edge DataBase data directory
- `mytb-edge-logs:/var/log/tb-edge` - mounts the host's dir `mytb-edge-logs` to ThingsBoard Edge logs directory
- `thingsboard/tb-edge:3.3.0-edge` - docker image
- `CLOUD_ROUTING_KEY` - your edge key
- `CLOUD_ROUTING_SECRET` - your edge secret
- `CLOUD_PRC_HOST` - ip address of the machine with the ThingsBoard platform

**NOTE**: do not use **'localhost'** - **'localhost'** is the ip address of the edge service in the docker container. Please use the IP address of machine where ThingsBoard **Professional Edition/Community Edition** is running and this IP address must be accessible by docker container. Or use **demo.thingsboard.io** if you are connecting edge to ThingsBoard **Live Demo** for evaluation.

- `restart: always` - automatically start ThingsBoard Edge in case of system reboot and restart in case of failure

**NOTE**: For running docker compose commands you have to be in a directory with docker-compose.yml file.

Execute the following command to up this docker compose directly:
```
docker-compose pull
docker-compose up
```
In order to get access to necessary resources from external IP/Host on Windows machine, please execute the following commands:
``` 
set PATH=%PATH%;"C:\Program Files\Oracle\VirtualBox"
VBoxManage controlvm "default" natpf1 "tcp-port8080,tcp,,8080,,18080"  
VBoxManage controlvm "default" natpf1 "tcp-port1883,tcp,,1883,,11883"
VBoxManage controlvm "default" natpf1 "tcp-port5683,tcp,,5683,,15683"
```
Where:
- `C:\Program Files\Oracle\VirtualBox` - path to your VirtualBox installation directory

### Step 2. Open ThingsBoard Edge UI

{% include templates/edge/install/open-edge-ui.md %}

### Step 3. Detaching, stop and start commands

{% include templates/edge/install/docker-control.md %}

### Troubleshootings

**NOTE** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use [Google public DNS servers](https://developers.google.com/speed/public-dns/docs/using#windows)

## Next Steps

{% include templates/edge/install/next-steps.md %}
