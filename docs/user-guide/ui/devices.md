---
layout: docwithnav
assignees:
- ashvayka
title: Devices
description: ThingsBoard IoT Device management

add-device:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-1-ce.png
        title: 'Login to your ThingsBoard instance and navigate to the "Entities" section. Then go to the "Devices" page;'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-2-ce.png
        title: 'Click on the "+" icon in the top right corner of the table and then select "Add new device";'
    2:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-3-ce.png
        title: 'Enter the device name. For example, "My New Device". No other changes are required at this time. Click "Add";'
    3:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-4-ce.png
        title: 'Device is created. A window will open where you can check the device&#39;s connection to ThingsBoard. This step is optional. Let&#39;s close this window for now and return to checking the connection in the next step in more detail;'
    4:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-5-ce.png
        title: 'Your first device has been added. As new devices are added, they will be added to the top of the table since the table sorts devices by default using the time of creation.'

add-device-notification:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-6-ce.png
        title: 'When adding a new device, you will receive a notification. You can view it by clicking on the "bell" icon in the top right corner.'

device-details:
    0:
        image: /images/user-guide/ui/devices/ce/device-details-1-ce.png
        title: 'Clicking the device row to open its details, then click the "pencil" icon in the upper right corner of the dialog;'
    1:
        image: /images/user-guide/ui/devices/ce/device-details-2-ce.png
        title: 'If necessary, change the device name and its profile. Also, you can input label and description, or check the "Is gateway" box. After editing, click the orange check mark to save all applied changes.'

device-delete-1:
    0:
        image: /images/user-guide/ui/devices/ce/device-delete-1-ce.png
        title: 'Click on the “trash can” icon can opposite the device&#39;s name you want to delete.'
    1:
        image: /images/user-guide/ui/devices/ce/device-delete-2-ce.png
        title: 'Confirm deleting the device in the dialog box.'

device-delete-2:
    0:
        image: /images/user-guide/ui/devices/ce/device-delete-3-ce.png
        title: 'Click on the device that you want to delete. In the device details window, click the "Delete device" button;'
    1:
        image: /images/user-guide/ui/devices/ce/device-delete-4-ce.png
        title: 'Confirm deleting the device in the dialog box.'

manage-device-credentials:
    0:
        image: /images/user-guide/ui/devices/ce/manage-device-credentials-1-ce.png
        title: 'Open "Device details" window and click the "Manage credentials" button;'
    1:
        image: /images/user-guide/ui/devices/ce/manage-device-credentials-2-ce.png
        title: 'Choose your preferred credential type, generate the necessary data in the fields, and click "Save".'

make-device-public:
    0:
        image: /images/user-guide/ui/devices/ce/make-device-public-1-ce.png
        title: 'Open "Device details" window and click the "Make device public" button;'
    1:
        image: /images/user-guide/ui/devices/ce/make-device-public-2-ce.png
        title: 'Confirm the action in the dialog box;'

make-device-private: 
    0:
        image: /images/user-guide/ui/devices/ce/make-device-public-4-ce.png
        title: 'Open "Device details" window and click the "Make device private" button;'
    1:
        image: /images/user-guide/ui/devices/ce/make-device-public-5-ce.png
        title: 'Confirm the action in the dialog box.'

assign-device-to-customer:
    0:
        image: /images/user-guide/ui/devices/ce/assign-device-to-customer-1-ce.png
        title: 'Open "Device details" window and click the "Assign device to customer" button;'
    1:
        image: /images/user-guide/ui/devices/ce/assign-device-to-customer-2-ce.png
        title: 'Select the customer to assign the device. Then click "Assign";'
    2:
        image: /images/user-guide/ui/devices/ce/assign-device-to-customer-3-ce.png
        title: 'The device is assigned to the selected customer.'

check-connectivity:
    0:
        image: /images/user-guide/ui/devices/ce/check-connectivity-1-ce.png
        title: 'Open "Device details" window and click the "Check connectivity" button;'
    1:
        image: /images/user-guide/ui/devices/ce/check-connectivity-2-ce.png
        title: 'Select the messaging protocol and your operating system, then copy the command;'
    2:
        image: /images/user-guide/ui/devices/ce/check-connectivity-3-ce.png
        title: 'Send telemetry to the ThingsBoard instance on behalf of the device by executing the command via terminal. The device state should be changed from "Inactive" to "Active" and you should see the published "temperature" readings.'

copy-device-id:
    0:
        image: /images/user-guide/ui/devices/ce/copy-device-id-1-ce.png
        title: 'Copy device id to the clipboard using “Copy Device Id” button.'

copy-access-token:
    0:
        image: /images/user-guide/ui/devices/ce/copy-access-token-1-ce.png
        title: 'To copy the device credentials, click on the “Copy Access Token” or “Copy MQTT Credentials” button (depending on your choice of device credentials type).'

attributes:
    0:
        image: /images/user-guide/ui/devices/ce/device-attributes-1-ce.png
        title: 'This tab displays the client, server, and shared attributes of the device. For example, serial number, model, and firmware version.'

telemetry:
    0:
        image: /images/user-guide/ui/devices/ce/device-telemetry-1-ce.png
        title: 'This tab shows the telemetry data that the device sends in real-time, such as sensor readings, status, and other measurable variables.'

telemetry-add-manually:
    0:
        image: /images/user-guide/ui/devices/ce/device-telemetry-add-manually-1-ce.png
        title: 'Click the "plus" icon in the top right corner of the window. In the new window, enter the key name, select the value type, and enter the value. Click "Add" button.'
    1:
        image: /images/user-guide/ui/devices/ce/device-telemetry-add-manually-2-ce.png
        title: 'Telemetry has been added.'

telemetry-delete:
    0:
        image: /images/user-guide/ui/devices/ce/device-telemetry-delete-1-ce.png
        title: 'To delete telemetry, click the "trash can" icon next to the name of the telemetry key you want to delete;'
    1:
        image: /images/user-guide/ui/devices/ce/device-telemetry-delete-2-ce.png
        title: 'Choose what you want to delete specifically: delete all data, delete all data except latest value, delete latest value, delete all data for time period. Confirm the deletion by clicking the "Apply" button.'

alarms:
    0:
        image: /images/user-guide/ui/devices/ce/device-alarms-1-ce.png
        title: 'This tab shows events (alarms) that identify issues with your devices.'

events:
    0:
        image: /images/user-guide/ui/devices/ce/device-events-1-ce.png
        title: 'Here, events related to the device are displayed, including system logs, errors, warnings, and other important moments in the device&#39;s lifecycle.'

relations:
    0:
        image: /images/user-guide/ui/devices/ce/device-relations-1-ce.png
        title: 'This tab displays the relationships of this device with other devices, dashboards, assets, and other entities in the ThingsBoard system.'

audit-logs:
    0:
        image: /images/user-guide/ui/devices/ce/device-audit-logs-1-ce.png
        title: 'ThingsBoard provides the ability to track user actions in order to keep an audit log. It is possible to log user actions related to main entities: assets, devices, dashboard, rules, etc.'

version-control:
    0:
        image: /images/user-guide/ui/devices/ce/device-version-control-1-ce.png
        title: 'ThingsBoard version control service provides the ability to export and restore ThingsBoard Entities using Git.'

---

{% include get-hosts-name.html %}
{% include docs/user-guide/ui/devices.md %}