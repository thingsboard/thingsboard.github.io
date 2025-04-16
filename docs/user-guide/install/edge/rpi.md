---
layout: docwithnav-edge
title: Installing ThingsBoard Edge on Raspberry Pi
description: Installing ThingsBoard Edge on Raspberry Pi

---

* TOC
{:toc}

{% include templates/edge/install/compatibility-warning-general.md %}

{% assign docsPrefix = "edge/" %}

This guide provides step-by-step instructions for installing **ThingsBoard Edge** on **RaspberryPi**.

{% include templates/edge/install/prerequisites.md %}

## Step 1. Install Java 17 (OpenJDK)

{% include templates/install/ubuntu-java-install.md %}

## Step 2. ThingsBoard Edge Service Installation

Download the installation package.

```bash
wget https://github.com/thingsboard/thingsboard-edge/releases/download/{{ site.release.edge_tag }}/tb-edge-{{ site.release.edge_ver }}.deb
```
{: .copy-code}

Go to the download repository and install ThingsBoard Edge service

```bash
sudo dpkg -i tb-edge-{{ site.release.edge_ver }}.deb
```
{: .copy-code}

## Step 3. Configure ThingsBoard Edge Database

{% include templates/edge/install/rpi-db-rpi-postgresql.md %}

## Step 4. The Queue Service

By default, **ThingsBoard Edge** uses the built-in queue implementation, which requires no additional configuration.

It is useful for development or proof-of-concept (PoC) environments, but is not recommended for production or any type of clustered deployment due to limited scalability.

## Step 5. [Optional] Memory Update for Slow Machines

{% include templates/edge/install/memory-on-slow-edge-machines.md %} 

## Step 6. Run Installation Script

{% include templates/edge/install/run-edge-install.md %} 

## Step 7. Restart ThingsBoard Edge Service

```bash
sudo service tb-edge restart
```
{: .copy-code}

## Step 8. Open ThingsBoard Edge UI

{% include templates/edge/install/open-edge-ui.md %}

* Or replace **localhost** with your **actual Raspberry Pi's local IP**

## Troubleshooting

**ThingsBoard Edge** logs stored in the following directory:

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
