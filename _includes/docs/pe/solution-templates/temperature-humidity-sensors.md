
* TOC 
{:toc}

{% include templates/solution-templates.md %}

Temperature & Humidity sensors template represents a generic monitoring solution suitable for multiple applications.
With this template you get an interactive dashboard with ability to manage sensors and user-friendly alarms configuration.

Solution automatically creates a customer and two customer users.
Those users will have the dashboard assigned to them, and the user will see the dashboard in full screen mode.

{% include images-gallery.html imageCollection="solution-highlights" %}

### Dashboard

As part of this solution, we have created the "Temperature & Humidity" dashboard that displays data from multiple sensors. You may use the dashboard to:

* add new sensors;
* change the location of the sensors;
* configure the alarm thresholds;
* browse historical data.

The dashboard has two states. The main state displays the list of the sensors, their location on the map as well as the list of their alarms.
You may drill down to the sensor details state by clicking on the table row. The sensor details state allows to browse temperature and humidity history, change sensor settings and location.

You may always customize the "Temperature & Humidity" dashboard using dashboard development [guide](/docs/{{docsPrefix}}user-guide/dashboards/).

### Devices

We have already created two sensors and loaded some demo data for them. See solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template) 
for the list of created devices and their credentials.

Solution expects that the sensor device will upload "temperature" and "humidity" values.
The most simple example of the expected payload is in JSON format:

```json
{"temperature":  42, "humidity":  73}
```
{: .copy-code}

You may find the exact commands to send data on behalf of created devices in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template).
See [connecting devices](/docs/{{docsPrefix}}getting-started-guides/connectivity/) for various connectivity options to connect real devices.

### Alarms

Alarms are generated using two Alarm rules in the "Temperature Sensor" [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/). 
User may turn alarms on and off as well as configure the alarm thresholds via the "Temperature & Humidity" dashboard using "Edit Sensor" form.

{% include images-gallery.html imageCollection="solution-alarms" %}

### Customers

"Sensor C1" is assigned to a newly created customer "Customer A".
You may notice that "Customer A" has two users, and the "Temperature & Humidity" dashboard is accessible for those users.
You may create more [Customers](/docs/{{docsPrefix}}user-guide/ui/customers/) and more [Users](/docs/{{docsPrefix}}user-guide/ui/users/) via administration UI.

### Role Based Access Control (RBAC)

We have created two users for "Customer A" customer. See solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template) for the list of created users and their passwords.
Those users are members of the "Customer Administrator" group. So, they have access to all entities of the Customer, including device "Sensor C1". 
The device "Sensor T1" is not assigned to "Customer A". So, it is available only to tenant administrators (you).

The idea is to have one "Temperature & Humidity" dashboard for all users for multiple customers. Customer users should be able to browse, but should not be able to edit the dashboard.
To achive this, we create "Customer dashboards" group that is shared with the customer users using "Read Only" role. This group contains the "Temperature & Humidity" dashboard. 
You may add other dashboards to this group, if you want to share more dashboards with the same users. See [Advanced RBAC for IoT](/docs/{{docsPrefix}}user-guide/rbac/) for more information. 
