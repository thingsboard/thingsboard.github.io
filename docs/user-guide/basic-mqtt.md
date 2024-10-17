---
layout: docwithnav
assignees:
- ashvayka
title: Basic MQTT authentication
description: ThingsBoard MQTT based authentication.

client-id-only-1:
    0:
        image: /images/user-guide/basic-mqtt/authentication-manage-credentials-1-ce.png
        title: 'Go to the "Devices" page, click on your device to open the device details window, and click the "Manage credentials" button;'
    1:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-only-1-ce.png
        title: 'In the "Device Credentials" window, select "MQTT Basic" credential type, and specify client ID. Click "Save".'

client-id-only-2:
    0:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-only-2-ce.png
        title: 'Click "Check connectivity" button to open the corresponding window;'
    1:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-only-3-ce.png
        title: 'In the opened window select your operating system, and install the necessary client tools using the command from the guide. Copy and run the command to publish telemetry;'
    2:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-only-4-ce.png
        title: 'Once you have successfully executed the command, you should see the published "temperature" readings.'

username-and-password-1:
    0:
        image: /images/user-guide/basic-mqtt/authentication-manage-credentials-1-ce.png
        title: 'Go to the "Devices" page, click on your device to open the device details window, and click the "Manage credentials" button;'
    1:
        image: /images/user-guide/basic-mqtt/authentication-based-on-username-and-password-1-ce.png
        title: 'In the "Device Credentials" window, select "MQTT Basic" credential type, and specify username and password. Click "Save".'

username-and-password-2:
    0:
        image: /images/user-guide/basic-mqtt/authentication-based-on-username-and-password-2-ce.png
        title: 'Click "Check connectivity" button to open the corresponding window;'
    1:
        image: /images/user-guide/basic-mqtt/authentication-based-on-username-and-password-3-ce.png
        title: 'In the opened window select your operating system and install the necessary client tools using the command from the guide. Copy and run the command to publish telemetry;'
    2:
        image: /images/user-guide/basic-mqtt/authentication-based-on-username-and-password-4-ce.png
        title: 'Once you have successfully executed the command, you should see the published "temperature" readings.'

client-id-username-and-password-1:
    0:
        image: /images/user-guide/basic-mqtt/authentication-manage-credentials-1-ce.png
        title: 'Go to the "Devices" page, click on your device to open the device details window, and click the "Manage credentials" button;'
    1:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-username-and-password-1-ce.png
        title: 'In the "Device Credentials" window, select "MQTT Basic" credential type, and specify client ID, username and password. Click "Save".'

client-id-username-and-password-2:
    0:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-username-and-password-2-ce.png
        title: 'Click "Check connectivity" button to open the corresponding window;'
    1:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-username-and-password-3-ce.png
        title: 'In the opened window select your operating system, and install the necessary client tools using the command from the guide. Copy and run the command to publish telemetry;'
    2:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-username-and-password-4-ce.png
        title: 'Once you have successfully executed the command, you should see the published "temperature" readings.'

mqtts-options-1:
    0:
        image: /images/user-guide/basic-mqtt/authentication-manage-credentials-1-ce.png
        title: 'Go to the "Devices" page, click on your device to open the device details window, and click the "Manage credentials" button;'
    1:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-username-and-password-1-ce.png
        title: 'In the "Device Credentials" window, select "MQTT Basic" credential type, and specify device credentials. Click "Save".'

mqtts-options-2:
    0:
        image: /images/user-guide/basic-mqtt/authentication-based-on-client-id-username-and-password-2-ce.png
        title: 'Click "Check connectivity" button to open the corresponding window;'
    1:
        image: /images/user-guide/basic-mqtt/mqtt-over-tls-2-ce.png
        title: 'In the opened window select your operating system, and install the necessary client tools using the command from the guide. Switch to the "MQTTs" protocol. Copy and run the first command to download the valid CA certificate;'
    2:
        image: /images/user-guide/basic-mqtt/mqtt-over-tls-3-ce.png
        title: 'Copy and run the second command to publish telemetry using the tb-cloud-root-ca.pem certificate and the device credentials you specified for its authentication;'
    3:
        image: /images/user-guide/basic-mqtt/mqtt-over-tls-4-ce.png
        title: 'Once you have successfully executed the command, you should see the published "temperature" readings.'

---

{% include get-hosts-name.html %}
{% include docs/user-guide/basic-mqtt.md %}