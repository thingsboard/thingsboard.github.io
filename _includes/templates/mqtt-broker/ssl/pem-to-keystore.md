## Convert PEM certificate and private key to PKCS12 keystore

Make sure you have the following files:

* `server.pem` – the public certificate (may include the chain);
* `server_key.pem` – the private key;
* (Optional) `ca.pem` – root or intermediate CA certificates.

Run the following command to create a PKCS12 keystore file (`keystore.p12`):

```bash
openssl pkcs12 -export \
  -in server.pem \
  -inkey server_key.pem \
  -certfile ca.pem \
  -out keystore.p12 \
  -name tbmq \
  -passout pass:changeit
```
{: .copy-code}

> `-certfile ca.pem \` line is optional, include if you have a CA certificate chain.
>
> Replace `changeit` with your desired keystore password. You will reference this password in your environment variables.

### Tips and best practices

* For production use, we **recommend PKCS12** (`.p12`) format as it is more interoperable than JKS.
* Make sure your certificate chain is complete (including intermediates) when exporting.
