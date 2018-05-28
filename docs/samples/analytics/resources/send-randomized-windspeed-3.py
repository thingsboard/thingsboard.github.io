import paho.mqtt.client as mqtt
from time import sleep
import random

broker="test.mosquitto.org"
topic_pub='v1/devices/me/telemetry'

client = mqtt.Client()

client.username_pw_set("$WIND_TURBINE_3_ACCESS_TOKEN")
client.connect('127.0.0.1', 1883, 1)

while True:
    x = random.randrange(30, 61)
    print x
    msg = '{"windSpeed":"'+ str(x) + '"}'
    client.publish(topic_pub, msg)
    sleep(0.1)