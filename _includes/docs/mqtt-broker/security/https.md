* TOC
{:toc}

TBMQ provides the ability to run HTTP server that hosts Web UI and serves REST API calls over SSL.

Most of the TBMQ environments use the load balancer as a termination point for the SSL connection between the client and the broker.
In other words, internet traffic is encrypted between the user browser and the load balancer, but is decrypted between the load balancer and broker services.
The advantage of such options is a simple configuration.
Most of the cloud load balancers (AWS, Google Cloud, etc.) have built-in certificate generation tools and rich documentation on how to configure SSL.

Nevertheless, it is possible to configure TBMQ to enable SSL and avoid SSL termination on the Load Balancer.
We recommend using valid SSL certificates generated using trusted CA authorities and avoid spending time on resolving issues with [self-signed certificates](#self-signed-certificates-generation).
See the instructions below on how to configure SSL for certificates stored in PEM file format or Java Keystore.

## SSL configuration using PEM certificates file

Configure the following environment variables via [configuration](/docs/{{docsPrefix}}mqtt-broker/install/config/#http-server-parameters) file, docker-compose or kubernetes scripts.

```bash
...
export SSL_ENABLED=true
export SSL_CREDENTIALS_TYPE=PEM
export SSL_PEM_CERT=server.pem
export SSL_PEM_KEY=server_key.pem
export SSL_PEM_KEY_PASSWORD=secret
...
```

where:

* SSL_ENABLED — Enable/disable SSL support;
* SSL_CREDENTIALS_TYPE — Server credentials type. PEM — pem certificate file; KEYSTORE — java keystore;
* SSL_PEM_CERT — Path to the server certificate file. Holds server certificate or certificate chain, may also include the server private key;
* SSL_PEM_KEY — Path to the server certificate private key file. Optional by default. Required if the private key is not present in the server certificate file;
* SSL_PEM_KEY_PASSWORD — Optional server certificate private key password.

After completing the setup, start or restart the TBMQ server.

{% include templates/mqtt-broker/ssl/pem_files_location.md %}

## SSL configuration using Java Keystore

Configure the following environment variables via [configuration](/docs/{{docsPrefix}}mqtt-broker/install/config/#http-server-parameters) file, docker-compose or kubernetes scripts.

```bash
...
export SSL_ENABLED=true
export SSL_CREDENTIALS_TYPE=KEYSTORE
export SSL_KEY_STORE_TYPE=PKCS12
export SSL_KEY_STORE=keystore.p12
export SSL_KEY_STORE_PASSWORD=tbmq
export SSL_KEY_PASSWORD=tbmq
...
```

where:

* SSL_ENABLED — Enable/disable SSL support;
* SSL_CREDENTIALS_TYPE — Server credentials type. PEM — pem certificate file; KEYSTORE — java keystore;
* SSL_KEY_STORE_TYPE — Type of the key store (JKS or PKCS12);
* SSL_KEY_STORE — Path to the key store that holds the SSL certificate or certificate chain, also include the server private key;
* SSL_KEY_STORE_PASSWORD — Password used to access the key store;
* SSL_KEY_PASSWORD — Password used to access the server private key.

After completing the setup, start or restart the TBMQ server.

{% include templates/mqtt-broker/ssl/keystore_files_location.md %}

{% include docs/user-guide/ssl/self-signed-ecc.md %}

{% include templates/mqtt-broker/ssl/pem-to-keystore.md %}
