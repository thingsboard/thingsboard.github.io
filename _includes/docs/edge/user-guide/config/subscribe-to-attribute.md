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

## Subscribe to Device Attributes Change And Publish Device Attributes Message

The procedure for subscribing to the **Device Attributes Change** and subsequently publishing the **Device Attributes Message** is dependent on the protocol in use. There are  the most commonly used protocols for basic telemetry and attribute updates in IoT applications:

{% capture  deviceConnectivityAPI %}
MQTT%,%MQTT%,%/templates/edge/user-guide/mqtt-subscribe-to-attribute.md%br%
HTTP%,%HTTP%,%/templates/edge/user-guide/http-subscribe-to-attribute.md%br%
CoAP%,%CoAP%,%/templates/edge/user-guide/coap-subscribe-to-attribute.md%br%{% endcapture %}
{% include content-toggle.liquid content-toggle-id="deviceConnectivityAPI" toggle-spec=deviceConnectivityAPI %}

## Send the Device Attributes Message to the Cloud

To automatically route messages (data or attributes) from the device to the **ThingsBoard Cloud**, configure a rule chain for the **ThingsBoard Edge**:

{% include images-gallery.html imageCollection="routeMessagesToCloud" showListImageTitles="true" %}

[Here is a sample how to configure edge root rule chain to publish message to the cloud](/docs/edge/use-cases/data-filtering-traffic-reduce/#configure-edge-rule-engine-to-push-filtered-data-to-the-cloud)

## Send the Device Attributes Message Back to the Edge
On the cloud modify root rule chain to send back some attributes update message to the edge. You should use 'push to edge' node for this
back to cloud - shared
Once the attribute update message will arrive to the edge you should see this message on the device.
