---
layout: docwithnav-pe-edge
title: MQTT Integration
description: MQTT Integration guide
addConverter:
    0:
        image: /images/pe/edge/integrations/mqtt/add-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/mqtt/add-converter-step-2.png

modifyConverter:
    0:
        image: /images/pe/edge/integrations/mqtt/modify-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/mqtt/modify-converter-step-2.png

addIntegration:
    0:
        image: /images/pe/edge/integrations/mqtt/add-integration-template-step-1.png
    1:
        image: /images/pe/edge/integrations/mqtt/add-integration-template-step-2.png
    2:
        image: /images/pe/edge/integrations/mqtt/add-integration-template-step-3.png

assign-integration:
    0:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-1-edge.png
        title: 'Go to the "<b>Edge management</b>" section -> "<b>Instances</b>" page, click on your edge instance to open "Edge details" window, and navigate to the "<b>Attributes</b>" tab. Click "plus" icon to add new <b>server attribute</b> to Edge;'
    1:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-2-edge.png
        title: 'Named &#39;<b>baseUrl</b>&#39; and set value as &#39;<b>broker.hivemq.com</b>&#39;. After, click "Add" button;'
    2:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-3-edge.png
        title: 'Added the server attribute &#39;<b>&#39;baseUrl&#39;</b>&#39; to the edge;'
    3:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-4-edge.png
        title: 'Now, click "<b>Manage edge integrations</b>" icon of Edge entity;'
    4:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-5-edge.png
        title: 'Click the "+" icon at the top right of the corner. Specify your integration and click "Assign" button to assign it to the Edge;'
    5:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-6-edge.png
        title: 'Login to your <b>ThingsBoard Edge</b> instance and open "<b>Integrations center</b>" section -> "<b>Integrations</b>" page. You should see your integration. Click on it;'
    6:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-7-edge.png
        title: 'In the "<b>Integration details</b>" window placeholder <b>${{baseUrl}}</b> will be replaced with the value of the attribute.'

device:
    0:
        image: /images/pe/edge/integrations/mqtt/device.png

converterEvents:
    0:
        image: /images/pe/edge/integrations/mqtt/converter-events-step-1.png
    1:
        image: /images/pe/edge/integrations/mqtt/converter-events-step-2.png
    2:
        image: /images/pe/edge/integrations/mqtt/converter-events-step-3.png

addDownlink:
    0:
        image: /images/pe/edge/integrations/mqtt/add-downlink-step-1.png
    1:
        image: /images/pe/edge/integrations/mqtt/add-downlink-step-2.png

downlink-rule:
    0:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-mqtt-1-edge.png
        title: 'Go to the "<b>Edge management</b>" section -> "<b>Rule chain templates</b>" page and click on the "<b>Edge Root Rule Chain</b>" to open it;'
    1:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-mqtt-2-edge.png
        title: 'Create an &#39;<b>originator fields</b>&#39; node. Configure adding originator name and originator type to the message metadata - in the downlink converter name of the device will be used to set the proper downlink MQTT topic;'
    2:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-mqtt-3-edge.png
        title: 'Create an &#39;<b>integration downlink</b>&#39; node. Specify your integration in its settings;'
    3:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-mqtt-4-edge.png
        title: 'Set the "<b>Attributes Updated</b>" and "<b>Post attributes</b>" links from the &#39;<b>message type switch</b>&#39; node to the &#39;<b>originator fields</b>&#39; node. And set &#39;<b>Success</b>&#39; link from the &#39;<b>originator fields</b>&#39; node to the &#39;<b>integration downlink</b>&#39; node. When the attribute is created or changes are made to the attribute on the Edge, the downlink message will be sent to the integration. Apply changes.'

addSharedAttribute:
    0:
        image: /images/pe/edge/integrations/mqtt/add-shared-attribute.png

downlinkMessage:
    0:
        image: /images/pe/edge/integrations/mqtt/downlink-message.png

downlinkTerminal:
    0:
        image: /images/pe/edge/integrations/mqtt/downlink-terminal.png
---

* TOC
{:toc}

