---
layout: docwithnav
assignees:
- ashvayka
title: MQTT Device API Reference
description: Supported MQTT API Reference for IoT Devices
redirect_from: "/docs/reference/mqtt-api"

server-side-rpc:
    0:
        image: /images/reference/device-connectivity-apis/server-side-rpc-mqtt-1-ce.png
        title: 'Use RPC debug terminal widget in your ThingsBoard instance'
    1:
        image: /images/reference/device-connectivity-apis/server-side-rpc-mqtt-2-ce.png
        title: 'Subscribe to RPC commands from the server'
    2:
        image: /images/reference/device-connectivity-apis/server-side-rpc-mqtt-3-ce.png
        title: 'Send an RPC request "connect" to the device using RPC debug terminal widget'
    4:
        image: /images/reference/device-connectivity-apis/server-side-rpc-mqtt-4-ce.png
        title: 'You should receive a response from the device'

client-side-rpc:
    0:
        image: /images/reference/device-connectivity-apis/client-side-rpc-1-ce.png
        title: 'Add two nodes to the Rule Chain: "script" and "rpc call reply"'
    1:
        image: /images/reference/device-connectivity-apis/client-side-rpc-2-ce.png
        title: 'In the script node enter the function: return {msg: {time:String(new Date())}, metadata: metadata, msgType: msgType};'
    2:
        image: /images/reference/device-connectivity-apis/client-side-rpc-3-ce.png
    3:
        image: /images/reference/device-connectivity-apis/client-side-rpc-mqtt-4-ce.png
        title: 'Send request to the server'
    4:
        image: /images/reference/device-connectivity-apis/client-side-rpc-mqtt-5-ce.png
        title: 'You should receive a response from the server'

---

{% include get-hosts-name.html %}
{% include docs/reference/mqtt-api.md %}
