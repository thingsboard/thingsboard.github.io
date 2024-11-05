
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceName = "reComputer R1000" %}
{% assign deviceVendorLink = "https://wiki.seeedstudio.com/recomputer_r/" %}
{% assign controllerName = "Siemens LOGO!" %}
{% assign controllerVendorLink = "https://www.siemens.com/ua/uk/produkty/avtomatyzatsiya-promyslovosti/systemy-avtomatyzatsiyi/systemy-promyslovoyi-avtomatyzatsiyi-simatic/plc-kontrolery-simatic/lohichnyy-modul-logo.html" %}
{% assign dockerName = "Docker" %}
{% assign dockerLink = "https://docs.docker.com/engine/install/" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- Modbus Controller (in our case, <a href="' | append: controllerVendorLink | append: '" target="_blank">' | append: controllerName | append: '</a>) 
- <a href="' | append: dockerLink | append: '" target="_blank">' | append: dockerName | append: '</a> installed '
  %}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% assign targetUrl = "https://thingsboard/installations/" %}
{% else %}
{% assign targetUrl = "https://demo.thingsboard.io/" %}
{% endif %}

{% assign thingsboardLink = "targetUrl" %}


## Introduction

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
The [reComputer R1000]({{deviceVendorLink}}){: target="_blank"} edge IoT controller is built on the high-performance Raspberry Pi CM4 platform, featuring a quad-core A72 processor with a maximum support of 8GB RAM and 32GB eMMC. Equipped with dual Ethernet interfaces that can be flexibly configured, it also includes 3 isolated RS485 channels supporting BACnet, Modbus RTU, Modbus TCP/IP protocols. With robust IoT network communication capabilities, the R1000 series supports multiple wireless communication options including 4G, LoRa®, Wi-Fi/BLE, allowing for flexible configurations to serve as corresponding wireless gateways. This controller is well-suited for remote device management, energy management, and various other scenarios in the field of smart buildings.

## Prerequisites

To continue with this guide, we will require the following:  
{{ prerequisites }}
- [ThingsBoard Demo account]({{targetUrl}}){: target="_blank"}
 
## Integration with ThingsBoard

For illustrative purposes, this guide will use the [ThingsBoard Demo account]({{targetUrl}}){: target="_blank"}.

#### Step 1. Starting the ThingsBoard Edge on the reComputer R1000

To create a new **Edge instance**, log in to the [ThingsBoard Demo account]({{targetUrl}}){: target="_blank"} and navigate to the **Edge Management > Instances** section:

{% assign startEdgeCE = '
    ===
        image: /images/edge/installation-add-edge-item-1.png,
        title: Click the **“+”** icon in the top right corner and select the **“Add new edge”** option.
    ===
        image: /images/edge/installation-add-edge-item-2.png,
        title: Enter a name for your Edge in the **"Name"** field, e.g., R1000 Demo Edge, and click the **"Add"** button to confirm the addition of your new Edge.
    ===
        image: /images/edge/installation-add-edge-item-3.png,
        title: Your new **Edge instance** is displayed at the top of the list, as entries are sorted by creation time by default.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=startEdgePE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=startEdgeCE %}
{% endif %}

Proceed with the installation of the **Edge instance** on the **reComputer R1000**: 

* To initiate an **SSH (Secure Shell)** connection to the **reComputer R1000**, open the terminal and execute the following command:

```bash
ssh recomputer@ip_address
```
{: .copy-code}
  
**ip_address:** The IP address of the reComputer R1000. Enter the actual IP address instead of _ip_address_.<br>
**Password:** Terminal requests the password. The **default password** for the reComputer R1000 is: **12345678**

* Once connected, you can follow the installation instructions below. Start by creating a new directory:

```bash
mkdir tb_edge
```
{: .copy-code}

* Open this directory:

```bash
cd /home/recomputer/tb_edge
```
{: .copy-code}

* Create a docker compose file for the **ThingsBoard Edge** service within this directory:

```bash
nano docker-compose.yml
```
{: .copy-code}

To configure this file properly:
  