{% assign integrationName = "MQTT" %}
{% assign integrationUrl = "mqtt" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

## Overview

MQTT Integration allows to connect to external MQTT brokers, subscribe to data streams from those brokers and convert any type of payload from your devices to ThingsBoard Edge message format. 
Its typical use is whenever your devices are already connected to external MQTT broker or any other IoT platform or connectivity provider with MQTT based back-end.

Please review the integration diagram to learn more.

<object width="100%" style="max-width: max-content;" data="/images/user-guide/integrations/mqtt-integration.svg"></object>

ThingsBoard Edge MQTT Integration acts as an MQTT client. 
It subscribes to topics and converts the data into telemetry and attribute updates. 
In case of downlink message, MQTT integration converts it to the device-suitable format and pushes to external MQTT broker.

{% capture difference %}
**Pay attention**: MQTT broker should be either co-located with ThingsBoard Edge instance or deployed in the cloud and have a valid DNS name or static IP address.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Prerequisites

In this tutorial, we will use:

- **ThingsBoard Professional Edition** instance — [thingsboard.cloud](https://thingsboard.cloud);
- MQTT broker, accessible by **ThingsBoard Edge** instance — broker.hivemq.com (port 1883);
- *mosquitto_pub* and *mosquitto_sub* MQTT clients to send and receive messages.

Let's assume that we have a sensor which is sending current temperature readings.
Our sensor device **SN-001** publishes it's temperature readings to '**tb-edge/mqtt-integration-tutorial/sensors/SN-001/temperature**', and it is subscribed to '**tb-edge/mqtt-integration-tutorial/sensors/SN-001/rx**' to receive RPC calls.

We will send a message with temperature readings in a simple format: **`{"value":25.1}`**

## Create converter and integration templates

Converter and integration templates are created only on the **ThingsBoard Professional Edition**.
So please use [**ThingsBoard Cloud**](https://thingsboard.cloud/signup) or [**install**](/docs/user-guide/install/pe/installation-options/) your own platform instance to log in as Tenant administrator.

Follow the steps below to add the **MQTT integration**:

- Go to "**Edge management**" section -> "**Integration templates**" page and click "plus" button to add new integration. Select type '**MQTT**'. Name it "Edge MQTT integration". Then, click "Next";

{% include templates/edge/integrations/debug-mode-info.md %}

![image](/images/pe/edge/integrations/mqtt/add-mqtt-integration-template-1-edge.png)

- The next step is to create an **Uplink data converter**.

The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard can consume.
*deviceName* and *deviceType* are required, while *attributes* and *telemetry* are optional.
*Attributes* and *telemetry* are flat key-value objects. Nested objects are not supported.

For this example, use the code below.

{% include templates/tbel-vs-js.md %}

{% capture mqttuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/edge/integrations/mqtt/mqtt-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/edge/integrations/mqtt/mqtt-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="mqttuplinkconverterconfig" toggle-spec=mqttuplinkconverterconfig %}

- At the next step is to create a **Downlink converter**.

The downlink converter transforming outgoing RPC message and then the Integration sends it to external MQTT broker.
You can customize a downlink according to your configuration. Let's consider an example where we send an attribute update message. 

For this example, use the code below.

{% include templates/tbel-vs-js.md %}

{% capture mqttdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/edge/integrations/mqtt/mqtt-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/edge/integrations/mqtt/mqtt-downlink-converter-config-javascript.md{% endcapture %}
{% include content-toggle.html content-toggle-id="mqttdownlinkconverterconfig" toggle-spec=mqttdownlinkconverterconfig %}

Finally, we go to the "**Connection**" page.

- You can use placeholder **$\{\{ATTRIBUTE_KEY\}\}** to substitute integration field with attribute value from specific Edge entity.
In this example, we will use the placeholder **$\{\{baseURL\}\}** for '**Host**' and '**1883**' for **port**.
- Add a **topic filter**: 

```shell
tb-edge/mqtt-integration-tutorial/sensors/+/temperature
```
{: .copy-code} 

- You can also select an MQTT **QoS** level. We use MQTT QoS level 0 (At most once) by default;

![image](/images/pe/edge/integrations/mqtt/add-mqtt-integration-template-4-edge.png)

- Go to the '**Advanced settings**'. It is better to uncheck the '**Clean session**' parameter. Many brokers do not support sticky sessions, so will silently close the connection if you try to connect with this option enabled;
- Let's leave the '**Downlink topic pattern**' by default, meaning that the integration will take the metadata.topic and use it as the downlink topic. Click "Add" button to create the integration.

![image](/images/pe/edge/integrations/mqtt/add-mqtt-integration-template-5-edge.png)

## Modify Edge Root Rule Chain for downlinks

We can send a downlink message to the device from Rule chain using the rule node.
To be able to send downlink over integration we need to modify '**Edge Root Rule chain**' on the **ThingsBoard PE**.
We'll need to add two rule nodes: '**originator fields**' and '**integration downlink**' nodes.

{% include images-gallery.html imageCollection="downlink-rule" showListImageTitles="true" %}

## Assign Integration to Edge

Once converter and integration templates are created, we can assign Integration template to **Edge**.
Because we are using placeholder **$\{\{baseUrl\}\}** in the integration configuration, we need to add attribute '**baseUrl**' to edge first.
You need to provide **IP address** of the MQTT broker. We are using public URL *broker.hivemq.com* in this tutorial, but this could be any internal IP address as well.
Once attribute added, we are ready to assign integration and verify that it's added.

{% include images-gallery.html imageCollection="assign-integration" showListImageTitles="true" %}

## Send uplink message

Now let’s simulate the device sending a temperature reading to the integration:

```ruby
mosquitto_pub -h broker.hivemq.com -p 1883 -t "tb-edge/mqtt-integration-tutorial/sensors/SN-001/temperature" -m '{"value":25.2}'
```
{: .copy-code}

The created device with data can be seen in the section **Device groups -> All** on the Edge:

{% include images-gallery.html imageCollection="device" %}

Received data can be viewed in the Uplink converter. In the **'In'** and **'Out'** blocks of the Events tab:

{% include images-gallery.html imageCollection="converterEvents" %}

## Send One-Way RPC to Device

Now let's check downlink functionality.
Open the terminal window and execute the following command:

```ruby
mosquitto_sub -h broker.hivemq.com -p 1883 -t "tb-edge/mqtt-integration-tutorial/sensors/+/rx"
```
{: .copy-code}

Please leave this terminal running in background - in this terminal window you should receive incoming messages sent later by integration.

Let's add **firmware** shared attribute:

{% include images-gallery.html imageCollection="addSharedAttribute" %}

To make sure that downlink message sent to integration you can check 'Events' tab of integration:

{% include images-gallery.html imageCollection="downlinkMessage" %}

An example of incoming messages from ThingsBoard Edge in the terminal:

{% include images-gallery.html imageCollection="downlinkTerminal" %}

## Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
