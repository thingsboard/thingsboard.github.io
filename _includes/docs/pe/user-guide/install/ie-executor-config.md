

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
			<td> Server bind address</td>
		</tr>
		<tr>
			<td>server.port</td>
			<td>HTTP_BIND_PORT</td>
			<td>8082</td>
			<td> Server bind port</td>
		</tr>
		<tr>
			<td>server.tomcat.max-http-form-post-size</td>
			<td>MAX_HTTP_FORM_POST_SIZE</td>
			<td>10000000</td>
			<td> 10Mb</td>
		</tr>
	</tbody>
</table>


####  Spring common parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>spring.main.allow-circular-references</td>
			<td></td>
			<td>"true" </td>
			<td> Spring Boot configuration property that controls whether circular dependencies between beans are allowed.</td>
		</tr>
		<tr>
			<td>spring.servlet.multipart.max-file-size</td>
			<td>SPRING_SERVLET_MULTIPART_MAX_FILE_SIZE</td>
			<td>50MB</td>
			<td> Total file size cannot exceed 50MB when configuring file uploads</td>
		</tr>
		<tr>
			<td>spring.servlet.multipart.max-request-size</td>
			<td>SPRING_SERVLET_MULTIPART_MAX_REQUEST_SIZE</td>
			<td>50MB</td>
			<td> Total request size for a multipart/form-data cannot exceed 50MB</td>
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


####  Integration common parameters

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
			<td>integrations.statistics.persist_frequency</td>
			<td>INTEGRATIONS_STATISTICS_PERSIST_FREQUENCY</td>
			<td>3600000</td>
			<td> Integration statistic persistence frequency in milliseconds</td>
		</tr>
		<tr>
			<td>integrations.reinit.enabled</td>
			<td>INTEGRATIONS_REINIT_ENABLED</td>
			<td>true</td>
			<td> Enable/Disable integrations hot reinitialization</td>
		</tr>
		<tr>
			<td>integrations.reinit.frequency</td>
			<td>INTEGRATIONS_REINIT_FREQUENCY</td>
			<td>300000</td>
			<td> Checking interval for reinit integrations</td>
		</tr>
		<tr>
			<td>integrations.rate_limits.enabled</td>
			<td>TB_INTEGRATION_RATE_LIMITS_ENABLED</td>
			<td>false</td>
			<td> Enable/Disable integrations rate limits</td>
		</tr>
		<tr>
			<td>integrations.rate_limits.tenant</td>
			<td>TB_INTEGRATION_RATE_LIMITS_TENANT</td>
			<td>1000:1,20000:60</td>
			<td> The value of integrations rate limit. By default, no more than 1000 messages per second and no more 20000 messages per hour</td>
		</tr>
		<tr>
			<td>integrations.rate_limits.device</td>
			<td>TB_INTEGRATION_RATE_LIMITS_DEVICE</td>
			<td>10:1,300:60</td>
			<td> The value of integrations device rate limit. By default, no more than 10 messages per second and no more 300 messages per hour</td>
		</tr>
		<tr>
			<td>integrations.allow_Local_network_hosts</td>
			<td>INTEGRATIONS_ALLOW_LOCAL_NETWORK_HOSTS</td>
			<td>true</td>
			<td> Enable/Disable integrations local network hosts</td>
		</tr>
	</tbody>
</table>


