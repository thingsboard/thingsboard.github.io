---
layout: docwithnav
title: Installing ThingsBoard Edge on CentOS/RHEL Server
description: Installing ThingsBoard Edge on CentOS/RHEL Server
---

* TOC
{:toc}

### Prerequisites

This guide describes how to install ThingsBoard Edge on RHEL/CentOS 7/8.

{% include templates/edge/prerequisites.md %}

Before continue to installation execute the following commands in order to install necessary tools:

```bash
sudo yum install -y nano wget
sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```

### Step 1. Install Java 8 (OpenJDK) 

{% include templates/install/rhel-java-install.md %}

### Step 2. ThingsBoard PE/CE service installation 

{% include templates/edge/thingsboard-installation.md %}

### Step 3. Create edge and get credentials

{% include templates/edge/add-edge.md %}

### Step 4. Configure PostgreSQL

{% include templates/edge/rhel-db-postgresql.md %}

### Step 5. ThingsBoard Edge service installation

{% include templates/edge/edge-extract.md %}

Go to the download repository and install ThingsBoard Edge service:

```bash
sudo dpkg -i tb-edge.deb
```
{: .copy-code}

### Step 6. Obtain and configure license key

{% include templates/edge/license-ubuntu.md %}

### Step 7. Configure ThingsBoard Edge

{% include templates/edge/ubuntu-configure-edge.md %}

### Step 8. Run installation script

{% include templates/edge/run-edge-install.md %} 

### Step 9. Start ThingsBoard Edge service

{% include templates/edge/start-edge-ubuntu.md %}

### Step 10. Open ThingsBoard Edge UI

{% include templates/edge/open-edge-ui.md %} 

### Troubleshootings

{% include templates/edge/troubleshooting.md %} 

### Next Steps

{% include templates/edge/next-steps.md %}