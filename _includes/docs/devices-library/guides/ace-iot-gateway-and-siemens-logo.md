{% assign deviceName = "ACE MQTT 4G GPS Gateway" %}
{% assign deviceVendorLink = "https://aceautomation.eu/product/ace-gtw-4g-mini-4g-wifi-modbus-gateway-mqtt-to-usb-modbus-rtu-master-gateway/" %}
{% assign controllerName = "Siemens LOGO!" %}
{% assign controllerVendorLink = "https://www.siemens.com/ua/uk/produkty/avtomatyzatsiya-promyslovosti/systemy-avtomatyzatsiyi/systemy-promyslovoyi-avtomatyzatsiyi-simatic/plc-kontrolery-simatic/lohichnyy-modul-logo.html" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- Modbus Controller (in our case, <a href="' | append: controllerVendorLink | append: '" target="_blank">' | append: controllerName | append: '</a>) '
 %}
{% assign thingsboardInstanceLink = "https://demo.thingsboard.io" %}
{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}
{% assign thingsboardInstanceLink = "https://thingsboard.cloud" %}
{% endif %}


## Introduction
![{{deviceName}}](https://img.thingsboard.io/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
[The ACE Automation MQTT 4G GPS Gateway]({{deviceVendorLink}}){: target="_blank"} is a cutting-edge device that revolutionizes data communication and connectivity 
for industrial and IoT applications. Equipped with 4G capabilities, this gateway ensures reliable and high-speed data 
transmission over cellular networks, even in remote locations. It integrates GPS technology for real-time location 
tracking, ideal for asset and vehicle management. With MQTT as the communication protocol, data exchange becomes 
lightweight and efficient, enabling seamless integration into existing IoT ecosystems. Its robust industrial design 
guarantees reliable operation in harsh environments, making it a valuable solution for optimizing operations and 
harnessing real-time data. Simplify your connectivity and data management with the ACE Automation MQTT 4G GPS Gateway.

## Prerequisites

To continue with this guide, we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{thingsboardInstanceLink}}){: target="_blank"}  

## Import Rule chain

Download [ACE Rule Chain](/docs/devices-library/resources/dashboards/ready-to-go-devices/ACE-rule-chain.json){:target="_blank" download="ace-rule-chain.json"} and import.

To import rule chain from а JSON file, you should:

{% assign importRuleChainPE = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-rule-chain-import-1-pe.png,
        title: Navigate to the "Rule chains" page and click on the "+" button in the upper right corner of the screen and then choose "Import rule chain" option. The toolbar import popup window will appear. Upload a JSON file and click on the "Import" button;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-rule-chain-import-2-pe.png,
        title: The imported rule chain will open. Click on the "Apply changes" button to save the rule chain. Then, go back to the main "Rule chains" page;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-rule-chain-import-3-pe.png,
        title: Rule chain is imported.
'
%}

{% assign importRuleChainCE = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-rule-chain-import-1-ce.png,
        title: Navigate to the "Rule chains" page and click on the "+" button in the upper right corner of the screen and then choose "Import rule chain" option. The toolbar import popup window will appear. Upload a JSON file and click on the "Import" button;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-rule-chain-import-2-ce.png,
        title: The imported rule chain will open. Click on the "Apply changes" button to save the rule chain. Then, go back to the main "Rule chains" page;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-rule-chain-import-3-ce.png,
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
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-device-profile-1-pe.png,
		title: Go to **Profiles** > **Device profiles** and click on **"Add"** button > **"Create new device profile"**;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-device-profile-2-pe.png,
		title: Input **Name** field with **"ACE routers"** value, and select **"ACE routers"** imported rule chain from the step above;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-device-profile-3-pe.png,
		title: Click on **"Transport configuration"** tab, select **MQTT** transport type and change **Telemetry topic filter** value from **"v1/devices/me/telemetry"** to **"siemens/+"**, click on **"Add"** button;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-device-profile-4-pe.png,
		title: Device Profile created.
    '
%}

