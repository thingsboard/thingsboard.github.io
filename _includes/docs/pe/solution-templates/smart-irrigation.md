
* TOC 
{:toc}

{% include templates/solution-templates.md %}

The Smart Irrigation template represents a generic field irrigation solution, to provision fields and related devices.

{% include images-gallery.html imageCollection="solution-highlights" %}

### Dashboard

As part of this solution, we have created the Smart Irrigation dashboard that displays data from multiple soil moisture sensors. This dashboard contains 2 states - **Main state** and  **Field state**.

You may use the **Main state** to:
- monitor the average soil moisture value of existing fields on the interactive map;
- monitor the fields of the relevant soil crops in the list and add new fields as needed;
- set limit values for each field for applying irrigation;
- monitor soil moisture history in real-time using a graph;
- monitor Alarms that occur when the established conditions are not met;

<br>
In order to go to **Field state**, click on the row of the desired sensor in the Field section or choose the needed field on the interactive map.

<br>
You may use the **Field state** to:
- monitor irrigation status;
- set and edit the inclusion schedule and conditions under which irrigation will work;
- view statistics on soil moisture;
- monitor Alarms that have occurred;
- manage soil moisture level sensors and view them on an interactive map;
- view irrigation tasks.

You may always customize the "Smart Irrigation" dashboard using dashboard development [guide](/docs/{{docsPrefix}}user-guide/dashboards/).

### Devices

We have already created multiple devices and loaded some demo data for them. See solution <a href="https://thingsboard.io/docs/paas/solution-templates/overview/#install-solution-template">instructions</a> for the list of created devices and their credentials.

#### SI Water Meter
The profile is configured to raise alarms if the value of "battery" telemetry is below a configurable threshold. Warning alarm is raised when the value is below 30.
The device also uploads the "pulseCounter" which is used to calculate water consumption. Sample device payload:

```json
{"battery": 99, "pulseCounter": 123000}
```
{: .copy-code}

#### SI Soil Moisture Sensor
The profile is configured to raise alarms if the value of "battery" telemetry is below a configurable threshold. Warning alarm is raised when the value is below 30.
The device also uploads the "moisture" level. Sample device payload:
```json
{"battery": 99, "moisture": 57}
```
{: .copy-code}

#### SI Smart Valve
The profile is configured to raise alarms if the value of "battery" telemetry is below a configurable threshold. Warning alarm is raised when the value is below 30. Sample device payload:
```json
{"battery": 99}
```
{: .copy-code}

The device also accepts the RPC command to enable or disable the water flow. Sample RPC command:
```json
{"method": "TURN_ON", "params": {}}
```
{: .copy-code}

You may find the exact commands to send data on behalf of created devices in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template).
See [connecting devices](/docs/{{docsPrefix}}getting-started-guides/connectivity/) for various connectivity options to connect real devices.

### Alarms
User may turn alarms on and off as well as configure the alarm thresholds via the <a href="${MAIN_DASHBOARD_URL}" target="_blank">"Smart Irrigation"</a> dashboard.








