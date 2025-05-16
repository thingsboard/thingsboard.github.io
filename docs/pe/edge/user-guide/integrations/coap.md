---
layout: docwithnav-pe-edge
title: CoAP Integration
description: CoAP Integration Guide

assign-integration:
    0:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-1-edge.png
        title: 'Go to the <b>Edge management > Instances</b> section, click your edge instance to open the <b>Edge details</b> window, and navigate to the <b>"Attributes"</b> tab. Click the <b>"plus"</b> icon to add new <b>server attribute</b> to Edge.'
    1:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-2-edge.png
        title: 'Name it (<i>i.g. "edgeIp"</i>) and use the <b>Edge IP address</b> and <b>CoAP bind port</b> in the following format: &#39;host:port&#39;. Then, click the <b>"Add"</b> button.'
    2:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-3-edge.png
        title: 'View the added the server attribute <b>"edgeIP"</b> to the edge.'
    3:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-4-edge.png
        title: 'Now, click <b>"Manage edge integrations"</b> button of the Edge entity.'
    4:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-5-edge.png
        title: 'Click the <b>"+"</b> button in the top right of the corner. Specify your integration and click the <b>"Assign"</b> button to assign it to the Edge.'
    5:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-6-edge.png
        title: 'Login to your <b>ThingsBoard Edge</b> instance and go to the <b>Integrations center > Integrations</b> section. You should see your integration. To open the <b>"Integration details"</b> window, click on it.'
    6:
        image: /images/pe/edge/integrations/coap/assign-coap-integration-7-edge.png
        title: 'In the <b>"Integration details"</b>" window, the <b>${{edgeIP}}</b> placeholder will be replaced with the value of the attribute.'

coap-converter-binary-events:
    0:
        image: /images/pe/edge/integrations/coap/converter-events-coap-1-edge.png
        title: 'Go to the <b>Integrations center > Data converters</b> section, click the uplink converter to open <b>"Data converter details"</b> window, and go to the <b>"Events"</b> tab. There you will find an uplink message.'
    1:
        image: /images/pe/edge/integrations/coap/converter-events-coap-binary-payload-2-edge.png
        title: 'To see the incoming message to the converter, click the three dots in the <b>&#39;In&#39;</b> column.'
    2:
        image: /images/pe/edge/integrations/coap/converter-events-coap-3-edge.png
        title: 'To see the outgoing message from the converter, click the three dots in the <b>&#39;Out&#39;</b> column.'

coap-converter-json-events:
    0:
        image: /images/pe/edge/integrations/coap/converter-events-coap-1-edge.png
        title: 'Go to the <b>Integrations center > Data converters</b> section, click on the uplink converter to open the <b>"Data converter details"</b> window, and go to the <b>"Events"</b> tab. There you will find an uplink message.'
    1:
        image: /images/pe/edge/integrations/coap/converter-events-coap-json-payload-2-edge.png
        title: 'To see the incoming message to the converter, click the three dots in the <b>&#39;In&#39;</b> column.'
    2:
        image: /images/pe/edge/integrations/coap/converter-events-coap-3-edge.png
        title: 'To see the outgoing message from the converter, click the three dots in the <b>&#39;Out&#39;</b> column.'
    
coap-converter-text-events:
    0:
        image: /images/pe/edge/integrations/coap/converter-events-coap-1-edge.png
        title: 'Go to the <b>Integrations center > Data converters</b> section, click on the uplink converter to open the <b>"Data converter details"</b> window, and go to the <b>"Events"</b> tab. There you will find an uplink message.'
    1:
        image: /images/pe/edge/integrations/coap/converter-events-coap-text-payload-2-edge.png
        title: 'To see the incoming message to the converter, click the three dots in the <b>&#39;In&#39;</b> column.'
    2:
        image: /images/pe/edge/integrations/coap/converter-events-coap-3-edge.png
        title: 'To see the outgoing message from the converter, click the three dots in the <b>&#39;Out&#39;</b> column.'

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

In this tutorial, we will show you how to configure the **CoAP integration** with **NO SECURE** security mode selected. 

