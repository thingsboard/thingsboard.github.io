{% assign deviceName = "ACE MQTT 4G GPS Gateway" %}
{% assign deviceVendorLink = "https://aceautomation.eu/product/ace-gtw-4g-mini-4g-wifi-modbus-gateway-mqtt-to-usb-modbus-rtu-master-gateway/" %}
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
[The ACE Automation MQTT 4G GPS Gateway]({{deviceVendorLink}}){: target="_blank"} is a cutting-edge device that revolutionizes data communication and connectivity 
for industrial and IoT applications. Equipped with 4G capabilities, this gateway ensures reliable and high-speed data 
transmission over cellular networks, even in remote locations. It integrates GPS technology for real-time location 
tracking, ideal for asset and vehicle management. With MQTT as the communication protocol, data exchange becomes 
lightweight and efficient, enabling seamless integration into existing IoT ecosystems. Its robust industrial design 
guarantees reliable operation in harsh environments, making it a valuable solution for optimizing operations and 
harnessing real-time data. Simplify your connectivity and data management with the ACE Automation MQTT 4G GPS Gateway.

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
Wireless connection%,%wirelessConnection%,%templates/device-library/ready-to-go-devices/ace-gateway-wireless-connection-block.md%br%
Wired connection%,%wiredConnection%,%templates/device-library/ready-to-go-devices/ace-gateway-wired-connection-block.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="readytogodeviceconnectionstogglespec" toggle-spec=readytogodeviceconnectionstogglespec %}

Now you have ability to configure the gateway.

Once you are connected to the ACE-GTW-MQTT, you can change its IP address if you wish:
* **Network** > **Interfaces**;
* Click on **“Edit”** the LAN interface;
* Enter a new IP address that is not already being used by another device on your network.

**Also, don't forget to change default password.**

