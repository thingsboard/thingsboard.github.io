---
layout: docwithnav
title: MQTT Integration
description: MQTT Integration guide

uplink:
    0:
        image: /images/user-guide/integrations/mqtt/uplink.png
    1:
        image: /images/user-guide/integrations/mqtt/uplink-1.png

uplink-testcode:
    0:
        image: /images/user-guide/integrations/mqtt/uplink-testcode-0.png
    1:
        image: /images/user-guide/integrations/mqtt/uplink-testcode.png
    2:
        image: /images/user-guide/integrations/mqtt/uplink-testcode-1.png
    3: 
        image: /images/user-guide/integrations/mqtt/uplink-testcode-2.png

downlink:
    0:
        image: /images/user-guide/integrations/mqtt/downlink.png

add-integration:
    0:
        image: /images/user-guide/integrations/mqtt/add-integration.png
    1:
        image: /images/user-guide/integrations/mqtt/add-mqtt.png
    2:
        image: /images/user-guide/integrations/mqtt/add-mqtt-1.png

send-uplink:
    0:
        image: /images/user-guide/integrations/mqtt/send-uplink.png
    1:
        image: /images/user-guide/integrations/mqtt/send-uplink-1.png
    2:
        image: /images/user-guide/integrations/mqtt/send-uplink-2.png
    3:
        image: /images/user-guide/integrations/mqtt/send-uplink-3.png
    4:
        image: /images/user-guide/integrations/mqtt/send-uplink-4.png

one-way-rpc:
    0:
        image: /images/user-guide/integrations/mqtt/rpc.png
    1:
        image: /images/user-guide/integrations/mqtt/rpc-1.png
    2:
        image: /images/user-guide/integrations/mqtt/rpc-2.png
    3:
        image: /images/user-guide/integrations/mqtt/rpc-3.png
    4:
        image: /images/user-guide/integrations/mqtt/rpc-4.png
    5:
        image: /images/user-guide/integrations/mqtt/rpc-5.png
    6:
        image: /images/user-guide/integrations/mqtt/rpc-6.png
    7:
        image: /images/user-guide/integrations/mqtt/rpc-7.png
    8:
        image: /images/user-guide/integrations/mqtt/rpc-9.png
    9:
        image: /images/user-guide/integrations/mqtt/rpc-10.png
    10:
        image: /images/user-guide/integrations/mqtt/rpc-11.png
    11:
        image: /images/user-guide/integrations/mqtt/rpc-12.png
    12:
        image: /images/user-guide/integrations/mqtt/rpc-13.png
    13:
        image: /images/user-guide/integrations/mqtt/rpc-14.png
    14:
        image: /images/user-guide/integrations/mqtt/rpc-15.png
    15:
        image: /images/user-guide/integrations/mqtt/rpc-16.png
    16:
        image: /images/user-guide/integrations/mqtt/rpc-17.png

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

The MQTT Integration allows connecting to external MQTT brokers, subscribing to data streams from those brokers and convert any type of payload from your devices to the ThingsBoard message format. 
Its typical use is whenever your devices are already connected to an external MQTT broker, any other IoT platform, or MQTT backend connection provider. 

Please review the integration diagram. 

 ![image](/images/user-guide/integrations/mqtt-integration.png)
<br>  
 
ThingsBoard MQTT Integration acts as an MQTT client. It subscribes to topics and converts the data into telemetry and attribute updates. 
In the case of a downlink message, the MQTT integration converts it to the device-suitable format and pushes it to an external the MQTT broker.  

**NOTE** that MQTT broker should be either co-located with ThingsBoard instance or deployed to the cloud and have a valid DNS name or static IP address. 
ThingsBoard instance running in the cloud cannot connect to the MQTT broker deployed on the local network.

