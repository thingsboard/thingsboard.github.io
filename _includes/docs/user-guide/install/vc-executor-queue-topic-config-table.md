<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>queue.partitions.hash_function_name</td>
          <td>TB_QUEUE_PARTITIONS_HASH_FUNCTION_NAME</td>
          <td>murmur3_128</td>
          <td>Name of hash function used for consistent hash ring in Cluster Mode. See architecture docs for more details. Valid values - murmur3_32, murmur3_128 or sha256</td>
      </tr>
      <tr>
          <td>queue.core.topic</td>
          <td>TB_QUEUE_CORE_TOPIC</td>
          <td>tb_core</td>
          <td>Default topic name of Kafka, RabbitMQ, etc. queue</td>
      </tr>
      <tr>
          <td>queue.core.poll-interval</td>
          <td>TB_QUEUE_CORE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll messages by Core microservices</td>
      </tr>
      <tr>
          <td>queue.core.partitions</td>
          <td>TB_QUEUE_CORE_PARTITIONS</td>
          <td>10</td>
          <td>Amount of partitions used by Core microservices</td>
      </tr>
      <tr>
          <td>queue.core.pack-processing-timeout</td>
          <td>TB_QUEUE_CORE_PACK_PROCESSING_TIMEOUT_MS</td>
          <td>2000</td>
          <td>Timeout for processing a message pack by Core microservices</td>
      </tr>
      <tr>
          <td>queue.core.ota.topic</td>
          <td>TB_QUEUE_CORE_OTA_TOPIC</td>
          <td>tb_ota_package</td>
          <td>Default topic name for OTA updates</td>
      </tr>
      <tr>
          <td>queue.core.ota.pack-interval-ms</td>
          <td>TB_QUEUE_CORE_OTA_PACK_INTERVAL_MS</td>
          <td>60000</td>
          <td>The interval of processing the OTA updates for devices. Used to avoid any harm to network due to many parallel OTA updates</td>
      </tr>
      <tr>
          <td>queue.core.ota.pack-size</td>
          <td>TB_QUEUE_CORE_OTA_PACK_SIZE</td>
          <td>100</td>
          <td>The size of OTA updates notifications fetched from the queue. The queue stores pairs of firmware and device ids</td>
      </tr>
      <tr>
          <td>queue.core.usage-stats-topic</td>
          <td>TB_QUEUE_US_TOPIC</td>
          <td>tb_usage_stats</td>
          <td>Default topic name for queue Kafka, RabbitMQ, etc.</td>
      </tr>
      <tr>
          <td>queue.core.stats.enabled</td>
          <td>TB_QUEUE_CORE_STATS_ENABLED</td>
          <td>true</td>
          <td>Enable/disable statistics for Core microservices</td>
      </tr>
      <tr>
          <td>queue.core.stats.print-interval-ms</td>
          <td>TB_QUEUE_CORE_STATS_PRINT_INTERVAL_MS</td>
          <td>60000</td>
          <td>Statistics printing interval for Core microservices</td>
      </tr>
      <tr>
          <td>queue.vc.topic</td>
          <td>TB_QUEUE_VC_TOPIC</td>
          <td>tb_version_control</td>
          <td>Default topic name for Kafka, RabbitMQ, etc.</td>
      </tr>
      <tr>
          <td>queue.vc.partitions</td>
          <td>TB_QUEUE_VC_PARTITIONS</td>
          <td>10</td>
          <td>Number of partitions to associate with this queue. Used for scaling the number of messages that can be processed in parallel</td>
      </tr>
      <tr>
          <td>queue.vc.poll-interval</td>
          <td>TB_QUEUE_VC_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds between polling of the messages if no new messages arrive</td>
      </tr>
      <tr>
          <td>queue.vc.pack-processing-timeout</td>
          <td>TB_QUEUE_VC_PACK_PROCESSING_TIMEOUT_MS</td>
          <td>60000</td>
          <td>Timeout before retry all failed and timed-out messages from processing pack</td>
      </tr>
      <tr>
          <td>queue.vc.request-timeout</td>
          <td>TB_QUEUE_VC_REQUEST_TIMEOUT</td>
          <td>60000</td>
          <td>Timeout for a request to VC-executor (for a request for the version of the entity, for a commit charge, etc.)</td>
      </tr>
      <tr>
          <td>queue.vc.msg-chunk-size</td>
          <td>TB_QUEUE_VC_MSG_CHUNK_SIZE</td>
          <td>250000</td>
          <td>Queue settings for Kafka, RabbitMQ, etc. Limit for single message size</td>
      </tr>
  </tbody>
</table>
