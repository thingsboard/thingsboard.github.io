---
layout: docwithnav
assignees:
- ddiachenko
title: Make battery powered Wi-Fi sensors with Cricket and ThingsBoard 
description: An example of ultra low-power Wi-Fi temperature sensor made with Cricket and integrated to ThingsBoard without writing any code
hidetoc: "true"

---

* TOC 
{:toc}

## Introduction
In this guide we show step-by-step an integration of Things On Edge - Cricket Wi-Fi module to ThingsBoard. In a few steps we will make a sensor and visualise its data in ThingsBoard without coding and programing. It can be any type of sensor and we demonstrate it here based on an example of making a Wi-Fi battery powered temperature sensor.

We will walk through the following steps:
<br/>
1) Make a battery powered Wi-Fi sensor
<br/>
2) Connect the sensor to WiFi network
<br/>
3) Configure the sensor to send data to ThingsBoard
<br/>

### Things On Edge
Things On Edge designs an easy to use, ultra-low power Cricket Wi-Fi modules. They are designed to make fast & easy IOT end nodes such as sensors, buttons, switches etc.; power them directly on batteries for a very long time; and integrate to a huge ecosystem of software and internet services. All this without writing a single line of code.
<br/>
<img src="/images/samples/cricket-wifi/cricket.png" width="50%">
<br/>
![image](/images/samples/cricket-wifi/TB-graph.png)

## Prerequisites

### Hardware
* Things On Edge - Cricket Wi-Fi module
* 2xAAA battery holder
* 2xAAA batteries

### Make a battery powered Wi-Fi sensor
Cricket WiFi module comes with a built-in temperature sensor. For this example we do not need any other hardware peripherals. However, in order to get more accurate temperature readings it is highly recommended to use external sensors e.g. DS18B20/+

In this example simply attach batteries to the Cricket Wi-Fi module and the device is ready to go. Please use fresh and good quality batteries e.g. Duracel, Energizer

<img src="/images/samples/cricket-wifi/asm.png" width="50%">


### Connect Cricket to Wi-Fi network

<img src="/images/samples/cricket-wifi/TOE-01.png" width="50%">

<img src="/images/samples/cricket-wifi/TOE-02.png" width="50%">

<img src="/images/samples/cricket-wifi/TOE-03.png" width="50%">

<img src="/images/samples/cricket-wifi/TOE-04.png" width="50%">



### Configure Cricket to send data to ThingsBoard
Now we can configure Cricket to transmit the temperature readings to ThingsBoard.
<br/>

Cricket supports both MQTT and HTTP protocols and we are going to use the HTTP protocol for the integration. Please make sure you have the Access Token from ThingsBoard as shown below:
![image](/images/samples/cricket-wifi/TB-01.png)
<br/>

Now we can go back again to Cricket's Config panel and complete the configuration. Please note your URL is going to be different because the Access Token is unique for each user. Please change the URL accordingly.
<br/>
A complete URL should look like this:
**https://thingsboard.cloud/api/v1/**USE YOUR TOKEN HERE**/telemetry**
<br/>
A complete Cricket's configuration can look like below:
![image](/images/samples/cricket-wifi/TB-02.png)
<br/>


Once Cricket is configured we must exit from the Config panel by pressing the reset button in the top-right corner as shown on the image below.
<br/>
<img src="/images/samples/cricket-wifi/TOE-last.png" width="50%">
<br/>


If we configured our device as shown above the device will be sending data to ThingsBoard every 10 minutes. The data is presented on the graph as shown below:
![image](/images/samples/cricket-wifi/TB-03.png)

<br/>
<br/>


### Additional information

[Cricket Wi-Fi module - Documentation](https://thingsonedge.com/documentation)


{% include templates/feedback.md %}

{% include socials.html %}

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}
