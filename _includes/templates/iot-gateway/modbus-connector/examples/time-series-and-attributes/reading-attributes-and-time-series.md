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

We are interested in register `1`, which contains the relay state value (off/on).
To read the value of this register, we need to add this register as attribute/telemetry in the device configuration. 
To do this, follow these steps:

{% assign readingAttributeAndTimeseries = '
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/examples/select-created-gateway.png,
        title: Go to "**Entities**" → "**Gateways**" in the left sidebar and select your gateway.
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/examples/select-connector-configuration.png,
        title: Click on the "**Connectors configuration**" button on the right side menu.
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/examples/select-device-configuration.png,
        title: Select the created Modbus connector and click on the "**Master Connections**" tab. Make sure you have configured and connected device (if you don’t know how to do it, see [Getting Started](/docs/iot-gateway/getting-started/?connectorsCreation=modbus){:target="_blank"} guide or [Connection settings](/docs/iot-gateway/config/modbus/#connection-settings) and [Data mapping](/docs/iot-gateway/config/modbus/#data-mapping) sections of this guide). Click on the “**Pencil**” icon on a device you want to configure attribute updates for.
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/examples/reading-attributes-and-time-series-1.png,
        title: Scroll down to the "**Attributes** or **Time series**" section and click on the "**Pencil**" icon to edit the attributes and telemetry.
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/examples/reading-attributes-and-time-series-2.png,
        title: Click on the "**Add attribute**" or "**Add telemetry**" button. In our case, we will add `relay` time series, so fill in the "**Key**" field with `relay`, select the "**Type**" as **bits**, select "**Function code**" field as "**01 - Read Coils**", select "**Bit target type**" as "**Boolean**", and in the "**Address**" field enter `1`. This is the address of the Modbus register we want to read.
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/examples/reading-attributes-and-time-series-3.png,
        title: Remember to save your changes by clicking the "**Apply**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=readingAttributeAndTimeseries %}

Now we can check if the attribute/telemetry works. Go to "**Entities**" → "**Devices**" → select a created
device → "**Last telemetry**" tab and check the value of the `relay` telemetry. It should be `false` since the 
default value of the relay is off.

![image](https://img.thingsboard.io/gateway/modbus-connector/examples/reading-attributes-and-time-series-4.png)

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
        "byteOrder": "LITTLE",
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
            "tag": "relay",
            "type": "bits",
            "address": 1,
            "objectsCount": 1,
            "functionCode": 1,
            "bitTargetType": "bool"
          }
        ],
        "attributeUpdates": [],
        "rpc": []
      }
    ]
  }
}
```
