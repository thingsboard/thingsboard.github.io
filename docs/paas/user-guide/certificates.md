---
layout: docwithnav-paas
assignees:
- ashvayka
title: X.509 Certificate Based Authentication
description: ThingsBoard  X.509 Certificate based authentication for IoT devices and projects.

---

{% assign docsPrefix = "paas/" %}


X.509 Certificates are used to setup [mutual](https://en.wikipedia.org/wiki/Mutual_authentication) (two-way) authentication for MQTT over TLS.
It is similar to [access token](/docs/{{docsPrefix}}user-guide/access-token/) authentication, but uses X.509 Certificate instead of token.

Instructions below will describe how to connect MQTT client using X.509 Certificate to ThingsBoard Cloud.

#### Step 1. Download Server certificate chain

The client device verifies the identity of a server using server certificate. ThingsBoard Cloud uses a valid certificate.
Please download the certificate chain using this [**link**](/docs/{{docsPrefix}}user-guide/resources/mqtt-over-ssl/tb-cloud-chain.pem)
and save it to your working directory as "**tb-cloud-chain.pem**".

#### Step 2. Generate Client certificate

Use the following command to generate the self-signed private key and x509 certificate. 
The command is based on the **openssl** tool which is most likely already installed on your workstation:

To generate the RSA based key and certificate, use:

```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365 -nodes
```
{: .copy-code}

To generate the EC based key and certificate, use:

```bash
openssl ecparam -out key.pem -name secp256r1 -genkey
openssl req -new -key key.pem -x509 -nodes -days 365 -out cert.pem 
```
{: .copy-code}

The output of the command will be a private key file *key.pem* and a public certificate *cert.pem*. 
We will use them in next steps.

#### Step 3. Provision Client Public Key as Device Credentials

Go to **ThingsBoard Web UI -> Device Groups -> Group "All" -> Your Device -> Device Credentials**. 
Select **X.509 Certificate** device credentials, insert the contents of *cert.pem* file and click save.
Alternatively, the same can be done through the [REST API](/docs/{{docsPrefix}}reference/rest-api/).

#### Step 4. Test the connection

Execute the following command to upload temperature readings to ThingsBoard Cloud using secure channel:

```bash
mosquitto_pub --cafile tb-cloud-chain.pem -d -q 1 -h "mqtt.thingsboard.cloud" -p "8883" \
-t "v1/devices/me/telemetry" --key key.pem --cert cert.pem -m {"temperature":25}
```
{: .copy-code}
