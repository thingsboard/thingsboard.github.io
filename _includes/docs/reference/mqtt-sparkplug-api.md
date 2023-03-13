
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
- The name of ID for **Device number one** is  {**deviceId**}. We assign a value to it |<span style="color:green">“DeviceSparkplugId1”</span>
  With *Metrics*: |<span style="color:brown">["Device Control/Reboot", "Device Control/Rebirth", "Device Control/Scan rate", "Properties/Hardware Make", "Last Update FW", "Current Grid Voltage"]</span> [here](#publish-message-dbirth-device_01)
- The name of ID for **Device number two** is {**deviceId**}. We assign a value to it |<span style="color:green">“DeviceSparkplugId2”</span>
  With *Metrics*: |<span style="color:brown">["Device Control/Reboot", "Device Control/Rebirth", "Device Control/Scan rate", "Properties/Hardware Make", "Last Update FW", "Outputs/LEDs/Green", "Outputs/LEDs/Yellow"]</span> [here](#publish-message-dbirth-device_02)

**Pay attention** that {**NAMESPACE**} as the first elements of the topic is a constant, so it *cannot* be changed. 

While **other elements** of the topic are variables, so they *can* be changed.

After a *successful* MQTT EON/Device *connection*, the MQTT EON/Device **must** *send* a publish NBIRTH/DBIRTH message. This must be the **first** MQTT publish message. This message includes the MQTT EON/Device Birth Certificate payload which contains everything required to build out a data structure for all metrics for this MQTT EON or Device.

In order to connect and receive information from them, we need to perform 4 steps:

### Step 1. Create device profile

First you need to create device profile for the device type **MQTT EON**, with next name and parameters of this **device profile**  [here](#device-profile-transport-configuration-for-device-type-mqtt-eon).

See general device profile [documentation](/docs/{{docsPrefix}}user-guide/device-profiles/) for more info about device profiles also.
- This **MQTT EON device profile** hase **name**. Its is string variable and for example, let's assign the following value | <span style="color:green">"sparkPlugProfile"</span>
  The first parameter: **Transport configuration type** must be | <span style="color:brown">MQTT</span>
  The second parameter: **MQTT device topic filters SparkPlug** must be | <span style="color:brown">enable</span>
  The third parameter: **Fields "SparkPlug attributes metric names"** is <i>Optional</i>. It is not necessary to assign a value to this parameter, but for an example, let’s assign the following values | <span style="color:brown">["Node Control/Next Server", "Device Control/Reboot", "Device Control/Rebirth", "Last Update FW", "Outputs/LEDs/Green"]</span>
 
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

Example: Creating The Device MQTT EON with ID <span style="color:brown">"NodeSparkplug"</span>.
{% include images-gallery.html imageCollection="sparkplug-node-created" showListImageTitles="true" %}

If **Device** type device with this device ID was not created in Thingsboard before connected it, after the first successful connection of this device, Thingsboard automatically create of that device and device profile for its (with the name equals {**MQTT EON device profile** name} + “**-node**”.).

### Step 3. MQTT Sparkplug Client connected
!!! ToDo change Repo
- **Note**: To run Sparkplug Client and test you can use [SparkplugB Client Emulator](https://github.com/nickAS21/sparkplug).
```shell
git clone git@github.com:nickAS21/sparkplug.git
```
{: .copy-code}

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

### Step 4. Upload/Update Metrics from MQTT EON and Devices

The metric updates of the MQTT  EON (<span style="color:green">"NodeSparkplug"</span>) or device (<span style="color:green">"DeviceSparkplugId1"</span> and/or <span style= " color :green">"DeviceSparkplugId2"</span>)  are sent using publish messages with Message Type "NDATA" or "DDATA" and payloads.

The **NDATA** topic from MQTT  EON: {NAMESPACE} + “/” + {groupId} + “/NDATA/” + {edgeNode}.

For example:
- send publish messages from a MQTT  EON with ID <span style="color:green">"NodeSparkplug"</span>:
```shell
"spBv1.0+/MyGroupId/NDATA/NodeSparkplug"
```

The **DDATA** topic from Device: {NAMESPACE} + “/” + {groupId} + “/NDATA/” + {edgeNode} + "/" + {devicepId}.

For example:
- send publish messages from a deviceID <span style="color:green">"DeviceSparkplugId1"</span>:
```shell
"spBv1.0+/MyGroupId/DDATA/NodeSparkplug/DeviceSparkplugId1"
```

If you want to receive information about metrics as attributes in Thingsboard, either for MQTT EON (<span style="color:green">“NodeSparkplug”</span>) or/and for Devices (<span style="color:green">“DeviceSparkplugId1”</span> or/and <span style="color:green">“DeviceSparkplugId2”</span>):
- you need to add the names of the relevant metrics to the profile (<span style="color:green">"sparkPlugProfile"</span>) in Fields "SparkPlug **attributes** metric names".
  
If the metric name received from MQTT EON matches one of the names in the Fields "SparkPlug **attributes** metric names", then:
-  this data will be sent to the <span style="color:green">“NodeSparkplug”</span> or/and <span style="color:green">“DeviceSparkplugId1”</span> or/and <span style="color:green">“DeviceSparkplugId2”</span> attributes section.
   
All other metrics from MQTT EON will be sent to the <span style="color:green">“NodeSparkplug”</span> or/and <span style="color:green">“DeviceSparkplugId1”</span> or/and <span style="color:green">“DeviceSparkplugId2”</span> **telemetry** section.
   
Consider this information in block diagrams and pictures:
   
4.1. To publish telemetry to the ThingsBoard host server, the Eon host or device sends a PUBLISH message. 

After _decoding_ **payload** and receiving a list of **metrics** from the **payload**, the validity of the metric is checked:

- if there was no metric of the same name in [*BIRTH](#publish-message-nbirth), nothing happens;
- if a metrics from payload with this name was in the Fields "SparkPlug attributes metric names" of MQTT EON`s profile, then its data is sent to attributes
- if a metrics from payload with this name is not in the Fields "SparkPlug attribute metric names" of MQTT EON`s profile, then its data is sent to telemetry

#### Example: Upload/Update Metrics from MQTT EON/Device with Metrics as telemetry/attributes to the server
<b>1. Sending Publish a message from MQTT EON/Device with Message Type "NDATA" or "DDATA" and payload</b>

<i>1.1 from MQTT EON: <span style="color:green">“NodeSparkplug”</span></i>

- topic PUBLISH message:
```ruby
"spBv1.0+/MyGroupId/NDATA/NodeSparkplug"
```
- Metrics (from payload)
```json
{
  "timestamp": 1486144502122,
  "metrics": [
     {
      "name": "Current Grid Voltage",
      "timestamp": 1486144502122,
      "dataType": "Float",
      "value": 280.5
    },
    {
      "name": "Node Control/Next Server",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": true
    }, {
      "name": "Properties/Hardware Make",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "Thinsboard Sparkplug™ B version: 3.4.5"
    }
  ],
  "seq": 0
}
```

<i>1.2 from Device: <span style="color:green">“DeviceSparkplugId1”</span></i>

- topic PUBLISH message:
```ruby
"spBv1.0+/MyGroupId/DDATA/NodeSparkplug/DeviceSparkplugId1"
```
- Metrics
```json
{
  "timestamp": 1486144502122,
  "metrics": [
    {
      "name": "Outputs/LEDs/Green",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": true
    }, {
      "name": "Properties/Hardware Make",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "Thinsboard Sparkplug™ B version: 3.4.5"
    }, {
      "name": "Last Update FW",
      "timestamp": 1486144502122,
      "dataType": "DateTime",
      "value": 1486144502122
    }, {
      "name": "Current Grid Voltage",
      "timestamp": 1486144502122,
      "dataType": "Float",
      "value": 250
    }
  ],
  "seq": 5
}
```

<b>2. Publish a message from MQTT EON/Device with Metrics to server as telemetry/attributes</b>

* Upload [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes to the server.

<i>2.1 <b>Validate</b> Metric names: the metric will be in the topic [*BIRTH](#publish-message-nbirth)</i>

- MetricsName`s MQTT EON <span style="color:green">“NodeSparkplug”</span> is in the topic [NBIRTH](#publish-message-nbirth):
```shell
"Current Grid Voltage", "Node Control/Next Server", "Properties/Hardware Make".
```
- MetricsName`s device <span style="color:green">“DeviceSparkplugId1”</span> is in the topic [DBIRTH](#publish-message-nbirth):
```shell
"Outputs/LEDs/Green", "Properties/Hardware Make", "Last Update FW", "Current Grid Voltage".
``` 

<i>2.2 Metrics to be sent to <b>attributes</b>:</i>

- MetricsName's MQTT EON <span style="color:green">“NodeSparkplug”</span> is in the Fields "SparkPlug attribute metric names" of MQTT EON's profile:
```shell
"Node Control/Next Server".
```
- MetricsName's device <span style="color:green">“DeviceSparkplugId1”</span> is in the Fields "SparkPlug attribute metric names" of MQTT EON's profile:
```shell
"Outputs/LEDs/Green", "Last Update FW".
```
  
Result:
{% include images-gallery.html imageCollection="sparkplug-node-device-attributes" showListImageTitles="true" %}

<i>2.3 Metrics to be sent to <b>telemetry</b>:</i>

- MetricsName's MQTT EON <span style="color:green">“NodeSparkplug”</span> is not in the Fields "SparkPlug attribute metric names" of MQTT EON's profile:
```shell
"Current Grid Voltage", "Properties/Hardware Make".
```
- MetricsName's device <span style="color:green">“DeviceSparkplugId1”</span> is not in the Fields "SparkPlug attribute metric names" of MQTT EON's profile:
```shell
"Properties/Hardware Make", "Current Grid Voltage".
```
  
Result:
{% include images-gallery.html imageCollection="sparkplug-node-device-telemetry" showListImageTitles="true" %}




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

```json
{
"timestamp": 1486144502122,
"seq": 123
}
```
The DEATH topic from Device: {NAMESPACE} + “/” + {groupId} + “/DDEATH/” + {edgeNode} + "/" + {devicepId}.
For example, for a deviceID = <span style="color:green">"DeviceSparkplugId1"</span>: 
```shell
"spBv1.0+/MyGroupId/DDEATH/NodeSparkplug/DeviceSparkplugId1"
```

After Device disconnection, Telemetry with [DSTATE] "OFFLINE" is registered in the system.

### Subscribe to metrics updates from the server

[Optional] After a successful MQTT EON connection, MQTT EON must be Subscribed to the NCMD topic on the server:
- topic: {NAMESPACE} + “/” + {groupId} + “/NCMD/” + {edgeNode} + "/#"
For example, for a edgeNode = <span style="color:green">"NodeSparkplug"</span>:
```shell
"spBv1.0+/MyGroupId/DDEATH/NodeSparkplug/#"
```

After a successful Device connection, the Device is subscribed to DCMD topic always (to perform the commands of updating
attributes and RPC).

### Publish message NBIRTH

After a successful MQTT EON connection, publish message NBIRTH will be the first MQTT publish message with:
- topic: {NAMESPACE} + "/" + {groupId} + "/NBIRTH/" + {edgeNode}.
For example, for a edgeNode = <span style="color:green">"NodeSparkplug"</span>:
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
    }, {
      "name": "Properties/Hardware Make",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "Properties Hardware Make: install"
    }, {
      "name": "Last Update FW",
      "timestamp": 1486144502122,
      "dataType": "DateTime",
      "value": 1486144502122
    }, {
      "name": "Current Grid Voltage",
      "timestamp": 1486144502122,
      "dataType": "Float",
      "value": 220
    }
  ],
  "seq": 0
}
```

### Publish message DBIRTH Device_01

After a successful MQTT EON connection, publish message NBIRTH will be the first MQTT publish message with:
- topic: {NAMESPACE} + "/" + {groupId} + "/DBIRTH/" + {edgeNode} +  "/" + {deviceId}.
```shell
spBv1.0+/MyGroupId/DBIRTH/NodeSparkplug/DeviceSparkplugId1
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
      "value": false
    }, {
      "name": "Device Control/Rebirth",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": false
    }, {
      "name": "Device Control/Next Server",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": false
    }, {
      "name": "Device Control/Scan rate",
      "timestamp": 1486144502122,
      "dataType": "Int64",
      "value": 922337203685477580
    }, {
      "name": "Properties/Hardware Make",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "Thinsboard Sparkplug™ B version: 3.3.5"
    }, {
      "name": "Last Update FW",
      "timestamp": 1486144502122,
      "dataType": "DateTime",
      "value": 486144501056
    }, {
      "name": "Current Grid Voltage",
      "timestamp": 1486144502122,
      "dataType": "Float",
      "value": 5.12
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

### Publish message DBIRTH Device_02

After a successful MQTT EON connection, publish message NBIRTH will be the first MQTT publish message with:
- topic: {NAMESPACE} + "/" + {groupId} + "/DBIRTH/" + {edgeNode} +  "/" + {deviceId}.
```shell
spBv1.0+/MyGroupId/DBIRTH/NodeSparkplug/DeviceSparkplugId1
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
      "value": false
    }, {
      "name": "Device Control/Rebirth",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": false
    }, {
      "nameMetric": "MyNodeMetric01_Int32",
      "timestamp": 1486144502122,
      "dataType": "Int32",
      "defaultValue": 2147483647,
      "autoChange": true
    },
    {
      "nameMetric": "MyNodeMetric02_LongInt64",
      "timestamp": 1486144502122,
      "dataType": "Int64",
      "value": 9223372036854775
    }, {
      "nameMetric": "MyNodeMetric03_Double",
      "timestamp": 1486144502122,
      "dataType": "Double",
      "value": 9223372036854775807
    }, {
      "nameMetric": "MyNodeMetric04_Float",
      "timestamp": 1486144502122,
      "dataType": "Float",
      "value": 32.432
    }, {
      "nameMetric": "MyNodeMetric05_String",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "MyNodeMetric05 String: changed"
    }, {
      "nameMetric": "MyNodeMetric06_Json_Bytes",
      "timestamp": 1486144502122,
      "dataType": "Bytes",
      "value": [12, 4, -120]
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