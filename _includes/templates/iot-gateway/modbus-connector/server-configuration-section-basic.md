Due to the nature of preferred way of communication between Modbus master there are 2 options how to configure this part: if using TCP/UDP or via Serial port.

![image](https://img.thingsboard.io/gateway/modbus-connector/server-slave-configuration-basic.png)

{% capture modbusserverconfigurationsection %}
TCP<small></small>%,%tcp%,%templates/iot-gateway/modbus-connector/tcp-server-configuration-section.md%br%
UDP<small></small>%,%udp%,%templates/iot-gateway/modbus-connector/udp-server-configuration-section.md%br%
Serial<small></small>%,%serial%,%templates/iot-gateway/modbus-connector/serial-server-configuration-section.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="modbusserverconfigurationsection" toggle-spec=modbusserverconfigurationsection %}