---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard Trendz Analytics using Docker (Windows)
description: Installing ThingsBoard Trendz Analytics using Docker (Windows)

---

* TOC
{:toc}


This guide will help you to install and start Trendz Analytics using Docker on Windows. 

## Prerequisites

- [Install Docker Toolbox for Windows](https://docs.docker.com/toolbox/toolbox_install_windows/)

## Step 1. Obtain the license key 

We assume you have already have Trendz license key. If not, please get your [Free Trial license](/pricing/?active=trendz) before you proceed.
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} for more details.

Note: We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.

## Step 2. Checkout Trendz Analytics image on Docker Hub

Open official [Trendz Analytics](https://hub.docker.com/_/trndz) Docker Hub page and proceed to checkout.
Populate basic information about yourself and click "Get Content"


## Step 3. Running

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

Windows users should use docker managed volume for Trendz Database. 
Create docker volume (for ex. `mytrendz-data`) before executing docker run command:
Open "Docker Quickstart Terminal". Execute the following command to create docker volume:

``` 
docker volume create mytrendz-data
docker volume create mytrendz-logs
```

Execute the following command to run this docker directly:

``` 
docker run -it -p 8888:8888 -v mytrendz-data:/data -v mytrendz-logs:/var/log/trendz -e TB_API_URL='PUT_YOUR_THINGSBOARD_URL_HERE' -e TB_API_PE_ENABLED='true' -e TB_LICENSE_SECRET=PUT_YOUR_LICENSE_SECRET_HERE --restart always --name mytrendz thingsboard/trendz:1.4.0-SNAPSHOT
```

Where: 

- `PUT_YOUR_LICENSE_SECRET_HERE` - placeholder for your license secret obtained on the first step
- `PUT_YOUR_THINGSBOARD_URL_HERE` - url for connecting to ThingsBoard Rest API (for example http://10.5.0.11:8080)
- `TB_API_PE_ENABLED`       - set **true** if connecting to the ThingsBoard Professional Edition and **false** if connecting to the ThingsBoard Community Edition
- `docker run`              - run this container
- `-it`                     - attach a terminal session with current Trendz process output
- `-p 8888:8888`            - connect local port 8888 to exposed internal HTTP port 8888
- `-v mytrendz-data:/data`   - mounts the volume `mytbpe-data` to Trendz DataBase data directory
- `-v mytrendz-logs:/var/log/thingsboard`   - mounts the volume `mytbpe-logs` to Trendz logs directory
- `--name mytrendz`             - friendly local name of this machine
- `--restart always`        - automatically start Trendz in case of system reboot and restart in case of failure.
- `thingsboard/trendz:1.4.0-SNAPSHOT`          - docker image

    
In order to get access to necessary resources from external IP/Host on Windows machine, please execute the following commands:

``` 
VBoxManage controlvm "default" natpf1 "tcp-port8888,tcp,,8888,,8888"
```
    
After executing this command you can open `http://{your-host-ip}:8888` in you browser (for ex. `http://localhost:8888`). You should see Trendz login page.
   
##### Authentication

For first authentication you need to use **Tenant Administrator** credentials from your **ThingsBoard**

Trendz uses ThingsBoard as an authentication service. During first sign in ThingsBoard service should be also available 
to validate credentials.

## Detaching, stop and start commands

You can detach from session terminal with `Ctrl-p` `Ctrl-q` - the container will keep running in the background.

To reattach to the terminal (to see Trendz logs) run:

```
$ docker attach mytrendz
```

To stop the container:

```
$ docker stop mytrendz
```

To start the container:

```
$ docker start mytrendz
```

## Troubleshooting

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use [Google public DNS servers](https://developers.google.com/speed/public-dns/docs/using#windows)
