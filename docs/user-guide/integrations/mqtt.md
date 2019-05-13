---
layout: docwithnav
title: MQTT Integration
description: MQTT Integration guide

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

MQTT Integration allows to convert existing protocols and payload formats to ThingsBoard message format and is useful in several deployment scenarios: 

 - stream entity data from external system, IoT platform or connectivity provider back-end; 
 - stream entity data from your custom application running in the cloud;
 - connect the existing device with custom MQTT based protocol to ThingsBoard.
 
Please review the integration diagram and video tutorial to learn more. 

 ![image](/images/user-guide/integrations/mqtt-integration.svg)
 
The video tutorial below describes step-by-step setting up of MQTT Integration.

<br/>
<div id="video">  
 <div id="video_wrapper">
     <iframe src="https://www.youtube.com/embed/OPkE5FXGPrs" frameborder="0" allowfullscreen></iframe>
 </div>
</div> 

## MQTT Integration Configuration

This guide discloses MQTT Integration to provide devices connection to the Platform and ability to send RPC commands to devices.

### Prerequisites

Let's assume that we have a thermostat which is sending current temperature readings and receives temperature settings from knob control.

In this tutorial, we will use:

 - ThingsBoard Professional Edition instance — [cloud.thingsboard.io](https://cloud.thingsboard.io);
 - MQTT broker, accessible by ThingsBoard PE instance — broker.hivemq.com:1883;
 - mosquitto_pub and mosquitto_sub MQTT clients to send and receive messages;   
 - an andvanced [device simulator](/docs/user-guide/integrations/resources/two-way-mqtt-client.py) for two-way RPC example. 

Our sensor device **SN-001** publishes it's temperature readings to **tb/mqtt-integration-tutorial/sensors/SN-001/temperature** and it is subscribed to **tb/mqtt-integration-tutorial/sensors/SN-001/rx** to receive RPC calls.

We will send a message with temperature readings in a simple format: **`{"value":25.1}`**
 
### Uplink and Downlink Converters

Before setting up an MQTT integration, you need to create Uplink and Downlink converters.

**Uplink Converter** is a script for parsing, transforming and sending the data received by MQTT integration to the ThingsBoard Device instance.
**Downlink Converter** parse and transform the data sent by MQTT Integration to the external MQTT topic.

#### Uplink Converter
To create an Uplink Converter go to **Data Converters** section and Click **Add new data converter -> Create new converter**.
Name it **"MQTT Uplink Converter"** and select type **Uplink**. You may want to use debug mode for now.

**NOTE** Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging. 

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
   // convert payload to string.
   var str = decodeToString(payload);

   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}

return result;

