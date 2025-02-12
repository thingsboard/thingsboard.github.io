---
layout: docwithnav-gw
title: KNX Connector Configuration
description: KNX API support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you get familiar with KNX Connector configuration for ThingsBoard IoT Gateway.
Use [general configuration guide](/docs/iot-gateway/configuration/) to enable this Connector. The purpose of this 
Connector is to connect KNX-based devices to ThingsBoard, allowing to process data from KNX devices and control 
KNX automation systems.

We will describe the connector configuration file below.

## Connector configuration: knx.json

Connector configuration is a JSON file that contains information on how to connect to KNX device, process
the data and other service features. Let’s review the format of the configuration file using the example below.

<b>Example of KNX Connector config file.</b>

```json
{
  "logLevel": "INFO",
  "client": {
    "type": "AUTOMATIC",
    "addressFormat": "LONG",
    "localIp": "127.0.0.1",
    "localPort": 3671,
    "autoReconnect": true,
    "autoReconnectWait": 3,
    "gatewaysScanner": {
      "enabled": true,
      "scanPeriod": 3,
      "stopOnFound": false
    }
  },
  "devices": [
    {
      "deviceInfo": {
        "deviceNameDataType": "string",
        "deviceNameExpressionSource": "expression",
        "deviceNameExpression": "Device ${1/0/5}",
        "deviceProfileDataType": "none",
        "deviceProfileExpressionSource": "constant",
        "deviceProfileNameExpression": "default"
      },
      "pollPeriod": 5000,
      "attributes": [
        {
          "type": "temperature",
          "key": "temperature",
          "groupAddress": "1/0/6"
        }
      ],
      "timeseries": [
        {
          "type": "humidity",
          "key": "humidity",
          "groupAddress": "1/0/7"
        }
      ]
    }
  ],
  "attributeUpdates": [
    {
      "deviceNameFilter": ".*",
      "dataType": "percent_U8",
      "groupAddress": "1/0/9",
      "key": "brightness"
    }
  ],
  "serverSideRpc": [
    {
      "requestType": "read",
      "deviceNameFilter": ".*",
      "method": "get_name",
      "dataType": "string",
      "groupAddress": "1/0/5"
    },
    {
      "requestType": "write",
      "deviceNameFilter": ".*",
      "method": "set_name",
      "dataType": "string",
      "groupAddress": "1/0/5"
    }
  ]
}
```
{:.copy-code.expandable-10}

### Section "Client"

Configuration in this section is used to set up the KNX client, that is responsible for communication with KNX router.

| **Parameter**     | **Default value** | **Description**                                                                                                      |
|:------------------|:------------------|----------------------------------------------------------------------------------------------------------------------|
| type              | **AUTOMATIC**     | Type of connection (detailed description below): AUTOMATIC, ROUTING, TUNNELING, TUNNELING_TCP, TUNNELING_TCP_SECURE. |
| addressFormat     | **LONG**          | Address format (detailed description below): SHORT, LONG, FREE.                                                      |
| localIP           |                   | Local ip or interface name.                                                                                          |
| localPort         |                   | Local port.                                                                                                          |
| autoReconnect     | **true**          | Auto reconnect to KNX/IP tunneling device if connection cannot be established.                                       |
| autoReconnectWait | **3**             | Wait n seconds before trying to reconnect to KNX/IP tunneling device.                                                |
| gatewayIP         |                   | IP or hostname of KNX/IP tunneling device.                                                                           |
| gatewayPort       | **3671**          | Port of KNX/IP tunneling device.                                                                                     |
| individualAddress |                   | Individual address.                                                                                                  |
| rateLimit         | **0**             | Can be used to limit the outgoing traffic to the KNX/IP interface by the telegram queue. 0 disables rate limiter.    |
| multicastGroup    | **224.0.23.12**   | Multicast group for KNXnet/IP routing.                                                                               |
| multicastPort     | **3671**          | Multicast port for KNXnet/IP routing.                                                                                |
| stateUpdater      | **false**         | Used to set the default state-updating mechanism used by devices.                                                    |
| ---               |                   |                                                                                                                      |

