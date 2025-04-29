---
layout: docwithnav-pe-edge
title: UDP Integration
description: UDP Integration Guide

addConverter:
    0:
        image: /images/pe/edge/integrations/udp/add-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/udp/add-converter-step-2.png

modifyConverter:
    0:
        image: /images/pe/edge/integrations/udp/modify-converter-step-1.png
    1:
        image: /images/pe/edge/integrations/udp/modify-converter-step-2.png

addDownlink:
    0:
        image: /images/pe/edge/integrations/udp/add-downlink-step-1.png
    1:
        image: /images/pe/edge/integrations/udp/add-downlink-step-2.png

addIntegration:
    0:
        image: /images/pe/edge/integrations/udp/add-integration-template-step-1.png
    1:
        image: /images/pe/edge/integrations/udp/add-integration-template-step-2.png
    2:
        image: /images/pe/edge/integrations/udp/add-integration-template-step-3.png

downlinkRule:
    0:
        image: /images/pe/edge/integrations/udp/downlink-rule-step-1.png
    1:
        image: /images/pe/edge/integrations/udp/downlink-rule-step-2.png

assignIntegration:
    0:
        image: /images/pe/edge/integrations/udp/assign-integration-step-1.png
        title: 'Click <b>Manage Integrations</b> button of Edge entity'
    1:
        image: /images/pe/edge/integrations/udp/assign-integration-step-2.png
        title: 'Assign Integration to the Edge'
    2:
        image: /images/pe/edge/integrations/udp/assign-integration-step-3.png
        title: 'Login to your <b>ThingsBoard Edge</b> instance and open Integrations page'

sendUplink:
    0:
        image: /images/pe/edge/integrations/udp/send-uplink-step-1.png
    1:
        image: /images/pe/edge/integrations/udp/send-uplink-step-2.png

device:
    0:
        image: /images/pe/edge/integrations/udp/device.png

converterEvents:
    0:
        image: /images/pe/edge/integrations/udp/converter-events-step-1.png
    1:
        image: /images/pe/edge/integrations/udp/converter-events-step-2.png
    2:
        image: /images/pe/edge/integrations/udp/converter-events-step-3.png

addSharedAttribute:
    0:
        image: /images/pe/edge/integrations/udp/add-shared-attribute.png

downlinkMessage:
    0:
        image: /images/pe/edge/integrations/udp/downlink-message.png

downlinkTerminal:
    0:
        image: /images/pe/edge/integrations/udp/downlink-terminal.png

---

* TOC
{:toc}

