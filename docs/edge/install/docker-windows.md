---
layout: docwithnav
title: Installing ThingsBoard Edge using Docker (Windows)
description: Installing ThingsBoard Edge using Docker (Windows)
---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Edge using Docker on Windows. 
The container image used in this guide has embedded PostgreSQL 9.6 to simplify setup. 
If you are looking for a cluster installation instruction, please visit [cluster setup page](/docs/user-guide/install/pe/cluster-setup/).

### Prerequisites

- [Install Docker Toolbox for Windows](https://docs.docker.com/toolbox/toolbox_install_windows/)

### Step 1. ThingsBoard PE/CE service installation 

{% include templates/edge/thingsboard-installation.md %}

### Step 2. Create edge and get credentials

{% include templates/edge/add-edge.md %}

### Step 3. Running ThingsBoard Edge

Here you can find ThingsBoard Edge single instance docker image with PostgreSQL database: 

* [thingsboard/tb-edge](https://hub.docker.com/r/bohdansmetanyuk/tb-edge)

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
services:
  mytbedge:
    restart: always
    image: "thingsboard/tb-edge"
    ports:
      - "8080:9090"
      - "1883:1883"
      - "5683:5683/udp"
    environment:
      CLOUD_ROUTING_KEY: PUT_YOUR_EDGE_KEY_HERE # e.g. 19ea7ee8-5e6d-e642-4f32-05440a529015
      CLOUD_ROUTING_SECRET: PUT_YOUR_EDGE_SECRET_HERE # e.g. bztvkvfqsye7omv9uxlp
      CLOUD_PRC_HOST: PUT_YOUR_CLOUD_IP # e.g. 192.168.1.250
    volumes:
      - mytb-edge-data:/data
      - mytb-edge-logs:/var/log/thingsboard-edge
volumes:
  mytb-edge-data:
    external: true
  mytb-edge-logs:
    external: true
```

Where:    
- `8080:9090` - connect local port 8080 to exposed internal HTTP port 9090
- `1883:1883` - connect local port 11883 to exposed internal MQTT port 1883  
- `5683:5683` - connect local port 15683 to exposed internal COAP port 5683   
- `mytb-edge-data:/data` - mounts the host's dir `mytb-edge-data` to ThingsBoard Edge DataBase data directory
- `mytb-edge-logs:/var/log/thingsboard-edge` - mounts the host's dir `mytb-edge-logs` to ThingsBoard Edge logs directory
- `thingsboard/tb-edge` - docker image
- `CLOUD_ROUTING_KEY` - your edge key
- `CLOUD_ROUTING_SECRET` - your edge secret
- `CLOUD_PRC_HOST` - ip address of the machine with the ThingsBoard platform
- `restart: always` - automatically start ThingsBoard Edge in case of system reboot and restart in case of failure

Execute the following command to up this docker compose directly:

**NOTE**: For running docker compose commands you have to be in a directory with docker-compose.yml file.
```
docker-compose pull
docker-compose up
```
In order to get access to necessary resources from external IP/Host on Windows machine, please execute the following commands:
``` 
set PATH=%PATH%;"C:\Program Files\Oracle\VirtualBox"
VBoxManage controlvm "default" natpf1 "tcp-port8080,tcp,,8080,,9090"  
VBoxManage controlvm "default" natpf1 "tcp-port1883,tcp,,1883,,1883"
VBoxManage controlvm "default" natpf1 "tcp-port5683,tcp,,5683,,5683"
```
Where:
- `C:\Program Files\Oracle\VirtualBox` - path to your VirtualBox installation directory

After executing this command you can open `http://{your-host-ip}:9090` in you browser (for ex. `http://localhost:9090`). You should see ThingsBoard Edge login page.
Use username and login of the user assigned to the edge.

## Step 4. Detaching, stop and start commands

{% include templates/edge/docker-control.md %}

## Troubleshootings

{% include templates/edge/troubleshooting.md %} 

## Next Steps

{% include templates/edge/next-steps.md %} 
