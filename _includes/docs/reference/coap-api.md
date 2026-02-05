{% if docsPrefix == nil or docsPrefix == "pe/" %}
{% assign HOST_NAME = "$THINGSBOARD_HOST_NAME" %}
{% endif %}
{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
{% assign HOST_NAME = "$THINGSBOARD_EDGE_HOST_NAME" %}
{% endif %}

* TOC
{:toc}

[CoAP](https://en.wikipedia.org/wiki/Constrained_Application_Protocol){:target="_blank"} is a lightweight, UDP-based protocol designed for constrained IoT devices.
Although it follows a request–response model similar to HTTP, CoAP is optimized for low-power and low-bandwidth networks.   
You can find more information about CoAP [here](https://tools.ietf.org/html/rfc7252){:target="_blank"}.

CoAP Observe [Option](https://tools.ietf.org/html/rfc7641){:target="_blank"} allows subscription to resources and receiving notifications on resource change.

ThingsBoard server nodes act as a CoAP Server that supports both regular and observe requests.

<hr>

## Client libraries setup

Many CoAP client libraries are available for different platforms and languages.

The examples in this guide are based on [CoAP cli](https://www.npmjs.com/package/coap-cli){:target="_blank"}, a command-line CoAP client.

**Install CoAP CLI (Linux/macOS)**
```bash
npm install coap-cli -g
```
{: .copy-code}

{% capture difference %}
**Note**: CoAP CLI does not support query parameters. If your use case requires query parameters, use [coap-client](https://manpages.ubuntu.com/manpages/focal/man5/coap-client.5.html){:target="_blank"} instead.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Install coap-client**
- **Ubuntu 20.04+** 
  ```bash
  sudo apt install libcoap2-bin
  ```
  {: .copy-code}

- for **Ubuntu 18.04**
  ```bash
  sudo apt install libcoap1-bin
  ```
  {: .copy-code}

<hr>

## Authentication methods

ThingsBoard supports two authentication mechanisms to secure COAP connections.

**Supported methods**:
- [Access token](/docs/{{docsPrefix}}user-guide/ssl/coap-access-token/){:target="_blank"}. Uses a unique device access token included as a path parameter in each CoAP request.
- [X.509 certificates](/docs/{{docsPrefix}}user-guide/ssl/coap-x509-certificates/){:target="_blank"}. Uses digital certificates to authenticate devices and establish secure communication based on **public key infrastructure (PKI)**.

> The examples in this guide use **access token–based authentication**.

**Possible error codes and their reasons:**
- **4.00 Bad Request** - Invalid URL, parameters, or payload
- **4.01 Unauthorized** - Invalid **access token**
- **4.04 Not Found** - Requested resource does not exist

<hr>

{% include templates/api/key-value-format.md %}

However, it is also possible to send data via [Protocol Buffers](https://developers.google.com/protocol-buffers){:target="_blank"}.
Please refer to the [CoAP transport type](/docs/{{docsPrefix}}user-guide/device-profiles/#coap-transport-type){:target="_blank"} configuration section in device profile article for more details.

Using custom binary format or some serialization framework is also possible. See [protocol customization](#protocol-customization) for more details.

<hr>

## Telemetry upload API

In order to publish telemetry data to ThingsBoard server node, send POST request.

First, select the authentication method:

{% capture coapAuthenticationCredentials %}
Access token<small></small>%,%accesstoken%,%templates/api/coap/telemetry-upload-api-access-token.md%br%
X.509 Certificate<small></small>%,%certificate%,%templates/api/coap/telemetry-upload-api-certificate.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="coapAuthenticationCredentials" toggle-spec=coapAuthenticationCredentials %}

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

Where **1451649600512** is a [unix timestamp](https://en.wikipedia.org/wiki/Unix_time){:target="_blank"} with milliseconds precision. For example, the value '1451649600512' corresponds to 'Fri, 01 Jan 2016 12:00:00.512 GMT'.

<br><b><font size="3">Examples</font></b>   
Below are examples of commands for publishing different types of telemetry data.

> ⚠️ Don&#39;t forget to replace {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;<code>{{HOST_NAME}}</code> with your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}<code>$ACCESS_TOKEN</code> with your device&#39;s access token.

**Example 1**.   
Publish data as an object without timestamp (server-side timestamp will be used) using data from [telemetry-data-as-object.json](/docs/reference/resources/telemetry-data-as-object.json){:target="_blank" download="telemetry-data-as-object.json"} file.

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

**Example 2**.   
Publish data as an array of objects without timestamp (server-side timestamp will be used) using data from [telemetry-data-as-array.json](/docs/reference/resources/telemetry-data-as-array.json){:target="_blank" download="telemetry-data-as-array.json"} file.

{% capture tabspec %}coap-telemetry-upload-data-as-array
A,Execute the command:,shell,resources/coap-telemetry-data-as-array.sh,/docs/reference/resources/coap-telemetry-data-as-array.sh{% endcapture %}
{% include tabs.html %}

The content of the JSON file:

```json
[{"key1":"value1"}, {"key2":true}]
```
{: .copy-code}

**Example 3**.   
Publish data as an object with timestamp (telemetry timestamp will be used) using data from [telemetry-data-with-ts.json](/docs/reference/resources/telemetry-data-with-ts.json){:target="_blank" download="telemetry-data-with-ts.json"} file.

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

<hr>

## Attributes API

ThingsBoard attributes API allows devices to

* Upload [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} device attributes to the server.
* Request [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} and [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} device attributes from the server.
* Subscribe to [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} device attributes from the server.

<hr>

### Publish attribute update to the server

In order to publish client-side device attributes to ThingsBoard server node, send POST request.

First, select the authentication method:

{% capture coapPublishAttributeUpdate %}
Access token<small></small>%,%accesstoken%,%templates/api/coap/publish-attribute-update-access-token.md%br%
X.509 Certificate<small></small>%,%certificate%,%templates/api/coap/publish-attribute-update-certificate.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="coapPublishAttributeUpdate" toggle-spec=coapPublishAttributeUpdate %}

<hr>

### Request attribute values from the server

In order to request client-side or shared device attributes to ThingsBoard server node, send GET request.

First, select the authentication method:

{% capture coapRequestAttributeValues %}
Access token<small></small>%,%accesstoken%,%templates/api/coap/request-attribute-values-access-token.md%br%
X.509 Certificate<small></small>%,%certificate%,%templates/api/coap/request-attribute-values-certificate.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="coapRequestAttributeValues" toggle-spec=coapRequestAttributeValues %}

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

<hr>

### Subscribe to attribute updates from the server

In order to subscribe to shared device attribute changes, send GET request with Observe option.

First, select the authentication method:

{% capture coapSubscribeToAttributeUpdates %}
Access token<small></small>%,%accesstoken%,%templates/api/coap/subscribe-to-attribute-updates-access-token.md%br%
X.509 Certificate<small></small>%,%certificate%,%templates/api/coap/subscribe-to-attribute-updates-certificate.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="coapSubscribeToAttributeUpdates" toggle-spec=coapSubscribeToAttributeUpdates %}

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

In order to subscribe to RPC commands from the server, send GET request with observe flag.

First, select the authentication method:

{% capture coapServerSideRPC %}
Access token<small></small>%,%accesstoken%,%templates/api/coap/server-side-rpc-access-token.md%br%
X.509 Certificate<small></small>%,%certificate%,%templates/api/coap/server-side-rpc-certificate.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="coapServerSideRPC" toggle-spec=coapServerSideRPC %}

<hr>

### Client-side RPC

In order to send RPC commands to the server, send POST request.

First, select the authentication method:

{% capture coapClientSideRPC %}
Access token<small></small>%,%accesstoken%,%templates/api/coap/client-side-rpc-access-token.md%br%
X.509 Certificate<small></small>%,%certificate%,%templates/api/coap/client-side-rpc-certificate.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="coapClientSideRPC" toggle-spec=coapClientSideRPC %}

<hr>

## Claiming devices

The Device Claiming feature allows end users to securely associate a device with their account after the device has been deployed and connected to ThingsBoard.
For a detailed explanation of the device claiming workflow and supported scenarios, refer to the {% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix contains "paas/" %}[Claiming devices](/docs/{{docsPrefix}}user-guide/claiming-devices){:target="_blank"}{% endif %}{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}[Claiming devices](/docs/user-guide/claiming-devices){:target="_blank"}{% endif %} documentation.

In order to initiate claiming device, send POST request.

First, select the authentication method:

{% capture coapClaimingDevices %}
Access token<small></small>%,%accesstoken%,%templates/api/coap/claiming-devices-access-token.md%br%
X.509 Certificate<small></small>%,%certificate%,%templates/api/coap/claiming-devices-certificate.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="coapClaimingDevices" toggle-spec=coapClaimingDevices %}

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

<hr>

## Device provisioning

Device provisioning allows devices to be registered dynamically without manual creation in the ThingsBoard UI.
For a detailed explanation of the provisioning process and supported scenarios, refer to the {% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix contains "paas/" %}[Device provisioning](/docs/{{docsPrefix}}user-guide/device-provisioning){:target="_blank"}{% endif %}{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}[Device provisioning](/docs/user-guide/device-provisioning){:target="_blank"}{% endif %} documentation.

**Provisioning request**   
To initiate device provisioning, send POST request to the following URL:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
```shell
coap://{{HOST_NAME}}/api/v1/provision
```
{: .copy-code}

Where **{{HOST_NAME}}** is your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} hostname or IP address.

{% endif %}
{% if docsPrefix contains "paas/" %}

```shell
coap://{{coapHostName}}/api/v1/provision
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

Select the authentication method:

{% capture coapFirmwareAPI %}
Access token<small></small>%,%accesstoken%,%templates/api/coap/firmware-api-access-token.md%br%
X.509 Certificate<small></small>%,%certificate%,%templates/api/coap/firmware-api-certificate.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="coapFirmwareAPI" toggle-spec=coapFirmwareAPI %}

<hr>

## Protocol customization

CoAP transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/coap){:target="_blank"}.

<hr>

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}