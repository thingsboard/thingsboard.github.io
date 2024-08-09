---
layout: docwithnav-mqtt-broker
title: TBMQ Subscription plans definition
description: Features and advantages of TBMQ subscription payment model

---

TBMQ provides dedicated subscription plans based on the **pay-as-you-go** model.

### Limits

Please see table below to compare the limits of the subscription plans.

<table>
  <thead>
      <tr>
          <td><b>Parameter name</b></td>
          <td><b>Maker</b></td>
          <td><b>Prototype</b></td>
          <td><b>Startup</b></td>
          <td><b>Business</b></td>
          <td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Sessions</td>
          <td>1K</td>
          <td>2K</td>
          <td>5K</td>
          <td>10K</td>
          <td>Maximum number of client sessions (connected + persistent disconnected)</td>
      </tr>
      <tr>
          <td>TMPS</td>
          <td>1K</td>
          <td>2K</td>
          <td>5K</td>
          <td>10K</td>
          <td>Total number of messages processed per second (incoming + outgoing _MQTT_PUBLISH_ packets)</td>
      </tr>
      <tr>
          <td>Application clients</td>
          <td>5</td>
          <td>10</td>
          <td>25</td>
          <td>50</td>
          <td>Maximum number of [persistent](/docs/mqtt-broker/architecture/#persistent-client) Application clients</td>
      </tr>
      <tr>
          <td>Device persistent messages</td>
          <td>50</td>
          <td>100</td>
          <td>250</td>
          <td>500</td>
          <td>Maximum number of messages for Device persistent clients</td>
      </tr>
      <tr>
          <td>Application topic size</td>
          <td>1 GB</td>
          <td>1 GB</td>
          <td>1 GB</td>
          <td>1 GB</td>
          <td>Maximum topic size for Application client to store persisted messages</td>
      </tr>
      <tr>
          <td>Application topic TTL</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>"Time to live" parameter for data stored in Application topics</td>
      </tr>
      <tr>
          <td>Number of Device persisted messages per client</td>
          <td>100</td>
          <td>200</td>
          <td>5000</td>
          <td>1000</td>
          <td>Maximum number of persisted messages per Device client</td>
      </tr>
      <tr>
          <td>Device persisted messages TTL</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>"Time to live" parameter for data stored for Device persisted clients</td>
      </tr>
      <tr>
          <td>Session TTL</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>1 day</td>
          <td>"Time to live" parameter for persistent offline session</td>
      </tr>
      <tr>
          <td>Max in-flight messages</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>Max in-flight (unacknowledged) messages per client</td>
      </tr>
      <tr>
          <td>Stats TTL</td>
          <td>1 month</td>
          <td>1 month</td>
          <td>1 month</td>
          <td>1 month</td>
          <td>"Time to live" parameter for statistics persistence</td>
      </tr>
      <tr>
          <td>Max message size</td>
          <td>1 MB</td>
          <td>1 MB</td>
          <td>1 MB</td>
          <td>1 MB</td>
          <td>Maximum payload size of _MQTT_PUBLISH_ message</td>
      </tr>
      <tr>
          <td>Uptime SLA</td>
          <td>99.95%</td>
          <td>99.99%</td>
          <td>99.99%</td>
          <td>99.99%</td>
          <td>An Uptime SLA represents the percentage of time a service is expected to be fully operational and accessible</td>
      </tr>
  </tbody>
</table>

where "**K**" means 1 thousand, "**M**" means 1 million, "**B**" means 1 billion.
