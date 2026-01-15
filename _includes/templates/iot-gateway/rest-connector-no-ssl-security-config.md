| **Parameter** | **Default value**                 | **Description**                                           |
|:--------------|:-|-
| host          | **127.0.0.1**                     | Domain address or ip of the server.                       |
| port          | **5000**                          | Port of the server.                                       |
| SSL           | **false**                         | Verify or no SSL certificate on the server if available.  |
| ---           

Configuration section will look like:
```json
{
  "server": {
    "host": "127.0.0.1",
    "port": 5000,
    "SSL": false,
    "security": {
      "cert": "~/ssl/cert.pem",
      "key": "~/ssl/key.pem"
    }
  }
}
```
{: .copy-code}
