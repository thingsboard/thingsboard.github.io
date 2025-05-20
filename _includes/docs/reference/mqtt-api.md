
* TOC
{:toc}

## Getting started

### MQTT basics

[MQTT](https://en.wikipedia.org/wiki/MQTT) is a lightweight publish-subscribe messaging protocol,probably making it the most suitable for various IoT devices. 
You can find more information about MQTT [here](https://mqtt.org/).

ThingsBoard server nodes act as an MQTT Broker that supports QoS levels 0 (at most once) and 1 (at least once) and a set of [configurable](/docs/{{docsPrefix}}user-guide/device-profiles/#mqtt-device-topic-filters) topics.

### Client libraries setup

You can find a large number of MQTT client libraries on the web. Examples in this article will be based on Mosquitto and MQTT.js.
In order to set up one of those tools, you can use the instructions in our [Hello World](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide.

### MQTT Connect

In this article, we will use *access token* device credentials in this article and they will be referred to later as **$ACCESS_TOKEN**.
The application needs to send MQTT CONNECT message with username that contains **$ACCESS_TOKEN**. 

Possible return codes, and their reasons during the connect sequence:

* **0x00 Connected** - Successfully connected to ThingsBoard MQTT server.
* **0x04 Connection Refused, bad username or password** - Username is empty.
* **0x05 Connection Refused, not authorized** - Username contains invalid **$ACCESS_TOKEN**.

The alternative authentication option is to use [X.509 Certificates](/docs/{{docsPrefix}}user-guide/certificates/) or [Basic MQTT Credentials](/docs/{{docsPrefix}}user-guide/basic-mqtt/) - combination of client id, username and password.

Now you are ready to publish telemetry data on behalf of your device.
We will use simple commands to publish data over MQTT in this example. Select your OS:

{% capture connectdevicetogglespec %}
MQTT<small>Linux or macOS</small>%,%mqtt-linux%,%templates/helloworld-pe/mqtt-linux.md%br%
MQTT<small>Windows</small>%,%mqtt-windows%,%templates/helloworld-pe/mqtt-windows.md{% endcapture %}
{% include content-toggle.html content-toggle-id="connectdevice" toggle-spec=connectdevicetogglespec %}

{% include templates/api/key-value-format.md %}

However, it is also possible to send data via [Protocol Buffers](https://developers.google.com/protocol-buffers).
Please refer to the [MQTT transport type](/docs/{{docsPrefix}}user-guide/device-profiles/#mqtt-transport-type) configuration section in device profile article for more details.

Using custom binary format or some serialization framework is also possible. See [protocol customization](#protocol-customization) for more details.

## Telemetry upload API

In order to publish telemetry data to ThingsBoard server node, send PUBLISH message to the following topic:
 
```shell
v1/devices/me/telemetry
```

The simplest supported data formats are:

```json
{"key1":"value1", "key2":"value2"}
```

or

```json
[{"key1":"value1"}, {"key2":"value2"}]
```

{% capture difference %}
**Please note** that in this case, the server-side timestamp will be assigned to uploaded data!
{% endcapture %}
{% include templates/info-banner.md content=difference %}

In case your device is able to get the client-side timestamp, you can use following format:

```json
{"ts":1451649600512, "values":{"key1":"value1", "key2":"value2"}}
```

Where **1451649600512** is a [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) with milliseconds precision. For example, the value '1451649600512' corresponds to 'Fri, 01 Jan 2016 12:00:00.512 GMT'

<br>
Below are the examples of commands for publishing different types of telemetry data.

{% if docsPrefix == nil %}
Don't forget to replace <code>{{mqttHostName}}</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token. In this example, the hostname references live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
Don't forget to replace <code>{{mqttHostName}}</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix contains "paas/" %}
Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix == "edge/" %}
Don't forget to replace <code>{{mqttHostName}}</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}

**Example 1**. Publish data as an object without timestamp (server-side timestamp will be used). 

Execute the command:

{% capture tabspec %}mqtt-telemetry-upload-api
A,Mosquitto,shell,resources/mosquitto-telemetry.sh,/docs/reference/resources/mosquitto-telemetry.sh
B,MQTT.js,shell,resources/mqtt-js-telemetry.sh,/docs/reference/resources/mqtt-js-telemetry.sh{% endcapture %}
{% include tabs.html %}

Telemetry data:

```json
{"temperature":42}
```

**Example 2**. Publish data as an object without timestamp (server-side timestamp will be used) using data from [**telemetry-data-as-object.json**](/docs/reference/resources/telemetry-data-as-object.json) file.

Execute the command:

{% capture tabspec %}mqtt-telemetry-upload-api-data-as-object
A,Mosquitto,shell,resources/mosquitto-telemetry-data-as-object.sh,/docs/reference/resources/mosquitto-telemetry-data-as-object.sh
B,MQTT.js,shell,resources/mqtt-js-telemetry-data-as-object.sh,/docs/reference/resources/mqtt-js-telemetry-data-as-object.sh{% endcapture %}
{% include tabs.html %}

The content of the JSON file:

```json
{
  "stringKey": "value1",
  "booleanKey": true,
  "doubleKey": 42.0,
  "longKey": 73,
  "jsonKey": {
    "someNumber": 42,
    "someArray": [1,2,3],
    "someNestedObject": {"key": "value"}
  }
}
```

**Example 3**. Publish data as an array of objects without timestamp (server-side timestamp will be used) using data from [**telemetry-data-as-array.json**](/docs/reference/resources/telemetry-data-as-array.json) file.

Execute the command:

{% capture tabspec %}mqtt-telemetry-upload-api-data-as-array
A,Mosquitto,shell,resources/mosquitto-telemetry-data-as-array.sh,/docs/reference/resources/mosquitto-telemetry-data-as-array.sh
B,MQTT.js,shell,resources/mqtt-js-telemetry-data-as-array.sh,/docs/reference/resources/mqtt-js-telemetry-data-as-array.sh{% endcapture %}
{% include tabs.html %}

The content of the JSON file:

```json
[{"key1":"value1"}, {"key2":true}]
```

**Example 4**. Publish data as an object with timestamp (telemetry timestamp will be used) using data from [**telemetry-data-with-ts.json**](/docs/reference/resources/telemetry-data-with-ts.json) file.

Execute the command:

{% capture tabspec %}mqtt-telemetry-upload-api-data-with-ts
A,Mosquitto,shell,resources/mosquitto-telemetry-data-with-ts.sh,/docs/reference/resources/mosquitto-telemetry-data-with-ts.sh
B,MQTT.js,shell,resources/mqtt-js-telemetry-data-with-ts.sh,/docs/reference/resources/mqtt-js-telemetry-data-with-ts.sh{% endcapture %}
{% include tabs.html %}

The content of the JSON file:

```json
{
  "ts": 1451649600512,
  "values": {
    "stringKey": "value1",
    "booleanKey": true,
    "doubleKey": 42.0,
    "longKey": 73,
    "jsonKey": {
      "someNumber": 42,
      "someArray": [1, 2, 3],
      "someNestedObject": {
        "key": "value"
      }
    }
  }
}
```

## Attributes API

ThingsBoard attributes API allows devices to

* Upload [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes to the server.
* Request [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) and [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes from the server.
* Subscribe to [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes from the server.
 
### Publish attribute update to the server

In order to publish client-side device attributes to ThingsBoard server node, send PUBLISH message to the following topic:

```shell
v1/devices/me/attributes
```
{: .copy-code}

Below are the examples of how to publish client-side device attributes.

{% if docsPrefix == null %}
Don't forget to replace <code>demo.thingsboard.io</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token. In this example, the hostname references live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
Don't forget to replace <code>$THINGSBOARD_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix contains "paas/" %}
Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix == "edge/" %}
Don't forget to replace <code>$THINGSBOARD_EDGE_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}

**Example 1**. Publish client-side attributes update.

Telemetry data:

```json
{"attribute1": "value1", "attribute2": true}
```
{: .copy-code}

Execute the command:

```shell
mosquitto_pub -d -h "{{mqttHostName}}" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -m "{"attribute1": "value1", "attribute2": true}"
```
{: .copy-code}

**Example 2**. Publish client-side attributes update using data from [**new-attributes-values.json**](/docs/reference/resources/new-attributes-values.json) file.

The content of the **"new-attributes-values.json"** file:

```json
{
  "attribute1": "value1",
  "attribute2": true,
  "attribute3": 42.0,
  "attribute4": 73,
  "attribute5": {
    "someNumber": 42,
    "someArray": [1,2,3],
    "someNestedObject": {"key": "value"}
  }
}
```

Execute the command:

{% capture tabspec %}mqtt-attributes-upload
A,Mosquitto,shell,resources/mosquitto-attributes-publish.sh,/docs/reference/resources/mosquitto-attributes-publish.sh
B,MQTT.js,shell,resources/mqtt-js-attributes-publish.sh,/docs/reference/resources/mqtt-js-attributes-publish.sh{% endcapture %}
{% include tabs.html %}

### Request attribute values from the server

In order to request client-side or shared device attributes to ThingsBoard server node, send PUBLISH message to the following topic:

```shell
v1/devices/me/attributes/request/$request_id
```
{: .copy-code}

where **$request_id** is your integer request identifier.
Before sending PUBLISH message with the request, client needs to subscribe to 

```shell
v1/devices/me/attributes/response/+
```

The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available because subscribe and publish need to happen in the same mqtt session.

{% if docsPrefix == null %}
Save the "[mqtt-js-attributes-request.js](/docs/reference/resources/mqtt-js-attributes-request.js)" file to your PC. Don't forget to replace the hostname "<code>demo.thingsboard.io</code>" to your host. In this example, the hostname references live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
Save the "[mqtt-js-attributes-request.js](/docs/pe/reference/resources/mqtt-js-attributes-request.js)" file to your PC. Don't forget to replace the hostname "<code>127.0.0.1</code>" to your host. In this example, the hostname reference your local installation.
{% endif %}
{% if docsPrefix contains 'paas/' %}
Save the "[mqtt-js-attributes-request.js](/docs/paas/reference/resources/mqtt-js-attributes-request.js)" file to your PC.
{% endif %}
{% if docsPrefix == "edge/" %}
Save the "[mqtt-js-attributes-request.js](/docs/edge/reference/resources/mqtt-js-attributes-request.js)" file to your PC. Don't forget to replace the hostname "<code>localhost</code>" to your host. In this example, the hostname reference your local installation.
{% endif %}

{% capture tabspec %}mqtt-attributes-request
A,The content of the "mqtt-js-attributes-request.js" file:,javascript,resources/mqtt-js-attributes-request.js,/docs/reference/resources/mqtt-js-attributes-request.js{% endcapture %}
{% include tabs.html %}

Execute the command. Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token.

```shell
export TOKEN=$ACCESS_TOKEN
node mqtt-js-attributes-request.js
```
{: .copy-code}

Result:

```text
{"client":{"attribute1":"value1","attribute2":true}}
```

##### Request all client and shared attributes

In order to request all client attributes and all shared attributes, replace a payload in example below to an object with the "`clientKeys`", "`sharedKeys`" set to an empty string.

```json
{"clientKeys": "", "sharedKeys": ""}
```
Result:  

```json
{"client":{"attribute2":true,"attribute1":"value1"},"shared":{"shared1":"value1"}}
```

##### Request all client attributes

In order to request all client attributes, replace a payload in example below to an object with the "`clientKeys`" set to an empty string.  

```json
{"clientKeys": ""}
```

Result:  

```json
{"client":{"attribute2":true,"attribute1":"value1"}}
```

##### Request all shared attributes
In order to request all shared attributes, replace a payload in example below to an object with the "`sharedKeys`" set to an empty string.  

```json
{"sharedKeys": ""}
```

Result:  

```json
{"shared":{"shared1":"value1"}}
```


{% capture difference %}
**Please note**, the intersection of client-side and shared device attribute keys is a bad practice! 
However, it is still possible to have same keys for client, shared or even server-side attributes.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Subscribe to attribute updates from the server

In order to subscribe to shared device attribute changes, send SUBSCRIBE message to the following topic:

```shell
v1/devices/me/attributes
```
{: .copy-code}

When a shared attribute is changed by one of the server-side components (such as the REST API or the Rule Chain), the client will receive the following update: 

```json
{"key1":"value1"}
```

{% if docsPrefix == null %}
For the following example, don't forget to replace <code>demo.thingsboard.io</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token. In this example, the hostname references live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
For the following example, don't forget to replace <code>$THINGSBOARD_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix contains "paas/" %}
For the following example, don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix == "edge/" %}
For the following example, don't forget to replace <code>$THINGSBOARD_EDGE_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}

Execute the command:

{% capture tabspec %}mqtt-attributes-subscribe
A,Mosquitto,shell,resources/mosquitto-attributes-subscribe.sh,/docs/reference/resources/mosquitto-attributes-subscribe.sh
B,MQTT.js,shell,resources/mqtt-js-attributes-subscribe.sh,/docs/reference/resources/mqtt-js-attributes-subscribe.sh{% endcapture %}
{% include tabs.html %}

## JSON value support

{% include templates/api/json.md %}

## RPC API

### Server-side RPC

In order to subscribe to RPC commands from the server, send SUBSCRIBE message to the following topic:

```shell
v1/devices/me/rpc/request/+
```
{: .copy-code}

Once subscribed, the client will receive individual commands as a PUBLISH message to the corresponding topic:

```shell
v1/devices/me/rpc/request/$request_id
```

where **$request_id** is an integer request identifier.

The client should publish the response to the following topic:

```shell
v1/devices/me/rpc/response/$request_id
```

The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available because subscribe and publish need to happen in the same mqtt session.

{% if docsPrefix == null %}
Save the "[mqtt-js-rpc-from-server.js](/docs/reference/resources/mqtt-js-rpc-from-server.js)" file to your PC. Don't forget to replace the hostname "<code>demo.thingsboard.io</code>" with your host.
In this example, the hostname references live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
Save the "[mqtt-js-rpc-from-server.js](/docs/pe/reference/resources/mqtt-js-rpc-from-server.js)" file to your PC. Don't forget to replace the hostname "<code>127.0.0.1</code>" with your host.
In this example, the hostname reference your local installation.
{% endif %}
{% if docsPrefix contains "paas/" %}
Save the "[mqtt-js-rpc-from-server.js](/docs/paas/reference/resources/mqtt-js-rpc-from-server.js)" file to your PC.
{% endif %}
{% if docsPrefix == "edge/" %}
Save the "[mqtt-js-rpc-from-server.js](/docs/edge/reference/resources/mqtt-js-rpc-from-server.js)" file to your PC. Don't forget to replace the hostname "<code>localhost</code>" with your host.
In this example, the hostname reference your local installation.
{% endif %}

{% capture tabspec %}mqtt-rpc-from-server
A,The content of the "mqtt-js-rpc-from-server.js" file,javascript,resources/mqtt-js-rpc-from-server.js,/docs/reference/resources/mqtt-js-rpc-from-server.js{% endcapture %}  
{% include tabs.html %}

Now, follow these steps:

- Use **RPC debug terminal** widget in your ThingsBoard instance;
- Execute the command to subscribe to RPC commands from the server using the command below. Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token.

```shell
export TOKEN=$ACCESS_TOKEN
node mqtt-js-rpc-from-server.js
```
{: .copy-code}

- Send an RPC request "connect" to the device using **RPC debug terminal** widget;
- You should receive a response from the device.

{% include images-gallery.html imageCollection="server-side-rpc" %}

In case your MQTT device is a gateway, ThingsBoard will send a server-side RPC (notification) about changes on provisioned device entities.  
Your MQTT gateway device will receive a service RPC about removal or renaming of device to [properly resolve such events](/docs/iot-gateway/how-device-removing-renaming-works/). 

### Client-side RPC

In order to send RPC commands to server, send PUBLISH message to the following topic:

```shell
v1/devices/me/rpc/request/$request_id
```
{: .copy-code}

where **$request_id** is an integer request identifier.
The response from server will be published to the following topic:

```shell
v1/devices/me/rpc/response/$request_id
```

The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available because subscribe and publish need to happen in the same mqtt session.

{% if docsPrefix == null %}
Save the "[mqtt-js-rpc-from-client.js](/docs/reference/resources/mqtt-js-rpc-from-client.js)" file to your PC. Don't forget to replace the hostname "<code>demo.thingsboard.io</code>" to your host.
In this example, the hostname references live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
Save the "[mqtt-js-rpc-from-client.js](/docs/pe/reference/resources/mqtt-js-rpc-from-client.js)" file to your PC. Don't forget to replace the hostname "<code>127.0.0.1</code>" to your host.
In this example, the hostname reference your local installation.
{% endif %}
{% if docsPrefix contains "paas/" %}
Save the "[mqtt-js-rpc-from-client.js](/docs/paas/reference/resources/mqtt-js-rpc-from-client.js)" file to your PC.
{% endif %}
{% if docsPrefix == "edge/" %}
Save the "[mqtt-js-rpc-from-client.js](/docs/edge/reference/resources/mqtt-js-rpc-from-client.js)" file to your PC. Don't forget to replace the hostname "<code>localhost</code>" to your host.
In this example, the hostname reference your local installation.
{% endif %}

{% capture tabspec %}mqtt-rpc-from-client
A,The content of the "mqtt-js-rpc-from-client.js" file,javascript,resources/mqtt-js-rpc-from-client.js,/docs/reference/resources/mqtt-js-rpc-from-client.js{% endcapture %}
{% include tabs.html %}

Now, follow these steps:

- Add two nodes to the Rule Chain: "script" and "rpc call reply";
- In the **script** node enter the function:

```shell
return {msg: {time:String(new Date())}, metadata: metadata, msgType: msgType};
```
{: .copy-code}

- Send request to the server. Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token.

```shell
export TOKEN=$ACCESS_TOKEN
node mqtt-js-rpc-from-client.js
```
{: .copy-code}

- You should receive a response from the server.

{% include images-gallery.html imageCollection="client-side-rpc" %}

### Get session limits RPC

The **getSessionLimits** RPC method is designed to help device manufacturers and developers understand the limits that used by the MQTT transport.
Understanding these limits ensures that devices operate within the defined parameters, preventing issues like message rejection or connection loss.

A typical RPC to retrieve session limits from the ThingsBoard server looks like this:
```json
{
  "method": "getSessionLimits",
  "params": {}
}
```

Once RPC is processed server can send session limits back to the response topic using following format:

```json
{
  "maxPayloadSize": 65536,
  "maxInflightMessages": 100,
  "rateLimits": {
    "messages": "200:1,6000:60,14000:3600",
    "telemetryMessages": "100:1,3000:60,7000:3600",
    "telemetryDataPoints": "200:1,6000:60,14000:3600"
  }
}
```

Where

**maxPayloadSize** - the maximum allowable size for an MQTT message payload, expressed in bytes.  
**maxInflightMessages** -  the maximum number of MQTT messages that can be sent but remain unacknowledged (in-flight) at any given time.  
**rateLimits** - a nested object that specifies the rate limits for different types.  
**messages** - the overall message rate limit.  
**telemetryMessages** - the maximum number of telemetry messages that can be sent.  
**telemetryDataPoints** - the number of telemetry data points a device can send.  

Below is an interpretation of the rate limit value **"200:1,6000:60,14000:3600"**:

**"200:1"** - 200 messages can be sent per second.  
**"6000:60"** - 6000 messages can be sent per 60 seconds (1 minute).  
**"14000:3600"** - 14000 messages can be sent over a period of 3600 seconds (1 hour).  

If the device is a gateway, the response includes additional rate limits for devices that are connected through the gateway. 
The response structure for gateways looks like this:

```json
{
  "maxPayloadSize": 65536,
  "maxInflightMessages": 100,
  "rateLimits": {
    "messages": "200:1,6000:60,14000:3600",
    "telemetryMessages": "100:1,3000:60,7000:3600",
    "telemetryDataPoints": "200:1,6000:60,14000:3600"
  },
  "gatewayRateLimits": {
    "messages": "200:1,6000:60,14000:3600",
    "telemetryMessages": "100:1,3000:60,7000:3600",
    "telemetryDataPoints": "200:1,6000:60,14000:3600"
  }
}
```

**rateLimits** - a nested object that specifies rate limits for the gateway.

**gatewayRateLimits** - a nested object that specifies rate limits for devices connected to the gateway.

## Claiming devices

Please see the corresponding article to get more information about the [Claiming devices](/docs/{{docsPrefix}}user-guide/claiming-devices) feature.

In order to initiate claiming device, send PUBLISH message to the following topic:

```shell
v1/devices/me/claim
```
{: .copy-code}

The supported data format is:

```json
{"secretKey":"value", "durationMs":60000}
```

{% capture difference %}
**Please note** that the above fields are optional. In case the **secretKey** is not specified, the empty string as a default value is used.
In case the **durationMs** is not specified, the system parameter **device.claim.duration** is used (in the file **/etc/thingsboard/conf/thingsboard.yml**).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Device provisioning

Please see the corresponding article to get more information about the [Device provisioning](/docs/{{docsPrefix}}user-guide/device-provisioning) feature.

In order to initiate device provisioning, send Provisioning request to the following topic:

```shell
/provision
```
{: .copy-code}

Also, you should set **username** or **clientId** to *provision*.

The supported data format is:

```json
{
  "deviceName": "DEVICE_NAME",
  "provisionDeviceKey": "u7piawkboq8v32dmcmpp",
  "provisionDeviceSecret": "jpmwdn8ptlswmf4m29bw"
}
```

## Firmware API

When ThingsBoard initiates an MQTT device firmware update, it sets the fw_title, fw_version, fw_checksum, fw_checksum_algorithm shared attributes.
To receive the shared attribute updates, the device has to subscribe to 

```bash
v1/devices/me/attributes/response/+
```
{: .copy-code}

Where

**+** is the Wildcard character.

When the MQTT device receives updates for fw_title and fw_version shared attributes, it has to send PUBLISH message to

```bash
v2/fw/request/${requestId}/chunk/${chunkIndex} 
```
{: .copy-code}

Where

**${requestId}** - number corresponding to the number of firmware updates. The ${requestId} has to be different for each firmware update.  
**${chunkIndex}** - number corresponding to the index of firmware chunks. The ${chunkID} are counted from 0. The device must increment the chunk index for each request until the received chunk size is zero.  
And the MQTT payload should be the size of the firmware chunk in bytes.

For each new firmware update, you need to change the request ID and subscribe to 

```bash
v2/fw/response/+/chunk/+
```
{: .copy-code}

Where

**+** is the Wildcard character.

## Protocol customization

MQTT transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/mqtt).


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
