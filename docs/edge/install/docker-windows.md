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

### Step 2. Get edge Secret and Key

{% include templates/edge/add-edge.md %}

### Step 3. Running ThingsBoard Edge

There is one type of ThingsBoard Edge single instance docker image:

* [thingsboard-edge/tb-postgres](https://hub.docker.com/r/thingsboard/thingsboard-edge/tb-postgres/) - single instance of ThingsBoard Edge with PostgreSQL database.

In this instruction `thingsboard-edge/tb-postgres` image will be used. You can choose any other images with different databases (see above).

Windows users should use docker managed volume for ThingsBoard Edge DataBase. 
Create docker volume (for ex. `mytb-edge-data`) before executing docker run command:
Open "Docker Quickstart Terminal". Execute the following command to create docker volume:

``` 
$ docker volume create mytb-edge-data
$ docker volume create mytb-edge-logs
```

Execute the following command to run this docker directly:
                                   
``` 
$ docker run -it -p 9090:9090 -p 1883:1883 -p 5683:5683/udp -v mytb-edge-data:/data -v mytb-edge-logs:/var/log/thingsboard-edge --name mytb-edge --restart always thingsboard-edge/tb-postgres
```

Where: 
    
- `docker run`              - run this container
- `-it`                     - attach a terminal session with current ThingsBoard Edge process output
- `-p 8190:8190`            - connect local port 8190 to exposed internal HTTP port 9090
- `-p 1993:1993`            - connect local port 1993 to exposed internal MQTT port 1993  
- `-p 60100:60100`            - connect local port 60100 to exposed internal CLOUD_RPC_PORT port 60100   
- `-v mytb-edge-data:/data`      - mounts the volume `mytb-data` to ThingsBoard Edge DataBase data directory
- `-v mytb-edge-logs:/var/log/thingsboard-edge`      - mounts the volume `mytb-edge-logs` to ThingsBoard Edge logs directory
- `--name mytb-edge`             - friendly local name of this machine
- `--restart always`        - automatically start ThingsBoard Edge in case of system reboot and restart in case of failure. 
- `thingsboard-edge/tb-postgres`          - docker image

In order to get access to necessary resources from external IP/Host on Windows machine, please execute the following commands:

``` 
$ VBoxManage controlvm "default" natpf1 "tcp-8190,tcp,,8190,,8190"  
$ VBoxManage controlvm "default" natpf1 "tcp-1993,tcp,,1993,,1993"
$ VBoxManage controlvm "default" natpf1 "tcp-60100,tcp,,60100,,60100"
```
    
After executing this command you can open `http://{your-host-ip}:8190` in you browser (for ex. `http://localhost:8190`). You should see ThingsBoard login page.
Use the following default credentials:

- **Systen Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer
    
You can always change passwords for each account in account profile page.

## Step 4. Detaching, stop and start commands

You can detach from session terminal with `Ctrl-p` `Ctrl-q` - the container will keep running in the background.

To reattach to the terminal (to see ThingsBoard Edge logs) run:

```
$ docker attach mytb-edge
```

To stop the container:

```
$ docker stop mytb-edge
```

To start the container:

```
$ docker start mytb-edge
```

## Upgrading

In order to update to the latest image, open "Docker Quickstart Terminal" and execute the following commands:

```
$ docker pull thingsboard-edge/tb-postgres
$ docker stop mytb-edge
$ docker run -it -v mytb-edge-data:/data --rm thingsboard-edge/tb-postgres upgrade-tb.sh
$ docker rm mytb-edge
$ docker run -it -p 8190:8190 -p 1993:1993 -p 60100:60100/udp -v ~/mytb-edge-data:/data -v ~/mytb-edge-logs:/var/log/thingsboard-edge --name mytb-edge --restart always thingsboard-edge/tb-postgres
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
