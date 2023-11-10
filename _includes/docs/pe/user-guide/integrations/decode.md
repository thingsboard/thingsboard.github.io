* TOC
{:toc}

## Introduction
This tutorial will show how to set up and integrate diverse signals from District Heating Substation (DHS) facility into ThingsBoard IoT platform using Decode DL28 Communications processor. Signals from digital and analog I/O, Modbus RTU devices and M-Bus heat meters are combined in a single ThingsBoard dashboard. Due to simplicity only a few signals and devices are connected but in real world  installation up to several hundred devices and several thousand signals may be used.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture0.png)



## System diagram
System diagram shows some typical automation and metering elements in DHS: substation controllers or pump controllers connected to RS485 communication line, heat meters on M-Bus line and some I/O expansion to control valves and monitor level switches for example.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture1.png)



Decode [DL28](https://decode.rs/product/dl28/) device plays role of communication and signal concentrator and provides bridge function between all control, monitoring and measuring equipment installed in DHS and ThingsBoard servers on internet. Three signal are used in this example: two relay outputs and one of temperatures from heat meter.

## Prerequisites 
- Demo account on ThingsBoard
- Computer with Ethernet connection and web browser
- Decode DL28 communication controller
- Decode EXIO I/O expansion device
- Modbus RTU slave with at least one relay output
- Heat meter with M-Bus
- Connection to Internet

## Setup of ThingsBoard
### Step 1. Log in
Go to ThingsBoard demo web page https://demo.thingsboard.io and log in with credentials obtained when account is created.
### Step 2. Add DL28 device
After the successful login procedure, click on the Devices entry in the left side menu and then on "+" icon. Select Add New Device option, enter Name, Device type and Label fields and click on Add button.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture2.png)



DL28 device appears on a Device window. Click on DL28 to open Device details window.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture3.png)



Client ID and Access token, used later in DL28 MQTT settings menu, may be copied using COPY DEVICE ID and COPY ACCESS TOKEN buttons.

### Step 3. Add Dashboard
Click on the Dashboards entry in the left side menu and then on "+" icon. Select Create new dashboard option, enter Name and Description fields and click on Add button. 



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture4.png)



DL28 dashboard appears in a Dashboard window. 

### Step 4. Add Widgets
Click on DL28, then on OPEN DASHBOARD button to open Dashboard. Click on the pencil icon to enter Edit mode and on ADD NEW WIDGET. From drop down list select Control widgets and then Switch control. Switch control widgets will be used to control relays on EXIO and Modbus RTU device.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture5.png)



In Add Widget window click on the Entity alias field and press ENTER. Add DL28 device in a Entity alias list. Do this only once for all widgets.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture6.png)



Click on a Advanced tab and enter following parameters.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture7.png)



In Convert value function  enter following code for changing switch state. Data is published to topic **v1/devices/me/request+**.

```bash
if(value) return { "exio_relay_1": 1 };
else return { "exio_relay_1": 0 };
```



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture8.png)



Click ADD button to add widget to dashboard. Using similar procedure, add another switch widget with Switch title **GT900 RL1**, Attribute/Timeseries value key **gt900_relay_1** and in Convert value function **{ "gt900_relay_1": 1 }** for switch in ON state and **{ "gt900_relay_1": 0 }:** for switch in OFF state.

Using similar procedure add two Led indicator widgets to display relay states, using LED titles **EXIO LED RL1** and **GT900 LED RL1**, and Attribute/Timeseries value keys **exio_relay_1** and **gt900_relay_1**.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture9.png)



Using similar procedure add Digital gauge widget to display return temperature from M-Bus heat  meter adding new Datasource. In a field Entity timeseries/attributes enter **cal_return_temp** and click on symbol for timeseries. Click on Add button to add gauge to dashboard.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture10.png)



Click on apply changes icon to save changes and to exit edit mode.

