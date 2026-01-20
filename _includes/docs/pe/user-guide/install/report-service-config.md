* TOC
{:toc}

##  Server common parameters

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
			<td> Server bind-address</td>
		</tr>
		<tr>
			<td>server.port</td>
			<td>HTTP_BIND_PORT</td>
			<td>8081</td>
			<td> Server bind port</td>
		</tr>
	</tbody>
</table>


##  Application info parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>app.version</td>
			<td></td>
			<td>"@project.version@"</td>
			<td> Application version</td>
		</tr>
	</tbody>
</table>


##  Zookeeper connection parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>zk.enabled</td>
			<td>ZOOKEEPER_ENABLED</td>
			<td>true</td>
			<td> Enable/disable zookeeper discovery service.</td>
		</tr>
		<tr>
			<td>zk.url</td>
			<td>ZOOKEEPER_URL</td>
			<td>localhost:2181</td>
			<td> Zookeeper connect string</td>
		</tr>
		<tr>
			<td>zk.retry_interval_ms</td>
			<td>ZOOKEEPER_RETRY_INTERVAL_MS</td>
			<td>3000</td>
			<td> Zookeeper retry interval in milliseconds</td>
		</tr>
		<tr>
			<td>zk.connection_timeout_ms</td>
			<td>ZOOKEEPER_CONNECTION_TIMEOUT_MS</td>
			<td>3000</td>
			<td> Zookeeper connection timeout in milliseconds</td>
		</tr>
		<tr>
			<td>zk.session_timeout_ms</td>
			<td>ZOOKEEPER_SESSION_TIMEOUT_MS</td>
			<td>3000</td>
			<td> Zookeeper session timeout in milliseconds</td>
		</tr>
		<tr>
			<td>zk.zk_dir</td>
			<td>ZOOKEEPER_NODES_DIR</td>
			<td>/thingsboard</td>
			<td> Name of the directory in zookeeper 'filesystem'</td>
		</tr>
		<tr>
			<td>zk.recalculate_delay</td>
			<td>ZOOKEEPER_RECALCULATE_DELAY_MS</td>
			<td>0</td>
			<td> The recalculate_delay property is recommended in a microservices architecture setup for rule-engine services.
 This property provides a pause to ensure that when a rule-engine service is restarted, other nodes don't immediately attempt to recalculate their partitions.
 The delay is recommended because the initialization of rule chain actors is time-consuming. Avoiding unnecessary recalculations during a restart can enhance system performance and stability.</td>
		</tr>
		<tr>
			<td>spring.main.allow-circular-references</td>
			<td></td>
			<td>"true" </td>
			<td> Spring Boot configuration property that controls whether circular dependencies between beans are allowed.</td>
		</tr>
	</tbody>
</table>


