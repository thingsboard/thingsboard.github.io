---
layout: docwithnav-gw
title: Install ThingsBoard IoT Gateway using Docker Compose

---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Gateway using Docker Compose on Linux or Mac OS.

## Prerequisites

- [Install Docker Compose](https://docs.docker.com/compose/){:target="_blank"};
- You will need to have access to ThingsBoard. The easiest way is to use the [ThingsBoard Demo](https://demo.thingsboard.io/){:target="_blank"} server.
The alternative option is to install the ThingsBoard locally using the [installation guide](https://thingsboard.io/docs/user-guide/install/installation-options/){:target="_blank"}.

## Download docker-compose file

{% assign downloadConfigurationFile = '
   ===
      image: /images/gateway/install/gateway-download-configuration-file-1-ce.png,
      title: Go to the "**Dashboards**" page and open the "**ThingsBoard IoT Gateways**" dashboard;
   ===
      image: /images/gateway/install/gateway-download-configuration-file-2-ce.png,
      title: Click the "**plus**" icon in the upper right corner to add a new gateway. Input the gateway name, specify the "default" device profile, and click "**Create**";
   ===
      image: /images/gateway/install/gateway-download-configuration-file-3-ce.png,
      title: The "**Docker commands**" window will open. Click the "**Download**" button to download docker-compose file for your gateway.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=downloadConfigurationFile %}

## Running

Click the **Docker QuickStart** icon to launch a pre-configured **Docker Toolbox** terminal.

Start the Gateway by executing the following command from the folder containing the **docker-compose.yml** file in the Terminal:

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