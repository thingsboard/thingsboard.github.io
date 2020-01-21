---
layout: docwithnav
title: Install ThingsBoard IoT Gateway using Docker.

---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Gateway using Docker on Linux or Mac OS.


## Prerequisites

- [Install Docker CE](https://docs.docker.com/engine/installation/)

## Running

**Execute the following command to run this docker directly:**

```
docker run -it -v ~/.tb-gateway/logs:/var/log/thingsboard-gateway -v ~/.tb-gateway/extensions:/var/lib/thingsboard_gateway/extensions -v ~/.tb-gateway/config:/etc/thingsboard-gateway/config --name tb-gateway --restart always thingsboard/tb-gateway
```
{: .copy-code}

Where: 
    
- `docker run`              - run this container
- `-it`                     - attach a terminal session with current Gateway process output
- `-v ~/.thingsboard-gateway/config:/etc/thingsboard-gateway/config`   - mounts the host's dir `~/.thingsboard-gateway/config` to Gateway config  directory
- `-v ~/.thingsboard-gateway/extensions:/var/lib/thingsboard_gateway/extensions`   - mounts the host's dir `~/.thingsboard-gateway/extensions` to Gateway extensions  directory
- `-v ~/.thingsboard-gateway/logs:/var/log/thingsboard-gateway`   - mounts the host's dir `~/.thingsboard-gateway/logs` to Gateway logs  directory
- `--name tb-gateway`             - friendly local name of this machine
- `--restart always`        - automatically start ThingsBoard in case of system reboot and restart in case of failure.
- `thingsboard/tb-gateway`          - docker image

## Detaching, stop and start commands

You can detach from session terminal with `Ctrl-p` `Ctrl-q` - the container will keep running in the background.

To reattach to the terminal (to see Gateway logs) run:

```
docker attach gateway
```
{: .copy-code}

To stop the container:

```
docker stop gateway
```
{: .copy-code}

To start the container:

```
docker start gateway
```
{: .copy-code}

## Gateway configuration

Stop the container:

```
docker stop gateway
```
{: .copy-code}

**Configure gateway to work with your instance of ThingsBoard, using [this guide](/docs/iot-gateway/configuration/):**

Start the container after made changes:

```
docker start gateway
```
{: .copy-code}

## Upgrading

In order to update to the latest image, execute the following commands:

```
$ docker pull thingsboard/tb-gateway
$ docker stop tb-gateway
$ docker rm tb-gateway
$ docker run -it -v ~/.thingsboard-gateway/logs:/var/log/thingsboard-gateway -v ~/.thingsboard-gateway/extensions:/var/lib/thingsboard_gateway/extensions -v ~/.thingsboard-gateway/config:/etc/thingsboard-gateway/config --name tb-gateway --restart always thingsboard/tb-gateway
```