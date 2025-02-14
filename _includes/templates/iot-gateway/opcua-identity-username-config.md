Using this option you can provide the username and password for connection to OPC-UA server.

| **Parameter** | **Default value**  | **Description**                              |
|:--------------|:-------------------|----------------------------------------------|
| type          | **basic**          | Type of identity.                            |
| username      | **user**           | Username for logging into the OPC-UA server. |
| password      | **5Tr0nG?@$sW0rD** | Password for logging into the OPC-UA server. |
| ---           |                    |                                              |

This part of configuration will look like:  

```json
    "identity": {
      "type": "basic",
      "username": "user",
      "password": "5Tr0nG?@$sW0rD"
    },
```

