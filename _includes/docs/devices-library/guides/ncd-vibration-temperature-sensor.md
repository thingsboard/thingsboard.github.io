
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://store.ncd.io/product/c1d2-industrial-iot-wireless-2-channel-vibration-temperature-sensor-v3" %}
{% assign thingsboardHost = "https://" | append: {{hostName}} %}
{% assign officialManualLink = "https://resource.milesight.com/milesight/iot/document/am300-series-user-guide-en.pdf" %}

## Introduction

**Industrial IoT Wireless Vibration Temperature Sensor**

This IIoT sensor is designed to monitor vibration, frequency, and temperature in industrial environments. It provides valuable data that can be used for predictive maintenance, equipment monitoring, and overall operational efficiency.

<br><br><br>
Some Vibration Plus Applications:

• Advanced Predictive Maintenance for Rotating Equipment<br>
• Comprehensive Structural Health Monitoring<br>
• Process Automation and Quality Control in Manufacturing<br>
• Optimization of Energy Efficiency in Industrial Systems

In this tutorial, we will guide you through the process of setting up the NCD Industrial IoT Wireless Vibration and Temperature Sensor with the Enterprise IIoT Gateway.This includes creating a device, configuring parameters, transmitting sensor data to ThingsBoard via the MQTT protocol, and designing a real-time dashboard for sensor data monitoring and analysis.

**Enterprise IIoT Gateway Lite**

![Enterprise IIoT Gateway Lite](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/3-ncd-to-thingsboard-IIoT-Gateway-Lite.png){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
The Enterprise IIoT Gateway gets, processes, decodes, and transmits data from the NCD Industrial IoT sensor to various cloud services or Industrial protocols. You can think of it as a Wi-Fi router, but it uses a specialized wireless protocol called DigiMesh®. Both the NCD sensor and the Enterprise IIoT Gateway communicate using this protocol, which is specifically designed and tested for industrial applications.

## Overview

The Industrial IoT Wireless Vibration and Temperature Sensor captures critical field parameters, including temperature and vibration data. Utilizing the robust DigiMesh® industrial protocol, the sensor transmits this data to the Enterprise IIoT Gateway. The gateway, equipped with the NCD Node-RED library, receives, decodes, and filters the data for further processing. Once prepared, the data is transmitted to the ThingsBoard platform via the MQTT protocol. Within ThingsBoard, the data can be queried, analyzed, and visualized in real-time through custom dashboards, providing actionable insights for monitoring and decision-making.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/4-ncd-to-thingsboard-overview.png)

## Requirements

To transmit data from NCD Industrial IoT sensors to ThingsBoard, certain prerequisites must be met.

