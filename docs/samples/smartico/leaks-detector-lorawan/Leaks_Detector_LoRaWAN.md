---
layout: docwithnav
title: Leaks Detector LoRaWAN “Smartico L2-LR” telemetry upload
description: ThingsBoard IoT Platform sample for leaks data upload over MQTT using Leaks Detector LoRaWAN “Smartico L2-LR”.
hidetoc: "true"
---

* TOC
{:toc}

# Leaks Detector LoRaWAN “Smartico L2-LR” telemetry upload
## Introduction
The device Leaks Detector LoRaWAN “Smartico L2-LR” is used in various fields of industry, utilities and automation for remote data collection, leaks detection and data transmission via LoRaWAN networks. The device implements two zone control using passive leak sensors, which provide high energy efficiency solutions. The design of the sensor in a waterproof housing allows external use. The figure shows a dashboard with processed telemetry results.

![image](/images/samples/smartico/leaks-detector-lorawan/mainDash.PNG)

## Prerequisites
LoRaWAN technology is used to transfer data from the Leaks Detector L2-LR to the ThingsBoard platform. This is the wireless communication technology that allows small amounts of data to be exchanged over a long distance. First of all, you need to configure the LoRaWAN server and make sure that data from the device goes to the server.  This guide uses [ChirpStack open-source LoRaWAN Network Server](https://www.chirpstack.io/application-server/). 
After finishing the server configuration on the Applications page, an entry with the device type should appear in the table.

![image](/images/samples/smartico/leaks-detector-lorawan/Lora1.PNG)

For example, we connected a device with the serial number 13123. With the correct configuration of the LoRaWAN server, we should see the data flow from the device on the “DEVICE DATA” page. The frequency of data transmission from the device depends on the Leaks Detector settings.

![image](/images/samples/smartico/leaks-detector-lorawan/Lora2.PNG)

To be able to receive data via the MQTT protocol, you need to integrate the [LoRaWAN server and the Mosquitto MQTT broker](https://www.chirpstack.io/application-server/integrations/mqtt/).
## Step 1. Creation UpLink Data Converters.
First, you should create the Uplink Data Converter according to the device protocol. The converter will decode incoming telemetry payload data from Leaks Detector LoRaWAN “Smartico L2-LR” that contains in encoded Base64 string to human readable, simplified ThingsBoard data format. Import [uplink_leaks_detector.json](/docs/samples/smartico/leaks-detector-lorawan/resources/uplink_leaks_detector.json) file with Uplink data converter.

![image](/images/samples/smartico/leaks-detector-lorawan/uplink.PNG)

## Step 2. Integration configuration.
To integrate Leaks Detector LoRaWAN “Smartico L2-LR” into ThingsBoard platform you should create a new integration as shown on the figure.

![image](/images/samples/smartico/leaks-detector-lorawan/Integration.PNG)

Also below you should add the topic filter according to LoRaWAN server configuration (in this example ```application/7/device/+/rx```). In the Host and Port fields, enter the ip-address where the MQTT broker is installed and port for working with it.
## Step 3. Verifying the receipt of data from the device.
Connect Leaks Detector L2-LR to transfer information. If the integration was performed without errors, after the transmission of the first telemetry, a new device with the name “13123” will appear in the DEVICE GROUPS → All. Also you can verify the input and output data, respectively, before and after conversion in DATA CONVERTERS → Uplink Leaks Detector → EVENTS.

![image](/images/samples/smartico/leaks-detector-lorawan/verifying.PNG)

Input data from Leaks Detector looks like this:
```json
{
    "applicationID": "7",
    "applicationName": "Smartico_leak_sensor",
    "deviceName": "13123",
    "devEUI": "02aaaa0100003343",
    "rxInfo": [{
        "gatewayID": "647fdafffe00d228",
        "uplinkID": "4e9ed6ae-b658-4e11-b686-1ecae882c807",
        "name": "tectelic_micro_lite_TECH",
        "rssi": -68,
        "loRaSNR": 4.8,
        "location": {
            "latitude": 48.44229794818326,
            "longitude": 35.014479160308845,
            "altitude": 144
        }
    }],
    "txInfo": {
        "frequency": 868500000,
        "dr": 0
    },
    "adr": true,
    "fCnt": 2220,
    "fPort": 7,
    "data": "YgAtAAAAAAAAAAA="
}
```
The payload is contained in the “data” field and encrypted in Base64. After decoding output data will look like this:
```json
{
    "deviceName": "13123",
    "deviceType": "Leak Sensor",
    "attributes": {
        "integrationName": "Leaks Detector"
    },
    "telemetry": {
        "NAME_DEV": "Leaks Detector LoRaWAN 'Smartico L2-LR'",
        "SN": "13123",
        "REAL_TIME": "27.08.2020 10:46:25",
        "FRAUD_1": "Not discovered",
        "FRAUD_2": "Not discovered",
        "FRAUD_1D": 1,
        "FRAUD_2D": 1,
        "FLG_ERR_PULSE_1": 0,
        "FLG_ERR_PULSE_2": 0,
        "FLG_LOW_BAT": 0,
        "FLG_MOTION_DETECT": 1,
        "FLG_MAGNET_DETECT": 0,
        "FLG_TAMPER_DETECT": 0,
        "FLG_POWER_ON": 0,
        "FLG_POWER_BAT": 1,
        "FLG_ERR_TIME": 1,
        "FLG_CFG_DONE": 0
    }
}
```
The input and output data are for example purposes only and not related to the dashboard shown at the beginning of the guide. 
Before turning on the device, you can verify the functionality of programming code from [uplink_leaks_detector.json](/docs/samples/smartico/leaks-detector-lorawan/resources/uplink_leaks_detector.json) file. For this purpose, open the Test decoder function for Uplink Leaks Detector in the DATA CONVERTERS and copy the input data from this guide into **Payload content** field. Press **TEST** button then in **Output** field should appear decoding output data as shown on the figure (the REAL_TIME field displays the current date and time).

![image](/images/samples/smartico/leaks-detector-lorawan/verifying2.PNG)

## Step 4. Creation Leaks Detector Asset.
To be able to display data in the dashboard, you should first create an asset and add device 13123 in the RELATIONS, as shown in the figures.

![image](/images/samples/smartico/leaks-detector-lorawan/addAsset.PNG)

![image](/images/samples/smartico/leaks-detector-lorawan/addRelation.PNG)

## Step 5. Rule chain import and configuration.
In addition to meter readings, it is possible to monitor the status of the device. For example, you can get information about a low battery, opening the device case, exposure to a magnetic field, and others. This information is displayed in the Alarm widget. Therefore, you should set up Rule chain first. Import [alarms_leaks_detector.json](/docs/samples/smartico/leaks-detector-lorawan/resources/alarms_leaks_detector.json) file with alarms and save the configuration of the Rule chain in ThingsBoard. 

![image](/images/samples/smartico/leaks-detector-lorawan/alarm1.PNG)

Then configure Root Rule chain. You should add in Root Rule chain Alarms Leaks Detector as it shown on the figure.

![image](/images/samples/smartico/leaks-detector-lorawan/alarm2.PNG)

## Step 6. Dashboard import and configuration.
To display data to users, you need to create a dashboard that can be imported from [dashboard_leaks_detector.json](/docs/samples/smartico/leaks-detector-lorawan/resources/dashboard_leaks_detector.json) file.

![image](/images/samples/smartico/leaks-detector-lorawan/dashboard.PNG)

When importing a dashboard, it will be necessary to create an alias, as shown in the figure.

![image](/images/samples/smartico/leaks-detector-lorawan/alias.PNG)

If everything was done correctly, in DASHBOARD GROUPS → All you will see the new dashboard **Leaks Detector LoRaWAN Smartico “L2-LR”** that was provided at the beginning of the guide.

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}

## See also

Browse other [samples](/docs/samples) or explore guides related to main ThingsBoard features:

 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.

{% include templates/feedback.md %}

{% include socials.html %}

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}