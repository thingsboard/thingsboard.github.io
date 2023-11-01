{% assign deviceName = page.title | remove: "How to connect " | remove: " to ThingsBoard?" %}
{% assign deviceVendorLink = "https://teltonika-networks.com/ua/products/routers/rut955/" %}
{% assign controllerName = "Siemens LOGO!" %}
{% assign controllerVendorLink = "https://www.siemens.com/ua/uk/produkty/avtomatyzatsiya-promyslovosti/systemy-avtomatyzatsiyi/systemy-promyslovoyi-avtomatyzatsiyi-simatic/plc-kontrolery-simatic/lohichnyy-modul-logo.html" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- Modbus Controller (in our case <a href="' | append: controllerVendorLink | append: '" target="_blank">' | append: controllerName | append: '</a>) '
 %}
{% assign thingsboardInstanceLink = "https://demo.thingsboard.io" %}
{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}
{% assign thingsboardInstanceLink = "https://thingsboard.cloud" %}
{% endif %}


## Introduction
![{{deviceName}}](https://img.thingsboard.io/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
[{{deviceName}}]({{deviceVendorLink}}){: target="_blank"} offers dual-SIM cellular 
connectivity, four Ethernet ports and Wi-Fi combined with RS232, RS485, USB interfaces and I/O for a wide variety of 
professional application scenarios. This router is equipped with advanced RutOS software features such as Modbus, SNMP, 
TR-069, NTRIP, MQTT protocol support and GNSS tracking capabilities.
<br><br>

## Prerequisites

To continue with this guide, we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{thingsboardInstanceLink}}){: target="_blank"}

## Import Rule chain

Download [Teltonika Rule Chain](/docs/devices-library/resources/dashboards/ready-to-go-devices/teltonika-rut-955-rule-chain.json){:target="_blank" download="teltonika-rut955-rule-chain.json"} and import.

To import rule chain from а JSON file, you should:

{% assign importRuleChainPE = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/import-rule-chain-1-pe.png,
        title: Navigate to the "Rule chains" page and click on the "+" button in the upper right corner of the screen and then choose "Import rule chain" option. The toolbar import popup window will appear. Upload a JSON file and click on the "Import" button;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/import-rule-chain-2-pe.png,
        title: The imported rule chain will open. Click on the "Apply changes" button to save the rule chain. Then, go back to the main "Rule chains" page;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/import-rule-chain-3-pe.png,
        title: Rule chain is imported.
'
%}

{% assign importRuleChainCE = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-rule-chain-import-1-ce.png,
        title: Navigate to the "Rule chains" page and click on the "+" button in the upper right corner of the screen and then choose "Import rule chain" option. The toolbar import popup window will appear. Upload a JSON file and click on the "Import" button;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-rule-chain-import-2-ce.png,
        title: The imported rule chain will open. Click on the "Apply changes" button to save the rule chain. Then, go back to the main "Rule chains" page;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-rule-chain-import-3-ce.png,
        title: Rule chain is imported.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importRuleChainPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importRuleChainCE %}
{% endif %}

## Create device profile

Now, we are ready to create device profile. For this, follow steps below:

{% assign createDeviceProfilePE = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/add-device-profiles-1-pe.png,
        title: Go to **Profiles** > **Device profiles** and click on **"Add"** button > **"Create new device profile"**;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/add-device-profiles-2-pe.png,
        title: Input **Name** field with **"Teltonika routers"** value. Select **"Teltonika routers"** imported rule chain from the step above;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/add-device-profiles-3-pe.png,
        title: Click on **"Transport configuration"** tab. Select **MQTT** transport type and change **Telemetry topic filter** value from **"v1/devices/me/telemetry"** to **"RUT/"**. Click on **"Add"** button;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/add-device-profiles-4-pe.png,
        title: Device Profile created.
    '
%}

{% assign createDeviceProfileCE = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-device-profile-1-ce.png,
        title: Go to **Profiles** > **Device profiles** and click on **"Add"** button > **"Create new device profile"**;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-device-profile-2-ce.png,
        title: Input **Name** field with **"Teltonika routers"** value. Select **"Teltonika routers"** imported rule chain from the step above;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-device-profile-3-ce.png,
        title: Click on **"Transport configuration"** tab. Select **MQTT** transport type and change **Telemetry topic filter** value from **"v1/devices/me/telemetry"** to **"RUT/"**. Click on **"Add"** button;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-device-profile-4-ce.png,
        title: Device Profile created.
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=createDeviceProfilePE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=createDeviceProfileCE %}
{% endif %}

## Create device

For simplicity, we will provide the device manually using the UI:

