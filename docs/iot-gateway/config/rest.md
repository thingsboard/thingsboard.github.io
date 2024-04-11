---
layout: docwithnav-gw
title: REST Connector Configuration
description: REST API enpoints support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with REST Connector configuration for ThingsBoard IoT Gateway.  
Use [general configuration guide](/docs/iot-gateway/configuration/) to enable this Connector.  
The purpose of this Connector is to create API endpoints and get data from received requests.  
Connector is also able to push data to external HTTP(S) API based on the updates/commands from ThingsBoard.    

This connector is useful when you have some HTTP(S) API endpoints in your device or some data in external resource and you would like to push this data to the ThingsBoard.    

We will describe connector configuration file below.  

## Connector configuration: rest.json

Connector configuration is a JSON file that contains information about how to create API endpoints and how to process the data.  
Let's review the format of the configuration file using example below.    

<b>Example of REST Connector config file.</b>

Example listed below will create a server on a localhost using 5000 port.  
Connector will use basic HTTP authorization using username and password.  
Then, connector will create endpoints from a list of endpoints using endpoints from mapping section. See more info in a description below.  

{% capture restConf %}
{
  "host": "127.0.0.1",
  "port": 5000,
  "SSL": false,
  "security": {
    "cert": "~/ssl/cert.pem",
    "key": "~/ssl/key.pem"
  },
  "mapping":[
    {
      "endpoint": "/test_device",
      "HTTPMethods": [
        "POST"
      ],
      "security":
      {
        "type": "basic",
        "username": "user",
        "password": "passwd"
      },
      "converter": {
        "type": "json",
        "deviceNameExpression": "Device ${name}",
        "deviceTypeExpression": "default",
        "attributes": [
          {
            "type": "string",
            "key": "model",
            "value": "${sensorModel}"
          }
        ],
        "timeseries": [
          {
            "type": "double",
            "key": "temperature",
            "value": "${temp}"
          },
          {
            "type": "double",
            "key": "humidity",
            "value": "${hum}",
            "converter": "CustomConverter"
          }
        ]
      }
    },
    {
      "endpoint": "/test",
      "HTTPMethods": [
        "GET",
        "POST"
      ],
      "security":
      {
        "type": "anonymous"
      },
      "converter": {
        "type": "custom",
        "class": "CustomConverter",
        "deviceNameExpression": "Device 2",
        "deviceTypeExpression": "default",
        "attributes": [
          {
            "type": "string",
            "key": "model",
            "value": "Model2"
          }
        ],
        "timeseries": [
          {
            "type": "double",
            "key": "temperature",
            "value": "${temp}"
          },
          {
            "type": "double",
            "key": "humidity",
            "value": "${hum}"
          }
        ]
      }
    }
  ]
}

{% endcapture %}
{% include code-toggle.liquid code=restConf params="conf|.copy-code.expandable-20" %}


### General section
{% capture restconnectorsecuritytogglespec %}
With SSL<small>Recommended</small>%,%accessToken%,%templates/iot-gateway/rest-connector-ssl-security-config.md%br%
Without SSL<small>No security</small>%,%anonymous%,%templates/iot-gateway/rest-connector-no-ssl-security-config.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="restConnectorCredentialsConfig" toggle-spec=restconnectorsecuritytogglespec %}  

### Mapping section

This configuration section contains array of objects with endpoints that the gateway will create.  
Also this section contains settings about processing incoming messages (converter).  
After request receiving, the message from the request is analyzed to extract device name, type and data (attributes and/or timeseries values).  
By default, the gateway uses Json converter, but it is possible to provide custom converter.

**Note**: You can specify multiple mapping objects inside the array.

| **Parameter** | **Default value**                     | **Description**                                             |
|:--------------|:-|-------------------------------------------------------------
| endpoint      | **/test_device**                      | Url address of the endpoint.                                |
| HTTPMethods   | **GET**                               | HTTP methods allowed for endpoint (**GET**, **POST** etc.). |
| ---           

#### Security section

This section provides configuration for client authorization at the gateway for every endpoint.
 
{% capture restconnectorsecuritytogglespec2 %}
Basic<small>Recommended</small>%,%username%,%templates/iot-gateway/rest-connector-basic-security-config.md%br%
Anonymous<small>No security</small>%,%anonymous%,%templates/iot-gateway/rest-connector-anonymous-security-config.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="restConnectorCredentialsConfig" toggle-spec=restconnectorsecuritytogglespec2 %}


