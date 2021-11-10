* TOC
  {:toc}

ThingsBoard provides the ability to run CoAP server over DTLS. Both one-way and two-way DTLS are supported.
DTLS provisioning requires valid [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) certificates. 
Comparing to RSA, ECDSA keys are smaller and thus more preferable for the constrained devices.
We recommend to use valid SSL certificates generated using trusted CA authorities and avoid spending time on resolving issues with [self-signed certificates](#self-signed-certificates-generation).
See instructions below on how to configure SSL for certificates stored in PEM file format or Java Keystore.


### SSL configuration using PEM certificates file

{% assign sinceVersion = "3.3.2" %}
{% include templates/since.md %}

Configure the following environment variables via [configuration](/docs/{{docsPrefix}}user-guide/install/config/) file, docker-compose or kubernetes scripts.
We will use **thingsboard.conf** for example:

```bash
...
export MQTT_SSL_ENABLED=true
export MQTT_SSL_CREDENTIALS_TYPE=PEM
export MQTT_SSL_PEM_CERT=server.pem
export MQTT_SSL_PEM_KEY=server_key.pem
export MQTT_SSL_PEM_KEY_PASSWORD=secret
...
```

where:

* MQTT_SSL_ENABLED - Enable/disable SSL support;
* MQTT_SSL_CREDENTIALS_TYPE -  Server credentials type. PEM - pem certificate file; KEYSTORE - java keystore;
* MQTT_SSL_PEM_CERT - Path to the server certificate file. Holds server certificate or certificate chain, may also include server private key;
* MQTT_SSL_PEM_KEY - Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;
* MQTT_SSL_PEM_KEY_PASSWORD - Optional server certificate private key password.

After completing the setup, start or restart the ThingsBoard server.

{% include templates/ssl/pem_files_location.md %}


### SSL configuration using Java keystore (deprecated)

Configure the following environment variables via [configuration](/docs/{{docsPrefix}}user-guide/install/config/) file, docker-compose or kubernetes scripts.
We will use **thingsboard.conf** for example:

```bash
...
export MQTT_SSL_ENABLED=true
export MQTT_SSL_CREDENTIALS_TYPE=KEYSTORE
export MQTT_SSL_KEY_STORE_TYPE=PKCS12
export MQTT_SSL_KEY_STORE=keystore.p12
export MQTT_SSL_KEY_STORE_PASSWORD=thingsboard
export MQTT_SSL_KEY_ALIAS=server
export MQTT_SSL_KEY_PASSWORD=thingsboard
...
```

where:

* MQTT_SSL_ENABLED - Enable/disable SSL support;
* MQTT_SSL_CREDENTIALS_TYPE - Server credentials type. PEM - pem certificate file; KEYSTORE - java keystore;
* MQTT_SSL_KEY_STORE_TYPE - Type of the key store supported by your Java distribution. PKCS12 is recommended.
* MQTT_SSL_KEY_STORE - Path to the key store that holds the SSL certificate. Holds server certificate or certificate chain and the private key;
* MQTT_SSL_KEY_STORE_PASSWORD - Password to access the key store;
* MQTT_SSL_KEY_ALIAS - Optional alias of the private key; If not set, the platform will load the first private key from the keystore;
* MQTT_SSL_KEY_PASSWORD - Optional password to access the private key. If not set, the platform will attempt to load the private keys that are not protected with the password;

After completing the setup, start or restart the ThingsBoard server.

{% include templates/ssl/jks_files_location.md %}

{% include docs/user-guide/ssl/self-signed-rsa.md %}

## Client Examples

See following resources:

- [Device Authentication options](/docs/{{docsPrefix}}user-guide/device-credentials/) for authentication options overview
- [Access Token based authentication](/docs/{{docsPrefix}}user-guide/access-token/) for example of **one-way SSL** connection
- [X.509 Certificate based authentication](/docs/{{docsPrefix}}user-guide/certificates/) for example of **two-way SSL** connection
