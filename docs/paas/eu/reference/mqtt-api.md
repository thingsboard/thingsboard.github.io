---
layout: docwithnav-paas-eu
assignees:
- ashvayka
title: MQTT Device API Reference
description: Supported MQTT API Reference for IoT Devices
redirect_from: "/docs/paas/eu/reference/mqtt-api"

server-side-rpc:
    0:
        image: /images/reference/device-connectivity-apis/server-side-rpc-mqtt-1-paas.png
        title: 'Use RPC debug terminal widget in your ThingsBoard instance'
    1:
        image: /images/reference/device-connectivity-apis/server-side-rpc-mqtt-2-paas.png
        title: 'Subscribe to RPC commands from the server'
    2:
        image: /images/reference/device-connectivity-apis/server-side-rpc-mqtt-3-paas.png
        title: 'Send an RPC request "connect" to the device using RPC debug terminal widget'
    4:
        image: /images/reference/device-connectivity-apis/server-side-rpc-mqtt-4-paas.png
        title: 'You should receive a response from the device'

client-side-rpc:
    0:
        image: /images/reference/device-connectivity-apis/client-side-rpc-1-paas.png
        title: 'Add two nodes to the Rule Chain: "script" and "rpc call reply"'
    1:
        image: /images/reference/device-connectivity-apis/client-side-rpc-2-paas.png
        title: 'In the script node enter the function: return {msg: {time:String(new Date())}, metadata: metadata, msgType: msgType};'
    2:
        image: /images/reference/device-connectivity-apis/client-side-rpc-3-paas.png
    3:
        image: /images/reference/device-connectivity-apis/client-side-rpc-mqtt-4-paas.png
        title: 'Send request to the server'
    4:
        image: /images/reference/device-connectivity-apis/client-side-rpc-mqtt-5-paas.png
        title: 'You should receive a response from the server'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/reference/mqtt-api.md %}
