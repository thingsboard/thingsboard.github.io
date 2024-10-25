---
layout: docwithnav-paas
title: MQTT Integration
description: MQTT Integration guide
create_dashboard:
    0:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-1-paas.png
        title: 'Go to Dashboards page and create a new dashboard named MQTT RPC. Open this dashboard;'
    1:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-2-paas.png
        title: 'Add an alias by clicking on Entity Aliases icon on the top-right. Name the alias (Sensor, for example), select filter type "Single Entity", type "Device" and choose our SN-001 sensor. Press Add and then Save;'
    2:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-4-paas.png
        title: 'Now Add New Widget;'
    3:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-5-paas.png
        title: 'Select Control Widgets from drop down menu;'
    4:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-6-paas.png
        title: 'Select Knob Control widget;'
    5:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-7-paas.png
        title: 'On the Data field select created alias (Sensor). Set Number of digits after floating point to 0;'
    6:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-8-paas.png
        title: 'Go to Advanced tab and set Minimum value to 15 and Maximum value to 45. Leave the rest by default. Click Add to create widget;'
    7:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-new-dashboard-9-paas.png
        title: 'Save the changes to the dashboard.'

edit_rule_node:
    0:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-edit-message-type-switch-1-paas.png
    1:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-edit-message-type-switch-2-paas.png
    2:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-create-edit-message-type-switch-3-paas.png

incoming_messages:
    0:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-incoming-messages-2.png
    1:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-incoming-messages-3.png

add_rule_node:
    0:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-integration-downlink-node-1.png
    1:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-integration-downlink-node-2.png
    2:
        image: /images/user-guide/integrations/mqtt/mqtt-integration-integration-downlink-node-3.png

---
{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/user-guide/integrations/mqtt.md %}
