---
layout: docwithnav
assignees:
- ashvayka
title: Self-hosted setup using AWS EC2 instance
description: ThingsBoard IoT platform self-hosted setup with AWS EC2 instance

---

* TOC
{:toc}

This guide will help you to setup ThingsBoard in AWS EC2 instance. 

## Prerequisites

You need to have admin access to ec2 resourse in your AWS account.

### Step 1. Create EC2 instance

Create EC2 instance ([Amazon user guide](https://docs.aws.amazon.com/efs/latest/ug/gs-step-one-create-ec2-resources.html)) and choose Ubuntu Server 20.04 LTS. We recommend this distribution and OS version for our product.

### Step 2. Configure your security group for the instance.

You need to open TCP 22,80,443,1883 and UDP 5683 ports in inbound rules.


After that, you can start installation from this [guide](/docs/user-guide/install/ubuntu/).
