---
layout: docwithnav-pe-mqtt-broker
title: Kafka Integration
description: TBMQ Kafka integration guide

add-kafka-integration:
  0:
    image: /images/pe/mqtt-broker/user-guide/ui/add-http-integration-1.png
    title: 'Navigate to the "Integrations" page, and click "plus" icon to add a new integration.'
  1:
    image: /images/pe/mqtt-broker/user-guide/ui/add-kafka-integration-2.png
    title: 'Select "HTTP" as the integration type and click "Next".'
  2:
    image: /images/pe/mqtt-broker/user-guide/ui/add-http-integration-3.png
    title: 'Click "Next" to subscribe to the default topic "tbmq/#".'

kafka-integration-docker:
  0:
    image: /images/pe/mqtt-broker/user-guide/ui/add-kafka-integration-4.png
    title: 'Specify bootstrap servers that you are going to connect to, and if required, add Other properties key value pairs'

kafka-integration-cloud-server:
  0:
    image: /images/mqtt-broker/user-guide/ui/kafka-integration-cloud-server-1.png
  1:
    image: /images/pe/mqtt-broker/user-guide/ui/kafka-integration-cloud-server-2.png

kafka-integration-cloud-properties:
  0:
    image: /images/mqtt-broker/user-guide/ui/kafka-integration-cloud-properties-1.png
  1:
    image: /images/mqtt-broker/user-guide/ui/kafka-integration-cloud-properties-2.png
  2:
    image: /images/mqtt-broker/user-guide/ui/kafka-integration-cloud-properties-3.png
  3:
    image: /images/pe/mqtt-broker/user-guide/ui/kafka-integration-cloud-properties-4.png

kafka-integration-cloud-topic:
  0:
    image: /images/mqtt-broker/user-guide/ui/kafka-integration-cloud-topic-1.png
  1:
    image: /images/mqtt-broker/user-guide/ui/kafka-integration-cloud-topic-2.png
  2:
    image: /images/mqtt-broker/user-guide/ui/kafka-integration-cloud-topic-3.png

send-uplink-message-kafka:
  0:
    image: /images/pe/mqtt-broker/user-guide/ui/send-uplink-message-1.png
    title: 'Navigate to the "WebSocket Client" page, select working connection, then click "Connect".'
  1:
    image: /images/pe/mqtt-broker/user-guide/ui/send-uplink-message-kafka-1.png
    title: 'Set topic name as "tbmq/kafka-integration", and click "Send" to publish message.'
  2:
    image: /images/mqtt-broker/user-guide/ui/send-uplink-message-kafka-2.png
    title: 'In the Confluent Cloud open Topics and click on the topic "tbmq.messages".'
  3:
    image: /images/mqtt-broker/user-guide/ui/send-uplink-message-kafka-3.png
    title: 'The message from the TBMQ Kafka integration should be available in the messages table.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/mqtt-broker/integrations/kafka.md %}
