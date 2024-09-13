---
layout: docwithnav-pe
title: SIA Connect
description: SIA Connect Guide

creating-device-on-thingsboard:
    0:
        image: /images/user-guide/integrations/sia-connect/creating-opc-ua-device-1-paas.png
        title: 'Login to your ThingsBoard instance, and navigate to the "<b>Devices</b>" page of the "<b>Entities</b>" section. By default, will be redirected to the "<b>All</b>" device group. Click on the "<b>plus</b>" icon in the top right corner of the table and then select "<b>Add new device</b>" from drop-down menu;'
    1:
        image: /images/user-guide/integrations/sia-connect/creating-opc-ua-device-2-paas.png
        title: 'Input device name. For example,"<b>OPC-UA Device</b>". Use the default device profile. Now, click the "<b>Credentials</b>" button;'
    2:
        image: /images/user-guide/integrations/sia-connect/creating-opc-ua-device-3-paas.png
        title: 'Select "<b>MQTT Basic</b>" credentials type. Set "<b>opcua_device</b>" as a client ID, "<b>sia_connect</b>" as a user name and use your own password. Click "<b>Add</b>";'
    3:
        image: /images/user-guide/integrations/sia-connect/creating-opc-ua-device-4-paas.png
        title: 'A window will open where you can check the device&#39;s connection to ThingsBoard. Close this window by clicking "<b>Close</b>" button;'
    4:
        image: /images/user-guide/integrations/sia-connect/creating-opc-ua-device-5-paas.png
        title: 'Congratulations on adding the device!'

installing-sia-connect:
    0:
        image: /images/user-guide/integrations/sia-connect/installing-sia-connect-1-paas.png
        title: 'Go to the host, where the SIA Connect web UI is running.'

installing-opc-ua-connector:
    0:
        image: /images/user-guide/integrations/sia-connect/installing-opc-ua-connector-1-paas.png
        title: 'Go to "<b>Connectors</b>" page in the side menu. Click on "<b>Search for Connector to download & install</b>" input field, and start typing the connector name - "<b>OPC-UA</b>". Find "<b>OPC-UA Client</b>", and download it by clicking the appropriate button. <b>OPC-UA</b> connector installed.'

installing-mqtt-connector:
    0:
        image: /images/user-guide/integrations/sia-connect/installing-mqtt-connector-1-paas.png
        title: 'Go to "<b>Connectors</b>" page in the side menu. Click on "<b>Search for Connector to download & install</b>" input field and type "<b>MQTT</b>". Find "<b>MQTT</b>", and download it by clicking the appropriate button. <b>MQTT</b> connector installed.'

adding-opc-ua-device-instance-1:
    0:
        image: /images/user-guide/integrations/sia-connect/adding-opc-ua-device-instance-1-paas.png
        title: 'Go to "<b>Instance</b>" tab in the side menu and click "<b>+ Add new instance</b>" button;'
    1:
        image: /images/user-guide/integrations/sia-connect/adding-opc-ua-device-instance-2-paas.png
        title: 'Fill in the "<b>Name</b>" field by "<b>OPC-UA Device</b>" value, and "<b>“Address</b>" field by "<b>opc.tcp://127.0.0.1:4840/freeopcua/server/</b>" value. Also, don’t forget to disable security settings. Then, click the "<b>Save instance</b>" button;'
    2:
        image: /images/user-guide/integrations/sia-connect/adding-opc-ua-device-instance-3-paas.png
        title: 'OPC-UA Device instance added.'

adding-opc-ua-device-instance-2:
    0:
        image: /images/user-guide/integrations/sia-connect/adding-opc-ua-device-instance-4-paas.png
        title: 'Click on "<b>+ New item</b>" in the "<b>Items</b>" section;'
    1:
        image: /images/user-guide/integrations/sia-connect/adding-opc-ua-device-instance-5-paas.png
        title: 'Fill in the "<b>Name</b>" field using the "<b>Temperature</b>" value, set the "<b>Read write</b>" field to "<b>Read only</b>" option, and fill in the "<b>Identifier</b>" field by "<b>ns=2;i=13</b>" value. Then, click the "<b>Save item</b>" button;'
    2:
        image: /images/user-guide/integrations/sia-connect/adding-opc-ua-device-instance-6-paas.png
        title: 'You will now see the "<b>Temperature</b>" item added.'

