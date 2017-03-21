---
layout: docwithnav
assignees:
- ashvayka
title: HTTP Device API Reference
description: Supported HTTP API Reference for IoT Devices

---

* TOC
{:toc}

## Getting started

##### HTTP basics

[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) is a general-purpose network protocol that can be use in IoT applications. 
You can find more information about HTTP [here](https://www.w3.org/Protocols/rfc2616/rfc2616.txt).
HTTP protocol is TCP based, and uses request-response model.  

Thingsboard server nodes act as a HTTP Server that supports both HTTP and HTTPS protocols.  

##### Client libraries setup

You can find HTTP client libraries for different programming languages in the web. Examples in this article will be based on [curl](https://en.wikipedia.org/wiki/CURL).
In order to setup this tool, you can use instructions in our [Hello World](/docs/getting-started-guides/helloworld/) guide.

##### HTTP Authentication and error codes

We will use *access token* device credentials in this article and they will be referred to later as **$ACCESS_TOKEN**.
Application need to include **$ACCESS_TOKEN** as a path parameter into each HTTP request.
Possible error codes and their reasons:

* **400 Bad Request** - Invalid URL, request parameters or body.
* **401 Unauthorized** - Invalid **$ACCESS_TOKEN**.
* **404 Not Found** - Resource not found.

## Key-value format

By default, Thingsboard supports key-value content in JSON. Key is always a string, while value can be either string, boolean, double or long.
Using custom binary format or some serialization framework is also possible. See [protocol customization](#protocol-customization) for more details.
For example:

```json
{"stringKey":"value1", "booleanKey":true, "doubleKey":42.0, "longKey":73}
```

## Telemetry upload API

In order to publish telemetry data to Thingsboard server node, send POST request to the following URL:
 
```shell
http(s)://host:port/api/v1/$ACCESS_TOKEN/telemetry
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

{% capture tabspec %}http-telemetry-upload
A,Example,shell,resources/http-telemetry.sh,/docs/reference/resources/http-telemetry.sh
B,telemetry-data-as-object.json,json,resources/telemetry-data-as-object.json,/docs/reference/resources/telemetry-data-as-object.json
C,telemetry-data-as-array.json,json,resources/telemetry-data-as-array.json,/docs/reference/resources/telemetry-data-as-array.json
D,telemetry-data-with-ts.json,json,resources/telemetry-data-with-ts.json,/docs/reference/resources/telemetry-data-with-ts.json{% endcapture %}
{% include tabs.html %}

 
## Attributes API

Thingsboard attributes API allows devices to 

* Upload [client-side](/docs/user-guide/attributes/#attribute-types) device attributes to the server.
* Request [client-side](/docs/user-guide/attributes/#attribute-types) and [shared](/docs/user-guide/attributes/#attribute-types) device attributes from the server.
* Subscribe to [shared](/docs/user-guide/attributes/#attribute-types) device attributes from the server.
 
##### Publish attribute update to the server

In order to publish client-side device attributes to Thingsboard server node, send POST request to the following URL:

```shell
http(s)://host:port/api/v1/$ACCESS_TOKEN/attributes
```

{% capture tabspec %}http-attributes-upload
A,Example,shell,resources/http-attributes-publish.sh,/docs/reference/resources/http-attributes-publish.sh
C,new-attributes-values.json,json,resources/new-attributes-values.json,/docs/reference/resources/new-attributes-values.json{% endcapture %}
{% include tabs.html %}

##### Request attribute values from the server

In order to request client-side or shared device attributes to Thingsboard server node, send GET request to the following URL:

```shell
http(s)://host:port/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```


{% capture tabspec %}http-attributes-request
A,Example,shell,resources/http-attributes-request.sh,/docs/reference/resources/http-attributes-request.sh
B,Result,json,resources/attributes-response.json,/docs/reference/resources/attributes-response.json{% endcapture %}
{% include tabs.html %}

**Please note**, intersection of client-side and shared device attribute keys is a bad practise! 
However, it is still possible to have same keys for client, shared or even server-side attributes.

##### Subscribe to attribute updates from the server

In order to subscribe to shared device attribute changes, send GET request with optional "timeout" request parameter to the following URL:

```shell
http(s)://host:port/api/v1/$ACCESS_TOKEN/attributes/updates
```

Once shared attribute will be changed by one of the server-side components (REST API or custom plugins)
client will receive following update: 

{% capture tabspec %}http-attributes-subscribe
A,Example,shell,resources/http-attributes-subscribe.sh,/docs/reference/resources/http-attributes-subscribe.sh
B,Result,json,resources/attributes-response.json,/docs/reference/resources/attributes-response.json{% endcapture %}
{% include tabs.html %}

## RPC API

### Server-side RPC

In order to subscribe to RPC commands from server, send GET request with optional "timeout" request parameter to the following URL:

```shell
http(s)://host:port/api/v1/$ACCESS_TOKEN/rpc
```

Once subscribed, client may receive rpc request or timeout message if there is no requests to particular device.
An example of RPC request body is shown below:

```json
{
  "id": "1",
  "method": "setGpio",
  "params": {
    "pin": "23",
    "value": 1
  }
}
```

where 

 - **id** - request id, integer request identifier
 - **method** - RPC method name, string
 - **params** - RPC method params, custom json object 

and can reply to them using POST request to the following URL:

```shell
http://host:port/api/v1/$ACCESS_TOKEN/rpc/{$id}
```

where **$id** is an integer request identifier.

{% capture tabspec %}http-rpc-from-server
A,Example Subscribe,shell,resources/http-rpc-subscribe.sh,/docs/reference/resources/http-rpc-subscribe.sh
B,Example Reply,shell,resources/http-rpc-reply.sh,/docs/reference/resources/http-rpc-reply.sh
C,Reply Body,shell,resources/rpc-response.json,/docs/reference/resources/rpc-response.json{% endcapture %}
{% include tabs.html %}

### Client-side RPC

In order to send RPC commands to server, send POST request to the following URL:

```shell
http://host:port/api/v1/$ACCESS_TOKEN/rpc
```

Both request and response body should be a valid JSON documents. Content of the documents is specific to the plugin that will handle your request.

{% capture tabspec %}http-rpc-from-client
A,Example Request,shell,resources/http-rpc-from-client.sh,/docs/reference/resources/http-rpc-from-client.sh
B,Request Body,shell,resources/rpc-client-request.json,/docs/reference/resources/rpc-client-request.json
C,Response Body,shell,resources/rpc-server-response.json,/docs/reference/resources/rpc-server-response.json{% endcapture %}  
{% include tabs.html %}

  
## Protocol customization

HTTP transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/http).
