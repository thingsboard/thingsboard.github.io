---
layout: docwithnav
title: ThingsBoard API reference
description: ThingsBoard API reference and supported IoT Protocols

---

ThingsBoard API consists of two main parts: device API and server-side API.

Device API is grouped by supported communication protocols:

* [**MQTT API**](/docs/reference/mqtt-api)
* [**CoAP API**](/docs/reference/coap-api)
* [**HTTP API**](/docs/reference/http-api)

[**Gateway MQTT API**](/docs/reference/gateway-mqtt-api) allows you to connect **existing** devices to the platform using **[ThingsBoard Gateway](/docs/iot-gateway/what-is-iot-gateway/)**
or implement your own gateway.

Server-side API is available as REST API:

* [**Administration REST API**](/docs/reference/rest-api) - The server-side core APIs.
* [**Attributes query API**](/docs/user-guide/attributes/#data-query-api) - The server-side APIs provided by [Telemetry Service](/docs/user-guide/attributes/).
* [**Timeseries query API**](/docs/user-guide/telemetry/#data-query-api) - The server-side APIs provided by [Telemetry Service](/docs/user-guide/telemetry/).
* [**RPC API**](/docs/user-guide/rpc/#server-side-rpc-api) - The server-side APIs provided by [RPC Service](/docs/user-guide/rpc/).
* [**REST Client**](/docs/reference/rest-client)
