---
layout: docwithnav
title: Installing ThingsBoard Edge using Docker (Linux or Mac OS)
description: Installing ThingsBoard Edge using Docker (Linux or Mac OS)
---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Edge using Docker on Linux or Mac OS.

### Prerequisites

- [Install Docker CE](https://docs.docker.com/engine/install/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

### Step 1. ThingsBoard PE/CE service installation 

{% include templates/edge/thingsboard-installation.md %}

### Step 2. Get edge Secret and Key

{% include templates/edge/add-edge.md %}

### Step 3. Running ThingsBoard Edge

There is one type of ThingsBoard Edge single instance docker image:

* [thingsboard-edge/tb-postgres](https://hub.docker.com/r/thingsboard/thingsboard-edge/tb-postgres/) - single instance of ThingsBoard Edge with PostgreSQL database.
Recommended option for small servers with at least 1GB of RAM and minimum load (few messages per second). 2-4GB is recommended.

In this instruction `thingsboard-edge/tb-postgres` image will be used. You can choose any other images with different databases (see above).


Create docker compose file for ThingsBoard Edge service:
```
sudo nano docker-compose.yml
```
Add the following lines to the yml file:
```
version: '2.2'
services:
  mytbedge:
    restart: always
    image: "thingsboard-edge/tb-postgres"
    ports:
      - "8090:8080"
      - "11883:1883"
      - "15683:5683/udp"
    environment:
      CLOUD_ROUTING_KEY: PUT_YOUR_EDGE_KEY_HERE
      CLOUD_ROUTING_SECRET: PUT_YOUR_EDGE_SECRET_HERE
      CLOUD_PRC_HOST: PUT_YOUR_CLOUD_IP
      CLOUD_RPC_PORT: PUT_YOUR_EDGES_RPC_PORT
    volumes:
      - ~/.mytb-edge-data:/data
      - ~/.mytb-edge-logs:/var/log/thingsboard-edge
```

Where: 
    
- `8090:8080` - connect local port 8090 to exposed internal HTTP port 8080
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

Before starting Docker container run following commands to create a directory for storing data and logs and then change its owner to docker container user, to be able to change user, chown command is used, which requires sudo permissions (command will request password for a sudo access):

```
$ mkdir -p ~/.mytb-edge-data && sudo chown -R 799:799 ~/.mytb-edge-data
$ mkdir -p ~/.mytb-edge-logs && sudo chown -R 799:799 ~/.mytb-edge-logs
```

**NOTE**: Replace directory `~/.mytb-edge-data` and `~/.mytb-edge-logs` with directories you’re planning to use in `docker-compose.yml`.

Set the terminal in the directory which contains the `docker-compose.yml` file and execute the following command to up this docker compose directly:

```
docker-compose pull
docker-compose up
```

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
docker run -it -v ~/.mytb-edge-data:/data --rm thingsboard-edge/tb-postgres upgrade-tb-edge.sh
docker-compose rm mytbedge
docker-compose up
```

**NOTE**: replace host’s directory `~/.mytb-edge-data` with directory used during container creation.

**NOTE**: if you have used one database and want to try another one, then remove the current docker container using `docker-compose rm` command and use different directory for `~/.mytb-data` in `docker-compose.yml`.

## Troubleshootings

{% include templates/edge/troubleshooting.md %} 

### Connection with ThingsBoard Platform

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use Google public DNS servers. 
See corresponding [Linux](https://developers.google.com/speed/public-dns/docs/using#linux) and [Mac OS](https://developers.google.com/speed/public-dns/docs/using#mac_os) instructions.

## Next Steps

{% include templates/edge/next-steps.md %} 
