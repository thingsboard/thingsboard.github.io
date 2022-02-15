---
layout: docwithnav-paas 
title: ChirpStack Integration 
description: ChirpStack Integration Guide 

uplink:
    0:
        image: /images/chirpstack/create-uplink.png
        title: Create uplink converter

api-keys:
    0:
        image: /images/chirpstack/chirpstack-api-keys.png
        title: Open API keys
    1:
        image: /images/chirpstack/chirpstack-api-keys-2.png
        title: Create API key
    2:
        image: /images/chirpstack/chirpstack-api-keys-3.png
        title: Copy created API key

integration:
    0:
        image: /images/chirpstack/create-integration.png
        title: Create integration

chirpstack_integration:
    0:
        image: /images/chirpstack/chirpstack-create-integration.png
        title: Create integration

    1:
        image: /images/chirpstack/chirpstack-integration-created.png
        title: Set integration name and endpoint url

uplink_message:
    0:
        image: /images/chirpstack/integration-uplink-message-event.png

device_groups:
    0:
        image: /images/chirpstack/groups-created-device.png
        title: Device **Device_1** was created

uplink_events:
    0:
        image: /images/chirpstack/converter-in-event.png
        title: Example of incoming data to converter from ChirpStack
    1:
        image: /images/chirpstack/converter-out-event.png
        title: Example of outgoing data from converter 

downlink:
    0:
        image: /images/chirpstack/create-downlink.png

downlink_rule_chain:
    0:
        image: /images/chirpstack/import-downlink-rule-chain.png
        title: Import downlink rule-chain 
    1:
        image: /images/chirpstack/imported-rule-chain.png
        title: Open integration downlink rule node configuration by pressing on pencil
    2:
        image: /images/chirpstack/edit-integration-downlink-rule-node.png
        title: Select your integration from the list, save rule node by pressing 
    3:
        image: /images/chirpstack/save-rule-chain.png
        title: Save rule chain by pressing on checkmark

root_rule_chain:
    0:
        image: /images/chirpstack/add-check-relation-node.png
        title: Add check relation rule-node
    1:
        image: /images/chirpstack/configure-check-relation-node.png
        title: Configure check relation rule-node
    2:
        image: /images/chirpstack/add-rule-chain-node.png
        title: Add rule-chain rule node, set the newly imported rule chain and save it by pressing on pencil icon
    3:
        image: /images/chirpstack/add-relation-to-rule-chain-node.png
        title: Add **"True"** relation to rule-chain node from check relation rule-node
    4:
        image: /images/chirpstack/save-root-rule-chain.png
        title: Save root rule-chain
                                
shared_attributes:
    0:
        image: /images/chirpstack/shared-attribute-downlink.png

downlink_events:
    0:
        image: /images/chirpstack/event_in.png
        title: Example of input to downlink converter
    1:
        image: /images/chirpstack/event_out.png
        title: Example of output from downlink converter

downlink_integration_event:
    0:
        image: /images/chirpstack/downlink-event.png
---
{% assign docsPrefix = "paas/" %}
{% include docs/pe/user-guide/integrations/chirpstack.md %}