####  Queue common parameters

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
			<td> kafka (Apache Kafka) or aws-sqs (AWS SQS) or pubsub (PubSub) or service-bus (Azure Service Bus) or rabbitmq (RabbitMQ)</td>
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
			<td>queue.kafka.other-inline</td>
			<td>TB_QUEUE_KAFKA_OTHER_PROPERTIES</td>
			<td></td>
			<td> In this section you can specify custom parameters (semicolon separated) for Kafka consumer/producer/admin </td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.rule-engine</td>
			<td>TB_QUEUE_KAFKA_RE_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
			<td> Kafka properties for Rule Engine</td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.core</td>
			<td>TB_QUEUE_KAFKA_CORE_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
			<td> Kafka properties for Core topics</td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.transport-api</td>
			<td>TB_QUEUE_KAFKA_TA_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:10;min.insync.replicas:1</td>
			<td> Kafka properties for Transport Api topics</td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.notifications</td>
			<td>TB_QUEUE_KAFKA_NOTIFICATIONS_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
			<td> Kafka properties for Notifications topics</td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.js-executor</td>
			<td>TB_QUEUE_KAFKA_JE_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:104857600;partitions:100;min.insync.replicas:1</td>
			<td> Kafka properties for JS Executor topics</td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.integration-api</td>
			<td>TB_QUEUE_KAFKA_INTEGRATION_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:10;min.insync.replicas:1</td>
			<td> Kafka properties for Integration Api topics</td>
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
			<td>queue.aws_sqs.queue-properties.rule-engine</td>
			<td>TB_QUEUE_AWS_SQS_RE_QUEUE_PROPERTIES</td>
			<td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
			<td> AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.queue-properties.core</td>
			<td>TB_QUEUE_AWS_SQS_CORE_QUEUE_PROPERTIES</td>
			<td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
			<td> AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.queue-properties.transport-api</td>
			<td>TB_QUEUE_AWS_SQS_TA_QUEUE_PROPERTIES</td>
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
			<td>queue.aws_sqs.queue-properties.js-executor</td>
			<td>TB_QUEUE_AWS_SQS_JE_QUEUE_PROPERTIES</td>
			<td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
			<td> VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.queue-properties.integration-api</td>
			<td>TB_QUEUE_AWS_SQS_INTEGRATION_QUEUE_PROPERTIES</td>
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
			<td> Thread pool size for pubsub queue executor provider. If set to 0 - default pubsub executor provider value will be used (5 * number of available processors)</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.rule-engine</td>
			<td>TB_QUEUE_PUBSUB_RE_QUEUE_PROPERTIES</td>
			<td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
			<td> Pub/Sub properties for Rule Engine subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.core</td>
			<td>TB_QUEUE_PUBSUB_CORE_QUEUE_PROPERTIES</td>
			<td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
			<td> Pub/Sub properties for Core subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.transport-api</td>
			<td>TB_QUEUE_PUBSUB_TA_QUEUE_PROPERTIES</td>
			<td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
			<td> Pub/Sub properties for Transport API subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.notifications</td>
			<td>TB_QUEUE_PUBSUB_NOTIFICATIONS_QUEUE_PROPERTIES</td>
			<td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
			<td> Pub/Sub properties for Version Control subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.js-executor</td>
			<td>TB_QUEUE_PUBSUB_JE_QUEUE_PROPERTIES</td>
			<td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
			<td> PubSub queue properties</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.integration-api</td>
			<td>TB_QUEUE_PUBSUB_INTEGRATION_QUEUE_PROPERTIES</td>
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
			<td>queue.service_bus.queue-properties.rule-engine</td>
			<td>TB_QUEUE_SERVICE_BUS_RE_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus properties for Rule Engine queues</td>
		</tr>
		<tr>
			<td>queue.service_bus.queue-properties.core</td>
			<td>TB_QUEUE_SERVICE_BUS_CORE_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus properties for Core queues</td>
		</tr>
		<tr>
			<td>queue.service_bus.queue-properties.transport-api</td>
			<td>TB_QUEUE_SERVICE_BUS_TA_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus properties for Transport Api queues</td>
		</tr>
		<tr>
			<td>queue.service_bus.queue-properties.notifications</td>
			<td>TB_QUEUE_SERVICE_BUS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus properties for Notification queues</td>
		</tr>
		<tr>
			<td>queue.service_bus.queue-properties.js-executor</td>
			<td>TB_QUEUE_SERVICE_BUS_JE_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus queue properties</td>
		</tr>
		<tr>
			<td>queue.service_bus.queue-properties.integration-api</td>
			<td>TB_QUEUE_SERVICE_BUS_INTEGRATION_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus properties for Integration Api queues</td>
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
			<td>queue.rabbitmq.queue-properties.rule-engine</td>
			<td>TB_QUEUE_RABBIT_MQ_RE_QUEUE_PROPERTIES</td>
			<td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
			<td> RabbitMQ properties for Rule Engine queues</td>
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
			<td>queue.rabbitmq.queue-properties.notifications</td>
			<td>TB_QUEUE_RABBIT_MQ_NOTIFICATIONS_QUEUE_PROPERTIES</td>
			<td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
			<td> RabbitMQ properties for Notification queues</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.queue-properties.js-executor</td>
			<td>TB_QUEUE_RABBIT_MQ_JE_QUEUE_PROPERTIES</td>
			<td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
			<td> RabbitMQ queue properties</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.queue-properties.integration-api</td>
			<td>TB_QUEUE_RABBIT_MQ_INTEGRATION_QUEUE_PROPERTIES</td>
			<td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
			<td> RabbitMQ properties for Integration Api queues</td>
		</tr>
		<tr>
			<td>queue.partitions.hash_function_name</td>
			<td>TB_QUEUE_PARTITIONS_HASH_FUNCTION_NAME</td>
			<td>murmur3_128</td>
			<td> murmur3_32, murmur3_128 or sha256</td>
		</tr>
		<tr>
			<td>queue.transport_api.requests_topic</td>
			<td>TB_QUEUE_TRANSPORT_API_REQUEST_TOPIC</td>
			<td>tb_transport.api.requests</td>
			<td> Topic used to consume api requests from transport microservices</td>
		</tr>
		<tr>
			<td>queue.transport_api.responses_topic</td>
			<td>TB_QUEUE_TRANSPORT_API_RESPONSE_TOPIC</td>
			<td>tb_transport.api.responses</td>
			<td> Topic used to produce api responses to transport microservices</td>
		</tr>
		<tr>
			<td>queue.transport_api.max_pending_requests</td>
			<td>TB_QUEUE_TRANSPORT_MAX_PENDING_REQUESTS</td>
			<td>10000</td>
			<td> Maximum pending api requests from transport microservices to be handled by server</td>
		</tr>
		<tr>
			<td>queue.transport_api.max_requests_timeout</td>
			<td>TB_QUEUE_TRANSPORT_MAX_REQUEST_TIMEOUT</td>
			<td>10000</td>
			<td> Maximum timeout in milliseconds to handle api request from transport microservice by server</td>
		</tr>
		<tr>
			<td>queue.transport_api.max_callback_threads</td>
			<td>TB_QUEUE_TRANSPORT_MAX_CALLBACK_THREADS</td>
			<td>100</td>
			<td> Amount of threads used to invoke callbacks</td>
		</tr>
		<tr>
			<td>queue.transport_api.request_poll_interval</td>
			<td>TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds to poll api requests from transport microservices</td>
		</tr>
		<tr>
			<td>queue.transport_api.response_poll_interval</td>
			<td>TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds to poll api response from transport microservices</td>
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
			<td>queue.js.request_topic</td>
			<td>REMOTE_JS_EVAL_REQUEST_TOPIC</td>
			<td>js_eval.requests</td>
			<td> JS Eval request topic</td>
		</tr>
		<tr>
			<td>queue.js.response_topic_prefix</td>
			<td>REMOTE_JS_EVAL_RESPONSE_TOPIC</td>
			<td>js_eval.responses</td>
			<td> JS Eval responses topic prefix that is combined with node id</td>
		</tr>
		<tr>
			<td>queue.js.max_pending_requests</td>
			<td>REMOTE_JS_MAX_PENDING_REQUESTS</td>
			<td>10000</td>
			<td> JS Eval max pending requests</td>
		</tr>
		<tr>
			<td>queue.js.max_eval_requests_timeout</td>
			<td>REMOTE_JS_MAX_EVAL_REQUEST_TIMEOUT</td>
			<td>60000</td>
			<td> JS Eval max request timeout</td>
		</tr>
		<tr>
			<td>queue.js.max_requests_timeout</td>
			<td>REMOTE_JS_MAX_REQUEST_TIMEOUT</td>
			<td>10000</td>
			<td> JS max request timeout</td>
		</tr>
		<tr>
			<td>queue.js.response_poll_interval</td>
			<td>REMOTE_JS_RESPONSE_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> JS response poll interval</td>
		</tr>
		<tr>
			<td>queue.rule-engine.topic</td>
			<td>TB_QUEUE_RULE_ENGINE_TOPIC</td>
			<td>tb_rule_engine</td>
			<td> Deprecated. It will be removed in the nearest releases</td>
		</tr>
		<tr>
			<td>queue.rule-engine.poll-interval</td>
			<td>TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds to poll messages by Rule Engine</td>
		</tr>
		<tr>
			<td>queue.rule-engine.pack-processing-timeout</td>
			<td>TB_QUEUE_RULE_ENGINE_PACK_PROCESSING_TIMEOUT_MS</td>
			<td>2000</td>
			<td> Timeout for processing a message pack of Rule Engine</td>
		</tr>
		<tr>
			<td>queue.rule-engine.stats.enabled</td>
			<td>TB_QUEUE_RULE_ENGINE_STATS_ENABLED</td>
			<td>true</td>
			<td> Enable/disable statistics for Rule Engine</td>
		</tr>
		<tr>
			<td>queue.rule-engine.stats.print-interval-ms</td>
			<td>TB_QUEUE_RULE_ENGINE_STATS_PRINT_INTERVAL_MS</td>
			<td>60000</td>
			<td> Statistics printing interval for Rule Engine</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name</td>
			<td>TB_QUEUE_RE_SQ_QUEUE_NAME</td>
			<td>SequentialByOriginator</td>
			<td> queue name</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name.topic</td>
			<td>TB_QUEUE_RE_SQ_TOPIC</td>
			<td>tb_rule_engine.sq</td>
			<td> queue topic</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name.poll-interval</td>
			<td>TB_QUEUE_RE_SQ_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> poll interval</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name.partitions</td>
			<td>TB_QUEUE_RE_SQ_PARTITIONS</td>
			<td>10</td>
			<td> number queue partitions</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name.consumer-per-partition</td>
			<td>TB_QUEUE_RE_SQ_CONSUMER_PER_PARTITION</td>
			<td>true</td>
			<td> if true - use for each customer different partition</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name.pack-processing-timeout</td>
			<td>TB_QUEUE_RE_SQ_PACK_PROCESSING_TIMEOUT_MS</td>
			<td>2000</td>
			<td> Timeout for processing a message pack</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name.submit-strategy.type</td>
			<td>TB_QUEUE_RE_SQ_SUBMIT_STRATEGY_TYPE</td>
			<td>SEQUENTIAL_BY_ORIGINATOR</td>
			<td> BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_BY_TENANT, SEQUENTIAL</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name.submit-strategy.batch-size</td>
			<td>TB_QUEUE_RE_SQ_SUBMIT_STRATEGY_BATCH_SIZE</td>
			<td>100</td>
			<td> Maximum number of messages in batch</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name.processing-strategy.type</td>
			<td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_TYPE</td>
			<td>RETRY_FAILED_AND_TIMED_OUT</td>
			<td> SKIP_ALL_FAILURES, SKIP_ALL_FAILURES_AND_TIMED_OUT, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name.processing-strategy.retries</td>
			<td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_RETRIES</td>
			<td>3</td>
			<td> Number of retries, 0 is unlimited</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name.processing-strategy.failure-percentage</td>
			<td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
			<td>0</td>
			<td> Skip retry if failures or timeouts are less then X percentage of messages;</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name.processing-strategy.pause-between-retries</td>
			<td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_RETRY_PAUSE</td>
			<td>5</td>
			<td> Time in seconds to wait in consumer thread before retries;</td>
		</tr>
		<tr>
			<td>queue.rule-engine.queues.name.processing-strategy.max-pause-between-retries</td>
			<td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
			<td>5</td>
			<td> Max allowed time in seconds for pause between retries.</td>
		</tr>
		<tr>
			<td>queue.integration.partitions</td>
			<td>TB_QUEUE_INTEGRATION_PARTITIONS</td>
			<td>3</td>
			<td> Name of hash function used for consistent hash ring in Cluster Mode. See architecture docs for more details. Valid values - murmur3_32, murmur3_128 or sha256</td>
		</tr>
		<tr>
			<td>queue.integration.notifications_topic</td>
			<td>TB_QUEUE_INTEGRATION_NOTIFICATIONS_TOPIC</td>
			<td>tb_ie.notifications</td>
			<td> Default notification topic name used by queue</td>
		</tr>
		<tr>
			<td>queue.integration.downlink_topic</td>
			<td>TB_QUEUE_INTEGRATION_DOWNLINK_TOPIC</td>
			<td>tb_ie.downlink</td>
			<td> Default downlink topic name used by queue</td>
		</tr>
		<tr>
			<td>queue.integration.uplink_topic</td>
			<td>TB_QUEUE_INTEGRATION_UPLINK_TOPIC</td>
			<td>tb_ie.uplink</td>
			<td> Default uplink topic name used by queue</td>
		</tr>
		<tr>
			<td>queue.integration.poll_interval</td>
			<td>TB_QUEUE_INTEGRATION_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds to poll messages by integrations</td>
		</tr>
		<tr>
			<td>queue.integration.pack-processing-timeout</td>
			<td>TB_QUEUE_INTEGRATION_PACK_PROCESSING_TIMEOUT_MS</td>
			<td>10000</td>
			<td> Timeout for processing a message pack by integrations</td>
		</tr>
		<tr>
			<td>queue.integration_api.requests_topic</td>
			<td>TB_QUEUE_INTEGRATION_EXECUTOR_API_REQUEST_TOPIC</td>
			<td>tb_ie.api.requests</td>
			<td> Default Integration Api request topic name used by queue</td>
		</tr>
		<tr>
			<td>queue.integration_api.responses_topic</td>
			<td>TB_QUEUE_INTEGRATION_EXECUTOR_API_RESPONSE_TOPIC</td>
			<td>tb_ie.api.responses</td>
			<td> Default Integration Api response topic name used by queue</td>
		</tr>
		<tr>
			<td>queue.integration_api.max_pending_requests</td>
			<td>TB_QUEUE_INTEGRATION_EXECUTOR_MAX_PENDING_REQUESTS</td>
			<td>10000</td>
			<td> Maximum pending api requests from integration executor to be handled by server<</td>
		</tr>
		<tr>
			<td>queue.integration_api.max_requests_timeout</td>
			<td>TB_QUEUE_INTEGRATION_EXECUTOR_MAX_REQUEST_TIMEOUT</td>
			<td>10000</td>
			<td> Maximum timeout in milliseconds to handle api request from integration executor microservice by server</td>
		</tr>
		<tr>
			<td>queue.integration_api.max_callback_threads</td>
			<td>TB_QUEUE_INTEGRATION_EXECUTOR_MAX_CALLBACK_THREADS</td>
			<td>10</td>
			<td> Amount of threads used to invoke callbacks</td>
		</tr>
		<tr>
			<td>queue.integration_api.request_poll_interval</td>
			<td>TB_QUEUE_INTEGRATION_EXECUTOR_REQUEST_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds to poll api requests from integration executor microservices</td>
		</tr>
		<tr>
			<td>queue.integration_api.response_poll_interval</td>
			<td>TB_QUEUE_INTEGRATION_EXECUTOR_RESPONSE_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds to poll api response from integration executor microservices</td>
		</tr>
	</tbody>
