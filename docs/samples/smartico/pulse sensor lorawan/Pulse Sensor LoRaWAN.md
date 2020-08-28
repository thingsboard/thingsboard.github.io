# Water meter Pulse Sensor LoRaWAN "Smartico P22-LR" telemetry upload
## Introduction
The device Pulse Sensor LoRaWAN “Smartico P22-LR” is used in various fields of industry, utilities and automation for remote data collection and transmission via LoRaWAN networks. The device has two universal pulse inputs with control of the integrity of the communication. In this example, two water meters are connected to the device. The figure shows a dashboard with processed telemetry results.

![image](/images/samples/smartico/pulse-sensor-lorawan/dashboard.png)

## Prerequisites
LoRaWAN technology is used to transfer data from the Pulse Sensor P22-LR to the ThingsBoard platform. This is the wireless communication technology that allows small amounts of data to be exchanged over a long distance. First of all, you need to configure the LoRaWAN server and make sure that data from the device goes to the server.  This guide uses ChirpStack open-source LoRaWAN Network Server (https://www.chirpstack.io/application-server/).
After finishing the server configuration on the Applications page, an entry with the device type should appear in the table.

![image](/images/samples/smartico/pulse-sensor-lorawan/Lorawan1.PNG)
