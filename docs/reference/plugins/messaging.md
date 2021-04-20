---
layout: docwithnav
assignees:
- ashvayka
title: Device Messaging Plugin

---

{% include templates/old-guide-notice.md %}

## Overview

This RPC plugin enables communication between various IoT devices through the ThingsBoard cluster.
The plugin introduces basic security features: devices are able to exchange messages only if they belong to the same customer.
The plugin implementation can be customized to cover more complex security features. 

## Configuration

You can specify following configuration parameters:

 - Maximum amount of devices per customer
 - Default request timeout
 - Maximum request timeout 

## Device RPC API

The plugin handles two rpc methods: *getDevices* and *sendMsg*.
The examples listed below will be based on [demo account](/docs/samples/demo-account/) and [MQTT](/docs/reference/mqtt-api/#client-side-rpc) protocol. 
Please note that you are able to use other protocols - 
[CoAP](/docs/reference/coap-api/#client-side-rpc) and [HTTP](/docs/reference/http-api/#client-side-rpc).
 
##### Get Device List API

In order to send a message to other devices, you will need to know their identifiers.
A device can request a list of other devices that belong to the same customer using *getDevices* RPC call.

{% capture tabspec %}mqtt-get-device-list
A,mqtt-get-device-list.sh,shell,resources/mqtt-get-device-list.sh,/docs/reference/plugins/resources/mqtt-get-device-list.sh
B,mqtt-get-device-list.js,javascript,resources/mqtt-get-device-list.js,/docs/reference/plugins/resources/mqtt-get-device-list.js
C,response.json,javascript,resources/mqtt-get-device-list.json,/docs/reference/plugins/resources/mqtt-get-device-list.json{% endcapture %}
{% include tabs.html %}

##### Send Message API

A device can send a message to other device that belongs to the same customer using *sendMsg* RPC call.

The example below will attempt to send a message from device "Test Device A1" to device "Test Device A2". 

{% capture tabspec %}mqtt-send-msg-fail
A,mqtt-send-msg.sh,shell,resources/mqtt-send-msg.sh,/docs/reference/plugins/resources/mqtt-send-msg.sh
B,mqtt-send-msg.js,javascript,resources/mqtt-send-msg.js,/docs/reference/plugins/resources/mqtt-send-msg.js{% endcapture %}
{% include tabs.html %}

As a result, you should receive the following error:

```json
{"error":"No active connection to the remote device!"}
```

Let's launch emulator of target device and send message again:
{% capture tabspec %}mqtt-receive-msg
A,mqtt-receive-msg.sh,shell,resources/mqtt-receive-msg.sh,/docs/reference/plugins/resources/mqtt-receive-msg.sh
B,mqtt-receive-msg.js,javascript,resources/mqtt-receive-msg.js,/docs/reference/plugins/resources/mqtt-receive-msg.js{% endcapture %}
{% include tabs.html %}

As a result, you should receive following response from device:

```json
{"status":"ok"}
```

**Note** that target device id, access tokens, request and response bodies are hardcoded into scripts and correspond to the [demo devices](/docs/samples/demo-account/#tenant-devices).   

## Example

As a tenant administrator, you are able to review plugin example inside **Plugins->Demo Device Messaging RPC Plugin**.