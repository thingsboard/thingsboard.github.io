---
layout: docwithnav-gw
title: SNMP Connector Configuration
description: SNMP monitoring support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with SNMP Connector configuration for ThingsBoard IoT Gateway.  
Use [general configuration guide](/docs/iot-gateway/configuration/) to enable this Connector.  
The purpose of this Connector is to get data from SNMP managers objects and write some data there.  

This connector is useful when you have SNMP manager in your network and you would like to push this data to the ThingsBoard.    

We will describe connector configuration file below.  

## Connector configuration: snmp.json

Connector configuration is a JSON file that contains information about SNMP managers and how to process the data.  
Let's review the format of the configuration file using example below.    

<br>
<details>

<summary>
<b>Example of SNMP Connector config file. Press to expand.</b>
</summary>

Example listed below will connect to a manager on **snmp.live.gambitcommunications.com**.  
Then, connector will try to read the data from objects using configuration from attributes, telemetry section. See more info in a description below.  

{% highlight json %}
{
  "devices": [
    {
      "deviceName": "SNMP router",
      "deviceType": "snmp",
      "ip": "snmp.live.gambitcommunications.com",
      "port": 161,
      "pollPeriod": 5000,
      "community": "public",
      "attributes": [
        {
          "key": "ReceivedFromGet",
          "method": "get",
          "oid": "1.3.6.1.2.1.1.1.0",
          "timeout": 6
        },
        {
          "key": "ReceivedFromMultiGet",
          "method": "multiget",
          "oid": [
            "1.3.6.1.2.1.1.1.0",
            "1.3.6.1.2.1.1.2.0"
          ],
          "timeout": 6
        },
        {
          "key": "ReceivedFromGetNext",
          "method": "getnext",
          "oid": "1.3.6.1.2.1.1.1.0",
          "timeout": 6
        },
        {
          "key": "ReceivedFromMultiWalk",
          "method": "multiwalk",
          "oid": [
            "1.3.6.1.2.1.1.1.0",
            "1.3.6.0.1.2.1"
          ]
        },
        {
          "key": "ReceivedFromBulkWalk",
          "method": "bulkwalk",
          "oid": [
            "1.3.6.1.2.1.1.1.0",
            "1.3.6.1.2.1.1.2.0"
          ]
        },
        {
          "key": "ReceivedFromBulkGet",
          "method": "bulkget",
          "scalarOid": [
            "1.3.6.1.2.1.1.1.0",
            "1.3.6.1.2.1.1.2.0"
          ],
          "repeatingOid": [
            "1.3.6.1.2.1.1.1.0",
            "1.3.6.1.2.1.1.2.0"
          ],
          "maxListSize": 10
        }
      ],
      "telemetry": [
        {
          "key": "ReceivedFromWalk",
          "community": "private",
          "method": "walk",
          "oid": "1.3.6.1.2.1.1.1.0"
        },
        {
          "key": "ReceivedFromTable",
          "method": "table",
          "oid": "1.3.6.1.2.1.1"
        }
      ],
      "attributeUpdateRequests": [
        {
          "attributeFilter": "dataToSet",
          "method": "set",
          "oid": "1.3.6.1.2.1.1.1.0"
        },
        {
          "attributeFilter": "dataToMultiSet",
          "method": "multiset",
          "mappings": {
            "1.2.3": "10",
            "2.3.4": "${attribute}"
          }
        }
      ],
      "serverSideRpcRequests": [
        {
          "requestFilter": "setData",
          "method": "set",
          "oid": "1.3.6.1.2.1.1.1.0"
        },
        {
          "requestFilter": "multiSetData",
          "method": "multiset"
        },
        {
          "requestFilter": "getData",
          "method": "get",
          "oid": "1.3.6.1.2.1.1.1.0"
        },
        {
          "requestFilter": "runBulkWalk",
          "method": "bulkwalk",
          "oid": [
            "1.3.6.1.2.1.1.1.0",
            "1.3.6.1.2.1.1.2.0"
          ]
        }
      ]
    },
    {
      "deviceName": "SNMP router",
      "deviceType": "snmp",
      "ip": "127.0.0.1",
      "pollPeriod": 5000,
      "community": "public",
      "converter": "CustomSNMPConverter",
      "attributes": [
        {
          "key": "ReceivedFromGetWithCustomConverter",
          "method": "get",
          "oid": "1.3.6.1.2.1.1.1.0"
        }
      ],
      "telemetry": [
        {
          "key": "ReceivedFromTableWithCustomConverter",
          "method": "table",
          "oid": "1.3.6.1.2.1.1.1.0"
        }
      ]
    }
  ]
}


{% endhighlight %}

</details>


### General section