</table>


####  Tbel parameters

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


####  JS parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>js.evaluator</td>
			<td>JS_EVALUATOR</td>
			<td>local</td>
			<td> local/remote</td>
		</tr>
		<tr>
			<td>js.local.js_thread_pool_size</td>
			<td>LOCAL_JS_THREAD_POOL_SIZE</td>
			<td>50</td>
			<td> Specify thread pool size for javascript executor service</td>
		</tr>
		<tr>
			<td>js.local.use_js_sandbox</td>
			<td>USE_LOCAL_JS_SANDBOX</td>
			<td>true</td>
			<td> Use Sandboxed (secured) JVM JavaScript environment</td>
		</tr>
		<tr>
			<td>js.local.monitor_thread_pool_size</td>
			<td>LOCAL_JS_SANDBOX_MONITOR_THREAD_POOL_SIZE</td>
			<td>4</td>
			<td> Specify thread pool size for JavaScript sandbox resource monitor</td>
		</tr>
		<tr>
			<td>js.local.max_cpu_time</td>
			<td>LOCAL_JS_SANDBOX_MAX_CPU_TIME</td>
			<td>8000</td>
			<td> Maximum CPU time in milliseconds allowed for script execution</td>
		</tr>
		<tr>
			<td>js.local.max_errors</td>
			<td>LOCAL_JS_SANDBOX_MAX_ERRORS</td>
			<td>3</td>
			<td> Maximum allowed JavaScript execution errors before JavaScript will be blacklisted</td>
		</tr>
		<tr>
			<td>js.local.max_requests_timeout</td>
			<td>LOCAL_JS_MAX_REQUEST_TIMEOUT</td>
			<td>0</td>
			<td> JS Eval max request timeout. 0 - no timeout</td>
		</tr>
		<tr>
			<td>js.local.max_black_list_duration_sec</td>
			<td>LOCAL_JS_SANDBOX_MAX_BLACKLIST_DURATION_SEC</td>
			<td>60</td>
			<td> Maximum time in seconds for black listed function to stay in the list.</td>
		</tr>
		<tr>
			<td>js.local.stats.enabled</td>
			<td>TB_JS_LOCAL_STATS_ENABLED</td>
			<td>false</td>
			<td> Enable/Disable stats collection for local JS executor</td>
		</tr>
		<tr>
			<td>js.local.stats.print_interval_ms</td>
			<td>TB_JS_LOCAL_STATS_PRINT_INTERVAL_MS</td>
			<td>10000</td>
			<td> Interval of logging for local JS executor stats</td>
		</tr>
		<tr>
			<td>js.remote.js_thread_pool_size</td>
			<td>REMOTE_JS_THREAD_POOL_SIZE</td>
			<td>50</td>
			<td> Specify thread pool size for javascript executor service</td>
		</tr>
		<tr>
			<td>js.remote.max_errors</td>
			<td>REMOTE_JS_SANDBOX_MAX_ERRORS</td>
			<td>3</td>
			<td> Maximum allowed JavaScript execution errors before JavaScript will be blacklisted</td>
		</tr>
		<tr>
			<td>js.remote.max_black_list_duration_sec</td>
			<td>REMOTE_JS_SANDBOX_MAX_BLACKLIST_DURATION_SEC</td>
			<td>60</td>
			<td> Maximum time in seconds for black listed function to stay in the list.</td>
		</tr>
		<tr>
			<td>js.remote.stats.enabled</td>
			<td>TB_JS_REMOTE_STATS_ENABLED</td>
			<td>false</td>
			<td> Enable/Disable stats collection for remote JS executor</td>
		</tr>
		<tr>
			<td>js.remote.stats.print_interval_ms</td>
			<td>TB_JS_REMOTE_STATS_PRINT_INTERVAL_MS</td>
			<td>10000</td>
			<td> Interval of logging for remote JS executor stats</td>
		</tr>
	</tbody>