- [ThingsBoard Cloud](https://thingsboard.io/installations/){:target="_blank"} account 
- NCD Industrial IoT Wireless Vibration Temperature Sensor V3
- NCD Enterprise IIoT Gateway Standard or Lite version:
  - [Enterprise IIoT Gateway](https://store.ncd.io/product/enterprise-iiot-gateway/){:target="_blank"}
  - [Enterprise IIoT Gateway Lite](https://store.ncd.io/product/enterprise-iiot-gateway-lite/){:target="_blank"}

{% capture difference %}
**Note**: While the ThingsBoard Cloud is used in this example, [ThingsBoard on-premise deployment](/docs/user-guide/install/pe/installation-options/){:target="_blank"} can also be used.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture difference %}
**Note**: This tutorial can be replicated with any other NCD Industrial Sensor.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

With these components, you can connect the NCD sensor to the Enterprise IIoT Gateway and leverage the built-in Node-RED instance to forward sensor data to ThingsBoard using the MQTT protocol.

This tutorial provides a comprehensive walkthrough of the essential configuration steps, including connecting NCD devices, registering them on the platform, setting up a ThingsBoard Cloud account, adding and linking a new gateway, and creating a dashboard to visualize real-time sensor data effectively.

## Configuring the NCD Vibration Sensor and Enterprise IIoT Gateway

We'll start by setting up the Enterprise IIoT Gateway and the Vibration Sensor, followed by connecting them. This process is straightforward, and we have a detailed guide available for reference. Below is a brief overview, but for complete instructions, please refer to the following NCD documentation:

- [Industrial IoT Wireless Vibration Temperature Sensor V3 Quick Start Guide](https://ncd.io/blog/industrial-iot-wireless-vibration-temperature-sensor-v3-quick-start-guide/){:target="_blank"}<br>
- [Industrial IoT Wireless Vibration Temperature Sensor V3 User Manual](https://ncd.io/blog/industrial-iot-wireless-vibration-temperature-sensor-v3-user-manual/){:target="_blank"}

Unbox your NCD Enterprise IIoT Gateway, connect it, and power it on following the provided instructions. Then, connect the ETH0 port to your DHCP-enabled router (the Gateway will act as a DHCP client). It will automatically obtain an IP address. After giving the device some time to boot, you should be able to access the Node-RED instance running on it by using its local IP address or domain name, appending port 1880 (the default Node-RED port).

We recommend using the local domain name format: **ncd-xxxx.local:1880**, where "**xxxx**" refers to the last four digits of the Enterprise IIoT Gateway's MAC address (printed on the side of the device). For example, **http://ncd-c398.local:1880**

### Connect the sensor to the Gateway

Upon accessing the Node-RED instance, you will notice a pre-configured flow that includes a Wireless Gateway node and a Debug node. These nodes form part of the default configuration, enabling the system to receive and display messages from connected devices.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/5-ncd-to-thingsboard-nodered.png)

This flow is preconfigured and ready to receive data from NCD sensors. When an NCD sensor connects to the wireless network and transmits data, the "**Wireless Gateway**" node automatically receives and processes the message. The processed message is then passed through its output terminal and sent to the "**Debug**" node. This node displays the message in the **Debug window**, located on the right side of the Node-RED editor.
At this stage, everything is ready, and you can proceed to power on your NCD Vibration Sensor. NCD Industrial Sensors come pre-equipped with batteries and also support an external power supply option, which can be selected during the purchase process.

In this tutorial, we will focus on an example using a battery-powered sensor. However, the steps are equally applicable to sensors powered by an external supply. To activate the sensor, open its casing and toggle the power switch to the "Power by Internal Battery" position.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/6-ncd-to-thingsboard-vibration-sensor-inside.png)

The power switch on this device has three positions:

- Battery Power
- Off
- External Power

The **Battery Power** position will use the onboard batteries to power the sensor and transmit data.

The **Off** position will power down all components of the sensor and no data will be transmitted

The **External Power** position will use the external power supply connected to the onboard barrel connector to power the sensor and transmit data.

### NCD Vibration Sensor messages

Once the sensor is powered on, it begins transmitting data, and you will start seeing incoming messages. The "**Wireless Gateway**" node decodes the sensor data and forwards it through its output terminal to the "**Debug**" node. These messages are displayed in the **debug window** of the Node-RED editor. After activating the NCD Vibration Sensor, the Debug window should display messages similar to the following:

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/7-ncd-to-thingsboard-debug-window.png)

NCD sensors transmit a variety of messages that provide insight into the sensor&#39;s current mode and operational status, along with the actual sensor data. In this tutorial, we will focus specifically on the **RUN sensor_mode** and **sensor_data** message.

### RUN sensor_mode message

A RUN message signifies that the sensor, identified by the **msg.payload.mac** property, is powered on and successfully communicating with the **Enterprise IIoT Gateway** via the wireless network. This message contains critical details, including the sensor&#39;s MAC **Address**, **sensor type**, **node ID**, **mode**, and **timestamp**.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/8-ncd-to-thingsboard-debug-run-message.png)

### sensor_data message

The **sensor_data** message includes critical information such as the **firmware version**, **battery percentage**, **sensor type**, **data values**, **sensor name**, **MAC address**, and other essential details.

The **sensor_data** message can be identified by the **msg.topic** property. When the sensor transmits a data message, the **msg.topic** is set to **sensor_data** which makes it easier to filter or manage the sensor data. To view the sensor data in the **debug window**, simply click on the message. You should see something like this.

In this tutorial, our primary focus will be on transmitting **RUN sensor mode** and **sensor data** messages to effectively monitor the sensor’s real-time status. We will explore these topics in greater detail later in the tutorial. For now, let’s move on to **ThingsBoard** to configure all the necessary components.

{% assign thingsboardDebugMsgPayload = '
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/9-ncd-to-thingsboard-debug-msg-payload.png,
'
%}

{% include images-gallery.liquid imageCollection=thingsboardDebugMsgPayload %}

## Configuring ThingsBoard Cloud

You can find the documentation to help you get started with ThingsBoard Professional Edition, as well as the MQTT Gateway API Reference, available here:

- [Getting Started with ThingsBoard Professional Edition](https://thingsboard.io/docs/paas/eu/getting-started-guides/helloworld/){:target="_blank"}
- [MQTT Gateway API Reference](https://thingsboard.io/docs/reference/gateway-mqtt-api/){:target="_blank"}

The first step is to [sign in using your ThingsBoard account](https://thingsboard.cloud/login){:target="_blank"}. 

{% assign thingsboardWelcome = '
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/sign-into-thingsboard-1-pe.png,
        title: The first step is to sign in using your ThingsBoard account.
'
%}

{% include images-gallery.liquid imageCollection=thingsboardWelcome %}

<br>
Once you sign in, you will be presented with important resources to help you get started, along with solution templates. Take a moment to explore these to familiarize yourself with the **ThingsBoard** environment.

{% assign thingsboardWelcome2 = '
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/thingsboard-welcome-1-pe.png,
        title: Once you sign in, you will be presented with important resources to help you get started, along with solution templates. Take a moment to explore these to familiarize yourself with the ThingsBoard environment.
'
%}

{% include images-gallery.liquid imageCollection=thingsboardWelcome2 %}

<br>
The first step is to add a new [device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"} to your ThingsBoard instance. To do this, follow thi steps:

{% assign addingIsGatewayDevice = '
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-is-gateway-device-1-pe.png,
        title: Go to the "**Devices**" page in the "**Entities**" section. In the next window, you will see a list of all your devices. We need to add a new one. Click the "**+**" icon in the upper right corner of the table. Then, from the dropdown menu, select "**Add new device**".
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-is-gateway-device-2-pe.png,
        title: Once you do this, a new window will appear. You need to assign a name to the new device - in this case, we used "**NCD Enterprise IIoT Gateway**". You can also specify a label, groups, description, and other parameters. Make sure to enable the "**Is gateway**" toggle. Next, click "**Next: Credentials**".
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-is-gateway-device-3-pe.png,
        title: You will now be taken to the device credentials window. Select the "**MQTT Basic**" option (you can optionally add additional MQTT security layers here). Next, generate the **Client ID**, **Username**, and **Password** by clicking the "Generate" button next to each option. These credentials are required for configuring the **Node-RED MQTT node** to establish a connection with the **Enterprise IIoT Gateway**.
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-is-gateway-device-4-pe.png,
        title: After generating the credentials, use the "**Copy**" button to obtain each value. We recommend saving these values in a temporary file, as we will use them later in the **Node-RED MQTT node** in this guide. Next, click "**Add**".
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-is-gateway-device-5-pe.png,
        title: After this, a new window will appear, allowing you to test the connectivity. However, since we are using a Gateway, a different set of MQTT topics is required for proper integration with the ThingsBoard gateway device. You can skip this step. For now, we will identify the MQTT server to use for the connection: "mqtt.thingsboard.cloud". Click the "**Close**" button to proceed.
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-is-gateway-device-6-pe.png,
        title: We have successfully added a new Gateway configured to use the MQTT protocol. The next step is to configure the MQTT credentials in the Enterprise IIoT Gateway to verify connectivity.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addingIsGatewayDevice %}

## Importing and configuring the NCD template flow

The next step is to **import** and **configure** a pre-configured **flow template**. This flow will allow us to filter and format the vibration sensor data before connecting it to the ThingsBoard MQTT broker server and publishing the sensor data. The flow will also set the appropriate topics based on the ThingsBoard MQTT Gateway API reference. To import the flow into your workspace, begin by navigating to the GitHub repository and copying or downloading the RAW JSON file: [ncd-vibration-sensor-t80-to-thingsboard-mqtt.json](/docs/devices-library/resources/ncd-vibration-sensor-t80-to-thingsboard-mqtt.json){:target="_blank"}

{% capture difference %}
**Internal note**: This flow will be on NCD Github repository.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Next, in Node-RED, navigate to the main menu in the top right corner of the editor and click on the "**Import**" option:

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/28-ncd-to-thingsboard-node-red-import.png)

<br>
To import the **ncd-vibration-sensor-t80-to-thingsboard-mqtt.json** file, simply open the window and either select the file using the "**Select a file to import**" button or paste the copied JSON code into the pink text box. Once done, click the "**Import**" button to proceed.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/29-ncd-to-thingsboard-node-red-import.png)

<br>
A pop-up message will appear at the top of the Node-RED editor, indicating the nodes that have been successfully imported into your workspace.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/30-ncd-to-thingsboard-node-red-importing.png)

<br>
You can now position the flow within your Node-RED workspace. The next step is to connect the output of the "**Wireless Gateway**" node to the input of the "**ncd-filter-mode**" node, as demonstrated in the following image.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/31-ncd-to-thingsboard-node-red-connect.png)

<br>
Next, we will provide a general overview of the function of each node in this flow. We will not go into a deep explanation of each node&#39;s function.

{% capture difference %}
**Note:** If you want to learn more about how these nodes work, you can select a node within the Node-RED editor and click on the "Info" tab, where you can find documentation related to each node in Node-RED.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/32-ncd-to-thingsboard-node-red-info.png)

