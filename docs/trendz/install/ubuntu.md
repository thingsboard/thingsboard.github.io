---
layout: docwithnav-trendz
assignees:
- ashvayka
title: Installing ThingsBoard Trendz Analytics on Ubuntu
description: Installing ThingsBoard Trendz Analytics on Ubuntu

trendz-settings:
  0:
    image: /images/trendz/install/sync/trendz-settings-1.png
    title: "Log in to <b>ThingsBoard</b> as a <b>Sysadmin</b>."  
  1:
    image: /images/trendz/install/sync/trendz-settings-2.png
    title: "Open the <b>Trendz Settings</b> page."  
  2:
    image: /images/trendz/install/sync/trendz-settings-3.png
    title: "If you see the message <b>\"Synchronization completed successfully\"</b>, the synchronization has been completed automatically and no further action is required."
trendz-sync:
  0:
    image: /images/trendz/install/sync/trendz-sync-1.png
    title: "If you see an error message, follow these steps."
  1:
    image: /images/trendz/install/sync/trendz-sync-2.png
    title: "Enter the correct <b>Trendz internal URL</b> and <b>ThingsBoard internal URL</b>."
  2:
    image: /images/trendz/install/sync/trendz-sync-3.png
    title: "Click <b>Save configuration</b>."
  3:
    image: /images/trendz/install/sync/trendz-sync-4.png
    title: "Click <b>Retry discovery</b>."
  4:
    image: /images/trendz/install/sync/trendz-sync-5.png
    title: "Once the message <b>\"Synchronization completed successfully\"</b> appears, the synchronization is complete."

---

* TOC
{:toc}

This guide explains how to install **Trendz Analytics** on **Ubuntu 22.04 LTS** or **Ubuntu 24.04 LTS**.

**Important note before proceeding with Ubuntu installation**

Certain Trendz Analytics features like **predictions, metric explorations, and Python calculation fields** require a Python executor.

The python executor runs **only via Docker**. Even on Ubuntu, Docker is essential to fully utilize all Trendz features.
We recommend following the [Docker (Linux or Mac OS) installation guide](/docs/trendz/install/docker) and using the Docker installation instead of Ubuntu.

Proceed here **only** if you have a compelling reason to use a combined Ubuntu + Docker setup.

## Prerequisites

### Hardware Requirements

{% include templates/trendz/install/hardware-requirements.md %}

### Software Requirements

{% include templates/trendz/install/docker-requirements-linux.md %}
{% include templates/trendz/install/thingsboard-requirements.md %}

## Installation Steps

### Step 1. Install Java 17 (OpenJDK)

{% include templates/install/ubuntu-java-install.md %}

### Step 2. Trendz Analytics service installation

Download installation package.

```bash
wget https://dist.thingsboard.io/trendz-{{ site.release.trendz_ver }}.deb
```
{: .copy-code}

Install Trendz Analytics as a service

```bash
sudo dpkg -i trendz-{{ site.release.trendz_ver }}.deb
```
{: .copy-code}

### Step 3. Configure Trendz database

Trendz uses PostgreSQL as a database. You can install PostgreSQL on the same server for Trendz or use managed PostgreSQL 
service from your cloud vendor.

* **PostgreSQL Installation**

{% include templates/install/postgres-install-ubuntu.md %}

* **Create Database for Trendz**

Connect to the database to create trendz DB:

```bash
psql -U postgres -d postgres -h 127.0.0.1 -W
```
{: .copy-code}

Create database named "trendz":
```bash
CREATE DATABASE trendz;
```
{: .copy-code}

Press “Ctrl+D” twice to logout.

* **Configure database connection for Trendz**

Edit Trendz configuration file

```bash
sudo nano /etc/trendz/conf/trendz.conf
```
{: .copy-code}

Add the following lines to the configuration file. Don't forget **to replace** "PUT_YOUR_POSTGRESQL_PASSWORD_HERE" with your **real postgres user password**:

```bash
# DB Configuration
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/trendz
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
```
{: .copy-code}

### Step 4. Run installation script

Once Trendz service is installed and DB configuration is updated, you can execute the following script:

```bash
sudo /usr/share/trendz/bin/install/install.sh
```
{: .copy-code}

### Step 5. Start Trendz service

Execute the following command to start Trendz Analytics:

```bash
sudo service trendz start
```
{: .copy-code}

### Step 6. Sync ThingsBoard With Trendz

{% include templates/trendz/install/sync-with-tb.md %}

### Step 7. Install Trendz Python Executor

To utilize all Trendz capabilities, such as Trendz Python Calculation Fields or Prediction Models, it is essential to
install an additional service: the Trendz Python Executor, which can securely run Python code.

You can learn more about how to install it [here](/docs/trendz/install/python-executor-configuration).

## Authentication

{% include templates/trendz/install/authentication.md %}

## Troubleshooting

Trendz logs are stored in the following directory:

```bash
/var/log/trendz
```

You can issue the following command in order to check if there are any errors on the backend side:

```bash
cat /var/log/trendz/trendz.log | grep ERROR
```

## HTTPS configuration

{% include templates/trendz/install/https-configuration.md %}

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}
