---
layout: docwithnav
title: Installing ThingsBoard Edge using Docker (Linux or Mac OS)
description: Installing ThingsBoard Edge using Docker (Linux or Mac OS)
---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Edge using Docker on Linux or Mac OS.

### Prerequisites

- [Install Docker CE](https://docs.docker.com/engine/install/){:target="_blank"}
- [Install Docker Compose](https://docs.docker.com/compose/install/){:target="_blank"}

### Step 1. Running ThingsBoard Edge

Here you can find ThingsBoard Edge single instance docker image with PostgreSQL database: 

* [thingsboard/tb-edge](https://hub.docker.com/r/thingsboard/tb-edge){:target="_blank"}

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
    image: "thingsboard/tb-edge:3.3.0-edge"
    ports:
      - "18080:8080"
      - "11883:1883"
      - "15683:5683/udp"
    environment:
      EDGE_LICENSE_INSTANCE_DATA_FILE: /data/instance-edge-license.data
      CLOUD_ROUTING_KEY: PUT_YOUR_EDGE_KEY_HERE # e.g. 19ea7ee8-5e6d-e642-4f32-05440a529015
      CLOUD_ROUTING_SECRET: PUT_YOUR_EDGE_SECRET_HERE # e.g. bztvkvfqsye7omv9uxlp
      CLOUD_PRC_HOST: PUT_YOUR_CLOUD_IP # e.g. 192.168.1.250
    volumes:
      - ~/.mytb-edge-data:/data
      - ~/.mytb-edge-logs:/var/log/tb-edge
      
```

Where:    
- `18080:8080` - connect local port 18080 to exposed internal HTTP port 8080
- `11883:1883` - connect local port 11883 to exposed internal MQTT port 1883  
- `15683:5683` - connect local port 15683 to exposed internal COAP port 5683   
- `mytb-edge-data:/data` - mounts the host's dir `mytb-edge-data` to ThingsBoard Edge DataBase data directory
- `mytb-edge-logs:/var/log/tb-edge` - mounts the host's dir `mytb-edge-logs` to ThingsBoard Edge logs directory
- `thingsboard/tb-edge` - docker image
- `CLOUD_ROUTING_KEY` - your edge key
- `CLOUD_ROUTING_SECRET` - your edge secret
- `CLOUD_PRC_HOST` - ip address of the machine with the ThingsBoard platform. 

**NOTE**: do not use *'localhost'* - *'localhost'* is the ip address of the edge service in the docker container 

- `restart: always` - automatically start ThingsBoard Edge in case of system reboot and restart in case of failure

Before starting Docker container run following commands to create a directory for storing data and logs and then change its owner to docker container user, to be able to change user, chown command is used, which requires sudo permissions (command will request password for a sudo access):
```
$ mkdir -p ~/.mytb-edge-data && sudo chown -R 799:799 ~/.mytb-edge-data
$ mkdir -p ~/.mytb-edge-logs && sudo chown -R 799:799 ~/.mytb-edge-logs
```

**NOTE**: Replace directory **~/.mytb-edge-data** and **~/.mytb-edge-logs** with directories you’re planning to use in **docker-compose.yml**.

Set the terminal in the directory which contains the `docker-compose.yml` file and execute the following command to up this docker compose directly:

```
docker-compose pull
docker-compose up
```

After executing this command you can open `http://{your-host-ip}:18080` in you browser (for ex. `http://localhost:18080`). 
You should see ThingsBoard Edge login page.

Please use **tenant administrator** credentials to login to ThingsBoard Edge UI in case Edge connected to **ThingsBoard CE**.

If ThingBoard Edge connected to **ThingsBoard PE** please use credentials of the **user(s)** that were assigned to the Edge during Edge **provisioning**.


## Step 2. Detaching, stop and start commands

{% include templates/edge/docker-control.md %}

## Troubleshootings

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use Google public DNS servers. 
See corresponding [Linux](https://developers.google.com/speed/public-dns/docs/using#linux) and [Mac OS](https://developers.google.com/speed/public-dns/docs/using#mac_os) instructions.

## Next Steps

{% include templates/edge/next-steps.md %} 



