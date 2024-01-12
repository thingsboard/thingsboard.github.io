---
layout: docwithnav-pe-edge
title: CoAP Integration
description: CoAP Integration Guide

addConverter:
    0:
        image: /images/pe/edge/integrations/coap/add-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/coap/add-converter-step-2.png

modifyConverter:
    0:
        image: /images/pe/edge/integrations/coap/modify-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/coap/modify-converter-step-2.png

addIntegration:
    0:
        image: /images/pe/edge/integrations/coap/add-integration-template-step-1.png
        title: 'Go to <b>Integration templates</b> section and click <b>Add new integration</b> button.'
    1:
        image: /images/pe/edge/integrations/coap/add-integration-template-step-2.png
        title: 'Name it <b>CoAP Integration</b>, select type <b>CoAP</b>, turn the Debug mode on and from drop-down menus add recently created Uplink converter. Set Base URL as <b>${{edgeIP}}</b>. Please note down <b>CoAP endpoint URL</b> value - we will use it later in <b>coap-client</b> for testing CoAP Integration.'

assignIntegration:
    0:
        image: /images/pe/edge/integrations/coap/assign-integration-step-1.png
        title: 'Add <b>edgeIP</b> attribute to Edge and set value as your Edge IP <b>192.168.1.15</b>. Please use <b>YOUR</b> IP address of your Edge instance!'
    1:
        image: /images/pe/edge/integrations/coap/assign-integration-step-2.png
        title: 'Click <b>Manage Integrations</b> button of Edge entity'
    2:
        image: /images/pe/edge/integrations/coap/assign-integration-step-3.png
        title: 'Assign Integration to the Edge'
    3:
        image: /images/pe/edge/integrations/coap/assign-integration-step-4.png
        title: 'Login to your <b>ThingsBoard Edge</b> instance and open Integrations page - placeholder is going to be replaced by attribute value'

sendUplink:
    0:
        image: /images/pe/edge/integrations/coap/send-uplink-step-1.png
    1:
        image: /images/pe/edge/integrations/coap/send-uplink-step-2.png

device:
    0:
        image: /images/pe/edge/integrations/coap/device.png

converterEvents:
    0:
        image: /images/pe/edge/integrations/coap/converter-events-step-1.png
    1:
        image: /images/pe/edge/integrations/coap/converter-events-step-2.png
    2:
        image: /images/pe/edge/integrations/coap/converter-events-step-3.png

---

* TOC
{:toc}

{% assign integrationName = "CoAP" %}
{% assign integrationUrl = "coap" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

## Overview

CoAP Integration allows to stream data from devices that use a CoAP protocol to connect to ThingsBoard Edge and converts payloads of these devices into the ThingsBoard Edge format.

Please review the integration diagram to learn more.

![image](/images/user-guide/integrations/coap-integration.svg)

## Prerequisites

In this tutorial, we will show you how configure CoAP integration with **NO SECURE** security mode selected. 

To simulate CoAP device, please install [coap-client](http://manpages.ubuntu.com/manpages/focal/man5/coap-client.5.html) - utility which is intended to simulate CoAP client that will connect to CoAP integration.

Let's assume that we have a sensor which is sending current temperature and humidity readings.
Our sensor device **SN-001** publishes it's temperature and humidity readings to CoAP Integration on **coap://192.168.1.15** URL - *192.168.1.15* is the IP address of the ThingsBoard Edge in local network. In your specific case please use IP address of **your** edge instance.

For demo purposes we assume that our device is smart enough to send data in 3 different payload types:
- **Text** - in this case payload is: **SN-001,default,temperature,25.7,humidity,69**
- **JSON** - in this case payload is:

```json
{
  "deviceName": "SN-001",
  "deviceType": "default",
  "temperature": 25.7,
  "humidity": 69
}
```

- **Binary** - in this case payload is: **\x53\x4e\x2d\x30\x30\x31\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x36\x39** (in HEX string).
  Here is the description of the bytes in this payload:
    - **0-5** bytes - **\x53\x4e\x2d\x30\x30\x31** - device name. If we convert it to text - **SN-001**;
    - **6-12** bytes - **\x64\x65\x66\x61\x75\x6c\x74** - device type. If we convert it to text - **default**;
    - **13-16** bytes - **\x32\x35\x2e\x37** - temperature telemetry. If we convert it to text - **25.7**;
    - **17-18** bytes - **\x36\x39** - humidity telemetry. If we convert it to text - **69**;

You can use payload type based on your device capabilities and business cases.

## Create Converter templates

Converter and Integration templates are created on the **Cloud**, so please log in as Tenant administrator to cloud instance.

### Uplink Converter template

Before creating the Integration template, you need to create an Uplink converter templates in **Converters templates** page.
Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard Edge.
Click on the 'plus' and on 'Create new converter'. To view the events, enable Debug.
In the function decoder field, specify a script to parse and transform data.

{% include images-gallery.html imageCollection="addConverter" %}

{% include templates/edge/integrations/debug-mode-info.md %}

Choose device payload type to for decoder configuration:

{% capture uplinkpayload %}
Text payload<br>%,%text%,%templates/integration/coap/coap-uplink-converter-text.md%br%
JSON payload<br>%,%json%,%templates/integration/coap/coap-uplink-converter-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/coap/coap-uplink-converter-binary.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="coapintegartionuplinkpayload" toggle-spec=uplinkpayload %}

You can change the decoder function while creating the converter or after creating it.
If the converter has already been created, then click on the 'pencil' icon to edit it.
Copy the configuration example for the converter (or your own configuration) and insert it into the decoder function.
Save changes by clicking on the 'checkmark' icon.

{% include images-gallery.html imageCollection="modifyConverter" %}

## Create Integration template

Now that the Uplink converter template has been created, it is possible to create an integration.

{% include images-gallery.html imageCollection="addIntegration" showListImageTitles="true" %}

## Assign Integration to Edge

Once converter and integration templates are created, we can assign Integration template to Edge.
Because we are using placeholder **$\{\{edgeIP\}\}** in the integration configuration, we need to add attribute **edgeIP** to edge first.
You need to provide **IP address** of your *Edge* instance as **edgeIP** attribute.
Once attribute added, we are ready to assign integration and verify that it's added.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

## Send uplink message

Once CoAP Integration has been created, the CoAP server register appropriate resources, and then it waits for data from the devices.
Let's log in to ThingsBoard **Edge** and go to the **Integrations** page. Find your CoAP integration and click on it. There you can find the CoAP endpoint URL. Click on the icon to copy the url.

Choose device payload type to send uplink message (Replace **$YOUR_COAP_ENDPOINT_URL** with corresponding value):

{% capture senduplink %}
Text payload<br>%,%text%,%templates/edge/integrations/coap/coap-send-uplink-text.md%br%
JSON payload<br>%,%json%,%templates/edge/integrations/coap/coap-send-uplink-json.md%br%
Binary payload<br>%,%binary%,%templates/edge/integrations/coap/coap-send-uplink-binary.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="coapintegrationsenduplink" toggle-spec=senduplink %}

{% include images-gallery.html imageCollection="sendUplink" %}

The created device with data can be seen in the section **Device groups -> All** on the Edge:

{% include images-gallery.html imageCollection="device" %}

Received data can be viewed in the Uplink converter. In the **'In'** and **'Out'** blocks of the Events tab:

{% include images-gallery.html imageCollection="converterEvents" %}

## Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
