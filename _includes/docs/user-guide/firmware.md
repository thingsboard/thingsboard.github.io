* TOC 
{:toc}

Since ThingsBoard 3.3, the Tenant administrator is able to provision and distribute firmware updates to devices. As a
tenant administrator, you are able to assign provisioned firmware to specific device or device profile. ThingsBoard
notifies devices about available firmware update, provide a protocol-specific API to download the firmware, stores
history of the updates, and provides a dashboard to monitor the update process.

## Provisioning

As a tenant administrator, you may navigate to the "Firmware" menu item to list and upload firmware updates. 
Each firmware update consist of:

* Title - the name of your firmware package. You can use different names for production and debug firmware. 
* Version - the version of your firmware package. Combination of the title and version must be unique in scope of tenant.
* Link to Device Profile - Each firmware references a device profile. This helps to prevent accidental updates of devices with incompatible firmware. 
  Link to a device profile means that this device *may* be updated to the current firmware. 
  However, the update is not triggered, until the user or script [assigns](#assignment) the firmware to the device profile or device.
* Type - either *Firmware* or *Software*. Each device may have an MCU firmware and the actual     
* Checksum algorithm - short name of the checksum algorithm to use. Optional.
* Checksum - value of the file checksum. Optional. If no checksum provided by the user, server will use SHA-256 algorithm automatically.
* Description - optional text description of the firmware. 

{% include images-gallery.html imageCollection="createFirmware" %}

You may browse the provisioned firmware packages and search them by title. You may also download and delete the package.
You may also open firmware details page by clicking on the table row. Firmware details allow you to copy firmware id and checksum and browse the [audit logs](/docs/{{docsPrefix}}user-guide/audit-log/).

{% include images-gallery.html imageCollection="listFirmware" %}

All actions listed are also available via [REST API](/docs/{{docsPrefix}}reference/rest-api/)

## Assignment

As a tenant administrator, you are able to assign uploaded firmware to the device profile or particular device.
Every device has a device profile. The firmware version assigned to the device will automatically overwrite firmware version that is assigned to the device profile. 

{% capture delete_restrictions %}
Deletion of the firmware packages that is assigned to at least one device or device profile is prohibited.
{% endcapture %}
{% include templates/info-banner.md content=delete_restrictions %}

## Update process



## Dashboard

## Configuration

TODO: talk about max size setting