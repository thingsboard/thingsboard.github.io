---
layout: docwithnav
title: ThingsBoard PE Live Demo
description: ThingsBoard PE Live Demo Overview

---

* TOC
{:toc}

After you have signed-uo to Thingsboard PE [Live Demo](https://cloud.thingsboard.io/) you will have Smart Metering Demo configured for your tenant.
The purpose of this guide is to show how different Thingsboard features are used in the scope of the Smart Metering Demo.

## Smart Metering Model Definition
![image](/images/reference/pe-demo/smart-metering-model.png)

There are different Districts, which contains set of Buildings. Each Building has few Apartments and each Apartment has 3 devices - Energy/Water meters and Thermostat.
Districts, Buildings and Apartments are represented as Assets. Relations with type 'Contains' are used to represent how assets/devices are connected between each other. 

District Attributes:

 - address
 - image
 - latitude
 - longitude

District Telemetry:

 - totalEnergy - aggregated value from all Energy meters in the District
 - totalWater - aggregated value from all Water meters in the District

Building Attributes:

 - address
 - latitude
 - longitude

Building Telemetry:

 - totalEnergy - aggregated value from all Energy meters in the Building
 - totalWater - aggregated value from all Water meters in the Building

Apartment Attributes:

 - owner
 - xPos
 - yPos

Thermostat telemetry:

 - temperature
 
Energy Meter telemetry:

 - energy
 
Water Meter telemetry:

 - water

**Devices** are submitting their measurements every 30 seconds.

## Device & Asset Groups
There are 3 Device Groups created for each Device Type - Thermostats, Energy Meters, Water Meters. Each group contains devices of specific type.
![image](/images/reference/pe-demo/device-groups.png)

Each group view can be configured and additional columns can be added, like 'Assigned Customer', attribute or latest telemetry value. 
Also you can add different action buttons, for example open dashboard for the selected device.

More information can be found in [Device & Asset groups](/docs/user-guide/groups/) documentation.

In device details page, in 'Attributes' tab you can find server attributes that are responsible for handling device lifecycle events. 
Thingsboard monitor device states, is the device online/offline and generates device offline events if device is offline is more then 60 seconds.
You can generate alerts and send notifications when your critical devices are going offline.

Asset and Device Groups can be used for resolving dashboard aliases. 

More information about Device Connectivity Status events can be found in [Device Connectivity Status](/docs/user-guide/device-connectivity-status/) documentation.   


## Dashboards

### Demo Simple
Visualizes apartments in a table with the latest Energy Consumed and Water Consumed amount.
You can select any apartment to see the current temperature, water meter and energy meter values for the selected apartment. 
In 'Measure History' widget, you can select another Time-Window for the widget, as well as aggregation interval/function.
<br/>
<br/>

![image](/images/reference/pe-demo/simple-dashboard.png)


### Demo Smart Metering

![image](/images/reference/pe-demo/district-dashboard.png)

It is a complex multi-page navigation Dashboard that visualize districts, buildings, apartments and devices. 
You can use it to learn how to 

- navigate between different dashboard states and update current dashboard state via configured widget actions (Map/Table widgets)
- execute custom actions (show popup in District Table widget)
- group timeseries data on chart/table with configured time interval (District Hourly Usage/Measurement History widgets)
- show assets/devices on earth/image map (District/Building/Apartment Map widgets)  
- send RPC commands to devices (Apartment dashboard state)
- apply custom widget styles 
- show alarms
   
More information about dashboard configuration you can find in [Dashboard development guide](/docs/iot-video-tutorials/#visualization).

### Demo Reporting

![image](/images/reference/pe-demo/reporting-dashboard.png)

This Dashboard contains widgets for creating scheduled events and browse report files. 
There are 3 main scheduled event types: generate report, send RPC command, update attribute. More info about Scheduled events you cna find in
[Scheduling ](/docs/reference/pe-demo-getting-started/#scheduling) section of this guide.


## Demo Custom Widgets (and Dashboard)

![image](/images/reference/pe-demo/custom-dashboard.png)

In some cases you need to create custom widgets for your solution. We have added 3 custom widgets and also configure a dashboard that uses those widgets:

- Send RPC - you can send RPC command to the selected device
- Update Attribute - update/create attribute of the selected device
- Aeration Status - widget is subscribed to the device 'status' attribute and changes its behavior when attribute value is changed.

More information about custom widget creation you  can find in [Widgets Development Guide](/docs/user-guide/contribution/widgets-development/).

## Customers
There are 2 Customers that are created in the scope of the Smart Metering Demo - 'Customer A' and 'Customer B'. 

- Customer A:
    - Login : **ca_[yourmail@testmail.org]**
    - Password : **customer**
    - Assigned Assets/Devices - all asset/devices form 'District A'
    - Assigned Dashboard - 'Demo Simple'
    - Default Dashboard - not set
- Customer B:
    - Login : **cb_[yourmail@testmail.org]**
    - Password : **customer**
    - Assigned Assets/Devices - all asset/devices form 'District B'
    - Assigned Dashboard - 'Demo Simple', 'Demo Reporting'
    - Default Dashboard - 'Demo Simple' if full screen mode
    
*Please replace **[yourmail@testmail.org]** with your real email that was used for registration.

Customers will have access only to assigned dashboard/assets/devices. To verify this you can login as Customer and find that on 'Demo Simple'
dashboard you can see Apartments only from single district.

![image](/images/reference/pe-demo/customer_dashboard.png)

## Scheduling



rpc
attributes
reporting


## White Labeling
logo
color schema

## Rule Chains


## Integrations & Converters
converters uplink/downlink
json-binary

integration types