adding-opc-ua-device-instance-3:
    0:
        image: /images/user-guide/integrations/sia-connect/adding-opc-ua-device-instance-7-paas.png
        title: 'Add other items, such as "<b>Power</b>" and "<b>Humidity</b>".'

adding-thingsboard-instance-1:
    0:
        image: /images/user-guide/integrations/sia-connect/adding-thingsboard-instance-1-paas.png
        title: 'Go to the "<b>Instance</b>" tab in the side menu and click "<b>+ Add new instance</b>" button. Fill in the input fields "<b>Name</b>", "<b>Address</b>", "<b>Port</b>", "<b>Username</b>", "<b>Device id</b>", "<b>Password</b>" with the values shown in the screenshot below. Click "<b>Save instance</b>" button;'
    1:
        image: /images/user-guide/integrations/sia-connect/adding-thingsboard-instance-2-paas.png
        title: 'ThingsBoard instance has been added.'

adding-thingsboard-instance-2:
    0:
        image: /images/user-guide/integrations/sia-connect/adding-thingsboard-instance-3-paas.png
        title: 'Click on the "<b>+ New item</b>" in the "<b>Items</b>" section;'
    1:
        image: /images/user-guide/integrations/sia-connect/adding-thingsboard-instance-4-paas.png
        title: 'Set "<b>Read write</b>" select field to "<b>Write only</b>" option, fill in "<b>Topic</b>" field by "<b>v1/devices/me/telemetry</b>" value and "<b>Input template</b>" field by "<b>{%ITEM.NAME%: %VALUE%}</b>" value. Click on "<b>Save item</b>" button. Publish data item has been added.'

adding-thingsboard-instance-3:
    0:
        image: /images/user-guide/integrations/sia-connect/adding-thingsboard-instance-5-paas.png
        title: 'Click on the "<b>+ New mapping</b>" in the "<b>Mappings on ThingsBoard</b>" section;'
    1:
        image: /images/user-guide/integrations/sia-connect/adding-thingsboard-instance-6-paas.png
        title: 'For "<b>Sender Item</b>" select "<b>OPC-UA Device</b>" as instance and "<b>Temperature</b>" as "<b>Item</b>". For "<b>Receiver item</b>" select "<b>ThingsBoard</b>" as "<b>Instance</b>" and "<b>Publish data</b>" as "<b>Item</b>". Click on "<b>Save mapping</b>" button. Mapping has been added.'

adding-thingsboard-instance-4:
    0:
        image: /images/user-guide/integrations/sia-connect/adding-thingsboard-instance-7-paas.png
        title: 'Add other mappings, such as "<b>Power</b>" and "<b>Humidity</b>".'
  
check-data-on-thingsboard:
    0:
        image: /images/user-guide/integrations/sia-connect/check-data-on-thingsboard-1-paas.png
        title: 'Navigate to the "<b>Devices</b>" page of the "<b>Entities</b>" section of your <b>ThingsBoard</b> instance, and click on the OPC-UA Device row in the table to open device details. Navigate to the "<b>Latest telemetry</b>" tab. You must see incoming data.'

shared-attributes:
    0:
        image: /images/user-guide/integrations/sia-connect/shared-attributes-1-paas.png
        title: 'Go to the "<b>Instance</b>" tab in the side menu and select "<b>ThingsBoard</b>";'
    1:
        image: /images/user-guide/integrations/sia-connect/shared-attributes-2-paas.png
        title: 'Click on the "<b>+ New item</b>" in the "<b>Items</b>" section;'
    2:
        image: /images/user-guide/integrations/sia-connect/shared-attributes-3-paas.png
        title: 'Fill the "<b>Name</b>" field by "<b>Shared attribute update</b>" value, set "<b>Read write</b>" select field to "<b>Read only</b>" option, and fill in "<b>Topic</b>" field by "<b>v1/devices/me/attributes</b>" value. Click on "<b>Save item</b>" button. Item has been added.'

status-attributes:
    0:
        image: /images/user-guide/integrations/sia-connect/status-attributes-1-paas.png
        title: 'Go to the "<b>Instance</b>" tab in the side menu and select <b>OPC-UA Device</b>;'
    1:
        image: /images/user-guide/integrations/sia-connect/status-attributes-2-paas.png
        title: 'Click on the "<b>+ New item</b>" in the "<b>Items</b>" section;'
    2:
        image: /images/user-guide/integrations/sia-connect/status-attributes-3-paas.png
        title: 'Fill in "<b>Name</b>" field with "<b>Status</b>" value, set "<b>Read write</b>" select field to "<b>Read and Write</b>", fill in "<b>Post-processing (reading)</b>" field by <b>“%VALUE%”</b>, and fill in "<b>Identifier</b>" field by "<b>ns=4;s=Status_s</b>". Click on "<b>Save item</b>" button. Item added.'

