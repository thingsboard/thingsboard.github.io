Every telemetry and attribute parameter has `GET` and `SET` RPC methods out of the box, so you don’t need to configure 
them manually.

As an example, we will use a BACnet controller to which a relay is connected. We also know that the relay has the 
following object ID: `Binary Input:1`.

We will use this object ID to read the value of the relay using the `GET` RPC method and to set the value of the relay 
using the `SET` RPC method. The configuration for this telemetry will look like this:

```json
{
  "key": "relay",
  "objectType": "binaryInput",
  "objectId": 1,
  "propertyId": "presentValue"
}
```

Let’s check the value of the relay using the reserved `GET` method. To get the current value of the relay, run the query
in the RPC debug terminal:

```bash
get objectType=binaryInput;objectId=1;propertyId=presentValue;
```

Response:

```json
{"result": {"value":  "inactive"}}
```

![image](/images/gateway/bacnet-connector/examples/reserved-rpc-result-1.png)

So, the `GET` method returns the current value of the relay, and we can see that the relay is off.

{% capture difference %}
The RPC Debug Terminal is used only for example purpose, so you can use any other widget that supports RPC calls.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

To set the value of the relay and turn it on, run the query:

```bash
set objectType=binaryInput;objectId=1;propertyId=presentValue;value=1;
```

Response:

```json
{"result": {"value": 1}}
```

And as you can see, from the screenshot below, the relay telemetry value has changed to `1`:

![image](/images/gateway/bacnet-connector/examples/reserved-rpc-result-2.png)

Also, let’s check the value of the relay telemetry again:

```bash
get objectType=binaryInput;objectId=1;propertyId=presentValue;
```

Response:

```json
{"result": {"value":  "active"}}
```

![image](/images/gateway/bacnet-connector/examples/reserved-rpc-result-3.png)

Full configuration for BACnet connector for the examples above will look like this 
(**make sure to use the right device host and port**):

```json
{
  "application": {
    "objectName": "TB_gateway",
    "host": "YOUR_HOST",
    "port": 47808,
    "objectIdentifier": 599,
    "vendorIdentifier": 15,
    "maxApduLengthAccepted": 1476,
    "segmentationSupported": "segmentedBoth",
    "deviceDiscoveryTimeoutInSec": 5
  },
  "devices": [
    {
      "altResponsesAddresses": [],
      "host": "YOUR_DEVICE_HOST",
      "port": 47808,
      "deviceInfo": {
        "deviceNameExpression": "${objectName}",
        "deviceProfileExpression": "default",
        "deviceNameExpressionSource": "expression",
        "deviceProfileExpressionSource": "constant"
      },
      "pollPeriod": 10000,
      "timeseries": [
        {
          "key": "relay",
          "objectType": "binaryInput",
          "objectId": 1,
          "propertyId": "presentValue"
        }
      ],
      "attributes": [],
      "attributeUpdates": [],
      "serverSideRpc": []
    }
  ]
}
```
