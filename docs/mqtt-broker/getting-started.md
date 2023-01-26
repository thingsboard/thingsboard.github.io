---
layout: docwithnav-mqtt-broker
title: Getting started with ThingsBoard MQTT Broker
description: ThingsBoard MQTT Broker - broker for real Use Cases

broker-sessions:
    0:
        image: /images/mqtt-broker/getting-started/broker-session.png
        title: 'View all client sessions, click on the row to open session details'
    1:
        image: /images/mqtt-broker/getting-started/broker-session-details.png
        title: 'View the client session details'

broker-mqtt-creds-creation:
    0:
        image: /images/mqtt-broker/getting-started/create-mqtt-creds.png
        title: 'Navigate to "Client Credentials" tab, click "+" in the top right corner of the table.'
    1:
        image: /images/mqtt-broker/getting-started/create-mqtt-creds-set-name-type.png
        title: 'Input credentials name. For example, "Getting Started Credentials". Choose "Device" client type and "MQTT Basic" credentials type.'
    2:
        image: /images/mqtt-broker/getting-started/create-mqtt-creds-set-un-pw.png
        title: 'Input "username" and "password" with chosen values, add publish authorization pattern to be able to publish to certain topics. For example, 
                "home/.*" will allow publishing to all topics starting with "home/".'
    3:
        image: /images/mqtt-broker/getting-started/create-mqtt-creds-save.png
        title: 'Click "Add" to save credentials.'

---

{% include docs/mqtt-broker/getting-started.md %}
