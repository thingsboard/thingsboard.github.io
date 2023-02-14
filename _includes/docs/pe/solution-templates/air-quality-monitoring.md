
* TOC 
{:toc}

{% include templates/solution-templates.md %}

AIR Quality Monitoring template represents a solution for general air pollution monitoring and device management. With this template, you will be able to monitor pollutants such as: Ozone, PM2.5, PM10, CO, SO2, and NO2 of specific regions using pollution measuring stations and determine AQI based on them.

{% include images-gallery.html imageCollection="solution-highlights" %}

### Dashboard

As part of this solution, we have created 2 dashboards that display data from multiple sensors - **Public Air Quality Monitoring Dashboard** and **Administration Air Quality Monitoring Dashboard**.

#### Public Dashboard

The **Public Air Quality Monitoring Dashboard** has multiple states - **City state** and  **Sensor state**.

You may use the **City state** to:
- monitor the AQI which is calculated based on the main pollutants; 
- work with an Interactive map of air pollution monitoring stations with color-coded markers which are depending on the AQI level;
- control the temperature and humidity of the location or a specific sensor;
- see History section of AQI level in the current, weekly, and monthly range;

<br>
To switch to the **Sensor state**, click on one of the markers on the map (you can switch to other sensors by clicking on other device markers).

<br>
You may use the **Sensor state** to:
- monitor the AQI of the specific sensor;
- observe a section of specific pollutants: PM2.5, PM10, NO2, CO, SO2, and O3. Click on one of these tiles, and a pop-up will appear, which will display a description, general recommendations, as well as its statistics for this pollutant.
- see the history of a specific sensor with AQI level in the current, weekly, and monthly range;

#### Administration Dashboard

The **Administration Dashboard** has multiple states too - **Main state** and  **Sensor state**.

You may use the **Main state** to:
- see the list of all existing sensors, general information, and statuses about them;
- create, edit and delete sensors;
- browse and clear alarms from air monitoring sensor;
- set rules for the sensor’s alarm based on parameters such as Battery Level(in percent) and duration of no connection (in hours);
- observe the placement of sensors using markers;

<br>
To switch to the **Sensor state**, click on one of the items from the sensors list.

<br>
You may use the **Sensor state** to:
- control of all information belonging to a specific sensor;
- view the sensor’s details and edit them, such as sensor id, label, and placement;
- view the sensor’s measures, such as connectivity status, battery level, AQI, and pollutants;
- track on the chart the current battery level of the sensor;
- view the sensor’s placement in the interactive map with the ability to change the place manually;
- browse and clear alarms from current air monitoring sensor;
- track on the chart the connectivity statuses.

You may always customize the "AIR Quality Monitoring" dashboard using dashboard development [guide](/docs/{{docsPrefix}}user-guide/dashboards/).

### Devices

We have already created five air quality monitoring sensors and loaded some demo data for them. See solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template) for the list of created devices and their credentials. **The solution expects that the sensor device will upload all pollution values, temperature, humidity, and battery level. The most simple example of the expected payload is in JSON format:**

```json
{"temperature": 42, "humidity": 73, "pm25": 24.4, "pm10": 30, "no2": 13, "co": 2.8, "so2": 7, "o3": 0.164, "batteryLevel": 77 }
```
{: .copy-code}

You may find the exact commands to send data on behalf of created devices in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template).
See [connecting devices](/docs/{{docsPrefix}}getting-started-guides/connectivity/) for various connectivity options to connect real devices.

### Alarms
Alarms are generated using two <a href="https://thingsboard.io/docs/user-guide/device-profiles/#alarm-rules" target="_blank">Alarm rules</a> in the
"AIR Sensor" <a href="/deviceProfiles" target="_blank">device profile</a>.
User may turn alarms on and off as well as configure the alarm thresholds via the <a href="${MAIN_DASHBOARD_URL}" target="_blank">"Air Quality Monitoring"</a> dashboard using "Edit Sensor" form.








