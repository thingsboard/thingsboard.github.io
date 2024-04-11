---
layout: docwithnav
title: Gas Shutoff Valve LoRaWAN “Smartico V-LR” telemetry upload
description: ThingsBoard IoT Platform sample for valve state data upload over MQTT using Gas Shutoff Valve LoRaWAN “Smartico V-LR”.
hidetoc: "true"
---

* TOC
{:toc}

# Gas Shutoff Valve LoRaWAN “Smartico V-LR” telemetry upload
## Introduction
The Gas Shutoff Valve LoRaWAN “Smartico V-LR” was designed for remotely shut off the gas supply in the low pressure gas network. The shut-off valve was made with autonomous power supply. It has a special valve activation mechanism that allows safe recovery of gas supply. Places of installation of protective seals are provided to prevent unauthorized access to the power source and exclude the possibility of dismantling the valve from the connecting gas pipeline. The figure shows a dashboard with processed telemetry results.

![image](/images/samples/smartico/gas-valve-lorawan/MainDash.png)

## Prerequisites
LoRaWAN technology is used to transfer data from the Gas Valve V-LR to the ThingsBoard platform. This is the wireless communication technology that allows small amounts of data to be exchanged over a long distance. First of all, you need to configure the LoRaWAN server and make sure that data from the device goes to the server. This guide uses [ChirpStack open-source LoRaWAN Network Server](https://www.chirpstack.io/application-server/). 
After finishing the server configuration on the Applications page, an entry with the device type should appear in the table.

![image](/images/samples/smartico/gas-valve-lorawan/Lora1.PNG)

For example, we connected a device with the serial number 0000129. With the correct configuration of the LoRaWAN server, we should see the data flow from the device on the “DEVICE DATA” page. The frequency of data transmission from the device depends on the Gas Valve settings.

![image](/images/samples/smartico/gas-valve-lorawan/Lora2.PNG)

To be able to receive data via the MQTT protocol, you need to integrate the [LoRaWAN server and the Mosquitto MQTT broker](https://www.chirpstack.io/application-server/integrations/mqtt/).
## Step 1. Creation UpLink Data Converters.
First, you should create the Uplink Data Converter according to the device protocol. The converter will decode incoming telemetry payload data from Gas Shutoff Valve LoRaWAN “Smartico V-LR” that contains in encoded Base64 string to human readable, simplified ThingsBoard data format. Import [uplink_gas_valve.json](/docs/samples/smartico/gas-valve-lorawan/resources/uplink_gas_valve.json) file with Uplink data converter .

![image](/images/samples/smartico/gas-valve-lorawan/converter.PNG)

## Step 2. Integration configuration.
To integrate Gas Shutoff Valve LoRaWAN “Smartico V-LR” into ThingsBoard platform you should create a new integration as shown on the figure.

![image](/images/samples/smartico/gas-valve-lorawan/integration.PNG)

Also below you should add the topic filter according to LoRaWAN server configuration (in this example ```application/6/device/+/rx```). In the Host and Port fields, enter the ip-address where the MQTT broker is installed and port for working with it.
## Step 3. Verifying the receipt of data from the device.
Connect Gas Valve V-LR to transfer information. If the integration was performed without errors, after the transmission of the first telemetry, a new device with the name “0000129” will appear in the DEVICE GROUPS → All. Also you can verify the input and output data, respectively, before and after conversion in DATA CONVERTERS → Uplink Gas Valve → EVENTS.

![image](/images/samples/smartico/gas-valve-lorawan/Verifying.PNG)

Input data from Gas Valve looks like this:
```json
{
    "applicationID": "6",
    "applicationName": "Smartico_gaz_valves",
    "deviceName": "VALVE_0000129",
    "devEUI": "02aaaa0100000081",
    "rxInfo": [{
        "gatewayID": "647fdafffe00d228",
        "uplinkID": "bebb9711-3fe0-4ddd-ad16-9815af9c0f42",
        "name": "tectelic_micro_lite_TECH",
        "rssi": -72,
        "loRaSNR": 9.8,
        "location": {
            "latitude": 48.44229794818326,
            "longitude": 35.014479160308845,
            "altitude": 144
        }
    }],
    "txInfo": {
        "frequency": 868100000,
        "dr": 0
    },
    "adr": true,
    "fCnt": 12,
    "fPort": 2,
    "data": "BkABAACB"
}
```
The payload is contained in the “data” field and encrypted in Base64. After decoding output data will look like this:
```json
{
    "deviceName": "0000129",
    "deviceType": "Gas Valve",
    "attributes": {
        "integrationName": "Gas Valve"
    },
    "telemetry": {
        "NAME_DEV": "Gas Shutoff Valve LoRaWAN 'Smartico V-LR'",
        "REAL_TIME": "26.08.2020 10:25:20",
        "SERIAL": "0000129",
        "VALVE_MODEL": "Gas",
        "STS_VALVE": "Close",
        "STS_VALVE_CODE": 1,
        "FLG_LOW_BAT": 0,
        "FLG_MOTION_DETECT": 0,
        "FLG_MAGNET_DETECT": 0,
        "FLG_TAMPER_DETECT": 0,
        "FLG_POWER_ON": 0,
        "FLG_POWER_BAT": 0,
        "FLG_ERR_TIME": 1,
        "FLG_CFG_DONE": 0
    }
}
```
The input and output data are for example purposes only and not related to the dashboard shown at the beginning of the guide. 
Before turning on the device, you can verify the functionality of programming code from [uplink_gas_valve.json](/docs/samples/smartico/gas-valve-lorawan/resources/uplink_gas_valve.json) file. For this purpose, open the **Test decoder function** for Uplink Gas Valve in the DATA CONVERTERS and copy the input data from this guide into **Payload content** field. Press **TEST** button then in **Output** field should appear decoding output data as shown on the figure (the REAL_TIME field displays the current date and time).

![image](/images/samples/smartico/gas-valve-lorawan/VerifyingUplink.PNG)

## Step 4. Creation Gas Valve Asset.
To be able to display data in the dashboard, you should first create an asset and add device 0000129 in the RELATIONS, as shown in the figures.

![image](/images/samples/smartico/gas-valve-lorawan/asset.PNG)

![image](/images/samples/smartico/gas-valve-lorawan/asset2.PNG)

## Step 5. Rule chain import and configuration.
In addition to meter readings, it is possible to monitor the status of the device. For example, you can get information about a low battery, opening the device case, exposure to a magnetic field, and others. This information is displayed in the Alarm widget. Therefore, you should set up Rule chain first. Import [alarms_gas_valve.json](/docs/samples/smartico/gas-valve-lorawan/resources/alarms_gas_valve.json) file with alarms  and save the configuration of the Rule chain in ThingsBoard.

![image](/images/samples/smartico/gas-valve-lorawan/alarm1.PNG)

Then configure Root Rule chain. You should add in Root Rule chain Alarms Gas Valve as it shown on the figure.

![image](/images/samples/smartico/gas-valve-lorawan/alarm2.PNG)

## Step 6. Dashboard import and configuration.
To display data to users, you need to create a dashboard that can be imported from [dashboard_gas_valve.json](/docs/samples/smartico/gas-valve-lorawan/resources/dashboard_gas_valve.json) file.

![image](/images/samples/smartico/gas-valve-lorawan/dashboard1.PNG)

When importing a dashboard, it will be necessary to create an alias, as shown in the figure.

![image](/images/samples/smartico/gas-valve-lorawan/dashboard2.PNG)

If everything was done correctly, in DASHBOARD GROUPS → All you will see the new dashboard **Gas Shutoff Valve LoRaWAN “Smartico V-LR”** that was provided at the beginning of the guide.

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