
* TOC 
{:toc}

{% include templates/solution-templates.md %}

As part of this solution, we have created the **Assisted Living Administration** dashboard that displays data from various devices, such as wristbands, gateways, and room sensors.

This dashboard has several states:
- Main state;
- Resident state;
- Zones state;
- Zone state.

{% include images-gallery.html imageCollection="solution-highlights" %}

### Dashboard

You may use the **Main state** to:
- revise vital indicators of residents and respond to their changes promptly;
- see statistics of the general indicators of each of the residents;
- monitor the movement of residents in real-time;
- monitor the state of zones/areas where residents are accommodated using a variety of smart room sensors;
- control the system of notifications regarding changes in the status of residents and rooms. Ability to configure it.

<br>

In order to go to **Residents state**, click on the “Residents” button in the top right corner.

<br>

You may use the **Residents state** to:
- resident management: create, edit, or delete them;
- view the existing list of residents and detailed information about them;
- assign the appropriate location and devices to the appropriate residents.

<br>

To go to **Zones state**, click on the “Zones” button in the top right corner.

The primary purpose of **Zones State** is the creation of zones that will be used to accommodate residents and smart sensors in the future. You can also edit them (change the name and plan-scheme) and delete them.

<br>

To go to **Zone state**, click on the row of one of the existing zones on **Zones state**.

<br>

You may use the **Zone state** to:
- manage and place rooms following the needs of the respective zones;
- device management of various types and attaching them to existing rooms;
- revisit the placement of rooms and devices on an interactive plan.

You may always customize the "Assisted Living" dashboard using dashboard development [guide](/docs/{{docsPrefix}}user-guide/dashboards/).


### Devices

We have already created multiple devices and loaded some demo data for them. See solution instructions for the list of created devices and their credentials.


#### Wristband

The solution expects that the wristband will upload all values, such as the status of the panic button, heart rate, temperature, battery level, and noise. The most simple example of the expected payload is in JSON format:

```json
{"pulse": 82, "temperature": 36.4, "noise": 85, "panic": "TRUE", "batteryLevel": 77}
```
{: .copy-code}


#### Window Sensor

The profile is configured to raise alarms if the value of "batteryLevel" is equal or less than a configured and if the duration’s value of "windowOpen" is equal or greater than a configured. Sample device payload:

```json
{"batteryLevel": 77, "windowSensor": 10}
```
{: .copy-code}


#### Smoke Sensor

The profile is configured to raise alarms if the value of "batteryLevel" is equal or less than a configured and if the value of "smoke" is TRUE. Sample device payload:

```json
{"batteryLevel": 77, "smoke": "TRUE"}
```
{: .copy-code}

#### Room Sensor

The solution expects that the room sensor will upload all values, such as the status of battery level, indoor air quality, room temperature and humidity. The most simple example of the expected payload is in JSON format:

```json
{"roomIaq": 310, "roomTemperature": 19, "roomHumidity": 45, "battery": 77}
```
{: .copy-code}


#### Leak Sensor
The profile is configured to raise alarms if the value of "battery" is equal or less than a configured and if the value of "waterLeak" is TRUE. Sample device payload:
```json
{"waterLeak": "TRUE", "battery": 77}
```
{: .copy-code}

#### Door Sensor
The profile is configured to raise alarms if the value of "battery" is equal or less than configured and if the duration's value of "doorOpen" is equal or greater than configured. Sample device payload:
```json
{"doorOpen": "TRUE", "battery": 77}
```
{: .copy-code}

You may find the exact commands to send data on behalf of created devices in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template).
See [connecting devices](/docs/{{docsPrefix}}getting-started-guides/connectivity/) for various connectivity options to connect real devices.


### Alarms
User may turn alarms on and off as well as configure the alarm thresholds via the <a href="https://thingsboard.io/docs/user-guide/device-profiles/#alarm-rules" target="_blank">"Assisted Living Administration"</a> dashboard.




















