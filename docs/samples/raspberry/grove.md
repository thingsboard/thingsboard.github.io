---
layout: docwithnav
title: Connecting Raspberry Pi with Grove Base Hat to ThingsBoard
description: ThingsBoard IoT Platform sample for Raspberry Pi Grove Base Hat connecting over MQTT

---


* TOC
{:toc}

## Introduction

ThingsBoard Community Edition is an open-source server-side platform that allows you to monitor and control IoT devices.
It is free for both personal and commercial usage and you can deploy it anywhere.
If you are not familiar with the platform yet, we recommend to review [what is thingsboard page](/docs/getting-started-guides/what-is-thingsboard/) and [getting started guide](/docs/getting-started-guides/helloworld/) at first and then proceed with this tutorial.
Within this guide we use [thingsboard.cloud](https://thingsboard.cloud).

This sample application will allow you to collect information from sensors and control Servo, Led of your Raspberry Pi device with Grove Base Hat PCB using ThingsBoard web UI. The purpose of this application is to demonstrate ThingsBoard and Grove Base Hat PCB integrations.

Raspberry Pi will use simple application written in Python for connecting to ThingsBoard server via MQTT, sending information from sensors and listening to RPC commands. ThingsBoard built-in dashboards will be used for data visualizing and controlling Servo and Led as well.

At the end we will get the following result:
<br>


<div style="text-align: center;">
<br>
<br>

<img src="/images/samples/raspberry/grove/grove-image.gif" alt="grove image">


</div>


<br>

## Prerequisites

For the purpose of this tutorial you need ThingsBoard server up and running. Within this guide we use [thingsboard.cloud](https://thingsboard.cloud)


Hardware and pinouts:

<b><a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html">Raspberry Pi 3 model B</a> </b> (You can also use <b><a href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html">Raspberry Pi 4</a></b>)

<b><a href="https://www.seeedstudio.com/Grove-Base-Kit-for-Raspberry-Pi-p-2945.html"> Grove Base Hat </a>

In our case we connect following modules:
<ul>
 <li><b> <a href="https://www.seeedstudio.com/Grove-Servo-p-1241.html">Analog Servo </a></b></li>
 <li><b> <a href="https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html">Mini PIR Motion Sensor v1.0 </a></b></li>
 <li><b> <a href="https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html">Ultrasonic ranger v2.0 </a></b></li>
 <li><b> <a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html">RED Led Button v1.0 </a></b></li>
 <li><b> <a href="https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html">Moisture Sensor v1.4 </a></b></li>
 <li><b> <a href="https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html">Light sensor v1.2 </a></b></li>
 <li><b> <a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11-p-745.html">Temperature&Humidity Sensor v1.2 </a></b></li>
</ul>


<br>


![image](/images/samples/raspberry/grove/raspberry-grove-base-hat.jpg)


<br>

## Wiring scheme
We use following  wiring scheme:
<pre>
Module                              Pinouts on Grove Base Hat
Analog Servo                        PWM(12)
Mini PIR Motion Sensor v1.0         D5
Ultrasonic ranger v2.0              D16
RED Led Button v1.0                 D18
Moisture Sensor v1.4                A0
Light sensor v1.2                   A2
Temperature&Humidity Sensor v1.2    D22
</pre>

## Programming the Raspberry Pi

By first we need to configure the Raspberry Pi. Please follow this [article](http://wiki.seeedstudio.com/Grove_Base_HAT/).

After the configuration we need to install libraries used in the script to the Raspberry Pi.

The following command will install thingsboard python client sdk, it is used for communication with ThingsBoard server:


```bash
pip3 install tb-mqtt-client
```
{: .copy-code}

Also we need to install Seeed-Studio library to be able to connect our modules:

```bash
git clone git@github.com:Seeed-Studio/grove.py.git
```
{: .copy-code}

```bash
pip3 install ./grove.py/
```
{: .copy-code}

At last if you use Temperature and Humidity sensor (DHTXX), you also need to install the Library for Temperature and Humidity Sensor:

```bash
git clone https://github.com/Seeed-Studio/Seeed_Python_DHT.git
```
{: .copy-code}

```bash
sudo python3 ./Seeed_Python_DHT/setup.py install
```
{: .copy-code}

## Application source code

Our application consists of a [single python script](/docs/samples/raspberry/resources/tb_grove.py) that is well documented. You will need to modify THINGSBOARD_HOST constant to match your ThingsBoard server installation IP address or hostname.

Also we need say to ThingsBoard that we want to connect this device and get the device ACCESS_TOKEN, which will be used in the script.
<b>Log in to your environment</b> — <b>Device groups</b> — <b>Add device group</b>  — <b>Add new device</b> (e.g. Device 1 with type grove) — <b>Open device details</b> — <b>Copy access token</b>.


<br>


![image](/images/samples/raspberry/grove/create-access-token.gif)


<br>


After this you need to replace the THINGSBOARD_HOST and ACCESS_TOKEN in the script below, with your values. In case you use Live demo, populate <b>thingsboard.cloud</b> as THINGSBOARD_HOST

```python
#
# Copyright © 2019-2024 The Thingsboard Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

import logging
import time
from tb_device_mqtt import TBDeviceMqttClient, TBPublishInfo
from grove.grove_mini_pir_motion_sensor import GroveMiniPIRMotionSensor
from grove.grove_ultrasonic_ranger import GroveUltrasonicRanger
from Seeed_Python_DHT.seeed_dht import DHT
from grove.grove_moisture_sensor import GroveMoistureSensor
from grove.button import Button
from grove.grove_ryb_led_button import GroveLedButton
from grove.grove_light_sensor_v1_2 import GroveLightSensor
from grove.grove_servo import GroveServo

# Configuration of logger, in this case it will send messages to console
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(module)s - %(lineno)d - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

log = logging.getLogger(__name__)

THINGSBOARD_SERVER = 'THINGSBOARD_HOST'
ACCESS_TOKEN = 'ACCESS_TOKEN'


def main():

    # Grove - Servo connected to PWM port
    servo = GroveServo(12)
    servo_angle = 90

    # Grove - mini PIR motion pir_sensor connected to port D5
    pir_sensor = GroveMiniPIRMotionSensor(5)

    # Grove - Ultrasonic Ranger connected to port D16
    ultrasonic_sensor = GroveUltrasonicRanger(16)

    # Grove - LED Button connected to port D18
    button = GroveLedButton(18)

    # Grove - Moisture Sensor connected to port A0
    moisture_sensor = GroveMoistureSensor(0)

    # Grove - Light Sensor connected to port A2
    light_sensor = GroveLightSensor(2)
    light_state = False

    # Grove - Temperature&Humidity Sensor connected to port D22
    dht_sensor = DHT('11', 22)

    # Callback for server RPC requests (Used for control servo and led blink)
    def on_server_side_rpc_request(client, request_id, request_body):
        log.info('received rpc: {}, {}'.format(request_id, request_body))
        if request_body['method'] == 'getLedState':
            client.send_rpc_reply(request_id, light_state)
        elif request_body['method'] == 'setLedState':
            light_state = request_body['params']
            button.led.light(light_state)
        elif request_body['method'] == 'setServoAngle':
            servo_angle = float(request_body['params'])
            servo.setAngle(servo_angle)
        elif request_body['method'] == 'getServoAngle':
            client.send_rpc_reply(request_id, servo_angle)

    # Connecting to ThingsBoard
    client = TBDeviceMqttClient(THINGSBOARD_SERVER, username=ACCESS_TOKEN)
    client.set_server_side_rpc_request_handler(on_server_side_rpc_request)
    client.connect()

    # Callback on detect the motion from motion sensor
    def on_detect():
        log.info('motion detected')
        telemetry = {"motion": True}
        client.send_telemetry(telemetry)
        time.sleep(5)
        # Deactivating the motion in Dashboard
        client.send_telemetry({"motion": False})
        log.info("Motion alert deactivated")

    # Callback from button if it was pressed or unpressed
    def on_event(index, event, tm):
        if button._GroveLedButton__btn.is_pressed():
            log.debug('button: single click')
            telemetry = {"button_press": True}
            client.send_telemetry(telemetry)
            log.info("Pressed")
        else:
            log.debug('button: single click')
            telemetry = {"button_press": False}
            client.send_telemetry(telemetry)
            log.info("Unpressed")
        if event & Button.EV_SINGLE_CLICK:
            button.led.light(True)
        elif event & Button.EV_DOUBLE_CLICK:
            button.led.blink()
        elif event & Button.EV_LONG_PRESS:
            button.led.light(False)

    # Adding the callback to the motion sensor
    pir_sensor.on_detect = on_detect
    # Adding the callback to the button
    button.on_event = on_event
    try:
        while True:
            distance = ultrasonic_sensor.get_distance()
            log.debug('distance: {} cm'.format(distance))

            humidity, temperature = dht_sensor.read()
            log.debug('temperature: {}C, humidity: {}%'.format(temperature, humidity))

            moisture = moisture_sensor.moisture
            log.debug('moisture: {}'.format(moisture))

            log.debug('light: {}'.format(light_sensor.light))

            # Formatting the data for sending to ThingsBoard
            telemetry = {'distance': distance,
                         'temperature': temperature,
                         'humidity': humidity,
                         'moisture': moisture,
                         'light': light_sensor.light}

            # Sending the data
            client.send_telemetry(telemetry).get()

            time.sleep(.1)
    except Exception as e:
        raise e
    finally:
        client.disconnect()


if __name__ == '__main__':
    main()

```
{:.copy-code.expandable-20}


## Data Visualization and Control

To configure dashboard you should login into ThingsBoard environment.

To proceed with this step, please download a [grove_seeed_studio.json](/docs/samples/raspberry/resources/grove_seeed_studio.json) file, which contains preconfigured dashboard for this script.
Once logged in, open Dashboards, click on the plus button in the bottom right corner of the screen and select the "Import dashboard" icon. Select recently downloaded file of dashboard configuration. Now you must edit the alias of Grove widget you should do this by pressing on the pen icon. Select the Filter type parameter as "Single entity", set Type as "Device" and from the list of devices  - select your GROVE device.


Running the application

This simple command will launch the application:

```bash
python3 tb_grove.py
```
{: .copy-code}

The results of script running - you can see on the dashboard.

<br>


![image](/images/samples/raspberry/grove/dashboard.png)

<br>

Also from dashboard you can control the servo (by rotating the knob control with name "Servo") or the led (by pressing the trigger "Button Led").

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
