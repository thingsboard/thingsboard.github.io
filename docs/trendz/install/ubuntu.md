---
layout: docwithnav-trendz
assignees:
- ashvayka
title: Installing ThingsBoard Trendz Analytics on Ubuntu
description: Installing ThingsBoard Trendz Analytics on Ubuntu

---

* TOC
{:toc}

### Prerequisites

This guide describes how to install Trendz Analytics on Ubuntu 18.04 LTS / Ubuntu 20.04 LTS.

**Hardware requirements** depend on amount of analyzed data and amount of devices connected to the system. 
To run Trendz Analytics on a single machine you will need at least 1Gb of free RAM.

In small and medium installations Trendz can be installed **on the same** server with ThingsBoard.

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

### Step 3. Obtain and configure license key 

We assume you have already chosen subscription plan for Trendz and have license key. If not, please get your [Free Trial license](/pricing/?section=trendz-options&product=trendz-self-managed&solution=trendz-pay-as-you-go) before you proceed.
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} for more details.

Once you get the license secret, you should put it to the trendz configuration file. 
Open the file for editing using the following command:

```bash 
sudo nano /etc/trendz/conf/trendz.conf
``` 
{: .copy-code}

Add the following lines to the configuration file and put your license secret:

```bash
# License secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
export TRENDZ_LICENSE_SECRET=YOUR_LICENSE_SECRET_HERE
```

### Step 4. Configure connection with ThingsBoard Platform

You can connect Trendz Analytics to the ThingsBoard Community Edition or ThingsBoard Professional Edition.

Edit ThingsBoard configuration file
```bash 
sudo nano /etc/trendz/conf/trendz.conf
``` 
{: .copy-code}

Add ThingsBoard REST API URL that would be used for communicating with ThingsBoard Platform. In most cases, when Trendz installed
in the same server with ThingsBoard, API_URL would be **http://localhost:8080**. Otherwise you should use ThingsBoard domain name.

```bash
# ThingsBoard URL that will be used by Trendz
export TB_API_URL=http://localhost:8080
```
{: .copy-code}

### Step 5. Configure Trendz database
Trendz uses PostgreSQL as a database. You can install PostgreSQL on the same serverfor Trendz or use managed PostgreSQL 
service from your cloud vendor.

#### PostgreSQL Installation

{% include templates/install/postgres-install-ubuntu.md %}

#### Create Database for Trendz

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

#### Configure database connection for Trendz

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

### Step 6. Run installation script

Once Trendz service is installed and DB configuration is updated, you can execute the following script:

```bash
sudo /usr/share/trendz/bin/install/install.sh
```
{: .copy-code} 

### Step 7. Start Trendz service

Execute the following command to start Trendz Analytics:

```bash
sudo service trendz start
```
{: .copy-code}
 
Once started, you will be able to open Web UI using the following link:

```bash
http://localhost:8888/trendz
```
**Note**:  If Trendz installed on a remote server, you have to replace localhost with the public IP address of 
the server or with a domain name. Also, check that port 8888 opened for public access.


#### Authentication

For first authentication you need to use **Tenant Administrator** credentials from your **ThingsBoard**

Trendz uses ThingsBoard as an authentication service. During first sign in ThingsBoard service should be also available 
to validate credentials.

### Step 8. Install Trendz Python executor
For writing custom Python models and transformation script you need to install Python libraries on the server where Trendz is installed. 
Alternative option is to run executor as a docker container, you can find how to do that in [install instructions for Docker](/docs/trendz/install/docker/#standalone-python-executor-service).
But in this section we will write how to install Python libraries directly on the server with Trendz.

* Install Python3
```bash
sudo apt update
sudo apt install python3
sudo apt install python3-pip
```
{: .copy-code}

* Install required python packages
```bash
echo "flask == 2.3.2" > requirements.txt
echo "numpy == 1.24.1" >> requirements.txt
echo "statsmodels == 0.13.5" >> requirements.txt
echo "pandas == 1.5.3" >> requirements.txt
echo "scikit-learn == 1.2.2" >> requirements.txt
echo "prophet == 1.1.3" >> requirements.txt
echo "seaborn == 0.12.2" >> requirements.txt
echo "pmdarima == 2.0.3" >> requirements.txt
sudo -u trendz pip3 install --user --no-cache-dir -r requirements.txt
```
{: .copy-code}

### Step 9. HTTPS configuration

You may want to configure HTTPS access using HAProxy. 
This is possible in case you are hosting Trendz in the cloud and have a valid DNS name assigned to your instance.

**Trendz and ThingsBoard hosted on same server**

Use this section if HAProxy/Let’s Encrypt already installed in the server and HTTPS enabled for ThingsBoard.

Open HAProxy configuration file
```bash
sudo nano /etc/haproxy/haproxy.cfg
```
{: .copy-code}

Locate **frontend https_in** section, add new access list that will match traffic by domain name and redirect this traffic to Trendz backend:
```bash
acl trendz_http hdr(host) -i new-trendz-domain.com
use_backend tb-trendz if trendz_http
```

In the same file register Trendz backend:
```bash
backend tb-trendz
  balance leastconn
  option tcp-check
  option log-health-checks
  server tbTrendz1 127.0.0.1:8888 check inter 5s
  http-request set-header X-Forwarded-Port %[dst_port]
```

Generate SSL certificates for new domain:
```bash
sudo certbot-certonly --domain new-trendz-domain.com --email some@email.io
```

Refresh HAProxy configuration:
```bash
sudo haproxy-refresh
```

That's it, HTTPS for Trendz UI configured and now you can access it via:
https://new-trendz-domain.com


**Fresh installation on new server**

Please follow this [guide](/docs/user-guide/install/pe/add-haproxy-ubuntu) to install HAProxy and generate valid SSL certificate using Let's Encrypt.

### Step 10. Host ThingsBoard and Trendz on the same domain
ThingsBoard and Trendz can share same domain name. In this case ThingsBoard web page would be loaded using following link:

```bash
https://{my-domain}/
```

and Trendz web page would be loaded using following link

```bash
https://{my-domain}/trendz
```

For enabling such configuration we have to update HAProxy config to route specific requests to Trendz service. 
Open HAProxy configuration file
```bash
sudo nano /etc/haproxy/haproxy.cfg
```
{: .copy-code}

Locate **frontend https_in** section, add new access list that will match traffic by URL path and redirect this traffic to Trendz backend:

```bash
...
acl trendz_acl path_beg /trendz path_beg /apiTrendz
....
use_backend tb-trendz if trendz_acl
```

### Troubleshooting

Trendz logs are stored in the following directory:
 
```bash
/var/log/trendz
```

You can issue the following command in order to check if there are any errors on the backend side:
 
```bash
cat /var/log/trendz/trendz.log | grep ERROR
```

### Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}
