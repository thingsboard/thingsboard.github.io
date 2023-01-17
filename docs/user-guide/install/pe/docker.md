---
layout: docwithnav-pe
assignees:
- ashvayka
title: Installing ThingsBoard PE using Docker (Linux or Mac OS)
description: Installing ThingsBoard PE IoT Platform using Docker (Linux or Mac OS)
redirect_from: "/docs/pe/user-guide/install/docker/"
---

* TOC
{:toc}


This guide will help you to install and start ThingsBoard Professional Edition (PE) using Docker and Docker Compose on Linux or Mac OS. 
This guide covers standalone ThingsBoard PE installation. 
If you are looking for a cluster installation instruction, please visit [cluster setup page](/docs/user-guide/install/pe/cluster-setup/).  

## Prerequisites

{% include templates/install/docker-install.md %}

{% include templates/install/docker-install-note.md %}

## Step 1. Pull ThingsBoard PE Image

```bash
docker pull thingsboard/tb-pe:{{ site.release.pe_full_ver }}
```
{: .copy-code}
 
## Step 2. Obtain the license key 

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

Note: We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.

## Step 3. Choose ThingsBoard queue service

{% include templates/install/install-queue.md %}

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/pe-docker-queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka%,%templates/install/pe-docker-queue-kafka.md%br%
AWS SQS <small>(managed service from AWS)</small>%,%aws-sqs%,%templates/install/pe-docker-queue-aws-sqs.md%br%
Google Pub/Sub <small>(managed service from Google)</small>%,%pubsub%,%templates/install/pe-docker-queue-pub-sub.md%br%
Azure Service Bus <small>(managed service from Azure)</small>%,%service-bus%,%templates/install/pe-docker-queue-service-bus.md%br%
RabbitMQ <small>(for small on-prem installations)</small>%,%rabbitmq%,%templates/install/pe-docker-queue-rabbitmq.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/pe-docker-queue-confluent-cloud.md{% endcapture %}

{% include content-toggle.html content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}  

Where: 
    
- `PUT_YOUR_LICENSE_SECRET_HERE` - placeholder for your license secret obtained on the third step;    
- `8080:8080`            - connect local port 8080 to exposed internal HTTP port 8080;
- `1883:1883`            - connect local port 1883 to exposed internal MQTT port 1883;
- `7070:7070`            - connect local port 7070 to exposed internal Edge RPC port 7070;
- `5683-5688:5683-5688/udp`            - connect local UDP ports 5683-5688 to exposed internal COAP and LwM2M ports; 
- `~/.mytbpe-data:/data`   - mounts the host's dir `~/.mytbpe-data` to ThingsBoard data directory;
- `~/.mytbpe-data/db:/var/lib/postgresql/data`   - mounts the host's dir `~/.mytbpe-data/db` to Postgres data directory;
- `~/.mytbpe-logs:/var/log/thingsboard`   - mounts the host's dir `~/.mytbpe-logs` to ThingsBoard logs directory;
- `mytbpe`             - friendly local name of this machine;
- `restart: always`        - automatically start ThingsBoard in case of system reboot and restart in case of failure.;
- `thingsboard/tb-pe:{{ site.release.pe_full_ver }}`          - docker image.

## Step 4. Running

{% include templates/install/docker/docker-create-folders-sudo-explained.md %}

```
mkdir -p ~/.mytbpe-data && sudo chown -R 799:799 ~/.mytbpe-data
mkdir -p ~/.mytbpe-logs && sudo chown -R 799:799 ~/.mytbpe-logs
```
{: .copy-code}

**NOTE**: replace directory `~/.mytbpe-data` and `~/.mytbpe-logs` with directories you're planning to used in `docker-compose.yml`. 

{% assign serviceName = "tbpe" %}
{% include templates/install/docker/docker-compose-up-and-ui-credentials.md %}

## Detaching, stop and start commands

