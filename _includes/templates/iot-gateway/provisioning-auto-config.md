Using the following config, you can configure Gateway to use auto-generated Access Token by server provisioning strategy:

| **Parameter**         | **Default value** | **Description**                                                                    |
|:----------------------|:------------------|------------------------------------------------------------------------------------
| type                  | **AUTO**          | Type of provisioning strategy.                                                     |
| provisionDeviceKey    | **DEVICE_KEY**    | Provisioning device key, you should take it from configured device profile.        |
| provisionDeviceSecret | **DEVICE_SECRET** | Provisioning device secret, you should take it from configured device profile.     |
| ---                   

Provisioning subsection in configuration file will look like this:
```json
...
"provisioning": {
  "type": "AUTO",
  "provisionDeviceKey": "PUT_YOUR_DEVICE_KEY_HERE",
  "provisionDeviceSecret": "PUT_YOUR_DEVICE_SECRET_HERE"
},
...
```
