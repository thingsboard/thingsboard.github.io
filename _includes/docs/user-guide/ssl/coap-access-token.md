* TOC 
{:toc}
  
Access Token Based Authentication is the default device authentication type. Once the device is created in ThingsBoard, the default access token is generated. It can be changed afterwards.
In order to connect the device to a server using Access Token based authentication, the client must specify the access token as part of CoAP request URL.
See [CoAP API](/docs/{{docsPrefix}}reference/coap-api/) for more details.

### DTLS support (One-way TLS)

CoAP access token-based authentication over DTLS is a standard authentication mode where the client device verifies the server’s identity using a server certificate.

> **Note:** "One-way TLS" means the client verifies the server, but the server does not verify the client.

When a CoAP client connects to a server, it ensures the server's authenticity by verifying that the certificate is not expired and is trusted by the client. 
A certificate is considered trusted if:

 - It is issued by a well-known Certificate Authority (CA), such as [Let’s Encrypt](https://letsencrypt.org/).
 - It is present in the client’s trust store.

If the certificate is not automatically trusted, the client must explicitly provide the CA certificate for verification.
If trust verification fails, the connection will be rejected with an "**Unknown CA**" error.
Before we explore usage examples, we need to install a CoAP client that supports DTLS.

#### Install the CoAP client with DTLS support

{% include templates/coap-dtls/coap-client-dtls.md %}

#### Example 1: Connecting to a server with a trusted certificate.

publish time-series data:

```bash
coap-client-openssl -v 9 -m POST -t "application/json" -e '{"temperature":42}' coaps://{{coapHostName}}/api/v1/YOUR_ACCESS_TOKEN/telemetry
```
{: .copy-code}

subscribe for shared attributes updates:

```bash
coap-client-openssl -v 9 -B 3600 -s 3600 coaps://{{coapHostName}}/api/v1/YOUR_ACCESS_TOKEN/attributes
```
{: .copy-code}

where,

- *-B 3600* - Break operation after waiting given seconds;
- *-s 3600* - Subscribe to / Observe resource for given duration in seconds.

Don't forget to replace **{{coapHostName}}** with the host of your ThingsBoard instance and **YOUR_ACCESS_TOKEN** with the access token of your device.

#### Example 2: Connecting to a server with a private CA certificate.

Since the server’s certificate is issued by a private CA, the client must explicitly provide the CA certificate for verification. 
To do this, we need to add the `-R` flag followed by the path to a PEM file containing the trusted root CA certificates. This ensures the client can verify the server’s identity.

Follow the [CoAP over DTLS](/docs/{{docsPrefix}}user-guide/coap-over-dtls/) guide to provision server certificate if you are hosting your own ThingsBoard instance.
An example of CA certificate for *{{coapHostName}}* is located [here](/docs/paas/user-guide/resources/coap-over-dtls/ca.pem).

> **Note:** If you are using self-signed certificate creation, it is required to use the advanced Certificate PEM File signed by a certificate authority (CA) [method](/docs/{{docsPrefix}}user-guide/coap-over-dtls/#certificate-pem-file-signed-by-a-certificate-authority-ca). 
> This ensures that your server certificate is signed by a CA, and this CA can be used by clients to verify the server's identity.

Now you may use the "**ca.pem**" to setup secure connection to your ThingsBoard instance **YOUR_TB_HOST** and Access Token **YOUR_ACCESS_TOKEN** to authenticate the device to upload telemetry:

```bash
coap-client-openssl -v 9 -m POST  -R ca.pem -t "application/json" -e '{"temperature":42}' coaps://YOUR_TB_HOST:5684/api/v1/YOUR_ACCESS_TOKEN/telemetry
```
{: .copy-code}

where,

- *-R ca.pem* - PEM file containing the set of trusted root CAs that are to be used to validate the server certificate.

Don't forget to replace **YOUR_TB_HOST** with the host of your ThingsBoard instance and **YOUR_ACCESS_TOKEN** with the access token of your device.
