---
layout: docwithnav-pe
title: MQTT Integration
description: MQTT Integration guide
create_dashboard:
    0:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-1-pe.png
        title: 'Go to Dashboards page and create a new dashboard named MQTT RPC. Open this dashboard;'
    1:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-2-pe.png
        title: 'Add an alias by clicking on Entity Aliases icon on the top-right. Name the alias (Sensor, for example), select filter type "Single Entity", type "Device" and choose our SN-001 sensor. Press Add and then Save;'
    2:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-4-pe.png
        title: 'Now Add New Widget;'
    3:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-5-pe.png
        title: 'Select Control Widgets from drop down menu;'
    4:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-6-pe.png
        title: 'Select Knob Control widget;'
    5:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-7-pe.png
        title: 'On the Data field select created alias (Sensor). Set Number of digits after floating point to 0;'
    6:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-8-pe.png
        title: 'Go to Advanced tab and set Minimum value to 15 and Maximum value to 45. Leave the rest by default. Click Add to create widget;'
    7:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-9-pe.png
        title: 'Save the changes to the dashboard.'

edit_rule_node:
    0:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-edit-message-type-switch-1-pe.png
    1:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-edit-message-type-switch-2-pe.png
    2:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-edit-message-type-switch-3-pe.png

incoming_messages:
    0:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-incoming-messages-2-pe.png
    1:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-incoming-messages-3-pe.png

add_rule_node:
    0:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-integration-downlink-node-1-pe.png
    1:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-integration-downlink-node-2-pe.png
    2:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-integration-downlink-node-3-pe.png

---
{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsTag="pe" %}
{% include docs/pe/user-guide/integrations/mqtt.md %}
