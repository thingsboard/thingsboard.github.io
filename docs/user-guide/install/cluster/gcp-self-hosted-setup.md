---
layout: docwithnav
assignees:
- ashvayka
title: Self-hosted setup using GCP VM instance
description: ThingsBoard IoT platform self-hosted setup with GCP VM instance

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in GCP VM instance. 

## Prerequisites

You need to have admin access to Compute Engine in your GCP account.

### Step 1. Create VM instance

Create EC2 instance ([Creating and starting a VM instance](https://cloud.google.com/compute/docs/instances/create-start-instance)) and choose Ubuntu Server 20.04 LTS. We recommend this distribution and OS version for our product.

### Step 2. Configure your firewall rules for the instance.

You need to open TCP 22,80,443,1883 and UDP 5683 ports in inbound rules.


After that, you can start installation from this [guide](/docs/user-guide/install/ubuntu/).

