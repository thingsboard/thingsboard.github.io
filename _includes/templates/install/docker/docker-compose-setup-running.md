Execute the following command to run installation:

```bash
./docker-install-tb.sh --loadDemo
```
{: .copy-code}

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

Execute the following command to start services:

```bash
./docker-start-services.sh
```
{: .copy-code}

After a while when all services will be successfully started you can open `http://{your-host-ip}` in you browser (for ex. `http://localhost`).
You should see ThingsBoard login page.

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

If you installed DataBase with demo data (using `--loadDemo` flag) you can also use the following credentials:

- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

```bash
docker compose {{dockerComposeFileLocation}}logs -f tb-core1 tb-rule-engine1
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:

**docker-compose {{dockerComposeFileLocation}}logs -f tb-core1 tb-rule-engine1**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

Or use the following command to see the state of all the containers:

```bash
docker compose {{dockerComposeFileLocation}}ps
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:

**docker-compose {{dockerComposeFileLocation}}ps**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

Use the following command to inspect the logs of all running services:

```bash
docker compose {{dockerComposeFileLocation}}logs -f
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:

**docker-compose {{dockerComposeFileLocation}}logs -f**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

See [docker-compose logs](https://docs.docker.com/compose/reference/logs/) command reference for details.

Execute the following command to stop services:

```bash
./docker-stop-services.sh
```
{: .copy-code}

Execute the following command to stop and completely remove deployed docker containers:

```bash
./docker-remove-services.sh
```
{: .copy-code}

Execute the following command to update particular or all services (pull newer docker image and rebuild container):

```bash
./docker-update-service.sh [SERVICE...]
```
{: .copy-code}

Where:

- `[SERVICE...]` - list of services to update (defined in docker-compose configurations). If not specified all services will be updated.
