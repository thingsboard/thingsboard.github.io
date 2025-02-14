---
layout: docwithnav-paas-eu
title: Azure Event Hub Integration
description: Azure Event Hub Integration Guide 

create_eventhub: 
    0: 
        image: https://img.thingsboard.io/azure-event-hub/create_a_resource.png
        title: 'In the Azure portal, click on the "Create a resource" button;'
    1:
        image: https://img.thingsboard.io/azure-event-hub/select_iot_hub.png
        title: 'In the search field, type "IoT Hub" and select the matching item from the list;'
    2:
        image: https://img.thingsboard.io/azure-event-hub/create_iot_hub.png
        title: 'Click "Create";'
    3:
        image: https://img.thingsboard.io/azure-event-hub/basics_iot_hub.png
        title: 'On the configuration page, click "Create new", specify the resource group and IoT hub name, then click "Review + create";'
    4:
        image: https://img.thingsboard.io/azure-event-hub/create_basics_iot_hub.png
        title: 'On the next page, click "Create";'
    5:
        image: https://img.thingsboard.io/azure-event-hub/deployment_is_in_progress.png
        title: 'Wait for the deployment process to complete;'
    6:
        image: https://img.thingsboard.io/azure-event-hub/go_to_resource.png
        title: 'Click "Go to resource".'

create_device:
    0:
        image: https://img.thingsboard.io/azure-event-hub/iot_devices.png
        title: 'Navigate to the "IoT devices" page from the context menu;'
    1:
        image: https://img.thingsboard.io/azure-event-hub/iot_devices_new.png
        title: 'Click the "+ New" button;'
    2:
        image: https://img.thingsboard.io/azure-event-hub/save_device_id.png
        title: 'In the pop-up window, enter the "Device ID" and click "Save";'
    3:
        image: https://img.thingsboard.io/azure-event-hub/your_devices.png
        title: 'Great! You have successfully created your new device.'

container:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/azure-event-hub/container-1.png
        title: 'In the Azure portal, click the "Storage account";'
    1:
        image: https://img.thingsboard.io/user-guide/integrations/azure-event-hub/container-2.png
        title: 'Go to the "Containers" page of the "Data storage" section. Here you will find the container. Save its name.'

connection-string:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/azure-event-hub/storage-connection-string-1.png
        title: 'To find the storage connection string values, navigate to the "Access keys" page in the "Security + networking" section.'

event-hub-compatible-endpoint:
    0:
        image: https://img.thingsboard.io/azure-event-hub/built_in_endpoints.png
        title: 'In the Azure portal, navigate to the "IoT Hub" resource, and open the "Built-in endpoints" page from the context menu;'
    1:
        image: https://img.thingsboard.io/azure-event-hub/event_hub_compatible_endpoint.png
        title: 'Copy and save the "Event Hub-compatible endpoint" value.'

rule-chain-generator-node:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/azure-event-hub/test-azure-event-hub-integration-1-pe.png
        title: 'Go to the "<b>Rule chains</b>" page and select one of your rule chains. In the search nodes field, type &#39;gen&#39; to find the <b>generator</b> node in the menu. Drag it onto the canvas. In the pop-up window, specify the <b>name</b> of the generator, the <b>number of messages</b>, and the <b>generate function</b> (you can use our example). Finally, click "<b>Add</b>";'

primary-key:
    0:
        image: https://img.thingsboard.io/azure-event-hub/your_devices.png
        title: 'Now, find the device&#39;s <b>Primary key</b>. Go to the Azure portal, navigate to the <b>IoT devices</b> tab, and select your device;'
    1:
        image: https://img.thingsboard.io/azure-event-hub/primary_key.png
        title: 'Locate the "<b>Primary key</b>" field. Copy and save it for later use.'

