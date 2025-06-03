---
layout: docwithnav-pe-edge
title: CoAP Integration
description: CoAP Integration Guide

add-integration:
    0:
        image: /images/pe/edge/integrations/coap/add-coap-integration-template-1.webp
        title: 'Go to the <b>Edge management > Integration templates</b> section and click the <b>“plus”</b> button to add a new integration.'
    1:
        image: /images/pe/edge/integrations/coap/add-coap-integration-template-2.webp
        title: 'On the Basic settings step, select the <b>Integration type</b> and enter the <b>Integration name</b> in the corresponding fields. Enable <b>Debug</b> mode. Click the <b>"Next"</b> button.'

text-converter:
    0:
        image: /images/pe/edge/integrations/coap/add-uplink-text-payload.webp
        
json-converter:
    0:
        image: /images/pe/edge/integrations/coap/add-uplink-json-payload.webp
        
binary-converter:
    0:
        image: /images/pe/edge/integrations/coap/add-uplink-binary-payload.webp
        
connection:
    0:
        image: /images/pe/edge/integrations/coap/add-coap-integration-connection.webp
  
assign-integration:
    0:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-4-edge.webp
        title: 'Click the <b>"Manage edge integrations"</b> button of the Edge entity.'
    1:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-5-edge.webp
        title: 'Click the <b>"+"</b> button in the top right of the corner. Specify your integration and click the <b>"Assign"</b> button to assign it to the Edge.'
    2:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-6-edge.webp
        title: 'Login to your <b>ThingsBoard Edge</b> instance and go to the <b>Integrations center > Integrations</b> section. You should see your integration. To open the <b>"Integration details"</b> window, click on it.'
    3:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-7-edge.webp
        title: 'In the <b>"Integration details"</b>" window, the <b>${{edgeIP}}</b> placeholder will be replaced with the value of the attribute.'
  
add-attribute:
    0:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-1-edge.webp
        title: 'Go to the <b>Edge management > Instances</b> section, click on the Edge instance to open the <b>Edge details</b> page and select the <b>"Attributes"</b> tab. To add a new <b>server attribute</b> to Edge, click the <b>"Add"</b> button (the + icon) .'
    1:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-2-edge.webp
        title: 'Enter the name of the attribute (<i>i.g. "edgeIp"</i>) and use the <b>Edge IP address</b> and <b>CoAP bind port</b> in the following format: <b>host:port</b>. Then, click the <b>"Add"</b> button.'
    2:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-3-edge.webp
        title: 'Confirm the added <b>"edgeIP"</b> server attribute to the Edge.'

coap-converter-binary-events:
    0:
        image: /images/pe/edge/integrations/coap/converter-events-coap-1-edge.webp
        title: 'Go to the <b>Integrations center > Data converters</b> section, click the uplink converter to open <b>"Data converter details"</b> window, and go to the <b>"Events"</b> tab. There you will find an uplink message.'
    1:
        image: /images/pe/edge/integrations/coap/converter-events-coap-2-edge.webp
        title: 'To see the incoming message to the converter, click the three dots in the <b>&#39;In&#39;</b> column.'
    2:
        image: /images/pe/edge/integrations/coap/converter-events-coap-3-edge.webp
        title: 'To see the outgoing message from the converter, click the three dots in the <b>&#39;Out&#39;</b> column.'

coap-converter-json-events:
    0:
        image: /images/pe/edge/integrations/coap/converter-events-coap-1-edge.webp
        title: 'Go to the <b>Integrations center > Data converters</b> section, click on the uplink converter to open the <b>"Data converter details"</b> window, and go to the <b>"Events"</b> tab. There you will find an uplink message.'
    1:
        image: /images/pe/edge/integrations/coap/converter-events-coap-2-edge.webp
        title: 'To see the incoming message to the converter, click the three dots in the <b>&#39;In&#39;</b> column.'
    2:
        image: /images/pe/edge/integrations/coap/converter-events-coap-3-edge.webp
        title: 'To see the outgoing message from the converter, click the three dots in the <b>&#39;Out&#39;</b> column.'
    
coap-converter-text-events:
    0:
        image: /images/pe/edge/integrations/coap/converter-events-coap-1-edge.webp
        title: 'Go to the <b>Integrations center > Data converters</b> section, click on the uplink converter to open the <b>"Data converter details"</b> window, and go to the <b>"Events"</b> tab. There you will find an uplink message.'
    1:
        image: /images/pe/edge/integrations/coap/converter-events-coap-2-edge.webp
        title: 'To see the incoming message to the converter, click the three dots in the <b>&#39;In&#39;</b> column.'
    2:
        image: /images/pe/edge/integrations/coap/converter-events-coap-3-edge.webp
        title: 'To see the outgoing message from the converter, click the three dots in the <b>&#39;Out&#39;</b> column.'
        
device-text:
    0:
        image: /images/pe/edge/integrations/coap/device-coap-1-edge.webp

device-json:
    0:
        image: /images/pe/edge/integrations/coap/device-coap-1-edge.webp

device-binary:
    0:
        image: /images/pe/edge/integrations/coap/device-coap-1-edge.webp

events-text:
    0:
        image: /images/pe/edge/integrations/coap/integration-events-coap-1-edge.webp

events-json:
    0:
        image: /images/pe/edge/integrations/coap/integration-events-coap-1-edge.webp

events-binary:
    0:
        image: /images/pe/edge/integrations/coap/integration-events-coap-1-edge.webp

---

* TOC
{:toc}