<br>
**ncd-filter-mode**: This node evaluates the incoming messages from the "**Wireless Gateway**" node. It specifically filters and directs messages based on their topic. **Output 1** is dedicated to messages of topic **sensor_mode**, which contain the operational modes of the sensor. For this tutorial, we will focus on **RUN mode**, which indicates that the sensor is connected to the Enterprise IIoT Gateway network and ready to transmit data. **Output 2** is for **sensor_data** messages, which include critical information such as **battery percentage**, **vibration**, **temperature**, and other sensor readings.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/33-ncd-to-thingsboard-node-red-filter.png)

<br>
**ncd-filter-by-run-mode**: This node will evaluate whether the sensor is in **RUN mode**. If the sensor is not in **RUN mode**, the message will not flow through the node.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/34-ncd-to-thingsboard-node-red-run-mode.png)

<br>
**ncd-set-device**: This node allows us to extract the MAC address of the sensor (by specifying the last 8 alphanumeric characters: &#39;**xx:xx:xx:xx**&#39;) and assign it as the **msg.payload.device** value.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/35-ncd-to-thingsboard-node-red-set-device.png)

<br>
{% capture difference %}
**Note**: An example of an NCD device MAC address is: **00:13:A2:00:42:53:64:33**. After processing through this node, the msg.payload.device property will contain the shortened MAC address: **42:53:64:33**.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**ncd-set-mqtt-topic-connect**: This node sets the MQTT topic for ThingsBoard, which serves to inform the platform that the device is successfully connected to the Gateway.   
**msg.topic = &#39;v1/gateway/connect&#39;**

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/36-ncd-to-thingsboard-node-red-topic-connect.png)

