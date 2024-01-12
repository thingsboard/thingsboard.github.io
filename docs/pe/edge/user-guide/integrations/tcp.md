---
layout: docwithnav-pe-edge
title: TCP Integration
description: TCP Integration Guide

addConverter:
    0:
        image: /images/pe/edge/integrations/tcp/add-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/tcp/add-converter-step-2.png

modifyConverter:
    0:
        image: /images/pe/edge/integrations/tcp/modify-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/tcp/modify-converter-step-2.png

addDownlink:
    0:
        image: /images/pe/edge/integrations/tcp/add-downlink-step-1.png
    1:
        image: /images/pe/edge/integrations/tcp/add-downlink-step-2.png

addIntegration:
    0:
        image: /images/pe/edge/integrations/tcp/add-integration-template-step-1.png
    1:
        image: /images/pe/edge/integrations/tcp/add-integration-template-step-2.png
    2:
        image: /images/pe/edge/integrations/tcp/add-integration-template-step-3.png

downlinkRule:
    0:
        image: /images/pe/edge/integrations/tcp/downlink-rule-step-1.png
    1:
        image: /images/pe/edge/integrations/tcp/downlink-rule-step-2.png

assignIntegration:
    0:
        image: /images/pe/edge/integrations/tcp/assign-integration-step-1.png
        title: 'Click <b>Manage Integrations</b> button of Edge entity'
    1:
        image: /images/pe/edge/integrations/tcp/assign-integration-step-2.png
        title: 'Assign Integration to the Edge'
    2:
        image: /images/pe/edge/integrations/tcp/assign-integration-step-3.png
        title: 'Login to your <b>ThingsBoard Edge</b> instance and open Integrations page'

sendUplink:
    0:
        image: /images/pe/edge/integrations/tcp/send-uplink-step-1.png
    1:
        image: /images/pe/edge/integrations/tcp/send-uplink-step-2.png

device:
    0:
        image: /images/pe/edge/integrations/tcp/device.png

converterEvents:
    0:
        image: /images/pe/edge/integrations/tcp/converter-events-step-1.png
    1:
        image: /images/pe/edge/integrations/tcp/converter-events-step-2.png
    2:
        image: /images/pe/edge/integrations/tcp/converter-events-step-3.png

addSharedAttribute:
    0:
        image: /images/pe/edge/integrations/tcp/add-shared-attribute.png

downlinkMessage:
    0:
        image: /images/pe/edge/integrations/tcp/downlink-message.png

downlinkTerminal:
    0:
        image: /images/pe/edge/integrations/tcp/downlink-terminal.png

---

* TOC
{:toc}

{% assign integrationName = "TCP" %}
{% assign integrationUrl = "tcp" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

## Overview

{% include templates/edge/integrations/tcp-udp/overview.md %}

{% include templates/edge/integrations/tcp-udp/remote-only.md %}

Please review the integration diagram to learn more.

![image](/images/user-guide/integrations/tcp-integration.svg)

## Prerequisites

In this tutorial, we will use:

- ThingsBoard PE Edge;
- TCP Integration, running externally and connected to the cloud ThingsBoard Edge instance;
- **echo** command which intended to display a line of text, and will redirect it's output to **netcat** (**nc**) utility;
- **netcat** (**nc**) utility to establish TCP connections, receive data from there and transfer them;

Let's assume that we have a sensor which is sending current temperature and humidity readings.
Our sensor device **SN-002** publishes it's temperature and humidity readings to TCP Integration on **10560** port to the machine where TCP Integration is running.

For demo purposes we assume that our device is smart enough to send data in 3 different payload types:
- **Text** - in this case payload is **SN-002,default,temperature,25.7\n\rSN-002,default,humidity,69**
- **JSON** - in this case payload is

```json
[
  {
    "deviceName": "SN-002",
    "deviceType": "default",
    "temperature": 25.7,
    "humidity": 69
  }
]
```
- **Binary** - in this case binary payload is **\x30\x30\x30\x30\x11\x53\x4e\x2d\x30\x30\x32\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x00\x00\x00** (in HEX string).
  Here is the description of the bytes in this payload:
    - **0-3** bytes - **\x30\x30\x30\x30** - dummy bytes to show how you can skip particular prefix bytes in your payload. These bytes are included for sample purposes;
    - **4** byte - **\x11** - payload length. If we convert it to decimal - **17**. So our payload in this case is limited to 17 bytes from the incoming TCP frame;
    - **5-10** bytes - **\x53\x4e\x2d\x30\x30\x32** - device name. If we convert it to text - **SN-002**;
    - **11-17** bytes - **\x64\x65\x66\x61\x75\x6c\x74** - device type. If we convert it to text - **default**;
    - **18-21** bytes - **\x32\x35\x2e\x37** - temperature telemetry. If we convert it to text - **25.7**;
    - **22-24** bytes - **\x00\x00\x00** - dummy bytes. We are going to ignore them, because payload size is **17** bytes - from **5** till **21** byte. These bytes are included for sample purposes;

You can select payload type based on your device capabilities and business cases.

{% assign integrationPort = "10560" %}
{% include templates/edge/integrations/tcp-udp/firewall.md %}

## Create Converter templates

Converter and Integration templates are created on the **Cloud**, so please log in as Tenant administrator to cloud instance.

### Uplink Converter template

Before creating the Integration template, you need to create an Uplink and Downlink converter templates in **Converters templates** page.
Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard Edge.

Click on the 'plus' and on 'Create new converter'. To view the events, enable Debug.
In the function decoder field, specify a script to parse and transform data.

{% include images-gallery.html imageCollection="addConverter" %}

{% include templates/edge/integrations/debug-mode-info.md %}

Choose device payload type to for decoder configuration:

{% capture uplinkpayload %}
Text payload<br>%,%text%,%templates/integration/tcp/tcp-uplink-converter-text.md%br%
JSON payload<br>%,%json%,%templates/integration/tcp/tcp-uplink-converter-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/tcp/tcp-uplink-converter-binary.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="tcpintegartionuplinkpayload" toggle-spec=uplinkpayload %}

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

