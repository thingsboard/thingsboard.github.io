---
layout: ecasado
title: EXXN IoT Gateway
description: EXXN IoT Gateway Integration guide
hidetoc: "true"

---

## Introduction
This guide describes the process to integrate An Exxn IoT Gateway in ThingsBoard platform in order to monitor data and manage the device remotely.
<br/>
<br/>
EXXN IoT Gateway is a Multipurpose device with ARM processor, adaptable to customer needs and for different use cases:
* Monitoring of environmental sensors.
* Energy monitoring.
* Radon gas monitoring.
* Marine environmental monitoring.
* Edge computing
* ...

#### Technical characteristics
The Technical characteristics of the EXXN IoT Gateway 'Cell 1024' used in this guide are:
* ARM Cortex-A53 Quad-Core 64-bit Processor
* GPU Mali 470
* 2GB DDR4
* 8GB eMMC
* 10/100 Mbit/s Ethernet
* Wi-Fi 802.11 b/g/n/AC
* Bluetooth 4.2
* PoE
* Possibility of hardware development for custom functionalities

##### Device Cell 1024
<p align="center">
   <img src="/images/samples/exxn/cell_1024.jpg" >  
</p>


## Dashboard
This is an example of a dashboard developed with ThingsBoard that shows some metrics captured with an EXXN IoT Gateway.

<img src="/images/samples/exxn/dashboard.png" >  

## Integration flow:

### Device configuration
In this block, we are going to configurate an EXXN IoT Gateway to integrate it with ThingsBoard via MQTT API.

* [Step 1.1] For this integration example, We are going to use our EXXN IoT Gateway 'Cell 1024'
* [Step 1.2] Requisites: We must have connection to the device and the Device have to be connected to the Internet via Ethernet, Modem or Wifi.
* [Step 1.3] Open a Browser to the administration web of Cell 1024 using this URL: https://[IP_DEVICE] and go to the 'Cloud' tab:
<br/>
<br/>
  <img src="/images/samples/exxn/conn1.png" >  

* [Step 1.4] Activate the Cloud control and configure all the parameters to connect the device to the specific ThingsBoard platform via MQTT:

<img src="/images/samples/exxn/conn2.png" >  
 
 * Configuration parameters
    - Cloud Platform: Select ThingsBoard.
    - MQTT broker URL: URL to de Broker of the server we want to integrate to.
    - MQTT broker port: Number of the port used by the server.
    - TLS: Select true if the server use the Transport Layer Security protocol.
    - Connection Type: Select 'Access Token' option. We will use an Access token previously created in ThingsBoard.
    - Access Token:  Indicate the Access token previously created in ThingsBoard.

<br>
<br>

* [Step 1.5] Save configuration. Do click in 'Save configuration' button.

<img src="/images/samples/exxn/conn3.png" >  


<br/>
* [Step 1.6] In order to check if the Device is connected correctly to ThingsBoard, we can go to ThingsBoard Devices administration menu, select the Device with the Access token previously created and verify if the Client attributes the device has been communicated.

<p align="center">
   <img src="/images/samples/exxn/client_attributes.png" >  
</p>

<br/>
If everything is correct, we will see client attributes like the serial_number, last_rebbot, device_model, etc. In the client attributes of the device Details.

<br/>
<br/>

### ThingsBoard configuration

#### Integration methods

The integration method used by EXXN IoT Gateway to connect with ThingsBoard will be MQTT API. <br>
Previously, we have seen how to configure the device to connect to ThingsBoard.  Now, we are going to see the steps to configure the device in ThingsBoard in order to monitoring data and manage the Device.

{% capture domain_owner_note %}
**Note**

Currently, The IoT EXXN Gateways have 'Access Token' as integration method.  We are working on a Pre-Provisioning integration method where it won't be necessary copy this Access token in the device.

{% endcapture %}

{% include templates/info-banner.md content=domain_owner_note %}

##### Access token Integration

* [Step 2.1] Create a new device in ThingsBoard.
* [Step 2.1] Copy the device id from ThingsBoard.  This token will be the one to be copied during device configuration.

<p align="center">
   <img src="/images/samples/exxn/access_token.png" >  
</p>

#### Device configuration

In order to configurate the datalogger options of the EXXN IoT Gateway, we must to create a new JSON 'Shared' Attribute for the Device with de key 'config'.

* [Step 2.3]  Go to Devices Attributes in Device Details.
<p align="center">
   <img src="/images/samples/exxn/shared_attributes.png" >  
</p>
* [Step 2.3]  Add a new 'Shared' attribute with the key 'config' of type JSON
<p align="center">
   <img src="/images/samples/exxn/add_attribute.png" >  
</p>
* [Step 2.4]  It is possible to expand to Fullscreen the content of the attribute in order to write it correctly.
The contend of this attribute will have this aspect.  It is possible to consult the EXXN IoT Gateway Manual to configure the device correctly.

<img src="/images/samples/exxn/config_json.png" >  

Its possible to download an example of this JSON File from this [link](/docs/samples/exxn/resources/config.json).<br/>
All the information to configure the device correctly through this JSON File can be found in the EXXN IoT Gateway Manual.


* [Step 2.5] Update the new value of the 'config' attribute. The new Configuration will take effect on the device.

<br/>
<br/>

#### Widgets

All the measures 'enabled' in the JSON configuration file will be found as metrics with the name specified in the same file.
<p align="center">
   <img src="/images/samples/exxn/select_telemetry.png" >  
</p>

<br/>
This way the telemetry values can be shown in a widget.
<p align="center">
   <img src="/images/samples/exxn/temperature_gauge.png" >  
</p>

#### Device commands
It is possible to send commands to the device in order to execute some task. The params of the method has to be a JSON.
<p align="center">
   <img src="/images/samples/exxn/rpc_button.png" >  
</p>

All the commands that can be sent to the device are explained in the EXXN IoT Gateway Manual.

### Additional information

### Troubleshooting
* [Step 3.1] The Most common problem in the integration process is not having connection with the MQTT Broker.  Make sure the device is connected to the internet and is able to communicate with ThingsBoard Broker.
* [Step 3.2] Another usual problem is not setting the correct Access Token.  Check that the provided Access token is configured in ThingsBoard for the device. 

<br/>

## Feedback & Contact Us for your integration

More information about us can be found in our Web site [EXXN Engineering](http://exxn.es/en/). 
<br>
If you have any problems or doubts, do not hesitate in contact us: [troubleshooting@exxn.es](mailto://troubleshooting@exxn.es)
