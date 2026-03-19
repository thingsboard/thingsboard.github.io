
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

Since ThingsBoard IoT Gateway version 3.8.3, environment variables can be specified for username and password fields. 
This allows you to avoid hardcoding sensitive information in the configuration file and provide it securely at runtime.

To use ENV variables for username and password, you can set them in your environment or define them in 
your `docker-compose.yml` file.

The following ENV variables are used for Basic authentication configuration:

- `REQUEST_BASIC_USERNAME`
- `REQUEST_BASIC_PASSWORD`
