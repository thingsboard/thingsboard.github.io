|---
| **Parameter**             | **Example value**                            | **Description**                                                                |
|:-|:-|-
| *deviceName*              | **DEVICE_NAME**                              | Device name in ThingsBoard.                                                    |
| *provisionDeviceKey*      | **u7piawkboq8v32dmcmpp**                     | Provisioning device key, you should take it from configured device profile.    |
| *provisionDeviceSecret*   | **jpmwdn8ptlswmf4m29bw**                     | Provisioning device secret, you should take it from configured device profile. | 
| credentialsType           | **MQTT_BASIC**                               | Credentials type parameter.                                                    |
| username                  | **DeviceUsername**                           | Username for device in ThingsBoard.                                            |
| password                  | **DevicePassword**                           | Password for device in ThingsBoard.                                            |
| clientId                  | **DeviceClientId**                           | Client id for device in ThingsBoard.                                           |
|---

Provisioning request data example:
 
```json
{
  "deviceName": "DEVICE_NAME",
  "provisionDeviceKey": "u7piawkboq8v32dmcmpp",
  "provisionDeviceSecret": "jpmwdn8ptlswmf4m29bw",
  "credentialsType": "MQTT_BASIC",
  "username": "DeviceUsername",
  "password": "DevicePassword",
  "clientId": "DeviceClientId"
}
```

Provisioning response example:

```json
{
  "deviceId":"0a6c0480-2327-11eb-9d5c-e9ed3235dff8",
  "credentialsType":"MQTT_BASIC",
  "credentialsId":"e448c0b7af13ee71748b221b1b611f946168fe12303b94d943c622308c19c5f6",
  "credentialsValue":"{\\"clientId\\":\\"DeviceClientId\\",\\"userName\\":\\"DeviceUsername\\",\\"password\\":\\"DevicePassword\\"}",
  "provisionDeviceStatus":"SUCCESS"
}
```

Where:  
***credentialsId*** - SHA3 hash of clientId and username.  
***credentialsValue*** - String with basic MQTT credentials.  