The general section of the configuration contains *"devices"* list. Every item will be processed as a separate device.
Main configuration for the device item should contain the following parameters:  

| **Parameter** | **Default value**                       | **Description**                               |
|:-|:-|-
| deviceName    | **SNMP router**                         | Device name in ThingsBoard.                   |
| deviceType    | **snmp**                                | Device type in ThingsBoard.                   |
| ip            | **snmp.live.gambitcommunications.com**  | Ip or hostname of SNMP manager.               |
| port          | **161**                                 | SNMP port.                                    |
| pollPeriod    | **5000**                                | Period for data checking.                     |
| community     | **public**                              | Type of community **public** or **private**.  |
|---

#### Attributes section

This configuration section contains array of objects with configuration for data processing, objects configured there will be processed as device attributes.  
By default, the gateway uses uplink converter which sends received data from SNMP manager to the ThingsBoard, but it is possible to provide custom converter.  

**Note**: Some configuration parameters in configuration objects depend on used method. You can read more about specific configuration parameters for methods [here](#supported-methods-and-their-configuration)

General configuration parameters are:

| **Parameter**     | **Default value**                     | **Description**                                                                                         |
|:-|:-|-

| key               | **ReceivedFromGet**                   | Attribute key in device on ThingsBoard.                                                                 |
| method            | **get**                               | Method for data processing. Supported methods are [here](#supported-methods-and-their-configuration).   |
| oid               | **1.3.6.1.2.1.1.1.0**                 | Manager object identifier.                                                                              |
|---

Configuration section item example:  

```json
    {
      "key": "ReceivedFromGet",
      "method": "get",
      "oid": "1.3.6.1.2.1.1.1.0"
    }
```

#### Telemetry section

This configuration section contains array of objects with configuration for data processing, objects configured there will be processed as device telemetry.  
By default, the gateway uses uplink converter which sends received data from SNMP manager to the ThingsBoard, but it is possible to provide custom converter.  

**Note**: Some configuration parameters in configuration objects depend on used method. You can read more about specific configuration parameters for methods [here](#supported-methods-and-their-configuration)

General configuration parameters are:

| **Parameter**     | **Default value**                     | **Description**                                                                                         |
|:-|:-|-

| key               | **ReceivedFromTable**                 | Telemetry key in device on ThingsBoard.                                                                 |
| method            | **table**                             | Method for data processing. Supported methods are [here](#supported-methods-and-their-configuration).   |
| oid               | **1.3.6.1.2.1.1**                     | Manager object identifier.                                                                              |
|---

Configuration section item example:  

```json
    {
      "key": "ReceivedFromTable",
      "method": "table",
      "oid": "1.3.6.1.2.1.1"
    }
```


#### Attribute update requests section

Configuration in this section are optional.  
ThingsBoard allows to provision device attributes and fetch some of them from the device application.
You can treat this as a remote configuration for devices. Your devices are able to request shared attributes from ThingsBoard.
See [user guide](/docs/user-guide/attributes/) for more details.

The "**attributeUpdateRequests**" configuration allows configuring the format of the corresponding attribute request and response messages. 

| **Parameter**                 | **Default value**                                     | **Description**                                                                                       |
|:-|:-|-
| attributeFilter               | **dataToSet**                                         | Shared attribute name.                                                                                |
| method                        | **set**                                               | Method for data processing. Supported methods are [here](#supported-methods-and-their-configuration). |
| oid                           | **1.3.6.1.2.1.1**                                     | Manager object identifier.                                                                            |
|---

The **attributeUpdates** section will look like:

```json
      "attributeUpdateRequests": [
        {
          "attributeFilter": "dataToSet",
          "method": "set",
          "oid": "1.3.6.1.2.1.1.1.0"
        },
        {
          "attributeFilter": "dataToMultiSet",
          "method": "multiset",
          "mappings": {
            "1.2.3": "10",
            "2.3.4": "${attribute}"
          }
        }
      ]

```

**Note**: In this section **"${attribute}"** in value parameter will be replaced by shared attribute value.  

#### Server side RPC section


ThingsBoard allows sending [RPC commands](/docs/user-guide/rpc/) to the device that is connected to ThingsBoard directly or via Gateway.
 
Configuration, provided in this section uses for sending RPC requests from ThingsBoard to device through the gateway.

| **Parameter**                 | **Default value**                                                 | **Description**                                                                       |
|:-|:-|-
| 
|---

{% capture rpc_variants %}
**There are 2 types of the RPC calls:**  
1. With reply, after sending request the gateway will wait for response and send it to ThingsBoard.
2. With no reply, after sending request the gateway will not wait for response.

Examples for both methods provided below.

{% endcapture %}
{% include templates/info-banner.md content=rpc_variants %}

```json
  "serverSideRpc": [
    {
      "deviceNameFilter": ".*",
      "methodFilter": "echo",
      "requestUrlExpression": "http://127.0.0.1:5001/${deviceName}",
      "responseTimeout": 1,
      "HTTPMethod": "GET",
      "valueExpression": "${params}",
      "timeout": 0.5,
      "tries": 3,
      "httpHeaders": {
        "Content-Type": "application/json"
      },
      "security": {
        "type": "anonymous"
      }
    },
    {
      "deviceNameFilter": ".*",
      "methodFilter": "no-reply",
      "requestUrlExpression": "sensor/${deviceName}/request/${methodName}/${requestId}",
      "HTTPMethod": "POST",
      "valueExpression": "${params}",
      "httpHeaders": {
        "Content-Type": "application/json"
      }
    }
  ]
```


### Supported methods and their configuration  

Supported methods are:  

 - **get**

   Specific configuration parameters:  
   **timeout** - Request timeout in seconds.
   
   Configuration example:
   ```json
    {
      "key": "ReceivedFromGet",
      "method": "get",
      "oid": "1.3.6.1.2.1.1.1.0",
      "timeout": 6
    }
    ```

 - **multiget**
 
   Specific configuration parameters:  
   **oid** - Array of object identifiers.  
   **timeout** - Request timeout in seconds.    
   
   Configuration example:  
   ```json
    {
      "key": "ReceivedFromMultiGet",
      "method": "multiget",
      "oid": [
        "1.3.6.1.2.1.1.1.0",
        "1.3.6.1.2.1.1.2.0"
      ],
      "timeout": 6
    }
    ```
   
 - **getnext**
 
   Specific configuration parameters:  
   **timeout** - Request timeout in seconds.
   
   Configuration example:  
   ```json
    {
      "key": "ReceivedFromGetNext",
      "method": "getnext",
      "oid": "1.3.6.1.2.1.1.1.0",
      "timeout": 6
    }
   ```

 - **multiwalk**
 
   Specific configuration parameters:  
   **oid** - Array of object identifiers  
   
   Configuration example:  
   ```json
    {
      "key": "ReceivedFromMultiWalk",
      "method": "multiwalk",
      "oid": [
        "1.3.6.1.2.1.1.1.0",
        "1.3.6.0.1.2.1"
      ]
    }
   ```
   
 - **bulkwalk**
 
   Specific configuration parameters:  
   **oid** - Array of object identifiers  
   
   Configuration example:  
   ```json
    {
      "key": "ReceivedFromBulkWalk",
      "method": "bulkwalk",
      "oid": [
        "1.3.6.1.2.1.1.1.0",
        "1.3.6.1.2.1.1.2.0"
      ]
    }
   ```
 - **bulkget**
 
   Specific configuration parameters:  
   **scalardOid** - Array of non-repeaters object identifiers.  
   **repeatingOid** - Array of max-repetitions object identifiers.  
   **maxListSize** - Maximum size of the returning list.  
   
   Configuration example:
   ```json
    {
      "key": "ReceivedFromBulkGet",
      "method": "bulkget",
      "scalarOid": [
        "1.3.6.1.2.1.1.1.0",
        "1.3.6.1.2.1.1.2.0"
      ],
      "repeatingOid": [
        "1.3.6.1.2.1.1.1.0",
        "1.3.6.1.2.1.1.2.0"
      ],
      "maxListSize": 10
    }
   ```
 - **walk**
 
   Specific configuration parameters:  
   **community** - Manager object community type.    
   
   Configuration example:
   ```json
    {
      "key": "ReceivedFromWalk",
      "community": "private",
      "method": "walk",
      "oid": "1.3.6.1.2.1.1.1.0"
    }
   ```
   
 - **table**
    
   Configuration example:
   ```json
    {
      "key": "ReceivedFromTable",
      "method": "table",
      "oid": "1.3.6.1.2.1.1"
    }
   ```
      
 - **set**
    This method is used to write data into single object by it's identifier.
    
    Configuration example:
    ```json
    {
      "attributeFilter": "dataToSet",
      "method": "set",
      "oid": "1.3.6.1.2.1.1.1.0"
    }
    ```
 
 - **multiset**
    This method is used to write data into multiply object by their's identifiers.
 
   Specific configuration parameters:  
   **mapping** - Contains pair of **object identifier** and **value**.    
 
   Configuration example:
   ```json
   {
     "attributeFilter": "dataToMultiSet",
     "method": "multiset",
     "mappings": {
       "1.2.3": "10",
       "2.3.4": "${attribute}"
     }
   }
   ```



## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
