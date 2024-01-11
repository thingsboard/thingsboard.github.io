The table below describes the parameters required to configure authorization on MQTT broker.

|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| caCert                   | **/etc/thingsboard-gateway/ca.pem**          | Path to CA file.                                               |
| privateKey               | **/etc/thingsboard-gateway/privateKey.pem**  | Path to private key file.                                      |
| cert                     | **/etc/thingsboard-gateway/certificate.pem** | Path to certificate file.
|---    

Security subsection in configuration file will look like this: 

```json
  "security":{
    "caCert": "/etc/thingsboard-gateway/ca.pem",
    "privateKey": "/etc/thingsboard-gateway/privateKey.pem",
    "cert": "/etc/thingsboard-gateway/certificate.pem"
  }
```
