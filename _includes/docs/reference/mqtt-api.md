
* TOC
{:toc}

## Getting started

##### MQTT basics

[MQTT](https://en.wikipedia.org/wiki/MQTT) is a lightweight publish-subscribe messaging protocol which probably makes it the most suitable for various IoT devices. 
You can find more information about MQTT [here](https://mqtt.org/).

ThingsBoard server nodes act as an MQTT Broker that supports QoS levels 0 (at most once) and 1 (at least once) and a set of [configurable](/docs/{{docsPrefix}}user-guide/device-profiles/#mqtt-device-topic-filters) topics.

##### Client libraries setup

You can find a large number of MQTT client libraries on the web. Examples in this article will be based on Mosquitto and MQTT.js.
In order to setup one of those tools, you can use instructions in our [Hello World](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide.

##### MQTT Connect

We will use *access token* device credentials in this article and they will be referred to later as **$ACCESS_TOKEN**.
The application needs to send MQTT CONNECT message with username that contains **$ACCESS_TOKEN**. 

Possible return codes, and their reasons during connect sequence:

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

**Please note** that in this case, the server-side timestamp will be assigned to uploaded data!

In case your device is able to get the client-side timestamp, you can use following format:


```json
{"ts":1451649600512, "values":{"key1":"value1", "key2":"value2"}}
```

In the example above, we assume that "1451649600512" is a [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) with milliseconds precision.
For example, the value '1451649600512' corresponds to 'Fri, 01 Jan 2016 12:00:00.512 GMT'

{% capture tabspec %}mqtt-telemetry-upload
A,Mosquitto,shell,resources/mosquitto-telemetry.sh,/docs/reference/resources/mosquitto-telemetry.sh
B,MQTT.js,shell,resources/mqtt-js-telemetry.sh,/docs/reference/resources/mqtt-js-telemetry.sh
C,telemetry-data-as-object.json,json,resources/telemetry-data-as-object.json,/docs/reference/resources/telemetry-data-as-object.json
D,telemetry-data-as-array.json,json,resources/telemetry-data-as-array.json,/docs/reference/resources/telemetry-data-as-array.json
E,telemetry-data-with-ts.json,json,resources/telemetry-data-with-ts.json,/docs/reference/resources/telemetry-data-with-ts.json{% endcapture %}
{% include tabs.html %}

 
## Attributes API

ThingsBoard attributes API allows devices to

* Upload [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes to the server.
* Request [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) and [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes from the server.
* Subscribe to [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes from the server.
 
##### Publish attribute update to the server

In order to publish client-side device attributes to ThingsBoard server node, send PUBLISH message to the following topic:

```shell
v1/devices/me/attributes
```
{: .copy-code}

{% capture tabspec %}mqtt-attributes-upload
A,Mosquitto,shell,resources/mosquitto-attributes-publish.sh,/docs/reference/resources/mosquitto-attributes-publish.sh
B,MQTT.js,shell,resources/mqtt-js-attributes-publish.sh,/docs/reference/resources/mqtt-js-attributes-publish.sh
C,new-attributes-values.json,json,resources/new-attributes-values.json,/docs/reference/resources/new-attributes-values.json{% endcapture %}
{% include tabs.html %}

##### Request attribute values from the server

In order to request client-side or shared device attributes to ThingsBoard server node, send PUBLISH message to the following topic:

```shell
v1/devices/me/attributes/request/$request_id
```

where **$request_id** is your integer request identifier.
Before sending PUBLISH message with the request, client need to subscribe to 

```shell
v1/devices/me/attributes/response/+
```

The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available because subscribe and publish need to happen in the same mqtt session.

{% if docsPrefix == null %}
Replace $ACCESS_TOKEN with your device's access token. And don't forget to replace hostname "demo.thingsboard.io" to your host in the "mqtt-js-attributes-request.js" file.
In this example, hostname reference live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
Replace $ACCESS_TOKEN with your device's access token. And don't forget to replace hostname "127.0.0.1" to your host in the "mqtt-js-attributes-request.js" file.
In this example, hostname reference your local installation.
{% endif %}
{% if docsPrefix == 'paas/' %}
Replace $ACCESS_TOKEN with your device's access token.
{% endif %}

{% capture tabspec %}mqtt-attributes-request
A,MQTT.js,shell,resources/mqtt-js-attributes-request.sh,/docs/reference/resources/mqtt-js-attributes-request.sh
B,mqtt-js-attributes-request.js,javascript,resources/mqtt-js-attributes-request.js,/docs/reference/resources/mqtt-js-attributes-request.js
C,Result,json,resources/attributes-response.json,/docs/reference/resources/attributes-response.json{% endcapture %}
{% include tabs.html %}

**Please note**, the intersection of client-side and shared device attribute keys is a bad practice! 
However, it is still possible to have same keys for client, shared or even server-side attributes.

##### Subscribe to attribute updates from the server

In order to subscribe to shared device attribute changes, send SUBSCRIBE message to the following topic:

```shell
v1/devices/me/attributes
```

When a shared attribute is changed by one of the server-side components (such as the REST API or the Rule Chain), the client will receive the following update: 

```json
{"key1":"value1"}
```

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
Don't forget to replace $ACCESS_TOKEN with your device's access token. And replace hostname "demo.thingsboard.io" to your host in the "mqtt-js-rpc-from-server.js" file.
In this example, hostname reference live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
Don't forget to replace $ACCESS_TOKEN with your device's access token. And replace hostname "127.0.0.1" to your host in the "mqtt-js-rpc-from-server.js" file.
In this example, hostname reference your local installation.
{% endif %}
{% if docsPrefix == 'paas/' %}
Replace $ACCESS_TOKEN with your device's access token.
{% endif %}

- Use **RPC debug terminal** dashboard;

- Subscribe to RPC commands from the server;

- Send an RPC request "connect" to the device;

- You should receive a response from the device.

{% include images-gallery.html imageCollection="server-side-rpc" %}

{% capture tabspec %}mqtt-rpc-from-server
A,MQTT.js,shell,resources/mqtt-js-rpc-from-server.sh,/docs/reference/resources/mqtt-js-rpc-from-server.sh
B,mqtt-js-rpc-from-server.js,javascript,resources/mqtt-js-rpc-from-server.js,/docs/reference/resources/mqtt-js-rpc-from-server.js{% endcapture %}  
{% include tabs.html %}

In case your MQTT device is a gateway, ThingsBoard will send a server-side RPC (notification) about changes on provisioned device entities.  
Your MQTT gateway device will receive a service RPC about removal or renaming of device to [properly resolve such events](/docs/iot-gateway/how-device-removing-renaming-works/). 

### Client-side RPC

In order to send RPC commands to server, send PUBLISH message to the following topic:

```shell
v1/devices/me/rpc/request/$request_id
```

where **$request_id** is an integer request identifier.
The response from server will be published to the following topic:

```shell
v1/devices/me/rpc/response/$request_id
```

The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available because subscribe and publish need to happen in the same mqtt session.

{% if docsPrefix == null %}
Don't forget to replace $ACCESS_TOKEN with your device's access token. And replace hostname "demo.thingsboard.io" to your host in the "mqtt-js-rpc-from-server.js" file.
In this example, hostname reference live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
Don't forget to replace $ACCESS_TOKEN with your device's access token. And replace hostname "127.0.0.1" to your host in the "mqtt-js-rpc-from-server.js" file.
In this example, hostname reference your local installation.
{% endif %}
{% if docsPrefix == 'paas/' %}
Don't forget to replace $ACCESS_TOKEN with your device's access token.
{% endif %}

- Add two nodes to the Rule Chain: "script" and "rpc call reply";

- In the **script** node enter the function:

```shell
return {msg: {time:String(new Date())}, metadata: metadata, msgType: msgType};
```
{: .copy-code}

- Send request to the server;

- You should receive a response from the server.

{% include images-gallery.html imageCollection="client-side-rpc" %}

{% capture tabspec %}mqtt-rpc-from-client
A,example.sh,shell,resources/mqtt-js-rpc-from-client.sh,/docs/reference/resources/mqtt-js-rpc-from-client.sh
B,mqtt-js-rpc-from-client.js,javascript,resources/mqtt-js-rpc-from-client.js,/docs/reference/resources/mqtt-js-rpc-from-client.js{% endcapture %}
{% include tabs.html %}

## Claiming devices

Please see the corresponding article to get more information about the [Claiming devices](/docs/{{docsPrefix}}user-guide/claiming-devices) feature.

In order to initiate claiming device, send PUBLISH message to the following topic:

```shell
v1/devices/me/claim
```

The supported data format is:

```json
{"secretKey":"value", "durationMs":60000}
```

**Please note** that the above fields are optional. In case the **secretKey** is not specified, the empty string as a default value is used.
In case the **durationMs** is not specified, the system parameter **device.claim.duration** is used (in the file **/etc/thingsboard/conf/thingsboard.yml**).

## Device provisioning

Please see the corresponding article to get more information about the [Device provisioning](/docs/{{docsPrefix}}user-guide/device-provisioning) feature.

In order to initiate device provisioning, send Provisioning request to the following topic:

```shell
/provision
```

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
