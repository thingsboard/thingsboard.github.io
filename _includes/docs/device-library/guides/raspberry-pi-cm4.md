{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}

[Elastel EG500](https://www.elastel.com/products/industrial-raspberry-pi/eg500-edge-computing-gateway/){:target="_blank"} is an Industrial Edge Computing Gateway powered by **Raspberry Pi CM4**.

Perfect for use as an IoT Gateway, data acquisition device, Industrial Controller, or for Edge Computing applications.

Designed for IIoT applications, it features:
- **Industrial interfaces**: 2× GbE, 2× USB, 1× RS485, 1× RS232, 6× DI, 6× DO, and 3× ADC
- **Connectivity options**: 4G, LoRa, Wi-Fi/BLE, WiFi HaLow (802.11ah WiFi)
- **Enclosure**: Truly IPC-grade stability and ruggedness

In this tutorial we will use Elastel EG500 as edge gateway to collect data from RS485 Modbus temperature & humidity sensor, also collect the DI status value and control the DO on/off which wiring a LED light. EG500 will connect to ThingsBoard for data visualizing and controlling the LED.

## Prerequisites

To continue with this guide, you will need to have access to ThingsBoard Professional Edition. The easiest way is to use [ThingsBoard Cloud](https://thingsboard.io/installations/choose-region/){:target="_blank"} server.
The alternative option is to install ThingsBoard using [installation guide](/docs/user-guide/install/pe/installation-options/){:target="_blank"}.

Also, you will require the following items:

- An **Elastel EG500** device
- An **RS485 Modbus Temperature & Humidity sensor**
- A **LED light**

### Wiring scheme

![wiring1](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/wiring1.png)
![wiring2](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/wiring2.png)


## Create device on ThingsBoard

**1. In our example, we use ThingsBoard Cloud**

Create an account and then [log in](https://thingsboard.cloud/login){:target="_blank"}.

![thingsboard_login](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/thingsboard_login.png)

<br>**2. Create a device on ThingsBoard**

Go to the "**Devices**" page of the "**Entities**" section, click on the "**+**" icon button in the top right corner of the table and then select "**Add new device**" from drop-down menu.

![add_new_device](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/add_new_device.png)

<br>**3.** Enter a device name (e.g., **Elastel_EG500**) and click "**Add**".

![add_device_name](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/add_device_name.png)

<br>**4. Copy and save the Access token**

It will be needed in further device configuration for connecting to ThingsBoard cloud.

![access token](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/access_token.png)

## Elastel device configuration

In this step, we will configure Elastel EG500 to collect data from RS485 Modbus sensor and DI/DO status value. Elastel devices has prebuilt [Elastel IIoT gateway software ElastPro](https://www.elastel.com/iiot-gateway-software-elastpro/){:target="_blank"} which provide web-based programs for easy configuration and data collect setup.

**1. Launch ElastPro**

To launch ElastPro, follow [this guide](https://docs.elastel.com/docs/ElastPro/Getting_Started){:target="_blank"}.

**2. Enable Data Collect** 

Go to the **Data Collect** -> **Basic**, enable the **Data collect** function, and configure the **Collect period**, **Report period**, then click the "**Apply settings**" button.

![enable data collect](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/basic_setting.png)

<br>**3. Configure the RS485 Serial port for Modbus sensor data collect**

Go to the **Data Collect** -> **Interfaces** to enable the COM1 RS485 for connecting the RS485 **Temp&Humidity Sensor**, configure the related parameters, then "**Apply settings**".

![rs485 interface setting](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/rs485_interface.png)

<br>Go to **Data Collect** -> **South Devices** -> **Modbus Rules** to configure the collect Modbus data from **Temp&Humidity Sensor**, then "**Apply settings**".

![Modbus rule settings](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/modbus_rule_settings.png)

<br>**4. Configure the IO port for collect DI status and control DO status** 

Go to **Data Collect** -> **South Devices** -> **IO**, add DI and DO Setting rules, configure the relevant parameters and click the "**Apply settings**".

![IO settings](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/io_settings.png)

## Connect device to ThingsBoard

Go to the **Data Collect** -> **North Apps** -> **Reporting Center** to configure the connection to ThingsBoard platform via MQTT.

![Connect mqtt to ThingsBoard](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/mqtt_thingsboard_connect.png)

> Note: If using custom MQTT credentials on ThingsBoard, set them under **Next: Credentials → MQTT Basic** during device creation, and use those here.

Refer to the [**ElastPro User Manual**](https://docs.elastel.com/docs/ElastPro/intro){:target="_blank"} for more detailed configuration options.

## Check data on ThingsBoard

Once connected, data will appear under the device&#39;s **latest telemetry** tab in ThingsBoard.

![check data on thingsboard](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/data_on_thingsboard.png)

<br>You can also view the data on EG500&#39;s local dashboard.

![data on device local](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/data_on_devicelocal.png)

### Create Dashboard

Now let&#39;s display the data from the Elastel EG500 device on the dashboard. Learn more how to work with the dashboard [here](/docs/pe/user-guide/dashboards/){:target="_blank"}.

Go to the "**Dashboards**" page, click on the "**+**" icon button in the top right corner of the table and then select "**Create new dashboard**" from drop-down menu. Enter the Title of the dashboard, then click "**Add**".

![add dashboard](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/add_dashboard.png)

<br> On the Dashboard edit page, click the "**+ Add new widget**" button to add [widget](/docs/pe/user-guide/widgets/){:target="_blank"} for displaying our telemetry data.

![add widget](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/add_widget.png)

<br>Select the appropriate widget template and configure the data source accordingly. For example, choose a **Value card** to display the "Temperature" data and add the "Temperature" data key as a data source from the EG500 device we created.

![add temperature widget](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/add_temp_widget.png)

<br>After completing the widget setup, click the "**Add**" button. We have now added a widget that displays the real-time temperature value.

![temperature widget](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/temperature_widget.png)

<br>Similarly, add widgets to display **humidity** and **door state** data, and add a "**Power button**" widget to control turning on/off the indicator light.
After completing the dashboard configuration, click the "**Save**" button.

Now we have a visualizing dashboard for displaying data and controlling the DO (LED light).

![add other widget](/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/other_widget.png)

## Demonstration of the result

<object width="100%" data="/images/devices-library/basic/single-board-computers/raspberry-pi-cm4/demonstration_show.gif"></object>

## Conclusion

By following this guide, you can easily integrate Elastel IIoT gateways with ThingsBoard. Elastel’s easy-to-use web UI and ThingsBoard’s powerful visualization tools make the edge-to-cloud connection seamless.

- Learn more about [**Elastel Edge Devices**](https://www.elastel.com/products/){:target="_blank"}.
- Explore ThingsBoard [**Documentation**](https://thingsboard.io/docs/pe/){:target="_blank"} for advanced features and concepts.
{% include add-device-banner.liquid %}