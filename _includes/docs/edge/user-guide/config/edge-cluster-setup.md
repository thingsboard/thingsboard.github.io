* TOC
{:toc}

{% assign sinceVersion = "4.0.1" %}
{% include templates/edge/since-edge.md %}

### Overview

**Edge clustering** refers to connecting and grouping multiple **Edge nodes** to work together at the **edge of the network**. 
Clustering is useful for large-scale industrial IoT, smart cities, factories, or any scenario with thousands of devices in one region. 

Edge-specific considerations:
* All **Edge nodes** connect to the **same database**.
* **Devices** can connect to any node based on load balancing.
* **Edge nodes** share the workload and maintain local failover.
* The **Edge Cluster** syncs aggregated data to **ThingsBoard Cloud**.

![edge-cluster](/images/edge/config/edge-cluster.webp){: style="display: block; margin: auto; max-width: 600px; max-height: 600px"}

For more details, see the [microservices architecture](/docs/reference/msa/){: target="_blank"} page.

#### Prerequisites

**ThingsBoard** microservices run in a **Dockerized environment**. 
Before starting, make sure that [Docker CE](https://docs.docker.com/install/){: target="_blank"} and [Docker Compose](https://docs.docker.com/compose/install/){: target="_blank"} are installed on your system.

{% include templates/install/docker-install.md %}

{% include templates/install/docker-install-note.md %}

### Step 1. Pull the ThingsBoard Edge image

[Log in](https://docs.docker.com/engine/reference/commandline/login/){: target="_blank"} to Docker Hub and use the command to pull the image:

{% if docsPrefix == "pe/edge/" %}
```bash
docker pull thingsboard/tb-edge-pe:{{ site.release.pe_edge_full_ver }}
```
{: .copy-code}

{% else %}

```bash
docker pull thingsboard/tb-edge:{{ site.release.edge_full_ver }}
```
{: .copy-code}

{% endif %}

{% if docsPrefix == "pe/edge/" %}
### Step 2. Clone ThingsBoard PE Docker compose scripts

```bash
git clone -b release-4.0.0 https://github.com/thingsboard/thingsboard-edge-pe-docker-compose.git tb-edge-pe-docker-compose --depth 1
cd tb-edge-pe-docker-compose
```
{: .copy-code}

{% else %}

### Step 2. Clone the ThingsBoard Edge CE repository

```bash
git clone -b release-4.0 https://github.com/thingsboard/thingsboard-edge.git --depth 1
cd thingsboard-edge/docker-edge
```
{: .copy-code}

{% endif %}

### Step 3. Configure ThingsBoard Edge database and queue service

Before performing the initial installation, configure the type of database to be used with **ThingsBoard Edge**. To set the database type, change the value of the **DATABASE** variable in the **environment file (.env)** file.

**ThingsBoard Edge** currently supports two messaging systems/brokers for storing the messages:
* **In Memory** queue implementation is not suitable for any sort of cluster deployments.
* **Kafka** is recommended for production deployments and used by default. This queue is used on most of the ThingsBoard production environments now.

To edit the **ThingsBoard Edge .env** file, run the following command:
```bash
nano .env
```
{: .copy-code}

Check the following lines:
```bash
DATABASE=postgres
TB_QUEUE_TYPE=kafka

CLOUD_ROUTING_KEY=PUT_YOUR_EDGE_KEY_HERE # e.g. 19ea7ee8-5e6d-e642-4f32-05440a529015
CLOUD_ROUTING_SECRET=PUT_YOUR_EDGE_SECRET_HERE # e.g. bztvkvfqsye7omv9uxlp
CLOUD_RPC_HOST=PUT_YOUR_THINGSBOARD_SERVER_DOMAIN_OR_IP_HERE # e.g. thingsboard.cloud
```
{: .copy-code}

View the full **.env** file:
```liquid
# redis or redis-cluster or redis-sentinel
CACHE=redis

DOCKER_REPO=thingsboard
{% if docsPrefix == "pe/edge/" -%}
TB_EDGE_NODE_DOCKER_NAME=tb-edge-pe-node
TB_EDGE_VERSION=latest
{%- else -%}
TB_EDGE_NODE_DOCKER_NAME=tb-edge-node
TB_EDGE_VERSION=latest
{%- endif -%}
# Database used by ThingsBoard, can be either postgres (PostgreSQL) or hybrid (PostgreSQL for entities database and Cassandra for timeseries database).
# According to the database type corresponding docker service will be deployed (see docker-compose.postgres.yml, docker-compose.hybrid.yml for details).

DATABASE=postgres
TB_QUEUE_TYPE=kafka

CLOUD_ROUTING_KEY=PUT_YOUR_EDGE_KEY_HERE # e.g. 19ea7ee8-5e6d-e642-4f32-05440a529015
CLOUD_ROUTING_SECRET=PUT_YOUR_EDGE_SECRET_HERE # e.g. bztvkvfqsye7omv9uxlp
{% if docsPrefix == "pe/edge/" -%}
CLOUD_RPC_HOST=thingsboard.cloud
CLOUD_RPC_PORT=7070
CLOUD_RPC_SSL_ENABLED=true
{%- else -%}
CLOUD_RPC_HOST=PUT_YOUR_THINGSBOARD_SERVER_DOMAIN_OR_IP_HERE # e.g. thingsboard.cloud
CLOUD_RPC_PORT=7070
{%- endif -%}


LOAD_BALANCER_NAME=haproxy-certbot

# If enabled Prometheus and Grafana containers are deployed along with other containers
MONITORING_ENABLED=false

# Limit memory usage for each Java application
JAVA_OPTS="-Xmx2048M -Xms2048M -Xss384k -XX:+AlwaysPreTouch"
```
{: .copy-code.expandable-7}

* **CACHE:** Set the cache type:
  * **redis:** Set the _redis_ value to use the Redis standalone cache (1 node - 1 master).
  * **redis-cluster:** Set the _redis-cluster_ value to use the Redis cluster cache (6 nodes - 3 masters, 3 slaves).
  * **redis-sentinel:** Set the _redis-sentinel_ value to use the Redis sentinel cache (3 nodes - 1 master, 1 slave, 1 sentinel).
* **DATABASE:** Replace the _database_ value with:
  * **postgres:** Set the _postgres_ value to use the **PostgreSQL** database.
  * **hybrid:** Set the _hybrid_ value to use the **PostgreSQL** database for the entities database and **Cassandra** for the time-series database.
* **TB_QUEUE_TYPE:** Use _kafka_ as the queue type. The _in-memory_ value is not valid for a cluster deployment.
* **CLOUD_ROUTING_KEY:** Put your edge key.
* **CLOUD_ROUTING_SECRET:** Put your edge secret.
* **CLOUD_RPC_HOST:** Use _thingsboard.cloud_ / _eu.thingsboard.cloud_ if you connect **Edge** to the [ThingsBoard Cloud (North America)](https://thingsboard.cloud/signup){: target="_blank"}/[ThingsBoard Cloud (Europe)](https://eu.thingsboard.cloud/signup){: target="_blank"} correspondingly, or an **IP address** of the machine with the **ThingsBoard PE Platform**.
* **MONITORING_ENABLED:** To start cluster monitoring with [Grafana](https://grafana.com/){: target="_blank"} and/or [Prometheus](https://prometheus.io/){: target="_blank"} services, set the variable to _true_. 

  Learn how to **enable downlink messages monitoring** in this [article](/docs/{{docsPrefix}}user-guide/troubleshooting/#downlink-messages-from-cloud-to-edge){: target="_blank"}.

{% capture monitoring %}
Once deployed, you can reach **Prometheus** at [http://localhost:9090](http://localhost:9090){: target="_blank"} and **Grafana** at [http://localhost:3000](http://localhost:3000){: target="_blank"}.
<br>The default credentials for local installation are:
* **Login:** admin 
* **Password:** foobar
{% endcapture %}
{% include templates/info-banner.md content=monitoring %}

### Step 4. Create and check required host volumes

{% include templates/install/docker/docker-compose-setup-volumes.md %}

### Step 5. Install and run ThingsBoard Edge

To run the installation, execute the following command:
```bash 
./docker-install-tb.sh
```
{: .copy-code}

To start the service, execute the following command:
```bash 
./docker-start-services.sh
```
{: .copy-code}

{% capture install-and-run-edge %}
It will take a few minutes to start the services. Once all services are successfully started, open the **ThingsBoard Edge** service
at **```http://{your-host-ip}```** in the browser (_e.g., [http://localhost](http://localhost){: target="_blank"}_).
To log in, use **the credentials** from the **ThingsBoard** account.
{% endcapture %}
{% include templates/info-banner.md content=install-and-run-edge %}

Examine edge service logs for errors in case of any issues. To see **ThingsBoard Edge** node logs, execute the following command:
```bash 
docker-compose logs -f tb-edge1 tb-edge2 tb-edge3
```
{: .copy-code}

To see the state of all the containers, use:
```bash
docker-compose ps
```
{: .copy-code}

To inspect the logs of all running services, use:
```bash
docker-compose logs -f
```
{: .copy-code}

See [docker-compose logs](https://docs.docker.com/compose/reference/logs/){: target="_blank"} command reference for details.

#### Stop and remove docker containers

To stop the services, use:

```bash
./docker-stop-services.sh
```
{: .copy-code}

To stop and completely remove the deployed docker containers, run the command:

```bash
./docker-remove-services.sh
```
{: .copy-code}

### Upgrading

To update a particular or all services (pull newer docker image and rebuild container):
```bash
./docker-update-service.sh [SERVICE...]
```
{: .copy-code}

Where:
* **[SERVICE...]:** The list of services to update (defined in docker-compose configurations). If not specified, all services will be updated.

To upgrade the database, run the following commands:

```bash
./docker-stop-services.sh
./docker-upgrade-tb.sh
./docker-start-services.sh
```
{: .copy-code}

### Generate certificate for HTTPS
We use **HAproxy** to proxy traffic to containers, and for **Web UI** we use **80** and **443** ports by default. To use HTTPS with a valid certificate, run these commands:
```bash
docker exec haproxy-certbot certbot-certonly --domain your_domain --email your_email
docker exec haproxy-certbot haproxy-refresh
```
{: .copy-code}

Valid certificate will only be used if you visit Web UI by domain in URL. 
If you are using IP address to access UI, this would use self-signed certificate.

### Next steps

{% include templates/edge/guides-banner-edge.md %}