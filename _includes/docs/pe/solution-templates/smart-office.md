
* TOC 
{:toc}

{% include templates/solution-templates.md %}

Smart Office template represents a basic work space monitoring and management solution.
With this template you get an interactive dashboard with the ability to control HVAC system, 
and have a high-level report of key metrics necessary for effective and proactive office management.

{% include images-gallery.html imageCollection="solution-highlights" %}

### Dashboard

As part of this solution, we have created the "Smart Office" dashboard that displays data from multiple devices. You may use the dashboard to:

* observe office sensors and their location;
* browse indoor temperature and power consumption history;
* monitor temperature alarms;
* control HVAC (requires connected device);
* observe specific details for each sensor.

The dashboard has multiple states. The main state displays the list of the devices, their location on the office map as well as the list of their alarms.
You may drill down to the device details state by clicking on the table row. The device details are specific to the device type.

You may always customize the "Smart Office" dashboard using dashboard development [guide](/docs/{{docsPrefix}}user-guide/dashboards/).

### Devices

We have already created "Office" asset and 4 devices related to it. We have also loaded demo data for those devices. 
See solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template) for the list of created devices and their credentials.

Solution expects specific telemetry from each device based on its type.
You may find payload examples below.

**Energy meter**


Payload example:

```json
{"voltage":  220, "frequency":  60, "amperage": 16, "power": 3000, "energy": 300 }
```
{: .copy-code}

**Water meter**


Payload example:

```json
{"water": 2.3, "voltage": 3.9 }
```
{: .copy-code}

**Smart sensor**


Payload example:

```json
{"co2": 500, "tvoc": 0.3, "temperature": 22.5, "humidity": 50, "occupancy": true}
```
{: .copy-code}


**HVAC**


Payload example:

```json
{"airFlow": 300, "targetTemperature": 21.5, "enabled": true}
```
{: .copy-code}


HVAC device also accepts commands from the dashboard to enable/disable air conditioning as well as set target temperature.
The commands are sent using the platform [RPC API](/docs/{{docsPrefix}}user-guide/rpc/). 

You may find the exact commands to send data on behalf of created devices in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template).
See [connecting devices](/docs/{{docsPrefix}}getting-started-guides/connectivity/) for various connectivity options to connect real devices.

### Alarms

Alarms are generated using two Alarm rules in the "smart-sensor" [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/).
