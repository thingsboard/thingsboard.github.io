---
layout: docwithnav
title: A Guide to Connecting ADAM-6717 to ThingsBoard Cloud Unlocking Seamless IoT Connectivity
description: A Guide to Connecting ADAM-6717 to ThingsBoard Cloud Unlocking Seamless IoT Connectivity
---

* TOC
{:toc}

## Overview

In this comprehensive guide, we will walk you through the process of establishing a seamless connection between the ADAM-6717 and ThingsBoard Cloud. 
By following these step-by-step instructions, you will be able to integrate and leverage the powerful capabilities of ThingsBoard Cloud with your ADAM-6717 module

## Step 1: Creating a New Device on the ThingsBoard Cloud Platform

To establish a connection between your ADAM-6717 module and the ThingsBoard Cloud platform, the first step is to create a new device. 
Follow the instructions below:

 - Log in to your Thingsboard instance. 
 - On the left menu, go to the "Devices" page. 
 - Click the "plus" icon to create a new device.

![image](/images/samples/solandtec/Imagen1.png)

 - You will be prompted to enter the details of the new device, such as its name, label, and other relevant information. After entered information about device, click on the "Next: Credentials" button. This will take you to the credential’s configuration page.

![image](/images/samples/solandtec/Imagen2.png)

 - On the credential’s configuration page, locate the "Credentials type" option and select "MQTT Basic" from the available options. This ensures that the MQTT protocol is used for communication between your ADAM-6717 module and the platform.
 - Under the "Client ID" field, enter a unique name that will serve as the identifier for your device.
 - For enhanced security, it is strongly recommended to set a "User Name" and "Password" for your device. 
This ensures that only authorized devices can establish a connection with the platform. Choose a strong and unique combination for both the username and password.

![image](/images/samples/solandtec/Imagen3.png)

 - Once you have entered all the necessary details, click the "Add" button to create the new device.

By creating a new device, you are preparing a destination where the data from your ADAM-6717 module will be sent for storage and visualization within the ThingsBoard Cloud platform.

## Step 2: Configuration of ADAM-6717 Module for Connectivity

Before you start.

The ADAM-6700 series gateways have two MAC IDs that are listed on a label on the side of the device. The default IP address for these ports is 10.0.0.1 (Eth0) and 11.0.0.1 (Eth1).

![image](/images/samples/solandtec/internet-image.png)

To accessing the Graphic Programming Tool by Node-RED, follow the instructions below:
 - Open your preferred web browser and type in the IP address of the ADAM-6717 module's port that you have chosen. Press Enter to access the module's web interface.
 - Look for the "Graphic programming tool by Node-RED" link and click on it.

![image](/images/samples/solandtec/Imagen4.png)

 - In the popup window displayed after clicking the "Graphic programming  tool by Node-RED" link, enter the default username and password.

      **Default Username**: root

      **Default Password**: 00000000

![image](/images/samples/solandtec/Imagen5.png)

Once you have successfully signed into the Node-RED graphic programming tool, you will be presented with an interface that consists of three main sections. Here's a brief overview:
 - Nodes Menu (Left Side)
 - Programming Area (Middle)
 - Debug Area (Right Side)

![image](/images/samples/solandtec/Imagen6.png)

## Step 3: Configuring NodeRED for Integration with ThingsBoard Cloud

This configuration sets up a flow where data will be injected by the inject node and sent to ThingsBoard Cloud using the MQTT out node.
 - Drag and drop an "inject" node from the Node-RED palette onto the workspace. Similarly, drag and drop an "MQTT out" node from the palette.
 - Connect the output of the inject node to the input of the MQTT out node by clicking and dragging the connector between them.
 - Inject Node: Thingsboard gets data in JSON format, which uses “key” and “value”. By configuring the inject node to send data in JSON format using key-value pairs, you ensure that the data is compatible with ThingsBoard's data structure.
 - Double-click on the MQTT out node to open its configuration settings.

![image](/images/samples/solandtec/Imagen7.png)

In the MQTT server settings, you will need to configure the following information:

 - **MQTT Broker**: Provide the address or hostname of the MQTT broker. This   is   typically   the   URL   provided   by   ThingsBoard   Cloud   for   MQTT communication.
 - **Port**: Specify the port number for the MQTT broker. The default port for MQTT is 1883, but check with ThingsBoard Cloud for any specific port requirements.
 - **Client ID**: Enter a unique identifier for the client connecting to the MQTT broker. This helps identify your Node-RED instance within the ThingsBoard Cloud platform.
 - **Topic**: Specify the MQTT topic to which you want to publish the data. This topic should align with the topic structure defined in ThingsBoard Cloud.
 - **QoS**: Choose the Quality of Service level for message delivery. It is recommended to use QoS level 1 for reliable message delivery.
 - **Retain**: Select whether the MQTT messages should be retained by the broker or not. Retained messages persist on the broker and are sent to new subscribers upon connection.

Once you have entered the required MQTT server information, click the "Done" button to save the configuration

![image](/images/samples/solandtec/Imagen8.png)

![image](/images/samples/solandtec/Imagen9.png)

![image](/images/samples/solandtec/Imagen10.png)

After configuring the inject node and MQTT out node as mentioned in the previous steps, you are ready to send the data. 
 - Locate the "inject" node on your Node-RED workspace.
 - Click the "inject" button to trigger the sending of data to your device in ThingsBoard Cloud.
 - Once the "inject" button is clicked, Node-RED will generate and send the data payload to the MQTT out node, which in turn will publish the data to the specified topic on the ThingsBoard Cloud platform.

![image](/images/samples/solandtec/Imagen11.png)

<br>
Congratulations! You have now successfully sent the data from Node-RED to your device in ThingsBoard Cloud.

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}