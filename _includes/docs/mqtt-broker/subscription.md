TBMQ Professional Edition provides dedicated [Private Cloud](/pricing/?section=tbmq-options&product=tbmq-private-cloud) instances based on a **flexible, pay-as-you-go model**. 
Our interactive calculator allows you to define your exact capacity, ensuring you only pay for the performance and scale you need. 
Once your core capacity is set, your private broker instance operates under the following **default and configurable limits**. 
The values are monthly limits, unless stated otherwise.

<table>
  <thead>
      <tr>
          <td><b>Parameter name</b></td>
          <td><b>Value</b></td>
          <td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Sessions</td>
          <td>From 5K to Unlimited</td>
          <td>Maximum number of client sessions managed by the broker, including both active connections and persistent sessions that are temporarily disconnected but still maintained by the broker for quick reconnection. 
Once a session is expired or explicitly removed, it no longer counts toward the session limit and the slot becomes available for a new session</td>
      </tr>
      <tr>
          <td>Throughput (msg/sec)</td>
          <td>From 1K to Unlimited</td>
          <td>Total throughput of messages processed per second, including both incoming and outgoing `MQTT_PUBLISH` packets. 
It does not include acknowledgment packets used in QoS 1 and 2 flows (such as `PUBACK`, `PUBREC`, etc.), nor other MQTT control packets like `CONNECT`, `SUBSCRIBE`, `UNSUBSCRIBE`, etc.</td>
      </tr>
      <tr>
          <td>Monthly traffic</td>
          <td>From 200 GB to Unlimited</td>
          <td>Monthly traffic refers to the total amount of data transmitted through the TBMQ broker, including both incoming and outgoing MQTT messages.
Traffic is measured as the sum of all MQTT packet payloads sent and received by clients. If the monthly allowance is exceeded, additional usage is billed at $0.1 per GB</td>
      </tr>
      <tr>
          <td>Application topic size</td>
          <td>1 GB</td>
          <td>Maximum size of the Kafka topic used to store persisted messages for a disconnected Application client. Each client has a dedicated topic, and messages are retained until delivered or the size limit is reached</td>
      </tr>
      <tr>
          <td>Application topic TTL</td>
          <td>1 day</td>
          <td>Time-to-live for messages stored in Kafka topics for Application clients. If a client remains disconnected beyond this period, undelivered messages will be discarded automatically</td>
      </tr>
      <tr>
          <td>Integration topic size</td>
          <td>1 GB</td>
          <td>Maximum size of the Kafka topic used to store persisted messages for a disconnected Integration. Each Integration has a dedicated topic, and messages are retained until delivered or the size limit is reached</td>
      </tr>
      <tr>
          <td>Integration topic TTL</td>
          <td>1 day</td>
          <td>Time-to-live for messages stored in dedicated Kafka topics for each Integration. If the Integration remains disconnected beyond this period, undelivered messages will be automatically discarded</td>
      </tr>
      <tr>
          <td>Messages storage for default ('Device') persistent sessions</td>
          <td>100 per session</td>
          <td>Maximum number of messages that can be stored for each Device client with a persistent session while it is offline. Once the limit is reached, older messages are dropped to make room for new ones</td>
      </tr>
      <tr>
          <td>Device persisted messages TTL</td>
          <td>1 day</td>
          <td>"Time to live" parameter for messages stored for Device persisted clients while they are offline</td>
      </tr>
      <tr>
          <td>Stats TTL</td>
          <td>1 month</td>
          <td>"Time to live" parameter for statistics persistence. This includes metrics visible on the UI: sessions, subscriptions, incoming messages, outgoing messages, etc.</td>
      </tr>
      <tr>
          <td>Session TTL</td>
          <td>1 day</td>
          <td>"Time to live" parameter for the persistent session that is disconnected. If a client remains disconnected beyond this duration, its session data will be automatically removed from the broker</td>
      </tr>
      <tr>
          <td>Client incoming messages rate limit</td>
          <td>Up to 50 per second, not exceeding 3000 per minute</td>
          <td>Total number of incoming messages per publisher client with any Quality of Service (QoS) level</td>
      </tr>
      <tr>
          <td>Client outgoing messages rate limit</td>
          <td>Up to 50 per second, not exceeding 3000 per minute</td>
          <td>Total number of outgoing messages per non-persistent subscriber client with Quality of Service (QoS) level equal to 0 ("AT_MOST_ONCE")</td>
      </tr>
      <tr>
          <td>In-flight messages per publisher</td>
          <td>100</td>
          <td>Maximum number of incoming QoS 1 and QoS 2 messages from a publisher that can be awaiting acknowledgment. Acknowledgment is sent after the message is successfully persisted by the broker. 
If this limit is exceeded, the client is disconnected to prevent overload</td>
      </tr>
      <tr>
          <td>Client pre-connect messages</td>
          <td>100</td>
          <td>Maximum number of messages the broker will queue per client during the connection handshake phase. If this limit is exceeded before the client completes the connection, the client will be disconnected</td>
      </tr>
      <tr>
          <td>Message size</td>
          <td>1 MB</td>
          <td>Maximum size of the payload in an MQTT_PUBLISH packet that the broker will accept. Larger messages will be rejected</td>
      </tr>
      <tr>
          <td>Uptime SLA</td>
          <td>99.9% or 99.99%</td>
          <td>Represents the percentage of time a broker is expected to be fully operational and accessible</td>
      </tr>
  </tbody>
</table>

where "**K**" means 1 thousand, "**M**" means 1 million, "**B**" means 1 billion.
