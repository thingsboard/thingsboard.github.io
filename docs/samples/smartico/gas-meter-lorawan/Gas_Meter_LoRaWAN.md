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
## Step 1. Creation UpLink Data Converters
First, you should create the Uplink Data Converter according to the device protocol. The converter will decode incoming telemetry payload data from Ultrasonic Residential Smart Gas Meter LoRaWAN “Smartico G-1.6” that contains in encoded Base64 string to human readable, simplified ThingsBoard data format. Import [uplink_gas_meter.json](docs/samples/smartico/gas-meter-lorawan/resources/uplink_gas_meter.json) file with Uplink data converter.
