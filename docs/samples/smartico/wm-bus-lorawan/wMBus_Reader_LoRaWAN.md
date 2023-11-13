---
layout: docwithnav
title: Water meter wM-Bus Reader LoRaWAN "Smartico WM-LR" telemetry upload
description: ThingsBoard IoT Platform sample for water meter data upload over MQTT using wM-Bus Reader LoRaWAN "Smartico WM-LR".
hidetoc: "true"
---

* TOC
{:toc}

# Water meter wM-Bus Reader LoRaWAN "Smartico WM-LR" telemetry upload
## Introduction
The device wM-Bus Reader LoRaWAN “Smartico WM-LR” is used in various fields of industry, utilities and automation for remote data collection from gas, water, electricity and heat meters with the help of the wM-Bus protocol and data transmission via LoRaWAN networks. Additionally, the device has an input for wired connection to the digital interface of Kamstrup meters as a standard. This input can also be used to count pulses. The design of the sensor in a waterproof housing allows external use. The sensor’s compact size allows installation in confined spaces, and special adapters provide reliable mounting to a pipe or a flat surface without opening the case. In this example, four water meters are connected to the device. The figure shows a dashboard with processed telemetry results.

![image](/images/samples/smartico/wm-bus-lorawan/mainDashboard.PNG)

