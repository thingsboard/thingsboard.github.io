The following parameters are used to configure TCP connection for Gateway as a Slave:

- **Host** - hostname or IP address of the Modbus server.
- **Port** - port of the Modbus server for connection.
- **Method** - type of a framer, either **Socket** or **RTU**.
- **Unit ID** - ID of the current slave on Modbus.
- **Device name** - name of the current slave. **Don't use "Gateway" as the value of "Device name" parameter!**
- **Device profile** - device profile of the current slave.
- **Poll period (ms)** - period in milliseconds for checking the attributes and telemetry.

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/modbus/#device-rpc-methods) section.

More usage examples can be found in the [Example usage](/docs/iot-gateway/config/modbus/#usage-examples-2) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](https://img.thingsboard.io/gateway/modbus-connector/tcp-server-configuration-section-1-ce.png)
