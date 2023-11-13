---
layout: docwithnav
title: Temperature upload over MQTT using Nettra RTU
description: ThingsBoard IoT Platform sample for temperature upload over MQTT using Nettra RTU
hidetoc: "true"
---

## Table of contents
1. [Introduction](#introduction)
3. [Prerequisites](#prerequisites)
4. [Connection diagram](#connection_diagram)
5. [ThingsBoard configuration](#tb_configuration)
6. [Connect RTU-X to PC](#connection_pc)
7. [RTU-X configuration](#rtu_configuration)
8. [Data visualization](#data_visualization)

## Introduction

This guide contains step-by-step instructions on how to connect your Nettra RTU device to ThingsBoard Community Edition through TCP/IP via wifi, using as sample, one of the many applications that the Nettra RTU has. At the end of this guide, you will be able to monitor data using Thingsboard web UI to display it.

### Nettra RTU
[Nettra RTU](https://nettra.tech) called **"RTU-X"** is a powerful IoT electronic device that has digital and analog inputs and outputs, as well as several integrated communication interfaces as modem, ethernet, bluetooth, 802.15.4, RS485, RS232 and GPS. It is an ideal product to implement monitoring, data acquisition and control applications over a distributed data network.

The RTU-X is easly configurable via a [RTU-X Configuration Interface](http://wiki.nettra.tech/en/downloads). To adapt the RTU-X to each application, it runs a fully customizable script, accessible and editable from the Configuration Interface. In this guide we will provide one as an example quite simple and easy to understand.

Once you complete this sample/tutorial, you will see your sensor data on a dashboard like the following on the right.
<br><br>

![rtu_x](https://user-images.githubusercontent.com/61634031/133831823-b6e2420e-5669-433a-a3fa-54b506ab24b9.png) ![dash2](https://user-images.githubusercontent.com/61634031/134074200-5063cd05-6091-4f36-90a3-91771373bd65.png)


## Prerequisites


### Hardware

 - 1x [RTU-X](https://nettra.tech)
 - 1x 12VDC supply voltage

### Software
 - [RTU-X Configuration Interface](http://wiki.nettra.tech/en/downloads).
 - You will need to have ThingsBoard server up and running. Use either [Live Demo](https://thingsboard.io/docs/user-guide/install/installation-options/?ceInstallType=liveDemo) or [Installation Guide](https://thingsboard.io/docs/user-guide/install/ubuntu/) to install ThingsBoard.

## Connection diagram

The following picture summarizes the connections for this simple project:
<br><br>
![copy_941957077](https://user-images.githubusercontent.com/61634031/133837072-8340491f-ea35-4204-91e1-7d513641d7bb.png)

## ThingsBoard configuration

This step contains instructions that are necessary to connect your device to ThingsBoard.

Sign up ThingsBoard Web UI as [live-demo](https://demo.thingsboard.io/signup). See [Live Demo](https://thingsboard.io/docs/user-guide/install/installation-options/?ceInstallType=liveDemo) page for more details how to get your account.

### Device

1. Go to *"Devices"* section. 
2. Click on *"+"* button and create a device with the name **"RTU-X"**. Set *"Device type"* to **"default"**.
<br><br>
![add_opt (1)](https://user-images.githubusercontent.com/61634031/133840783-8b605dfd-3a50-430b-bb63-a8244a53cad9.png)
<br><br>
3. Once the device is created, open its details and click *"Copy access token"*. Please save this device token. It will be referred to later as **$RTU_DEMO_TOKEN**.
<br><br>
![access_opt (3)](https://user-images.githubusercontent.com/61634031/133840798-1ea7dc07-c157-4fda-ab1c-9ecb0bba1bb8.png)

### Dashboard

Download the dashboard file (.json) using this [link](/docs/samples/nettrartu-x/resources/rtu_x_dashboard.json).
Use import/export [instructions](https://thingsboard.io/docs/user-guide/dashboards/#import-dashboard) to import the dashboard to your ThingsBoard instance.

## Connect RTU-X to PC

 - Download and install the latest version of [RTU-X Configuration Interface](http://wiki.nettra.tech/en/downloads).

 - Turn on the RTU-X.

 - Check your wifi network and connect to "RTU-X-******".

 - Open the RTU-X Configuration Interface. 

   1. Go to *"Home"*.
   2. Click on *"TCP/IP"*.
   4. Specify the *"IP*" address **"192.168.4.1"**, *"Port":* **"502"** (by default).
   5. Click on *"Connect"*.

   ![rtu1_step1](https://user-images.githubusercontent.com/61634031/134022796-78e22a93-5f03-4c9f-80bb-c129814b349a.png)

 - Once you are connected you should see the following:

   ![rtu2_step](https://user-images.githubusercontent.com/61634031/133849616-2b64bd94-8b5e-49d8-b9fc-a909b8d0cf3e.png)
  
 - Then:
   1. Go to *"Communications"*.
   2. Go to *"Wifi, Serial, Modbus"*.
   3. Click *"Station"* and register the data for the WiFi network.
   4. *"Apply Changes"*
   
   ![rtu3_step3](https://user-images.githubusercontent.com/61634031/134022912-8dcbe19c-986f-4fa7-8231-823564262343.png)
   
 - Finally:
   1. Go back to *"Home"*.
   2. Copy the *"IP"* address on *"WiFi STA information"*.
   3. Disconnect from the RTU-X.
   4. Change the *"IP"* address and reconnect.

   ![rtu4_step4](https://user-images.githubusercontent.com/61634031/134022869-f1ec2a5b-dfee-4571-96a4-7fd1fcd81778.png)

## RTU-X configuration

Once you have your RTU-X connected to the PC, we can proceed with its configuration.

### MQTT

1. Go to *"Communications"*.
2. Click on *"MQTT"*.
3. On *"Interface"* select *"Modem"*. On *"Format"* select *"Thingsboard"*. On *"URI"* paste *"mqtt://demo.thingsboard.io:1883"*. On *"Password"* paste the Device Acces Token from *"Device"* step.
4. Click on *"Apply Changes"*.

![rtu5_step5](https://user-images.githubusercontent.com/61634031/134028854-17b5d9c8-c807-4b3b-a557-00ea5b25d7ac.png)

### Script

 - Download this [***script***](/docs/samples/nettrartu-x/resources/rtu_x_script.json).

```c
/*
 * DESCRIPTION :
 *	- Sending a variable to a Thingsboard Dashboard
*/
// VARIABLES DEFINITION ------------------------------------------
// Attributes
shared uint tLog = 10;

// Loggable
telemetry float variable;

// SCRIPT -----------------------------------------------------------
while (1)
{
    variable = 15;
	
    delay_loop(tLog*1000); // 10 seconds
    log(variable);
}
```

1. Go to *"User Interface"* 
2. Import the script clicking *"Load"*. If you want to make your own script, you can see the [Nettra script user manual](http://wiki.nettra.tech/en/script).
3. Compile and save the script in the RTU-X by clicking *"Compila & Apply"*.

![rtu6_step6](https://user-images.githubusercontent.com/61634031/134028433-e7412285-9f4e-4d67-9f3c-80879f99191f.png)

## Data visualization

Finally, open ThingsBoard Web UI in the Live Demo server with same user and password as *ThingsBoard configuration* section.

Go to *"Devices"* section and locate *"RTU-X Device"*, open device details and switch to *"Latest telemetry"* tab.
If all is configured correctly you should be able to see latest values of *"variable"* in the table.<br><br>

![dev](https://user-images.githubusercontent.com/61634031/134029353-d4d80304-0396-4a10-b313-02a249300280.png)

After, open *"Dashboards"* section then locate and open *"RTU-X"* dashboard.
As a result, you will see an analog gauge (similar to dashboard image in the introduction).<br><br>

![dash](https://user-images.githubusercontent.com/61634031/134030076-19fd80de-38fd-4114-b1f1-221f61756782.png)

## See also

Browse other [samples](https://thingsboard.io/docs/samples/) or explore guides related to main ThingsBoard features:

 - [Device attributes](https://thingsboard.io/docs/user-guide/attributes/) - how to use device attributes.
 - [Data Visualization](https://thingsboard.io/docs/guides/#AnchorIDDataVisualization) - how to visualize collected data.
 - [Data Analytics](https://thingsboard.io/docs/guides/#AnchorIDDataAnalytics) - how to collect telemetry data.
 - [Rule Engine](https://thingsboard.io/docs/user-guide/rule-engine-2-0/re-getting-started/) - how to use rule engine to analyze data from devices.
 - [Using RPC capabilities](https://thingsboard.io/docs/user-guide/rule-engine-2-0/tutorials/rpc-request-tutorial/) - how to send commands to/from devices.

