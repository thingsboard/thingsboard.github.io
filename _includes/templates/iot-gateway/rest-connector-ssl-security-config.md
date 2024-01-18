| **Parameter** | **Default value**                 | **Description**                                           |
|:-|:-|-
| host          | **127.0.0.1**                     | Domain address or ip of the server.                       |
| port          | **5000**                          | Port of the server.                                       |
| SSLVerify     | **true**                          | Verify or no SSL certificate on the server if available.  |
| cert          | **path_to_the_pem_file**          | Path to certificate file.                                 |
| key           | **path_to_the_key_file**          | Path to private key file.                                 |
|---

Configuration section will look like:
```json
{
  "host": "127.0.0.1",
  "port": "5000",
  "SSL": true,
  "security": {
    "cert": "~/ssl/cert.pem",
    "key": "~/ssl/key.pem"
  }
}
```
