* TOC
{:toc}

A Gateway in ThingsBoard is a special type of device that acts as a bridge between external devices and the platform. 
It maintains a single MQTT connection to ThingsBoard while proxying data for multiple physical devices connected behind it.

The gateway itself is also a standard ThingsBoard device. It can use the [MQTT Device API](/docs/{{docsPrefix}}reference/mqtt-api/){:target="_blank"} to:
- Publish its own telemetry and attributes
- Receive configuration updates
- Execute RPC commands

In addition, this API defines gateway-specific MQTT topics and payload formats and is used by the open-source [ThingsBoard IoT Gateway](/docs/iot-gateway/what-is-iot-gateway/){:target="_blank"}.

{% capture difference %}
For device-level MQTT details (authentication, QoS, payload format, etc.), refer to the [MQTT Device API](/docs/{{docsPrefix}}reference/mqtt-api/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

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

## Device connect API

Use this API to inform ThingsBoard that a device behind the Gateway is now connected and ready to exchange data.

**Topic:**

```shell
v1/gateway/connect
```
{: .copy-code}

**Payload:**

```shell
{"device": "Device A", "type": "Sensor A"}
```
{: .copy-code}
- **device** - required. The device name in ThingsBoard.
- **type** – optional. Name of the device profile. If omitted, the `default` device profile is used.

**Behavior:**

- If a device with the given name does not exist, ThingsBoard creates it automatically.
- If the device profile name is provided and the profile does not exist, ThingsBoard creates it automatically.
- Once connected, ThingsBoard routes the following events for this device through the Gateway:
  - Updates to shared attributes.
  - RPC commands.

{% capture difference %}
**Only for MQTT v.5**

It is recommended to wait for the PUBACK response to ensure that the device connection was successful.
If something goes wrong during the connection, for example, the device limit is exceeded, the PUBACK will return with 
the corresponding [status code](/docs/{{docsPrefix}}reference/mqtt-v5-errors-code/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Examples**

{% unless docsPrefix contains "paas/" %}

> ⚠️ In all examples on this page, the hostname refers to a **local** ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} installation.   
If your ThingsBoard{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %} Edge{% endif %} instance is deployed on a different host, replace <code>localhost</code> with the appropriate hostname or IP address.

{% endunless %}

> Don&#39;t forget to replace <code>$ACCESS_TOKEN</code> with your device&#39;s access token.

**Example 1.** Connect a device.

In order to inform ThingsBoard that device is connected to the Gateway, one needs to publish following message:

```bash
mosquitto_pub -h "{{mqttHostName}}" -t "v1/gateway/connect" -u "$ACCESS_TOKEN" -m '{"device": "Device A"}'
```
{: .copy-code}

**Example 2.** Connect a device with a specific device profile.

In order to inform ThingsBoard that device is connected to the Gateway with a specific device profile, one needs to 
publish following message:

```bash
mosquitto_pub -h "{{mqttHostName}}" -t "v1/gateway/connect" -u "$ACCESS_TOKEN" -m '{"device": "Device A", "type": "Sensor A"}'
```
{: .copy-code}

<hr>

## Device disconnect API

Use this API to inform ThingsBoard that a device behind the Gateway is no longer active.

**Topic:**

```shell
v1/gateway/disconnect
```
{: .copy-code}

**Payload:**

```shell
{"device": "Device A"}
```
{: .copy-code}

**Behavior:**

- If the device with the given name does not exist, ThingsBoard ignores the message.
- After processing this message, ThingsBoard stops sending attribute and RPC updates for that device to the Gateway.

{% capture difference %}
**Only for MQTT v.5**

If something goes wrong during the disconnecting, the PUBACK will return with the corresponding [status code](/docs/{{docsPrefix}}reference/mqtt-v5-errors-code/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Example**

> ⚠️ Replace <code>$ACCESS_TOKEN</code> with your device&#39;s access token.

Also, make sure that the device is connected before disconnecting it.

In order to inform ThingsBoard that device is disconnected from the Gateway, one needs to publish following message:

```bash
mosquitto_pub -h "{{mqttHostName}}" -t "v1/gateway/disconnect" -u "$ACCESS_TOKEN" -m '{"device": "Device A"}'
```
{: .copy-code}

<hr>

## Attributes API

ThingsBoard attributes API allows devices to:

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
- Upload [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} device attributes to the server.
- Request [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} and [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} device attributes from ThingsBoard platform.
- Subscribe to [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types){:target="_blank"} device attributes from ThingsBoard platform.
{% endif %}
{% if docsPrefix == "edge/" or docsPrefix == "pe/edge/" %}
- Upload [client-side](/docs/pe/user-guide/attributes/#attribute-types){:target="_blank"} device attributes to the server.
- Request [client-side](/docs/pe/user-guide/attributes/#attribute-types){:target="_blank"} and [shared](/docs/pe/user-guide/attributes/#attribute-types){:target="_blank"} device attributes from ThingsBoard platform.
- Subscribe to [shared](/docs/pe/user-guide/attributes/#attribute-types){:target="_blank"} device attributes from ThingsBoard platform.
{% endif %}

<hr>

### Publish attribute to ThingsBoard

Use this topic to publish client-side device attributes to ThingsBoard platform. All attributes in the payload 
are stored as client-side attributes for the corresponding devices.

**Topic:**

```shell
v1/gateway/attributes
```
{: .copy-code}

**Payload:**

```json
{
  "Device A": {
    "attribute1": "value1",
    "attribute2": 42
  },
  "Device B": {
    "attribute1": "value1",
    "attribute2": 42
  }
}
```
{: .copy-code}

**Behavior:**

- If the device with the given name does not exist, ThingsBoard creates it automatically with `default` profile name.
- If the attribute does not exist, it is created.
- If the attribute already exists, its value is updated.

{% capture difference %}
**Only for MQTT v.5**

If something goes wrong during the publishing, the PUBACK will return with the corresponding [status code](/docs/{{docsPrefix}}reference/mqtt-v5-errors-code/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Example**

> ⚠️ Replace <code>$ACCESS_TOKEN</code> with your device&#39;s access token.

In order to publish client-side device attributes to ThingsBoard platform, one needs to publish following message:

```bash
mosquitto_pub -h "{{mqttHostName}}" -t "v1/gateway/attributes" -u "$ACCESS_TOKEN" -m '{"Device A": { "fw_version": "1.0", "battery": 87 }}'
```
{: .copy-code}

<hr>

### Request attribute values from ThingsBoard

Use this API to request client-side or shared device attributes from ThingsBoard platform. Make attention that you 
need to subscribe to the response topic first in order to receive the response.

**Subscribe topic:**

```shell
v1/gateway/attributes/response
```
{: .copy-code}

**Publish topic:**

```shell
v1/gateway/attributes/request
```
{: .copy-code}

**Payload:**

```json
{
  "id": $request_id,
  "device": "Device A",
  "client": ["key1", "key2"],
  "shared": ["key3", "key4"]
}
```
{: .copy-code}

Fields:
- **id** – required. Your integer request identifier.
- **device** – required. The device name in ThingsBoard.
- **client** – optional. An array of client-side attribute keys to request.
- **shared** – optional. An array of shared attribute keys to request.

<hr>

### Subscribe to attribute updates from ThingsBoard

Use this topic to subscribe to shared device attribute changes. Take attention that you need to subscribe to the topic 
first in order to receive updates.

**Subscribe topic:**

```shell
v1/gateway/attributes
```
{: .copy-code}

**Response message format:**

```json
{
  "device": "Device A",
  "data": {
    "attribute1": "value1",
    "attribute2": 42
  }
}
```
{: .copy-code}

Fields:
- **device** – the device name in ThingsBoard.
- **data** – map of updated shared attributes.

<hr>

## Telemetry upload API

Use this API to publish telemetry for one or more devices in a single MQTT message.

**Topic:**

```shell
v1/gateway/telemetry
```
{: .copy-code}

**Payload:**

```json
{
  "Device A": [
    {
      "ts": 1483228800000,
      "values": {
        "temperature": 42,
        "humidity": 80
      }
    },
    {
      "ts": 1483228801000,
      "values": {
        "temperature": 43,
        "humidity": 82
      }
    }
  ],
  "Device B": [
    {
      "ts": 1483228800000,
      "values": {
        "temperature": 42,
        "humidity": 80
      }
    }
  ]
}
```
{: .copy-code}

Fields:
- **device** – required. The device name in ThingsBoard.
- **ts** – Unix timestamp in milliseconds.
- **values** – required. Key-value map of telemetry fields (e.g., temperature, humidity).

**Behavior:**

- If the device with the given name does not exist, ThingsBoard creates it automatically with `default` profile name.
- If the telemetry keys do not exist, they are created.
- Telemetry data is stored with the provided timestamps.

{% capture difference %}
**Only for MQTT v.5**

If something goes wrong during the publishing, the PUBACK will return with the corresponding [status code](/docs/{{docsPrefix}}reference/mqtt-v5-errors-code/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Example**

> ⚠️ Replace <code>$ACCESS_TOKEN</code> with your device&#39;s access token.

In order to publish device telemetry to ThingsBoard platform, one needs to publish following message:

```bash
mosquitto_pub -h "{{mqttHostName}}" -t "v1/gateway/telemetry" -u "$ACCESS_TOKEN" -m '{"Device A": [{"ts": 1700000000000, "values": {"temperature": 23.5, "humidity": 61 }}]}'
```
{: .copy-code}

<hr>

## RPC API

### Server-side RPC

Use this API to receive and respond to RPC commands from ThingsBoard for devices behind the Gateway.

**Subscribe topic:**

```shell
v1/gateway/rpc
```
{: .copy-code}

**Request message format:**

```shell
{"device": "Device A", "data": {"id": $request_id, "method": "toggle_gpio", "params": {"pin": 1}}}
```
{: .copy-code}

**Response topic:**

```shell
v1/gateway/rpc
```
{: .copy-code}

**Response message format:**

```shell
{"device": "Device A", "id": $request_id, "data": {"success": true}}
```
{: .copy-code}

Fields:
- **device** – the device name in ThingsBoard.
- **id** – your integer request identifier.
- **data** – response payload.

You need to subscribe to the request topic first in order to receive RPC commands. After processing the RPC command, 
you can publish the response message to the response topic.

{% capture difference %}
Make sure that device is connected via the Gateway to receive RPC commands for it.

Make attention that the **id** in the response message should match the **id** from the request message.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

<hr>

## Claiming devices API

ThingsBoard supports a claiming mechanism that allows end users to take ownership of pre-provisioned devices. For 
conceptual details, see [Claiming devices](/docs/{{docsPrefix}}user-guide/claiming-devices){:target="_blank"} guide.

**Topic:**

```shell
v1/gateway/claim
```
{: .copy-code}

**Payload:**

```json
{
  "Device A": {
    "secretKey": "value_A",
    "durationMs": 60000
  },
  "Device B": {
    "secretKey": "value_B",
    "durationMs": 60000
  }
}
```
{: .copy-code}

Per-device parameters:
- **secretKey** – optional. The secret key assigned to the device for claiming. If omitted, an empty string is used.
- **durationMs** – optional. Claiming duration in milliseconds. If omitted, the system parameter 
**device.claim.duration** is used (in the file **/etc/thingsboard/conf/thingsboard.yml**).

**Example**

> ⚠️ Replace <code>$ACCESS_TOKEN</code> with your device&#39;s access token.

Also, make sure that the device is connected before testing claiming.

In order to inform ThingsBoard platform to start claiming process for devices, one needs to publish following message:

```bash
mosquitto_pub -h "{{mqttHostName}}" -t "v1/gateway/claim" -u "$ACCESS_TOKEN" -m '{"Device A": {"secretKey": "mySecret", "durationMs": 60000}}'
```
{: .copy-code}

<hr>

## Protocol customization

MQTT transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/mqtt){:target="_blank"}.

<hr>

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
