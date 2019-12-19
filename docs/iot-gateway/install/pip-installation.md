---
layout: docwithnav
title: IoT Gateway Pip installation.

---

### Package manager installation

To install ThingsBoard Gateway as python module, you should follow steps below:  

**1. Install required libraries to the system with apt:**  

```bash
sudo apt install python3-dev python3-pip libglib2.0-dev 
```
{: .copy-code}

**2. Install ThingsBoard Gateway module with pip:**  

```bash
sudo pip3 install thingsboard-gateway
```
{: .copy-code}

**3. Download example of configs, create log folder:**  

 - Downloading configs example:  

```bash
wget https://github.com/thingsboard/thingsboard-gateway/raw/develop/2.4-python/configs.tar.gz
```
{: .copy-code}

 - Make directory for configs:  
```bash
sudo mkdir /etc/thingsboard-gateway
```
{: .copy-code}

 - Make directory for logs:  
```bash
sudo mkdir /var/log/thingsboard-gateway
```
{: .copy-code}

 - Unpack configs:
```bash
sudo tar -xvzf configs.tar.gz -C /etc/thingsboard-gateway
```
{: .copy-code}


**4. Check installation you can with command** (You will get errors about connection, because you don't configure gateway for yourself. *For configuration please use [Configuration guide](/docs/iot-gateway/configuration-guide)):*

```bash
thingsboard-gateway
```
{: .copy-code}