{% assign serviceFullName = "ThingsBoard PE" %}
{% include templates/install/docker/detaching-stop-start-commands.md %}

## Troubleshooting

### DNS issues

{% include templates/troubleshooting/dns-issues.md %}

### Upgrading from old PostgreSQL 9.6 to PostgreSQL 11 and ThingsBoard 3.0.1PE

In this example we'll show steps to upgrade ThingsBoard from 2.4.3PE to 3.0.1PE.

Make a backup of your data:

```
sudo cp -r ~/.mytbpe-data ./.mytbpe-data-2-4-3-backup
```
{: .copy-code}

Stop currently running docker container:

```
docker stop [container_id]
```
{: .copy-code}

Upgrade old postgres to the new one:

```
docker run --rm -v ~/.mytbpe-data/db/:/var/lib/postgresql/9.6/data -v ~/.mytbpe-data-temp/db/:/var/lib/postgresql/11/data --env LANG=C.UTF-8 tianon/postgres-upgrade:9.6-to-11
sudo rm -rf ~/.mytbpe-data/db
sudo mv ~/.mytbpe-data-temp/db ~/.mytbpe-data/db
```
{: .copy-code}

Start the new version of TB with following command:

```
docker run -it -v ~/.mytbpe-data:/data --rm thingsboard/tb-pe:3.0.1PE bash
```
{: .copy-code}

Then please follow these steps:

```
apt update
apt install sudo
chown -R postgres. /data/db/
chmod 750 -R /data/db/
sudo -i -u postgres
cd /usr/lib/postgresql/11/
./bin/pg_ctl -D /data/db start
logout
/usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.1
exit
```
{: .copy-code}

After this create your docker-compose.yml and insert (we used in-memory queue as an example):

```yml
version: '3.0'
services:
  mytbpe:
    restart: always
    image: "thingsboard/tb-pe:3.0.1PE"
    ports:
      - "8080:9090"
      - "1883:1883"
      - "7070:7070"
      - "5683-5688:5683-5688/udp"
    environment:
      TB_QUEUE_TYPE: in-memory
      TB_LICENSE_SECRET: YOUR_SECRET_KEY
      TB_LICENSE_INSTANCE_DATA_FILE: /data/license.data
      INTEGRATIONS_RPC_PORT: 50052
      PGDATA: /data/db
    volumes:
      - ~/.mytbpe-data:/data
      - ~/.mytbpe-logs:/var/log/thingsboard
```
{: .copy-code}

Start ThingsBoard:

```bash
docker compose up
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose up**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

### Upgrading from 3.0.1PE to 3.1.0PE

After 3.0.1PE PostgreSQL service was separated from ThingsBoard image and upgrading to 3.1.0PE version is not trivial.

First of all you need to create a dump of your database:

```bash
docker compose exec mytbpe sh -c "pg_dump -U postgres thingsboard > /data/thingsboard_dump"
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose exec mytbpe sh -c "pg_dump -U postgres thingsboard > /data/thingsboard_dump"**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

**Note** You have to use your valid username for connecting to PostgreSQL

Then you need to stop service, create a new directory for the database and set permissions:

```bash
sudo cp -r ~/.mytbpe-data ./.mytbpe-data-backup
docker compose down
sudo rm -rf ~/.mytbpe-data/db
sudo chown -R 799:799 ~/.mytbpe-data
sudo chown -R 799:799 ~/.mytbpe-logs
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) here is the list of the above commands:
<br>**sudo cp -r ~/.mytbpe-data ./.mytbpe-data-backup**
<br>**docker-compose down**
<br>**sudo rm -rf ~/.mytbpe-data/db**
<br>**sudo chown -R 799:799 ~/.mytbpe-data**
<br>**sudo chown -R 799:799 ~/.mytbpe-logs**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

After this you need to update docker-compose.yml as in [Step 4](#step-4-choose-thingsboard-queue-service) but with **3.1.0PE** instead of **{{ site.release.pe_full_ver }}**:

Start PostgreSQL:

```bash
docker compose up postgres
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose up postgres**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

