---
layout: docwithnav-gw
title: Install ThingsBoard IoT Gateway as package.

---

This guide will help you to install ThingsBoard IoT Gateway on CentOS or RHEL.

### Prerequisites

- Install [Python](https://www.python.org){:target="_blank"} version 3.7 or higher.

### Step 1. Download the installation package

Download installation package.

```bash
wget https://github.com/thingsboard/thingsboard-gateway/releases/latest/download/python3-thingsboard-gateway.rpm
```
{: .copy-code}

### Step 2. Install the gateway using yum

Install ThingsBoard IoT Gateway as package and run it as daemon use the following command:<br><br>

```bash
sudo yum install -y ./python3-thingsboard-gateway.rpm
```
{: .copy-code}  

### Step 3. Check gateway status 

```bash
systemctl status thingsboard-gateway
```
{: .copy-code}

You may notice some errors in the output. However, it is expected, since gateway is not configured to connect to ThingsBoard yet:

```text
... python3[7563]: ''2019-12-26 09:31:15' - ERROR - mqtt_connector - 181 - Default Broker connection FAIL with error 5 not authorised!'
... python3[7563]: ''2019-12-26 09:31:15' - DEBUG - mqtt_connector - 186 - "Default Broker" was disconnected.'
... python3[7563]: ''2019-12-26 09:31:16' - DEBUG - tb_client - 78 - connecting to ThingsBoard'
... python3[7563]: ''2019-12-26 09:31:17' - DEBUG - tb_client - 78 - connecting to ThingsBoard'
```

### Step 4. Configure the gateway 

Now you can go to [**configuration guide**](/docs/iot-gateway/configuration/) to configure the gateway. In order for the changes to be saved, we need to restart the gateway.

```bash
systemctl restart thingsboard-gateway
```
{: .copy-code}