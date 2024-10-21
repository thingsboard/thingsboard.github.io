---
layout: docwithnav-pe-edge
title: Edge Alarms
description: Edge Alarms Overview

push-to-edge:
    0:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-cloud-to-edge/0-device-profile-create-rule.png
        title: 'Log in to the ThingsBoard Cloud and go to the Profiles > Device profiles section to create or modify the Device profile. Select the appropriate Default rule chain. Then, configure the Alarm Rule.'
    1:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-cloud-to-edge/1-assign-the-profile.png
        title: 'Go to the Entities > Devices section. Then, navigate to the "Groups" tab and open the group associated with your Edge instance. You can create a new Device or edit the existing one. On the "Device details" page, assign newly created (or updated) Device profile to this Device. Click the “Apply changes” button.'
    2:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-cloud-to-edge/2-rule-chain-section.png
        title: 'Go to the Rule Chains section. Select the Rule Chain that you have assigned to the Device profile and click on it to modify.'
    3:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-cloud-to-edge/3-push-node.png
        title: 'On the Rule Chain edit page, in the Node search bar find the "push to edge" node. It pushes messages from Cloud to Edge. Once message arrives to this node it will be converted into Edge event and saved to the local database. Drag and drop the bode onto the Rule Chain sheet. Then, in the "Add rule node" pop-up window enter the node title and select the "Server attributes" option in the "Entity attributes scope" field. Click the "Add" button to proceed.'
    4:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-cloud-to-edge/4-select-link-labels.png
        title: 'Connect the “device profile” node to the "push to edge" node and set the “Alarm Created”, “Alarm Updated”, “Alarm Severity Updated”, and “Alarm Cleared” link labels. Click the “Apply changes” button in the Rule Chain sheet.'
    5:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-cloud-to-edge/5-check-telemetry.png
        title: 'To test if the rule and node are working, navigate to the Entities > Devices section, find your Device and open the "Device details" page. Click the "Check connectivity" button. Trigger the Alarm Rule by executing the corresponding command in the terminal.'
    6:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-cloud-to-edge/6-verify-alarm-on-cloud.png
        title: 'To verify the received Alarm notification, go to the Entities > Devices section, open the "Device details" page and select the “Alarm” tab. You also can view the incoming Alarm notification in the Notification center.'
    7:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-cloud-to-edge/7-verify-alarm-on-edge.png
        title: 'To verify that the notification is propagated to the Edge, log in to the Edge instance and go to the Entities > Devices section, open the "Device details" page and select the “Alarm” tab.'
    8:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-cloud-to-edge/8-acknowledge-clear.png
        title: 'Make sure to Acknowledge and Clear the notification after you received it. You can do it on either the Cloud or the Edge. If the Uncleared Alarm exists, it will be updated, instead of being created.'

push-to-cloud:
    0:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-edge-to-cloud/0-device-profile.png
        title: 'Log in to the ThingsBoard Edge and go to the Profiles > Device profiles section to create or edit the Device profile. Select the appropriate Default rule chain. Set the Alarm Rule.'
    1:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-edge-to-cloud/1-assign-profile.png
        title: 'Go to the Entities > Devices section. By default, you will be taken to the "All" tab. If you want assign the Device to a specific group, navigate to the "Groups" tab. You can create a new Device or edit the existing one. On the "Device details" page, assign newly created (or updated) Device profile to this Device. Click the “Apply changes” button.'
    2:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-edge-to-cloud/2-rule-chain-template.png
        title: 'Log in to the ThingsBoard Cloud and go to the Edge management > Rule chain templates section to modify the Rule Chain you have assigned to the Device profile.'
    3:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-edge-to-cloud/3-push-to-cloud-settings.png
        title: 'On the Rule Chain edit page, in the Node search bar find the "push to cloud" node. It pushes messages from Edge to Cloud. Once message arrives to this node it will be converted into Cloud event and saved to the local database. Drag and drop the node onto the Rule Chain sheet. Then, in the "Add rule node" pop-up window enter the node title and select the "Server attributes" option in the "Entity attributes scope" field. Click the "Add" button to proceed.'
    4:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-edge-to-cloud/4-push-to-cloud-node.png
        title: 'Connect the “device profile” node to the "push to edge" node and set the “Alarm Created”, “Alarm Updated”, “Alarm Severity Updated”, and “Alarm Cleared” link labels. Click the “Apply changes” button in the Rule Chain sheet.'
    5:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-edge-to-cloud/5-send-command.png
        title: 'To test if the rule and node are working, log in to your Edge instance and navigate to the Entities > Devices section. Find your Device and open the "Device details" page. Click the "Check connectivity" button. Trigger the Alarm Rule by executing the corresponding command in the terminal.'
    6:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-edge-to-cloud/6-check-alarm-on-edge.png
        title: 'To verify the received Alarm notification, go to the Entities > Devices section, open the "Device details" page and select the “Alarm” tab. You also can view the incoming Alarm notification in the Notification center.'
    7:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-edge-to-cloud/7-check-alarm-on-cloud.png
        title: 'To verify that the notification is propagated to the Cloud, log in to the ThingsBoard Cloud (Server) and go to the Entities > Devices section, open the "device details" page and select the “Alarm” tab.'
    8:
        image: /images/pe/edge/user-guide/manage-alarms/push-from-edge-to-cloud/8-acknowledge-clear.png
        title: 'Make sure to Acknowledge and Clear the notification after you received it. You can do it on either the Cloud or the Edge. If the Uncleared Alarm exists, it will be updated, instead of being created.'


---

{% assign docsPrefix = "pe/edge/" %}
{% assign cloudDocsPrefix = "pe/" %}
{% include docs/edge/user-guide/alarms.md %}