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

![image](/images/samples/smartico/leaks-detector-lorawan/import uplink.PNG)
