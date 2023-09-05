### Check data on ThingsBoard

So, the device was added and if it sends any data - it should appear in **Devices**.  
To check it you may open **Entities** menu tab and click on **Devices**.  
  

![Created device](/images/devices-library/ready-to-go-devices/ws202-pir-and-light-sensor/lora-device-created-through-integration.png)
  

The device should be in devices list. You can check the data by click on it and open tab **Attributes** or **Latest telemetry**.  
  

![Check telemetry on device](/images/devices-library/ready-to-go-devices/ws202-pir-and-light-sensor/check-telemetry-on-device.png)
  

In order to get more user-friendly view - you can use [dashboards](/docs/user-guide/dashboards.md){: target="_blank"}.  
You can download a simple dashboard for this device, it is configured to display a data from "pir", "light" and "battery" telemetry keys for device with name "*eui-24e124538b223213*".  
You can change device in **Edit mode** in "Entity aliases" window. (To open it - open the dashboard, click on "**Edit mode**" button and click on "**Aliases**" button, choose your device instead of default one.)  

You can find example how to import dashboard below:  

{% include /docs/devices-library/blocks/basic/thingsboard-upload-example-dashboard.md exampleDashboardPath="/docs/devices-library/resources/dashboards/ready-to-go-devices/ws202_pir_and_light_sensor.json" %}

Example of the dashboard with data:  

![Dashboard](/images/devices-library/ready-to-go-devices/ws202-pir-and-light-sensor/dashboard.png)  
