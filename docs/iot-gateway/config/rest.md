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

<br>
<details>

<summary>
<b>Example of REST Connector config file. Press to expand.</b>
</summary>

Example listed below will create a server on a localhost using 5000 port.  
Connector will use basic HTTP authorization using username and password.  
Then, connector will create endpoints from a list of endpoints using endpoints from mapping section. See more info in a description below.  

{% highlight json %}
{
  "host": "127.0.0.1",
  "port": "5000",
  "SSL": false,
  "mapping": [
    {
      "endpoint": "/my_devices",
      "HTTPMethod": [
        "POST"
      ],
      "security":
      {
        "type": "basic",
        "username": "user",
        "password": "password"
      },
      "converter": {
        "type": "json",
        "deviceNameExpression": "${sensorName}",
        "deviceTypeExpression": "${sensorType}",
        "attributes": [
          {
            "type": "string",
            "key": "model",
            "value": "${sensorModel}"
          },
          {
            "type": "string",
            "key": "${sensorModel}",
            "value": "on"
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
    },
    {
      "endpoint": "/anon1",
      "HTTPMethod": [
        "GET",
        "POST"
      ],
      "security":
      {
        "type": "anonymous"
      },
      "converter": {
        "type": "custom",
        "extension": "CustomConverter",
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
  ],
  "attributeUpdates": [
    {
      "HTTPMethod": "POST",
      "SSLVerify": false,
      "httpHeaders": {
        "CONTENT-TYPE": "application/json"
      },
      "security": {
        "type": "anonymous"
      },
      "timeout": 0.5,
      "tries": 3,
      "allowRedirects": true,
      "deviceNameFilter": "SN.*",
      "attributeFilter": ".*",
      "requestUrlExpression": "http://127.0.0.1:5001/",
      "valueExpression": "{\"deviceName\":\"${deviceName}\",\"${attributeKey}\":\"${attributeValue}\"}"
    }
  ],
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
      "requestUrlExpression": "/sensor/${deviceName}/request/${methodName}/${requestId}",
      "HTTPMethod": "POST",
      "valueExpression": "${params}",
      "httpHeaders": {
        "Content-Type": "application/json"
      }
    }
  ]
}

{% endhighlight %}

</details>


### General section

| **Parameter** | **Default value**                 | **Description**                                                                               |
|:-|:-|-
| host          | **127.0.0.1**                     | Domain address or ip of the server.                                                           |
| port          | **5000**                          |                                                                                               |
| SSLVerify     | **false**                         | Verify or no SSL certificate on the server if available. The value can be "true" or "false".  |
|---

### Section “mapping”

This configuration section contains array of objects with endpoints that the gateway will create.  
Also this section contains settings about processing incoming messages (converter).  
After request receiving, the message from the request is analyzed to extract device name, type and data (attributes and/or timeseries values).  
By default, the gateway uses Json converter, but it is possible to provide custom converter.

**Note**: You can specify multiple mapping objects inside the array.

#### Subsection "endpoint"

| **Parameter**     | **Default value**                     | **Description**                                               |
|:-|:-|-
| endpoint          | **/my_devices**                       | Url address of the endpoint.                                  |
| HTTPMethod        | **POST**                              | HTTP method allowed for endpoint (**GET**, **POST** etc.).    |
|---

#### Subsection "security"

This section provides configuration for client authorization at the gateway for every endpoint.
 
{% capture restconnectorsecuritytogglespec %}
Basic<small>Recommended</small>%,%username%,%templates/iot-gateway/rest-connector-basic-security-config.md%br%
Anonymous<small>No security</small>%,%anonymous%,%templates/iot-gateway/rest-connector-anonymous-security-config.md{% endcapture %}

{% include content-toggle.html content-toggle-id="restConnectorCredentialsConfig" toggle-spec=restconnectorsecuritytogglespec %}

#### Subsection "converter"

This subsection contains configuration for processing incoming messages.  

Types of request converters:  
1. json -- Default converter  
2. custom -- Custom converter (You can write it by yourself, and it will use to convert incoming data.)  

{% capture restconvertertypespec %}
json<small>Recommended if json will be received in the request</small>%,%json%,%templates/iot-gateway/rest-converter-json-config.md%br%
custom<small>Recommended if bytes or anything else will be received in the request</small>%,%custom%,%templates/iot-gateway/rest-converter-custom-config.md{% endcapture %}

{% include content-toggle.html content-toggle-id="restConverterTypeConfig" toggle-spec=restconvertertypespec %}

**Now let’s review an example of sending data from "SN-001" thermometer device.**

Let's assume we would like to process following data from Thermometer devices:

<table>
  <thead>
    <tr>
      <td style="width: 15%"><b>HTTP Method</b></td><td style="width: 15%"><b>Endpoint</b></td><td style="width: 70%"><b>Payload</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>/my_devices</td>
      <td>{"sensorName": "Device 1", "sensorType": "Thermometer", "sensorModel": "T1000", "temp":  32, "hum": 67}</td>
      </tr>
  </tbody>
</table>

In this case following messages are valid:

```bash
curl [HTTP_METHOD] [PAYLOAD] [REST_CONNECTOR_HOST:REST_CONNECTOR_PORT/ENDPOINT]
```
{: .copy-code}

In this example, REST connector is installed locally on your server.

Use terminal to simulate sending message from the device to the REST Connector:
```bash
curl -X POST -d '{"sensorName": "SN-001", "sensorType": "Thermometer", "sensorModel": "T1000", "certificateNumber": "125sda47gsh", "temp": 32, "hum": 67}' 127.0.0.1:5000/my_devices
```
{: .copy-code}

{:refdef: style="text-align: center;"}
![image](/images/gateway/rest-message-1.png)
{: refdef}

The device will be created and displayed in ThingsBoard based on the passed parameters.
{:refdef: style="text-align: center;"}
![image](/images/gateway/rest-created-device-1.png)
{: refdef}

{:refdef: style="text-align: center;"}
![image](/images/gateway/rest-created-device-2.png)
{: refdef}

{:refdef: style="text-align: center;"}
![image](/images/gateway/rest-created-device-3.png)
{: refdef}

### Section "attributeUpdates"

Configuration in this section are optional.  
ThingsBoard allows to provision device attributes and fetch some of them from the device application.
You can treat this as a remote configuration for devices. Your devices are able to request shared attributes from ThingsBoard.
See [user guide](/docs/user-guide/attributes/) for more details.

The "**attributeRequests**" configuration allows configuring the format of the corresponding attribute request and response messages. 

| **Parameter**                 | **Default value**                                     | **Description**                                                                                    |
|:-|:-|-
| httpMethod                    | **POST**                                              | HTTP method for request (**GET**, **POST** etc.).                                                  |
| SSLVerify                     | **false**                                             | Verify or no SSL certificate on the server if available.                                           |
| httpHeaders:                  |                                                       |                                                                 |
| CONTENT-TYPE                  | **application/json**                                  | Object contains additional HTTP headers for request.
| security:                     |                                                       | Security for request:                                                                              |
|   type                        | **basic**                                             | Security type for request to the server (**basic** or **anonymous**).                              |
|   username                    | **user**                                              | Username for basic type of the security.                                                           |
|   password                    | **password**                                          | Password for basic type of the security.                                                           |   
| timeout                       | **0.5**                                               | Timeout for request.                                                                               |
| tries                         | **3**                                                 | Count of tries to send data                                                                        |
| allowRedirects                | **true**                                              | Allow request redirection.                                                                         |
| deviceNameFilter              | **SN.\***                                             | Regular expression device name filter, uses to determine, which function to execute.               |
| attributeFilter               | **.\***                                               | Regular expression attribute name filter, uses to determine, which function to execute.            |
| requestUrlExpression          | **http://127.0.0.1:5001/**              | JSON-path expression uses for creating url address to send a message.                              |
| valueExpression               | **{\\"deviceName\\":\\"${deviceName}\\",\\\"${attributeKey}\\":\\"${attributeValue}\\"}**   | JSON-path expression uses for creating the message data that will send to url.                     |
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
          "type": "anonymous"
        },
        "timeout": 0.5,
        "tries": 3,
        "allowRedirects": true,
        "deviceNameFilter": "SN.*",
        "attributeFilter": ".*",
        "requestUrlExpression": "http://127.0.0.1:5001/",
        "valueExpression": "{\"deviceName\":\"${deviceName}\",\"${attributeKey}\":\"${attributeValue}\"}"
      }
  ],

