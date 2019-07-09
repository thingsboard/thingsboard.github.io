---
layout: docwithnav
title: UDP Integration
description: UDP Integration Guide 

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

UDP Integration allows to stream data from devices which use a UDP protocol to ThingsBoard and converts payloads of these devices into the ThingsBoard format.

Please review the integration diagram to learn more.

![image](/images/user-guide/integrations/udp-integration.svg)

## Setup UDP Integration


#### For messages in string format

Go to **Integrations** section and click **Add new integration** button.
Name it **Demo UDP TEXT Integration Test**, select type **UDP**, turn the Debug mode on and from drop-down menus add recently created Uplink and Downlink converters.

Specify Port: **11562** for **Text Channel Inbound Handler** which work depends on the so-called **Datagram-Packet To String Message Decoder**.

**Datagram-Packet To String Message Decoder** which decodes from one message to an other message in our case from **DatagramPacket** to **String**.<br>

**Text Channel Inbound Handler** is specific handler class which allows to explicit only handle a String type of messages.<br>

#### For messages in hex string format

Go to **Integrations** section and click **Add new integration** button.
Name it **Demo UDP HEX Integration Test**, select type **UDP**, turn the Debug mode on and from drop-down menus add recently created Uplink and Downlink converters.

Specify Port: **11564** for **Text Channel Inbound Handler** which work depends on the so-called **Datagram-Packet To ObjectNode Message Decoder**.

**Datagram-Packet To ObjectNode Message Decoder** which decodes from one message to an other message in our case from **DatagramPacket** to **ObjectNode**.<br>

**Text Channel Inbound Handler** is specific handler class which allows to explicit only handle a ObjectNode type of messages.<br>

#### For messages in binary format

Go to **Integrations** section and click **Add new integration** button.
Name it **Demo UDP BINARY Integration Test**, select type **UDP**, turn the Debug mode on and from drop-down menus add recently created Uplink and Downlink converters.

Specify Port: **11563** for **Binary Channel Inbound Handler** which work depends on the so-called **Datagram-Packet To Byte Array Message Decoder**.

**Datagram-Packet To Byte Array Message Decoder** that decodes from **DatagramPacket** to **byte[]**.<br>

**Binary Channel Inbound Handler** is specific handler class which allows to explicit only handle a **byte[]** type of messages.<br>

#### A brief description of Socket Channel Options used to configure the server
- **SO_BROADCAST** - enables or disables a DataGramSocket's ability to send broadcast messages;
- **SO_RCVBUF** - the size in bytes of the socket data receive buffer (will specify **65535**);

Then we need to configure the **Handler Configuration**.
Handler Type: **TEXT**, **HEX** or **BINARY**.

Click **Add** to save the Integration.

#### Uplink Converter

Before setting up an **UDP integration**, you need to create an **Uplink Converter** that is a script for parsing and transforming the data received by UDP integration.

To create an **Uplink Converter** go to **Data Converters** section and Click **Add new data converter —> Create new converter**.
Name it **"UDP Uplink Converter"** and select type **Uplink**. Use debug mode for now.

**NOTE** Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging. 

Now copy & paste the following script to the Decoder function section:

```javascript
/** Decoder **/

// decode payload to string

var strArray = decodeToString(payload);
var payloadArray = strArray.replace(/\"/g, "").replace(/\s/g, "").split(',');

var result = {
    deviceName: payloadArray[0],
    deviceType: payloadArray[1],
    telemetry: {
      temperature: payloadArray[2],
      humidity: payloadArray[3]
    },
    attributes: {
      boolValue: payloadArray[4],
      serialNumber: payloadArray[5]
    }
  };

function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}
return result;

``` 

The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard can consume. 
**deviceName** and **deviceType** are required, while **attributes** and **telemetry** are optional.
**Attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

#### Downlink Converter

**In current implementation does not use the the DownLink Converter**

## Prerequisites to testing **UDP Integration**

In order to test the work of a UDP integration, in this tutorial we will use:

 - ThingsBoard Professional Edition instance — [cloud.thingsboard.io](https://cloud.thingsboard.io);
 - UDP server, accessible by ThingsBoard PE instance (port 11562 / 11563 depends from type of configuration, TEXT of BINARY);
 - **echo** command which intended to display a line of text;   
 - **netcat** utility to establish UDP connections, receive data from there and transfer them;    

Let's suppose that we have a device with some name, let's say **MyDummyDeviceA**, and some kind of message, with the following content:

```shell
msg: 'MyDummyDeviceA,UDPDevice,45.2,57.3,false,40'
```

The command to send a message to the UDP server will look like this:

```shell
echo MyDummyDeviceA,UDPDevice,45.2,57.3,false,40 | netcat <thingsbord-name-cloud-host> 11562 (or 11563 for BINARY configuration)
```

We can also send multiple messages in one string, separated by **Message Separator** (**System Line Delimiter**).
In this case, the command will look like this:

```shell
echo MyDummyDeviceA,UDPDevice,45.2,57.3,false,40<lineSeparator>MyDummyDeviceB,UDPDevice,39.2,81.2,true,39 | netcat <thingsbord-name-cloud-host> 11562 (or 11563 for BINARY configuration)
```

## Send Uplink message

Once ThingsBoard UDP Integration has been created, the UDP server starts, and then it waits for text and binary data from the devices.

Now let's simulate the device sending a temperature reading to the integration:

```shell
echo MyDummyDeviceA,UDPDevice,25.2,57.3,false,40<lineSeparator> | netcat <thingsbord-name-cloud-host> 11562 (or 11563 for BINARY configuration)
```

Once you go to **Device Groups -> All** you should find a **MyDummyDeviceA** device provisioned by the Integration.
Click on the device, go to **Latest Telemetry** tab to see "temperature" key and its value (25.2) and "humidity" key and its value (57.3) there.

## Video tutorial
 
See video tutorial below for step-by-step instruction how to setup UDP Integration.

<br/>
<div id="video">  
 <div id="video_wrapper">
     <iframe src="" frameborder="0" allowfullscreen></iframe>
 </div>
</div> 

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}