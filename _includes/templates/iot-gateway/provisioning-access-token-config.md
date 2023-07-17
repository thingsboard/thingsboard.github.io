Using the following config, you can configure Gateway to use Access Token provisioning strategy:

| **Parameter**         | **Default value**        | **Description**                                                                    |
|:----------------------|:-------------------------|------------------------------------------------------------------------------------
| type                  | **ACCESS_TOKEN**         | Type of provisioning strategy.                                                     |
| provisionDeviceKey    | **DEVICE_KEY**           | Provisioning device key, you should take it from configured device profile.        |
| provisionDeviceSecret | **DEVICE_SECRET**        | Provisioning device secret, you should take it from configured device profile.     |
| ---                   

Provisioning subsection in configuration file will look like this:
```yaml
...
  provisioning:
    type: ACCESS_TOKEN
    provisionDeviceKey: PUT_YOUR_DEVICE_KEY_HERE
    provisionDeviceSecret: PUT_YOUR_DEVICE_SECRET_HERE
...
```
