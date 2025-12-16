Modbus devices can have registers that represent enumerated values, for example operational modes, status codes, or
error states. To make these values more understandable, you can map them to human-readable strings using the enum
mapping feature in ThingsBoard IoT Gateway Modbus connector. This feature works for all register types and can be used
in both uplink data (attributes and time series) and uplink RPC to Device calls. Let's explore how to set up enum
mapping in your Modbus connector configuration.

As an example, we will use ThingsBoard Modbus Demo Server, which can be run using Docker and the following command:

```bash
docker run -it -p 5021:5021 thingsboard/tb-gw-modbus-server:latest
```
{:.copy-code}

The server available at `0.0.0.0:5021`. The server has the following structure:

| Variable Name    | Register Type   | Data Type  | Address    |
|:-----------------|:----------------|------------|:-----------|
| Temperature      | Holding         | 16int      | 0          |
| Humidity         | Holding         | 16int      | 1          |
| Power            | Holding         | 16int      | 2          |
| Pressure         | Holding         | 16int      | 3          |
| Operational Mode | Holding         | 16int      | 4          |
| Relay            | Coil            | bits       | 1          |
| --------------   | --------------- | ---------- | ---------- |

We are interested in mapping the `Operational Mode` and `Relay` registers to human-readable strings. The `Operational Mode` register can have the following values:
- `1`: Normal Mode
- `2`: Service Mode
- `3`: Calibration Mode

And the `Relay` register can have the following values:
- `0`: OFF
- `1`: ON

To set up enum mapping for these registers, you need to define the `variants` parameter in the configuration for each 
register. This parameter is an object where each key represents a possible register value, and the corresponding value 
is the human-readable string that describes that register value.

Copy and paste the following configuration into the Modbus connector advanced configuration mode:
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
        "wordOrder": "BIG",
        "retries": true,
        "retryOnEmpty": true,
        "retryOnInvalid": true,
        "pollPeriod": 1000,
        "connectAttemptTimeMs": 500,
        "connectAttemptCount": 5,
        "waitAfterFailedAttemptsMs": 1000,
        "type": "tcp",
        "attributes": [],
        "timeseries": [
          {
            "tag": "operational_mode",
            "type": "16int",
            "address": 4,
            "objectsCount": 1,
            "functionCode": 3,
            "variants": {
              "1": "Normal Mode",
              "2": "Service Mode",
              "3": "Calibration Mode"
            }
          },
          {
            "tag": "relay",
            "type": "bits",
            "address": 1,
            "objectsCount": 1,
            "functionCode": 1,
            "bitTargetType": "int",
            "variants": {
              "0": "OFF",
              "1": "ON"
            }
          }
        ],
        "attributeUpdates": [],
        "rpc": []
      }
    ]
  }
}
```
{:.copy-code.expandable-15}

After applying this configuration, the `operational_mode` and `relay` registers will be mapped to their respective 
human-readable strings in uplink data. This makes it easier to interpret the data received from the Modbus device:

![image](/images/gateway/modbus-connector/examples/enum-mapping-overview.png)
