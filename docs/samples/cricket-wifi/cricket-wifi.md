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

[Things On Edge](https://thingsonedge.com) designs an easy to use, ultra-low power Cricket Wi-Fi modules. They are designed to make fast & easy IOT end nodes such as sensors, buttons, switches etc.; power them directly on batteries for a very long time; and integrate to a huge ecosystem of software and internet services. All this without writing a single line of code.

The integration of both Cricket and ThingsBoard is presented here step by step. As an example we make a WiFi temperature sensor and visualise its data in ThigsBoard.

We show how to:
<br/>
1) Make power efficient Wi-Fi sensor by using [Cricket Wi-Fi module](https://thingsonedge.com)
<br/>
2) Connect [Cricket](https://thingsonedge.com) to WiFi network
<br/>
3) Configure [Cricket](https://thingsonedge.com) to send data to ThingsBoard
<br/>

More detailed documentation about [Cricket Wi-Fi module](https://thingsonedge.com) can be found at [Things On Edge documentation page](https://thingsonedge.com/documentation)

## Hardware

### Prerequisites
* [IOT Cricket Wi-Fi module](https://thingsonedge.com)
* [2xAAA battery holder](https://thepihut.com/products/2-x-aaa-battery-holder-with-on-off-switch-jst-ph-connector)
* 2xAAA batteries

Cricket WiFi module comes with a built-in temperature sensor. For this example we do not need any other hardware peripherals. However, in order to get more accurate temperature readings it is highly recommended to use external sensors e.g. DS18B20/+

### Assembly
Simply attach batteries to the [Cricket Wi-Fi module](https://thingsonedge.com) and the device is ready to go and we can start configuring it.
Please use fresh and good quality batteries e.g. Duracel, Energizer

![image](/images/samples/cricket-wifi/asm.png)


### Connect Cricket to Wi-Fi network

![image](/images/samples/cricket-wifi/TOE-01.png)

![image](/images/samples/cricket-wifi/TOE-02.png)

![image](/images/samples/cricket-wifi/TOE-03.png)

![image](/images/samples/cricket-wifi/TOE-03.png)

[For more information please see Cricket's documentation: IOT Developer Guide](https://thingsonedge.com/documentation)

### Configure Cricket to send data to ThingsBoard
Now we can configure [Cricket](https://thingsonedge.com) to transmit the temperature readings to ThingsBoard.
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
![image](/images/samples/cricket-wifi/TOE-last.png)
<br/>


If we configured our device as shown above the device will be sending data to ThingsBoard every 10 minutes. The data is presented on the graph as shown below:
![image](/images/samples/cricket-wifi/TB-03.png)

<br/>
<br/>


### Additional information

The same integration principles apply when building other type of sensors with Cricket. For more information please check out [IOT Developer Guide documentation](https://thingsonedge.com/documentation)

Do not hesitate to contact us: contact@thingsonedge.com


{% include templates/feedback.md %}

{% include socials.html %}

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}