</table>


####  Cache parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>cache.type</td>
			<td>CACHE_TYPE</td>
			<td>redis</td>
			<td> caffeine or redis</td>
		</tr>
		<tr>
			<td>cache.maximumPoolSize</td>
			<td>CACHE_MAXIMUM_POOL_SIZE</td>
			<td>16</td>
			<td> max pool size to process futures that calls the external cache</td>
		</tr>
		<tr>
			<td>cache.specs.devices.timeToLiveInMinutes</td>
			<td>CACHE_SPECS_DEVICES_TTL</td>
			<td>1440</td>
			<td> Device cache TTL</td>
		</tr>
		<tr>
			<td>cache.specs.devices.maxSize</td>
			<td>CACHE_SPECS_DEVICES_MAX_SIZE</td>
			<td>10000</td>
			<td> 0 means the cache is disabled</td>
		</tr>
		<tr>
			<td>cache.specs.downlink.timeToLiveInMinutes</td>
			<td>CACHE_SPECS_DOWNLINK_TTL</td>
			<td>1440</td>
			<td> Downlink converter cache specs TTL</td>
		</tr>
		<tr>
			<td>cache.specs.downlink.maxSize</td>
			<td>CACHE_SPECS_DOWNLINK_MAX_SIZE</td>
			<td>100000</td>
			<td> 0 means the cache is disabled</td>
		</tr>
		<tr>
			<td>cache.specs.integrations.timeToLiveInMinutes</td>
			<td>CACHE_SPECS_INTEGRATIONS_TTL</td>
			<td>1440</td>
			<td> integrations cache specs TTL</td>
		</tr>
		<tr>
			<td>cache.specs.integrations.maxSize</td>
			<td>CACHE_SPECS_INTEGRATIONS_MAX_SIZE</td>
			<td>10000</td>
			<td> 0 means the cache is disabled</td>
		</tr>
		<tr>
			<td>cache.rateLimits.timeToLiveInMinutes</td>
			<td>CACHE_SPECS_RATE_LIMITS_TTL</td>
			<td>60</td>
			<td> Rate limits cache TTL</td>
		</tr>
		<tr>
			<td>cache.rateLimits.maxSize</td>
			<td>CACHE_SPECS_RATE_LIMITS_MAX_SIZE</td>
			<td>100000</td>
			<td> 0 means the cache is disabled</td>
		</tr>
	</tbody>
