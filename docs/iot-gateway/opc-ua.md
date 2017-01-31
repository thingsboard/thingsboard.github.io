---
layout: docwithnav
assignees:
- ashvayka
title: OPC-UA Extension Configuration

---

* TOC
{:toc}

This guide will help you to get familiar with OPC-UA extension configuration for Thingsboard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this extension.
We will describe extension configuration file below.

### Extension configuration: opc-config.json

Extension configuration is a JSON file that contain information about how to connect and monitor list of OPC-UA servers.
The root JSON element should contain "servers" array. Each server in array is configured using following properties:

#### Basic connection properties

| **Property**        | **Description**                                                                                                                                                                                                  | **Default Value**         |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| applicationName     | Name of the client application, used for OPC-UA connection.                                                                                                                                                      | Thingsboard OPC-UA client |
| applicationUri      | URI of the client application, used for OPC-UA connection.                                                                                                                                                       | urn:thingsboard:client    |
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
      "applicationName": "Thingsboard OPC-UA client",
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
Many OPC-UA servers require provisioning of client key on the server, before client can connect.
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

Mapping configuration basically setups rules of OPC-UA server monitoring and data conversion to Thingsboard Key-Value format.

Mapping process periodically travers OPC-UA server node tree and applies regular expression that is configured in **deviceNodePattern** parameter for each mapping configuration.
List of nodes that match regular expression are stored as device nodes. 
Now mapping process will use **deviceNamePattern** to get device name value. 
You can use OPC-UA tags inside the pattern by specifying their relative (to device node) names. See example below. 
Similar mapping rules are applied for **attributes** and **timeseries** values:

 - **key** - constant Attribute or Timeseries Thingsboard key.
 - **type** - either boolean, long, double or string.
 - **value** - expression based on relative tag values specified inside **${}** 

### KEPServerEX connection example

This example will demonstrate how to 

 - connect to your local KEPServerEX installation running on Windows.
 - transform sample OPC-UA tag values to Thingsboard attributes and telemetry.
 - visualize OPC-UA tag values using Thingsboard widgets.
 
#### Prerequisites

We assume that KEPServerEX is already installed on your Windows machine. 
We will use Windows 10 and Free Demo server.  
 
 
#### Step 1. 

```json
{
  "servers": [
    {
      "applicationName": "Thingsboard OPC-UA client",
      "applicationUri": "urn:thingsboard:client",
      "host": "localhost",
      "port": 49320,
      "scanPeriodInSeconds": 10,
      "timeoutInMillis": 5000,
      "security": "Basic128Rsa15",
      "identity": {
        "type": "anonymous"
      },
      "keystore": {
        "type": "PKCS12",
        "location": "example-certs.pfx",
        "password": "password",
        "alias": "client-ai",
        "keyPassword": "password"
      },
      "mapping": [
        {
          "deviceNodePattern": "Channel1\\.Device\\d+$",
          "deviceNamePattern": "Device ${_System._DeviceId}",
          "attributes": [
            {"key":"Tag1", "type": "long", "value": "${Tag1}"},
            {"key":"Tag2", "type": "long", "value": "${Tag2}"}
          ],
          "timeseries": [
            {"key":"Tag2", "type": "long", "value": "${Tag2}"}
          ]
        },
        {
          "deviceNodePattern": "Data Type Examples\\.16 Bit Device$",
          "deviceNamePattern": "16 Bit Device ${_System._DeviceId}",
          "attributes": [
            {"key":"Tag1", "type": "double", "value": "${K Registers.Double1}"}
          ],
          "timeseries": [
            {"key":"Tag2", "type": "long", "value": "${K Registers.Long1}"}
          ]
        }
      ]
    }
  ]
}

```