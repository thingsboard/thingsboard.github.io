{% assign peDocsPrefix = '' %}
{% if docsPrefix == 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% endif %}

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

UDP Integration allows to stream data from devices which use a UDP protocol to ThingsBoard and converts payloads of these devices into the ThingsBoard format.

**Please note** UDP Integration can be started only as [Remote Integration](/docs/{{peDocsPrefix}}user-guide/integrations/remote-integrations). It could be started on the same machine, where TB instance is running, or you can start in on another machine, that has access over the network to the TB instance.

Please review the integration diagram to learn more.

![image](/images/user-guide/integrations/udp-integration.svg)

## UDP Integration Configuration

### Prerequisites

In this tutorial, we will use:

{% if docsPrefix == "pe/" %}
- The instance of [ThingsBoard Professional Edition](https://thingsboard.io/docs/user-guide/install/pe/installation-options/) installed locally;
  {% endif %}
  {% if docsPrefix == "paas/" %}
- ThingsBoard Professional Edition instance — [thingsboard.cloud](https://thingsboard.cloud);
  {% endif %}
- UDP Integration, running externally and connected to the cloud ThingsBoard PE instance;
- **echo** command which intended to display a line of text, and will redirect it's output to **netcat** (**nc**) utility;
- **netcat** (**nc**) utility to establish UDP connections, receive data from there and transfer them;

Let's assume that we have a sensor which is sending current temperature and humidity readings.
Our sensor device **SN-001** publishes it's temperature and humidity readings to UDP Integration on **11560** port to the machine where UDP Integration is running.

For demo purposes we assume that our device is smart enough to send data in 4 different payload types:
- **Text** - in this case payload is:

```text
SN-001,default,temperature,25.7,humidity,69
```

- **JSON** - in this case payload is:

```json
{
  "deviceName": "SN-001",
  "deviceType": "default",
  "temperature": 25.7,
  "humidity": 69
}

```

- **Binary** - in this case, the payload looks like this (in HEX string):

```text
\x53\x4e\x2d\x30\x30\x31\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x36\x39
``` 

Here is the description of the bytes in this payload:
- **0-5** bytes - **\x53\x4e\x2d\x30\x30\x31** - device name. If we convert it to text - **SN-001**;
- **6-12** bytes - **\x64\x65\x66\x61\x75\x6c\x74** - device type. If we convert it to text - **default**;
- **13-16** bytes - **\x32\x35\x2e\x37** - temperature telemetry. If we convert it to text - **25.7**;
- **17-18** bytes - **\x36\x39** - humidity telemetry. If we convert it to text - **69**.
<br>
- **Hex** - in this case payload is hexadecimal string:

```text
534e2d30303164656661756c7432352e373639
``` 

Here is the description of the bytes in this payload:
  - **0-5** bytes - **534e2d303031** - device name. If we convert it to text - **SN-001**;
  - **6-12** byte - **64656661756c74** - device type. If we convert it to text - **default**;
  - **13-16** byte - **32352e37** - temperature telemetry. If we convert it to text: - **25.7**;
  - **17-18** byte - **3639** - humidity telemetry. If we convert it to text: - **69**.

You can select payload type based on your device capabilities and business cases.

{% capture difference %}
**Please note**
<br>
On the machine, where UDP Integration is running, port **11560** must be opened for incoming connections - **nc** utility must be able to connect to UDP socket. In case you are running it locally, it should be fine without any additional changes.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Uplink Converter

Before setting up an **UDP integration**, you need to create an **Uplink Converter** that is a script for parsing and transforming the data received by UDP integration to format that ThingsBoard uses.
**deviceName** and **deviceType** are required, while attributes and telemetry are optional. attributes and telemetry are flat key-value objects. Nested objects are not supported.

To create an **Uplink Converter** go to **Data Converters** section and Click **Add new data converter —> Create new converter**.
Name it **"UDP Uplink Converter"** and select type **Uplink**. Use debug mode for now.

{% capture difference %}
**NOTE**
<br>
Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Choose device payload type to for decoder configuration:**

- **Text payload**

{% include templates/tbel-vs-js.md %}

{% capture udpuplinktext %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/udp/udp-uplink-text-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/udp/udp-uplink-text-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpuplinktext" toggle-spec=udpuplinktext %}

- **JSON payload**

{% capture udpuplinkjson %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/udp/udp-uplink-json-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/udp/udp-uplink-json-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpuplinkjson" toggle-spec=udpuplinkjson %}

- **Binary payload**

{% capture udpuplinkbinary %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/udp/udp-uplink-binary-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/udp/udp-uplink-binary-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpuplinkbinary" toggle-spec=udpuplinkbinary %}

- **Hex payload**

{% capture udpuplinkhex %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/udp/udp-uplink-hex-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/udp/udp-uplink-hex-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpuplinkhex" toggle-spec=udpuplinkhex %}

### UDP Integration Setup

- Go to **Integrations** section and click **Add new integration** button. Name it **UDP Integration**, select type **UDP**;

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/udp/udp-integration-setup-1-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/udp/udp-integration-setup-1-paas.png)
{% endif %}

- Add recently created UDP Uplink Converter;

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/udp/udp-integration-setup-2-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/udp/udp-integration-setup-2-paas.png)
{% endif %}

- For now, leave the "Downlink Data Converter" field blank.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/udp/udp-integration-setup-3-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/udp/udp-integration-setup-3-paas.png)
{% endif %}

As you mentioned **Execute remotely** is checked and can not be modified - UDP Integration can be only **remote** type.

By default UDP Integration will use **11560** port, but you can change this to any available port in your case.

Please note down **Integration key** and **Integration secret** - we will use these values later in the configuration on the remote UDP Integration itself.

We leave other options by default, but there is brief description of them:
- **Enable broadcast - integration will accepts broadcast address packets** - a flag indicating that integration will accept UDP packets that were sent to broadcast address;
- **Size of the buffer for inbound socket** - the size in KBytes of the socket data receive buffer;

Choose device payload type for **Handler Configuration**

{% capture handlerconfiguration %}
Text payload<br>%,%text%,%templates/integration/udp/udp-handler-configuration-text.md%br%
JSON payload<br>%,%json%,%templates/integration/udp/udp-handler-configuration-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/udp/udp-handler-configuration-binary.md%br%
Hex payload<br>%,%hex%,%templates/integration/udp/udp-handler-configuration-hex.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpintegrationhandlerconfiguration" toggle-spec=handlerconfiguration %}

Click **Add** to save the Integration.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/udp/udp-integration-setup-4-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/udp/udp-integration-setup-4-paas.png)
{% endif %}

#### Installing and running external UDP Integration

Please refer to the [Remote Integration guide](/docs/{{peDocsPrefix}}user-guide/integrations/remote-integrations) and install UDP Integration service locally or on separate machine.

Please use **Integration key** and **Integration secret** from the above section for your UDP Integration configuration.

### Send Uplink message

Once ThingsBoard UDP Integration has been created, the UDP server starts, and then it waits for data from the devices.

Choose device payload type to send uplink message

{% capture senduplink %}
Text payload<br>%,%text%,%templates/integration/udp/udp-send-uplink-text.md%br%
JSON payload<br>%,%json%,%templates/integration/udp/udp-send-uplink-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/udp/udp-send-uplink-binary.md%br%
Hex payload<br>%,%hex%,%templates/integration/udp/udp-send-uplink-hex.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpintegrationsenduplink" toggle-spec=senduplink %}

Once you go to **Device Groups -> All** you should find a **SN-001** device provisioned by the Integration.
Click on the device, go to the **Latest Telemetry** tab to see the “temperature” key and its value (25.7) there and also the “humidity” key and its value (69) there as well.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/udp/udp-integration-create-device-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/udp/udp-integration-create-device-paas.png)
{% endif %}

## Advanced usage: Downlink

Create Downlink Converter in **Data converters**. To see events - enable Debug.

{% capture udpdownlink %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/udp/udp-downlink-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/udp/udp-downlink-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpdownlink" toggle-spec=udpdownlink %}

Now you have to add a converter to the integration, optionally
configure Cache Size and Cache time to live in minutes (able just for UDP Downlink).

{% capture difference %}
Cache size and Time to live - features, that helps to avoid memory leak when we are storing connections.<br>
Cache time to live - time to storage messages.<br>
Cache size - maximum size of messages for UDP client.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/udp/udp-add-downlink-converter-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/udp/udp-add-downlink-converter-paas.png)
{% endif %}

<br>
When integration configured and ready to use, we need to go to Rule Chains, choose 'Root Rule Chain' and here create rule node
**Integration Downlink**. Input here some name, choose which integration you need to use and tap **Add**.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/udp/rule-chain-downlink-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/udp/rule-chain-downlink-paas.png)
{% endif %}

