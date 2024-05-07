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
