## Self-signed certificates generation

Use the instructions below to generate your own certificate files. Useful for tests, but time-consuming and not recommended for production.

> **Note:** These steps require Linux-based OS with openssl installed.

You need to either create a self-signed certificate for the server or follow the advanced steps to create a CA-signed server certificate. 
Both methods achieve the same goal: securing your server with a valid certificate.

#### Self-signed certificate PEM file

This is a simpler method where the server generates its own certificate and signs it. 
Useful for basic testing or small setups where you don't need a Certificate Authority (CA).
To generate a server self-signed PEM certificate and private key, use the following command:

```bash
openssl ecparam -out server_key.pem -name secp256r1 -genkey
openssl req -new -key server_key.pem -x509 -nodes -days 365 -out server.pem 
```
{: .copy-code}

You can also add `-nodes` (short for no DES) if you don't want to protect your private key with a passphrase. Otherwise, it will prompt you for "at least a 4 character" password.

The **days** parameter (365) you can replace with any number to affect the expiration date. It will then prompt you for things like "Country Name", but you can just hit Enter and accept the defaults.

Add `-subj '/CN=localhost'` to suppress questions about the contents of the certificate (replace localhost with your desired domain).

Self-signed certificates are not validated with any third party unless you import them to the browsers previously. If you need more security, you should use a certificate signed by a certificate authority (CA).

#### Certificate PEM File signed by a certificate authority (CA)

This method creates a Certificate Authority (CA) to sign your server certificate. For more secure setups,
particularly if you plan to manage multiple certificates or require a dedicated Certificate Authority (CA) for signing.

**Generate a CA private key:**

```bash
openssl ecparam -out ca_key.pem -name secp256r1 -genkey
```
{: .copy-code}

**Generate a self-signed CA certificate:**

```bash
openssl req -new -x509 -key ca_key.pem -days 365 -out ca.pem
```
{: .copy-code}

This creates a self-signed CA certificate "**ca.pem**" valid for 365 days. When prompted, fill out the certificate details (e.g., Common Name: My Root CA).

**Generate a private key for the server:**

```bash
openssl ecparam -out server_key.pem -name secp256r1 -genkey
```
{: .copy-code}

This generates an **EC private key: server_key.pem**.

**Create a Certificate Signing Request (CSR):**

```bash
openssl req -new -key server_key.pem -out server.csr
```
{: .copy-code}

The CSR "**server.csr**" contains the server's details to be signed by the CA.

**Finally, Sign the server certificate using the CA:**

```bash
openssl x509 -req -in server.csr -CA ca.pem -CAkey ca_key.pem -CAcreateserial -out server.pem -days 365
```
{: .copy-code}

This command produces "**server.pem**", a server certificate signed by the CA.

`-req` - indicates that the input is a Certificate Signing Request (CSR).
`-CA` and `-CAkey` - specify the CA certificate "**ca.pem**" and its private key "**ca_key.pem**" used to sign the server certificate.

The `-CAcreateserial` flag automatically generates a serial number file "**ca.srl**" to keep track of certificate serial numbers for this CA. 
This is useful if you plan to sign multiple certificates. If you don’t want to generate "**ca.srl**", replace `-CAcreateserial` with `-set_serial <serial_number>` to specify the serial number manually.
