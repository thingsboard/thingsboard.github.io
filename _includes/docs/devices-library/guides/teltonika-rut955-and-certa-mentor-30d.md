{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://teltonika-networks.com/ua/products/routers/rut955/" %}
{% assign controllerName = "Certa Mentor 30D" %}
{% assign controllerVendorLink = "http://certa.com.ua/products/controllers/mentor30D/" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- Modbus Controller (in our case Certa Mentor 30D)
- Device have to be connected to the Internet via Ethernet, Modem or WIFI. '
 %}
{% assign thingsboardInstanceLink = "https://demo.thingsboard.io" %}
{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}
{% assign thingsboardInstanceLink = "https://thingsboard.cloud" %}
{% endif %}


## Introduction
![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
[{{deviceName}}]({{deviceVendorLink}}){: target="_blank"} offers dual-SIM cellular 
connectivity, four Ethernet ports and Wi-Fi combined with RS232, RS485, USB interfaces and I/O for a wide variety of 
professional application scenarios. This router is equipped with advanced RutOS software features such as Modbus, SNMP, 
TR-069, NTRIP, MQTT protocol support and GNSS tracking capabilities.

## Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{thingsboardInstanceLink}}){: target="_blank"}  

## Import Rule chain

To import rule chain from а JSON file, you should:

{% assign importRuleChain = '
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/import-rule-chain-1-pe.png,
        title: Navigate to the "Rule chains" page and click on the "+" button in the upper right corner of the screen and then choose "Import rule chain" option. The toolbar import popup window will appear. Upload a JSON file and click on the "Import" button;,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/import-rule-chain-2-pe.png,
        title: The imported rule chain will open. Click on the "Apply changes" button to save the rule chain. Then, go back to the main "Rule chains" page;,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/import-rule-chain-3-pe.png,
        title: Rule chain is imported.,
'
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=importRuleChain %}

Below you can find the dashboard JSON file:

[Teltonika Rule Chain](/docs/devices-library/resources/dashboards/ready-to-go-devices/teltonika-rut-955-rule-chain.json){:target="_blank" download="rule-chain.json"}

## Create device profile

Now, we are ready to create device profile. For this, follow steps below:

1. Go to **Profiles** > **Device profiles** and click on **"Add"** button > **"Create new device profile"**;
2. Input **Name** field with **"Teltonika routers"** value;
3. Select **"Teltonika routers"** imported rule chain from the step above;
4. Click on **"Transport configuration"** tab;
5. Select **MQTT** transport type;
6. Change **Telemetry topic filter** value from **"v1/devices/me/telemetry"** to **"RUT/"**;
7. Click on **"Add"** button.

{% assign createDeviceProfile = '
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/add-device-profiles-1-pe.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/add-device-profiles-2-pe.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/add-device-profiles-3-pe.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/add-device-profiles-4-pe.png,
    '
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=createDeviceProfile %}

## Create device

For simplicity, we will provide the device manually using the UI:

1. Open the **Devices** page;
2. By default, you navigate to the device group **“All”**. Click on the **“+”** icon in the top right corner of the table and then select **“Add new device”**;
3. Input device name. For example, **“Teltonika RUT955”**;
4. Select created device profile from the step above, in our case **"Teltonika routers"**;
5. Click on **"Credentials"** tab;
6. Check **"Add credentials"** and select **"MQTT Basic"** credentials type;
7. Click on **"Generate"** button on each field;
8. Click **"Add"** button.

{% assign provisionDevice = '
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/add-device-1-pe.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/add-device-2-pe.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/add-device-3-pe.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/add-device-4-pe.png,
    '
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=provisionDevice %}

## Gateway connection

According to the official user manual and this guide you can connect the gateway to the network and get access to 
the WebUI in two ways:

{% capture readytogodeviceconnectionstogglespec %}
Wireless connection%,%wirelessConnection%,%templates/device-library/ready-to-go-devices/teltonika-rut955-wireless-connection-block.md%br%
Wired connection%,%wiredConnection%,%templates/device-library/ready-to-go-devices/teltonika-rut955-wired-connection-block.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="readytogodeviceconnectionstogglespec" toggle-spec=readytogodeviceconnectionstogglespec %}

Now you have ability to configure the gateway.

Once you are connected to the {{deviceName}}, you can change its IP address if you wish:
- Go to **Interfaces** > **General**;
- Click **"Edit"** button on **"lan"** interface;
- Enter a new IP address that is not already being used by another device on your network.

Now we are ready to configure the MQTT connection and topics for both data reception and transmission, 
as well as establishing the Modbus connection.

Let first configure Modbus Connection. As mention above we use Certa Mentor 30D - universal programmable controller 
with a display that can solve a wide range of automation tasks. The controller is programmed using Function Block 
Diagrams (FBD) in the ViCS development environment. RS-485 ports can be isolated or non-isolated and are supplied 
separately as RS485i or RS485ni option cards. 


![](/images/devices-library/ready-to-go-devices/Mentor30D.png)

Follow the next steps:
1. Go to **Services** > **Modbus** > **Modbus Serial Master** > **ADD NEW INSTANCE** (under **"MODBUS SERIAL DEVICE CONFIGURATION"** section);
2. Click **"ADD"** button;
3. Fill in all required fields with correct information about your device;
4. Click on **“Save & Apply”** button.

In our case we have the following settings:


![](/images/devices-library/ready-to-go-devices/teltonika-rut955/modbus-serial-master-config.png)

Also, we have to add Modbus slave device configuration. To do this, follow the steps below:
1. Go to **Services** > **Modbus** > **Modbus Serial Master** > **ADD NEW INSTANCE** (under **"MODBUS SLAVE DEVICE CONFIGURATION"** section);
2. Click "ADD" button;
3. Fill in all required fields with correct information about your device;
4. Scroll down to **"REQUESTS CONFIGURATION"** section;
5. Add all registers from which you want to read data;
6. Click on **“Save & Apply”** button.

In our case we have the following settings:
{% assign slaveDeviceConfig = '
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/slave-device-config-1.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/slave-device-config-2.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/slave-device-config-3.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/slave-device-config-4.png,
'
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=slaveDeviceConfig %}

The next thing we have to do is configure Data Sender. To do this, follow the steps below:
1. Go to **Services** > **Data to Server**;
2. Click **"ADD"** button;
3. Fill in all required fields with correct credentials and other information for broker access;
4. Click on **“Save & Apply”** button.

In our case we have the following settings:



![](/images/devices-library/ready-to-go-devices/teltonika-rut955/sender-config.png)

If you did everything right, you have to receive the following MQTT message:
```json
[{"data": 242, "reg": 305209},{"data": 1, "reg": 406001},{"data": 5, "reg": 406002},{"data": 2, "reg": 406003},{"data": 0, "reg": 406004},{"data": 1, "reg": 406005},{"data": 5, "reg": 406006},{"data": 2, "reg": 406007},{"data": 0, "reg": 406008},{"data": 1, "reg": 406009},{"data": 5, "reg": 406010},{"data": 2, "reg": 406011},{"data": 0, "reg": 406012},{"data": 192, "reg": 406033},{"data": 168, "reg": 406034},{"data": 1, "reg": 406035},{"data": 5, "reg": 406036},{"data": 255, "reg": 406037},{"data": 255, "reg": 406038},{"data": 255, "reg": 406039},{"data": 0, "reg": 406040},{"data": 0, "reg": 406041},{"data": 0, "reg": 406042},{"data": 0, "reg": 406043},{"data": 0, "reg": 406044},{"data": 2, "reg": 406045},{"data": 38, "reg": 406046},{"data": 214, "reg": 406047},{"data": 86, "reg": 406048},{"data": 229, "reg": 406049},{"data": 161, "reg": 406050}]
```

## Check data on ThingsBoard

{% include /docs/devices-library/blocks/ready-to-go-devices/check-data-on-thingsboard-block.md %}

{% capture readytogodevicestogglespec %}
Imported Dashboard%,%importedDashboard%,%templates/device-library/ready-to-go-devices/teltonika-rut955-imported-dashboard.md%br%
New Dashboard%,%newDashboard%,%templates/device-library/single-board-computers/device-new-dashboard.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="minicomputersDashboard" toggle-spec=readytogodevicestogglespec %}

## Conclusion

With the knowledge in this guide, you can easily connect your {{deviceName}} and use the built-in 
integration to retrieve data from devices connected to {{deviceName}}.

After connecting the devices to the gateway, you will be able to see and process the data coming from the devices on the ThingsBoard.

Explore the platform [documentation](/docs/{{page.docsPrefix}}){: target="_blank"} to learn more about key concepts and features. 