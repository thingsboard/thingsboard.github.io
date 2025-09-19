## Starting Edge on the {{deviceName}}

{% include /templates/edge/user-guide/starting-edge-on-device.md %}

To proceed with the **Edge installation** on the {{deviceName}}, you need to initiate an **SSH (Secure Shell)** connection.

{% if page.url contains "raspberry-pi" %}

For security reasons, **SSH** is disabled by default on all Raspberry Pi devices.
You need to enable it to continue.
If you have a monitor and keyboard connected, you can enable **SSH** during storage device setup, via the GUI, or in the Terminal.

To enable **SSH** in the Terminal, run: 

```bash
sudo raspi-config
```
{: .copy-code}

On the **Raspberry Pi Software Configuration Tool (raspi-config)** page:

{% assign raspi-config = '
    ===
        image: /images/devices-library/edge/paspberry-pi/1-raspi-config-interface-options.webp,
        title: Go to **Interface Options** and press Enter to select it.
    ===
        image: /images/devices-library/edge/paspberry-pi/2-raspi-config-enable-ssh.webp,
        title: Select the **"Enable/disable remote command line access using SSH"** option and press Enter.
    ===
        image: /images/devices-library/edge/paspberry-pi/3-raspi-config-confirm-enable-ssh.webp,
        title: Select **Yes** to confirm that the SSH server is to be enabled
    ===
        image: /images/devices-library/edge/paspberry-pi/4-raspi-config-ssh-server-enabled-ok.webp,
        title: A confirmation message should appear indicating that the **SSH server is enabled**.
    ===
        image: /images/devices-library/edge/paspberry-pi/5-raspi-config-finish.webp,
        title: Select **Finish** and close the program.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=raspi-config %}

{% endif %}

To initiate an **SSH (Secure Shell)** connection to the {{deviceName}}, open the Terminal and run the following command:

```bash
ssh {{userName}}@ip_address #Enter the actual IP address
```
{: .copy-code}

**ip_address:** Replace "_ip_address_" with the actual IP address of the {{deviceName}}.<br>
**Password:** The Terminal will request the password. {% if page.url contains "raspberry-pi" %}_The default password is `raspberry`._{% endif %}

Once connected, follow the installation instructions below. Start by creating a new directory:

```bash
mkdir tb_edge
```
{: .copy-code}

Open this directory:

```bash
cd /home/{{userName}}/tb_edge
```
{: .copy-code}

{% include /templates/edge/user-guide/preset-edge-config-for-docker.md %}

To set up a local port forwarding via SSH, open **another terminal tab** and run the following command:

```bash
ssh -N -L 8080:127.0.0.1:8080 {{userName}}@ip_address #Enter the actual IP address
```
{: .copy-code}

Any connection to **localhost:8080** on your local machine will be forwarded to **127.0.0.1:8080** on the {{deviceName}}.

The **ThingsBoard Edge** instance is available at [**http://127.0.0.1:8080**](http://127.0.0.1:8080){: target="_blank"}. Use your credentials to log in.

## Adding the ThingsBoard IoT Gateway on Edge (optional)

The **ThingsBoard IoT Gateway** is an optional software component that acts as a bridge between non-ThingsBoard devices/protocols and your ThingsBoard Edge or Server.

You should install **TB Gateway** on the {{deviceName}} (running Edge) if:
* You want the {{deviceName}} to act as a protocol translator for industrial devices (e.g., Modbus RTU/TCP, OPC-UA PLCs).
* You need to aggregate data from multiple local devices (sensors, PLCs, smart meters, etc.) and push it to Edge.
* You plan to use Edge + Gateway as a local integration hub in a factory, building, or lab environment.
* You want to offload device integration logic from Edge itself (Edge is optimized for rule engine, dashboards, and synchronization, while the Gateway handles device connectivity).

To add the **ThingsBoard Gateway**:

{% assign add-gw-CE = '
    ===
        image: /images/edge/config/general/1-gw-ce.webp,
        title: Log in to your Edge instance and go to the **Entities > Gateways** section. To add a new gateway, click the **“+”** icon in the top-right corner.
    ===
        image: /images/edge/config/general/2-gw-ce.webp,
        title: Enter the gateway name in the **“Name”** field, and select the device profile. Click the **“Create”** button.
    ===
        image: /images/edge/config/general/3-gw-ce.webp,
        title: After the gateway is created, the system will transfer you to the **Gateway details** page. Click the **“Launch command”** button and download the **docker-compose.yml** file.
'
%}

{% assign add-gw-PE = '
    ===
        image: /images/edge/config/general/1-gw-pe.webp,
        title: Log in to your Edge instance and go to the **Entities > Gateways** section. To add a new gateway, click the **“+”** icon in the top-right corner.
    ===
        image: /images/edge/config/general/2-gw-pe.webp,
        title: Enter the gateway name in the **“Name”** field, and select the device profile. Click the **“Create”** button.
    ===
        image: /images/edge/config/general/3-gw-pe.webp,
        title: After the gateway is created, the system will transfer you to the **Gateway details** page. Click the **“Launch command”** button and download the **docker-compose.yml** file.
'
%}

{% if page.docsPrefix == "pe/edge/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=add-gw-PE %}
{% else %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=add-gw-CE %}
{% endif %}


## Installing the ThingsBoard IoT Gateway Software on the {{deviceName}}(optional)

Once the **docker-compose.yml** file has been downloaded, open the Terminal and initiate the **SSH** connection to the {{deviceName}}:

```bash
ssh {{userName}}@ip_address
```
{: .copy-code}

**ip_address:** Replace "_ip_address_" with the actual IP address of the {{deviceName}}.<br>
**Password:** The Terminal will request the password. {% if page.url contains "raspberry-pi" %}_The default password is `raspberry`._{% endif %}

To install **ThingsBoard IoT Gateway**, create a new directory:

```bash
mkdir iot_gateway
```
{: .copy-code}

Create the docker-compose file for your **ThingsBoard IoT Gateway** within this directory:

```bash
nano docker-compose.yml
```
{: .copy-code}

In the opened editor, copy and paste the content of the downloaded **docker-compose.yml** file.
Then save (**CTRL+S**) the changes and exit (**CTRL+X**) the file.

To start the **ThingsBoard IoT Gateway**, run the following command in the terminal:

```bash
docker compose up -d
docker compose logs -f
```
{: .copy-code}

Once the **ThingsBoard Edge** and **ThingsBoard IoT Gateway** are running on the {{deviceName}}, you can connect IoT devices and sensors to transfer data. 

> If your devices don’t speak native ThingsBoard protocols and/or you want to connect many devices via a single Gateway, consider adding a connector.
