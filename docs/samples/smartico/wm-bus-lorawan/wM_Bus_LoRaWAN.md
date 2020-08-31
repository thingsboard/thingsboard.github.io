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
First, you should create the Uplink Data Converter according to the device protocol. The converter will decode incoming telemetry payload data from wM-Bus Reader LoRaWAN “Smartico WM-LR” that contains in encoded Base64 string to human readable, simplified ThingsBoard data format. Import [uplink_wmbus_reader.json](uplink_wmbus_reader.json) file with Uplink data converter .
