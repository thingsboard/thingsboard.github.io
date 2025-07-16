#
# Copyright © 2016-2020 The Thingsboard Authors
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

import paho.mqtt.client as mqtt
import ssl
import json


def collect_required_data():
    config = {}
    print("\n\n", "=" * 80, sep="")
    print(" " * 20, "ThingsBoard one way RPC example script.", sep="")
    print("=" * 80, "\n\n", sep="")
    host = input("Please write your ThingsBoard host or leave it blank to use default (thingsboard.cloud): ")
    config["host"] = host if host else "{{mqttHostName}}"
    if config["host"] != "{{mqttHostName}}":
        ca_cert = input(
            "Please write path to your server public certificate or leave it blank to use default (mqttserver.pub.pem): ")
        config["ca_cert"] = ca_cert if ca_cert else "mqttserver.pub.pem"
    else:
        config["ca_cert"] = "ca-root.pem"
    token = ""
    while not token:
        token = input("Please write accessToken for device: ")
        if not token:
            print("Access token is required!")
    config["token"] = token
    print("\n", "=" * 80, "\n", sep="")
    return config


# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, rc, *extra_params):
    print('Connected with result code ' + str(rc))
    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe('v1/devices/me/attributes')
    client.subscribe('v1/devices/me/attributes/response/+')
    client.subscribe('v1/devices/me/rpc/request/+')
    client.publish('v1/devices/me/telemetry', json.dumps({"temperature":42}), 1)


# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    print('Topic: ' + msg.topic + '\nMessage: ' + msg.payload.decode("UTF-8"))
    if msg.topic.startswith('v1/devices/me/rpc/request/'):
        requestId = msg.topic[len('v1/devices/me/rpc/request/'):len(msg.topic)]
        print('This is a RPC call. RequestID: ' + requestId + '. Going to reply now!')
        client.publish('v1/devices/me/rpc/response/' + requestId, "{\"value1\":\"A\", \"value2\":\"B\"}", 1)
        client.loop_stop()


if __name__ == '__main__':
    config = collect_required_data()
    client = mqtt.Client()
    client.on_connect = on_connect
    client.on_message = on_message

    client.publish('v1/devices/me/attributes/request/1', "{\"clientKeys\":\"model\"}", 1)

    # Publish request to the server to get the *model* attribute from client scope.
    client.tls_set(ca_certs=config["ca_cert"], tls_version=ssl.PROTOCOL_TLSv1_2, cert_reqs=ssl.CERT_REQUIRED)
    client.username_pw_set(config["token"])
    client.connect(config["host"], 8883, 1)

    # Blocking call that processes network traffic, dispatches callbacks and
    # handles reconnecting.
    # Other loop*() functions are available that give a threaded interface and a
    # manual interface.
    client.loop_forever()
    # sock.close()