Address format:
- SHORT - representation like "1/34" without middle groups;
- LONG - representation like "1/2/34" with middle groups;
- FREE - integer or hex representation.

Type of connection:
- AUTOMATIC - using GatewayScanner for searching and finding KNX/IP devices in the network;
- ROUTING - using KNX/IP multicast routing;
- TUNNELING - connecting to a specific KNX/IP tunneling device via UDP;
- TUNNELING_TCP - connecting to a specific KNX/IP tunneling v2 device via TCP;
- TUNNELING_TCP_SECURE - connecting to a specific KNX/IP tunneling v2 device via secure TCP.

Example:

```json
"client": {
  "type": "AUTOMATIC",
  "addressFormat": "LONG",
  "localIp": "127.0.0.1",
  "localPort": 3671,
  "autoReconnect": true,
  "autoReconnectWait": 3,
},
```

#### Subsection "Security"

{% capture difference %}
**By default, the connector uses an unsecured connection.**
{% endcapture %}
{% include templates/info-banner.md content=difference %}

KNX protocol security consists of two primary security mechanisms designed to protect communication in KNX systems:
- KNX IP Secure - encrypts and secures communication between KNX IP devices (routers and interfaces) over IP networks;
- KNX Data Secure - encrypts communication at the telegram (data) level to prevent unauthorized control or reading of KNX group addresses;
- KNX Secure Tunneling (Extended KNX IP Secure) - encrypts communication between a KNX Secure IP interface and a client.

To enable security, you need to set the following parameters 
in the "**security**" subsection of the "**client**" section:

{% capture knxsecuritytogglespec %}
<b>KNX IP Secure</b>%,%knxIpSecure%,%templates/iot-gateway/knx-connector/ip-secure-advanced.md%br%
<b>KNX Data Secure</b>%,%knxDataSecure%,%templates/iot-gateway/knx-connector/data-secure-advanced.md%br%
<b>KNX Secure Tunneling</b>%,%knxSecureTunneling%,%templates/iot-gateway/knx-connector/secure-tunneling-advanced.md%br%{% endcapture %}

{% include content-toggle.liquid content-toggle-id="knxSecurity" toggle-spec=knxsecuritytogglespec %}

#### Subsection "Gateways Scanner"

Gateways Scanner is helpful when you don't know the IP address of the KNX router. It scans the network for KNX routers
and prints the detected IP addresses in the log.

These parameters are available for configuration in the "**gatewaysScanner**" subsection:

| **Parameter** | **Default value** | **Description**                                           |
|:--------------|:------------------|-----------------------------------------------------------|
| enabled       | **true**          | Enable gateways scanner.                                  |
| scanPeriod    | **3**             | Used to set the period of scanning in seconds.            |
| stopOnFound   | **false**         | Used to stop scanning when the first KNX router is found. |
| ---           |                   |                                                           |

This subsection in the configuration file looks like:

```json
"gatewaysScanner": {
  "enabled": true,
  "scanPeriod": 3,
  "stopOnFound": false
}
```

Example output:

```
Found KNX gateway:
- Calimero test network 1.1.0
  192.168.1.160:3671
  Tunneling: TCP
  Routing: Yes
```

### Section "Devices"

This section is used to configure devices polling period and data processing. The section consists of the array of 
objects, where each object contains the following fields:
- **deviceInfo** - device name and profile configuration.
- **pollPeriod** - polling period in milliseconds.
- **attributes** - array of objects that contains the configuration of attributes.
- **timeseries** - array of objects that contains the configuration of time series.

General view of the device configuration looks like this:

```json
"devices": [
  {
    "deviceInfo": {
    ...
    },
    "pollPeriod": 5000,
    "attributes": [
    ...
    ],
    "timeseries": [
    ...
    ]        
  }
]
```

#### Subsection "Device Info"

This subsection is used to configure the device name and profile that will create on ThingsBoard.
These parameters are available for configuration in the "**deviceInfo**" subsection of the device object:

