---
layout: docwithnav-mqtt-broker
title: TBMQ Private Cloud plans definition
description: Features and advantages of TBMQ Private Cloud payment model

---

TBMQ provides dedicated Private Cloud plans based on the **pay-as-you-go** model.

### Limits

Please see table below to compare the limits of the Private Cloud plans. The values are monthly limits, unless stated otherwise.

<table>
  <thead>
      <tr>
          <td><b>Parameter name</b></td>
          <td><b>Launch</b></td>
          <td><b>Growth</b></td>
          <td><b>Scale</b></td>
          <td><b>Enterprise</b></td>
          <td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Sessions</td>
          <td>2K</td>
          <td>4K</td>
          <td>20K</td>
          <td>Unlimited</td>
          <td>Maximum number of client sessions managed by the broker, including both active connections and persistent sessions that are temporarily disconnected but still maintained by the broker for quick reconnection. 
Once a session is expired or explicitly removed, it no longer counts toward the session limit and the slot becomes available for a new session</td>
      </tr>
      <tr>
          <td>Total msg/sec</td>
          <td>1K</td>
          <td>2K</td>
          <td>10K</td>
          <td>Unlimited</td>
          <td>Total throughput of messages processed per second, including both incoming and outgoing `MQTT_PUBLISH` packets. 
It does not include acknowledgment packets used in QoS 1 and 2 flows (such as `PUBACK`, `PUBREC`, etc.), nor other MQTT control packets like `CONNECT`, `SUBSCRIBE`, `UNSUBSCRIBE`, etc.</td>
      </tr>
      <tr>
          <td>Monthly traffic</td>
          <td>100GB</td>
          <td>200GB</td>
          <td>1TB</td>
          <td>Unlimited</td>
          <td>Monthly traffic refers to the total amount of data transmitted through the TBMQ broker, including both incoming and outgoing MQTT messages.
Traffic is measured as the sum of all MQTT packet payloads sent and received by clients. If the monthly allowance is exceeded, additional usage is billed at $0.15 per GB</td>
      </tr>
      <tr>
          <td>Applications / Integrations</td>
          <td>5</td>
          <td>10</td>
          <td>50</td>
          <td>Unlimited</td>
          <td>Maximum number of <a href="/docs/mqtt-broker/architecture/#persistent-client">persistent</a> Application clients and 
<a href="/docs/mqtt-broker/integrations/">Integrations</a> managed by the broker, including both connected and temporarily disconnected ones</td>
      </tr>
      <tr>
          <td>Application topic size</td>
          <td>1 GB</td>
          <td>1 GB</td>
          <td>1 GB</td>
          <td>Unlimited</td>
          <td>Maximum size of the Kafka topic used to store persisted messages for a disconnected Application client. Each client has a dedicated topic, and messages are retained until delivered or the size limit is reached</td>
      </tr>
      <tr>
          <td>Application topic TTL</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>Unlimited</td>
          <td>Time-to-live for messages stored in Kafka topics for Application clients. If a client remains disconnected beyond this period, undelivered messages will be discarded automatically</td>
      </tr>
      <tr>
          <td>Integration topic size</td>
          <td>1 GB</td>
          <td>1 GB</td>
          <td>1 GB</td>
          <td>Unlimited</td>
          <td>Maximum size of the Kafka topic used to store persisted messages for a disconnected Integration. Each Integration has a dedicated topic, and messages are retained until delivered or the size limit is reached</td>
      </tr>
      <tr>
          <td>Integration topic TTL</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>Unlimited</td>
          <td>Time-to-live for messages stored in dedicated Kafka topics for each Integration. If the Integration remains disconnected beyond this period, undelivered messages will be automatically discarded</td>
      </tr>
      <tr>
          <td>Message rate limits for default ('Device') persistent sessions</td>
          <td>50 per second</td>
          <td>100 per second</td>
          <td>500 per second</td>
          <td>Unlimited</td>
          <td>Total number of messages processed per second for all Device clients with persistent sessions. 
These clients are subscribers, and if they are offline, the messages are stored in Redis to be delivered when they reconnect</td>
      </tr>
      <tr>
          <td>Messages storage for default ('Device') persistent sessions</td>
          <td>100 per session</td>
          <td>200 per session</td>
          <td>1K per session</td>
          <td>Unlimited</td>
          <td>Maximum number of messages that can be stored for each Device client with a persistent session while it is offline. Once the limit is reached, older messages are dropped to make room for new ones</td>
      </tr>
      <tr>
          <td>Device persisted messages TTL</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>Unlimited</td>
          <td>"Time to live" parameter for messages stored for Device persisted clients while they are offline</td>
      </tr>
      <tr>
          <td>Stats TTL</td>
          <td>1 month</td>
          <td>1 month</td>
          <td>1 month</td>
          <td>Unlimited</td>
          <td>"Time to live" parameter for statistics persistence. This includes metrics visible on the UI: sessions, subscriptions, incoming messages, outgoing messages, etc.</td>
      </tr>
      <tr>
          <td>Session TTL</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>Unlimited</td>
          <td>"Time to live" parameter for persistent session that is disconnected. If a client remains disconnected beyond this duration, its session data will be automatically removed from the broker</td>
      </tr>
      <tr>
          <td>Client incoming messages rate limit</td>
          <td>Up to 10 per second, not exceeding 300 per minute</td>
          <td>Up to 10 per second, not exceeding 300 per minute</td>
          <td>Up to 10 per second, not exceeding 300 per minute</td>
          <td>Unlimited</td>
          <td>Total number of incoming messages per publisher client with any Quality of Service (QoS) level</td>
      </tr>
      <tr>
          <td>Client outgoing messages rate limit</td>
          <td>Up to 10 per second, not exceeding 300 per minute</td>
          <td>Up to 10 per second, not exceeding 300 per minute</td>
          <td>Up to 10 per second, not exceeding 300 per minute</td>
          <td>Unlimited</td>
          <td>Total number of outgoing messages per non-persistent subscriber client with Quality of Service (QoS) level equal to 0 ("AT_MOST_ONCE")</td>
      </tr>
      <tr>
          <td>In-flight messages per publisher</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>Unlimited</td>
          <td>Maximum number of incoming QoS 1 and QoS 2 messages from a publisher that can be awaiting acknowledgment. Acknowledgment is sent after the message is successfully persisted by the broker. 
If this limit is exceeded, the client is disconnected to prevent overload</td>
      </tr>
      <tr>
          <td>Client pre-connect messages</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>Unlimited</td>
          <td>Maximum number of messages the broker will queue per client during the connection handshake phase. If this limit is exceeded before the client completes the connection, the client will be disconnected</td>
      </tr>
      <tr>
          <td>Message size</td>
          <td>1 MB</td>
          <td>1 MB</td>
          <td>1 MB</td>
          <td>Unlimited</td>
          <td>Maximum size of the payload in an MQTT_PUBLISH packet that the broker will accept. Larger messages will be rejected unless using the Enterprise plan with custom limits</td>
      </tr>
      <tr>
          <td>Uptime SLA</td>
          <td>99.9%</td>
          <td>99.9%</td>
          <td>99.95%</td>
          <td>Custom</td>
          <td>Represents the percentage of time a broker is expected to be fully operational and accessible</td>
      </tr>
  </tbody>
</table>

where "**K**" means 1 thousand, "**M**" means 1 million, "**B**" means 1 billion.
