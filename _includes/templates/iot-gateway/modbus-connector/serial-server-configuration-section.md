The following parameters are used to configure serial connection for Gateway as a Slave:

- **Port** - port of the Modbus server for connection.
- **Method** - type of application data unit, either **ASCII** or **RTU**.
- **Baudrate** - baud rate to use for the serial device.
- **Strict** - use inter-character timeout for baud rates <= 19200.
- **Unit ID** - ID of the current slave on Modbus.
- **Device name** - name of the current slave. **Don't use "Gateway" as the value of "Device name" parameter!**.
- **Device profile** - device profile of the current slave.
- **Poll period (ms)** - period in milliseconds for checking the attributes and telemetry.

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/modbus/#device-rpc-methods) section.

More usage examples can be found in the [Example usage](/docs/iot-gateway/config/modbus/#usage-examples-2) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/modbus-connector/serial-server-configuration-section-1-ce.png)