{% assign createDeviceProfileCE = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-device-profile-1-ce.png,
		title: Go to **Profiles** > **Device profiles** and click on **"Add"** button > **"Create new device profile"**;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-device-profile-2-ce.png,
		title: Input **Name** field with **"ACE routers"** value, and select **"ACE routers"** imported rule chain from the step above;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-device-profile-3-ce.png,
		title: Click on **"Transport configuration"** tab, select **MQTT** transport type and change **Telemetry topic filter** value from **"v1/devices/me/telemetry"** to **"siemens/+"**, click on **"Add"** button;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-device-profile-4-ce.png,
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
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-create-device-1-pe.png,
		title: Open the **Devices** page. By default, you navigate to the device group **“All”**. Click on the **“+”** icon in the top right corner of the table and then select **“Add new device”**;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-create-device-2-pe.png,
		title: Input device name. For example, **“ACE Gateway”**. Select created device profile from the step above, in our case, **"ACE routers"**;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-create-device-3-pe.png,
		title: Click on **"Credentials"** tab. Check **"Add credentials"** and select **"MQTT Basic"** credentials type. Click on **"Generate"** button on each field. Click **"Add"** button;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-create-device-4-pe.png,
		title: Device added.
    '
%}

{% assign provisionDeviceCE = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-create-device-1-ce.png,
		title: Open the **Devices** page. By default, you navigate to the device group **“All”**. Click on the **“+”** icon in the top right corner of the table and then select **“Add new device”**;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-create-device-2-ce.png,
		title: Input device name. For example, **“ACE Gateway”**. Select created device profile from the step above, in our case, **"ACE routers"**;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-create-device-3-ce.png,
		title: Click on **"Credentials"** tab. Check **"Add credentials"** and select **"MQTT Basic"** credentials type. Click on **"Generate"** button on each field. Click **"Add"** button;
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/ace-create-device-4-ce.png,
		title: Device added.
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDevicePE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceCE %}
{% endif %}

## Gateway connection

According to the official user manual and this guide, you can connect the gateway to the network and get access to 
the WebUI in two ways:
{% capture readytogodeviceconnectionstogglespec %}
Wireless connection%,%wirelessConnection%,%templates/device-library/ready-to-go-devices/ace-gateway-wireless-connection-block.md%br%
Wired connection%,%wiredConnection%,%templates/device-library/ready-to-go-devices/ace-gateway-wired-connection-block.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="readytogodeviceconnectionstogglespec" toggle-spec=readytogodeviceconnectionstogglespec %}

Now, you can configure the gateway.

Once you are connected to the ACE-GTW-MQTT, you can change its IP address if you wish:
* **Network** > **Interfaces**;
* Click on **“Edit”** the LAN interface;
* Enter a new IP address that is not already being used by another device on your network.

{% capture info %}
<body>
  <p>
    <b style="color:red">WARNING:</b>
    <span style="color:black">Don't forget to change default password.</span>
  </p>
</body>
{% endcapture %}
{% include templates/warn-banner.md content=info %}

Now we are ready to configure the MQTT connection, topics for data transmission, and establishing the Modbus connection.

Let's first configure Modbus Connection. As mention above, we use Siemens LOGO! with AM2 RTD module 
(used for connecting PT100) - which is the perfect choice for the fast, uncomplicated, and space-saving solution of simple 
control and regulation tasks. LOGO! has long since established itself as an intelligent logic module in small automation 
projects.

Follow the next steps:
* Go to **Gateway** > **MQTT Configuration** > **ETHERNET STATIONS LIST** (under MQTT Broker section);
* Fill in all required fields with correct information about your device;
* Click on **"Save & Apply"** button.

In our case, we have the following settings:

![](https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/modbus-tcp-settings.png)

For configuring MQTT connection, follow the next steps:
* Go to **Gateway** > **MQTT Configuration** > **MQTT Broker** (tab);
* Fill in all required fields with correct credentials and other information for broker access;
* Click on **"Save & Apply"** button.