</table>


####  Redis parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>redis.connection.type</td>
			<td>REDIS_CONNECTION_TYPE</td>
			<td>standalone</td>
			<td> standalone or cluster</td>
		</tr>
		<tr>
			<td>redis.standalone.host</td>
			<td>REDIS_HOST</td>
			<td>localhost</td>
			<td> Redis connection host</td>
		</tr>
		<tr>
			<td>redis.standalone.port</td>
			<td>REDIS_PORT</td>
			<td>6379</td>
			<td> Redis connection port</td>
		</tr>
		<tr>
			<td>redis.standalone.useDefaultClientConfig</td>
			<td>REDIS_USE_DEFAULT_CLIENT_CONFIG</td>
			<td>true</td>
			<td> Use the default Redis configuration file</td>
		</tr>
		<tr>
			<td>redis.standalone.clientName</td>
			<td>REDIS_CLIENT_NAME</td>
			<td>standalone</td>
			<td> this value may be used only if you used not default ClientConfig</td>
		</tr>
		<tr>
			<td>redis.standalone.connectTimeout</td>
			<td>REDIS_CLIENT_CONNECT_TIMEOUT</td>
			<td>30000</td>
			<td> this value may be used only if you used not default ClientConfig</td>
		</tr>
		<tr>
			<td>redis.standalone.readTimeout</td>
			<td>REDIS_CLIENT_READ_TIMEOUT</td>
			<td>60000</td>
			<td> this value may be used only if you used not default ClientConfig</td>
		</tr>
		<tr>
			<td>redis.standalone.usePoolConfig</td>
			<td>REDIS_CLIENT_USE_POOL_CONFIG</td>
			<td>false</td>
			<td> this value may be used only if you used not default ClientConfig</td>
		</tr>
		<tr>
			<td>redis.cluster.nodes</td>
			<td>REDIS_NODES</td>
			<td></td>
			<td> Comma-separated list of "host:port" pairs to bootstrap from.</td>
		</tr>
		<tr>
			<td>redis.cluster.max-redirects</td>
			<td>REDIS_MAX_REDIRECTS</td>
			<td>12</td>
			<td> Maximum number of redirects to follow when executing commands across the cluster.</td>
		</tr>
		<tr>
			<td>redis.cluster.useDefaultPoolConfig</td>
			<td>REDIS_USE_DEFAULT_POOL_CONFIG</td>
			<td>true</td>
			<td> if set false will be used pool config build from values of the pool config section</td>
		</tr>
		<tr>
			<td>redis.db</td>
			<td>REDIS_DB</td>
			<td>0</td>
			<td> db index</td>
		</tr>
		<tr>
			<td>redis.password</td>
			<td>REDIS_PASSWORD</td>
			<td></td>
			<td> db password</td>
		</tr>
		<tr>
			<td>redis.pool_config.maxTotal</td>
			<td>REDIS_POOL_CONFIG_MAX_TOTAL</td>
			<td>128</td>
			<td> Maximum number of connections that can be allocated by the connection pool</td>
		</tr>
		<tr>
			<td>redis.pool_config.maxIdle</td>
			<td>REDIS_POOL_CONFIG_MAX_IDLE</td>
			<td>128</td>
			<td> Maximum number of idle connections that can be maintained in the pool without being closed</td>
		</tr>
		<tr>
			<td>redis.pool_config.minIdle</td>
			<td>REDIS_POOL_CONFIG_MIN_IDLE</td>
			<td>16</td>
			<td> Minumum number of idle connections that can be maintained in the pool without being closed</td>
		</tr>
		<tr>
			<td>redis.pool_config.testOnBorrow</td>
			<td>REDIS_POOL_CONFIG_TEST_ON_BORROW</td>
			<td>true</td>
			<td> Enable/Disable PING command sent when a connection is borrowed</td>
		</tr>
		<tr>
			<td>redis.pool_config.testOnReturn</td>
			<td>REDIS_POOL_CONFIG_TEST_ON_RETURN</td>
			<td>true</td>
			<td> The property is used to specify whether to test the connection before returning it to the connection pool.</td>
		</tr>
		<tr>
			<td>redis.pool_config.testWhileIdle</td>
			<td>REDIS_POOL_CONFIG_TEST_WHILE_IDLE</td>
			<td>true</td>
			<td> The property is used in the context of connection pooling in Redis</td>
		</tr>
		<tr>
			<td>redis.pool_config.minEvictableMs</td>
			<td>REDIS_POOL_CONFIG_MIN_EVICTABLE_MS</td>
			<td>60000</td>
			<td> Minimum time that an idle connection should be idle before it can be evicted from the connection pool. The value is set in milliseconds</td>
		</tr>
		<tr>
			<td>redis.pool_config.evictionRunsMs</td>
			<td>REDIS_POOL_CONFIG_EVICTION_RUNS_MS</td>
			<td>30000</td>
			<td> Specifies the time interval in milliseconds between two consecutive eviction runs</td>
		</tr>
		<tr>
			<td>redis.pool_config.maxWaitMills</td>
			<td>REDIS_POOL_CONFIG_MAX_WAIT_MS</td>
			<td>60000</td>
			<td> Maximum time in milliseconds where a client is willing to wait for a connection from the pool when all connections are exhausted</td>
		</tr>
		<tr>
			<td>redis.pool_config.numberTestsPerEvictionRun</td>
			<td>REDIS_POOL_CONFIG_NUMBER_TESTS_PER_EVICTION_RUN</td>
			<td>3</td>
			<td> Specifies the number of connections to test for eviction during each eviction run</td>
		</tr>
		<tr>
			<td>redis.pool_config.blockWhenExhausted</td>
			<td>REDIS_POOL_CONFIG_BLOCK_WHEN_EXHAUSTED</td>
			<td>true</td>
			<td> Determines the behavior when a thread requests a connection from the pool, but there are no available connections, and the pool cannot create more due to the maxTotal configuration</td>
		</tr>
	</tbody>
