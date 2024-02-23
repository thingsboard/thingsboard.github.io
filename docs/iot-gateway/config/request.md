---
layout: docwithnav-gw
title: Request Connector Configuration
description: HTTP protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with Request Connector configuration for ThingsBoard IoT Gateway.  
Use [general configuration guide](/docs/iot-gateway/configuration/) to enable this Connector.  
The purpose of this Connector is to connect to external HTTP(S) API endpoints and get data from them.  
Connector is also able to push data to external HTTP(S) API based on the updates/commands from ThingsBoard.    

This connector is useful when you have some HTTP(S) API endpoints in your device or some data in external resource and you would like to push this data to the ThingsBoard.    

We will describe connector configuration file below.  

## Connector configuration: request.json

Connector configuration is a JSON file that contains information about how to connect to external API endpoints, what urls to use when reading data and how to process the data.  
Let's review the format of the configuration file using example below.    

<b>Example of Request Connector config file.</b>

Example listed below will connect to server on a localhost with 5000 port.  
Connector will use basic HTTP authorization using username and password.  
Then, connector will read data from a list of endpoints using urls from mapping section. See more info in a description below.  

{% capture requestConf %}
{
  "host": "http://127.0.0.1:5000",
  "SSLVerify": true,
  "security": {
    "type": "basic",
    "username": "user",
    "password": "password"
  },
  "mapping": [
    {
      "url": "getdata",
      "httpMethod": "GET",
      "httpHeaders": {
        "ACCEPT": "application/json"
      },
      "allowRedirects": true,
      "timeout": 0.5,
      "scanPeriod": 5,
      "converter": {
        "type": "json",
        "deviceNameJsonExpression": "SD8500",
        "deviceTypeJsonExpression": "SD",
        "attributes": [
          {
            "key": "serialNumber",
            "type": "string",
            "value": "${serial}"
          }
        ],
        "telemetry": [
          {
            "key": "Maintainer",
            "type": "string",
            "value": "${Developer}"
          }
        ]
      }
    },
    {
      "url": "get_info",
      "httpMethod": "GET",
      "httpHeaders": {
        "ACCEPT": "application/json"
      },
      "allowRedirects": true,
      "timeout": 0.5,
      "scanPeriod": 100,
      "converter": {
        "type": "custom",
        "deviceNameJsonExpression": "SD8500",
        "deviceTypeJsonExpression": "SD",
        "extension": "CustomRequestUplinkConverter",
        "extension-config": [
          {
            "key": "Totaliser",
            "type": "float",
            "fromByte": 0,
            "toByte": 4,
            "byteorder": "big",
            "signed": true,
            "multiplier": 1
          },
          {
            "key": "Flow",
            "type": "int",
            "fromByte": 4,
            "toByte": 6,
            "byteorder": "big",
            "signed": true,
            "multiplier": 0.01
          }
        ]
      }
    }
  ],
  "attributeUpdates": [
      {
        "httpMethod": "POST",
        "httpHeaders": {
          "CONTENT-TYPE": "application/json"
        },
        "timeout": 0.5,
        "tries": 3,
        "allowRedirects": true,
        "deviceNameFilter": "SD.*",
        "attributeFilter": "send_data",
        "requestUrlExpression": "sensor/${deviceName}/${attributeKey}",
        "valueExpression": "{\"${attributeKey}\":\"${attributeValue}\"}"
      }
  ],
  "serverSideRpc": [
    {
      "deviceNameFilter": ".*",
      "methodFilter": "echo",
      "requestUrlExpression": "sensor/${deviceName}/request/${methodName}/${requestId}",
      "responseTimeout": 1,
      "httpMethod": "GET",
      "valueExpression": "${params}",
      "timeout": 0.5,
      "tries": 3,
      "httpHeaders": {
        "Content-Type": "application/json"
      }
    },
    {
      "deviceNameFilter": ".*",
      "methodFilter": "no-reply",
      "requestUrlExpression": "sensor/${deviceName}/request/${methodName}/${requestId}",
      "httpMethod": "POST",
      "valueExpression": "${params}",
      "httpHeaders": {
        "Content-Type": "application/json"
      }
    }
  ]
}

{% endcapture %}
{% include code-toggle.liquid code=requestConf params="conf|.copy-code.expandable-20" %}


### General section

| **Parameter** | **Default value**                 | **Description**                                           |
|:-|:-|-
| host          | **http://127.0.0.1:5000**         | Domain address or ip of the server.                       |
| SSLVerify     | **true**                          | Verify or no SSL certificate on the server if available.  |
|---


### Security section

This section provides configuration for client authorization at the external server.
 
{% capture requestconnectorsecuritytogglespec %}
Basic<small>Recommended</small>%,%username%,%templates/iot-gateway/request-connector-basic-security-config.md%br%
Anonymous<small>No security</small>%,%anonymous%,%templates/iot-gateway/request-connector-anonymous-security-config.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="requestConnectorCredentialsConfig" toggle-spec=requestconnectorsecuritytogglespec %}


### Mapping section

