One type of security configuration is basic. 
For authorization, a combination of username/password provided in this section of the config will be used.


|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| type               | **basic**                      | Type of authorization.       |
| credentials        |                                | List of allowed credentials. |
| ... username       | **username**                   | Username for authorization.  |
| ... password       | **password**                   | Password for authorization.  |
|---

Security subsection in configuration file will look like this: 
```yaml
    "security": [
      "type": "basic",
      "credentials": [
        {
          "username": "admin",
          "password": "admin"
        }
      ]
    ]
```
