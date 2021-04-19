---
layout: docwithnav-pe
assignees:
- ikulikov
title: Assets
description: Thingsboard IoT Asset management
asset-intro-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-pe.png
        title: 'Asset groups'
    1:
        image: /images/user-guide/ui/assets/pe/asset-1-pe.png
        title: 'List of assets'

asset-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-groups-pe.png
        title: 'Click the plus icon to add a new asset group and enter the name for it in the opened dialog box'
    1:
        image: /images/user-guide/ui/assets/pe/asset-groups-1-pe.png
        title: 'To share an asset group, check the box and select customers. Then, click Add'
    2:
        image: /images/user-guide/ui/assets/pe/asset-groups-2-pe.png
        title: 'To delete an asset group, click the trash can icon opposite an asset and confirm it in the dialog box'

asset-id-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-id-pe.png
        title: 'Open an asset group, then click the asset name to open its details.'
    1:
        image: /images/user-guide/ui/assets/pe/asset-id-1-pe.png
        title: 'There, click the Copy Asset ID button.'

asset-attributes-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-id-pe.png
        title: 'Click on the asset to open its details'
    1:
        image: /images/user-guide/ui/assets/pe/asset-attributes-1-pe.png
        title: 'Go to attributes tab'
    2:
        image: /images/user-guide/ui/assets/pe/asset-attributes-2-pe.png
        title: 'By checking the box next to asset attribute, you can delete it or display it on a widget'

asset-alarms-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-alarms-9-pe.png
        title: 'Triggered alarm from the connected device in the asset details'

asset-relations-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-relations-pe.png
        title: 'In the relations tab of asset details, add a new relation by clicking the plus icon'
    1:
        image: /images/user-guide/ui/assets/pe/asset-relations-1-pe.png
        title: 'Select entity type and add a list of entities'
    2:
        image: /images/user-guide/ui/assets/pe/asset-relations-2-pe.png
        title: 'Save applied changes'
    3:
        image: /images/user-guide/ui/assets/pe/asset-relations-3-pe.png
        title: 'From asset created relation to two devices'

asset-auditlogs-pe:
    0:
        image: /images/user-guide/ui/assets/pe/asset-auditlogs-pe.png
        title: 'Track user actions in order to keep audit log'

---

* TOC
{:toc}

## Introduction

Thingsboard supports following asset management features using Web UI and [REST API](/docs/reference/rest-api/).

{% include images-gallery.html imageCollection="asset-intro-pe" %}

## Adding and delete asset

Tenant administrators can register new assets or delete them from Thingsboard.
To add a new asset group, click the plus icon in the upper right corner.
Enter the name for the new asset group, set up the sharing configuration, and click Add.

To delete the asset group, click the trash can icon next to the asset and confirm it in the dialog box.

{% include images-gallery.html imageCollection="asset-pe" %}

## Asset ID

Tenant administrators and customer users can copy the asset ID to the clipboard.
Open an asset group, then click the asset name to open its details. There, click the “Copy Asset ID” button.

{% include images-gallery.html imageCollection="asset-id-pe" %}

## Asset attributes

Tenant administrators and customer users are able to manage asset server-side [attributes](/docs/pe/user-guide/attributes/).
First, you should click on the asset to open its details. Then, go to attributes tab and, by checking the box next to asset attribute, you can delete it or display it on a widget.

{% include images-gallery.html imageCollection="asset-attributes-pe" %}

## Asset alarms

Tenant administrators and customer users are able to browse asset [alarms](/docs/pe/user-guide/alarms/).
Tenant administrators and customer users can view asset alarms. As an example, if there is a relation between an asset and a device, you can configure the device to display alarms on the asset.
To do this, you should enable the propagate option. When the alarm is created on the device, it will also be created on the asset.
Also, you can create alarms for the asset itself using role nodes.
After these actions, you can see the triggered alarm in the asset in the Alarms tab.

{% include images-gallery.html imageCollection="asset-alarms-pe" %}

## Asset events

Tenant administrators and customer users can browse events related to a particular asset using the Events tab. Events help to track each message to see what happened to an asset.
Error event displays major problems that could affect asset's work.
Lifecycle event displays when the asset was created and if it was successful.
Statistics event displays how many messages were proceeded and how many errors were there.

_Documentation dedicated to Events is coming soon._

## Asset relations

ThingsBoard provides the user interface and REST APIs to provision and manage multiple entity types and their [relations](/docs/pe/user-guide/entities-and-relations/) in your IoT application.
For instance, you can create a relations with the devices that are related to this asset. You can do this in the Relations tab:

{% include images-gallery.html imageCollection="asset-relations-pe" %}

## Audit logs

ThingsBoard provides the ability to track user actions in order to keep an [audit log](/docs/pe/user-guide/audit-log/).
It is possible to log user actions related to main entities: assets, devices, dashboard, rules, etc.

{% include images-gallery.html imageCollection="asset-auditlogs-pe" %}
