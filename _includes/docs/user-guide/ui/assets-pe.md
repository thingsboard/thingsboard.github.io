* TOC
{:toc}

## Introduction

Thingsboard support following asset management features using Web UI and [REST API](/docs/{{docsPrefix}}reference/rest-api/).

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

Tenant administrators and customer users are able to manage asset server-side [attributes](/docs/{{docsPrefix}}user-guide/attributes/).
First, you should click on the asset to open its details. Then, go to attributes tab and, by checking the box next to asset attribute, you can delete it or display it on a widget.

{% include images-gallery.html imageCollection="asset-attributes-pe" %}

## Asset alarms

Tenant administrators and customer users are able to browse asset [alarms](/docs/{{docsPrefix}}user-guide/alarms/).
To configure an alarm, you should create relations from asset to the device, add an alarm rule and trigger the alarm via terminal.
After these actions, you can see the triggered alarm in the asset details.

{% include images-gallery.html imageCollection="asset-alarms-pe" %}

## Asset events

Tenant administrators and customer users can browse events related to a particular asset using the Events tab. Events help to track each message to see what happened to an asset.  
Error event displays major problems that could affect asset's work.  
Lifecycle event displays when the asset was created and if it was successful.  
Statistics event displays how many messages were proceeded and how many errors were there.
Raw data event is using while debugging.

_Documentation dedicated to events is coming soon._

{% include images-gallery.html imageCollection="asset-events-pe" %}

## Asset relations

ThingsBoard provides the user interface and REST APIs to provision and manage multiple entity types and their [relations](/docs/{{docsPrefix}}user-guide/entities-and-relations/) in your IoT application.

{% include images-gallery.html imageCollection="asset-relations-pe" %}

## Audit logs

ThingsBoard provides the ability to track user actions in order to keep an [audit log](/docs/{{docsPrefix}}user-guide/audit-log/).
It is possible to log user actions related to main entities: assets, devices, dashboard, rules, etc.

{% include images-gallery.html imageCollection="asset-auditlogs-pe" %}