<br>
**ncd-filter-by-type**: NCD IoT manufactures a wide range of Industrial IoT Sensors, each identified by a **sensor type**. This node allows us to filter sensor messages based on the sensor type. In this case, it filters messages corresponding to the "**One Channel Vibration Sensor**", which is identified by sensor type '**80**'.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/37-ncd-to-thingsboard-node-red-filter-by-type.png)

<br>
**ncd-attributes**: This is a function node that uses JavaScript code to ensure that a sensor_data message of **type 80** is sent only once after a deployment. The node allows us to define various **sensor attributes**, such as the **address**, **sensor name**, **firmware version**, **node ID**, and **sensor type**. These attributes are then wrapped in the correct format according to the ThingsBoard MQTT Gateway API. Below is the JavaScript code:

```js
// Retrieve the 'flag' from the context or default to false
const flag = context.get("flag") || false;

if (!flag) {
   // Destructure properties from msg.payload
   const {
       addr,
       sensor_name: sensorName,
       firmware,
       nodeId,
       sensor_type: sensorType
   } = msg.payload;

   // Extract the device from the address
   const device = addr.substring(12);

   msg.payload = {
       [device]: {
           "Sensor Name": sensorName,
           "Firmware": firmware,
           "Node ID": nodeId,
           "Sensor Type": sensorType
       }
   };

   // Set the 'flag' in the context to avoid re-execution
   context.set("flag", true);
   return msg;
}
```

