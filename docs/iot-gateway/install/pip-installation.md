---
layout: docwithnav-gw
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
  wget https://github.com/thingsboard/thingsboard-gateway/releases/latest/download/configs.tar.gz
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


**4. Set permission to the folders:**

- For logs folder:
  ```bash
  sudo chown YOUR_USER:YOUR_USER -R /var/log/thingsboard-gateway
  ```
  {: .copy-code}

- For configs folder:
  ```bash
  sudo chown YOUR_USER:YOUR_USER -R /etc/thingsboard-gateway
  ```
  {: .copy-code}

- For tmp folder:
  ```bash
  sudo chown YOUR_USER:YOUR_USER /tmp
  ```
  {: .copy-code}

Where `YOUR_USER` is a user who will run the gateway.

**5. Configure gateway:**

First, add a gateway device to your ThingsBoard instance by following these steps:

{% assign createNewGatewayDevice = '
  ===
    image: /images/gateway/dashboard/gateway-getting-started-1-ce.png,
    title: Go to the "**Dashboards**" page and open the "**ThingsBoard IoT Gateways**" dashboard;
  ===
    image: /images/gateway/dashboard/gateway-getting-started-2-ce.png,
    title: Click the "**plus**" icon in the upper right corner to add a new gateway. Input the gateway name (e.g., "My Gateway"), and select the default device profile. Click "Create".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createNewGatewayDevice %}

Now, we have to configure gateway using right host, port and credentials, for this purpose use the following steps:

- Click the "**General configuration**" button, and copy **Access token** on the "**General**" tab;
- Open Terminal and execute the following command:

```text
nano /etc/thingsboard-gateway/config/tb_gateway.json
```
{: .copy-code}

- Paste copied access token and replace platform's host and port with yours;
- Save changes and exit from nano.

{% assign configureGateway = '
    ===
        image: /images/gateway/install/configure-gateway-1-ce.png,
        title: Click the "**General configuration**" button;
    ===
        image: /images/gateway/install/configure-gateway-2-ce.png,
        title: Copy **Access token** on the "**General**" tab;
    ===
        image: /images/gateway/install/configure-gateway-3-ce.png,
        title: Open Terminal and execute the following command: `nano /etc/thingsboard-gateway/config/tb_gateway.json`. Paste copied access token and replace platform&#39;s host and port with yours. Save changes and exit from nano.
'
%}

{% include images-gallery.liquid imageCollection=configureGateway %}

**6. Configure logging:**

- Click the "**General configuration**" button;
- Navigate to the "**Logs**" tab and replace the "**File path**" field value to:

```text
/var/log/thingsboard-gateway 
```
{: .copy-code}

- Repeat the previous step for all tabs in the "**Local logging**" section;
- Click "**Save**".

{% assign configureGatewayLogs = '
    ===
        image: /images/gateway/install/configure-gateway-1-ce.png,
        title: Click the "**General configuration**" button;
    ===
        image: /images/gateway/install/configure-gateway-4-ce.png,
        title: Navigate to the "**Logs**" tab and replace the "**File path**" field value to `/var/log/thingsboard-gateway` in all tabs. Then, click "**Save**".
'
%}

{% include images-gallery.liquid imageCollection=configureGatewayLogs %}

**7. Check installation you can with command** (You will get errors about connection, because you don't configure gateway for yourself. *For configuration please use [Configuration guide](/docs/iot-gateway/configuration/)):*

```bash
thingsboard-gateway
```
{: .copy-code}