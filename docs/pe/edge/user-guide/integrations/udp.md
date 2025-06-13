---
layout: docwithnav-pe-edge
title: UDP Integration
description: UDP Integration Guide

addConverter:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/add-converter-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/add-converter-step-2.webp

modifyConverter:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/modify-converter-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/modify-converter-step-2.webp

addDownlink:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/add-downlink-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/add-downlink-step-2.webp

addIntegration:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/add-integration-template-step-0.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/add-integration-template-step-1.webp
    2:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/add-integration-template-step-2.webp
    3:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/add-integration-template-step-3.webp
    4:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/add-integration-template-step-4.webp

downlinkRule:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/downlink-rule-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/downlink-rule-step-2.webp

assignIntegration:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/assign-integration-step-1.webp
        title: 'Go to the <b>Edge management > Instances</b> section and click the <b>Manage edge integrations</b> button.'
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/assign-integration-step-2.webp
        title: 'On the Integration page, click the <b>"Assign to edge"</b> button. In the <b>"Assign the Integration to the Edge"</b> pop-up window, select the integration from the drop-down menu and click the <b>"Assign"</b> button.'
    2:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/assign-integration-step-3.webp
        title: 'Login to your <b>ThingsBoard Edge</b> instance and go to the <b>Integrations center > Integrations</b> section. Confirm the <b>UDP integration</b> on the <b>Edge</b>.'

sendUplink:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/send-uplink-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/send-uplink-step-2.webp

device:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/device.webp

converterEvents:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/converter-events-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/converter-events-step-2.webp
    2:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/converter-events-step-3.webp

addSharedAttribute:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/add-shared-attribute.webp

downlinkMessage:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/downlink-message.webp

downlinkTerminal:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/udp/downlink-terminal.webp

---

* TOC
{:toc}

