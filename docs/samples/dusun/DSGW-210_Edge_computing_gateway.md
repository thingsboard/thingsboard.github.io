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
 <img src="/images/samples/dusun/1.png" width="800">  
 


## Integration method

### Block 1 ThingsBoard configuration 
Steps of configuration in the ThingsBoard is shown below, here it takes the sample server in the ThingsBoard.cloud as an example 

* [Step 1.1] Register and log in [ThingsBoard PE](https://thingsboard.cloud/signup)

 <img src="/images/samples/dusun/2.png">  

* [Step 1.2] Switch to device section

 <img src="/images/samples/dusun/3.png" width="800">  

* [Step 1.3] Add one more device by pressing the '+' button

 <img src="/images/samples/dusun/4.png" width="800">  

* [Step 1.4] Fill in the device name, take the Test_gateway as an example, click 'is gateway'

 <img src="/images/samples/dusun/5.png" width="800">  

* [Step 1.5] Copy the access token, record it for gateway to connect to the ThingsBoard cloud 

<img src="/images/samples/dusun/6.png" width="800">  

### Block 2 Device configuration
* [Step 2.1]  Log in gateway with user name: root, password: root
 <img src="/images/samples/dusun/7.png" width="800">  

* [Step 2.2] Switch to section IOT Services -> Cloud Config
 <img src="/images/samples/dusun/8.png" width="800">  

* [Step 2.3] Fill in the credentials from ThingsBoard cloud, ThingsBoard Server: thingsboard.cloud, Server Port: 1883, Access Token is in section 1.5

 <img src="/images/samples/dusun/9.png" width="800">  


### Block 3 Additional information

* [Step 3.1] Check connection in ThingsBoard cloud
* [Step 3.1.1] seen from the latest telemetry of the gateway, the information of connection is received correctly in the server
 <img src="/images/samples/dusun/10.png" width="800">  

* [Step 3.1.2] Active and connect a nearby oximter, notify the data from it 
 <img src="/images/samples/dusun/11.png" width="800">  
* [Step 3.1.3] Device is correctly registered to the ThingsBoard server, and the oximeter data is received in the cloud 
 <img src="/images/samples/dusun/12.png" width="800">  
* [Step 3.1.4] Test with another Zigbee temperature & humidity sensor 
 <img src="/images/samples/dusun/13.png" width="800">  
* [Step 3.1.5] Manually trigger the sensor to upload data, see the data uploaded in chart
 <img src="/images/samples/dusun/14.png" width="800">  

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