```

**Let's look an example.**

In order to test attribute updates we use simple server based on Flask framework:

```bash
from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def query_example():
  print(request.get_data())
  return "Success"

if __name__ == '__main__':
  app.run(port=5001)
```
{: .copy-code}

Save as **“test_flask_server.py”** or <a href="https://thingsboard.io/docs/iot-gateway/config/test_flask_server.py">download this file</a> and run it in **terminal** with the command:

```bash
python3 test_flask_server.py
```
{: .copy-code}

{:refdef: style="text-align: center;"}
![image](/images/gateway/flask-server-1.png)
{: refdef}

Now, create a shared attribute on the ThingsBoard server. Open Devices -> click by your device -> Attributes tab -> Shared attributes scope and click on the “plus” button for add the attribute.

{:refdef: style="text-align: center;"}
![image](/images/gateway/rest-update-attribute-1.png)
{: refdef}

Enter an attribute name. In our case, this is **"FirmwareVersion"**. Value type: **Double**, value: **1.1**.

{:refdef: style="text-align: center;"}
![image](/images/gateway/rest-update-attribute-2.png)
{: refdef}

Attribute created.

{:refdef: style="text-align: center;"}
![image](/images/gateway/rest-update-attribute-3.png)
{: refdef}

Our test server received new message from the ThingsBoard server about creating attribute "FirmwareVersion":"1.1".

{:refdef: style="text-align: center;"}
![image](/images/gateway/flask-server-get-1.png)
{: refdef}



### Section "serverSideRpc"


ThingsBoard allows sending [RPC commands](/docs/user-guide/rpc/) to the device that is connected to ThingsBoard directly or via Gateway.
 
Configuration, provided in this section uses for sending RPC requests from ThingsBoard to device.

| **Parameter**                 | **Default value**                                                 | **Description**                                                                       |
|:-|:-|-
| deviceNameFilter              | **.\***                                                           | Regular expression device name filter, uses to determine, which function to execute.  |
| methodFilter                  | **echo**                                                          | Regular expression method name filter, uses to determine, which function to execute.  |
| requestUrlExpression          | **http://127.0.0.1:5001/**                                        | JSON-path expression, uses to create url address to send RPC request.                 |
| responseTimeout               | **1**                                                             | Timeout for request.                                                                  |
| httpMethod                    | **GET**                                                           | HTTP method for request (**GET**, **POST** etc.).                                     |
| valueExpression               | **${params}**                                                     | JSON-path expression, uses for creating data for sending.                             |
| timeout                       | **0.5**                                                           | Timeout for request.                                                                  |
| tries                         | **3**                                                             | Count of tries to send data                                                           |
| httpHeaders:                  |                                                                   |                                                                                       |
| CONTENT-TYPE                  | **application/json**                                              | Object contains additional HTTP headers for request.                                  |
| security:                     |                                                                   | Security for request:                                                                 |
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
      "requestUrlExpression": "http://127.0.0.1:5001/",
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
      },
      "security": {
      "type": "anonymous"
      }      
    }
  ]
```
<br/>
**Let's look an example.**

