---
layout: docwithnav-mqtt-broker
title: MQTT Options
description: MQTT Options configuration

---

* TOC
  {:toc}

## MQTT Options

**Note:** To change some server parameter you need to update the corresponding environment variable
(for example you can do it in `thingsboard-mqtt-broker.conf` file if you have standalone deployment).

## Advanced MQTT Options

<table>
  <thead>
      <tr>
          <td><b>Property</b></td><td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>mqtt.keep-alive.monitoring-delay-ms</td>
          <td>MQTT_KEEP_ALIVE_MONITORING_DELAY_MS</td>
          <td>100</td>
          <td>Time between subsequent checks for the non-active clients.</td>
      </tr>
      <tr>
          <td>mqtt.topic.max-segments-count</td>
          <td>MQTT_TOPIC_MAX_SEGMENTS_COUNT</td>
          <td>6000</td>
          <td>Maximum number of segments in topics. If it's too large, processing of topics with too much segments can lead to errors.</td>
      </tr>
      <tr>
          <td>mqtt.subscription-trie.wait-for-clear-lock-ms</td>
          <td>MQTT_SUB_TRIE_WAIT_FOR_CLEAR_LOCK_MS</td>
          <td>100</td>
          <td>Maximum pause for clearing subscription-storage from empty nodes.</td>
      </tr>
      <tr>
          <td>mqtt.subscription-trie.clear-nodes-cron</td>
          <td>MQTT_SUB_TRIE_CLEAR_NODES_CRON</td>
          <td>0 0 0 * * *</td>
          <td>Cron job to schedule clearing of empty subscription nodes. Defaults to 'every day at midnight'</td>
      </tr>
      <tr>
          <td>mqtt.subscription-trie.clear-nodes-zone</td>
          <td>MQTT_SUB_TRIE_CLEAR_NODES_ZONE</td>
          <td>UTC</td>
          <td>Timezone for the subscription clearing cron-job.</td>
      </tr>
      <tr>
          <td>mqtt.client-session-cleanup.cron</td>
          <td>MQTT_CLIENT_SESSION_CLEANUP_CRON</td>
          <td>0 0 1 * * *</td>
          <td>Cron job to schedule clearing of expired and not active client-sessions. Defaults to 'every day at 1 o'clock'</td>
      </tr>
      <tr>
          <td>mqtt.client-session-cleanup.zone</td>
          <td>MQTT_CLIENT_SESSION_CLEANUP_ZONE</td>
          <td>UTC/td>
          <td>Timezone for the client-sessions clearing cron-job.</td>
      </tr>
      <tr>
          <td>mqtt.client-session-cleanup.inactive-session-ttl</td>
          <td>MQTT_CLIENT_SESSION_CLEANUP_INACTIVE_SESSION_TTL</td>
          <td>604800/td>
          <td>TTL of inactive sessions. Defaults to one week.</td>
      </tr>
  </tbody>
</table>

## Device Persistence Options

<table>
  <thead>
      <tr>
          <td><b>Property</b></td><td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.limit</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_LIMIT</td>
          <td>1000/td>
          <td>Maximum number of PUBLISH messages stored for each persisted DEVICE client.</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.ttl</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_TTL</td>
          <td>604800/td>
          <td>TTL of persisted DEVICE messages in seconds. The current value corresponds to one week.</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.clean-up-cron</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_CLEAN_UP_CRON</td>
          <td>0 0 2 * * */td>
          <td>Cron job to schedule clearing of outdated persisted DEVICE messages. Defaults to 'every day at 2 o'clock'.</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.clean-up-zone</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_CLEAN_UP_ZONE</td>
          <td>UTC/td>
          <td>Timezone for the DEVICE messages clearing cron-job.</td>
      </tr>
  </tbody>
</table>


## Application Persistence Options

For the **APPLICATION** clients messages are persisted in Kafka topic,
so to configure maximum amount of stored messages you can change the properties of the topic.

To alter time till expiration and amount of persisted messages you can configure the following properties:
- `retention.ms` - TTL of the persisted messages
- `retention.bytes` - maximum amount of data (in bytes) stored in the Kafka topic

<table>
  <thead>
      <tr>
          <td><b>Property</b></td><td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>queue.kafka.application-persisted-msg.topic-properties</td>
          <td>TB_KAFKA_APP_PERSISTED_MSG_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;replication.factor:1/td>
          <td>Properties of the APPLICATION persistence topic.</td>
      </tr>
  </tbody>
</table>