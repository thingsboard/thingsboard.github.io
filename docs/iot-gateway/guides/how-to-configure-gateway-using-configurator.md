---
layout: docwithnav-gw
title: How to configure ThingsBoard IoT Gateway using Configurator
description: How to configure ThingsBoard IoT Gateway using Configurator

---

* TOC
{:toc}

This guide will help you to configure your ThingsBoard IoT Gateway using Configurator, especially
if you used installation via deb package.

## Step 1 Starting Configurator

To start configuring Gateway you have to start your terminal and launch Configurator using the next command:
```bash
sudo tb-gateway-configurator
```
{: .copy-code}

If you have correctly installed the gateway, you will see the following:

![](/images/gateway/gateway-cli.png)

## Step 2 Configuring

Answering questions to be displayed in turn using your option (You can use the default value which
displays in the input field).

**NOTE**: Default value is taken from **/etc/thingsboard-gateway/config/tb_gateway.yaml** and all your configuration via
CLI will be saved there.

![](/images/gateway/gateway-cli-questions.png)

## Step 3 Starting Gateway

Finally, you can start your ThingsBoard IoT gateway with the following command:
```bash
thingsboard-gateway
```
{: .copy-code}

## Next steps

Explore guides related to the main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
