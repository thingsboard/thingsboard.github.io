* TOC 
{:toc}

## Overview

Since ThingsBoard 3.3, the Tenant administrator is able to provision and distribute firmware updates to devices. As a
tenant administrator, you can assign provisioned firmware to specific device or device profile. 
ThingsBoard notifies devices about available firmware update, provide a protocol-specific API to download the firmware, stores
history of the updates, and provides a dashboard to monitor the update process.

## Provisioning

Tenant administrator can navigate to the "Firmware" menu item to list and upload firmware updates. 
Each firmware update consist of:

* Title - the name of your firmware package. You can use different names for production and debug firmware. 
* Version - the version of your firmware package. Combination of the title and version must be unique in scope of a tenant.
* Link to Device Profile - each firmware references a device profile. This helps to prevent accidental updates of devices with incompatible firmware. 
  Link to a device profile means that this device *may* be updated to the current firmware. 
  However, the update is not triggered, until the user or script [assigns](#assignment) the firmware to the device profile or device.
* Type - can be either *Firmware* or *Software*. Each device can have an MCU firmware.     
* Checksum algorithm - optional parameter, it is a short name of the checksum algorithm to use. 
* Checksum - optional parameter, it's a value of the file checksum. If no checksum provided by the user, server will use SHA-256 algorithm automatically.
* Description - optional text description of the firmware. 

{% include images-gallery.html imageCollection="createFirmware" %}

You can browse the provisioned firmware packages as well as search them by title. Also, you are able to download and delete packages.
To open firmware details page, click the table row. Firmware details allow you to copy firmware ID and checksum. 
Also, in [Audit logs](/docs/{{docsPrefix}}user-guide/audit-log/) you can browse firmware status.

{% include images-gallery.html imageCollection="listFirmware" %}

All actions listed are also available via [REST API](/docs/{{docsPrefix}}reference/rest-api/).

## Assignment

Tenant administrator can assign uploaded firmware to the device profile or particular device. Customers also can assign a firmware to
their devices, but only the already existed one.
The firmware version assigned to the device will automatically overwrite firmware version that is assigned to the device profile.

{% include images-gallery.html imageCollection="deviceFirmware" %}

You can also assign firmware via Device profile. With this field, we define what type of device this firmware will be available.
However, please notice that when you assign firmware through device profile, to all devices with this profile will be sent notification about the updating. 
Exception will be devices that have already had this firmware, they won't receive update notification.

**NOTE:** One firmware can be used by only one Device Profile. 
The Firmware that is assigned to the Device Profile can be overridden on the Device level. 
If the firmware was assigned on the lower level, the firmware changes on the higher level do not affect the entity.

{% include images-gallery.html imageCollection="fw-deviceprofile" %}

{% capture delete_restrictions %}
Deletion of the firmware packages that is assigned to at least one device or device profile is prohibited.
{% endcapture %}
{% include templates/info-banner.md content=delete_restrictions %}

## Update process

Attributes show information about the new firmware update.

Where
- fw_checksum - attribute that responsible for verifying if the received file is the same as the sent one.
- fw_checksum_algorithm - the algorithm by which the checksum is calculated. 
- fw_size - size of the firmware file in bytes.
- fw_title - name of the firmware.
- fw_version - version of the firmware.
- fw_state - [status](/docs/{{docsPrefix}}user-guide/firmware/?remoteintegrationdockerinstall=mqtt#dashboard) of the updating process. 

{% include images-gallery.html imageCollection="fw-attributes" %}

When we receive an attribute update, we download the firmware. According to them, we determine if the firmware has been updated and whether it suits us.

{% capture contenttogglespec %}
HTTP<br/>%,%http%,%templates/install/http-firmware.md%br%
MQTT<br/>%,%mqtt%,%templates/install/mqtt-firmware.md%br%
CoAP<br/>%,%aws%,%templates/install/coap-firmware.md%br%{% endcapture %}
{% include content-toggle.html content-toggle-id="remoteintegrationdockerinstall" toggle-spec=contenttogglespec %}

## Dashboard

ThingsBoard provides the summary of the firmware update to monitor and track the firmware update status of your device, such as which devices are updating right now, 
any boot issues, and which ones have already been updated.
It is created automatically for each new tenant you add to ThingsBoard. You can also download the dashboard JSON [here]().
There you can see a list of all devices with full information about their firmware. 

{% include images-gallery.html imageCollection="fw-dashboard" %}

##### Firmware status

Click the "History firmware update" button next to the device name to learn about the firmware update status of specific device.

{% include images-gallery.html imageCollection="fw-status" %}

The possible state transition can be: QUEUED -> INITIATED -> DOWNLOADING -> DOWNLOADED -> VERIFIED -> UPDATING -> UPDATED/FAILED. 
The system uses the following algorithm:
1. Firmware was created.
2. Telemetry (target_fw_title, target_fw_verison and fw_state(QUEUED)) is sent on the device.
3. Device receives notification about firmware update and saves attributes. Fw_states changes to INITIATED.
4. Transport firmware client gets attribute update.
5. If the firmware is not the same as the previous one, transport firmware client requests the new firmware
   and sends telemetry with fw_state DOWNLOADING.
6. Client gets all chunks and sends telemetry fw_state DOWNLOADED.
7. Client checks firmware and sends telemetry fw_state VERIFIED.
8. If verification is successful, client will send telemetry fw_state UPDATED. If it's not successful, the telemetry will be fw_state FAILED.

So, there are eight statuses in total. Two of them are created by us and all the rest are generated by the device itself.

1. _QUEUED_ - notification is in a queue to be sent to the device. By default, in the queue can be up to 100 devices. [It can be configured](/docs/{{docsPrefix}}user-guide/firmware/?remoteintegrationdockerinstall=http#thingsboard-configuration-file).
2. _INITIATED_ - telemetry was sent and device was notified. "Device waiting" tab on the Firmware dashboard. 
3. _DOWNLOADING_ - telemetry was received and device started downloading firmware.
4. _DOWNLOADED_ - device completed downloading of the firmware.
5. _VERIFIED_ - if the checksum of received data was successfully verified by the device.
6. _UPDATING_ - if the verification is successful, the device firmware is updating. "Device updating" tab on the Firmware dashboard.
7. _UPDATED_ - the firmware was updated to the next version. When fw_state changes to UPDATED, the system updates current_fw_title and current_fw_version to the new values. "Device updated" tab on the Firmware dashboard.
8. _FAILED_ - checksum wasn't verified, or the device failed to update. "Device failed" tab on the Firmware dashboard.

{% include images-gallery.html imageCollection="fw-status-1" %}

## Configuration

##### ThingsBoard configuration file



Execute following command to edit ThingsBoard configuration file:

```bash
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

To set the max number of devices that will be notified in the chosen time period, in terminal execute following properties:

```bash
export TB_QUEUE_CORE_FW_PACK_INTERVAL_MS=60000
export TB_QUEUE_CORE_FW_PACK_SIZE=100
```
{: .copy-code}

##### Max size setting
By default, the maximum size of firmware that we can save in database is 2 gb. It can not be configured.
