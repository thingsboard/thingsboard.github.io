---
layout: docwithnav-gw
title: Install ThingsBoard IoT Gateway using Docker Compose

---

* TOC
{:toc}

This guide will help you to install and start ThingsBoard Gateway using Docker Compose on Linux or macOS.

## Prerequisites

- [Install Docker Compose](https://docs.docker.com/compose/){:target="_blank"};
- You will need to have access to ThingsBoard. The easiest way is to [ThingsBoard Cloud](https://thingsboard.io/installations/){:target="_blank"}.
The alternative option is to install the ThingsBoard locally using the [installation guide](https://thingsboard.io/docs/user-guide/install/installation-options/){:target="_blank"}.

## Download a docker-compose file

{% assign downloadConfigurationFile = '
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

## Next steps

Explore guides related to main ThingsBoard features:

 - [Getting Started](/docs/iot-gateway/getting-started/) with ThingsBoard IoT Gateway.
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
