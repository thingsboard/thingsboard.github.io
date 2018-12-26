---
layout: docwithnav
assignees:
- ashvayka
title: OPC-UA Extension Configuration
description: OPC-UA protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with OPC-UA extension configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this extension.
We will describe extension configuration file below.

### Extension configuration: opc-config.json

Extension configuration is a JSON file that contains information about how to connect and monitor a list of OPC-UA servers.
The root JSON element should contain "servers" array. Each server in the array is configured using following properties:

#### Basic connection properties

| **Property**        | **Description**                                                                                                                                                                                                  | **Default Value**         |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| applicationName     | Name of the client application, used for OPC-UA connection.                                                                                                                                                      | ThingsBoard OPC-UA client |
| applicationUri      | URI of the client application, used for OPC-UA connection.                                                                                                                                                       |     |
| host                | OPC-UA server host                                                                                                                                                                                               | localhost                 |
| port                | OPC-UA server port                                                                                                                                                                                               | 49320                     |
| scanPeriodInSeconds | Interval for complete OPC-UA server structure re-scan. Used to detect new or deleted devices.                                                                                                                    | 10                        |
| timeoutInMillis     | OPC-UA server connection timeout in milliseconds.                                                                                                                                                                | 5000                      |
| security            | OPC-UA security option. See [SecurityPolicy](https://github.com/eclipse/milo/blob/master/opc-ua-stack/stack-core/src/main/java/org/eclipse/milo/opcua/stack/core/security/SecurityPolicy.java) for more details. | Basic128Rsa15             |

For Example:

```json
{
  "servers": [
    {
      "applicationName": "ThingsBoard OPC-UA client",
      "applicationUri": "urn:thingsboard:client",
      "host": "localhost",
      "port": 49320,
      "scanPeriodInSeconds": 10,
      "timeoutInMillis": 5000,
      "security": "Basic128Rsa15"
      ...
    }
  ]
}
      
```

#### Client identity properties

OPC-UA extension supports "anonymous" and "username" client identities.
Example of anonymous identity configuration:

```json
{
      ...
      "identity": {
        "type": "anonymous"
      }
      ...
}
      
```

Example of username identity configuration:

```json
{
      ...
      "identity": {
        "type": "username",
        "username": "Your username",
        "password": "Your password"
      }
      ...
}
      
```

#### Keystore configuration

Keystore information is used to setup encrypted connection between Gateway OPC-UA client and your OPC-UA server.
Many OPC-UA servers require provisioning of client key on the server before client can connect.
Supported keystore types are JKS and PKCS12.
Example of keystore configuration:

```json
{
      ...
      "keystore": {
        "type": "PKCS12",
        "location": "your-certs.pfx",
        "password": "your-keystore-password",
        "alias": "your-client-key",
        "keyPassword": "your-client-password"
      }
      ...
}
```

#### Mapping

Mapping configuration setup rules of OPC-UA server monitoring and data conversion to ThingsBoard Key-Value format. For example:

```json
{
...
  "mapping": [
    {
      "deviceNodePattern": "Channel1\\.Device\\d+$",
      "deviceNamePattern": "Device ${_System._DeviceId}",
      "attributes": [
        {"key":"Tag1", "type": "string", "value": "${Tag1}"}
      ],
      "timeseries": [
        {"key":"Tag2", "type": "long", "value": "${Tag2}"}
      ]
    }
    ...
  ]
}
```

Mapping process periodically traverse the OPC-UA server node tree and applies the regular expression that is configured in **deviceNodePattern** parameter for each mapping configuration.
The ist of nodes that match the regular expression is stored as device nodes. 
Now mapping process will use **deviceNamePattern** to get device name value. 
You can use OPC-UA tags inside the pattern by specifying their relative (to device node) names. See example below. 
Similar mapping rules are applied for **attributes** and **timeseries** values:

 - **key** - constant Attribute or Timeseries ThingsBoard key.
 - **type** - either boolean, long, double or string.
 - **value** - expression based on relative tag values specified inside **${}** 

### Server-side RPC

For general information how to use server-side RPC feature please visit [this guide](/docs/user-guide/rpc/#server-side-rpc-api/).

#### Multiple tags write

This RPC method allows user to simultaneously write values to the multiple tags of the connected device.

##### Request format

| **Property** | **Description**                 | **Value**   |
|--------------|---------------------------------|-------------|
| method       | RPC method name                 | write       |
| params       | Format of RPC method parameters | JSON object |

###### Method parameters format

The method parameters are represented as JSON object. Each object field describes the single OPC tag and its value that needs to be written.

| **Property**  | **Description**                                            | **Value**                  |
|---------------|------------------------------------------------------------|----------------------------|
| _tag name 1_  | Path to the OPC node (tag) relative to the device OPC node | boolean,long,double,string |
| _tag name 2_  | ...                                                        | ...                        |
| ...           | ...                                                        | ...                        |

**NOTE:** For more details about the device OPC node see above the _Mapping_ section.

##### Response format

###### Success

| **Property**   | **Description**                        | **Value** |
|----------------|----------------------------------------|-----------|
| _tag name 1_   | Name of OPC tag that has been written  | ok        |
| _tag name 2_   | ...                                    | ...       |
| ...            | ...                                    | ...       |

###### Global error

| **Property**  | **Description**           |
|---------------|---------------------------|
| error         | Description of the error  |

###### Tag error

| **Property**   | **Description**                                      |
|----------------|------------------------------------------------------|
| _tag name 1_   | Description of the error while writing the tag value |
| _tag name 2_   | ...                                                  |
| ...            | ...                                                  |


##### Examples

###### Request

```json
    {
        "BooleanTag": true,
        "DoubleTag": 3.14,
        "LongTag": 12345,
        "StringTag": "Hello World!",

        "DateTagMillisInGmtTimeZone": 1543922564000,
        "DateTagAsString": "2018-12-06 12:40:50.123 PST",

        "Group.SubGroup.WordTag": 3456
    }
```

###### Response

```json
    {
        "SuccesWriteTag": "ok",
        "ErrorWriteTag": "No tag found"
    }
```

```json
    {
        "error": "Unsupported RPC method"
    }
```

## Next steps

Explore examples:
 
 - [KEPServerEX connection example](/docs/iot-gateway/getting-started/#step-9-connect-to-external-opc-ua-server)

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
