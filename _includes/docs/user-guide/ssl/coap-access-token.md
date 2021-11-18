* TOC 
{:toc}
  
Access Token Based Authentication is the default device authentication type. Once the device is created in ThingsBoard, the default access token is generated. It can be changed afterwards.
In order to connect the device to a server using Access Token based authentication, the client must specify the access token as part of CoAP request URL.
See [CoAP API](/docs/{{docsPrefix}}reference/coap-api/) for more details.

CoAP AccessToken based authentication over DTLS is a standard authentication mode, where your client device verifies the identity of a server using server certificate.
In order to run CoAP AccessToken based authentication over DTLS, the server certificate chain should be signed by authorized CA or client must import the self-signed server certificate (.cer or .pem) to its trust store.
Otherwise, a connection will fail with the 'Unknown CA' error.

The coap-client example below demonstrates how to connect to [ThingsBoard Cloud](https://thingsboard.cloud/signup) or to any other ThingsBoard CoAP server that has valid and trusted certificate.

### Connect DTLS CoAP Client using access token 

{% include templates/coap-dtls/coap-client-dtls.md %}

Finally, run the example script below to validate DTLS with access token (replace YOUR_ACCESS_TOKEN with your access token) auth:

publish time-series data:

```bash
coap-client-openssl -v 9 -m POST -t "application/json" -e '{"temperature":42}' coaps://coap.thingsboard.cloud/api/v1/YOUR_ACCESS_TOKEN/telemetry
```
{: .copy-code}

subscribe for shared attributes updates:

```bash
coap-client-openssl -v 9 -B 3600 -s 3600 coaps://coap.thingsboard.cloud/api/v1/YOUR_ACCESS_TOKEN/attributes
```
{: .copy-code}

where,

- *-B 3600* - Break operation after waiting given seconds;
- *-s 3600* - Subscribe to / Observe resource for given duration in seconds.

Don't forget to replace **coap.thingsboard.cloud** with the host of your ThingsBoard instance and **YOUR_ACCESS_TOKEN** with the access token of your device.