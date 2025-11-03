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

For optimizing the number of requests sent to the Modbus server, you can use the **Batch reading** feature available 
in the advanced configuration mode. This feature allows reading multiple registers in a single request, which can 
significantly reduce the load on the Modbus server and improve performance.

Let’s look at an example of how to properly configure batch reading to read the `temperature`, `humidity`, `power`, 
and `pressure` registers from the Modbus server.

From the table above, we can see that all the required registers are of the same type (`16int`) and have the same
function code (`03 - Read Holding Registers`). This means that we can group them into a single batch read request.
We need to read registers from address `0` to address `3`, so our address range will be `0-3`. 
Also, you need to use, for examples `${address}` variable in the `tag` field to uniquely identify each register within 
the batch read. In our case, we will use the following expression for the `tag` field: 
`${unitId}.${type}.${address}` (you can find more information about variables in the corresponding [section of 
the documentation](/docs/iot-gateway/config/modbus/#batch-reading-advanced-configuration-mode-only)).

Copy and paste the following configuration into the Modbus connector advanced configuration mode:

```json
{
  "master": {
    "slaves": [
      {
        "host": "0.0.0.0",
        "port": 5021,
        "type": "tcp",
        "method": "socket",
        "timeout": 35,
        "byteOrder": "BIG",
        "wordOrder": "LITTLE",
        "retries": true,
        "retryOnEmpty": true,
        "retryOnInvalid": true,
        "pollPeriod": 1000,
        "unitId": 1,
        "deviceName": "Demo Device",
        "deviceType": "default",
        "sendDataOnlyOnChange": true,
        "connectAttemptTimeMs": 5000,
        "connectAttemptCount": 5,
        "waitAfterFailedAttemptsMs": 300000,
        "attributes": [],
        "timeseries": [
          {
            "tag": "${unitId}.${type}.${address}",
            "type": "16int",
            "functionCode": 3,
            "objectsCount": 1,
            "address": "0-3",
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
{:.copy-code}

After saving the changes and starting the connector, you see that the corresponding telemetry is being updated 
correctly:

![image](/images/gateway/modbus-connector/examples/batch-reading-overview.png)
