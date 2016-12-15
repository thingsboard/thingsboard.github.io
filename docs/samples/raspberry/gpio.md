---
layout: docwithnav
title: Raspberry Pi GPIO control over MQTT using Thingsboard

---

* TOC
{:toc}

## Introduction
{% include templates/what-is-thingsboard.md %}

This sample application will allow you to control GPIO of your Raspberry Pi device using Thingsboard web UI. We will observe GPIO control using Led connected to one of the pins. 
The purpose of this application is to demonstrate Thingsboard [RPC capabilities](/docs/user-guide/rpc/).

Raspberry Pi will use simple application written in Python that will connect to Thingsboard server via [MQTT](https://en.wikipedia.org/wiki/MQTT) and listen to RPC commands.
Current GPIO state and GPIO control widget is visualized using built-in customizable dashboard. 

## Prerequisites
 
You will need to Thingsboard server up and running. Use following [guide](/docs/user-guide/install/installation-options/) to install Thingsboard.

## List of hardware and pinouts

 - [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi) - we will use Raspberry Pi 3 Model B but you can use any other model.
 
 - Led and corresponding resistor 

 - 2 female-to-male jumper wires

## Wiring schema

 Since our application will allow to control state of all available GPIO pins, we recommend to attach some LEDs to those pins for visibility.
 You can use this [basic instruction](https://www.raspberrypi.org/documentation/usage/gpio/) or [another one](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/) to wire some LEDs.

## Programming the Raspberry Pi

### MQTT library installation

Following command will install MQTT Python library:

```bash
sudo pip install paho-mqtt
```

### Application source code

Our application consists of single python script that is well commented. 
You will need to modify **THINGSBOARD_HOST** constant to match your Thingsboard server installation IP address or hostname.
The value of **ACCESS_TOKEN** constant corresponds to sample Raspberry Pi device in pre-provisioned [demo data](/docs/samples/demo-account/#tenant-devices).

{% capture tabspec %}python-script
gpio,gpio.py,python,resources/gpio.py,/docs/samples/raspberry/resources/gpio.py{% endcapture %}
{% include tabs.html %}

### Running the application

This simple command will launch the application:

```bash
python gpio.py
```
## Data visualization

In order to simplify this guide we have included "Raspberry PI GPIO Demo Dashboard" to the [demo data](/docs/samples/demo-account/#dashboards) that is available in each thingboard installation. 
Of course, you can modify this dashboard: tune, add, delete widgets, etc.
You can access this dashboard by logging in as a tenant administrator:

 - login: tenant@thingsboard.io
 - password: tenant
 
Once logged in, open **Dashboards->Raspberry PI GPIO Demo Dashboard** page. You should observe demo dashboard with GPIO control and status panel for your device. 
Now you can switch status of GPIOs using control panel. As a result you will see LEDs status change on device and on the status panel.
Screenshot of the dashboard is attached below.

 ![image](/images/samples/raspberry/gpio/dashboard.png)
 
## Next steps

Browse other [samples](/docs/samples) or explore guides related to main Thingsboard features:

 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 
{% include templates/feedback.md %}
  
{% include socials.html %}
