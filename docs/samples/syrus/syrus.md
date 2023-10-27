---
layout: docwithnav
title: Integration Syrus 4 IoT Telematics Gateway - Thingsboard
description: Syrus 4 IoT Telematics Gateway integration guide
hidetoc: "true"

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Description

Here&#39;s a detailed integration example between Syrus 4G IoT Telematics Gateway with Thingsboard Platform over MQTT connection.

## Getting Started

[Syrus 4G IoT Telematics Gateway.](https://syrus.pegasusgateway.com/syrdocs/syrus4/getting-started/)

[Thingsboard Sign Up](https://demo.thingsboard.io/signup)

## Provisioning the device for Thingsboard

For simplicity, we will provision device manually using the UI.

### 1. Login to your ThingsBoard instance and open Devices page.

![image](/images/samples/syrus/device_page.png)

Click on the &quot;+&quot; icon in the top right corner of the table and then select &quot;Add new device&quot;.

![image](/images/samples/syrus/add_device.png)

Input device name. For example, &quot;Syrus&quot;. No other changes are required at this time. Click &quot;Add&quot; to add the device.

![image](/images/samples/syrus/name_device.png)

Now your device should be listed first, since the table sorts the devices by using created time as default.

![image](/images/samples/syrus/device_details.png)

### 2. Token creation

To connect the device you need to get the device credentials first. ThingsBoard supports different device credentials. We recommend using default auto-generated credentials which is an access token for this guide.

Click on the device row in the table to open device details

![image](/images/samples/syrus/copy_token.png)

Click &quot;Copy access token&quot;. Token will be copied to your clipboard. Save it to a safe place.

## Syrus 4G IoT Telematics Gateway Configuration

The first step to do is make sure you have the latest version of Apex OS

### 1. Preparing your System

Go to Management Tool (**http://192.168.9.2**) if you&#39;re over USB cable), select System and confirm that you&#39;re up to date

![image](/images/samples/syrus/update_device.png)

Now go to Applications Manager and Check for updates and make sure you have the latest version of SyrusJS application installed:

![image](/images/samples/syrus/js_latest.png)

### 2. Create an instance

In application manager pull down the menu of SyrusJS, this will show you all versions installed of the application, select the latest one and Create a New Instance:

![image](/images/samples/syrus/new_instance.png)

Name your instance and select the &quot;Create Instance&quot; button:

![image](/images/samples/syrus/name_instance.png)


Now you have your instance created:

![image](/images/samples/syrus/instance_created.png)

### 3. Creating your configuration files

We need to create two files on any notepad application (notepad++, sublime, vscode, etc), you can name it as you want but the extension must be syrus.conf

![image](/images/samples/syrus/configuration_files.png)

One file contains the destination data, protocol, output format, MQTT URI, username and topics.

you may define custom MQTT topics in the MQTT transport configuration. See [transport configuration](/docs/user-guide/device-profiles/#transport-configuration)

here is an example:

![image](/images/samples/syrus/example.png)

Replace [YOUR\_TOKEN] with the copied access token you got from Thingsboard when you created the device.

More information about: [https://syrus.pegasusgateway.com/syrdocs/syrus4/syruslang/#destinations](https://syrus.pegasusgateway.com/syrdocs/syrus4/syruslang/#destinations)

The second file contains all the events that will be sent to the Thingsboard over MQTT, here is an example, this will send Ignition On/Off events and track points every minute:

{% highlight bash %}
_####### ###### ####### ###### #######_

_############ START MQTT EVENT ###########_

define variable constant_1 1

define fieldset thingsboard
fields="ident":$modem.imei,position.context.lat:$gnss.latitude,position.context.lng:$gnss.longitude,
position.value:$variables.constant_1,"position.direction":$gnss.heading,"position.hdop":$gnss.hdop,
"position.pdop":$gnss.pdop,"position.vdop":$gnss.vdop,"position.speed":$gnss.mph,
"position.altitude":$gnss.altitude,"event.enum":code,"can.engine.rpm":$ecu.rpm,
"can.throttle.pedal.level":$ecu.accel_pedal_position,"can.engine.temperature":$ecu.coolant_temp,
"can.fuel.consumed":$ecu.fuel_total,"can.intake.map":$ecu.intake_manif_pressure,
"can.vehicle.speed":$ecu.fe6c_7-8,"can.fuel.temperature":$ecu.fuel_temp,"can.engine.load":$ecu.engine_load,
"can.engine.torque":$ecu.actual_engine_torque,"can.catalyst.outlet.temp":$ecu.aftmt_catalyst_outlet_gas_temp
"can.fuel.rate":$ecu.fuel_rate,"can.engine.hours":$ecu.hours_total,"can.ambient.temp":$ecu.ambient_air_temp,
"can.oil.pressure":$ecu.oil_pressure

define group thingsboard

set destinations group=thingsboard thingsboard

define tracking_resolution thingsboard_tracking 5m 25deg 1000mts

define signal ignitionON min_duration=5s $io.ign == true
define signal ignitionOFF min_duration=5s $io.ign == false

define event ignitionONmqtt group=thingsboard fieldset=thingsboard ack=seq label=ignonmqtt code=102 trigger=ignitionON
define event ignitionOFFmqtt group=thingsboard fieldset=thingsboard ack=seq label=ignoffmqtt code=103 trigger=ignitionOFF
 
_# Define tracking event, a single tracking resolution signal that can be controlled by different actions

define event trackingOffMqtt group=thingsboard fieldset=thingsboard ack=seq label=prdtst code=100 trigger=@tracking_resolution.thingsboard_tracking.signal,ignitionOFF,and
define event trackingOnMqtt group=thingsboard fieldset=thingsboard ack=seq label=trckpnt code=101 trigger=@tracking_resolution.thingsboard_tracking.time,ignitionON,and
define event trackingHeadingMqtt group=thingsboard fieldset=thingsboard ack=seq label=heading code=140 trigger=@tracking_resolution.thingsboard_tracking.heading,ignitionON,and
define event trackingDistanceMqtt group=thingsboard fieldset=thingsboard ack=seq label=distance code=141 trigger=@tracking_resolution.thingsboard_tracking.distance,ignitionON,and


_############ END MQTT EVENT ###########_

_####### ###### ####### ###### #######_

define event trackingOnMqtt group=mqtt fieldset=mqtt ack=seq label=trckpnt code=101 trigger=@tracking_resolution.mqtt_tracking.time,ignitionON,and
define event trackingHeadingMqtt group=mqtt fieldset=mqtt ack=seq label=heading code=140 trigger=@tracking_resolution.mqtt_tracking.heading,ignitionON,and
define event trackingDistanceMqtt group=mqtt fieldset=mqtt ack=seq label=distance code=141 trigger=@tracking_resolution.mqtt_tracking.distance,ignitionON,and
_############ END MQTT EVENT ###########
_####### ###### ####### ###### #######
{% endhighlight %}

If you need more information about how to configure more events please refer to SyrusLang documentation:

[https://syrus.pegasusgateway.com/syrdocs/syrus4/syruslang](https://syrus.pegasusgateway.com/syrdocs/syrus4/syruslang)

### 4. Upload your configuration files

Select your created instance:

![image](/images/samples/syrus/select_instance.png)

Go to Data Folder Tab:

![image](/images/samples/syrus/data_tab.png)

Select Upload File:

![image](/images/samples/syrus/upload_file.png)

And search in your local disk the previous configurations files created, and upload it one by one

![image](/images/samples/syrus/upload_config.png)

Go to Configuration tab, pull down in Configuration and Destination File, select you previously updated items and click Save button: 

![image](/images/samples/syrus/select_configuration.png)

### 5. Start your instance

Finally, go back to the Information tab and click the Start button:

![image](/images/samples/syrus/information_tab.png)

## Check your data in Thingsboard demo account

The reported variables are automatically created according to the fieldset configuration.

Go to Devices, choose Syrus 4 and click &quot;Latest telemetry&quot;

![image](/images/samples/syrus/latest_telemetry.png)

Now you can use Thingsboard&#39;s tools to design your own dashboard with Syrus 4G data:

![image](/images/samples/syrus/dashboard.png)
