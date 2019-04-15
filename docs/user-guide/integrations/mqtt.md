---
layout: docwithnav
title: MQTT Integration
description: MQTT Integration guide

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

MQTT Integration allows to convert existing protocols and payload formats to ThingsBoard message format and is useful in several deployment scenarios: 

 - stream device and/or asset data from external system, IoT platform or connectivity provider back-end.
 - stream device and/or asset data from your custom application running in the cloud.
 - connect the existing device with custom MQTT based protocol to ThingsBoard.
 
Please review the integration diagram and video tutorial to learn more. 

 ![image](/images/user-guide/integrations/mqtt-integration.svg)
 
The video tutorial below describes step-by-step how to setup MQTT Integration.

<br/>
<div id="video">  
 <div id="video_wrapper">
     <iframe src="https://www.youtube.com/embed/OPkE5FXGPrs" frameborder="0" allowfullscreen></iframe>
 </div>
</div> 

## MQTT Integration Configuration

This tutorial describes step-by-step how to set up a MQTT Integration, connect devices and send an RPC commands to devices.

### Prerequisites

For the purpose of this tutorial, let's assume that we have a thermostat which is sending current temperature readings and receives temperature settings from knob control.

In this tutorial, we will use:

 - A ThingsBoard Professional Edition instance. For the purpose of this tutorial we will use [cloud.thingsboard.io](https://cloud.thingsboard.io)
 - a MQTT broker, accessible by ThingsBoard PE instance. For the purpose of this tutorial we will use broker.hivemq.com:1883
 - a mosquitto_pub and mosquitto_sub MQTT clients to send and receive mqtt messages   
 - an andvanced device simulator for two-way RPC example. In our case we will use a [Python script](/docs/user-guide/integrations/resources/two-way-mqtt-client.py) which will receive and publish MQTT messages to/from mosquitto MQTT broker

Let's assume that our sensor device is named **SN-001** and it publishes it's temperature readings to **tb/mqtt-integration-tutorial/sensors/SN-001/temperature** and it is subscribed to **tb/mqtt-integration-tutorial/sensors/SN-001/rx** to receive RPC calls.

We will send a message with temperature readings in a simple format: **`{"value":25.1}`**
 
### Uplink and Downlink Converters

Before setting up an MQTT integration, you need to create Uplink and Downlink converters.

**Uplink Converter** is a script that is used to parse and transform the data, received by MQTT Integration, and send it to the ThingsBoard Device instance.
**Downlink Converter** is a script which is used to parse and transform the data which is sent by MQTT Integration to the external MQTT topic.

#### Uplink Converter
Now let's connect to [cloud.thingsboard.io](https://cloud.thingsboard.io) and create Uplink Converter. Go to **Data Converters** section and Click **Add new data converter -> Create new converter**.
Name it **"MQTT Uplink Converter"** and select type **Uplink**. You may want to use debug mode for now.

**NOTE** Although the Debug mode is very useful for development and troubleshooting, leaving it on in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging. 

Now copy & paste the following script to the Decoder function section:

```javascript
/** Decoder **/

// decode payload to string
var payloadStr = decodeToString(payload);
var data = JSON.parse(payloadStr);
var topicPattern = 'tb/mqtt-integration-tutorial/sensors/(.+)/temperature';

var deviceName =  metadata.topic.match(topicPattern)[1];
// decode payload to JSON
var deviceType = 'sensor';

// Result object with device attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: deviceType,
   attributes: {
       integrationName: metadata['integrationName'],
   },
   telemetry: {
       temperature: data.value,
   }
};

/** Helper functions **/

function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
   // covert payload to string.
   var str = decodeToString(payload);

   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}

return result;

``` 

The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard can consume. 
The format the result object should not be changed. **deviceName** and **deviceType** are required, while **attributes** and **telemetry** are optional (???).
**attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

#### Downlink Converter

The Downlink converter is the script which is used to transform and send the downlink RPC message to Integration and then to an external MQTT broker.

**NOTE** Even if you do not plan to send downlink RPC, you still need to create a dummy Downlink converter because it is required by Integration.

Create another converter with the name **"MQTT Downlink Converter"** and type **Downlink**. Let's keep the default script for now and click **Add**.     

### MQTT Integration Setup

Go to **Integrations** section and click **Add new integration** button. Name it **MQTT Integration**, select type **MQTT**, turn the Debug mode on and add Uplink and Downlink converters that were created in previous step from drop-down menus.

Set host to **broker.hivemq.com** and port to **1883**. Enter the arbitrary Client ID. 

Add a Topic Filter **tb/mqtt-integration-tutorial/sensors/+/temperature**. You can also select a MQTT QoS level. We use MQTT QoS level 0 (At most once) by default.      

Let's leave the Downlink topic pattern by default.

Click **Add** to save the integration.

### Send Uplink message

Now let's simulate the device sending a temperature reading to the integration:

```shell
mosquitto_pub -h broker.hivemq.com -p 1883 -t "tb/mqtt-integration-tutorial/sensors/SN-001/temperature" -m '{"value":25.1}'
```

Now when you go to **Device Groups -> All** you should be able to see a **SN-001** device that was provisioned by Integration.
Click on the device, got to **Latest Telemetry** tab. You should be able to see "temperature":"25.1"   

Go back to your Integration and click on Events tab. Here you see the message that was consumed by Integration.
You can also check the Events in your MQTT Uplink converter. Here you see **In**, **Out**, and **Metadata** columns. 
The **In** and **Metadata** are the input for the data converter, and **Out** is the result. 

To summarize this part, the Uplink Data Converter defines completely how the device will be provisioned and how the input data will be interpreted. 
In our example we capture the device name from the topic (SN-001), set it the default device type (sensor) and populate a single telemetry value. 
In more complex cases you can write a script that will take this data from any part of data or metadata.

### Send One-Way RPC to Device

This section describes how to send a one-way RPC request to the device using Control Widgets.

Go to your **Dashboard Groups -> All** section and create a new dashboard named **MQTT Tutorial**. Open the dashboard, click "Enter Edit mode", 
then click on Entity Aliases icon on the top-right:

Create a new alias, name it **SN-001**, select Filter type: Single Entity, Type: Device, Device: SN-001 Click **Add** and then **Save**.

Click **Add New Widget**, select **Control Widgets** and click on the Knob Control.

On the **Data** tab ubder **Target Device** select your SN-001 alias. Go to Advanced tab and set Minimum value to 15 and Maximum value to 45. Leave the rest by default.
On the Settings tab set **Number of digits after floating point** to 0 and save your changes, close the widget edit dialog and save the changes to the dashboard.

Now go to **Rule Chains** section and open **Root Rule Chain**. Double-click on **Message Type Switch** node and enable the Debug mode on it. Now go bach to rour dashboard and turn
your knob a couple of times. In the Message Type Switch node on the events tab you should now see the incoming messages with the message type **RPC_CALL_FROM_SERVER_TO_DEVICE**
and relation type **RPC Request to Device**. Check out what data and metadata has been sent by the Knob Control to the Rule Engine.

Next, you need to forward messages with the type of **RPC Request to Device** to the Downlink Data Converter.
In the Rule Chain editor, find the **Integration Downlink** node, drag and drop it to the rule chain. Name it **MQTT Integration Downlink**, select the MQTT Integration and click Add.
Drag a connection from the Message Type Switch node to MQTT Integration Downlink node, select Link label "RPC Request to Device" and click add.

Go to **Data Converters** section, open your **MQTT Downlink Converter**:

```js
/** Encoder **/

var value = parseInt(msg.params.replace(/"/g,""));
var data = {value: value}
// Result object with encoded downlink payload
var result = {

    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "JSON",

    // downlink data
    data: JSON.stringify(data),

    // Optional metadata object presented in key/value format
    metadata: {
        topic: 'tb/mqtt-integration-tutorial/sensors/'+metadata['deviceName']+'/rx'
    }

};

return result;
```

The script above removes quotes from msg.params value, which comes as quoted string, and parses it to tnteger. Then it builds a result object which is passed to the Integration.
The result object structure should be followed. The data part is the message payload that will be sent to the external MQTT broker as-is. The metadata is used by integration,
in out case, the Integration downlink topic is configured to **${topic}**, which means that the integration will take the metadata.topic and use it as the downlink topic.

Open the terminal window and execute the following command:

```shell
mosquitto_sub -h broker.hivemq.com -p 1883 -t "tb/mqtt-integration-tutorial/sensors/+/rx"
```

Go to the dashboard and turn the wheel again. In your terminal window you should receive series of the incoming messages sent by thew knob control widget:
```shell
{"value":32}
{"value":33}
```

### Send Two-Way RPC to Device

Now we will do an advanced example which will simulate sending a RPC request to the device and recieving a response.
This time we will send a RPC request to 

Let us modify our Downlink Converter Code to send downlink messages to **tb/mqtt-integration-tutorial/sensors/+/rx/twoway** and receive device responses on 
**tb/mqtt-integration-tutorial/sensors/+/rx/response**

First, we need to modify our Downlink converter code to send messages to **tb/mqtt-integration-tutorial/sensors/+/rx/twoway**:

```js
/** Encoder **/

var value = parseInt(msg.params.replace(/"/g,""));
var data = {value: value}
// Result object with encoded downlink payload
var result = {

    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "JSON",

    // downlink data
    data: JSON.stringify(data),

    // Optional metadata object presented in key/value format
    metadata: {
        topic: 'tb/mqtt-integration-tutorial/sensors/'+metadata['deviceName']+'/rx/twoway'
    }

};

return result;
```

Second, we need to prepare our Uplink Converter to receive the response messages. Go to **"MQTT Uplink Converter"** and paste the following code:

```js
/** Decoder **/

// decode payload to string
var payloadStr = decodeToString(payload);
var data = JSON.parse(payloadStr);
var topicPattern = 'tb/mqtt-integration-tutorial/sensors/(.+?)/.*';

var deviceName =  metadata.topic.match(topicPattern)[1];
// decode payload to JSON
var deviceType = 'sensor';

// Result object with device attributes/telemetry data
var telemetry;
if (metadata.topic.endsWith('/temperature')) {
    // Transform the incoming data as before
    telemetry = getTemperatureTelemetry(data);
} else if (metadata.topic.endsWith('/rx/response')) {
    // Get the input value as is
    telemetry = data;
}

var result = {
   deviceName: deviceName,
   deviceType: deviceType,
   attributes: {
       integrationName: metadata['integrationName'],
   },
   telemetry: telemetry
};

/** Helper functions **/

function getTemperatureTelemetry(data) {
    return {temperature: data.value}
}

function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
   // covert payload to string.
   var str = decodeToString(payload);

   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}

return result;
```
The script above is slightly different from what we had initially. It distinguishes between Post Telemetry requests and RPC call Responses, 
thus publishing different kind of output to Rule Engine.

We also need to add a topic filter in our Integration in order to receive the RPC response messages. Go to your **MQTT Integration**, click Edit, go to **Topic Filters -> Add Topic Filter**. 

add *tb/mqtt-integration-tutorial/sensors/+/rx/response* topic with the default QoS level and click save.

Last but not least, let's run our device simulator. For this example, the mosquitto_pub and mosquitto_sub will not suffice, so we will use and advanced simulator.
Please download and run [two-way-mqtt-client.py](/docs/user-guide/integrations/resources/two-way-mqtt-client.py) from your terminal:

```js
python two-way-mqtt-client.py
```

Now go to your dashboard and turn the knob wheel. In the terminal window you should see the messages like:

```log
Incoming message
Topic: tb/mqtt-integration-tutorial/sensors/SN-001/rx/twoway
Message: {"value":36}
This is a Two-way RPC call. Going to reply now!
Sending a response message: {"rpcReceived":"OK"}
```

Go to **Device Groups** and find your SN-001 device, go to telemetry tab. You should see the **rpcReceived: OK** telemetry value.

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}
