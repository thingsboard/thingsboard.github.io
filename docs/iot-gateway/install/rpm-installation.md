---
layout: docwithnav
title: Install ThingsBoard IoT Gateway as package.

---


To install ThingsBoard IoT Gateway as package and run it as daemon use the following instructions:<br><br>

<br>


**1. Download RPM package (It will install the gateway and service in your system):**

```bash
wget https://github.com/thingsboard/thingsboard-gateway/raw/develop/2.4-python/python3-thingsboard-gateway.rpm
```
{: .copy-code}

**2. Install the gateway using yum (It will download dependencies and install them.):**

```bash
sudo yum install -y ./python3-thingsboard-gateway.rpm
```
{: .copy-code}  

**3. Check the daemon using a following command:**

```bash
systemctl status thingsboard-gateway
```
{: .copy-code}

**Now you can go to [configuration guide](/docs/iot-gateway/configuration/) and configure the gateway.**