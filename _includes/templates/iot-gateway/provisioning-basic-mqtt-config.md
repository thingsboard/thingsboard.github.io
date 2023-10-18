Using the following config, you can configure Gateway to use MQTT Basic provisioning strategy:

| **Parameter**         | **Default value**   | **Description**                                                                    |
|:----------------------|:--------------------|------------------------------------------------------------------------------------
| type                  | **MQTT_BASIC**      | Type of provisioning strategy.                                                     |
| provisionDeviceKey    | **DEVICE_KEY**      | Provisioning device key, you should take it from configured device profile.        |
| provisionDeviceSecret | **DEVICE_SECRET**   | Provisioning device secret, you should take it from configured device profile.     |
| ---                   

Provisioning subsection in configuration file will look like this:
```json
...
"provisioning": {
  "type": "MQTT_BASIC",
  "provisionDeviceKey": "PUT_YOUR_DEVICE_KEY_HERE",
  "provisionDeviceSecret": "PUT_YOUR_DEVICE_SECRET_HERE"
},
...
```
