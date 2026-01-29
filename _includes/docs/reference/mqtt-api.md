{% if docsPrefix == nil or docsPrefix == "pe/" %}
{% assign HOST_NAME = "$THINGSBOARD_HOST_NAME" %}
{% endif %}
{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
{% assign HOST_NAME = "$THINGSBOARD_EDGE_HOST_NAME" %}
{% endif %}

* TOC
{:toc}

[MQTT](https://en.wikipedia.org/wiki/MQTT){:target="_blank"} is a lightweight publish/subscribe messaging protocol,probably making it the most suitable for various IoT devices. 

ThingsBoard server nodes acts as an MQTT broker and supports:   
&#8194;**&#8226;**&#8194;QoS 0 (at most once)   
&#8194;**&#8226;**&#8194;QoS 1 (at least once)   
&#8194;**&#8226;**&#8194;Configurable MQTT topics via [Device profiles](/docs/{{docsPrefix}}user-guide/device-profiles/#mqtt-device-topic-filters){:target="_blank"}

Learn more about MQTT at [mqtt.org](https://mqtt.org/){:target="_blank"}.

<hr>

## Client libraries setup

Many MQTT client libraries are available for different platforms and languages.

The examples in this guide use:   
&#8194;**&#8226;**&#8194;**Mosquitto** (command-line tools)   
&#8194;**&#8226;**&#8194;**MQTT.js** (JavaScript)

Use the instructions below to install the following command-line utilities:   
&#8194;**&#8226;**&#8194;<span class="code-light">mosquitto_pub</span>   
&#8194;**&#8226;**&#8194;<span class="code-light">mosquitto_sub</span>

Select your operating system to continue with the installation steps:

{% capture connectdevicetogglespec %}
MQTT<small>Linux or macOS</small>%,%mqtt-linux%,%templates/helloworld-pe/mqtt-linux.md%br%
MQTT<small>Windows</small>%,%mqtt-windows%,%templates/helloworld-pe/mqtt-windows.md{% endcapture %}
{% include content-toggle.html content-toggle-id="connectdevice" toggle-spec=connectdevicetogglespec %}

<hr>

## Authentication methods

ThingsBoard supports multiple authentication mechanisms to secure MQTT connections.

**Supported methods**:
- [Access token](/docs/{{docsPrefix}}user-guide/access-token/){:target="_blank"}. Uses a unique **device access token** as the MQTT **username** in the <span class="code-light">CONNECT</span> packet.   
  This method provides a simple and secure way to authenticate devices without requiring certificates or additional credentials.
- [X.509 certificates](/docs/{{docsPrefix}}user-guide/certificates/){:target="_blank"}. Uses digital certificates to authenticate devices and establish secure communication based on **public key infrastructure (PKI)**.
- [Basic MQTT credentials](/docs/{{docsPrefix}}user-guide/basic-mqtt/){:target="_blank"} Uses authentication data—a combination of the optional client ID, username, and password—sent in the MQTT <span class="code-light">CONNECT</span> packet. 

Topic names and payload formats for MQTT communication are configured via the **Device profile**. For more details, see [here](/docs/user-guide/device-profiles/#mqtt-transport-type){:target="_blank"}.

> **Note**   
  This guide uses **access token–based authentication**.

<hr>

## Publish a test telemetry message

Use the following command to publish test telemetry data.

{% if docsPrefix contains 'paas/' %}

> Make sure to replace <code>$ACCESS_TOKEN</code> with your device&#39;s access token.

```bash
mosquitto_pub -d -q 1 -h "{{mqttHostName}}" -p "1883" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m {"temperature":25}
```
{: .copy-code}

**Example**   
If the access token is <code>ABC123</code>, the command looks like this:

```bash
mosquitto_pub -d -q 1 -h "{{mqttHostName}}" -p "1883" -t "v1/devices/me/telemetry" -u "ABC123" -m {"temperature":25}
```
{: .copy-code}

{% endif %}
{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge" %}

> ⚠️ **Don&#39;t forget to replace:**   
> &#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge" %} Edge{% endif %} hostname or IP address.   
> &#8194;&#8226;&#8194;<code>$ACCESS_TOKEN</code> with your device&#39;s access token.

```bash
mosquitto_pub -d -q 1 -h "{{HOST_NAME}}" -p "1883" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m {"temperature":25}
```
{: .copy-code}

**Example**   
In this example, <code>{{HOST_NAME}}</code> refers to your <code>local</code> ThingsBoard {% if docsPrefix == "edge/" or docsPrefix == "pe/edge" %}Edge {% endif %}installation, and <code>$ACCESS_TOKEN</code> is set to <code>ABC123</code>.

```bash
mosquitto_pub -d -q 1 -h "localhost" -p "1883" -t "v1/devices/me/telemetry" -u "ABC123" -m {"temperature":25}
```
{: .copy-code}

{% endif %}

A successful telemetry publish produces output similar to the following:

```text
Client mosqpub|xxx sending CONNECT
Client mosqpub|xxx received CONNACK
Client mosqpub|xxx sending PUBLISH (d0, q1, r0, m1, 'v1/devices/me/telemetry', ... (16 bytes))
Client mosqpub|xxx received PUBACK (Mid: 1)
Client mosqpub|xxx sending DISCONNECT
```

<b><font size="3">Possible MQTT connection responses</font></b>

During the connection process, the MQTT broker may return the following response codes:

* **0x00 Connected** - Successfully connected to ThingsBoard MQTT server.
* **0x04 Connection Refused, bad username or password** - Username is empty.
* **0x05 Connection Refused, not authorized** - Username contains invalid access token.

<hr>

{% include templates/api/key-value-format.md %}

However, it is also possible to send data via [Protocol Buffers](https://developers.google.com/protocol-buffers){:target="_blank"}.
Please refer to the [MQTT transport type](/docs/{{docsPrefix}}user-guide/device-profiles/#mqtt-transport-type){:target="_blank"} configuration section in device profile article for more details.

Using custom binary format or some serialization framework is also possible. See [protocol customization](#protocol-customization) for more details.

<hr>

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

<br><b><font size="3">Examples</font></b>   
Below are the examples of commands for publishing different types of telemetry data.

> ⚠️ Don&#39;t forget to replace {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> with your device&#39;s access token.

**Example 1**.   
Publish data as an object without timestamp (server-side timestamp will be used). 

Execute the command:

{% capture tabspec %}mqtt-telemetry-upload-api
A,Mosquitto,shell,resources/mosquitto-telemetry.sh,/docs/reference/resources/mosquitto-telemetry.sh
B,MQTT.js,shell,resources/mqtt-js-telemetry.sh,/docs/reference/resources/mqtt-js-telemetry.sh{% endcapture %}
{% include tabs.html %}

Telemetry data:

```json
{"temperature":42}
```

**Example 2**.   
Publish data as an object without timestamp (server-side timestamp will be used) using data from [telemetry-data-as-object.json](/docs/reference/resources/telemetry-data-as-object.json){:target="_blank" download="telemetry-data-as-object.json"} file.

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

**Example 3**.   
Publish data as an array of objects without timestamp (server-side timestamp will be used) using data from [telemetry-data-as-array.json](/docs/reference/resources/telemetry-data-as-array.json){:target="_blank" download="telemetry-data-as-array.json"} file.

Execute the command:

{% capture tabspec %}mqtt-telemetry-upload-api-data-as-array
A,Mosquitto,shell,resources/mosquitto-telemetry-data-as-array.sh,/docs/reference/resources/mosquitto-telemetry-data-as-array.sh
B,MQTT.js,shell,resources/mqtt-js-telemetry-data-as-array.sh,/docs/reference/resources/mqtt-js-telemetry-data-as-array.sh{% endcapture %}
{% include tabs.html %}

The content of the JSON file:

```json
[{"key1":"value1"}, {"key2":true}]
```

**Example 4**.   
Publish data as an object with timestamp (telemetry timestamp will be used) using data from [telemetry-data-with-ts.json](/docs/reference/resources/telemetry-data-with-ts.json){:target="_blank" download="telemetry-data-with-ts.json"} file.

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

<hr>

## Attributes API

ThingsBoard attributes API allows devices to

* Upload [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} device attributes to the server.
* Request [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} and [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} device attributes from the server.
* Subscribe to [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} device attributes from the server.

<hr>

### Publish attribute update to the server

In order to publish client-side device attributes to ThingsBoard server node, send PUBLISH message to the following topic:

```shell
v1/devices/me/attributes
```
{: .copy-code}

<br><b><font size="3">Examples</font></b>   
Below are the examples of how to publish client-side device attributes.

> ⚠️ Don&#39;t forget to replace {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> with your device&#39;s access token.

**Example 1**.   
Publish client-side attributes update.

Telemetry data:

```json
{"attribute1": "value1", "attribute2": true}
```
{: .copy-code}

Execute the command:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
mosquitto_pub -d -h "$THINGSBOARD_HOST_NAME" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -m "{"attribute1": "value1", "attribute2": true}"
```
{: .copy-code}
{% else %}
```shell
mosquitto_pub -d -h "{{mqttHostName}}" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -m "{"attribute1": "value1", "attribute2": true}"
```
{: .copy-code}
{% endif %}

**Example 2**.   
Publish client-side attributes update using data from [new-attributes-values.json](/docs/reference/resources/new-attributes-values.json){:target="_blank" download="new-attributes-values.json"} file.

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

<hr>

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

<br><b><font size="3">Example</font></b>   
The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available because subscribe and publish need to happen in the same mqtt session.

{% if docsPrefix == nil or docsPrefix == "pe/" %}
**1.** Save the [mqtt-js-attributes-request.js](/docs/pe/reference/resources/mqtt-js-attributes-request.js){:target="_blank" download="mqtt-js-attributes-request.js"} file to your PC. 

> ⚠️ In this example, the hostname refers to a **local ThingsBoard installation**.   
> If your ThingsBoard instance is deployed on a different host, make sure to replace <code>localhost</code> with the appropriate hostname or IP address.

{% endif %}
{% if docsPrefix contains 'paas/' %}
**1.** Save the [mqtt-js-attributes-request.js](/docs/paas/reference/resources/mqtt-js-attributes-request.js){:target="_blank" download="mqtt-js-attributes-request.js"} file to your PC.
{% endif %}
{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
**1.** Save the [mqtt-js-attributes-request.js](/docs/edge/reference/resources/mqtt-js-attributes-request.js){:target="_blank" download="mqtt-js-attributes-request.js"} file to your PC.

> ⚠️ In this example, the hostname refers to a **local ThingsBoard Edge installation**.   
> If your ThingsBoard Edge instance is deployed on a different host, make sure to replace <code>localhost</code> with the appropriate hostname or IP address.

{% endif %}

{% capture tabspec %}mqtt-attributes-request
A,The content of the "mqtt-js-attributes-request.js" file:,javascript,resources/mqtt-js-attributes-request.js,/docs/reference/resources/mqtt-js-attributes-request.js{% endcapture %}
{% include tabs.html %}

**2.** Execute the command.

> ⚠️ Replace <code>$ACCESS_TOKEN</code> with your device&#39;s access token.

```shell
export TOKEN=$ACCESS_TOKEN
node mqtt-js-attributes-request.js
```
{: .copy-code}

Result:

```text
{"client":{"attribute1":"value1","attribute2":true}}
```

{% capture difference %}
**Please note**, the intersection of client-side and shared device attribute keys is a bad practice! 
However, it is still possible to have same keys for client, shared or even server-side attributes.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

<hr>

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

> ⚠️ Don&#39;t forget to replace {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> with your device&#39;s access token.

Execute the command:

{% capture tabspec %}mqtt-attributes-subscribe
A,Mosquitto,shell,resources/mosquitto-attributes-subscribe.sh,/docs/reference/resources/mosquitto-attributes-subscribe.sh
B,MQTT.js,shell,resources/mqtt-js-attributes-subscribe.sh,/docs/reference/resources/mqtt-js-attributes-subscribe.sh{% endcapture %}
{% include tabs.html %}

<hr>

## JSON value support

{% include templates/api/json.md %}

<hr>

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

<br><b><font size="3">Example</font></b>   
The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available because subscribe and publish need to happen in the same mqtt session.

{% if docsPrefix == nil or docsPrefix == "pe/" %}
**1.** Save the [mqtt-js-rpc-from-server.js](/docs/pe/reference/resources/mqtt-js-rpc-from-server.js){:target="_blank" download="mqtt-js-rpc-from-server.js"} file to your PC.

> ⚠️ In this example, the hostname refers to a **local ThingsBoard installation**.   
> If your ThingsBoard instance is deployed on a different host, make sure to replace <code>localhost</code> with the appropriate hostname or IP address.

{% endif %}
{% if docsPrefix contains "paas/" %}
**1.** Save the [mqtt-js-rpc-from-server.js](/docs/paas/reference/resources/mqtt-js-rpc-from-server.js){:target="_blank" download="mqtt-js-rpc-from-server.js"} file to your PC.
{% endif %}
{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
**1.** Save the [mqtt-js-rpc-from-server.js](/docs/edge/reference/resources/mqtt-js-rpc-from-server.js){:target="_blank" download="mqtt-js-rpc-from-server.js"} file to your PC.

> ⚠️ In this example, the hostname refers to a **local ThingsBoard Edge installation**.   
> If your ThingsBoard Edge instance is deployed on a different host, make sure to replace <code>localhost</code> with the appropriate hostname or IP address.

{% endif %}

{% capture tabspec %}mqtt-rpc-from-server
A,The content of the "mqtt-js-rpc-from-server.js" file,javascript,resources/mqtt-js-rpc-from-server.js,/docs/reference/resources/mqtt-js-rpc-from-server.js{% endcapture %}  
{% include tabs.html %}

**2.** Now, follow these steps:
- Use **RPC debug terminal** widget in your ThingsBoard instance;
- Execute the command to subscribe to RPC commands from the server using the command below. 

> ⚠️ Replace <code>$ACCESS_TOKEN</code> with your device&#39;s access token.

```shell
export TOKEN=$ACCESS_TOKEN
node mqtt-js-rpc-from-server.js
```
{: .copy-code}

- Send an RPC request "connect" to the device using **RPC debug terminal** widget;
- You should receive a response from the device.

{% unless docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
{% include images-gallery.html imageCollection="server-side-rpc" %}
{% endunless %}

In case your MQTT device is a gateway, ThingsBoard will send a server-side RPC (notification) about changes on provisioned device entities.  
Your MQTT gateway device will receive a service RPC about removal or renaming of device to [properly resolve such events](/docs/iot-gateway/how-device-removing-renaming-works/){:target="_blank"}. 

<hr>

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

<br><b><font size="3">Example</font></b>   
The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available because subscribe and publish need to happen in the same mqtt session.

{% if docsPrefix == nil or docsPrefix == "pe/" %}
**1.** Save the [mqtt-js-rpc-from-client.js](/docs/pe/reference/resources/mqtt-js-rpc-from-client.js){:target="_blank" download="mqtt-js-rpc-from-client.js"} file to your PC. 

> ⚠️ In this example, the hostname refers to a **local ThingsBoard installation**.   
> If your ThingsBoard instance is deployed on a different host, make sure to replace <code>localhost</code> with the appropriate hostname or IP address.

{% endif %}
{% if docsPrefix contains "paas/" %}
**1.** Save the [mqtt-js-rpc-from-client.js](/docs/paas/reference/resources/mqtt-js-rpc-from-client.js){:target="_blank" download="mqtt-js-rpc-from-client.js"} file to your PC.
{% endif %}
{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
**1.** Save the [mqtt-js-rpc-from-client.js](/docs/edge/reference/resources/mqtt-js-rpc-from-client.js){:target="_blank" download="mqtt-js-rpc-from-client.js"} file to your PC.

> ⚠️ In this example, the hostname refers to a **local ThingsBoard Edge installation**.   
> If your ThingsBoard Edge instance is deployed on a different host, make sure to replace <code>localhost</code> with the appropriate hostname or IP address.

{% endif %}

{% capture tabspec %}mqtt-rpc-from-client
A,The content of the "mqtt-js-rpc-from-client.js" file,javascript,resources/mqtt-js-rpc-from-client.js,/docs/reference/resources/mqtt-js-rpc-from-client.js{% endcapture %}
{% include tabs.html %}

**2.** Now, follow these steps:
- In the {% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}**Edge** {% endif %}**Root Rule Chain** add two nodes: [script](/docs/user-guide/rule-engine-2-0/nodes/transformation/script){:target="_blank"} and [rpc call reply](/docs/user-guide/rule-engine-2-0/nodes/action/rpc-call-reply){:target="_blank"}.
- In the **script** node enter the function:

```shell
return {msg: {time:String(new Date())}, metadata: metadata, msgType: msgType};
```
{: .copy-code}

- Send request to the server.

> ⚠️ Replace <code>$ACCESS_TOKEN</code> with your device&#39;s access token.

```shell
export TOKEN=$ACCESS_TOKEN
node mqtt-js-rpc-from-client.js
```
{: .copy-code}

- You should receive a response from the server.

{% unless docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
{% include images-gallery.html imageCollection="client-side-rpc" %}
{% endunless %}

<hr>

### Get session limits RPC

The **getSessionLimits** RPC method allows device manufacturers and developers to retrieve the **MQTT transport limits** enforced by ThingsBoard server.

Understanding these limits helps ensure that devices operate within supported parameters and prevents issues such as **message rejection, throttling**, or **connection loss**.

<b><font size="3">Request format</font></b>   
To request session limits, the device sends the following RPC request:

```json
{
  "method": "getSessionLimits",
  "params": {}
}
```

<b><font size="3">Response format</font></b>   
After processing the request, ThingsBoard returns the session limits in the RPC response using the following format:

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

<b><font size="3">Response fields description</font></b>   
- **maxPayloadSize** - the maximum allowable size for an MQTT message payload, expressed in bytes.  
- **maxInflightMessages** -  the maximum number of MQTT messages that can be sent but remain unacknowledged (in-flight) at any given time.
- **rateLimits** - A nested object defining rate limits for different message categories:
  - **messages** - the overall message rate limit.
  - **telemetryMessages** - the maximum number of telemetry messages that can be sent.
  - **telemetryDataPoints** - the number of telemetry data points a device can send.  

<b><font size="3">Rate Limit Format Explanation</font></b>   
A rate limit value such as:

```text
200:1,6000:60,14000:3600
```

- **200:1** — up to 200 messages per second
- **6000:60** — up to 6,000 messages per 60 seconds (1 minute)
- **14000:3600** — up to 14,000 messages per 3,600 seconds (1 hour)

These limits are enforced simultaneously.

<b><font size="4">Gateway-specific session limits</font></b>   
If the device is a **gateway**, the response includes additional limits that apply to devices connected **through the gateway**.

<b><font size="3">Gateway response format</font></b>   

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

<b><font size="3">Gateway rate limits description</font></b>   
- **rateLimits** - rate limits that apply to the gateway device itself.
- **gatewayRateLimits** - rate limits that apply to individual devices connected through the gateway.

These limits help control load and ensure stable operation when multiple devices communicate through a single gateway connection.

<hr>

## Claiming devices

Please see the corresponding article to get more information about the [Claiming devices](/docs/{{docsPrefix}}user-guide/claiming-devices){:target="_blank"} feature.

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

<hr>

## Device provisioning

Please see the corresponding article to get more information about the [Device provisioning](/docs/{{docsPrefix}}user-guide/device-provisioning){:target="_blank"} feature.

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

<hr>

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

<hr>

## Protocol customization

MQTT transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/mqtt){:target="_blank"}.

<hr>

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
