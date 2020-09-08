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

### Step 3. Create edge and get credentials

{% include templates/edge/add-edge.md %}

### Step 4. ThingsBoard Edge service installation

{% include templates/edge/edge-extract.md %}

**Note:** We assume you have installed ThingsBoard to default location: *C:\Program Files (x86)\thingsboard-edge*

### Step 5. Obtain and configure license key

{% include templates/edge/license-ubuntu.md %}

### Step 6. Configure PostgreSQL

{% include templates/edge/windows-db-postgresql.md %}

{% include templates/edge/windows-configure-edge.md %}

### Step 7. Run installation script

{% include templates/edge/run-edge-install-windows.md %} 

### Step 8. Start ThingsBoard Edge service

{% include templates/edge/windows-start-service.md %}

### Step 9. Open ThingsBoard Edge UI

{% include templates/edge/open-edge-ui.md %} 

### Troubleshootings

{% include templates/edge/troubleshooting.md %} 

### Next Steps

{% include templates/edge/next-steps.md %} 
