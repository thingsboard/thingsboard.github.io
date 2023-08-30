
* TOC 
{:toc}

{% include templates/solution-templates.md %}

The Waste Management template represents a solution for monitoring and controlling the fullness of waste containers. With this solution, you will be able to monitor the placement of garbage bins, their fullness, and also view statistics about garbage bins.

{% include images-gallery.html imageCollection="solution-highlights" %}

### Dashboard

As part of this solution, we have created the **Waste Management Administration** dashboard that displays data from waste sensors.

#### Waste Management Administration

The Waste Management Administration has multiple states - **Main state** and **Bin state**.

You may use the **Main state** to:
- revise the location and filling of the required trash bins with the help of an interactive map;
- receive data in real-time;
- follow the main indicators of the fullness of the garbage bin;
- view and manage all available sensors;
- control the notification system regarding the fullness and battery level.

<br>

To switch to the **Bin state**, click on the row of the desired sensor from the general list of sensors, or click "details" on the card/popup of a specific sensor on the interactive map.

<br>

You may use the **Bin state** to:
- view and edit basic information, sensor placement of the specific bin ;
- monitor basic trash and battery statistics;
- control the notification system regarding the level of charge and battery level.

You may always customize the "Waste Management Administration" dashboard using dashboard development [guide](/docs/{{docsPrefix}}user-guide/dashboards/).


### Devices

We have already created 10 waste monitoring sensors and loaded some demo data for them. See solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template) for the list of created devices and their credentials. The solution expects that the sensor device will upload fullness level and battery level values. The most simple example of the expected payload is in JSON format:

```json
{"fullLevel": 42, "batteryLevel": 77 }
```
{: .copy-code}


You may find the exact commands to send data on behalf of created devices in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template).
See [connecting devices](/docs/{{docsPrefix}}getting-started-guides/connectivity/) for various connectivity options to connect real devices.

### Alarms
Alarms are generated using two <a href="https://thingsboard.io/docs/user-guide/device-profiles/#alarm-rules" target="_blank">Alarm rules</a> in the
"Waste Sensor" <a href="/deviceProfiles" target="_blank">device profile</a>.
User may turn alarms on and off as well as configure the alarm thresholds via the <a href="${MAIN_DASHBOARD_URL}" target="_blank">"Waste Management"</a> dashboard using "Edit Sensor" form.








