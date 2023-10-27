---
layout: docwithnav-pe
assignees:
- ashvayka
title: Devices
description: ThingsBoard IoT Device management

add-device-pe:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-1-pe.png
        title: 'Login to your ThingsBoard instance and navigate to the "Entities". Then click the "Devices" page;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-2-pe.png
        title: 'By default, you navigate to the device group “All”. Click on the "+" icon in the top right corner of the table and then select "Add new device";'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-3-pe.png
        title: 'Input device name. For example, "My New Device". No other changes are required at this time. Click "Add" to add the device;'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-connectivity-1-pe.png
        title: 'The window to check the device&#39;s connection to ThingsBoard will open. This step is optional. Select the messaging protocol and your operating system. Install the necessary client tools and copy the command;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-connectivity-3-pe.png
        title: 'Execute previously copied command. The device state should be changed from "Inactive" to "Active" and you should see the published "temperature" readings. Then, close connectivity window;'
    5:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-4-pe.png
        title: 'Your first device has been added. As long as you have one device. But as new devices are added, they will be added to the top of the table, since the table sorts devices using the time of the creation by default;'
    6:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-5-pe.png
        title: 'When adding a new device, you will receive a notification. You can view it by clicking on the "bell" icon in the top right corner.'

add-device-group-pe:
    0:
        image: /images/user-guide/entity-groups/create-entity-group-1-pe.png
        title: 'Go to the "Entities" section - "Devices" page. By default, you navigate to the device group "All". Navigate to the "Groups" tab and click on the "plus" icon in the upper right corner;'
    1:
        image: /images/user-guide/entity-groups/create-entity-group-2-pe.png
        title: 'Enter the name of the device group and click "Add";'
    2:
        image: /images/user-guide/entity-groups/create-entity-group-3-pe.png
        title: 'The new device group is created.'

device-details-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-details-1-pe.png
        title: 'Clicking the device row to open its details, then you can manage credentials of the device, delete device, copy its ID and access token, and edit the device.
                To edit the device click the "pencil" icon in the upper right corner of the dialog.'
    1:
        image: /images/user-guide/ui/devices/pe/device-details-2-pe.png
        title: 'Change name of the device and its profile. Also, you can input label and description, or check the Is gateway box. After editing, click the orange check mark to save all applied changes.'

device-delete-1-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-delete-1-pe.png
        title: 'Click on the “trash” icon can opposite the device`s name you want to delete/ Then confirm deleting the device in the dialog box.'

device-delete-2-pe:
    0:
        image: /images/user-guide/ui/devices/pe/device-delete-2-pe.png
        title: 'Click on the device that you want to delete. In the device details window, click "Delete device" button;'
    1:
        image: /images/user-guide/ui/devices/pe/device-delete-2-pe.png
        title: 'Confirm deleting the device in the dialog box.'
    
manage-device-credentials-pe:
    0:
        image: /images/user-guide/ui/devices/pe/manage-device-credentials-1-pe.png
        title: 'Open "Device details" window and click "Manage credentials" button;'
    1:
        image: /images/user-guide/ui/devices/pe/manage-device-credentials-2-pe.png
        title: 'Choose your preferred credential type, generate the necessary data in the fields, and click "Save".'

manage-owner-and-groups-pe:
    0:
        image: /images/user-guide/ui/devices/pe/manage-device-credentials-1-pe.png
        title: 'Open "Device details" window and click "Manage credentials" button;'
    1:
        image: /images/user-guide/ui/devices/pe/manage-device-credentials-2-pe.png
        title: 'Choose your preferred credential type, generate the necessary data in the fields, and click "Save".'
    2:
        image: /images/user-guide/ui/devices/pe/manage-device-credentials-2-pe.png
        title: 'Choose your preferred credential type, generate the necessary data in the fields, and click "Save".'

check-connectivity-pe:
    0:
        image: /images/user-guide/ui/devices/pe/check-connectivity-1-pe.png
        title: 'Open the "Check connectivity" window by clicking the "Check connectivity" button;'
    1:
        image: /images/user-guide/ui/devices/pe/check-connectivity-2-pe.png
        title: 'Select your operating system, copy and execute the command for sending telemetry on behalf of the device;'
    2:
        image: /images/user-guide/ui/devices/pe/check-connectivity-3-pe.png
        title: 'The device state should be changed from "Inactive" to "Active" and you should see the published "temperature" readings. Then, close connectivity window.'
    
copy-access-token:
    0:
        image: /images/user-guide/ui/devices/pe/copy-access-token-1-pe.png
        title: 'To copy the device credentials, click on the “Copy Access Token” or “Copy MQTT Credentials” button (depending on your choice of device credentials type).'

copy-device-id:
    0:
        image: /images/user-guide/ui/devices/pe/copy-device-id-1-pe.png
        title: 'Copy device id to the clipboard using “Copy Device Id” button.'






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

{% assign docsPrefix = "pe/" %}
{% include docs/user-guide/ui/devices-pe.md %}