This configuration section contains array of objects with endpoints that the gateway will try to read after connecting to the server.  
Also this section contains settings about processing incoming messages (converter).  
After request, each response from that url is analyzed to extract device name, type and data (attributes and/or timeseries values).  
By default, the gateway uses Json converter, but it is possible to provide custom converter. See [example](https://github.com/thingsboard/thingsboard-gateway/blob/master/thingsboard_gateway/extensions/request/custom_request_uplink_converter.py) in the source code.  

**Note**: You can specify multiple mapping objects inside the array.

| **Parameter**     | **Default value**                     | **Description**                                                   |
|:-|:-|-
| url               | **getdata**                           | Url address for sending request.                                  |
| httpMethod        | **GET**                               | HTTP method for request (**GET**, **POST** etc.).                 |
| httpHeaders       | **{ "ACCEPT": "application/json" }**  | Object contains additional HTTP headers for request.              |
| allowRedirects    | **true**                              | Allow request redirection.                                        |
| timeout           | **0.5**                               | Timeout for request.                                              |
| scanPeriod        | **5**                                 | Rescan rate.                                                      |
|---


#### Converter subsection

This subsection contains configuration for processing incoming messages.  

Types of request converters:  
1. json -- Default converter  
2. custom -- Custom converter (You can write it by yourself, and it will use to convert incoming data from the response.)  

{% capture requestconvertertypespec %}
json<small>Recommended if json will be received in response</small>%,%json%,%templates/iot-gateway/request-converter-json-config.md%br%
custom<small>Recommended if bytes or anything else will be received in response</small>%,%custom%,%templates/iot-gateway/request-converter-custom-config.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="RequestConverterTypeConfig" toggle-spec=requestconvertertypespec %}


### Attribute update section

Configuration in this section are optional.  
ThingsBoard allows to provision device attributes and fetch some of them from the device application.
You can treat this as a remote configuration for devices. Your devices are able to request shared attributes from ThingsBoard.
See [user guide](/docs/user-guide/attributes/) for more details.

The "**attributeRequests**" configuration allows configuring the format of the corresponding attribute request and response messages. 

| **Parameter**                 | **Default value**                                     | **Description**                                                                                    |
|:-|:-|-
| httpMethod                    | **GET**                                               | HTTP method for request (**GET**, **POST** etc.).                                                  |
| httpHeaders                   | **{ "CONTENT-TYPE": "application/json" }**            | Object contains additional HTTP headers for request.                                               |
| timeout                       | **0.5**                                               | Timeout for request.                                                                               |
| tries                         | **3**                                                 | Count of tries to send data                                                                        |
| allowRedirects                | **true**                                              | Allow request redirection.                                                                         |
| deviceNameFilter              | **SD.\***                                             | Regular expression device name filter, uses to determine, which function to execute.               |
| attributeFilter               | **send_data**                                         | Regular expression attribute name filter, uses to determine, which function to execute.            |
| requestUrlExpression          | **sensor/${deviceName}/${attributeKey}**              | JSON-path expression uses for creating url address to send a message.                              |
| valueExpression               | **{\\"${attributeKey}\\":\\"${attributeValue}\\"}**   | JSON-path expression uses for creating the message data that will send to url.                     |
|---

The **attributeUpdates** section will look like:

```json

  "attributeUpdates": [
      {
        "httpMethod": "POST",
        "httpHeaders": {
          "CONTENT-TYPE": "application/json"
        },
        "timeout": 0.5,
        "tries": 3,
        "allowRedirects": true,
        "deviceNameFilter": "SD.*",
        "attributeFilter": "send_data",
        "requestUrlExpression": "sensor/${deviceName}/${attributeKey}",
        "valueExpression": "{\"${attributeKey}\":\"${attributeValue}\"}"
      }
  ]

```

### Server side RPC section

ThingsBoard allows sending [RPC commands](/docs/user-guide/rpc/) to the device that is connected to ThingsBoard directly or via Gateway.
 
Configuration, provided in this section uses for sending RPC requests from ThingsBoard to device.

| **Parameter**                 | **Default value**                                                 | **Description**                                                                       |
|:-|:-|-
| deviceNameFilter              | **SmartMeter.\***                                                 | Regular expression device name filter, uses to determine, which function to execute.  |
| methodFilter                  | **echo**                                                          | Regular expression method name filter, uses to determine, which function to execute.  |
| requestUrlExpression          | **sensor/${deviceName}/request/${methodName}/${requestId}**       | JSON-path expression, uses to create url address to send RPC request.                 |
| responseTimeout               | **0.5**                                                           | Timeout for request.                                                                  |
| httpMethod                    | **GET**                                                           | HTTP method for request (**GET**, **POST** etc.).                                     |
| valueExpression               | **${params}**                                                     | JSON-path expression, uses for creating data for sending to the external endpoint.    |
| timeout                       | **0.5**                                                           | Timeout for request.                                                                  |
| tries                         | **3**                                                             | Count of tries to send data                                                           |
| httpHeaders                   | **{ "CONTENT-TYPE": "application/json" }**                        | Object contains additional HTTP headers for request.                                  |
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
      "requestUrlExpression": "sensor/${deviceName}/request/${methodName}/${requestId}",
      "responseTimeout": 1,
      "httpMethod": "GET",
      "valueExpression": "${params}",
      "timeout": 0.5,
      "tries": 3,
      "httpHeaders": {
        "Content-Type": "application/json"
      }
    },
    {
      "deviceNameFilter": ".*",
      "methodFilter": "no-reply",
      "requestUrlExpression": "sensor/${deviceName}/request/${methodName}/${requestId}",
      "httpMethod": "POST",
      "valueExpression": "${params.hum}",
      "httpHeaders": {
        "Content-Type": "application/json"
      }
    }
  ]
```

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
