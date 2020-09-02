---
layout: docwithnav
title: Installing ThingsBoard Edge using Docker (Windows)
description: Installing ThingsBoard Edge using Docker (Windows)
---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Edge using Docker on Windows. 
The container image used in this guide has embedded PostgreSQL 9.6 to simplify setup. 
If you are looking for a cluster installation instruction, please visit [cluster setup page]().

### Prerequisites

- [Install Docker Toolbox for Windows](https://docs.docker.com/toolbox/toolbox_install_windows/)

### Step 1. ThingsBoard PE/CE service installation 

{% include templates/edge/thingsboard-installation.md %}

### Step 2. Create edge and get credentials

{% include templates/edge/add-edge.md %}

### Step 3. Running ThingsBoard Edge

* [thingsboard-edge/tb-postgres](https://hub.docker.com/r/thingsboard/thingsboard-edge/tb-postgres/) - single instance of ThingsBoard Edge with PostgreSQL database.
Recommended option for small servers with at least 1GB of RAM and minimum load (few messages per second). 2-4GB is recommended.

In this instruction `thingsboard-edge/tb-postgres` image will be used. You can choose any other images with different databases (see above).

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
Add the following lines to the yml file:
```
version: '2.2'
services:
  mytbedge:
    restart: always
    image: "thingsboard-edge/tb-postgres"
    ports:
      - "8090:9090"
      - "11883:1883"
      - "15683:5683/udp"
    environment:
      CLOUD_ROUTING_KEY: PUT_YOUR_EDGE_KEY_HERE
      CLOUD_ROUTING_SECRET: PUT_YOUR_EDGE_SECRET_HERE
      CLOUD_PRC_HOST: PUT_YOUR_CLOUD_IP
      CLOUD_RPC_PORT: PUT_YOUR_EDGES_RPC_PORT
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
    
- `8090:9090` - connect local port 8090 to exposed internal HTTP port 9090
- `11883:1883` - connect local port 11883 to exposed internal MQTT port 1883  
- `15683:5683` - connect local port 15683 to exposed internal COAP port 5683   
- `mytb-edge-data:/data` - mounts the host's dir `mytb-edge-data` to ThingsBoard Edge DataBase data directory
- `mytb-edge-logs:/var/log/thingsboard-edge` - mounts the host's dir `mytb-edge-logs` to ThingsBoard Edge logs directory
- `thingsboard-edge/tb-postgres` - docker image
- `CLOUD_ROUTING_KEY` - your edge key from step 2
- `CLOUD_ROUTING_SECRET` - your edge secret from step 2
- `CLOUD_PRC_HOST` - ip address of the machine with the ThingsBoard platform
- `CLOUD_RPC_PORT` - cloud rpc port for connection with edges
- `restart: always` - automatically start ThingsBoard Edge in case of system reboot and restart in case of failure
- `image: thingsboard-edge/tb-postgres` - docker image

Execute the following command to up this docker compose directly:

**NOTE**: For running docker compose commands you have to be in a directory with docker-compose.yml file.
```
docker-compose pull
docker-compose up
```
In order to get access to necessary resources from external IP/Host on Windows machine, please execute the following commands:
``` 
set PATH=%PATH%;"C:\Program Files\Oracle\VirtualBox"
$ VBoxManage controlvm "default" natpf1 "tcp-8090,tcp,,8090,,9090"  
$ VBoxManage controlvm "default" natpf1 "tcp-11883,tcp,,11883,,1883"
$ VBoxManage controlvm "default" natpf1 "tcp-15683,tcp,,15683,,5683"
```
Where:
- `C:\Program Files\Oracle\VirtualBox` - path to your VirtualBox installation directory

After executing this command you can open `http://{your-host-ip}:8090` in you browser (for ex. `http://localhost:8190`). You should see ThingsBoard Edge login page.
Use the following default credentials:

- **Systen Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer
    
You can always change passwords for each account in account profile page.

## Step 4. Detaching, stop and start commands

You can detach from session terminal with `Ctrl-p` `Ctrl-q` - the container will keep running in the background.

In case of any issues you can examine service logs for errors. For example to see ThingsBoard Edge node logs execute the following command:
```
docker-compose logs -f mytbedge
```
To stop the container:
```
docker-compose stop
```
To start the container:
```
docker-compose start
```

## Upgrading

In order to update to the latest image, execute the following commands:
```
docker pull thingsboard-edge/tb-postgres
docker-compose stop
docker run -it -v mytb-edge-data:/data --rm thingsboard-edge/tb-postgres upgrade-tb-edge.sh
docker-compose rm mytbedge
docker-compose up
```

**NOTE**: if you use different database change image name in all commands from `thingsboard-edge/tb-postgres`

**NOTE**: replace volume `mytb-edge-data` with volume used during container creation. 

## Troubleshootings

{% include templates/edge/troubleshooting.md %} 

### Connection with ThingsBoard Platform

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use [Google public DNS servers](https://developers.google.com/speed/public-dns/docs/using#windows)

## Next Steps

{% include templates/edge/next-steps.md %} 
