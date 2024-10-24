---
layout: docwithnav-pe-edge
title: Edge Device Creation and Cloud Provisioning
description: Seamlessly Create Edge Devices and Provision Them to the Cloud

create-device:
    0:
        image: /images/pe/edge/config/devices/0-go-to-devices-section.webp
        title: 'Any user who has the <a href="/docs/pe/reference/lwm2m-api/#write-operation" target="_blank">"Write" operation</a> permission for <b>Devices</b> is able to create <b>Device entities</b> on the <b>Edge instance</b>. Go to the <b>Entities > Devices</b> section and click the <b>"Add new device"</b> button.'
    1:
        image: /images/pe/edge/config/devices/1-add-new-device.webp
        title: 'In the pop-up window, fill in the required <b>Device details</b> fields, such as <b>"Name"</b> and <b>"Device profile"</b>. Confirm the action by clicking the <b>"Add"</b> button.'
    2:
        image: /images/pe/edge/config/devices/2-check-connectivity.webp
        title: 'To check connectivity, send telemetry on behalf of the <b>Device</b> using shell by following the on-screen instructions.'
    3:
        image: /images/pe/edge/config/devices/3-confirm-on-cloud.webp
        title: 'To check if the new <b>Device</b> has been deployed to the <b>Cloud (Server)</b>, log in to your <b>Cloud (Server)</b> and navigate to the <b>Entities > Devices</b> section.<br>For the <b>ThingsBoard Edge Professional Edition</b>:<ul><li>A new <b>Device entity group</b> will be created with the <b>"[Edge] {NAME_OF_EDGE} All"</b> template name;</li><li>A newly created <b>Device</b> will be assigned to the <b>Cloud (Server)</b> automatically and added to group above;</li><li>This newly created <b>Group</b> will be assigned to the <b>Edge</b> automatically.</li></ul>'

assignment-from-cloud:
    0:
        image: /images/pe/edge/config/devices/0-assignment-from-cloud.webp
        title: 'The variety of buttons on the <b>"Instances"</b> page will help you to manage different <a href="/docs/pe/user-guide/groups/" target="_blank">entity groups</a> and <a href="/docs/user-guide/entities-and-relations/" target="_blank">entities</a>, and assign them accordingly to the <b>Edge instance</b>. To assign a <b>Device Group</b>, click the <b>"Manage edge device groups"</b> button.'
    1:
        image: /images/pe/edge/config/devices/1-device-group-from-cloud.webp
        title: 'On the <b>"Device groups"</b> page, click the <b>"+"</b> icon and then select the <b>Device group</b> from the drop-down list in the pop-up window. Confirm the action by clicking the <b>"Assign"</b> button.'
    2:
        image: /images/pe/edge/config/devices/2-device-from-cloud.webp
        title: 'To add the <b>Device</b>, click the <b>"+"</b> icon on the selected group page, and fill in the required <b>Device details</b> fields, such as <b>"Name"</b> and <b>"Device profile"</b>, in the pop-up window. Confirm the action by clicking the <b>"Add"</b> button.'
    3:
        image: /images/pe/edge/config/devices/3-confirm-on-edge.webp
        title: 'To confirm that the <b>Device</b> and the <b>Device Group</b> have been assigned to the <b>Edge instance</b>, log in to your <b>Edge instance</b> and go to the  <b>Entities > Devices</b> section.'

---

{% assign docsPrefix = "pe/edge/" %}
{% assign peDocsPrefix = "pe/" %}
{% include docs/edge/user-guide/config/device-on-edge.md %}
