---
layout: docwithnav-gw
title: Install ThingsBoard IoT Gateway as package.

---

This guide will help you to install ThingsBoard IoT Gateway on AlmaLinux or RHEL.

## Prerequisites

- Install [Python](https://www.python.org){:target="_blank"} version 3.7 or higher.

## Step 1. Download the installation package

Download installation package.

```bash
wget https://github.com/thingsboard/thingsboard-gateway/releases/latest/download/python3-thingsboard-gateway.rpm
```
{: .copy-code}

## Step 2. Install the gateway using dnf

Install ThingsBoard IoT Gateway as package and run it as daemon uses the following command:<br><br>

```bash
sudo dnf install -y ./python3-thingsboard-gateway.rpm
```
{: .copy-code}  

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

## Offline Build Version

The Offline Build is a special variant of the ThingsBoard Gateway package designed for installation and execution without 
internet access. Also, the offline build allows you to use any connector without installing dependencies in runtime. 
It contains all necessary dependencies bundled in advance, including:
- A prebuilt Python virtual environment.
- All required Python packages.
- The application wheel (`.whl`).

This ensures seamless deployment in air-gapped, offline, or restricted-network environments.

### Example of usage

A company runs all their infrastructure inside a private datacenter. Their ThingsBoard Gateway needs to connect to 
OPC-UA and MQTT sources inside the network but cannot access the internet due to strict firewall rules.

### Prerequisites

The Offline Build requires the same prerequisites as the standard package installation, and also it's important to have 
installed **Python 3.11**, this is only supported on **AlmaLinux 9.x** (we recommend **9.6**) or earlier. 
Newer versions such as **AlmaLinux 10** do not provide **Python 3.11** in the official repositories, 
and we cannot guarantee that alternative installation methods will work properly. If the detected Python version is incompatible, 
the installer will exit gracefully with an error indicating that **Python 3.11** is missing.

For installing a right Python version, you can use the following commands:

```bash
sudo dnf install -y epel-release
sudo dnf install -y python3.11
```
{: .copy-code}

### Installation

#### Step 1. Download the rpm file

Download installation package.

```bash
wget https://github.com/thingsboard/thingsboard-gateway/releases/latest/download/python3.11-thingsboard-gateway-offline.rpm
```
{: .copy-code}

#### Step 2. Install the gateway using dnf

Install ThingsBoard IoT Gateway as package and run it as daemon uses the following command:<br><br>

```bash
sudo dnf install -y ./python3.11-thingsboard-gateway-offline.rpm
```
{: .copy-code}  

#### Step 3. Check gateway status 

```bash
systemctl status thingsboard-gateway
```
{: .copy-code}

### Troubleshooting

- **Wrong Python version**

  The installer will show a detailed guide for installing the required version.
- **Need to remove installed ThingsBoard IoT Gateway after fixing Python**

  When the required Python version is installed, remove the previously installed Gateway package using:

  ```bash
  sudo rpm -e --noscripts thingsboard-gateway
  ```
  {: .copy-code}

  Then, you can install the Offline Build package as described above.
