---
layout: docwithnav-pe-edge
title: MQTT Integration
description: MQTT Integration guide

assign-integration:
    0:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-1-edge.png
        title: 'Go to the "<b>Edge management</b>" section -> "<b>Instances</b>" page, click on your edge instance to open "Edge details" window, and navigate to the "<b>Attributes</b>" tab. Click "plus" icon to add new <b>server attribute</b> to Edge;'
    1:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-2-edge.png
        title: 'Named &#39;<b>brokerIp</b>&#39; and set value as &#39;<b>broker.hivemq.com</b>&#39;. After, click "Add" button;'
    2:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-3-edge.png
        title: 'Added the server attribute &#39;<b>&#39;brokerIp&#39;</b>&#39; to the edge;'
    3:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-4-edge.png
        title: 'Now, click "<b>Manage edge integrations</b>" icon of Edge entity;'
    4:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-5-edge.png
        title: 'Click the "+" icon at the top right of the corner. Specify your integration and click "Assign" button to assign it to the Edge;'
    5:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-6-edge.png
        title: 'Login to your <b>ThingsBoard Edge</b> instance and open "<b>Integrations center</b>" section -> "<b>Integrations</b>" page. You should see your integration. Click on it;'
    6:
        image: /images/pe/edge/integrations/mqtt/assign-mqtt-integration-7-edge.png
        title: 'In the "<b>Integration details</b>" window placeholder <b>${{brokerIp}}</b> will be replaced with the value of the attribute.'

send-uplink-edge:
    0:
        image: /images/pe/edge/integrations/mqtt/send-mqtt-uplink-1-edge.png
        title: 'In the integration events tab, you should find an uplink message with the status &#39;OK&#39;. To see the message itself, click the three dots in the &#39;Message&#39; column.'
    1:
        image: /images/pe/edge/integrations/mqtt/send-mqtt-uplink-2-edge.png

converter-mqtt-events:
    0:
        image: /images/pe/edge/integrations/mqtt/converter-events-mqtt-1-edge.png
        title: 'Go to the "<b>Integrations center</b>" section -> "<b>Data converters</b>" page, click on the uplink converter to open "Data converter details" window, and navigate to the "<b>Events</b>" tab. There you will find an uplink message;'
    1:
        image: /images/pe/edge/integrations/mqtt/converter-events-mqtt-2-edge.png
        title: 'To see the incoming message to the converter, click the three dots in the &#39;In&#39; column;'
    2:
        image: /images/pe/edge/integrations/mqtt/converter-events-mqtt-3-edge.png
        title: 'To see the outgoing message from the converter, click the three dots in the &#39;Out&#39; column.'

downlink-rule:
    0:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-mqtt-1-edge.png
        title: 'Go to the "<b>Edge management</b>" section -> "<b>Rule chain templates</b>" page and click on the "<b>Edge Root Rule Chain</b>" to open it;'
    1:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-mqtt-2-edge.png
        title: 'Create an &#39;<b>originator fields</b>&#39; node. Configure adding originator name and originator type to the message metadata - in the downlink converter name of the device will be used to set the proper downlink MQTT topic;'
    2:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-mqtt-3-edge.png
        title: 'Create an &#39;<b>integration downlink</b>&#39; node. Specify your integration in its settings;'
    3:
        image: /images/pe/edge/integrations/mqtt/downlink-rule-mqtt-4-edge.png
        title: 'Set the "<b>Attributes Updated</b>" and "<b>Post attributes</b>" links from the &#39;<b>message type switch</b>&#39; node to the &#39;<b>originator fields</b>&#39; node. And set &#39;<b>Success</b>&#39; link from the &#39;<b>originator fields</b>&#39; node to the &#39;<b>integration downlink</b>&#39; node. When the attribute is created or changes are made to the attribute on the Edge, the downlink message will be sent to the integration. Apply changes.'

downlink-integration-message:
    0:
        image: /images/pe/edge/integrations/mqtt/downlink-message-mqtt-1-edge.png
        title: 'Go to the "<b>Integrations center</b>" section -> "<b>Data converters</b>" page, click on the downlink converter to open "Data converter details" window, and navigate to the "<b>Events</b>" tab. There you will find an downlink message;'
    1:
        image: /images/pe/edge/integrations/mqtt/downlink-message-mqtt-2-edge.png

