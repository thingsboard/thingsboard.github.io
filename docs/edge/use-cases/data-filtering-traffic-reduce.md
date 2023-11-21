---
layout: docwithnav-edge
title: Data filtering and traffic reduce
description: ThingsBoard Edge use case #2

provisionDevicesEdge:
    0:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/provision-devices-item-1.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Devices page.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/provision-devices-item-2.png
        title: 'Click on the "Add Device"("+") icon in the top right corner of the table.'
    2:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/provision-devices-item-3.png
        title: 'Input device name. For example, "In-vehicle monitoring system". Click "Add" to add the device.'
    3:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/provision-devices-item-4.png
        title: 'Now your "In-vehicle monitoring system" device should be in the devices table.'

provisionDevices:    
    0:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/provision-devices-item-5.png
        title: 'Login to your <b>ThingsBoard</b> server instance and open Devices page.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/provision-devices-item-6.png
        title: 'Make sure that "In-vehicle monitoring system" device is in the devices list.'
        
rootRuleChainPreview:
    0:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/root-rule-chain.png

updateRootRuleChain:
    0:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-1.png
        title: 'Login to your <b>ThingsBoard</b> instance and open Rule chain templates page.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-2.png
        title: 'Click "Open rule chain" icon to start editing "Edge Root Rule Chain".'
    2:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-3.png
        title: 'Filter node by "script" word and drag script node (Transformation) to rule chain.'
    3:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-4.png
        title: 'Input node name, e.g. "Transform incoming message" and add <b>JavaScript</b> code (you can copy and paste it from the snippet above) to send further only "distance" readings. Click "Add" to proceed.'
    4:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-5.png
        title: 'Remove connection between nodes "Save Timeseries" and newly added script node.'
    5:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-6.png
        title: 'Drag connection from "Save Timeseries" to the transformation script node.'
    6:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-7.png
        title: 'Select "Success" from the list and click "Add" button.'
    7:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-8.png
        title: 'Drag connection from "Transform incoming message" to the "Push to cloud" node  the list and click "Add" button.'
    8:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-9.png
        title: 'Select "Success" from the list and click "Add" button.'
    9:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-10.png
        title: 'Click "Apply changes" to save current progress.'
        
updateRootRuleChainEdge:
    0:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-11.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Rule chains page.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-12.png
        title: 'Open "Edge root rule chain" to verify changes.'
    2:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/update-root-item-13.png
        title: 'You should see the same rule chain nodes configuration as on the cloud.'

copyAccessTokenDevice:
    0:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/copy-access-token-item-1.png
        title: 'Open Devices page in the ThingsBoard <b>Edge</b> instance.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/copy-access-token-item-2.png
        title: 'Click on the <b>In-vehicle monitoring system</b> device row in the table to open device details.'
    2:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/copy-access-token-item-3.png
        title: 'Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.'

verifyDeviceTelemetryEdge:
    0:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/verify-device-telemetry-item-1.png
        title: 'Open Devices page in the ThingsBoard <b>Edge</b> instance.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/verify-device-telemetry-item-2.png
        title: 'Click on the <b>In-vehicle monitoring system</b> device row in the table to open device details.'
    2:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/verify-device-telemetry-item-3.png
        title: 'Click on the tab <b>Latest telemetry</b>. You should see the telemetry constantly generated by the Python script.'

verifyDeviceTelemetry:
    0:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/verify-device-telemetry-item-4.png
        title: 'Login to your <b>ThingsBoard</b> instance and open Devices page.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/verify-device-telemetry-item-5.png
        title: 'Click on the row <b>In-vehicle monitoring system</b> to open device details.'
    2:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/verify-device-telemetry-item-6.png
        title: 'Click on the tab <b>Latest telemetry</b> to verify that distance readings are pushed successfully from the edge to the cloud.'

createDashboard:
    0:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-1.png
        title: 'Login to your <b>ThingsBoard</b> instance and open Dashboards page.'
    1:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-2.png
        title: 'Click on the "Add" ("+") icon and select "Create new dashboard".'
    2:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-3.png
        title: 'Input title for the new dashboard, e.g. "Edge Vehicle" and click "Add".'
    3:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-4.png
        title: 'Click on the icon "Open dashboard" of the newly created dashboard.'
    4:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-5.png
        title: 'To start editing dashboard click on the "Edit" icon in the lower right corner.'
    5:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-6.png
        title: 'Click "Entity aliases" icon to add a new <a href="/docs/user-guide/ui/aliases/" target="_blank">alias</a> in order to visualize data on the dashboard.'
    6:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-7.png
        title: 'Click "Add alias" button.'
    7:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-8.png
        title: 'Input alias name "edge device". Select Filter type - "Single entity", Type - "Device", Device - "In-vehicle monitoring system". Then click "Add" button.'
    8:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-9.png
        title: 'Click "Save" button to save new alias.'
    9:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-10.png
        title: 'Click "Add new widget" in the middle of the dashboard page.'
    10:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-11.png
        title: 'Click "Select widgets bundle" and find "Digital gauges".'
    11:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-12.png
        title: 'In the list of available widgets select the one you see on the image. Click "+ Add" button to add a datasource for the widget.'
    12:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-13.png
        title: 'Click "+ Add" button to add a new datasource.'
    13:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-14.png
        title: 'Select Entity alias "edge device" and click on choose "distance" as device timeseries.'
    14:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-15.png
        title: 'Click "Edit widget" icon in the upper right corner of the widget to add style.'
    15:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-16.png
        title: 'Click "Setting" tab and add you can optionally add some title, icon and display configurations as show on the image.'
    16:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-17.png
        title: 'Click "Advanced" tab, input Maximum value as "1000" and Unit title as "MLS". Then click "Apply changes" and close the card.'
    17:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-18.png
        title: 'Optionally you can also resize widget by dragging the left bottom corner of the widget. Do not forget to click "Apply changes" icon to save current progress.'
    18:
        image: https://img.thingsboard.io/edge/use-cases/data-filtering/configure-dashboards-item-19.png
        title: 'Your dashboard should be similar to the one you see on the image.'

---
* TOC
{:toc}

{% assign docsPrefix = "edge/" %}
{% assign appPrefix = "ThingsBoard" %}

## Use case

{% include templates/edge/use-cases/data-filtering/use-case-description.md %}

## Prerequisites

{% include templates/edge/use-cases/prerequisites.md %}

## Create device

{% include templates/edge/use-cases/data-filtering/create-device.md %}

## Configure edge rule engine to push filtered data to the cloud

{% include templates/edge/use-cases/data-filtering/configure-edge-rule-engine.md %}

## Connect device to edge and post telemetry

{% include templates/edge/use-cases/data-filtering/connect-device-to-edge.md %}

## Create dashboard

{% include templates/edge/use-cases/data-filtering/create-dashboard.md %}

## Next Steps

{% assign currentGuide = "ManageAlarmsAndRpcRequestsOnEdgeDevices" %}
{% include templates/edge/guides-banner-edge.md %}
