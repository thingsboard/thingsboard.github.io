---
layout: docwithnav-paas
assignees:
- ashvayka
title: Devices
description: ThingsBoard IoT Device management

add-device:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-1-pe.png
        title: 'Login to your ThingsBoard instance. Navigate to "<b>Entities</b>" &#8702; "<b>Devices</b>".'
    1:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-2-pe.png
        title: 'By default, you will see the "<b>All</b>" device group. Click the "<b>+</b>" icon in the upper-right corner and select "<b>Add new device</b>" from drop-down menu.'
    2:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-3-pe.png
        title: 'In the device creation form, fill in the required fields: <b>Name</b> – a unique name for the device; <b>Device profile</b> – by default, the profile is set to "<b>default</b>", but you can choose a different profile if needed. Click "<b>Add</b>".'
    3:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-4-pe.png
        title: 'A window will immediately open where you can check the device&#39;s connection to ThingsBoard platform. This step is optional. For now, let&#39;s close this window and return to the connection check in more detail later.'
    4:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-5-pe.png
        title: 'Device successfully created and is now available in the list.'

add-device-notification:
    0:
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-6-pe.png
        title: 'You&#39;ll also receive a notification (bell icon) indicating the device was added.'

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

editing-device:
    0:
        image: /images/user-guide/ui/devices/pe/device-details-1-pe.png
        title: 'In the devices list, locate and click on the desired asset, then click the "<b>pencil</b>" (✏️ <b>Edit</b>) icon on the right to open the edit form.'
    1:
        image: /images/user-guide/ui/devices/pe/device-details-2-pe.png
        title: 'Make the necessary changes and click the "<b>Apply changes</b>" button to save them.'

device-delete-1:
    0:
        image: /images/user-guide/ui/devices/pe/device-delete-1-pe.png
        title: 'Click on the "<b>trash can</b>" icon can opposite the device&#39;s name you want to delete.'
    1:
        image: /images/user-guide/ui/devices/pe/device-delete-2-pe.png
        title: 'Confirm deleting the device in the dialog box.'

device-delete-2:
    0:
        image: /images/user-guide/ui/devices/pe/device-delete-3-pe.png
        title: 'Click on the device that you want to delete. In the device details window, click the "<b>Delete device</b>" button;'
    1:
        image: /images/user-guide/ui/devices/pe/device-delete-4-pe.png
        title: 'Confirm deleting the device in the dialog box.'
    
manage-device-credentials:
    0:
        image: /images/user-guide/ui/devices/pe/manage-device-credentials-1-pe.png
        title: 'Open "<b>Device details</b>" window and click the "<b>Manage credentials</b>" button;'
    1:
        image: /images/user-guide/ui/devices/pe/manage-device-credentials-2-pe.png
        title: 'Select the desired credential type and generate or enter required fields. Click "<b>Save</b>".'

manage-owner-and-groups-pe:
    0:
        image: /images/user-guide/ui/devices/pe/manage-owner-and-groups-1-pe.png
        title: 'Click device to open its <b>details</b> view and click the "<b>Manage owner and groups</b>" button.'
    1:
        image: /images/user-guide/ui/devices/pe/manage-owner-and-groups-2-pe.png
        title: 'Select the new owner of the device from the list. If needed, add the device to an existing group or create a new one. Confirm the change to update the device&#39;s ownership.'
    2:
        image: /images/user-guide/ui/devices/pe/manage-owner-and-groups-3-pe.png
        title: 'In the <b>"Customer name" column</b>, you can see the current owner of the device.'

check-connectivity:
    0:
        image: /images/user-guide/ui/devices/pe/check-connectivity-1-pe.png
        title: 'Open the "<b>Device details</b>" window and click "<b>Check connectivity</b>"'
    1:
        image: /images/user-guide/ui/devices/pe/check-connectivity-2-pe.png
        title: 'Select the communication protocol (MQTT, HTTP, etc.) and your operating system, then copy the command.'
    2:
        image: /images/user-guide/ui/devices/pe/check-connectivity-3-pe.png
        title: 'Run copied command in a <b>Terminal</b>. The device state should be changed from "Inactive" to "Active" and you should see the published "temperature" readings.'

include-customer-entities:
    0:
        image: /images/user-guide/ui/devices/pe/include-customer-entities-1-pe.png
        title: 'When the switch is <b>enabled</b> (default state) — the table shows <b>all available devices</b>, including those owned by customers.'
    1:
        image: /images/user-guide/ui/devices/pe/include-customer-entities-2-pe.png
        title: 'When the switch is <b>disabled</b> — the table shows <b>only your own devices</b>.'

device-details-page:
    0:
        image: /images/user-guide/ui/devices/pe/device-details-page-1-pe.png
        title: 'Click on the target device to open its <b>details window</b>.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/ui/devices.md %}