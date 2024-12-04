* TOC
{:toc}

## Overview

In ThingsBoard, **device attributes** are key-value pairs associated with devices. They are used to store configuration settings, metadata, or other relevant information. 

Subscribing to device attributes enables clients to receive updates when these attributes change. The subscription methods vary based on the attribute type and the communication protocol used.

Attributes are categorized into three types:
* **Server-side Attributes:** Set and used exclusively by the server. Can be configured via User Interface (UI) or REST API.
* **Shared Attributes:** Devices can subscribe to updates to receive real-time notifications when the server modifies them. Can be configured via UI or REST API.
* **Client-side Attributes:** Set by the device and stored on the server. Can only be read via UI or REST API.

For more detailed information and examples, please refer to the ThingsBoard documentation on [Working with IoT Device Attributes](/docs/{{peDocsPrefix}}user-guide/attributes/){: target="_blank"}.

The following guide explains real-time, bidirectional communication between your device and the **ThingsBoard Cloud** via **ThingsBoard Edge**.

## Prerequisites

* The **ThingsBoard Cloud** or locally hosted [Server](/docs/{{peDocsPrefix}}user-guide/install/installation-options/){: target="_blank"}.
* The installed **ThingsBoard Edge** with network access.
* A **Device** capable of connecting to **ThingsBoard Edge** via [MQTT](/docs/{{peDocsPrefix}}reference/mqtt-api/){: target="_blank"}, [HTTP](/docs/{{peDocsPrefix}}reference/http-api/){: target="_blank"}, or [CoAP](/docs/{{peDocsPrefix}}reference/coap-api/){: target="_blank"}.

## Step 1. Configure a Rule Chain for the Edge

To automatically route messages (data or attributes) from the device to the **ThingsBoard Cloud**, configure the rule chain for the **ThingsBoard Edge**:

{% include images-gallery.html imageCollection="routeMessagesToCloud" showListImageTitles="true" %}

## Step 2. Configure a Rule Chain for the Cloud

To send back some attributes update message to the Edge, modify root rule chain on the cloud. Once the attribute update message will arrive to the edge you should see this message on the device.

{% include images-gallery.html imageCollection="backToEdge" showListImageTitles="true" %}

To rewrite and return received data back to Edge, add the following script into the **"script"** node:
```bash
// POST PROCESSING LOGIC
msg = {"attribute1_result": "value1_result"};
metadata = {};

return {msg: msg, metadata: metadata, msgType: msgType};
```
{: .copy-code}

## Step 3. Subscribe to Device Attributes Change And Publish Device Attributes Message

The procedure for subscribing to the **Device Attribute Changes** and subsequently publishing the **Device Attributes Message** depends on the protocol used. There are  the most commonly used protocols for basic telemetry and attribute updates in IoT applications:

{% capture  deviceConnectivityAPI %}
MQTT%,%MQTT%,%/templates/edge/user-guide/mqtt-subscribe-to-attribute.md%br%
HTTP%,%HTTP%,%/templates/edge/user-guide/http-subscribe-to-attribute.md%br%
CoAP%,%CoAP%,%/templates/edge/user-guide/coap-subscribe-to-attribute.md%br%{% endcapture %}
{% include content-toggle.liquid content-toggle-id="deviceConnectivityAPI" toggle-spec=deviceConnectivityAPI %}

## Step 4. Confirm the Results

Confirm the received and pushed attributes:
{% include images-gallery.html imageCollection="terminal" showListImageTitles="true" %}
{% include images-gallery.html imageCollection="checkResultOnDevice" showListImageTitles="true" %}
{% include images-gallery.html imageCollection="checkResultOnEdge" showListImageTitles="true" %}
{% include images-gallery.html imageCollection="checkResultOnCloud" showListImageTitles="true" %}


## Next Steps

{% include templates/edge/guides-banner-edge.md %}

