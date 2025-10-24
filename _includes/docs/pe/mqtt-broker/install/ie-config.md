

##  HTTP server parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>server.address</td>
			<td>HTTP_BIND_ADDRESS</td>
			<td>0.0.0.0</td>
			<td> HTTP Server bind address</td>
		</tr>
		<tr>
			<td>server.port</td>
			<td>HTTP_BIND_PORT</td>
			<td>8082</td>
			<td> HTTP Server bind port</td>
		</tr>
	</tbody>
</table>


##  Kafka parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>queue.integration-downlink.poll-interval</td>
			<td>TB_IE_DOWNLINK_POLL_INTERVAL</td>
			<td>1000</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.ie.downlink' topics</td>
		</tr>
		<tr>
			<td>queue.integration-msg.poll-interval</td>
			<td>TB_IE_MSG_POLL_INTERVAL</td>
			<td>1000</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.msg.ie' topics</td>
		</tr>
		<tr>
			<td>queue.integration-msg.pack-processing-timeout</td>
			<td>TB_IE_MSG_PACK_PROCESSING_TIMEOUT</td>
			<td>30000</td>
			<td> Timeout in milliseconds for processing the pack of messages</td>
		</tr>
		<tr>
			<td>queue.integration-msg.ack-strategy.type</td>
			<td>TB_IE_MSG_ACK_STRATEGY_TYPE</td>
			<td>SKIP_ALL</td>
			<td> Processing strategy for 'tbmq.msg.ie' topics. Can be: SKIP_ALL, RETRY_ALL</td>
		</tr>
		<tr>
			<td>queue.integration-msg.ack-strategy.retries</td>
			<td>TB_IE_MSG_ACK_STRATEGY_RETRIES</td>
			<td>5</td>
			<td> Number of retries, 0 is unlimited. Use for RETRY_ALL processing strategy</td>
		</tr>
		<tr>
			<td>queue.integration-msg.ack-strategy.pause-between-retries</td>
			<td>TB_IE_MSG_ACK_STRATEGY_PAUSE_BETWEEN_RETRIES</td>
			<td>1</td>
			<td> Time in seconds to wait in consumer thread before retries</td>
		</tr>
		<tr>
			<td>queue.kafka.bootstrap.servers</td>
			<td>TB_KAFKA_SERVERS</td>
			<td>localhost:9092</td>
			<td> List of kafka bootstrap servers used to establish connection</td>
		</tr>
		<tr>
			<td>queue.kafka.enable-topic-deletion</td>
			<td>TB_KAFKA_ENABLE_TOPIC_DELETION</td>
			<td>true</td>
			<td> Controls whether TBMQ is allowed to delete Kafka topics that were created for
 Integrations.
 When set to 'true', TBMQ may automatically remove topics during cleanup
 (for example, when the Integration is deleted).
 When set to 'false', TBMQ will skip topic deletions and simply stop using them.
 This helps prevent accidental data loss in production environments</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.partition-assignment-strategy</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_PARTITION_ASSIGNMENT_STRATEGY</td>
			<td>org.apache.kafka.clients.consumer.StickyAssignor</td>
			<td> A list of class names or class types, ordered by preference, of supported partition assignment strategies that the client will use to distribute partition ownership amongst consumer instances when group management is used</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.session-timeout-ms</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_SESSION_TIMEOUT_MS</td>
			<td>10000</td>
			<td> The timeout in milliseconds used to detect client failures when using Kafka's group management facility</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.max-poll-interval-ms</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_MAX_POLL_INTERVAL_MS</td>
			<td>300000</td>
			<td> The maximum delay in milliseconds between invocations of poll() when using consumer group management</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.max-poll-records</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_MAX_POLL_RECORDS</td>
			<td>2000</td>
			<td> The maximum number of records returned in a single call to poll()</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.max-partition-fetch-bytes</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_MAX_PARTITION_FETCH_BYTES</td>
			<td>16777216</td>
			<td> The maximum amount of data in bytes per-partition the server will return</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.fetch-max-bytes</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_FETCH_MAX_BYTES</td>
			<td>134217728</td>
			<td> The maximum amount of data in bytes the server should return for a fetch request</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.heartbeat-interval-ms</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_HEARTBEAT_INTERVAL_MS</td>
			<td>3000</td>
			<td> The expected time between heartbeats to the consumer coordinator when using Kafka’s group management facilities.
 Heartbeats are used to ensure that the consumer’s session stays active and to facilitate rebalancing when new consumers join or leave the group.
 The value must be set lower than TB_KAFKA_DEFAULT_CONSUMER_SESSION_TIMEOUT_MS, but typically should be set no higher than 1/3 of that value.
 It can be adjusted even lower to control the expected time for normal rebalances. Value in milliseconds. Default is 3 sec</td>
		</tr>
		<tr>
			<td>queue.kafka.default.producer.acks</td>
			<td>TB_KAFKA_DEFAULT_PRODUCER_ACKS</td>
			<td>1</td>
			<td> The number of acknowledgments the producer requires the leader to have received before considering a request complete</td>
		</tr>
		<tr>
			<td>queue.kafka.default.producer.retries</td>
			<td>TB_KAFKA_DEFAULT_PRODUCER_RETRIES</td>
			<td>1</td>
			<td> Setting a value greater than zero will cause the client to resend any record whose send fails with a potentially transient error</td>
		</tr>
		<tr>
			<td>queue.kafka.default.producer.batch-size</td>
			<td>TB_KAFKA_DEFAULT_PRODUCER_BATCH_SIZE</td>
			<td>16384</td>
			<td> The producer will attempt to batch records together into fewer requests whenever multiple records are being sent to the same partition. Size in bytes</td>
		</tr>
		<tr>
			<td>queue.kafka.default.producer.linger-ms</td>
			<td>TB_KAFKA_DEFAULT_PRODUCER_LINGER_MS</td>
			<td>5</td>
			<td> The producer groups together any records that arrive in between request transmissions into a single batched request, set in milliseconds</td>
		</tr>
		<tr>
			<td>queue.kafka.default.producer.buffer-memory</td>
			<td>TB_KAFKA_DEFAULT_PRODUCER_BUFFER_MEMORY</td>
			<td>33554432</td>
			<td> The total bytes of memory the producer can use to buffer records waiting to be sent to the server</td>
		</tr>
		<tr>
			<td>queue.kafka.default.producer.compression-type</td>
			<td>TB_KAFKA_DEFAULT_COMPRESSION_TYPE</td>
			<td>none</td>
			<td> The compression type for all data generated by the producer. Valid values are `none`, `gzip`, `snappy`, `lz4`, or `zstd`</td>
		</tr>
		<tr>
			<td>queue.kafka.admin.config</td>
			<td>TB_KAFKA_ADMIN_CONFIG</td>
			<td>retries:1</td>
			<td> List of configs separated by semicolon used for admin kafka client creation</td>
		</tr>
		<tr>
			<td>queue.kafka.admin.command-timeout</td>
			<td>TB_KAFKA_ADMIN_COMMAND_TIMEOUT_SEC</td>
			<td>30</td>
			<td> Kafka Admin client command timeout (in seconds). Applies to operations like describeCluster, listTopics, etc</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-stats.enabled</td>
			<td>TB_KAFKA_CONSUMER_STATS_ENABLED</td>
			<td>true</td>
			<td> Prints lag if enabled between consumer group offset and last messages offset in Kafka topics</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-stats.print-interval-ms</td>
			<td>TB_KAFKA_CONSUMER_STATS_PRINT_INTERVAL_MS</td>
			<td>60000</td>
			<td> Statistics printing interval in milliseconds for Kafka's consumer-groups stats</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-stats.kafka-response-timeout-ms</td>
			<td>TB_KAFKA_CONSUMER_STATS_RESPONSE_TIMEOUT_MS</td>
			<td>1000</td>
			<td> Time to wait in milliseconds for the stats-loading requests to Kafka to finish</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-stats.consumer-config</td>
			<td>TB_KAFKA_CONSUMER_STATS_CONSUMER_CONFIG</td>
			<td></td>
			<td> List of configs separated by semicolon used for kafka stats consumer</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.topic-prefix</td>
			<td>TB_KAFKA_IE_DOWNLINK_TOPIC_PREFIX</td>
			<td>tbmq.ie.downlink</td>
			<td> Prefix for topics for sending integration configurations and validation requests from tbmq to integration executors</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.http.topic-properties</td>
			<td>TB_KAFKA_IE_DOWNLINK_HTTP_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:6;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.ie.downlink.http` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.http.additional-consumer-config</td>
			<td>TB_KAFKA_IE_DOWNLINK_HTTP_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.ie.downlink.http` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.http.additional-producer-config</td>
			<td>TB_KAFKA_IE_DOWNLINK_HTTP_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.ie.downlink.http` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.kafka.topic-properties</td>
			<td>TB_KAFKA_IE_DOWNLINK_KAFKA_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:6;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.ie.downlink.kafka` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.kafka.additional-consumer-config</td>
			<td>TB_KAFKA_IE_DOWNLINK_KAFKA_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.ie.downlink.kafka` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.kafka.additional-producer-config</td>
			<td>TB_KAFKA_IE_DOWNLINK_KAFKA_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.ie.downlink.kafka` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.mqtt.topic-properties</td>
			<td>TB_KAFKA_IE_DOWNLINK_MQTT_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:6;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.ie.downlink.mqtt` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.mqtt.additional-consumer-config</td>
			<td>TB_KAFKA_IE_DOWNLINK_MQTT_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.ie.downlink.mqtt` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.mqtt.additional-producer-config</td>
			<td>TB_KAFKA_IE_DOWNLINK_MQTT_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.ie.downlink.mqtt` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink.topic</td>
			<td>TB_KAFKA_IE_UPLINK_TOPIC</td>
			<td>tbmq.ie.uplink</td>
			<td> Topic for sending messages/events from integration executors to tbmq</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink.topic-properties</td>
			<td>TB_KAFKA_IE_UPLINK_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:6;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.ie.uplink` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink.additional-consumer-config</td>
			<td>TB_KAFKA_IE_UPLINK_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.ie.uplink` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink.additional-producer-config</td>
			<td>TB_KAFKA_IE_UPLINK_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.ie.uplink` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink-notifications.topic-prefix</td>
			<td>TB_KAFKA_IE_UPLINK_NOTIF_TOPIC_PREFIX</td>
			<td>tbmq.ie.uplink.notifications</td>
			<td> Prefix for topics for sending notifications or replies from integration executors to specific tbmq node</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink-notifications.topic-properties</td>
			<td>TB_KAFKA_IE_UPLINK_NOTIF_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.ie.uplink.notifications` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink-notifications.additional-consumer-config</td>
			<td>TB_KAFKA_IE_UPLINK_NOTIF_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.ie.uplink.notifications` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink-notifications.additional-producer-config</td>
			<td>TB_KAFKA_IE_UPLINK_NOTIF_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.ie.uplink.notifications` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-msg.topic-properties</td>
			<td>TB_KAFKA_IE_MSG_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.msg.ie` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-msg.additional-consumer-config</td>
			<td>TB_KAFKA_IE_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
			<td>max.poll.records:50</td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.msg.ie` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-msg.additional-producer-config</td>
			<td>TB_KAFKA_IE_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.msg.ie` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.kafka-prefix</td>
			<td>TB_KAFKA_PREFIX</td>
			<td></td>
			<td> The common prefix for all Kafka topics, producers, consumer groups, and consumers. Defaults to empty string meaning no prefix is added</td>
		</tr>
	</tbody>
