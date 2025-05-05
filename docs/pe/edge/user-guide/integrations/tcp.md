---
layout: docwithnav-pe-edge
title: TCP Integration
description: TCP Integration Guide

addConverter:
    0:
        image: /images/pe/edge/integrations/tcp/add-converter-step-1.webp
    1:
        image: /images/pe/edge/integrations/tcp/add-converter-step-2.webp

modifyConverter:
    0:
        image: /images/pe/edge/integrations/tcp/modify-converter-step-1.webp
    1:
        image: /images/pe/edge/integrations/tcp/modify-converter-step-2.webp

addDownlink:
    0:
        image: /images/pe/edge/integrations/tcp/add-downlink-step-1.webp
    1:
        image: /images/pe/edge/integrations/tcp/add-downlink-step-2.webp

addIntegration:
    0:
        image: /images/pe/edge/integrations/tcp/add-integration-template-step-0.webp
    1:
        image: /images/pe/edge/integrations/tcp/add-integration-template-step-1.webp
    2:
        image: /images/pe/edge/integrations/tcp/add-integration-template-step-2.webp
    3:
        image: /images/pe/edge/integrations/tcp/add-integration-template-step-3.webp
    4:
        image: /images/pe/edge/integrations/tcp/add-integration-template-step-4.webp

downlinkRule:
    0:
        image: /images/pe/edge/integrations/tcp/downlink-rule-step-1.webp
    1:
        image: /images/pe/edge/integrations/tcp/downlink-rule-step-2.webp

assignIntegration:
  0:
    image: /images/pe/edge/integrations/tcp/assign-integration-step-1.webp
    title: 'Go to the <b>Edge management > Instances</b> section and click the <b>Manage edge integrations</b> button.'
  1:
    image: /images/pe/edge/integrations/tcp/assign-integration-step-2.webp
    title: 'On the Integration page, click the <b>"Assign to edge"</b> button. In the <b>"Assign the Integration to the Edge"</b> pop-up window, select the integration from the drop-down menu and click the <b>"Assign"</b> button.'
  2:
    image: /images/pe/edge/integrations/tcp/assign-integration-step-3.webp
    title: 'Login to your <b>ThingsBoard Edge</b> instance and go to the <b>Integrations center > Integrations</b> section. Confirm the <b>TCP integration</b> on the <b>Edge</b>.'


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

### Overview

{% include templates/edge/integrations/tcp-udp/overview.md %}

{% include templates/edge/integrations/tcp-udp/remote-only.md %}

To learn more, review the integration diagram:

![image](/images/user-guide/integrations/tcp-integration.svg){: style="display: block; margin: auto"} 

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

Converter and Integration templates are created on the **Cloud**, so please log in to the **Cloud** instance as a **Tenant administrator**.

#### Uplink Converter template

Before creating the **Integration template**, you need to create an Uplink and Downlink converter templates on the **Converters templates** page.
Uplink is required to convert incoming data from the device into the required format for display on **ThingsBoard Edge**.

Click the **"plus"** button and select the "**Create new converter**" option. To view the events, enable **Debug** mode.
Enter a script to parse and transform data in the **"function decoder"** field.

{% include images-gallery.html imageCollection="addConverter" %}

{% include templates/edge/integrations/debug-mode-info.md %}

Select the device payload type to for decoder configuration:

{% capture uplinkpayload %}
Text payload<br>%,%text%,%templates/integration/tcp/tcp-uplink-converter-text.md%br%
JSON payload<br>%,%json%,%templates/integration/tcp/tcp-uplink-converter-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/tcp/tcp-uplink-converter-binary.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="tcpintegartionuplinkpayload" toggle-spec=uplinkpayload %}

During or after creating the converter, you can change the decoder function:
If the converter has already been created, click the **"Edit"** button (the "pencil" icon) to edit it.
Copy the converter configuration example (or your own configuration) and paste it into the decoder function.
Save the changes by clicking on the **"Save"** button (the "checkmark" icon).

