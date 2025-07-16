---
layout: docwithnav-gw
title: Install ThingsBoard IoT Gateway using Docker
redirect_from: 
 - "/docs/iot-gateway/install/windows/"
---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Gateway using Docker on Windows.

## Prerequisites

- [Install Docker Toolbox for Windows](https://docker-docs.uclv.cu/toolbox/toolbox_install_windows/){:target="_blank"};
- You will need to have access to ThingsBoard. The easiest way is to use the [ThingsBoard Demo](https://demo.thingsboard.io/){:target="_blank"} server. 
The alternative option is to install the ThingsBoard locally using the [installation guide](https://thingsboard.io/docs/user-guide/install/installation-options/){:target="_blank"}.

## Download docker-compose file

{% assign downloadGatewayConfigurationFile = '
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

{% include images-gallery.liquid showListImageTitles="true" imageCollection=downloadGatewayConfigurationFile %}

## Running

Click the **Docker QuickStart** icon to launch a pre-configured **Docker Toolbox** terminal.

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/){:target="_blank"} to docker hub.
Start the Gateway by executing the following command from the folder containing the **docker-compose.yml** file in the command line as administrator:

```
docker compose up
```
{: .copy-code}

{% assign startGatewayWindows = '
    ===
        image: /images/gateway/install/start-gateway-windows-1-ce.png,
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=startGatewayWindows %}

## Detaching commands

To detach from session (the container will keep running in the background) execute the following command:

```
docker compose up -d
```
{: .copy-code}

To reattach to the command line (to look at Gateway logs) execute the following command:

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