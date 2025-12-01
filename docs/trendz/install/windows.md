---
layout: docwithnav-trendz
assignees:
- ashvayka
title: Installing ThingsBoard Trendz Analytics on Windows
description: Installing ThingsBoard Trendz Analytics on Windows

---

* TOC
{:toc}

This guide explains how to install **Trendz Analytics** on **Windows 10 or 11** (32-bit/64-bit).

**Important note before proceeding with Windows installation**

Certain Trendz Analytics features like **predictions, metric explorations, and Python calculation fields** require a Python executor.

The python executor runs **only via Docker**. Even on Windows, Docker is essential to fully utilize all Trendz features.  
We recommend following the [Docker (Windows) installation guide](/docs/trendz/install/docker-windows) and using the Docker installation instead of Windows.

Proceed here **only** if you have a compelling reason to use a combined Windows + Docker setup.

## Prerequisites

### Hardware Requirements

{% include templates/trendz/install/hardware-requirements.md %}

### Software Requirements

{% include templates/trendz/install/docker-requirements-linux.md %}

## Installation Steps

### Step 1. Activate Trendz add-on on ThingsBoard

{% include templates/trendz/install/activate-trendz-license.md %}

### Step 2. Install Java 17 (OpenJDK) 

{% include templates/install/windows-java-install.md %}

### Step 3. Trendz Analytics service installation

Download and extract the package.

```bash
https://dist.thingsboard.io/trendz-windows-{{ site.release.trendz_ver }}.zip
```
{: .copy-code}

**Note:** We assume you have extracted Trendz package to default location: *C:\Program Files (x86)\trendz*

### Step 4. Configure Trendz database

Trendz uses PostgreSQL as a database. You can install PostgreSQL on the same serverfor Trendz or use managed PostgreSQL 
service from your cloud vendor.

* **PostgreSQL Installation**

Download the installation file (PostgreSQL 12.17 or newer releases) [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows) and follow the installation instructions.

During PostgreSQL installation, you will be prompted for superuser (postgres) password.
Don't forget this password. It will be used later. For simplicity, we will substitute it with "postgres".

* **Create Database for Trendz**

Once installed, launch the "pgAdmin" software and login as superuser (postgres). 
Open your server and create database "trendz" with owner "postgres".

* **Configure database connection for Trendz**

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\trendz\conf\trendz.yml
``` 
{: .copy-code}

and locate "datasource" block. Replace SPRING_DATASOURCE_URL, SPRING_DATASOURCE_USERNAME and SPRING_DATASOURCE_PASSWORD
properties with valid values. Don't forget to replace "postgres" with your real postgres user password:

```yml
datasource:
    driverClassName: "${SPRING_DRIVER_CLASS_NAME:org.postgresql.Driver}"
    url: "${SPRING_DATASOURCE_URL:jdbc:postgresql://localhost:5432/trendz}"
    username: "${SPRING_DATASOURCE_USERNAME:postgres}"
    password: "${SPRING_DATASOURCE_PASSWORD:postgres}"
    hikari:
      maximumPoolSize: "${SPRING_DATASOURCE_MAXIMUM_POOL_SIZE:5}"
``` 
{: .copy-code}

### Step 5. Run installation script

Launch windows shell (Command Prompt) as Administrator. Change directory to your Trendz installation directory.

Execute **install.bat** script to install Trendz as a Windows service.
This means it will be automatically started on system startup. 
Similar, **uninstall.bat** will remove Trendz from Windows services.
The output should be similar to this one:
  
  ```text
C:\Program Files (x86)\trendz>install.bat
Detecting Java version installed.
CurrentVersion 11
Java 11 found!
Installing Trendz Analytics...
...
Trendz Analytics installed successfully!
```

### Step 6. Start Trendz service

Now let's start the Trendz service!
Open the command prompt as an Administrator and execute the following command:

```shell
net start trendz
```
{: .copy-code}

Expected output:

```text
The Trendz Analytics service is starting.
The Trendz Analytics service was started successfully.
```

In order to restart the Trendz service you can execute following commands:

```shell
net stop trendz
net start trendz
```

Once started, you will be able to open Web UI using the following link:

```bash
http://localhost:8888/trendz
```

**Note**:  If Trendz installed on a remote server, you have to replace localhost with the public IP address of 
the server or with a domain name. Also, check that port 8888 opened for public access.

### Step 7. Sync ThingsBoard With Trendz

{% include templates/trendz/install/sync-with-tb.md %}

### Step 8. Install Trendz Python Executor

To utilize all Trendz capabilities, such as Trendz Python Calculation Fields or Prediction Models, it is essential to
install an additional service: the Trendz Python Executor, which can securely run Python code.

You can learn more about how to install it [here](/docs/trendz/install/python-executor-configuration-windows).

## Authentication

{% include templates/trendz/install/authentication.md %}

## Troubleshooting

The log files are located in **logs** folder ("C:\Program Files (x86)\trendz\logs" in our case).

The **trendz.log** file should contain following line:

```text
YYYY-MM-DD HH:mm:ss,sss [main] INFO  o.t.t.TrendzApplication - Started TrendzApplication in x.xxx seconds (JVM running for x.xxx)
```

In case of any unclear errors, use general [troubleshooting guide](/docs/user-guide/troubleshooting/#getting-help) or [contact us](/docs/contact-us/).

## Windows firewall settings

In order to have external access to Trendz Web UI 
you need to create a new inbound rule with Windows Firewall with Advanced Security.
 
- Open "Windows Firewall" from "Control Panel":

![image](/images/user-guide/install/windows/windows7-firewall-1.png)

- Click "Advanced settings" on the left panel:

![image](/images/user-guide/install/windows/windows7-firewall-2.png)

- Select "Inbound Rules" on the left panel, then click "New Rule..." on the right "Actions" panel:

![image](/images/user-guide/install/windows/windows7-firewall-3.png)

- Now new "New Inbound Rule Wizard" window will open. On the first step "Rule Type" select "Port" option: 

![image](/images/user-guide/install/windows/windows7-firewall-4.png)

- On the "Protocol and Ports" step select "TCP" protocol and enter port **8888** in the "Specific local ports" field:

![image](/images/user-guide/install/windows/windows7-firewall-5.png)

- On the "Action" step leave "Allow the connection" option selected:

![image](/images/user-guide/install/windows/windows7-firewall-6.png)

- On the "Profile" step select Windows network profiles when to apply this rule:

![image](/images/user-guide/install/windows/windows7-firewall-7.png)

- Finally, give the name to this rule (for ex. "Trendz Service Networking") and click "Finish".

![image](/images/user-guide/install/windows/windows7-firewall-8.png)

## Post Installation Steps

{% include templates/trendz/install/post-installation-steps.md %}

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}