##  Queue configuration parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>queue.type</td>
			<td>TB_QUEUE_TYPE</td>
			<td>kafka</td>
			<td> kafka (Apache Kafka)</td>
		</tr>
		<tr>
			<td>queue.prefix</td>
			<td>TB_QUEUE_PREFIX</td>
			<td></td>
			<td> Global queue prefix. If specified, prefix is added before default topic name: 'prefix.default_topic_name'. Prefix is applied to all topics (and consumer groups for kafka).</td>
		</tr>
		<tr>
			<td>queue.kafka.bootstrap.servers</td>
			<td>TB_KAFKA_SERVERS</td>
			<td>localhost:9092</td>
			<td> Kafka Bootstrap nodes in "host:port" format</td>
		</tr>
		<tr>
			<td>queue.kafka.ssl.enabled</td>
			<td>TB_KAFKA_SSL_ENABLED</td>
			<td>false</td>
			<td> Enable/Disable SSL Kafka communication</td>
		</tr>
		<tr>
			<td>queue.kafka.ssl.truststore.location</td>
			<td>TB_KAFKA_SSL_TRUSTSTORE_LOCATION</td>
			<td></td>
			<td> The location of the trust store file</td>
		</tr>
		<tr>
			<td>queue.kafka.ssl.truststore.password</td>
			<td>TB_KAFKA_SSL_TRUSTSTORE_PASSWORD</td>
			<td></td>
			<td> The password of trust store file if specified</td>
		</tr>
		<tr>
			<td>queue.kafka.ssl.keystore.location</td>
			<td>TB_KAFKA_SSL_KEYSTORE_LOCATION</td>
			<td></td>
			<td> The location of the key store file. This is optional for the client and can be used for two-way authentication for the client</td>
		</tr>
		<tr>
			<td>queue.kafka.ssl.keystore.password</td>
			<td>TB_KAFKA_SSL_KEYSTORE_PASSWORD</td>
			<td></td>
			<td> The store password for the key store file. This is optional for the client and only needed if ‘ssl.keystore.location’ is configured. Key store password is not supported for PEM format</td>
		</tr>
		<tr>
			<td>queue.kafka.ssl.key.password</td>
			<td>TB_KAFKA_SSL_KEY_PASSWORD</td>
			<td></td>
			<td> The password of the private key in the key store file or the PEM key specified in ‘keystore.key’</td>
		</tr>
		<tr>
			<td>queue.kafka.acks</td>
			<td>TB_KAFKA_ACKS</td>
			<td>all</td>
			<td> The number of acknowledgments the producer requires the leader to have received before considering a request complete. This controls the durability of records that are sent. The following settings are allowed:0, 1 and all</td>
		</tr>
		<tr>
			<td>queue.kafka.retries</td>
			<td>TB_KAFKA_RETRIES</td>
			<td>1</td>
			<td> Number of retries. Resend any record whose send fails with a potentially transient error</td>
		</tr>
		<tr>
			<td>queue.kafka.compression.type</td>
			<td>TB_KAFKA_COMPRESSION_TYPE</td>
			<td>none</td>
			<td> none or gzip</td>
		</tr>
		<tr>
			<td>queue.kafka.batch.size</td>
			<td>TB_KAFKA_BATCH_SIZE</td>
			<td>16384</td>
			<td> Default batch size. This setting gives the upper bound of the batch size to be sent</td>
		</tr>
		<tr>
			<td>queue.kafka.linger.ms</td>
			<td>TB_KAFKA_LINGER_MS</td>
			<td>1</td>
			<td> This variable creates a small amount of artificial delay—that is, rather than immediately sending out a record</td>
		</tr>
		<tr>
			<td>queue.kafka.max.request.size</td>
			<td>TB_KAFKA_MAX_REQUEST_SIZE</td>
			<td>1048576</td>
			<td> The maximum size of a request in bytes. This setting will limit the number of record batches the producer will send in a single request to avoid sending huge requests</td>
		</tr>
		<tr>
			<td>queue.kafka.max.in.flight.requests.per.connection</td>
			<td>TB_KAFKA_MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION</td>
			<td>5</td>
			<td> The maximum number of unacknowledged requests the client will send on a single connection before blocking</td>
		</tr>
		<tr>
			<td>queue.kafka.buffer.memory</td>
			<td>TB_BUFFER_MEMORY</td>
			<td>33554432</td>
			<td> The total bytes of memory the producer can use to buffer records waiting to be sent to the server</td>
		</tr>
		<tr>
			<td>queue.kafka.replication_factor</td>
			<td>TB_QUEUE_KAFKA_REPLICATION_FACTOR</td>
			<td>1</td>
			<td> The multiple copies of data over the multiple brokers of Kafka</td>
		</tr>
		<tr>
			<td>queue.kafka.max_poll_interval_ms</td>
			<td>TB_QUEUE_KAFKA_MAX_POLL_INTERVAL_MS</td>
			<td>300000</td>
			<td> The maximum delay between invocations of poll() method when using consumer group management. This places an upper bound on the amount of time that the consumer can be idle before fetching more records</td>
		</tr>
		<tr>
			<td>queue.kafka.max_poll_records</td>
			<td>TB_QUEUE_KAFKA_MAX_POLL_RECORDS</td>
			<td>8192</td>
			<td> The maximum number of records returned in a single call of poll() method</td>
		</tr>
		<tr>
			<td>queue.kafka.max_partition_fetch_bytes</td>
			<td>TB_QUEUE_KAFKA_MAX_PARTITION_FETCH_BYTES</td>
			<td>16777216</td>
			<td> The maximum amount of data per-partition the server will return. Records are fetched in batches by the consumer</td>
		</tr>
		<tr>
			<td>queue.kafka.fetch_max_bytes</td>
			<td>TB_QUEUE_KAFKA_FETCH_MAX_BYTES</td>
			<td>134217728</td>
			<td> The maximum amount of data the server will return. Records are fetched in batches by the consumer</td>
		</tr>
		<tr>
			<td>queue.kafka.request.timeout.ms</td>
			<td>TB_QUEUE_KAFKA_REQUEST_TIMEOUT_MS</td>
			<td>30000</td>
			<td> (30 seconds) </td>
		</tr>
		<tr>
			<td>queue.kafka.session.timeout.ms</td>
			<td>TB_QUEUE_KAFKA_SESSION_TIMEOUT_MS</td>
			<td>10000</td>
			<td> (10 seconds) </td>
		</tr>
		<tr>
			<td>queue.kafka.auto_offset_reset</td>
			<td>TB_QUEUE_KAFKA_AUTO_OFFSET_RESET</td>
			<td>earliest</td>
			<td> earliest, latest or none</td>
		</tr>
		<tr>
			<td>queue.kafka.use_confluent_cloud</td>
			<td>TB_QUEUE_KAFKA_USE_CONFLUENT_CLOUD</td>
			<td>false</td>
			<td> Enable/Disable using of Confluent Cloud</td>
		</tr>
		<tr>
			<td>queue.kafka.confluent.ssl.algorithm</td>
			<td>TB_QUEUE_KAFKA_CONFLUENT_SSL_ALGORITHM</td>
			<td>https</td>
			<td> The endpoint identification algorithm used by clients to validate server hostname. The default value is https</td>
		</tr>
		<tr>
			<td>queue.kafka.confluent.sasl.mechanism</td>
			<td>TB_QUEUE_KAFKA_CONFLUENT_SASL_MECHANISM</td>
			<td>PLAIN</td>
			<td> The mechanism used to authenticate Schema Registry requests. SASL/PLAIN should only be used with TLS/SSL as a transport layer to ensure that clear passwords are not transmitted on the wire without encryption</td>
		</tr>
		<tr>
			<td>queue.kafka.confluent.sasl.config</td>
			<td>TB_QUEUE_KAFKA_CONFLUENT_SASL_JAAS_CONFIG</td>
			<td>org.apache.kafka.common.security.plain.PlainLoginModule required username=\"CLUSTER_API_KEY\" password=\"CLUSTER_API_SECRET\";</td>
			<td> Using JAAS Configuration for specifying multiple SASL mechanisms on a broker</td>
		</tr>
		<tr>
			<td>queue.kafka.confluent.security.protocol</td>
			<td>TB_QUEUE_KAFKA_CONFLUENT_SECURITY_PROTOCOL</td>
			<td>SASL_SSL</td>
			<td> Protocol used to communicate with brokers. Valid values are: PLAINTEXT, SSL, SASL_PLAINTEXT, SASL_SSL</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-properties-per-topic.tasks.key</td>
			<td></td>
			<td>max.poll.records</td>
			<td> Key-value properties for Kafka consumer for tasks topics</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-properties-per-topic.tasks.key.value</td>
			<td>TB_QUEUE_KAFKA_TASKS_MAX_POLL_RECORDS</td>
			<td>1</td>
			<td> Max poll records for tasks topics</td>
		</tr>
		<tr>
			<td>queue.kafka.other-inline</td>
			<td>TB_QUEUE_KAFKA_OTHER_PROPERTIES</td>
			<td></td>
			<td> In this section you can specify custom parameters (semicolon separated) for Kafka consumer/producer/admin </td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.tasks</td>
			<td>TB_QUEUE_KAFKA_TASKS_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:52428800;retention.bytes:104857600;partitions:1;min.insync.replicas:1</td>
			<td> Kafka properties for tasks topics</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-stats.enabled</td>
			<td>TB_QUEUE_KAFKA_CONSUMER_STATS_ENABLED</td>
			<td>true</td>
			<td> Prints lag between consumer group offset and last messages offset in Kafka topics</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-stats.print-interval-ms</td>
			<td>TB_QUEUE_KAFKA_CONSUMER_STATS_MIN_PRINT_INTERVAL_MS</td>
			<td>60000</td>
			<td> Statistics printing interval for Kafka's consumer-groups stats</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-stats.kafka-response-timeout-ms</td>
			<td>TB_QUEUE_KAFKA_CONSUMER_STATS_RESPONSE_TIMEOUT_MS</td>
			<td>1000</td>
			<td> Time to wait for the stats-loading requests to Kafka to finish</td>
		</tr>
		<tr>
			<td>queue.kafka.topics_cache_ttl_ms</td>
			<td>TB_QUEUE_KAFKA_TOPICS_CACHE_TTL_MS</td>
			<td>300000</td>
			<td> Topics cache TTL in milliseconds. 5 minutes by default</td>
		</tr>
		<tr>
			<td>queue.tasks.poll_interval</td>
			<td>TB_QUEUE_TASKS_POLL_INTERVAL_MS</td>
			<td>500</td>
			<td> Poll interval in milliseconds for tasks topics</td>
		</tr>
		<tr>
			<td>queue.tasks.partitions</td>
			<td>TB_QUEUE_TASKS_PARTITIONS</td>
			<td>12</td>
			<td> Partitions count for tasks queues</td>
		</tr>
		<tr>
			<td>queue.tasks.partitions_per_type</td>
			<td>TB_QUEUE_TASKS_PARTITIONS_PER_TYPE</td>
			<td></td>
			<td> Custom partitions count for tasks queues per type. Format: 'TYPE1:24;TYPE2:36', e.g. 'CF_REPROCESSING:24;TENANT_EXPORT:6'</td>
		</tr>
		<tr>
			<td>queue.tasks.partitioning_strategy</td>
			<td>TB_QUEUE_TASKS_PARTITIONING_STRATEGY</td>
			<td>tenant</td>
			<td> Tasks partitioning strategy: 'tenant' or 'entity'. By default, using 'tenant' - tasks of a specific tenant are processed in the same partition.
 In a single-tenant environment, use 'entity' strategy to distribute the tasks among multiple partitions.</td>
		</tr>
		<tr>
			<td>queue.report.notifications_topic</td>
			<td>TB_QUEUE_REPORT_NOTIFICATIONS_TOPIC</td>
			<td>tb_report.notifications</td>
			<td> TB Report notifications topic name</td>
		</tr>
		<tr>
			<td>queue.report.poll_interval</td>
			<td>TB_QUEUE_REPORT_POLL_INTERVAL_MS</td>
			<td>125</td>
			<td> Poll interval in milliseconds for TB Report queues</td>
		</tr>
		<tr>
			<td>queue.partitions.hash_function_name</td>
			<td>TB_QUEUE_PARTITIONS_HASH_FUNCTION_NAME</td>
			<td>murmur3_128</td>
			<td> murmur3_32, murmur3_128 or sha256</td>
		</tr>
	</tbody>
