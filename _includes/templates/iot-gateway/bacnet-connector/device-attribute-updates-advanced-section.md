The “attributeUpdates” configuration allows you to set up the format of the corresponding attribute data 
that will be sent to the BACnet device.

| **Parameter** | **Description**                                    |
|---------------|----------------------------------------------------|
| key           | Name of the shared attribute on platform instance. |
| objectType    | Object type in the BACnet device.                  |
| objectId      | Object id in the BACnet device.                    |
| propertyId    | Property id in the BACnet device.                  |
| ---           | ---                                                |

This subsection in configuration file looks like:

```json
"attributeUpdates": [
    {
      "key": "brightness",
      "objectType": "analogOutput",
      "objectId": "1",
      "propertyId": "presentValue"
    }
],
```

![image](/images/gateway/bacnet-connector/bacnet-subsection-attribute-updates-advanced-1-ce.png)