| **Parameter**                 | **Default value**   | **Description**                                   |
|:------------------------------|:--------------------|---------------------------------------------------|
| deviceNameDataType            | **string**          | Type of value.                                    |
| deviceNameExpressionSource    | **expression**      | Source of the expression: expression or constant. |
| deviceNameExpression          | **Device ${1/0/5}** | Expression for device name.                       |
| deviceProfileDataType         | **none**            | Type of value.                                    |
| deviceProfileExpressionSource | **constant**        | Source of the expression: expression or constant. |
| deviceProfileNameExpression   | **default**         | Expression for device profile.                    |
| ---                           |                     |                                                   |

This subsection in the configuration file looks like:

```json
"deviceInfo": {
  "deviceNameDataType": "string",
  "deviceNameExpressionSource": "expression",
  "deviceNameExpression": "Device ${1/0/5}",
  "deviceProfileDataType": "none",
  "deviceProfileExpressionSource": "constant",
  "deviceProfileNameExpression": "default"
},
```

#### Subsection "Attributes" and "Timeseries"

These subsections are used to configure the telemetry and attributes that will be sent to ThingsBoard and provide the
settings for processing data from KNX devices.

The table below describes the attributes and time series parameters:

| **Parameter**       | **Description** |
|:--------------------|-----------------|
| type                | Data type.      |
| key                 | Key name.       |
| groupAddress        | Group address.  |
| --                  |                 |

Example of the attributes section:
```json
"attributes": [
  {
    "type": "temperature",
    "key": "temperature",
    "groupAddress": "1/0/6"
  }
],
```

Example of timeseries section:
```json
"timeseries": [
  {
    "type": "humidity",
    "key": "humidity",
    "groupAddress": "1/0/7"
  }
]
```

### Section "Attribute Updates"

This configuration section is optional. 

ThingsBoard allows the provisioning of device attributes and fetches some of them from 
the device application. You can treat this as a remote configuration for devices, enabling them to request 
shared attributes from ThingsBoard. See the [user guide](/docs/user-guide/attributes/) for more details.

The “attributeRequests” configuration allows you to configure the format of the corresponding attribute data that will be 
sent to the KNX device. The configuration is an array of objects, where each object contains the following fields:

| **Parameter**    | **Default value** | **Description**                                                                    |
|:-----------------|:------------------|------------------------------------------------------------------------------------|
| deviceNameFilter | .*                | Regular expression device name filter used to determine which function to execute. |
| dataType         | **string**        | Type of value.                                                                     |
| groupAddress     | **1/0/5**         | Group address.                                                                     |
| key              | **sharedName**    | Shared attribute name.                                                             |
| ---              |                   |                                                                                    |

This subsection in the configuration file looks like:

```json
"attributeUpdates": [
  {
    "deviceNameFilter": ".*",
    "dataType": "percent_U8",
    "groupAddress": "1/0/9",
    "key": "brightness"
  }
],
```

### Section "RPC"

ThingsBoard allows sending [RPC commands](/docs/user-guide/rpc/) to the device that is connected to ThingsBoard 
directly or via Gateway.
 
The configuration provided in this section is used for sending RPC requests from ThingsBoard to device. The configuration is 
an array of objects, where each object contains the following fields:

| **Parameter**    | **Default value** | **Description**                                                                    |
|:-----------------|:------------------|------------------------------------------------------------------------------------|
| requestType      | **read**          | Request type: read or write.                                                       |
| deviceNameFilter | .*                | Regular expression device name filter used to determine which function to execute. |
| method           | **rpcMethod1**    | RPC method name.                                                                   |
| dataType         | **string**        | Type of value.                                                                     |
| groupAddress     | **1/0/5**         | Group address.                                                                     |
| ---              |                   |                                                                                    |

This subsection in the configuration file looks like:

```json
"serverSideRpc": [
  {
    "requestType": "read",
    "deviceNameFilter": ".*",
    "method": "get_name",
    "dataType": "string",
    "groupAddress": "1/0/5"
  }
]
```

Additionally, every telemetry and attribute parameter comes with a built-in SET RPC method out of the box, eliminating the need for 
manual configuration. To use them, make sure you set all the required parameters (for the KNX Connector, 
these include: **dataType**, **groupAddress**, and **value** - only if RPC method name is "**set**"). 
See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods) for more details.

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