{% assign provisionDevicePE = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/add-device-1-pe.png,
        title: Open the **Devices** page. By default, you navigate to the device group **“All”**. Click on the **“+”** icon in the top right corner of the table and then select **“Add new device”**;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/add-device-2-pe.png,
        title: Input device name. For example, **“Teltonika RUT955”**. Select created device profile from the step above, in our case **"Teltonika routers"**;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/add-device-3-pe.png,
        title: Click on **"Credentials"** tab. Check **"Add credentials"** and select **"MQTT Basic"** credentials type. Click on **"Generate"** button on each field and click **"Add"** button;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/add-device-4-pe.png,
        title: Device added.
    '
%}

{% assign provisionDeviceCE = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-create-device-1-ce.png,
        title: Open the **Devices** page. By default, you navigate to the device group **“All”**. Click on the **“+”** icon in the top right corner of the table and then select **“Add new device”**;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-create-device-2-ce.png,
        title: Input device name. For example, **“Teltonika RUT955”**. Select created device profile from the step above, in our case **"Teltonika routers"**;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-create-device-3-ce.png,
        title: Click on **"Credentials"** tab. Check **"Add credentials"** and select **"MQTT Basic"** credentials type. Click on **"Generate"** button on each field and click **"Add"** button;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-create-device-4-ce.png,
        title: Device added.
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDevicePE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceCE %}
{% endif %}

## Gateway connection

{% capture infoSettings %}
Make sure you enable **"ADVANCED"** mode in the top right corner by clicking the button under **"Mode"**.
{% endcapture %}
{% include templates/info-banner.md content=infoSettings %}

According to the official user manual and this guide you can connect the gateway to the network and get access to 
the WebUI in two ways:

{% capture readytogodeviceconnectionstogglespec %}
Wireless connection%,%wirelessConnection%,%templates/device-library/ready-to-go-devices/teltonika-rut955-wireless-connection-block.md%br%
Wired connection%,%wiredConnection%,%templates/device-library/ready-to-go-devices/teltonika-rut955-wired-connection-block.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="readytogodeviceconnectionstogglespec" toggle-spec=readytogodeviceconnectionstogglespec %}

Now, you can configure the gateway.

Once you are connected to the {{deviceName}}, you can change its IP address if you wish:
- Go to **Interfaces** > **General**;
- Click **"Edit"** button on **"lan"** interface;
- Enter a new IP address that is not already being used by another device on your network.

Now we are ready to configure the MQTT connection and topics for both data reception and transmission and establishing
the Modbus connection.

Let's first configure Modbus Connection. As mentioned above, we use Siemens LOGO! with AM2 RTD module (used for connecting PT100) - 
which is the perfect choice for the fast, uncomplicated, and space-saving solution of simple control and regulation tasks. 
LOGO! has long since established itself as an intelligent logic module in small automation projects.

In our case, the following diagram for data reading and preparation was created in LOGO! Soft Comfort:
<br><br>
![](https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/siemens-logo-diagram.png)
<br><br>

Don't forget to enable TCP connection.
<br><br>
![](https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/siemens-logo-tcp-enable.png)
<br><br>

Also, we have to add Modbus slave device configuration. To do this, follow the steps below:
1. Go to **Services** > **Modbus** > **Modbus TCP Master**;
2. Click **"ADD"** button;
3. Fill in all required fields with correct information about your device;
4. Scroll down to **"REQUESTS CONFIGURATION"** section;
5. Add all registers from which you want to read data;
6. Click on **“Save & Apply”** button.

In our case, we have the following settings:

![](https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-modbus-tcp-master.png)

The next thing we have to do is configure the Data Sender. To do this, follow the steps below:
1. Go to **Services** > **Data to Server**;
2. Click **"ADD"** button;
3. Fill in all required fields with correct credentials and other information for broker access;
4. Click on **“Save & Apply”** button.

In our case, we have the following settings:

![](https://img.thingsboard.io/devices-library/ready-to-go-devices/teltonika-rut955/teltonika-rut-955-data-sender.png)

If you did everything right, you have to receive the following MQTT message:
```json
{"data": 299, "reg": 300003, "ts": 1696838802}
```

## Check data on ThingsBoard

{% include /docs/devices-library/blocks/ready-to-go-devices/check-data-on-thingsboard-block.md %}

{% capture readytogodevicestogglespec %}
Imported Dashboard%,%importedDashboard%,%templates/device-library/ready-to-go-devices/teltonika-rut955-imported-dashboard.md%br%
New Dashboard%,%newDashboard%,%templates/device-library/ready-to-go-devices/gateway-new-dashboard.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="minicomputersDashboard" toggle-spec=readytogodevicestogglespec %}

## Conclusion

With the knowledge in this guide, you can easily connect your {{deviceName}} and use the built-in 
integration to retrieve data from devices connected to {{deviceName}}.

After connecting the devices to the gateway, you will be able to see and process the data coming from the devices on the ThingsBoard.

Explore the platform [documentation](/docs/{{page.docsPrefix}}){: target="_blank"} to learn more about key concepts and features. 
