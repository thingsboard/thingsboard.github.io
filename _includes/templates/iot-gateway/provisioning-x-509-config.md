Using the following config, you can configure Gateway to use X.509 Certificate provisioning strategy:

| **Parameter**         | **Default value**        | **Description**                                                                |
|:----------------------|:-------------------------|--------------------------------------------------------------------------------
| type                  | **X509_CERTIFICATE**     | Type of provisioning strategy.                                                 |
| provisionDeviceKey    | **DEVICE_KEY**           | Provisioning device key, you should take it from configured device profile.    |
| provisionDeviceSecret | **DEVICE_SECRET**        | Provisioning device secret, you should take it from configured device profile. |
| caCert                | **tb-server-chain.pem**  | Public key X509 for device in ThingsBoard.                                     |
| ---                   

Provisioning subsection in configuration file will look like this:
```yaml
...
  provisioning:
    type: X509_CERTIFICATE
    provisionDeviceKey: PUT_YOUR_DEVICE_KEY_HERE
    provisionDeviceSecret: PUT_YOUR_DEVICE_SECRET_HERE
    caCert: /etc/thingsboard-gateway/ca.pem
...
```
