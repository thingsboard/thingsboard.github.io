---
layout: docwithnav-gw
title: Install ThingsBoard IoT Gateway using Docker.

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
docker run -it -v %HOMEPATH%/tb-gateway/config:/thingsboard_gateway/config -v %HOMEPATH%/tb-gateway/extensions:/thingsboard_gateway/extensions -v %HOMEPATH%/tb-gateway/logs:/thingsboard_gateway/logs --name tb-gateway --restart always thingsboard/tb-gateway
```
{: .copy-code}

Where: 
    
- `docker run`              - run this container
- `-it`                     - attach a terminal session with current Gateway process output
- `-v %HOMEPATH%/tb-gateway/config:/thingsboard_gateway/config`   - mounts the host's dir `%HOMEPATH%\tb-gateway\config` to Gateway config  directory
- `-v %HOMEPATH%/tb-gateway/extensions:/thingsboard_gateway/extensions`   - mounts the host's dir `%HOMEPATH%\tb-gateway\extensions` to Gateway extensions  directory
- `-v %HOMEPATH%/tb-gateway/logs:/thingsboard_gateway/logs`   - mounts the host's dir `%HOMEPATH%\tb-gateway\logs` to Gateway logs  directory
- `--name tb-gateway`             - friendly local name of this machine
- `--restart always`        - automatically start ThingsBoard in case of system reboot and restart in case of failure.
- `thingsboard/tb-gateway`          - docker image
- `$HOME`   - current user's home dir(`%HomePath%`)

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

`%HomePath%\tb-gateway\config`


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
$ docker run -it -v $HOME/tb-gateway/config:/etc/thingsboard-gateway/config -v $HOME/tb-gateway/extensions:/var/lib/thingsboard_gateway/extensions -v $HOME/tb-gateway/logs:/var/log/thingsboard-gateway --name tb-gateway --restart always thingsboard/tb-gateway
```