**ncd-set-mqtt-topic-attributes**:  This node sets the MQTT topic for ThingsBoard. The topic is used to update the sensor attributes on ThingsBoard.   
**msg.topic = &#39;v1/gateway/attributes&#39;**

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/38-ncd-to-thingsboard-node-red-topic-atributes.png)

<br>
**ncd-add-battery-to-sensor-data**: This node allows us to add the property containing the vibration sensor's battery percentage to the **msg.payload.sensor_data** message, which already includes temperature and vibration variables. This way, we can have all the relevant variables in a single message for this tutorial.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/39-ncd-to-thingsboard-node-red-battery.png)

<br>
**ncd-telemetry**: This is a function node. The JavaScript code extracts the **Sensor MAC address** and **timestamp** data from the msg.payload message. It then retrieves the **sensor_data** message (which includes battery percentage) and wraps it in the correct format for the ThingsBoard MQTT Gateway API. The JavaScript code is as follows:

```js
// Destructure relevant properties from msg.payload
const { addr, received: timestamp } = msg.payload;

// Extract the device ID from the address
const device = addr.substring(12);

// Extract the data from the message
const sensor_data = msg.payload.sensor_data;

// Construct the payload in a clean and structured way
msg.payload = {
   [device]: [
       {
           ts: timestamp,
           values: sensor_data
       }
   ]
};

return msg;
```

**ncd-set-mqtt-topic-telemetry**: this node Set the MQTT ThingsBoard telemetry topic, this topic serves to set the sensor data values on telemetry ThingsBoard.   
**msg.topic = &#39;v1/gateway/telemetry&#39;**

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/40-ncd-to-thingsboard-node-red-topic-telemetry.png)

<br>
**ncd-to-thingsboard**: This MQTT output node establishes a connection to the MQTT Broker using the required credentials to connect to ThingsBoard, allowing the data generated by the vibration sensor to be published to the ThingsBoard Cloud.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/41-ncd-to-thingsboard-node-red-mqtt-node.png)

<br>
Once we've reviewed the general functions of each Node-RED node in the flow, the next step is to configure the MQTT out node with the credentials generated in **ThingsBoard**. To access the properties of this node, double-click on the "**ncd-to-ThingsBoard**" node. Once you've opened the properties, the first step is to configure the "**mqtt-broker config node**". To do this, click the "**Add new mqtt-broker config node**" button.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/42-ncd-to-thingsboard-node-red-add-new-mqtt.png)

<br>
The next step is to set the Server property with the ThingsBoard MQTT Broker server address: "**mqtt.thingsboard.cloud**". For this example, we&#39;ll use the default port, **1883**. Lastly, you need to configure the **Client ID** property, which is generated in ThingsBoard.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/43-ncd-to-thingsboard-node-red-client-id.png)

<br>
The next step is to navigate to the security tab and enter the **Username** and **Password** credentials generated in **ThingsBoard**.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/44-ncd-to-thingsboard-node-red-security.png)

<br>
Finally, to save the configurations made within the node, click the "**Update**" button.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/45-ncd-to-thingsboard-node-red-update.png)

