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

You can connect ThingsBoard Edge to the ThingsBoard Community Edition or ThingsBoard Professional Edition.
See [ThingsBoard Professional Edition](/docs/user-guide/install/pe/rhel/) or [ThingsBoard Community Edition](/docs/user-guide/install/rhel/) step-by-step installation guides for more details.

### Step 3. Get edge Secret and Key

{% include templates/edge/add-edge.md %}

### Step 4. ThingsBoard Edge service installation

Download installation package.

```bash
wget https://dist.thingsboard.io/tb-edge.rpm
```
{: .copy-code}

Install ThingsBoard Edge as a service:

```bash
sudo rpm -Uvh tb-edge.rpm
```
{: .copy-code}

### Step 5. Configure ThingsBoard Edge

{% include templates/edge/rhel-db-postgresql.md %}

### Step 6. Run installation script

{% include templates/edge/run-edge-install.md %} 

### Step 7. Start ThingsBoard Edge service

{% include templates/edge/start-edge-service.md %} 

### Step 8. Open ThingsBoard Edge UI

ThingsBoard Edge UI is accessible on 8190 port by default.
```
http://localhost:8190
```

### Troubleshootings

### Next Steps
