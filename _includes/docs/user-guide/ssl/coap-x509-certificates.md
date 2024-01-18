* TOC
{:toc}

X.509 Certificates are used to setup [mutual](https://en.wikipedia.org/wiki/Mutual_authentication) (two-way) authentication for CoAP over DTLS.
It is similar to [access token](/docs/{{docsPrefix}}user-guide/access-token/) authentication, but uses X.509 Certificate instead of token.

Instructions below will describe how to connect CoAP client using X.509 Certificate to ThingsBoard Cloud.

#### Step 1. Generate Client certificate

Use the following command to generate the self-signed EC based private key and x509 certificate.
The command is based on the **openssl** tool which is most likely already installed on your workstation:

```bash
openssl ecparam -out key.pem -name secp256r1 -genkey
openssl req -new -key key.pem -x509 -nodes -days 365 -out cert.pem 
```
{: .copy-code}

The output of the command will be a private key file *key.pem* and a public certificate *cert.pem*.
We will use them in next steps.

#### Step 2. Provision Client Public Key as Device Credentials
{% if docsPrefix == 'pe/' %}
Go to **ThingsBoard Web UI -> Device Groups -> Group "All" -> Your Device -> Device Credentials**.
{% else %}
Go to **ThingsBoard Web UI -> Devices -> Your Device -> Device Credentials**.
{% endif %}
Select **X.509 Certificate** device credentials, insert the contents of *cert.pem* file and click save.
Alternatively, the same can be done through the [REST API](/docs/{{docsPrefix}}reference/rest-api/).

#### Step 3. Connect DTLS CoAP Client using X.509 certificate

{% include templates/coap-dtls/coap-client-dtls.md %}

Finally, run the example script below to validate DTLS with X.509 Certificate auth and subscribe for shared attributes updates:
The coap-client example below demonstrates how to connect to [ThingsBoard Cloud](https://thingsboard.cloud/signup) or to any other ThingsBoard CoAP server that has valid and trusted certificate.

```bash
coap-client-openssl -v 9 -c cert.pem  -j key.pem -m POST \
-t "application/json" -e '{"temperature":43}' coaps://coap.thingsboard.cloud/api/v1/telemetry
```
{: .copy-code}

Don't forget to replace **coap.thingsboard.cloud** with the host of your ThingsBoard instance.

