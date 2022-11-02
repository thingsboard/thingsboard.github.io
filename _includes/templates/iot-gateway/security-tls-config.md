In table below described parameters to configure authorization of IoT gateway on ThingsBoard platform.  

|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| caCert                   | **/etc/thingsboard-gateway/ca.pem**          | Path to CA file.                                                      |
| privateKey               | **/etc/thingsboard-gateway/privateKey.pem**  | Path to private key file.                                             |
| cert                     | **/etc/thingsboard-gateway/certificate.pem** | Path to certificate file.                                             |
| checkCertPeriod          | **86400**                                    | The period in seconds when the certificate will be checked            |
| certificateDaysLeft      | **3**                                        | Days until the certificate expires, when a new one will be generated  |
|---    

Security subsection in configuration file will look like this: 

```yaml
  security:
    privateKey: /etc/thingsboard-gateway/privateKey.pem
    caCert: /etc/thingsboard-gateway/ca.pem
    cert: /etc/thingsboard-gateway/certificate.pem
    checkCertPeriod: 86400
    certificateDaysLeft: 3
```
