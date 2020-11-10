|---
| **Parameter**             | **Example value**                            | **Description**                                                                |
|:-|:-|-
| *deviceName*              | **DEVICE_NAME**                              | Device name in ThingsBoard.                                                    |
| *provisionDeviceKey*      | **u7piawkboq8v32dmcmpp**                     | Provisioning device key, you should take it from configured device profile.    |
| *provisionDeviceSecret*   | **jpmwdn8ptlswmf4m29bw**                     | Provisioning device secret, you should take it from configured device profile. | 
| credentialsType           | **X509_CERTIFICATE**                         | Credentials type parameter.                                                    |
| hash                      | **MIIB........AQAB**                         | Public key X509 hash for device in ThingsBoard.                                |
|---

Provisioning request data example:
 
```json
{
  "deviceName": "DEVICE_NAME",
  "provisionDeviceKey": "u7piawkboq8v32dmcmpp",
  "provisionDeviceSecret": "jpmwdn8ptlswmf4m29bw",
  "credentialsType": "X509_CERTIFICATE",
  "hash": "MIIB........AQAB"
}
```

Provisioning response example:

```json
{
  "deviceId":"3b829220-232f-11eb-9d5c-e9ed3235dff8",
  "credentialsType":"X509_CERTIFICATE",
  "credentialsId":"f307a1f717a12b32c27203cf77728d305d29f64694a8311be921070dd1259b3a",
  "credentialsValue":"MIIB........AQAB",
  "provisionDeviceStatus":"SUCCESS"
}
```

Where:  
***credentialsId*** - SHA3 hash of public key X509 hash.  
***credentialsValue*** - Public key X509 hash.  