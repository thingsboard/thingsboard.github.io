---
layout: docwithnav
title: Installing ThingsBoard Edge on Ubuntu Server
description: Installing ThingsBoard Edge on Ubuntu Server
---

* TOC
{:toc}

### Prerequisites

This guide describes how to install ThingsBoard Edge on Ubuntu Server 18.04 LTS. 

{% include templates/edge/prerequisites.md %}

### Step 1. Install Java 8 (OpenJDK) 

{% include templates/install/ubuntu-java-install.md %}

### Step 2. ThingsBoard PE/CE service installation 

{% include templates/edge/thingsboard-installation.md %}

### Step 3. Get edge Secret and Key

{% include templates/edge/add-edge.md %}

### Step 4. ThingsBoard Edge service installation

Download installation package.

```bash
wget https://dist.thingsboard.io/tb-edge.deb
```
{: .copy-code}

Go to the download repository and install ThingsBoard Edge service:

```bash
sudo dpkg -i tb-edge.deb
```
{: .copy-code}

### Step 5. Configure ThingsBoard Edge

{% include templates/edge/ubuntu-db-postgresql.md %}

### Step 6. Run installation script

{% include templates/edge/run-edge-install.md %} 

### Step 7. Start ThingsBoard Edge service

{% include templates/edge/start-edge-ubuntu.md %} 

### Step 8. Open ThingsBoard Edge UI

{% include templates/edge/open-edge-ui.md %} 

### Troubleshootings

{% include templates/edge/troubleshooting.md %} 

### Next Steps

{% include templates/edge/next-steps.md %} 