{% assign integrationName = "UDP" %}
{% assign integrationUrl = "udp" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

### Overview

{% include templates/edge/integrations/tcp-udp/overview.md %}

{% include templates/edge/integrations/tcp-udp/remote-only.md %}

To learn more, review the integration diagram:

![image](https://img.thingsboard.io/user-guide/integrations/udp-integration.svg){: style="display: block; margin: auto"}

### Prerequisites

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

- **Hex:** The payload is a hexadecimal string:
```text 
534e2d30303164656661756c7432352e373639
```
  Here is the description of the bytes in this payload:
    - **0-5** bytes: **534e2d303031** - The device name. If we convert it to the text, it is **SN-001**;
    - **6-12** byte: **64656661756c74** - The device type. If we convert it to the text, it is **default**;
    - **13-16** byte: **32352e37** - The temperature telemetry. If we convert it to the text, it is **25.7**;
    - **17-18** byte: **3639** - The humidity telemetry. If we convert it to the text, it is **69**;

Based on your device capabilities and business cases, you can choose **the payload type**:

{% assign integrationPort = "11560" %}
{% include templates/edge/integrations/tcp-udp/firewall.md %}

### Create Converter templates

To create **Converter** and **Integration templates**, log in to the **Cloud** instance as **Tenant administrator**.

#### Uplink Converter template

Before creating the **Integration template**, create an Uplink and Downlink converter templates in **Converters templates** section.

The **uplink data converter** is needed to convert the incoming data from the device into the format required for display on **ThingsBoard Edge**.
* Log in to the **Cloud** and go to the **Edge management > Converter templates** section. To create a Converter template, click the **"Add data converter"** button (the **+** icon) and select the **"Create new converter"** option.
* In the **"Add data converter"** pop-up window:
  * **Name:** Enter the name of the data converter.
  * **Type:** Select the **"Uplink"** converter type from the drop-down menu.
  * To view the events, enable **Debug** mode.
  * **function Decoder:** Enter a script to parse and transform data.
  * Click the **"Add"** button.

{% include images-gallery.html imageCollection="addConverter" %}

{% include templates/edge/integrations/debug-mode-info.md %}

Select the **device payload** type to use for a decoder configuration:

{% capture uplinkpayload %}
Text payload<br>%,%text%,%templates/integration/udp/udp-uplink-converter-text.md%br%
JSON payload<br>%,%json%,%templates/integration/udp/udp-uplink-converter-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/udp/udp-uplink-converter-binary.md%br%
Hex payload<br>%,%hex%,%templates/integration/udp/udp-uplink-converter-hex.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpintegartionuplinkpayload" toggle-spec=uplinkpayload %}

You can change the **function Decoder** while creating the converter or after creating it:
* If the converter has already been created, click it to open the **"Data converter details"** window.
* Click the **"Edit"** buton (the 'pencil' icon) to edit the data converter.
* Copy the configuration example or create your own converter configuration and paste it into the **"function Decoder"** field.
* To save the changes, click the **"Save"** button (the 'checkmark' icon).

{% include images-gallery.html imageCollection="modifyConverter" %}

#### Downlink Converter template

Also create the **Downlink Converter Template** in the **Converter Templates** section:
* On the **Edge management > Converter templates** section page, click the **“Add data converter”** button (the + icon) to create another **Converter template**, and select the **“Create new converter”** option.
* In the **“Add data converter”** pop-up window:
  * **Name:** Enter the name of the data converter.
  * **Type:** Select the **“Downlink”** converter type from the drop-down menu.
  * To view the events, enable **Debug** mode.
  * **function Decoder:** Enter a script to parse and transform data.
  * Click the **“Add”** button.

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

### Create Integration template

Now that the **Uplink** and **Downlink converter templates** have been created, it is possible to create the **Integration**:
* Go to the **Edge management > Integration templates** section, click the **"Add new integration"** button (the + icon) and select the **“Create new integration”** option. 
* In the **“Add integration”** pop-up window and fill out the **"Basic settings"** block:
  * **Integration type:** Select the **"UDP"** integration type from the drop-down menu.
  * **Name:** Enter the name of the integration.
* In the **"Uplink data converter"** block:
  * Select the **"Select existing"** tab.
  * **Uplink data converter:** Select the uplink data converter from the drop-down menu.
* In the **"Downlink data converter"** block:
  * Select the **"Select existing"** tab.
  * **Downlink data converter:** Select the uplink data converter from the drop-down menu.
* In the **"Connection"** block:
  * Enter the **Port** and **Size of the buffer for inbound socket (in KB)** in the corresponding fields. By default, the UDP Integration will use the port **11560**, but can be changed to any available port.
  * Enter the **Cache Size** and **Cache time to live in minutes** in the corresponding fields.
  * **Enable broadcast - integration will accept broadcast address packets:** Flag to indicate that integration accepts UDP packets sent to broadcast address.
  * **Integration key** and **Integration secret**: Copy the values to use later in the configuration.
  * **Handler Configuration:** Select the device payload type from the drop-down menu.

{% include images-gallery.html imageCollection="addIntegration" %}

{% capture execute-remotely %}
The **Execute remotely** option is selected by default and cannot be changed, the UDP Integration can only be the **remote** type.
{% endcapture %}
{% include templates/info-banner.md content=execute-remotely %}

Select the device payload type for **Handler Configuration**:

{% capture handlerconfiguration %}
Text payload<br>%,%text%,%templates/integration/udp/udp-handler-configuration-text.md%br%
JSON payload<br>%,%json%,%templates/integration/udp/udp-handler-configuration-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/udp/udp-handler-configuration-binary.md%br%
Hex payload<br>%,%hex%,%templates/integration/udp/udp-handler-configuration-hex.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpintegrationhandlerconfiguration" toggle-spec=handlerconfiguration %}

To save the Integration, click the **Add** button.

### Modify the Edge Root Rule chain for Downlinks

We can send a downlink message to the device from the **Rule chain** using the **rule node**. To send downlink via integration, modify the **Edge Root Rule chain**.

{% capture edge-4 %}
**Please note!** <br>
If you use **earlier versions of Edge**, you cannot create or edit a **Rule Chain** on the **Edge** itself. It must be configured as a template in the **Cloud (Server)**, and then assigned to the **Edge** instance.

Starting with **Edge version 4.0**, you can create and edit a **Rule Chain** on the **Edge**.
{% endcapture %}
{% include templates/info-banner.md content=edge-4 %}

For example, you can add an **integration downlink** node and set the **'Attributes Updated'** link to it.
When the device attribute changes, the downlink message is sent to the integration.

{% include images-gallery.html imageCollection="downlinkRule" %}

### Assign Integration to Edge

Once the converter and integration templates are created, we can assign the integration template to **Edge**.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

### Installing and running external UDP Integration

To install the **remote UDP Integration service** on a local or separate machine, select the corresponding platform.

{% capture key-secret-note %}
Use the **Integration key** and **Integration secret** to complete the UDP Integration configuration.
{% endcapture %}
{% include templates/info-banner.md content=key-secret-note %}

{% capture selectPlatform %}
Docker on Linux or Mac OS%,%docker%,%templates/edge/integrations/resources/docker-on-linux-mac.md%br%
Docker on Windows%,%docker-windows%,%templates/edge/integrations/resources/docker-on-windows.md%br%
Ubuntu%,%ubuntu%,%templates/edge/integrations/resources/ubuntu.md%br%
CentOS/RHEL Server%,%centos%,%templates/edge/integrations/resources/centos-rhel.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="selectPlatform" toggle-spec=selectPlatform %}

### Send an uplink message

Once the **ThingsBoard UDP Integration** has been created, the UDP server starts, and then it waits for data from the devices.

{% capture debug %}
Before you proceed, ensure that the **Debug mode is enabled**.
{% endcapture %}
{% include templates/info-banner.md content=debug %}

Select the device payload type to send the uplink message:

{% capture senduplink %}
Text payload<br>%,%text%,%templates/integration/udp/udp-send-uplink-text.md%br%
JSON payload<br>%,%json%,%templates/integration/udp/udp-send-uplink-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/udp/udp-send-uplink-binary.md%br%
Hex payload<br>%,%hex%,%templates/integration/udp/udp-send-uplink-hex.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpintegrationsenduplink" toggle-spec=senduplink %}

{% include images-gallery.html imageCollection="sendUplink" %}

To view the received time-series data, go to the **Entities > Devices** section, click the **device** and select the **"Latest telemetry"** tab:

{% include images-gallery.html imageCollection="device" %}

The received data can be viewed in the **Uplink converter**:
- Go to the **Integrations center > Data converters** section and click the **Uplink converter**.
- On the **"Data converter details"** page, select the **"Events"** tab.
- View the message details in the **"In"** and **"Out"** columns. 

{% include images-gallery.html imageCollection="converterEvents" %}

### Send the downlink message

To view the **downlink response**, send another message to the UDP integration.
Use the uplink command, but replace the **-w1** parameter with **-q120**. 
These changes will cause the **nc** utility to wait **120 seconds** for the **downlink message**.

{% capture tabspec %}send-downlink-message
send-downlink-message-text,Text payload,shell,resources/downlink/downlink-message-text.sh,/docs/pe/edge/user-guide/resources/downlink/downlink-message-text.sh
send-downlink-message-json,JSON payload,shell,resources/downlink/downlink-message-json.sh,/docs/pe/edge/user-guide/resources/downlink/downlink-message-json.sh
send-downlink-message-binary,Binary payload,shell,resources/downlink/downlink-message-binary.sh,/docs/pe/edge/user-guide/resources/downlink/downlink-message-binary.sh
send-downlink-message-hex,Hex payload,shell,resources/downlink/downlink-message-hex.sh,/docs/pe/edge/user-guide/resources/downlink/downlink-message-hex.sh{% endcapture %}
{% include tabs.html %}

After sending the **uplink command**, you have **120 seconds** to add a shared **firmware** attribute:
- Go to the **Entities > Devices** section, click the **device** to open the **"Device details"** page.
- Select the **"Attributes"** tab and the **"Shared attributes"** scope.
- To add the **firmware** attribute, click the **"Add"** button and enter the configuration parameters.

{% include images-gallery.html imageCollection="addSharedAttribute" %}

To confirm the downlink message sent to the device, go to the **Integrations center > Integrations** section, 
click the **UDP integration** and select the **"Events"** tab:

{% include images-gallery.html imageCollection="downlinkMessage" %}

The example of the message sent to the device and the response from **ThingsBoard Edge** in the terminal:

{% include images-gallery.html imageCollection="downlinkTerminal" %}

### Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