## Create Integration template

Now that the Uplink and Downlink converter templates have been created, it is possible to create an integration.
Go to **Integration templates** section and click **Add new integration** button. Name it **TCP Integration**, select type **TCP**, turn the Debug mode on and from drop-down menus add recently created Uplink and Downlink converters.

As you mentioned **Execute remotely** is checked and can not be modified - TCP Integration can be only **remote** type.

Please note down **Integration key** and **Integration secret** - we will use these values later in the configuration on the remote TCP Integration itself.

By default, TCP Integration will use **10560** port, but you can change this to any available port in your case.

We leave other options by default, but there is brief description of them:
- **Max number of pending connects on the socket** - The maximum queue length for incoming connection indications (a request to connect) is set to the backlog parameter. If a connection indication arrives when the queue is full, the connection is refused;
- **Size of the buffer for inbound socket** - the size in KBytes of the socket data receive buffer;
- **Size of the buffer for outbound socket** - the size in KBytes of the socket data send buffer;
- **Enable sending of keep-alive messages on connection-oriented sockets** - a flag indicating that probes should be periodically sent across the network to the opposing socket to keep the connection alive;
- **Forces a socket to send the data without buffering (disable Nagle's buffering algorithm)** - disables Nagle's algorithm on the socket which delays the transmission of data until a certain volume of pending data has accumulated.

Choose device payload type for **Handler Configuration**:

{% capture handlerconfiguration %}
Text payload<br>%,%text%,%templates/integration/tcp/tcp-handler-configuration-text.md%br%
JSON payload<br>%,%json%,%templates/integration/tcp/tcp-handler-configuration-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/tcp/tcp-handler-configuration-binary.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="tcpintegrationhandlerconfiguration" toggle-spec=handlerconfiguration %}

Click **Add** to save the Integration.

{% include images-gallery.html imageCollection="addIntegration" %}


## Modify Edge Root Rule chain for Downlinks

We can send a downlink message to the device from Rule chain using the rule node.
To be able to send downlink over integration we need to modify **'Edge Root Rule chain'** on the cloud.
For example, create an **integration downlink** node and set the **'Attributes updated'** link to it.
When changes are made to device attribute, the downlink message will be sent to the integration.

{% include images-gallery.html imageCollection="downlinkRule" %}

## Assign Integration to Edge

Once converter and integration templates are created, we can assign Integration template to Edge.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

#### Installing and running external TCP Integration

Please refer to the [Remote Integration guide](/docs/pe/edge/user-guide/integrations/remote-integrations) and install TCP Integration service locally or on separate machine.

Please use **Integration key** and **Integration secret** from the above section for your TCP Integration configuration.

## Send uplink message

Once ThingsBoard TCP Integration has been created, the TCP server starts, and then it waits for data from the devices.

Choose device payload type to send uplink message:

{% capture senduplink %}
Text payload<br>%,%text%,%templates/integration/tcp/tcp-send-uplink-text.md%br%
JSON payload<br>%,%json%,%templates/integration/tcp/tcp-send-uplink-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/tcp/tcp-send-uplink-binary.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="tcpintegrationsenduplink" toggle-spec=senduplink %}

{% include images-gallery.html imageCollection="sendUplink" %}

The created device with data can be seen in the section **Device groups -> All** on the Edge:

{% include images-gallery.html imageCollection="device" %}

Received data can be viewed in the Uplink converter. In the **'In'** and **'Out'** blocks of the Events tab:

{% include images-gallery.html imageCollection="converterEvents" %}

## Send downlink message

Now let's check downlink functionality. Let's add **firmware** shared attribute:

{% include images-gallery.html imageCollection="addSharedAttribute" %}

To make sure that downlink message sent to integration you can check 'Events' tab of integration:

{% include images-gallery.html imageCollection="downlinkMessage" %}

Now we'll need to send again message to TCP integration and see downlink response.
Please use the same command that was used before.

An example of sent message and a response from ThingsBoard Edge in the terminal:

{% include images-gallery.html imageCollection="downlinkTerminal" %}

## Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
