---
layout: docwithnav
title: Installation options
description: ThingsBoard installation instructions for various operation systems and cloud platforms
---

{% include templates/live-demo-banner.md %}

ThingsBoard is designed to run and utilize on majority of hardware, from local Raspberry PI to powerful servers in the cloud.

## Docker containers (recommended installation options)

ThingsBoard provides docker images to simplify installation for most of the scenarios. There are two types of images we provide:

 - **All-in-one** - Monolithic ThingsBoard instance with one of the supported databases co-located into one docker image. 
 Those images are recommended for getting started purposes and for deployment of ThingsBoard in a monolithic mode. See corresponding instructions below:     
   - [**Docker (Linux or Mac OS)**](/docs/user-guide/install/docker/) - install a single-node ThingsBoard cluster on your Linux or Mac OS machine for development and testing.
   - [**Docker (Windows)**](/docs/user-guide/install/docker-windows/) - install a single-node ThingsBoard cluster on your Windows machine for development and testing.
 - **Microservices** - See [microservices](/docs/reference/msa/) architecture page and [deployment](https://github.com/thingsboard/thingsboard/blob/master/docker/README.md) 
 tips for more details how to launch the ThingsBoard cluster in a "dockerized" environment. This option is recommended for advanced users only.

## Bare metal or VM (alternative installation options)

Alternative ways to set up a ThingsBoard include:

 - [Windows](/docs/user-guide/install/windows/) - install ThingBoard on any pre-existing machines running Windows.
 - [Linux (Ubuntu & CentOS)](/docs/user-guide/install/linux/) - install ThingBoard on any pre-existing machines running Linux.
 - [Raspberry Pi 3 Model B (Raspbian Jessie)](/docs/user-guide/install/rpi/) - install Cassandra and Thingboard server on a Raspberry Pi 3 Model B.
 - [AWS EC2 installation using AMIs](/docs/user-guide/install/aws/) - install a single-node ThingsBoard cluster using public AWS AMI.
 