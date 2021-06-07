---
layout: docwithnav-pe
assignees:
- ashvayka
title: Over-the-air firmware and software updates
description: IoT device firmware updates
redirect_from: "/docs/pe/user-guide/ui/dashboards/"
 
createFirmware:
    0:
        image: /images/user-guide/firmware/add-firmware-ce.png  
        title: 'You have to enter title and version; select type and device profile (this field we define what type of device this firmware will be available; 
                choose file contains firmware. Optionally add checksum algorithm and checksum.'

listFirmware:
    0:
        image: /images/user-guide/firmware/list-firmware-pe.png
        title: ''
    1:
        image: /images/user-guide/firmware/list-firmware-1-pe.png
        title: ''
    2:
        image: /images/user-guide/firmware/list-firmware-2-pe.png
        title: ''

deviceFirmware:
    0:
        image: /images/user-guide/firmware/device-firmware-ce.png
        title: 'Go to the Device page and open needed device details to edit its information.'
    1:
        image: /images/user-guide/firmware/device-firmware-1-ce.png
        title: "From the drop-down menu select firmware that you'd like to assign to this device."
    3:
        image: /images/user-guide/firmware/device-firmware-2-ce.png
        title: 'After selecting firmware, apply changes by clicking the orange check mark in the right corner of the page.'

fw-deviceprofile:
    0:
        image: /images/user-guide/firmware/fw-deviceprofile-ce.png
        title: 'Go to the Device profile page and open needed device profile details to edit its information.'
    1:
        image: /images/user-guide/firmware/fw-deviceprofile-1-ce.png
        title: "From the drop-down menu select firmware that you'd like to assign to this device profile."
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
        title: 'Monitor and track the firmware status of your device in the Firmware dashboard.'
    1:
        image: /images/user-guide/firmware/fw-dashboard-1-ce.png
        title: 'You can see a list of all devices with full information about their firmware. Use the tabs on the right side of the page to see more detailed status information.'
    2:
        image: /images/user-guide/firmware/fw-dashboard-2-ce.png
        title: 'Find out more about the firmware status of specific devices by clicking the buttons next to the device names. '

fw-status:
    0:
        image: /images/user-guide/firmware/fw-status-ce.png
        title: ''

fw-status-1:
    0:
        image: /images/user-guide/firmware/fw-status-1-ce.png
        title: ''

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
        title: 'Go to the Device profile page and open needed device profile details to edit its information.'
    1:
        image: /images/user-guide/firmware/fw-devicegroup-1-pe.png
        title: "From the drop-down menu select firmware that you'd like to assign to this device profile."
    2:
        image: /images/user-guide/firmware/fw-devicegroup-2-pe.png
        title: 'After selecting firmware, apply changes by clicking the orange check mark in the right corner of the page.'
    3:
        image: /images/user-guide/firmware/fw-devicegroup-3-pe.png
        title: ''

---

{% assign docsPrefix = "pe/" %}
{% include docs/user-guide/ota-updates.md %}

## Assign OTA package to device group

Profession Editions gives you an opportunity to assign firmware/software to a specific device group for
automatic distribution of the package to all devices that share the same group. See screenshots below.


The device group details allow choosing only compatible OTA update packages 
(see [provisioning](/docs/{{docsPrefix}}user-guide/ota-updates/#provision-ota-package-to-thingsboard-repository)) for more info). 
Device profile may be used by thousands of devices. 
Assignment of the firmware/software triggers the [update process](/docs/{{docsPrefix}}user-guide/ota-updates/#update-process).

The firmware version assigned to the device will automatically overwrite firmware version that is assigned to the device profile.

For example, let's assume you have Devices A1, A2 and A3 that are in the same Device Group, but have different device profiles. 

* Devices A1 and A2 have compatible device profiles, while Device A3 has incompatible one. When you assign a package to this device group, 
  firmware/software will be updated only on Devices A1 and A2.
* If you update package on Device A2, 

## Scheduler 

Scheduler allows you to set the exact date and time for an OTA package update. 
You can either observe scheduler events as a list, or see upcoming events in a calendar view.
To schedule an update, click the plus sign in the upper right corner of the screen to open a dialog window.

In the **Configuration** tab of the opened dialog, enter the event name, from the drop-down menu select an event type (Software/Firmware update) and 
choose an update target:
* If you need to schedule an update for Device, Device profile or Device group, from the drop-down menus, select an entity 
and needed OTA package. 
* If you need to schedule an update for Devices group owner, from the drop-down menus, select an owner of the group, specific entity group that belongs to this owner,
and the package that will be updated.
  
In the **Schedule** tab, choose your timezone, set the date and time when you'd like your entity to be updated. 
If you want to make it repeatable action, check the Repeat box. From the appeared drop-down menu, choose how often the update will be happening.
When choosing Weekly updates, you should check the boxes on which days you want the update happen. 
Timer-based update allows you to set the frequency: hours, minutes or seconds, and numeric value.
Also, you need to set the time when repetition will be finished.

After setting up Configuration parameters and Schedule time, click the "Create" button.
You are able to edit created scheduler events or delete them by clicking the corresponding buttons next to their names.
In the Edit scheduler event dialog, you may configure Method and Params. 

In the calendar, you are able to change its view type by choosing the preferred one in the drop-down menu. To edit or delete a scheduler event, click on it.