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
{% assign thingsboardInstanceLink = "https://demo.thingsboard.io/" %}
{% assign thingsboardOnPremiceLink = "https://thingsboard.io/docs/{{page.docsPrefix}}user-guide/install/installation-options/" %}

## Introduction

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
The [reComputer R1000]({{deviceVendorLink}}){: target="_blank"} edge IoT controller is built on the high-performance Raspberry Pi CM4 platform, featuring a quad-core A72 processor with a maximum support of 8GB RAM and 32GB eMMC. Equipped with dual Ethernet interfaces that can be flexibly configured, it also includes 3 isolated RS485 channels supporting BACnet, Modbus RTU, Modbus TCP/IP protocols. With robust IoT network communication capabilities, the R1000 series supports multiple wireless communication options including 4G, LoRa®, Wi-Fi/BLE, allowing for flexible configurations to serve as corresponding wireless gateways. This controller is well-suited for remote device management, energy management, and various other scenarios in the field of smart buildings.

## Prerequisites

To continue with this guide, we will require the following:  
{{ prerequisites }}
- [ThingsBoard Demo account]({{thingsboardInstanceLink}}){: target="_blank"}
 
## Integration with ThingsBoard

For illustrative purposes, this guide will use the [ThingsBoard Demo account]({{thingsboardInstanceLink}}){: target="_blank"}.

As an alternative, you may wish to consider installing the **ThingsBoard** server [on-premise](https://thingsboard.io/docs/{{pedocsPrefix}}user-guide/install/installation-options/){: target="_blank"}. 

#### Step 1. Starting the ThingsBoard Edge on the reComputer R1000

To create a new **Edge instance**, log in to the [ThingsBoard Demo account]({{thingsboardInstanceLink}}){: target="_blank"} and navigate to the **Edge Management > Instances** section:

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

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=startEdgePE %}
{% else %}  
{% include images-gallery.liquid showListImageTitles="true" imageCollection=startEdgeCE %}
{% endif %}

Proceed with the installation of the **Edge instance** on the **reComputer R1000**: 

* To initiate an **SSH (Secure Shell)** connection to the **reComputer R1000**, open the terminal and execute the following command:

```bash
ssh recomputer@<ip_address>
```
{: .copy-code}
  
**ip_address:** The IP address of the reComputer R1000.<br>
**Password:** Terminal requests the password from the reComputer R1000.

* Once a connection has been established, you can follow the installation instructions provided by the ThingsBoard Server or the installation guide below. 
Create a new directory:

```bash
mkdir tb_edge
```
{: .copy-code}

* Create a docker compose file for the **ThingsBoard Edge** service within this directory:

```bash
nano docker-compose-edge.yml
```
{: .copy-code}

* Add the following lines to the yml file:

```bash
version: '3.8'
services:
  mytbedge:
    restart: always
    image: "thingsboard/tb-edge:3.8.0EDGE"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "5683-5688:5683-5688/udp"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/tb-edge
      CLOUD_ROUTING_KEY: PUT_YOUR_EDGE_KEY_HERE # e.g. 19ea7ee8-5e6d-e642-4f32-05440a529015
      CLOUD_ROUTING_SECRET: PUT_YOUR_EDGE_SECRET_HERE # e.g. bztvkvfqsye7omv9uxlp
      CLOUD_RPC_HOST: PUT_YOUR_CLOUD_IP # e.g. 192.168.1.1 or demo.thingsboard.io
    volumes:
      - tb-edge-data:/data
      - tb-edge-logs:/var/log/tb-edge
  postgres:
    restart: always
    image: "postgres:15"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: tb-edge
      POSTGRES_PASSWORD: postgres
    volumes:
      - tb-edge-postgres-data:/var/lib/postgresql/data

volumes:
  tb-edge-data:
    name: tb-edge-data
  tb-edge-logs:
    name: tb-edge-logs
  tb-edge-postgres-data:
    name: tb-edge-postgres-data
```
{: .copy-code}

* Save the docker-compose.yml file and execute the following commands:

```bash
docker compose up -d
docker compose logs -f mytbedge
```
{: .copy-code}

{% capture local-deployment %}
The command must be executed in the same directory in which the docker-compose.yml file was saved.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

* To set up a local port forwarding via SSH, open another terminal tab and execute the following command:

```bash
ssh -N -L 8080:127.0.0.1:8080 recomputer@<ip_address>
```
{: .copy-code}

Any connection to **localhost:8080** on your local machine will be forwarded to **127.0.0.1:8080** on the **reComputer R1000**.

#### Step 2. Provisioning the ThingsBoard IoT Gateway on Edge

To provision the **ThingsBoard Gateway**:

{% assign iotGWdashboardCE = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/1-instances-section.webp,
        title: Log in to the [ThingsBoard Demo account]({{thingsboardInstanceLink}}){: target="_blank"} and navigate to the **Edge Management > Instances** section, then click the **“Manage dashboards”** button.
    ===
        image: /images/devices-library/edge/recomputer-r1000/2-assign-dashboard.webp,
        title: On the **“Edge Dashboards”** page, click the **“+”** icon to assign the **“ThingsBoard IoT Gateways”** dashboard to the Edge instance. Click the **“Assign”** button. The **"ThingsBoard IoT Gateways"** dashboard is one of the pre-created, out-of-the-box dashboards available.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=iotGWdashboardPE %}
{% else %}  
{% include images-gallery.liquid showListImageTitles="true" imageCollection=iotGWdashboardCE %}
{% endif %}

{% assign localhostCE = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/3-login-to-edge.webp,
        title: Open the **10.7.1.9:8080** and log in to your **Edge instance**. Navigate to the **Dashboards** section and open the **“ThingsBoard IoT Gateways”** dashboard.
    ===
        image: /images/devices-library/edge/recomputer-r1000/4-add-gw.webp,
        title: Click the **“+”** icon in the upper right corner to add a new gateway. Enter the gateway name in the **“Name”** field, and select the **“default”** device profile. Click the **“Create”** button.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
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

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=modbusConnectorPE %}
{% else %}  
{% include images-gallery.liquid showListImageTitles="true" imageCollection=modbusConnectorCE %}
{% endif %}

* Then, please insert the following configuration code:

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

* Click the **“Save”** button.

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

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=downloadYMLPE %}
{% else %}  
{% include images-gallery.liquid showListImageTitles="true" imageCollection=downloadYMLCE %}
{% endif %}


* Then, open the terminal. You still should be connected to the **reComputer R1000** via **SSH**. Change the directory in the terminal and/or create the new one:

```bash
mkdir gateway_service
```
{: .copy-code}

* Create the docker compose file for your **IoT Gateway**:

```bash
nano docker-compose.yml
```
{: .copy-code}

* Copy the content of the previously downloaded **docker-compose.yml** file, and paste it into the new one via the terminal:

![image](/images/devices-library/edge/recomputer-r1000/10-copy-paste-configs.webp)

Save the **docker-compose.yml** file and start the **Gateway** by executing the following command in the terminal:

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

![image](/images/devices-library/edge/recomputer-r1000/logo-and-recomputer-r1000.webp){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 30px 0px 0px"}Once the **ThingsBoard Edge** and **IoT Gateway** are running on the **Computer R1000** and the **ModBus connector** transfers data, you can visualize it on the **Dashboard** on your **Edge instance**:

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

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=dashboardPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=dashboardCE %}
{% endif %}