
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceName = "reComputer R1000" %}
{% assign deviceVendorLink = "https://wiki.seeedstudio.com/recomputer_r/" %}

* TOC
{:toc}

## Introduction

The [reComputer R1000]({{deviceVendorLink}}){: target="_blank"} edge IoT controller is built on the high-performance Raspberry Pi CM4 platform, featuring a quad-core A72 processor with a maximum support of 8GB RAM and 32GB eMMC. Equipped with dual Ethernet interfaces that can be flexibly configured, it also includes 3 isolated RS485 channels supporting BACnet, Modbus RTU, Modbus TCP/IP protocols. With robust IoT network communication capabilities, the R1000 series supports multiple wireless communication options including 4G, LoRa®, Wi-Fi/BLE, allowing for flexible configurations to serve as corresponding wireless gateways. This controller is well-suited for remote device management, energy management, and various other scenarios in the field of smart buildings.

## Integration with ThingsBoard

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include /templates/device-library/ready-to-go-devices/pe-prerequisites-recomuterR.md %}
{% else %}
{% include /templates/device-library/ready-to-go-devices/ce-prerequisites-recomuterR.md %}
{% endif %}

## Configuring the ModBus Connector

The new **IoT Gateway device** will be featured at the top of the **“ThingsBoard IoT Gateways”** dashboard list, allowing us to add a **ModBus Connector**. For example, we can use the ModBus Connector to fetch temperature data from the to fetch temperature data from the [Siemens LOGO!]({{controllerVendorLink}}){: target="_blank"} device:

{% assign modbusConnectorPE = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/5-connectors-button-pe.webp,
        title: On the **“ThingsBoard IoT Gateways”** dashboards page, click the **“Connectors”** button.
    ===
        image: /images/devices-library/edge/recomputer-r1000/6-add-connector-pe.webp,
        title: To add a **Connector**, click the **“+”** button. In the pop-up window, select the **MODBUS** option in the **“Type”** field and enter the  name of the connector in the **“Name”** field. Click the **“Add”** button to proceed.
    ===
        image: /images/devices-library/edge/recomputer-r1000/7-advanced-config-pe.webp,
        title: To make further adjustments, click on the newly added **Connector** and select the **“Advanced”** tab and the **“Configuration”** sub-tab on the right side of the **"MODBUS Configuration"** screen.
'
%}

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

```cpp
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
{:.copy-code.expandable-15}

## Installing the ThingsBoard IoT Gateway on the reComputer R1000

Start installation of the **IoT Gateway** on the **reComputer R1000**:

{% assign downloadYMLPE = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/8-back-to-iot-dasboard-pe.webp,
        title: Go back to the **“ThingsBoard IoT Gateways”** dashboard page and click on the newly added **Gateway device** (reComputer R1000).
    ===
        image: /images/devices-library/edge/recomputer-r1000/9-download-yml-pe.webp,
        title: On the **Gateway device** page, click the **“Launch command”** button and download **docker-compose.yml** for your gateway.
'
%}

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

{% assign dashboardPE = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/11-create-new-dashboard-pe.webp,
        title: Go to the **Dashboards** section, click the **“+”** icon and select **"Create new dashboard"** option.
    ===
        image: /images/devices-library/edge/recomputer-r1000/12-enter-name-pe.webp,
        title: In the pop-up window, enter the dashboard **title**. Other fields are optional. Click the **"Add"** button to proceed.
    ===
        image: /images/devices-library/edge/recomputer-r1000/13-configure-dashboard-pe.webp,
        title: Once you have created the dashboard, it will be automatically opened. Click the **"Add widget"** button and select the widget you require. For example, open the **“Charts”** widget bundle and elect the **Line chart**.
    ===
        image: /images/devices-library/edge/recomputer-r1000/14-widget-configuration-pe.webp,
        title: In the **"Add Widget"** pop-up window, select the **Device** (in our case, Siemens LOGO!) as the **Datasource**. Please verify that the **Series Key** is the same as the one entered in the **Advanced Configuration** settings of the connector. As an example, we have utilized the designation **"temp"**. Consequently, the series key must be **"temp"** as well. Click the **“Add”** button.
    ===
        image: /images/devices-library/edge/recomputer-r1000/15-dashboard-pe.webp,
        title: You will now be able to see the real-time data on the dashboard.
'
%}

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
{% include add-device-banner.liquid %}