Configuration, provided in this section is used for sending RPC requests from ThingsBoard to the device.

| **Parameter**  | **Description**                                                               |
|----------------|-------------------------------------------------------------------------------|
| method         | RPC method name.                                                              |
| requestType    | "**writeProperty**" to write data and "**readProperty**" to read data.        |
| requestTimeout | Timeout to wait for a response from the BACnet device, in seconds.            |
| objectType     | Object type in the BACnet device.                                             |
| objectId       | Object id in the BACnet device.                                               |
| propertyId     | Property id in the BACnet device.                                             |
| priority       | Priority of the value to write (optional, should be an integer from 1 to 16). |
| ---            | ---                                                                           |

If value is None, BACnet connector will send relinquish command with Null value.
Also, writing RPC should contain value or priority, or both.

This subsection in configuration file looks like this:

```json
"serverSideRpc": [
    {
      "method": "set_state",
      "requestType": "writeProperty",
      "requestTimeout": 10000,
      "objectType": "binaryOutput",
      "objectId": "1",
      "propertyId": "presentValue"
    },
],
```

![image](https://img.thingsboard.io/gateway/bacnet-connector/bacnet-subsection-rpc-methods-advanced-1-ce.png)