#### Converter subsection

This subsection contains configuration for processing incoming messages.  

Types of request converters:  
1. json -- Default converter  
2. custom -- Custom converter (You can write it by yourself, and it will use to convert incoming data.)  

{% capture difference %}
**Connector won't pass the None value from the converter**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture restconvertertypespec %}
json<small>Recommended if json will be received in the request</small>%,%json%,%templates/iot-gateway/rest-converter-json-config.md%br%
custom<small>Recommended if bytes or anything else will be received in the request</small>%,%custom%,%templates/iot-gateway/rest-converter-custom-config.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="restConverterTypeConfig" toggle-spec=restconvertertypespec %}

{% capture difference %}
**It is also may to parse query parameters from the URL if you are using a GET request.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

##### Response

Response in REST Connector can have 3 variants of configuration:
1. Default response (without extra configuration, return only HTTP Status Code);
2. Hardcoded response body, for this option you have to specify a new section and 2 new optional parameters as in the example below:

    | **Parameter**                 | **Default value**                                     | **Description**                                                       |
    |:-|:-|-
    | response                      |                                                       | The response that will be returned on every request to the server     |
    | ... successResponse           | **OK**                                                | Only if the response status is 200                                    |
    | ... unsuccessfulResponse      | **Error**                                             | Only if the response status different from 200                        |
    |---

3. **ADVANCED** the remote response that will return by ThingsBoard.
   1. To configure that variant you have to specify a new section in the config file as in the example below:

       | **Parameter**                 | **Default value**                                     | **Description**                                                       |
       |:-|:-|-
       | response                      |                                                       | Boolean value for on/off returning a response                         |
       | ... responseExpected          | **true**                                              | Timeout for request.                                                  |
       | ... timeout                   | **120**                                               | Only if the response status different from 200                        |
       | ... responseAttribute         | **result**                                            | Shared attribute name which response will be return                   |
       |---

   2. Configure RuleChain in ThingsBoard:
      ![image](/images/gateway/custom-response-rule-chain-config.png)
      Finally, you have to configure rule node:
      1. Yellow Rule Node
          ![image](/images/gateway/custom-response-yellow-rule-node.png)
      2. Blue Rule Node
          ![image](/images/gateway/custom-response-blue-rule-node.png)

### Attribute request section
Configuration in this section are optional.

In order to request client-side or shared device attributes to ThingsBoard server node, Gateway allows sending 
attribute requests.

| **Parameter**                 | **Default value**                                     | **Description**                                                       |
|:-|:-|-
| endpoint                      | **/sharedAttributes**                                 | Url address of the endpoint.                                          |
| type                          | **shared**                                            | The type of requested attribute can be “shared” or “client”.          |
| HTTPMethods                   | **[”POST”]**                                          | Allowed methods                                                       |
| security                      |                                                       | Security for request:                                                 |
| ... type                      | **basic**                                             | Security type for request to the server (**basic** or **anonymous**). |
| ... username                  | **user**                                              | Username for basic type of the security.                              |
| ... password                  | **passwd**                                            | Password for basic type of the security.                              |
| timeout                       | **10.0**                                              | Timeout for request.                                                  |
| deviceNameExpression          | **${deviceName}**                                     | JSON-path expression, for looking the device name.                    |
| attributeNameExpression       | **${attribute}**                                      | JSON-path expression, for looking the attribute name.                 |
|---

The **attributeRequests** section will look like:
```json
"attributeRequests": [
  {
    "endpoint": "/sharedAttributes",
    "type": "shared",
    "HTTPMethods": [
      "POST"
    ],
    "security": {
      "type": "anonymous"
    },
    "timeout": 10.0,
    "deviceNameExpression": "${deviceName}",
    "attributeNameExpression": "${attribute}"
  }
]
```

Also, you can request multiple attributes at once. Simply add one more JSON-path to 
attributeNameExpression parameter. For example, we want to request two shared attributes in one request, our config 
will look like:
```json
"attributeRequests": [
  {
    "endpoint": "/sharedAttributes",
    "type": "shared",
    "HTTPMethods": [
      "POST"
    ],
    "security": {
      "type": "anonymous"
    },
    "timeout": 10.0,
    "deviceNameExpression": "${deviceName}",
    "attributeNameExpression": "${pduAttribute}, ${versionAttribute}"
  }
]
```

### Attribute update section

