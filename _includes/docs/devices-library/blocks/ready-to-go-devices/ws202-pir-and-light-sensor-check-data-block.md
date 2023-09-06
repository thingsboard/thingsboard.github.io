### Check data on ThingsBoard

So, the device was added and if it sends any data - it should appear in **Devices**.  
To check it you may open **Entities** menu tab and click on **Devices**.  
<br/>  
  
![Created device](/images/devices-library/ready-to-go-devices/ws202-pir-and-light-sensor/lora-device-created-through-integration.png)  
<br/>  
  
The device should be in devices list. You can check the data by click on it and open tab **Attributes** or **Latest telemetry**.  
<br/>  
  
![Check telemetry on device](/images/devices-library/ready-to-go-devices/ws202-pir-and-light-sensor/check-telemetry-on-device.png)  
<br/>  
  
In order to get more user-friendly view - you can use [dashboards](/docs/user-guide/dashboards.md){: target="_blank"}.  
You can download a simple dashboard for this device, it is configured to display a data from "pir", "light" and "battery" telemetry keys for device with name "*eui-24e124538b223213*".  
You can change device in **Edit mode** in "Entity aliases" window. (To open it - open the dashboard, click on "**Edit mode**" button and click on "**Aliases**" button, choose your device instead of default one.)  
<br/>   
  
{% include /docs/devices-library/blocks/basic/thingsboard-upload-example-dashboard.md exampleDashboardPath="/docs/devices-library/resources/dashboards/ready-to-go-devices/ws202_pir_and_light_sensor.json" %}  
<br/>  
  
Example of the dashboard with data:  

<br/>

![Dashboard](/images/devices-library/ready-to-go-devices/ws202-pir-and-light-sensor/dashboard.png)  
<br/>
