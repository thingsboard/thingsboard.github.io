Due to the nature of preferred way of communication between Modbus master there are 3 options how to configure this 
part: TCP, UDP or via Serial port.

![image](/images/gateway/modbus-connector/server-slave-configuration-basic.png)

{% capture modbusserverconfigurationsection %}
TCP<small></small>%,%tcp%,%templates/iot-gateway/modbus-connector/tcp-server-configuration-section.md%br%
UDP<small></small>%,%udp%,%templates/iot-gateway/modbus-connector/udp-server-configuration-section.md%br%
Serial<small></small>%,%serial%,%templates/iot-gateway/modbus-connector/serial-server-configuration-section.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="modbusserverconfigurationsection" toggle-spec=modbusserverconfigurationsection %}
