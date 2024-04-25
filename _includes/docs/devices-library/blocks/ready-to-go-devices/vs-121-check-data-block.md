### Check data on ThingsBoard

So, the device was added and if it sends any data - it should appear in "**Devices**".  
To check it you may open "Devices" page in "Entities" section. 
The device should be in devices list. You can check the data by clicking the device and navigate to the "**Attributes**" or "**Latest telemetry**" tab.

{% assign checkTelemetryOnDevice = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/vs121-device/check-telemetry-on-device.png,
        title: Open "Devices" page in "Entities" section. The device should be in devices list. You can check the data by clicking the device and navigate to the "Attributes" or "Latest telemetry" tab.
'
%}

{% include images-gallery.liquid imageCollection=checkTelemetryOnDevice %}

<br>
In order to get more user-friendly view - you can use [dashboard](/docs/pe/user-guide/dashboards){: target="_blank"}.
Download a simple dashboard for this device. It is configured to display a data from "Count people all", "Max count people", "Signal strength", "Region count" and "Occupancy" timeseries keys of device with name "eui-24e124538b223213".

{% include /docs/devices-library/blocks/basic/thingsboard-upload-example-dashboard.md exampleDashboardPath="/docs/devices-library/resources/dashboards/ready-to-go-devices/vs-121-sensor-dashboard.json" %}  

{% include /docs/devices-library/blocks/basic/thingsboard-chenge-entity-alias-block.md exampleDashboardPath="/docs/devices-library/resources/dashboards/ready-to-go-devices/vs-121-sensor-dashboard.json" %}

Example of the dashboard with data:

{% assign dashboard = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/vs121-device/vs121-example-of-the-dashboard-pe.png,
        title: Example of the dashboard with data.
'
%}

{% include images-gallery.liquid imageCollection=dashboard %}