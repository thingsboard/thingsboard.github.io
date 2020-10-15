---
layout: docwithnav
title: Installing ThingsBoard Edge on CentOS/RHEL Server
description: Installing ThingsBoard Edge on CentOS/RHEL Server
---

* TOC
{:toc}

### Prerequisites

This guide describes how to install ThingsBoard Edge on RHEL/CentOS 7/8.

{% include templates/thingsboard-edge/prerequisites.md %}

Before continue to installation execute the following commands in order to install necessary tools:

```bash
sudo yum install -y nano wget
sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```

### Step 1. Install Java 8 (OpenJDK) 

{% include templates/install/rhel-java-install.md %}

### Step 3. Create edge and get credentials

{% include templates/thingsboard-edge/add-edge.md %}

### Step 4. Configure PostgreSQL

{% include templates/thingsboard-edge/rhel-db-postgresql.md %}

### Step 5. ThingsBoard Edge service installation

Download installation package.

```bash
wget https://dist.thingsboard.io/tb-edge-1.0.0beta.rpm
```
{: .copy-code}

Go to the download repository and install ThingsBoard Edge service

```bash
sudo rpm -Uvh tb-edge-1.0.0beta.rpm
```
{: .copy-code}


### Step 7. Configure ThingsBoard Edge

{% include templates/thingsboard-edge/ubuntu-configure-edge.md %}

### Step 8. Run installation script

{% include templates/thingsboard-edge/run-edge-install.md %} 

### Step 9. Start ThingsBoard Edge service

{% include templates/thingsboard-edge/start-edge-ubuntu.md %}

### Step 10. Open ThingsBoard Edge UI

{% include templates/thingsboard-edge/open-edge-ui.md %} 

### Troubleshootings

ThingsBoard Edge logs are stored in the following directory:
 
```bash
/var/log/tb-edge
```

You can issue the following command in order to check if there are any errors on the service side:
 
```bash
cat /var/log/tb-edge/tb-edge.log | grep ERROR
```

### Next Steps

{% include templates/thingsboard-edge/next-steps.md %}