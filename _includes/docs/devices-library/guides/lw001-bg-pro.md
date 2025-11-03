
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.mokosmart.com/lorawan-tracker-lw001-bg-pro/" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign officialManualLink = "https://docs.mokosmart.com/wp-content/uploads/2025/06/LW001-BG-PRO-product-brief.pdf" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [LW001-BG PRO user manual](' | append: officialManualLink | append: '){: target="_blank"}
- [Network Server account](#device-connection)
  '
  %}

## Introduction

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
[LW001-BG PRO]({{deviceVendorLink}}){: target="_blank"} is a wireless smart, ultra-low power consumption, indoor&outdoor LoRaWAN Tracker. It integrates GPS positioning, Bluetooth positioning and WiFi positioning, supports a variety of working modes, suitable for most tracking applications.<br>
It supports ABP and OTAA two different LoRaWAN network access mode, and easy to configure and update firmware via MKLoRa APP. Ideal to optimize logistic process, asset management, warehouse and inventory scenarios, outdoor tracking, theft protection, livestock tracking and much more.

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}
<br>

## Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}

## Configuration

To connect and send data we should configure the device and network server.  

At first we are going to configure the device, and save required information for network   
server configuration.  

To add a device to network server and get information from it, we will need the following   
device parameters:  

- **Device EUI** - device identifier  
- **Application EUI** - Application identifier  
- **Application Key** - Application key to identify device. We recommend to use a generated key, not from the example!  

The parameters above are required for connection.  

Depending on the network server, you may also need to provide join type (OTAA), LoRaWAN version.

After the device is turned on, the device Bluetooth will start broadcasting. Open the MKLoRa APP and choose LW001, then you can search the LW001-BG PRO device by click the refresh icon. The default broadcast name of the device: LW001-BG -XXXX.

Then click “Connect” button, the default login password is Moko4321.  

Go to "Lora" and check the "Connection Settings", you can configure/read the Device EUI, APP EUI and APPkey.   

ThingsBoard supports various network servers. To create an integration with a network server, please choose one of the supported network servers.

{% assign targetIntegrationTypes = '
ChirpStack,
TheThingsStack,
TheThingsIndustries,
Loriot
'%}

{% include /docs/devices-library/blocks/integrations/devices-configuration/lw001-bg-pro/thingsboard-create-lw001-bg-pro-device-block.liquid target-integration-types=targetIntegrationTypes %}

{% capture lw001bgproconfig %}
ChirpStack<small>Recommended</small>%,%%,%templates/docs/devices-library/blocks/integrations/devices-configuration/lw001-bg-pro-chirpstack-block.md%br%
TheThingsStack<small></small>%,%%,%templates/docs/devices-library/blocks/integrations/devices-configuration/lw001-bg-pro-thethingsstack-block.md%br%
TheThingsIndustries<small></small>%,%%,%templates/docs/devices-library/blocks/integrations/devices-configuration/lw001-bg-pro-thethingsindustries-block.md%br%
Loriot<small></small>%,%%,%templates/docs/devices-library/blocks/integrations/devices-configuration/lw001-bg-pro-loriot-block.md{% endcapture %}

## Create Dashboard on ThingsBoard  

In order to get more user-friendly view - you can use dashboards.  

To add the dashboard to ThingsBoard, follow the next steps:  
- Navigate to the “Dashboards” page. By default, you navigate to the dashboard group "All". Click on the "plus" icon in the top right corner. Select "Create new dashboard".  
- Fill the dashboard title and click "Add" button  
- Click “Add widget” button to add widget in dashboard  
- For example, for the location info, the “Maps” widget is suitable. And then select the data source as the device that just created, and choose the variable that you want to display.

{% assign CreateDashboardOnThingsBoard  = '
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-add-new-forwarder.png,
        title: Open gateway control panel. Go to the "**Packet Forwarder**" page and click on "**plus**" button, to add a new forwarder.
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-chirpstack-configuration-window.png,
        title: Put into "**Server address**" your server address, in our case it is **sample.network.server.com**. Click "**Save**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-after.png,
        title: Click "**Save & Apply**" button.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/gateway-added.png,
        title: Now you can check the status of the gateway on Chirpstack, it should be online.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=CreateDashboardOnThingsBoard %}