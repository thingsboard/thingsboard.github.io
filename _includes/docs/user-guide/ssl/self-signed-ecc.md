### Self-signed certificates generation

Use instructions below to generate your own certificate files. Useful for tests, but time consuming and not recommended for production.

#### PEM certificate file

**Note** This step requires Linux based OS with openssl installed.

To generate a server self-signed PEM certificate and private key, use the following command:

```bash
openssl ecparam -out server_key.pem -name secp256r1 -genkey
openssl req -new -key server_key.pem -x509 -nodes -days 365 -out server.pem 
```
{: .copy-code}

You can also add -nodes (short for no DES) if you don't want to protect your private key with a passphrase. Otherwise, it will prompt you for "at least a 4 character" password.

The **days** parameter (365) you can replace with any number to affect the expiration date. It will then prompt you for things like "Country Name", but you can just hit Enter and accept the defaults.

Add -subj '/CN=localhost' to suppress questions about the contents of the certificate (replace localhost with your desired domain).

Self-signed certificates are not validated with any third party unless you import them to the browsers previously. If you need more security, you should use a certificate signed by a certificate authority (CA).
