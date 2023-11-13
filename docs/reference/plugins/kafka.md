---
layout: docwithnav
assignees:
- ashvayka
title: Kafka Plugin

---

{% include templates/old-guide-notice.md %}

## Overview

Kafka plugin is responsible for sending messages to Kafka brokers triggered by specific rules

## Configuration

You can specify following configuration parameters:

 - *bootstrap servers* - list of kafka brokers
 - *number of attempts to reconnect to kafka if connection fails*
 - *number of messages to unit into batch on client*
 - *time to buffer locally before sending to kafka broker (in ms)*
 - *buffer max size on client*
 - *minimum number of replicas that must acknowledge a write*
 - *topic key serializer* by default - org.apache.kafka.common.serialization.StringSerializer
 - *topic value serializer* by default - org.apache.kafka.common.serialization.StringSerializer
 - any other additional properties could be provided for kafka broker connection

## Server-side API

This plugin does not provide any server-side API.

## Example

In this example, we are going to demonstrate how you can configure this extension to be able to send a message to Kafka topic every time new telemetry message for the device arrives.

Prerequisites before contining Kafka extension configuration:

 - Kafka broker is up and running
 - Appropriate Kafka Topic created
 - ThingsBoard is up and running

### Kafka Plugin Configuration

Let's configure Kafka plugin first. Go to *Plugins* menu and create new plugin:

![image](/images/reference/plugins/kafka/kafka-plugin-config-1.png)

![image](/images/reference/plugins/kafka/kafka-plugin-config-2.png)

Please set correctly Kafka Bootstrap Servers URL and any other parameters located in plugin configuration section that is suitable for your case so Kafka extension is able to connect to Kafka broker.

Click on *'Activate'* plugin button:

![image](/images/reference/plugins/kafka/kafka-activate-plugin.png)

### Kafka Rule Configuration

Now it's time to create appropriate Rule.

![image](/images/reference/plugins/kafka/kafka-rule-config.png)

Add filter for **POST_TELEMETRY** message type:

![image](/images/reference/plugins/post-telemetry-filter.png)

Click *'Add'* button to add filter.

Then select *'Kafka Plugin'* in the drop-down box for the Plugin field:

![image](/images/reference/plugins/kafka/kafka-plugin-selection.png)

Add action that will send temperature telemetry of device to particular kafka topic:

![image](/images/reference/plugins/kafka/send-temp-telemetry.png)

Click *'Add'* button and then activate Rule.

### Sending Temperature Telemetry

Now you can send Telemetry message that contains *'temp'* telemetry for any of your devices:

```json
{"temp":73.4}
```

You should see **'73.4'** message in appropriate Kafka topic once you'll post this message.

Here is an example of a command that publish single telemetry message to locally installed ThingsBoard:

```bash
mosquitto_pub -d -h "localhost" -p 1883 -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m '{"temp":73.4}'
```
