Due to the nature of preferred way of communication between Modbus master there are 2 options how to configure this part: if using TCP/UDP or via Serial port.

![image](https://img.thingsboard.io/gateway/modbus-connector/server-slave-configuration-advanced.png)

{% capture modbusserverconfigurationsection %}
TCP<small></small>%,%tcp%,%templates/iot-gateway/modbus-connector/tcp-server-configuration-section-advanced.md%br%
UDP<small></small>%,%udp%,%templates/iot-gateway/modbus-connector/udp-server-configuration-section-advanced.md%br%
Serial<small></small>%,%serial%,%templates/iot-gateway/modbus-connector/serial-server-configuration-section-advanced.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="modbusserverconfigurationsection" toggle-spec=modbusserverconfigurationsection %}