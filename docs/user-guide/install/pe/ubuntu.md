---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard PE on Ubuntu
description: Installing ThingsBoard on Ubuntu

---

* TOC
{:toc}

### Prerequisites

This guide describes how to install ThingsBoard on Ubuntu Server 18.04 LTS. 
Hardware requirements depend on chosen database and amount of devices connected to the system. 
To run ThingsBoard and PostgreSQL on a single machine you will need at least 1Gb of RAM.
To run ThingsBoard and Cassandra on a single machine you will need at least 8Gb of RAM.

### Step 1. Install Java 8 (OpenJDK) 

ThingsBoard service is running on Java 8. Follow this instructions to install OpenJDK 8:

```bash
sudo apt update
sudo apt install openjdk-8-jdk
```

Please don't forget to configure your operating system to use OpenJDK 8 by default. 
You can configure which version is the default using the following command:

```bash
sudo update-alternatives --config java
```

You can check the installation using the following command:

```bash
java -version
```

Expected command output is:

```text
openjdk version "1.8.0_xxx"
OpenJDK Runtime Environment (...)
OpenJDK 64-Bit Server VM (build ...)
```

### Step 2. ThingsBoard service installation

Download installation package.

```bash
wget https://dist.thingsboard.io/thingsboard-2.4pe.deb
```
{: .copy-code}

Install ThingsBoard as a service

```bash
sudo dpkg -i thingsboard-2.4pe.deb
```
{: .copy-code}

### Step 3. Obtain and configure license key 

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](/TODO) or [How-to get perpatual license](TODO) for more details.

Once you get the license secret, you should put it to the thingsboard configuration file. 
Open the file for editing using the following command:

```bash 
sudo nano /etc/thingsboard/conf/thingsboard.conf
``` 
{: .copy-code}

Locate the following configuration block:

```bash
# License secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
# UNCOMMENT NEXT LINE AND PUT YOUR LICENSE SECRET:
# export TB_LICENSE_SECRET=
```

and put your license secret. Please don't forget to uncomment the export statement. See example below: 

```bash
# License secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
# UNCOMMENT NEXT LINE AND PUT YOUR LICENSE SECRET:
export TB_LICENSE_SECRET=YOUR_LICENSE_SECRET_HERE
``` 

### Step 4. Configure ThingsBoard database

{% include templates/install/install-db.md %}

{% capture contenttogglespec %}
PostgreSQL <small>(recommended for < 5K msg/sec)</small>%,%postgresql%,%templates/install/ubuntu-db-postgresql.md%br%
Hybrid <br/>PostgreSQL+Cassandra<br/><small>(recommended for > 5K msg/sec)</small>%,%hybrid%,%templates/install/ubuntu-db-hybrid.md{% endcapture %}

{% include content-toggle.html content-toggle-id="ubuntuThingsboardDatabase" toggle-spec=contenttogglespec %} 

### Step 6. [Optional] Memory update for slow machines (1GB of RAM) 

Edit ThingsBoard configuration file 

```bash 
sudo nano /etc/thingsboard/conf/thingsboard.conf
``` 
{: .copy-code}

Add the following lines to the configuration file. 

```bash
# Update ThingsBoard memory usage and restrict it to 256MB in /etc/thingsboard/conf/thingsboard.conf
export JAVA_OPTS="$JAVA_OPTS -Xms256M -Xmx256M"
```
{: .copy-code}

### Step 7. Run installation script
{% include templates/run-install.md %} 


### Step 8. Start ThingsBoard service

{% include templates/start-service.md %}

{% capture 90-sec-ui %}
Please allow up to 90 seconds for the Web UI to start. This is applicable only for slow machines with 1-2 CPUs or 1-2 GB RAM.{% endcapture %}
{% include templates/info-banner.md content=90-sec-ui %}

### Step 9. Install ThingsBoard WebReport component

Download installation package for the [Reports Server](/docs/user-guide/reporting/#reports-server) component:

```bash
wget https://dist.thingsboard.io/tb-web-report-2.4pe.deb
```
{: .copy-code}

Install third-party libraries:

```bash
sudo apt install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
     libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
     libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
     libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
     ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils unzip wget
```
{: .copy-code}

Install Roboto fonts:

```bash
sudo apt install fonts-roboto
```
{: .copy-code}

Install Noto fonts (Japanese, Chinese, etc.):

```bash
mkdir ~/noto
cd ~/noto
wget https://noto-website.storage.googleapis.com/pkgs/NotoSansCJKjp-hinted.zip
unzip NotoSansCJKjp-hinted.zip
sudo mkdir -p /usr/share/fonts/noto
sudo cp *.otf /usr/share/fonts/noto
sudo chmod 655 -R /usr/share/fonts/noto/
sudo fc-cache -fv
cd ..
rm -rf ~/noto
```

Install and start Web Report service:

```bash
sudo dpkg -i tb-web-report-2.4pe.deb
sudo service tb-web-report start
```

### Post-installation steps

**Configure HAProxy to enable HTTPS**

You may want to configure HTTPS access using HAProxy. 
This is possible in case you are hosting ThingsBoard in the cloud and have a valid DNS name assigned to your instance.
Please follow this [guide](/docs/user-guide/install/pe/add-haproxy-ubuntu) to install HAProxy and generate valid SSL certificate using Let's Encrypt.

### Troubleshooting

ThingsBoard logs are stored in the following directory:
 
```bash
/var/log/thingsboard
```

You can issue the following command in order to check if there are any errors on the backend side:
 
```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```
{: .copy-code}

## Next steps



{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
