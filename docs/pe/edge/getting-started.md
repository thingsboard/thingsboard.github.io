---
layout: docwithnav-pe-edge
title: Getting started with ThingsBoard PE Edge
description: Getting started with ThingsBoard PE Edge

step1:
    0:
        image: /images/pe/edge/getting-started/step-1-item-1-pe.webp
        title: 'Go to the <b>Entities > Devices</b> section.'
    1:
        image: /images/pe/edge/getting-started/step-1-item-2-pe.webp
        title: 'Click the <b>"+"</b> icon and select the <b>"Add new device"</b> option. Enter a name for the device, for example, "My New Device". No other changes are required. Click the <b>"Add"</b> button to create the device.'
    2:
        image: /images/pe/edge/getting-started/step-1-item-3-pe.webp
        title: 'After the device is created, instructions on how to check its <b>connectivity</b> will be provided. Select the <b>messaging protocol</b> and your <b>operating system</b>. Install the required client tools, then copy the provided command.'
    3:
        image: /images/pe/edge/getting-started/step-1-item-4-pe.webp
        title: 'Run the previously copied command. Once the "temperature" readings are published, the device state will change from <span style="color:red">"Inactive"</span> to <span style="color:green">"Active"</span>, and you will see the published "temperature" readings. Finally, close the connectivity window.'
    4:
        image: /images/pe/edge/getting-started/step-1-item-5-pe.webp
        title: 'To verify the received telemetry, click on the device entity and open the <b>"Latest Telemetry"</b> tab.'

step2-1:
    0:
        image: /images/pe/edge/getting-started/step-4-item-1-pe.webp
        title: 'Click the <b>"+"</b> icon and select the <b>"Create new dashboard"</b> option from the drop-down menu.'
    1:
        image: /images/pe/edge/getting-started/step-4-item-2-pe.webp
        title: 'Enter the dashboard name, for example, "New Dashboard", and click the <b>"Add"</b> button to create the dashboard.'

step2-2:
    0:
        image: /images/pe/edge/getting-started/step-4-item-3-pe.webp
        title: 'Click the <b>"Add widget"</b> button.'
    1:
        image: /images/pe/edge/getting-started/step-4-item-4-pe.webp
        title: 'Locate the <b>"Tables"</b> bundle and click on it.'
    2:
        image: /images/pe/edge/getting-started/step-4-item-5-pe.webp
        title: 'Select the <b>"Entities table"</b> widget.'
    3:
        image: /images/pe/edge/getting-started/step-4-item-6-pe.webp
        title: 'In the <b>"Add Widget"</b> pop-up window, select the previously created device, "My New Device", in the <b>"Device"</b> field.<ul><li>The <b>“name”</b> key has already been added to the <b>“Columns”</b> section. It will display the column with the device name.</li><li>To add another column with different key value, click the <b>"Add column"</b> button.</li></ul>'
    4:
        image: /images/pe/edge/getting-started/step-4-item-7-pe.webp
        title: 'To select an additional data key to display, click on the newly appeared field. In the drop-down menu, you will see the list of the available data keys. Select the <b>"temperature"</b> data key. Click the <b>"Add"</b> button.'
    5:
        image: /images/pe/edge/getting-started/step-4-item-9-pe.webp
        title: 'The <b>"Entities table"</b> widget has been added, and <b>"My New Device"</b> is now displayed in the list. To add another widget, click the <b>"Add widget"</b> button.'
    6:
        image: /images/pe/edge/getting-started/step-4-item-10-pe.webp
        title: 'Locate the <b>"Charts"</b> widgets bundle and click on it.'
    7:
        image: /images/pe/edge/getting-started/step-4-item-11-pe.webp
        title: 'Select the <b>"Time series chart"</b> widget.'
    8:
        image: /images/pe/edge/getting-started/step-4-item-12-pe.webp
        title: 'Select the previously created device, "My New Device", as the <b>data source</b>, and click the <b>"Add"</b> button. The <b>"Time series chart"</b> widget has been successfully added to the dashboard.'
    9:
        image: /images/pe/edge/getting-started/step-4-item-13-pe.webp
        title: 'After configuring all the desired widgets, you can adjust their size and placement on the dashboard as needed. Drag and drop the widget to reposition it on the dashboard.'
    10:
        image: /images/pe/edge/getting-started/step-4-item-14-pe.webp
        title: 'To resize the widget, drag its bottom-right corner.'
    11:
        image: /images/pe/edge/getting-started/step-4-item-15-pe.webp
        title: 'To apply all changes to the dashboard, click the <b>"Save"</b> button in the upper-right corner of the screen.'
    12:
        image: /images/pe/edge/getting-started/step-4-item-16-pe.webp
        title: 'Congratulations! You have successfully configured the dashboard. Now, all new telemetry readings will instantly appear on the dashboard widgets.'

