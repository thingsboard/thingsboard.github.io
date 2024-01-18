---
layout: docwithnav-gw
title: IoT Gateway installation from sources.

---

### Installation from sources

To install ThingsBoard Gateway from sources, you should follow steps below:    
  
**1. Install required libraries to the system with apt:**  
```bash
sudo apt install python3-dev python3-pip libglib2.0-dev git 
```
{: .copy-code}

**2. Download repository from GitHub:**
```bash
git clone --recurse-submodules https://github.com/thingsboard/thingsboard-gateway.git --depth 1
```
{: .copy-code}

**3. Move into downloaded directory:**
```bash
cd thingsboard-gateway
```
{: .copy-code}

**4. Install python requirements:**  
```bash
pip3 install -r requirements.txt
```
{: .copy-code}

**5. Create "logs" folder:**  
```bash
mkdir logs
```
{: .copy-code}

**6. Configure gateway to work with your instance of ThingsBoard platform, using [this guide](/docs/iot-gateway/configuration/)** *or just run to test result of installation such as in the next step.*
   
**7. Run gateway, to check installation result:**
```bash
python3 ./thingsboard_gateway/tb_gateway.py
```
{: .copy-code}

### Hot Reloader

If you are using Gateway for development, you can enable Hot Reloader to restart Gateway every time when you edit any
project file.

To run Gateway with Hot Reloader, use the following command:
```bash
python3 ./thingsboard_gateway/tb_gateway.py true
```
{: .copy-code}
