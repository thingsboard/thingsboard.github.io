* TOC
{:toc}

TBMQ provides the ability to run MQTT server and MQTT over WebSocket over SSL. Both one-way and two-way SSL are supported.

Most of the TBMQ environments use the load balancer as a termination point for the SSL connection between the devices and the broker.
In other words, MQTT traffic is encrypted between the device and the load balancer but is decrypted between the load balancer and broker services.
The advantage of such an option is the simplicity of configuration.
Most of the cloud load balancers (AWS, Google Cloud, etc.) have built-in certificate generation tools and rich documentation on how to configure SSL over TCP.
The disadvantage of such an option is that two-way SSL is not possible. The information about the client certificate is not passed from the load balancer to the broker services.

Nevertheless, it is possible to configure TBMQ to two-way SSL for MQTT and avoid SSL termination on the Load Balancer.
We recommend using valid SSL certificates generated using trusted CA authorities and avoid spending time on resolving issues with [self-signed certificates](#self-signed-certificates-generation).
See the instructions below on how to configure SSL for certificates stored in PEM file format or Java Keystore.

## SSL configuration using PEM certificates file

Configure the following environment variables via [configuration](/docs/{{docsPrefix}}mqtt-broker/install/config/#mqtt-listeners-parameters) file, docker-compose or kubernetes scripts.

```bash
...
export LISTENER_SSL_ENABLED=true
export LISTENER_SSL_CREDENTIALS_TYPE=PEM
export LISTENER_SSL_PEM_CERT=server.pem
export LISTENER_SSL_PEM_KEY=server_key.pem
export LISTENER_SSL_PEM_KEY_PASSWORD=secret
...
```

where:

* LISTENER_SSL_ENABLED — Enable/disable SSL support;
* LISTENER_SSL_CREDENTIALS_TYPE — Server credentials type. PEM — pem certificate file; KEYSTORE — java keystore;
* LISTENER_SSL_PEM_CERT — Path to the server certificate file. Holds server certificate or certificate chain, may also include the server private key;
* LISTENER_SSL_PEM_KEY — Path to the server certificate private key file. Optional by default. Required if the private key is not present in the server certificate file;
* LISTENER_SSL_PEM_KEY_PASSWORD — Optional server certificate private key password.

After completing the setup, start or restart the TBMQ server.

{% include templates/mqtt-broker/ssl/pem_files_location.md %}

## SSL configuration using Java Keystore

Configure the following environment variables via [configuration](/docs/{{docsPrefix}}mqtt-broker/install/config/#mqtt-listeners-parameters) file, docker-compose or kubernetes scripts.

```bash
...
export LISTENER_SSL_ENABLED=true
export LISTENER_SSL_CREDENTIALS_TYPE=KEYSTORE
export LISTENER_SSL_KEY_STORE_TYPE=PKCS12
export LISTENER_SSL_KEY_STORE=keystore.p12
export LISTENER_SSL_KEY_STORE_PASSWORD=tbmq
export LISTENER_SSL_KEY_PASSWORD=tbmq
...
```

where:

* LISTENER_SSL_ENABLED — Enable/disable SSL support;
* LISTENER_SSL_CREDENTIALS_TYPE — Server credentials type. PEM - pem certificate file; KEYSTORE — java keystore;
* LISTENER_SSL_KEY_STORE_TYPE — Type of the key store (JKS or PKCS12);
* LISTENER_SSL_KEY_STORE — Path to the key store that holds the SSL certificate or certificate chain, also include the server private key;
* LISTENER_SSL_KEY_STORE_PASSWORD — Password used to access the key store;
* LISTENER_SSL_KEY_PASSWORD — Password used to access the server private key.

After completing the setup, start or restart the TBMQ server.

{% include templates/mqtt-broker/ssl/keystore_files_location.md %}

## Additional configuration properties

You may configure following additional environment variables via [configuration](/docs/{{docsPrefix}}mqtt-broker/install/config/#mqtt-listeners-parameters) file, docker-compose or kubernetes scripts.

* LISTENER_SSL_BIND_ADDRESS — the bind address for the MQTT server. Default value *0.0.0.0* indicates all interfaces;
* LISTENER_SSL_BIND_PORT — the bind port for the MQTT server. The default value is *8883*;
* LISTENER_SSL_PROTOCOL — ssl protocol name. The default value is *TLSv1.2*. See [java doc](https://docs.oracle.com/en/java/javase/17/docs/specs/security/standard-names.html#sslcontext-algorithms) for more details.

{% include docs/user-guide/ssl/self-signed-ecc.md %}

> It is recommended to include the **ca.pem** file in TBMQ’s Truststore.
> This is especially important if you plan to issue client certificates signed by the same CA that signed the server certificate.
> By doing so, TBMQ will be able to validate these client certificates during the TLS handshake, allowing secure MQTT client connections.

To achieve this, you need to create a certificate chain by concatenating the server certificate and the CA certificate:

```bash
cat server.pem ca.pem > serverChain.pem
```
{: .copy-code}

The resulting `serverChain.pem` file should then be configured in TBMQ by setting the following environment variable:

```bash
LISTENER_SSL_PEM_CERT=serverChain.pem
```
{: .copy-code}

This ensures that both the server certificate and the CA certificate are properly recognized, enabling secure mutual authentication when client certificates are used.

{% include templates/mqtt-broker/ssl/pem-to-keystore.md %}

## Adding certificate into Java Truststore

In Java-based applications, a **truststore** is a special keystore that contains certificates of entities (Certificate Authorities or servers) that the application trusts.
Adding a certificate to the truststore ensures that Java applications running with that truststore will accept SSL/TLS connections signed by that certificate or its issuing CA.

```bash
keytool -importcert -file CERT.pem -alias ALIAS -keystore keystore.p12 -storepass KEYSTOREPASS
```
{: .copy-code}

**Explanation of parameters:**

* `-importcert` — tells `keytool` to import a certificate into the specified keystore/truststore.
* `-file CERT.pem` — the path to the certificate file you want to import.
* `-alias ALIAS` — a unique name to reference this certificate within the keystore.
* `-keystore keystore.p12` — the Java keystore/truststore file (.jks or .p12) to which the certificate will be added. If it doesn’t exist, it will be created.
* `-storepass KEYSTOREPASS` — the password protecting the keystore.

> Ensure you configure TBMQ to enable MQTTS using the appropriate [Keystore parameters](#ssl-configuration-using-java-keystore).
 
To use the *keytool* command, a Java Development Kit (JDK) must be installed on your system.

## MQTT over WebSocket Secure

To enable secure MQTT over WebSockets (WSS), you can follow the same SSL configuration steps described above. 
Just make sure to use the corresponding WebSocket-specific environment variables (e.g., `LISTENER_WSS_ENABLED`, `LISTENER_WSS_CREDENTIALS_TYPE`, etc.) in your configuration file, Docker Compose, or Kubernetes manifests.

The SSL setup using PEM or Keystore works identically for both raw MQTT over TLS and WebSocket over TLS endpoints.
