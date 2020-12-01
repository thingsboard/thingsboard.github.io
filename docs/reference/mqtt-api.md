---
layout: docwithnav
assignees:
- ashvayka
title: MQTT Device API Reference
description: Supported MQTT API Reference for IoT Devices 

---

* TOC
{:toc}

## Getting started

##### MQTT basics

[MQTT](https://en.wikipedia.org/wiki/MQTT) is a lightweight publish-subscribe messaging protocol which probably makes it the most suitable for various IoT devices. 
You can find more information about MQTT [here](http://mqtt.org/).

ThingsBoard server nodes act as an MQTT Broker that supports QoS levels 0 (at most once) and 1 (at least once) and a set of [configurable](/docs/user-guide/device-profiles/#mqtt-device-topic-filters) topics.

##### Client libraries setup

You can find a large number of MQTT client libraries on the web. Examples in this article will be based on Mosquitto and MQTT.js.
In order to setup one of those tools, you can use instructions in our [Hello World](/docs/getting-started-guides/helloworld/) guide.

##### MQTT Connect

We will use *access token* device credentials in this article and they will be referred to later as **$ACCESS_TOKEN**.
The application needs to send MQTT CONNECT message with username that contains **$ACCESS_TOKEN**.
The alternative option is to use [Basic MQTT Credentials](/docs/user-guide/basic-mqtt/) - combination of client id, username and password; 

Possible return codes and their reasons during connect sequence:

* **0x00 Connected** - Successfully connected to ThingsBoard MQTT server.
* **0x04 Connection Refused, bad user name or password** - Username is empty.
* **0x05 Connection Refused, not authorized** - Username contains invalid **$ACCESS_TOKEN**. 

{% include templates/api/key-value-format.md %}

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

* Upload [client-side](/docs/user-guide/attributes/#attribute-types) device attributes to the server.
* Request [client-side](/docs/user-guide/attributes/#attribute-types) and [shared](/docs/user-guide/attributes/#attribute-types) device attributes from the server.
* Subscribe to [shared](/docs/user-guide/attributes/#attribute-types) device attributes from the server.
 
##### Publish attribute update to the server

In order to publish client-side device attributes to ThingsBoard server node, send PUBLISH message to the following topic:

```shell
v1/devices/me/attributes
```

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

{% capture tabspec %}mqtt-rpc-from-server
A,MQTT.js,shell,resources/mqtt-js-rpc-from-server.sh,/docs/reference/resources/mqtt-js-rpc-from-server.sh
B,mqtt-js-rpc-from-server.js,javascript,resources/mqtt-js-rpc-from-server.js,/docs/reference/resources/mqtt-js-rpc-from-server.js{% endcapture %}  
{% include tabs.html %}

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

{% capture tabspec %}mqtt-rpc-from-client
A,MQTT.js,shell,resources/mqtt-js-rpc-from-client.sh,/docs/reference/resources/mqtt-js-rpc-from-client.sh
B,mqtt-js-rpc-from-client.js,javascript,resources/mqtt-js-rpc-from-client.js,/docs/reference/resources/mqtt-js-rpc-from-client.js{% endcapture %}  
{% include tabs.html %}

## Claiming devices

Please see the corresponding article to get more information about the [Claiming devices](/docs/user-guide/claiming-devices) feature.

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

Please see the corresponding article to get more information about the [Device provisioning](/docs/user-guide/device-provisioning) feature.  

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
  
## Protocol customization

MQTT transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/mqtt).


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}
