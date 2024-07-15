---
layout: docwithnav-trendz
assignees:
- ashvayka
title: Installing ThingsBoard Trendz Analytics on Windows
description: Installing ThingsBoard Trendz Analytics on Windows

---

* TOC
{:toc}

### Prerequisites

This guide describes how to install Trendz Analytics on a Windows machine.
Instructions below are provided for Windows 10/8.1/8/7 32-bit/64-bit. 

**Hardware requirements** depend on amount of analyzed data and amount of devices connected to the system. 
To run Trendz Analytics on a single machine you will need at least 1Gb of free RAM.

In small and medium installations Trendz can be installed **on the same** server with ThingsBoard.

### Step 1. Install Java 17 (OpenJDK) 

{% include templates/install/windows-java-install.md %}

### Step 2. Trendz Analytics service installation

Download and extract the package.

```bash
https://dist.thingsboard.io/trendz-windows-{{ site.release.trendz_ver }}.zip
```
{: .copy-code}

**Note:** We assume you have extracted Trendz package to default location: *C:\Program Files (x86)\trendz*  

### Step 3. Obtain and configure license key 

We assume you have already chosen subscription plan for Trendz and have license key. If not, please get your [Free Trial license](/pricing/?section=trendz-options&product=trendz-self-managed&solution=trendz-pay-as-you-go) before you proceed.
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} for more details.

Once you get the license secret, you should put it to the trendz configuration file. 
Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\trendz\conf\trendz.yml
``` 
{: .copy-code}

Scroll to the bottom of the file and locate the following configuration block:

```yml
license:
    secret: "${TRENDZ_LICENSE_SECRET:YOUR_LICENSE_SECRET_HERE}" # license secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
```

### Step 4. Configure connection with ThingsBoard Platform

You can connect Trendz Analytics to the ThingsBoard Community Edition or ThingsBoard Professional Edition.

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text
C:\Program Files (x86)\trendz\conf\trendz.yml
``` 
{: .copy-code}

Add ThingsBoard REST API URL that would be used for communicating with ThingsBoard Platform. In most cases, when Trendz installed
in the same server with ThingsBoard, API_URL would be **http://localhost:8080**. Otherwise you should use ThingsBoard domain name.

```bash
tb.api.url: "${TB_API_URL:http://localhost:8080}"
```
{: .copy-code}

### Step 5. Configure Trendz database
Trendz uses PostgreSQL as a database. You can install PostgreSQL on the same serverfor Trendz or use managed PostgreSQL 
service from your cloud vendor.

#### PostgreSQL Installation

Download the installation file (PostgreSQL 12.17 or newer releases) [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows) and follow the installation instructions.

During PostgreSQL installation, you will be prompted for superuser (postgres) password.
Don't forget this password. It will be used later. For simplicity, we will substitute it with "postgres".

#### Create Database for Trendz

Once installed, launch the "pgAdmin" software and login as superuser (postgres). 
Open your server and create database "trendz" with owner "postgres".


#### Configure database connection for Trendz

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

### Step 6. Run installation script

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

### Step 7. Start Trendz service

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

##### Authentication

For first authentication you need to use **Tenant Administrator** credentials from your **ThingsBoard**

Trendz uses ThingsBoard as an authentication service. During first sign in ThingsBoard service should be also available 
to validate credentials.


### Troubleshooting

The log files are located in **logs** folder ("C:\Program Files (x86)\trendz\logs" in our case).

The **trendz.log** file should contain following line:

```text
YYYY-MM-DD HH:mm:ss,sss [main] INFO  o.t.t.TrendzApplication - Started TrendzApplication in x.xxx seconds (JVM running for x.xxx)
```

In case of any unclear errors, use general [troubleshooting guide](/docs/user-guide/troubleshooting/#getting-help) or [contact us](/docs/contact-us/).

### Windows firewall settings

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

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}
