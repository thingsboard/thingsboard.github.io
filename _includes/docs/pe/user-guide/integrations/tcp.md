{% assign peDocsPrefix = '' %}
{% if docsPrefix == 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% endif %}

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

TCP Integration allows to stream data from devices which use a TCP transport protocol to ThingsBoard and converts payloads of these devices into the ThingsBoard format.


**Please note** TCP Integration can be started only as [Remote Integration](/docs/{{peDocsPrefix}}user-guide/integrations/remote-integrations). It could be started on the same machine, where TB instance is running, or you can start in on another machine, that has access over the network to the TB instance.

Please review the integration diagram to learn more.

![image](/images/user-guide/integrations/tcp-integration.svg)

## TCP Integration Configuration

### Prerequisites

In this tutorial, we will use:

{% if docsPrefix == "pe/" %}
 - The instance of [ThingsBoard Professional Edition](https://thingsboard.io/docs/user-guide/install/pe/installation-options/) installed locally;
{% endif %}
{% if docsPrefix == "paas/" %}
 - ThingsBoard Professional Edition instance — [thingsboard.cloud](https://thingsboard.cloud);
{% endif %}
 - TCP Integration, running externally and connected to the cloud ThingsBoard PE instance;
 - **echo** command which intended to display a line of text, and will redirect it's output to **netcat** (**nc**) utility;
 - **netcat** (**nc**) utility to establish TCP connections, receive data from there and transfer them;    

Let's assume that we have a sensor which is sending current temperature and humidity readings.
Our sensor device **SN-002** publishes it's temperature and humidity readings to TCP Integration on **10560** port to the machine where TCP Integration is running.

For demo purposes we assume that our device is smart enough to send data in 3 different payload types:
 - **Text** - in this case payload is:

```text
SN-002,default,temperature,25.7\n\rSN-002,default,humidity,69
```

 - **JSON** - in this case payload is:

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
 - **Binary** - in this case, the payload looks like this (in HEX string):

```text
\x30\x30\x30\x30\x11\x53\x4e\x2d\x30\x30\x32\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x00\x00\x00
```

Here is the description of the bytes in this payload:
 - **0-3** bytes - **\x30\x30\x30\x30** - dummy bytes to show how you can skip particular prefix bytes in your payload. These bytes are included for sample purposes;
 - **4** byte - **\x11** - payload length. If we convert it to decimal - **17**. So our payload in this case is limited to 17 bytes from the incoming TCP frame;
 - **5-10** bytes - **\x53\x4e\x2d\x30\x30\x32** - device name. If we convert it to text - **SN-002**;
 - **11-17** bytes - **\x64\x65\x66\x61\x75\x6c\x74** - device type. If we convert it to text - **default**;
 - **18-21** bytes - **\x32\x35\x2e\x37** - temperature telemetry. If we convert it to text - **25.7**;
 - **22-24** bytes - **\x00\x00\x00** - dummy bytes. We are going to ignore them, because payload size is **17** bytes - from **5** till **21** byte. These bytes are included for sample purposes;

You can select payload type based on your device capabilities and business cases.

{% capture difference %}
**Please note**
<br>
On the machine, where TCP Integration is running, port **10560** must be opened for incoming connections - **nc** utility must be able to connect to TCP socket. In case you are running it locally, it should be fine without any additional changes.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Uplink Converter

Before setting up an **TCP integration**, you need to create an **Uplink Converter** that is a script for parsing and transforming the data received by TCP integration to a format that ThingsBoard can consume.
**deviceName** and **deviceType** are required, while **attributes** and **telemetry** are optional. **attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

To create an **Uplink Converter** go to **Data Converters** section and Click **Add new data converter —> Create new converter**.
Name it **"TCP Uplink Converter"** and select type **Uplink**. Use debug mode for now.

{% capture difference %}
**NOTE**
<br>
Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Choose device payload type to for decoder configuration:**

- **Text payload**

{% include templates/tbel-vs-js.md %}

{% capture tcpuplinktext %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/tcp/tcp-uplink-text-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/tcp/tcp-uplink-text-java.md{% endcapture %}

{% include content-toggle.html content-toggle-id="tcpuplinktext" toggle-spec=tcpuplinktext %}

- **JSON payload**

{% capture tcpuplinkjson %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/tcp/tcp-uplink-json-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/tcp/tcp-uplink-json-java.md{% endcapture %}

{% include content-toggle.html content-toggle-id="tcpuplinkjson" toggle-spec=tcpuplinkjson %}

- **Binary payload**

{% capture tcpuplinkbinary %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/tcp/tcp-uplink-binary-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/tcp/tcp-uplink-binary-java.md{% endcapture %}

{% include content-toggle.html content-toggle-id="tcpuplinkbinary" toggle-spec=tcpuplinkbinary %}

### TCP Integration Setup

- Go to **Integrations** section and click **Add new integration** button. Name it **TCP Integration**, select type **TCP**;

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-integration-setup-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-integration-setup-1-paas.png)
{% endif %}

- Add recently created TCP Uplink Converter;

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-integration-setup-2-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-integration-setup-2-paas.png)
{% endif %}

- For now, leave the "Downlink Data Converter" field blank.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-integration-setup-3-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-integration-setup-3-paas.png)
{% endif %}

As you mentioned **Execute remotely** is checked and can not be modified - TCP Integration can be only **remote** type.

By default TCP Integration will use **10560** port, but you can change this to any available port in your case.

Please note down **Integration key** and **Integration secret** - we will use these values later in the configuration on the remote TCP Integration itself.

We leave other options by default, but there is brief description of them:
- **Max number of pending connects on the socket** - The maximum queue length for incoming connection indications (a request to connect) is set to the backlog parameter. If a connection indication arrives when the queue is full, the connection is refused;
- **Size of the buffer for inbound socket** - the size in KBytes of the socket data receive buffer;
- **Size of the buffer for outbound socket** - the size in KBytes of the socket data send buffer;
- **Enable sending of keep-alive messages on connection-oriented sockets** - a flag indicating that probes should be periodically sent across the network to the opposing socket to keep the connection alive;
- **Forces a socket to send the data without buffering (disable Nagle's buffering algorithm)** - disables Nagle's algorithm on the socket which delays the transmission of data until a certain volume of pending data has accumulated.

Choose device payload type for **Handler Configuration**

{% capture handlerconfiguration %}
Text payload<br>%,%text%,%templates/integration/tcp/tcp-handler-configuration-text.md%br%
JSON payload<br>%,%json%,%templates/integration/tcp/tcp-handler-configuration-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/tcp/tcp-handler-configuration-binary.md{% endcapture %}

{% include content-toggle.html content-toggle-id="tcpintegrationhandlerconfiguration" toggle-spec=handlerconfiguration %}

Click **Add** to save the Integration.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-integration-setup-4-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-integration-setup-4-paas.png)
{% endif %}

#### Installing and running external TCP Integration

Please refer to the [Remote Integration guide](/docs/{{peDocsPrefix}}user-guide/integrations/remote-integrations) and install TCP Integration service locally or on separate machine.

Please use **Integration key** and **Integration secret** from the above section for your TCP Integration configuration.

### Send Uplink message

Once ThingsBoard TCP Integration has been created, the TCP server starts, and then it waits for data from the devices.

Choose device payload type to send uplink message

{% capture senduplink %}
Text payload<br>%,%text%,%templates/integration/tcp/tcp-send-uplink-text.md%br%
JSON payload<br>%,%json%,%templates/integration/tcp/tcp-send-uplink-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/tcp/tcp-send-uplink-binary.md{% endcapture %}

{% include content-toggle.html content-toggle-id="tcpintegrationsenduplink" toggle-spec=senduplink %}

Once you go to **Device Groups -> All** you should find a **SN-002** device provisioned by the Integration.
Click on the device, go to **Latest Telemetry** tab to see "temperature" key and its value (25.7) there.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-integration-create-device-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-integration-create-device-1-paas.png)
{% endif %}

If your payload contains **humidity** telemetry, you should see "humidity" key and its value (69) there as well.

## Advanced usage: Downlink Converter

In **Data converters** create **Downlink converter** with default script. To see events - enable **Debug.**

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-create-downlink-converter-tbel-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-create-downlink-converter-tbel-1-paas.png)
{% endif %}