rule-chain-iot-node:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/azure-event-hub/test-azure-event-hub-integration-2-pe.png
        title: 'Return to your ThingsBoard instance. We need to find another rule node. Type &#39;iot&#39; in the search nodes field and select the <b>azure iot hub</b> node. Drag it onto the canvas. In the pop-up window, specify the <b>node name</b>, replace <b>&#60;device_id&#62;</b> in the <b>Topic</b> with your Device Name, and enter the <b>Hostname</b> by retrieving it from the "<b>IoT Hub</b>" resource in the Azure portal. Enter the Device Name as the <b>Device ID</b> and add the <b>SAS Key</b> (<b>Primary Key</b>) that we previously copied from the device credentials. If you need to monitor events, enable Debug mode;'

link-generator-iot-nodes:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/azure-event-hub/test-azure-event-hub-integration-3-pe.png
        title: 'Connect the <b>generator</b> to the <b>azure iot hub</b>. Tap on the right grey circle of "<b>generator</b>" node and drag this circle to the left side of the <b>azure iot hub</b> node. Select the "<b>Success</b>" link and click "<b>Add</b>". <b>Save</b> the rule chain, and go to the integration;'

event-uplink:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/azure-event-hub/test-azure-event-hub-integration-4-pe.png
        title: 'Go to the "<b>Integrations</b>" page and select your <b>Azure Event Hub integration</b>. If you see a message of type "Uplink" in the "Events" section of your integration, everything is working correctly.'

event-hub-compatible-name:
    0:
        image: https://img.thingsboard.io/azure-event-hub/event_hub_compatible_name.png
        title: 'Open the Azure portal and navigate to the "IoT Hub" resource. Go to the "Built-in endpoints" page from the context menu. Find and copy the value of "Event Hub-compatible name" — this represents the IoT Hub name.'

adding-downlink-converter:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/azure-event-hub/adding-azure-event-hub-downlink-converter-1-pe.png
        title: 'Navigate to the "Integrations" page, select the Azure Event Hub integration to open its details, and click the "pencil" icon to enter editing mode;'
    1:
        image: https://img.thingsboard.io/user-guide/integrations/azure-event-hub/adding-azure-event-hub-downlink-converter-2-pe.png
        title: 'Provide a name for the downlink data converter and click "Create new converter";'
    2:
        image: https://img.thingsboard.io/user-guide/integrations/azure-event-hub/adding-azure-event-hub-downlink-converter-3-pe.png
        title: 'Paste the required script into the Encoder function section. Click "Add";'
    3:
        image: https://img.thingsboard.io/user-guide/integrations/azure-event-hub/adding-azure-event-hub-downlink-converter-4-pe.png
        title: 'In the advanced settings, add the "IoT Hub name" in the corresponding field. Click "Apply changes" to save the configuration.'

device_groups_all:
    0:
        image: https://img.thingsboard.io/azure-event-hub/device_groups_all_device profile.png
    1:
        image: https://img.thingsboard.io/azure-event-hub/device_profiles_rule_chain.png
        

downlink_rule_node:
    0:
        image: https://img.thingsboard.io/azure-event-hub/add_rule_node_integration_downlink.png
    1:
        image: https://img.thingsboard.io/azure-event-hub/rule_chain_attributes_updated_and_downlink.png

device_last_part:
    0:
        image: https://img.thingsboard.io/azure-event-hub/add_shared_attributes.png
    1:
        image: https://img.thingsboard.io/azure-event-hub/integrations_events_downlink.png

advanced_testing:
    0:
        image: https://img.thingsboard.io/azure-event-hub/iot_integration_first.png
    1:
        image: https://img.thingsboard.io/azure-event-hub/iot_integration_second.png
    2:
        image: https://img.thingsboard.io/azure-event-hub/uplink_received.png
    3:
        image: https://img.thingsboard.io/azure-event-hub/uplink_message.png

downlink_result:
    0:
        image: https://img.thingsboard.io/azure-event-hub/azure_cloud_to_device_message_count.png

solution_templates:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/use-solution-templates.png

---
{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/pe/user-guide/integrations/azure-event-hub.md %}
