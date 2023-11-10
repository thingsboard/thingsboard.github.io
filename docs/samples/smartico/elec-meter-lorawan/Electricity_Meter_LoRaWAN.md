---
layout: docwithnav
title: Electricity Three Phase Smart Meter "Smartico E307” telemetry upload
description: ThingsBoard IoT Platform sample for electricity data upload over MQTT using Smart Meter "Smartico E307”.
hidetoc: "true"
---

* TOC
{:toc}

# Electricity Three Phase Smart Meter "Smartico E307” telemetry upload
## Introduction
The three-phase Smart Electricity Meters “Smartico E307” is optimized for smart metering systems. It comes in many shapes and variants. The Smartico E307 is a true intelligent meter, able to store data in non-volatile memory and measure active/reactive energy in both consumed and delivered to the power grid. Main function is accuracy measure loop power grid parameters, including voltage, current, power, frequency and other parameters. The dashboard contains two states – Counter readings and Quality parameters. The figure shows states of dashboard with processed telemetry results.

Counter readings state of dashboard.

![image](/images/samples/smartico/elec-meter-lorawan/MainDash1.PNG)

Quality parameters state of dashboard.

![image](/images/samples/smartico/elec-meter-lorawan/MainDash2.PNG)

## Prerequisites
LoRaWAN technology is used to transfer data from the Electricity Meters “Smartico E307” to the ThingsBoard platform. This is the wireless communication technology that allows small amounts of data to be exchanged over a long distance. First of all, you need to configure the LoRaWAN server and make sure that data from the device goes to the server.  This guide uses [ChirpStack open-source LoRaWAN Network Server](https://www.chirpstack.io/application-server/). 
After finishing the server configuration on the Applications page, an entry with the device type should appear in the table.

![image](/images/samples/smartico/elec-meter-lorawan/Lora1.PNG)

For example, we connected a device with the serial number 0012778. With the correct configuration of the LoRaWAN server, we should see the data flow from the device. The frequency of data transmission from the device depends on the Electricity Meter settings.

![image](/images/samples/smartico/elec-meter-lorawan/Lora2.PNG)

To be able to receive data via the MQTT protocol, you need to integrate the [LoRaWAN server and the Mosquitto MQTT broker](https://www.chirpstack.io/application-server/integrations/mqtt/).
## Step 1. Creation UpLink Data Converters.
First, you should create the Uplink Data Converter according to the device protocol. The converter will decode incoming telemetry payload data from Electricity Meters “Smartico E307” that contains in encoded Base64 string to human readable, simplified ThingsBoard data format. Import [uplink_elec_meter.json](/docs/samples/smartico/elec-meter-lorawan/resources/uplink_elec_meter.json) file with Uplink data converter.

![image](/images/samples/smartico/elec-meter-lorawan/uplink.PNG)

## Step 2. Integration configuration.
To integrate Electricity Meters “Smartico E307” into ThingsBoard platform you should create a new integration as shown on the figure.

![image](/images/samples/smartico/elec-meter-lorawan/Integration.PNG)

Also below you should add the topic filter according to LoRaWAN server configuration (in this example ``` application/2/device/+/rx ``` ). In the Host and Port fields, enter the ip-address where the MQTT broker is installed and port for working with it.
## Step 3. Verifying the receipt of data from the device.
Connect Electricity Meter  to transfer information. If the integration was performed without errors, after the transmission of the first telemetry, a new device with the name “0012778” will appear in the DEVICE GROUPS → All. Also you can verify the input and output data, respectively, before and after conversion in DATA CONVERTERS → Uplink Elec meter → EVENTS.

![image](/images/samples/smartico/elec-meter-lorawan/verifying.PNG)

Input data from Electricity Meters looks like this:
```json
{
    "applicationID": "2",
    "applicationName": "Smartico_electric_meters",
    "deviceName": "0012778",
    "devEUI": "02aaaa02000031ea",
    "rxInfo": [{
        "gatewayID": "647fdafffe00d228",
        "uplinkID": "9d29d67f-8db2-4c7e-9fa8-b7f9bd5be9e6",
        "name": "tectelic_micro_lite_TECH",
        "rssi": -80,
        "loRaSNR": 5.2,
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
    "fCnt": 2202,
    "fPort": 15,
    "data": "QF8gJWwgSK4giMogyIYhQHEhgcshwTwiw1BBwABNNw=="
}
```
The payload is contained in the “data” field and encrypted in Base64. After decoding output data will look like this:
```json
{
    "deviceName": "0012778",
    "deviceType": "elecMeter",
    "attributes": {
        "integrationName": "Elec Meter"
    },
    "telemetry": {
        "REAL_TIME": "27.08.2020 09:51:49",
        "SN": "0012778",
        "deviceTypeTelemetry": "Smartico E307",
        "NAME_DEV": "Electricity Meter 'Smartico E307'",
        "VOLTAGE_A": 222.2,
        "VOLTAGE_B": 225,
        "VOLTAGE_C": 218.2,
        "CURRENT_A": 1.13,
        "CURRENT_B": 4.59,
        "CURRENT_C": 3.16,
        "FREQUENCY": 50,
        "POWER_FULL_SUMMARY": 197.67,
        "POWER_FULL_A": null,
        "POWER_FULL_B": null,
        "POWER_FULL_C": null,
        "POWER_ACTIVE_SUMMARY": null,
        "POWER_ACTIVE_A": null,
        "POWER_ACTIVE_B": null,
        "POWER_ACTIVE_C": null,
        "POWER_REACTIVE_SUMMARY": null,
        "POWER_REACTIVE_A": null,
        "POWER_REACTIVE_B": null,
        "POWER_REACTIVE_C": null,
        "VALUE": null,
        "ENERGY_ACTIVE_SUMMARY": null,
        "ENERGY_ACTIVE_T1": null,
        "ENERGY_ACTIVE_T2": null,
        "ENERGY_ACTIVE_T3": null,
        "ENERGY_ACTIVE_T4": null,
        "ENERGY_ACTIVE_T5": null,
        "ENERGY_ACTIVE_T6": null,
        "ENERGY_ACTIVE_T7": null,
        "ENERGY_ACTIVE_T8": null,
        "ENERGY_REACTIVE_SUMMARY": null,
        "ENERGY_REACTIVE_T1": null,
        "ENERGY_REACTIVE_T2": null,
        "ENERGY_REACTIVE_T3": null,
        "ENERGY_REACTIVE_T4": null,
        "ENERGY_REACTIVE_T5": null,
        "ENERGY_REACTIVE_T6": null,
        "ENERGY_REACTIVE_T7": null,
        "ENERGY_REACTIVE_T8": null
    }
}
```
The input and output data are for example purposes only and not related to the dashboard shown at the beginning of the guide. 
Before turning on the device, you can verify the functionality of programming code from [uplink_elec_meter.json](/docs/samples/smartico/elec-meter-lorawan/resources/uplink_elec_meter.json) file. For this purpose, open the **Test decoder function** for Uplink Elec meter in the DATA CONVERTERS and copy the input data from this guide into **Payload content** field. Press **TEST** button then in **Output** field should appear decoding output data as shown on the figure (the REAL_TIME field displays the current date and time).

![image](/images/samples/smartico/elec-meter-lorawan/verifyingUplink.PNG)

## Step 4. Creation Electricity Meter Asset.
To be able to display data in the dashboard, you should first create an asset and add device 0012778 in the RELATIONS, as shown in the figures.

![image](/images/samples/smartico/elec-meter-lorawan/asset1.PNG)

![image](/images/samples/smartico/elec-meter-lorawan/asset2.PNG)

## Step 5. Dashboard import and configuration.
To display data to users, you need to create a dashboard that can be imported from [dashboard_elec_meter.json](/docs/samples/smartico/elec-meter-lorawan/resources/dashboard_elec_meter.json) file. 

![image](/images/samples/smartico/elec-meter-lorawan/dash1.PNG)

When importing a dashboard, it will be necessary to create an alias, as shown in the figure.

![image](/images/samples/smartico/elec-meter-lorawan/dash2.PNG)

If everything was done correctly, in DASHBOARD GROUPS → All you will see the new dashboard **Electricity Three Phase Smart Meter "Smartico E307"** that was provided at the beginning of the guide.

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