---
layout: docwithnav-pe-edge
title: Getting started with ThingsBoard PE Edge
description: Getting started with ThingsBoard PE Edge

step1:
    0:
        image: /images/pe/edge/getting-started/step-1-item-1-pe.png
        title: 'Login to your <b>ThingsBoard Edge</b> instance and navigate to the "Entities" section -> "Devices" page;'
    1:
        image: /images/pe/edge/getting-started/step-1-item-2-pe.png
        title: 'Click on the "+" icon in the top right corner of the table and select "Add new device". Enter a name for the device, for example, "My New Device". No other changes are required at this time. Click "Add" to create the device;'
    2:
        image: /images/pe/edge/getting-started/step-1-item-3-pe.png
        title: 'The device is created. A window will open where you can check the device&#39;s connection to ThingsBoard Edge. Select the messaging protocol and your operating system. Install the necessary client tools and copy the command;'
    3:
        image: /images/pe/edge/getting-started/step-1-item-4-pe.png
        title: 'Execute the previously copied command. Once you have successfully published the "temperature" readings, the device state should be changed from "Inactive" to "Active" and you should see the published "temperature" readings. Now, close the connectivity window;'
    4:
        image: /images/pe/edge/getting-started/step-1-item-5-pe.png
        title: 'Open the "Last Telemetry" tab in the device details to check the received telemetry.'

step2:
    0:
        image: /images/pe/edge/getting-started/step-2-item-1-pe.png
        title: 'Log in to your <b>ThingsBoard Professional Edition</b> instance and navigate to the "Devices" page. Confirm that the device "My New Device" has been created on the ThingsBoard Community Edition cloud;'
    1:
        image: /images/pe/edge/getting-started/step-2-item-2-pe.png
        title: 'Click om the "My New Device" to open "Device details" and navigate to the "Relations" tab. Switch the direction from "From" to "To" to view the relation to the Edge that provisioned this device.'

step3:
    0:
        image: /images/pe/edge/getting-started/step-3-item-1-pe.png
        title: 'Navigate to the "Rule Chains" page within your ThingsBoard <b>Edge</b> instance and open the "Edge Root Rule Chain".'
    1:
        image: /images/pe/edge/getting-started/step-3-item-2-pe.png
        title: 'The <b>Push to Cloud</b> rule node will transmit temperature time series data to the cloud once it has been stored in the local database.'

step4:
    0:
        image: /images/pe/edge/getting-started/step-4-item-1-pe.png
        title: 'Navigate to the "Dashboards" page through the main menu on the left of the screen. Then, click the "+" sign in the upper right corner of the screen, and select "Create new dashboard" from the drop-down menu;'
    1:
        image: /images/pe/edge/getting-started/step-4-item-2-pe.png
        title: 'Input the dashboard name, for example, "New Dashboard", and click "Add" to create the dashboard;'
    2:
        image: /images/pe/edge/getting-started/step-4-item-3-pe.png
        title: 'Click the "Add widget" button at the top of the screen or click the large "Add new widget" icon in the center of the screen (if this is your first widget on this dashboard);'
    3:
        image: /images/pe/edge/getting-started/step-4-item-4-pe.png
        title: 'Locate "Tables" in the list of widgets bundles and select this menu item;'
    4:
        image: /images/pe/edge/getting-started/step-4-item-5-pe.png
        title: 'Locate and select the "Entities table" widget;'
    5:
        image: /images/pe/edge/getting-started/step-4-item-6-pe.png
        title: 'The "Add Widget" window will appear. Specify the previously created device "My New Device" in the "Device" field. The “name” key has already been added to the “Columns” section, which is responsible for the column with the device name. You need to add another column that will display the value of the "temperature" key. To do this, click "Add column" to add a new field to enter the data key;'
    6:
        image: /images/pe/edge/getting-started/step-4-item-7-pe.png
        title: 'Click on the newly appeared data key input field. A list of available data keys will open. Select "temperature" data key;'
    7:
        image: /images/pe/edge/getting-started/step-4-item-8-pe.png
        title: 'Click the "Add" button in the bottom right corner of the widget to complete adding the widget;'
    8:
        image: /images/pe/edge/getting-started/step-4-item-9-pe.png
        title: 'The "Entities table" has been added, and "My New Device" is displayed in the list. Let&#39;s add another widget. Click the "Add widget" button;'
    9:
        image: /images/pe/edge/getting-started/step-4-item-10-pe.png
        title: 'Find "Charts" in the list of widgets bundles and click on this menu item;'
    10:
        image: /images/pe/edge/getting-started/step-4-item-11-pe.png
        title: 'Locate and click on the "Time series Line Chart" widget;'
    11:
        image: /images/pe/edge/getting-started/step-4-item-12-pe.png
        title: 'From the devices list, select "My New Device" and click "Add" button;'
    12:
        image: /images/pe/edge/getting-started/step-4-item-13-pe.png
        title: 'The "Time series Line Chart" widget has been added to the dashboard. Drag and Drop the "Time series Line Chart" widget to the top right corner of the dashboard;'
    13:
        image: /images/pe/edge/getting-started/step-4-item-14-pe.png
        title: 'Resize the "Time series Line Chart" widget. Just drag the bottom right corner of the widget;'
    14:
        image: /images/pe/edge/getting-started/step-4-item-15-pe.png
        title: 'Click the "Edit time window" icon. Specify "1 hour" as the time period and "None" as the "Data aggregation function". Click "Update" button. Apply all changes by clicking "Save" button in the upper right corner of the screen.'
    15:
        image: /images/pe/edge/getting-started/step-4-item-16-pe.png
        title: 'Congratulations! You have successfully configured the dashboard. Now, when you send a new telemetry reading, it will immediately appear in the table.'

