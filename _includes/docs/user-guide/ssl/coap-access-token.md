* TOC 
{:toc}
  
Access Token Based Authentication is the default device authentication type. Once the device is created in ThingsBoard, the default access token is generated. It can be changed afterwards.
In order to connect the device to a server using Access Token based authentication, the client must specify the access token as part of CoAP request URL.
See [CoAP API](/docs/{{docsPrefix}}reference/coap-api/) for more details.

CoAP AccessToken based authentication over DTLS is a standard authentication mode, where your client device verifies the identity of a server using server certificate.
In order to run CoAP AccessToken based authentication over DTLS, the server certificate chain should be signed by authorized CA or client must import the self-signed server certificate (.cer or .pem) to its trust store.
Otherwise, a connection will fail with the 'Unknown CA' error.

The coap-client example below demonstrates how to connect to [ThingsBoard Cloud](https://{{hostName}}/signup) or to any other ThingsBoard CoAP server that has valid and trusted certificate.

## Connect DTLS CoAP Client using access token 

### Plain CoAP (without TLS)

Let's
review a simple command
to upload temperature readings using Access Token **YOUR_ACCESS_TOKEN** to ThingsBoard instance **YOUR_TB_HOST**.
See [CoAP API](/docs/{{docsPrefix}}reference/coap-api/) for more details. The command is using plain CoAP without TLS:

```bash
coap-client -v 6 -m POST coap://YOUR_TB_HOST:5683/api/v1/YOUR_ACCESS_TOKEN/telemetry -t json -e "{temperature:25}"
```
{: .copy-code}

The above command requires coap-client library that you can install using the following commands: 

 - **Ubuntu 20.04:** sudo apt install libcoap2-bin
 - **Ubuntu 18.04:** sudo apt install libcoap1-bin

Don't forget to replace **YOUR_TB_HOST** with the host of your ThingsBoard instance and **YOUR_ACCESS_TOKEN** with the access token of your device.

### DTLS support (One-way TLS)

CoAP access token-based authentication over DTLS is a standard authentication mode where the client device verifies the server’s identity using a server certificate.

> **Note:** "One-way TLS" means the client verifies the server, but the server does not verify the client.

When a CoAP client connects to a server, it ensures the server's authenticity by verifying that the certificate is not expired and is trusted by the client. 
A certificate is considered trusted if:

 - It is issued by a well-known Certificate Authority (CA), such as [Let’s Encrypt](https://letsencrypt.org/).
 - It is present in the client’s trust store.

To establish trust, the CoAP client must always provide the CA certificate used to sign the server’s certificate. Unlike some HTTPS implementations that rely on a system trust store, CoAP clients using DTLS require explicit CA certificate configuration.

If the CA certificate is not provided, the connection may still succeed, but certificate verification will be disabled, 
meaning the client will accept any certificate presented by the server without checking its authenticity. 

```bash
127.0.0.1:35046 <-> 127.0.0.1:5684 DTLS: unable to get local issuer certificate: overridden: 'localhost' depth=0
127.0.0.1:35046 <-> 127.0.0.1:5684 DTLS: unable to get certificate CRL: overridden: 'localhost' depth=0
127.0.0.1:35046 <-> 127.0.0.1:5684 DTLS: unable to verify the first certificate: overridden: 'localhost' depth=0
```

Despite these warnings, the handshake continues successfully:

```bash
127.0.0.1:35046 <-> 127.0.0.1:5684 DTLS: Using cipher: ECDHE-ECDSA-AES256-GCM-SHA384
```

This can expose the connection to man-in-the-middle (MITM) attacks and should be avoided in production environments.
For enhanced security, consider using [Two-Way DTLS](/docs/{{docsPrefix}}user-guide/ssl/coap-x509-certificates/), 
where both the client and server verify each other’s certificates.

Before we explore usage examples, we need to install a CoAP client that supports DTLS.

#### Install the CoAP client with DTLS support

{% include templates/coap-dtls/coap-client-dtls.md %}

#### Example: 

Since the CoAP client must always provide the CA certificate for verification, 
use the `-R` flag followed by the path to a PEM file containing the trusted root CA certificates.

{% unless docsPrefix contains "paas/" %}
Follow the [CoAP over DTLS](/docs/{{docsPrefix}}user-guide/coap-over-dtls/) guide to provision server certificate if you are hosting your own ThingsBoard instance.
{% endunless %}

Once provisioned, you should prepare a CA root certificate in pem format. This certificate will be used by CoAP client to validate the server certificate.
Save the CA root certificate to your working directory as "**ca-root.pem**".

Now you may use the "**ca.pem**" to setup secure connection to your ThingsBoard instance **YOUR_TB_HOST** and Access Token **YOUR_ACCESS_TOKEN** to authenticate the device to upload telemetry:

```bash
coap-client-openssl -v 6 -m POST  -R ca-root.pem -t "application/json" -e '{"temperature":42}' coaps://YOUR_TB_HOST/api/v1/YOUR_ACCESS_TOKEN/telemetry
```
{: .copy-code}

Don't forget to replace **YOUR_TB_HOST** with the host of your ThingsBoard instance and **YOUR_ACCESS_TOKEN** with the access token of your device.
