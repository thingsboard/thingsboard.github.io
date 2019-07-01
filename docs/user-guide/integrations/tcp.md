---
layout: docwithnav
title: TCP Integration
description: TCP Integration Guide 

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

TCP Integration allows to stream data from devices which use a TCP transport protocol to ThingsBoard and converts payloads of these devices into the ThingsBoard format.

Please review the integration diagram to learn more.

![image](/images/user-guide/integrations/tcp-integration.svg)

## Setup TCP Integration


#### For messages in string format

Go to **Integrations** section and click **Add new integration** button.
Name it **Demo TCP TEXT Integration Test**, select type **TCP**, turn the Debug mode on and from drop-down menus add recently created Uplink and Downlink converters.

Specify Port: **10562** for **Text Channel Inbound Handler** which work depends on the so-called **Text Delimiter Decoder**.

**Text Delimiter Decoder** that splits the received ByteBufs by one or more delimiters. It is particularly useful for decoding the frames which ends with a delimiter such as NUL or newline characters.<br>
In order for this class to work correctly, we must correctly set the following parameters:
- **maxFrameLength** - the maximum length of the decoded frame. A TooLongFrameException is thrown if the length of the frame exceeds this value.
- **stripDelimiter** - whether the decoded frame should strip out the delimiter or not
- **delimiter** - the delimiter

**Text Channel Inbound Handler** is specific handler class which allows to explicit only handle a ByteBuf type of messages.<br>

#### For messages in binary format

Go to **Integrations** section and click **Add new integration** button.
Name it **Demo TCP BINARY Integration Test**, select type **TCP**, turn the Debug mode on and from drop-down menus add recently created Uplink and Downlink converters.

Specify Port: **10563** for **Binary Channel Inbound Handler** which work depends on the so-called **Binary Frame Decoder**.

**Binary Frame Decoder** extends LengthFieldBasedFrameDecoder class and receives ByteBufs, reads the first two bytes,
 then casts them to a long number, which is the length of the message and reads the message byte by its length.</br>
In order for this class to work correctly, we must correctly set the following parameters:
- **maxFrameLength** - the maximum length of the decoded frame. A TooLongFrameException is thrown if the length of the frame exceeds this value.
- **lengthFieldOffset** - the offset of the length field
- **lengthFieldLength** - the length of the length field
- **lengthAdjustment** - the compensation value to add to the value of the length field
- **initialBytesToStrip** - the number of first bytes to strip out from the decoded frame
- **failFast** - If true, a TooLongFrameException is thrown as soon as the decoder notices the length of the frame will exceed maxFrameLength regardless of whether the entire frame has been read. If false, a TooLongFrameException is thrown after the entire frame that exceeds maxFrameLength has been read.

**Binary Channel Inbound Handler** is specific handler class which allows to explicit only handle a ByteBuf type of messages.<br>

#### A brief description of Socket Channel Options used to configure the server
- **SO_BACKLOG** - it's a passed through socket option determining the number of connections queued (will specify on **128**);
- **SO_REUSEADDR** - when a TCP connection is closed the connection may remain in a timeout state for a period of time after the connection is closed (typically known as the TIME_WAIT state or 2MSL wait state). For applications using a well known socket address or port it may not be possible to bind a socket to the required SocketAddress if there is a connection in the timeout state involving the socket address or port. Enabling SO_REUSEADDR prior to binding the socket using bind(SocketAddress) allows the socket to be bound even though a previous connection is in a timeout state (will specify **true**);
- **SO_RCVBUF** - the size in bytes of the socket data receive buffer (will specify **65535**);
- **SO_KEEPALIVE** - a flag indicating that probes should be periodically sent across the network to the oposing socket to keep the connection alive (will specify **true**);
- **TCP_NODELAY** - disables Nagle's algorithm on the socket which delays the transmission of data until a certain volume of pending data has accumulated (will specify **true**);
- **SO_SNDBUF** - the size in bytes of the socket's data send buffer (will specify **65535** too);

Then we need to configure the **Handler Configuration**.
Handler Type: **TEXT** or **BINARY**.

If **TEXT** then we will need to set **Charset name** and **Message Separator**
else if **BINARY** then we will need to set **Message size**.
We use **TEXT** so then **Charset name** is **'UTF-8'** and **Message Separator** is **System Line Delimiter**.

Click **Add** to save the Integration.

#### Uplink Converter

Before setting up an **TCP integration**, you need to create an **Uplink Converter** that is a script for parsing and transforming the data received by TCP integration.

To create an **Uplink Converter** go to **Data Converters** section and Click **Add new data converter —> Create new converter**.
Name it **"TCP Uplink Converter"** and select type **Uplink**. Use debug mode for now.

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

## Prerequisites to testing **TCP Integration**

In order to test the work of a TCP integration, in this tutorial we will use:

 - ThingsBoard Professional Edition instance — [cloud.thingsboard.io](https://cloud.thingsboard.io);
 - TCP server, accessible by ThingsBoard PE instance (port 10562 / 10563 depends from type of configuration, TEXT of BINARY);
 - **echo** command which intended to display a line of text;   
 - **netcat** utility to establish TCP connections, receive data from there and transfer them;    

Let's suppose that we have a device with some name, let's say **MyDummyDeviceA**, and some kind of message, with the following content:

```shell
msg: 'MyDummyDeviceA,TCPDevice,45.2,57.3,false,40'
```

The command to send a message to the TCP server will look like this:

```shell
echo MyDummyDeviceA,TCPDevice,45.2,57.3,false,40 | netcat <thingsbord-name-cloud-host> 10562 (or 10563 for BINARY configuration)
```

We can also send multiple messages in one string, separated by **Message Separator** (**System Line Delimiter**).
In this case, the command will look like this:

```shell
echo MyDummyDeviceA,TCPDevice,45.2,57.3,false,40<lineSeparator>MyDummyDeviceB,TCPDevice,39.2,81.2,true,39 | netcat <thingsbord-name-cloud-host> 10562 (or 10563 for BINARY configuration)
```

## Send Uplink message

Once ThingsBoard TCP Integration has been created, the TCP server starts, and then it waits for text and binary data from the devices.

Now let's simulate the device sending a temperature reading to the integration:

```shell
echo MyDummyDeviceA,TCPDevice,25.2,57.3,false,40<lineSeparator> | netcat <thingsbord-name-cloud-host> 10562 (or 10563 for BINARY configuration)
```

Once you go to **Device Groups -> All** you should find a **MyDummyDeviceA** device provisioned by the Integration.
Click on the device, go to **Latest Telemetry** tab to see "temperature" key and its value (25.2) and "humidity" key and its value (57.3) there.

## Video tutorial
 
See video tutorial below for step-by-step instruction how to setup TCP Integration.

<br/>
<div id="video">  
 <div id="video_wrapper">
     <iframe src=" " frameborder="0" allowfullscreen></iframe>
 </div>
</div>

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}