After this steps, we need to tap on a right grey circle of rule node **message type switch** and drag this circle to left side of 'Integration Downlink',
here lets choose **Attribute Update**, tap 'Add' and save Rule node. That's it!

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/udp/rule-chain-and-attributes-updated-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/udp/rule-chain-and-attributes-updated-paas.png)
{% endif %}

### Test Downlink

To test downlink, create some **shared attribute** on your device and send some Uplink message on this device. And you will see Downlink message.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/udp/udp-add-shared-add-attribute-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/udp/udp-add-shared-add-attribute-paas.png)
{% endif %}

![image](/images/user-guide/integrations/udp/terminal-add-attribute.png)

Also, you can set for Uplink command option `-q`, for example 120 seconds. This option setting how long you will wait for a response.
If time of connection is over - you will receive this message on next Uplink. See next example:

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/udp/udp-update-shared-attributes-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/udp/udp-update-shared-attributes-paas.png)
{% endif %}

![image](/images/user-guide/integrations/udp/terminal-update-attribute.png)

{% capture difference %}
**Note**
<br>
When you use UDP integration, and your connection established for a long time, you will receive just one Downlink message. All other will be saved on server side and will be sent on next Uplink.
{% endcapture %}
{% include templates/info-banner.md content=difference %}


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}
