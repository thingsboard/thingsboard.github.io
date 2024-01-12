---
layout: docwithnav-mqtt-broker
title: Installing TBMQ using Docker (Windows)
description: Installing TBMQ using Docker (Windows)

---

* TOC
{:toc}

This guide will help you to install and start standalone TBMQ using Docker on Windows.
If you are looking for a cluster installation instruction, please visit [cluster setup page](/docs/mqtt-broker/install/cluster/docker-compose-setup/).

### Prerequisites

To run TBMQ on a single machine you will need at least 2Gb of RAM.

- [Install Docker](https://docs.docker.com/engine/installation/)

### Installation

Execute the following commands to download the script that will install and start TBMQ.

{% include templates/mqtt-broker/install/windows/windows-install.md %}

The script downloads the _docker-compose.yml_ file, creates necessary docker volumes, installs the database for TBMQ, and starts TBMQ.
Key configuration points for TBMQ in docker-compose file:

- `8083:8083` - connect local port 8083 to exposed internal HTTP port 8083;
- `1883:1883` - connect local port 1883 to exposed internal MQTT port 1883;
- `tbmq-postgres-data:/var/lib/postgresql/data` - maps the `tbmq-postgres-data` volume to TBMQ DataBase data directory;
- `tbmq-kafka-data:/bitnami/kafka` - maps the `tbmq-kafka-data` volume to Kafka data directory;
- `tbmq-logs:/var/log/thingsboard-mqtt-broker` - maps the `tbmq-logs` volume to TBMQ logs directory;
- `tbmq-data:/data` - maps the `tbmq-data` volume to TBMQ data directory that contains _.firstlaunch_ file after the DB is installed;
- `tbmq` - friendly local name of this machine;
- `restart: always` - automatically start TBMQ in case of system reboot and restart in case of failure;
- `SECURITY_MQTT_BASIC_ENABLED: "true"` - enables MQTT basic security. **Note**: by default security is disabled.

**Note**: In case the TBMQ is being installed on the same host where ThingsBoard is already running, the following issue can be seen:

```
Error response from daemon: ... Bind for 0.0.0.0:1883 failed: port is already allocated
```

In order to fix this, you need to expose another host's port for the TBMQ container,
i.e. change the `1883:1883` line in the downloaded docker-compose.yml file with, for example, `1889:1883`. After that re-run the script.

```shell
.\tbmq-install-and-run.ps1
```
{: .copy-code}

Once the installation process is complete you can access TBMQ UI by visiting the following URL `http://{your-host-ip}:8083` in your browser (e.g. **http://localhost:8083**).

{% include templates/mqtt-broker/login.md %}

### Logs, stop and start commands

In case of any issues you can examine service logs for errors.
For example to see TBMQ logs execute the following command:

```
docker compose logs -f tbmq
```
{: .copy-code}

To stop the containers:

```
docker compose stop
```
{: .copy-code}

To start the containers:

```
docker compose start
```
{: .copy-code}

### Upgrading

In order to update to the latest version, execute the following commands:

```shell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/thingsboard/tbmq/{{ site.release.broker_branch }}/msa/tbmq/configs/windows/tbmq-upgrade.ps1" `
-OutFile ".\tbmq-upgrade.ps1"; .\tbmq-upgrade.ps1
```
{: .copy-code}

**NOTE**: replace `db_url`, `db_username`, and `db_password` variables in the script with the corresponding values used during DB initialization.

### Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
