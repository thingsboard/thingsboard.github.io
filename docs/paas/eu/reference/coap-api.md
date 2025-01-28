---
layout: docwithnav-paas-eu
assignees:
- ashvayka
title: CoAP Device API Reference 
description: Supported CoAP API Reference for IoT Devices
redirect_from: "/docs/paas/eu/reference/coap-api"

server-side-rpc:
    0:
        image: /images/reference/device-connectivity-apis/server-side-rpc-coap-1-paas.png 
        title: 'Use RPC debug terminal widget in your ThingsBoard instance'
    1:
        image: /images/reference/device-connectivity-apis/server-side-rpc-coap-2-paas-eu.png
        title: 'Subscribe to RPC commands from the server. To do this, in the first terminal window send GET request with observe flag'
    2:
        image: /images/reference/device-connectivity-apis/server-side-rpc-coap-3-paas.png
        title: 'Send an RPC request "connect" to the device using RPC debug terminal widget'
    3:
        image: /images/reference/device-connectivity-apis/server-side-rpc-coap-4-paas-eu.png
        title: 'In the second terminal window simulate send a response from the device to the server'
    4:
        image: /images/reference/device-connectivity-apis/server-side-rpc-coap-5-paas.png
        title: 'You should receive a response from the device: {"result":"ok"}'

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
        image: /images/reference/device-connectivity-apis/client-side-rpc-coap-4-paas-eu.png
        title: 'Send request to the server'
    4:
        image: /images/reference/device-connectivity-apis/client-side-rpc-coap-5-paas-eu.png
        title: 'You should receive a response from the server'

server-side-rpc-certificate:
    0:
        image: /images/reference/device-connectivity-apis/server-side-rpc-coap-1-paas.png
        title: 'Use RPC debug terminal widget in your ThingsBoard instance'
    1:
        image: /images/reference/device-connectivity-apis/server-side-rpc-coap-certificate-2-paas-eu.png
        title: 'Subscribe to RPC commands from the server. To do this, in the first terminal window send GET request with observe flag'
    2:
        image: /images/reference/device-connectivity-apis/server-side-rpc-coap-3-paas.png
        title: 'Send an RPC request "connect" to the device using RPC debug terminal widget'
    3:
        image: /images/reference/device-connectivity-apis/server-side-rpc-coap-certificate-4-paas-eu.png
        title: 'In the second terminal window simulate send a response from the device to the server'
    4:
        image: /images/reference/device-connectivity-apis/server-side-rpc-coap-5-paas.png
        title: 'You should receive a response from the device: {"result":"ok"}'

client-side-rpc-certificate:
    0:
        image: /images/reference/device-connectivity-apis/client-side-rpc-1-paas.png
        title: 'Add two nodes to the Rule Chain: "script" and "rpc call reply"'
    1:
        image: /images/reference/device-connectivity-apis/client-side-rpc-2-paas.png
        title: 'In the script node enter the function: return {msg: {time:String(new Date())}, metadata: metadata, msgType: msgType};'
    2:
        image: /images/reference/device-connectivity-apis/client-side-rpc-3-paas.png
    3:
        image: /images/reference/device-connectivity-apis/client-side-rpc-coap-certificate-4-paas-eu.png
        title: 'Send request to the server'
    4:
        image: /images/reference/device-connectivity-apis/client-side-rpc-coap-certificate-5-paas-eu.png
        title: 'You should receive a response from the server'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/reference/coap-api.md %}
