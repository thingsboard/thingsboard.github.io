---
layout: docwithnav
title: Facilities monitoring system prototype using Thingsboard

---

Environmental controls in the office rooms are very important as loss of HVAC can result in significant loss to servers, network gear, employee productivity etc. 

In this tutorial we will prototype facilities monitoring system that will be able to cover following use cases:

 - Monitoring of temperature and humidity in different zones of the office building.
 - Processing of collected telemetry with various alerting rules based on zone type: work space, meeting and server rooms.
 - Distribution of collected alarms to assigned facility managers.
 - Visualization of real-time and historical values on the configurable web dashboards.

This article describes development and configuration steps we have done in order to build the PoC. 

The prototype is open-source and is also based on open-source technologies, so you are able to use it for building commercial products.

![image](https://dzone.com/storage/temp/3792844-facilities-management.png)

## Devices and Connectivity

We decided to use quite cheap hardware based on ESP8266 and DHT22 sensor.
The total cost of each device that includes sensor and connectivity module is approximately 5$. Since this is a prototype, we decided to use MQTT over WiFi and have not discussed other connectivity options.

## Server-side infrastructure

The server-side part of the solution will be based on the Thingsboard IoT platform which is 100% open-source and can be deployed both in the cloud, on premises or even on Raspberry Pi 3. The collected data is stored to Cassandra database due to built-in fault-tolerance and scalability. We have recently launched Live Demo instance to simplify getting-started process, so we will use this instance in the tutorial.

## Development and Configuration steps

### Step 1. Device provisioning

Initial step of the PoC was to provision several devices and their attributes. We’ve decided to support three zone types: work area, meeting and server rooms. We have registered three buildings with four rooms in each. During registration we have populated Zone Id, Zone Type server-side attributes. Note that the server-side device attributes may be used by the processing rules, but are not visible to the device itself.

  ![image](https://dzone.com/storage/temp/3791311-attributes.png)

### Step 2. Flushing the devices

During this step we have flushed firmware update with individual device credentials built-in to the firmware. The firmware code and corresponding instructions are available in links below. We have used code from our [previous article](/docs/samples/nodemcu/temperature/) without modifications, since all the logic is on the server side.

Please note that steps 1 and 2 may be automated, we’ve developed simple java based application that performs provisioning of the devices and other entities using REST API and also emulates this devices for the live demo purposes.

### Step 3. Processing Rules

During this steps we have provisioned rules that analyze temperature and humidity against configurable thresholds based on zone type. 

For example, acceptable humidity range in server room is between 40% and 60%, however, humidity range for the work zone is from 30% to 70%. 

The rules are basically set of logical expression written using javascript syntax. 

For example, rule for a server room consist of two parts: attribute and telemetry filter. This filters may be combined, but we decided to separate them to simplify the PoC.

Attributes filter body example:

```javascript
typeof ss.ZoneType !== 'undefined' && ss.ZoneType === 'Server Room'
```

Telemetry filter body example:

```javascript
(
    typeof temperature !== 'undefined' 
    && (temperature <= 10 || temperature >= 25)
)
|| 
(
    typeof humidity !== 'undefined' 
    && (humidity <= 40 || humidity >= 60)
)
```

You may notice “null” checks in the filter body. This is basically a good practise, because you may use same server for multiple device applications. Some of them report humidity and temperature, some of them upload other sensor readings and this should not affect rules processing.


### Step 4. Alarms distribution

At this step we have configured email plugin to distribute data using SendGrid mail service and provisioned rule action to send data to the configured mail address. 
Rule action consists of several templates that allow flexible configuration of email topic, body and adress list based on substitution of device attributes and telemetry values. 

For example, following email body template:

```text
[$date.get('yyyy-MM-dd HH:mm:ss')] $ss.get('ZoneId') HVAC malfunction detected. 
Temperature - $temperature.valueAsString (°C). 
Humidity - $humidity.valueAsString (%)!
```

Will be evaluated to the following email body

```text
[2016-12-22 15:06:09] Server Room C HVAC malfunction detected. 
Temperature – 45.0 (°C).
Humidity – 70.0 (%)!
```

The evaluation and template syntax is based on [Velocity](http://velocity.apache.org/) engine.