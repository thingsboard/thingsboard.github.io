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

- [Install Docker Compose for Windows](https://docs.docker.com/desktop/setup/install/windows-install/){:target="_blank"};
- You will need to have access to ThingsBoard. The easiest way is to use [ThingsBoard Cloud](https://thingsboard.io/installations/){:target="_blank"}.
The alternative option is to install the ThingsBoard locally using the [installation guide](https://thingsboard.io/docs/user-guide/install/installation-options/){:target="_blank"}.

## Download a docker-compose file

{% assign downloadGatewayConfigurationFile = '
   ===
      image: /images/gateway/install/gateway-download-configuration-file-1-ce.png,
      title: Go to the "**Entities**" > "**Gateways**" page and click the "**plus**" icon in the upper right corner to add a new gateway.
   ===
      image: /images/gateway/install/gateway-download-configuration-file-2-ce.png,
      title: In the opened modal window input the gateway name, specify the "**default**" device profile, and click "**Create**".
   ===
      image: /images/gateway/install/gateway-download-configuration-file-3-ce.png,
      title: The "**Launch command**" window will open. Click the "**Download**" button to download a docker-compose file for your gateway.
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

## Next steps

Explore guides related to main ThingsBoard features:

 - [Getting Started](/docs/iot-gateway/getting-started/) with ThingsBoard IoT Gateway.
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
