---
layout: docwithnav-pe-edge
title: Installing ThingsBoard Edge on Ubuntu Server
description: Installing ThingsBoard Edge on Ubuntu Server

---

* TOC
{:toc}

{% include templates/edge/install/compatibility-warning-general.md %}

{% assign docsPrefix = "pe/edge/" %}

This guide describes how to install ThingsBoard Edge on Ubuntu 18.04 LTS / Ubuntu 20.04 LTS.

{% include templates/edge/install/prerequisites.md %}

## Guided Installation Using ThingsBoard Server Pre-configured Instructions

{% include templates/edge/install/tb-server-pre-configured-install-instructions.md %}

{% include templates/edge/install/manual-install-instructions-intro.md %}

### Step 1. Install Java 17 (OpenJDK) 

{% include templates/install/ubuntu-java-install.md %}

### Step 2. Configure PostgreSQL

{% include templates/edge/install/ubuntu-db-postgresql.md %}

### Step 3. ThingsBoard Edge service installation

Download installation package.

```bash
wget https://dist.thingsboard.io/tb-edge-{{ site.release.pe_edge_ver }}.deb
```
{: .copy-code}

Go to the download repository and install ThingsBoard Edge service

```bash
sudo dpkg -i tb-edge-{{ site.release.pe_edge_ver }}.deb
```
{: .copy-code}

### Step 4. Configure ThingsBoard Edge

{% include templates/edge/install/linux-configure-edge.md %}

### Step 5. Run installation script

{% include templates/edge/install/run-edge-install.md %} 

### Step 6. Restart ThingsBoard Edge service

```bash
sudo service tb-edge restart
```
{: .copy-code}

### Step 7. Open ThingsBoard Edge UI

{% include templates/edge/install/open-edge-ui.md %} 

## Troubleshooting

ThingsBoard Edge logs stored in the following directory:
 
```bash
/var/log/tb-edge
```

You can issue the following command in order to check if there are any errors on the service side:
 
```bash
cat /var/log/tb-edge/tb-edge.log | grep ERROR
```
{: .copy-code}

{% include templates/edge/install/edge-service-commands.md %} 

## Next Steps

{% include templates/edge/install/next-steps.md %}