Restore backup:

```bash
sudo cp ~/.mytbpe-data/thingsboard_dump ~/.mytbpe-data/db/thingsboard_dump
docker compose exec postgres sh -c "psql -U postgres thingsboard < /var/lib/postgresql/data/thingsboard_dump"
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) here is the list of the above commands:
<br>**sudo cp ~/.mytbpe-data/thingsboard_dump ~/.mytbpe-data/db/thingsboard_dump**
<br>**docker-compose exec postgres sh -c "psql -U postgres thingsboard < /var/lib/postgresql/data/thingsboard_dump"**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

Upgrade ThingsBoard:

```bash
docker compose run mytbpe upgrade-tb.sh
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose run mytbpe upgrade-tb.sh**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

Start ThingsBoard:

```bash
docker compose up mytbpe
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose up mytbpe**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

### Upgrade starting from 3.1.0PE

Please refer to the [troubleshooting](/docs/user-guide/install/pe/docker/#troubleshooting) section in case you are upgrading from 3.0.0 or 3.0.1.

Below is example on how to upgrade from 3.1.0 to 3.1.1

* Stop mytbpe container

```bash
docker compose stop mytbpe
```
 {: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose stop mytbpe**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

* Create a dump of your database:

```bash
docker compose exec postgres sh -c "pg_dump -U postgres thingsboard > /var/lib/postgresql/data/thingsboard_dump"
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose exec postgres sh -c "pg_dump -U postgres thingsboard > /var/lib/postgresql/data/thingsboard_dump"**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

* After this you need to update docker-compose.yml as in [Step 4](#step-4-choose-thingsboard-queue-service) but with 3.1.1PE instead of 3.2.2PE:
    
* Change upgradeversion variable to your **current** ThingsBoard version.
       
 ```bash
sudo sh -c "echo '3.1.0' > ~/.mytbpe-data/.upgradeversion"
```
{: .copy-code}

* Then execute the following commands:

```bash
docker compose run mytbpe upgrade-tb.sh
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose run mytbpe upgrade-tb.sh**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}
    
* Start ThingsBoard:

```bash
docker compose up -d
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose up -d**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

To upgrade ThingsBoard to the latest version those steps should be done **for each intermediate version**.

Please note that upgrades are not cumulative.
Refer to [upgrade instruction](/docs/user-guide/install/pe/upgrade-instructions/) to know the right order of upgrades (e.g. if you are upgrading from 3.1.0 to 3.2.1, you need to do that in the following order: 3.1.0 -> 3.1.1 -> 3.2.0 -> 3.2.1, e.g. current version -> next release version -> etc)


In case you need to **restore from the backup**:

* Stop mytbpe container

```bash
docker compose stop mytbpe
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose stop mytbpe**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

* Update docker-compose.yml to the initial version.

* Execute

```bash
docker compose exec postgres sh -c "psql -U postgres -c 'drop database thingsboard'"
docker compose exec postgres sh -c "psql -U postgres -c 'create database thingsboard'"
docker compose exec postgres sh -c "psql -U postgres thingsboard < /var/lib/postgresql/data/thingsboard_dump"
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) here is the list of the above commands:
<br>**docker-compose exec postgres sh -c "psql -U postgres -c 'drop database thingsboard'"**
<br>**docker-compose exec postgres sh -c "psql -U postgres -c 'create database thingsboard'"**
<br>**docker-compose exec postgres sh -c "psql -U postgres thingsboard < /var/lib/postgresql/data/thingsboard_dump"**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

* Start ThingsBoard:
    
```bash
docker compose up -d
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose up -d**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

If you need to **copy backup to local directory** in case restoring it on another server:

```
docker cp tb-docker_postgres_1:/var/lib/postgresql/data/thingsboard_dump .
```
{: .copy-code}


Note: You should paste the name for your postgres container.

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
