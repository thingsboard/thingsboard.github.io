* TOC
{:toc}

## Introduction

Devices are basic IoT entities that can produce telemetry data and handle RPC commands. For example, sensors, actuators, switches;
ThingsBoard support following device management features using Web UI and [REST API](/docs/{{docsPrefix}}reference/rest-api/).

{% include images-gallery.html imageCollection="device-pe" showListImageTitles="true" %}

## Adding a new device

Each device can belong to multiple groups simultaneously. To add a new device group, you should:

{% include images-gallery.html imageCollection="device-add-pe" showListImageTitles="true" %}

## Editing a device

To enter device details and start editing it, you should:

{% include images-gallery.html imageCollection="device-details-pe" showListImageTitles="true" %}

##### Device attributes

[Attributes](/docs/{{docsPrefix}}user-guide/attributes/) are static and semi-static key-value pairs associated with devices.
For example, serial number, model, firmware version.

{% include images-gallery.html imageCollection="device-details-3-pe" showListImageTitles="true" %}

##### Device telemetry

[Time-series](/docs/{{docsPrefix}}user-guide/telemetry/) data points available for storage, querying and visualization. For example temperature, humidity, battery level.

{% include images-gallery.html imageCollection="device-details-4-pe" showListImageTitles="true" %}

##### Device alarms

[Alarms](/docs/{{docsPrefix}}user-guide/alarms/) are events that identify issues with your devices.

{% include images-gallery.html imageCollection="device-details-5-pe" showListImageTitles="true" %}

##### Device events

Events help to track messages to see what happened to an asset.

{% include images-gallery.html imageCollection="device-details-6-pe" showListImageTitles="true" %}

_Documentation dedicated to Events is coming soon._

##### Device relations

[Relations](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations) are directed connections to other entities.

{% include images-gallery.html imageCollection="device-details-7-pe" showListImageTitles="true" %}

##### Device audit logs

{% include images-gallery.html imageCollection="device-details-8-pe" showListImageTitles="true" %}

## Device deletion

Tenant administrator can delete devices from ThingsBoard. To delete device, you should:

{% include images-gallery.html imageCollection="device-delete-pe" showListImageTitles="true" %}
