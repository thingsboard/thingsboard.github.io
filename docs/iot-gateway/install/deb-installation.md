---
layout: docwithnav-gw
title: Install ThingsBoard IoT Gateway as package.
redirect_from: 
 - "/docs/iot-gateway/install/rpi/"
---

This guide will help you to install ThingsBoard IoT Gateway on Ubuntu 18.04 LTS / Ubuntu 20.04 LTS.

## Prerequisites

- The minimum system requirements match official [minimum requirements](https://help.ubuntu.com/lts/serverguide/preparing-to-install.html#system-requirements) for the OS; 
- Install [Python](https://www.python.org){:target="_blank"} version 3.7 or higher.

## Step 1. Download the deb file

Download installation package.

```bash
wget https://github.com/thingsboard/thingsboard-gateway/releases/latest/download/python3-thingsboard-gateway.deb
```
{: .copy-code}

## Step 2. Install the gateway using apt

Install ThingsBoard IoT Gateway as package and run it as daemon uses the following command:<br><br>

```bash
sudo apt install ./python3-thingsboard-gateway.deb -y
```
{: .copy-code}

The deb package will automatically install the necessary libraries for the IOT Gateway to work:  

1. System libraries: *libffi-dev, libglib2.0-dev, libxml2-dev, libxslt-dev, libssl-dev, zlib1g-dev, python3-dev, python3-pip*.  
2. Python modules: *importlib, importlib-metadata, jsonschema, pymodbus, lxml, jsonpath-rw, paho-mqtt, pyserial, PyYAML, simplejson, pyrsistent*.  

## Step 3. Check gateway status 

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

## Step 4. Configure the gateway 

Now you can go to [**configuration guide**](/docs/iot-gateway/configuration/) to configure the gateway. In order for the changes to be saved, we need to restart the gateway.

```bash
systemctl restart thingsboard-gateway
```
{: .copy-code}

## Full Build Version

The Full Build is a special variant of the ThingsBoard Gateway package designed for installation and execution without 
internet access. Also, the full build allows you to use any connector without installing dependencies in runtime. 
It contains all necessary dependencies bundled in advance, including:
- A prebuilt Python virtual environment.
- All required Python packages.
- The application wheel (`.whl`).

This ensures seamless deployment in air-gapped, offline, or restricted-network environments.

### Example of usage

A company runs all their infrastructure inside a private datacenter. Their ThingsBoard Gateway needs to connect to 
OPC-UA and MQTT sources inside the network but cannot access the internet due to strict firewall rules.

### Prerequisites

The Full Build requires the same prerequisites as the standard package installation, and also it's important to have 
installed **Python 3.11**. If a Python version is incompatible, the installation gracefully exits with instructions 
for installing the correct Python version.

For installing a right Python version, you can use the following commands:

```bash
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt-get update
sudo apt-get install -y python3.11 python3.11-venv
```
{: .copy-code}

Make installed Python 3.11 the default Python version:

```bash
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1
sudo update-alternatives --config python3
```
{: .copy-code}

### Installation

#### Step 1. Download the deb file

Download installation package.

```bash
wget https://github.com/thingsboard/thingsboard-gateway/releases/latest/download/python3.11-thingsboard-gateway-full.deb
```
{: .copy-code}

#### Step 2. Install the gateway using apt

Install ThingsBoard IoT Gateway as package and run it as daemon uses the following command:<br><br>

```bash
sudo apt install ./python3.11-thingsboard-gateway-full.deb -y
```
{: .copy-code}

#### Step 3. Check gateway status 

```bash
systemctl status thingsboard-gateway
```
{: .copy-code}

### Troubleshooting

- **Wrong Python version**

  The installer will show a detailed guide for installing the required version and setting it as default.
- **Need to remove installed ThingsBoard IoT Gateway after fixing Python**

  When the required Python version is installed, remove the previously installed Gateway package using:

  ```bash
  sudo dpkg --purge python3-thingsboard-gateway
  ```
  {: .copy-code}

  Then, you can install the Full Build package as described above.
