import paho.mqtt.client as mqtt
import json
import random
import time

ACCESS_TOKEN = YOUR_ACCESS_TOKEN # REPLACE with your device access token, e.g. 'edge_vehicle'
THINGSBOARD_EDGE_HOST = YOUR_TB_EDGE_HOST # REPLACE with your ThingsBoard Edge server installation IP address or hostname, e.g. 'localhost'
THINGSBOARD_EDGE_MQTT_PORT = YOUR_TB_EDGE_MQTT_PORT # REPLACE with your ThingsBoard Edge MQTT port, e.g. 11883 or 1883
DISTANCE = 0

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
    device = {  'distance': DISTANCE,
                'gas_consumption': random.randint(10,15),
                'vehicle_speed': random.randint(60,70),
                'engine_temperature': random.randint(195,220),
                'ambient_temperature': random.randint(65,80),
                'tire_temperature': random.randint(90,110),
                'tire_pressure_front_left': random.randint(30,35),
                'tire_pressure_front_right': random.randint(30,35),
                'tire_pressure_rear_left': random.randint(30,35),
                'tire_pressure_rear_right': random.randint(30,35)
             }
    # Add to the DISTANCE random number between 0 and 100
    DISTANCE = DISTANCE + random.randint(0,100)

    client = mqtt.Client()
    # Register connect callback
    client.on_connect = on_connect
    # Set access token
    client.username_pw_set(ACCESS_TOKEN)
    # Connect to ThingsBoard using default MQTT port and 60 seconds keep alive
    client.connect(THINGSBOARD_EDGE_HOST, THINGSBOARD_EDGE_MQTT_PORT, 60)
    try:
        # Set timeout 5 second
        time.sleep(5)
        client.loop()
    except KeyboardInterrupt:
        client.loop_stop()
        print("Exited!")
