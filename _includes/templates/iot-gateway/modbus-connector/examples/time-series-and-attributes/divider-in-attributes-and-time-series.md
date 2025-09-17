As an example, we will use ThingsBoard Modbus Demo Server, which can be run using Docker and the following command:

```bash
docker run -it -p 5021:5021 thingsboard/tb-gw-modbus-server:latest
```
{:.copy-code}

The server available at `0.0.0.0:5021`. The server has the following structure:

| Variable Name  | Register Type   | Data Type  | Address    |
|:---------------|:----------------|------------|:-----------|
| Temperature    | Holding         | 16int      | 0          |
| Humidity       | Holding         | 16int      | 1          |
| Power          | Holding         | 16int      | 2          |
| Pressure       | Holding         | 16int      | 3          |
| Relay          | Coil            | bits       | 1          |
| -------------- | --------------- | ---------- | ---------- |

A fairly common practice when using Modbus devices is when the values we get from registers need to be divided by a 
certain number to get the correct value. For example, if we read the temperature from a register and the value in 
the register is `2534`, and we need to get `25.34` degrees, then we need to divide the value by 100.
To implement this in the device configuration, we can use the "Divider" field in the attributes and telemetry settings.
To read the register value with a divider, follow these steps:

{% assign multiplierInAttributesAndTimeseries = '
    ===
        image: /images/gateway/modbus-connector/examples/select-created-gateway.png,
        title: Go to "**Entities**" → "**Gateways**" in the left sidebar and select your gateway.
    ===
        image: /images/gateway/modbus-connector/examples/select-connector-configuration.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: /images/gateway/modbus-connector/examples/select-device-configuration.png,
        title: Select the created Modbus connector and click on the "**Master Connections**" tab. Make sure you have configured and connected device (if you don’t know how to do it, see [Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=modbus){:target="_blank"} guide or [Connection settings](/docs/iot-gateway/config/modbus/#connection-settings) and [Data mapping](/docs/iot-gateway/config/modbus/#data-mapping) sections of this guide). Click on the “**Pencil**” icon on a device you want to configure attribute updates for.
    ===
        image: /images/gateway/modbus-connector/examples/reading-attributes-and-time-series-1.png,
        title: Scroll down to the "**Attributes** or **Time series**" section and click on the "**Pencil**" icon to edit the attributes and telemetry.
    ===
        image: /images/gateway/modbus-connector/examples/divider-attributes-and-time-series-1.png,
        title: Click on the "**Add attribute**" or "**Add telemetry**" button. In our case, we will add `temperature` time series, so fill in the "**Key**" field with `temperature`, select the "**Type**" as **16int**, select "**Function code**" field as "**03 - Read Holding Registers**", in the "**Address**" field enter `0`, enable "**Modifier**" toggle, select "**Divider**" as "**Type**" and enter `10` in "**Value**" field.
    ===
        image: /images/gateway/modbus-connector/examples/divider-attributes-and-time-series-2.png,
        title: Remember to save your changes by clicking the "**Apply**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=multiplierInAttributesAndTimeseries %}

Now we can check if the telemetry with the divider works. Go to "**Entities**" → "**Devices**" → select a created 
device → "**Last telemetry**" tab and check the value of the `temperature` telemetry.

![image](/images/gateway/modbus-connector/examples/divider-attributes-and-time-series-3.png)

Full configuration for Modbus connector for the example above will look like this:

```json
{
  "master": {
    "slaves": [
      {
        "host": "0.0.0.0",
        "port": 5021,
        "method": "socket",
        "unitId": 1,
        "deviceName": "Demo Device",
        "deviceType": "default",
        "timeout": 35,
        "byteOrder": "BIG",
        "wordOrder": "LITTLE",
        "retries": true,
        "retryOnEmpty": true,
        "retryOnInvalid": true,
        "pollPeriod": 1000,
        "connectAttemptTimeMs": 500,
        "connectAttemptCount": 5,
        "waitAfterFailedAttemptsMs": 30000,
        "type": "tcp",
        "attributes": [],
        "timeseries": [
          {
            "tag": "temperature",
            "type": "16int",
            "address": 0,
            "objectsCount": 1,
            "functionCode": 3,
            "divider": 10
          }
        ],
        "attributeUpdates": [],
        "rpc": []
      }
    ]
  }
}
```
