* TOC 
{:toc}

## Overview

Since ThingsBoard 3.3, ThingsBoard allows you to upload and distribute over-the-air(OTA) updates to devices. 
As a tenant administrator, you may upload firmware or software packages to the OTA repository. 
Once uploaded, you may assign them to [Device Profile](/docs/{{docsPrefix}}user-guide/device-profiles/) or [Device](/docs/{{docsPrefix}}user-guide/ui/devices/). 
ThingsBoard will notify devices about the available update and provide a protocol-specific API to download the firmware. 
The platform tracks status of the update and stores history of the updates. 
As a platform user, you may monitor the update process using the dashboard.
<br>
<object data="https://img.thingsboard.io/user-guide/firmware/firmware-anim3.svg"></object>
<br>

## Provision OTA package to ThingsBoard repository

Navigate to the "OTA Updates" menu item to list and upload OTA update packages. Each package consist of:

* Title - the name of your package. You can use different names for production and debug firmware/software. 
* Version - the version of your package. Combination of the title and version must be unique in scope of a tenant.
* Device Profile - each package is compatible with one device profile. We track compatibility to prevent accidental updates of devices with incompatible firmware/software. 
  Link to a device profile means that device that use this profile *may* be updated to the current package. 
  However, the update is not triggered, until the user or script [assigns](#assign-ota-package-to-device-profile) the package to the device profile or device.
* Type - can be either *Firmware* or *Software*.    
* Checksum algorithm - optional parameter, it is a short name of the checksum algorithm to use. 
* Checksum - optional parameter, it's a value of the file checksum. If no checksum provided by the user, server will use SHA-256 algorithm automatically.
* Description - optional text description of the firmware. 

{% include images-gallery.html imageCollection="createFirmware" %}

You can browse the provisioned packages as well as search them by title. Also, you are able to download and delete packages.
To open package details, click the table row. Package details allow you to copy package ID and checksum. 
Also, [Audit logs](/docs/{{docsPrefix}}user-guide/audit-log/) track information about users who provisioned the firmware.

{% include images-gallery.html imageCollection="listFirmware" %}

All actions listed are also available via [REST API](/docs/{{docsPrefix}}reference/rest-api/).

## Firmware vs Software

There is a very minor difference between FOTA and SOTA implementation inside ThingsBoard core. Many use-cases and applications will need to use FOTA only. 
However, [LwM2M](/docs/{{docsPrefix}}reference/lwm2m-api/) devices process FOTA and SOTA updates differently. 

## Assign OTA package to device profile

You may assign firmware/software to the device profile to automatically distribute the package to all devices that share the same profile. See screenshots below.

{% include images-gallery.html imageCollection="fw-deviceprofile" %}

The device profile details will let you choose only compatible OTA update packages (see [provisioning](#provision-ota-package-to-thingsboard-repository) for more info).
Device profile may be used by thousands of devices. Assignment of the firmware/software triggers the [update process](#update-process).


## Assign OTA package to device

You may also assign firmware/software to specific device. See screenshots below.

{% include images-gallery.html imageCollection="deviceFirmware" %}

The firmware version assigned to the device will automatically overwrite firmware version that is assigned to the device profile. 

For example, let's assume you have Devices D1 and D2 that has Profile P1:

* If you assign package F1 to Profile P1 (via [profile details UI](/docs/{{docsPrefix}}user-guide/ota-updates/#assign-ota-package-to-device-profile) or REST API), Devices D1 and D2 will be updated to F1. 
* If you assign package F2 to Device D1 (via [device details UI](/docs/{{docsPrefix}}user-guide/ota-updates/#assign-ota-package-to-device) or REST API), Device D1 will be updated to F2.
* Subsequent assignment of the package F3 to the Profile P1 will affect only D2, since it has no specific firmware version assigned on the device level.
So, D2 will be updated to F3, while D1 will continue to use F2.


Customers may choose available firmware and assign it to the devices that belong to them. However, customers can't provision or manage firmware packages.

{% capture delete_restrictions %}
Deletion of the firmware packages that is assigned to at least one device or device profile is prohibited.
{% endcapture %}
{% include templates/info-banner.md content=delete_restrictions %}

## Update process

Assignment of the firmware/software to the device or device profile triggers the update process.
ThingsBoard tracks the progress of the update and persists it to the device attributes.

Update progress may have one of the following states. The state of the update is stored as an attribute of the device and is used to visualize the update process on the [dashboard](#dashboard).

### QUEUED state

The very first state of the firmware/software update. 
Means that the notification about new firmware/software is queued but not yet pushed to the device. 
ThingsBoard queues the update notifications to avoid peak loads. The queue is processed with the constant pace. 
By default, it is configured to notify up to 100 device per minute. See [configuration properties](/docs/{{docsPrefix}}user-guide/ota-updates/#queue-processing-pace) for more details.
   
### INITIATED state

Means that the notification about firmware/software is fetched from queue and pushed to device.
Under the hood, ThingsBoard converts notification to the update of the following [shared attributes](/docs/{{docsPrefix}}user-guide/attributes/#shared-attributes):

- fw(sf)_title - name of the firmware (software).
- fw(sf)_version - version of the firmware (software).
- fw(sf)_size - size of the firmware (software) file in bytes.
- fw(sf)_checksum - attribute that is used to verify integrity of the received file.
- fw(sf)_checksum_algorithm - the algorithm used to calculate file checksum.

{% include images-gallery.html imageCollection="fw-attributes" %}

Device is able to subscribe to shared attribute update using [MQTT](/docs/{{docsPrefix}}reference/mqtt-api/), 
[HTTP](/docs/{{docsPrefix}}reference/http-api/), [CoAP](/docs/{{docsPrefix}}reference/coap-api/) or [LwM2M](/docs/{{docsPrefix}}reference/lwm2m-api/) API.

### Update states reported by the device

The remaining states are reported by the device firmware/software that is currently processing the update. 
We have prepared description of those states and sample applications for the most popular protocols written in python. 
Sample applications simulate behavior of the device firmware/software and may used as a reference for the implementation.  

 * DOWNLOADING - notification about new firmware/software update was received and device started downloading the update package.
 * DOWNLOADED - device completed downloading of the update package.
 * VERIFIED - device verified the checksum of the downloaded package.
 * UPDATING - device started the firmware/software update. Typically is sent before reboot of the device or restart of the service. 
 * UPDATED - the firmware was successfully updated to the next version.
 * FAILED - checksum wasn't verified, or the device failed to update. See "Device failed" tab on the Firmware dashboard for more details.


Once the firmware/software is updated, ThingsBoard expect the device to send the following telemetry:

for firmware:
```json
{"current_fw_title": "myFirmware", "current_fw_version": "1.2.3", "fw_state": "UPDATED"}
```

for software:
```json
{"current_sw_title": "mySoftware", "current_sw_version": "1.2.3", "sw_state": "UPDATED"}
```

If the firmware/software update failed, ThingsBoard expect the device to send the following telemetry:

for firmware:
```json
{"fw_state": "FAILED", "fw_error":  "the human readable message about the cause of the error"}
```

for software:
```json
{"sw_state": "FAILED", "sw_error":  "the human readable message about the cause of the error"}
```

{% capture contenttogglespec %}
HTTP<br>%,%http%,%templates/install/http-firmware.md%br%
MQTT<br>%,%mqtt%,%templates/install/mqtt-firmware.md%br%
CoAP<br>%,%aws%,%templates/install/coap-firmware.md%br%{% endcapture %}
{% include content-toggle.html content-toggle-id="remoteintegrationdockerinstall" toggle-spec=contenttogglespec %}

## Dashboard

ThingsBoard provides the summary of the firmware/software update to monitor and track the firmware/software update status of your device, such as which devices are updating right now, any boot issues, and which ones have already been updated.

### Firmware update monitoring dashboard

The dashboard is created automatically for each new tenant that you add to ThingsBoard. 
You can also download the dashboard JSON [here](https://github.com/thingsboard/thingsboard/blob/master/application/src/main/data/json/demo/dashboards/firmware.json) and import it for existing tenants.

There you can see a list of all devices with full information about their firmware. 

{% include images-gallery.html imageCollection="fw-dashboard" %}

Click the "History of the firmware updates" button next to the device name to learn about the firmware update status of specific device.

{% include images-gallery.html imageCollection="fw-status" %}

### Software update monitoring dashboard

The dashboard is created automatically for each new tenant that you add to ThingsBoard.
You can also download the dashboard JSON [here](https://github.com/thingsboard/thingsboard/blob/master/application/src/main/data/json/demo/dashboards/software.json) and import it for existing tenants.

There you can see a list of all devices with full information about their software.

{% include images-gallery.html imageCollection="sw-dashboard" %}

{% if docsPrefix != 'paas/' %}

### Configuration

##### Queue processing pace

To set the max number of devices that will be notified in the chosen time period using the following [configuration](/docs/user-guide/install/{{docsPrefix}}config/) properties:

```bash
export TB_QUEUE_CORE_FW_PACK_INTERVAL_MS=60000
export TB_QUEUE_CORE_FW_PACK_SIZE=100
```
{: .copy-code}

##### Max size setting

By default, the maximum size of firmware that we can save in database is 2 gb. It can not be configured.

{% endif %}
