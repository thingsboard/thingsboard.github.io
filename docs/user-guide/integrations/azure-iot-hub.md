---
layout: docwithnav-pe
title: Azure IoT Hub Integration
description: Azure IoT Hub Integration Guide
create_eventhub:
    0:
        image: /images/user-guide/integrations/azure-iot-hub/create_a_resource-1.png
    1:
        image: /images/user-guide/integrations/azure-iot-hub/create_a_resource-2.png
    2:
        image: /images/user-guide/integrations/azure-iot-hub/create_a_resource-3.png
    3:
        image: /images/user-guide/integrations/azure-iot-hub/create_a_resource-4.png
    4:
        image: /images/user-guide/integrations/azure-iot-hub/create_a_resource-5.png
    5:
        image: /images/user-guide/integrations/azure-iot-hub/create_a_resource-6.png
    6:
        image: /images/user-guide/integrations/azure-iot-hub/create_a_resource-7.png

create_device:
    0:
        image: /images/user-guide/integrations/azure-iot-hub/create-iot_devices-1.png
    1:
        image: /images/user-guide/integrations/azure-iot-hub/create-iot_devices-2.png
    2:
        image: /images/user-guide/integrations/azure-iot-hub/create-iot_devices-3.png
    3:
        image: /images/user-guide/integrations/azure-iot-hub/create-iot_devices-4.png

uplink_converter:
    0:
        image: /images/azure-event-hub/create_uplink_converter.png

integration:
    0:
        image: /images/user-guide/integrations/azure-iot-hub/create_iot_hub_integration_tb-2.png
    1:
        image: /images/user-guide/integrations/azure-iot-hub/create_iot_hub_integration_tb-1.png
    2:
        image: /images/user-guide/integrations/azure-iot-hub/create_iot_hub_integration_tb-3.png
    3:
        image: /images/user-guide/integrations/azure-iot-hub/create_iot_hub_integration_tb-4.png

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
        image: /images/loriot/solution_templates.png


---
{% assign docsPrefix = "pe/" %}
{% include docs/pe/user-guide/integrations/azure-iot-hub.md %}
