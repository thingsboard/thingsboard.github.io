
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceName = "reComputer R1100" %}
{% assign deviceVendorLink = "https://www.seeedstudio.com/blog/2024/11/20/just-launched-recomputer-r11-a%EF%BC%84179-edge-iot-gateway-controller-could-be-the-most-adapatble-and-cost-effective-edge-iot-gateway-controller-in-your-equipment-cabinets/?srsltid=AfmBOopWn625P_n59sPhbUJavUGYus7l3ah1NTd0-90w51unAIVVTgRp" %}

* TOC
{:toc}

## Introduction

The [reComputer R1100]({{deviceVendorLink}}){: target="_blank"}, powered by Raspberry Pi CM4, is an adaptable edge IoT gateway with AI capabilities. 
It features comprehensive industrial interfaces (2x Ethernet, 2xUSB, 2xRS485, 2xRS232, 2xDI and 2xDO) and flexible wireless connectivity options (4G, LoRa®, Wi-Fi/BLE), making it ideal for diverse industrial applications

It has extensive applications in the IoT field. It can be used in aspects such as data acquisition and process monitoring, automation and robot control, intelligent manufacturing, and industrial communication and networking. 
With its small size, flexibility, low cost, and programmability, it provides strong support for automation & IoT system and more. 

## Integration with ThingsBoard Edge

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include /templates/device-library/ready-to-go-devices/pe-prerequisites-recomuterR.md %}
{% else %}
{% include /templates/device-library/ready-to-go-devices/ce-prerequisites-recomuterR.md %}
{% endif %}

## Configuring the ModBus Connector

The new **IoT Gateway device** will be featured at the top of the **“ThingsBoard IoT Gateways”** dashboard list, allowing us to add a **ModBus Connector**. For example, we can use the ModBus Connector to fetch temperature data from the to fetch temperature data from the [Siemens LOGO!]({{controllerVendorLink}}){: target="_blank"} device:

{% assign modbusConnectorPE = '
    ===
        image: /images/devices-library/edge/recomputer-r1100/14-connector-pe.webp,
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
        image: /images/devices-library/edge/recomputer-r1100/10-connector.webp,
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

## Installing the ThingsBoard IoT Gateway on the reComputer R1100

Start installation of the **IoT Gateway** on the **reComputer R1100**:

{% assign downloadYMLPE = '
    ===
        image: /images/devices-library/edge/recomputer-r1100/15-gw-list-pe.webp,
        title: Go back to the **“ThingsBoard IoT Gateways”** dashboard page and click on the newly added **Gateway device** (reComputer R1100).
    ===
        image: /images/devices-library/edge/recomputer-r1100/16-launch-command.webp,
        title: On the **Gateway device** page, click the **“Launch command”** button and download **docker-compose.yml** for your gateway.
'
%}

{% assign downloadYMLCE = '
    ===
        image: /images/devices-library/edge/recomputer-r1100/11-gw-list.webp,
        title: Go back to the **“ThingsBoard IoT Gateways”** dashboard page and click on the newly added **Gateway device** (reComputer R1100).
    ===
        image: /images/devices-library/edge/recomputer-r1100/12-launch-command.webp,
        title: On the **Gateway device** page, click the **“Launch command”** button and download **docker-compose.yml** for your gateway.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=downloadYMLPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=downloadYMLCE %}
{% endif %}

* Then, open another tab in the terminal and initiate the **SSH** connection to the **reComputer R1100**:

```bash
ssh recomputer@ip_address
```
{: .copy-code}

**ip_address:** The IP address of the reComputer R1100. Enter the actual IP address instead of _ip_address_.<br>
**Password:** Terminal requests the password. _The **default password** for the reComputer R1100 is: 12345678_

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

![image](/images/devices-library/edge/recomputer-r1100/copy-paste-configs.webp)

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

![image](/images/devices-library/edge/recomputer-r1100/r1100-logo.webp){: style="float: left; max-width: 300px; max-height: 300px; margin: 0px 30px 0px 0px"}Once the **ThingsBoard Edge** and **IoT Gateway** are running on the **Computer R1100** and the **ModBus connector** transfers data, you can visualize it on the **Dashboard** on your **Edge instance**:

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
