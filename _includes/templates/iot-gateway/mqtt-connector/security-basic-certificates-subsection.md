The table below describes the parameters required to configure authorization on MQTT broker.

| **Parameter**     | **Default value**                            | **Description**            |
|:------------------|:---------------------------------------------|----------------------------
| type              | **certificates**                             | Type of authorization.     |
| pathToCACert      | **/etc/thingsboard-gateway/ca.pem**          | Path to CA file.           |
| pathToPrivateKey  | **/etc/thingsboard-gateway/privateKey.pem**  | Path to private key file.  |
| pathToClientCert  | **/etc/thingsboard-gateway/certificate.pem** | Path to certificate file.  |
| ---               

![image](/images/gateway/mqtt-connector/security-basic-certificates-subsection-1-ce.png)