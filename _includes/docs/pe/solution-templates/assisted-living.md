
* TOC 
{:toc}

{% include templates/solution-templates.md %}

As part of this solution, we have created the **Assisted Living Administration** dashboard that displays data from various devices, such as wristbands, gateways, and room sensors.

This dashboard has several states:
- Main state - intended for provisions of residents, alarms of residents, and rooms;
- Residents state - assigned to resident management;
- Zones state - responsible for the management of zones, which in the future will be the basis for rooms and devices;
- specific Zone state - intended for room and device management.

{% include images-gallery.html imageCollection="solution-highlights" %}

### Dashboard

You may use the **Main state** to:
- revise vital indicators of residents and respond to their changes promptly;
- see statistics of the general indicators of each of the residents;
- monitor the movement of residents in real-time;
- monitor the state of zones/areas where residents are accommodated using a variety of smart room sensors;
- control the system of notifications regarding changes in the status of residents and rooms. Ability to configure it.

<br>

In order to go to **Residents state**, click on the “Residents” button(1) in the top right corner.

<div class="img-float" style="max-width: 50%;margin: 5px auto;">
<img src="/images/solutions/assisted_living/hint-1.png" alt="Assisted Living">
</div>

<br>

You may use the **Residents state** to:
- resident management: create, edit, or delete them;
- view the existing list of residents and detailed information about them;
- assign the appropriate location and devices to the appropriate residents.

<br>

To go to **Zones state**, click on the “Zones” button(2) in the top right corner.

The primary purpose of **Zones State** is the creation of zones that will be used to accommodate residents and smart sensors in the future. You can also edit them (change the name and plan-scheme) and delete them.

<br>

To go to **specific Zone state**, click on the row(1) of one of the existing items on **Zones state**. Or click the "Add zone"(2) button to create a new one.

<div class="img-float" style="max-width: 80%;margin: 5px auto;">
<img src="/images/solutions/assisted_living/hint-2.png" alt="Assisted Living">
</div>

<br>

You may use the **specific Zone state** to:
- manage and place rooms following the needs of the respective zones;
- device management of various types and attaching them to existing rooms;
- revisit the placement of rooms and devices on an interactive plan.

You may always customize the "Assisted Living" dashboard using dashboard development [guide](/docs/{{docsPrefix}}user-guide/dashboards/).


### Devices

We have already created multiple devices and loaded some demo data for them. See solution instructions for the list of created devices and their credentials.


#### Wristband

The solution expects that the wristband will upload all values, such as the status of the panic button, heart rate, body temperature, battery level, and noise. The profile is configured to raise alarms if:
- the value of “panicButton” is equal to 1(click) for a major alarm or 2(clicks) for a critical;
- the value of “pulse” is less or equal to 60(bpm) and greater or equal to 120(bpm) for a major alarm or is less or equal to 50(bpm) and greater or equal to 140(bpm) for critical;
- the value of “temperature” is less than 36(C) and more than 37(C) for major alarm or is less than 35,5(C) and more than 38(C) for critical;
- the value of “battery” is equal or less than 25(%) for major alarm or is equal or less than 15(%) for critical;
- the value of “noise” is more than 80(dB) for major alarm or more than 100(dB) for critical;

The most simple example of the expected payload is in JSON format:


```json
{"pulse": 82, "temperature": 36.4, "noise": 85, "panicButton": "True", "battery": 77}
```
{: .copy-code}


#### Window Sensor

The profile is configured to raise alarms if the value of “battery” is equal or less than 25(%) for major alarm or 15(%) for critical, and if the duration’s value of “open” is equal or greater 30(min) for major alarm or 60(min) for critical. Sample device payload:

```json
{"battery": 77, "open": "True"}
```
{: .copy-code}


#### Smoke Sensor

The profile is configured to raise alarms if the value of “battery” is equal or less than 25(%) for major alarm or 15(%) for critical, and if the value of “smoke” is TRUE. Sample device payload:

```json
{"battery": 77, "smoke": "True"}
```
{: .copy-code}

#### Room Sensor

The solution expects that the room sensor will upload all values, such as the status of battery level, indoor air quality, room temperature and humidity. The profile is configured to raise alarms if:
- the value of “temperature” is less than 18(C) and more than 28(C) for major alarm or is less than 16(C) and more than 30(C) for critical;
- the value of “humidity” is less than 30(%) and more than 70(%) for major alarm or is less than 25(%) and more than 75(%) for critical;
- the value of “IAQ” is more than 150(IAQ) for major alarm or more than 300(IAQ) for critical;
- the value of “battery” is equal or less than 25(%) for major alarm or is equal or less than 15(%) for critical.

The most simple example of the expected payload is in JSON format:


```json
{"IAQ": 310, "temperature": 19, "humidity": 45, "battery": 77}
```
{: .copy-code}


#### Leak Sensor
The profile is configured to raise alarms if the value of "battery" is equal or less than 25(%) for major alarm or 15(%) for critical and if the value of "leak" is TRUE. Sample device payload:
```json
{"leak": "True", "battery": 77}
```
{: .copy-code}

#### Door Sensor
The profile is configured to raise alarms if the value of "battery" is equal or less than 25(%) for major alarm or 15(%) for critical and if the duration's value of "open" is equal or greater than 30(min) for major alarm or 60(min) for critical. Sample device payload:
```json
{"open": "True", "battery": 77}
```
{: .copy-code}

You may find the exact commands to send data on behalf of created devices in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template).
See [connecting devices](/docs/{{docsPrefix}}getting-started-guides/connectivity/) for various connectivity options to connect real devices.


### Alarms
User may turn alarms on and off as well as configure the alarm thresholds via the <a href="https://thingsboard.io/docs/user-guide/device-profiles/#alarm-rules" target="_blank">"Assisted Living Administration"</a> dashboard.




















