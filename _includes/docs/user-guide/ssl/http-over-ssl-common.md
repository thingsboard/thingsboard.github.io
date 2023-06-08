The advantage of such options is a simple configuration. 
Most of the cloud load balancers (AWS, Google cloud, etc) have built-in certificate generation tools and rich documentation how to configure SSL.

Nevertheless, it is possible to configure ThingsBoard to enable SSL and avoid SSL termination on the Load Balancer. 
We recommend to use valid SSL certificates generated using trusted CA authorities and avoid spending time on resolving issues with [self-signed certificates](#self-signed-certificates-generation). 
See instructions below on how to configure SSL for certificates stored in PEM file format or Java Keystore.   

### SSL configuration using PEM certificates file

{% assign sinceVersion = "3.3.2" %}
{% include templates/since.md %}

Configure the following environment variables via [configuration](/docs/{{docsPrefix}}user-guide/install/config/) file, docker-compose or kubernetes scripts. 
We will use **thingsboard.conf** for example:

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

 * SSL_ENABLED - Enable/disable SSL support;
 * SSL_CREDENTIALS_TYPE -  Server credentials type. PEM - pem certificate file; KEYSTORE - java keystore;
 * SSL_PEM_CERT - Path to the server certificate file. Holds server certificate or certificate chain, may also include server private key;
 * SSL_PEM_KEY - Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;
 * SSL_PEM_KEY_PASSWORD - Optional server certificate private key password.

After completing the setup, start or restart the ThingsBoard server.

{% include templates/ssl/pem_files_location.md %}


{% include docs/user-guide/ssl/self-signed-ecc.md %}