---
layout: docwithnav-pe-mqtt-broker
title: MQTT Integration
description: TBMQ MQTT integration guide

add-mqtt-integration:
  0:
    image: /images/pe/mqtt-broker/user-guide/ui/add-http-integration-1.png
    title: 'Navigate to the "Integrations" page, and click "plus" icon to add a new integration.'
  1:
    image: /images/pe/mqtt-broker/user-guide/ui/add-mqtt-integration-2.png
    title: 'Select "MQTT" as the integration type and click "Next".'
  2:
    image: /images/pe/mqtt-broker/user-guide/ui/add-mqtt-integration-3.png
    title: 'Change default topic filter to "tbmq/mqtt-integration" and click "Next".'
  3:
    image: /images/pe/mqtt-broker/user-guide/ui/add-mqtt-integration-4.png
    title: 'Specify external broker "Host", "Port", "Credentials" and "Topic name". Then click "Add".'

send-uplink-message:
  0:
    image: /images/pe/mqtt-broker/user-guide/ui/send-uplink-message-1.png
    title: 'Navigate to the "WebSocket Client" page, select working connection, then click "Connect".'
  1:
    image: /images/pe/mqtt-broker/user-guide/ui/send-mqtt-message-2.png
    title: 'Set topic name as "tbmq/mqtt-integration", and click "Send" to publish message.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/mqtt-broker/integrations/mqtt.md %}
