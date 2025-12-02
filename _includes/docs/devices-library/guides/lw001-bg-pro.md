
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.mokosmart.com/lorawan-tracker-lw001-bg-pro/" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign officialManualLink = "https://docs.mokosmart.com/wp-content/uploads/2025/06/LW001-BG-PRO-product-brief.pdf" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [LW001-BG PRO user manual](' | append: officialManualLink | append: '){: target="_blank"}
  '
  %}

## Introduction

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
The [LW001-BG PRO]({{deviceVendorLink}}){: target="_blank"} is a wireless, smart, ultra–low-power indoor and outdoor LoRaWAN tracker.   
It integrates **GPS**, **Bluetooth**, and **WiFi** positioning, supports multiple operating modes, and is suitable for a wide range of tracking applications.<br>

It supports two LoRaWAN network access modes: **ABP** and **OTAA**, and can be easily configured or updated through the **MKLoRa** app.   
This device is ideal for optimizing logistics processes, asset management, warehouse and inventory scenarios, outdoor tracking, theft protection, livestock tracking and much more.<br>

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

## Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}

## Configuration

![{{deviceName}}](/images/devices-library/ready-to-go-devices/lw001-bg-pro/mklora-app-qr-code.png){: style="float: left; max-width: 150px; max-height: 150px; margin: 0px 10px 0px 0px"}
To connect the device and start sending data, both the device and the network server must be configured. Users can configure the device using the MKLora application.   
To download the MKLora app, scan the QR code on the left or follow the [provided link](https://play.google.com/store/apps/details?id=com.moko.mklora&pcampaignid=web_share){:target="_blank"}.

After the MKLora APP is installed, users can start the configuration.<br><br><br>

First, we will configure the device and save the required information that will be used later for the network server configuration.
To add a device to network server and get information from it, we will need the following device parameters:
- **Device EUI** - device identifier  
- **Application EUI** - Application identifier  
- **Application Key** - Application key to identify device. We recommend to use a generated key, not from the example!  

The parameters above are required for connection.

Depending on the network server, you may also need to provide join type (OTAA), LoRaWAN version.

After the device is turned on, the device Bluetooth will start broadcasting. Open the MKLoRa APP and choose LW001, then you can search the LW001-BG PRO device by click the refresh icon. The default broadcast name of the device: LW001-BG -XXXX.

Then click "Connect" button, the default login password is Moko4321.

Go to "Lora" and check the "Connection Settings", you can configure/read the Device EUI, APP EUI and APPkey.

ThingsBoard supports various network servers. To create an integration with a network server, please choose one of the supported network servers:

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

- Fill the **dashboard title** and click **Add** button  
- Click **Add widget** button to add widget in dashboard  
- 

{% assign CreateDashboardOnThingsBoard  = '
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/46.png,
        title: Navigate to the **Dashboards** page. By default, you navigate to the dashboard group **All**. Click on the "plus" icon in the top right corner. Select **Create new dashboard**.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/47.png,
        title: Fill the **dashboard title** and click **Add** button. 
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/48.png,
        title: The dashboard will opened. Click **Add widget** button to add new widget.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/49.png,
        title: For example, for the location info, the **Maps** widget is suitable.
    ===
        image: /images/devices-library/ready-to-go-devices/lw001-bg-pro/50.png,
        title: And then select the data source as the device that just created, and choose the variable that you want to display.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=CreateDashboardOnThingsBoard %}


<br><b><font size="4">Import Dashboard</font></b>

You can [download this example dashboard in JSON format](/docs/devices-library/resources/dashboards/lw001-bg-pro/lw001-bg_pro_lorawan_tracker_dashboard.json){:target="_blank" download="lw001-bg_pro_lorawan_tracker_dashboard.json"} and [import](/docs/{{docsPrefix}}user-guide/dashboards/#import-dashboard){:target="_blank"} it into your ThingsBoard instance.
