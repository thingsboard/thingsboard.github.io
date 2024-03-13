Follow the instructions below to generate your own certificate files. This approach is useful for testing but is time-consuming and not recommended for production environments.

#### Generate a Private Key

Generate a new private key using the command below. This will create a 2048-bit RSA private key and store it in a file named `privateKey.pem`:

```bash
openssl genpkey -algorithm RSA -out privateKey.pem -pkeyopt rsa_keygen_bits:2048
```
{: .copy-code}

#### Generate a Certificate Signing Request (CSR)

Next, use your private key to generate a CSR. 
You will need to provide details such as your organization's name, common name (domain name), and an email address, which will be included in the certificate's subject field. 
Save the CSR as `certRequest.csr`:

```bash
openssl req -new -key privateKey.pem -out certRequest.csr
```
{: .copy-code}

{% capture common_name_localhost %}
If your ThingsBoard server is running locally, ensure you set 'localhost' as the common name (domain name) when generating your certificate. 
If the server is hosted, use its domain name. 

SSL connections will fail if the certificate's domain name does not match the server's hostname.
{% endcapture %}
{% include templates/warn-banner.md content=common_name_localhost %}


#### Generate a Self-Signed Certificate

Finally, create a self-signed certificate from your CSR. The following command generates a certificate named `certFile.crt`, valid for 365 days. You can modify the `-days` parameter to adjust the certificate's validity period:

```bash
openssl x509 -req -in certRequest.csr -signkey privateKey.pem -out certFile.crt -days 365
```
{: .copy-code}

#### Enable SSL Communication on the Server

For both Ubuntu and CentOS/RHEL installations, enable SSL communication server-side with the following command:

```bash
sudo sh -c 'cat <<EOL >> /etc/thingsboard/conf/thingsboard.conf
export EDGES_RPC_SSL_ENABLED=true
export EDGES_RPC_SSL_CERT=certFile.crt
export EDGES_RPC_SSL_PRIVATE_KEY=privateKey.pem
EOL'
```
{: .copy-code}

Restart the server to apply the changes:

```bash
sudo systemctl restart thingsboard
```
{: .copy-code}