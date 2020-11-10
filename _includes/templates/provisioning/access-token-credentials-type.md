|---
| **Parameter**             | **Example value**                            | **Description**                                                                |
|:-|:-|-
| *deviceName*              | **DEVICE_NAME**                              | Device name in ThingsBoard.                                                    |
| *provisionDeviceKey*      | **u7piawkboq8v32dmcmpp**                     | Provisioning device key, you should take it from configured device profile.    |
| *provisionDeviceSecret*   | **jpmwdn8ptlswmf4m29bw**                     | Provisioning device secret, you should take it from configured device profile. | 
| credentialsType           | **ACCESS_TOKEN**                             | Credentials type parameter.                                                    |
| token                     | **sLzc0gDAZPkGMzFVTyUY**                     | Access token for device in ThingsBoard.                                        |
|---

Provisioning request data example:
 
```json
{
  "deviceName": "DEVICE_NAME",
  "provisionDeviceKey": "u7piawkboq8v32dmcmpp",
  "provisionDeviceSecret": "jpmwdn8ptlswmf4m29bw",
  "credentialsType": "ACCESS_TOKEN",
  "token": "sLzc0gDAZPkGMzFVTyUY"
}
```

Provisioning response example:

```json
{
  "deviceId":"97a20840-2287-11eb-9872-652e146ea052",
  "credentialsType":"ACCESS_TOKEN",
  "credentialsId":"sLzc0gDAZPkGMzFVTyUY",
  "provisionDeviceStatus":"SUCCESS"
}
```

Where:  
***credentialsId*** - Access token for device in ThingsBoard.  