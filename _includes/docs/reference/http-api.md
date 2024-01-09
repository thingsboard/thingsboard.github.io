
* TOC
{:toc}

## Getting started

##### HTTP basics

[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) is a general-purpose network protocol that can be used in IoT applications. 
You can find more information about HTTP [here](https://www.w3.org/Protocols/rfc2616/rfc2616.txt).
HTTP protocol is TCP based and uses request-response model.  

ThingsBoard server nodes act as an HTTP Server that supports both HTTP and HTTPS protocols.

##### Client libraries setup

You can find HTTP client libraries for different programming languages on the web. The examples in this article will be based on [curl](https://en.wikipedia.org/wiki/CURL).
In order to setup this tool, you can use instructions in our [Hello World](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide.

##### HTTP Authentication and error codes

In this article, we will use *access token* device credentials in this article and they will be referred to later as **$ACCESS_TOKEN**.
The application needs to include **$ACCESS_TOKEN** as a path parameter in each HTTP request.
Possible error codes and their reasons:

* **400 Bad Request** - Invalid URL, request parameters or body.
* **401 Unauthorized** - Invalid **$ACCESS_TOKEN**.
* **404 Not Found** - Resource not found.

{% include templates/api/key-value-format.md %}

Using custom binary format or some serialization framework is also possible. See [protocol customization](#protocol-customization) for more details.

## Telemetry upload API

In order to publish telemetry data to ThingsBoard server node, send POST request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
http(s)://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** - the hostname or IP address your platform is running on;
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```shell
https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry
```
{: .copy-code}

Where **$ACCESS_TOKEN** - device access token.

{% endif %}

The simplest supported data formats are:

```json
{"key1":"value1", "key2":"value2"}
```

or

```json
[{"key1":"value1"}, {"key2":"value2"}]
```

In this case, the server-side timestamp will be assigned to uploaded data!

In case your device is able to get the client-side timestamp, you can use following format:

```json
{"ts":1451649600512, "values":{"key1":"value1", "key2":"value2"}}
```

Where **1451649600512** is a [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) with milliseconds precision.
For example, the value '1451649600512' corresponds to 'Fri, 01 Jan 2016 12:00:00.512 GMT'

<br>
Below are the examples of commands for publishing different types of telemetry data.

{% if docsPrefix == null %}
Don't forget to replace <code>demo.thingsboard.io</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token. In this example, the hostname references live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
Don't forget to replace <code>$THINGSBOARD_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token. In this example, the hostname references your local installation.
{% endif %}
{% if docsPrefix == "paas/" %}
Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix == "edge/" %}
Don't forget to replace <code>$THINGSBOARD_EDGE_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token. In this example, the hostname references your local installation.
{% endif %}

**Example 1**. Publish data as an object without timestamp (server-side timestamp will be used).

Execute the command:

{% if docsPrefix == null %}
```shell
curl -v -X POST --data "{"temperature":42,"humidity":73}" https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "pe/" %}
```shell
curl -v -X POST --data "{"temperature":42,"humidity":73}" http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
curl -v -X POST --data "{"temperature":42,"humidity":73}" https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
```shell
curl -v -X POST --data "{"temperature":42,"humidity":73}" http://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}

Telemetry data:

```json
{"temperature":42,"humidity":73}
```

**Example 2**. Publish data as an object without timestamp (server-side timestamp will be used) using data from [**telemetry-data-as-object.json**](/docs/reference/resources/telemetry-data-as-object.json) file.

Execute the command:

{% if docsPrefix == null %}
```shell
curl -v -X POST -d @telemetry-data-as-object.json https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "pe/" %}
```shell
curl -v -X POST -d @telemetry-data-as-object.json http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
curl -v -X POST -d @telemetry-data-as-object.json https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
```shell
curl -v -X POST -d @telemetry-data-as-object.json http://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}

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

{% if docsPrefix == null %}
```shell
curl -v -X POST -d @telemetry-data-as-array.json https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "pe/" %}
```shell
curl -v -X POST -d @telemetry-data-as-array.json http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
curl -v -X POST -d @telemetry-data-as-array.json https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
```shell
curl -v -X POST -d @telemetry-data-as-array.json http://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}

The content of the JSON file:

```json
[{"key1":"value1"}, {"key2":true}]
```

**Example 4**. Publish data as an object with timestamp (telemetry timestamp will be used) using data from [**telemetry-data-with-ts.json**](/docs/reference/resources/telemetry-data-with-ts.json) file.

Execute the command:

{% if docsPrefix == null %}
```shell
curl -v -X POST -d @telemetry-data-with-ts.json https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "pe/" %}
```shell
curl -v -X POST -d @telemetry-data-with-ts.json http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
curl -v -X POST -d @telemetry-data-with-ts.json https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
```shell
curl -v -X POST -d @telemetry-data-with-ts.json http://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}

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
 
##### Publish attribute update to the server

In order to publish client-side device attributes to ThingsBoard server node, send POST request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
http(s)://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** - the hostname or IP address your platform is running on;
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```shell
https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

Where **$ACCESS_TOKEN** - device access token.

{% endif %}

Below are the examples of commands for publishing different types of telemetry data.

{% if docsPrefix == null %}
Don't forget to replace <code>demo.thingsboard.io</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token. In this example, the hostname references live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
Don't forget to replace <code>$THINGSBOARD_HOST_NAME</code> with your host and port and <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix == "paas/" %}
Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix == "edge/" %}
Don't forget to replace <code>$THINGSBOARD_EDGE_HOST_NAME</code> with your host and port and <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}

**Example 1**. Publish client-side attributes update

{% if docsPrefix == null %}
```shell
curl -v -X POST --data "{"attribute1": "value1", "attribute2":true, "attribute3": 43.0}" https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "pe/" %}
```shell
curl -v -X POST --data "{"attribute1": "value1", "attribute2":true, "attribute3": 43.0}" http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
curl -v -X POST --data "{"attribute1": "value1", "attribute2":true, "attribute3": 43.0}" https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
```shell
curl -v -X POST --data "{"attribute1": "value1", "attribute2":true, "attribute3": 43.0}" http://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}


