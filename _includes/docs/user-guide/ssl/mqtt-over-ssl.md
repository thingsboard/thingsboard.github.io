* TOC
{:toc}

ThingsBoard provides the ability to run MQTT server over SSL. Both one-way and two-way SSL are supported.

Most of the ThingsBoard environments use the load balancer as a termination point for the SSL connection between the devices and the platform.
In other words, MQTT traffic is encrypted between the device and the load balancer, but is decrypted between the load balancer and platform services.
The advantage of such an option is the simplicity of configuration. 
Most of the cloud load balancers (AWS, Google cloud, etc) have built-in certificate generation tools and rich documentation how to configure SSL over TCP.
The disadvantage of such an option is that two-way SSL is not possible. The information about client certificate is not passed from the load balancer to the platform services. 

Nevertheless, it is possible to configure ThingsBoard to two-way SSL for MQTT and avoid SSL termination on the Load Balancer.
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

### Additional configuration properties

You may configure following additional environment variables via [configuration](/docs/{{docsPrefix}}user-guide/install/config/) file, docker-compose or kubernetes scripts.

 * MQTT_SSL_BIND_ADDRESS - the bind address for the MQTT server. Default value *0.0.0.0* indicates all interfaces;
 * MQTT_SSL_BIND_PORT - the bind port for the MQTT server. Default value is *8883*;
 * MQTT_SSL_PROTOCOL - ssl protocol name. Default value is *TLSv1.2*. See [java doc](https://docs.oracle.com/en/java/javase/11/docs/specs/security/standard-names.html#sslcontext-algorithms) for more details;
 * MQTT_SSL_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT - Skip certificate validity check for client certificates. Default value is *false*.

{% include docs/user-guide/ssl/self-signed-ecc.md %}

## Client Examples

See following resources:

 - [Device Authentication options](/docs/{{docsPrefix}}user-guide/device-credentials/) for authentication options overview
 - [Access Token based authentication](/docs/{{docsPrefix}}user-guide/access-token/) for example of **one-way SSL** connection 
 - [X.509 Certificate based authentication](/docs/{{docsPrefix}}user-guide/certificates/) for example of **two-way SSL** connection
