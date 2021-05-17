* TOC 
{:toc}

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

{% include images-gallery.html imageCollection="createFirmware" preview="false" %}

You can browse the provisioned firmware packages as well as search them by title. Also, you are able to download and delete packages.
To open firmware details page, click the table row. Firmware details allow you to copy firmware ID and checksum. 
Also, in [Audit logs](/docs/{{docsPrefix}}user-guide/audit-log/) you can browse firmware status.

{% include images-gallery.html imageCollection="listFirmware" preview="false" %}

All actions listed are also available via [REST API](/docs/{{docsPrefix}}reference/rest-api/)

## Assignment

As a tenant administrator, you are able to assign uploaded firmware to the device profile or particular device.
Every device has a device profile. The firmware version assigned to the device will automatically overwrite firmware version that is assigned to the device profile.

{% include images-gallery.html imageCollection="deviceFirmware" preview="false" %}

{% capture delete_restrictions %}
Deletion of the firmware packages that is assigned to at least one device or device profile is prohibited.
{% endcapture %}
{% include templates/info-banner.md content=delete_restrictions %}

## Update process

{% capture contenttogglespecqueue %}
HTTP ,%inmemory%,%templates/install/tb-license-ubuntu-105.md%br%
MQTT ,%kafka%,%templates/install/tb-license-windows-105.md%br%
CoAP ,%kafka-in-docker%,%templates/install/tb-license-docker-105.md%br%{% endcapture %}
{% include content-toggle.html content-toggle-id="clientsFirmware" toggle-spec=contenttogglespecqueue %}

{% capture contenttogglespecqueue %}
Ubuntu <small>(choose this if the ThingsBoard service is installed on Ubuntu server)</small>%,%inmemory%,%templates/install/tb-license-ubuntu-105.md%br%
Windows <small>(choose this if the ThingsBoard service is installed on Windows server)</small>%,%kafka%,%templates/install/tb-license-windows-105.md%br%
Docker <small>(choose this if the ThingsBoard service is installed on Docker)</small>%,%kafka-in-docker%,%templates/install/tb-license-docker-105.md%br%{% endcapture %}
{% include content-toggle.html content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}



## Dashboard

{% include images-gallery.html imageCollection="fw-dashboard" preview="false" %}

## Configuration

TODO: talk about max size setting

2 gb max size for 1 file

http 50 mb to download