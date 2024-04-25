---
layout: docwithnav-gw
title: Install ThingsBoard IoT Gateway as package.
redirect_from: 
 - "/docs/iot-gateway/install/rpi/"
---

This guide will help you to install ThingsBoard IoT Gateway on Ubuntu 18.04 LTS / Ubuntu 20.04 LTS.

### Prerequisites

- The minimum system requirements match official [minimum requirements](https://help.ubuntu.com/lts/serverguide/preparing-to-install.html#system-requirements) for the OS; 
- Install [Python](https://www.python.org){:target="_blank"} version 3.7 or higher.

### Step 1. Download the deb file

Download installation package.

```bash
wget https://github.com/thingsboard/thingsboard-gateway/releases/latest/download/python3-thingsboard-gateway.deb
```
{: .copy-code}

### Step 2. Install the gateway using apt

Install ThingsBoard IoT Gateway as package and run it as daemon use the following command:<br><br>

```bash
sudo apt install ./python3-thingsboard-gateway.deb -y
```
{: .copy-code}

The deb package will automatically install the necessary libraries for the IOT Gateway to work:  

1. System libraries: *libffi-dev, libglib2.0-dev, libxml2-dev, libxslt-dev, libssl-dev, zlib1g-dev, python3-dev, python3-pip*.  
2. Python modules: *importlib, importlib-metadata, jsonschema, pymodbus, lxml, jsonpath-rw, paho-mqtt, pyserial, PyYAML, simplejson, pyrsistent*.  

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