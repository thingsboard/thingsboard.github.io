

####  Spring common parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>spring.main.web-environment</td>
			<td>WEB_APPLICATION_ENABLE</td>
			<td>false</td>
			<td> If you enabled process metrics you should also enable 'web-environment'.</td>
		</tr>
		<tr>
			<td>spring.main.web-application-type</td>
			<td>WEB_APPLICATION_TYPE</td>
			<td>none</td>
			<td> If you enabled process metrics you should set 'web-application-type' to 'servlet' value.</td>
		</tr>
		<tr>
			<td>spring.main.allow-circular-references</td>
			<td></td>
			<td>"true" </td>
			<td> Spring Boot configuration property that controls whether circular dependencies between beans are allowed.</td>
		</tr>
	</tbody>
</table>


####  Server common parameters

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
			<td> Server bind address (has no effect if web-environment is disabled).</td>
		</tr>
		<tr>
			<td>server.port</td>
			<td>HTTP_BIND_PORT</td>
			<td>8086</td>
			<td> Server bind port (has no effect if web-environment is disabled).</td>
		</tr>
	</tbody>
</table>


####  Zookeeper connection parameters. Used for service discovery.

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
	</tbody>
</table>


####  Queue configuration parameters

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
			<td> in-memory or kafka (Apache Kafka) or aws-sqs (AWS SQS) or pubsub (PubSub) or service-bus (Azure Service Bus) or rabbitmq (RabbitMQ)</td>
		</tr>
		<tr>
			<td>queue.prefix</td>
			<td>TB_QUEUE_PREFIX</td>
			<td></td>
			<td> Global queue prefix. If specified, prefix is added before default topic name: 'prefix.default_topic_name'. Prefix is applied to all topics (and consumer groups for kafka).</td>
		</tr>
		<tr>
			<td>queue.in_memory.stats.print-interval-ms</td>
			<td>TB_QUEUE_IN_MEMORY_STATS_PRINT_INTERVAL_MS</td>
			<td>60000</td>
			<td> For debug lvl</td>
		</tr>
		<tr>
			<td>queue.kafka.bootstrap.servers</td>
			<td>TB_KAFKA_SERVERS</td>
			<td>localhost:9092</td>
			<td> Kafka Bootstrap Servers</td>
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
			<td> The number of acknowledgments the producer requires the leader to have received before considering a request complete. This controls the durability of records that are sent. The following settings are allowed:0,1 and all</td>
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
			<td> The maximum delay between invocations of poll() when using consumer group management. This places an upper bound on the amount of time that the consumer can be idle before fetching more records</td>
		</tr>
		<tr>
			<td>queue.kafka.max_poll_records</td>
			<td>TB_QUEUE_KAFKA_MAX_POLL_RECORDS</td>
			<td>8192</td>
			<td> The maximum number of records returned in a single call to poll()</td>
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
			<td>queue.kafka.consumer-properties-per-topic.tb_ota_package.key</td>
			<td></td>
			<td>max.poll.records</td>
			<td> Key-value properties for Kafka consumer per specific topic, e.g. tb_ota_package is a topic name for ota, tb_rule_engine.sq is a topic name for default SequentialByOriginator queue. Check TB_QUEUE_CORE_OTA_TOPIC and TB_QUEUE_RE_SQ_TOPIC params</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-properties-per-topic.tb_ota_package.key.value</td>
			<td>TB_QUEUE_KAFKA_OTA_MAX_POLL_RECORDS</td>
			<td>10</td>
			<td> Example of specific consumer properties value per topic</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-properties-per-topic.tb_version_control.key</td>
			<td></td>
			<td>max.poll.interval.ms</td>
			<td> Example of specific consumer properties value per topic for VC</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-properties-per-topic.tb_version_control.key.value</td>
			<td>TB_QUEUE_KAFKA_VC_MAX_POLL_INTERVAL_MS</td>
			<td>600000</td>
			<td> Example of specific consumer properties value per topic for VC</td>
		</tr>
		<tr>
			<td>queue.kafka.other-inline</td>
			<td>TB_QUEUE_KAFKA_OTHER_PROPERTIES</td>
			<td></td>
			<td> In this section you can specify custom parameters (semicolon separated) for Kafka consumer/producer/admin </td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.core</td>
			<td>TB_QUEUE_KAFKA_CORE_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
			<td> Kafka properties for Core topics</td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.notifications</td>
			<td>TB_QUEUE_KAFKA_NOTIFICATIONS_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
			<td> Kafka properties for Notifications topics</td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.version-control</td>
			<td>TB_QUEUE_KAFKA_VC_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
			<td> Kafka properties for Core topics</td>
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
			<td> Time to wait for the stats-loading requests to Kafka to finis</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.use_default_credential_provider_chain</td>
			<td>TB_QUEUE_AWS_SQS_USE_DEFAULT_CREDENTIAL_PROVIDER_CHAIN</td>
			<td>false</td>
			<td> Use the default credentials provider for AWS SQS</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.access_key_id</td>
			<td>TB_QUEUE_AWS_SQS_ACCESS_KEY_ID</td>
			<td>YOUR_KEY</td>
			<td> Access key ID from AWS IAM user</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.secret_access_key</td>
			<td>TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY</td>
			<td>YOUR_SECRET</td>
			<td> Secret access key from AWS IAM user</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.region</td>
			<td>TB_QUEUE_AWS_SQS_REGION</td>
			<td>YOUR_REGION</td>
			<td> Region from AWS account</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.threads_per_topic</td>
			<td>TB_QUEUE_AWS_SQS_THREADS_PER_TOPIC</td>
			<td>1</td>
			<td> Number of threads per each AWS SQS queue in consumer</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.queue-properties.core</td>
			<td>TB_QUEUE_AWS_SQS_CORE_QUEUE_PROPERTIES</td>
			<td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
			<td> AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.queue-properties.notifications</td>
			<td>TB_QUEUE_AWS_SQS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
			<td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
			<td> AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.queue-properties.version-control</td>
			<td>TB_QUEUE_AWS_SQS_VC_QUEUE_PROPERTIES</td>
			<td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
			<td> VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
		</tr>
		<tr>
			<td>queue.pubsub.project_id</td>
			<td>TB_QUEUE_PUBSUB_PROJECT_ID</td>
			<td>YOUR_PROJECT_ID</td>
			<td> Project ID from Google Cloud</td>
		</tr>
		<tr>
			<td>queue.pubsub.service_account</td>
			<td>TB_QUEUE_PUBSUB_SERVICE_ACCOUNT</td>
			<td>YOUR_SERVICE_ACCOUNT</td>
			<td> API Credentials in JSON format</td>
		</tr>
		<tr>
			<td>queue.pubsub.max_msg_size</td>
			<td>TB_QUEUE_PUBSUB_MAX_MSG_SIZE</td>
			<td>1048576</td>
			<td>in bytes</td>
		</tr>
		<tr>
			<td>queue.pubsub.max_messages</td>
			<td>TB_QUEUE_PUBSUB_MAX_MESSAGES</td>
			<td>1000</td>
			<td> Number of messages per consumer</td>
		</tr>
		<tr>
			<td>queue.pubsub.executor_thread_pool_size</td>
			<td>TB_QUEUE_PUBSUB_EXECUTOR_THREAD_POOL_SIZE</td>
			<td>0</td>
			<td> Thread pool size for pubsub queue executor provider. If not set - default pubsub executor provider value will be used (5 * number of available processors)</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.core</td>
			<td>TB_QUEUE_PUBSUB_CORE_QUEUE_PROPERTIES</td>
			<td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
			<td> Pub/Sub properties for Core subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.notifications</td>
			<td>TB_QUEUE_PUBSUB_NOTIFICATIONS_QUEUE_PROPERTIES</td>
			<td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
			<td> Pub/Sub properties for Version Control subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.version-control</td>
			<td>TB_QUEUE_PUBSUB_VC_QUEUE_PROPERTIES</td>
			<td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
			<td> Pub/Sub properties for Transport Api subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td>
		</tr>
		<tr>
			<td>queue.service_bus.namespace_name</td>
			<td>TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME</td>
			<td>YOUR_NAMESPACE_NAME</td>
			<td> Azure namespace</td>
		</tr>
		<tr>
			<td>queue.service_bus.sas_key_name</td>
			<td>TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME</td>
			<td>YOUR_SAS_KEY_NAME</td>
			<td> Azure Service Bus Shared Access Signatures key name</td>
		</tr>
		<tr>
			<td>queue.service_bus.sas_key</td>
			<td>TB_QUEUE_SERVICE_BUS_SAS_KEY</td>
			<td>YOUR_SAS_KEY</td>
			<td> Azure Service Bus Shared Access Signatures key</td>
		</tr>
		<tr>
			<td>queue.service_bus.max_messages</td>
			<td>TB_QUEUE_SERVICE_BUS_MAX_MESSAGES</td>
			<td>1000</td>
			<td> Number of messages per a consumer</td>
		</tr>
		<tr>
			<td>queue.service_bus.queue-properties.core</td>
			<td>TB_QUEUE_SERVICE_BUS_CORE_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus properties for Core queues</td>
		</tr>
		<tr>
			<td>queue.service_bus.queue-properties.notifications</td>
			<td>TB_QUEUE_SERVICE_BUS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus properties for Notification queues</td>
		</tr>
		<tr>
			<td>queue.service_bus.queue-properties.version-control</td>
			<td>TB_QUEUE_SERVICE_BUS_VC_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus properties for Version Control queues</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.exchange_name</td>
			<td>TB_QUEUE_RABBIT_MQ_EXCHANGE_NAME</td>
			<td></td>
			<td> By default empty</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.host</td>
			<td>TB_QUEUE_RABBIT_MQ_HOST</td>
			<td>localhost</td>
			<td> RabbitMQ host used to establish connection</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.port</td>
			<td>TB_QUEUE_RABBIT_MQ_PORT</td>
			<td>5672</td>
			<td> RabbitMQ host used to establish a connection</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.virtual_host</td>
			<td>TB_QUEUE_RABBIT_MQ_VIRTUAL_HOST</td>
			<td>/</td>
			<td> Virtual hosts provide logical grouping and separation of resources</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.username</td>
			<td>TB_QUEUE_RABBIT_MQ_USERNAME</td>
			<td>YOUR_USERNAME</td>
			<td> Username for RabbitMQ user account</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.password</td>
			<td>TB_QUEUE_RABBIT_MQ_PASSWORD</td>
			<td>YOUR_PASSWORD</td>
			<td> User password for RabbitMQ user account</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.automatic_recovery_enabled</td>
			<td>TB_QUEUE_RABBIT_MQ_AUTOMATIC_RECOVERY_ENABLED</td>
			<td>false</td>
			<td> Network connection between clients and RabbitMQ nodes can fail. RabbitMQ Java client supports automatic recovery of connections and topology (queues, exchanges, bindings, and consumers)</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.connection_timeout</td>
			<td>TB_QUEUE_RABBIT_MQ_CONNECTION_TIMEOUT</td>
			<td>60000</td>
			<td> The connection timeout for the RabbitMQ connection factory</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.handshake_timeout</td>
			<td>TB_QUEUE_RABBIT_MQ_HANDSHAKE_TIMEOUT</td>
			<td>10000</td>
			<td> RabbitMQ has a timeout for connection handshake. When clients run in heavily constrained environments, it may be necessary to increase the timeout</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.queue-properties.core</td>
			<td>TB_QUEUE_RABBIT_MQ_CORE_QUEUE_PROPERTIES</td>
			<td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
			<td> RabbitMQ properties for Core queues</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.queue-properties.transport-api</td>
			<td>TB_QUEUE_RABBIT_MQ_TA_QUEUE_PROPERTIES</td>
			<td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
			<td> RabbitMQ properties for Transport API queues</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.queue-properties.version-control</td>
			<td>TB_QUEUE_RABBIT_MQ_VC_QUEUE_PROPERTIES</td>
			<td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
			<td> RabbitMQ properties for Version Control queues</td>
		</tr>
		<tr>
			<td>queue.partitions.hash_function_name</td>
			<td>TB_QUEUE_PARTITIONS_HASH_FUNCTION_NAME</td>
			<td>murmur3_128</td>
			<td> murmur3_32, murmur3_128 or sha256</td>
		</tr>
		<tr>
			<td>queue.core.topic</td>
			<td>TB_QUEUE_CORE_TOPIC</td>
			<td>tb_core</td>
			<td> Default topic name of Kafka, RabbitMQ, etc. queue</td>
		</tr>
		<tr>
			<td>queue.core.poll-interval</td>
			<td>TB_QUEUE_CORE_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds to poll messages by Core microservices</td>
		</tr>
		<tr>
			<td>queue.core.partitions</td>
			<td>TB_QUEUE_CORE_PARTITIONS</td>
			<td>10</td>
			<td> Amount of partitions used by Core microservices</td>
		</tr>
		<tr>
			<td>queue.core.pack-processing-timeout</td>
			<td>TB_QUEUE_CORE_PACK_PROCESSING_TIMEOUT_MS</td>
			<td>2000</td>
			<td> Timeout for processing a message pack by Core microservices</td>
		</tr>
		<tr>
			<td>queue.core.ota.topic</td>
			<td>TB_QUEUE_CORE_OTA_TOPIC</td>
			<td>tb_ota_package</td>
			<td> Default topic name for OTA updates</td>
		</tr>
		<tr>
			<td>queue.core.ota.pack-interval-ms</td>
			<td>TB_QUEUE_CORE_OTA_PACK_INTERVAL_MS</td>
			<td>60000</td>
			<td> The interval of processing the OTA updates for devices. Used to avoid any harm to the network due to many parallel OTA updates</td>
		</tr>
		<tr>
			<td>queue.core.ota.pack-size</td>
			<td>TB_QUEUE_CORE_OTA_PACK_SIZE</td>
			<td>100</td>
			<td> The size of OTA updates notifications fetched from the queue. The queue stores pairs of firmware and device ids</td>
		</tr>
		<tr>
			<td>queue.core.usage-stats-topic</td>
			<td>TB_QUEUE_US_TOPIC</td>
			<td>tb_usage_stats</td>
			<td> Stats topic name for queue Kafka, RabbitMQ, etc.</td>
		</tr>
		<tr>
			<td>queue.core.stats.enabled</td>
			<td>TB_QUEUE_CORE_STATS_ENABLED</td>
			<td>true</td>
			<td> Enable/disable statistics for Core microservices</td>
		</tr>
		<tr>
			<td>queue.core.stats.print-interval-ms</td>
			<td>TB_QUEUE_CORE_STATS_PRINT_INTERVAL_MS</td>
			<td>60000</td>
			<td> Statistics printing interval for Core microservices</td>
		</tr>
		<tr>
			<td>queue.vc.topic</td>
			<td>TB_QUEUE_VC_TOPIC</td>
			<td>tb_version_control</td>
			<td> Default topic name for Kafka, RabbitMQ, etc.</td>
		</tr>
		<tr>
			<td>queue.vc.partitions</td>
			<td>TB_QUEUE_VC_PARTITIONS</td>
			<td>10</td>
			<td> Number of partitions to associate with this queue. Used for scaling the number of messages that can be processed in parallel</td>
		</tr>
		<tr>
			<td>queue.vc.poll-interval</td>
			<td>TB_QUEUE_VC_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds between polling of the messages if no new messages arrive</td>
		</tr>
		<tr>
			<td>queue.vc.pack-processing-timeout</td>
			<td>TB_QUEUE_VC_PACK_PROCESSING_TIMEOUT_MS</td>
			<td>180000</td>
			<td> Timeout before retrying all failed and timed-out messages from the processing pack</td>
		</tr>
		<tr>
			<td>queue.vc.msg-chunk-size</td>
			<td>TB_QUEUE_VC_MSG_CHUNK_SIZE</td>
			<td>250000</td>
			<td> Queue settings for Kafka, RabbitMQ, etc. Limit for single message size</td>
		</tr>
	</tbody>
