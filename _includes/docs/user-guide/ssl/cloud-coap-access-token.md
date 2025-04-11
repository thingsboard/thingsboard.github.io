* TOC
{:toc}

Access Token Based Authentication is the default device authentication type.
The unique access token is generated once the device is created in ThingsBoard. It can be changed afterwards.
The client must specify the access token as part of CoAP request URL.

### Plain CoAP (without TLS)

Let's review a simple command to upload temperature readings using Access Token **YOUR_ACCESS_TOKEN** to {{hostLabel}}.
See [CoAP API](/docs/{{docsPrefix}}reference/coap-api/) for more details. The command is using plain CoAP without TLS:

```bash
coap-client -v 6 -m POST coap://{{coapHostName}}/api/v1/YOUR_ACCESS_TOKEN/telemetry -t json -e "{temperature:25}"
```
{: .copy-code}

The above command requires coap-client library that you can install using the following commands:

- **Ubuntu 20.04:** sudo apt install libcoap2-bin
- **Ubuntu 18.04:** sudo apt install libcoap1-bin

Don't forget to replace **YOUR_ACCESS_TOKEN** with the access token of your device.

### DTLS support (One-way TLS)

CoAP access token-based authentication over DTLS is a standard authentication mode where the client device verifies the server’s identity using a server certificate.

> **Note:** "One-way TLS" means the client verifies the server, but the server does not verify the client.

When a CoAP client connects to a server, it ensures the server's authenticity by verifying that the certificate is not expired and is trusted by the client.
A certificate is considered trusted if:

- It is issued by a well-known Certificate Authority (CA), such as [Let’s Encrypt](https://letsencrypt.org/).
- It is present in the client’s trust store.

To establish trust, the CoAP client must always provide the CA certificate used to sign the server’s certificate. Unlike some HTTPS implementations that rely on a system trust store, CoAP clients using DTLS require explicit CA certificate configuration.

Before we explore usage examples, we need to install a CoAP client that supports DTLS.

#### Install the CoAP client with DTLS support

{% include templates/coap-dtls/coap-client-dtls.md %}

#### Example:

Since the CoAP client must always provide the CA certificate for verification,
use the `-R` flag followed by the path to a PEM file containing the trusted root CA certificates.
ThingsBoard Team has already provisioned a valid certificate for [{{hostLabel}}](https://{{hostName}}/signup){:target="_blank"}.

Please download the CA root certificate using this [**link**](/docs/{{docsPrefix}}user-guide/resources/coap-over-dtls/ca-root.pem) and save it to your working directory as "**ca-root.pem**".

```bash
wget https://thingsboard.io/docs/{{docsPrefix}}user-guide/resources/coap-over-dtls/ca-root.pem
```
{: .copy-code}

Now you may use the *ca-root.pem* to setup secure connection to {{hostLabel}} and Access Token **YOUR_ACCESS_TOKEN** to authenticate the device to upload telemetry:

```bash
coap-client-openssl -v 6 -m POST  -R ca-root.pem -t "application/json" -e '{"temperature":42}' coaps://{{coapHostName}}/api/v1/YOUR_ACCESS_TOKEN/telemetry
```
{: .copy-code}

Don't forget to replace **YOUR_ACCESS_TOKEN** with the access token of your device.