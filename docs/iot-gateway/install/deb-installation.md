---
layout: docwithnav
title: Install ThingsBoard IoT Gateway as package.

---


To install ThingsBoard IoT Gateway as package and run it as daemon use the following instructions:

1. At the first step you should download a deb file:

```bash
wget https://github.com/thingsboard/thingsboard-gateway/raw/develop/2.4-python/python3-thingsboard-gateway.deb
```
{: .copy-code}

2. Install the gateway using apt (It will download dependencies and install it.):

```bash
sudo apt install ./python3-thingsboard-gateway.deb -y
```
{: .copy-code}

3. Check the daemon using a following command:

```bash
systemctl status thingsboard-gateway
```
{: .copy-code}

**Now you can go to [configuration guide](/docs/iot-gateway/configuration/) and configure the gateway.**