``` 

The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard can consume. 
The format the result object should not be changed. **deviceName** and **deviceType** are required, while **attributes** and **telemetry** are optional.
**Attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

#### Downlink Converter

The Downlink converter transforming and sending the downlink RPC message to the Integration and then to an external MQTT broker.

**NOTE** Even if you won't send downlink RPC, you still need to create a dummy Downlink converter because it is required by Integration.

Create another converter with the name **"MQTT Downlink Converter"** and type **Downlink**. Let's keep the default script for now and click **Add**.     

### MQTT Integration Setup

Go to **Integrations** section and click **Add new integration** button. Name it **MQTT Integration**, select type **MQTT**, turn the Debug mode on and from drop-down menus add recently created Uplink and Downlink converters.

Set host to **broker.hivemq.com** and port to **1883**. Enter the arbitrary Client ID. 

Add a Topic Filter **tb/mqtt-integration-tutorial/sensors/+/temperature**. You can also select an MQTT QoS level. We use MQTT QoS level 0 (At most once) by default.      

Let's leave the Downlink topic pattern by default.

Click **Add** to save the integration.

### Send Uplink message

Now let's simulate the device sending a temperature reading to the integration:

```shell
mosquitto_pub -h broker.hivemq.com -p 1883 -t "tb/mqtt-integration-tutorial/sensors/SN-001/temperature" -m '{"value":25.1}'
```

Now when you go to **Device Groups -> All** you should be able to see a **SN-001** device provisioned by Integration.
Click on the device, go to **Latest Telemetry** tab to see "temperature" key and its value (25.1) there.   

Go back to your Integration and click on Events tab. Here you see the message that was consumed by Integration.
You can also check the Events in your MQTT Uplink converter. Here you see **In**, **Out**, and **Metadata** columns. 
The **In** and **Metadata** are the input for the data converter, and **Out** is the result. 

To summarize this part, the Uplink Data Converter defines completely how the device will be provisioned and how the input data will be interpreted. 
In our example we capture the device name from the topic (SN-001), set to it the default device type (sensor) and populate a single telemetry value. 
In more complex cases you can write a script that will take this data from any part of data or metadata.

### Send One-Way RPC to Device

This section describes how to send a one-way RPC request to the device using Control Widgets.

Go to your **Dashboard Groups -> All** section and create a new dashboard named **MQTT Tutorial**. Open the dashboard, enter the Edit mode, then click on Entity Aliases icon on the top-right.

Create a new alias, name it **SN-001**, select filter type "Single Entity", type "Device" and choose our SN-001 sensor. Press **Add** and then **Save**.

Now **Add New Widget**, select **Control Widgets** from drop down menu and select any Knob Control widget.

On the **Data** field under **Target Device** select created alias. Go to Advanced tab and set Minimum value to 15 and Maximum value to 45. Leave the rest by default.
On the Settings tab set **Number of digits after floating point** to 0 and save your changes, close the widget edit dialog and save the changes to the dashboard.

Now go to **Rule Chains** section and open **Root Rule Chain**. Double-click on **Message Type Switch** node and enable the Debug mode on it. Now go back to your dashboard and turn
knob a couple of times. In the Message Type Switch node on the events tab you should now see the incoming messages with the message type **RPC_CALL_FROM_SERVER_TO_DEVICE**
and relation type **RPC Request to Device**. Check out what data and metadata has been sent by the Knob Control to the Rule Engine.

To make sensor to perform this command you need forwarding messages with the **RPC Request to Device** type to the Downlink Data Converter.
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

The script above removes quotes from msg.params value, which comes as quoted string, and parses it to integer. Then it builds a result object which is passed to the Integration.
The result object structure should be followed: the data (the message payload sent to the external MQTT broker as-is) and the metadata (is used by Integrationin). In our case, the Integration downlink topic is configured to **${topic}**, which means that the integration will take the metadata.topic and use it as the downlink topic.

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

Now try to simulate sending an RPC request to the device and recieving a response.

To have this you should modify Converters to send downlink messages to **tb/mqtt-integration-tutorial/sensors/+/rx/twoway** and receive device responses on 
**tb/mqtt-integration-tutorial/sensors/+/rx/response**

Change Downlink converter code to send messages to **tb/mqtt-integration-tutorial/sensors/+/rx/twoway**:

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

Then prepare the Uplink Converter to receive the response messages. Go to **"MQTT Uplink Converter"** and paste the following code:

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
The script above is slightly different from what we had initially. It distinguishes between Post Telemetry requests and RPC call Responses, thus publishing different kind of output to Rule Engine.

You also must add a topic filter in your Integration in order to receive the RPC response messages: **MQTT Integration** -> **Topic Filters** -> **Add Topic Filter**. Add *tb/mqtt-integration-tutorial/sensors/+/rx/response* topic with the default QoS level and click save.

Now run device emulator. Notice, the mosquitto_pub and mosquitto_sub is not suffice, so  please use an [advanced two-way simulator](/docs/user-guide/integrations/resources/two-way-mqtt-client.py) from your terminal:

```js
python two-way-mqtt-client.py
```

Try to turn the knob wheel on a dashboard. In the terminal window you should have (or similar):

```log
Incoming message
Topic: tb/mqtt-integration-tutorial/sensors/SN-001/rx/twoway
Message: {"value":36}
This is a Two-way RPC call. Going to reply now!
Sending a response message: {"rpcReceived":"OK"}
```

Go to **Device Groups** and find your SN-001 device. Check the telemetry tab: **rpcReceived** telemetry value is **OK**.

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}
