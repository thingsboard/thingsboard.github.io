---
layout: docwithnav-pe-edge
title: TCP Integration
description: TCP Integration Guide
docsPrefix: pe/edge/

addConverter:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/add-converter-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/add-converter-step-2.webp

modifyConverter:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/modify-converter-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/modify-converter-step-2.webp

addDownlink:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/add-downlink-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/add-downlink-step-2.webp

addIntegration:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/add-integration-template-step-0.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/add-integration-template-step-1.webp
    2:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/add-integration-template-step-2.webp
    3:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/add-integration-template-step-3.webp
    4:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/add-integration-template-step-4.webp

downlinkRule:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/downlink-rule-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/downlink-rule-step-2.webp

assignIntegration:
  0:
    image: https://img.thingsboard.io/pe/edge/integrations/tcp/assign-integration-step-1.webp
    title: 'Go to the <b>Edge management > Instances</b> section and click the <b>Manage edge integrations</b> button.'
  1:
    image: https://img.thingsboard.io/pe/edge/integrations/tcp/assign-integration-step-2.webp
    title: 'On the Integration page, click the <b>"Assign to edge"</b> button. In the <b>"Assign the Integration to the Edge"</b> pop-up window, select the integration from the drop-down menu and click the <b>"Assign"</b> button.'
  2:
    image: https://img.thingsboard.io/pe/edge/integrations/tcp/assign-integration-step-3.webp
    title: 'Login to your <b>ThingsBoard Edge</b> instance and go to the <b>Integrations center > Integrations</b> section. Confirm the <b>TCP integration</b> on the <b>Edge</b>.'


sendUplink:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/send-uplink-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/send-uplink-step-2.webp

device:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/device.webp

converterEvents:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/converter-events-step-1.webp
    1:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/converter-events-step-2.webp
    2:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/converter-events-step-3.webp

addSharedAttribute:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/add-shared-attribute.webp

downlinkMessage:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/downlink-message.webp

downlinkTerminal:
    0:
        image: https://img.thingsboard.io/pe/edge/integrations/tcp/downlink-terminal.webp

---

* TOC
{:toc}

