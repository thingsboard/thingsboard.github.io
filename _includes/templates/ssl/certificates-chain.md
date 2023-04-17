#### X.509 Certificate chain:

#### Step 1. Prepare your server and certificate chain

ThingsBoard Team has already provisioned a valid certificate for [ThingsBoard Cloud](https://thingsboard.cloud/signup).
Follow the [MQTT over SSL](/docs/{{docsPrefix}}user-guide/mqtt-over-ssl/) guide to provision server certificate if you are hosting your own ThingsBoard instance.

Once provisioned, you should prepare a certificate chain in pem format. This chain will be used by mqtt client to validate the server certificate.
Save the chain to your working directory as "**tb-server-chain.pem**".
An example of certificate chain for *mqtt.thingsboard.cloud* is located [here](/mqtt-over-ssl/tb-cloud-chain.pem).

#### Step 2. Generate Client certificate chain

Use the following command to generate the self-signed private keys, certificate signing requests and x509 certificates
for each level of chain. The commands are based on the **openssl** tool which is most likely already installed on your workstation:

To generate client certificate chain you need to create self-signed root certificate, then create self-signed intermediate certificate that
was signed by the root, and finally, create a leaf certificate that was signed by the intermediate.

To generate the RSA based key and Root certificate, use:

```bash
openssl req -x509 -newkey rsa:4096 -keyout rootKey.pem -out rootCert.pem -sha256 -days 365 -nodes
```
{: .copy-code}

To generate the RSA based key and Intermediate certificate, signed by Root certificate, use:
```bash
openssl req -new -newkey rsa:4096 -keyout intermediateKey.pem -out intermediate.csr -sha256 -nodes
openssl x509 -req -in intermediate.csr -out intermediateCert.pem -CA rootCert.pem -CAkey rootKey.pem -days 365 -sha256
```
{: .copy-code}

To generate the RSA based key and Leaf certificate, signed by Intermediate certificate, use:
```bash
openssl req -new -newkey rsa:4096 -keyout leafKey.pem -out leaf.csr -sha256 -nodes
openssl x509 -req -in leaf.csr -out leafCert.pem -CA intermediateCert.pem -CAkey intermediateKey.pem -days 365 -sha256
```
{: .copy-code}

Finally, you need to concatenate certificates into a chain starting from the leaf certificate till the root.
```bash
cat leafCert.pem intermediateCert.pem rootCert.pem > chain.pem
```
{: .copy-code}

The output of the commands will be private keys and certificates for each level of chain. In the next steps
we will use leaf key file *leafKey.pem* and a chain of certificates *chain.pem*.

#### Step 3. Provision Client Intermediate Public Key as Device Profile X509 provision strategy

Go to **ThingsBoard Web UI -> Profiles -> Device profiles -> Your Device profile -> Device provisioning**.
Select **X.509 Certificates Chain** provision strategy, insert the contents of *intermediateCert.pem* file
and regular expression pattern to fetch common name from *leafCert.pem*, choose allow to create new devices or not and click save.
Alternatively, the same can be done through the [REST API](/docs/{{docsPrefix}}reference/rest-api/).

#### Step 4. Test the connection

Execute the following command to upload temperature readings to ThingsBoard Cloud using secure channel:

```bash
mosquitto_pub --cafile tb-server-chain.pem -d -q 1 -h "YOUR_TB_HOST" -p "8883" \
-t "v1/devices/me/telemetry" --key leafKey.pem --cert chain.pem -m {"temperature":25}
```
{: .copy-code}

Don't forget to replace **YOUR_TB_HOST** with the host of your ThingsBoard instance.
