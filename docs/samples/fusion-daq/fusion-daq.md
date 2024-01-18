---
layout: docwithnav
title: Publish MI-8 data to ThingsBoard
description: Publish MI-8 data to ThingsBoard guide

---

* TOC
{:toc}

## Prerequisites

In this tutorial, we will configure FusionDAQ device to integrate it with ThingsBoard.

## Technical characteristics

The FDQ-99900 MI-8 is a compact, 24-bit data acquisition system (DAQ) designed to measure up to ten external sensors then log values locally to an SD card or push data to the cloud over a cellular data connection. Advanced triggering functionality allows the MI-8 to conserve storage space and network data by only transmitting events of interest. The low power consumption and wide operating temperature range are designed to allow outdoor and remote installations. The MI-8 is available with and without an enclosure to support custom packaging solutions. For example, the enclosureless (OEM) configuration is often mounted into an IP-67 rated NEMA enclosure along with supporting sensors and hardware.

**Features:**
* Push data to remote server or log directly to SD Card
* LTE CAT-M1 and CAT-NB cellular bands
* Advanced triggering options
* HTTP/MQTT push APIs
* Up to two general purpose 0-10V analog inputs
* Up to four RTD or strain gauge measurements
* Up to six thermocouple inputs
* Negative common-mode range handling for grounded thermocouples (±2.4V)
* Supports all major thermocouple types (B, E, J, K, N, R, S, T)
* Regulated 14.4V output to power external sensors.
* Wide supply voltage range (4.8-30V)
* Deal for battery powered installations
* Integrated GPS (GNSS) Receiver

<p align="center">
   <img src="/images/samples/fusion-daq/m-8-device.png" alt="m 8 device">
</p>

## Provisioning the device for ThingsBoard

Contains instructions that are necessary to connect your device to ThingsBoard.

### Create ThingsBoard Device

Open your [ThingsBoard Cloud server](https://thingsboard.cloud/) in browser and sign in.

Go to "**Device groups**" tab -> "**All**" and click "plus" button to add a new device.

Enter device name, select existing or create a new [device profile](https://thingsboard.io/docs/user-guide/device-profiles/) and click on "Add" button.

![image](/images/samples/fusion-daq/fusion-daq-mi-8-create-device-1.png)

Your device has been created. Open its details and copy auto-generated **access token** by clicking on the "Copy access token" button.

![image](/images/samples/fusion-daq/fusion-daq-mi-8-create-device-2.png)

### Configure MI-8

Once you have an access token you can configure the MI-8. All MI-8 DAQs are configured through a file in the root directory of their SD card named config.json.
An example of this JSON file can be downloaded from [this link](/docs/samples/fusion-daq/resources/config.json).
The [MI-8 User manual](https://fusiondaq.com/wp-content/uploads/2023/01/LTEdaq_OperatingManual-1.pdf) contains detailed information for making changes to this file, but for this example we will focus on the name and push fields.
These are the fields which describe how to connect to ThingsBoard or any other service.

MI-8 config.json file used in this example:

![image](/images/samples/fusion-daq/fusion-daq-config-json.png)

The **name** field is optional in this file. This **name** is displayed on the MI-8 OLED screen and is sent to ThingsBoard as a device attribute. Best practice is for the name in config.json to match the name of the device in ThingsBoard, but this doesn’t have to be the case. The name field isn’t used to associate telemetry data between the MI-8 and ThingsBoard. It is only meant as an aid for the user.

The **push** field describes the connection to the ThingsBoard servers. In this example we use HTTP POST requests (“mode”:”post”). MQTT is also supported by ThingsBoard, but POST consumes less cellular data. The HTTP request URL is built up through the **server**, **port**, **use_ssl**, and **path/attributes_path** fields.

Things board telemetry (sensor data) requests are sent to http://thingsboard.cloud:80/api/vi/{ACCESS_TOKEN}/telemetry

The **use_ssl** field describes whether HTTP or HTTPS is used. The **server** field is everything between the double slashes ‘//’ and the colon. Next comes the **port** and one additional slash. Everything beyond that is the **path**.

Set server to “**thingsboard.cloud**”. Username and password should remain empty.

Set **path** to “api/vi/{ACCESS_TOKEN}/telemetry” and set **attributes_path** to “api/vi/{ACCESS_TOKEN}/attributes”.
Replace **{ACCESS_TOKEN}** with the access token from the device credentials page in ThingsBoard.
Each device has an unique access token.
Sensors values will be sent to **path** periodically, attributes (name, IMEI, ICCID, etc) are sent to **attributes_path** once when the MI-8 first powers up.

Set **push_attributes** equal to true so that attributes (things such as the MI-8 IMEI number which don’t change frequently) are sent once each power up.

Set **port** equal to 80 and **use_ssl** equal to false to use an unsecured HTTP connection to push data to ThingsBoard.
Set **port** equal to 443 and **use_ssl** equal to true to use SSL encryption (HTTPS). Either protocol is supported, but HTTPS will consume more cellular data each time data is pushed to the server.

Set **use_json** equal to true. All data sent to ThingsBoard should be formatted as JSON to simplify integration.

Set **use_headers** false. HTTP headers are not required by ThingsBoard and require additional cellular data each push.

Finally set **include_name**, **include_imei**, and **include_iccid** to false. These fields cause the ICCID, IMEI, and MI-8 name to be included in the telemetry pushes which would consume additional cellular data. They do not need included here since they are already sent to ThingsBoard in a separate attributes HTTP request once per MI-8 power cycle.

Save config.json, disconnect the PC from the MI-8 USB port (if connected and mass-storage enabled), and then power cycle the MI-8 so new settings take affect.

### Verify MI-8 Connection Within ThingsBoard

At this point the MI-8 should be configured and ready to communicate with ThingsBoard.
Return to your ThingsBoard instance, then navigate to "Device groups" and then "All".
Click on the device that was just associated with the MI-8 and then navigate to the "Latest Telemetry" tab.
All sensor values configured in the active MI-8 trigger [see operating manual](https://fusiondaq.com/wp-content/uploads/2023/01/LTEdaq_OperatingManual-1.pdf) should be present once the MI-8 powers up and is able to establish a cellular connection.
Note that GPS values are only transmitted after the first GPS fix, which could take several minutes depending on how long it has been and how far the MI-8 has moved since the last fix.
GPS values (lat, lon and alt) will only appear in the telemetry window after they have been transmitted at least once.

![image](/images/samples/fusion-daq/fusion-daq-mi-8-latest-telemetry-1.png)

Now, navigate to the "Attributes" tab. Attributes are additional data sent from the MI-8 to ThingsBoard that are more or less fixed and do not change such as the modem IMEI, the SIM ID (ICCID), and the MI-8 firmware version.
Attributes are only sent to ThingsBoard once each time the MI-8 is powered on.

![image](/images/samples/fusion-daq/fusion-daq-mi-8-attributes-1.png)

## Contact Us

For other concerns, please [contact with Fusion DAQ](https://fusiondaq.com/contact/).

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}