</table>


##  Tbel parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>tbel.enabled</td>
			<td>TBEL_ENABLED</td>
			<td>true</td>
			<td> Enable/Disable TBEL feature.</td>
		</tr>
		<tr>
			<td>tbel.max_total_args_size</td>
			<td>TBEL_MAX_TOTAL_ARGS_SIZE</td>
			<td>100000</td>
			<td> Limit the number of arguments that are passed to the function to execute the script</td>
		</tr>
		<tr>
			<td>tbel.max_result_size</td>
			<td>TBEL_MAX_RESULT_SIZE</td>
			<td>300000</td>
			<td> Maximum allowed symbols in a result after processing a script</td>
		</tr>
		<tr>
			<td>tbel.max_script_body_size</td>
			<td>TBEL_MAX_SCRIPT_BODY_SIZE</td>
			<td>50000</td>
			<td> Maximum allowed symbols in the script body</td>
		</tr>
		<tr>
			<td>tbel.max_memory_limit_mb</td>
			<td>TBEL_MAX_MEMORY_LIMIT_MB</td>
			<td> 8</td>
			<td> Maximum allowed TBEL script execution memory</td>
		</tr>
		<tr>
			<td>tbel.max_errors</td>
			<td>TBEL_MAX_ERRORS</td>
			<td>3</td>
			<td> Maximum allowed TBEL script execution errors before it will be blacklisted</td>
		</tr>
		<tr>
			<td>tbel.max_requests_timeout</td>
			<td>TBEL_MAX_REQUEST_TIMEOUT</td>
			<td>500</td>
			<td> TBEL Eval max request timeout in milliseconds. 0 - no timeout</td>
		</tr>
		<tr>
			<td>tbel.max_black_list_duration_sec</td>
			<td>TBEL_MAX_BLACKLIST_DURATION_SEC</td>
			<td>60</td>
			<td> Maximum time in seconds for black listed function to stay in the list.</td>
		</tr>
		<tr>
			<td>tbel.thread_pool_size</td>
			<td>TBEL_THREAD_POOL_SIZE</td>
			<td>50</td>
			<td> Specify thread pool size for javascript executor service</td>
		</tr>
		<tr>
			<td>tbel.compiled_scripts_cache_size</td>
			<td>TBEL_COMPILED_SCRIPTS_CACHE_SIZE</td>
			<td>1000</td>
			<td> Maximum cache size of TBEL compiled scripts</td>
		</tr>
		<tr>
			<td>tbel.stats.enabled</td>
			<td>TB_TBEL_STATS_ENABLED</td>
			<td>false</td>
			<td> Enable/Disable stats collection for TBEL engine</td>
		</tr>
		<tr>
			<td>tbel.stats.print_interval_ms</td>
			<td>TB_TBEL_STATS_PRINT_INTERVAL_MS</td>
			<td>10000</td>
			<td> Interval of logging for TBEL stats</td>
		</tr>
	</tbody>