</table>


##  Service parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>service.type</td>
			<td>TB_SERVICE_TYPE</td>
			<td>tbmq-integration-executor</td>
			<td> Microservice type. Allowed value: tbmq-integration-executor</td>
		</tr>
		<tr>
			<td>service.id</td>
			<td>TB_SERVICE_ID</td>
			<td></td>
			<td> Unique id for this service (autogenerated if empty)</td>
		</tr>
		<tr>
			<td>service.integrations.supported</td>
			<td>TB_SERVICE_INTEGRATIONS_SUPPORTED</td>
			<td>ALL</td>
			<td> Allow to enable integration on microservice integration executor.
 Allowed values: HTTP, KAFKA, MQTT. By default, ALL</td>
		</tr>
		<tr>
			<td>service.integrations.excluded</td>
			<td>TB_SERVICE_INTEGRATIONS_EXCLUDED</td>
			<td>NONE</td>
			<td> List of integrations to exclude from processing on service/microservice integration executor.
 Allowed values: HTTP, KAFKA, MQTT. By default, NONE</td>
		</tr>
	</tbody>
</table>


##  Integration common parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>integrations.statistics.enabled</td>
			<td>INTEGRATIONS_STATISTICS_ENABLED</td>
			<td>true</td>
			<td> Enable/disable integrations statistics</td>
		</tr>
		<tr>
			<td>integrations.statistics.persist-frequency</td>
			<td>INTEGRATIONS_STATISTICS_PERSIST_FREQUENCY</td>
			<td>3600000</td>
			<td> Integration statistic persistence frequency in milliseconds</td>
		</tr>
		<tr>
			<td>integrations.init.connection-timeout-sec</td>
			<td>INTEGRATIONS_INIT_CONNECTION_TIMEOUT_SEC</td>
			<td>15</td>
			<td> Maximum connection timeout allowed for integrations in seconds. Any greater user defined timeout will be reduced down to this limit</td>
		</tr>
		<tr>
			<td>integrations.init.connection-check-api-request-timeout-sec</td>
			<td>INTEGRATIONS_INIT_CONNECTION_CHECK_API_REQUEST_TIMEOUT_SEC</td>
			<td>20</td>
			<td> Connection check timeout for API request in seconds</td>
		</tr>
		<tr>
			<td>integrations.reinit.enabled</td>
			<td>INTEGRATIONS_REINIT_ENABLED</td>
			<td>true</td>
			<td> Enable/disable integrations hot reinitialization. This process is done for integrations with state 'FAILED'</td>
		</tr>
		<tr>
			<td>integrations.reinit.frequency</td>
			<td>INTEGRATIONS_REINIT_FREQUENCY_MS</td>
			<td>300000</td>
			<td> Checking interval in milliseconds for reinit integrations. Defaults to 5 minutes</td>
		</tr>
		<tr>
			<td>integrations.destroy.graceful-timeout-ms</td>
			<td>INTEGRATIONS_DESTROY_TIMEOUT_MS</td>
			<td>1000</td>
			<td> The duration (in milliseconds) to wait during each iteration of the graceful shutdown process for integrations to terminate properly.
 Default value is set to 1 seconds</td>
		</tr>
		<tr>
			<td>integrations.destroy.count</td>
			<td>INTEGRATIONS_DESTROY_COUNT</td>
			<td>10</td>
			<td> The number of iterations to attempt a graceful shutdown before forcefully stopping the process</td>
		</tr>
		<tr>
			<td>integrations.destroy.forced-shutdown-timeout-ms</td>
			<td>INTEGRATIONS_DESTROY_FORCED_SHUTDOWN_TIMEOUT_MS</td>
			<td>15000</td>
			<td> The maximum duration (in milliseconds) to wait before forcefully stopping the application if the graceful shutdown process has not started or exceeds the allowed time</td>
		</tr>
		<tr>
			<td>integrations.allow-local-network-hosts</td>
			<td>INTEGRATIONS_ALLOW_LOCAL_NETWORK_HOSTS</td>
			<td>true</td>
			<td> Enable/disable integrations local network hosts</td>
		</tr>
		<tr>
			<td>integrations.uplink.callback-threads-count</td>
			<td>INTEGRATIONS_UPLINK_THREADS</td>
			<td>4</td>
			<td> Number of threads in the pool to process callbacks of uplink events to tbmq nodes</td>
		</tr>
		<tr>
			<td>integrations.manage.lifecycle-threads-count</td>
			<td>INTEGRATIONS_MANAGE_LIFECYCLE_THREADS</td>
			<td>4</td>
			<td> Number of threads in the pool to process lifecycle events (CREATE/UPDATE/DELETE) of integrations</td>
		</tr>
		<tr>
			<td>integrations.manage.command-threads-count</td>
			<td>INTEGRATIONS_MANAGE_COMMAND_THREADS</td>
			<td>4</td>
			<td> Number of threads in the pool to process integration validation requests</td>
		</tr>
		<tr>
			<td>integrations.external.threads-count</td>
			<td>INTEGRATIONS_EXTERNAL_THREADS</td>
			<td>10</td>
			<td> Number of threads in the pool dedicated to handling external operations, such as producing messages to Kafka topics</td>
		</tr>
		<tr>
			<td>integrations.netty.threads-count</td>
			<td>INTEGRATIONS_NETTY_SHARED_GROUP_THREADS</td>
			<td>0</td>
			<td> Netty shared worker group threads count. Defaults to 0 meaning the threads count is number of availableProcessors * 2.
 Used to send messages to external MQTT brokers using MQTT bridge (integration)</td>
		</tr>
	</tbody>
