---
layout: docwithnav-mqtt-broker
title: Cluster setup using Docker Compose
description: Cluster setup using Docker Compose

---

* TOC
{:toc}


This guide will help you to set up TBMQ in cluster mode using Docker Compose.

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
git clone https://github.com/thingsboard/tbmq.git
cd tbmq/docker
```
{: .copy-code}

## Step 3. Installation

Execute the following command to create log folders for the services and change owner of these folders to the docker container users.
To be able to change user, **chown** command is used, which requires sudo permissions (script will request password for a sudo access):

```bash
./scripts/docker-create-log-folders.sh
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

After a while when all services will be successfully started you can make requests to `http://{your-host-ip}:8083` 
in you browser (e.g. **http://localhost:8083**) and connect clients using MQTT protocol on 1883 port.

{% include templates/mqtt-broker/login.md %}

## Step 5. Logs, stop and start commands

In case of any issues you can examine service logs for errors.
For example to see TBMQ logs execute the following command:

```bash
docker compose logs -f tb-mqtt-broker-1
```
{: .copy-code}

Or use the following command to see the state of all the containers.
```bash
docker compose ps
```
{: .copy-code}
Use next command to inspect the logs of all running services.
```bash
docker compose logs --f
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

## Upgrading

In case you would like to upgrade, please pull the latest changes from `main` branch:

```bash
git pull origin main
```
{: .copy-code}

**Note**: Make sure custom changes of yours if available are not lost during the merge process.

**Note**: Make sure `TBMQ_VERSION` in .env file is set to the target version (e.g., set it to {{ site.release.broker_full_ver }} if you are upgrading to the latest).

After that execute the following commands:

```bash
./scripts/docker-stop-services.sh
./scripts/docker-upgrade-tbmq.sh --fromVersion=FROM_VERSION
./scripts/docker-start-services.sh
```
{: .copy-code}

Where `FROM_VERSION` - from which version upgrade should be started. 
See [Upgrade Instructions](/docs/mqtt-broker/install/upgrade-instructions/) for valid `fromVersion` values.

## Generate certificate for HTTPS

We are using HAproxy for proxying traffic to containers and for web UI by default we are using 8083 and 443 ports. 
For using HTTPS with a valid certificate, execute these commands:

```bash
docker exec haproxy-certbot certbot-certonly --domain your_domain --email your_email
docker exec haproxy-certbot haproxy-refresh
```
{: .copy-code}

**Note**: Valid certificate is used only when you visit web UI by domain in URL.

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}