{% capture connectivityContent %}
ThingsBoard provides a lot of device connectivity options. The diagram below is designed to provide a visual overview of existing options and help you to choose the correct option for your devices. 
In case you have not found out how to connect your device using the diagram or something is not clear, please [contact us](/docs/contact-us/) and help us to improve this guide.
{% endcapture %}
{% include templates/info-banner.md content=connectivityContent %}

<object width="100%" style="max-width: max-content;" data="https://img.thingsboard.io/connectivity.svg"></object>

{% assign peDocsPrefix = '' %}
{% if docsPrefix == 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% endif %}

#### Connecting well-known devices

You can check the [Devices library](/docs/{{docsPrefix}}devices-library) section to explore how to connect widely used devices to ThingsBoard.

#### Built-in transport protocols

The built-in transport protocol implementations are applicable for devices that communicate over those protocols and are able to connect directly to ThingsBoard.

- [MQTT API reference](/docs/{{docsPrefix}}reference/mqtt-api)
- [MQTT Sparkplug API reference](/docs/{{docsPrefix}}reference/mqtt-sparkplug-api)
- [CoAP API reference](/docs/{{docsPrefix}}reference/coap-api)
- [HTTP API reference](/docs/{{docsPrefix}}reference/http-api)
- [LwM2M API reference](/docs/{{docsPrefix}}reference/lwm2m-api)
- [SNMP API reference](/docs/{{docsPrefix}}reference/snmp-api)

Most of the protocols above support JSON, Protobuf or own data format. This is the best option for new devices when you have control over the firmware.

#### IoT Gateway

ThingsBoard IoT Gateway helps to connect devices that are located in the local network and do not have access to the internet or use specific non-IP protocols.
IoT Gateway supports MQTT, OPC-UA, Modbus, BLE, HTTP, CAN, BACnet, ODBC, SNMP and other protocols.
The gateway converts the data from devices to internal ThingsBoard format and upload it over MQTT to the platform.
See [What is IoT Gateway?](/docs/iot-gateway/what-is-iot-gateway/) for more info.

#### LoRaWAN

It is possible to integrate ChirpStack network server with ThingsBoard Community Edition using this [guide](https://www.chirpstack.io/application-server/integrations/thingsboard/).

[ThingsBoard PE](/products/thingsboard-pe/) supports ChirpStack and many other network servers via [Integrations](/docs/{{peDocsPrefix}}user-guide/integrations/).
For example: [TheThingsStack](/docs/{{peDocsPrefix}}user-guide/integrations/ttn/), [TheThingsIndustries](/docs/{{peDocsPrefix}}user-guide/integrations/tti/),
[LORIOT](/docs/{{peDocsPrefix}}user-guide/integrations/loriot/),
[Actility ThingPark](/docs/{{peDocsPrefix}}user-guide/integrations/thingpark/) or any other network server that supports the [webhooks](/docs/{{peDocsPrefix}}user-guide/integrations/http/) or [mqtt](/docs/{{peDocsPrefix}}user-guide/integrations/mqtt/).
Big advantage of ThingsBoard PE integrations is the ability to define custom [data converter](/docs/{{peDocsPrefix}}user-guide/integrations/#data-converters) functions.

#### Sigfox

[ThingsBoard PE](/products/thingsboard-pe/) supports Sigfox [integration](/docs/{{peDocsPrefix}}user-guide/integrations/sigfox/) out-of-the-box.

#### NB IoT and other protocols

[ThingsBoard PE](/products/thingsboard-pe/) supports many [Integrations](/docs/{{peDocsPrefix}}user-guide/integrations/) that cover most of the devices on the market.
Please [contact us](/docs/contact-us/) if you need help to connect your device.