{% assign integrationName = "TCP" %}
{% assign integrationUrl = "tcp" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

### Overview

{% include templates/edge/integrations/tcp-udp/overview.md %}

{% include templates/edge/integrations/tcp-udp/remote-only.md %}

To learn more, review the integration diagram:

![image](https://img.thingsboard.io/user-guide/integrations/tcp-integration.svg){: style="display: block; margin: auto"} 

### Prerequisites

In this tutorial, we will use:

- [ThingsBoard Edge Professional Edition](/docs/pe/edge/getting-started-guides/what-is-edge/){: target="_blank"};
- **TCP Integration**: The integration that runs externally and is connected to the **ThingsBoard Edge** instance.
- **echo command**: To display a line of text, and redirect its output to the **netcat** (**nc**) utility.
- **netcat (nc) utility**: To establish TCP connections, receive data from there, and transmit it.

Let's assume that we have a sensor which is sending current temperature and humidity readings.
Our sensor device **SN-002** publishes its temperature and humidity readings to TCP Integration on **port 10560** on the machine where TCP Integration is running.

For demonstration purposes, we assume that our device is smart enough to send data in 3 different payload types:
- **Text:** The payload is 
```text
SN-002,default,temperature,25.7\n\rSN-002,default,humidity,69
```
- **JSON:** The payload is:

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

- **Binary:** The binary payload is (in HEX string):

```text
\x30\x30\x30\x30\x11\x53\x4e\x2d\x30\x30\x32\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x00\x00\x00
```
* The bytes description in this payload is following:
  * **0-3** bytes: **\x30\x30\x30\x30** - These are the "dummy" bytes. They show how to skip certain prefix bytes in your payload and are included as an example.
  * **4** byte: **\x11** - The payload length. If we convert it to decimal, it is **17**. So, in this case, our payload is limited to **17 bytes** from the incoming TCP frame.
  * **5-10** bytes: **\x53\x4e\x2d\x30\x30\x32** - The device name. If we convert it to text, it is **SN-002**.
  * **11-17** bytes: **\x64\x65\x66\x61\x75\x6c\x74** - The device type. If we convert it to text, it is **default**.
  * **18-21** bytes: **\x32\x35\x2e\x37** - The temperature telemetry. If we convert it to text, it is **25.7**.
  * **22-24** bytes: **\x00\x00\x00** - These are the "dummy" bytes. We will ignore them because the payload size is **17** bytes (from **5** to **21** byte). These bytes are included as an example.

Select the **payload type** based on your device capabilities and business cases.

{% assign integrationPort = "10560" %}
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
Text payload<br>%,%text%,%templates/integration/tcp/tcp-uplink-converter-text.md%br%
JSON payload<br>%,%json%,%templates/integration/tcp/tcp-uplink-converter-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/tcp/tcp-uplink-converter-binary.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="tcpintegartionuplinkpayload" toggle-spec=uplinkpayload %}

You can change the **function Decoder** while creating the converter or after creating it:
* If the converter has already been created, click it to open the **"Data converter details"** window.
* Click the **"Edit"** buton (the pencil icon) to edit the data converter.
* Copy the configuration example or create your own converter configuration and paste it into the **"function Decoder"** field.
* To save the changes, click the **"Save"** button (the checkmark icon).

{% include images-gallery.html imageCollection="modifyConverter" %}

#### Downlink Converter template

Also create the **Downlink Converter Template** in the **Converter Templates** section.
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
  * **Integration type:** Select the **"TCP"** integration type from the drop-down menu.
  * **Name:** Enter the name of the integration.
* In the **"Uplink data converter"** block:
  * Select the **"Select existing"** tab.
  * **Uplink data converter:** Select the uplink data converter from the drop-down menu.
* In the **"Downlink data converter"** block:
  * Select the **"Select existing"** tab.
  * **Downlink data converter:** Select the uplink data converter from the drop-down menu.
* In the **"Connection"** block:
  * **Handler Configuration:** Select the device payload type from the drop-down menu.

{% capture execute-remotely %}
The **Execute remotely** option is selected by default and cannot be changed, the TCP Integration can only be the **remote** type.
{% endcapture %}
{% include templates/info-banner.md content=execute-remotely %}

We keep other options by default, but there is a short description of them:
- **Max number of pending connects on the socket:** The maximum queue length for incoming connection indications (a request to connect) is set by the backlog parameter. If a connection indication arrives when the queue is full, the connection is denied.
- **Size of the buffer for inbound socket:** Specifies the size (in kilobytes) of the socket’s data receive buffer.
- **Size of the buffer for outbound socket:** Specifies the size (in kilobytes) of the socket’s data send buffer.
- **Enable sending of keep-alive messages on connection-oriented sockets:** When enabled, the socket will periodically send keep-alive probes across the network to the peer, to ensure that the connection remains active.
- **Forces a socket to send the data without buffering (disable Nagle's buffering algorithm):** Disables Nagle’s algorithm on the socket, ensuring that data is sent immediately rather than waiting for a larger amount of data to accumulate.

{% include images-gallery.html imageCollection="addIntegration" %}

Select the device payload type for **Handler Configuration**:

{% capture handlerconfiguration %}
Text payload<br>%,%text%,%templates/integration/tcp/tcp-handler-configuration-text.md%br%
JSON payload<br>%,%json%,%templates/integration/tcp/tcp-handler-configuration-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/tcp/tcp-handler-configuration-binary.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="tcpintegrationhandlerconfiguration" toggle-spec=handlerconfiguration %}

### Modify the Edge Root Rule chain for Downlinks

We can send a downlink message to the device from the **Rule chain** using the **rule node**. To send downlink via integration, modify the **Edge Root Rule chain**.

{% capture edge-4 %}
**Please note!** <br>
If you use **earlier versions of Edge**, you cannot create or edit a **Rule Chain** on the **Edge** itself. It must be configured as a template in the **Cloud (Server)**, and then assigned to the **Edge** instance.

Starting with **Edge version 4.0**, you can create and edit a **Rule Chain** on the **Edge**.
{% endcapture %}
{% include templates/info-banner.md content=edge-4 %}

For example, create an **integration downlink** node and set the **'Attributes updated'** link to it.
When changes are made to the device attribute, the downlink message is sent to the integration.

{% include images-gallery.html imageCollection="downlinkRule" %}

### Assign Integration to Edge

Once the converter and integration templates are created, we can assign the **Integration template** to the **Edge**.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

### Installing and running external TCP Integration

To install the remote TCP Integration service on a local or separate machine, select the appropriate platform.

{% capture key-secret-note %}
Use the **Integration key** and **Integration secret** to complete the TCP Integration configuration.
{% endcapture %}
{% include templates/info-banner.md content=key-secret-note %}

{% capture selectPlatform %}
Docker on Linux or Mac OS%,%docker%,%templates/edge/integrations/resources/docker-on-linux-mac.md%br%
Docker on Windows%,%docker-windows%,%templates/edge/integrations/resources/docker-on-windows.md%br%
Ubuntu%,%ubuntu%,%templates/edge/integrations/resources/ubuntu.md%br%
CentOS/RHEL Server%,%centos%,%templates/edge/integrations/resources/centos-rhel.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="selectPlatform" toggle-spec=selectPlatform %}

