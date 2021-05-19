* TOC 
{:toc}

## Introduction

Since ThingsBoard 3.3, the Tenant administrator is able to provision and distribute firmware updates to devices. As a
tenant administrator, you can assign provisioned firmware to specific device or device profile. ThingsBoard
notifies devices about available firmware update, provide a protocol-specific API to download the firmware, stores
history of the updates, and provides a dashboard to monitor the update process.

## Provisioning

As a tenant administrator, you can navigate to the "Firmware" menu item to list and upload firmware updates. 
Each firmware update consist of:

* Title - the name of your firmware package. You can use different names for production and debug firmware. 
* Version - the version of your firmware package. Combination of the title and version must be unique in scope of a tenant.
* Link to Device Profile - each firmware references a device profile. This helps to prevent accidental updates of devices with incompatible firmware. 
  Link to a device profile means that this device *may* be updated to the current firmware. 
  However, the update is not triggered, until the user or script [assigns](#assignment) the firmware to the device profile or device.
* Type - can either *Firmware* or *Software*. Each device can have an MCU firmware.     
* Checksum algorithm - short name of the checksum algorithm to use. Optional.
* Checksum - value of the file checksum. Optional. If no checksum provided by the user, server will use SHA-256 algorithm automatically.
* Description - optional text description of the firmware. 

{% include images-gallery.html imageCollection="createFirmware" %}

You can browse the provisioned firmware packages as well as search them by title. Also, you are able to download and delete packages.
To open firmware details page, click the table row. Firmware details allow you to copy firmware ID and checksum. 
Also, in [Audit logs](/docs/{{docsPrefix}}user-guide/audit-log/) you can browse firmware status.

{% include images-gallery.html imageCollection="listFirmware" %}

All actions listed are also available via [REST API](/docs/{{docsPrefix}}reference/rest-api/)

## Assignment

As a tenant administrator, you are able to assign uploaded firmware to the device profile or particular device.
Every device has a device profile. The firmware version assigned to the device will automatically overwrite firmware version that is assigned to the device profile.

{% include images-gallery.html imageCollection="deviceFirmware" %}

{% capture delete_restrictions %}
Deletion of the firmware packages that is assigned to at least one device or device profile is prohibited.
{% endcapture %}
{% include templates/info-banner.md content=delete_restrictions %}

## Update process

{% capture contenttogglespec %}
HTTP<br/>%,%http%,%templates/install/http-firmware.md%br%
MQTT<br/>%,%mqtt%,%templates/install/mqtt-firmware.md%br%
CoAP<br/>%,%aws%,%templates/install/coap-firmware.md%br%{% endcapture %}
{% include content-toggle.html content-toggle-id="remoteintegrationdockerinstall" toggle-spec=contenttogglespec %}

## Dashboard

To observe and monitor status of your device firmwares, such as which devices are updating right now, any issues with downloads, and which ones have been updated already,
you should go to the Dashboards into the Firmware dashboard. It creates automatically when you add firmware to your ThingsBoard.
There you can see list of all devices with full information about their firmware. To see more details about the statuses, use tabs on the right of the page. 
Learn more about particular devices firmware status by clicking buttons opposite to the device titles. 

{% include images-gallery.html imageCollection="fw-dashboard" %}

## Configuration

TODO: talk about max size setting

2 gb max size for 1 file

http 50 mb to download