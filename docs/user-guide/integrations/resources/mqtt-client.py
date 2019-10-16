#
# ThingsBoard, Inc. ("COMPANY") CONFIDENTIAL
#
# Copyright 2016-2019 ThingsBoard, Inc. All Rights Reserved.
#
# NOTICE: All information contained herein is, and remains
# the property of ThingsBoard, Inc. and its suppliers,
# if any.  The intellectual and technical concepts contained
# herein are proprietary to ThingsBoard, Inc.
# and its suppliers and may be covered by U.S. and Foreign Patents,
# patents in process, and are protected by trade secret or copyright law.
#
# Dissemination of this information or reproduction of this material is strictly forbidden
# unless prior written permission is obtained from COMPANY.
#
# Access to the source code contained herein is hereby forbidden to anyone except current COMPANY employees,
# managers or contractors who have executed Confidentiality and Non-disclosure agreements
# explicitly covering such access.
#
# The copyright notice above does not evidence any actual or intended publication
# or disclosure  of  this source code, which includes
# information that is confidential and/or proprietary, and is a trade secret, of  COMPANY.
# ANY REPRODUCTION, MODIFICATION, DISTRIBUTION, PUBLIC  PERFORMANCE,
# OR PUBLIC DISPLAY OF OR THROUGH USE  OF THIS  SOURCE CODE  WITHOUT
# THE EXPRESS WRITTEN CONSENT OF COMPANY IS STRICTLY PROHIBITED,
# AND IN VIOLATION OF APPLICABLE LAWS AND INTERNATIONAL TREATIES.
# THE RECEIPT OR POSSESSION OF THIS SOURCE CODE AND/OR RELATED INFORMATION
# DOES NOT CONVEY OR IMPLY ANY RIGHTS TO REPRODUCE, DISCLOSE OR DISTRIBUTE ITS CONTENTS,
# OR TO MANUFACTURE, USE, OR SELL ANYTHING THAT IT  MAY DESCRIBE, IN WHOLE OR IN PART.
#

from __future__ import division
import paho.mqtt.client as mqtt
import random
import time
import threading

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, rc, *extra_params):
   print('Connected with result code ' + str(rc))
   # Subscribing in on_connect() means that if we lose the connection and
   # reconnect then subscriptions will be renewed
   client.subscribe('tb/mqtt-integration-tutorial/sensors/+/rx/twoway')
   client.subscribe('tb/mqtt-integration-tutorial/sensors/+/rx')


# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
  print ('Incoming message\nTopic: ' + msg.topic + '\nMessage: ' + str(msg.payload))
  if msg.topic.startswith('tb/mqtt-integration-tutorial/sensors/SN-001/rx/twoway'):
       print ('This is a Two-way RPC call. Going to reply now!')
       responseMsg = "{\"rpcReceived\":\"OK\"}"
       print ('Sending a response message: ' + responseMsg)
       client.publish('tb/mqtt-integration-tutorial/sensors/SN-001/rx/response', responseMsg)
       print ('Sent a response message: ' + responseMsg)
       return
  if msg.topic.startswith( 'tb/mqtt-integration-tutorial/sensors/+/rx'):
       print ('This is a One-way RPC call. RequestID: ')
       return

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect('broker.hivemq.com', 1883)

client.loop_forever()


