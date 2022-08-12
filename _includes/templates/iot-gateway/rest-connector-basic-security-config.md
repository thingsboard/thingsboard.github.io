
One type of security configuration is Basic authentication.
The REST Connector waits for HTTP requests with the Authorization header that contains the word Basic word followed by a space and a base64-encoded string username:password.

|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| type               | **basic**                      | Type of authorization.      |
| username           | **username**                   | Username for authorization. |
| password           | **password**                   | Password for authorization. |
|---

Security section in configuration file will look like this: 

```json
    "security": {
      "type": "basic",
      "username": "username",
      "password": "password"
    }
```

Also, make sure that your request have `Authorization` header with provided credentials.

If you are using cURL, the request will look like:
```bash
curl --user username:password -H "Content-Type: application/json" -X POST \
    -d '{"sensorName": "SN-001", "sensorModel": "example"}' http://127.0.0.1:5000/my_devices
```

Or if you are using Postman or Insomnia, simply enable Basic auth.
