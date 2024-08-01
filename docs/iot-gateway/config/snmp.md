---
layout: docwithnav-gw
title: SNMP Connector Configuration
description: SNMP monitoring support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with SNMP Connector configuration for ThingsBoard IoT Gateway.  
Use [general configuration guide](/docs/iot-gateway/configuration/) to enable this Connector.  
The purpose of this Connector is to get data from SNMP manager objects and write some data to them.  

This connector is useful when you have SNMP manager in your network and you would like to push the data to the ThingsBoard.    

We will describe connector configuration file below.  

## Connector configuration: snmp.json

Connector configuration is a JSON file that contains information about SNMP managers and how to process the data.  
Let's review the format of the configuration file using the example below.    

<b>Example of SNMP Connector config file.</b>

Example listed below will connect to a manager on **snmp.live.gambitcommunications.com**.  
Then, connector will try to read the data from objects using configuration from attributes, and telemetry section. See more info in a description below.  

{% capture snmpConf %}
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

{% endcapture %}
{% include code-toggle.liquid code=snmpConf params="conf|.copy-code.expandable-20" %}

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

This configuration section contains an array of objects with configuration for data processing. Objects configured here will be processed as device attributes.  
By default, the gateway uses an uplink converter to send received data from SNMP manager to ThingsBoard, but it is also possible to use a custom converter.  

**Note**: Some configuration parameters in the configuration objects depend on the method being used. You can read more about specific configuration parameters for methods [here](#supported-methods-and-their-configuration)

General configuration parameters are:

| **Parameter**     | **Default value**              | **Description**                                                                                         |
|:-|:-------------------------------|-
| key               | **ReceivedFromGet**            | Attribute key in device on ThingsBoard.                                                                 |
| method            | **get**                        | Method for data processing. Supported methods are [here](#supported-methods-and-their-configuration).   |
| oid               | **1.3.6.1.2.1.1.1.0**          | Manager object identifier.                                                                              |
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

This configuration section contains an array of objects with configuration for data processing. Objects configured here will be processed as device telemetry.  
By default, the gateway uses an uplink converter to send received data from SNMP manager to ThingsBoard, but it is also possible to use a custom converter.  

**Note**: Some configuration parameters in configuration objects depend on used method. You can read more about specific configuration parameters for methods [here](#supported-methods-and-their-configuration)

General configuration parameters are:

| **Parameter**     | **Default value**             | **Description**                                                                                         |
|:-|:------------------------------|---------------------------------------------------------------------------------------------------------
| key               | **ReceivedFromTable**         | Telemetry key in device on ThingsBoard.                                                                 |
| method            | **table**                     | Method for data processing. Supported methods are [here](#supported-methods-and-their-configuration).   |
| oid               | **1.3.6.1.2.1.1**             | Manager object identifier.                                                                              |
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

Configurations in this section are optional.  
ThingsBoard allows the provision of device attributes and fetches some of them from the device application.
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

ThingsBoard allows sending [RPC commands](/docs/user-guide/rpc/) to the device connected to ThingsBoard directly or via Gateway.
 
Configuration, provided in this section is used for sending RPC requests from ThingsBoard to the device through the gateway.

{% capture rpc_variants %}
**There are 2 types of the RPC calls:**  
1. With reply, after sending request the gateway will wait for a response and send it to ThingsBoard.
2. With no reply, after sending request the gateway will not wait for a response.

Examples for both methods are provided below.

{% endcapture %}
{% include templates/info-banner.md content=rpc_variants %}

```json
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
```


### Supported methods and their configuration  

Supported methods are:  

 - **get**

   Specific configuration parameters:  <br>  
   **oid** - Array of object identifiers. 

   **method** - Method name. 

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
 
   Specific configuration parameters:  <br>  
   **oid** - Array of object identifiers.  

   **timeout** - Request timeout in seconds.  

   **method** - Method name.
   
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
 
   Specific configuration parameters: <br>  
   **oid** - Array of object identifiers. 

   **timeout** - Request timeout in seconds.    

   **method** - Method name.
   
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
 
   Specific configuration parameters:  <br>  
   **oid** - Array of object identifiers.

   **method** - Method name.
   
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
 
   Specific configuration parameters:  <br>  
   **oid** - Array of object identifiers.

   **method** - Method name.
   
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
 
   Specific configuration parameters:  <br>  
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
 
   Specific configuration parameters:  <br>  
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
    This method is used to write data into multiple objects by their identifiers.
 
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
