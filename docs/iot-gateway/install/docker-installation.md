---
layout: docwithnav-gw
title: Install ThingsBoard IoT Gateway using Docker

---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Gateway using Docker Compose on Linux or Mac OS.

## Prerequisites

- [Install Docker Engine](https://docs.docker.com/engine/installation/){:target="_blank"};
- [ThingsBoard account](https://demo.thingsboard.io/){:target="_blank"} or your [local instance](https://thingsboard.io/docs/user-guide/install/installation-options/){:target="_blank"}.

## Download configuration file

{% assign downloadConfigurationFile = '
   ===
      image: /images/gateway/install/gateway-download-configuration-file-1-ce.png,
      title: Go to the "**Dashboards**" page and open the "**ThingsBoard IoT Gateways**" dashboard;
   ===
      image: /images/gateway/install/gateway-download-configuration-file-2-ce.png,
      title: Click the "**plus**" icon in the upper right corner to add a new gateway. Input the gateway name, specify the "default" device profile, and click "**Create**";
   ===
      image: /images/gateway/install/gateway-download-configuration-file-3-ce.png,
      title: The "**Docker commands**" window will open. Click the "**Download**" button to download the configuration file for your gateway.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=downloadConfigurationFile %}

## Running

Click the **Docker QuickStart** icon to launch a pre-configured **Docker Toolbox** terminal.

Execute the following command from the folder containing the **docker-compose.yaml** file to start the Gateway:

```
docker compose up
```
{: .copy-code}

{% assign startGateway = '
    ===
        image: /images/gateway/install/start-gateway-1-ce.png,
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=startGateway %}

## Detaching commands

To detach from session (the container will keep running in the background) execute the following command:

```
docker compose up -d
```
{: .copy-code}

To reattach to the terminal (to look at Gateway logs) execute the following command:

```
docker attach tb-gateway
```
{: .copy-code}

## Upgrading

In order to update to the latest image, execute the following commands:

```
docker compose down
docker pull thingsboard/tb-gateway
docker compose up
```
{: .copy-code}