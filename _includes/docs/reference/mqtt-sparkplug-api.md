
* TOC
{:toc}

## Prerequisites

We assume you have completed the general [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide
to get familiar with ThingsBoard.

## Sparkplug basics

<i>**What is Sparkplug?**</i> An open source software specification that provides MQTT clients the framework to seamlessly
integrate data from their applications, sensors, devices, and gateways within the MQTT Infrastructure.

You can find more information about **Sparkplug** [here](https://sparkplug.eclipse.org/) and about **Sparkplug™
Specification**  [here](https://sparkplug.eclipse.org/specification/version/2.2/documents/sparkplug-specification-2.2.pdf)
Thingsboard and MQTT Sparkplug Payloads, Messages and Infrastructure
Components  [here](#thingsboard-and-mqtt-sparkplug-payloads-and-messages).

## Getting started

#### Create in Thingsboard device and profile

Please refer to the [MQTT transport type](/docs/{{docsPrefix}}user-guide/device-profiles/#mqtt-transport-type)
configuration section in device profile article for more details.

We assume that we have an **MQTT EON** with *two* **Devices** attached to this **MQTT EON**.

*Topic*:
- **MQTT EON**:|{**NAMESPACE**} + "/" + {**groupId**} + "/{**Payloads by Message Type**}/" + {**edgeNode**}.
- **Device**:|{**NAMESPACE**} + "/" + {**groupId**} + "/{**Payloads by Message Type**}/" + {**edgeNode**} + "/" + {**deviceId**}.
- **Note**: Thingsboard only uses encoding in version **B** of the Sparkplug™ MQTT message payload. For the Sparkplug™ B version of the specification, the constant must be a UTF-8 string. 
  
- for the {**NAMESPACE**} element must be |<span style="color:green">“spBv1.0”</span>

Other  elements of topic are string variables and for example, let's assign the following values:
- The name of ID for **group** is {**groupId**}. We assign a value to it |<span style="color:green">"MyGroupId"</span>
- The name of ID for **MQTT EON** is {**edgeNode**}. We assign a value to it  |<span style="color:green">“NodeSparkplug”</span>
  With *Metrics*: |<span style="color:brown">["Node Control/Reboot", "Node Control/Rebirth", "Node Control/Next Server", "Node Control/Scan Rate"]</span> [here](#publish-message-nbirth)
- The name of ID for **Device number one** is  {**deviceId**}. We assign a value to it |<span style="color:green">“DeviceSparkplug_01”</span>
  With *Metrics*: |<span style="color:brown">["Device Control/Reboot", "Device Control/Rebirth", "Device Control/Scan rate", "Properties/Hardware Make", "Last Update FW", "Current Grid Voltage"]</span> [here](#publish-message-dbirth-Device_01)
- The name of ID for **Device number two** is {**deviceId**}. We assign a value to it |<span style="color:green">“DeviceSparkplug_02”</span>
  With *Metrics*: |<span style="color:brown">["Device Control/Reboot", "Device Control/Rebirth", "Device Control/Scan rate", "Properties/Hardware Make", "Last Update FW", "Outputs/LEDs/Green", "Outputs/LEDs/Yellow"]</span> [here](#publish-message-dbirth-Device_02)

**Pay attention** that {**NAMESPACE**} as the first elements of the topic is a constant, so it *cannot* be changed. 

While **other elements** of the topic are variables, so they *can* be changed.

After a *successful* MQTT EON/Device *connection*, the MQTT EON/Device **must** *send* a publish NBIRTH/DBIRTH message. This must be the **first** MQTT publish message. This message includes the MQTT EON/Device Birth Certificate payload which contains everything required to build out a data structure for all metrics for this MQTT EON or Device.

In order to connect and receive information from them, we need to perform 4 steps:

### Step 1. Create device profile

First you need to create device profile for the device type **MQTT EON**, with next name and parameters of this **device profile**  [here](#device-profile-transport-configuration-for-device-type-mqtt-eon). 
- This **MQTT EON device profile** hase **name**. Its is string variable and for example, let's assign the following value | <span style="color:green">"SparkPlugProfile"</span>
  The first parameter: **Transport configuration type** must be | <span style="color:brown">MQTT</span>
  The second parameter: **MQTT device topic filters SparkPlug** must be | <span style="color:brown">enable</span>
  The third parameter: **Fields "SparkPlug attributes metric names"** is <i>Optional</i>. It is not necessary to assign a value to this parameter, but for an example, let’s assign the following values | <span style="color:brown">["Node Control/Next Server", "Last Update FW", "Outputs/LEDs/Green"]</span>
 
{% include images-gallery.html imageCollection="sparkplug-device-profile-created" showListImageTitles="true" %}

- **Note**: Only if you want to receive metric information as attributes, you add a value to the **SparkPlug Attribute Metric Names fields**
- **Note**: 
1. If you plan to create a device yourself in Thingsboard to connect to a device of type Device, for it, you can either use the profile created for the device type **MQTT EON**, or create a *new device profile*.
   For a *new profile device*, the transport configuration type can be: <span style="color:brown">MQTT</span> or <span style="color:brown">default</span>.

2. If you not plan to create a device yourself in Thingsboard to connect to a device of type Device, the first time you connect to a device of type Device, Thingsboard will automatically create both the Device itself with the name "deviceId" and a profile for it with the name equals {**MQTT EON device profile** name} + “**-node**”.

### Step 2. Create device

**MQTT EON** type device must be created in Thingsboard with device profile before
connecting [here](#step-1-create-device-profile).

**Device** type device can be created in Thingsboard with a device profile before the first connection (manually).

If **Device** type device with this device ID was not created in Thingsboard before connected it, after the first successful connection of this device, Thingsboard automatically create of that device and device profile for its [here](#step-1-create-device-profile).

### Step 3. MQTT Sparkplug Client connected

MQTT Edge of Network Nodes (MQTT EON - MQTT Sparkplug Client) connects to the MQTT broker and sets the Will and
Testament message (_**NDEATH**_)

We will use *access token* device credentials in this article and they will be referred to later as **$ACCESS_TOKEN**.
The application needs to send MQTT CONNECT message with username that contains **$ACCESS_TOKEN**.

Possible return codes, and their reasons during connect sequence:

* **0x00 Connected** - Successfully connected to ThingsBoard MQTT server.
* **0x04 Connection Refused, bad username or password** - Username is empty.
* **0x05 Connection Refused, not authorized** - Username contains invalid **$ACCESS_TOKEN**.

The alternative authentication option is to use [X.509 Certificates](/docs/{{docsPrefix}}user-guide/certificates/)
or [Basic MQTT Credentials](/docs/{{docsPrefix}}user-guide/basic-mqtt/) - combination of client id, username and
password.

After that, the thingsboard is ready to receive messages and publish commands.

The first MQTT publish message will be publish message [*BIRTH](#publish-message-nbirth)

### Step 4. Upload/Update Metrics from MQTT EON and Device

Якщо ви бажаєте отримувати інформацію про метрики як атрибути, чи для MQTT EON ("NodeSparkplug") чи для Device "DeviceSparkplug": необхідно назви відповідних метрик додати в профайл ("SparkB") в Fields "SparkPlug attributes metric names".
Якщо назва метрики, яка отримана від MQTT EON буде співпадать з одною із назв в Fields "SparkPlug attributes metric names", то ці данні будуть надіслані в розділ атрибутів "NodeSparkplug", 
а якщо назва метрики, яка отримана від Device буде співпадать з одною із назв в Fields "SparkPlug attributes metric names", то ці данні будуть надіслані в розділ атрибутів "DeviceSparkplug".
Всі інші метрики від MQTT EON будуть надіслані в розділ телеметрии  "NodeSparkplug", а віл Device будуть надіслані в розділ телеметрии "DeviceSparkplug".
Розглянемо цю інформацію на блок-схемах та малюнках: 

4.2. В Thingsboard створюємо deviceб який відповідає за зв'язок та обробку інформаціїї від  MQTT EON. Його ім'я повинно мати ім'я MQTT EON, тобто: "NodeSparkplug"ж

To publish telemetry to the ThingsBoard host server, the Eon host or device sends a PUBLISH message. After decoding and
receiving a list of metrics from the "Payload", the validity of the metric is checked:

- if a metric with this name was in [*BIRTH] and is in the Fields "SparkPlug attributes metric names" of MQTT EON`s profile, then its data is sent to attributes
- if a metric with this name was in [*BIRTH] and it is not in the Fields "SparkPlug attribute metric names" of MQTT EON`s profile, then its data is sent to telemetry
- if there was no metric of the same name in [*BIRTH], nothing happens;

#### Example: Upload/Update Metrics from MQTT EON/Device with Metrics as telemetry/attributes to the server
<b>1. Sending Publish a message from MQTT EON/Device with Metrics</b>
<details>
<summary>
<i>1.1 from MQTT EON:</i>
</summary>
{% highlight ruby %}
- Metrics
{
  "timestamp": 1486144502122,
  "metrics": [
     {
      "name": "Supply Voltage (V)",
      "timestamp": 1486144502122,
      "dataType": "Float",
      "value": 11.6
    },
    {
      "name": "Node Control/Scan Rate",
      "timestamp": 1486144502122,
      "dataType": "Int64",
      "value": 4000
    }, {
      "name": "Properties/Hardware Model",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "Thinsboard Sparkplug™ B version: 3.4.5"
    }
  ],
  "seq": 0
}

- PUBLISH message:
  client.publish(NAMESPACE + "/" + groupId + "/DDATA/" + edgeNode, new SparkplugBPayloadEncoder().getBytes(nodePayload),
  0, false); {% endhighlight %}

</details>

<details>
<summary>
<i>1.2 from Device:</i>
</summary>
{% highlight ruby %}
- Metrics
{
  "timestamp": 1486144502122,
  "metrics": [
    {
      "name": "Outputs/LEDs/Green",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": false
    }, {
      "name": "Properties/Hardware Make",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "Thingsboars"
    }, {
      "name": "Last Update FW",
      "timestamp": 1486144502122,
      "dataType": "DateTime",
      "value": 1486144502056
    }, {
      "name": "Current Grid Voltage (V)",
      "timestamp": 1486144502122,
      "dataType": "Int32",
      "value": 250
    }
  ],
  "seq": 5
}

- PUBLISH message:
  client.publish(NAMESPACE + "/" + groupId + "/DDATA/" + edgeNode + "/" + deviceId, new SparkplugBPayloadEncoder()
  .getBytes(devicePayload), 0, false);

{% endhighlight %}
</details>

<b>2. Decoding Publish a message from MQTT EON/Device with Metrics as telemetry/attributes</b>

<b>Importantly: <i>The metric will be  in the topic</i></b> [*BIRTH](#publish-message-nbirth).
<details>
<summary>
<i>2.1 <b>Validate</b> Metric names:</i>
</summary>
{% highlight ruby %}
- MetricsName`s MQTT EON is in the topic [NBIRTH]:
--"Supply Voltage (V)", "Node Control/Scan Rate", "Properties/Hardware Model".

- MetricsName`s device is in the topic [DBIRTH]:
--"Outputs/LEDs/Green", "Properties/Hardware Make", "Last Update FW", "Current Grid Voltage (V)".
  
{% endhighlight %}
</details>

<details>
<summary>
<i>2.2 Metrics to be sent to <b>attributes</b>:</i>
</summary>
{% highlight ruby %}
- MetricsName`s MQTT EON is in the Fields "SparkPlug attribute metric names" of MQTT EON`s profile:
--"Properties/Hardware Model".

- MetricsName`s device is in the Fields "SparkPlug attribute metric names" of MQTT EON`s profile:
--"Properties/Hardware Make".
  
Result: 
- Metric of MQTT EON with name "Properties/Hardware Model" send to attributes of MQTT EON;
- Metric of Device with name "Properties/Hardware Model" send to attributes of Device;

{% endhighlight %}
</details>

<details>
<summary>
<i>2.3 Metrics to be sent to <b>telemetry</b>:</i>
</summary>
{% highlight ruby %}
- MetricsName`s MQTT EON is not in the Fields "SparkPlug attribute metric names" of MQTT EON`s profile:
--"Outputs/LEDs/Green", "Last Update FW", "Current Grid Voltage (V)".

- MetricsName`s device is not in the Fields "SparkPlug attribute metric names" of MQTT EON`s profile:
  --"Outputs/LEDs/Green", "Last Update FW", "Current Grid Voltage (V)".

Result:
- Metrics of MQTT EON with name "Outputs/LEDs/Green", "Last Update FW" and "Current Grid Voltage (V)" send to telemetry of MQTT EON;
- Metrics of Device with name "Outputs/LEDs/Green", "Last Update FW" and "Current Grid Voltage (V)" send to telemetry of Device;

{% endhighlight %}
</details>

### Step 5. Update Metrics from Thingsboard server to MQTT EON and Device

#### Update Metrics from Shared attributes to MQTT EON/Device

#### Update Metrics from RPC to MQTT EON/Device

## Thingsboard and MQTT Sparkplug Payloads and Messages

### Infrastructure Components

{% include images-gallery.html imageCollection="infrastructure-components" showListImageTitles="true" %} There are 4
components

- MQTT Broker (Server)
- Management Application or Applications
- MQTT Edge of Network Nodes (MQTT EON)
- Devices

-- Thingsboard includes:  MQTT Broker (Server) and Sparkplug Host Application (server) which can monitor and control
edge nodes and devices

-- Sparkplug client includes: Sparkplug edge nodes and devices

### Sparkplug™ Topic Namespace Elements

Every MQTT message published consist of a **topic** and a **payload** component. All MQTT clients using the Sparkplug™
specification will use the following Topic Namespace structure:

```
namespace/group_id/message_type/edge_node_id/[device_id]
```

### Sparkplug Message Basics

- Birth
- Death
- Data
- Command
- State

### Sparkplug Payload Basics

Thingsboard only uses encoding in version **B** of the Sparkplug™ MQTT message payload. For the Sparkplug™ B version of
the specification, the UTF-8 string constant for the namespace element will be:

```
“spBv1.0”
```

MQTT Sparkplug device payload: default, the platform expects devices to send data via Protocol Buffers. Protocol
Buffers, or Protobuf, is a language- and a platform-neutral way of serializing structured data. It is convenient to
minimize the size of transmitted data. The Sparkplug payload
uses [Protocol Buffers](https://developers.google.com/protocol-buffers) which is a way of representing complex data as a
string and functions in a similar way to JSON.

A Sparkplug payload contains a series of metrics (readings). The metric has a:

- Name
- Alias
- Time stamp
- Data type
- Value

### Publish State

the STATE messages published by backend application(s) do not use Sparkplug™ B payloads.
But in the Thingsboard the [*STATE]  is used in telemetry to fix the connection time and disconnect MQTT EON/Device.

#### Connect

After a successful MQTT EON connection, Telemetry with [NSTATE] "ONLINE" is registered in the system.

After a successful Device connection, Telemetry with [DSTATE] "ONLINE" is registered in the system.

#### Disconnect

After MQTT EON disconnection, Telemetry with [NSTATE] "OFFLINE" is registered in the system.


Consider the following Sparkplug™ B payload in the DDEATH message shown above:

```json5
{
"timestamp": 1486144502122,
"seq": 123
}
```
The DDEATH topic on the server:
```shell
client.publish(NAMESPACE + "/" + groupId + "/DDEATH/" + edgeNode+ "/" + devicepId , 
new SparkplugBPayloadEncoder().getBytes(nodePayload), 0, false);
```

After Device disconnection, Telemetry with [DSTATE] "OFFLINE" is registered in the system.

### Subscribe to attributes updates from the server [spBv1.0/#]

[Optional] After a successful MQTT EON connection, MQTT EON must be Subscribed to the NCMD topic on the server:
- topic:

```shell
"spBv1.0+/" + groupId + "/NCMD/" + edgeNode + "/#"
```

After a successful Device connection, the Device is subscribed to DCMD topic always (to perform the commands of updating
attributes and RPC).

### Publish message NBIRTH

After a successful MQTT EON connection, publish message NBIRTH will be the first MQTT publish message with:
- topic: {NAMESPACE} + "/" + {groupId} + "/NBIRTH/" + {edgeNode}.
```shell
spBv1.0+/MyGroupId/NBIRTH/NodeSparkplug
```

The EoN Birth Certificate payload contains everything required to build out a data structure for all metrics for this EoN node.
- the Metrics of payload (NBIRTH):
```json
{
  "timestamp": 1486144502122,
  "metrics": [
    {
      "name": "bdSeq",
      "timestamp": 1486144502122,
      "dataType": "Uint64",
      "value": 0
    }, {
      "name": "Node Control/Reboot",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": false
    }, {
      "name": "Node Control/Rebirth",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": false
    }, {
      "name": "Node Control/Next Server",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": false
    }, {
      "name": "Node Control/Scan Rate",
      "timestamp": 1486144502122,
      "dataType": "Int64",
      "value": 3000
    }
  ],
  "seq": 0
}
```

### Publish message DBIRTH Device_01

After a successful MQTT EON connection, publish message NBIRTH will be the first MQTT publish message with:
- topic: {NAMESPACE} + "/" + {groupId} + "/DBIRTH/" + {edgeNode} +  "/" + {deviceId}.
```shell
spBv1.0+/MyGroupId/DBIRTH/NodeSparkplug/DeviceSparkplug_01
```

The Device Birth Certificate payload contains everything required to build out a data structure for all metrics for this Device.
- the Metrics of payload (DBIRTH):
```json
{
  "timestamp": 1486144502122,
  "metrics": [{
      "name": "Device Control/Reboot",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": true
    }, {
      "name": "Device Control/Rebirth",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": true
    }, {
      "name": "Device Control/Scan rate",
      "timestamp": 1486144502122,
      "dataType": "Int64",
      "value": 3000
    }, {
      "name": "Properties/Hardware Make",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "Thinsboard Sparkplug™ B version: 3.4.4"
    }, {
      "name": "Last Update FW",
      "timestamp": 1486144502122,
      "dataType": "DateTime",
      "value": 1486144501056
    }, {
      "name": "Current Grid Voltage (V)",
      "timestamp": 1486144502122,
      "dataType": "Int32",
      "value": 230
    }  
  ],
  "seq": 2
}
```

### Publish message DBIRTH Device_02

After a successful MQTT EON connection, publish message NBIRTH will be the first MQTT publish message with:
- topic: {NAMESPACE} + "/" + {groupId} + "/DBIRTH/" + {edgeNode} +  "/" + {deviceId}.
```shell
spBv1.0+/MyGroupId/DBIRTH/NodeSparkplug/DeviceSparkplug_02
```

The Device Birth Certificate payload contains everything required to build out a data structure for all metrics for this Device.
- the Metrics of payload (DBIRTH):
```json
{
  "timestamp": 1486144502122,
  "metrics": [{
      "name": "Device Control/Reboot",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": true
    }, {
      "name": "Device Control/Rebirth",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": true
    }, {
      "name": "Device Control/Scan rate",
      "timestamp": 1486144502122,
      "dataType": "Int64",
      "value": 3000
    }, {
      "name": "Properties/Hardware Make",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "Thinsboard Sparkplug™ B version: 3.4.4"
    }, {
      "name": "Last Update FW",
      "timestamp": 1486144502122,
      "dataType": "DateTime",
      "value": 1486144501056
    }, {
      "name": "Outputs/LEDs/Green",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": false
   }, {
    "name": "Outputs/LEDs/Yellow",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": true
    }  
  ],
  "seq": 2
}
```

### Device profile transport configuration for device type MQTT EON

```json
{
  "transportConfiguration": {
    "type": "MQTT",
    "sparkPlug": true,
    "sparkPlugAttributesMetricNames": [
      "Node Control/Next Server",
      "Last Update FW",
      "Outputs/LEDs/Green"
    ]
  }
}
```

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}