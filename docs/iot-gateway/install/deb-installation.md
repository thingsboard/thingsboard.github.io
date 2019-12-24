---
layout: docwithnav
title: Install ThingsBoard IoT Gateway as package.

---

### Prerequisites

This guide describes how to install ThingsBoard IoT Gateway on Ubuntu Server 18.04 LTS. 
The minimum system requirements match official [minimum requirements](https://help.ubuntu.com/lts/serverguide/preparing-to-install.html#system-requirements) for the OS.

The deb package will automatically install the necessary libraries for the IOT Gateway to work:  

1. System libraries: libffi-dev, libglib2.0-dev, libxml2-dev, libxslt-dev, libssl-dev, zlib1g-dev, python3-dev, python3-pip.  
2. Python modules: bluepy, importlib, importlib-metadata, jsonschema, pymodbus, lxml, jsonpath-rw, paho-mqtt, pyserial, PyYAML, simplejson, pyrsistent, bluepy.  

To install ThingsBoard IoT Gateway as package and run it as daemon use the following instructions:<br><br>

<br>

**1. At the first step you should download a deb file:**

```bash
wget https://github.com/thingsboard/thingsboard-gateway/raw/develop/2.4-python/python3-thingsboard-gateway.deb
```
{: .copy-code}

**2. Install the gateway using apt (It will download dependencies and install them.):**

```bash
sudo apt install ./python3-thingsboard-gateway.deb -y
```
{: .copy-code}

**3. Check the daemon using a following command:**

```bash
systemctl status thingsboard-gateway
```
{: .copy-code}

**Now you can go to [configuration guide](/docs/iot-gateway/configuration/) and configure the gateway.**