---
layout: docwithnav-gw
title: How to use remote converter update
description: How to use remote converter update

---

* TOC
{:toc}

"Remote converter update" allows you to remotely update the configuration of a converter by utilizing a shared attribute.
This guide will help you to use this feature for updating your converters configuration remotely.

For the purpose of this tutorial, you need:  
1. Locally installed instance of ThingsBoard platform (In case you are new with ThingsBoard [use this 'how to install' documentation](/docs/user-guide/install/installation-options/)).
2. [Installed](/docs/iot-gateway/installation/) and [configured](/docs/iot-gateway/configuration/) ThingsBoard IoT Gateway. 

## Step 1 Create shared attribute on the gateway device

You have to create a shared attribute on the gateway device using the following 
format `<Connector Name>:<Converter Class Name>` as a key and write converter configuration as a value.

For example:
![](/images/gateway/remote-converter-update-create-shared-attr.png)

On the screenshot above we created shared attribute for remote updating MQTT default JSON converter configuration.

## Step 2 Update provided shared attribute

For getting new converter configuration update, you have to provide shared attribute with new configuration.
For example:
![](/images/gateway/remote-converter-update-shared-attr.png)

## Step 3 Logs

If the above steps were well done, you will see the following gateway logs:
![](/images/gateway/remote-converter-update-logs.png)

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
