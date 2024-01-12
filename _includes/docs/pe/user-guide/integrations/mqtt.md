{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

MQTT Integration allows to connect to external MQTT brokers, subscribe to data streams from those brokers and convert any type of payload from your devices to ThingsBoard message format. Its typical use is whenever your devices are already connected to external MQTT broker or any other IoT platform or connectivity provider with MQTT based back-end. 

Please review the integration diagram to learn more. 

<object width="100%" style="max-width: max-content;" data="/images/user-guide/integrations/mqtt-integration.svg"></object>

ThingsBoard MQTT Integration acts as an MQTT client. It subscribes to topics and converts the data into telemetry and attribute updates. In case of downlink message, MQTT integration converts it to the device-suitable format and pushes to external MQTT broker. 
Pay attention: MQTT broker should be either co-located with ThingsBoard instance or deployed in the cloud and have a valid DNS name or static IP address. ThingsBoard instance that is running in the cloud can’t connect to the MQTT broker deployed in local area network.

## MQTT Integration Configuration

In this tutorial, we will configure MQTT Integration to provide devices connection to the Platform and ability to send RPC commands to devices.

### Prerequisites

In this tutorial, we will use:

{% if docsPrefix == "pe/" %}
- The instance of [ThingsBoard Professional Edition](https://thingsboard.io/docs/user-guide/install/pe/installation-options/) installed locally;
  {% endif %}
  {% if docsPrefix == "paas/" %}
- ThingsBoard Professional Edition instance — [thingsboard.cloud](https://thingsboard.cloud);
  {% endif %}
 - MQTT broker, accessible by ThingsBoard PE instance — broker.hivemq.com (port 1883);
 - mosquitto_pub and mosquitto_sub MQTT clients to send and receive messages;   
 - an advanced [device simulator](/docs/user-guide/integrations/resources/mqtt-client.py) for RPC simulation example.

Let's assume that we have a sensor which is sending current temperature readings.
Our sensor device *SN-001* publishes it's temperature readings to '**tb/mqtt-integration-tutorial/sensors/SN-001/temperature**' and it is subscribed to '**tb/mqtt-integration-tutorial/sensors/SN-001/rx**' to receive RPC calls.

### ThingsBoard setup

Before setting up an MQTT integration, you need to create uplink and downlink converters.

Uplink converter is a script for parsing and transforming the data received by MQTT integration.

Downlink converter parses and transforms the data sent from ThingsBoard to the format that is consumed by existing device(s).

#### Uplink Converter

The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard can consume.
*deviceName* and *deviceType* are required, while *attributes* and *telemetry* are optional.
*Attributes* and *telemetry* are flat key-value objects. Nested objects are not supported.

To create an uplink converter go to the **Integrations center** -> **Data converters** page and click "plus" button.
Name it "**MQTT Uplink Converter**" and select type **Uplink**. Use **debug mode** for now.

{% capture difference %}
**NOTE:**
<br>
Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include templates/tbel-vs-js.md %}

{% capture mqttuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/mqtt/mqtt-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/mqtt/mqtt-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttuplinkconverterconfig" toggle-spec=mqttuplinkconverterconfig %}

#### Downlink Converter

The Downlink converter transforming outgoing RPC message and then the Integration sends it to external MQTT broker.

{% capture difference %}
**NOTE:**
<br>
Even if you won't send downlink RPC, you still need to create a dummy Downlink converter.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Create another converter with the name "**MQTT Downlink Converter**" and type **Downlink**. Leave the default script and click **Add**.     

{% include templates/tbel-vs-js.md %}

{% capture mqttdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/mqtt/mqtt-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/mqtt/mqtt-downlink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttdownlinkconverterconfig" toggle-spec=mqttdownlinkconverterconfig %}


#### MQTT Integration Setup

- Go to the **Integrations center** -> **Integrations** page and click "plus" icon to add a new integration. Name it "**MQTT Integration**", select type **MQTT**;

![image](/images/user-guide/integrations/mqtt/mqtt-integration-add-integration-1-pe.png)

- The next steps is to add the recently created **uplink** and **downlink** converters;

![image](/images/user-guide/integrations/mqtt/mqtt-integration-add-integration-2-pe.png)

![image](/images/user-guide/integrations/mqtt/mqtt-integration-add-integration-3-pe.png)

- Specify **host**: **broker.hivemq.com** and **port**: **1883** at the connection step;

- Add a **topic filter**:

```shell
tb/mqtt-integration-tutorial/sensors/+/temperature
```
{: .copy-code}

 - You can also select an MQTT **QoS** level. We use MQTT QoS level 0 (At most once) by default;

![image](/images/user-guide/integrations/mqtt/mqtt-integration-add-integration-4-pe.png)

- Go to the **advanced settings**. It is better to uncheck the **Clean session** parameter. Many brokers do not support sticky sessions, so will silently close the connection if you try to connect with this option enabled;

- Let's leave the **Downlink topic pattern** by default, meaning that the Integration will take the metadata.topic and use it as the downlink topic;

![image](/images/user-guide/integrations/mqtt/mqtt-integration-add-integration-5-pe.png)

- [Optional] Click on **Check connection** button to check connection to your Service Bus topic. Click **Add** button to create the integration.

![image](/images/user-guide/integrations/mqtt/mqtt-integration-add-integration-6-pe.png)

#### Send Uplink message

Now let's simulate the device sending a temperature reading to the integration. 

Use terminal for will send a message with temperature readings in a simple format: *`{"value":25.1}`*:

```shell
mosquitto_pub -h broker.hivemq.com -p 1883 -t "tb/mqtt-integration-tutorial/sensors/SN-001/temperature" -m '{"value":25.1}'
```
{: .copy-code}

![image](/images/user-guide/integrations/mqtt/mqtt-integration-send-uplink-message-1.png)

{% if docsPrefix == "pe/" %}
After you sent uplink message a new device was created. You should receive a notification about it. 
To view notification click on the bell icon in the upper right corner of the screen. 
The notification will contain link to created device. Go to this device.

![image](/images/user-guide/integrations/mqtt/mqtt-integration-go-to-devices-1-pe.png)

Here you will see information about the new device. As well as the telemetry which we sent to the device.

![image](/images/user-guide/integrations/mqtt/mqtt-integration-go-to-devices-2-pe.png)

Learn more about *notifications* and how to configure them [here](/docs/{{docsPrefix}}user-guide/notifications/).
{% endif %}

{% if docsPrefix == "paas/" %}
Once you go to the **Device Groups** -> **All* you should find a *SN-001* device provisioned by the Integration.
Click on the device, go to *Latest Telemetry* tab to see "temperature" key and its value (25.1) there.

![image](/images/user-guide/integrations/mqtt/mqtt-integration-go-to-devices-2.png)

{% endif %}

Go back to your **Integrations** page and navigate to the **Events** tab. There you'll see the message consumed by the **MQTT Integration**.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-integration-events-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-integration-events-1.png)
{% endif %}

On **Events** tab of your **MQTT Uplink Converter** there will be "*In*", "*Out*", and "*Metadata*" columns. 
The "*In*" and "*Metadata*" are the input for the data converter, and "*Out*" is the result.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-integration-converter-events-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-integration-converter-events-1-paas.png)
{% endif %}

<br>
**Summary:** the Uplink Data Converter defines provisioning of device and interpreting the input data. 
In our example we capture the device name from the topic (SN-001), set the default device type (sensor) and populate a telemetry value to it. 
In more complex cases you can write a script that will take this data from any part of data or metadata.

### Send One-Way RPC to Device

This section describes how to send a one-way RPC request to the device using Control Widgets.

- Go to the **Dashboards** page and create a new dashboard named **MQTT RPC**. Open the dashboard add an alias by clicking on **Entity aliases** icon;
- Name the alias (**Sensor**, for example), select filter type **Single Entity**, type **Device** and choose our **SN-001** sensor. Press **Add** and then **Save**;
- Now add a new widget, select the **Control Widgets** bundle from drop down menu and select the **Knob Control** widget;
- On the **Data** field select created alias (**Sensor**). Set **Number of digits after floating point** to 0;
- Go to **Advanced** tab and set **Minimum value** to 15 and **Maximum value** to 45. Leave the rest by default. Click **Add** to create widget;
- Save changes.

{% include images-gallery.html imageCollection="create_dashboard" %}

Now go to the **Rule Chains** page and open **Root Rule Chain**. Double-click on **message type switch** node and enable the **Debug mode** on it. 

{% include images-gallery.html imageCollection="edit_rule_node" %}

Now go back to your dashboard and turn knob a couple of times. 

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-integration-turn-knob-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-integration-turn-knob-1.png)
{% endif %}

In the **message type switch** node on the **Events** tab you should then see incoming messages with the message type *RPC_CALL_FROM_SERVER_TO_DEVICE* and relation type *RPC Request to Device*. You can check out what data and metadata was sent by the Knob Control to the Rule Engine.

{% include images-gallery.html imageCollection="incoming_messages" %}

To make sensor performing this command you need **RPC Request to Device** type messages to be forwarded to the downlink data converter.
In the Root Rule Chain editor find the **integration downlink** node, drag and drop it to the rule chain. Name it **MQTT Integration Downlink**, select our **MQTT Integration** and click **Add**.
Drag a connection from Message Type Switch node to MQTT Integration Downlink node with label "RPC Request to Device" and click add.

{% include images-gallery.html imageCollection="add_rule_node" %}

Go to the **Data converters** page, open your "**MQTT Downlink Converter**" and replace the default script with this one:

{% capture mqttdownlinkconverterconfig2 %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/mqtt/mqtt-downlink-converter-config-tbel-2.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/mqtt/mqtt-downlink-converter-config-javascript-2.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttdownlinkconverterconfig2" toggle-spec=mqttdownlinkconverterconfig2 %}

The script above removes quotes from *msg.params* value, which comes as quoted string, and parses it to integer. Then it builds a result object which is passed to the Integration.
The result object structure should be followed: the data (the message payload sent to the external MQTT broker as-is) and the metadata (is used by Integrationin). As mentioned: the Integration downlink topic is configured to **${topic}**, which means that the integration will take the metadata.topic and use it as the downlink topic.

Open the terminal window and execute the following command:

```shell
mosquitto_sub -h broker.hivemq.com -p 1883 -t "tb/mqtt-integration-tutorial/sensors/+/rx"
```
{: .copy-code}

![image](/images/user-guide/integrations/mqtt/mqtt-integration-execute-command.png)

Go to the dashboard and turn the wheel again. In your terminal window you should receive series of the incoming messages sent by thew knob control widget:
```shell
{"value":33}
{"value":42}
```

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-integration-turn-the-wheel-1-pe.png)

![image](/images/user-guide/integrations/mqtt/mqtt-integration-turn-the-wheel-2-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-integration-turn-the-wheel-1.png)

![image](/images/user-guide/integrations/mqtt/mqtt-integration-turn-the-wheel-2.png)
{% endif %}

### Simulating of Two-Way RPC 

Now try to simulate sending an RPC request to the device with recieving a response.

First you should modify converters to send downlink messages to '**tb/mqtt-integration-tutorial/sensors/+/rx/twoway**' topic and receive device responses on 
**tb/mqtt-integration-tutorial/sensors/+/rx/response**' topic.

Change downlink converter code to send messages to '**tb/mqtt-integration-tutorial/sensors/+/rx/twoway**' topic. Go to the "**MQTT Downlink Converter**" and change the code on line 16 to

```shell
topic: 'tb/mqtt-integration-tutorial/sensors/'+metadata['deviceName']+'/rx/twoway'
```
{: .copy-code}

Or just paste the following code in the encoder window:

{% capture mqttdownlinkconverterconfig3 %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/mqtt/mqtt-downlink-converter-config-tbel-3.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/mqtt/mqtt-downlink-converter-config-javascript-3.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttdownlinkconverterconfig3" toggle-spec=mqttdownlinkconverterconfig3 %}

Then prepare the uplink converter to receive the response messages. Go to the "**MQTT Uplink Converter**" and paste the following code in the decoder window:

{% capture mqttuplinkconverterconfig2 %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/mqtt/mqtt-uplink-converter-config-tbel-2.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/mqtt/mqtt-uplink-converter-config-javascript-2.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="mqttuplinkconverterconfig2" toggle-spec=mqttuplinkconverterconfig2 %}

The script above is slightly different from what we had initially. It distinguishes between Post Telemetry requests and RPC call Responses, thus publishing different kind of output to Rule Engine.

You also must add a topic filter in your integration to receive the RPC response messages: **MQTT Integration** -> **Topic filters** -> **Add topic filter**. 
Add this topic with the default **QoS** level:

```shell
tb/mqtt-integration-tutorial/sensors/+/rx/response
```
{: .copy-code}

Apply changes.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-rpc-edit-integration-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-rpc-edit-integration-1.png)
{% endif %}

Now run device emulator. Notice, the **mosquitto_pub** and **mosquitto_sub** is not suffice, so please launch an [advanced simulator](/docs/user-guide/integrations/resources/mqtt-client.py):

```js
python mqtt-client.py
```
{: .copy-code}

![image](/images/user-guide/integrations/mqtt/mqtt-rpc-send-message-2.png)

Try to turn the knob wheel on a dashboard. In the terminal window you should have an output similar to :

```shell
Incoming message
Topic: tb/mqtt-integration-tutorial/sensors/SN-001/rx/twoway
Message: {"value":40}
This is a Two-way RPC call. Going to reply now!
Sending a response message: {"rpcReceived":"OK"}
```

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-rpc-turn-the-wheel-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-rpc-turn-the-wheel-1.png)
{% endif %}

Go to the **Devices** page and find *rpcReceived* telemetry value is "*OK*" on the **Latest telemetry** tab of your SN-001 device.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-rpc-device-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/mqtt/mqtt-rpc-device-1-paas.png)
{% endif %}

## Video tutorials

### Setting up MQTT Integration

This video is a step-by-step tutorial on setting up of MQTT Integration.

<br>
<div id="video">  
 <div id="video_wrapper">
     <iframe src="https://www.youtube.com/embed/BeN5bsDQbdo" frameborder="0" allowfullscreen></iframe>
 </div>
</div> 

### Configure RPC request to the device

For your convenience you may follow this video to configure RPC request to device and receive simulated response via MQTT Integration.

<br>
<div id="video">  
 <div id="video_wrapper">
     <iframe src="https://www.youtube.com/embed/A_jCXQj_LXs" frameborder="0" allowfullscreen></iframe>
 </div>
</div> 

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
