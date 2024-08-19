One type of security configuration is basic. 
For authorization, a combination of username and password provided in this section, in config will be used.


| **Parameter** | **Default value** | **Description**             |
|:--------------|:------------------|-----------------------------|
| type          | **basic**         | Type of authorization.      |
| username      | **username**      | Username for authorization. |
| password      | **password**      | Password for authorization. |
| ---           

Security subsection in configuration file will look like this: 

```json
    "security": {
      "type": "basic",
      "username": "username",
      "password": "password"
    }
```

![image](/images/gateway/mqtt-connector/security-advanced-basic-subsection-1-ce.png)