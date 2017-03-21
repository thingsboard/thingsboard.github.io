---
layout: docwithnav
title: Thingsboard API reference
description: Thingsboard API reference and supported IoT Protocols

---

Thingsboard API consist of two main parts: device API and server-side API. 

Device API is grouped by supported communication protocols:

* [**MQTT API**](/docs/reference/mqtt-api)
* [**CoAP API**](/docs/reference/coap-api)
* [**HTTP API**](/docs/reference/http-api)

[**Gateway MQTT API**](/docs/reference/gateway-mqtt-api) allows you to connect **existing** devices to the platform using **[Thingsboard Gateway](/docs/iot-gateway/what-is-iot-gateway/)** 
or implement your own gateway.

Server-side API consist of core REST API and a set of specific APIs that are provided by various plugins:

* [**Administration REST API**](/docs/reference/rest-api) - The server-side core APIs.
* [**Attributes query API**](/docs/user-guide/attributes/#data-query-api) - The server-side APIs provided by [Telemetry plugin](/docs/reference/plugins/telemetry/).
* [**Timeseries query API**](/docs/user-guide/telemetry/#data-query-api) - The server-side APIs provided by [Telemetry plugin](/docs/reference/plugins/telemetry/).
* [**RPC API**](/docs/user-guide/rpc/#server-side-rpc-api) - The server-side APIs provided by [RPC plugin](/docs/reference/plugins/rpc/).
