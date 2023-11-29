---
layout: docwithnav-pe-edge
title: Getting started with ThingsBoard PE Edge
description: Getting started with ThingsBoard PE Edge

step1:
    0:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-1-item-1.png 
        title: 'Log in to your <b>ThingsBoard Edge</b> instance and click the "Add Device" button.'
    1:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-1-item-2.png  
        title: 'Enter a name for the device, for example, "My New Device". No other changes are required at this time. Click "Add" to create the device.'
    2:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-1-item-3.png
        title: 'Open the "Check connectivity" window from the device details page, or skip this step if the pop-up window has already appeared.'
    3:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-1-item-4.png
        title: 'Please keep this window open and execute the "curl" command in a new terminal window. This command will publish demo telemetry data to the newly created device.'
    4:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-1-item-5.png
        title: 'Open a new terminal window and execute the "curl" command copied from the previous step.'
    5:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-1-item-6.png
        title: 'Observe the successful result of the "curl" command.'        
    6:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-1-item-7.png
        title: 'Revisit the connectivity instructions window and verify the telemetry upload.'
    7:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-1-item-8.png
        title: 'If you have already closed the connectivity window, you can check the "Latest telemetry" tab of the device for verification.'

step2:
    0:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-2-item-1.png
        title: 'Log in to your <b>ThingsBoard Professional Edition</b> instance and navigate to the Devices page.'
    1:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-2-item-2.png  
        title: 'Confirm that the device "My New Device" has been created on the ThingsBoard Professional Edition Server.'
    2:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-2-item-3.png
        title: 'Select "My New Device" and navigate to the "Relations" tab.'
    3:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-2-item-4.png
        title: 'Switch the direction from "From" to "To" to view the relation to the Edge that provisioned this device.'

step3:
    0:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-3-item-1.png
        title: 'Navigate to the "Rule Chains" page within your ThingsBoard <b>Edge</b> instance and open the "Edge Root Rule Chain".'
    1:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-3-item-2.png
        title: 'The <b>Push to Cloud</b> rule node will transmit temperature timeseries data to the cloud once it has been stored in the local database.'

step4:
    0:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-1.png
        title: 'Click the <b>Add Dashboard</b> button on the <b>ThingsBoard Professional Edition</b> server.'
    1:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-2.png
        title: 'Input the dashboard name, for example, "My New Dashboard", and click "Add" to create the dashboard.'
    2:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-3.png
        title: 'Click the "Add new widget" button to begin adding new widgets to this dashboard.'
    3:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-4.png
        title: 'Locate "Entity widgets" in the list and select this menu item.'        
    4:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-5.png
        title: 'Locate and select the "Entities table" widget.'
    5:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-6.png
        title: 'From the devices list, select "My New Device" and add the "temperature" column to the table configuration. Click "Add" button.'
    6:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-7.png
        title: 'The "Entities table" has been added, and "My New Device" is displayed in the list. Click the "Add widget" button.'
    7:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-8.png
        title: 'Find "Charts" in the list and click on this menu item.'
    8:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-9.png
        title: 'Locate and click on the "Timeseries Line Chart" widget.'
    9:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-10.png
        title: 'From the devices list, select "My New Device" and click "Add" button.'
    10:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-11.png
        title: 'The "Timeseries Line Chart" widget has been added to the dashboard.'
    11:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-12.png
        title: 'Move and resize the "Timeseries Line Chart" widget. Click the "Edit timewindow" icon.'
    12:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-13.png
        title: 'Specify "1 day" and "None" as the Data aggregation function. Click "Update" button.'
    13:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-4-item-14.png
        title: 'Click the "Save" button to save the Dashboard.'

step5Server:
    0:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-5-item-1.png
        title: 'Open Dashboards page on the <b>ThingsBoard Professional Edition</b> server. Click on the <b>Edit</b> icon of the "My New Dashboard" to view details.'
    1:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-5-item-2.png
        title: 'Click "Manage owner and groups" button.'
    2:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-5-item-3.png
        title: 'Type "Edge Dashboard Group" in the "Groups" fields and click "Create a new one!" blue link.'
    3:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-5-item-4.png
        title: 'Click "Add" button to create new group.'
    4:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-5-item-5.png
        title: 'Newly created "Edge Dashboard Group" appeared in the "Groups" field. Click "Update" button.'
    5:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-5-item-6.png
        title: 'Verify that "Edge Dashboard Group" is available in the "Groups" field. Close edit window.'
    6:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-5-item-7.png
        title: 'Open the Edge instances page. Click on the <b>Manage edge dashboard groups</b> icon of the edge instance to view dashboards that are already assigned to this edge.'
    7:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-5-item-8.png
        title: 'Click on the "+" icon to assign dashboard groups to edge.'
    8:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-5-item-9.png
        title: 'Select "Edge Dashboard Group" from the list and click "Assign" button.'
    9:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-5-item-10.png
        title: 'This dashboard group will be provisioned to the edge.'

step5Edge:
    0:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-5-item-11.png
        title: 'Open the "Dashboards" page in the <b>ThingsBoard Edge</b> UI. Open "My New Dashboard".'    
    1:
        image: https://img.thingsboard.io/pe/edge/getting-started/step-5-item-12.png
        title: 'Verify that you see the same widgets that you have added on the cloud and temperature readings from the device.'

---

* TOC
{:toc}

{% assign currentThingsBoardVersion = "ThingsBoard Professional Edition" %}

## Introduction

{% include templates/edge/getting-started/introduction.md %}

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/getting-started/prerequisites.md %}

## Step 1. Provision Device

{% assign cloudDocsPrefix = "pe/" %}
{% include templates/edge/getting-started/step-1.md %}

## Step 2. Provision Device from ThingsBoard Edge to ThingsBoard Professional Edition Server

{% include templates/edge/getting-started/step-2.md %}

## Step 3. Push data from ThingsBoard Edge to ThingsBoard Professional Edition Server

{% include templates/edge/getting-started/step-3.md %}

## Step 4. Create And Configure Dashboard

{% include templates/edge/getting-started/step-4.md %}

## Step 5. Provision Dashboard to ThingsBoard Edge

{% include templates/edge/getting-started/step-5.md %}

## Next steps

{% assign currentGuide = "GettingStartedGuide" %}
{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}

## Your feedback

Don't hesitate to star ThingsBoard Edge on **[github](https://github.com/thingsboard/thingsboard-edge)** to help us spread the word.
If you have some questions about this sample - post it on the **[forum](https://groups.google.com/forum/#!forum/thingsboard)**.

