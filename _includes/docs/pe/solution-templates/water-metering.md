
* TOC 
{:toc}

{% include templates/solution-templates.md %}

Water Metering template represent generic water metering solution.
With this template you get interactive dashboards that allow administrator and end user browse state of the water meters and aggregated water consumption statistics.
Users are able to define thresholds and enable alarms and notifications over SMS or email.

### Dashboard

As part of this solution, we have created the "Water Metering Tenant Dashboard" that allows you to manage water metering devices, users and alarms:

* observe location and status of the water meters on the map. Markers are clustered to be able to show thousands of meters simultaneously;
* use "Analytics" view to compare consumption for the current and previous month;
* use "Devices" view to get the list of all water meter devices with ability to
    * create a new device and assign it to the customer;
    * change the location of the device;
    * configure alarm thresholds for this device;
    * navigate to "Device" view by clicking on the device row;
* use "Device" view to:
    * browse water consumption history for a particular water meter device;
    * browse active alarms for a particular water meter device;
    * change water meter location information
    * upload water meter photo;
    * change location of the device;
* use "Customers" view to manage your customers;
* use "Users" view to add more tenant administrators that will receive notifications about alarms;
* use "Alarms" view to browse and clear alarms from water meters;
* use "Settings" view to:
    * turn system alarms on and off;
    * define thresholds for system alarms;
    * turn sms and email notifications on and off;

{% include images-gallery.html imageCollection="solution-highlights" %}

We have also created the "Water Metering User Dashboard" for the end users. This dashboard is assigned to the new customers automatically. The end user dashboard allows customers to:

* observe location and status of the water meters on the map. Markers are clustered to be able to show thousands of meters simultaneously;
* browse active alarms and water consumption per day and week;
* use "Analytics", "Devices", "Alarms" views that are similar to the main dashboard;
* use "Settings" view to define alarm thresholds for the particular customer. Generated alarms will not be visible to Tenant Administrator by default;

You may always customize the "Water Metering" dashboards using dashboard development [guide](/docs/{{docsPrefix}}user-guide/dashboards/).


### Devices

We have already created three water metering devices and loaded some demo data for them.
See solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template) for the list of created devices and their credentials.

Solution expects that the water meter device will report "pulseCounter", "temperature", "battery" and "leakage" values.
The most simple example of the expected payload is in JSON format:

```json
{"temperature":  42, "humidity":  73}
```
{: .copy-code}

You may find the exact commands to send data on behalf of created devices in the solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template).
Most of the water meters are using LoRaWAN, Sigfox or NB IoT technology. 
See [connecting devices](/docs/{{docsPrefix}}getting-started-guides/connectivity/) for various connectivity options to connect real devices.

### Alarms

Alarms are generated using nine Alarm rules in the "Water Meter" [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/).
Alarms notifications are sent via SMS or email to Tenant Administrators and Customer Users depending on the thresholds and settings defined in the dashboard.

{% include images-gallery.html imageCollection="solution-alarms" %}

### Rule Chains

The "Water Metering Solution Main" rule chain is processing all incoming messages from water metering devices.
This rule chain is responsible for aggregation of the incoming data on a daily and weekly basis for device, customer and tenant level.
Aggregated data is stored as telemetry as well. The aggregation is done in the UTC time zone by default.
You may change the time zone in the "aggregate stream" rule nodes. You may also aggregate data in different time zones.

There are two other rule chains: "Water Metering Solution Tenant Alarm Routing" and "Water Metering Solution Customer Alarm Routing".
They are responsible for routing incoming messages to tenant administrators and customer users respectively.

{% include images-gallery.html imageCollection="rule-chains" %}

### Customers

Meters "WM0000123" and "WM0000124" are assigned to a newly created customer "Water Metering Customer A".
You may notice that "Water Metering Customer A" has a user, and the "Water Metering User Dashboard" dashboard is assigned to the user by default.
You may create more [Customers](/docs/{{docsPrefix}}user-guide/ui/customers/) and more [Users](/docs/{{docsPrefix}}user-guide/ui/users/) via administration UI.

### Role Based Access Control (RBAC)

We have created separate users for customers "Water Metering Customer A" and "Water Metering Customer B". See solution [instructions](/docs/{{docsPrefix}}solution-templates/overview/#install-solution-template) for the list of created users and their passwords.

Those users are members of the "Customer User" group. So, they have read-only access to all entities of the Customer".
We have also created "Water Metering User" generic role that allows those users write access to alarms, customer attributes and device attributes. This enables user to set specific alarm and notification settings.

The idea is to have one "Water Metering User Dashboard" dashboard for all users for multiple customers. Customer users should be able to browse, but should not be able to edit the dashboard.
To achive this, we create "Water Metering Shared" group that is shared with the customer users using "Water Metering Read Only" role. This group contains the "Water Metering User Dashboard" dashboard. 
You may add other dashboards to this group, if you want to share more dashboards with the same users. See [Advanced RBAC for IoT](/docs/{{docsPrefix}}user-guide/rbac/) for more information. 