{% include images-gallery.html imageCollection="modifyConverter" %}

#### Downlink Converter template

Create the Downlink on the **Converter templates** page as well. To see the events, check the **Debug** checkbox.

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

Now that the Uplink and Downlink converter templates have been created, you can create an integration.
Go to the **Integration templates** section and click the **Add new integration** button. 
Name it **"TCP Integration"**, select the **TCP** type, enable **Debug** mode, and add the recently created Uplink and Downlink converters from the corresponding drop-down menus.

{% include images-gallery.html imageCollection="addIntegration" %}

As mentioned above, the **Execute Remotely** option is selected by **default** and cannot be changed—**TCP Integration** is always configured as a **remote type**.

Record the **Integration key** and **Integration secret**. These values will be used later in the configuration of the remote TCP Integration itself.

By default, TCP Integration will use the port **10560**, but you can change this to any available port in your case.

We leave other options by default, but there is short description of them:
- **Max number of pending connects on the socket:** The maximum queue length for incoming connection indications (a request to connect) is set to the backlog parameter. If a connection indication arrives when the queue is full, the connection will be denied.
- **Size of the buffer for inbound socket:** Specifies the size (in kilobytes) of the socket’s data receive buffer.
- **Size of the buffer for outbound socket:** Specifies the size (in kilobytes) of the socket’s data send buffer.
- **Enable sending of keep-alive messages on connection-oriented sockets:** When enabled, the socket will periodically send keep-alive probes across the network to the peer, ensuring that the connection remains active.
- **Forces a socket to send the data without buffering (disable Nagle's buffering algorithm):** Disables Nagle’s algorithm on the socket, ensuring that data is sent immediately rather than waiting for a larger amount of data to accumulate.

Select the device payload type for **Handler Configuration**:

{% capture handlerconfiguration %}
Text payload<br>%,%text%,%templates/integration/tcp/tcp-handler-configuration-text.md%br%
JSON payload<br>%,%json%,%templates/integration/tcp/tcp-handler-configuration-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/tcp/tcp-handler-configuration-binary.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="tcpintegrationhandlerconfiguration" toggle-spec=handlerconfiguration %}

### Modify Edge Root Rule chain for Downlinks

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

#### Installing and running external TCP Integration

See the [Remote Integration guide](/docs/pe/edge/user-guide/integrations/remote-integrations){: target="_blank"} and install the **TCP Integration service** locally or on a separate machine.

Please use the **Integration key** and **Integration secret** from the above section for your TCP Integration configuration.

### Send uplink message

Once the ThingsBoard TCP Integration is created, the TCP server is started, and then waits for data from the devices.

To send the uplink message, select the device payload type:

{% capture senduplink %}
Text payload<br>%,%text%,%templates/integration/tcp/tcp-send-uplink-text.md%br%
JSON payload<br>%,%json%,%templates/integration/tcp/tcp-send-uplink-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/tcp/tcp-send-uplink-binary.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="tcpintegrationsenduplink" toggle-spec=senduplink %}

{% include images-gallery.html imageCollection="sendUplink" %}

The created device with data can be seen in the **Device groups > All** section of the **Edge** instance:

{% include images-gallery.html imageCollection="device" %}

The received data can be viewed in the Uplink converter. In the **'In'** and **'Out'** blocks of the Events tab:

{% include images-gallery.html imageCollection="converterEvents" %}

### Send downlink message

Now let's check the downlink functionality. Let's add the **firmware** shared attribute:

{% include images-gallery.html imageCollection="addSharedAttribute" %}

To ensure that the downlink message is sent to the integration, you can check the **"Events"** tab of the integration:

{% include images-gallery.html imageCollection="downlinkMessage" %}

Now we need to send another message to the TCP integration and see the downlink response.
To send the message, use the same command you used before.

See an example of the message that was sent and the response from the **ThingsBoard Edge** in the terminal:

{% include images-gallery.html imageCollection="downlinkTerminal" %}

### Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
