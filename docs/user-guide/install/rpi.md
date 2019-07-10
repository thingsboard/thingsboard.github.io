---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard on Raspberry Pi 3 Model B
description: Installing ThingsBoard IoT Platform on Raspberry Pi 3 Model B

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide describes how to install ThingsBoard on a Raspberry Pi 3 running Raspbian Buster.

### Third-party components installation

### Step 1. Install Java 8 (OpenJDK) 

{% include templates/install/ubuntu-java-install.md %}

### Step 2. ThingsBoard service installation

Download installation package.

```bash
wget https://github.com/thingsboard/thingsboard/releases/download/v2.4/thingsboard-2.4.deb
```
{: .copy-code}

Install ThingsBoard as a service

```bash
sudo dpkg -i thingsboard-2.4.deb
```
{: .copy-code}

### Step 3. Configure ThingsBoard database

{% include templates/install/ubuntu-db-postgresql.md %}

### Step 4. Memory update for slow machines (1GB of RAM) 

{% include templates/install/memory-on-slow-machines.md %} 

### Step 5. Run installation script
{% include templates/run-install.md %} 


### Step 6. Start ThingsBoard service

{% include templates/start-service.md %}

{% capture 90-sec-ui %}
Please allow up to 240 seconds for the Web UI to start. This is applicable only for slow machines with 1-2 CPUs or 1-2 GB RAM.{% endcapture %}
{% include templates/info-banner.md content=90-sec-ui %}

### Troubleshooting

{% include templates/install/troubleshooting.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