<br>
Once this is completed, the MQTT server configuration is finalized. The Topic property should be left empty because it will dynamically receive its value from the msg properties configured in the preceding nodes. These nodes have already defined the appropriate topics for each type of MQTT message.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/46-ncd-to-thingsboard-node-red-mqtt-server.png)

<br>
To save the changes made within the MQTT out node, click on the "**Done**" icon.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/47-ncd-to-thingsboard-node-red-done.png)

<br>
Once the MQTT credentials are configured, the next time the NCD vibration sensor transmits a message, it will be published to ThingsBoard via MQTT on the corresponding topic. To save and apply the changes made in your Node-RED application, click the "**Deploy**" button located at the top-right corner of the Node-RED editor.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/48-ncd-to-thingsboard-node-red-deploy.png)

<br>
Once you press the "**Deploy**" button, you will see the status "**connecting**" displayed just below the MQTT out node. This indicates that the system is attempting to establish a connection with the MQTT server.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/48-ncd-to-thingsboard-node-red-mqtt-node.png)

<br>
Once the connection is successfully established, you should see the status change to "**connected**", indicating that the Node-RED instance is now communicating with the MQTT server.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/49-ncd-to-thingsboard-node-red-mqtt-node-connected.png)

<br>
To test communication, you can manually **trigger a data transmission** from the NCD Vibration Sensor by pressing the "**RESET**" button inside the sensor. To access the button, remove the four screws from the white casing. Once inside, locate the RESET button and press it once.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/50-ncd-to-thingsboard-vibration-reset-button.jpg)

{% capture difference %}
**Note**: It is also possible to wait for the next transmission from the sensor to perform the test, without the need to press the RESET button, as the sensor sends data periodically at user-defined intervals.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Once a new message is transmitted by the sensor, you should be able to see some messages into the debug window that comes from the "**debug thingsboard**" node, you can identify this messages by the **msg.topic** property:

- **v1/gateway/connect**   
- **v1/gateway/attributes**   
- **v1/gateway/telemetry**   

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/51-ncd-to-thingsboard-node-red-mqtt-messages.png)

<br>
When you press the "**RESET**" button on the sensor, it first attempts to establish wireless network communication. Once the sensor successfully connects to the **Enterprise IIoT Gateway** network, it transmits a **RUN** message. Afterward, the sensor sends a **sensor_data** message.
The flow then uses the information from the RUN and sensor_data messages to build the **connect**, **attributes**, and **telemetry** messages. Let&#39;s break down each of these messages in detail.

## Connect message

This first message is generated when the **Industrial IoT Wireless Vibration Temperature Sensor** successfully establishes a connection with the **Enterprise IIoT Gateway**. **The Wireless Gateway node** receives the **sensor_mode** message, which contains the connection status of the sensor. The flow then uses a **switch node** to check if the message is a **RUN** message, indicating the sensor is successfully connected and operational.
If the message is a **RUN** message, the flow extracts the **MAC address** of the sensor and formats the message according to the **ThingsBoard API**. This message is crucial as it informs ThingsBoard that the device is successfully connected to the Gateway, allowing the platform to recognize the sensor and begin receiving telemetry and attribute data for further analysis and visualization.

```
Topic: v1/gateway/connect
```

```
Message: {
    "device":"Device A"
}
```

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/52-ncd-to-thingsboard-node-red-mqtt-connect.png)

### Attributes message

To build this message, the flow uses the **sensor_data** message, which contains essential sensor data. It extracts key pieces of information such as the **sensor name**, **firmware version**, **node ID**, and **sensor type**. This data is then formatted according to the **ThingsBoard attributes API**, which requires the data to be in key-value pair format. The flow sends this message only once to ThingsBoard.

In ThingsBoard, **device attributes** are key-value pairs that are associated with a device. These attributes are used to store important information, such as configuration settings, metadata, and operational details, providing context for the device. By including the sensor's attributes, ThingsBoard can store relevant information like the sensor's name, its version, and other characteristics, which are crucial for monitoring and managing the device efficiently within the platform.

```
Topic: v1/gateway/attributes
```