## Setup of DL28 device
### Step 1. Connection
Connect computer and the DL28 device to the same computer network with internet connection. Network addresses must be the same. Connect EXIO I/O expansion device to I2C port, modbus RTU slave to RS485 port S6 and heat meter to M-Bus master port S4 of DL28 using block diagram. Connect a power supply following safety procedures from user manual, and power up all connected devices.
### Step 2 . Sign in
Enter the IP address of DL28 device into web browser address bar and hit the ENTER. In popup window enter username and password. Default IP address, username and password are: **192.168.0.67**, **admin**, **admin** respectively.  After successful sign in the DL28 web page is loaded. Update current time on device if it is not valid. Change Default Gateway address in LAN settings if it is necessary.
### Step 3. Setup EXIO
In EXIO device menu click on Rescan button. EXIO device is detected and placed in device list. In this example EXIO type 3 is used (7xAI, 2xDO, 2xAO). Click Save button.
### Step 4. Setup Modbus RTU
In Modbus settings menu, check Modbus Master option and select value for poll interval and response timeout, for example 5 minutes and 10 seconds respectively. Click Save button.
In Modbus Poll list menu add two parameters. For relay on/off control use ForceSingleCoil and for readout of the relay state use ReadCoilStatus. Automatically assigned register addresses are 52000 and 52001.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture11.png)



### Step 5. Setup M-Bus
In Modbus Settings menu select M-Bus master mode, scan address range and polling interval. In this example address range is 1 to 3 and polling interval is 3 minutes. Click on a Save button.
In Modbus Slave List menu click on Rescan button to start detection of connected M-Bus device. When device is added to list, click Save button to save it, and click Reload button to load new device data.
Select a show/hide option to show detailed device data. Data values from M-Bus are stored in Modbus map using 4-byte float format. Find data fields of interest. In this example, Return Temperature is selected, stored in Input Register with offset 1222.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture12.png)



### Step 6. Setup MQTT
In MQTT Settings menu tick check boxes: Enable, Clean Session and JSON format. Enter Thingsboard broker data: Broker: **demo.thingsboard.io**, Port: **1883**, Reconnect Period: **10**, Keep Alive Interval: **60**, Client ID: Enter **Device ID** obtained from ThingsBoard demo account, Username: Enter **Access Token** obtained from ThingsBoard demo account, Password: Leave empty. Click on a Save button.
In MQTT Publish List menu add three parameters, two for publishing relay states,  and one for publishing return temperature from heat meter. Click on a Save button.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture13.png)



Enter MQTT Subscribe List menu. Subscribe to topic **v1/devices/me/rpc/request/+** for two parameters with keywords  **exio_relay_1** and **gt900_relay_1** and reference them to DL28 internal Modbus Holding register 508 and Input register 52000 respectively.
Click on a Save button to save changes and restart application by clicking on Restart button application in a Restart menu.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture14.png)



## Testing
Open the DL28 dashboard. Relays are controlled by clicking on switches EXIO RL1 and GT900 RL1. Indicators show real state of output relays and some delay may be noticed on slow networks. Widget CAL_RETURN_TEMP  displays return temperature from heat meter.



![image](https://img.thingsboard.io/user-guide/integrations/decode/Picture15.png)



## Conclusion
It is shown that the ThingsBoard is ideal platform for remote monitoring and control of district heating substation facilities. The solution is very scalable in terms of increasing the number of devices, dashboards and widgets and may cover even large distribution networks for whole cities. It is also demonstrated that mixing of remote monitoring and control with meter reading is possible in a ThingsBoard system.

More details about the used products are available on their pages and manuals that could be downloaded from download page.

Please feel free to get in touch with Decode Team if you have any additional questions.
## See also

Browse other [samples](/docs/samples) or explore guides related to main ThingsBoard features:

 - [Device attributes](/docs/{{docsPrefix}}user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/{{docsPrefix}}user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/{{docsPrefix}}user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
 - [Data Visualization](/docs/{{docsPrefix}}user-guide/visualization/) - how to visualize collected data.

{% include templates/feedback.md %}

{% include socials.html %}

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/multi-project-guides-banner.md %}
