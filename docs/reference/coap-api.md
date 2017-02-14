---
layout: docwithnav
assignees:
- ashvayka
title: CoAP Device API Reference

---

* TOC
{:toc}

## Getting started

##### CoAP basics

[CoAP](https://en.wikipedia.org/wiki/Constrained_Application_Protocol) is a light-weight IoT protocol for constrained devices. You can find more information about CoAP [here](https://tools.ietf.org/html/rfc7252).
CoAP protocol is UDP based, but similar to HTTP it uses request-response model. 
CoAP observe [option](https://tools.ietf.org/html/rfc7641) allows to subscribe to resources and receive notifications on resource change.

Thingsboard server nodes act as a CoAP Server that supports both regular and observe requests.  

##### Client libraries setup

You can find CoAP client libraries for different programming languages in the web. Examples in this article will be based on [CoAP cli](https://www.npmjs.com/package/coap-cli).
In order to setup this tool, you can use instructions in our [Hello World](/docs/getting-started-guides/helloworld/) guide.

##### CoAP Authentication and error codes

We will use *access token* device credentials in this article and they will be referred to later as **$ACCESS_TOKEN**.
Application need to include **$ACCESS_TOKEN** as a path parameter into each CoAP request.
Possible error codes and their reasons:

* **4.00 Bad Request** - Invalid URL, request parameters or body.
* **4.01 Unauthorized** - Invalid **$ACCESS_TOKEN**.
* **4.04 Not Found** - Resource not found.

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
coap://host:port/api/v1/$ACCESS_TOKEN/telemetry
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

{% capture tabspec %}coap-telemetry-upload
A,Example,shell,resources/coap-telemetry.sh,/docs/reference/resources/coap-telemetry.sh
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
coap://host:port/api/v1/$ACCESS_TOKEN/attributes
```

{% capture tabspec %}coap-attributes-upload
A,Example,shell,resources/coap-attributes-publish.sh,/docs/reference/resources/coap-attributes-publish.sh
B,new-attributes-values.json,json,resources/new-attributes-values.json,/docs/reference/resources/new-attributes-values.json{% endcapture %}
{% include tabs.html %}

##### Request attribute values from the server

In order to request client-side or shared device attributes to Thingsboard server node, send GET request to the following URL:

```shell
coap://host:port/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```


{% capture tabspec %}coap-attributes-request
A,Example,shell,resources/coap-attributes-request.sh,/docs/reference/resources/coap-attributes-request.sh
B,Result,json,resources/attributes-response.json,/docs/reference/resources/attributes-response.json{% endcapture %}
{% include tabs.html %}

**Please note**, intersection of client-side and shared device attribute keys is a bad practise! 
However, it is still possible to have same keys for client, shared or even server-side attributes.

##### Subscribe to attribute updates from the server

In order to subscribe to shared device attribute changes, send GET request with Observe option to the following URL:

```shell
coap://host:port/api/v1/$ACCESS_TOKEN/attributes
```

Once shared attribute will be changed by one of the server-side components (REST API or custom plugins)
client will receive following update: 

{% capture tabspec %}coap-attributes-subscribe
A,Example,shell,resources/coap-attributes-subscribe.sh,/docs/reference/resources/coap-attributes-subscribe.sh
B,Result,json,resources/attributes-response.json,/docs/reference/resources/attributes-response.json{% endcapture %}
{% include tabs.html %}

## RPC API

##### Server-side RPC

In order to subscribe to RPC commands from server, send GET request with observe flag to the following URL:

```shell
coap://host:port/api/v1/$ACCESS_TOKEN/rpc
```

Once subscribed, client may receive rpc requests. An example of RPC request body is shown below:

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
coap://host:port/api/v1/$ACCESS_TOKEN/rpc/{$id}
```

where **$id** is an integer request identifier.

{% capture tabspec %}coap-rpc-command
A,Example Subscribe,shell,resources/coap-rpc-subscribe.sh,/docs/reference/resources/coap-rpc-subscribe.sh
B,Example Reply,shell,resources/coap-rpc-reply.sh,/docs/reference/resources/coap-rpc-reply.sh
C,Reply Body,shell,resources/rpc-response.json,/docs/reference/resources/rpc-response.json{% endcapture %}
{% include tabs.html %}

##### Client-side RPC

In order to send RPC commands to server, send POST request to the following URL:

```shell
coap://host:port/api/v1/$ACCESS_TOKEN/rpc
```

Both request and response body should be a valid JSON documents. Content of the documents is specific to the plugin that will handle your request.

{% capture tabspec %}coap-rpc-from-client
A,Example Request,shell,resources/coap-rpc-from-client.sh,/docs/reference/resources/coap-rpc-from-client.sh
B,Request Body,shell,resources/rpc-client-request.json,/docs/reference/resources/rpc-client-request.json
C,Response Body,shell,resources/rpc-server-response.json,/docs/reference/resources/rpc-server-response.json{% endcapture %}
{% include tabs.html %}
  
## Protocol customization

CoAP transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/coap).
