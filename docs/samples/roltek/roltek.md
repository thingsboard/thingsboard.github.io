---
layout: docwithnav
title: ROLTEK
description: ROLTEK guide

---

* TOC
{:toc}

## Introduction

This article contains instructions on how to configure ThingsBoard IoT platform and connect Roltek DC620 device. 
[ThingsBoard IoT](https://thingsboard.io/) platform is an open-source IoT platform for data collection, processing, visualization, and device management. 
It enables device connectivity via industry standard IoT protocols - MQTT, CoAP and HTTP and supports both cloud and on-premises deployments. 
ThingsBoard combines scalability, fault-tolerance and performance so you will never lose your data.

## Create Device On Thingsboard

Login to your ThingsBoard platform and ppen "**Devices**" page.

![image](/images/samples/roltek/tb1.png)

<br>
Click "**plus**" button then click "**Add new device**" button to add new device.
**Enter name** for your device. Then click "**Next: Credentials**" button;

![image](/images/samples/roltek/tb3.png)

<br>
Enable "**Add credentials**" option. Enter the desirable **Access Token** and click "**Add**" button to save changes.

![image](/images/samples/roltek/tb4.png)

## Configuring Roltek DC620

First connect your device to the Internet via WiFi or Ethernet as described in the user manual.

On the "**MQTT Settings**" page: 
 - Set "**MQTT Mode**" to **enable**;
 - Enter your Thingsboard Server hostname or IP to "**MQTT Broker URI**";
 - Enter your **Access Token** to "**MQTT Broker Username**";
 - Click **Save** button.

![image](/images/samples/roltek/tb5.png)

<br>
Users can add **Nodes** and **Tags** as described in the user manual. In this demo we will work with device’s default node and tags.

On the **Rules** page navigate to the **MQTT Payloads** tab and click Add **MQTT Payload** button.

![image](/images/samples/roltek/tb6.png)

<br>
In new window enter values:
 - Select **Payload Type** - **JSON**;
 - Enter "**{**" to **Header**;
 - Enter **"$V":#V** to **Pattern**;
 - Enter "**,**" to **Seperator**;
 - Enter "**}**" to **Ending**;
 - Click **Save** button.

![image](/images/samples/roltek/tb7.png)

<br>
On the **Rules** page navigate to the **MQTT Publishers** tab and click **Add MQTT Publisher** button.

![image](/images/samples/roltek/tb8.png)

<br>
In new window enter values:
 - Enter publish period you want to **Period**;
 - Choose **QoS** option you want;
 - Choose **Retain** value you want;
 - Enter **"v1/devices/me/telemetry"** to **Topic**;
 - Choose **Payload** we previously added. (**1** in this case);
 - Select **tag** or **tags** you want to publish;
 - Click **Save** button.

![image](/images/samples/roltek/tb9.png)

## Adding Widget to the Dashboard

The collected data can be displayed using various widgets. To create one you should be able to see gathered data in the Latest telemetry section.

To access it you should follow these steps:
 - Go to the **Devices** on the left menu;
 - Select previously configure device;
 - Navigate to the **Latest Telemetry** tab;
 - Click on the gathered data row;
 - Press **Show on widget** button.

![image](/images/samples/roltek/tb10.png)

<br>
Choose widget bundle accordingly to your data. Choose suitable chart for your data visualization. Click "**Add to dashboard**" button.

![image](/images/samples/roltek/tb11.png)

<br>
Now select "**Create new dashboard**". Mark "**Open dashboard**" (with this option enabled after addition you will be redirected to newly created dashboard) and click "**Add**" to create new dashboard.

![image](/images/samples/roltek/tb12.png)

<br>
![image](/images/samples/roltek/tb13.png)

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}