```
Message:{
    "Device A":{
        "attribute1":"value1", 
        "attribute2": 42
    }, 
    "Device B":{
        "attribute1":"value1",
        "attribute2": 42
    }
}
```

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/53-ncd-to-thingsboard-node-red-mqtt-attributes.png)

### Telemetry message

This message contains the real-time **sensor data**, which includes key readings such as **temperature**, **vibration**, and **battery percentage**. The flow formats this data and publishes it to **ThingsBoard** as **telemetry data**. Telemetry data in ThingsBoard is used for real-time monitoring and visualization, enabling users to track the sensor's status and performance over time.

By sending this telemetry message, the sensor's data is continuously updated on the ThingsBoard platform, where it can be displayed on dashboards for analysis, triggering alerts, or taking other actions based on the sensor&#39;s readings. This allows for effective monitoring and management of sensor networks in industrial IoT applications.

```
Topic: v1/gateway/attributes
```

```
Message: {
    "Device A": [
        {
            "ts": 1483228800000,
            "values": {
                "temperature": 42,
                "humidity": 80
            }
        },
    ]
}
```

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/54-ncd-to-thingsboard-debug-sensor-data.png)

## Checking connection to ThingsBoard Cloud

Now, return to the **ThingsBoard** platform. You will notice that a new device has been automatically added, identified by its **MAC address**. Both the **Enterprise IIoT Gateway** and the **Sensor device** will show an **Active** state. The system will automatically update the device status based on the sensor&#39;s communication.
You can click on the newly added device to explore its details, **Attributes**, **Latest telemetry**, **Alarms**, **Events**, **Relations**, **Audit Logs**, among others. By reviewing these sections, you can gain deeper insights into the device's status and performance within the ThingsBoard platform.

{% assign createdDevice1 = '
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/created-new-device-1-pe.png,
        title: Now, return to the **ThingsBoard** platform. You will notice that a new device has been automatically added, identified by its **MAC address**. Both the **Enterprise IIoT Gateway** and the **Sensor device** will show an **Active** state. The system will automatically update the device status based on the sensor's communication.
'
%}

{% include images-gallery.liquid imageCollection=createdDevice1 %}

You can click on the "**Attributes**" tab to view the newly added sensor attributes. These attributes are typically updated once and do not change every time the sensor transmits data. They represent static or infrequent details about the sensor, such as:

- Sensor Name: The name assigned to the sensor for easy identification.
- Firmware Version: The version of the firmware currently installed on the sensor.
- Node ID: A unique identifier for the sensor within the network.
- Sensor Type: The type of sensor.

{% assign createdDevice2 = '
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/created-new-device-2-pe.png,
        title: You can click on the "**Attributes**" tab to view the newly added sensor attributes.
'
%}

{% include images-gallery.liquid imageCollection=createdDevice2 %}

You can also view the latest sensor telemetry under the "**Latest telemetry**" tab. This section displays the sensor's real-time data, such as temperature, vibration, and battery percentage. These values are updated every time the sensor transmits data to the ThingsBoard platform. This telemetry data is of primary interest for monitoring the sensor's performance and status. You can use this data to create alarms or build dashboards that visually represent the sensor's real-time measurements. You should see something similar to this, displaying the updated values each time the sensor sends data.

{% assign createdDevice3 = '
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/created-new-device-3-pe.png,
        title: You can also view the latest sensor telemetry under the "**Latest telemetry**" tab.
'
%}

{% include images-gallery.liquid imageCollection=createdDevice3 %}

## Create a ThingsBoard Dashboard

