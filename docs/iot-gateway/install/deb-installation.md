---
layout: docwithnav
title: Install ThingsBoard IoT Gateway as package.

---

The deb package will install the necessary libraries for the IOT Gateway work:  

1. System libraries: libffi-dev, libglib2.0-dev, libxml2-dev, libxslt-dev, libssl-dev, zlib1g-dev, python3-dev, python3-pip.  
2. Python modules: bluepy, importlib, importlib-metadata, jsonschema, pymodbus, lxml, jsonpath-rw, paho-mqtt, pyserial, PyYAML, simplejson, pyrsistent, bluepy.  
3. The library requirements above will also be installed.  


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