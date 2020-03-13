
One type of security configuration is Basic authentication.
The Request Connector sends HTTP requests with the Authorization header that contains the word Basic word followed by a space and a base64-encoded string username:password.

|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| type               | **basic**                      | Type of authorization.      |
| username           | **username**                   | Username for authorization. |
| password           | **password**                   | Password for authorization. |
|---

Security section in configuration file will look like this: 

```yaml
    "security": {
      "type": "basic",
      "username": "username",
      "password": "password"
    }
```
