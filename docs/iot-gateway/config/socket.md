---
layout: docwithnav-gw
title: Socket Connector Configuration
description: Socket API support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with Socket Connector configuration for ThingsBoard IoT Gateway. 
Use [general configuration guide](/docs/iot-gateway/configuration/) to enable this Connector. The purpose of this 
Connector is to connect to your server using TCP or UDP connection type.

This Connector is useful when you have a local server in your facility or corporate network and want to push
data from the server to ThingsBoard.

We will describe the connector configuration file below.

## Connector configuration: socket.json

Connector configuration is a JSON file that contains information about how to connect to an external server, how to process
the data and other service features. Let’s review the format of the configuration file using the example below.

<b>Example of Socket Connector config file.</b>

{% capture socketConf %}
{
  "name": "TCP Connector Example",
  "type": "TCP",
  "address": "127.0.0.1",
  "port": 50000,
  "bufferSize": 1024,
  "devices": [
    {
      "address": "127.0.0.1:50001",
      "deviceName": "Device Example",
      "deviceType": "default",
      "encoding": "utf-8",
      "telemetry": [
        {
          "key": "temp",
          "byteFrom": 0,
          "byteTo": -1
        },
        {
          "key": "hum",
          "byteFrom": 0,
          "byteTo": 2
        }
      ],
      "attributes": [
        {
          "key": "name",
          "byteFrom": 0,
          "byteTo": -1
        },
        {
          "key": "num",
          "byteFrom": 2,
          "byteTo": 4
        }
      ],
      "attributeRequests": [
        {
          "type": "shared",
          "requestExpression": "${[0:3]==atr}",
          "attributeNameExpression": "[3:]"
        }
      ],
      "attributeUpdates": [
        {
          "encoding": "utf-16",
          "attributeOnThingsBoard": "sharedName"
        }
      ],
      "serverSideRpc": [
        {
          "methodRPC": "rpcMethod1",
          "withResponse": true,
          "methodProcessing": "write",
          "encoding": "utf-8"
        }
      ]
    }
  ]
}
{% endcapture %}
{% include code-toggle.liquid code=socketConf params="conf|.copy-code.expandable-20" %}

### General section

| **Parameter**     | **Default value**                     | **Description**                                          |
|:-|:-|-
| name              | **TCP Connector Example**             | Connector name                                           |
| type              | **TCP**                               | Socket type, that can be TCP or UDP                      |
| address           | **127.0.0.1**                         | Connector bound address                                  |
| port              | **50000**                             | Connector bound port                                     |
| bufferSize        | **1024**                              | Size of received data block buffer                       |
|---

Configuration section will look like this:

```json
{
  "name": "TCP Connector Example",
  "type": "TCP",
  "address": "127.0.0.1",
  "port": 50000,
  "bufferSize": 1024,
  ...
}
```

### General section

This configuration section contains an array of objects that contains clients that can be connected to the connector and
send the data. This means that connector rejects all connections not included in this array.

#### Device subsection

This object configuration section includes the parameters of how to proceed with incoming data.

| **Parameter**     | **Default value**                     | **Description**                                                                                                      |
|:-|:-|-
| address           | **127.0.0.1:50001**                   | The address and port of the client that will be connecting to the connector.                                         |
| deviceName        | **Device Example**                    | Name for the device in ThingsBoard.                                                                                  |
| deviceType        | **default**                           | Device type for ThingsBoard, by default this parameter is absent, but you can add it.                                |
| encoding          | **utf-8**                             | Encoding used when writing string data to storage.                                                                   |
| telemetry         |                                       | This subsection contains parameters of the incoming message, that will be interpreted as telemetry for the device.   |
| ... key           | **temp**                              | Name for telemetry in ThingsBoard.                                                                                   |
| ... byteFrom      | **0**                                 | Used to slice received data from the specific index.                                                                 |
| ... byteTo        | **-1**                                | Used to slice received data to the specific index.                                                                   |
| attributes        |                                       | This subsection contains parameters of the incoming requests, that will be interpreted as attributes for the device. |
| ... key           | **hum**                               | Name for attribute in ThingsBoard.                                                                                   |
| ... byteFrom      | **2**                                 | Used to slice received data from the specific index.                                                                 |
| ... byteTo        | **4**                                 | Used to slice received data to the specific index.                                                                   |
|---

