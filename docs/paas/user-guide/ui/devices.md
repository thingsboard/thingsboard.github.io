---
layout: docwithnav-paas
assignees:
- ashvayka
title: Devices
description: ThingsBoard IoT Device management

add-device:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-1-pe.png
        title: 'Login to your ThingsBoard instance and navigate to the "Entities" section. Then go to the "Devices" page;'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-2-pe.png
        title: 'By default, you navigate to the device group "All". Click on the "+" icon in the top right corner of the table and then select "Add new device";'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-3-pe.png
        title: 'Enter the device name. For example, "My New Device". No other changes are required at this time. Click "Add";'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-4-pe.png
        title: 'Device is created. A window will open where you can check the device&#39;s connection to ThingsBoard. This step is optional. Let&#39;s close this window for now and return to checking the connection in the next step in more detail;'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-5-pe.png
        title: 'Your first device has been added. As new devices are added, they will be added to the top of the table since the table sorts devices by default using the time of creation.'

add-device-notification:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-6-pe.png
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
        title: 'Your device group has been added.'

device-details:
    0:
        image: /images/user-guide/ui/devices/pe/device-details-1-pe.png
        title: 'Clicking the device row to open its details, then click the "pencil" icon in the upper right corner of the dialog;'
    1:
        image: /images/user-guide/ui/devices/pe/device-details-2-pe.png
        title: 'If necessary, change the device name and its profile. Also, you can input label and description, or check the "Is gateway" box. After editing, click the orange check mark to save all applied changes.'

device-delete-1:
    0:
        image: /images/user-guide/ui/devices/pe/device-delete-1-pe.png
        title: 'Click on the “trash can” icon can opposite the device&#39;s name you want to delete.'
    1:
        image: /images/user-guide/ui/devices/pe/device-delete-2-pe.png
        title: 'Confirm deleting the device in the dialog box.'

device-delete-2:
    0:
        image: /images/user-guide/ui/devices/pe/device-delete-3-pe.png
        title: 'Click on the device that you want to delete. In the device details window, click the "Delete device" button;'
    1:
        image: /images/user-guide/ui/devices/pe/device-delete-4-pe.png
        title: 'Confirm deleting the device in the dialog box.'
    
manage-device-credentials:
    0:
        image: /images/user-guide/ui/devices/pe/manage-device-credentials-1-pe.png
        title: 'Open "Device details" window and click the "Manage credentials" button;'
    1:
        image: /images/user-guide/ui/devices/pe/manage-device-credentials-2-pe.png
        title: 'Choose your preferred credential type, generate the necessary data in the fields, and click "Save".'

manage-owner-and-groups-pe:
    0:
        image: /images/user-guide/ui/devices/pe/manage-owner-and-groups-1-pe.png
        title: 'Open "Device details" window and click the "Manage credentials" button;'
    1:
        image: /images/user-guide/ui/devices/pe/manage-owner-and-groups-2-pe.png
        title: 'Specify the new device owner and the group you want to add the device to. Click "Update";'
    2:
        image: /images/user-guide/ui/devices/pe/manage-owner-and-groups-3-pe.png
        title: 'We have changed the device owner and added the device to a device group.'

check-connectivity:
    0:
        image: /images/user-guide/ui/devices/pe/check-connectivity-1-pe.png
        title: 'Open "Device details" window and click the "Check connectivity" button;'
    1:
        image: /images/user-guide/ui/devices/pe/check-connectivity-2-pe.png
        title: 'Select the messaging protocol and your operating system, then copy the command;'
    2:
        image: /images/user-guide/ui/devices/pe/check-connectivity-3-pe.png
        title: 'Send telemetry to the ThingsBoard instance on behalf of the device by executing the command via terminal. The device state should be changed from "Inactive" to "Active" and you should see the published "temperature" readings.'

copy-device-id:
    0:
        image: /images/user-guide/ui/devices/pe/copy-device-id-1-pe.png
        title: 'Copy device id to the clipboard using “Copy Device Id” button.'

copy-access-token:
    0:
        image: /images/user-guide/ui/devices/pe/copy-access-token-1-pe.png
        title: 'To copy the device credentials, click on the “Copy Access Token” or “Copy MQTT Credentials” button (depending on your choice of device credentials type).'

attributes:
    0:
        image: /images/user-guide/ui/devices/pe/device-attributes-1-pe.png
        title: 'This tab displays the client, server, and shared attributes of the device. For example, serial number, model, and firmware version.'

telemetry:
    0:
        image: /images/user-guide/ui/devices/pe/device-telemetry-1-pe.png
        title: 'This tab shows the telemetry data that the device sends in real-time, such as sensor readings, status, and other measurable variables.'

telemetry-add-manually:
    0:
        image: /images/user-guide/ui/devices/pe/device-telemetry-add-manually-1-pe.png
        title: 'Click the "plus" icon in the top right corner of the window. In the new window, enter the key name, select the value type, and enter the value. Click "Add" button.'
    1:
        image: /images/user-guide/ui/devices/pe/device-telemetry-add-manually-2-pe.png
        title: 'Telemetry has been added.'

telemetry-delete:
    0:
        image: /images/user-guide/ui/devices/pe/device-telemetry-delete-1-pe.png
        title: 'To delete telemetry, click the "trash can" icon next to the name of the telemetry key you want to delete;'
    1:
        image: /images/user-guide/ui/devices/pe/device-telemetry-delete-2-pe.png
        title: 'Choose what you want to delete specifically: delete all data, delete all data except latest value, delete latest value, delete all data for time period. Confirm the deletion by clicking the "Apply" button.'

alarms:
    0:
        image: /images/user-guide/ui/devices/pe/device-alarms-1-pe.png
        title: 'This tab shows events (alarms) that identify issues with your devices.'

events:
    0:
        image: /images/user-guide/ui/devices/pe/device-events-1-pe.png
        title: 'Here, events related to the device are displayed, including system logs, errors, warnings, and other important moments in the device&#39;s lifecycle.'

relations:
    0:
        image: /images/user-guide/ui/devices/pe/device-relations-1-pe.png
        title: 'This tab displays the relationships of this device with other devices, dashboards, assets, and other entities in the ThingsBoard system.'

audit-logs:
    0:
        image: /images/user-guide/ui/devices/pe/device-audit-logs-1-pe.png
        title: 'ThingsBoard provides the ability to track user actions in order to keep an audit log. It is possible to log user actions related to main entities: assets, devices, dashboard, rules, etc.'

version-control:
    0:
        image: /images/user-guide/ui/devices/pe/device-version-control-1-pe.png
        title: 'ThingsBoard version control service provides the ability to export and restore ThingsBoard Entities using Git.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/ui/devices.md %}
