---
layout: docwithnav
title: Installing ThingsBoard Edge on Ubuntu
description: Installing ThingsBoard Edge on Ubuntu
---

* TOC
{:toc}

### Prerequisites

This guide describes how to install ThingsBoard Edge on Ubuntu Server 18.04 LTS. 
The minimum system requirements match official [minimum requirements](https://help.ubuntu.com/lts/serverguide/preparing-to-install.html#system-requirements) for the OS.
In small and medium installations Edge can be installed **on the same** server with ThingsBoard.

### Step 1. Install Java 8 (OpenJDK) 

{% include templates/install/ubuntu-java-install.md %}

### Step 2. ThingsBoard PE/CE service installation 

You can connect Edge to the ThingsBoard Community Edition or ThingsBoard Professional Edition.
See [ThingsBoard Professional Edition](/docs/user-guide/install/pe/ubuntu/) or [ThingsBoard Community Edition](/docs/user-guide/install/ubuntu/) step-by-step installation guides for more details.

### Step 3. Get Edge Secret and Key

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

### Step 7. Start Edge service

{% include templates/edge/start-edge-service.md %} 

### Step 8. Open Edge UI

By default, ThingsBoard Edge UI will be available on HTTP port:
```
http://localhost:8190
```


