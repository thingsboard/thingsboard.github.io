import paho.mqtt.client as mqtt
import json
import random
import time

THINGSBOARD_HOST = '127.0.0.1'
ACCESS_TOKEN = 'mezToQ0lFYFSTI5yhix4'

while(True):
    # Generate random MPG and MPH values
    mph = random.randint(0,15)
    mpg = random.randint(0,100)

    # We assume that all GPIOs are LOW
    telemetry = {'mpg':mpg, 'mph':mph}

    # The callback for when the client receives a CONNACK response from the server.
    def on_connect(client, userdata, rc, *extra_params):
        print('Connected with result code ' + str(rc))
        # Subscribing to receive RPC requests
        client.subscribe('v1/devices/me/rpc/request/+')
        # Sending current GPIO status
        client.publish('v1/devices/me/telemetry', get_telemetry(), 1)

    # The callback for when a PUBLISH message is received from the server.
    def on_message(client, userdata, msg):
        print 'Topic: ' + msg.topic + '\nMessage: ' + str(msg.payload)
        # Decode JSON request
        data = json.loads(msg.payload)
        # Check request method
        client.publish(msg.topic.replace('request', 'response'), get_gpio_status(), 1)
        client.publish('v1/devices/me/telemetry', get_telemetry().telemetry, 1)

    def get_telemetry():
        return json.dumps(telemetry)

    client = mqtt.Client()
    # Register connect callback
    client.on_connect = on_connect
    # Registed publish message callback
    client.on_message = on_message
    # Set access token
    client.username_pw_set(ACCESS_TOKEN)
    # Connect to ThingsBoard using default MQTT port and 60 seconds keepalive interval
    client.connect(THINGSBOARD_HOST, 1883, 60)
    try:
        client.loop_start()
    except KeyboardInterrupt:
        client.loop_stop()
        print("Exited!")
    # Set timeout 1 second
    time.sleep(1)