</table>


##  Management parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>management.health.diskspace.enabled</td>
			<td>HEALTH_DISKSPACE_ENABLED</td>
			<td>false</td>
			<td> Enable/disable disk space health check</td>
		</tr>
		<tr>
			<td>management.endpoint.health.show-details</td>
			<td>HEALTH_SHOW_DETAILS</td>
			<td>never</td>
			<td> Controls whether health endpoint shows full component details (e.g., Redis, DB, TBMQ).
 Options:
 - 'never': always hide details (default if security is enabled).
 - 'when-authorized': show details only to authenticated users.
 - 'always': always include full health details in the response</td>
		</tr>
		<tr>
			<td>management.endpoints.web.exposure.include</td>
			<td>METRICS_ENDPOINTS_EXPOSE</td>
			<td>health,info,prometheus</td>
			<td> Specify which Actuator endpoints should be exposed via HTTP.
 Use 'health,info' to expose only basic health and information endpoints.
 For exposing Prometheus metrics, update this to include 'prometheus' in the list (e.g., 'health,info,prometheus')</td>
		</tr>
	</tbody>
</table>


##  Statistics parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>stats.ie.enabled</td>
			<td>STATS_IE_ENABLED</td>
			<td>true</td>
			<td> Enable/disable stats printing to the logs</td>
		</tr>
		<tr>
			<td>stats.ie.print-interval-ms</td>
			<td>STATS_IE_PRINT_INTERVAL_MS</td>
			<td>60000</td>
			<td> Period in milliseconds to print stats. Default value corresponds to 1 minute</td>
		</tr>
		<tr>
			<td>stats.timer.percentiles</td>
			<td>STATS_TIMER_PERCENTILES</td>
			<td>0.5</td>
			<td> Metrics percentiles returned by actuator for timer metrics. List of comma-separated (,) double values</td>
		</tr>
		<tr>
			<td>stats.system-info.persist-frequency</td>
			<td>STATS_SYSTEM_INFO_PERSIST_FREQUENCY_SEC</td>
			<td>60</td>
			<td> Persist frequency of system info (CPU, memory usage, etc.) in seconds</td>
		</tr>
	</tbody>
</table>


##  Event configuration parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>event.error.rate-limits.enabled</td>
			<td>EVENT_ERROR_RATE_LIMITS_ENABLED</td>
			<td>true</td>
			<td> If true rate limits will be active</td>
		</tr>
		<tr>
			<td>event.error.rate-limits.integration</td>
			<td>EVENT_ERROR_RATE_LIMITS_INTEGRATION</td>
			<td>5000:3600,100:60</td>
			<td> No more than 5000 messages per hour or 100 messages per minute for all integrations</td>
		</tr>
		<tr>
			<td>event.error.rate-limits.ttl-minutes</td>
			<td>EVENT_ERROR_RATE_LIMITS_TTL</td>
			<td>60</td>
			<td> Time (in minutes) to prevent duplicate persistence of rate limit events once the error event rate limit is reached</td>
		</tr>
	</tbody>
</table>
