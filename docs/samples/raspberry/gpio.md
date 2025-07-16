---
layout: docwithnav
title: Raspberry Pi GPIO control over MQTT using ThingsBoard
description: ThingsBoard IoT Platform sample for Raspberry Pi GPIO control over MQTT

---

* TOC
{:toc}

## Introduction
{% include templates/what-is-thingsboard.md %}

This sample application will allow you to control GPIO of your Raspberry Pi device using ThingsBoard web UI. We will observe GPIO control using Led connected to one of the pins.
The purpose of this application is to demonstrate ThingsBoard [RPC capabilities](/docs/user-guide/rpc/).

Raspberry Pi will use simple application written in Python that will connect to ThingsBoard server via [MQTT](https://en.wikipedia.org/wiki/MQTT) and listen to RPC commands.
Current GPIO state and GPIO control widget is visualized using built-in customizable dashboard. 

The video below demonstrates the final result of this tutorial.

<br>
<br>
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/SRnYjoS3M0Y" frameborder="0" allowfullscreen></iframe>
    </div>
</div>
<br>
<br>

{% include templates/prerequisites.md %}

## List of hardware and pinouts

 - [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi) - we will use Raspberry Pi 3 Model B but you can use any other model.
 
 - Led and corresponding resistor 

 - 2 female-to-male jumper wires

## Wiring schema

 Since our application will allow controlling the state of all available GPIO pins, we recommend attaching some LEDs to those pins for visibility.
 You can use this [basic instruction](https://www.raspberrypi.com/documentation/usage/gpio/) or [another one](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/) to wire some LEDs.

## Programming the Raspberry Pi

### MQTT library installation

The following command will install MQTT Python library:

```bash
sudo pip install paho-mqtt
```

### Application source code

Our application consists of a single python script that is well documented. 
You will need to modify **THINGSBOARD_HOST** constant to match your ThingsBoard server installation IP address or hostname.
Use "demo.thingsboard.io" if you are using [live demo](https://demo.thingsboard.io/) server.

The value of **ACCESS_TOKEN** constant corresponds to sample Raspberry Pi device in pre-provisioned [demo data](/docs/samples/demo-account/#tenant-devices).
If you are using [live demo](https://demo.thingsboard.io/) server - [get the access token](/docs/user-guide/ui/devices/#manage-device-credentials) for pre-provisioned "Raspberry Pi Demo Device".

{% capture tabspec %}python-script
gpio,gpio.py,python,resources/gpio.py,/docs/samples/raspberry/resources/gpio.py{% endcapture %}
{% include tabs.html %}

### Running the application

This simple command will launch the application:

```bash
python gpio.py
```

## Data visualization

In order to simplify this guide, we have included "Raspberry PI GPIO Demo Dashboard" to the [demo data](/docs/samples/demo-account/#dashboards) that is available in each ThingsBoard installation. 
You still can modify this dashboard: tune, add, delete widgets, etc.
You can access this dashboard by logging in as a tenant administrator. Use

 - login: tenant@thingsboard.org
 - password: tenant
 
in case of local ThingsBoard installation.
 
Once logged in, open **Dashboards->Raspberry PI GPIO Demo Dashboard** page. You should observe demo dashboard with GPIO control and status panel for your device. 
Now you can switch status of GPIOs using control panel. As a result, you will see LEDs status change on the device and on the status panel.

Below is the screenshot of the "Raspberry PI GPIO Demo Dashboard".  

 ![image](/images/samples/raspberry/gpio/dashboard.png)
 
## See Also

Browse other [samples](/docs/samples) or explore guides related to main ThingsBoard features:

 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 
{% include templates/feedback.md %}
  
{% include socials.html %}

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}