### Send uplink message

Once the ThingsBoard TCP Integration has been created, the **TCP server** starts, and then it waits for data from the devices.

To send the uplink message, select the device payload type:

{% capture senduplink %}
Text payload<br>%,%text%,%templates/integration/tcp/tcp-send-uplink-text.md%br%
JSON payload<br>%,%json%,%templates/integration/tcp/tcp-send-uplink-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/tcp/tcp-send-uplink-binary.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="tcpintegrationsenduplink" toggle-spec=senduplink %}

{% include images-gallery.html imageCollection="sendUplink" %}

To view the received time-series data, go to the **Entities > Devices** section, click the **device** and select the **"Latest telemetry"** tab:

{% include images-gallery.html imageCollection="device" %}

The received data can be viewed in the **Uplink converter**:
- Go to the **Integrations center > Data converters** section and click the **Uplink converter**.
- On the **"Data converter details"** page, select the **"Events"** tab.
- View the message details in the **"In"** and **"Out"** columns.

{% include images-gallery.html imageCollection="converterEvents" %}

### Send a downlink message

To check the downlink functionality. Let's add the **firmware** shared attribute:

* Go to the **Entities > Devices** section, click the device to open the **“Device details”** page.
* Select the **“Attributes”** tab and the **“Shared attributes”** scope.
* To add the **firmware** attribute, click the **“Add”** button and enter the configuration parameters.

{% include images-gallery.html imageCollection="addSharedAttribute" %}

To confirm the downlink message sent to the device, go to the **Integrations center > Integrations** section, 
click the **TCP integration** and select the **“Events”** tab:

{% include images-gallery.html imageCollection="downlinkMessage" %}

To see the downlink response, select and send another message to the **TCP integration**:

{% capture tabspec %}send-downlink-message-tcp
send-downlink-message-text-tcp,Text payload,shell,resources/downlink-tcp/downlink-message-text-tcp.sh,/docs/pe/edge/user-guide/resources/downlink-tcp/downlink-message-text-tcp.sh
send-downlink-message-text-tcp-multi,<div style="text-align:center;">Text payload<br><small>(multiple messages)</small></div>,shell,resources/downlink-tcp/downlink-message-text-tcp-multi.sh
send-downlink-message-json-tcp,JSON payload,shell,resources/downlink-tcp/downlink-message-json-tcp.sh,/docs/pe/edge/user-guide/resources/downlink-tcp/downlink-message-json-tcp.sh
send-downlink-message-binary-tcp,Binary payload,shell,resources/downlink-tcp/downlink-message-binary-tcp.sh,/docs/pe/edge/user-guide/resources/downlink-tcp/downlink-message-binary-tcp.sh{% endcapture %}
{% include tabs.html %}

An example of the message sent to the device and the response from **ThingsBoard Edge** in the terminal:

{% include images-gallery.html imageCollection="downlinkTerminal" %}

### Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