**Example 2**. Publish client-side attributes update from the [**new-attributes-values.json**](/docs/reference/resources/new-attributes-values.json) file.

{% if docsPrefix == null %}
```shell
curl -v -X POST -d @new-attributes-values.json https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "pe/" %}
```shell
curl -v -X POST -d @new-attributes-values.json http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
curl -v -X POST -d @new-attributes-values.json https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
```shell
curl -v -X POST -d @new-attributes-values.json http://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}

The content of the JSON file:

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
{: .copy-code}

##### Request attribute values from the server

In order to request client-side or shared device attributes to ThingsBoard server node, send GET request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
http(s)://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** - the hostname or IP address your platform is running on;
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```shell
https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}

Where **$ACCESS_TOKEN** - device access token.
{% endif %}

{% if docsPrefix == null %}
Execute the command. Don't forget to replace <code>demo.thingsboard.io</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token. In this example, the hostname references live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
Execute the command. Don't forget to replace <code>$THINGSBOARD_HOST_NAME</code> with your host and port and <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix == "paas/" %}
Execute the command. Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix == "edge/" %}
Execute the command. Don't forget to replace <code>$THINGSBOARD_EDGE_HOST_NAME</code> with your host and port and <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}

{% if docsPrefix == null %}
```shell
curl -v -X GET "https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "pe/" %}
```shell
curl -v -X GET http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
curl -v -X GET "https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
```shell
curl -v -X GET "http://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2"
```
{: .copy-code}
{% endif %}

Result:
```shell
{"client":{"attribute1":"value1","attribute2":true}}
```

{% capture difference %}
**Please note**
<br>
the intersection of client-side and shared device attribute keys is a bad practice! 
However, it is still possible to have same keys for client, shared or even server-side attributes.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

##### Subscribe to attribute updates from the server

In order to subscribe to shared device attribute changes, send GET request with optional "timeout" request parameter to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
http(s)://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes/updates
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** - the hostname or IP address your platform is running on;
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/attributes/updates
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```shell
https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes/updates
```
{: .copy-code}

Where **$ACCESS_TOKEN** - device access token.

{% endif %}

Once shared attribute will be changed by one of the server-side components (REST API or Rule Chain) the client will receive the following update: 

{% if docsPrefix == null %}
Execute the command. Don't forget to replace <code>demo.thingsboard.io</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token. In this example, the hostname references live demo server.
{% endif %}
{% if docsPrefix == "pe/" %}
Execute the command. Don't forget to replace <code>$THINGSBOARD_HOST_NAME</code> with your host and port and <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix == "paas/" %}
Execute the command. Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}
{% if docsPrefix == "edge/" %}
Execute the command. Don't forget to replace <code>$THINGSBOARD_EDGE_HOST_NAME</code> with your host and port and <code>$ACCESS_TOKEN</code> with your device's access token.
{% endif %}

{% if docsPrefix == null %}
```shell
curl -v -X GET https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/attributes/updates?timeout=20000
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "pe/" %}
```shell
curl -v -X GET http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes/updates?timeout=20000
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
curl -v -X GET https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes/updates?timeout=20000
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
```shell
curl -v -X GET http://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes/updates?timeout=20000
```
{: .copy-code}
{% endif %}

Result:
```shell
{"client":{"attribute1":"value1","attribute2":true}}
```

## JSON value support

{% include templates/api/json.md %}

## RPC API

### Server-side RPC

In order to subscribe to RPC commands from the server, send GET request with optional "timeout" request parameter to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
http(s)://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** - the hostname or IP address your platform is running on;
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```shell
https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

Where **$ACCESS_TOKEN** - device access token.

{% endif %}

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

It is possible to reply to them using POST request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
http(s)://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc/{$id}
```
{: .copy-code}

