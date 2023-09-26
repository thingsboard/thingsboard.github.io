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
          <td>queue.transport_api.requests_topic</td>
          <td>TB_QUEUE_TRANSPORT_API_REQUEST_TOPIC</td>
          <td>tb_transport.api.requests</td>
          <td>Topic used to consume api requests from transport microservices</td>
      </tr>
      <tr>
          <td>queue.transport_api.responses_topic</td>
          <td>TB_QUEUE_TRANSPORT_API_RESPONSE_TOPIC</td>
          <td>tb_transport.api.responses</td>
          <td>Topic used to produce api responses to transport microservices</td>
      </tr>
      <tr>
          <td>queue.transport_api.max_pending_requests</td>
          <td>TB_QUEUE_TRANSPORT_MAX_PENDING_REQUESTS</td>
          <td>10000</td>
          <td>Maximum pending api requests from transport microservices to be handled by server</td>
      </tr>
      <tr>
          <td>queue.transport_api.max_requests_timeout</td>
          <td>TB_QUEUE_TRANSPORT_MAX_REQUEST_TIMEOUT</td>
          <td>10000</td>
          <td>Maximum timeout in milliseconds to handle api request from transport microservice by server</td>
      </tr>
      <tr>
          <td>queue.transport_api.max_callback_threads</td>
          <td>TB_QUEUE_TRANSPORT_MAX_CALLBACK_THREADS</td>
          <td>100</td>
          <td>Amount of threads used to invoke callbacks</td>
      </tr>
      <tr>
          <td>queue.transport_api.request_poll_interval</td>
          <td>TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll api requests from transport microservices</td>
      </tr>
      <tr>
          <td>queue.transport_api.response_poll_interval</td>
          <td>TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll api response from transport microservices</td>
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
          <td>60000</td>
          <td>Timeout for processing a message pack by Core microservices</td>
      </tr>
      <tr>
          <td>queue.core.usage-stats-topic</td>
          <td>TB_QUEUE_US_TOPIC</td>
          <td>tb_usage_stats</td>
          <td>Default topic name of usage statistics for queue Kafka, RabbitMQ, etc.</td>
      </tr>
      <tr>
          <td>queue.core.stats.enabled</td>
          <td>TB_QUEUE_CORE_STATS_ENABLED</td>
          <td>false</td>
          <td>Enable/disable statistics for Core microservices</td>
      </tr>
      <tr>
          <td>queue.core.stats.print-interval-ms</td>
          <td>TB_QUEUE_CORE_STATS_PRINT_INTERVAL_MS</td>
          <td>10000</td>
          <td>Statistics printing interval for Core microservices</td>
      </tr>
      <tr>
          <td>queue.js.request_topic</td>
          <td>REMOTE_JS_EVAL_REQUEST_TOPIC</td>
          <td>js_eval.requests</td>
          <td>JS Eval request topic</td>
      </tr>
      <tr>
          <td>queue.js.response_topic_prefix</td>
          <td>REMOTE_JS_EVAL_RESPONSE_TOPIC</td>
          <td>js_eval.responses</td>
          <td>JS Eval responses topic prefix that is combined with node id</td>
      </tr>
      <tr>
          <td>queue.js.max_pending_requests</td>
          <td>REMOTE_JS_MAX_PENDING_REQUESTS</td>
          <td>10000</td>
          <td>JS Eval max pending requests</td>
      </tr>
      <tr>
          <td>queue.js.max_requests_timeout</td>
          <td>REMOTE_JS_MAX_REQUEST_TIMEOUT</td>
          <td>10000</td>
          <td>JS Eval max request timeout</td>
      </tr>
      <tr>
          <td>queue.js.response_poll_interval</td>
          <td>REMOTE_JS_RESPONSE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>JS response poll interval</td>
      </tr>
      <tr>
          <td>queue.rule-engine.topic</td>
          <td>TB_QUEUE_RULE_ENGINE_TOPIC</td>
          <td>tb_rule_engine</td>
          <td>Default Rule Engine topic name</td>
      </tr>
      <tr>
          <td>queue.rule-engine.topic-deletion-delay</td>
          <td>TB_QUEUE_RULE_ENGINE_TOPIC_DELETION_DELAY_SEC</td>
          <td>30</td>
          <td>After a queue is deleted (or profile's isolation option was disabled), Rule Engine will continue reading related topics during this period, before deleting the actual topics</td>
      </tr>
      <tr>
          <td>queue.rule-engine.poll-interval</td>
          <td>TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll messages by Rule Engine</td>
      </tr>
      <tr>
          <td>queue.rule-engine.pack-processing-timeout</td>
          <td>TB_QUEUE_RULE_ENGINE_PACK_PROCESSING_TIMEOUT_MS</td>
          <td>60000</td>
          <td>Timeout for processing a message pack of Rule Engine</td>
      </tr>
      <tr>
          <td>queue.rule-engine.stats.enabled</td>
          <td>TB_QUEUE_RULE_ENGINE_STATS_ENABLED</td>
          <td>true</td>
          <td>Enable/disable statistics for Rule Engine</td>
      </tr>
      <tr>
          <td>queue.rule-engine.stats.print-interval-ms</td>
          <td>TB_QUEUE_RULE_ENGINE_STATS_PRINT_INTERVAL_MS</td>
          <td>60000</td>
          <td>Statistics printing interval for Rule Engine</td>
      </tr>
      <tr>
          <td>queue.transport.notifications_topic</td>
          <td>TB_QUEUE_TRANSPORT_NOTIFICATIONS_TOPIC</td>
          <td>tb_transport.notifications</td>
          <td>For high priority notifications that require minimum latency and processing time</td>
      </tr>
      <tr>
          <td>queue.transport.poll_interval</td>
          <td>TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll messages</td>
      </tr>
  </tbody>
</table>
