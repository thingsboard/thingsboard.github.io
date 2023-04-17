* TOC
{:toc}

ThingsBoard provides the ability to run CoAP server over DTLS. Both one-way and two-way DTLS are supported.
DTLS provisioning requires valid [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) certificates. 
ECDSA keys are smaller than RSA keys and thus more preferable for constrained devices. 
See comparison [article](https://sectigostore.com/blog/ecdsa-vs-rsa-everything-you-need-to-know/) for more details.
We recommend to use valid SSL certificates generated using trusted CA authorities and avoid spending time on resolving issues with [self-signed certificates](#self-signed-certificates-generation).
See instructions below on how to configure SSL for certificates stored in PEM file format or Java Keystore.


### SSL configuration using PEM certificates file

{% assign sinceVersion = "3.3.2" %}
{% include templates/since.md %}

Configure the following environment variables via [configuration](/docs/{{docsPrefix}}user-guide/install/config/) file, docker-compose or kubernetes scripts.
We will use **thingsboard.conf** for example:

```bash
...
export COAP_DTLS_ENABLED=true
export COAP_DTLS_CREDENTIALS_TYPE=PEM
export COAP_DTLS_PEM_CERT=server.pem
export COAP_DTLS_PEM_KEY=server_key.pem
export COAP_DTLS_PEM_KEY_PASSWORD=secret
...
```

where:

* COAP_DTLS_ENABLED - Enable/disable SSL support;
* COAP_DTLS_CREDENTIALS_TYPE -  Server credentials type. PEM - pem certificate file; KEYSTORE - java keystore;
* COAP_DTLS_PEM_CERT - Path to the server certificate file. Holds server certificate or certificate chain, may also include server private key;
* COAP_DTLS_PEM_KEY - Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;
* COAP_DTLS_PEM_KEY_PASSWORD - Optional server certificate private key password.

After completing the setup, start or restart the ThingsBoard server.

{% include templates/ssl/pem_files_location.md %}


### Additional configuration properties

You may configure following additional environment variables via [configuration](/docs/{{docsPrefix}}user-guide/install/config/) file, docker-compose or kubernetes scripts.

* COAP_DTLS_BIND_ADDRESS - the bind address for the secure CoAP server. Default value *0.0.0.0* indicates all interfaces;
* COAP_DTLS_BIND_PORT - the bind port for the secure CoAP server. Default value is *5684*;
* TB_COAP_X509_DTLS_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT - Skip certificate validity check for client certificates. Default value is *false*.
* TB_COAP_X509_DTLS_SESSION_INACTIVITY_TIMEOUT - Maximum inactivity time of DTLS session in milliseconds. Default value is *86400000* which corresponds to one day.
* TB_COAP_X509_DTLS_SESSION_REPORT_TIMEOUT - Frequency of periodic cleanup of inactive sessions. Default value is *1800000* which corresponds to 30 minutes.

{% include docs/user-guide/ssl/self-signed-ecc.md %}

## Client Examples

See following resources:

- [Access Token based authentication](/docs/{{docsPrefix}}user-guide/ssl/coap-access-token/) for example of **one-way SSL** connection;
- [X.509 Certificate based authentication](/docs/{{docsPrefix}}user-guide/ssl/coap-x509-certificates/) for example of **two-way SSL** connection.
