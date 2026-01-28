### Check data on ThingsBoard

So, the device was added and if it sends any data - it should appear in **Devices**.  
To check it you may open **Devices** page in **Entities** section.
The device should be in devices list. You can check the data by click on it and open tab **Attributes** or **Latest telemetry**.

{% assign checkTelemetryOnDevice = '
    ===
        image: /images/devices-library/ready-to-go-devices/am308/check-telemetry-on-device.png,
        title: Open "Devices" page in "Entities" section. The device should be in devices list. You can check the data by clicking the device and navigate to the "Attributes" or "Latest telemetry" tab.
'
%}

{% include images-gallery.liquid imageCollection=checkTelemetryOnDevice %}

<br>
In order to get more user-friendly view - you can use [dashboards](/docs/pe/user-guide/dashboards){: target="_blank"}.  
You can download a simple dashboard for this device, it is configured to display a data from "pir", "light level", "beep", "battery level", "Temperature", "Humidity", "CO2", "Pressure", "TVOC", "PM2.5", "PM10" and "Signal strength" telemetry keys for device with name "eui-24e124538b223213".

{% include /docs/device-library/blocks/basic/thingsboard-upload-example-dashboard.md exampleDashboardPath="/docs/devices-library/resources/dashboards/ready-to-go-devices/am308-device-dashboard.json" %}

{% include /docs/device-library/blocks/basic/thingsboard-change-entity-alias-block.md exampleDashboardPath="/docs/devices-library/resources/dashboards/ready-to-go-devices/am308-device-dashboard.json" %}

Example of the dashboard with data:

{% assign dashboard = '
    ===
        image: /images/devices-library/ready-to-go-devices/am308/am308-example-of-the-dashboard-pe.png,
        title: Example of the dashboard with data.
'
%}

{% include images-gallery.liquid imageCollection=dashboard %}