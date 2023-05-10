
ThingsBoard API consists of two main parts: device API and server-side API.

Device API is grouped by supported communication protocols:

* [**MQTT API**](/docs/{{docsPrefix}}reference/mqtt-api)
* [**MQTT Sparkplug API**](/docs/{{docsPrefix}}reference/mqtt-sparkplug-api)  
* [**CoAP API**](/docs/{{docsPrefix}}reference/coap-api)
* [**HTTP API**](/docs/{{docsPrefix}}reference/http-api)
* [**LWM2M API**](/docs/{{docsPrefix}}reference/lwm2m-api)
* [**SNMP API**](/docs/{{docsPrefix}}reference/snmp-api)

[**Gateway MQTT API**](/docs/{{docsPrefix}}reference/gateway-mqtt-api) allows you to connect **existing** devices to the platform using **[ThingsBoard Gateway](/docs/iot-gateway/what-is-iot-gateway/)**
or implement your own gateway.

{% if docsPrefix != "edge/" and docsPrefix != "pe/edge/" %}

Server-side API is available as REST API:

* [**Administration REST API**](/docs/{{docsPrefix}}reference/rest-api) - The server-side core APIs.
* [**Attributes query API**](/docs/{{docsPrefix}}user-guide/attributes/#data-query-api) - The server-side APIs provided by [Telemetry Service](/docs/{{docsPrefix}}user-guide/attributes/).
* [**Timeseries query API**](/docs/{{docsPrefix}}user-guide/telemetry/#data-query-api) - The server-side APIs provided by [Telemetry Service](/docs/{{docsPrefix}}user-guide/telemetry/).
* [**RPC API**](/docs/{{docsPrefix}}user-guide/rpc/#server-side-rpc-api) - The server-side APIs provided by [RPC Service](/docs/{{docsPrefix}}user-guide/rpc/).
* [**REST Client**](/docs/{{docsPrefix}}reference/rest-client)
* [**Python REST Client**](/docs/{{docsPrefix}}reference/python-rest-client)
* [**Dart API Client**](/docs/{{docsPrefix}}reference/dart-client)

Software development kits:

* [**Python Client SDK**](/docs/{{docsPrefix}}reference/python-client-sdk) - Software development kit for client-side integration of your Python projects.

{% endif %}