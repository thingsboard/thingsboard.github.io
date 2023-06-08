---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Installing ThingsBoard Trendz Analytics  on CentOS/RHEL
description: Installing ThingsBoard Trendz Analytics  on CentOS/RHEL

---

* TOC
{:toc}

### Prerequisites

This guide describes how to install Trendz Analytics on RHEL/CentOS 7/8. 

**Hardware requirements** depend on amount of analyzed data and amount of devices connected to the system. 
To run Trendz Analytics on a single machine you will need at least 1Gb of free RAM.

In small and medium installations Trendz can be installed **on the same** server with ThingsBoard.

Before continue to installation execute the following commands in order to install necessary tools:

**For CentOS 7:**

```bash
# Install wget
sudo yum install -y nano wget
# Add latest EPEL release for CentOS 7
sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm

```
{: .copy-code}

**For CentOS 8:**

```bash
# Install wget
sudo yum install -y nano wget
# Add latest EPEL release for CentOS 8
sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm

```
{: .copy-code}

### Step 1. Install Java 11 (OpenJDK) 

{% include templates/install/rhel-java-install.md %}

### Step 2. Trendz Analytics service installation

Download installation package.

```bash
wget https://dist.thingsboard.io/trendz-1.10.1.rpm
```
{: .copy-code}

Install Trendz Analytics as a service

```bash
sudo rpm -Uvh trendz-1.10.1.rpm
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

{% include templates/install/postgres-install-rhel.md %}

Then, press "Ctrl+D" to return to main user console.

After configuring the password, edit the pg_hba.conf to use MD5 authentication with the postgres user.

Edit pg_hba.conf file: 

```bash
sudo nano /var/lib/pgsql/12/data/pg_hba.conf

```
{: .copy-code}

Locate the following lines:

```text
# IPv4 local connections:
host    all             all             127.0.0.1/32            ident
```

Replace `ident` with `md5`:

```text
host    all             all             127.0.0.1/32            md5
```

Finally, you should restart the PostgreSQL service to initialize the new configuration:

```bash
sudo systemctl restart postgresql-12.service

```
{: .copy-code}

#### Create Database for Trendz

Connect to the database to create trendz DB:

```bash
psql -U postgres -d postgres -h 127.0.0.1 -W

```
{: .copy-code}

Execute create database statement

```bash
CREATE DATABASE trendz;
\q

```
{: .copy-code}

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

### Step 8. HTTPS configuration

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

### Step 9. Host ThingsBoard and Trendz on the same domain
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