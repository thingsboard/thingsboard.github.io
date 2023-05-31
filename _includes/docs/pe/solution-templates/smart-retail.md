
* TOC 
{:toc}

{% include templates/solution-templates.md %}

Smart retail solution represent the generic smart retail solution as a solution provider, where you may provision multiple Customers and assign a pool of IoT devices to each customer.

{% include images-gallery.html imageCollection="solution-highlights" %}

### Dashboard
As part of this solution, we have created 2 dashboards that display data from multiple sensors - **Smart Supermarkets Dashboard** and **Administration Dashboard**.

#### Smart Supermarkets Dashboard

The **Supermarkets Dashboard** has multiple states:
- **Main** state contains a map of the supermarkets, and a list of alarms. Alarms are propagated from devices to the corresponding supermarket. The platform calculates state of each supermarket based on the highest severity of the propagated alarms. As a user, you are able to filter supermarkets on the map based on the state of the supermarket.
- **Floor** plan state contains an indoor map with the floor plan of supermarket and device markers. Besides the map, state also contains two filters: based on device type and device state. Filter settings are persisted on the user level.
    - State filter allows you to filter devices based on the highest severity of the alarms. For example, you may choose to display devices that have at least one critical alarm.
    - Device type filter allows you to show or hide specific devices based on the type of device. For example, you may display only Freezers and Chillers and hide all other devices.
    - Click on specific device marker to display device details state in the right panel of the dashboard. Content of the device details is specific to the device type. For example, freezer device have a line chart with the temperature readings while smart bin has a bar chart with the fullness level. Nevertheless, the common elements of the device details is the header and alarms list. Header contains information about current state of the device and it’s battery level (if device is battery powered). Header also allows you to navigate to the settings of the particular device. Those settings allow you to configure the alarm thresholds.

Some dashboard features (for example, ability to delete devices) were disabled on the live demo dashboard because it is publicly available.

<br>
Once you install the solution template, you will also receive access to “Smart Supermarket Administration” that allows you to provision customers, their users, supermarkets and devices.

#### Smart Supermarket Administration Dashboard

The **Smart Supermarkets Administration Dashboard** has multiple states:
- **Main** state allows you to list the retail companies (customers). We assume that the customer is a retail company that own one or multiple supermarkets. We have provisioned two “fake” retail companies with number of supermarkets for demonstration purposes.
- **Device management** state allows you to manage devices in scope of the retail company (customer). You may provision new devices or delete existing devices. The state displays a table with all devices assigned to this retail company. This means that Tenant or Supermarket Administrator will be able to use those devices to position them in the Supermarket. You may treat this list as a pool of devices that are available for installation in the Supermarkets of the Customer.
- **Supermarket management** state allows you to manage supermarkets in scope of the retail company (customer). The dashboard state displays supermarkets on the map and a list of supermarkets in the table.
  Supermarkets are assets that may contain multiple devices and few attributes: floor plan and address.
  
- **Supermarket devices** state displays an indoor map with the floor plan of supermarket and device markers. You may drag-and-drop the device markers to define precise location of the device in the supermarket.

You may always customize the "Smart Retail" dashboard using dashboard development [guide](/docs/{{docsPrefix}}user-guide/dashboards/).

### Devices

We have already created multiple sensors and loaded some demo data for them. See solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template) for the list of created devices and their credentials.


#### Smart Shelf

The profile is configured to raise alarms if the value of "weight" telemetry is lower than a threshold. Major alarm is raised when the value is below 20 units (kg or lbs depends on what is reported by the device). Critical alarm is raised when the value is below 10 units.
Sample device payload:

```json
{"weight": 42}
```
{: .copy-code}

#### Smart Shelf

The profile is configured to raise alarms if the value of "temperature" telemetry is above or below certain thresholds. Major alarm is raised when the value is above -2 degrees or below -25. Critical alarm is raised when the value is above -1 degrees or below -30.
Sample device payload:

```json
{"temperature": -5.4}
```
{: .copy-code}

#### Chiller

Chiller profile is very similar to Freezer but with different default threshold values.
Sample device payload:

```json
{"temperature": 6.2}
```
{: .copy-code}

#### Door sensor

The profile is configured to raise major alarm if the door is left open for more than 30 minutes or critical alarm if the door is left opened for 1 hour. The profile is also configured to raise critical alarm if the door is opened during non-working hours. You may configure schedule of the non-working hours in the alarm rule of the device profile.
Since door sensors are usually battery powered, the corresponding alarms are raised when the battery level is below 30(major) or 10(critical) percent. If your sensor is not battery powered, you may simply ignore the alarm rule.
Sample device payload:

```json
{"open": true, "batteryLevel":  99}
```
{: .copy-code}


#### Motion sensor

Similar to Door sensor, motion sensor is configured to raise critical alarm if the motion is detected during non-working hours. You may configure schedule of the non-working hours in the alarm rule of the device profile.

```json
{"motion": true, "batteryLevel":  99}
```
{: .copy-code}

#### Smoke sensor

Smoke sensor will raise critical alarm if the smoke is detected. Since smoke sensors are usually battery powered, the corresponding alarms are raised when the battery level is below 30(major) or 10(critical) percent. If your sensor is not battery powered, you may simply ignore the alarm rule.
```json
{"alarm": false, "batteryLevel":  99}
```
{: .copy-code}

#### Smart Bin
The profile is configured to raise alarms if the fullness level is above certain threshold. Major alarm is raised when the level is above 70%. Critical alarm is raised when the level is above 90%.
Smart bin sensors are usually battery powered, the corresponding alarms are raised when the battery level is below 30(major) or 10(critical) percent. If your sensor is not battery powered, you may simply ignore the alarm rule.
Sample device payload:

```json
{"level": 35, "batteryLevel":  89}
```
{: .copy-code}


#### Liquid Level Sensor
The profile is configured to raise alarms if the liquid level is below certain threshold. Major alarm is raised when the level is below 30%. Critical alarm is raised when the level is below 10%.
Liquid Level sensors are usually battery powered, the corresponding alarms are raised when the battery level is below 30(major) or 10(critical) percent. If your sensor is not battery powered, you may simply ignore the alarm rule.
Sample device payload:

```json
{"level": 85, "batteryLevel":  99}
```
{: .copy-code}

#### Occupancy sensor
The profile is configured to raise major alarm if the room is occupied for more than 30 minutes or critical alarm if the room is occupied for more then 1 hour.
Since occupancy sensors may be battery powered, the corresponding alarms are raised when the battery level is below 30(major) or 10(critical) percent. If your sensor is not battery powered, you may simply ignore the alarm rule.

```json
{"occupied": true, "batteryLevel":  99}
```
{: .copy-code}




You may find the exact commands to send data on behalf of created devices in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template).
See [connecting devices](/docs/{{docsPrefix}}getting-started-guides/connectivity/) for various connectivity options to connect real devices.

### Alarms
User may turn alarms on and off as well as configure the alarm thresholds via the <a href="https://thingsboard.io/docs/user-guide/device-profiles/#alarm-rules" target="_blank">“Smart Retail”</a> dashboard. 








