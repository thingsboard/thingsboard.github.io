To add new configuration for connection to server, navigate to the "Master Connections" tab and click the "plus" icon:

![image](https://img.thingsboard.io/gateway/modbus-connector/add-new-server-connection-1-ce.png)

Due to the nature of preferred way of communication between Modbus master there are 2 options how to configure this part: if using TCP, UDP or via Serial port.

{% capture modbusMasterConnectionsUDPTCPSerial %}
TCP<small></small>%,%tcp%,%templates/iot-gateway/modbus-connector/tcp-master-connections-section.md%br%
UDP<small></small>%,%udp%,%templates/iot-gateway/modbus-connector/udp-master-connections-section.md%br%
Serial<small></small>%,%serial%,%templates/iot-gateway/modbus-connector/serial-master-connections-section.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="modbusMasterConnectionsUDPTCPSerial" toggle-spec=modbusMasterConnectionsUDPTCPSerial %}