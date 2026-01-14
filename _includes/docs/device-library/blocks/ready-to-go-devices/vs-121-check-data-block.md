### Check data on ThingsBoard

So, the device was added and if it sends any data - it should appear in "**Devices**".  
To check it you may open "Devices" page in "Entities" section. 
The device should be in devices list. You can check the data by clicking the device and navigate to the "**Attributes**" or "**Latest telemetry**" tab.

{% assign checkTelemetryOnDevice = '
    ===
        image: /images/devices-library/ready-to-go-devices/vs121-device/check-telemetry-on-device.png,
        title: Open "Devices" page in "Entities" section. The device should be in devices list. You can check the data by clicking the device and navigate to the "Attributes" or "Latest telemetry" tab.
'
%}

{% include images-gallery.liquid imageCollection=checkTelemetryOnDevice %}

<br>
In order to get more user-friendly view - you can use [dashboard](/docs/pe/user-guide/dashboards){: target="_blank"}.
Download a simple dashboard for this device. It is configured to display a data from "Count people all", "Max count people", "Signal strength", "Region count" and "Occupancy" timeseries keys of device with name "eui-24e124538b223213".

{% include /docs/device-library/blocks/basic/thingsboard-upload-example-dashboard.md exampleDashboardPath="/docs/device-library/resources/dashboards/ready-to-go-devices/vs-121-sensor-dashboard.json" %}  

To open the imported dashboard, click on it. Then you should specify your device in entity alias of the dashboard.

To do this, follow these steps:

{% assign editAlias = '
    ===
        image: /images/user-guide/dashboards/alias/edit-alias-for-vs-121-sensor-1-pe.png,
        title: Open the dashboard and enter edit mode. Click the "Entity aliases" icon, then in the pop-up window click the "Edit alias" icon next to the alias.
    ===
        image: /images/user-guide/dashboards/alias/edit-alias-for-vs-121-sensor-2-pe.png,
        title: In edit alias window select your device from dropdown list and save entity alias.
    ===
        image: /images/user-guide/dashboards/alias/edit-alias-for-vs-121-sensor-3-pe.png,
        title: Apply all changes.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=editAlias %}

Now you should be able to see the data from the device.

Example of the dashboard with data:

{% assign dashboard = '
    ===
        image: /images/devices-library/ready-to-go-devices/vs121-device/vs121-example-of-the-dashboard-pe.png,
        title: Example of the dashboard with data.
'
%}

{% include images-gallery.liquid imageCollection=dashboard %}