</table>


##  General service parameters

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
			<td>tb-report</td>
			<td> service type</td>
		</tr>
		<tr>
			<td>service.id</td>
			<td>TB_SERVICE_ID</td>
			<td></td>
			<td> Unique id for this service (autogenerated if empty)</td>
		</tr>
		<tr>
			<td>service.tb_core.base_url</td>
			<td>TB_CORE_BASE_URL</td>
			<td>http://localhost:8080</td>
			<td> ThingsBoard Core service URL, used for communication with ThingsBoard Core (e.g. for REST API calls, etc.)</td>
		</tr>
		<tr>
			<td>reports.web_report.base_url</td>
			<td>REPORTS_SERVER_ENDPOINT_URL</td>
			<td>http://localhost:8383</td>
			<td> Report server endpoint</td>
		</tr>
		<tr>
			<td>reports.web_report.max_response_size</td>
			<td>MAX_RESPONSE_SIZE</td>
			<td>52428800</td>
			<td> 50MB</td>
		</tr>
	</tbody>
</table>


##  Metrics parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>metrics.enabled</td>
			<td>METRICS_ENABLED</td>
			<td>false</td>
			<td> Enable/disable actuator metrics.</td>
		</tr>
		<tr>
			<td>metrics.timer.percentiles</td>
			<td>METRICS_TIMER_PERCENTILES</td>
			<td>0.5</td>
			<td> Metrics percentiles returned by actuator for timer metrics. List of double values (divided by ,).</td>
		</tr>
	</tbody>
</table>


##  General management parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>management.endpoints.web.exposure.include</td>
			<td>METRICS_ENDPOINTS_EXPOSE</td>
			<td>info</td>
			<td> Expose metrics endpoint (use value 'prometheus' to enable prometheus metrics).</td>
		</tr>
	</tbody>
</table>
