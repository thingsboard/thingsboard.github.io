---
layout: docwithnav-edge
title: Data filtering and traffic reduce
description: ThingsBoard Edge use case #2

provisionDevicesEdge:
    0:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-1.png
        title: 'Log in to your ThingsBoard <b>Edge</b> instance and navigate to the "Devices" page.'
    1:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-2.png 
        title: 'Click on the ("+") icon located in the top right corner. Then, click "Add new device" button.'
    2:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-3.png
        title: 'Enter the Name of the input device, for example, "In-vehicle monitoring system", then click "Add" button.'
    3:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-4.png
        title: 'Now, your device named "In-vehicle monitoring system" should appear in the devices table.'

provisionDevices:    
    0:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-5.png
        title: 'Log in to your ThingsBoard server instance and navigate to the "Devices" page.'
    1:
        image: /images/edge/use-cases/data-filtering/provision-devices-item-6.png
        title: 'Please verify that the device "In-vehicle monitoring system" is listed in the devices list.'
        
rootRuleChainPreview:
    0:
        image: /images/edge/use-cases/data-filtering/root-rule-chain.png
        title: ''

updateRootRuleChain:
    0:
        image: /images/edge/use-cases/data-filtering/update-root-item-1.png
        title: 'Log in to your ThingsBoard instance. Open the "Rule chain templates" page. Navigate to "Edge management" and select "Rule chain templates". Finally, click on "Edge Root Rule Chain".'
    1:
        image: /images/edge/use-cases/data-filtering/update-root-item-2.png
        title: 'Use the filter to search for nodes containing the word "script". Drag the Script node (Transformation) to the rule chain.'
    2:
        image: /images/edge/use-cases/data-filtering/update-root-item-3.png
        title: 'Input the node name, e.g., "Transform Incoming Message" and add the JavaScript code (please copy and paste it from the snippet above) to send further only "distance" readings.'
    3:
        image: /images/edge/use-cases/data-filtering/update-root-item-4.png
        title: 'Delete the connection between the "save timeseries" and "push to cloud" nodes. Select the connection path, then click on the ("X") icon to delete it.'
    4:
        image: /images/edge/use-cases/data-filtering/update-root-item-5.png
        title: 'Drag a connection from the "save timeseries" to the transformation script node.'
    5:
        image: /images/edge/use-cases/data-filtering/update-root-item-6.png
        title: 'Choose "Success" from the dropdown list, and click the "Add" button.'
    6:
        image: /images/edge/use-cases/data-filtering/update-root-item-8.png
        title: 'Drag a connection from "Transform Incoming Message" to the "push to cloud" node.'
    7:
        image: /images/edge/use-cases/data-filtering/update-root-item-9.png
        title: 'Choose "Success" from the dropdown list, and click the "Add" button.'
    8:
        image: /images/edge/use-cases/data-filtering/update-root-item-10.png
        title: 'Click "Apply Changes" to save your progress.'
        
updateRootRuleChainEdge:
    0:
        image: /images/edge/use-cases/data-filtering/update-root-item-11.png
        title: 'Log in to your ThingsBoard <b>Edge</b> instance and navigate to the "Rule chains" page.'
    1:
        image: /images/edge/use-cases/data-filtering/update-root-item-12.png
        title: 'Open the "Edge Root Rule Chain" to verify the changes.'
    2:
        image: /images/edge/use-cases/data-filtering/update-root-item-13.png
        title: 'You should see the same configuration of rule chain nodes as on the cloud.'

copyAccessTokenDevice:
    0:
        image: /images/edge/use-cases/data-filtering/copy-access-token-item-1.png
        title: 'Open Devices page in the ThingsBoard <b>Edge</b> instance.'
    1:
        image: /images/edge/use-cases/data-filtering/copy-access-token-item-2.png
        title: 'Click on the "In-vehicle monitoring system" device row in the table to open device details.'
    2:
        image: /images/edge/use-cases/data-filtering/copy-access-token-item-3.png
        title: 'Click on the "Copy access token" button. The token will be copied to your clipboard.'

verifyDeviceTelemetryEdge:
    0:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-1.png
        title: 'Navigate to the "Devices" page.' 
    1:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-2.png
        title: 'Click on the "In-vehicle monitoring system" device row in the table to open the device details.'
    2:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-3.png
        title: 'Click on the "Copy Access Token" button. The token will be copied to your clipboard.'

verifyDeviceTelemetry:
    0:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-4.png
        title: 'Log in in to your <b>ThingsBoard</b> instance and open "Devices" page.'
    1:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-5.png
        title: 'Click on the row labeled "In-vehicle monitoring system" in the table to view its details.'
    2:
        image: /images/edge/use-cases/data-filtering/verify-device-telemetry-item-6.png
        title: 'Click on the "Latest telemetry" tab to confirm that distance readings are successfully being pushed from the edge to the cloud.'

createDashboard:
    0:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-1.png
        title: 'Log in to your <b>ThingsBoard</b> instance. Navigate to the "Dashboards" page.'
    1:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-2.png
        title: 'Click on the ("+") "Add" icon and select "Create new dashboard".'
    2:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-3.png
        title: 'Enter a title for the new dashboard, e.g., "Edge Vehicle". Click on the "Add" button to create the dashboard.'
    3:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-4.png
        title: 'Click on the "Edge Vehicle" dashboard in the table to start editing it.'
    4:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-5.png
        title: 'Click on the "Entity aliases" icon located in the toolbar at the top right to open the "Entity aliases" menu.'
    5:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-6.png
        title: 'Click on the "Add alias" button.'
    6:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-7.png
        title: 'Enter "edge device" into the Alias name field. For the Filter type, select "Single entity". In the Type field, choose "Device". Then, in the Device field, select "In-vehicle monitoring system". Finally, click the "Save" button.'
    7:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-8.png
        title: 'Click on the "Add Widget" button.'
    8:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-9.png
        title: 'Click on the "Widgets Bundle" and find "Digital gauges". Click on it to open the widget list group.'
    9:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-10.png
        title: 'Select the widget from the list that matches the image provided in the guide, then click on it to start adding a data source.'
    10:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-11.png
        title:  'In the "Type" dropdown menu, select "Entity". In the "Entity Alias" dropdown menu, select "edge device". In the "Data Key" field, select "distance". Then click the "Add" button to apply changes.'
    11:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-12.png
        title: 'Click on the "Edit Widget" icon in the upper right corner of the widget to add style.'
    12:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-13.png
        title: 'Select the "Appearance" tab to customize your dashboard widget.'
    13:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-14.png
        title: 'Set max value to "10000".'
    14:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-15.png
        title: 'Input the unit title as "MLS". Click the "Add" button to apply changes.'
    15:
        image: /images/edge/use-cases/data-filtering/configure-dashboards-item-16.png
        title: 'Dashboard widget successfully created.'

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