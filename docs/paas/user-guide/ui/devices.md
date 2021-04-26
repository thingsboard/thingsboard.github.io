---
layout: docwithnav-paas
assignees:
- ashvayka
title: Devices
description: ThingsBoard IoT Device management
device-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-pe.png
        title: 'Go to Device groups from the main left menu.'

device-add-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-0-pe.png
        title: 'Click the "plus" icon in the upper right corner.'
    1:
        image: /images/user-guide/ui/devices/pe/device-add-pe.png
        title: 'Input name for the device group and optionally type the description.'
    2:
        image: /images/user-guide/ui/devices/pe/device-add-1-pe.png
        title: 'Click on the row or click the bars icon in the end of the row to open the device group.'
    3:
        image: /images/user-guide/ui/devices/pe/device-add-2-pe.png
        title: 'To add a new device, click the "plus" icon in the upper right corner. Input name, select transport type and choose either you should create new device profile or select existing one. In the example, we will create a new one.
                Click the "Add" button in the lower right corner of the dialog to save.'

device-details-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-details-pe.png
        title: 'Clicking the device row to open its details, then you can manage credentials of the device, delete device, copy its ID and access token, and edit the device.
                To edit the device click the "pencil" icon in the upper right corner of the dialog.'
    1:
        image: /images/user-guide/ui/devices/pe/device-details-1-pe.png
        title: 'Change name of the device and its profile. Also, you can input label and description, or check the Is gateway box.'
    2:
        image: /images/user-guide/ui/devices/pe/device-details-2-pe.png
        title: 'After editing, click the orange check mark to save all applied changes.'

device-details-3-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-details-3-pe.png
        title: 'Tenant administrator and customer users are able to browse device attributes.'

device-details-4-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-details-4-pe.png
        title: 'Tenant administrator and customer users are able to browse device telemetry data.'

device-details-5-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-details-5-pe.png
        title: 'Tenant administrator and customer users are able to browse device alarms.'

device-details-6-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-details-6-pe.png
        title: 'Tenant administrator and customer users are able to browse events related to a particular device.'

device-details-7-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-details-7-pe.png
        title: 'Tenant administrator and customer users are able to manage device relations.'

device-details-8-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-details-8-pe.png
        title: 'ThingsBoard provides the ability to track user actions in order to keep an audit log. It is possible to log user actions related to main entities: assets, devices, dashboard, rules, etc.'

device-delete-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-delete-pe.png
        title: 'Click the trash can icon next to the asset and confirm it in the dialog box.'

---

{% assign docsPrefix = "paas/" %}
{% include docs/user-guide/ui/devices-pe.md %}
