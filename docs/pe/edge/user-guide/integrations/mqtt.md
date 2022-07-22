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
        image: /images/pe/edge/integrations/http/add-integration-template-step-1.png
    1:
        image: /images/pe/edge/integrations/http/add-integration-template-step-2.png

assignIntegration:
    0:
        image: /images/pe/edge/integrations/http/assign-integration-step-1.png
        title: 'Add <b>edgeBaseUrl</b> attribute to Edge and set value as your Edge <b>IP:port</b>'
    1:
        image: /images/pe/edge/integrations/http/assign-integration-step-2.png
        title: 'Click <b>Manage Integrations</b> button of Edge entity'
    2:
        image: /images/pe/edge/integrations/http/assign-integration-step-3.png
        title: 'Assign Integration to the Edge'
    3:
        image: /images/pe/edge/integrations/http/assign-integration-step-4.png
        title: 'Login to your ThingsBoard <b>PE Edge</b> instance and open Integrations page - placeholder is going to be replaced by attribute value'

sendUplink:
    0:
        image: /images/pe/edge/integrations/http/send-uplink-step-1.png
    1:
        image: /images/pe/edge/integrations/http/send-uplink-step-2.png

device:
    0:
        image: /images/pe/edge/integrations/http/device.png

converterEvents:
    0:
        image: /images/pe/edge/integrations/http/converter-events-step-1.png
    1:
        image: /images/pe/edge/integrations/http/converter-events-step-2.png
    2:
        image: /images/pe/edge/integrations/http/converter-events-step-3.png

addDownlink:
    0:
        image: /images/pe/edge/integrations/http/add-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/http/add-downlink-step-2.png

updateDownlinkConfiguration:
    0:
        image: /images/pe/edge/integrations/http/update-downlink-configuration.png

downlinkRule:
    0:
        image: /images/pe/edge/integrations/http/downlink-rule-step-1.png
    1:
        image: /images/pe/edge/integrations/http/downlink-rule-step-2.png

addSharedAttribute:
    0:
        image: /images/pe/edge/integrations/http/add-shared-attribute.png

modifySharedAttribute:
    0:
        image: /images/pe/edge/integrations/http/modify-shared-attribute-step-1.png
    1:
        image: /images/pe/edge/integrations/http/modify-shared-attribute-step-2.png

downlinkMessage:
    0:
        image: /images/pe/edge/integrations/http/downlink-message.png

downlinkTerminal:
    0:
        image: /images/pe/edge/integrations/http/downlink-terminal.png
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
Click on the “plus” and on “Create new converter”. To view the events, enable Debug.
In the function decoder field, specify a script to parse and transform data.

{% include images-gallery.html imageCollection="addConverter" %}

**Example for the Uplink converter:**

```ruby
/** Decoder **/

// decode payload to string
var payloadStr = decodeToString(payload);
var data = JSON.parse(payloadStr);
var topicPattern = 'tb-edge/mqtt-integration-tutorial/sensors/(.+)/temperature';

var deviceName = metadata.topic.match(topicPattern)[1];
// decode payload to JSON
var deviceType = 'default';

// Result object with device attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: deviceType,
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

The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard can consume.
**deviceName** and **deviceType** are required, while **attributes** and **telemetry** are optional.
**Attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

You can change the decoder function while creating the converter or after creating it. 
If the converter has already been created, then click on the 'pencil' icon to edit it.
Copy the configuration example for the converter (or your own configuration) and insert it into the decoder function. 
Save changes by clicking on the 'checkmark' icon.

{% include images-gallery.html imageCollection="modifyConverter" %}

{% include templates/edge/integrations/debug-mode-info.md %}

### Downlink Converter template

Create Downlink in **Converter templates** page as well. To see events enable Debug.

{% include images-gallery.html imageCollection="addDownlink" %}

You can customize a downlink according to your configuration.
Let’s consider an example where we send an attribute update message.
An example of downlink converter:

```ruby
/** Encoder **/

var value = parseInt(msg.params.replace(/"/g,""));
var data = {value: value}
// Result object with encoded downlink payload
var result = {

    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "JSON",

    // downlink data
    data: JSON.stringify(data),

    // Optional metadata object presented in key/value format
    metadata: {
        topic: 'tb/mqtt-integration-tutorial/sensors/'+metadata['deviceName']+'/rx'
    }

};

return result;
```
{: .copy-code}

## Create Integration template

Now that the Uplink and Downlink converter templates have been created, it is possible to create an integration.

{% include images-gallery.html imageCollection="addIntegration" %}

Let's update configuration of the Integration template and set Downlink Converter as well.

{% include images-gallery.html imageCollection="updateDownlinkConfiguration" %}

## Modify Edge Root Rule chain for Downlinks

We can send a downlink message to the device from Rule chain using the rule node.
To be able to send downlink over integration we need to modify **'Edge Root Rule chain'** on the cloud.
For example, create an **integration downlink** node and set the **'Attributes updated'** link to it.
When changes are made to device attribute, the downlink message will be sent to the integration.

{% include images-gallery.html imageCollection="downlinkRule" %}

## Assign Integration to Edge

Once converter and integration templates are created, we can assign Integration template to Edge.
Because we are using placeholder **$\{\{edgeBaseUrl\}\}** in the integration configuration, we need to add attribute **edgeBaseUrl** to edge first.
You need to provide **IP address** and **port** of your *Edge* instance as **edgeBaseUrl** attribute.
Once attribute added, we are ready to assign integration and verify that it's added.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

## Send uplink message

To send an uplink message, you need HTTP endpoint URL from the integration.  
Let's log in to ThingsBoard **Edge** and go to the **Integrations** page. Find your HTTP integration and click on it. There you can find the HTTP endpoint URL. Click on the icon to copy the url.

{% include images-gallery.html imageCollection="sendUplink" %}

Use this command to send the message. Replace $DEVICE_NAME and $YOUR_HTTP_ENDPOINT_URL with corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code}

The created device with data can be seen in the section **Device groups -> All** on the Edge:

{% include images-gallery.html imageCollection="device" %}

Received data can be viewed in the Uplink converter. In the **'In'** and **'Out'** blocks of the Events tab:

{% include images-gallery.html imageCollection="converterEvents" %}

Now let's check downlink functionality. Let's add **firmware** shared attribute:

{% include images-gallery.html imageCollection="addSharedAttribute" %}

To make sure that downlink message sent to integration you can check 'Events' tab of integration:

{% include images-gallery.html imageCollection="downlinkMessage" %}

Now we'll need to send again message to HTTP integration and see downlink response.
Please use the same command that was used before (Replace $DEVICE_NAME and $YOUR_HTTP_ENDPOINT_URL with corresponding values):

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code}

An example of sent message and a response from ThingsBoard Edge in the terminal:

{% include images-gallery.html imageCollection="downlinkTerminal" %}

## Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
