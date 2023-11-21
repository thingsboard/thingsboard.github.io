### Check data on ThingsBoard

So, the device was added and if it sends any data - it should appear in **Devices**.  
To check it you may open **Devices** page in **Entities** section.
The device should be in devices list. You can check the data by click on it and open tab **Attributes** or **Latest telemetry**.

![Check telemetry on device](https://img.thingsboard.io/devices-library/ready-to-go-devices/ws101-smart-button/check-telemetry-on-device.png)

<br>
In order to get more user-friendly view - you can use [dashboards](/docs/pe/user-guide/dashboards){: target="_blank"}.  
You can download a simple dashboard for this device, it is configured to display a data from "press" and "battery" telemetry keys for device with name "*eui-24e124538b223213*".  

{% include /docs/devices-library/blocks/basic/thingsboard-upload-example-dashboard.md exampleDashboardPath="/docs/devices-library/resources/dashboards/ready-to-go-devices/ws_101_smart_button.json" %}

{% include /docs/devices-library/blocks/basic/thingsboard-chenge-entity-alias-block.md exampleDashboardPath="/docs/devices-library/resources/dashboards/ready-to-go-devices/ws_101_smart_button.json" %}

Example of the dashboard with data:  

![Dashboard](https://img.thingsboard.io/devices-library/ready-to-go-devices/ws101-smart-button/example-of-the-dashboard-pe.png)