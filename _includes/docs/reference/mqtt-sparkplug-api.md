* TOC
{:toc}

## Getting started

#### Prerequisites

We assume you have completed the general [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide to get familiar with ThingsBoard.

### Sparkplug basics

[What is Sparkplug?] An open source software specification that provides MQTT clients the framework to seamlessly integrate data from their applications, sensors, devices, and gateways within the MQTT Infrastructure.

You can find more information about **Sparkplug** [here](https://sparkplug.eclipse.org/) and about **Sparkplug™ Specification**  [here](https://sparkplug.eclipse.org/specification/version/2.2/documents/sparkplug-specification-2.2.pdf)

### Create in Thingsboard device and profile 
Please refer to the [MQTT transport type](/docs/{{docsPrefix}}user-guide/device-profiles/#mqtt-transport-type) configuration section in device profile article for more details.

#### Create device profile

For the device type [MQTT EON], the device profile is created in the parameters:
1. Transport configuration type: [MQTT]
2. MQTT device topic filters SparkPlug: [enable]
3. [Optional] Add Fields "SparkPlug attributes metric names"
{% include images-gallery.html imageCollection="sparkplug-device-profile-created" showListImageTitles="true" %}

For the device type [Device], the device profile is created in the parameters: 
1. If a device of type [Device] was created before connecting, the Transport configuration type of device profile may be: [MQTT] or [Default]
2. If a device of type [Device] was created after successful connection of that Device, it will be created automatically with the Device profile name equals ["EON device profile name" + "-node"].
{% include images-gallery.html imageCollection="sparkplug-device-created" showListImageTitles="true" %}

#### Create device

[MQTT EON] type device must be created in Thingsboard with device profile before connecting [here](#create-device-profile).

[Device] type device may be created in Thingsboard with device profile before connecting or after successful connection of that Device [here](#create-device-profile).

### MQTT Sparkplug device operation flow in Thingsboard

#### Attributes and Telemetry

#### RPC


### Thingsboard and MQTT Sparkplug Payloads and Messages

#### Infrastructure Components

{% include images-gallery.html imageCollection="infrastructure-components" showListImageTitles="true" %}
There are 4 components

- MQTT Broker (Server)
- Management Application or Applications
- MQTT Edge of Network Nodes (MQTT EON)
- Devices

-- Thingsboard includes:  MQTT Broker (Server) and  Sparkplug Host Application (server) which can monitor and control edge nodes and devices

-- Sparkplug client includes: Sparkplug edge nodes and devices

#### MQTT Sparkplug Connect

##### Sparkplug™ Topic Namespace Elements

Every MQTT message published consist of a **topic** and a **payload** component.
All MQTT clients using the Sparkplug™ specification will use the following Topic Namespace structure:
```
namespace/group_id/message_type/edge_node_id/[device_id]
```

##### Sparkplug Message Basics

- Birth
- Death
- Data
- Command
- State

##### Sparkplug Payload Basics

Thingsboard only uses encoding in version **B** of the Sparkplug™ MQTT message payload.
For the Sparkplug™ B version of the specification, the UTF-8 string constant for the namespace element will be:
```
“spBv1.0”
```
MQTT Sparkplug device payload: default, the platform expects devices to send data via Protocol Buffers.
Protocol Buffers, or Protobuf, is a language- and a platform-neutral way of serializing structured data. It is convenient to minimize the size of transmitted data.
The Sparkplug payload uses [Protocol Buffers](https://developers.google.com/protocol-buffers) which is a way of representing complex data as a string and functions in a similar way to JSON.

A Sparkplug payload contains a series of metrics (readings). The metric has a:

- Name
- Alias
- Time stamp
- Data type
- Value

##### Connect

Connects to the MQTT broker and sets the Will and Testament message (_**NDEATH**_)

We will use *access token* device credentials in this article and they will be referred to later as **$ACCESS_TOKEN**.
The application needs to send MQTT CONNECT message with username that contains **$ACCESS_TOKEN**.

Possible return codes, and their reasons during connect sequence:

* **0x00 Connected** - Successfully connected to ThingsBoard MQTT server.
* **0x04 Connection Refused, bad username or password** - Username is empty.
* **0x05 Connection Refused, not authorized** - Username contains invalid **$ACCESS_TOKEN**.

The alternative authentication option is to use [X.509 Certificates](/docs/{{docsPrefix}}user-guide/certificates/) or [Basic MQTT Credentials](/docs/{{docsPrefix}}user-guide/basic-mqtt/) - combination of client id, username and password.

After that, the thingsboard is ready to receive messages and publish commands.

##### Publish State

After a successful MQTT EON connection, Telemetry with [NSTATE] "ONLINE" is registered in the system.
After a successful Device connection, Telemetry with [DSTATE] "ONLINE" is registered in the system.

##### Subscribe to [spBv1.0/#]

[Optional] After a successful MQTT EON connection, MQTT EON must be Subscribed to the NCMD topic on 
```
spBv1.0/group/NCMD/myNodeName/#
```
After a successful Device  connection, the Device is subscribed to  DCMD topic always (to perform the commands of updating attributes and RPC).

##### NBIRTH
After a successful MQTT EON connection, publish message NBIRTH will be  the first MQTT publish message.
```
The EoN Birth Certificate payload contains everything required to build out a data structure for all metrics for this
EoN node. 
```

<details>
<summary>
<b>Below is an example taken from a EON birth message (NBIRTH)</b>
</summary>
{% highlight ruby %}

{
  "timestamp": 1486144502122,
  "metrics": [
    {
      "name": "bdSeq",
      "timestamp": 1486144502122,
      "dataType": "Uint64",
      "value": 0
    },
    {
      "name": "Node Control/Reboot",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": false
    },
    {
      "name": "Node Control/Rebirth",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": false
    },
    {
      "name": "Node Control/Next Server",
      "timestamp": 1486144502122,
      "dataType": "Boolean",
      "value": false
    },
    {
      "name": "Node Control/Scan Rate",
      "timestamp": 1486144502122,
      "dataType": "Int64",
      "value": 3000
    },
    {
      "name": "Properties/Hardware Make",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "Raspberry Pi"
    },
    {
      "name": "Properties/Hardware Model",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "Pi 3 Model B"
    },
    {
      "name": "Properties/OS",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "Raspbian"
    },
    {
      "name": "Properties/OS Version",
      "timestamp": 1486144502122,
      "dataType": "String",
      "value": "Jessie with PIXEL/11.01.2017"
    },
    {
      "name": "Supply Voltage (V)",
      "timestamp": 1486144502122,
      "dataType": "Float",
      "value": 12.1
    }
  ],
  "seq": 0
}

{% endhighlight %}
</details>

##### DBIRTH
After a  successful Device connection, publish message DBIRTH will be  the first MQTT publish message.

```
The DBIRTH payload contains everything required to build out a data structure for all metrics for this device. 
```
<details>
<summary>
<b>Example Sparkplug™ B payload in the (DBIRTH) message:</b>
</summary>
{% highlight ruby %}
{
  "timestamp": 1486144502122,
  "metrics": [{
    "name": "Outputs/LEDs/Green",
    "timestamp": 1486144502122,
    "dataType": "Boolean",
    "value": true
  }, {
    "name": "Outputs/LEDs/Yellow",
    "timestamp": 1486144502122,
    "dataType": "Boolean",
    "value": true
  }],
  "seq": 2
}

{% endhighlight %}
</details>

##### Disconnect

After  MQTT EON disconnection, Telemetry with [NSTATE] "OFFLINE" is registered in the system.
After  Device disconnection, Telemetry with [DSTATE] "OFFLINE" is registered in the system.

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}