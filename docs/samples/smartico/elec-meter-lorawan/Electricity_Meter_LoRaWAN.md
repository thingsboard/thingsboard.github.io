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
Connect Electricity Meter  to transfer information. If the integration was performed without errors, after the transmission of the first telemetry, a new device with the name “0012778” will appear in the DEVICE GROUPS →All. Also you can verify the input and output data, respectively, before and after conversion in DATA CONVERTERS → Uplink Elec meter → EVENTS.

