---
layout: docwithnav
assignees:
- vparomskiy
title: Installing ThingsBoard Trendz Analytics  on CentOS/RHEL
description: Installing ThingsBoard Trendz Analytics  on CentOS/RHEL

---

* TOC
{:toc}

### Prerequisites

This guide describes how to install Trendz Analytics on RHEL/CentOS 7. 

**Hardware requirements** depend on amount of analyzed data and amount of devices connected to the system. 
To run Trendz Analytics on a single machine you will need at least 1Gb of free RAM.

In small and medium installations Trendz can be installed **on the same** server with ThingsBoard.

Before continue to installation execute the following commands in order to install necessary tools:

```bash
sudo yum install -y nano wget
sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```

### Step 1. Install Java 8 (OpenJDK) 

{% include templates/install/rhel-java-install.md %}

### Step 2. Trendz Analytics service installation

Download installation package.

```bash
wget https://dist.thingsboard.io/trendz-1.4.1.rpm
```
{: .copy-code}

Install Trendz Analytics as a service

```bash
sudo rpm -Uvh trendz-1.4.1.rpm
```
{: .copy-code}

### Step 3. Obtain and configure license key 

We assume you have already have Trendz license key. If not, please get your [Free Trial license](/pricing/?active=trendz) before you proceed.
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

#### Step 4.1. ThingsBoard Community Edition

Edit ThingsBoard configuration file
```bash 
sudo nano /etc/trendz/conf/trendz.conf
``` 
{: .copy-code}

Add ThingsBoard REST API URL that would be used for communicating with ThingsBoard Platform

```bash
# ThingsBoard URL that will be used by Trendz
export TB_API_URL=http://localhost:8080
export TB_API_PE_ENABLED=false
```
{: .copy-code}


#### Step 4.2. ThingsBoard Professional Edition

Edit ThingsBoard configuration file
```bash 
sudo nano /etc/trendz/conf/trendz.conf
``` 
{: .copy-code}

Add ThingsBoard REST API URL that would be used for communicating with ThingsBoard Platform

```bash
# ThingsBoard URL that will be used by Trendz
export TB_API_URL=http://localhost:8080
export TB_API_PE_ENABLED=true
```
{: .copy-code}

### Step 5. Run installation script

Once Trendz service is installed, you can execute the following script:

```bash
sudo /usr/share/trendz/bin/install/install.sh
``` 

### Step 6. Start Trendz service

Execute the following command to start Trendz Analytics:

Execute the following command to start Trendz Analytics:

```bash
sudo service trendz start
```
{: .copy-code}
 
Once started, you will be able to open Web UI using the following link:

```bash
http://localhost:8888/
```

##### Authentication

For first authentication you need to use **Tenant Administrator** credentials from your **ThingsBoard**

Trendz uses ThingsBoard as an authentication service. During first sign in ThingsBoard service should be also available 
to validate credentials.

### Step 7. HTTPS configuration

You may want to configure HTTPS access using HAProxy. 
This is possible in case you are hosting Trendz in the cloud and have a valid DNS name assigned to your instance.

#### Step 7.1. Trendz and ThingsBoard hosted on same server

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


#### Step 7.2. Fresh installation on new server

Please follow this [guide](/docs/user-guide/install/pe/add-haproxy-ubuntu) to install HAProxy and generate valid SSL certificate using Let's Encrypt.

### Troubleshooting

Trendz logs are stored in the following directory:
 
```bash
/var/log/trendz
```

You can issue the following command in order to check if there are any errors on the backend side:
 
```bash
cat /var/log/trendz/trendz.log | grep ERROR
```
