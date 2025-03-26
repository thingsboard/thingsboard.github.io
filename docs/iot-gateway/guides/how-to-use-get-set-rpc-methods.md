---
layout: docwithnav-gw
title: How to use built-in GET/SET RPC methods
description: How to use built-in GET/SET RPC methods

---

* TOC
{:toc}

Built-in GET/SET RPC methods provide a way to get and set the values of telemetry and attribute parameters values without 
additional configuration. The following connectors support built-in GET/SET RPC methods:

{% capture getSetConnectorRPCType %}
OPC-UA<small></small>%,%opcua%,%templates/iot-gateway/get-set-connector-rpc/opcua.md%br%
Modbus<small></small>%,%modbus%,%templates/iot-gateway/get-set-connector-rpc/modbus.md%br%
MQTT<small></small>%,%mqtt%,%templates/iot-gateway/get-set-connector-rpc/mqtt.md%br%
BACnet<small></small>%,%bacnet%,%templates/iot-gateway/get-set-connector-rpc/bacnet.md%br%
REST<small></small>%,%rest%,%templates/iot-gateway/get-set-connector-rpc/rest.md%br%
Request<small></small>%,%request%,%templates/iot-gateway/get-set-connector-rpc/request.md%br%
FTP<small></small>%,%ftp%,%templates/iot-gateway/get-set-connector-rpc/ftp.md%br%
Socket<small></small>%,%socket%,%templates/iot-gateway/get-set-connector-rpc/socket.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="getSetConnectorRPC" toggle-spec=getSetConnectorRPCType %}

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.