{% assign copyYmlCE = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/1.2-instrucrions-button.webp,
        title: Go to the **Edge management > Instances** section of your [ThingsBoard Demo account](https://demo.thingsboard.io/){: target="_blank"}, and click on the **Instance** itself. Then, click the **"Install & Connect Instructions"** button.
    === 
        image: /images/devices-library/edge/recomputer-r1000/1.3-docker.webp,
        title: On the **"Install & Connect Instructions"** pop-up window, select the **"Docker"** tab and copy the configuration lines.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=copyYmlPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=copyYmlCE %}
{% endif %}

* Insert the copied lines into the **docker-compose.yml** file and press **CTRL+S** to save it. To close the file press **CTRL+X**.

* Execute the following commands:

```bash
docker compose up -d
docker compose logs -f mytbedge
```
{: .copy-code}

{% capture local-deployment %}
The command must be executed in the same directory in which the docker-compose.yml file was saved.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

* To set up a local port forwarding via SSH, open **another terminal tab** and execute the following command:

```bash
ssh -N -L 8080:127.0.0.1:8080 recomputer@ip_address
```
{: .copy-code}

Any connection to **localhost:8080** on your local machine will be forwarded to **127.0.0.1:8080** on the **reComputer R1000**. 

* To access the **Edge Instance**, please copy the local host address into the address bar of your browser. Use your credentials to log in.

```bash
127.0.0.1:8080
```
{: .copy-code}

#### Step 2. Provisioning the ThingsBoard IoT Gateway on Edge

To provision the **ThingsBoard Gateway**:

{% assign iotGWdashboardCE = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/1-instances-section.webp,
        title: Log in to the [ThingsBoard Demo account](https://demo.thingsboard.io/){: target="_blank"} and navigate to the **Edge Management > Instances** section, then click the **“Manage dashboards”** button.
    ===
        image: /images/devices-library/edge/recomputer-r1000/2-assign-dashboard.webp,
        title: On the **“Edge Dashboards”** page, click the **“+”** icon to assign the **“ThingsBoard IoT Gateways”** dashboard to the Edge instance. Click the **“Assign”** button. The **"ThingsBoard IoT Gateways"** dashboard is one of the pre-created, out-of-the-box dashboards available.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=iotGWdashboardPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=iotGWdashboardCE %}
{% endif %}

{% assign localhostCE = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/3-login-to-edge.webp,
        title: Open your **Edge instance** and navigate to the **Dashboards** section and open the **“ThingsBoard IoT Gateways”** dashboard.
    ===
        image: /images/devices-library/edge/recomputer-r1000/4-add-gw.webp,
        title: Click the **“+”** icon in the upper right corner to add a new gateway. Enter the gateway name in the **“Name”** field, and select the **“default”** device profile. Click the **“Create”** button.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=localhostPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=localhostCE %}
{% endif %}

#### Step 3. Configuring the ModBus Connector

The new **IoT Gateway device** will be featured at the top of the **“ThingsBoard IoT Gateways”** dashboard list, allowing us to add a **ModBus Connector**. For example, we can use the ModBus Connector to fetch temperature data from the to fetch temperature data from the [Siemens LOGO!]({{controllerVendorLink}}){: target="_blank"} device:

{% assign modbusConnectorCE = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/5-connectors-button.webp,
        title: On the **“ThingsBoard IoT Gateways”** dashboards page, click the **“Connectors”** button.
    ===
        image: /images/devices-library/edge/recomputer-r1000/6-add-connector.webp,
        title: To add a **Connector**, click the **“+”** button. In the pop-up window, select the **MODBUS** option in the **“Type”** field and enter the  name of the connector in the **“Name”** field. Click the **“Add”** button to proceed.
    ===
        image: /images/devices-library/edge/recomputer-r1000/7-advanced-config.webp,
        title: To make further adjustments, click on the newly added **Connector** and select the **“Advanced”** tab and the **“Configuration”** sub-tab on the right side of the **"MODBUS Configuration"** screen. 
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=modbusConnectorPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=modbusConnectorCE %}
{% endif %}

* Then, please insert the following configuration code. Then, click the **“Save”** button.

```bash
{
  "master": {
    "slaves": [
      {
        "host": "192.168.1.200",
        "port": 510,
        "type": "tcp",
        "method": "socket",
        "timeout": 35,
        "byteOrder": "BIG",
        "wordOrder": "BIG",
        "retries": true,
        "retryOnEmpty": true,
        "retryOnInvalid": true,
        "pollPeriod": 3000,
        "unitId": 1,
        "deviceName": "LOGO!",
        "deviceType": "siemens",
        "connectAttemptTimeMs": 5000,
        "connectAttemptCount": 5,
        "waitAfterFailedAttemptsMs": 300000,
        "attributes": [],
        "timeseries": [
          {
            "tag": "temp",
            "type": "16int",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 2,
            "divider": 10
          },
          {
            "tag": "Q1",
            "type": "bit",
            "functionCode": 1,
            "objectsCount": 1,
            "address": 8193
          },
          {
            "tag": "Q2",
            "type": "16int",
            "functionCode": 3,
            "objectsCount": 2,
            "address": 507
          }
        ],
        "rpc": [
          {
            "tag": "getTemp",
            "type": "16int",
            "functionCode": 4,
            "objectsCount": 1,
            "address": 2
          }
        ],
        "attributeUpdates": [
          {
            "tag": "randNumber",
            "type": "16int",
            "functionCode": 6,
            "objectsCount": 1,
            "address": 507
          }
        ],
        "reportStrategy": {
          "type": "ON_REPORT_PERIOD",
          "reportPeriod": 3000
        }
      }
    ]
  },
  "slave": {}
}
```
{: .copy-code}

#### Step 4. Installing the ThingsBoard IoT Gateway on the reComputer R1000

Start installation of the **IoT Gateway** on the **reComputer R1000**: 

{% assign downloadYMLCE = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/8-back-to-iot-dasboard.webp,
        title: Go back to the **“ThingsBoard IoT Gateways”** dashboard page and click on the newly added **Gateway device** (reComputer R1000).
    ===
        image: /images/devices-library/edge/recomputer-r1000/9-download-yml.webp,
        title: On the **Gateway device** page, click the **“Launch command”** button and download **docker-compose.yml** for your gateway.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=downloadYMLPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=downloadYMLCE %}
{% endif %}

* Then, open another tab in the terminal and initiate the **SSH** connection to the **reComputer R1000**:

```bash
ssh recomputer@ip_address
```
{: .copy-code}

**ip_address:** The IP address of the reComputer R1000. Enter the actual IP address instead of _ip_address_.<br>
**Password:** Terminal requests the password. The **default password** for the reComputer R1000 is: 12345678

* Create the directory for the Gateway service:

```bash
mkdir gateway_service
```
{: .copy-code}

* Open this directory:

```bash
cd /home/recomputer/gateway_service
```
{: .copy-code}

* Create the docker compose file for your **IoT Gateway**:

```bash
nano docker-compose.yml
```
{: .copy-code}

* Copy the content of the previously downloaded **docker-compose.yml** file, and paste it into the new one via the terminal:

![image](/images/devices-library/edge/recomputer-r1000/10-copy-paste-configs.webp)

* Save the **docker-compose.yml** file and press **CTRL+S** to save it. To close the file press **CTRL+X**. 

* Start the **Gateway** by executing the following command in the terminal:

```bash
docker compose up -d
docker compose logs -f
```
{: .copy-code}

{% capture local-deployment %}
The command must be executed in the same directory in which the docker-compose.yml file was saved.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

## Visualize Incoming Data with the Dashboard

![image](/images/devices-library/edge/recomputer-r1000/logo-and-recomputer-r1000.webp){: style="float: left; max-width: 300px; max-height: 300px; margin: 0px 30px 0px 0px"}Once the **ThingsBoard Edge** and **IoT Gateway** are running on the **Computer R1000** and the **ModBus connector** transfers data, you can visualize it on the **Dashboard** on your **Edge instance**:

{% assign dashboardCE = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/11-create-new-dashboard.webp,
        title: Go to the **Dashboards** section, click the **“+”** icon and select **"Create new dashboard"** option.
    ===
        image: /images/devices-library/edge/recomputer-r1000/12-enter-name.webp,
        title: In the pop-up window, enter the dashboard **title**. Other fields are optional. Click the **"Add"** button to proceed.
    ===
        image: /images/devices-library/edge/recomputer-r1000/13-configure-dashboard.webp,
        title: Once you have created the dashboard, it will be automatically opened. Click the **"Add widget"** button and select the widget you require. For example, open the **“Charts”** widget bundle and elect the **Line chart**.
    ===
        image: /images/devices-library/edge/recomputer-r1000/14-widget-configuration.webp,
        title: In the **"Add Widget"** pop-up window, select the **Device** (in our case, Siemens LOGO!) as the **Datasource**. Please verify that the **Series Key** is the same as the one entered in the **Advanced Configuration** settings of the connector. As an example, we have utilized the designation **"temp"**. Consequently, the series key must be **"temp"** as well. Click the **“Add”** button..
    ===
        image: /images/devices-library/edge/recomputer-r1000/15-dashboard.webp,
        title: You will now be able to see the real-time data on the dashboard.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=dashboardPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=dashboardCE %}
{% endif %}