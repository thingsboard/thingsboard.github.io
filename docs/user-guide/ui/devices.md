---
layout: docwithnav
assignees:
- ashvayka
title: Devices
description: ThingsBoard IoT Device management

add-device:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-1-ce.png
        title: 'Login to your ThingsBoard instance. Navigate to "<b>Entities</b>" &#8702; "<b>Devices</b>".'
    1:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-2-ce.png
        title: 'Click the "<b>+</b>" icon in the upper-right corner and select "<b>Add new device</b>" from drop-down menu.'
    2:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-3-ce.png
        title: 'In the device creation form, fill in the required fields: <b>Name</b> – a unique name for the device; <b>Device profile</b> – by default, the profile is set to "<b>default</b>", but you can choose a different profile if needed. Click "<b>Add</b>".'
    3:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-4-ce.png
        title: 'A window will immediately open where you can check the device&#39;s connection to ThingsBoard platform. This step is optional. For now, let&#39;s close this window and return to the connection check in more detail later.'
    4:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-5-ce.png
        title: 'Device successfully created and is now available in the list.'

add-device-notification:
    0:
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-6-ce.png
        title: 'You&#39;ll also receive a notification (bell icon) indicating the device was added.'

editing-device:
    0:
        image: /images/user-guide/ui/devices/ce/device-details-1-ce.png
        title: 'In the devices list, locate and click on the desired asset, then click the "<b>pencil</b>" (✏️ <b>Edit</b>) icon on the right to open the edit form.'
    1:
        image: /images/user-guide/ui/devices/ce/device-details-2-ce.png
        title: 'Make the necessary changes and click the "<b>Apply changes</b>" button to save them.'

device-delete-1:
    0:
        image: /images/user-guide/ui/devices/ce/device-delete-1-ce.png
        title: 'Click on the "<b>trash can</b>" icon can opposite the device&#39;s name you want to delete.'
    1:
        image: /images/user-guide/ui/devices/ce/device-delete-2-ce.png
        title: 'Confirm deleting the device in the dialog box.'

device-delete-2:
    0:
        image: /images/user-guide/ui/devices/ce/device-delete-3-ce.png
        title: 'Click on the device that you want to delete. In the device details window, click the "<b>Delete device</b>" button;'
    1:
        image: /images/user-guide/ui/devices/ce/device-delete-4-ce.png
        title: 'Confirm deleting the device in the dialog box.'

manage-device-credentials:
    0:
        image: /images/user-guide/ui/devices/ce/manage-device-credentials-1-ce.png
        title: 'Open "<b>Device details</b>" window and click the "<b>Manage credentials</b>" button;'
    1:
        image: /images/user-guide/ui/devices/ce/manage-device-credentials-2-ce.png
        title: 'Select the desired credential type and generate or enter required fields. Click "<b>Save</b>".'

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
        title: 'Open the "<b>Device details</b>" window and click "<b>Check connectivity</b>"'
    1:
        image: /images/user-guide/ui/devices/ce/check-connectivity-2-ce.png
        title: 'Select the communication protocol (MQTT, HTTP, etc.) and your operating system, then copy the command.'
    2:
        image: /images/user-guide/ui/devices/ce/check-connectivity-3-ce.png
        title: 'Run copied command in a <b>Terminal</b>. The device state should be changed from "Inactive" to "Active" and you should see the published "temperature" readings.'

device-details-page:
    0:
        image: /images/user-guide/ui/devices/ce/device-details-page-1-ce.png
        title: 'Click on the target device to open its <b>details window</b>.'

---

{% include get-hosts-name.html %}
{% include docs/user-guide/ui/devices.md %}