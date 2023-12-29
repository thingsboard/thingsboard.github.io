---
layout: docwithnav-gw
title: Install ThingsBoard IoT Gateway using Docker.
redirect_from: 
 - "/docs/iot-gateway/install/windows/"
---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Gateway using Docker on Windows.


## Prerequisites

- [Install Docker Toolbox for Windows](https://docs.docker.com/toolbox/toolbox_install_windows/)

## Running

Click the Docker QuickStart icon to launch a pre-configured Docker Toolbox terminal.

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

**Execute the following command to run this docker directly:**

```
docker run -it -v %HOMEDRIVE%%HOMEPATH%\tb-gateway\logs:/thingsboard_gateway/logs -v %HOMEDRIVE%%HOMEPATH%\tb-gateway\extensions:/thingsboard_gateway/extensions -v %HOMEDRIVE%%HOMEPATH%\tb-gateway\config:/thingsboard_gateway/config --name tb-gateway -p 60000-61000:60000-61000 --restart always thingsboard/tb-gateway
```
{: .copy-code}

Where: 
    
- `docker run`              - run this container
- `-it`                     - attach a terminal session with current Gateway process output
- `%HOMEPATH%`   - current user's home dir
- `%HOMEDRIVE%` - current user's home drive
- `-v %HOMEDRIVE%%HOMEPATH%\tb-gateway\config:/thingsboard_gateway/config`   - mounts the host's dir `%HOMEDRIVE%%HOMEPATH%\tb-gateway\config` to Gateway config  directory
- `-v %HOMEDRIVE%%HOMEPATH%\tb-gateway\extensions:/thingsboard_gateway/extensions`   - mounts the host's dir `%HOMEDRIVE%%HOMEPATH%\tb-gateway\extensions` to Gateway extensions  directory
- `-v %HOMEDRIVE%%HOMEPATH%\tb-gateway\logs:/thingsboard_gateway/logs`   - mounts the host's dir `%HOMEDRIVE%%HOMEPATH%\tb-gateway\logs` to Gateway logs  directory
- `--name tb-gateway`             - friendly local name of this machine
- `-p 60000-61000:60000-61000` - publish range of ports from 60000 to 61000
- `--restart always`        - automatically start ThingsBoard in case of system reboot and restart in case of failure.
- `thingsboard/tb-gateway`          - docker image

## Running (with environmental variables)

**Execute the following command to run docker container with environmental variables:**

```
docker run -it -v %HOMEDRIVE%%HOMEPATH%\tb-gateway\logs:/thingsboard_gateway/logs -v %HOMEDRIVE%%HOMEPATH%\tb-gateway\extensions:/thingsboard_gateway/extensions -v %HOMEDRIVE%%HOMEPATH%\tb-gateway\config:/thingsboard_gateway/config --name tb-gateway -p 60000-61000:60000-61000 -e host=thingsboard.cloud -e port=1883 -e accessToken=ACCESS_TOKEN --restart always thingsboard/tb-gateway
```
{: .copy-code}

{% capture info %}
<div>
  <p>
    <span style="color:black">Environmental variables will override configuration parameters.</span>
  </p>
</div>
{% endcapture %}
{% include templates/info-banner.md content=info %}

Available environmental variables:

| **ENV**     | **Description**                |
|:-|-
| host        | ThingsBoard instance host.     |
| port        | ThingsBoard instance port.     |
| accessToken | Gateway access token.          |
| caCert      | Path to CA file.               |
| privateKey  | Path to private key file.      |
| cert        | Path to certificate file.      |
|--

## Detaching, stop and start commands

You can detach from session terminal with `Ctrl-p` `Ctrl-q` - the container will keep running in the background.

To reattach to the terminal (to look at Gateway logs) run:

```
docker attach tb-gateway
```
{: .copy-code}

To stop the container:

```
docker stop tb-gateway
```
{: .copy-code}

To start the container:

```
docker start tb-gateway
```
{: .copy-code}

## Gateway configuration

Stop the container:

```
docker stop tb-gateway
```
{: .copy-code}

Open the directory with configuration files:

`%HOMEDRIVE%%HOMEPATH%\tb-gateway\config`


**Configure gateway to work with your instance of ThingsBoard, using [this guide](/docs/iot-gateway/configuration/):**


Start the container after made changes:

```
docker start tb-gateway
```
{: .copy-code}

## Upgrading

In order to update to the latest image, execute the following commands:

```
$ docker pull thingsboard/tb-gateway
$ docker stop tb-gateway
$ docker rm tb-gateway
$ docker run -it -v %HOMEDRIVE%%HOMEPATH%\tb-gateway\logs:/thingsboard_gateway/logs -v %HOMEDRIVE%%HOMEPATH%\tb-gateway\extensions:/thingsboard_gateway/extensions -v %HOMEDRIVE%%HOMEPATH%\tb-gateway\config:/thingsboard_gateway/config --name tb-gateway -p 60000-61000:60000-61000 --restart always thingsboard/tb-gateway
```

## Build local docker image

In order to build local docker image, follow the next steps:

1. Copy **Dockerfile** to **root** folder, using the following command:
    ```powershell
    copy docker\Dockerfile .
    ```
   {: .copy-code}
2. From project root folder execute the following command:
    ```bash
    docker build -t local-gateway .
    ```
    {: .copy-code}
