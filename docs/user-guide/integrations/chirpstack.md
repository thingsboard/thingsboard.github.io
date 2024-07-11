---
layout: docwithnav-pe 
title: ChirpStack Integration 
description: ChirpStack Integration Guide 

api-keys:
    0:
        image: /images/user-guide/integrations/chirpstack/chirpstack-api-key-1.png
        title: Open API keys
    1:
        image: /images/user-guide/integrations/chirpstack/chirpstack-api-key-2.png
        title: Create API key
    2:
        image: /images/user-guide/integrations/chirpstack/chirpstack-api-key-3.png
        title: Copy created API key

configure-chirpstack-integration:
    0:
        image: /images/user-guide/integrations/chirpstack/chirpstack-configure-integration-1.png
        title: Go to the <b>Applications</b> page in the left menu of the ChirpStack Network server user interface, and click "<b>Add application</b>" button;
    1:
        image: /images/user-guide/integrations/chirpstack/chirpstack-configure-integration-2.png
        title: Named it and click "<b>Submit</b>" button;
    2:
        image: /images/user-guide/integrations/chirpstack/chirpstack-configure-integration-3.png
        title: Application created. Now, navigate to the "<b>Integrations</b>" tab;
    3:
        image: /images/user-guide/integrations/chirpstack/chirpstack-configure-integration-4.png
        title: Find and add a <b>HTTP</b> integration by clicking "<b>+</b>" icon;
    4:
        image: /images/user-guide/integrations/chirpstack/chirpstack-configure-integration-5.png
        title: Fill in the field with the "<b>HTTP endpoint URL</b>" previously copied from the ChirpStack integration in the ThingsBoard;
    5:
        image: /images/user-guide/integrations/chirpstack/chirpstack-configure-integration-6.png
        title: HTTP integration created.

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
{% assign docsPrefix = "pe/" %}
{% include docs/pe/user-guide/integrations/chirpstack.md %}