## Prerequisites
LoRaWAN technology is used to transfer data from the wM-Bus Reader WM-LR to the ThingsBoard platform. This is the wireless communication technology that allows small amounts of data to be exchanged over a long distance. First of all, you need to configure the LoRaWAN server and make sure that data from the device goes to the server. This guide uses [ChirpStack open-source LoRaWAN Network Server](https://www.chirpstack.io/application-server/). 
After finishing the server configuration on the Applications page, an entry with the device type should appear in the table.

![image](/images/samples/smartico/wm-bus-lorawan/Lora1.PNG)

For example, we connected a device with the serial number 0000020. With the correct configuration of the LoRaWAN server, we should see the data flow from the device. The frequency of data transmission from the device depends on the wM-Bus Reader settings.

![image](/images/samples/smartico/wm-bus-lorawan/Lora2.PNG)

To be able to receive data via the MQTT protocol, you need to integrate the [LoRaWAN server and the Mosquitto MQTT broker](https://www.chirpstack.io/application-server/integrations/mqtt/).
## Step 1. Creation UpLink Data Converters.
First, you should create the Uplink Data Converter according to the device protocol. The converter will decode incoming telemetry payload data from wM-Bus Reader LoRaWAN “Smartico WM-LR” that contains in encoded Base64 string to human readable, simplified ThingsBoard data format. Import [uplink_wmbus_reader.json](/docs/samples/smartico/wm-bus-lorawan/resources/uplink_wmbus_reader.json) file with Uplink data converter.

![image](/images/samples/smartico/wm-bus-lorawan/converter.PNG)

## Step 2. Integration configuration.
To integrate wM-Bus Reader LoRaWAN “Smartico WM-LR” into ThingsBoard platform you should create a new integration as shown on the figure.

![image](/images/samples/smartico/wm-bus-lorawan/Integration.PNG)

Also below you should add the topic filter according to LoRaWAN server configuration (in this example ```application/3/device/+/rx```). In the Host and Port fields, enter the ip-address where the MQTT broker is installed and port for working with it.
## Step 3. Verifying the receipt of data from the device.
Connect wM-Bus Reader WM-LR to transfer information. If the integration was performed without errors, after the transmission of the first telemetry, a new device with the name “0000020” will appear in the DEVICE GROUPS → All. Also you can verify the input and output data, respectively, before and after conversion in DATA CONVERTERS → Uplink wM-Bus Reader → EVENTS.

![image](/images/samples/smartico/wm-bus-lorawan/Verifying.PNG)

It should be noted that readings from each meter come in separate packages. In this case, the time indicated on the dashboard corresponds to the time of the last package. The variable “existSerial” must contain the serial numbers of all meters that are connected to wM-Bus Reader. For example ```var existSerial=['66413314','65656691','66413313', '66413315'];```.
Input data from wM-Bus Reader looks like this:
```json
{
    "applicationID": "3",
    "applicationName": "Smartico_wmbus_readers",
    "deviceName": "0000020",
    "devEUI": "02aaaa0100000014",
    "rxInfo": [{
        "gatewayID": "647fdafffe00d228",
        "uplinkID": "14b77859-1e6c-4668-8eb3-73900e49a33c",
        "name": "tectelic_micro_lite_TECH",
        "rssi": -89,
        "loRaSNR": 7.5,
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
    "fCnt": 28,
    "fPort": 33,
    "data": "IAP1YwIAAAAATFo="
}
```
The payload is contained in the “data” field and encrypted in Base64. After decoding output data will look like this:
```json
{
    "deviceName": "0000020",
    "deviceType": "wM-Bus Reader",
    "attributes": {
        "integrationName": "wM-Bus Reader Integration"
    },
    "telemetry": {
        "REAL_TIME": "26.08.2020 16:38:14",
        "SERIAL1": "66413314",
        "SERIAL2": null,
        "SERIAL3": null,
        "SERIAL4": null,
        "WATER_WMBUS_VALUE1": 19.546,
        "WATER_WMBUS_VALUE2": null,
        "WATER_WMBUS_VALUE3": null,
        "WATER_WMBUS_VALUE4": null,
        "FLG_LOW_BAT": 0,
        "FLG_MOTION_DETECT": 0,
        "FLG_MAGNET_DETECT": 0,
        "FLG_TAMPER_DETECT": 0,
        "FLG_POWER_ON": 0,
        "FLG_POWER_BAT": 1,
        "FLG_ERR_TIME": 0,
        "FLG_CFG_DONE": 0
    }
}
```
The input and output data are for example purposes only and not related to the dashboard shown at the beginning of the guide. 
Before turning on the device, you can verify the functionality of programming code from [uplink_wmbus_reader.json](/docs/samples/smartico/wm-bus-lorawan/resources/uplink_wmbus_reader.json) file. For this purpose, open the **Test decoder function** for Uplink wM-Bus Reader in the DATA CONVERTERS and copy the input data from this guide into **Payload content** field. Press **TEST** button then in **Output** field should appear decoding output data as shown on the figure (the REAL_TIME field displays the current date and time).

![image](/images/samples/smartico/wm-bus-lorawan/verifying2.PNG)

## Step 4. Creation wM-Bus Reader Asset.
To be able to display data in the dashboard, you should first create an asset and add device 0000020 in the RELATIONS, as shown in the figures.

![image](/images/samples/smartico/wm-bus-lorawan/asset1.PNG)

![image](/images/samples/smartico/wm-bus-lorawan/asset2.PNG)

## Step 5. Rule chain import and configuration.
In addition to meter readings, it is possible to monitor the status of the device. For example, you can get information about a low battery, opening the device case, exposure to a magnetic field, and others. This information is displayed in the Alarm widget. Therefore, you should set up Rule chain first. Import [alarms_wmbus_reader.json](/docs/samples/smartico/wm-bus-lorawan/resources/alarms_wmbus_reader.json) file with alarms and save the configuration of the Rule chain in ThingsBoard.

![image](/images/samples/smartico/wm-bus-lorawan/alarms1.PNG)

Then configure Root Rule chain. You should add in Root Rule chain Alarms wMBus Reader as it shown on the figure.

![image](/images/samples/smartico/wm-bus-lorawan/alarms2.PNG)

## Step 6. Dashboard import and configuration.
To display data to users, you need to create a dashboard that can be imported from [dashboard_wmbus_reader.json](/docs/samples/smartico/wm-bus-lorawan/resources/dashboard_wmbus_reader.json)  file. 

![image](/images/samples/smartico/wm-bus-lorawan/dash1.PNG)

When importing a dashboard, it will be necessary to create an alias, as shown in the figure.

![image](/images/samples/smartico/wm-bus-lorawan/dash2.PNG)

If everything was done correctly, in DASHBOARD GROUPS → All you will see the new dashboard **Water meter wM-Bus Reader LoRaWAN “Smartico WM-LR”** that was provided at the beginning of the guide.

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
