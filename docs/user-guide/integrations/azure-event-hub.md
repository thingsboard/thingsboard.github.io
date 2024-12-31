---
layout: docwithnav-pe
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
        title: 'In the Azure portal, click the "Subscriptions";'
    1:
        image: https://img.thingsboard.io/user-guide/integrations/azure-event-hub/storage-connection-string-2.png
        title: 'Go to the "Access keys" page of the "Security + networking" section. Here you will find the connection string.'

event-hub-compatible-endpoint:
    0:
        image: https://img.thingsboard.io/azure-event-hub/built_in_endpoints.png
        title: 'In the Azure portal, navigate to the "IoT Hub" resource, and open the "Built-in endpoints" page from the context menu;'
    1:
        image: https://img.thingsboard.io/azure-event-hub/event_hub_compatible_endpoint.png
        title: 'Copy and save the "Event Hub-compatible endpoint" value.'

generator:
    0: 
        image: https://img.thingsboard.io/azure-event-hub/rule_chain_generator.png

primary_key:
    0: 
        image: https://img.thingsboard.io/azure-event-hub/your_devices.png
    1: 
        image: https://img.thingsboard.io/azure-event-hub/primary_key.png

iot_rule_node:
    0:
        image: https://img.thingsboard.io/azure-event-hub/rule_chain_azure_iot_hub.png

generator_iot_rule_chain:
    0:
        image: https://img.thingsboard.io/azure-event-hub/rule_chain_generator_and_azure_iot_hub.png

event_uplink:
    0:
        image: https://img.thingsboard.io/azure-event-hub/integrations_events_uplink.png

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
{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsTag="pe" %}
{% include docs/pe/user-guide/integrations/azure-event-hub.md %}
