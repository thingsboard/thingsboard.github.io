---
layout: docwithnav-gw
title: BACnet Connector Configuration
description: BACnet protocol support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

The BACnet connector is a way to read and write some basic objects and properties in BACnet IP device.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this connector.  
We will describe the connector configuration below.

{% capture difference %}
**Please note:**
If you are new to IoT Gateway, use the "Basic" configuration mode. If you are familiar with configuring IoT Gateway, you can use the "Advanced" configuration mode.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Connector configuration

Connector configuration is a UI form that contains information on how to connect to the BACnet device, how to 
process the data and other service features. Let's take a comprehensive look at all the available settings. 
We will go through each option in detail to ensure that we thoroughly understand their functions and implications. 
By doing so, we can make well-informed decisions about which settings will best suit our needs and preferences.

## Section "General"

This configuration section contains general connector settings, such as:

- **Name** - connector name used for logs and saving to persistent devices;
- Logs configuration:
  - **Enable remote logging** - enables remote logging for the connector;
  - **Logging level** - logging level for local and remote logs: INFO, DEBUG, WARNING, ERROR, CRITICAL, NONE, TRACE;
- **Send data only on change** - sends data only if it has changed since the last check, otherwise – data will be sent after every check;
- **Report strategy** - strategy for sending data to ThingsBoard:
  - **Report period** - period for sending data to ThingsBoard in milliseconds;
  - **Type** - type of the report strategy:
    - **On report period** - sends data to ThingsBoard after the report period;
    - **On value change** - sends data to ThingsBoard when the value changes;
    - **On value change or report period** - sends data to ThingsBoard when the value changes or after the report period;
    - **On received** - sends data to ThingsBoard after receiving data from the device (default strategy).

{% capture difference %}
Additional information about the report strategy can be found [here](/docs/iot-gateway/features-overview/report-strategy){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/bacnet-connector/bacnet-general-basic-1-ce.png)

{% capture difference %}
The settings are the same for both the basic and advanced configurations.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Section "Application"

Configuration in this section is used to configure the gateway in the BACnet network.

{% capture applicationsection %} 
Basic%,%basic%,%templates/iot-gateway/bacnet-connector/bacnet-application-section-basic.md%br% 
Advanced%,%advanced%,%templates/iot-gateway/bacnet-connector/bacnet-application-section-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="applicationsection" toggle-spec=applicationsection %}

## Section "Devices"

This configuration section contains an array of BACnet devices that can be connected to the connector and send data.
Any BACnet device not included in this array will be rejected by the connector.

### Subsection "Device"

{% capture applicationsection %} 
Basic%,%basic%,%templates/iot-gateway/bacnet-connector/bacnet-device-subsection-basic.md%br% 
Advanced%,%advanced%,%templates/iot-gateway/bacnet-connector/bacnet-device-subsection-advanced.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="applicationsection" toggle-spec=applicationsection %}

#### Subsection "Time series" and "Attributes"

This configuration section includes the parameters for handling incoming data.

{% capture subsectiondevicedataconversion %}
Basic<small></small>%,%basic%,%templates/iot-gateway/bacnet-connector/device-time-series-and-attributes-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/bacnet-connector/device-time-series-and-attributes-advanced-section.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="subsectiondevicedataconversion" toggle-spec=subsectiondevicedataconversion %}

#### Subsection "Attribute updates"

This configuration subsection is optional.

ThingsBoard allows the provisioning of device attributes and fetches some of them from the device application. 
You can treat this as a remote configuration for devices, enabling them to request shared attributes from 
ThingsBoard. See [user guide](/docs/user-guide/attributes/) for more details.

{% capture subsectiondeviceattrupdates %}
Basic<small></small>%,%basic%,%templates/iot-gateway/bacnet-connector/device-attribute-updates-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/bacnet-connector/device-attribute-updates-advanced-section.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="subsectiondeviceattrupdates" toggle-spec=subsectiondeviceattrupdates %}

