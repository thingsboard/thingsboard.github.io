* TOC
{:toc}

ThingsBoard provides the ability to run LwM2M server over DTLS. 
Platform supports Pre-Shared Key, Raw Public Key and X.509 Certificate credentials over DTLS.
DTLS provisioning requires valid [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) certificates. 
ECDSA keys are smaller than RSA keys and thus more preferable for constrained devices. 
See comparison [article](https://sectigostore.com/blog/ecdsa-vs-rsa-everything-you-need-to-know/) for more details.
We recommend to use valid SSL certificates generated using trusted CA authorities and avoid spending time on resolving issues with [self-signed certificates](#self-signed-certificates-generation).
See instructions below on how to configure SSL for certificates stored in PEM file format or Java Keystore.


### DTLS configuration using PEM certificates file

{% assign sinceVersion = "3.3.2" %}
{% include templates/since.md %}

Configure the following environment variables via [configuration](/docs/{{docsPrefix}}user-guide/install/config/) file, docker-compose or kubernetes scripts.
We will use **thingsboard.conf** for example:

```bash
...
export LWM2M_SERVER_CREDENTIALS_ENABLED=true
export LWM2M_SERVER_CREDENTIALS_TYPE=PEM
export LWM2M_SERVER_PEM_CERT=server.pem
export LWM2M_SERVER_PEM_KEY=server_key.pem
export LWM2M_SERVER_PEM_KEY_PASSWORD=secret
# To enable Bootstrap and Bootstrap over DTLS
export LWM2M_ENABLED_BS=true
export LWM2M_BS_CREDENTIALS_ENABLED=true
export LWM2M_BS_CREDENTIALS_TYPE=PEM
export LWM2M_BS_PEM_CERT=server.pem
export LWM2M_BS_PEM_KEY=server_key.pem
export LWM2M_BS_PEM_KEY_PASSWORD=secret
...
```

where:

* LWM2M_SERVER_CREDENTIALS_ENABLED - Enable/disable X509 Certificate/RPK credentials support;
* LWM2M_SERVER_CREDENTIALS_TYPE -  Server credentials type. PEM - pem certificate file; KEYSTORE - java keystore;
* LWM2M_SERVER_PEM_CERT - Path to the server certificate file. Holds server certificate or certificate chain, may also include server private key;
* LWM2M_SERVER_PEM_KEY - Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;
* LWM2M_SERVER_PEM_KEY_PASSWORD - Optional server certificate private key password.

After completing the setup, start or restart the ThingsBoard server.

{% include templates/ssl/pem_files_location.md %}


### Additional configuration properties

You may configure following additional environment variables via [configuration](/docs/{{docsPrefix}}user-guide/install/config/) file, docker-compose or kubernetes scripts.

* LWM2M_SECURITY_BIND_ADDRESS - the bind address for the secure LwM2M server. Default value *0.0.0.0* indicates all interfaces;
* LWM2M_SECURITY_BIND_PORT - the bind port for the secure LwM2M server. Default value is *5686*;
* TB_LWM2M_SERVER_SECURITY_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT - Skip certificate validity check for client certificates. Default value is *false*.
* LWM2M_BS_SECURITY_BIND_ADDRESS - the bind address for the secure LwM2M Bootstrap server. Default value *0.0.0.0* indicates all interfaces;
* LWM2M_BS_SECURITY_BIND_PORT - he bind port for the secure LwM2M Bootstrap server. Default value is *5688*;

{% include docs/user-guide/ssl/self-signed-ecc.md %}

## Client Examples

See following resources:

- [Access Token based authentication](/docs/{{docsPrefix}}user-guide/ssl/coap-access-token/) for example of **one-way SSL** connection;
- [X.509 Certificate based authentication](/docs/{{docsPrefix}}user-guide/ssl/coap-x509-certificates/) for example of **two-way SSL** connection.
