
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.dusuniot.com/product/dsgw-210-rk3328-iot-gateway-hub-controller-bridge-hardware/" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign officialManualLink = "https://manuals.plus/dusun/dsgw-210-home-assistant-gateway-manual/" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [DUSUN DSGW-210 Home Assistant Gateway Instruction Manual](' | append: officialManualLink | append: '){: target="_blank"}
  '
  %}

## Introduction

[DSGW-210 Smart Gateway Hub]({{deviceVendorLink}}){: target="_blank"} is IoT gateway with multiple protocol and edge computing function. It provides reliable connectivity for a wide range of wireless IoT devices. The gateway’s modular architecture provides the ability to customize many gateway features including Cellular, Bluetooth, Wi-Fi, Ethernet, USB, ZigBee, Z-wave and Li battery backup.
<br><br><br>

## Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}


## Product Summary

•	Support 5V USB type-c power supply

•	Support IEEE802.11ac, IEEE802.11a, IEEE802.11n, IEEE802.11g, IEEE 802.11b Protocol

•	Support 4G LTE CAT M1,CAT1

•	Support Bluetooth 5.2

•	Support ZigBee3.0

•	Support Z-WAVE

•	One WAN/LAN variable network port

•	Support USB2.0

•	Backup Li battery

## Hardware block diagram

<img src="/images/samples/dusun/1.png" alt="Block-diagram for Cortex">

## Integration with ThingsBoard

### ThingsBoard configuration

The configuration steps in ThingsBoard are shown below, we will demonstrate on the {{hostName}} server.
You can use [ThingsBoard Cloud](https://{{hostName}}/signup){:target="_blank"} or [install](https://thingsboard.io/docs/user-guide/install/pe/installation-options/){:target="_blank"} your own platform instance.

* [Step 1.1] Register and log in [ThingsBoard Cloud](https://{{hostName}}/signup){:target="_blank"};

<img src="/images/samples/dusun/dsgw-210-gateways-1.png" alt="Thingsboard login screen">

* [Step 1.2] Go to the "Devices" page of the "Entities" section;

<img src="/images/samples/dusun/dsgw-210-gateways-2.png" alt="Device management choosing">

* [Step 1.3] Add one more device by pressing the "plus" icon in the top right corner of the table and then select "Add new device" from drop-down menu. Fill in the device name, take the Test_gateway as an example, toggle "Is gateway", and click "Add";

<img src="/images/samples/dusun/dsgw-210-gateways-3.png" alt="Press plus sign to add new device">

* [Step 1.4] Copy the access token, record it for gateway to connect to the ThingsBoard Cloud.

<img src="/images/samples/dusun/dsgw-210-gateways-4.png" alt="Press plus sign to add new device">

### Device configuration

* [Step 2.1] Log in to the gateway with the following credentials:
  * username: **root**
  * password: **root**

<img src="/images/samples/dusun/7.png" alt="Authorization screen">

* [Step 2.2] Switch to section "IOT Services" -> "Cloud Config";

<img src="/images/samples/dusun/8.png" alt="Choosing cloud config item from IoT Servicees menu item">

* [Step 2.3] Fill in the credentials from the ThingsBoard Cloud:
  * ThingsBoard Server: **{{hostName}}**
  * Server Port: **1883**
  * Insert the access token obtained in step 1.4

<img src="/images/samples/dusun/9.png" alt="Filling credentials in Cloud Config">

### Additional information

* [Step 3.1] Check connection in the ThingsBoard Cloud;
* [Step 3.1.1] seen from the latest telemetry of the gateway, the information of connection is received correctly in the server;

<img src="/images/samples/dusun/dsgw-210-gateways-10.png" alt="Latest telemetry screen">

* [Step 3.1.2] Active and connect a nearby oximter, notify the data from it;

<img src="/images/samples/dusun/11.png" alt="Bluetooth device screen">

* [Step 3.1.3] Device is correctly registered to the ThingsBoard server, and the oximeter data is received in the cloud;

<img src="/images/samples/dusun/12.png" alt="Timeseries table example">

* [Step 3.1.4] Test with another Zigbee temperature & humidity sensor;

<img src="/images/samples/dusun/13.png" alt="Added device screen">

* [Step 3.1.5] Manually trigger the sensor to upload data, see the data uploaded in chart.

<img src="/images/samples/dusun/14.png" alt="Timeseries bar chart example">

## Troubleshooting

Error indicator

|  Led status | Possible cause & solution  |
| ------------ | ------------ |
| Blue led keep flashing  | Gateway rebooting  |
|  Red Led flashing | Gateway not connecting to cloud server, trying to reconnect  |
|  Red Led steady | Internet is down, user need to check the internet connection |
|  Yellow led on | Gateway is in low battery, user need to charge the gateway  |

## Contact Us

For other concerns about the integration, please consult *sales@dusunremotes.com*
{% include add-device-banner.liquid %}