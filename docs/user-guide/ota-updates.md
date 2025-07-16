---
layout: docwithnav
assignees:
- ashvayka
title: Over-the-air firmware and software updates
description: IoT device firmware updates
 
createFirmware:
    0:
        image: /images/user-guide/firmware/add-firmware-ce.png  
        title: 'You have to enter title and version; select type and device profile (this field we define what type of device this firmware will be available; 
                choose file contains firmware. Optionally add checksum algorithm and checksum.'

listFirmware:
    0:
        image: /images/user-guide/firmware/list-firmware-ce.png
        title: ''
    1:
        image: /images/user-guide/firmware/list-firmware-1-ce.png
        title: ''
    2:
        image: /images/user-guide/firmware/list-firmware-2-ce.png
        title: ''
    3:
        image: /images/user-guide/firmware/list-firmware-3-ce.png
        title: ''

deviceFirmware:
    0:
        image: /images/user-guide/firmware/device-firmware-ce.png
        title: 'Go to the Device page and open needed device details to edit its information.'
    1:
        image: /images/user-guide/firmware/device-firmware-1-ce.png
        title: "From the drop-down menu select firmware that you&#39;d like to assign to this device."
    3:
        image: /images/user-guide/firmware/device-firmware-2-ce.png
        title: 'After selecting firmware, apply changes by clicking the orange check mark in the right corner of the page.'
    4:
        image: /images/user-guide/firmware/device-firmware-3-ce.png
        title: '.'

fw-deviceprofile:
    0:
        image: /images/user-guide/firmware/fw-deviceprofile-ce.png
        title: 'Go to the Device profile page and open needed device profile details to edit its information.'
    1:
        image: /images/user-guide/firmware/fw-deviceprofile-1-ce.png
        title: "From the drop-down menu select firmware that you&#39;d like to assign to this device profile."
    2:
        image: /images/user-guide/firmware/fw-deviceprofile-2-ce.png
        title: 'After selecting firmware, apply changes by clicking the orange check mark in the right corner of the page.'

fw-attributes:
    0:
        image: /images/user-guide/firmware/fw-attributes-ce.png
        title: ''

fw-dashboard:
    0:
        image: /images/user-guide/firmware/fw-dashboard-ce.png
        title: 'Monitor and track the firmware status of your device in the Firmware dashboard. 
                You can see a list of all devices with full information about their firmware. Use the tabs on the right side of the page to see more detailed status information.'
    1:
        image: /images/user-guide/firmware/fw-dashboard-2-ce.png
        title: 'Find out more about the firmware status of specific devices by clicking the buttons next to the device names.'

fw-status:
    0:
        image: /images/user-guide/firmware/fw-status-ce.png
        title: ''
    1:
        image: /images/user-guide/firmware/fw-status-1-ce.png
        title: ''

sw-dashboard:
    0:
        image: /images/user-guide/firmware/sw-dashboard-1-ce.png
        title: 'Monitor and track the software status of your device in the Software dashboard.'
    1:
        image: /images/user-guide/firmware/sw-dashboard-2-ce.png
        title: 'Find out more about the software status of specific devices by clicking the buttons next to the device names.'

fw-http-updated:
    0:
        image: /images/user-guide/firmware/fw-http-updated.png
        title: ''

fw-mqtt-updated:
    0:
        image: /images/user-guide/firmware/fw-mqtt-updated.png
        title: ''

fw-coap-updated:
    0:
        image: /images/user-guide/firmware/fw-coap-updated.png
        title: ''

fw-devicegroup:
    0:
        image: /images/user-guide/firmware/fw-devicegroup-pe.png
        title: 'Go to the Device group page and open preferred device group details to edit its information.'
    1:
        image: /images/user-guide/firmware/fw-devicegroup-1-pe.png
        title: "From the drop-down menu select OTA package that you would like to assign to this device."
    3:
        image: /images/user-guide/firmware/fw-devicegroup-2-pe.png
        title: 'After selecting firmware, apply changes by clicking the orange check mark in the right corner of the page.'
    4:
        image: /images/user-guide/firmware/fw-devicegroup-3-pe.png
        title: '.'

---

{% include get-hosts-name.html %}
{% include docs/user-guide/ota-updates.md %}