Example:
```json
{
  "address": "127.0.0.1:50001",
  "deviceName": "Device Example",
  "deviceType": "default",
  "encoding": "utf-8",
  "telemetry": [
    {
      "key": "temp",
      "byteFrom": 0,
      "byteTo": -1
    },
    {
      "key": "hum",
      "byteFrom": 0,
      "byteTo": 2
    }
  ],
  "attributes": [
    {
      "key": "name",
      "byteFrom": 0,
      "byteTo": -1
    },
    {
      "key": "num",
      "byteFrom": 2,
      "byteTo": 4
    }
  ]
}
```

#### Attribute request subsection

In order to request client-side or shared device attributes from ThingsBoard server node, Gateway allows sending attribute
requests.

| **Parameter**           | **Default value**                     | **Description**                                                                                   |
|:-|:-|-
| type                    | **shared**                            | The type of requested attribute can be “shared” or “client”.                                      |
| requestExpression       | **${[0:3]==atr}**                     | The expression that is used to know if the request from the device is "Attribute Request" or not. |
| attributeNameExpression | **[3:]**                              | The expression that is used to get the name of the requested attribute from the received data.    |
|---

Configuration of this subsection looks like:

```json
"attributeRequests": [
  {
    "type": "shared",
    "requestExpression": "${[0:3]==atr}",
    "attributeNameExpression": "[3:]"
  }
]
```

Also, you can request multiple attributes at once. Simply add one more JSON-path to 
attributeNameExpression parameter. For example, we want to request two shared attributes in one request, our config 
will look like:

```json
"attributeRequests": [
  {
    "type": "shared",
    "requestExpression": "${[0:3]==atr}",
    "attributeNameExpression": "[4:19][20:]"
  }
]
```

That means that we have to send the next message for requesting two shared attributes:
`atr sharedAttribute sharedAttribite1`

#### Attribute update subsection

This configuration section is optional. ThingsBoard allows the provisioning of device attributes and fetches some of them from 
the device application. You can treat this as a remote configuration for devices, enabling them to request 
shared attributes from ThingsBoard. See [user guide](/docs/user-guide/attributes/) for more details.

The “attributeRequests” configuration allows you to configure the format of the corresponding attribute data that will be 
sent to the server.

| **Parameter**           | **Default value**                     | **Description**                                             |
|:-|:-|-
| encoding                | **utf-16**                            | Encoding used when writing received string data to storage. |
| attributeOnThingsBoard  | **sharedName**                        | Shared attribute name                                       |
|---

This subsection in configuration file looks like:

```json
"attributeUpdates": [
  {
    "encoding": "utf-16",
    "attributeOnThingsBoard": "sharedName"
  }
]
```

#### Server side RPC subsection

ThingsBoard allows for sending RPC commands to devices connected directly to ThingsBoard or via Gateway.

Configuration, provided in this section is used for sending RPC requests from ThingsBoard to the device.

| **Parameter**           | **Default value**                     | **Description**                                                             |
|:-|:-|-----------------------------------------------------------------------------
| methodRPC               | **rpcMethod1**                        | RPC method name.                                                            |
| withResponse            | **true**                              | Boolean value that determines whether to send response back to ThingsBoard. |
| methodProcessing        | **write**                             | Type of operation.                                                          |
| encoding                | **utf-8**                             | Encoding used when writing received string data to storage.                 |
|---

This subsection in configuration file looks like:

```json
"serverSideRpc": [
  {
    "methodRPC": "rpcMethod1",
    "withResponse": true,
    "methodProcessing": "write",
    "encoding": "utf-8"
  }
]
```

Also, every telemetry and attribute parameter has a built-in SET RPC method out of the box, eliminating the need for 
manual configuration. To use them, make sure you set all the required parameters (in the case of Socket Connector, 
these are the following:
**withResponse**, **methodProcessing**, **encoding**). 
See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