create-another-mapping:
    0:
        image: /images/user-guide/integrations/sia-connect/create-another-mapping-1-paas.png
        title: 'On the <b>ThingsBoard</b> instance, scroll down to "<b>Mappings</b>" section and click on "<b>+ New Mapping</b>" button;'
    1:
        image: /images/user-guide/integrations/sia-connect/create-another-mapping-2-paas.png
        title: 'For "<b>Sender Item</b>" select "<b>ThingsBoard</b>" as instance and "<b>Shared attribute update</b>" as "<b>Item</b>". For "<b>Receiver item</b>" select "<b>OPC-UA Device</b>" as instance and "<b>Status</b>" as "<b>Item</b>". Paste "<b>%VALUE.status%</b>" to the "<b>Custom value</b>" field. Click on "<b>Save mapping</b>" button;'

shared-attribute-on-device:
    0:
        image: /images/user-guide/integrations/sia-connect/shared-attribute-on-device-1-paas.png
        title: 'Go to the "<b>Devices</b>" tab on the left side menu bar. Click on "<b>OPC-UA Device</b>", and navigate to the "<b>Attributes</b>" tab. Select "<b>Shared attributes</b>" from dropdown field, and click on "<b>plus</b>" button for create new one;'
    1:
        image: /images/user-guide/integrations/sia-connect/shared-attribute-on-device-2-paas.png
        title: 'Fill in "<b>Key</b>" field by "<b>status</b>" value, and select "<b>Boolean</b>" data type from dropdown field. Then, click on "<b>Add</b>";'
    2:
        image: /images/user-guide/integrations/sia-connect/shared-attribute-on-device-3-paas.png
        title: 'Shared attribute has been added.'

import-dashboard:
    0:
        image: /images/user-guide/integrations/sia-connect/import-dashboard-1-paas.png
        title: 'Go to the "<b>Dashboard</b>" page of your "<b>ThingsBoard</b>" instance. By default, you will be redirected to the "<b>All</b>" device group. Click on the "<b>plus</b>" icon in the top right corner of the table and then select "<b>Import dashboard</b>" from drop-down menu;'
    1:
        image: /images/user-guide/integrations/sia-connect/import-dashboard-2-paas.png
        title: 'In the import dashboard window, upload the previously downloaded dashboard configuration JSON file, and click "<b>Import</b>";'
    2:
        image: /images/user-guide/integrations/sia-connect/import-dashboard-3-paas.png
        title: 'You have successfully imported a dashboard. You should open it.'

change-entity-alias-1:
    0:
        image: /images/user-guide/integrations/sia-connect/change-entity-alias-1-paas.png
        title: 'Enter dashboard editing mode;'
    1:
        image: /images/user-guide/integrations/sia-connect/change-entity-alias-2-paas.png
        title: 'Click the "Entity aliases" icon;'
    2:
        image: /images/user-guide/integrations/sia-connect/change-entity-alias-3-paas.png
        title: 'In the opened "<b>Entity aliases</b>" window click the "<b>Edit alias</b>" icon opposite the "<b>OPC-UA Device</b>" alias;'
    3:
        image: /images/user-guide/integrations/sia-connect/change-entity-alias-4-paas.png
        title: 'In the opened "<b>Edit alias</b>" dialog, specify your <b>OPC-UA Device</b>. A filter type should be "<b>Single entity</b>". Click the "<b>Save</b>" button;'
    4:
        image: /images/user-guide/integrations/sia-connect/change-entity-alias-5-paas.png
        title: 'Click "<b>Save</b>" in the lower right corner of the dialog box;'
    5:
        image: /images/user-guide/integrations/sia-connect/change-entity-alias-6-paas.png
        title: 'Save the dashboard.'

visualize-data-on-thingsboard:
    0:
        image: /images/user-guide/integrations/sia-connect/change-entity-alias-7-paas.png

---

{% assign docsPrefix = "pe/" %}
{% include docs/samples/sia-connect.md %}