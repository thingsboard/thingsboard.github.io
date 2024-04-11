---
layout: docwithnav
title: Ultrasonic Residential Smart Gas Meter LoRaWAN “Smartico G-1.6” telemetry upload
description: ThingsBoard IoT Platform sample for gas data upload over MQTT using Smart Gas Meter LoRaWAN “Smartico G-1.6”.
hidetoc: "true"
---

* TOC
{:toc}

# Ultrasonic Residential Smart Gas Meter LoRaWAN “Smartico G-1.6” telemetry upload
## Introduction
Residential gas meters “Smartico” are produced by the size range G-1.6, G-2.5, G-4, G-6 and are used to measure the volume of used natural and liquefied gas, with conversion to standard reference at a temperature of 20 °C. The meter is made in a compact design, which has no moving mechanical parts and allows mounting in a confined space. The meter measurement system provides high-precision metrological characteristics. The meter provides the possibility visual control and wireless data transmission by license-free frequency range using LoRaWAN technology.  The figure shows a dashboard with processed telemetry results.

![image](/images/samples/smartico/gas-meter-lorawan/MainDashboard.png)

## Prerequisites
LoRaWAN technology is used to transfer data from the Gas Meter G-1.6 to the ThingsBoard platform. This is the wireless communication technology that allows small amounts of data to be exchanged over a long distance. First of all, you need to configure the LoRaWAN server and make sure that data from the device goes to the server. This guide uses [ChirpStack open-source LoRaWAN Network Server](https://www.chirpstack.io/application-server/). 
After finishing the server configuration on the Applications page, an entry with the device type should appear in the table.

![image](/images/samples/smartico/gas-meter-lorawan/lora1.PNG)

For example, we connected a device with the serial number 12676. With the correct configuration of the LoRaWAN server, we should see the data flow from the device. The frequency of data transmission from the device depends on the Gas Meter settings.

![image](/images/samples/smartico/gas-meter-lorawan/Lora2.PNG)

To be able to receive data via the MQTT protocol, you need to integrate the [LoRaWAN server and the Mosquitto MQTT broker](https://www.chirpstack.io/application-server/integrations/mqtt/).
## Step 1. Creation UpLink Data Converters.
First, you should create the Uplink Data Converter according to the device protocol. The converter will decode incoming telemetry payload data from Ultrasonic Residential Smart Gas Meter LoRaWAN “Smartico G-1.6” that contains in encoded Base64 string to human readable, simplified ThingsBoard data format. Import [uplink_gas_meter.json](/docs/samples/smartico/gas-meter-lorawan/resources/uplink_gas_meter.json) file with Uplink data converter.

![image](/images/samples/smartico/gas-meter-lorawan/convert.PNG)

## Step 2. Integration configuration.
To integrate Ultrasonic Residential Smart Gas Meter LoRaWAN “Smartico G-1.6” into ThingsBoard platform you should create a new integration as shown on the figure.

![image](/images/samples/smartico/gas-meter-lorawan/integration.PNG)

Also below you should add the topic filter according to LoRaWAN server configuration (in this example ```application/1/device/+/rx```). In the Host and Port fields, enter the ip-address where the MQTT broker is installed and port for working with it.
## Step 3. Verifying the receipt of data from the device.
Connect Gas Meter to transfer information. If the integration was performed without errors, after the transmission of the first telemetry, a new device with the name “012676” will appear in the DEVICE GROUPS → All. Also you can verify the input and output data, respectively, before and after conversion in DATA CONVERTERS → Uplink Gas Meter → EVENTS.

![image](/images/samples/smartico/gas-meter-lorawan/verify.PNG)

Input data from Gas Meter looks like this:
```json
{
    "applicationID": "1",
    "applicationName": "Smartico_gas_meters",
    "deviceName": "12676",
    "devEUI": "02aaaa0200003184",
    "rxInfo": [{
        "gatewayID": "647fdafffe00d228",
        "uplinkID": "bd949c88-fd1e-4c97-bbef-ad6412139d89",
        "name": "Kona_micro_lite",
        "rssi": -65,
        "loRaSNR": 6,
        "location": {
            "latitude": 48.44229794818326,
            "longitude": 35.014479160308845,
            "altitude": 144
        }
    }],
    "txInfo": {
        "frequency": 868300000,
        "dr": 0
    },
    "adr": true,
    "fCnt": 742,
    "fPort": 2,
    "data": "BAwMAQAxhAAAA1YK4w=="
}
```
The payload is contained in the “data” field and encrypted in Base64. After decoding output data will look like this:
```json
{
    "deviceName": "12676",
    "deviceType": "Gas Meter",
    "attributes": {
        "integrationName": "Gas Meter"
    },
    "telemetry": {
        "gasMeter": 0.854,
        "temperature": 27.87,
 	"REAL_TIME": "26.08.2020 15:02:39",
        "SN": "12676",
        "FLG_LOW_BAT": 0,
        "FLG_MOTION_DETECT": 0,
        "FLG_MAGNET_DETECT": 1,
        "FLG_TAMPER_DETECT": 1,
        "STS_VALVE": 0,
        "FLG_ERR_OVR": 0,
        "FLG_ERR_REVERSE": 0,
        "FLG_ERR_SENSOR": 0,
        "FLG_ERR_GAS": 1,
        "FLG_ERR_TIME": 1,
        "FLG_POWER_ON": 0,
        "FLG_LOCK": 0,
        "FLG_CFG_DONE": 0
    }
}
```
The input and output data are for example purposes only and not related to the dashboard shown at the beginning of the guide. 
Before turning on the device, you can verify the functionality of programming code from [uplink_gas_meter.json](/docs/samples/smartico/gas-meter-lorawan/resources/uplink_gas_meter.json) file. For this purpose, open the **Test decoder function** for Uplink Gas Meter in the DATA CONVERTERS and copy the input data from this guide into **Payload content** field. Press **TEST** button then in **Output** field should appear decoding output data as shown on the figure (the REAL_TIME field displays the current date and time).

![image](/images/samples/smartico/gas-meter-lorawan/verify1.PNG)

## Step 4. Creation Pulse Sensor Asset.
To be able to display data in the dashboard, you should first create an asset and add device 012685 in the RELATIONS, as shown in the figures.

![image](/images/samples/smartico/gas-meter-lorawan/asset1.PNG)

![image](/images/samples/smartico/gas-meter-lorawan/asset2.PNG)

## Step 5. Rule chain import and configuration.
In addition to meter readings, it is possible to monitor the status of the device. For example, you can get information about a low battery, opening the device case, exposure to a magnetic field, and others. This information is displayed in the Alarm widget. Therefore, you should set up Rule chain first. Import [alarms_gas_meter.json](/docs/samples/smartico/gas-meter-lorawan/resources/alarms_gas_meter.json) file with alarms and save the configuration of the Rule chain in ThingsBoard.

![image](/images/samples/smartico/gas-meter-lorawan/alarm1.PNG)

Then configure Root Rule chain. You should add in Root Rule chain Alarms Gas Meter as it shown on the figure.

![image](/images/samples/smartico/gas-meter-lorawan/alarm2.PNG)

## Step 6. Dashboard import and configuration.
To display data to users, you need to create a dashboard that can be imported from the [dashboard_gas_meter.json](/docs/samples/smartico/gas-meter-lorawan/resources/dashboard_gas_meter.json) file.

![image](/images/samples/smartico/gas-meter-lorawan/dashboard1.PNG)

When importing a dashboard, it will be necessary to create an alias, as shown in the figure.

![image](/images/samples/smartico/gas-meter-lorawan/dashboard2.PNG)

If everything was done correctly, in DASHBOARD GROUPS → All you will see the new dashboard **Ultrasonic Residential Smart Gas Meter LoRaWAN "Smartico G-1.6"** that was provided at the beginning of the guide.

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