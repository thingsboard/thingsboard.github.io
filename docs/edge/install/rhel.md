---
layout: docwithnav-edge
title: Installing ThingsBoard Edge on CentOS/RHEL Server
description: Installing ThingsBoard Edge on CentOS/RHEL Server
---

* TOC
{:toc}

This guide describes how to install ThingsBoard Edge on RHEL/CentOS 7/8.

{% include templates/edge/install/prerequisites.md %}

{% include templates/edge/install/hardware-requirements.md %}

#### Pre-installation step 
Before continue to installation execute the following commands in order to install necessary tools:

```bash
sudo yum install -y nano wget
sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```

### Step 1. Install Java 11 (OpenJDK) 

{% include templates/install/rhel-java-install.md %}

### Step 2. Configure PostgreSQL

{% include templates/edge/install/rhel-db-postgresql.md %}

### Step 3. ThingsBoard Edge service installation

Download installation package.

```bash
wget https://dist.thingsboard.io/tb-edge-3.3.rpm
```
{: .copy-code}

Go to the download repository and install ThingsBoard Edge service

```bash
sudo rpm -Uvh tb-edge-3.3.rpm
```
{: .copy-code}


### Step 4. Configure ThingsBoard Edge

{% include templates/edge/install/ubuntu-configure-edge.md %}

### Step 5. Run installation script

{% include templates/edge/install/run-edge-install.md %} 

### Step 6. Restart ThingsBoard Edge service

```bash
sudo service tb-edge restart
```

### Step 7. Open ThingsBoard Edge UI

{% include templates/edge/install/open-edge-ui.md %} 

### Troubleshootings

ThingsBoard Edge logs are stored in the following directory:
 
```bash
/var/log/tb-edge
```

You can issue the following command in order to check if there are any errors on the service side:
 
```bash
cat /var/log/tb-edge/tb-edge.log | grep ERROR
```

{% include templates/edge/install/edge-service-commands.md %} 

## Next Steps

{% include templates/edge/install/next-steps.md %}