**In this tutorial, we will use:**

 - ThingsBoard Professional Edition instance — [thingsboard.cloud](https://thingsboard.cloud);
 - MQTT broker, accessible by ThingsBoard PE instance — broker.hivemq.com (port 1883);
 - mosquitto_pub and mosquitto_sub MQTT clients to send and receive messages;   
 - an advanced [device simulator](/docs/user-guide/integrations/resources/mqtt-client.py) for RPC simulation example. 

Suppose we have a sensor that sends current temperature readings. 
Our SN-001 sensor device publishes its temperature readings to **tb/mqtt-integration-tutorial/sensors/SN-001/temperature** and it is subscribed to **tb/mqtt-integration-tutorial/sensors/SN-001/rx** to receive RPC calls.  
We will send a message with temperature readings in a simple format: **`{"value":25.1}`**


## Create Data Converters

#### Create Uplink Converter

Uplink Converter is a script for parsing and transforming the data received by MQTT integration.

To create an Uplink Converter:
1. Go to Data Converters section and click the "+" sign in the top right corner of the screen, from the drop-down menu select _Create new converter_.
2. Name it "MQTT uplink" and select type Uplink. Use debug mode for now.

**NOTE** Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging. 

{% include images-gallery.html imageCollection="uplink" %}

Example script for the Decoder function section:

```ruby
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
**deviceName** and **deviceType** are required, while attributes and telemetry are optional.
**Attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

**Let's test the code.**  
To see if the code works, we should toggle the uplink edit mode and click the green "Test decoder function" button on the left lower side of the data converter details window.
Copy the topic pattern from the function decoder section. Click "Add" in the Metadata section, a name for the key and paste the topic pattern into the value line. Substitute the topic name with some real value. 
Click the green "Test" button in the left lower corner of the screen. If the converted data appears in the Output section, the code works.

{% include images-gallery.html imageCollection="uplink-testcode" %}

#### Create Downlink converter

Downlink Converter parses and transforms the data sent from ThingsBoard to the format that is consumed by existing device(s). 
The Downlink converter transforms outgoing RPC message, and then the Integration sends it to external MQTT broker.  

**NOTE** Even if you don't send a downlink RPC, you still will need to create a dummy Downlink converter.
Create another converter with the name "MQTT Downlink" and type Downlink. Leave the default script and click "Add".

{% include images-gallery.html imageCollection="downlink" %}

## Create Integration

To create an MQTT integration, you should:

1. Go to Integrations section and click the "Add new integration" button. 
Name it MQTT Integration, select type MQTT, turn the Debug mode on and from drop-down menus add recently created Uplink and Downlink converters.
2. Specify host: **broker.hivemq.com**. Port: **1883**. It is better to uncheck the Clean session parameter. Many brokers do not support sticky sessions, so will silently close the connection if you try to connect with this option enabled. 
3. Add a Topic Filter **tb/mqtt-integration-tutorial/sensors/+/temperature**. You can also select an MQTT QoS level. MQTT QoS level 0 (At most once) is used by default.    
4. Let's leave the Downlink topic pattern by default, meaning that the Integration will take the metadata.topic and use it as the downlink topic.
5. Click "Add" to save the Integration.

{% include images-gallery.html imageCollection="add-integration" %}

## Send Uplink message

The Uplink Data Converter defines provisioning of device and interpreting the input data. Let's simulate sending temperature readings from the device to the integration:

1. Input the following command in the terminal and press Enter:

```ruby
mosquitto_pub -h broker.hivemq.com -p 1883 -t "tb/mqtt-integration-tutorial/sensors/SN-001/temperature" -m '{"value":25.1}'
```

2. Now, when you go to the "Device Groups -> All" section, you should find an SN-001 device provisioned by the Integration.
Click on the device, go to the Latest Telemetry tab to see the "temperature" key and its value (25.1) there.   

3. Go back to the MQTT uplink data converter and click on the Events tab. There you'll see the message consumed by the Integration.
On Events tab of your MQTT Uplink converter there will be "In", "Out", and "Metadata" columns. 
The "In" and "Metadata" are the input for the data converter, and "Out" is the result. 

{% include images-gallery.html imageCollection="send-uplink" %}
   
In the example, the device name was recorded from the topic (SN-001), the default device type (sensor) was set, and the telemetry value was populated. 
In more complex cases you can write a script that will take this data from any part of data or metadata.

## Advanced Usage

#### Send One-Way RPC to Device

To send a one-way RPC request to the device using Control Widgets, you should:

{% include images-gallery.html imageCollection="one-way-rpc" %}

1. Go to the "Dashboard Groups -> All" section, create a new dashboard and name it MQTT Dashboard. Open the dashboard and add an alias by clicking on Entity Aliases icon on the top-right.
2. Name the alias (Sensor, for example), select filter type "Single Entity", type "Device" and choose our SN-001 sensor. Press Add and then Save.
3. Now **Add New Widget**, select **Control Widgets** from drop down menu and select any Knob Control widget.
4. On the **Data** field select created alias. Go to Advanced tab and set Minimum value to 15 and Maximum value to 45. Leave the rest by default.
5. On the Settings tab set **Number of digits after floating point** to 0 and save your changes, close the widget edit dialog and save the changes to the dashboard.
6. Go to **Rule Chains** section and open **Root Rule Chain**. Double-click on **Message Type Switch** node and enable the Debug mode on it. Now go back to your dashboard and turn knob a couple of times. In the Message Type Switch node on the Events tab you should then see incoming messages with the message type **RPC_CALL_FROM_SERVER_TO_DEVICE** and relation type **RPC Request to Device**. You can check out what data and metadata was sent by the Knob Control to the Rule Engine.
7. To make sensor perform this command, you need **RPC Request to Device** type messages to be forwarded to the Downlink Data Converter. 
   In the Root Rule Chain editor find the **Integration Downlink** node, drag and drop it to the rule chain. Name it **MQTT Integration Downlink**, select the MQTT Integration and click Add.
8. Drag a connection from Message Type Switch node to MQTT Integration Downlink node with label "RPC Request to Device" and click add.
9. Go to **Data Converters** section, open your **MQTT Downlink Converter**:

```ruby
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
The result object structure should be followed: the data (the message payload sent to the external MQTT broker as-is) and the metadata (is used by Integrationin). As mentioned: the Integration downlink topic is configured to **${topic}**, which means that the integration will take the metadata.topic and use it as the downlink topic.

Open the terminal window and execute the following command:

```ruby
mosquitto_sub -h broker.hivemq.com -p 1883 -t "tb/mqtt-integration-tutorial/sensors/+/rx"
```

Go to the dashboard and turn the wheel again. In your terminal window you should receive series of the incoming messages sent by thew knob control widget:
```ruby
{"value":32}
{"value":33}
```

You can follow this video to configure RPCs to device and receive simulated response via MQTT Integration.

<br/>
<div id="video">  
 <div id="video_wrapper">
     <iframe src="https://www.youtube.com/embed/A_jCXQj_LXs" frameborder="0" allowfullscreen></iframe>
 </div>
</div> 

### Simulating of Two-Way RPC 

Now try to simulate sending an RPC request to the device with recieving a response.

First you should modify Converters to send downlink messages to **tb/mqtt-integration-tutorial/sensors/+/rx/twoway** and receive device responses on 
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

Now run device emulator. Notice, the mosquitto_pub and mosquitto_sub is not suffice, so please launch an [advanced simulator](/docs/user-guide/integrations/resources/mqtt-client.py):

```js
python mqtt-client.py
```

Try to turn the knob wheel on a dashboard. In the terminal window you should have an output similar to :

```js
Incoming message
Topic: tb/mqtt-integration-tutorial/sensors/SN-001/rx/twoway
Message: {"value":36}
This is a Two-way RPC call. Going to reply now!
Sending a response message: {"rpcReceived":"OK"}
```

Go to the "Device Groups" and find **rpcReceived** telemetry value is **OK** in telemetry tab of your SN-001 device.

## Video tutorial

This video is a step-by-step tutorial on setting up of MQTT Integration.

<br/>
<div id="video">  
 <div id="video_wrapper">
     <iframe src="https://www.youtube.com/embed/BeN5bsDQbdo" frameborder="0" allowfullscreen></iframe>
 </div>
</div> 

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}
