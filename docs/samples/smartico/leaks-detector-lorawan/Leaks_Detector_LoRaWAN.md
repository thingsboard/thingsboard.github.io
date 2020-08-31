# Leaks Detector LoRaWAN “Smartico L2-LR” telemetry upload
## Introduction
The device Leaks Detector LoRaWAN “Smartico L2-LR” is used in various fields of industry, utilities and automation for remote data collection, leaks detection and data transmission via LoRaWAN networks. The device implements two zone control using passive leak sensors, which provide high energy efficiency solutions. The design of the sensor in a waterproof housing allows external use. The figure shows a dashboard with processed telemetry results.

![image](/images/samples/smartico/leaks-detector-lorawan/mainDash.PNG)

## Prerequisites
LoRaWAN technology is used to transfer data from the Leaks Detector L2-LR to the ThingsBoard platform. This is the wireless communication technology that allows small amounts of data to be exchanged over a long distance. First of all, you need to configure the LoRaWAN server and make sure that data from the device goes to the server.  This guide uses [ChirpStack open-source LoRaWAN Network Server](https://www.chirpstack.io/application-server/). 
After finishing the server configuration on the Applications page, an entry with the device type should appear in the table.
