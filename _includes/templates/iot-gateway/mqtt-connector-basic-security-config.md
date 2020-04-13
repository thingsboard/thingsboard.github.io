
One type of security configuration is basic, 
For authorization will be used combination of username/password, provided in this section in config. 


|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| type               | **basic**                      | Type of authorization.      |
| username           | **username**                   | Username for authorization. |
| password           | **password**                   | Password for authorization. |
|---

Security subsection in configuration file will look like this: 

```yaml
    "security": {
      "type": "basic",
      "username": "username",
      "password": "password"
    }
```