{% assign integrationName = "CoAP" %}
{% assign integrationUrl = "coap" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

**CoAP Integration** allows streaming data from devices that use a **CoAP** protocol to connect to **ThingsBoard Edge** and converts payloads of these devices into the **ThingsBoard Edge** format.

To learn more, please review the integration diagram.

![image](/images/user-guide/integrations/coap-integration.svg){: style="display: block; margin: auto"}

### Prerequisites

This tutorial explains how to configure the **CoAP integration** with the **NO SECURE** security mode.

* To simulate a CoAP device, please install the [coap-client](http://manpages.ubuntu.com/manpages/focal/man5/coap-client.5.html){: target="_blank"}.
This utility simulates a **CoAP client** that connects to the **CoAP integration**.

```bash
sudo apt update
sudo apt install libcoap2-bin
```
{: .copy-code}

* To verify that the coap-client utility is installed, run: 

```bash
coap-client --version
```
{: .copy-code}

* For example, consider a sensor that transmits temperature and humidity values periodically.
The sensor device **SN-001** publishes its temperature and humidity readings to the CoAP Integration at **[coap://10.7.3.0](coap://10.7.3.0){: target="_blank"}**.
Here, 10.7.3.0 represents the **IP address** of the **ThingsBoard Edge** within the local network. 
Replace this address with the **actual IP** of the relevant **Edge** instance in the target environment.

For demonstration purposes, it is assumed that the device can transmit data using three different payload types:
- The **Text** payload is:
```text
SN-001,default,temperature,25.7,humidity,69
```

- The **JSON** payload is:
```json
{
  "deviceName": "SN-001",
  "deviceType": "default",
  "temperature": 25.7,
  "humidity": 69
}
```

- The **Binary** payload (in HEX string):
```text
\x53\x4e\x2d\x30\x30\x31\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x36\x39
``` 
  Here is the description of the bytes in this payload:
    - **0-5** bytes - **\x53\x4e\x2d\x30\x30\x31:** The device name. If we convert it to text, it is **SN-001**;
    - **6-12** bytes - **\x64\x65\x66\x61\x75\x6c\x74:** The device type. If we convert it to text, it is **default**;
    - **13-16** bytes - **\x32\x35\x2e\x37:** The temperature telemetry. If we convert it to text, it is **25.7**;
    - **17-18** bytes - **\x36\x39:** The humidity telemetry. If we convert it to text, it is **69**;

{% capture note-payload %}
The payload type selection should be based on the device's capabilities and the intended use case.
{% endcapture %}
{% include templates/info-banner.md content=note-payload %}

### Create the integration and the converter templates

Only the **ThingsBoard Professional Edition** creates converters and integration templates.

So please use [**ThingsBoard Cloud**](https://thingsboard.cloud/signup){: target="_blank"} or [**install**](/docs/user-guide/install/pe/installation-options/){: target="_blank"} your own platform instance to log in as a **Tenant administrator**.

#### Basic settings

To add the **CoAP integration**:

{% include images-gallery.html imageCollection="add-integration" showListImageTitles="true" %}

{% include templates/edge/integrations/debug-mode-info.md %}

#### Uplink data converter

The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard can consume.
**deviceName** and **deviceType** are required, while **attributes** and **telemetry** are optional.
**Attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

For this example, use the code below.

{% include templates/tbel-vs-js.md %}

Select the device payload type to for the decoder configuration:

{% capture uplinkpayloadedge %}
Text payload<br>%,%text%,%templates/edge/integrations/coap/coap-uplink-converter-tbel-text.md%br%
JSON payload<br>%,%json%,%templates/edge/integrations/coap/coap-uplink-converter-tbel-json.md%br%
Binary payload<br>%,%binary%,%templates/edge/integrations/coap/coap-uplink-converter-tbel-binary.md{% endcapture %}
{% include content-toggle.html content-toggle-id="coapintegartionuplinkpayloadedge" toggle-spec=uplinkpayloadedge %}

#### Connection

- Enter the **IP address of your Edge instance** (host) and the **CoAP binding port** in format `host:port` as the **Base URL**. 
- Alternatively, use the placeholder **$\{\{ATTRIBUTE_KEY\}\}** substitute the integration field with an attribute value from a specific Edge entity. In this example, the placeholder **$\{\{edgeIp\}\}** is used for the **Base URL**.
- Click the **"Add"** button to create the integration.

{% include images-gallery.html imageCollection="connection" %}

### Add the attribute to the Edge

After creating the converter and integration templates, the integration template can be assigned to the **Edge** instance.

Since the placeholder **$\{\{edgeIp\}\}** is used in the integration configuration, it is necessary to add the **edgeIp** attribute to the **Edge** instance first.

Use the **IP address** of the **Edge** instance and the **CoAP binding port** as the **edgeIP** attribute (_e.g., 10.7.3.0:15683_).
Once the attribute is added, the integration can be assigned.

{% include images-gallery.html imageCollection="add-attribute" showListImageTitles="true" %}

### Assign the integration to the Edge.

To assign the integration to the Edge, on the **Edge management > Instances** section:

{% include images-gallery.html imageCollection="assign-integration" showListImageTitles="true" %}

### Send an uplink message

Once the CoAP Integration has been created, the CoAP server registers appropriate resources, and then it waits for data from the devices.

To send the uplink message:
* Log in to **ThingsBoard Edge** and go to the **Integrations center > Integrations** section.
* Click on the **CoAP integration**. 
* Copy the **CoAP endpoint URL** and insert it into the uplink message.

Select the device payload type:

{% capture senduplink %}
Text payload<br>%,%text%,%templates/edge/integrations/coap/coap-send-uplink-text.md%br%
JSON payload<br>%,%json%,%templates/edge/integrations/coap/coap-send-uplink-json.md%br%
Binary payload<br>%,%binary%,%templates/edge/integrations/coap/coap-send-uplink-binary.md{% endcapture %}
{% include content-toggle.html content-toggle-id="coapintegrationsenduplink" toggle-spec=senduplink %}

### Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
