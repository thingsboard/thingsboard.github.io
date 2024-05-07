---
layout: docwithnav-pe-edge
title: Edge Core/Rule engine deployment parameters
description: ThingsBoard Edge configuration properties and environment variables

---

## Configuration parameters

The parameters are grouped by system components. The list contains the name (address in tb-edge.yml file),
environment variable, default value and description.

#### Cloud parameters

<table>
  <thead>
      <tr>
          <td><b>Property</b></td><td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>cloud.routingKey</td>
          <td>CLOUD_ROUTING_KEY</td>
          <td></td>
          <td>Your edge key # e.g. <b>19ea7ee8-5e6d-e642-4f32-05440a529015</b></td>
      </tr>
      <tr>
          <td>cloud.secret</td>
          <td>CLOUD_ROUTING_SECRET</td>
          <td></td>
          <td>Your edge secret # e.g. <b>bztvkvfqsye7omv9uxlp</b></td>
      </tr>
      <tr>
          <td>cloud.reconnect_timeout</td>
          <td>CLOUD_RECONNECT_TIMEOUT</td>
          <td>3000</td>
          <td>Time to wait before reconnecting to cloud in case connectivity was lost</td>
      </tr>
      <tr>
          <td>cloud.rpc.host</td>
          <td>CLOUD_RPC_HOST</td>
          <td>localhost</td>
          <td>IP address of the machine with the ThingsBoard platform # e.g. <b>thingsboard.cloud</b>, <b>demo.thingsboard.io</b>, <b>X.X.X.X</b>, <b>localhost</b> </td>
      </tr>
      <tr>
          <td>cloud.rpc.port</td>
          <td>CLOUD_RPC_PORT</td>
          <td>7070</td>
          <td>Edge RPC port according to ThingsBoard server configuration</td>
      </tr>
      <tr>
          <td>cloud.rpc.timeout</td>
          <td>CLOUD_RPC_TIMEOUT</td>
          <td>5</td>
          <td>Timeout in seconds for channel termination</td>
      </tr>
      <tr>
          <td>cloud.rpc.keep_alive_time_sec</td>
          <td>CLOUD_RPC_KEEP_ALIVE_TIME_SEC</td>
          <td>360</td>
          <td>Number of seconds to keep alive connection. If after X seconds keep alive messages will not be colivered consider connection to cloud as lost</td>
      </tr>
      <tr>
          <td>cloud.rpc.ssl.enabled</td>
          <td>CLOUD_RPC_SSL_ENABLED</td>
          <td>false</td>
          <td>Enable TLS communication between cloud and edge</td>
      </tr>
      <tr>
          <td>cloud.rpc.ssl.cert</td>
          <td>CLOUD_RPC_SSL_CERT</td>
          <td></td>
          <td>Cert file to be used during TLS connectivity to cloud</td>
      </tr>
      <tr>
          <td>cloud.rpc.storage.max_read_records_count</td>
          <td>CLOUD_RPC_STORAGE_MAX_READ_RECORDS_COUNT</td>
          <td>50</td>
          <td>Max records of cloud event to read from local DB and sent to cloud</td>
      </tr>
      <tr>
          <td>cloud.rpc.storage.no_read_records_sleep</td>
          <td>CLOUD_RPC_NO_READ_RECORDS_SLEEP</td>
          <td>1000</td>
          <td>Number of milliseconds to wait before next check of cloud events in local DB</td>
      </tr>
      <tr>
          <td>cloud.rpc.storage.sleep_between_batches</td>
          <td>CLOUD_RPC_SLEEP_BETWEEN_BATCHES</td>
          <td>1000</td>
          <td>Number of milliseconds to wait before send failed batch of cloud events to cloud</td>
      </tr>
  </tbody>
</table>

{% assign docsPrefix = "pe/" %}
{% include docs/edge/user-guide/install/config.md %}
