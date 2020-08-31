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
## Step 1. Creation UpLink Data Converters
First, you should create the Uplink Data Converter according to the device protocol. The converter will decode incoming telemetry payload data from Gas Shutoff Valve LoRaWAN “Smartico V-LR” that contains in encoded Base64 string to human readable, simplified ThingsBoard data format. Import [uplink_gas_valve.json](/docs/samples/smartico/gas-meter-lorawan/resources/uplink_gas_valve.json) file with Uplink data converter .