In this example, the **serverSideRpc** section would look like this:

```json
  "serverSideRpc": [
    {
      "deviceNameFilter": "SN.*",
      "methodFilter": "post_attributes",
      "requestUrlExpression": "http://127.0.0.1:5000/my_devices",
      "responseTimeout": 1,
      "HTTPMethod": "POST",
      "valueExpression": "{\"sensorName\":\"${deviceName}\", \"sensorModel\":\"${params.sensorModel}\", \"certificateNumber\":\"${params.certificateNumber}\", \"temp\":\"${params.temp}\", \"hum\":\"${params.hum}\"}",
      "timeout": 10.0,
      "tries": 3,
      "httpHeaders": {
        "Content-Type": "application/json"
      },
      "security": {
        "type": "anonymous"
      }
    },
  ]

```
<br/>
To send RPC requests to the gateway the one should use **RPC Debug Terminal** from **Control widgets** bundle.

Create a dashboard to use RPC API in ThingsBoard IoT Gateway as described <a href="https://thingsboard.io/docs/iot-gateway/guides/how-to-use-gateway-rpc-methods/">in this guide</a>.

{:refdef: style="text-align: center;"}
![image](/images/gateway/rest-service-rpc-methods-1.png)
{: refdef}
<br/>
Submit an RPC request to update telemetry and attributes:
```bash
post_attributes {"sensorModel": "T3000", "certificateNumber": "11112233445", "hum": 12, "temp": 23, "sensorName": "SN-001"}
```
{: .copy-code}

<br/>
{:refdef: style="text-align: center;"}
![image](/images/gateway/rest-service-rpc-methods-2.png)
{: refdef}
<br/>
As you can see, the attributes and telemetry have been updated.
{:refdef: style="text-align: center;"}
![image](/images/gateway/rest-service-rpc-methods-3.png)
{: refdef}
<br/>
{:refdef: style="text-align: center;"}
![image](/images/gateway/rest-service-rpc-methods-4.png)
{: refdef}



## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