step3:
    0:
        image: /images/pe/edge/getting-started/step-3-item-1-pe.webp
        title: 'Within your <b>Edge</b> instance, go to the <b>Rule Chains</b> section and open the <b>"Edge Root Rule Chain"</b>.'
    1:
        image: /images/pe/edge/getting-started/step-3-item-2-pe.webp
        title: 'The <a href="/docs/user-guide/rule-engine-2-0/nodes/action/push-to-cloud/" target="_blank">Push to Cloud</a> rule node is used to transmit messages from edge to cloud after they have been stored in the local database.'
    
step4:
  0:
        image: /images/pe/edge/getting-started/step-2-item-1-pe.webp
        title: 'Navigate to the <b>Devices</b> section to confirm that the newly created device, "My New Device", has been published to the <b>ThingsBoard Server (Cloud)</b>.'
  1:
        image: /images/pe/edge/getting-started/step-2-item-2-pe.webp
        title: 'Click on the "My New Device" to open the <b>"Device details"</b> page and select the <b>"Relations"</b> tab. Switch the direction from <b>"From"</b> to <b>"To"</b> to view the relation to the Edge that provisioned this device.'
    
step5Server:
    0:
        image: /images/pe/edge/getting-started/step-5-item-1-pe.webp
        title: 'Create a new dashboard on the <b>ThingsBoard Server</b>. Click the <b>"Dashboard details"</b> icon to view details;'
    1:
        image: /images/pe/edge/getting-started/step-5-item-2-pe.webp
        title: 'Click the <b>"Manage owner and groups"</b> button;'
    2:
        image: /images/pe/edge/getting-started/step-5-item-3-pe.webp
        title: 'Now, create a new <b>dashboard group</b> and add the previously created dashboard to it. Enter a name for the new dashboard group (for example, "Edge Dashboard Group") in the <b>"Groups"</b> field, and click the <b>"Create a new one!"</b> link.'
    3:
        image: /images/pe/edge/getting-started/step-5-item-4-pe.webp
        title: 'In the <b>"Add entity group"</b> pop-up window, click the <b>"Add"</b> button.'
    4:
        image: /images/pe/edge/getting-started/step-5-item-5-pe.webp
        title: 'The <b>"Edge Dashboard Group"</b> appears in the <b>"Groups"</b> field. Click the <b>"Update"</b> button.'
    5:
        image: /images/pe/edge/getting-started/step-5-item-6-pe.webp
        title: 'The newly created group is now available in the <b>"Groups"</b> column.'
    6:
        image: /images/pe/edge/getting-started/step-5-item-7-pe.webp
        title: 'Go to the <b>Edge management > Instances</b> section. Click the <b>"Manage edge dashboard groups"</b> icon of the instance in question.'
    7:
        image: /images/pe/edge/getting-started/step-5-item-8-pe.webp
        title: 'On the <b>Edge Dashboard Groups</b> page, you will see all the dashboard groups that are already assigned to this <b>Edge</b>. To assign another dashboard group, click the <b>"+"</b> icon and select "Edge Dashboard Group" from the drop-down-menu. Click the <b>"Assign"</b> button.'

step5Edge:
    0:
        image: /images/pe/edge/getting-started/step-5-item-10-pe.webp
        title: 'Go to the <b>Dashboards</b> section and open the dashboard you have created on the <b>ThingsBoard Professional Edition Server</b>'    
    1:
        image: /images/pe/edge/getting-started/step-5-item-11-pe.webp
        title: 'Verify that these are the same widgets that you have added on the Cloud.'

---

* TOC
{:toc}

{% assign docsPrefix = "pe/edge/" %}

{% assign currentThingsBoardVersion = "ThingsBoard Professional Edition" %}

{% include templates/edge/getting-started/introduction.md %}

{% include templates/edge/getting-started/prerequisites.md %}

## Step 1. Connecting Device and Sending Telemetry Data

{% assign peDocsPrefix = "pe/" %}
{% include templates/edge/getting-started/step-1.md %}

## Step 2. Creating Dashboard and Configuring Widgets

{% include templates/edge/getting-started/step-2.md %}

## Step 3. Pushing Data From Edge to Cloud

{% include templates/edge/getting-started/step-3.md %}

## Step 4. Provisioning Entities From Edge to Server

{% include templates/edge/getting-started/step-4.md %}

## Step 5. Provisioning Entities From Server to Edge

{% include templates/edge/getting-started/step-5.md %}

## Your Feedback

Congratulations! You have successfully completed the initial configuration steps for **ThingsBoard Edge**. Now you can send new telemetry readings and they will appear on the dashboard immediately.

Help us improve by providing your feedback at [GitHub/Issues](https://github.com/thingsboard/thingsboard-edge/issues){: target="_blank"} or through the ["Contact us"](https://thingsboard.io/docs/contact-us/){: target="_blank"} form.
We would also greatly appreciate it if you could star our project on [GitHub](https://github.com/thingsboard/thingsboard-edge){: target="_blank"}!

## Next steps

{% assign currentGuide = "GettingStartedGuide" %}
{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}
