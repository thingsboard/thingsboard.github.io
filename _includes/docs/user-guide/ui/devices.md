* TOC
{:toc}

## Introduction

In the context of the ThingsBoard IoT platform, "devices" are basic Internet of Things objects that can produce telemetry data and transmit it to the ThingsBoard platform, as well as respond to Remote Procedure Call (RPC) commands.

ThingsBoard offers the capability to manage devices through a web interface and [REST API](/docs/{{docsPrefix}}reference/rest-api/), store data from devices, and facilitate interaction between devices and other components of the platform.

Devices, in this context, can refer to physical or virtual objects connected to a network, such as monitoring sensors, smart devices, machines, sensors, and more. These devices can collect data like temperature, humidity, GPS coordinates and send this data to the ThingsBoard platform.

Devices can be organized into various [groups](/docs/{{docsPrefix}}user-guide/groups/).

The ThingsBoard platform allows you to create [dashboards](/docs/{{docsPrefix}}user-guide/dashboards/), track and analyze data from devices, and configure rules and automation based on this data.

In short, devices in ThingsBoard are a central part of your IoT system, and the platform provides tools for managing them and utilizing the data they collect.

## Adding a new device

Tenant administrator is able to register new devices to ThingsBoard. Let's add a new device.

{% include images-gallery.html imageCollection="add-device" showListImageTitles="true" %}

{% unless docsPrefix == null %}
<br>
**Creating a new device group**

Each device can belong to multiple groups simultaneously. To add a new device group, you should:

{% include images-gallery.html imageCollection="add-device-group-pe" showListImageTitles="true" %}

You can read more [about entity groups here](/docs/{{docsPrefix}}user-guide/groups/).
{% endunless %}

## Editing a device

You can change the device name, its device profile, label, assign the firmware and software.
To edit the device, you need to:

{% include images-gallery.html imageCollection="device-details" showListImageTitles="true" %}

## Deletion device

You can delete a device using one of the following ways:

First way:

{% include images-gallery.html imageCollection="device-delete-1" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="device-delete-2" showListImageTitles="true" %}

## Device operations

You can perform various operations with the device, such as [manage credentials](#manage-device-credentials), [manage owner and groups](#manage-owner-and-groups), [check connectivity](#check-connectivity), [delete device](#deletion-device), copy [device id](#copy-device-id), and copy [access token](#copy-device-credentials).

{% unless (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
### Make device public

Make the device public and all its data will be made public. It is necessary when you are creating a public dashboard that needs access to the device's data.

{% include images-gallery.html imageCollection="make-device-public" showListImageTitles="true" %}

To make the device private again, follow these steps:

{% include images-gallery.html imageCollection="make-device-private" showListImageTitles="true" %}

### Assign device to customer

The tenant administrator is able to assign devices to certain [customer](/docs/{{docsPrefix}}user-guide/ui/customers/).
This will allow Customer users to fetch device data using REST APIs or Web UI.

{% include images-gallery.html imageCollection="assign-device-to-customer" showListImageTitles="true" %}

{% endunless %}

### Manage device credentials

Tenant administrator is able to manage device credentials. The current release supports credentials based on **Access token**, **X.509 certificates**, and **MQTT Basic**.

By default, "access token" credentials are used. To change device credentials, follow these steps:

{% include images-gallery.html imageCollection="manage-device-credentials" showListImageTitles="true" %}

{% unless docsPrefix == null %}
### Manage owner and groups

You can change the owner of the device or add the device to one or more device groups in the device details window.

{% include images-gallery.html imageCollection="manage-owner-and-groups-pe" showListImageTitles="true" %}
{% endunless %}

### Check connectivity

Check your device's connection to the ThingsBoard platform:

{% include images-gallery.html imageCollection="check-connectivity" showListImageTitles="true" %}

### Copy device Id

Copy the device Id to the clipboard using the "Copy Device Id" button.

{% include images-gallery.html imageCollection="copy-device-id" %}

### Copy device credentials

Click on the “Copy Access Token” or “Copy MQTT Credentials” button (depending on your choice of [device credentials](#manage-device-credentials) type) to copy the device credentials.

{% include images-gallery.html imageCollection="copy-access-token" %}

## Device details

The "Device details" window provides various tabs that allow you to manage and monitor information such as [attributes](#device-attributes), [latest telemetry](#device-telemetry), [alarms](#device-alarms), [events](#device-events), [relation configurations](#device-relations), [audit logs](#device-audit-logs), and [version control](#version-control) of the device.

### Device attributes

This tab displays the client, server, and shared attributes of the device. For example, serial number, model, firmware version.
[Attributes](/docs/{{docsPrefix}}user-guide/attributes/) are static and semi-static key-value pairs associated with devices.

{% include images-gallery.html imageCollection="attributes" %}

### Device telemetry

This tab shows the telemetry data that the device sends in real-time, such as sensor readings, status, and other measurable variables.
[Time-series](/docs/{{docsPrefix}}user-guide/telemetry/) data points are available for storage, querying and visualization. For example, temperature, humidity, battery level.

{% include images-gallery.html imageCollection="telemetry" %}

### Device alarms

This tab shows events ([alarms](/docs/{{docsPrefix}}user-guide/alarms/)) that identify issues with your devices.

{% include images-gallery.html imageCollection="alarms" %}

### Device events

Here, events related to the device are displayed, including system logs, errors, warnings, and other important moments in the device's lifecycle.

{% include images-gallery.html imageCollection="events" %}

### Device relations

[Relations](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) are directed connections to other entities. This tab displays the relationships of this device with other devices, dashboards, assets, and other entities in the ThingsBoard system.

{% include images-gallery.html imageCollection="relations" %}

### Device audit logs

ThingsBoard provides the ability to track user actions in order to keep an audit log.
It is possible to log user actions related to main entities: assets, devices, dashboard, rules, etc.

{% include images-gallery.html imageCollection="audit-logs" %}

### Version control

ThingsBoard [version control](/docs/{{docsPrefix}}user-guide/version-control/) service provides the ability to export and restore ThingsBoard Entities using Git.

{% include images-gallery.html imageCollection="version-control" %}