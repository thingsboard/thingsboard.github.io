Configuration, provided in this section is used for sending RPC requests from ThingsBoard to the device.

| **Parameter**  | **Description**                                                        |
|----------------|------------------------------------------------------------------------|
| method         | RPC method name.                                                       |
| requestType    | "**writeProperty**" to write data and "**readProperty**" to read data. |
| requestTimeout | Timeout to wait for a response from the BACnet device, in seconds.     |
| objectType     | Object type in the BACnet device.                                      |
| objectId       | Object id in the BACnet device.                                        |
| propertyId     | Property id in the BACnet device.                                      |
| ---            | ---                                                                    |

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

**image**