To simulate CoAP device, please install [coap-client](http://manpages.ubuntu.com/manpages/focal/man5/coap-client.5.html){: target="_blank"}. This utility is intended to simulate CoAP client that will connect to CoAP integration.

Let's assume that we have a sensor which is sending current temperature and humidity readings.
Our sensor device **SN-001** publishes its temperature and humidity readings to CoAP Integration on **coap://10.7.3.0** URL - *10.7.3.0* is the IP address of the ThingsBoard Edge in local network. In your specific case, please use the IP address of **your** edge instance.

For demo purposes, we assume that our device is smart enough to send data in 3 different payload types:
- **Text** - in this case payload is:
```text
SN-001,default,temperature,25.7,humidity,69
```

- **JSON** - in this case payload is:
```json
{
  "deviceName": "SN-001",
  "deviceType": "default",
  "temperature": 25.7,
  "humidity": 69
}
```

- **Binary** - in this case, the payload looks like this (in HEX string):
```text
\x53\x4e\x2d\x30\x30\x31\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x36\x39
``` 
  Here is the description of the bytes in this payload:
    - **0-5** bytes - **\x53\x4e\x2d\x30\x30\x31** - device name. If we convert it to text - **SN-001**;
    - **6-12** bytes - **\x64\x65\x66\x61\x75\x6c\x74** - device type. If we convert it to text - **default**;
    - **13-16** bytes - **\x32\x35\x2e\x37** - temperature telemetry. If we convert it to text - **25.7**;
    - **17-18** bytes - **\x36\x39** - humidity telemetry. If we convert it to text - **69**;

You can use payload type based on your device capabilities and business cases.

### Create converter and integration templates

Only the **ThingsBoard Professional Edition** creates converters and integration templates.
So please use [**ThingsBoard Cloud**](https://thingsboard.cloud/signup){: target="_blank"} or [**install**](/docs/user-guide/install/pe/installation-options/){: target="_blank"} your own platform instance to log in as a **Tenant administrator**.

To add the **MQTT integration**, follow the steps below:

- Go to the **Edge management > Integration templates** section and click the **"plus"** button to add a new integration. Select the type '**MQTT**'. Name it **"Edge MQTT integration"**. Then click **"Next"**.

{% include templates/edge/integrations/debug-mode-info.md %}

![image](/images/pe/edge/integrations/coap/add-coap-integration-template-1-edge.png)

- Create an **Uplink data converter**.

The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard can consume.
**deviceName** and **deviceType** are required, while **attributes** and **telemetry** are optional.
**Attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

For this example, use the code below.

{% include templates/tbel-vs-js.md %}

Choose device payload type to for decoder configuration:

{% capture uplinkpayloadedge %}
Text payload<br>%,%text%,%templates/edge/integrations/coap/coap-uplink-converter-tbel-text.md%br%
JSON payload<br>%,%json%,%templates/edge/integrations/coap/coap-uplink-converter-tbel-json.md%br%
Binary payload<br>%,%binary%,%templates/edge/integrations/coap/coap-uplink-converter-tbel-binary.md{% endcapture %}
{% include content-toggle.html content-toggle-id="coapintegartionuplinkpayloadedge" toggle-spec=uplinkpayloadedge %}

After adding the uplink converter, click "Next".

- Finally, we go to the "**Connection**" step:

  - Enter **IP address of your Edge instance** (host) and **CoAP binding port** in format: 'host:port' as '**Base URL**'. Or, you can use placeholder **$\{\{ATTRIBUTE_KEY\}\}** to substitute integration field with attribute value from specific Edge entity.
  In this example, we will use the placeholder **$\{\{edgeIp\}\}** for '**Base URL**';
  - Click "Add" button to create the integration.

![image](/images/pe/edge/integrations/coap/add-coap-integration-template-3-edge.png)

### Assign Integration to Edge

Once converter and integration templates are created, we can assign Integration template to Edge.
Because we are using placeholder **$\{\{edgeIp\}\}** in the integration configuration, we need to add attribute **edgeIp** to edge first.
You need to provide **IP address of your Edge instance** and the **CoAP binding port** as **edgeIP** attribute. In my case, it is: '10.7.3.0:15683'.
Once attribute added, we are ready to assign integration and verify that it's added.

{% include images-gallery.html imageCollection="assign-integration" showListImageTitles="true" %}

### Send uplink message

Once CoAP Integration has been created, the CoAP server register appropriate resources, and then it waits for data from the devices.
Let's log in to ThingsBoard **Edge** and go to the **Integrations** page. Find your CoAP integration and click on it. There you can find the CoAP endpoint URL. Click on the icon to copy the url.

Choose device payload type to send uplink message:

{% capture senduplink %}
Text payload<br>%,%text%,%templates/edge/integrations/coap/coap-send-uplink-text.md%br%
JSON payload<br>%,%json%,%templates/edge/integrations/coap/coap-send-uplink-json.md%br%
Binary payload<br>%,%binary%,%templates/edge/integrations/coap/coap-send-uplink-binary.md{% endcapture %}
{% include content-toggle.html content-toggle-id="coapintegrationsenduplink" toggle-spec=senduplink %}

### Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
