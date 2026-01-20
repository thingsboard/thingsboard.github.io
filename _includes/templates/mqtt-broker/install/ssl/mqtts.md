## Enabling MQTTS (MQTT over SSL/TLS)

To enable **MQTT over SSL/TLS (MQTTS)** in TBMQ, you need to provide valid SSL certificates and configure TBMQ to use them.

For details on supported formats and configuration options, see the [MQTT over SSL](/docs/{{docsPrefix}}mqtt-broker/security/mqtts/) guide.

**Prepare SSL Certificates**

Obtain a valid SSL certificate and private key. For example:

* `mqttserver.pem` – Public certificate (may include the full chain)
* `mqttserver_key.pem` – Private key

> Self-signed certificates are supported for testing, but we recommend using certificates from a trusted Certificate Authority for production environments.

**Mount Certificates into the Container**

In your `docker-compose.yml`, mount the directory containing the certificates:

```yaml
volumes:
  - PATH_TO_CERTS:/config/certificates
```
{: .copy-code}

Replace `PATH_TO_CERTS` with the path to your certificate files. Ensure TBMQ has read access to these files.

**Configure Environment Variables**

Add the following variables to enable SSL in `docker-compose.yml`:

```yaml
LISTENER_SSL_ENABLED: "true"
LISTENER_SSL_PEM_CERT: "/config/certificates/mqttserver.pem"
LISTENER_SSL_PEM_KEY: "/config/certificates/mqttserver_key.pem"
LISTENER_SSL_PEM_KEY_PASSWORD: "server_key_password"
```
{: .copy-code}

> Leave `LISTENER_SSL_PEM_KEY_PASSWORD` empty if your private key is not password-protected.

**Expose the MQTTS Port**

In `docker-compose.yml`:

```yaml
ports:
  - "8883:8883"
```
{: .copy-code}

**Restart TBMQ**

Apply the changes by restarting TBMQ:

```bash
./tbmq-install-and-run.sh
```
{: .copy-code}

Once restarted, MQTT clients can securely connect to **port 8883** using TLS/SSL.