Add a converter to the integration. You can customize the downlink according to your configuration.
Let's consider an example where we send an attribute update message. So we should change code in the downlink encoder function under line `//downlink data`

```
data: JSON.stringify(msg)
```
where ***msg*** is the message that we receive and send back to the device.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-edit-downlink-converter-tbel-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-edit-downlink-converter-tbel-1-paas.png)
{% endif %}

Now you have to add a converter to the integration. 
Optionally configure Cache Size and Cache time to live in minutes (able just for TCP Downlink).

{% capture difference %}
Cache size and Time to live - features, that helps to avoid memory leak when we are storing connections.<br>
Cache time to live - time to storage messages.<br>
Cache size - maximum size of messages for TCP client.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-add-downlink-converter-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-add-downlink-converter-paas.png)
{% endif %}

<br>


When integration configured and ready to use, we need to go to Rule Chains, choose ‘Root Rule Chain’ and here create rule node **Integration Downlink**. Input here some name, choose which integration you need to use and tap **Add**.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-rule-chain-downlink-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-rule-chain-downlink-paas.png)
{% endif %}

After this steps, we need to tap on a right grey circle of rule node **message type switch** and drag this circle to left side of ‘Integration Downlink’, here lets choose **Attribute Update**, tap ‘Add’ and save Rule node.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-rule-chain-and-attributes-updated-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-rule-chain-and-attributes-updated-paas.png)
{% endif %}

### Test Downlink

To test downlink, go to **"All"** folder in the **Device group** section. Create some **shared attribute** on device **SN-002** and send some Uplink message on this device.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-create-shared-add-attribute-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-create-shared-add-attribute-paas.png)
{% endif %}

Received data and data that was sent can be viewed in the downlink converter.In the **“In”** block of the **Events** tab, we see what data entered:

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-downlink-converter-events-in-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-downlink-converter-events-in-paas.png)
{% endif %}

The **“Out”** field displays messages to device:

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/tcp/tcp-downlink-converter-events-out-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/tcp/tcp-downlink-converter-events-out-paas.png)
{% endif %}

An example of a sent message and a response from ThingsBoard in the terminal:

![image](/images/user-guide/integrations/tcp/tcp-terminal-send-downlink-message.png)

This command will send the Uplink message to the ThingsBoard and will wait for Downlink message for 60 seconds if the message exists. 
To learn how to send Uplink message, please [read here](/docs/{{peDocsPrefix}}user-guide/integrations/tcp/?tcpintegrationsenduplink=text&tcpintegrationhandlerconfiguration=text&tcpintegartionuplinkpayload=json#send-uplink-message)



## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
