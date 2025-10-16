
* TOC
{:toc}


This guide will help you set up TBMQ in cluster mode using Docker Compose.

## Prerequisites

- [Install Docker](https://docs.docker.com/engine/installation/)

{% include templates/install/docker-install-note.md %}

## Step 1. Pull TBMQ Image

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

```bash
docker pull thingsboard/tbmq-node:{{ site.release.broker_full_ver }}
```
{: .copy-code}

## Step 2. Clone TBMQ repository

```bash
git clone -b {{ site.release.broker_branch }} https://github.com/thingsboard/tbmq.git
cd tbmq/docker
```
{: .copy-code}

## Step 3. Installation

Execute the following command to create necessary volumes for all the services and to update the haproxy config in the created volume.

```bash
./scripts/docker-create-volumes.sh
```
{: .copy-code}

Execute the following command to run installation:

```bash
./scripts/docker-install-tbmq.sh
```
{: .copy-code}

## Step 4. Running

Execute the following command to start services:

```bash
./scripts/docker-start-services.sh
```
{: .copy-code}

After a while when all services will be successfully started you can make requests to `http://{your-host-ip}` 
in you browser (e.g. **http://localhost**) and connect clients using MQTT protocol on 1883 port.

{% include templates/mqtt-broker/login.md %}

## Step 5. Logs, stop and start commands

In case of any issues you can examine service logs for errors.
For example to see TBMQ logs execute the following command:

```bash
docker compose logs -f tbmq1
```
{: .copy-code}

Or use the following command to see the state of all the containers.
```bash
docker compose ps
```
{: .copy-code}
Use next command to inspect the logs of all running services.
```bash
docker compose logs -f
```
{: .copy-code}
See [docker compose logs](https://docs.docker.com/compose/reference/logs/) command reference for more details.

Execute the following command to stop services:

```bash
./scripts/docker-stop-services.sh
```
{: .copy-code}

Execute the following command to stop and completely remove deployed docker containers:

```bash
./scripts/docker-remove-services.sh
```
{: .copy-code}

In case you want to remove docker volumes for all the containers, execute the following command.
**Note:** it will remove all your data, so be careful before executing it.

```bash
./scripts/docker-remove-volumes.sh
```
{: .copy-code}

It could be useful to update logs (enable DEBUG/TRACE logs) in runtime or change TBMQ or Haproxy configs. In order to do
this you need to make changes, for example, to the
_haproxy.cfg_ or _logback.xml_ file.
Afterward, execute the next command to apply the changes for the container:

```bash
./scripts/docker-refresh-config.sh
```
{: .copy-code}

To reload HAProxy's configuration without restarting the Docker container you can send the HUP signal to this process (PID 1):

```
docker exec -it haproxy-certbot sh -c "kill -HUP 1"
```
{: .copy-code}

## Upgrading

{% include templates/mqtt-broker/upgrade/upgrading.md %}

### Backup and restore (Optional)

While backing up your PostgreSQL database is highly recommended, it is optional before proceeding with the upgrade.
For further guidance, follow the [next instructions](https://github.com/thingsboard/tbmq/blob/main/docker/backup-restore/README.md).

### Upgrade to 2.2.0

In this release, the MQTT authentication mechanism was migrated from YAML/env configuration into the database.
During upgrade, TBMQ needs to know which authentication providers are enabled in your deployment.
This information is provided through environment variables passed to the **upgrade container**.

The upgrade script requires a file named **`tb-mqtt-broker.env`** that explicitly defines these variables.
Environment variables from your `docker-compose.yml` file are not applied during the upgrade — only the values in `tb-mqtt-broker.env` will be used.

> **Tips**
> If you use only Basic authentication, set `SECURITY_MQTT_SSL_ENABLED=false`.
> If you use only X.509 authentication, set `SECURITY_MQTT_BASIC_ENABLED=false` and `SECURITY_MQTT_SSL_ENABLED=true`.

**Supported variables**

  * `SECURITY_MQTT_BASIC_ENABLED` (`true|false`)
  * `SECURITY_MQTT_SSL_ENABLED` (`true|false`)
  * `SECURITY_MQTT_SSL_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT` (`true|false`) — usually `false`.

Once the file is prepared and the values verified, proceed with the [upgrade process](#run-upgrade).

### Upgrade to 2.1.0

{% include templates/mqtt-broker/upgrade/update-to-2.1.0-release-docker-cluster.md %}

### Run upgrade

In case you would like to upgrade, please pull the recent changes from the latest release branch:

```bash
git pull origin {{ site.release.broker_branch }}
```
{: .copy-code}

{% include templates/mqtt-broker/upgrade/upgrade-to-custom-release.md %}

**Note**: Make sure custom changes of yours if available are not lost during the merge process. 
Make sure `TBMQ_VERSION` in .env file is set to the target version (e.g., set it to {{ site.release.broker_full_ver }} if you are upgrading to the latest).

{% include templates/mqtt-broker/install/upgrade-hint.md %}

After that, execute the following commands:

{% capture tabspec %}tbmq-upgrade
tbmq-upgrade-without-from-version,Since v2.1.0,shell,resources/upgrade-options/docker-compose-upgrade-tbmq-without-from-version.md,/docs/{{docsPrefix}}mqtt-broker/install/cluster/resources/upgrade-options/docker-compose-upgrade-tbmq-without-from-version.md
tbmq-upgrade-with-from-version,Before v2.1.0,markdown,resources/upgrade-options/docker-compose-upgrade-tbmq-with-from-version.md,/docs/{{docsPrefix}}mqtt-broker/install/cluster/resources/upgrade-options/docker-compose-upgrade-tbmq-with-from-version.md{% endcapture %}
{% include tabs.html %}

## Generate certificate for HTTPS

We are using HAproxy for proxying traffic to containers and for web UI by default we are using 80 and 443 ports. 
For using HTTPS with a valid certificate, execute these commands:

```bash
docker exec haproxy-certbot certbot-certonly --domain your_domain --email your_email
docker exec haproxy-certbot haproxy-refresh
```
{: .copy-code}

**Note**: Valid certificate is used only when you visit web UI by domain in URL.

## Enable MQTTS (MQTT over SSL/TLS)

**MQTTS** allows clients to connect to TBMQ over an encrypted TLS/SSL channel, ensuring the confidentiality and integrity of MQTT messages in transit.
There are two common deployment options:

* **Two-way MQTTS (Mutual TLS)** – TBMQ terminates TLS, and clients must present valid certificates for authentication.
* **One-way MQTTS (TLS termination at Load Balancer)** – HAProxy or another load balancer handles TLS termination, and forwards plain MQTT traffic to TBMQ over a trusted internal network.

Both approaches protect external connections with encryption, but **two-way MQTTS** adds client certificate verification for higher security, 
while **one-way MQTTS** simplifies broker configuration and can reuse existing HTTPS certificates on the load balancer.

### Two-way MQTTS

In this configuration, TBMQ itself handles TLS termination and (optionally) client certificate authentication. 
This approach is suitable when you want the broker to fully control SSL/TLS and mutual authentication without relying on a load balancer for security.

To enable **MQTT over SSL (MQTTS)**, you need to provide valid SSL certificates and configure TBMQ to use them.

For more information on supported certificate formats and options, refer to the [MQTT over SSL](/docs/{{docsPrefix}}mqtt-broker/security/mqtts/) documentation.

**Provide SSL Certificates**

Obtain a valid SSL certificate and private key. For example:

* `mqttserver.pem` – your public certificate (may include full chain);
* `mqttserver_key.pem` – your private key.

> Self-signed certificates are supported for testing, but we recommend using certificates from a trusted Certificate Authority for production environments.

**Mount Certificates into Containers**

Open your `docker-compose.yml` file and **uncomment** the volume line that mounts the certificate files:

```yaml
volumes:
  - PATH_TO_CERTS:/config/certificates
```
{: .copy-code}

Replace `PATH_TO_CERTS` with the path to the folder containing your certificate files. Make sure TBMQ can access those file.

**Configure Environment Variables**

Edit the `tb-mqtt-broker.env` file and **uncomment/configure** the following lines to enable SSL:

```yaml
LISTENER_SSL_ENABLED=true
LISTENER_SSL_PEM_CERT=/config/certificates/mqttserver.pem
LISTENER_SSL_PEM_KEY=/config/certificates/mqttserver_key.pem
LISTENER_SSL_PEM_KEY_PASSWORD=server_key_password
```
{: .copy-code}

> Adjust the file paths and password as needed. If your private key is not password-protected, you can leave `LISTENER_SSL_PEM_KEY_PASSWORD` empty.

**Restart Services**

Apply the changes by restarting TBMQ services:

```bash
./scripts/docker-start-services.sh
```
{: .copy-code}

Once started, your MQTT clients will be able to securely connect to port **8883** using TLS/SSL.

### One-way MQTTS

In this setup, TLS is terminated at the load balancer (HAProxy). 
Clients connect securely to HAProxy over MQTTS (port 8883), and HAProxy forwards plain MQTT (unencrypted) to TBMQ over the internal network (port 1883).
You can reuse the same certificate you already use for HTTPS.

Point HAProxy to your certificate bundle (PEM with full chain + private key). If you reuse the HTTPS cert, reference the same bundle.
Locate and update the _haproxy.cfg_ file:

```text
 listen mqtts-in
  bind *:${MQTTS_PORT} ssl crt /usr/local/etc/haproxy/certs.d/fullchain-and-key.pem
  mode tcp
  option clitcpka # For TCP keep-alive
  timeout client 3h
  timeout server 3h
  option tcplog
  balance leastconn
  server tbMqtt1 tbmq1:1883 check inter 5s resolvers docker_resolver resolve-prefer ipv4
  server tbMqtt2 tbmq2:1883 check inter 5s resolvers docker_resolver resolve-prefer ipv4
```
{: .copy-code}

> **Note:** Replace _fullchain-and-key.pem_ with the actual filename of your certificate bundle.

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