Configuration in this section are optional.  
ThingsBoard allows to provision device attributes and fetch some of them from the device application.
You can treat this as a remote configuration for devices. Your devices are able to request shared attributes from ThingsBoard.
See [user guide](/docs/user-guide/attributes/) for more details.

The "**attributeRequests**" configuration allows configuring the format of the corresponding attribute request and response messages. 

| **Parameter**                 | **Default value**                                     | **Description**                                                                                    |
|:-|:-|-
| httpMethod                    | **POST**                                              | HTTP method for request (**GET**, **POST** etc.).                                                  |
| SSLVerify                     | **false**                                             | Verify or no SSL certificate on the server if available.                                           |
| httpHeaders                   | **{ "CONTENT-TYPE": "application/json" }**            | Object contains additional HTTP headers for request.                                               |
| security                      |                                                       | Security for request:                                                                              |
|   type                        | **basic**                                             | Security type for request to the server (**basic** or **anonymous**).                              |
|   username                    | **user**                                              | Username for basic type of the security.                                                           |
|   password                    | **passwd**                                            | Password for basic type of the security.                                                           |   
| timeout                       | **0.5**                                               | Timeout for request.                                                                               |
| tries                         | **3**                                                 | Count of tries to send data                                                                        |
| allowRedirects                | **true**                                              | Allow request redirection.                                                                         |
| deviceNameFilter              | **.\*REST$**                                          | Regular expression device name filter, uses to determine, which function to execute.               |
| attributeFilter               | **data**                                              | Regular expression attribute name filter, uses to determine, which function to execute.            |
| requestUrlExpression          | **sensor/${deviceName}/${attributeKey}**              | JSON-path expression uses for creating url address to send a message.                              |
| valueExpression               | **{\\"${attributeKey}\\":\\"${attributeValue}\\"}**   | JSON-path expression uses for creating the message data that will send to url.                     |
|---

The **attributeUpdates** section will look like:

```json
  "attributeUpdates": [
      {
        "HTTPMethod": "POST",
        "SSLVerify": false,
        "httpHeaders": {
          "CONTENT-TYPE": "application/json"
        },
        "security": {
          "type": "basic",
          "username": "user",
          "password": "passwd"
        },
        "timeout": 0.5,
        "tries": 3,
        "allowRedirects": true,
        "deviceNameFilter": ".*REST$",
        "attributeFilter": "data",
        "requestUrlExpression": "sensor/${deviceName}/${attributeKey}",
        "valueExpression": "{\"${attributeKey}\":\"${attributeValue}\"}"
      }
  ],

```

### Server side RPC section


ThingsBoard allows sending [RPC commands](/docs/user-guide/rpc/) to the device that is connected to ThingsBoard directly or via Gateway.
 
Configuration, provided in this section uses for sending RPC requests from ThingsBoard to device.

| **Parameter**                 | **Default value**                                                 | **Description**                                                                       |
|:-|:-|-
| deviceNameFilter              | **.\***                                                           | Regular expression device name filter, uses to determine, which function to execute.  |
| methodFilter                  | **echo**                                                          | Regular expression method name filter, uses to determine, which function to execute.  |
| requestUrlExpression          | **http://127.0.0.1:5001/${deviceName}**                           | JSON-path expression, uses to create url address to send RPC request.                 |
| responseTimeout               | **1**                                                             | Timeout for request.                                                                  |
| httpMethod                    | **GET**                                                           | HTTP method for request (**GET**, **POST** etc.).                                     |
| valueExpression               | **${params}**                                                     | JSON-path expression, uses for creating data for sending.                             |
| timeout                       | **0.5**                                                           | Timeout for request.                                                                  |
| tries                         | **3**                                                             | Count of tries to send data                                                           |
| httpHeaders                   | **{ "CONTENT-TYPE": "application/json" }**                        | Object contains additional HTTP headers for request.                                  |
| security                      |                                                                   | Security for request:                                                                 |
|   type                        | **anonymous**                                                     | Security type for request to the server (**basic** or **anonymous**).                 |
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
      "valueExpression": "${params.hum}",
      "httpHeaders": {
        "Content-Type": "application/json"
      }
    }
  ]
```

Also, every telemetry and attribute parameter has built-in GET and SET RPC methods out of the box, so you don’t need to configure
it manually. To use them, make sure you set all required parameters (in the case of REST Connector, these are the following:
**requestUrlExpression**, **responseTimeout**, **HTTPMethod**, **valueExpression**). 
See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
