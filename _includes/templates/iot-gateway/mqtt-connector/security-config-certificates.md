The table below describes the parameters required to configure authorization on MQTT broker.

| **Parameter**     | **Default value**                            | **Description**            |
|:------------------|:---------------------------------------------|----------------------------
| type              | **certificates**                             | Type of authorization.     |
| pathToCACert      | **/etc/thingsboard-gateway/ca.pem**          | Path to CA file.           |
| pathToPrivateKey  | **/etc/thingsboard-gateway/privateKey.pem**  | Path to private key file.  |
| pathToClientCert  | **/etc/thingsboard-gateway/certificate.pem** | Path to certificate file.  |
| ---               

Security subsection in configuration file will look like this: 

```json
"security":{
    "type": "certificates",
    "pathToCACert": "/etc/thingsboard-gateway/ca.pem",
    "pathToPrivateKey": "/etc/thingsboard-gateway/privateKey.pem",
    "pathToClientCert": "/etc/thingsboard-gateway/certificate.pem"
}
```

![image](/images/gateway/mqtt-connector/security-advanced-certificates-subsection-1-ce.png)