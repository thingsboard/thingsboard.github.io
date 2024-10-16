---
layout: docwithnav-paas 
title: ChirpStack Integration 
description: ChirpStack Integration Guide 

api-keys:
    0:
        image: /images/user-guide/integrations/chirpstack/chirpstack-api-key-1.png
        title: 'Go to the "API keys" page, and click "Add API key";'
    1:
        image: /images/user-guide/integrations/chirpstack/chirpstack-api-key-2.png
        title: 'Enter API key name, and click "Submit";'
    2:
        image: /images/user-guide/integrations/chirpstack/chirpstack-api-key-3.png
        title: 'API key created. Copy API token.'

configure-chirpstack-integration:
    0:
        image: /images/user-guide/integrations/chirpstack/chirpstack-configure-integration-1.png
        title: 'Go to the "Applications" page in the left menu of the ChirpStack Network server user interface, and click "Add application" button;'
    1:
        image: /images/user-guide/integrations/chirpstack/chirpstack-configure-integration-2.png
        title: 'Named it and click "Submit" button;'
    2:
        image: /images/user-guide/integrations/chirpstack/chirpstack-configure-integration-3.png
        title: 'Application created. Now, navigate to the "Integrations" tab;'
    3:
        image: /images/user-guide/integrations/chirpstack/chirpstack-configure-integration-4.png
        title: 'Find and add a "HTTP" integration by clicking "+" icon;'
    4:
        image: /images/user-guide/integrations/chirpstack/chirpstack-configure-integration-5.png
        title: 'Fill in the field with the "HTTP endpoint URL" previously copied from the ChirpStack integration in the ThingsBoard. Then, click "Submit" button;'
    5:
        image: /images/user-guide/integrations/chirpstack/chirpstack-configure-integration-6.png
        title: 'HTTP integration created.'

device:
    0:
        image: /images/user-guide/integrations/chirpstack/device-created-1-pe.png
        title: 'When your device sends an uplink message, a new device will appear in the ThingsBoard user interface.'

uplink-message-in-integration:
    0:
        image: /images/user-guide/integrations/chirpstack/integration-uplink-message-event-1.png
        title: 'You will receive an uplink event in the ChirpStack integration.'
    1:
        image: /images/user-guide/integrations/chirpstack/integration-uplink-message-event-2.png
        title: ''

uplink-converter-events:
    0:
        image: /images/user-guide/integrations/chirpstack/converter-event-1-pe.png
        title: 'Received data can be viewed in the uplink converter. In the "In" and "Out" blocks of the "Events" tab;'
    1:
        image: /images/user-guide/integrations/chirpstack/converter-event-2-pe.png
        title: 'Incoming data to converter from ChirpStack'
    2:
        image: /images/user-guide/integrations/chirpstack/converter-event-3-pe.png
        title: 'Outgoing data from converter.'

solution-templates:
    0:
        image: /images/user-guide/integrations/http/http-solution-templates.png
        title: 'Outgoing data from converter.'

downlink-rule-chain:
    0:
        image: /images/user-guide/integrations/chirpstack/import-downlink-rule-chain-1.png
        title: 'Go to the "Rule Chains" page. To import this JSON file, click the + icon in the upper right corner of the screen and select "Import rule chain". Drag the downloaded JSON file into the import rule chain window. Click "Import";'
    1:
        image: /images/user-guide/integrations/chirpstack/import-downlink-rule-chain-2.png
        title: 'The "Downlink to Chirpstack" rule chain will open. Double-click on the "integration downlink" node;'
    2:
        image: /images/user-guide/integrations/chirpstack/import-downlink-rule-chain-4.png
        title: 'Specify ChirpStack integration in the "Integration" field;' 
    3:
        image: /images/user-guide/integrations/chirpstack/import-downlink-rule-chain-5.png
        title: 'Save rule chain by pressing on checkmark.'

root-rule-chain:
    0:
        image: /images/user-guide/integrations/chirpstack/edit-root-rule-chain-1.png
        title: 'Open the "Root Rule Chain", and find a "check relation presence" node;'
    1:
        image: /images/user-guide/integrations/chirpstack/edit-root-rule-chain-2.png
        title: 'Drag it to the rule chain. Name it "Check relation to ChirpStack integration", select the direction - "To originator", specify "ManagedByOriginator" relation type. Specify ChirpStack integration and click "Add";'
    2:
        image: /images/user-guide/integrations/chirpstack/edit-root-rule-chain-3.png
        title: 'Tap on a right grey circle of "message type switch" node and drag this circle to the left side of "check relation presence" node. Here, add the "Attributes Updated" link, and click "Add";'
    3:
        image: /images/user-guide/integrations/chirpstack/edit-root-rule-chain-4.png
        title: 'Find a "rule chain" node;'
    4:
        image: /images/user-guide/integrations/chirpstack/edit-root-rule-chain-5.png
        title: 'Drag it to the rule chain. Name it "Downlink to Chirpstack", specify "Downlink to Chirpstack" rule chain, and click "Add";'
    5:
        image: /images/user-guide/integrations/chirpstack/edit-root-rule-chain-6.png
        title: 'Tap on the right grey circle of the "check relation presence" node and drag this circle to left side of “rule chain” node. Here, select the "True" link, and click "Add". Finally, save Root Rule Chain.'

add-shared-attribute:
    0:
        image: /images/user-guide/integrations/chirpstack/add-shared-attribute-1.png
        title: 'Go to the "Devices" page. Select your device and navigate to the "Attributes" tab. Select "Shared attributes" and click on the "plus" icon to add new attribute. Then enter the attribute name and its value (for example, the key name is &#39;downlink&#39;, value: &#39;01040203&#39;) and click "Add".'

downlink-events:
    0:
        image: /images/user-guide/integrations/chirpstack/downlink-event-1.png
        title: 'Received data can be viewed in the downlink converter. In the "In" and "Out" blocks of the "Events" tab;'
    1:
        image: /images/user-guide/integrations/chirpstack/downlink-event-2.png
        title: 'Input data to downlink converter;'
    2:
        image: /images/user-guide/integrations/chirpstack/downlink-event-3.png
        title: 'Output data from downlink converter.'

---
{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/user-guide/integrations/chirpstack.md %}