---
layout: docwithnav-pe-edge
title: HTTP Integration
description: HTTP integration guide
addConverter:
    0:
        image: /images/pe/edge/integrations/http/add-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/http/add-converter-step-2.png

modifyConverter:
    0:
        image: /images/pe/edge/integrations/http/modify-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/http/modify-converter-step-2.png

addIntegration:
    0:
        image: /images/pe/edge/integrations/http/add-integration-template-step-1.png
    1:
        image: /images/pe/edge/integrations/http/add-integration-template-step-2.png

assignIntegration:
    0:
        image: /images/pe/edge/integrations/http/assign-integration-step-1.png
        title: 'Add <b>edgeBaseUrl</b> attribute to Edge'
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

{% assign integrationName = "HTTP" %}
{% assign integrationUrl = "http" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

## Overview

HTTP Integration allows converting existing protocols and payload formats to ThingsBoard Edge message format and is useful in several deployment scenarios: 

 - stream device and/or asset data from external system, IoT platform or connectivity provider back-end.
 - stream device and/or asset data from your custom application running in the cloud.
 - connect the existing device with custom HTTP based protocol to ThingsBoard Edge.

## Create Uplink Converter template

Before creating the Integration template, you need to create an Uplink converter template in Converters template. Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard Edge. 
Click on the “plus” and on “Create new converter”. To view the events, enable Debug. 
In the function decoder field, specify a script to parse and transform data.

{% include images-gallery.html imageCollection="addConverter" %}

**Example for the Uplink converter:**

```ruby
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object
/** Decoder **/
// decode payload to string
// var payloadStr = decodeToString(payload);
// decode payload to JSON
var data = decodeToJson(payload);
var deviceName = data.deviceName;
// Result object with device attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: 'default',
   attributes: {
       model: data.model,
   },
   telemetry: {
       temperature: data.temperature
   }
};
/** Helper functions **/
function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}
function decodeToJson(payload) {
   // covert payload to string.
   var str = decodeToString(payload);
   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}
return result;
```
{: .copy-code}

You can change the decoder function while creating the converter or after creating it. If the converter has already been created, then click on the “pencil” icon to edit it.
Copy the configuration example for the converter (or your own configuration) and insert it into the decoder function. Save changes by clicking on the “checkmark” icon.

{% include images-gallery.html imageCollection="modifyConverter" %}

{% include templates/edge/integrations/debug-mode-info.md %}

## Create Integration template 

Now that the Uplink converter template has been created, it is possible to create an integration.

{% include images-gallery.html imageCollection="addIntegration" %}

## Assign Integration to Edge

Once converter and integration templates are created, we can assign Integration template to Edge. 
Because we are using placeholder **$\{\{edgeBaseUrl\}\}** in the integration configuration, we need to add attribute **edgeBaseUrl** to edge first.
Once attribute added, we are ready to assign integration and verify that it's added.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

## Send uplink message

To send an uplink message, you need a HTTP endpoint URL from the integration.  
Let`s go to the Integrations tab in ThingsBoard Edge. Find your HTTP integration and click on it. There you can find the HTTP endpoint URL. Click on the icon to copy the url.

{% include images-gallery.html imageCollection="sendUplink" %}

Use this command to send the message. Replace $DEVICE_NAME and $YOUR_HTTP_ENDPOINT_URL with corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code}

The created device with data can be seen in the section **Device groups -> All** on the Edge:

{% include images-gallery.html imageCollection="device" %}

Received data can be viewed in the Uplink converter. In the **“In”** and **“Out”** blocks of the Events tab:

{% include images-gallery.html imageCollection="converterEvents" %}

## Downlink Converter template

Create Downlink in Converter templates. To see events enable Debug.

{% include images-gallery.html imageCollection="addDownlink" %}

You can customize a downlink according to your configuration. 
Let’s consider an example where we send an attribute update message. 
An example of downlink converter:

```ruby
// Encode downlink data from incoming Rule Engine message

// msg - JSON message payload downlink message json
// msgType - type of message, for ex. 'ATTRIBUTES_UPDATED', 'POST_TELEMETRY_REQUEST', etc.
// metadata - list of key-value pairs with additional data about the message
// integrationMetadata - list of key-value pairs with additional data defined in Integration executing this converter

var result = {

    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "JSON",

    // downlink data
    data: JSON.stringify(msg),

    // Optional metadata object presented in key/value format
    metadata: {
    }
};

return result;
```
{: .copy-code}

Once Downlink template added - update configuration of the Integration template.

{% include images-gallery.html imageCollection="updateDownlinkConfiguration" %}

We go to the Device group section in All group, to see this with an example.
First, let's add **firmware** shared attribute:

{% include images-gallery.html imageCollection="addSharedAttribute" %}

We can send a message to the device from Rule chain using the rule node.
To modify **'Edge Root Rule chain'** please go to the cloud web interface. 
For example, create an **integration downlink** node and set the “**Attributes updated**” link to it. 
When changes are made to the attribute, the downlink message will be sent to the integration.

{% include images-gallery.html imageCollection="downlinkRule" %}

 
We have indicated the serial number of the device in the Shared attributes. Now we edit it by clicking on the “pencil” icon.
Then we make changes to the attribute (change the firmware from 01052020.v1.1 to 01052020.v1.2) and save the data.

{% include images-gallery.html imageCollection="modifySharedAttribute" %}

To make sure that downlink message sent to integration you can check 'Events' tab of integration:

{% include images-gallery.html imageCollection="downlinkMessage" %}

An example of sent message and a response from ThingsBoard Edge in the terminal:

{% include images-gallery.html imageCollection="downlinkTerminal" %}

## Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