{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/rpc/{$id}
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```shell
https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc/{$id}
```
{: .copy-code}

{% endif %}

Where
- **$id** is an integer request identifier.

<br>
**Let's look at an example**:

- Use **RPC debug terminal** widget in your ThingsBoard instance;

{% if docsPrefix == null or docsPrefix == "pe/" %}
- Subscribe to RPC commands from the server using the command below. To do this, in the first terminal window send GET request with observe flag. Don't forget to replace <code>$THINGSBOARD_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
curl -v -X GET http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc?timeout=20000
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
- Subscribe to RPC commands from the server using the command below. Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
curl -v -X GET https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc?timeout=20000
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
- Subscribe to RPC commands from the server using the command below. Don't forget to replace <code>$THINGSBOARD_EDGE_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
curl -v -X GET http://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc?timeout=20000
```
{: .copy-code}
{% endif %}

- Send an RPC request "connect" to the device using **RPC debug terminal** widget;

- Save the "[rpc-response.json](/docs/reference/resources/rpc-response.json)" file to your PC;

- In the second terminal window simulate sending a response from the device to the server:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
curl -v -X POST -d @rpc-response.json http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc/1 --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
curl -v -X POST -d @rpc-response.json https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc/1 --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
```shell
curl -v -X POST -d @rpc-response.json http://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc/1 --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}

- You should receive a response from the device:

```shell
{"result":"ok"}
```

{% include images-gallery.html imageCollection="server-side-rpc" %}

### Client-side RPC

In order to send RPC commands to the server, send POST request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
http(s)://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** - the hostname or IP address your platform is running on;
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```shell
https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

Where **$ACCESS_TOKEN** - device access token.

{% endif %}

Both request and response body should be valid JSON documents. The content of the documents is specific to the rule node that will handle your request.

<br>
**Let's look at an example**:

- Add two nodes to the Rule Chain: "**script**" and "**rpc call reply**";

- In the **script** node enter the function:

```shell
return {msg: {time:String(new Date())}, metadata: metadata, msgType: msgType};
```
{: .copy-code}

- Save the "[rpc-client-request.json](/docs/reference/resources/rpc-client-request.json)" file to your PC;

{% if docsPrefix == null or docsPrefix == "pe/" %}
- Now, send request to the server using the command below. Don't forget to replace <code>$THINGSBOARD_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
curl -X POST -d @rpc-client-request.json http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
- Now, send request to the server using the command below. Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
curl -X POST -d @rpc-client-request.json https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
- Now, send request to the server using the command below. Don't forget to replace <code>$THINGSBOARD_EDGE_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
curl -X POST -d @rpc-client-request.json http://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}

- You should receive a response from the server:

```shell
{"time":"2016 11 21 12:54:44.287"}
```

{% include images-gallery.html imageCollection="client-side-rpc" %}

## Claiming devices

Please see the corresponding article to get more information about the [Claiming devices](/docs/{{docsPrefix}}user-guide/claiming-devices) feature.

In order to initiate claiming device, send POST request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
http(s)://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/claim
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** - the hostname or IP address your platform is running on;
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/claim
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```shell
https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/claim
```
{: .copy-code}

Where **$ACCESS_TOKEN** - device access token.

{% endif %}

The supported data format is:

```json
{"secretKey":"value", "durationMs":60000}
```

{% capture difference %}
**Please note**
<br>
that the above fields are optional. In case the **secretKey** is not specified, the empty string as a default value is used.
In case the **durationMs** is not specified, the system parameter **device.claim.duration** is used (in the file **/etc/thingsboard/conf/thingsboard.yml**).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Device provisioning

Please see the corresponding article to get more information about the [Device provisioning](/docs/{{docsPrefix}}user-guide/device-provisioning) feature.

In order to initiate device provisioning, send POST request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
http(s)://$THINGSBOARD_HOST_NAME/api/v1/provision
```
{: .copy-code}

Where **$THINGSBOARD_HOST_NAME** - the hostname or IP address your platform is running on;
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
https://demo.thingsboard.io/api/v1/provision
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```shell
https://thingsboard.cloud/api/v1/provision
```
{: .copy-code}
{% endif %}

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

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
http(s)://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/firmware?title=$TITLE&version=$VERSION
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** - the hostname or IP address your platform is running on;
- **$ACCESS_TOKEN** - the device access token;  
- **$TITLE** - the firmware title;  
- **$VERSION** - the version of the target firmware.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/firmware?title=$TITLE&version=$VERSION
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```shell
https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/firmware?title=$TITLE&version=$VERSION
```
{: .copy-code}

Where
- **$ACCESS_TOKEN** - the device access token;
- **$TITLE** - the firmware title;
- **$VERSION** - the version of the target firmware.

{% endif %}

## Protocol customization

HTTP transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/http).

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}