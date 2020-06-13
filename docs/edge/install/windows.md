---
layout: docwithnav
title: Installing ThingsBoard Edge on Windows
description: Installing ThingsBoard Edge on Windows
---

* TOC
{:toc}

### Prerequisites

This guide describes how to install ThingsBoard Edge on Windows machine.
Instructions below are provided for Windows 10/8.1/8/7 32-bit/64-bit.

{% include templates/edge/prerequisites.md %}

### Step 1. Install Java 8 (OpenJDK) 

{% include templates/install/windows-java-install.md %}

### Step 2. ThingsBoard PE/CE service installation 

{% include templates/edge/thingsboard-installation.md %}

### Step 3. Get edge Secret and Key

{% include templates/edge/add-edge.md %}

### Step 4. ThingsBoard Edge service installation

Download and run the installation package.

```bash
https://dist.thingsboard.io/thingsboard-edge-windows-setup.exe
```
{: .copy-code}

**Note:** We assume you have installed ThingsBoard to default location: *C:\Program Files (x86)\thingsboard-edge*  

### Step 5. Configure ThingsBoard Edge

{% include templates/edge/windows-db-postgresql.md %}

### Step 6. Run installation script

{% include templates/edge/run-edge-install.md %} 

### Step 7. Start ThingsBoard Edge service

{% include templates/edge/windows-start-service.md %}

### Step 8. Open ThingsBoard Edge UI

Once started, you will be able to open Web UI using the following link:

```bash
http://localhost:8190/
```

The following default credentials are available if you have specified *--loadDemo* during execution of the installation script:

- **Systen Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

You can always change passwords for each account in account profile page.

### Troubleshootings

{% include templates/edge/troubleshooting.md %} 

### Next Steps

{% include templates/edge/next-steps.md %} 