![](https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/mqtt-broker-settings.png)

The next thing we have to do is configure MQTT topics for receiving and sending data:
* Go to **Gateway** > **MQTT Configuration** > **MQTT Broker** (tab);
* Scroll down to **"MQTT TOPICS LIST : Publishing and Subscribing to MQTT Topics"** section;
* Add all topics for publishing data;
* Add all subscription topics for receiving data;
* Click on **"Save & Apply"** button.

In case Siemens LOGO!, we have the following topics list:

![](https://img.thingsboard.io/devices-library/ready-to-go-devices/ace-iot-gateway/topic-list.png)

If you are using Siemens LOGO! too, you can use the following configuration:
{% capture gatewayCode %}
config mqttconfig
	option baudrate '9600'
	option parity 'None'
	option databits '8'
	option stopbits '1'
	option timeout '3'
	option interframe '1'
	option projectname 'ACE'
	option usbport '/dev/ttyACM0'
	option gnssusbport '/dev/ttyUSB1'
	option port_p '1883'
	option optioncertif '0'
	option advancedmqtt '0'
	option loginpassword '1'
	option optiondebugmqtt '0'
	option qos_q '1'
	option host_h 'thingsboard.cloud'
	option username_u 'YOUR_USERNAME'
	option password_P 'YOUR_PASSWORD'
	option clientid 'YOUR_CLIENTID'

config stations
	option station_nb '2'
	option station_ip_address '192.168.0.3'
	option station_ip_port '510'

config topics
	option sub '0'
	option slaveid '1'
	option active '1'
	option station_mbid '2'
	option poll '10'
	option deadband '-1'
	option regtype 'bit'
	option address '8193'
	option payload '@'
	option topic_t 'siemens/Q1'
	option payload_bit '{"Q1": @[OFF;ON]}'

config topics
	option payload '@'
	option sub '0'
	option slaveid '1'
	option active '1'
	option topic_t 'siemens/Q2'
	option payload_bit '{"Q2": @[OFF;ON]}'
	option station_mbid '2'
	option regtype 'bit'
	option address '8194'
	option poll '10'
	option deadband '-1'

config topics
	option payload '@'
	option sub '0'
	option slaveid '1'
	option active '1'
	option topic_t 'siemens/Q3'
	option payload_bit '{"Q3": @[OFF;ON]}'
	option station_mbid '2'
	option regtype 'bit'
	option address '8195'
	option poll '10'
	option deadband '-1'

config topics
	option payload '@'
	option sub '0'
	option slaveid '1'
	option active '1'
	option topic_t 'siemens/Q4'
	option payload_bit '{"Q4": @[OFF;ON]}'
	option station_mbid '2'
	option regtype 'bit'
	option address '8196'
	option poll '10'
	option deadband '-1'
{% endcapture %}
{% include code-toggle.liquid code=gatewayCode params="conf|.copy-code.expandable-20" %}

## Check data on ThingsBoard

{% include /docs/devices-library/blocks/ready-to-go-devices/check-data-on-thingsboard-block.md %}

{% capture readytogodevicestogglespec %}
Imported Dashboard%,%importedDashboard%,%templates/device-library/ready-to-go-devices/ace-gateway-imported-dashboard.md%br%
New Dashboard%,%newDashboard%,%templates/device-library/ready-to-go-devices/gateway-new-dashboard.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="minicomputersDashboard" toggle-spec=readytogodevicestogglespec %}

## Conclusion

With the knowledge in this guide, you can easily connect your ACE Automation MQTT 4G GPS Gateway and use the built-in 
integration to retrieve data from devices connected to ACE Automation MQTT 4G GPS Gateway.

After connecting the devices to the gateway, you will be able to see and process the data coming from the devices on the ThingsBoard.

Explore the platform [documentation](/docs/{{page.docsPrefix}}){: target="_blank"} to learn more about key concepts and features. 
