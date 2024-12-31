---
layout: docwithnav-pe
assignees:
- ashvayka
title: Over-the-air firmware and software updates
description: IoT device firmware updates
 
createFirmware:
    0:
        image: /images/user-guide/firmware/add-firmware-pe.png  
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
    3:
        image: /images/user-guide/firmware/list-firmware-3-pe.png
        title: ''     


fw-deviceprofile:
    0:
        image: /images/user-guide/firmware/fw-deviceprofile-pe.png
        title: '.'
    1:
        image: /images/user-guide/firmware/fw-deviceprofile-1-pe.png
        title: '.'
    2:
        image: /images/user-guide/firmware/fw-deviceprofile-2-pe.png
        title: '.'
    3:
        image: /images/user-guide/firmware/fw-deviceprofile-3-pe.png
        title: '.'

deviceFirmware:
    0:
        image: /images/user-guide/firmware/device-firmware-pe.png
        title: 'Go to the Device page and open needed device details to edit its information.'
    1:
        image: /images/user-guide/firmware/device-firmware-1-pe.png
        title: "From the drop-down menu select firmware that you&#39;d like to assign to this device."
    3:
        image: /images/user-guide/firmware/device-firmware-2-pe.png
        title: 'After selecting firmware, apply changes by clicking the orange check mark in the right corner of the page.'
    4:
        image: /images/user-guide/firmware/device-firmware-3-pe.png
        title: '.'

fw-attributes:
    0:
        image: /images/user-guide/firmware/fw-attributes-pe.png
        title: ''

fw-dashboard:
    0:
        image: /images/user-guide/firmware/fw-dashboard-pe.png
        title: 'Monitor and track the firmware status of your device in the Firmware dashboard.'
    1:
        image: /images/user-guide/firmware/fw-dashboard-1-pe.png
        title: 'Find out more about the firmware status of specific devices by clicking the buttons next to the device names.'

fw-status:
    0:
        image: /images/user-guide/firmware/fw-status-pe.png
        title: ''
    1:
        image: /images/user-guide/firmware/fw-status-1-pe.png
        title: ''

sw-dashboard:
    0:
        image: /images/user-guide/firmware/sw-dashboard-1-pe.png
        title: 'Monitor and track the software status of your device in the Software dashboard.'
    1:
        image: /images/user-guide/firmware/sw-dashboard-2-pe.png
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
        title: 'Go to the Device profile page and open needed device profile details to edit its information.'
    1:
        image: /images/user-guide/firmware/fw-devicegroup-1-pe.png
        title: "From the drop-down menu select firmware that you would like to assign to this device profile."
    2:
        image: /images/user-guide/firmware/fw-devicegroup-2-pe.png
        title: 'After selecting firmware, apply changes by clicking the orange check mark in the right corner of the page.'
    3:
        image: /images/user-guide/firmware/fw-devicegroup-3-pe.png
        title: ''

fw-scheduler:
    0:
        image: /images/user-guide/firmware/fw-scheduler-pe.png
    1:
        image: /images/user-guide/firmware/fw-scheduler-1-pe.png
    2:
        image: /images/user-guide/firmware/fw-scheduler-2-pe.png

fw-calendar:
    0:
        image: /images/user-guide/firmware/fw-scheduler-3-pe.png


---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/ota-updates.md %}

## Assign OTA package to device group

Profession Editions gives you an opportunity to assign firmware/software to a specific device group for
automatic distribution of the package to all devices that share the same group. See screenshots below.

{% include images-gallery.html imageCollection="fw-devicegroup" %}

The device group details allow choosing only compatible OTA update packages 
(see [provisioning](/docs/{{docsPrefix}}user-guide/ota-updates/#provision-ota-package-to-thingsboard-repository)) for more info.  
Assignment of the firmware/software triggers the [update process](/docs/{{docsPrefix}}user-guide/ota-updates/#update-process).

The firmware version assigned specifically to the device will automatically overwrite firmware version that is assigned to the device group.

For example, let's assume you have Devices A1, A2 and A3 that are in the same Device Group, but have different device profiles. 

* Devices A1 and A2 have compatible device profiles, while Device A3 has incompatible one. When you assign the package to this device group, 
  firmware/software will be updated only on Devices A1 and A2.
* If you update the package specifically on Device A2, Device A1 will stay not updated.

## Scheduler 

Scheduler allows you to set the exact date and time for an OTA package update. 
You can either observe scheduler events as a list, or see upcoming events in a calendar view.
1. To schedule an update, click the plus sign in the upper right corner of the screen to open a dialog window.

2. In the **Configuration** tab of the opened dialog, enter the event name, from the drop-down menu select an event type (Software/Firmware update) and 
choose an update target:
* If you need to schedule an update for Device, Device profile or Device group, from the drop-down menus, select an entity 
and needed OTA package. 
* If you need to schedule an update for Devices group owner, from the drop-down menus, select the owner of the group, specific entity group that belongs to this owner,
and the package that will be updated.
  
3. In the **Schedule** tab, choose your timezone, set the date and time when you'd like your entity to be updated. 
If you want to make it repeatable action, check the Repeat box. From the appeared drop-down menu, choose how often the update will be happening.
When choosing Weekly updates, you should check the boxes on which days you want the update happen. 
Timer-based update allows you to set the frequency: hours, minutes or seconds, and numeric value.
Also, you need to set the time when repetition will be finished.

4. After setting up Configuration parameters and Schedule time, click the "Create" button.
You are able to edit created scheduler events or delete them by clicking the corresponding buttons next to their names.
In the Edit scheduler event dialog, you may configure Method and Params.
  
{% include images-gallery.html imageCollection="fw-scheduler" %}

In the calendar, you are able to change its view type by choosing the preferred one in the drop-down menu. To edit or delete a scheduler event, click on it.

{% include images-gallery.html imageCollection="fw-calendar" %}
