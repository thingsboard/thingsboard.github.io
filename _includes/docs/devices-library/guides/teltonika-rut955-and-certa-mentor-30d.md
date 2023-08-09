{% assign deviceName = "Teltonika RUT955" %}
{% assign deviceVendorLink = "https://teltonika-networks.com/ua/products/routers/rut955/" %}
{% assign controllerName = "Certa Mentor 30D" %}
{% assign controllerVendorLink = "http://certa.com.ua/products/controllers/mentor30D/" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- Modbus Controller (in our case <a href="' | append: controllerVendorLink | append: '" target="_blank">' | append: controllerName | append: '</a>)
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

## Create device on ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-create-device-block.md %}

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

The next step, you have to up and run external MQTT Broker (for example in our case we are using 
[TBMQ Broker](https://thingsboard.io/docs/mqtt-broker/)).

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

## Create uplink converter

At first, copy the code for uplink converter, we will need it for integration:

{% capture uplinkConverterCode %}
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object

/** Decoder **/

// decode payload to JSON
var data = decodeToJson(payload);

var deviceName = 'Teltonika RTU955';
var deviceType = 'default';

var telemetry = {};
var attributes = {};

for (item: data) {
    if (item.reg == 305209) {
        telemetry.temp = item.data / 10;
    } else if (item.reg == 406001) {
        attributes.rs485_1_slave_id = item.data;
    } else if (item.reg == 406002) {
        attributes.rs485_1_slave_baudrate = item.data;
    } else if (item.reg == 406003) {
        attributes.rs485_1_slave_stopbits = item.data;
    } else if (item.reg == 406004) {
        attributes.rs485_1_slave_parity = item.data;
    } else if (item.reg == 406005) {
        attributes.rs485_2_slave_id = item.data;
    } else if (item.reg == 406006) {
        attributes.rs485_2_slave_baudrate = item.data;
    } else if (item.reg == 406007) {
        attributes.rs485_2_slave_stopbits = item.data;
    } else if (item.reg == 406008) {
        attributes.rs485_2_slave_parity = item.data;
    } else if (item.reg == 406009) {
        attributes.rs485_3_slave_id = item.data;
    } else if (item.reg == 406010) {
        attributes.rs485_3_slave_baudrate = item.data;
    } else if (item.reg == 406011) {
        attributes.rs485_3_slave_stopbits = item.data;
    } else if (item.reg == 406012) {
        attributes.rs485_3_slave_parity = item.data;
    } else if (item.reg == 406033) {
        attributes.ip_1 = item.data;
    } else if (item.reg == 406034) {
        attributes.ip_2 = item.data;
    } else if (item.reg == 406035) {
        attributes.ip_3 = item.data;
    } else if (item.reg == 406036) {
        attributes.ip_4 = item.data;
    } else if (item.reg == 406037) {
        attributes.subnetmask_1 = item.data;
    } else if (item.reg == 406038) {
        attributes.subnetmask_2 = item.data;
    } else if (item.reg == 406039) {
        attributes.subnetmask_3 = item.data;
    } else if (item.reg == 406040) {
        attributes.subnetmask_4 = item.data;
    } else if (item.reg == 406041) {
        attributes.gateway_1 = item.data;
    } else if (item.reg == 406042) {
        attributes.gateway_2 = item.data;
    } else if (item.reg == 406043) {
        attributes.gateway_3 = item.data;
    } else if (item.reg == 406044) {
        attributes.gateway_4 = item.data;
    } else if (item.reg == 406045) {
        attributes.mac_1 = item.data;
    } else if (item.reg == 406046) {
        attributes.mac_2 = item.data;
    } else if (item.reg == 406047) {
        attributes.mac_3 = item.data;
    } else if (item.reg == 406048) {
        attributes.mac_4 = item.data;
    } else if (item.reg == 406049) {
        attributes.mac_5 = item.data;
    } else if (item.reg == 406050) {
        attributes.mac_6 = item.data;
    }
}

// Result object with device/asset attributes/telemetry data
var result = {
   "deviceName": deviceName,
   "deviceType": deviceType,
   "telemetry": telemetry,
   "attributes": attributes,
};

/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

return result;
{% endcapture %}

{% include code-toggle.liquid code=uplinkConverterCode params="javascript|.copy-code.expandable-20" %}

## Create integration

Next we will create an MQTT integration inside the ThingsBoard.

{% assign createIntegration = '
    ===
        image: /images/user-guide/integrations/mqtt/mqtt-integration-add-integration-1-pe.png,
        title: Go to **Integrations**, press **plus** button and choose **MQTT** as a type, put some name.
    ===
        image: /images/user-guide/integrations/mqtt/mqtt-integration-add-integration-2-pe.png,
        title: Check **Create new uplink data converter** and replace a code or create the existing one.
	===
        /images/user-guide/integrations/mqtt/mqtt-integration-add-integration-4-pe.png,
        title: Fill the field with your parameters.
	===
        /images/user-guide/integrations/mqtt/mqtt-integration-add-integration-6-pe.png,
        title: [Optional] Click on Check connection button to check connection to your Service Bus topic.
'
%}

Open **Integrations** section and add new Integration with the following parameters:  

- **Name**: *Integration name*
- **Type**: *Integration type*
- **Uplink** data converter: *Integration Uplink Converter*
- **Connection**: *Settings for connection to external MQTT Broker*


To add integration click on '**+**' button and follow the next steps:  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createIntegration %} 

Press **Add** button and integration will be added. 

{% include /docs/devices-library/blocks/basic/thingsboard-check-integration-connection.md %}

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