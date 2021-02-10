---
layout: docwithnav
title: TCP Integration
description: TCP Integration Guide
debug:
    0:
        image: /images/downlink/debug.png

downlink:
    0:
        image: /images/downlink/downlink_data_converter_details.png

rule_chain:
    0:
        image: /images/downlink/rule_chains_integration_downlink.png

shared_attributes:
    0:
        image: /images/downlink/device_groups_all_shared_attributes.png
    1:
        image: /images/downlink/device_groups_all_shared_attributes_update.png

events_in:
    0:
        image: /images/downlink/downlink_converter_events_in.png

events_out:
    0:
        image: /images/downlink/downlink_converter_events_out.png

terminal:
    0:
        image: /images/downlink/terminal.png
---



{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

TCP Integration allows to stream data from devices which use a TCP transport protocol to ThingsBoard and converts payloads of these devices into the ThingsBoard format.


**Please note** TCP Integration can be started only as [Remote Integration](/docs/user-guide/integrations/remote-integrations). It could be started on the same machine, where TB instance is running, or you can start in on another machine, that has access over the network to the TB instance.  

Please review the integration diagram to learn more.

![image](/images/user-guide/integrations/tcp-integration.svg)

## TCP Integration Configuration

### Prerequisites

In this tutorial, we will use:

 - ThingsBoard Professional Edition instance — [thingsboard.cloud](https://thingsboard.cloud);
 - TCP Integration, running externally and connected to the cloud ThingsBoard PE instance;
 - **echo** command which intended to display a line of text, and will redirect it's output to **netcat** (**nc**) utility;
 - **netcat** (**nc**) utility to establish TCP connections, receive data from there and transfer them;    

Let's assume that we have a sensor which is sending current temperature and humidity readings.
Our sensor device **SN-002** publishes it's temperature and humidity readings to TCP Integration on **10560** port to the machine where TCP Integration is running.

For demo purposes we assume that our device is smart enough to send data in 3 different payload types:
 - **Text** - in this case payload is **SN-002,default,temperature,25.7\n\rSN-002,default,humidity,69**
 - **JSON** - in this case payload is 
 
```json
[
  {
    "deviceName": "SN-002",
    "deviceType": "default",
    "temperature": 25.7,
    "humidity": 69
  }
]
```
 - **Binary** - in this case binary payload is **\x30\x30\x30\x30\x11\x53\x4e\x2d\x30\x30\x32\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x00\x00\x00** (in HEX string). 
  Here is the description of the bytes in this payload:
    - **0-3** bytes - **\x30\x30\x30\x30** - dummy bytes to show how you can skip particular prefix bytes in your payload. These bytes are included for sample purposes;
    - **4** byte - **\x11** - payload length. If we convert it to decimal - **17**. So our payload in this case is limited to 17 bytes from the incoming TCP frame;
    - **5-10** bytes - **\x53\x4e\x2d\x30\x30\x32** - device name. If we convert it to text - **SN-002**;
    - **11-17** bytes - **\x64\x65\x66\x61\x75\x6c\x74** - device type. If we convert it to text - **default**;
    - **18-21** bytes - **\x32\x35\x2e\x37** - temperature telemetry. If we convert it to text - **25.7**;
    - **22-24** bytes - **\x00\x00\x00** - dummy bytes. We are going to ignore them, because payload size is **17** bytes - from **5** till **21** byte. These bytes are included for sample purposes;
    
You can select payload type based on your device capabilities and business cases.
 
**Please note** that on the machine, where TCP Integration is running, port **10560** must be opened for incoming connections - **nc** utility must be able to connect to TCP socket.
In case you are running it locally, it should be fine without any additional changes. 

### Uplink Converter

Before setting up an **TCP integration**, you need to create an **Uplink Converter** that is a script for parsing and transforming the data received by TCP integration.

To create an **Uplink Converter** go to **Data Converters** section and Click **Add new data converter —> Create new converter**.
Name it **"TCP Uplink Converter"** and select type **Uplink**. Use debug mode for now.

**NOTE** Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging. 

Choose device payload type to for decoder configuration

{% capture uplinkpayload %}
Text payload<br/>%,%text%,%templates/integration/tcp/tcp-uplink-converter-text.md%br%
JSON payload<br/>%,%json%,%templates/integration/tcp/tcp-uplink-converter-json.md%br%
Binary payload<br/>%,%binary%,%templates/integration/tcp/tcp-uplink-converter-binary.md{% endcapture %}

{% include content-toggle.html content-toggle-id="tcpintegartionuplinkpayload" toggle-spec=uplinkpayload %}

#### Downlink Converter

Create Downlink in **Data converters.** To see events - enable **Debug.**

{% include images-gallery.html imageCollection="debug" %}


Add a converter to the integration. You can customize the downlink according to your configuration.
Let's consider an example where we send an attribute update message. So we should change code in the downlink encoder function under line `//downlink data input`

```
data: JSON.stringify(msg)
```
where ***msg*** is the message that we receive and send back to the device.

{% include images-gallery.html imageCollection="downlink" %}

We can send a message to the device from Rule chain using the rule node. For our example, we create the **integration downlink** node and set the ***"Attributes updated"*** link to it. When changes are made to the attribute, the downlink message will be sent to the integration. 

{% include images-gallery.html imageCollection="rule_chain" %}

We go to the **Device group** section in the **All** folder, to see this with an example. We have indicated the serial number of the device in the **Shared attributes**. Now we edit it by clicking on the "pencil" icon. Then we make changes to the attribute (change the series number from MT-22 to MT-23) and save the data.

{% include images-gallery.html imageCollection="shared_attributes" %}

Received data and data that was sent can be viewed in the downlink converter.In the **“In”** block of the **Events** tab, we see what data entered:

{% include images-gallery.html imageCollection="events_in" %}

The **“Out”** field displays messages to device:

{% include images-gallery.html imageCollection="events_out" %}

An example of a sent message and a response from ThingsBoard in the terminal:

{% include images-gallery.html imageCollection="terminal" %}

This command will send the Uplink message to the ThingsBoard and will wait for Downlink message for 60 seconds if the message exists. 
To learn how to send Uplink message, please [read here](/docs/user-guide/integrations/tcp/?tcpintegrationsenduplink=text&tcpintegrationhandlerconfiguration=text&tcpintegartionuplinkpayload=json#send-uplink-message)

### TCP Integration Setup

Go to **Integrations** section and click **Add new integration** button. Name it **TCP Integration**, select type **TCP**, turn the Debug mode on and from drop-down menus add recently created Uplink converter.

As you mentioned **Execute remotely** is checked and can not be modified - TCP Integration can be only **remote** type.

Please note down **Integration key** and **Integration secret** - we will use these values later in the configuration on the remote TCP Integration itself.

![image](/images/user-guide/integrations/tcp/tcp-integration-setup.png)

By default TCP Integration will use **10560** port, but you can change this to any available port in your case. 

We leave other options by default, but there is brief description of them:
- **Max number of pending connects on the socket** - The maximum queue length for incoming connection indications (a request to connect) is set to the backlog parameter. If a connection indication arrives when the queue is full, the connection is refused;
- **Size of the buffer for inbound socket** - the size in KBytes of the socket data receive buffer;
- **Size of the buffer for outbound socket** - the size in KBytes of the socket data send buffer;
- **Enable sending of keep-alive messages on connection-oriented sockets** - a flag indicating that probes should be periodically sent across the network to the opposing socket to keep the connection alive;
- **Forces a socket to send the data without buffering (disable Nagle's buffering algorithm)** - disables Nagle's algorithm on the socket which delays the transmission of data until a certain volume of pending data has accumulated.

Choose device payload type for **Handler Configuration**

{% capture handlerconfiguration %}
Text payload<br/>%,%text%,%templates/integration/tcp/tcp-handler-configuration-text.md%br%
JSON payload<br/>%,%json%,%templates/integration/tcp/tcp-handler-configuration-json.md%br%
Binary payload<br/>%,%binary%,%templates/integration/tcp/tcp-handler-configuration-binary.md{% endcapture %}

{% include content-toggle.html content-toggle-id="tcpintegrationhandlerconfiguration" toggle-spec=handlerconfiguration %}

Click **Add** to save the Integration.

#### Installing and running external TCP Integration

Please refer to the [Remote Integration guide](/docs/user-guide/integrations/remote-integrations) and install TCP Integration service locally or on separate machine.

Please use **Integration key** and **Integration secret** from the above section for your TCP Integration configuration.  

### Send Uplink message

Once ThingsBoard TCP Integration has been created, the TCP server starts, and then it waits for data from the devices.

Choose device payload type to send uplink message

{% capture senduplink %}
Text payload<br/>%,%text%,%templates/integration/tcp/tcp-send-uplink-text.md%br%
JSON payload<br/>%,%json%,%templates/integration/tcp/tcp-send-uplink-json.md%br%
Binary payload<br/>%,%binary%,%templates/integration/tcp/tcp-send-uplink-binary.md{% endcapture %}

{% include content-toggle.html content-toggle-id="tcpintegrationsenduplink" toggle-spec=senduplink %}

Once you go to **Device Groups -> All** you should find a **SN-002** device provisioned by the Integration.
Click on the device, go to **Latest Telemetry** tab to see "temperature" key and its value (25.7) there.

If your payload contains **humidity** telemetry, you should see "humidity" key and its value (69) there as well.

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}