{% assign integrationName = "UDP" %}
{% assign integrationUrl = "udp" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

## Overview

{% include templates/edge/integrations/tcp-udp/overview.md %}

{% include templates/edge/integrations/tcp-udp/remote-only.md %}

To learn more, review the integration diagram:

![image](/images/user-guide/integrations/udp-integration.svg){: style="display: block; margin: auto"}

## Prerequisites

In this tutorial, we will use:

- [ThingsBoard Edge Professional Edition](/docs/pe/edge/getting-started-guides/what-is-edge/){: target="_blank"};
- **UDP Integration:** The integration that runs externally and is connected to the **ThingsBoard Edge** instance.
- **echo** command: To display a line of text, and redirect its output to the **netcat** (**nc**) utility.
- **netcat (nc) utility**: To establish TCP connections, receive data from there, and transmit it.

Let’s assume that we have a sensor which is sending current temperature and humidity readings.
Our sensor device **SN-001** publishes the temperature and humidity readings to UDP Integration on port **11560** to the machine where UDP Integration is running.

For demonstration purposes, we assume that our device is smart enough to send data in 3 different payload types:
- **Text:** The payload is
```text
SN-001,default,temperature,25.7,humidity,69
```
- **JSON:** The payload is

```json
[
  {
    "deviceName": "SN-001",
    "deviceType": "default",
    "temperature": 25.7,
    "humidity": 69
  }
]
```
- **Binary:** The binary payload is (in HEX string):
```text 
\x53\x4e\x2d\x30\x30\x31\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x36\x39
```
  Here is the description of the bytes in this payload:
    - **0-5** bytes: **\x53\x4e\x2d\x30\x30\x3** - The device name. If we convert it to the text, it is **SN-001**.
    - **6-12** bytes: **\x64\x65\x66\x61\x75\x6c\x74** - The device type. If we convert it to the text, it is **default**.
    - **13-16** bytes: **\x32\x35\x2e\x37** - The temperature telemetry. If we convert it to the text, it is **25.7**.
    - **17-18** bytes: **\x36\x39** - The humidity telemetry. If we convert it to text, it is **69**.

- **Hex:** - The payload is a hexadecimal string:
```text 
534e2d30303164656661756c7432352e373639
```
  Here is the description of the bytes in this payload:
    - **0-5** bytes: **534e2d303031** - The device name. If we convert it to the text, it is **SN-001**;
    - **6-12** byte - **64656661756c74** - device type. If we convert it to the text, it is **default**;
    - **13-16** byte - **32352e37** - temperature telemetry. If we convert it to the text, it is**25.7**;
    - **17-18** byte - **3639** - humidity telemetry. If we convert it to the text, it is**69**;

Based on your device capabilities and business cases, you can choose the payload type:

{% assign integrationPort = "11560" %}
{% include templates/edge/integrations/tcp-udp/firewall.md %}

## Create Converter templates

Converter and Integration templates are created in the **Cloud**, so please log in to the **Cloud** instance as **Tenant administrator**.

### Uplink Converter template

Before creating the **Integration template**, create an Uplink and Downlink converter templates in **Converters templates** section.
The uplink is necessary to convert the incoming data from the device into the format that is required for display on **ThingsBoard Edge**.
Click the "plus" button and select the "Create new converter" option. To view the events, enable **Debug** mode.
In the **"Function decoder"** field, enter a script to parse and transform data.

{% include images-gallery.html imageCollection="addConverter" %}

{% include templates/edge/integrations/debug-mode-info.md %}

Select the device payload type to use for a decoder configuration:

{% capture uplinkpayload %}
Text payload<br>%,%text%,%templates/integration/udp/udp-uplink-converter-text.md%br%
JSON payload<br>%,%json%,%templates/integration/udp/udp-uplink-converter-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/udp/udp-uplink-converter-binary.md%br%
Hex payload<br>%,%hex%,%templates/integration/udp/udp-uplink-converter-hex.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpintegartionuplinkpayload" toggle-spec=uplinkpayload %}

You can change the decoder function while creating the converter or after creating it.
If the converter has already been created, click the **"Edit"** buton (the 'pencil' icon) to edit it.
Copy the configuration example for the converter (or your own configuration) and paste it into the decoder function.
To save the changes, click the **"Save"** button (the 'checkmark' icon).

{% include images-gallery.html imageCollection="modifyConverter" %}

### Downlink Converter template

Create the Downlink in **Converter templates** page as well. To see the events, check the **Debug** checkbox.

{% include images-gallery.html imageCollection="addDownlink" %}

You can customize a downlink according to your configuration.
Let’s consider an example where we send an attribute update message.
An example of a downlink converter:

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
Go to the **Integration templates** section and click the **Add new integration** button. Name it **UDP Integration**, 
select the **UDP** type, enable the **Debug** mode, and add the recently created Uplink and Downlink converters from the drop-down menus.

As mentioned above, the **Execute remotely** option is selected by default and cannot be changed, the UDP Integration can only be the **remote** type.

Record the **Integration key** and **Integration secret**. These values will be used later in the configuration on the remote **UDP Integration**.

By default, the UDP Integration will use the port **11560**, but can be changed to any available port.

We leave other options by default, but there is brief description of them:
- **Enable broadcast - integration will accept broadcast address packets:** Flag to indicate that integration accepts UDP packets sent to broadcast address.
- **Inbound socket buffer size:** The size in KBytes of the socket data receive buffer.

Select the device payload type for **Handler Configuration**:

{% capture handlerconfiguration %}
Text payload<br>%,%text%,%templates/integration/udp/udp-handler-configuration-text.md%br%
JSON payload<br>%,%json%,%templates/integration/udp/udp-handler-configuration-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/udp/udp-handler-configuration-binary.md%br%
Hex payload<br>%,%hex%,%templates/integration/udp/udp-handler-configuration-hex.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpintegrationhandlerconfiguration" toggle-spec=handlerconfiguration %}

To save the Integration, click the **Add** button.

{% include images-gallery.html imageCollection="addIntegration" %}

## Modify the Edge Root Rule chain for Downlinks

We can send a downlink message to the device from the **Rule chain** using the **rule node**. To send downlink via integration, modify the **Edge Root Rule chain**.

{% capture delete_restrictions %}
**Please note!** <br>
If you use **earlier versions of Edge**, you cannot create or edit a **Rule Chain** on the **Edge** itself. It must be configured as a template in the **Cloud (Server)**, and then assigned to the **Edge** instance.

Starting with **Edge version 4.0**, you can create and edit a **Rule Chain** on the **Edge**.
{% endcapture %}

For example, create an **integration downlink** node and set the **'Attributes updated'** link to it.
When changes are made to the device attribute, the downlink message is sent to the integration.

{% include images-gallery.html imageCollection="downlinkRule" %}

## Assign Integration to Edge

Once the converter and integration templates are created, we can assign the integration template to **Edge**.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

## Installing and running external UDP Integration

Please refer to the [Remote Integration guide](/docs/pe/edge/user-guide/integrations/remote-integrations){: target="_blank"} and install the UDP Integration service locally or on a separate machine.

Please use the **Integration key** and **Integration secret** from the above section for the UDP Integration configuration.

## Send uplink message

Once the **ThingsBoard UDP Integration** has been created, the UDP server starts, and then it waits for data from the devices.

Select the device payload type to send the uplink message:

{% capture senduplink %}
Text payload<br>%,%text%,%templates/integration/udp/udp-send-uplink-text.md%br%
JSON payload<br>%,%json%,%templates/integration/udp/udp-send-uplink-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/udp/udp-send-uplink-binary.md%br%
Hex payload<br>%,%hex%,%templates/integration/udp/udp-send-uplink-hex.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpintegrationsenduplink" toggle-spec=senduplink %}

{% include images-gallery.html imageCollection="sendUplink" %}

To view the created device with data in the **Device groups > All** section on the Edge:

{% include images-gallery.html imageCollection="device" %}

The received data can be viewed in the Uplink converter. In the **'In'** and **'Out'** blocks of the **"Events"** tab:

{% include images-gallery.html imageCollection="converterEvents" %}

## Send the downlink message

Now let's check the downlink functionality. 

Now we need to send another message to the UDP integration to see the downlink response.
Please use the same command as before, but replace the parameter **q1** with **q120**. 
With these changes, the **nc** utility will wait 120 seconds for the downlink message.
In addition, please remove the **w1** parameter.

After you'll send uplink command, you have **120 seconds** to add **firmware** shared attribute:

{% include images-gallery.html imageCollection="addSharedAttribute" %}

To make sure that the downlink message sent to the integration, you can check the **"Events"** tab of integration:

{% include images-gallery.html imageCollection="downlinkMessage" %}

An example of a sent message and a response from ThingsBoard Edge in the terminal:

{% include images-gallery.html imageCollection="downlinkTerminal" %}

## Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