downlink-converter-message:
    0:
        image: /images/pe/edge/integrations/mqtt/downlink-mqtt-converter-message-1-edge.png
        title: 'Go to the "<b>Integrations center</b>" section -> "<b>Data converters</b>" page, click on the downlink converter to open "Data converter details" window, and navigate to the "<b>Events</b>" tab. There you will find a downlink message;'
    1:
        image: /images/pe/edge/integrations/mqtt/downlink-mqtt-converter-message-2-edge.png
        title: 'Click the three dots in the &#39;In&#39; column to see the message that came from the integration to the converter;'
    2:
        image: /images/pe/edge/integrations/mqtt/downlink-mqtt-converter-message-3-edge.png
        title: 'Click the three dots in the &#39;Out&#39; column to see the message sent to the device after processing by the converter.'

---

* TOC
{:toc}

{% assign integrationName = "MQTT" %}
{% assign integrationUrl = "mqtt" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

MQTT Integration allows to connect to external MQTT brokers, subscribe to data streams from those brokers and convert any type of payload from your devices to ThingsBoard Edge message format. 
Its typical use is whenever your devices are already connected to external MQTT broker or any other IoT platform or connectivity provider with MQTT based back-end.

Please review the integration diagram to learn more.

<object width="100%" style="max-width: max-content;" data="/images/user-guide/integrations/mqtt-integration.svg"></object>

ThingsBoard Edge MQTT Integration acts as an MQTT client. 
It subscribes to topics and converts the data into telemetry and attribute updates. 
In case of downlink message, MQTT integration converts it to the device-suitable format and pushes to external MQTT broker.

{% capture difference %}
**Pay attention**: MQTT broker should be either co-located with ThingsBoard Edge instance or deployed in the cloud and have a valid DNS name or static IP address.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Prerequisites

In this tutorial, we will use:

- **ThingsBoard Professional Edition** instance — [thingsboard.cloud](https://thingsboard.cloud);
- The instance of [ThingsBoard PE Edge](/docs/user-guide/install/pe/edge/installation-options/) installed locally;
- MQTT broker, accessible by **ThingsBoard Edge** instance — broker.hivemq.com (port 1883);
- *mosquitto_pub* and *mosquitto_sub* MQTT clients to send and receive messages.

Let's assume that we have a sensor which is sending current temperature readings.
Our sensor device **SN-001** publishes it's temperature readings to '**tb-edge/mqtt-integration-tutorial/sensors/SN-001/temperature**', and it is subscribed to '**tb-edge/mqtt-integration-tutorial/sensors/SN-001/rx**' to receive RPC calls.

We will send a message with temperature readings in a simple format: **`{"value":25.1}`**

## Create converter and integration templates

Converter and integration templates are created only on the **ThingsBoard Professional Edition**.
So please use [**ThingsBoard Cloud**](https://thingsboard.cloud/signup) or [**install**](/docs/user-guide/install/pe/installation-options/) your own platform instance to log in as Tenant administrator.

Follow the steps below to add the **MQTT integration**:

- Go to "**Edge management**" section -> "**Integration templates**" page and click "plus" button to add new integration. Select type '**MQTT**'. Name it "Edge MQTT integration". Then, click "Next";

{% include templates/edge/integrations/debug-mode-info.md %}

![image](/images/pe/edge/integrations/mqtt/add-mqtt-integration-template-1-edge.png)

- The next step is to create an **Uplink data converter**.

The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard can consume.
**deviceName** and **deviceType** are required, while *attributes* and *telemetry* are optional.
**Attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

For this example, use the code below.

{% include templates/tbel-vs-js.md %}

{% capture mqttuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/edge/integrations/mqtt/mqtt-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/edge/integrations/mqtt/mqtt-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="mqttuplinkconverterconfig" toggle-spec=mqttuplinkconverterconfig %}

- At the next step is to create a **Downlink converter**.

The downlink converter transforming outgoing RPC message and then the Integration sends it to external MQTT broker.
You can customize a downlink according to your configuration. Let's consider an example where we send an attribute update message. 

For this example, use the code below.

{% include templates/tbel-vs-js.md %}

{% capture mqttdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/edge/integrations/mqtt/mqtt-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/edge/integrations/mqtt/mqtt-downlink-converter-config-javascript.md{% endcapture %}
{% include content-toggle.html content-toggle-id="mqttdownlinkconverterconfig" toggle-spec=mqttdownlinkconverterconfig %}

Finally, we go to the "**Connection**" page.

- You can use placeholder **$\{\{ATTRIBUTE_KEY\}\}** to substitute integration field with attribute value from specific Edge entity.
In this example, we will use the placeholder **$\{\{brokerIp\}\}** for '**Host**' and **1883** for '**Port**'.
- Add a **topic filter**: 

```shell
tb-edge/mqtt-integration-tutorial/sensors/+/temperature
```
{: .copy-code} 

- You can also select an MQTT **QoS** level. We use MQTT QoS level 0 (At most once) by default;

![image](/images/pe/edge/integrations/mqtt/add-mqtt-integration-template-4-edge.png)

- Go to the '**Advanced settings**'. It is better to uncheck the '**Clean session**' parameter. Many brokers do not support sticky sessions, so will silently close the connection if you try to connect with this option enabled;
- Let's leave the '**Downlink topic pattern**' by default, meaning that the integration will take the metadata.topic and use it as the downlink topic; 
- Click "Add" button to create the integration.

![image](/images/pe/edge/integrations/mqtt/add-mqtt-integration-template-5-edge.png)

## Modify Edge Root Rule Chain for downlinks

We can send a downlink message to the device from Rule chain using the rule node.
To be able to send downlink over integration we need to modify '**Edge Root Rule chain**' on the **ThingsBoard PE**.
We'll need to add two rule nodes: ['originator fields'](/docs/pe/user-guide/rule-engine-2-0/enrichment-nodes/#originator-fields) and ['integration downlink'](/docs/pe/user-guide/rule-engine-2-0/action-nodes/#integration-downlink-node) nodes.

{% include images-gallery.html imageCollection="downlink-rule" showListImageTitles="true" %}

## Assign Integration to Edge

Once converter and integration templates are created, we can assign Integration template to **Edge**.
Because we are using placeholder **$\{\{brokerIp\}\}** in the integration configuration, we need to add attribute '**brokerIp**' to edge first.
You need to provide **IP address** of the MQTT broker. We are using public URL '**broker.hivemq.com**' in this tutorial, but this could be any internal IP address as well.
Once attribute added, we are ready to assign integration and verify that it's added.

{% include images-gallery.html imageCollection="assign-integration" showListImageTitles="true" %}

## Send uplink message

To send an uplink message, use the command provided below. It simulates a device sending temperature readings to the integration:

```ruby
mosquitto_pub -h broker.hivemq.com -p 1883 -t "tb-edge/mqtt-integration-tutorial/sensors/SN-001/temperature" -m '{"value":25.2}'
```
{: .copy-code}

Now, go to the "**Integrations center**" -> "**Integrations**" and navigate to the "**Events**" tab in your MQTT integration on the **ThingsBoard Edge**. If you have done everything correctly, you will find an uplink message with the status 'OK'. To see the message itself, click the three dots in the 'Message' column.

{% include images-gallery.html imageCollection="send-uplink-edge" %}

When you sent the message, a new device was created. The created device with data can be seen in the "**Entities**" section -> "**Devices**" page:

![image](/images/pe/edge/integrations/mqtt/create-mqtt-device-1-edge.png)

Also, received data can be viewed in the uplink converter. In the 'In' and 'Out' blocks of the "**Events**" tab:

{% include images-gallery.html imageCollection="converter-mqtt-events" %}

## Send downlink message to device

Now let's check downlink functionality.
Open the terminal window and execute the following command:

```ruby
mosquitto_sub -h broker.hivemq.com -p 1883 -t "tb-edge/mqtt-integration-tutorial/sensors/+/rx"
```
{: .copy-code}

Please leave this terminal running in background - in this terminal window you should receive incoming messages sent later by integration.

![image](/images/pe/edge/integrations/mqtt/terminal-running-in-background.png)

Now, let's add a 'firmware' shared attribute. Go to the "**Devices**" page, select your device, and navigate to the "**Attributes**" tab on the **ThingsBoard Edge**. Select the "**Shared attributes**" scope and click on the "plus" icon to create new attribute. Then set the attribute name, its value (for example, the key name is 'firmware', value: 'v1.0') and save the data.

![image](/images/pe/edge/integrations/mqtt/add-mqtt-shared-attribute-1-edge.png)

An example of incoming messages from ThingsBoard Edge in the terminal:

![image](/images/pe/edge/integrations/mqtt/incoming-message-in-terminal.png)

To make sure that downlink message sent to integration you can check "**Events**" tab of the integration:

{% include images-gallery.html imageCollection="downlink-integration-message" %}

Received data and data that was sent can be viewed in the downlink converter. In the 'In' block of the "**Events**" tab, we see what data entered and in the 'Out' field, the message sent to the device is displayed:

{% include images-gallery.html imageCollection="downlink-converter-message" %}

## Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}