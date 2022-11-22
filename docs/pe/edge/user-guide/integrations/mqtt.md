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

assignIntegration:
    0:
        image: /images/pe/edge/integrations/mqtt/assign-integration-step-1.png
        title: 'Add <b>brokerIp</b> attribute to Edge and set value as your Edge <b>broker.hivemq.com</b>'
    1:
        image: /images/pe/edge/integrations/mqtt/assign-integration-step-2.png
        title: 'Click <b>Manage Integrations</b> button of Edge entity'
    2:
        image: /images/pe/edge/integrations/mqtt/assign-integration-step-3.png
        title: 'Assign Integration to the Edge'
    3:
        image: /images/pe/edge/integrations/mqtt/assign-integration-step-4.png
        title: 'Login to your ThingsBoard <b>PE Edge</b> instance and open Integrations page - placeholder is going to be replaced by attribute value'

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

downlinkRule:
    0:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-step-1.png
    1:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-step-2.png
    2:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-step-3.png

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

**Pay attention**: MQTT broker should be either co-located with ThingsBoard Edge instance or deployed in the cloud and have a valid DNS name or static IP address. 

### Prerequisites

In this tutorial, we will use:

- MQTT broker, accessible by ThingsBoard Edge instance — broker.hivemq.com (port 1883);
- *mosquitto_pub* and *mosquitto_sub* MQTT clients to send and receive messages.

Let's assume that we have a sensor which is sending current temperature readings.
Our sensor device **SN-001** publishes it's temperature readings to **tb-edge/mqtt-integration-tutorial/sensors/SN-001/temperature**, and it is subscribed to **tb-edge/mqtt-integration-tutorial/sensors/SN-001/rx** to receive RPC calls.

We will send a message with temperature readings in a simple format: **`{"value":25.1}`**

## Create Converter templates

Converter and Integration templates are created on the **Cloud**, so please log in as Tenant administrator to cloud instance.

### Uplink Converter template

Before creating the Integration template, you need to create an Uplink and Downlink converter templates in **Converters templates** page.

**Uplink Converter** is a script for parsing and transforming the data received by MQTT integration.
**Downlink Converter** parses and transforms the data sent from ThingsBoard to the format that is consumed by existing device(s).

Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard Edge.
Click on the "plus" and on "Create new converter". To view the events, enable Debug.
In the function decoder field, specify a script to parse and transform data.

{% include images-gallery.html imageCollection="addConverter" %}

{% include templates/edge/integrations/debug-mode-info.md %}

**Example for the Uplink converter:**

```ruby
/** Decoder **/

// decode payload to string
var payloadStr = decodeToString(payload);
var data = JSON.parse(payloadStr);
var topicPattern = 'tb-edge/mqtt-integration-tutorial/sensors/(.+)/temperature';

var deviceName =  metadata.topic.match(topicPattern)[1];
// decode payload to JSON

// Result object with device attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: 'default',
   attributes: {
       integrationName: metadata['integrationName'],
   },
   telemetry: {
       temperature: data.value,
   }
};

/** Helper functions **/

function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
   // convert payload to string.
   var str = decodeToString(payload);

   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}

return result;
```
{: .copy-code}

The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard Edge can consume.
**deviceName** and **deviceType** are required, while **attributes** and **telemetry** are optional.
**Attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

You can change the decoder function while creating the converter or after creating it. 
If the converter has already been created, then click on the 'pencil' icon to edit it.
Copy the configuration example for the converter (or your own configuration) and insert it into the decoder function. 
Save changes by clicking on the 'checkmark' icon.

{% include images-gallery.html imageCollection="modifyConverter" %}

### Downlink Converter template

Create Downlink in **Converter templates** page as well. To see events select **Debug** checkbox.

{% include images-gallery.html imageCollection="addDownlink" %}

You can customize a downlink according to your configuration.
Let’s consider an example where we send an attribute update message.
An example of downlink converter:

```ruby
/** Encoder **/

// Result object with encoded downlink payload
var result = {

    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "JSON",

    // downlink data
    data: JSON.stringify(msg),

    // Optional metadata object presented in key/value format
    metadata: {
        topic: 'tb-edge/mqtt-integration-tutorial/sensors/'+metadata['originatorName']+'/rx'
    }

};

return result;
```
{: .copy-code}

## Create Integration template

Now that the Uplink and Downlink converter templates have been created, it is possible to create an integration.
Go to **Integration templates** section and click **Add new integration** button. Name it **Edge MQTT**, select type **MQTT**, turn the Debug mode on and from drop-down menus add recently created Uplink and Downlink converters.

Specify host: **$\{\{brokerIp\}\}**. Port: **1883**. It is better to uncheck the **Clean session** parameter. Many brokers do not support sticky sessions, so will silently close the connection if you try to connect with this option enabled.

Add a Topic Filter **tb-edge/mqtt-integration-tutorial/sensors/+/temperature**. You can also select an MQTT QoS level. We use MQTT QoS level 0 (At most once) by default.

Let's leave the Downlink topic pattern by default, meaning that the Integration will take the metadata.topic and use it as the downlink topic.

Click **Add** to save the Integration.

{% include images-gallery.html imageCollection="addIntegration" %}

## Modify Edge Root Rule chain for Downlinks

We can send a downlink message to the device from Rule chain using the rule node.
To be able to send downlink over integration we need to modify **'Edge Root Rule chain'** on the cloud.
We'll need to add two rule nodes - **originator fields** and **integration downlink** nodes.
Set **'Attributes updated'** link to **originator fields** and configure to add originator name and type to the message metadata - in the **downlink converter** name of the device will be used to set proper *downlink* MQTT topic.
And then add **Success** link from **originator fields** node to **integration downlink** node.
When changes are made to device attribute on the Edge, the downlink message will be sent to the integration template.

{% include images-gallery.html imageCollection="downlinkRule" %}

## Assign Integration to Edge

Once converter and integration templates are created, we can assign Integration template to Edge.
Because we are using placeholder **$\{\{brokerIp\}\}** in the integration configuration, we need to add attribute **brokerIp** to edge first.
You need to provide **IP address** of the MQTT broker. We are using public URL *broker.hivemq.com* in this tutorial, but this could be any internal IP address as well.
Once attribute added, we are ready to assign integration and verify that it's added.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

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