The next step, you have to up and run external MQTT Broker (in this guide we will use 
[TBMQ Broker](https://thingsboard.io/docs/mqtt-broker/)).

Now we are ready to configure the MQTT connection and topics for both data reception and transmission, 
as well as establishing the Modbus connection.

Let first configure Modbus Connection. As mention above we use Certa Mentor 30D - universal programmable controller 
with a display that can solve a wide range of automation tasks. The controller is programmed using Function Block 
Diagrams (FBD) in the ViCS development environment. RS-485 ports can be isolated or non-isolated and are supplied 
separately as RS485i or RS485ni option cards. 

![](/images/devices-library/ready-to-go-devices/Mentor30D.png)

Follow the next steps:
* Go to **Gateway** > **MQTT Configuration** > **Modbus RTU Port** (tab);
* Fill in all required fields with correct information about your device;
* Click on **"Save & Apply"** button.

In our case we have the following settings:

![](/images/devices-library/ready-to-go-devices/ace-iot-gateway/rtu-settings.png)

For configuring MQTT connection, follow the next steps:
* Go to **Gateway** > **MQTT Configuration** > **MQTT Broker** (tab);
* Fill in all required fields with correct credentials and other information for broker access;
* Click on **"Save & Apply"** button.

The next thing we have to do is configure MQTT topics for receiving and sending data:
* Go to **Gateway** > **MQTT Configuration** > **MQTT Broker** (tab);
* Scroll down to **"MQTT TOPICS LIST : Publishing and Subscribing to MQTT Topics"** section;
* Add all topics for publishing data;
* Add all subscription topics for receiving data;
* Click on **"Save & Apply"** button.

In case Certa Mentor 30D, we have the following topics list:
{% assign topicList = '
    ===
        image: /images/devices-library/ready-to-go-devices/ace-iot-gateway/topic-list-1.png,
    ===
        image: /images/devices-library/ready-to-go-devices/ace-iot-gateway/topic-list-2.png,
	===
        image: /images/devices-library/ready-to-go-devices/ace-iot-gateway/topic-list-3.png,
'
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=topicList %}

If you are using Certa Mentor 30D too, you can use the following configuration:
{% capture gatewayCode %}
config mqttconfig
	option qos_q '0'
	option parity 'None'
	option databits '8'
	option interframe '1'
	option projectname 'ACE'
	option port_p '1883'
	option optioncertif '0'
	option advancedmqtt '0'
	option usbport '/dev/ttyUSB0'
	option timeout '10'
	option gnssusbport '/dev/ttyUSB2'
	option baudrate '38400'
	option stopbits '2'
	option loginpassword '1'
	option optiondebugmqtt '0'
	option host_h 'YOUR_HOST'
	option username_u 'YOUR_USERNAME'
	option password_P 'YOUR_PASSWORD'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option active '1'
	option topic_t 'certa/do1'
	option sub '1'
	option regtype 'bit'
	option address '5000'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option active '1'
	option topic_t 'certa/do2'
	option sub '1'
	option regtype 'bit'
	option address '5001'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option active '1'
	option topic_t 'certa/do3'
	option sub '1'
	option regtype 'bit'
	option address '5002'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option active '1'
	option topic_t 'certa/do4'
	option sub '1'
	option regtype 'bit'
	option address '5003'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option active '1'
	option topic_t 'certa/do5'
	option sub '1'
	option regtype 'bit'
	option address '5004'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option active '1'
	option topic_t 'certa/do6'
	option sub '1'
	option regtype 'bit'
	option address '5005'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option active '1'
	option topic_t 'certa/do7'
	option sub '1'
	option regtype 'bit'
	option address '5006'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option active '1'
	option topic_t 'certa/do8'
	option sub '1'
	option regtype 'bit'
	option address '5007'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option active '1'
	option topic_t 'certa/do9'
	option sub '1'
	option regtype 'bit'
	option address '5008'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/ao1'
	option sub '1'
	option address '5000'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/ao2'
	option address '5001'
	option poll '10'
	option deadband '-1'
	option sub '1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/ao3'
	option sub '1'
	option address '5002'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/ao4'
	option sub '1'
	option address '5003'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/ao5'
	option sub '1'
	option address '5004'
	option poll '10'
	option deadband '-1'

config topics
	option payload_bit '@[0;1]'
	option payload '@'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/ao6'
	option sub '1'
	option address '5005'
	option poll '10'
	option deadband '-1'

config topics
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option payload_bit '@'
	option address '6000'
	option poll '10'
	option payload '@'
	option topic_t 'certa/rs485/1/slave_id'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option payload_bit '@'
	option address '6004'
	option poll '10'
	option topic_t 'certa/rs485/2/slave_id'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option payload_bit '@'
	option address '6008'
	option poll '10'
	option topic_t 'certa/rs485/3/slave_id'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option payload_bit '@'
	option address '6001'
	option poll '10'
	option topic_t 'certa/rs485/1/baudrate'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option payload_bit '@'
	option address '6005'
	option poll '10'
	option topic_t 'certa/rs485/2/baudrate'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option payload_bit '@'
	option address '6009'
	option poll '10'
	option topic_t 'certa/rs485/3/baudrate'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option payload_bit '@'
	option address '6002'
	option poll '10'
	option topic_t 'certa/rs485/1/stopbits'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option payload_bit '@'
	option address '6006'
	option poll '10'
	option topic_t 'certa/rs485/2/stopbits'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option payload_bit '@'
	option address '6010'
	option poll '10'
	option topic_t 'certa/rs485/3/stopbits'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option payload_bit '@'
	option address '6003'
	option poll '10'
	option topic_t 'certa/rs485/1/parity'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option payload_bit '@'
	option address '6007'
	option poll '10'
	option topic_t 'certa/rs485/2/parity'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option payload_bit '@'
	option address '6011'
	option poll '10'
	option topic_t 'certa/rs485/3/parity'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/ip/1'
	option payload_bit '@'
	option address '6032'
	option poll '10'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/ip/2'
	option payload_bit '@'
	option address '6033'
	option poll '10'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/ip/3'
	option payload_bit '@'
	option address '6034'
	option poll '10'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/ip/4'
	option payload_bit '@'
	option address '6035'
	option poll '10'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/subnetmask/1'
	option payload_bit '@'
	option address '6036'
	option poll '11'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/subnetmask/2'
	option payload_bit '@'
	option address '6037'
	option poll '11'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/subnetmask/3'
	option payload_bit '@'
	option address '6038'
	option poll '11'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/subnetmask/4'
	option payload_bit '@'
	option address '6039'
	option poll '11'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/gateway/1'
	option payload_bit '@'
	option address '6040'
	option poll '12'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/gateway/2'
	option payload_bit '@'
	option address '6041'
	option poll '12'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/gateway/3'
	option payload_bit '@'
	option address '6042'
	option poll '12'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/gateway/4'
	option payload_bit '@'
	option address '6043'
	option poll '12'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/mac/1'
	option payload_bit '@'
	option address '6044'
	option poll '13'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/mac/2'
	option payload_bit '@'
	option address '6045'
	option poll '13'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/mac/3'
	option payload_bit '@'
	option address '6046'
	option poll '13'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/mac/4'
	option payload_bit '@'
	option address '6047'
	option poll '13'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/mac/5'
	option payload_bit '@'
	option address '6048'
	option poll '13'
	option deadband '1'

config topics
	option payload '@'
	option sub '0'
	option station_mbid '0'
	option slaveid '1'
	option regtype 'ui16'
	option active '1'
	option topic_t 'certa/mac/6'
	option payload_bit '@'
	option address '6049'
	option poll '13'
	option deadband '1'

{% endcapture %}
{% include code-toggle.liquid code=gatewayCode params="conf|.copy-code.expandable-20" %}

## Create uplink converter

You can use the following code for your uplink converter in "Create integration" step:

{% capture uplinkConverterCode %}
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object

/** Decoder **/

// decode payload to string
var payloadStr = decodeToString(payload);

var deviceName = 'ACE Gateway';
var deviceType = 'default';

var arr = metadata.topic.split("/");

var attr_name = "";

for (var i = 1; i < arr.length; i++){
    attr_name += arr[i];
    if (i < arr.size() - 1) {
        attr_name += "_";
    }
}

var attributes = {};
attributes.put(attr_name, payloadStr);
// Result object with device/asset attributes/telemetry data
var result = {
// Use deviceName and deviceType or assetName and assetType, but not both.
   deviceName: deviceName,
   deviceType: deviceType,
   attributes: attributes,
   telemetry: {}
};

/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

return result;
{% endcapture %}

{% include code-toggle.liquid code=uplinkConverterCode params="javascript|.copy-code.expandable-20" %}

## Create downlink converter

You can use the following code for your downlink converter in "Create integration" step:

{% capture downlinkConverterCode %}
// Encode downlink data from incoming Rule Engine message

// msg - JSON message payload downlink message json
// msgType - type of message, for ex. 'ATTRIBUTES_UPDATED', 'POST_TELEMETRY_REQUEST', etc.
// metadata - list of key-value pairs with additional data about the message
// integrationMetadata - list of key-value pairs with additional data defined in Integration executing this converter

/** Encoder **/

var results = [];

// Result object with encoded downlink payload
foreach (item : msg.entrySet()) {
    var val = item.value;
    if (item.key.startsWith("AO")) {
        val *= 100;
    }

    var result = {
        // downlink data content type: JSON, TEXT or BINARY (base64 format)
        contentType: "JSON",  
        // downlink data
        data: val,
        // Optional metadata object presented in key/value format
        metadata: {
            topic: 'certa/' + item.key.toLowerCase()
        }
    };

    results.add(result);
}

return results;
{% endcapture %}

{% include code-toggle.liquid code=downlinkConverterCode params="javascript|.copy-code.expandable-20" %}

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
        /images/user-guide/integrations/mqtt/mqtt-integration-add-integration-3-pe.png,
        title: Check **Create new downlink data converter** and replace a code or create the existing one.
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
- **Downlink** data converter: *Integration Downlink Converter*
- **Connection**: *Settings for connection to external MQTT Broker*


To add integration click on '**+**' button and follow the next steps:  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=createIntegration %} 

Press **Add** button and integration will be added. 

{% include /docs/devices-library/blocks/basic/thingsboard-check-integration-connection.md %}

## Check data on ThingsBoard

{% include /docs/devices-library/blocks/ready-to-go-devices/check-data-on-thingsboard-block.md %}

{% capture readytogodevicestogglespec %}
Imported Dashboard%,%importedDashboard%,%templates/device-library/ready-to-go-devices/ace-gateway-imported-dashboard.md%br%
New Dashboard%,%newDashboard%,%templates/device-library/single-board-computers/device-new-dashboard.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="minicomputersDashboard" toggle-spec=readytogodevicestogglespec %}

## Conclusion
With the knowledge in this guide, you can easily connect your ACE Automation MQTT 4G GPS Gateway and use the built-in 
integration to retrieve data from devices connected to ACE Automation MQTT 4G GPS Gateway.

After connecting the devices to the gateway, you will be able to see and process the data coming from the devices on the ThingsBoard.

Explore the platform [documentation](/docs/{{page.docsPrefix}}){: target="_blank"} to learn more about key concepts and features. 

