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
- Transport configuration type: [MQTT]
- IsSparkplug: [enable]
- [Optional] Add Fields "MetricsName"

!!! ToDo Picture

For the device type [Device], the device profile is created in the parameters: 
- Transport configuration type: [MQTT] or [Default]

Note:
If a device of type was not created before connecting [MQTT EON], after successful connection of the Device, it will be created automatically with the Device profile name equals ["node-" + <EON device profile name>].

!!! ToDo Picture

#### Create device

[MQTT EON] type device must be created in Thingsboard with device profile before connecting [here](markdown-toc-create-device-profile).

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

The process for the Thingsboard is

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

#### Sparkplug™ Topic Namespace Elements

Every MQTT message published consist of a **topic** and a **payload** component.
All MQTT clients using the Sparkplug™ specification will use the following Topic Namespace structure:
```
namespace/group_id/message_type/edge_node_id/[device_id]
```

#### Sparkplug Payload Basics

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

#### Sparkplug Message Basics

- Birth
- Death
- Data
- Command
- State


##### Disconnect

After  MQTT EON disconnection, Telemetry with [NSTATE] "OFFLINE" is registered in the system.
After  Device disconnection, Telemetry with [DSTATE] "OFFLINE" is registered in the system.

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}