</table>


####  CoAP server parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>coap.enabled</td>
			<td>COAP_ENABLED</td>
			<td>true</td>
			<td> Enable/disable coap transport protocol.</td>
		</tr>
		<tr>
			<td>coap.bind_address</td>
			<td>COAP_BIND_ADDRESS</td>
			<td>0.0.0.0</td>
			<td> CoAP bind address</td>
		</tr>
		<tr>
			<td>coap.bind_port</td>
			<td>COAP_BIND_PORT</td>
			<td>5683</td>
			<td> CoAP bind port</td>
		</tr>
		<tr>
			<td>coap.dtls.enabled</td>
			<td>COAP_DTLS_ENABLED</td>
			<td>false</td>
			<td> Enable/disable DTLS 1.2 support</td>
		</tr>
		<tr>
			<td>coap.dtls.retransmission_timeout</td>
			<td>COAP_DTLS_RETRANSMISSION_TIMEOUT_IN_MILLISECONDS</td>
			<td>9000</td>
			<td> RFC7925_RETRANSMISSION_TIMEOUT_IN_MILLISECONDS = 9000</td>
		</tr>
		<tr>
			<td>coap.dtls.bind_address</td>
			<td>COAP_DTLS_BIND_ADDRESS</td>
			<td>0.0.0.0</td>
			<td> CoAP DTLS bind address</td>
		</tr>
		<tr>
			<td>coap.dtls.bind_port</td>
			<td>COAP_DTLS_BIND_PORT</td>
			<td>5684</td>
			<td> CoAP DTLS bind port</td>
		</tr>
		<tr>
			<td>coap.dtls.credentials.type</td>
			<td>COAP_DTLS_CREDENTIALS_TYPE</td>
			<td>PEM</td>
			<td> Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
		</tr>
		<tr>
			<td>coap.dtls.credentials.pem.cert_file</td>
			<td>COAP_DTLS_PEM_CERT</td>
			<td>coapserver.pem</td>
			<td> Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
		</tr>
		<tr>
			<td>coap.dtls.credentials.pem.key_file</td>
			<td>COAP_DTLS_PEM_KEY</td>
			<td>coapserver_key.pem</td>
			<td> Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td>
		</tr>
		<tr>
			<td>coap.dtls.credentials.pem.key_password</td>
			<td>COAP_DTLS_PEM_KEY_PASSWORD</td>
			<td>server_key_password</td>
			<td> Server certificate private key password (optional)</td>
		</tr>
		<tr>
			<td>coap.dtls.credentials.keystore.type</td>
			<td>COAP_DTLS_KEY_STORE_TYPE</td>
			<td>JKS</td>
			<td> Type of the key store (JKS or PKCS12)</td>
		</tr>
		<tr>
			<td>coap.dtls.credentials.keystore.store_file</td>
			<td>COAP_DTLS_KEY_STORE</td>
			<td>coapserver.jks</td>
			<td> Path to the key store that holds the SSL certificate</td>
		</tr>
		<tr>
			<td>coap.dtls.credentials.keystore.store_password</td>
			<td>COAP_DTLS_KEY_STORE_PASSWORD</td>
			<td>server_ks_password</td>
			<td> Password used to access the key store</td>
		</tr>
		<tr>
			<td>coap.dtls.credentials.keystore.key_alias</td>
			<td>COAP_DTLS_KEY_ALIAS</td>
			<td>serveralias</td>
			<td> Key alias</td>
		</tr>
		<tr>
			<td>coap.dtls.credentials.keystore.key_password</td>
			<td>COAP_DTLS_KEY_PASSWORD</td>
			<td>server_key_password</td>
			<td> Password used to access the key</td>
		</tr>
		<tr>
			<td>coap.dtls.x509.skip_validity_check_for_client_cert</td>
			<td>TB_COAP_X509_DTLS_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT</td>
			<td>false</td>
			<td> Skip certificate validity check for client certificates.</td>
		</tr>
		<tr>
			<td>coap.dtls.x509.dtls_session_inactivity_timeout</td>
			<td>TB_COAP_X509_DTLS_SESSION_INACTIVITY_TIMEOUT</td>
			<td>86400000</td>
			<td> Inactivity timeout of DTLS session. Used to cleanup cache</td>
		</tr>
		<tr>
			<td>coap.dtls.x509.dtls_session_report_timeout</td>
			<td>TB_COAP_X509_DTLS_SESSION_REPORT_TIMEOUT</td>
			<td>1800000</td>
			<td> Interval of periodic eviction of the timed-out DTLS sessions</td>
		</tr>
	</tbody>
