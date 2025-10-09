Attribute updates allow you to update register values in the Modbus server. You can add new attribute updates in the 
“**Attribute updates**” section of the device configuration page.

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

We are interested in register “**1**”, we added this register as a telemetry parameter with the key `relay`. We used 
telemetry so that later it would be convenient for us to see if the value we changed using the attribute update 
has changed. You, also, can add this telemetry datapoint to the device configuration or use the reserved `get` method 
to check the value of the node.

Let’s add an attribute update to our configuration. For this purpose, follow these steps:

{% assign attributeUpdates = '
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
        image: /images/gateway/modbus-connector/examples/connector-configuration-attribute-updates-1.png,
        title: Scroll down to the “**Attribute updates**” section and click on the “**Pencil**” icon to edit the attribute updates.
    ===
        image: /images/gateway/modbus-connector/examples/connector-configuration-attribute-updates-2.png,
        title: Click on the “**Add attribute update**” button. In our case, we will add `relay` attribute update, so the “**Key**” field, enter `relay`, select the “**Type**” as **bits**, "**Function code**" as "**05 - Write Single Coil**", fill in the "**Objects count**" field with `1`, select "**Bit target type**" as "**Boolean**" and in the "**Address**" field enter "**1**".
    ===
        image: /images/gateway/modbus-connector/examples/connector-configuration-3.png,
        title: Remember to save your changes by clicking the “**Apply**” button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=attributeUpdates %}

Now we can check if the attribute update works. Go to "**Entities**" → "**Devices**" → select a created 
device → "**Attributes**" tab → select "**Shared attributes**" → click on the "**+**" icon and add `relay` attribute 
with type "**Boolean**" set it to "**True**".

{% assign attributeUpdates2 = '
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-relative-path-4.png,
    ===
        image: /images/gateway/opc-ua-connector/examples/attribute-updates-relative-path-5.png,
'
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=attributeUpdates2 %}

Now, let’s check the value of the relay register. In the selected device, go to the "**Last telemetry**" tab and 
check the value of the `relay` telemetry. It should be `true` since we set the shared attribute to `true`.

![image](/images/gateway/modbus-connector/examples/result-device-overview-1.png)

Try to change the value of the `relay` shared attribute to `false`. After a few seconds, you should see that the
`relay` telemetry value has changed to `false`, which means that the attribute update worked correctly.

Full configuration for Modbus connector for the examples above will look like this:

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
        "attributeUpdates": [
          {
            "tag": "relay",
            "type": "bits",
            "address": 1,
            "objectsCount": 1,
            "functionCode": 5,
            "bitTargetType": "bool"
          }
        ],
        "rpc": []
      }
    ]
  }
}
```
