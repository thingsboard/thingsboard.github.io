---
layout: docwithnav-paas-eu
title: Azure Event Hub Integration
description: Azure Event Hub Integration Guide 
create_eventhub: 
    0: 
        image: /images/azure-event-hub/create_a_resource.png
    1:
        image: /images/azure-event-hub/select_iot_hub.png
    2:
        image: /images/azure-event-hub/create_iot_hub.png
    3:
        image: /images/azure-event-hub/basics_iot_hub.png
    4:
        image: /images/azure-event-hub/create_basics_iot_hub.png
    5:
        image: /images/azure-event-hub/deployment_is_in_progress.png
    6:
        image: /images/azure-event-hub/go_to_resource.png

create_device:
    0:
        image: /images/azure-event-hub/iot_devices.png
    1:
        image: /images/azure-event-hub/iot_devices_new.png
    2:
        image: /images/azure-event-hub/save_device_id.png
    3:
        image: /images/azure-event-hub/your_devices.png

uplink_converter:
    0:
        image: /images/azure-event-hub/create_uplink_converter.png

integration:
    0: 
        image: /images/azure-event-hub/built_in_endpoints.png
    1:
        image: /images/azure-event-hub/event_hub_compatible_endpoint.png
    2: 
        image: /images/azure-event-hub/create_integration_tb.png
    3:
        image: /images/azure-event-hub/check_connection.png

generator:
    0: 
        image: /images/azure-event-hub/rule_chain_generator.png

primary_key:
    0: 
        image: /images/azure-event-hub/your_devices.png
    1: 
        image: /images/azure-event-hub/primary_key.png

iot_rule_node:
    0:
        image: /images/azure-event-hub/rule_chain_azure_iot_hub.png

generator_iot_rule_chain:
    0:
        image: /images/azure-event-hub/rule_chain_generator_and_azure_iot_hub.png

event_uplink:
    0:
        image: /images/azure-event-hub/integrations_events_uplink.png

downlink_first_part:
    0:
        image: /images/azure-event-hub/event_hub_compatible_name.png
    1:
        image: /images/azure-event-hub/create_downlink_converter.png
    2:
        image: /images/azure-event-hub/downlink_data_converter.png
    3:
        image: /images/azure-event-hub/iot_hub_name_required_for_downlink.png

device_groups_all:
    0:
        image: /images/azure-event-hub/device_groups_all_device profile.png
    1:
        image: /images/azure-event-hub/device_profiles_rule_chain.png
        

downlink_rule_node:
    0:
        image: /images/azure-event-hub/add_rule_node_integration_downlink.png
    1:
        image: /images/azure-event-hub/rule_chain_attributes_updated_and_downlink.png

device_last_part:
    0:
        image: /images/azure-event-hub/add_shared_attributes.png
    1:
        image: /images/azure-event-hub/integrations_events_downlink.png

advanced_testing:
    0:
        image: /images/azure-event-hub/iot_integration_first.png
    1:
        image: /images/azure-event-hub/iot_integration_second.png
    2:
        image: /images/azure-event-hub/uplink_received.png
    3:
        image: /images/azure-event-hub/uplink_message.png

downlink_result:
    0:
        image: /images/azure-event-hub/azure_cloud_to_device_message_count.png

solution_templates:
    0:
        image: /images/user-guide/integrations/loriot/solution_templates.png

---
{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/pe/user-guide/integrations/azure-event-hub.md %}
