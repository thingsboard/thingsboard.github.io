* TOC
{:toc}

## Getting started

### CoAP basics

[CoAP](https://en.wikipedia.org/wiki/Constrained_Application_Protocol) is a light-weight IoT protocol for constrained devices. You can find more information about CoAP [here](https://tools.ietf.org/html/rfc7252).
CoAP protocol is UDP based, but similar to HTTP it uses request-response model. 
CoAP Observe [Option](https://tools.ietf.org/html/rfc7641) allows subscription to resources and receiving notifications on resource change.

ThingsBoard server nodes act as a CoAP Server that supports both regular and observe requests.

### Client libraries setup

You can find CoAP client libraries for different programming languages on the web. The examples in this article will be based on [CoAP cli](https://www.npmjs.com/package/coap-cli).
In order to setup this tool on Linux or macOS, you can use the following command:

```bash
npm install coap-cli -g
```
{: .copy-code}

{% capture difference %}
**NOTE**:
<br>
CoAP cli does not support query parameters. If you require to use query parameters, you should use [coap client](https://manpages.ubuntu.com/manpages/focal/man5/coap-client.5.html) instead. To install the coap-client please execute: <br>
{% endcapture %}
{% include templates/info-banner.md content=difference %}

* **Ubuntu 20.04:** ```sudo apt install libcoap2-bin```
* **Ubuntu 18.04:** ```sudo apt install libcoap1-bin```

### CoAP Authentication and error codes

In this article, we will use *access token* device credentials and they will be referred to later as **$ACCESS_TOKEN**.
The application needs to include **$ACCESS_TOKEN** as a path parameter into each CoAP request.
Possible error codes and their reasons:

* **4.00 Bad Request** - Invalid URL, request parameters or body.
* **4.01 Unauthorized** - Invalid **$ACCESS_TOKEN**.
* **4.04 Not Found** - Resource not found.

The alternative authentication option is to use [X.509 Certificates](/docs/{{docsPrefix}}user-guide/ssl/coap-x509-certificates/).

{% include templates/api/key-value-format.md %}

However, it is also possible to send data via [Protocol Buffers](https://developers.google.com/protocol-buffers).
Please refer to the [CoAP transport type](/docs/{{docsPrefix}}user-guide/device-profiles/#coap-transport-type) configuration section in device profile article for more details.

Using custom binary format or some serialization framework is also possible. See [protocol customization](#protocol-customization) for more details.

## Telemetry upload API

In order to publish telemetry data to ThingsBoard server node, send POST request to the following URL:

{% if (docsPrefix == null) or (docsPrefix == "pe/") %}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry
```
{: .copy-code}

Where  
- **$THINGSBOARD_HOST_NAME** - your localhost, or the platform address;  
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
coap://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```shell
coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry
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

{% capture difference %}
**Please note** 
<br>
that in this case, the server-side timestamp will be assigned to uploaded data!
{% endcapture %}
{% include templates/info-banner.md content=difference %}

In case your device is able to get the client-side timestamp, you can use following format:

```json
{"ts":1451649600512, "values":{"key1":"value1", "key2":"value2"}}
```

Where **1451649600512** is a [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) with milliseconds precision. For example, the value '1451649600512' corresponds to 'Fri, 01 Jan 2016 12:00:00.512 GMT'.

<br>
Below are examples of commands for publishing different types of telemetry data.

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

**Example 1**. Publish data as an object without timestamp (server-side timestamp will be used) using data from [**telemetry-data-as-object.json**](/docs/reference/resources/telemetry-data-as-object.json) file.

{% capture tabspec %}coap-telemetry-upload
A,Execute the command:,shell,resources/coap-telemetry.sh,/docs/reference/resources/coap-telemetry.sh{% endcapture %}
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
{: .copy-code}

**Example 2**. Publish data as an array of objects without timestamp (server-side timestamp will be used) using data from [**telemetry-data-as-array.json**](/docs/reference/resources/telemetry-data-as-array.json) file.

{% capture tabspec %}coap-telemetry-upload-data-as-array
A,Execute the command:,shell,resources/coap-telemetry-data-as-array.sh,/docs/reference/resources/coap-telemetry-data-as-array.sh{% endcapture %}
{% include tabs.html %}

The content of the JSON file:

```json
[{"key1":"value1"}, {"key2":true}]
```
{: .copy-code}

**Example 3**. Publish data as an object with timestamp (telemetry timestamp will be used) using data from [**telemetry-data-with-ts.json**](/docs/reference/resources/telemetry-data-with-ts.json) file.

{% capture tabspec %}coap-telemetry-upload-data-with-ts
A,Execute the command:,shell,resources/coap-telemetry-data-with-ts.sh,/docs/reference/resources/coap-telemetry-data-with-ts.sh{% endcapture %}
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
{: .copy-code}

## Attributes API

ThingsBoard attributes API allows devices to

* Upload [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes to the server.
* Request [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) and [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes from the server.
* Subscribe to [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes from the server.

### Publish attribute update to the server

In order to publish client-side device attributes to ThingsBoard server node, send POST request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** - your localhost, or the platform address;
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
coap://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" %}

```shell
coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

Where **$ACCESS_TOKEN** - device access token.

{% endif %}

Publish client-side attributes update using data from [**new-attributes-values.json**](/docs/reference/resources/new-attributes-values.json) file.

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

{% capture tabspec %}coap-attributes-upload
A,Execute the command:,shell,resources/coap-attributes-publish.sh,/docs/reference/resources/coap-attributes-publish.sh{% endcapture %}
{% include tabs.html %}

### Request attribute values from the server

In order to request client-side or shared device attributes to ThingsBoard server node, send GET request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}

Where  
- **$THINGSBOARD_HOST_NAME** - your localhost, or the platform address;  
- **$ACCESS_TOKEN** - device access token.

{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
coap://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}

Where **$ACCESS_TOKEN** - device access token.
{% endif %}

{% capture difference %}
**NOTE**:
<br>
This example shown with the coap-client instead of CoAP cli since CoAP cli does not support query parameters. Please refer to [Client libraries setup](#docsContent).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture tabspec %}coap-attributes-request
A,Execute the command:,shell,resources/coap-attributes-request.sh,/docs/reference/resources/coap-attributes-request.sh{% endcapture %}
{% include tabs.html %}

Result:

```shell
{"client":{"attribute1":"value1","attribute2":true}}
```

{% capture difference %}
**Please note:**
<br>
the intersection of client-side and shared device attribute keys is a bad practice! 
However, it is still possible to have same keys for client, shared or even server-side attributes.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Subscribe to attribute updates from the server

In order to subscribe to shared device attribute changes, send GET request with Observe option to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

Where  
- **$THINGSBOARD_HOST_NAME** - your localhost, or the platform address;  
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
coap://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

Where **$ACCESS_TOKEN** - device access token.

{% endif %}

Once shared attribute will be changed by one of the server-side components (REST API or Rule Chain) the client will receive the following update: 

{% capture tabspec %}coap-attributes-subscribe
A,Execute the command:,shell,resources/coap-attributes-subscribe.sh,/docs/reference/resources/coap-attributes-subscribe.sh{% endcapture %}
{% include tabs.html %}

Result:

```shell
{"client":{"attribute1":"value1","attribute2":true}}
```

## JSON value support

{% include templates/api/json.md %}

## RPC API

### Server-side RPC

In order to subscribe to RPC commands from the server, send GET request with observe flag to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** - your localhost, or the platform address;
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
coap://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

Where **$ACCESS_TOKEN** - device access token.

{% endif %}

Once subscribed, a client may receive rpc requests. An example of RPC request body is shown below:

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

Where

 - **id** - request id, integer request identifier;
 - **method** - RPC method name, string;
 - **params** - RPC method params, custom json object.

and can reply to them using POST request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc/{$id}
```
{: .copy-code}
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
coap://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/rpc/{$id}
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc/{$id}
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
coap-client -m get coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc -s 100 -B 100
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
- Subscribe to RPC commands from the server using the command below. Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
coap-client -m get coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc -s 100 -B 100
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
- Subscribe to RPC commands from the server using the command below. Don't forget to replace <code>$THINGSBOARD_EDGE_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
coap-client -m get coap://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc -s 100 -B 100
```
{: .copy-code}
{% endif %}

{% capture difference %}
The "`s`" option stands for subscribe and the value has to be specified in seconds.

The "`B`" options stands for break (the operation will be break after desired timeout) and the value has to be specified in seconds
{% endcapture %}
{% include templates/info-banner.md content=difference %}

- Send an RPC request "connect" to the device using **RPC debug terminal** widget;

- Save the "[rpc-response.json](/docs/reference/resources/rpc-response.json)" file to your PC;

- In the second terminal window simulate sending a response from the device to the server:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
coap-client -f rpc-response.json -m post coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc/1
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
cat rpc-response.json | coap post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc/1
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
```shell
coap-client -f rpc-response.json -m post coap://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc/1
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

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

Where  
- **$THINGSBOARD_HOST_NAME** - your localhost, or the platform address;  
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
coap://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc
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
cat rpc-client-request.json | coap post coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
- Now, send request to the server using the command below. Don't forget to replace <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
cat rpc-client-request.json | coap post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "edge/" %}
- Now, send request to the server using the command below. Don't forget to replace <code>$THINGSBOARD_EDGE_HOST_NAME</code> with your host and <code>$ACCESS_TOKEN</code> with your device's access token:

```shell
cat rpc-client-request.json | coap post coap://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc
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

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/claim
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** - your localhost, or the platform address;
- **$ACCESS_TOKEN** - device access token.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
coap://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/claim
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/claim
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

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/provision
```
{: .copy-code}

Where **$THINGSBOARD_HOST_NAME** - your localhost, or the platform address.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
coap://demo.thingsboard.io/api/v1/provision
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
coap://coap.thingsboard.cloud/api/v1/provision
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

The CoAP client has to issue the GET request to

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap get coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/firmware?title=$TITLE&version=$VERSION
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** - your localhost, or the platform address;
- **$ACCESS_TOKEN** -  device access token;
- **$TITLE** - the firmware title;
- **$VERSION** - the version of the target firmware.
{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
coap get coap://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/firmware?title=$TITLE&version=$VERSION
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```shell
coap get coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/firmware?title=$TITLE&version=$VERSION
```
{: .copy-code}

Where
- **$ACCESS_TOKEN** -  device access token;
- **$TITLE** - the firmware title;
- **$VERSION** - the version of the target firmware.

{% endif %}

## Protocol customization

CoAP transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/coap).

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