The next step is to create a ThingsBoard [Dashboard](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"}. The **Dashboard** in ThingsBoard allows users to visualize and monitor data collected from IoT devices. Let's create a dashboard and add some [widgets](/docs/{{docsPrefix}}user-guide/widgets/){:target="_blank"} to display a list of entities and their latest NCD Sensor values.
To create a new, empty dashboard, follow these steps:

{% assign addingDashboard = '
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-1-pe.png,
        title: Navigate to the "Dashboards" page through the main menu on the left of the screen. By default, you navigate to the dashboard group "All". Click the "**+**" sign in the upper right corner of the screen, and select "**Create new dashboard**" from the drop-down menu;
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-2-pe.png,
        title: In the opened dialog, it is necessary to enter a dashboard title, description is optional. Click "**Add**";
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-3-pe.png,
        title: Click the "**Add widget**" button at the top of the screen or click the large "**Add new widget**" icon in the center of the screen (if this is your first widget on this dashboard);
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-4-pe.png,
        title: Find the "**Digital gauges**" widget bundle and click on it;
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-5-pe.png,
        title: Select the "**Mini gauge**" widget;
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-6-pe.png,
        title: You will need to specify the device this widget will be linked to. In the "**Device**" property, select the device we have created. In the "**Data key**" property, clicking "**+Add**" will display a list of variables emitted by the sensor. In this case, select the "**Temperature**" option.
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-7-pe.png,
        title: Within the properties, you can customize the unit of measurement, operation range, number of decimal places to be displayed, style, and many other settings. To add the widget to your dashboard, click the "**Add**" icon;
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-8-pe.png,
        title: To make the widget slightly larger, simply grab the bottom right corner and drag it.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addingDashboard %}

Once this is done, you should see the gauge widget added to your dashboard, displaying the most recent value sent by the sensor, in this case, 23 degrees Celsius.

When you hover over the widget in 'Edit' mode, you will see buttons in the top-right corner of the widget. These buttons allow you to edit, download, or delete the widget, as well as adjust its position or size.

To add more widgets to the dashboard, follow this steps:

{% assign addingDashboard2 = '
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-9-pe.png,
        title: Click the "**Add widget**" button again;
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-10-pe.png,
        title: In this case, we will add a second widget to display the sensor&#39;s battery percentage. Go to the "**Status indicators**" widget bundle;
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-11-pe.png,
        title: Select the "**Battery level**" widget;
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-12-pe.png,
        title: You will need to set the "**Device**" property again with the NCD device that we previously added. The next step is to set the "**Data key**" property. Click on the "**Data key**" field, and this will display the list of variables emitted by the NCD vibration sensor. From the list, select the property defined as "**battery_percent**";
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-13-pe.png,
        title: We will adjust the layout by selecting the "**Horizontal. Divided**" option under the "**Appearance**" properties. ThingsBoard provides real-time visualization of available layout types for this widget, making it a valuable tool for fine-tuning this property. Click "**Add**";
    ===
        image: /images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-14-pe.png,
        title: Edit the size and position of the widget according to your needs. To save any changes made to your ThingsBoard dashboard, you should click the "**Save**" button located in the upper right corner.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addingDashboard2 %}

This way, you can add as many widgets as you need to your dashboard. The steps for doing so are the same as shown earlier. Each widget can be **customized** and **adjusted**, including **style**, **color**, **unit of measurement**, **icon**, **elements**, **distribution**, **size**, and many other options. You can also link each widget to the variables emitted by the vibration sensor.

We have added several other widgets to our dashboard and linked each one to the vibration variables emitted by the sensor in the same way. The final layout of our dashboard looks as follows.
You can view the dashboard in full screen by clicking the "**Expand to fullscreen**" button located at the top right.

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-17-pe.png)

Finally, our dashboard is displayed as follows:

![image](/images/devices-library/ready-to-go-devices/ncd-vibration-temperature-sensor/adding-new-dashboard-18-pe.png)

## Summary

This tutorial explained the basic, step-by-step process of integrating the NCD Industrial IoT Wireless Vibration and Temperature Sensor with ThingsBoard Cloud, enabling you to manage and visualize the vibration and temperature variables sent by the NCD sensor.

After successfully connecting the NCD Industrial IoT Wireless Vibration and Temperature Sensor to the ThingsBoard platform, you can expand its functionality by setting up thresholds and alarms for sensor data, enabling notifications via email, SMS, or web when thresholds are exceeded. You can manage users by adding them with specific roles and permissions, allowing customized access to devices and dashboards. 
{% include add-device-banner.liquid %}