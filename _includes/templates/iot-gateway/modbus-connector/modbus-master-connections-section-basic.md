Due to the nature of preferred way of communication between Modbus master there are 3 options how to configure this 
part: if using TCP, UDP or via Serial port.

{% capture difference %} 
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/modbus/#device-mapping) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture modbusMasterConnectionsUDPTCPSerial %}
TCP<small></small>%,%tcp%,%templates/iot-gateway/modbus-connector/tcp-master-connections-section.md%br%
UDP<small></small>%,%udp%,%templates/iot-gateway/modbus-connector/udp-master-connections-section.md%br%
Serial<small></small>%,%serial%,%templates/iot-gateway/modbus-connector/serial-master-connections-section.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="modbusMasterConnectionsUDPTCPSerial" toggle-spec=modbusMasterConnectionsUDPTCPSerial %}
