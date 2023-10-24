## Introduction
This article contains instructions on how to configure ThingsBoard IoT platform and connect DSGW-210 Gateways. [ThingsBoard](https://thingsboard.io/) is an IoT platform for data collection, processing, visualization, and device management. It supports cloud and on-premises deployments, and it combines scalability, fault-tolerance and performances to nullify the chances of getting your IoT data lost.

DSGW-210 is IoT gateway with multiple protocol and edge computing function. It provides reliable connectivity for a wide range of wireless IoT devices. The gateway’s modular architecture provides the ability to customize many gateway features including Cellular, Bluetooth, Wi-Fi, Ethernet, USB, ZigBee, Z-wave and Li battery backup.

#### Product Summary
•	Support 5V USB type-c power supply

•	Support IEEE802.11ac, IEEE802.11a, IEEE802.11n, IEEE802.11g, IEEE 802.11b Protocol

•	Support 4G LTE CAT M1,CAT1

•	Support Bluetooth 5.2

•	Support ZigBee3.0

•	Support Z-WAVE

•	One WAN/LAN variable network port

•	Support USB2.0

•	Backup Li battery

#### Hardware block diagram
 <img src="https://img.thingsboard.io/samples/dusun/1.png" width="800" alt="Block-diagram for Cortex">



## Integration method

### Block 1 ThingsBoard configuration
Steps of configuration in the ThingsBoard is shown below, here it takes the sample server in the ThingsBoard.cloud as an example 

* [Step 1.1] Register and log in [ThingsBoard PE](https://thingsboard.cloud/signup)

 <img src="https://img.thingsboard.io/samples/dusun/2.png" alt="Thingsboard login screen">

* [Step 1.2] Switch to device section

 <img src="https://img.thingsboard.io/samples/dusun/3.png" width="800" alt="Device management choosing">

* [Step 1.3] Add one more device by pressing the '+' button

 <img src="https://img.thingsboard.io/samples/dusun/4.png" width="800" alt="Press plus sign to add new device">

* [Step 1.4] Fill in the device name, take the Test_gateway as an example, click 'is gateway'

 <img src="https://img.thingsboard.io/samples/dusun/5.png" width="800" alt="Device naame filling">

* [Step 1.5] Copy the access token, record it for gateway to connect to the ThingsBoard cloud

<img src="https://img.thingsboard.io/samples/dusun/6.png" width="800" alt="Press button to copy device access token">

### Block 2 Device configuration
* [Step 2.1]  Log in gateway with user name: root, password: root
 <img src="https://img.thingsboard.io/samples/dusun/7.png" width="800" alt="Authorization screen">

* [Step 2.2] Switch to section IOT Services -> Cloud Config
 <img src="https://img.thingsboard.io/samples/dusun/8.png" width="800" alt="Choosing cloud config item from IoT Servicees menu item">

* [Step 2.3] Fill in the credentials from ThingsBoard cloud, ThingsBoard Server: thingsboard.cloud, Server Port: 1883, Access Token is in section 1.5

 <img src="https://img.thingsboard.io/samples/dusun/9.png" width="800" alt="Filling credentials in Cloud Config">


### Block 3 Additional information

* [Step 3.1] Check connection in ThingsBoard cloud
* [Step 3.1.1] seen from the latest telemetry of the gateway, the information of connection is received correctly in the server
 <img src="https://img.thingsboard.io/samples/dusun/10.png" width="800" alt="Latest telemetry screen">

* [Step 3.1.2] Active and connect a nearby oximter, notify the data from it
 <img src="https://img.thingsboard.io/samples/dusun/11.png" width="800" alt="Bluetooth device screen">
* [Step 3.1.3] Device is correctly registered to the ThingsBoard server, and the oximeter data is received in the cloud
 <img src="https://img.thingsboard.io/samples/dusun/12.png" width="800" alt="Timeseries table example">
* [Step 3.1.4] Test with another Zigbee temperature & humidity sensor
 <img src="https://img.thingsboard.io/samples/dusun/13.png" width="800" alt="Added device screen">
* [Step 3.1.5] Manually trigger the sensor to upload data, see the data uploaded in chart
 <img src="https://img.thingsboard.io/samples/dusun/14.png" width="800" alt="Timeseries bar chart example">

* [Step 3.2] Troubleshooting steps.

Error indicator

|  Led status | Possible cause & solution  |
| ------------ | ------------ |
| Blue led keep flashing  | Gateway rebooting  |
|  Red Led flashing | Gateway not connecting to cloud server, trying to reconnect  |
|  Red Led steady | Internet is down, user need to check the internet connection |
|  Yellow led on | Gateway is in low battery, user need to charge the gateway  |


## Contact Us

- [Gateway Specification](https://www.dusuniot.com/iot-progammable-gateway/iot-edge-computer-gateway)

For other concerns about the integration, please consult sales@dusunremotes.com


