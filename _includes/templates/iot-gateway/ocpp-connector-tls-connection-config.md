In table below described parameters to configure TLS connection.

|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| key                      | **/etc/thingsboard-gateway/privateKey.pem**  | Path to private key file.                |
| cert                     | **/etc/thingsboard-gateway/certificate.pem** | Path to certificate file.                |
| password                 | **YOUR_PASSWORD**                            | **OPTIONAL** Password for TLS connection |
|---    

Connection subsection in configuration file will look like this: 

```yaml
    "connection": {
      "type": "tls",
      "key": "/etc/thingsboard-gateway/privateKey.pem",
      "cert": "/etc/thingsboard-gateway/certificate.pem"
    }
```
