---
layout: docwithnav-pe-edge
title: Data filtering and traffic reduce
description: ThingsBoard Edge use case #2

provisionDevicesEdge:
    0:
        image: /images/pe/edge/use-cases/data-filtering/provision-devices-item-1.png
        title: 'Log in to your ThingsBoard <b>Edge</b> instance using your credentials. Navigate to the "Devices" page.'
    1:
        image: /images/pe/edge/use-cases/data-filtering/provision-devices-item-2.png
        title: 'Click on the "Add device" ("+") icon in the top right corner of the table to create a device. Then click "Add new device".'
    2:
        image: /images/pe/edge/use-cases/data-filtering/provision-devices-item-3.png
        title: 'Input the device Name, e.g., <b>"In-vehicle monitoring system"</b>. Then click the "Add" button.'
    3:
        image: /images/pe/edge/use-cases/data-filtering/provision-devices-item-4.png
        title: 'Verify that your <b>"In-vehicle monitoring system"</b> device is listed in the devices table.'
provisionDevices:    
    0:
        image: /images/pe/edge/use-cases/data-filtering/provision-devices-item-6.png
        title: 'Log in to your <b>ThingsBoard PE</b> instance. Navigate to the "Devices" page.'
    1:
        image: /images/pe/edge/use-cases/data-filtering/provision-devices-item-7.png
        title: 'Verify that the <b>"In-vehicle monitoring system"</b> device is listed in the devices list.'
        
rootRuleChainPreview:
    0:
        image: /images/pe/edge/use-cases/data-filtering/root-rule-chain.png
        title: ''

updateRootRuleChain:
    0:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-1.png
        title: 'Log in to your <b>ThingsBoard PE</b> instance and navigate to the "Rule chains" page.'
    1:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-2.png
        title: 'Click on the "Edge Root Rule Chain" to enter edit mode.'
    2:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-3.png
        title: 'Search for the "script" node using the query "script". Drag the "Transformation" node into the rule chain.'
    3:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-4.png
        title: 'Enter a Name, e.g., "Transform incoming message", and paste the <b>JavaScript code</b> (from the snippet above) to process only the "distance" readings parameter. Click "Add" to proceed.'
    4:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-5.png
        title: 'Disconnect the "save time series" node from the "push to cloud" node.'
    5:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-6.png
        title: 'Connect "save time series" node to the "Transform incoming message" node.'
    6:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-7.png
        title: 'Choose "Success" from the dropdown list, and click the "Add" button.'
    7:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-8.png
        title: 'Connect "Transform incoming message" to the "Push to cloud" node.'
    8:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-9.png
        title: 'Choose "Success" from the dropdown list, then click the "Add" button to establish the connection.'
    9:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-10.png
        title: 'Click on the "Apply changes" icon to save your current progress.'
         
updateRootRuleChainEdge:
    0:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-11.png
        title: 'Log in to your ThingsBoard <b>Edge</b> instance and navigate to the "Devices" page.'
    1:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-12.png
        title: 'Open the "Edge Root Rule Chain" to verify changes.'
    2:
        image: /images/pe/edge/use-cases/data-filtering/update-root-item-13.png
        title: 'You should see the same rule chain nodes configuration as on the cloud.'

copyAccessTokenDevice:
    0:
        image: /images/pe/edge/use-cases/data-filtering/copy-access-token-item-1.png
        title: 'Open the "Devices" page.'
    1:
        image: /images/pe/edge/use-cases/data-filtering/copy-access-token-item-2.png
        title: 'Select the "All" tab, then click on the row that represents the <b>"In-vehicle monitoring system"</b> device in the table to open its details.'
    2:
        image: /images/pe/edge/use-cases/data-filtering/copy-access-token-item-3.png
        title: 'Click on the "Copy access token" (token will be copied to your clipboard).'
    
verifyDeviceTelemetryEdge:
    0:
        image: /images/pe/edge/use-cases/data-filtering/verify-device-telemetry-item-1.png
        title: 'Open the "Devices" page in your ThingsBoard <b>Edge</b> instance.'
    1:
        image: /images/pe/edge/use-cases/data-filtering/verify-device-telemetry-item-2.png
        title: 'Click on the row corresponding to the <b>"In-vehicle monitoring system"</b> device in the table to view its details.'
    2:
        image: /images/pe/edge/use-cases/data-filtering/verify-device-telemetry-item-3.png
        title: 'Switch to the <b>"Latest telemetry"</b> tab to monitor the telemetry data generated by the Python script in real-time'
    

verifyDeviceTelemetry:
    0:
        image: /images/pe/edge/use-cases/data-filtering/verify-device-telemetry-item-5.png
        title: 'Log in to your <b>ThingsBoard PE</b> instance. Then navigate to the "Devices" page.' 
    1:
        image: /images/pe/edge/use-cases/data-filtering/verify-device-telemetry-item-6.png
        title: 'Click on the <b>"In-vehicle monitoring system"</b> row to open the device details.'
    2:
        image: /images/pe/edge/use-cases/data-filtering/verify-device-telemetry-item-7.png
        title: 'Click on the "Latest telemetry" tab, to verify that "distance readings" are pushed successfully from the edge to the cloud.'
    
createDashboard:
  0:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-1.png
        title: 'Log in to your <b>ThingsBoard PE</b> instance. Navigate to "Dashboards" page.'
  1:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-2.png
        title: 'Click on the ("+") icon, then select "Create new dashboard"'
  2:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-3.png
        title: 'Input the Name for the new dashboard, e.g., "Edge dashboards", then click the "Add" button.'
  3:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-4.png
        title: 'Click on the "Add alias" icon.'
  4:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-5.png
        title: 'Click on the "Add alias" button.'
  5:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-6.png
        title: 'Input Alias name "edge device". Select Filter type "Single entity", type "Device", and Device <b>"In-vehicle monitoring system"</b>. Then click on the "Add" button.'
  6:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-7.png
        title: 'Click on the "Save" button.'
  7:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-8.png
        title: 'Click on the "Add new widget".'
  8:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-9.png
        title: 'Enter the search query "Digital gauges", then click to select the widget from the search results.'
  9:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-10.png
        title: 'Click on the widget shown in the screenshot, or choose another one according to your preference.'
  10:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-11.png
        title: 'Click on the "Save button".'
  11:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-12.png
        title: 'Click on the "Edit mode" button.'
  12:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-13.png
        title: 'Click on the "Edit widget" icon.'
  13:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-14.png
        title: 'Set max value to "10000".'
  14:
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-15.png
        title: 'Switch to the "Advanced" tab, set the units to "mil", and click the "Apply" button.'
  15:  
        image: /images/pe/edge/use-cases/data-filtering/configure-dashboards-item-16.png
        title: 'You have successfully created and configured the dashboard.'

---
* TOC
{:toc}

{% assign cloudDocsPrefix = "pe/" %}
{% assign docsPrefix = "pe/edge/" %}
{% assign appPrefix = "ThingsBoard PE" %}

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