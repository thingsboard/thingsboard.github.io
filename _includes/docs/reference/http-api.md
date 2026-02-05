{% if docsPrefix == nil or docsPrefix == "pe/" %}
{% assign HOST_NAME = "$THINGSBOARD_HOST_NAME" %}
{% endif %}
{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
{% assign HOST_NAME = "$THINGSBOARD_EDGE_HOST_NAME" %}
{% endif %}

* TOC
{:toc}

[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) is a general-purpose network protocol that can be used in IoT applications. 
You can find more information about HTTP [here](https://www.w3.org/Protocols/rfc2616/rfc2616.txt).
HTTP protocol is TCP based and uses request-response model.  

ThingsBoard server nodes act as an HTTP Server that supports both HTTP and HTTPS protocols.

<hr>

## Client libraries setup

Many HTTP client libraries are available for different platforms and languages.
The examples in this article will be based on [curl](https://en.wikipedia.org/wiki/CURL){:target="_blank"}.

**Install curl for Linux**
```bash
sudo apt-get install curl
```
{: .copy-code}

> Starting with Windows 10 build 17063 and macOS 10.2 6C115 (Jaguar), cURL is available by default.

<hr>

## HTTP authentication method

ThingsBoard supports [access token](/docs/user-guide/ssl/http-access-token/){:target="_blank"}-based authentication to secure HTTP connections. For each HTTP request, the client must include the access token as part of the request URL.

> The examples in this guide use **access token–based authentication**.

**Possible error codes and their reasons:**
- **400 Bad Request** - Invalid URL, request parameters or body
- **401 Unauthorized** - Invalid **access token**
- **404 Not Found** - Requested resource does not exist

<hr>

{% include templates/api/key-value-format.md %}

Using custom binary format or some serialization framework is also possible. See [protocol customization](#protocol-customization){:target="_blank"} for more details.

<hr>

## Telemetry upload API

In order to publish telemetry data to ThingsBoard server node, send POST request to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
http(s)://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/telemetry
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
{{httpsUrl}}/api/v1/$ACCESS_TOKEN/telemetry
```
{: .copy-code}

{% endif %}

> ⚠️ Where {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> is the device&#39;s access token.

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

Where **1451649600512** is a [unix timestamp](https://en.wikipedia.org/wiki/Unix_time){:target="_blank"} with milliseconds precision.
For example, the value '1451649600512' corresponds to 'Fri, 01 Jan 2016 12:00:00.512 GMT'

<br>
Below are the examples of commands for publishing different types of telemetry data.

> ⚠️ Don&#39;t forget to replace {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> is your device&#39;s access token.

**Example 1**.   
Publish data as an object without timestamp (server-side timestamp will be used).

Execute the command:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
curl -v -X POST --data "{"temperature":42,"humidity":73}" http://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
curl -v -X POST --data "{"temperature":42,"humidity":73}" {{httpsUrl}}/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}

{% endif %}

Telemetry data:

```json
{"temperature":42,"humidity":73}
```

**Example 2**.   
Publish data as an object without timestamp (server-side timestamp will be used) using data from [telemetry-data-as-object.json](/docs/reference/resources/telemetry-data-as-object.json){:target="_blank" download="telemetry-data-as-object.json"} file.

Execute the command:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}

```shell
curl -v -X POST -d @telemetry-data-as-object.json http://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
curl -v -X POST -d @telemetry-data-as-object.json {{httpsUrl}}/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
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

**Example 3**.   
Publish data as an array of objects without timestamp (server-side timestamp will be used) using data from [telemetry-data-as-array.json](/docs/reference/resources/telemetry-data-as-array.json){:target="_blank" download="telemetry-data-as-array.json"} file.

Execute the command:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
curl -v -X POST -d @telemetry-data-as-array.json http://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
curl -v -X POST -d @telemetry-data-as-array.json {{httpsUrl}}/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}

{% endif %}

The content of the JSON file:

```json
[{"key1":"value1"}, {"key2":true}]
```

**Example 4**. Publish data as an object with timestamp (telemetry timestamp will be used) using data from [telemetry-data-with-ts.json](/docs/reference/resources/telemetry-data-with-ts.json){:target="_blank" download="telemetry-data-with-ts.json"} file.

Execute the command:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
curl -v -X POST -d @telemetry-data-with-ts.json http://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
curl -v -X POST -d @telemetry-data-with-ts.json {{httpsUrl}}/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
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

<hr>

## Attributes API

ThingsBoard attributes API allows devices to

* Upload [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} device attributes to the server.
* Request [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} and [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} device attributes from the server.
* Subscribe to [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} device attributes from the server.

<hr>

### Publish attribute update to the server

In order to publish client-side device attributes to ThingsBoard server node, send POST request to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
http(s)://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
{{httpsUrl}}/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

{% endif %}

> Where {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> is the device&#39;s access token.
<br>

Below are the examples of commands for publishing different types of telemetry data.

**Example 1**.   
Publish client-side attributes update

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
curl -v -X POST --data "{"attribute1": "value1", "attribute2":true, "attribute3": 43.0}" http://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
```shell
curl -v -X POST --data "{"attribute1": "value1", "attribute2":true, "attribute3": 43.0}" {{httpsUrl}}/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}

**Example 2**.   
Publish client-side attributes update from the [new-attributes-values.json](/docs/reference/resources/new-attributes-values.json){:target="_blank" download="new-attributes-values.json"} file.

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}

```shell
curl -v -X POST -d @new-attributes-values.json http://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
curl -v -X POST -d @new-attributes-values.json {{httpsUrl}}/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
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

<hr>

### Request attribute values from the server

In order to request client-side or shared device attributes to ThingsBoard server node, send GET request to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
http(s)://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
{{httpsUrl}}/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}

{% endif %}

> Where {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> is the device&#39;s access token.

<br>

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
curl -v -X GET http://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
curl -v -X GET "{{httpsUrl}}/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2"
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

<hr>

### Subscribe to attribute updates from the server

In order to subscribe to shared device attribute changes, send GET request with optional "timeout" request parameter to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}

```shell
http(s)://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/attributes/updates
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
{{httpsUrl}}/api/v1/$ACCESS_TOKEN/attributes/updates
```
{: .copy-code}

{% endif %}

> Where {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> is the device&#39;s access token.

Once shared attribute will be changed by one of the server-side components (REST API or Rule Chain) the client will receive the following update: 

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
curl -v -X GET http://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/attributes/updates?timeout=20000
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
curl -v -X GET {{httpsUrl}}/api/v1/$ACCESS_TOKEN/attributes/updates?timeout=20000
```
{: .copy-code}

{% endif %}

Result:
```shell
{"client":{"attribute1":"value1","attribute2":true}}
```

<hr>

## JSON value support

{% include templates/api/json.md %}

<hr>

## RPC API

### Server-side RPC

In order to subscribe to RPC commands from the server, send GET request with optional "timeout" request parameter to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
http(s)://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
{{httpsUrl}}/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

{% endif %}

> Where {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> is the device&#39;s access token.

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

> Where   
&#8194;&#8226;&#8194;**id** - request id, integer request identifier   
&#8194;&#8226;&#8194;**method** - RPC method name, string   
&#8194;&#8226;&#8194;**params** - RPC method params, custom json object

It is possible to reply to them using POST request to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
http(s)://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/rpc/{$id}
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
{{httpsUrl}}/api/v1/$ACCESS_TOKEN/rpc/{$id}
```
{: .copy-code}

{% endif %}

> Where <code>$id</code> is an integer request identifier.

<br>
**Let&#39;s look at an example**:

- Use **RPC debug terminal** widget in your ThingsBoard instance;
- Subscribe to RPC commands from the server using the command below. To do this, in the first terminal window send GET request with observe flag.

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}

```shell
curl -v -X GET http://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/rpc?timeout=20000
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
curl -v -X GET {{httpsUrl}}/api/v1/$ACCESS_TOKEN/rpc?timeout=20000
```
{: .copy-code}

{% endif %}

> Where {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> is the device&#39;s access token.

- Send an RPC request "connect" to the device using **RPC debug terminal** widget;
- Save the [rpc-response.json](/docs/reference/resources/rpc-response.json){:target="_blank" download="rpc-response.json"} file to your PC;
- In the second terminal window simulate sending a response from the device to the server:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
curl -v -X POST -d @rpc-response.json http://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/rpc/1 --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
```shell
curl -v -X POST -d @rpc-response.json {{httpsUrl}}/api/v1/$ACCESS_TOKEN/rpc/1 --header "Content-Type:application/json"
```
{: .copy-code}
{% endif %}

You should receive a response from the device:

```shell
{"result":"ok"}
```

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.html imageCollection="server-side-rpc" %}
{% endif %}

<hr>

### Client-side RPC

In order to send RPC commands to the server, send POST request to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
http(s)://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
{{httpsUrl}}/api/v1/$ACCESS_TOKEN/rpc
```
{: .copy-code}

{% endif %}

> Where {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> is the device&#39;s access token.

Both request and response body should be valid JSON documents. The content of the documents is specific to the rule node that will handle your request.

<br>

**Example**
- In the {% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}**Edge** {% endif %}**Root Rule Chain** add two nodes: [transformation script](/docs/user-guide/rule-engine-2-0/nodes/transformation/script){:target="_blank"} and [rpc call reply](/docs/user-guide/rule-engine-2-0/nodes/action/rpc-call-reply){:target="_blank"}. Connect them to "[Log RPC from Device](/docs/user-guide/rule-engine-2-0/nodes/action/log){:target="_blank"}" action node with "**Success**" link.
- In the **script** node enter the function:

```shell
return {msg: {time: new Date()}, metadata: metadata, msgType: msgType};
```
{: .copy-code}

- Save the [rpc-client-request.json](/docs/reference/resources/rpc-client-request.json){:target="_blank" download="rpc-client-request.json"} file to your PC;
- Now, send request to the server using the command below:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}

```shell
curl -X POST -d @rpc-client-request.json http://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/rpc --header "Content-Type:application/json"
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
curl -X POST -d @rpc-client-request.json {{httpsUrl}}/api/v1/$ACCESS_TOKEN/rpc --header "Content-Type:application/json"
```
{: .copy-code}

{% endif %}

You should receive a response from the server:

```shell
{"time":"Thursday, February 5, 2026, 9:08:22 AM Coordinated Universal Time"}
```

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.html imageCollection="client-side-rpc" %}
{% endif %}

<hr>

## Claiming devices

The Device Claiming feature allows end users to securely associate a device with their account after the device has been deployed and connected to ThingsBoard.
For a detailed explanation of the device claiming workflow and supported scenarios, refer to the {% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix contains "paas/" %}[Claiming devices](/docs/{{docsPrefix}}user-guide/claiming-devices){:target="_blank"}{% endif %}{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}[Claiming devices](/docs/user-guide/claiming-devices){:target="_blank"}{% endif %} documentation.

**Claiming request**   
To initiate the device claiming process, the device must send a POST request to the following endpoint:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}

```shell
http(s)://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/claim
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
{{httpsUrl}}/api/v1/$ACCESS_TOKEN/claim
```
{: .copy-code}

{% endif %}

> Where {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> is the device&#39;s access token.

**Request payload**   
The request body must contain the following JSON structure:

```json
{"secretKey":"value", "durationMs":60000}
```

**Payload fields**
- **secretKey** — a secret value used to authorize the claiming process
- **durationMs** — the time window (in milliseconds) during which the device can be claimed

{% capture difference %}
**Please note** that the above fields are optional. In case the **secretKey** is not specified, the empty string as a default value is used.
In case the **durationMs** is not specified, the system parameter **device.claim.duration** is used (in the file **/etc/thingsboard/conf/thingsboard.yml**).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

<hr>

## Device provisioning

Device provisioning allows devices to be registered dynamically without manual creation in the ThingsBoard UI.
For a detailed explanation of the provisioning process and supported scenarios, refer to the {% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix contains "paas/" %}[Device provisioning](/docs/{{docsPrefix}}user-guide/device-provisioning){:target="_blank"}{% endif %}{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}[Device provisioning](/docs/user-guide/device-provisioning){:target="_blank"}{% endif %} documentation.

**Provisioning request**
To initiate device provisioning, send a POST request to the following endpoint:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
http(s)://{{HOST_NAME}}/api/v1/provision
```
{: .copy-code}

Where **{{HOST_NAME}}** is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
{{httpsUrl}}/api/v1/provision
```
{: .copy-code}

{% endif %}

**Request Payload**   
The provisioning request must use the following JSON format:

```json
{
  "deviceName": "DEVICE_NAME",
  "provisionDeviceKey": "u7piawkboq8v32dmcmpp",
  "provisionDeviceSecret": "jpmwdn8ptlswmf4m29bw"
}
```

**Payload fields**   
- **deviceName** — the name of the device to be provisioned.
- **provisionDeviceKey** — the provisioning key configured in ThingsBoard.
- **provisionDeviceSecret** — the provisioning secret associated with the provisioning key.

If the provided credentials are valid, ThingsBoard automatically creates the device (if it does not already exist) and returns the device credentials, allowing the device to start communicating with the platform.

<hr>

## Firmware API

When ThingsBoard initiates the firmware update over HTTP it sets the _fw_title_, _fw_version_, _fw_checksum_, _fw_checksum_algorithm_ shared attributes.

To receive firmware update information and download the firmware, the device must send a GET request to the following endpoint:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}

```shell
http(s)://{{HOST_NAME}}/api/v1/$ACCESS_TOKEN/firmware?title=$TITLE&version=$VERSION
```
{: .copy-code}

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
{{httpsUrl}}/api/v1/$ACCESS_TOKEN/firmware?title=$TITLE&version=$VERSION
```
{: .copy-code}

{% endif %}

Parameters   
{% unless docsPrefix contains "paas/" %}&#8194;&#8226;&#8194;**{{HOST_NAME}}** is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address{% endunless %}   
&#8194;&#8226;&#8194;**$ACCESS_TOKEN** is your device&#39;s access token   
&#8194;&#8226;&#8194;**$TITLE** - the firmware title   
&#8194;&#8226;&#8194;**$VERSION** - the target firmware version

<hr>

## Protocol customization

HTTP transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/http){:target="_blank"}.

<hr>

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}