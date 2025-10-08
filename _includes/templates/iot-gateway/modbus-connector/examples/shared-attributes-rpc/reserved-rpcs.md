Every telemetry and attribute parameter has `GET` and `SET` RPC methods out of the box, so you don’t need to configure 
them manually.

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

We are interested in register `1`, which is a coil register. We will use this register to set the value of the
telemetry parameter. The register is of type `bits`, so we will use `bits` type for the telemetry parameter. The 
configuration for this telemetry will look like this:

```json
{
    "tag": "relay",
    "type": "bits",
    "address": 1,
    "objectsCount": 1,
    "functionCode": 1,
    "bitTargetType": "bool"
}
```

Let’s check the value of the relay register using the reserved `get` method. To get the current value of relay 
register, run the query in RPC debug terminal:

```bash
get type=bits;functionCode=1;objectsCount=1;address=1;
```

Response:

```json
{"result":{"value":false}}
```

![image](/images/gateway/modbus-connector/examples/reserved-rpc-result-1.png)

So, the `get` method returns the current value of the relay register, and we can see that the relay is off.

{% capture difference %}
The RPC Debug Terminal is used only for example purpose, so you can use any other widget that supports RPC calls.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

To set the value of the relay register and turn it on, run the query:

```bash
set type=bits;functionCode=5;objectsCount=1;address=1;value=1;
```

Response:

```json
{"result":{"value":"1"}}
```

And as you can see, from the screenshot below, the relay telemetry value has changed to `1`:

![image](/images/gateway/modbus-connector/examples/reserved-rpc-result-2.png)

Also, let’s check the value of the relay telemetry again: it is `true` 
now because, in the Modbus connector, booleans come from integers — `0` = `false`, `1` = `true` 
(any non-zero is `true`) — so a register value of `1` is reported as `true`.

```bash
get type=bits;functionCode=3;objectsCount=1;address=1;
```

Response:

```json
{"result":{"value":true}}
```

![image](/images/gateway/modbus-connector/examples/reserved-rpc-result-3.png)

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
        "attributeUpdates": [],
        "rpc": []
      }
    ]
  }
}
```
