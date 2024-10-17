### Check data on ThingsBoard

So, the device was added and if it sends any data - it should appear in **Devices**.  
To check it you may open **Devices** page in **Entities** section. 
The device should be in devices list. You can check the data by click on it and open tab **Attributes** or **Latest telemetry**.

![Check telemetry on device](/images/devices-library/ready-to-go-devices/ws202-pir-and-light-sensor/check-telemetry-on-device.png)

<br>
In order to get more user-friendly view - you can use [dashboards](/docs/pe/user-guide/dashboards){: target="_blank"}.  
You can download a simple dashboard for this device, it is configured to display a data from "pir", "light" and "battery" telemetry keys for device with name "*eui-24e124538b223213*".  

{% include /docs/devices-library/blocks/basic/thingsboard-upload-example-dashboard-for-ws-202.md exampleDashboardPath="/docs/devices-library/resources/dashboards/ready-to-go-devices/ws202_pir_and_light_sensor.json" %}  

{% include /docs/devices-library/blocks/basic/thingsboard-change-entity-alias-block.md exampleDashboardPath="/docs/devices-library/resources/dashboards/ready-to-go-devices/ws202_pir_and_light_sensor.json" %}

Example of the dashboard with data:

![Dashboard](/images/devices-library/ready-to-go-devices/ws202-pir-and-light-sensor/example-of-the-dashboard-pe.png)