step5Server:
    0:
        image: /images/pe/edge/getting-started/step-5-item-1-pe.png
        title: 'Open "Dashboards" page on the <b>ThingsBoard Professional Edition</b> server. Click on the "Dashboard details" icon of the "New Dashboard" to view details;'
    1:
        image: /images/pe/edge/getting-started/step-5-item-2-pe.png
        title: 'Click on the "Manage owner and groups" button;'
    2:
        image: /images/pe/edge/getting-started/step-5-item-3-pe.png
        title: 'Now we need to create a new dashboard group and add the previously created dashboard to it. Enter a name for the new dashboard group (for example, "Edge Dashboard Group") in the "Groups" fields and click "Create a new one!" blue link;'
    3:
        image: /images/pe/edge/getting-started/step-5-item-4-pe.png
        title: 'In the "Add entity group" window, click the "Add" button to create new dashboard group;'
    4:
        image: /images/pe/edge/getting-started/step-5-item-5-pe.png
        title: 'Newly created "Edge Dashboard Group" appeared in the "Groups" field. Click the "Update" button;'
    5:
        image: /images/pe/edge/getting-started/step-5-item-6-pe.png
        title: 'Verify that "Edge Dashboard Group" is available in the "Groups" field;'
    6:
        image: /images/pe/edge/getting-started/step-5-item-7-pe.png
        title: 'Now, open the "Edge management" section -> "Instances" page. Click on the "Manage edge dashboard groups" icon of the edge instance to view dashboards that are already assigned to this Edge;'
    7:
        image: /images/pe/edge/getting-started/step-5-item-8-pe.png
        title: 'To assign dashboard groups to the Edge, click on the "+" icon and select "Edge Dashboard Group" from the list, and click "Assign" button. This dashboard group will be provisioned to the edge.'

step5Edge:
    0:
        image: /images/pe/edge/getting-started/step-5-item-10-pe.png
        title: 'Open the "Dashboards" page in the ThingsBoard <b>Edge</b> UI. Open "My New Dashboard".'    
    1:
        image: /images/pe/edge/getting-started/step-5-item-11-pe.png
        title: 'Verify that you see the same widgets that you have added on the cloud and temperature readings from the device.'

---

* TOC
{:toc}

{% assign currentThingsBoardVersion = "ThingsBoard Professional Edition" %}

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

## Your feedback

Don't hesitate to star ThingsBoard Edge on **[github](https://github.com/thingsboard/thingsboard-edge)** to help us spread the word.
If you have some questions about this sample - post it on the **[forum](https://groups.google.com/forum/#!forum/thingsboard)**.
## Next steps

{% assign currentGuide = "GettingStartedGuide" %}
{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}