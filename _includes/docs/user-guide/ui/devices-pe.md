* TOC
{:toc}

## Introduction

In the context of the ThingsBoard IoT platform, "devices" are basic Internet of Things objects that can produce telemetry data and transmit it to the ThingsBoard platform, as well as respond to Remote Procedure Call (RPC) commands.

ThingsBoard offers the capability to manage devices through a web interface and [REST API](/docs/{{docsPrefix}}reference/rest-api/), store data from devices, and facilitate interaction between devices and other components of the platform.

Devices, in this context, can refer to physical or virtual objects connected to a network, such as monitoring sensors, smart devices, machines, sensors, and more. These devices can collect data like temperature, humidity, GPS coordinates, and send this data to the ThingsBoard platform.

The ThingsBoard platform provides tools for device registration, management, and monitoring. It also enables interaction with devices through Remote Procedure Calls (RPC) and the issuance of commands to devices.

Devices can be organized into various [groups](/docs/{{docsPrefix}}user-guide/groups/).

The platform allows you to create [dashboards](/docs/{{docsPrefix}}user-guide/dashboards/), track and analyze data from devices, and configure rules and automation based on this data.

In short, devices in ThingsBoard are a central part of your IoT system, and the platform provides tools for managing them and utilizing the data they collect.

## Adding a new device

Tenant administrator is able to register new devices to ThingsBoard. Let's add a new device.

{% include images-gallery.html imageCollection="add-device-pe" showListImageTitles="true" %}

<br>
**Creating a new device group**

Each device can belong to multiple groups simultaneously. To add a new device group, you should:

{% include images-gallery.html imageCollection="add-device-group-pe" showListImageTitles="true" %}

More about entity groups read [here](/docs/{{docsPrefix}}user-guide/groups/).

## Editing a device

To enter device details and start editing it, you should:

{% include images-gallery.html imageCollection="device-details-pe" showListImageTitles="true" %}

## Deletion device

You can delete a device using one of the following ways:

First way:

{% include images-gallery.html imageCollection="device-delete-1-pe" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="device-delete-2-pe" showListImageTitles="true" %}

## Device operations

You can perform various operations with the device, such as manage credentials, manage owner and groups, check connectivity, delete device, and copy device id and access token.

### Manage device credentials

Tenant administrator is able to manage device credentials. The current release supports credentials based on **Access token**, **X.509 certificates**, and **MQTT Basic**.

By default, "access token" credentials are used. To change device credentials, follow this steps:

{% include images-gallery.html imageCollection="manage-device-credentials-pe" showListImageTitles="true" %}

### Manage owner and groups

You can change the owner of the device or add the device to one or more device groups in the device details window.

{% include images-gallery.html imageCollection="manage-owner-and-groups-pe" showListImageTitles="true" %}

### Check connectivity

Check the device's connection to the ThingsBoard platform. Open the "Check connectivity" window, select your operating system, copy and execute the command for sending telemetry on behalf of the device.

{% include images-gallery.html imageCollection="check-connectivity-pe" showListImageTitles="true" %}

### Copy device Id

Tenant administrator and customer users are able to copy device id to the clipboard using “Copy Device Id” button.

{% include images-gallery.html imageCollection="copy-device-id" %}

### Copy device credentials

Tenant administrator and customer users are able to copy device id to the clipboard using “Copy Device Id” button.

{% include images-gallery.html imageCollection="copy-device-id" %}



## Device details

In the _"Device details"_ window, you can perform various operations with the device, such as attributes, telemetry, alarms, events, relations, and audit logs.

### Device attributes

[Attributes](/docs/{{docsPrefix}}user-guide/attributes/) are static and semi-static key-value pairs associated with devices.
For example, serial number, model, firmware version.

{% include images-gallery.html imageCollection="device-details-3-pe" showListImageTitles="true" %}

### Device telemetry

[Time-series](/docs/{{docsPrefix}}user-guide/telemetry/) data points available for storage, querying and visualization. For example temperature, humidity, battery level.

{% include images-gallery.html imageCollection="device-details-4-pe" showListImageTitles="true" %}

### Device alarms

[Alarms](/docs/{{docsPrefix}}user-guide/alarms/) are events that identify issues with your devices.

{% include images-gallery.html imageCollection="device-details-5-pe" showListImageTitles="true" %}

### Device events

Events help to track messages to see what happened to an asset.

{% include images-gallery.html imageCollection="device-details-6-pe" showListImageTitles="true" %}

_Documentation dedicated to Events is coming soon._

### Device relations

[Relations](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) are directed connections to other entities.

{% include images-gallery.html imageCollection="device-details-7-pe" showListImageTitles="true" %}

### Device audit logs

{% include images-gallery.html imageCollection="device-details-8-pe" showListImageTitles="true" %}
