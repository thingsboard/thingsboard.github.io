---
layout: docwithnav-pe-edge
title: MQTT Integration
description: MQTT Integration guide

assign-integration:
    0:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-1-edge.png
        title: 'Go to the <b>Edge management > Instances</b> section, click on your edge instance to open <b>"Edge details"</b> window, and navigate to the <b>"Attributes"</b> tab. To add a new <b>server attribute</b> to **Edge**, click the <b>"plus"</b> button.'
    1:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-2-edge.png
        title: 'Name it <b>brokerIp</b> and set the value as <b>"broker.hivemq.com"</b>. Then click the <b>"Add"</b> button.'
    2:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-3-edge.png
        title: 'The <b>"brokerIp"</b> server attribute is now added to the edge.'
    3:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-4-edge.png
        title: 'Now, click "<b>Manage edge integrations</b>" icon of Edge entity;'
    4:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-5-edge.png
        title: 'Click the <b>"+"</b> button at the top right of the corner. Select your integration from the drop-down menu and click the <b>"Assign"</b> button.'
    5:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-6-edge.png
        title: 'Login to your <b>ThingsBoard Edge</b> instance and go to the <b>Integrations center > Integrations</b> section. You should see your integration. Click on it.'
    6:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-7-edge.png
        title: 'In the <b>"Integration details"</b> window, the <b>${{brokerIp}}</b> placeholder will be replaced with the value of the attribute.'

send-uplink-edge:
    0:
        image: /images/pe/edge/integrations/mqtt/send-mqtt-uplink-1-edge.png
        title: 'In the integration <b>"Events"</b> tab, you should find the uplink message with the <b>"OK"</b> status. To see the message, click the three dots in the <b>"Message"</b> column.'
    1:
        image: /images/pe/edge/integrations/mqtt/send-mqtt-uplink-2-edge.png

converter-mqtt-events:
    0:
        image: /images/pe/edge/integrations/mqtt/converter-events-mqtt-1-edge.png
        title: 'Go to the <b>Integrations center > Data converters</b> section, click on the uplink converter to open the <b>"Data converter details"</b> window, and select the "<b>Events</b>" tab. There you will find an uplink message.'
    1:
        image: /images/pe/edge/integrations/mqtt/converter-events-mqtt-2-edge.png
        title: 'To see the incoming message to the converter, click the three dots in the <b>"In"</b> column.'
    2:
        image: /images/pe/edge/integrations/mqtt/converter-events-mqtt-3-edge.png
        title: 'To see the outgoing message from the converter, click the three dots in the <b>"Out"</b> column.'

downlink-rule:
    0:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-mqtt-1-edge.png
        title: 'Go to the <b>Edge management > Rule chain templates</b> section and click the <b>Edge Root Rule Chain</b> to open it.'
    1:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-mqtt-2-edge.png
        title: 'Create an <b>originator fields</b> node. Configure to add originator name and originator type to the message metadata - in the downlink converter, the device name is used to set the correct downlink MQTT topic.'
    2:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-mqtt-3-edge.png
        title: 'Create an <b>integration downlink</b> node. Specify your integration in its settings;'
    3:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-mqtt-4-edge.png
        title: 'Set the <b>Attributes Updated</b> and <b>Post attributes</b> links from the <b>message type switch</b> node to the <b>originator fields</b> node. And set the <b>Success</b> link from the <b>originator fields</b> node to the <b>integration downlink</b> node. When the attribute is created or changes are made to the attribute on the Edge, the downlink message will be sent to the integration. Apply the <b>changes</b>.'

downlink-integration-message:
    0:
        image: /images/pe/edge/integrations/mqtt/downlink-message-mqtt-1-edge.png
        title: 'Go to the <b>Integrations center > Data converters</b> section, click on the downlink converter to open the <b>"Data converter details"</b> window, and navigate to the <b>"Events"</b> tab. There you will find the downlink message;'
    1:
        image: /images/pe/edge/integrations/mqtt/downlink-message-mqtt-2-edge.png

downlink-converter-message:
    0:
        image: /images/pe/edge/integrations/mqtt/downlink-mqtt-converter-message-1-edge.png
        title: 'Go to the <b>Integrations center > Data converters</b> section, click on the downlink converter to open <b>"Data converter details"</b> window, and navigate to the <b>"Events"</b> tab. There you will find the downlink message;'
    1:
        image: /images/pe/edge/integrations/mqtt/downlink-mqtt-converter-message-2-edge.png
        title: 'Click the three dots in the <b>In</b> column to see the message that came from the integration to the converter.'
    2:
        image: /images/pe/edge/integrations/mqtt/downlink-mqtt-converter-message-3-edge.png
        title: 'Click the three dots in the <b>Out</b> column to see the message sent to the device after processing by the converter.'

