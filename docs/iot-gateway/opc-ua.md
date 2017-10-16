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


## Next steps

Explore examples:
 
 - [KEPServerEX connection example](/docs/iot-gateway/getting-started/#step-9-connect-to-external-opc-ua-server)

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