</table>


####  Event parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>event.debug.rate_limits.enabled</td>
			<td>DEBUG_MODE_RATE_LIMITS_PER_TENANT_ENABLED</td>
			<td>true</td>
			<td> If true rate limits will be active</td>
		</tr>
		<tr>
			<td>event.debug.rate_limits.integration</td>
			<td>INTEGRATION_DEBUG_MODE_RATE_LIMITS_PER_TENANT</td>
			<td>50000:3600</td>
			<td> No more than 50000 messages per hour</td>
		</tr>
		<tr>
			<td>event.debug.rate_limits.converter</td>
			<td>CONVERTER_DEBUG_MODE_RATE_LIMITS_PER_TENANT</td>
			<td>50000:3600</td>
			<td> No more than 50000 messages per hour</td>
		</tr>
		<tr>
			<td>service.type</td>
			<td>TB_SERVICE_TYPE</td>
			<td>tb-integration-executor</td>
			<td> service type</td>
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
			<td> Allow to enable integration on service/microservice integration executor. Allowed values: OCEANCONNECT, SIGFOX, THINGPARK, TPE, CHIRPSTACK, TUYA, UDP, TCP, TTN, TTI, AZURE_EVENT_HUB, OPC_UA, IBM_WATSON_IOT, AWS_IOT, AWS_SQS, LORIOT, COAP, AZURE_SERVICE_BUS, HTTP, MQTT or ALL to allow all</td>
		</tr>
		<tr>
			<td>service.integrations.excluded</td>
			<td>TB_SERVICE_INTEGRATIONS_EXCLUDED</td>
			<td>NONE</td>
			<td> List of integrations to exclude from processing on service/microservice integration executor. Allowed values: OCEANCONNECT, SIGFOX, THINGPARK, TPE, CHIRPSTACK, TUYA, UDP, TCP, TTN, TTI, AZURE_EVENT_HUB, OPC_UA, IBM_WATSON_IOT, AWS_IOT, AWS_SQS, LORIOT, COAP, AZURE_SERVICE_BUS, HTTP, MQTT. By default NONE</td>
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
