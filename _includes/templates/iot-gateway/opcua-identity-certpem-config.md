This option of identity subsection is the safest.

| **Parameter** | **Default value**                             | **Description**                                                           |
|:-|:-|-
| type          | **cert.PEM**                                  | Type of identity on OPC-UA server.                                        |
| caCert        | **/etc/thingsboard-gateway/ca.pem**           | Path to the CA certificate.                                               |
| privateKey    | **/etc/thingsboard-gateway/private_key.pem**  | Path to the private key.                                                  |
| cert          | **/etc/thingsboard-gateway/cert.pem**         | Path to the certificate file.                                             |
| mode          | **SignAndEncrypt**                            | Security mode, there are 2 options -- **Sign** and **SignAndEncrypt**.    |  
| username      | **user**                                      | Username for logging into the OPC-UA server.                              |
| password      | **5Tr0nG?@$sW0rD**                            | Password for logging into the OPC-UA server.                              |
|---

***Optionally, you can provide the username/password pair.***

This part of configuration will look like:  

```json
    "identity": {
      "type": "cert.PEM",
      "caCert": "etc/thingsboard-gateway/ca.pem",
      "privateKey": "etc/thingsboard-gateway/private_key.pem", 
      "cert": "etc/thingsboard-gateway/cert.pem",
      "mode": "SignAndEncrypt",
      "username": "user",
      "password": "5Tr0nG?@$sW0rD"
    },
```