</table>


####  Version control parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>vc.thread_pool_size</td>
			<td>TB_VC_POOL_SIZE</td>
			<td>6</td>
			<td> Pool size for handling export tasks</td>
		</tr>
		<tr>
			<td>vc.git.io_pool_size</td>
			<td>TB_VC_GIT_POOL_SIZE</td>
			<td>3</td>
			<td> Pool size for handling the git IO operations</td>
		</tr>
		<tr>
			<td>vc.git.repositories-folder</td>
			<td>TB_VC_GIT_REPOSITORIES_FOLDER</td>
			<td>${java.io.tmpdir}/repositories</td>
			<td> Default storing repository path</td>
		</tr>
	</tbody>
</table>


####  Usage statistics parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>usage.stats.report.enabled</td>
			<td>USAGE_STATS_REPORT_ENABLED</td>
			<td>true</td>
			<td> Enable/Disable the collection of statistics about API usage. Collected on a system and tenant level by default</td>
		</tr>
		<tr>
			<td>usage.stats.report.enabled_per_customer</td>
			<td>USAGE_STATS_REPORT_PER_CUSTOMER_ENABLED</td>
			<td>false</td>
			<td> Enable/Disable collection of statistics about API usage on a customer level</td>
		</tr>
		<tr>
			<td>usage.stats.report.interval</td>
			<td>USAGE_STATS_REPORT_INTERVAL</td>
			<td>10</td>
			<td> Interval of reporting the statistics. By default, the summarized statistics are sent every 10 seconds</td>
		</tr>
	</tbody>
</table>


####  Metrics parameters

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


####  General management parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>management.endpoints.web.exposure.include</td>
			<td></td>
			<td>'${METRICS_ENDPOINTS_EXPOSE:info}'</td>
			<td> Expose metrics endpoint (use value 'prometheus' to enable prometheus metrics).</td>
		</tr>
	</tbody>
</table>


####  Service common properties

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
			<td>tb-vc-executor</td>
			<td> service type</td>
		</tr>
		<tr>
			<td>service.id</td>
			<td>TB_SERVICE_ID</td>
			<td></td>
			<td> Unique id for this service (autogenerated if empty)</td>
		</tr>
	</tbody>
</table>


####  Notification system parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>notification_system.rules.deduplication_durations</td>
			<td>TB_NOTIFICATION_RULES_DEDUPLICATION_DURATIONS</td>
			<td>RATE_LIMITS:14400000;</td>
			<td> Semicolon-separated deduplication durations (in millis) for trigger types. Format: 'NotificationRuleTriggerType1:123;NotificationRuleTriggerType2:456'</td>
		</tr>
	</tbody>
</table>
