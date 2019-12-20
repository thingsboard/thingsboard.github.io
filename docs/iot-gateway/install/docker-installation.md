---
layout: docwithnav
title: Install ThingsBoard IoT Gateway using Docker.

---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Gateway using Docker on Linux or Mac OS.


## Prerequisites

- [Install Docker CE](https://docs.docker.com/engine/installation/)

**Download Gateway repository and go to the directory:**

```bash
git clone -b develop/2.4-python https://github.com/thingsboard/thingsboard-gateway.git
```
{: .copy-code}

```
$ cd thingsboard-gateway
```

**Build docker image from Dockerfile:**
```
docker build -t python3-thingsboard-gateway:2.4 docker
```
{: .copy-code}

## Run gateway container from created image 

```
docker run -it -v ~/.thingsboard-gateway/logs:/var/log/thingsboard-gateway -v ~/.thingsboard-gateway/extensions:/var/lib/thingsboard_gateway/extensions -v ~/.thingsboard-gateway/config:/etc/thingsboard-gateway/config --name gateway --restart always python3-thingsboard-gateway:2.4
```
{: .copy-code}

Where: 
    
- `docker run`              - run this container
- `-it`                     - attach a terminal session with current Gateway process output
- `-v ~/.thingsboard-gateway/config:/etc/thingsboard-gateway/config`   - mounts the host's dir `~/.thingsboard-gateway/config` to Gateway config  directory
- `-v ~/.thingsboard-gateway/extensions:/var/lib/thingsboard_gateway/extensions`   - mounts the host's dir `~/.thingsboard-gateway/extensions` to Gateway extensions  directory
- `-v ~/.thingsboard-gateway/logs:/var/log/thingsboard-gateway`   - mounts the host's dir `~/.thingsboard-gateway/logs` to Gateway logs  directory
- `--name gateway`             - friendly local name of this machine
- `--restart always`        - automatically start ThingsBoard in case of system reboot and restart in case of failure.
- `python3-thingsboard-gateway`          - docker image, created in the previous step

## Detaching, stop and start commands

You can detach from session terminal with `Ctrl-p` `Ctrl-q` - the container will keep running in the background.

To reattach to the terminal (to see Gateway logs) run:

```
$ docker attach gateway
```

To stop the container:

```
$ docker stop gateway
```

To start the container:

```
$ docker start gateway
```
## Gateway configuration
Stop the container:

```
$ docker stop gateway
```

**Configure gateway to work with your instance of ThingsBoard, using [this guide](/docs/iot-gateway/all_configuration/):**

Start the container after made changes:

```
$ docker start gateway
```
