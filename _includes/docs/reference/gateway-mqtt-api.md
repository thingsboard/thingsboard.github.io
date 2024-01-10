
* TOC
{:toc}

## Introduction

The Gateway is a special type of device in ThingsBoard that is able to act as a bridge between external devices connected to different systems and ThingsBoard.
Gateway API provides the ability to exchange data between **multiple devices** and the platform using **single MQTT connection**.
The Gateway also acts as a ThingsBoard device and can leverage existing [MQTT Device API](/docs/{{docsPrefix}}reference/mqtt-api/) to report stats, receive configuration updates and much more.

The API listed below is used by [**ThingsBoard open-source IoT Gateway**](/docs/iot-gateway/what-is-iot-gateway/).

## Basic MQTT API

Please refer to generic [MQTT Device API](/docs/{{docsPrefix}}reference/mqtt-api/) to get information about data format, authentication options, etc.

## Device Connect API

In order to inform ThingsBoard that device is connected to the Gateway, one needs to publish following message:

```shell
Topic: v1/gateway/connect
Message: {"device":"Device A"}
```
{: .copy-code}

where **Device A** is your device name.

Once received, ThingsBoard will lookup or create a device with the name specified.
Also, ThingsBoard will publish messages about new attribute updates and RPC commands for a particular device to this Gateway.

## Device Disconnect API

In order to inform ThingsBoard that device is disconnected from the Gateway, one needs to publish following message:

```shell
Topic: v1/gateway/disconnect
Message: {"device":"Device A"}
```
{: .copy-code}

where **Device A** is your device name.

Once received, ThingsBoard will no longer publish updates for this particular device to this Gateway.

## Attributes API

ThingsBoard attributes API allows devices to

* Upload [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes to the server.
* Request [client-side](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) and [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes from the server.
* Subscribe to [shared](/docs/{{docsPrefix}}user-guide/attributes/#attribute-types) device attributes from the server.

##### Publish attribute update to the server

In order to publish client-side device attributes to ThingsBoard server node, send PUBLISH message to the following topic:

```shell
Topic: v1/gateway/attributes
Message: {"Device A":{"attribute1":"value1", "attribute2": 42}, "Device B":{"attribute1":"value1", "attribute2": 42}}
```
{: .copy-code}

where **Device A** and **Device B** are your device names, **attribute1** and **attribute2** are attribute keys.

##### Request attribute values from the server

In order to request client-side or shared device attributes to ThingsBoard server node, send PUBLISH message to the following topic:

```shell
Topic: v1/gateway/attributes/request
Message: {"id": $request_id, "device": "Device A", "client": true, "key": "attribute1"}
```
{: .copy-code}

where **$request_id** is your integer request identifier, **Device A** is your device name, **client** identifies a client or shared attribute scope and **key** is the attribute key.

Before sending PUBLISH message with the request, client needs to subscribe to 

```shell
Topic: v1/gateway/attributes/response
```
{: .copy-code}

and expect messages with result in the following format:

```shell
Message: {"id": $request_id, "device": "Device A", "value": "value1"}
```

##### Subscribe to attribute updates from the server

In order to subscribe to shared device attribute changes, send SUBSCRIBE message to the following topic:

```shell
v1/gateway/attributes
```
{: .copy-code}

and expect messages with result in the following format:

```shell
Message: {"device": "Device A", "data": {"attribute1": "value1", "attribute2": 42}}
```

## Telemetry upload API

In order to publish device telemetry to ThingsBoard server node, send PUBLISH message to the following topic:

```shell
Topic: v1/gateway/telemetry
```
{: .copy-code}

Message:

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

where **Device A** and **Device B** are your device names, **temperature** and **humidity** are telemetry keys and **ts** is unix timestamp in milliseconds.

## RPC API

### Server-side RPC

In order to subscribe to RPC commands from the server, send SUBSCRIBE message to the following topic:

```shell
v1/gateway/rpc
```
{: .copy-code}

and expect messages with individual commands in the following format:

```shell
{"device": "Device A", "data": {"id": $request_id, "method": "toggle_gpio", "params": {"pin":1}}}
```

Once command is processed by device, gateway can send commands back using following format:

```shell
{"device": "Device A", "id": $request_id, "data": {"success": true}}
```
{: .copy-code}

where **$request_id** is your integer request identifier, **Device A** is your device name and **method** is your RPC method name. 

## Claiming devices API

Please see the corresponding article to get more information about the [Claiming devices](/docs/{{docsPrefix}}user-guide/claiming-devices) feature.

In order to initiate claiming device, send PUBLISH message to the following topic:

```shell
Topic: v1/gateway/claim
```
{: .copy-code}

Message:

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

where **Device A** and **Device B** are your device names, **secretKey** and **durationMs** are optional keys.
In case the **secretKey** is not specified, the empty string as a default value is used.
In case the **durationMs** is not specified, the system parameter **device.claim.duration** is used (in the file **/etc/thingsboard/conf/thingsboard.yml**).

## Protocol customization

MQTT transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/mqtt).

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
