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

[MQTT](https://en.wikipedia.org/wiki/MQTT) is a light-weight publish-subscribe messaging protocol which probably makes it the most suitable for various IoT devices. You can find more information about MQTT [here](http://mqtt.org/).

Thingsboard server nodes act as a MQTT Broker that support QoS levels 0 (at most once) and 1 (at least once) and a set of predefined topics. 

##### Client libraries setup

You can find huge amount of MQTT client libraries in the web. Examples in this article will be based on Mosquitto and MQTT.js.
In order to setup one of those tools, you can use instructions in our [Hello World](/docs/getting-started-guides/helloworld/) guide.

##### MQTT Connect

We will use *access token* device credentials in this article and they will be referred to later as **$ACCESS_TOKEN**.
Application need to send MQTT CONNECT message with username that contains **$ACCESS_TOKEN**.
Possible return codes and their reasons during connect sequence:

* **0x00 Connected** - Successfully connected to Thingsboard MQTT server.
* **0x04 Connection Refused, bad user name or password** - Username is empty.
* **0x05 Connection Refused, not authorized** - Username contains invalid **$ACCESS_TOKEN**. 

## Key-value format

By default, Thingsboard supports key-value content in JSON. Key is always a string, while value can be either string, boolean, double or long.
Using custom binary format or some serialization framework is also possible. See [protocol customization](#protocol-customization) for more details.
For example:

```json
{"stringKey":"value1", "booleanKey":true, "doubleKey":42.0, "longKey":73}
```

## Telemetry upload API

In order to publish telemetry data to Thingsboard server node, send PUBLISH message to the following topic:
 
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

**Please note** that in this case, server-side timestamp will be assigned to uploaded data!

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

Thingsboard attributes API allows devices to 

* Upload [client-side](/docs/user-guide/attributes/#attribute-types) device attributes to the server.
* Request [client-side](/docs/user-guide/attributes/#attribute-types) and [shared](/docs/user-guide/attributes/#attribute-types) device attributes from the server.
* Subscribe to [shared](/docs/user-guide/attributes/#attribute-types) device attributes from the server.
 
##### Publish attribute update to the server

In order to publish client-side device attributes to Thingsboard server node, send PUBLISH message to the following topic:

```shell
v1/devices/me/attributes
```

{% capture tabspec %}mqtt-attributes-upload
A,Mosquitto,shell,resources/mosquitto-attributes-publish.sh,/docs/reference/resources/mosquitto-attributes-publish.sh
B,MQTT.js,shell,resources/mqtt-js-attributes-publish.sh,/docs/reference/resources/mqtt-js-attributes-publish.sh
C,new-attributes-values.json,json,resources/new-attributes-values.json,/docs/reference/resources/new-attributes-values.json{% endcapture %}
{% include tabs.html %}

##### Request attribute values from the server

In order to request client-side or shared device attributes to Thingsboard server node, send PUBLISH message to the following topic:

```shell
v1/devices/me/attributes/request/$request_id
```

where **$request_id** is your integer request identifier.
Before sending PUBLISH message with the request, client need to subscribe to 

```shell
v1/devices/me/attributes/response/+
```

The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available, because subscribe and publish need to happen in the same mqtt session.

{% capture tabspec %}mqtt-attributes-request
A,MQTT.js,shell,resources/mqtt-js-attributes-request.sh,/docs/reference/resources/mqtt-js-attributes-request.sh
B,mqtt-js-attributes-request.js,javascript,resources/mqtt-js-attributes-request.js,/docs/reference/resources/mqtt-js-attributes-request.js
C,Result,json,resources/attributes-response.json,/docs/reference/resources/attributes-response.json{% endcapture %}
{% include tabs.html %}

**Please note**, intersection of client-side and shared device attribute keys is a bad practise! 
However, it is still possible to have same keys for client, shared or even server-side attributes.

##### Subscribe to attribute updates from the server

In order to subscribe to shared device attribute changes, send SUBSCRIBE message to the following topic:

```shell
v1/devices/me/attributes
```

Once shared attribute will be changed by one of the server-side components (REST API or custom plugins)
client will receive following update: 

```json
{"key1":"value1"}
```

{% capture tabspec %}mqtt-attributes-subscribe
A,Mosquitto,shell,resources/mosquitto-attributes-subscribe.sh,/docs/reference/resources/mosquitto-attributes-subscribe.sh
B,MQTT.js,shell,resources/mqtt-js-attributes-subscribe.sh,/docs/reference/resources/mqtt-js-attributes-subscribe.sh{% endcapture %}
{% include tabs.html %}

## RPC API

### Server-side RPC

In order to subscribe to RPC commands from server, send SUBSCRIBE message to the following topic:

```shell
v1/devices/me/rpc/request/+
```

Once subscribed, client will receive individual commands as a PUBLISH message to corresponding topic:

```shell
v1/devices/me/rpc/request/$request_id
```

where **$request_id** is an integer request identifier.

Client should publish the response to following topic:

```shell
v1/devices/me/rpc/response/$request_id
```

The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available, because subscribe and publish need to happen in the same mqtt session.

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
Pure command-line examples are not available, because subscribe and publish need to happen in the same mqtt session.

{% capture tabspec %}mqtt-rpc-from-client
A,MQTT.js,shell,resources/mqtt-js-rpc-from-client.sh,/docs/reference/resources/mqtt-js-rpc-from-client.sh
B,mqtt-js-rpc-from-client.js,javascript,resources/mqtt-js-rpc-from-client.js,/docs/reference/resources/mqtt-js-rpc-from-client.js{% endcapture %}  
{% include tabs.html %}


  
## Protocol customization

MQTT transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/mqtt).
