To add a new device, click the "**plus**" icon:

![image](/images/gateway/bacnet-connector/bacnet-gateway-configuring-1-ce.png)

Provide the following fields in the opened model window:
- **Host** - the host of the device;
- **Port** - the port of the device;
- **Device name source** - the source of the device name, can be:
  - **Constant** - the device name is static;
  - **Expression** - the device name is an expression;
- **Device name value / expression** - the device name (you can find detail examples [here](/docs/iot-gateway/config/bacnet/#usage-examples));
- **Device profile source** - the source of the device profile, can be the same as the device name source;
- **Device profile value / expression** - the device profile name (you can find detail examples [here](/docs/iot-gateway/config/bacnet/#usage-examples));
- **Poll period** - the period of time when the connector will try to poll BACnet device;
- **Advanced configuration settings**:
  - **Alternative responses addresses** - the alternative address for responses from the device (you can find detail examples [here](/docs/iot-gateway/config/bacnet/#usage-examples)).
- **Report strategy** - strategy for sending data to ThingsBoard:
  - **Report period** - period for sending data to ThingsBoard in milliseconds;
  - **Type** - type of the report strategy:
    - **On report period** - sends data to ThingsBoard after the report period;
    - **On value change** - sends data to ThingsBoard when the value changes;
    - **On value change or report period** - sends data to ThingsBoard when the value changes or after the report period;
    - **On received** - sends data to ThingsBoard after receiving data from the device (default strategy).

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the
[Advanced configuration](/docs/iot-gateway/config/bacnet/#devices) section.

More usage examples can be found in the [Example usage](/docs/iot-gateway/config/bacnet/#usage-examples) section.

Additional information about the report strategy can be found [here](/docs/iot-gateway/features-overview/report-strategy){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/bacnet-connector/bacnet-gateway-configuring-2-ce.png)
