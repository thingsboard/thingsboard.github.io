
#### Step 1. Prepare your server and client certificate

Follow the [MQTT over SSL](/docs/{{docsPrefix}}mqtt-broker/security/mqtts/) guide to provision server certificate if you are hosting your own TBMQ instance.

Once provisioned, you should prepare a CA root certificate in pem format. This certificate will be used by MQTT clients to validate the server certificate.
Save the CA root certificate to your working directory as "**ca.pem**".

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
openssl ecparam -out key.pem -name prime256v1 -genkey
openssl req -new -key key.pem -x509 -nodes -days 365 -out cert.pem 
```
{: .copy-code}

The output of the command will be a private key file *key.pem* and a public certificate *cert.pem*.
We will use them in next steps.

#### Step 3. Provision Client Public Key in MQTT Client Credentials

Go to **TBMQ Web UI -> Authentication -> Credentials -> Create new or update exising one**.
Select **X.509 Certificate Chain** type, insert the CN of *cert.pem* file.

#### Step 4. Trust the certificate

For the MQTT client to establish a secure TLS connection, its certificate must be trusted.
If the certificate is signed by a well-known public CA, it is already trusted by default.
If it is a self-signed, import the client certificate (`cert.pem`) into the Java truststore used by TBMQ.

Run the [following command](/docs/{{docsPrefix}}mqtt-broker/security/mqtts/#adding-certificate-into-java-truststore) to import the certificate into the truststore.

#### Step 5. Test the connection

Execute the following command to upload temperature readings to TBMQ using secure channel:

```bash
mosquitto_pub --cafile ca.pem -d -q 1 -h "YOUR_TBMQ_HOST" -p "8883" \
-t "sensors/temperature" --key key.pem --cert cert.pem -m {"temperature":25}
```
{: .copy-code}

Don't forget to replace **YOUR_TBMQ_HOST** with the host of your TBMQ instance.
