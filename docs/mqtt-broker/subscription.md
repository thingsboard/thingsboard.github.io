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
          <td>Maximum number of client sessions managed by the broker, including both connected sessions and persistent sessions that are temporarily disconnected but still maintained by the broker for quick reconnection</td>
      </tr>
      <tr>
          <td>Total msg/sec</td>
          <td>1K</td>
          <td>2K</td>
          <td>10K</td>
          <td>Unlimited</td>
          <td>Total throughput of messages processed per second, including both incoming and outgoing MQTT_PUBLISH packets. The acknowledgment packets to the MQTT_PUBLISH packets for QoS 1 and 2 levels are not included</td>
      </tr>
      <tr>
          <td>Integrations</td>
          <td>5</td>
          <td>10</td>
          <td>50</td>
          <td>Unlimited</td>
          <td>Maximum number of <a href="/docs/mqtt-broker/architecture/#persistent-client">persistent</a> Application clients and 
<a href="/docs/mqtt-broker/architecture/#persistent-client">Integrations</a> managed by the broker, including both connected and temporarily disconnected ones</td>
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
          <td>Device persistent messages rate limits</td>
          <td>50</td>
          <td>100</td>
          <td>500</td>
          <td>Unlimited</td>
          <td>Total number of messages processed per second for all Device persistent clients</td>
      </tr>
      <tr>
          <td>Application topic size</td>
          <td>1 GB</td>
          <td>1 GB</td>
          <td>1 GB</td>
          <td>Unlimited</td>
          <td>Maximum topic size for Application client to store persisted messages</td>
      </tr>
      <tr>
          <td>Application topic TTL</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>Unlimited</td>
          <td>"Time to live" parameter for messages stored in Application topics</td>
      </tr>
      <tr>
          <td>Integration topic size</td>
          <td>1 GB</td>
          <td>1 GB</td>
          <td>1 GB</td>
          <td>Unlimited</td>
          <td>Maximum topic size for Integration to store persisted messages</td>
      </tr>
      <tr>
          <td>Integration topic TTL</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>Unlimited</td>
          <td>"Time to live" parameter for messages stored in Integration topics</td>
      </tr>
      <tr>
          <td>Device persisted messages storage</td>
          <td>50</td>
          <td>100</td>
          <td>500</td>
          <td>Unlimited</td>
          <td>Maximum number of persisted messages per Device client</td>
      </tr>
      <tr>
          <td>Device persisted messages TTL</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>Unlimited</td>
          <td>"Time to live" parameter for messages stored for Device persisted clients</td>
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
          <td>"Time to live" parameter for persistent offline session. After this time the disconnected sessions will be deleted from the broker</td>
      </tr>
      <tr>
          <td>Client incoming messages rate limit</td>
          <td>Up to 10 per second, not exceeding 300 per minute</td>
          <td>Up to 10 per second, not exceeding 300 per minute</td>
          <td>Up to 10 per second, not exceeding 300 per minute</td>
          <td>Unlimited</td>
          <td>Total number of incoming messages per client</td>
      </tr>
      <tr>
          <td>Client outgoing messages rate limit</td>
          <td>Up to 10 per second, not exceeding 300 per minute</td>
          <td>Up to 10 per second, not exceeding 300 per minute</td>
          <td>Up to 10 per second, not exceeding 300 per minute</td>
          <td>Unlimited</td>
          <td>Total number of outgoing messages per non-persistent subscriber client with QoS = 0 ("AT_MOST_ONCE")</td>
      </tr>
      <tr>
          <td>In-flight messages</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>Unlimited</td>
          <td>Maximum number of in-flight (pending acknowledgment) messages allowed per client</td>
      </tr>
      <tr>
          <td>Client pre-connect messages</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>Unlimited</td>
          <td>Maximum queue size for messages received per client during the client's active connection period</td>
      </tr>
      <tr>
          <td>Message size</td>
          <td>1 MB</td>
          <td>1 MB</td>
          <td>1 MB</td>
          <td>Unlimited</td>
          <td>Maximum payload size of MQTT_PUBLISH packet</td>
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
