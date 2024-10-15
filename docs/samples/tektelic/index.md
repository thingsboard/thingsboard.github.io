---
layout: docwithnav
title: Connect Tektelic LoRaWAN sensors using TEKTELIC KONA Core Network Server
description: Learn how to get data from Tektelic LoRaWAN sensors at ThingsBoard

---

* TOC
{:toc}

[Tektelic](https://tektelic.com) is a premier supplier of LoRaWAN® IoT Gateways, Sensors and custom applications.
This guide describes how to stream data from TEKTELIC KONA Core Network Server to ThingsBoard.

### Prerequisites
 A gateway and a sensor that is designed to work in EU868 frequency band will be used.

 To start it necessary to have:
 - [Smart Room Sensor](https://tektelic.com/products/sensors/comfort-base-smart-room-sensor/).
 - [KONA Micro IoT Gateway](https://tektelic.com/products/gateways/kona-micro-iot-gateway/).
 - Customer account at [EU instance](https://lorawan-ns-eu.tektelic.com) TEKTELIC KONA Core Network Server.
 To get an account contact [Tektelic support](mailto:support@tektelic.com).

 The common scheme of the guide setup is the next:

 <img src="/images/samples/tektelic/setup_scheme.png" width="800" alt="setup scheme">

### Step 1. Register hardware in Network Server
##### Step 1.1 Add a gateway
 - Create a new gateway group.
 - Create a new gateway in the group. The GW-ID could be found at a sticker at the gateway body.
 - Change the gateway credentials, below is the format of default username and password:
 - Username: TEK00XXYY (where XXYY represents last 4 digits of MAC address).
 - Password: 9-Digit serial number of the gateway.

 Network Server provides a predefined list of the gateways and here is using Kona Micro EU GW model.
 You also could create a new one gateway model, set a frequency band and number of channels according to a gateway specification.

 <img data-gifffer="/images/samples/tektelic/add_a_gateway.gif" width="1000" alt="add a gateway">

 Tektelic gateways are supplied with a predefined Network Server address - [lorawan-ns-eu.tektelic.com](https://lorawan-ns-eu.tektelic.com) for EU868 gateways and [lorawan-ns-na.tektelic.com](https://lorawan-ns-na.tektelic.com) for US915 gateways.
 After a gateway was created at Network Server and connected to the Internet, its status is set to *Online*.
 The gateway's *STATISTICS* tab is updating periodically and shows how many packets were sent and received through a radio channel.

 <img src="/images/samples/tektelic/gateway_statistics.png" width="800" alt="gateway statistics">

##### Step 1.2 Add a sensor
 - Create a new application, for example, *Local sensors*.
 - Create a new device in the application.
Smart Room Sensor has a sticker with QR code with data required by Network Server.

 <img src="/images/samples/tektelic/smart_room_sensor_QR.png"width="200" alt="smart room sensor QR">

 QR code contains Device EUI and Application EUI values.

 <img src="/images/samples/tektelic/QR_scan_result.png" width="200" alt="QR scan result">

 Where *647FDA00000042F0* is Device EUI and *647FDA8010000100* is Application EUI.
 Tektelic provides a hard copy containing commissioning information with shipment of sensors. If you don’t find it, then contact [Tektelic support](mailto:support@tektelic.com)

 <img data-gifffer="/images/samples/tektelic/add_a_sensor.gif" width="1000" alt="add a sensor">

 After the sensor is provisioned, it is necessary to turn it on to get LoRa packets in Network Server.
 The Smart Room Sensor will turn on after pulling out a protecting film. After that operation, the sensor will be supplied from a battery installed at a factory.
 As a result, join request-accept packets will be displayed in the *REAL-TIME PACKETS* tab.
 And, later on, uplink and downlink will be displayed too.

 <img src="/images/samples/tektelic/sensor_packets.png" width="800" alt="sensor packets">

 Smart Room Sensor sends the uplinks periodically, but you can trigger an uplink with a magnet.
 It is enough to bring closer a magnet to the sensor body.
 Network Server shows packets in encoded Base64 form. To decode a packet and see the whole LoRa packet payload, including LoRa related data and the sensor data itself, you could use a free LoRaWAN 1.0.x packet decoder.
 The decoder requires *Application* and *Network* session keys could be found in the *ACTIVATION* tab.

 <img src="/images/samples/tektelic/sensor_activation_tab.png" width="800" alt="sensor activation tab">

 Be aware, *Application* and *Network* session keys are changing whenever a sensor has been rejoined.
 Smart Room Sensor is rejoining every time after the battery has been disconnected.
### Step 2. Configure integration with ThingsBoard
 ThingsBoard provides [MQTT Gateway API](/docs/reference/gateway-mqtt-api/).
 Network Server integration, in turn, uses this MQTT Gateway API.
 So sensors and gateways will be created automatically at ThingsBoard side.
##### Step 2.1 Add a gateway device in ThingsBoard
 - Create a new device in ThingsBoard. Just for convenience, let’s set its type as *ns_integration*, the type name doesn't affect the functionality.
 *Is gateway* checkbox has to be set to make a device using [MQTT Gateway API](/docs/reference/gateway-mqtt-api/).
 Please don’t confuse gateway-device in ThingsBoard with a LoRa gateway, it’s just name matching.
 It’s necessary to copy the device access token to use it in the next step.

 <img src="/images/samples/tektelic/tb_gateway.png" width="800" alt="gateway">

##### Step 2.2 Add an integration in Network Server
 Open *Local sensors* application in Network Server and click *MANAGE INTEGRATIONS* button.
 Now it's necessary to create a new integration with a ThingsBoard.
 Click the *Add integration* icon in the right top corner and set the next fields:
 - *Name* - integration name could be any.
 - *Type* - ThingsBoard because of obvious reasons.
 - *Data Converter* - an appropriate Network Server converter.
 - *Application Address* - ThingsBoard instance address without http or https prefix.
 - *Token* - the token copied in Step 2.1.

 <img src="/images/samples/tektelic/ns_integration.png" width="800" alt="ns integration">

 Leave the rest of the fields with default values.

### Step 3. Integration verification
 After the integration has been created, wait for a new uplink (or trigger it) from the sensor.
 **Only after a new uplink** Network Server, through [MQTT Gateway API](/docs/reference/gateway-mqtt-api/), will create new devices in ThingsBoard.
 In ThingsBoard open device-gateway from step 2.1, go to the *RELATIONS* tab, and select outbound relations with a direction *From*.
 There should be present the gateway and the sensor added in Network Server at Step 1.1 and Step 1.2

 <img src="/images/samples/tektelic/tb_from_relations.png" width="1000" alt="from relations">
 <br>
 These devices will be displayed with an appropriate type:
 - *CLASS_A* - the sensor from step 1.2.
 Type it is set by Network Sensor and corresponds to LoRaWAN class in which Smart Room Sensor is working.
 - *Gateway* - the gateway from step 1.1.

 Open the sensor's *LATEST TELEMETRY* tab, it will contain data that Network Server sent in the last message.
 Part of the data (*nsGateway*, *nsRssi*, *nsFPort*, for example) is related to LoRa, to Network Server, and to the gateway which receives an uplink.
 The rest of the data is added by Network Server converter (in our case - by Tektelic Home Sensor from Step 2.2), and it is related to the sensor's payload (*humidity*, *accelerometer*, *Impact*, etc.).
 This part of telemetry data depends on Network Server converter used for a ThingsBoard integration and how that converter parses the sensor's payload (array of bytes) into JSON at Network Server side.
 So if you are using another model of the sensor, please take it into account.
 <br>
 Once integration verification passed successfully, the received telemetry is available for visualization.
 You can import the predefined dashboard to see the data. <a href="./resources/network_server_dashboard.json" download>Click to download.</a>

 <img data-gifffer="/images/samples/tektelic/import_dashboard.gif" width="1000" alt="import dashboard">


## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
