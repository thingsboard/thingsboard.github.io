RPC to Device allows sending RPC commands to the device that is connected to ThingsBoard directly 
or via Gateway.

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

We are interested to get temperature value from our demo device using RPC to Device.
To call this method, first, we need to configure the Modbus connector to support RPC calls. For this purpose, follow
these steps:

{% assign rpcToDevice = '
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
        image: /images/gateway/modbus-connector/examples/rpc-to-device-1.png,
        title: Scroll down to the "**RPC requests**" section and click on the "**Pencil**" icon to edit the RPC methods.
    ===
        image: /images/gateway/modbus-connector/examples/rpc-to-device-2.png,
        title: Click on the "**Add request**" button. Fill in the "**Method**" field with `getTemperature`, select the "Type" as "16int", "**Function code**" as "**03 - Read Multiple Holding Registers**", fill in the "Objects count" field with `1`, and in the "**Address**" field enter "**0**".
    ===
        image: /images/gateway/modbus-connector/examples/rpc-to-device-3.png,
        title: Remember to save your changes by clicking the "**Apply**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=rpcToDevice %}

We are done with configuration, so let's check how to call the method. In the RPC Debug Terminal widget, run the 
following command:

```bash
getTemperature
```

Response:

![image](/images/gateway/modbus-connector/examples/rpc-to-device-4.png)

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
            "tag": "some_key",
            "type": "16int",
            "address": 0,
            "objectsCount": 1,
            "functionCode": 3
          }
        ],
        "attributeUpdates": [],
        "rpc": [
          {
            "tag": "getTemperature",
            "type": "16int",
            "address": 0,
            "objectsCount": 1,
            "functionCode": 3
          }
        ]
      }
    ]
  }
}
```