#### Subsection "RPC methods"

This configuration subsection is optional.

ThingsBoard allows sending RPC commands to devices connected directly to ThingsBoard or via Gateway.

{% capture subsectiondevicerpc %}
Basic<small></small>%,%basic%,%templates/iot-gateway/bacnet-connector/device-rpc-basic-section.md%br%
Advanced<small></small>%,%advanced%,%templates/iot-gateway/bacnet-connector/device-rpc-advanced-section.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="subsectiondevicerpc" toggle-spec=subsectiondevicerpc %}

Additionally, every telemetry and attribute parameter comes with a built-in SET RPC method out of the box, eliminating the need for 
manual configuration. To use them, make sure you set all the required parameters (for the BACnet Connector, 
these include: **objectType**, **objectId**, **propertyId**, and **value** -- only if RPC method name is "**set**"). 
See [the guide](/docs/iot-gateway/guides/how-to-use-get-set-rpc-methods).

## (Examples) Device name expression and device profile expression

Let’s review more examples of device name expression and device profile expression fields.

These fields allow for the dynamic construction of a formatted device name/profile using values extracted from a JSON object. 
You can specify variables to access the relevant fields in the JSON.

You can use the following variables to extract specific device information:
- **objectName** - extracts the device's object name (e.g., "Main Controller");
- **vendorId** - extracts the device's vendor ID, typically a numeric identifier representing the manufacturer (e.g., "1234");
- **objectId** - extracts the device's unique object identifier (e.g., "999");
- **address** - extracts the device's network address (e.g., "192.168.1.1").

**Examples:**
- "**Device ${objectName}**" If the objectName variable exists and contains "**objectName": "Main Controller**", 
  the device on platform will have the following name: **Device Main Controller**;
- "**Vendor: ${vendorId}**" If the vendorId variable exists and contains **"vendorId": 1234**, the device on platform 
  will have the following name: **Vendor: 1234**;
- "**Device ID: ${objectId} at ${address}**" If the objectId variable exists and contains **"vendorId": 999** and 
  address variable exists and contains **"address": "192.168.1.1"**, the device on platform will have the following 
  name: **Device ID: 999 at 192.168.1.1**.

## (Examples) Alternative responses addresses

Let's review more examples of alternative responses addresses.

This field allows you to specify an alternative address for responses from the device.
It is useful when the gateway and BACnet device are located in different networks.

For example, if gateway running via the docker container and the BACnet device is located in the local network under 
192.168.1.200:45606, you can specify the IP address of the BACnet device in the alternative responses addresses field.
```json
"altResponsesAddresses": ["192.168.1.200"]
```

This is important because bacpypes provide APDU to the gateway without port number, so the connector can't determine if  
it is an allowed device. In this case, the connector will use the alternative address to determine that it is an allowed 
device.

## Object identifiers

The BACnet connector Object identifiers consist of two parts separated by a colon (“:”) symbol:  
the name of object and the number of this object on the device.  

Tested and supported objects:  

| **BACnet object id** | **ThingsBoard object id** |
|----------------------|---------------------------|
| **Binary input**     | **binaryInput**           |
| **Binary output**    | **binaryOutput**          |
| **Binary value**     | **binaryValue**           |
| **Analog Input**     | **analogInput**           |
| **Analog output**    | **analogOutput**          |
| **Analog value**     | **analogValue**           |
| ---                  | ---                       |

Objects in testing:  

* accumulatorObject
* averagingObject
* calendarObject
* commandObject
* fileObject
* lifeSafetyPointObject
* lifeSafetyZoneObject
* loopObject
* multiStateInputObject
* multiStateOutputObject
* multiStateValueObject
* notificationClassObject
* programObject
* pulseConverterObject
* scheduleObject
* structuredViewObject
* trendLogObject

## Property identifiers

Property identifiers depend on type of the BACnet object, provided in camelCase, e.g.
**presentValue**
**objectName**
**objectDescription**
etc.

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
