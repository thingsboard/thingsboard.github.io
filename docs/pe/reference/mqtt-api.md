---
layout: docwithnav-pe
assignees:
- ashvayka
title: MQTT Device API Reference
description: Supported MQTT API Reference for IoT Devices
redirect_from: "/docs/pe/reference/mqtt-api"

server-side-rpc:
    0:
        image: /images/reference/device-connectivity-apis/server-side-rpc-mqtt-1-pe.png
        title: 'Use RPC debug terminal widget in your ThingsBoard instance'
    1:
        image: /images/reference/device-connectivity-apis/server-side-rpc-mqtt-2-pe.png
        title: 'Subscribe to RPC commands from the server'
    2:
        image: /images/reference/device-connectivity-apis/server-side-rpc-mqtt-3-pe.png
        title: 'Send an RPC request "connect" to the device using RPC debug terminal widget'
    4:
        image: /images/reference/device-connectivity-apis/server-side-rpc-mqtt-4-pe.png
        title: 'You should receive a response from the device'

client-side-rpc:
    0:
        image: /images/reference/device-connectivity-apis/client-side-rpc-1-pe.png
        title: 'Add two nodes to the Rule Chain: "script" and "rpc call reply"'
    1:
        image: /images/reference/device-connectivity-apis/client-side-rpc-2-pe.png
        title: 'In the script node enter the function: return {msg: {time:String(new Date())}, metadata: metadata, msgType: msgType};'
    2:
        image: /images/reference/device-connectivity-apis/client-side-rpc-3-pe.png
    3:
        image: /images/reference/device-connectivity-apis/client-side-rpc-mqtt-4-pe.png
        title: 'Send request to the server'
    4:
        image: /images/reference/device-connectivity-apis/client-side-rpc-mqtt-5-pe.png
        title: 'You should receive a response from the server'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/reference/mqtt-api.md %}
