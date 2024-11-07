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

This following instruction explain real-time, bidirectional communication between your device and the ThingsBoard Cloud via ThingsBoard Edge. 

#### Prerequisites 

To configure ThingsBoard Edge for seamless communication with ThingsBoard Cloud, you require:
* **[MQTT Broker:](/docs/{{peDocsPrefix}}reference/mqtt-api/)** In this guide, we use the HTTP protocol. The HTTP or CoAP protocols are the alternatives.
* **ThingsBoard Cloud(Server) and Edge:** Installed and running.
* **Device:** A device that can connect to ThingsBoard Edge via MQTT, HTTP, or CoAP using an access token.

#### Step 1. Subscribe to the 'v1/devices/me/attributes' Topic from the Device.

Register the device on the Edge. 

To subscribe to shared device attribute changes, send SUBSCRIBE message:
```bash
mosquitto_sub -d -h "$THINGSBOARD_HOST_NAME" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN"
```
{: .copy-code}

* **v1/devices/me/attributes:** This is a topic on ThingsBoard Edge. It allows the device to listen for any updates related to its attributes from the cloud.
* Replace the **$THINGSBOARD_HOST_NAME** with the actual value, e.g. "Localhost" references your local installation. 
* Replace the **$ACCESS_TOKEN** with the actual access token of the device. 

#### Step 2. Publish any Time-Series or Attribute Message from the Device.

The device sends data (time-series data like temperature readings or attribute data like device status) to ThingsBoard Edge. Sending data from the device to the edge enables ThingsBoard Edge to process and filter data before it’s sent to the cloud, reducing unnecessary traffic and saving bandwidth. Only relevant data is forwarded, which is especially valuable for devices with limited connectivity.
mosquitto_pub -d -h "demo.thingsboard.io" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -m "{"attribute1": "value1", "attribute2": true}"


#### Step 3. Send this message to the cloud (configure edge root rule chain).

Configure a rule on ThingsBoard Edge to automatically forward the device’s messages (data or attributes) to the ThingsBoard cloud.

Here is a sample how to [configure edge root rule chain to publish message to the cloud](/docs/edge/use-cases/data-filtering-traffic-reduce/#configure-edge-rule-engine-to-push-filtered-data-to-the-cloud)

Configuring this rule chain ensures that only filtered and relevant data is sent to the cloud, allowing ThingsBoard Edge to act as a smart gateway. It manages traffic and reduces unnecessary data uploads, which can be cost-effective and efficient.

#### Step 4. Modify the Root Rule Chain
On the cloud modify root rule chain to send back some attributes update message to the edge. You should use 'push to edge' node for this

Once the attribute update message will arrive to the edge you should see this message on the device.
