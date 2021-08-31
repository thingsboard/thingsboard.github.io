
* TOC
{:toc}

## Getting started

##### HTTP basics

[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) is a general-purpose network protocol that can be used in IoT applications. 
You can find more information about HTTP [here](https://www.w3.org/Protocols/rfc2616/rfc2616.txt).
HTTP protocol is TCP based and uses request-response model.  

ThingsBoard server nodes act as an HTTP Server that supports both HTTP and HTTPS protocols.

##### Client libraries setup

You can find HTTP client libraries for different programming languages on the web. Examples in this article will be based on [curl](https://en.wikipedia.org/wiki/CURL).
In order to setup this tool, you can use instructions in our [Hello World](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide.

##### HTTP Authentication and error codes

We will use *access token* device credentials in this article and they will be referred to later as **$ACCESS_TOKEN**.
The application needs to include **$ACCESS_TOKEN** as a path parameter in each HTTP request.
Possible error codes and their reasons:

* **400 Bad Request** - Invalid URL, request parameters or body.
* **401 Unauthorized** - Invalid **$ACCESS_TOKEN**.
* **404 Not Found** - Resource not found.

{% include templates/api/key-value-format.md %}

Using custom binary format or some serialization framework is also possible. See [protocol customization](#protocol-customization) for more details.


## Telemetry upload API

In order to publish telemetry data to ThingsBoard server node, send POST request to the following URL:
 
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

**Please note** that in this case, the server-side timestamp will be assigned to uploaded data!

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

ThingsBoard attributes API allows devices to

* Upload [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes to the server.
* Request [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) and [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes from the server.
* Subscribe to [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes from the server.
 
##### Publish attribute update to the server

In order to publish client-side device attributes to ThingsBoard server node, send POST request to the following URL:

```shell
http(s)://host:port/api/v1/$ACCESS_TOKEN/attributes
```

{% capture tabspec %}http-attributes-upload
A,Example,shell,resources/http-attributes-publish.sh,/docs/reference/resources/http-attributes-publish.sh
C,new-attributes-values.json,json,resources/new-attributes-values.json,/docs/reference/resources/new-attributes-values.json{% endcapture %}
{% include tabs.html %}

##### Request attribute values from the server

In order to request client-side or shared device attributes to ThingsBoard server node, send GET request to the following URL:

```shell
http(s)://host:port/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```


{% capture tabspec %}http-attributes-request
A,Example,shell,resources/http-attributes-request.sh,/docs/reference/resources/http-attributes-request.sh
B,Result,json,resources/attributes-response.json,/docs/reference/resources/attributes-response.json{% endcapture %}
{% include tabs.html %}

**Please note**, the intersection of client-side and shared device attribute keys is a bad practice! 
However, it is still possible to have same keys for client, shared or even server-side attributes.

##### Subscribe to attribute updates from the server

In order to subscribe to shared device attribute changes, send GET request with optional "timeout" request parameter to the following URL:

```shell
http(s)://host:port/api/v1/$ACCESS_TOKEN/attributes/updates
```

Once shared attribute will be changed by one of the server-side components (REST API or Rule Chain) the client will receive the following update: 

{% capture tabspec %}http-attributes-subscribe
A,Example,shell,resources/http-attributes-subscribe.sh,/docs/reference/resources/http-attributes-subscribe.sh
B,Result,json,resources/attributes-response.json,/docs/reference/resources/attributes-response.json{% endcapture %}
{% include tabs.html %}

## JSON value support

{% include templates/api/json.md %}

## RPC API

### Server-side RPC

In order to subscribe to RPC commands from the server, send GET request with optional "timeout" request parameter to the following URL:

```shell
http(s)://host:port/api/v1/$ACCESS_TOKEN/rpc
```

Once subscribed, a client may receive rpc request or a timeout message if there are no requests to a particular device.
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

In order to send RPC commands to the server, send POST request to the following URL:

```shell
http://host:port/api/v1/$ACCESS_TOKEN/rpc
```

Both request and response body should be valid JSON documents. The content of the documents is specific to the rule node that will handle your request.

{% capture tabspec %}http-rpc-from-client
A,Example Request,shell,resources/http-rpc-from-client.sh,/docs/reference/resources/http-rpc-from-client.sh
B,Request Body,shell,resources/rpc-client-request.json,/docs/reference/resources/rpc-client-request.json
C,Response Body,shell,resources/rpc-server-response.json,/docs/reference/resources/rpc-server-response.json{% endcapture %}  
{% include tabs.html %}

## Claiming devices

Please see the corresponding article to get more information about the [Claiming devices](/docs/{{docsPrefix}}user-guide/claiming-devices) feature.

In order to initiate claiming device, send POST request to the following URL:
 
```shell
http(s)://host:port/api/v1/$ACCESS_TOKEN/claim
```

The supported data format is:

```json
{"secretKey":"value", "durationMs":60000}
```

**Please note** that the above fields are optional. In case the **secretKey** is not specified, the empty string as a default value is used.
In case the **durationMs** is not specified, the system parameter **device.claim.duration** is used (in the file **/etc/thingsboard/conf/thingsboard.yml**).
  
## Device provisioning

Please see the corresponding article to get more information about the [Device provisioning](/docs/{{docsPrefix}}user-guide/device-provisioning) feature.  

In order to initiate device provisioning, send POST request to the following URL:
 
```shell
http(s)://host:port/api/v1/provision
```

The supported data format is:

```json
{
  "deviceName": "DEVICE_NAME",
  "provisionDeviceKey": "u7piawkboq8v32dmcmpp",
  "provisionDeviceSecret": "jpmwdn8ptlswmf4m29bw"
}
```

## Firmware API

When ThingsBoard initiates the firmware update over HTTP it sets the fw_title, fw_version, fw_checksum, fw_checksum_algorithm shared attributes.
To receive the shared attribute updates, the device has to GET request

```shell
http(s)://host/api/v1/${access_token}/firmware?title=${title}&version=${version}
```
{: .copy-code}

Where  
**host** - your localhost, or the platform address;  
**${access_token}** -  the device access token;  
**${title}** - the firmware title;  
**${version}** - the version of the target firmware.

## Protocol customization

HTTP transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/http).


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
