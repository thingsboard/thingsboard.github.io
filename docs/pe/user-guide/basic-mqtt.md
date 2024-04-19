---
layout: docwithnav-pe
assignees:
- ashvayka
title: Basic MQTT authentication
description: ThingsBoard MQTT based authentication.

client-id-only:
    0:
        image: /images/user-guide/basic-mqtt/authentication-manage-credentials-1-pe.png
        title: 'Go to the "Devices" page, click on the your device to open device details window and click "Manage credentials" button;'
    1:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-only-1-pe.png
        title: 'In the "Device Credentials" window, select "MQTT Basic" credential type and specify client ID. Click "Save". Execute the command to upload temperature readings using MQTT Client ID;'
    2:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-only-2-pe.png
        title: 'Once you have successfully executed the command, you should see the published "temperature" readings.'

username-and-password:
    0:
        image: /images/user-guide/basic-mqtt/authentication-manage-credentials-1-pe.png
        title: 'Go to the "Devices" page, click on the your device to open device details window and click "Manage credentials" button;'
    1:
        image: /images/user-guide/basic-mqtt/authentication-based-on-username-and-password-1-pe.png
        title: 'In the "Device Credentials" window, select "MQTT Basic" credential type and specify username and password. Password is optional. Click "Save". Execute the command to upload temperature readings using MQTT username and password;'
    2:
        image: /images/user-guide/basic-mqtt/authentication-based-on-username-and-password-2-pe.png
        title: 'Once you have successfully executed the command, you should see the published "temperature" readings.'

client-id-username-and-password:
    0:
        image: /images/user-guide/basic-mqtt/authentication-manage-credentials-1-pe.png
        title: 'Go to the "Devices" page, click on the your device to open device details window and click "Manage credentials" button;'
    1:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-username-and-password-1-pe.png
        title: 'In the "Device Credentials" window, select "MQTT Basic" credential type and specify client ID, username and password. Click "Save". Execute the command to upload temperature readings using MQTT client ID, username and password;'
    2:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-username-and-password-2-pe.png
        title: 'Once you have successfully executed the command, you should see the published "temperature" readings.'

mqtts-options-1:
    0:
        image: /images/user-guide/basic-mqtt/mqtt-over-tls-1-pe.png
        title: 'Go to the "Devices" page and click on your device. In the device details window, click "Check connectivity" button;'
    1:
        image: /images/user-guide/basic-mqtt/mqtt-over-tls-2-pe.png
        title: 'In the opened window select "MQTT" network protocol and your operating system. Switch to the "MQTTs" protocol. Copy and run the first command in Terminal to download the valid CA certificate;'

mqtts-options-2:
    0:
        image: /images/user-guide/basic-mqtt/mqtt-over-tls-3-pe.png
        title: 'Execute the second command to publish telemetry using the tb-cloud-root-ca.pem certificate and the device credentials you specified for its authentication;'
    1:
        image: /images/user-guide/basic-mqtt/mqtt-over-tls-4-pe.png
        title: 'Once you have successfully executed the command, you should see the published "temperature" readings.'
---

{% assign docsPrefix = "pe/" %}
{% include docs/user-guide/basic-mqtt.md %}