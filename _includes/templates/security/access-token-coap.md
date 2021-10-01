CoAP AccessToken based authentication over DTLS is a standard authentication mode, where your client device verifies the identity of a server using server certificate.
In order to run CoAP AccessToken based authentication over DTLS, the server certificate chain should be signed by authorized CA or client must import the self-signed server certificate (.cer or .pem) to its trust store. 
Otherwise, a connection will fail with the 'Unknown CA' error.

The coap-client example below demonstrates how to connect to [ThingsBoard Cloud](https://thingsboard.cloud/signup) or to any other ThingsBoard CoAP server.

Assuming you plan to use your own server with self-signed certificate, you will need to have the public key of server certificate in PEM format. 
See [following instructions](/docs/{{docsPrefix}}user-guide/coap-over-dtls/#self-signed-certificate-generation) for more details on server-side configuration.

### Run DTLS accessToken CoAP Client

{% include templates/coap-dtls/coap-client-dtls.md %}

Finally, run the example script below to validate DTLS with access token auth and subscribe for shared attributes updates:

```bash
coap-client-openssl -v 9 -B $BREAK_OPERATION_TIMEOUT -s $OBSERVE_TIMEOUT coaps://thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

where, 

- $BREAK_OPERATION_TIMEOUT - Break operation after waiting given seconds(default is 90)
- $OBSERVE_TIMEOUT - Subscribe to / Observe resource for given duration in seconds

If everything was configured correctly, the output should be like:

```bash
TODO: PUT EXAMPLE OUTPUT HERE
```