---

* TOC
{:toc}

{% assign integrationName = "MQTT" %}
{% assign integrationUrl = "mqtt" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

**MQTT Integration** allows connecting to external MQTT brokers, subscribe to data streams from those brokers, and convert any type of payload from your devices to the ThingsBoard Edge message format. 
It is typically used when your devices are already connected to an external MQTT broker or any other IoT platform or connectivity provider with MQTT based backend.

To learn more, please see the integration diagram.

<object width="100%" style="max-width: max-content;" data="/images/user-guide/integrations/mqtt-integration.svg"></object>

ThingsBoard Edge MQTT Integration acts as an MQTT client. 
It subscribes to topics and converts the data into telemetry and attribute updates.
In the case of a downlink message, MQTT Integration converts it to the device-appropriate format and pushes it to an external MQTT broker.

{% capture note %}
**Note**: 

The **MQTT broker** should either be co-located with the **ThingsBoard Edge** instance or deployed in the cloud and have a valid DNS name or static IP address.
{% endcapture %}
{% include templates/info-banner.md content=note %}

### Prerequisites

In this tutorial, we will use:

- [ThingsBoard Professional Edition](https://thingsboard.cloud){: target="_blank"} account;
- Locally installed [ThingsBoard PE Edge](/docs/user-guide/install/pe/edge/installation-options/){: target="_blank"} instance;
- **MQTT broker** that can be accessed through the **ThingsBoard Edge** instance: broker.hivemq.com (port 1883);
- **mosquitto_pub** and **mosquitto_sub** MQTT clients for sending and receiving messages.
- a sensor device that sends temperature readings. In this guide we'll use **SN-001** to **'tb-edge/mqtt-integration-tutorial/sensors/SN-001/temperature'** and is subscribed to **'tb-edge/mqtt-integration-tutorial/sensors/SN-001/rx'** to receive **RPC calls**. We will send a message with temperature readings in a simple format: **`{"value":25.1}`**

### Create converter and integration templates

Only the **ThingsBoard Professional Edition** creates converters and integration templates.
So please use [**ThingsBoard Cloud**](https://thingsboard.cloud/signup){: target="_blank"} or [**install**](/docs/user-guide/install/pe/installation-options/){: target="_blank"} your own platform instance to log in as a **Tenant administrator**.

Follow the steps below to add the **MQTT integration**:

- Go to the**Edge management > Integration templates** section and click the **"plus"** button to add a new integration. Select the **"MQTT"** type. Name it **"Edge HTTP Integration"**. Then click **Next**;

{% include templates/edge/integrations/debug-mode-info.md %}

![image](/images/pe/edge/integrations/mqtt/add-mqtt-integration-template-1-edge.png)

- The next step is to create an **Uplink data converter**. 

The purpose of the decoder function is to parse the incoming data and metadata into a format that ThingsBoard can consume.
**deviceName** and **deviceType** are required, while *attributes* and *telemetry* are optional.
**Attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

For this example, use the code below.

{% include templates/tbel-vs-js.md %}

{% capture mqttuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/edge/integrations/mqtt/mqtt-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/edge/integrations/mqtt/mqtt-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="mqttuplinkconverterconfig" toggle-spec=mqttuplinkconverterconfig %}

- The next step is to create a **Downlink converter**.

The downlink converter transforms an outgoing RPC message and then the Integration sends it to external MQTT broker.
You can customize a downlink according to your configuration. Let's consider an example where we send an attribute update message. 

For this example, use the code below.

{% include templates/tbel-vs-js.md %}

{% capture mqttdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/edge/integrations/mqtt/mqtt-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/edge/integrations/mqtt/mqtt-downlink-converter-config-javascript.md{% endcapture %}
{% include content-toggle.html content-toggle-id="mqttdownlinkconverterconfig" toggle-spec=mqttdownlinkconverterconfig %}

Finally, we go to the **"Connection"** page.

- You can use the placeholder **$\{\{ATTRIBUTE_KEY\}\}** to replace an integration field with an attribute value from a specific Edge entity.
In this example, we will use the placeholder **$\{\{brokerIp\}\}** for '**Host**' and **1883** for '**Port**'.
- Add a **topic filter**: 

```shell
tb-edge/mqtt-integration-tutorial/sensors/+/temperature
```
{: .copy-code} 

- You can also select an MQTT **QoS** level.  level. By default, we use MQTT QoS level 0 (at most once);

![image](/images/pe/edge/integrations/mqtt/add-mqtt-integration-template-4-edge.png)

- Go to the '**Advanced settings**'. It is better to uncheck the '**Clean session**' parameter. Many brokers do not support sticky sessions, so they will silently close the connection if you try to connect with this option enabled;
- Let's leave the '**Downlink topic pattern**' by default, which means that the integration will take the **metadata.topic** and use it as the downlink topic; 
- Click the **"Add"** button to create the integration.

![image](/images/pe/edge/integrations/mqtt/add-mqtt-integration-template-5-edge.png)

### Modify Edge Root Rule Chain for downlinks

We can send a downlink message to the device from the **Rule chain** using the **rule node**. To send downlink via integration, modify the **Edge Root Rule chain**.

{% capture edge-4 %}
**Please note!** <br>
If you use **earlier versions of Edge**, you cannot create or edit a **Rule Chain** on the **Edge** itself. It must be configured as a template in the **Cloud (Server)**, and then assigned to the **Edge** instance.

Starting with **Edge version 4.0**, you can create and edit a **Rule Chain** on the **Edge**.
{% endcapture %}
{% include templates/info-banner.md content=edge-4 %}

We'll need to add two rule nodes: ['originator fields'](/docs/user-guide/rule-engine-2-0/nodes/enrichment/originator-fields/){: target="_blank"} and ['integration downlink'](/docs/user-guide/rule-engine-2-0/nodes/action/integration-downlink/){: target="_blank"} nodes.

{% include images-gallery.html imageCollection="downlink-rule" showListImageTitles="true" %}

### Assign Integration to Edge

Once the converter and integration templates are created, we can assign the **Integration template** to the **Edge**.
Since we are using the placeholder **$\{\{brokerIp\}\}** in the integration configuration, we must first add the attribute **brokerIp** to the Edge.
You need to provide the **IP address** of the MQTT broker. We use the public URL '**broker.hivemq.com**' in this tutorial, but it could be any **internal IP address** as well.
Once the attribute is added, we are ready to assign and verify the integration.

{% include images-gallery.html imageCollection="assign-integration" showListImageTitles="true" %}

### Send uplink message

To send an uplink message, use the following command. It simulates a device sending temperature readings to the integration:

```ruby
mosquitto_pub -h broker.hivemq.com -p 1883 -t "tb-edge/mqtt-integration-tutorial/sensors/SN-001/temperature" -m '{"value":25.2}'
```
{: .copy-code}

Now, go to the **Integrations center > Integrations** section and select the **"Events"** tab in your MQTT integration on the **ThingsBoard Edge**. 
If you have done everything correctly, you will find an uplink message with the **OK** status. To see the message, click the three dots in the **"Message"** column.

{% include images-gallery.html imageCollection="send-uplink-edge" %}

When you send the message, a new device is created. The created device with data can be seen in the **Entities > Devices** section:

![image](/images/pe/edge/integrations/mqtt/create-mqtt-device-1-edge.png)

You can also view the received data in the uplink converter. In the **In** and **Out** blocks of the **"Events"** tab:

{% include images-gallery.html imageCollection="converter-mqtt-events" %}

### Send downlink message to device

Now let's check the downlink functionality.
Open a terminal window and run the following command:

```ruby
mosquitto_sub -h broker.hivemq.com -p 1883 -t "tb-edge/mqtt-integration-tutorial/sensors/+/rx"
```
{: .copy-code}

Keep this terminal running in the background. In this terminal window, you should receive incoming messages sent later by the integration.

![image](/images/pe/edge/integrations/mqtt/terminal-running-in-background.png)

Now let's add a shared attribute 'firmware'. 
Go to the **Devices** page, select your device, and navigate to the **"Attributes"** tab on the **ThingsBoard Edge**.
To create a new attribute, select the **"Shared attributes"** scope and click the "**plus"** button. 
Then set the attribute name, its value (_for example, the key name is 'firmware', value: 'v1.0_') and save the data.

![image](/images/pe/edge/integrations/mqtt/add-mqtt-shared-attribute-1-edge.png)

An example of incoming messages from **ThingsBoard Edge** in the terminal:

![image](/images/pe/edge/integrations/mqtt/incoming-message-in-terminal.png)

To ensure that the downlink message is sent to the integration, you can check the **"Events"** tab of the integration:

{% include images-gallery.html imageCollection="downlink-integration-message" %}

Received and sent data can be viewed in the downlink converter.
The **"In"** block of the Events tab shows what data has been entered, and the **"Out"** field shows the message sent to the device:

Here 1

{% include images-gallery.html imageCollection="downlink-converter-message" %}

Here 2

### Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
