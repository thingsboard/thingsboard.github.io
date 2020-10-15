import paho.mqtt.client as mqtt
import json
import random
import time

THINGSBOARD_HOST = '127.0.0.1' # REPLACE with your ThingsBoard Edge server installation IP address or hostname
ACCESS_TOKEN = 'mezToQ0lFYFSTI5yhix4' # REPLACE with your device access token

# The callback for when the client receives a CONNACK response from the server
def on_connect(client, userdata, rc, *extra_params):
    # print('Connected with result code ' + str(rc))
    # Subscribing to receive RPC requests
    client.subscribe('v1/devices/me/rpc/request/+')
    # Sending current telemetry
    client.publish('v1/devices/me/telemetry', get_telemetry(), 1)
    # Log device current value
    print(get_telemetry())

def get_telemetry():
    return json.dumps(device)

while(True):
    # Generate random values
    device = { 'mph': random.randint(0,15) }

    client = mqtt.Client()
    # Register connect callback
    client.on_connect = on_connect
    # Set access token
    client.username_pw_set(ACCESS_TOKEN)
    # Connect to ThingsBoard using default MQTT port and 60 seconds keep alive
    client.connect(THINGSBOARD_HOST, 1883, 60)
    try:
        # Set timeout 1 second
        time.sleep(1)
        client.loop()
    except KeyboardInterrupt:
        client.loop_stop()
        print("Exited!")
