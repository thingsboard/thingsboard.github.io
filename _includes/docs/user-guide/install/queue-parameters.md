<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>queue.kafka.bootstrap.servers</td>
            <td>TB_KAFKA_SERVERS</td>
            <td>localhost:9092</td>
            <td>Kafka Bootstrap servers list as a connection string for kafka client</td>
        </tr>
        <tr>
            <td>queue.kafka.acks</td>
            <td>TB_KAFKA_ACKS</td>
            <td>all</td>
            <td>General Kafka client setting</td>
        </tr>
        <tr>
            <td>queue.kafka.retries</td>
            <td>TB_KAFKA_RETRIES</td>
            <td>1</td>
            <td>General Kafka client setting</td>
        </tr>
        <tr>
            <td>queue.kafka.compression</td>
            <td>TB_KAFKA_COMPRESSION_TYPE</td>
            <td>none</td>
            <td>Compression of the Kafka messages: none or gzip</td>
        </tr>
        <tr>
            <td>queue.kafka.batch.size</td>
            <td>TB_KAFKA_BATCH_SIZE</td>
            <td>16384</td>
            <td>General Kafka client setting</td>
        </tr>
        <tr>
            <td>queue.kafka.linger.ms</td>
            <td>TB_KAFKA_LINGER_MS</td>
            <td>1</td>
            <td>General Kafka client setting</td>
        </tr>
        <tr>
            <td>queue.kafka.max.request.size</td>
            <td>TB_KAFKA_MAX_REQUEST_SIZE</td>
            <td>1048576</td>
            <td>General Kafka client setting</td>
        </tr>
        <tr>
            <td>queue.kafka.max.in.flight.requests.per.connection</td>
            <td>TB_KAFKA_MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION</td>
            <td>5</td>
            <td>General Kafka client setting</td>
        </tr>
        <tr>
            <td>queue.kafka.buffer.memory</td>
            <td>TB_BUFFER_MEMORY</td>
            <td>33554432</td>
            <td>General Kafka client setting</td>
        </tr>
        <tr>
            <td>queue.kafka.replication_factor</td>
            <td>TB_QUEUE_KAFKA_REPLICATION_FACTOR</td>
            <td>1</td>
            <td>General Kafka client setting</td>
        </tr>
        <tr>
            <td>queue.kafka.max_poll_interval_ms</td>
            <td>TB_QUEUE_KAFKA_MAX_POLL_INTERVAL_MS</td>
            <td>300000</td>
            <td>General Kafka client setting</td>
        </tr>
        <tr>
            <td>queue.kafka.max_poll_records</td>
            <td>TB_QUEUE_KAFKA_MAX_POLL_RECORDS</td>
            <td>8192</td>
            <td>General Kafka client setting</td>
        </tr>
        <tr>
            <td>queue.kafka.max_partition_fetch_bytes</td>
            <td>TB_QUEUE_KAFKA_MAX_PARTITION_FETCH_BYTES</td>
            <td>16777216</td>
            <td>General Kafka client setting</td>
        </tr>
        <tr>
            <td>queue.kafka.fetch_max_bytes</td>
            <td>TB_QUEUE_KAFKA_FETCH_MAX_BYTES</td>
            <td>134217728</td>
            <td>General Kafka client setting</td>
        </tr>
        <tr>
            <td>queue.kafka.use_confluent_cloud</td>
            <td>TB_QUEUE_KAFKA_USE_CONFLUENT_CLOUD</td>
            <td>false</td>
            <td>Enable to connect to Confluent Cloud.</td>
        </tr>
        <tr>
            <td>queue.kafka.confluent.ssl.algorithm</td>
            <td>TB_QUEUE_KAFKA_CONFLUENT_SSL_ALGORITHM</td>
            <td>https</td>
            <td>Confluent Cloud connection settings</td>
        </tr>
        <tr>
            <td>queue.kafka.confluent.sasl.mechanism</td>
            <td>TB_QUEUE_KAFKA_CONFLUENT_SASL_MECHANISM</td>
            <td>PLAIN</td>
            <td>Confluent Cloud connection settings</td>
        </tr>
        <tr>
            <td>queue.kafka.confluent.sasl.config</td>
            <td>TB_QUEUE_KAFKA_CONFLUENT_SASL_JAAS_CONFIG</td>
            <td></td>
            <td>Confluent Cloud connection settings</td>
        </tr>
        <tr>
            <td>queue.kafka.confluent.security.protocol</td>
            <td>TB_QUEUE_KAFKA_CONFLUENT_SECURITY_PROTOCOL</td>
            <td>SASL_SSL</td>
            <td>Confluent Cloud connection settings</td>
        </tr>
        <tr>
            <td>queue.kafka.consumer-properties-per-topic.tb_ota_package.key</td>
            <td></td>
            <td>max.poll.records</td>
            <td>Example of specific consumer properties key per topic</td>
        </tr>
        <tr>
            <td>queue.kafka.consumer-properties-per-topic.tb_ota_package.value</td>
            <td>TB_QUEUE_KAFKA_OTA_MAX_POLL_RECORDS</td>
            <td>10</td>
            <td>Example of specific consumer properties value per topic</td>
        </tr>
        <tr>
            <td>queue.kafka.other.key</td>
            <td>request.timeout.ms</td>
            <td></td>
            <td>refer to https://docs.confluent.io/platform/current/installation/configuration/producer-configs.html#producerconfigs_request.timeout.ms</td>
        </tr>
        <tr>
            <td>queue.kafka.other.value</td>
            <td>TB_QUEUE_KAFKA_REQUEST_TIMEOUT_MS</td>
            <td>30000</td>
            <td>(30 seconds)</td>
        </tr>
        <tr>
            <td>queue.kafka.other.key</td>
            <td>session.timeout.ms</td>
            <td></td>
            <td>refer to https://docs.confluent.io/platform/current/installation/configuration/consumer-configs.html#consumerconfigs_session.timeout.ms</td>
        </tr>
        <tr>
            <td>queue.kafka.other.value</td>
            <td>TB_QUEUE_KAFKA_SESSION_TIMEOUT_MS</td>
            <td>10000</td>
            <td>(10 seconds)</td>
        </tr>
        <tr>
            <td>queue.kafka.topic-properties.rule-engine</td>
            <td>TB_QUEUE_KAFKA_RE_TOPIC_PROPERTIES</td>
            <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
            <td>Kafka properties for Rule Engine topics</td>
        </tr>
        <tr>
            <td>queue.kafka.topic-properties.core</td>
            <td>TB_QUEUE_KAFKA_CORE_TOPIC_PROPERTIES</td>
            <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
            <td>Kafka properties for Core topics</td>
        </tr>
        <tr>
            <td>queue.kafka.topic-properties.transport-api</td>
            <td>TB_QUEUE_KAFKA_TA_TOPIC_PROPERTIES</td>
            <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
            <td>Kafka properties for Transport Api topics</td>
        </tr>
        <tr>
            <td>queue.kafka.topic-properties.notifications</td>
            <td>TB_QUEUE_KAFKA_NOTIFICATIONS_TOPIC_PROPERTIES</td>
            <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
            <td>Kafka properties for Notifications topics</td>
        </tr>
        <tr>
            <td>queue.kafka.topic-properties.js-executor</td>
            <td>TB_QUEUE_KAFKA_JE_TOPIC_PROPERTIES</td>
            <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:104857600;partitions:100;min.insync.replicas:1</td>
            <td>Kafka properties for JS Executor topics</td>
        </tr>
        <tr>
            <td>queue.kafka.topic-properties.ota-updates</td>
            <td>TB_QUEUE_KAFKA_OTA_TOPIC_PROPERTIES</td>
            <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:10;min.insync.replicas:1</td>
            <td>Kafka properties for OTA updates topic</td>
        </tr>
        <tr>
            <td>queue.kafka.consumer-stats.enabled</td>
            <td>TB_QUEUE_KAFKA_CONSUMER_STATS_ENABLED</td>
            <td>true</td>
            <td>Prints lag between consumer group offset and last messages offset in Kafka topics</td>
        </tr>
        <tr>
            <td>queue.kafka.consumer-stats.print-interval-ms</td>
            <td>TB_QUEUE_KAFKA_CONSUMER_STATS_MIN_PRINT_INTERVAL_MS</td>
            <td>60000</td>
            <td>Statistics printing interval for Kafka's consumer-groups stats</td>
        </tr>
        <tr>
            <td>queue.kafka.consumer-stats.kafka-response-timeout-ms</td>
            <td>TB_QUEUE_KAFKA_CONSUMER_STATS_RESPONSE_TIMEOUT_MS</td>
            <td>1000</td>
            <td>Time to wait for the stats-loading requests to Kafka to finish</td>
        </tr>
        <tr>
            <td>queue.aws_sqs.use_default_credential_provider_chain</td>
            <td>TB_QUEUE_AWS_SQS_USE_DEFAULT_CREDENTIAL_PROVIDER_CHAIN</td>
            <td>false</td>
            <td>Use default credentials provider for AWS SQS</td>
        </tr>
        <tr>
            <td>queue.aws_sqs.access_key_id</td>
            <td>TB_QUEUE_AWS_SQS_ACCESS_KEY_ID</td>
            <td>YOUR_KEY</td>
            <td>Access key ID from AWS IAM user</td>
        </tr>
        <tr>
            <td>queue.aws_sqs.secret_access_key</td>
            <td>TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY</td>
            <td>YOUR_SECRET</td>
            <td>Secret access key from AWS IAM user</td>
        </tr>
        <tr>
            <td>queue.aws_sqs.region</td>
            <td>TB_QUEUE_AWS_SQS_REGION</td>
            <td>YOUR_REGION</td>
            <td>Region from AWS account</td>
        </tr>
        <tr>
            <td>queue.aws_sqs.threads_per_topic</td>
            <td>TB_QUEUE_AWS_SQS_THREADS_PER_TOPIC</td>
            <td>1</td>
            <td>Number of threads per each AWS SQS queue in consumer</td>
        </tr>
        <tr>
            <td>queue.aws_sqs.queue-properties.rule-engine</td>
            <td>TB_QUEUE_AWS_SQS_RE_QUEUE_PROPERTIES</td>
            <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
            <td>VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
        </tr>
        <tr>
            <td>queue.aws_sqs.queue-properties.core</td>
            <td>TB_QUEUE_AWS_SQS_CORE_QUEUE_PROPERTIES</td>
            <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
            <td>VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
        </tr>
        <tr>
            <td>queue.aws_sqs.queue-properties.transport-api</td>
            <td>TB_QUEUE_AWS_SQS_TA_QUEUE_PROPERTIES</td>
            <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
            <td>VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
        </tr>
        <tr>
            <td>queue.aws_sqs.queue-properties.notifications</td>
            <td>TB_QUEUE_AWS_SQS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
            <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
            <td>VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
        </tr>
        <tr>
            <td>queue.aws_sqs.queue-properties.js-executor</td>
            <td>TB_QUEUE_AWS_SQS_JE_QUEUE_PROPERTIES</td>
            <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
            <td>VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
        </tr>
        <tr>
            <td>queue.pubsub.project_id</td>
            <td>TB_QUEUE_PUBSUB_PROJECT_ID</td>
            <td>YOUR_PROJECT_ID</td>
            <td>Project Id from google cloud</td>
        </tr>
        <tr>
            <td>queue.pubsub.service_account</td>
            <td>TB_QUEUE_PUBSUB_SERVICE_ACCOUNT</td>
            <td>YOUR_SERVICE_ACCOUNT</td>
            <td>API Credentials in json format</td>
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
            <td>Number of messages per a consumer</td>
        </tr>
        <tr>
            <td>queue.pubsub.queue-properties.rule-engine</td>
            <td>TB_QUEUE_PUBSUB_RE_QUEUE_PROPERTIES</td>
            <td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
            <td>Pub/Sub properties for Rule Engine subscribers, messages which will commit after ackDeadlineInSec period can be consume again</td>
        </tr>
        <tr>
            <td>queue.pubsub.queue-properties.core</td>
            <td>TB_QUEUE_PUBSUB_CORE_QUEUE_PROPERTIES</td>
            <td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
            <td>Pub/Sub properties for Core subscribers, messages which will commit after ackDeadlineInSec period can be consume again</td>
        </tr>
        <tr>
            <td>queue.pubsub.queue-properties.transport-api</td>
            <td>TB_QUEUE_PUBSUB_TA_QUEUE_PROPERTIES</td>
            <td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
            <td>Pub/Sub properties for Transport Api subscribers, messages which will commit after ackDeadlineInSec period can be consume again</td>
        </tr>
        <tr>
            <td>queue.pubsub.queue-properties.notifications</td>
            <td>TB_QUEUE_PUBSUB_NOTIFICATIONS_QUEUE_PROPERTIES</td>
            <td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
            <td>Pub/Sub properties for Notifications subscribers, messages which will commit after ackDeadlineInSec period can be consume again</td>
        </tr>
        <tr>
            <td>queue.pubsub.queue-properties.js-executor</td>
            <td>TB_QUEUE_PUBSUB_JE_QUEUE_PROPERTIES</td>
            <td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
            <td>Pub/Sub properties for Js Executor subscribers, messages which will commit after ackDeadlineInSec period can be consume again</td>
        </tr>
        <tr>
            <td>queue.service_bus.namespace_name</td>
            <td>TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME</td>
            <td>YOUR_NAMESPACE_NAME</td>
            <td>Azure namespace is a scoping container for all messaging components</td>
        </tr>
        <tr>
            <td>queue.service_bus.sas_key_name</td>
            <td>TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME</td>
            <td>YOUR_SAS_KEY_NAME</td>
            <td>Azure Service Bus Shared Access Signatures key name</td>
        </tr>
        <tr>
            <td>queue.service_bus.sas_key</td>
            <td>TB_QUEUE_SERVICE_BUS_SAS_KEY</td>
            <td>YOUR_SAS_KEY</td>
            <td>Azure Service Bus Shared Access Signatures key</td>
        </tr>
        <tr>
            <td>queue.service_bus.max_messages</td>
            <td>TB_QUEUE_SERVICE_BUS_MAX_MESSAGES</td>
            <td>1000</td>
            <td>Number of messages per a consumer</td>
        </tr>
        <tr>
            <td>queue.service_bus.queue-properties.rule-engine</td>
            <td>TB_QUEUE_SERVICE_BUS_RE_QUEUE_PROPERTIES</td>
            <td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
            <td>Azure Service Bus properties for Rule Engine queues</td>
        </tr>
        <tr>
            <td>queue.service_bus.queue-properties.core</td>
            <td>TB_QUEUE_SERVICE_BUS_CORE_QUEUE_PROPERTIES</td>
            <td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
            <td>Azure Service Bus properties for Core queues</td>
        </tr>
        <tr>
            <td>queue.service_bus.queue-properties.transport-api</td>
            <td>TB_QUEUE_SERVICE_BUS_TA_QUEUE_PROPERTIES</td>
            <td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
            <td>Azure Service Bus properties for Transport Api queues</td>
        </tr>
        <tr>
            <td>queue.service_bus.queue-properties.notifications</td>
            <td>TB_QUEUE_SERVICE_BUS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
            <td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
            <td>Azure Service Bus properties for Notifications queues</td>
        </tr>
        <tr>
            <td>queue.service_bus.queue-properties.js-executor</td>
            <td>TB_QUEUE_SERVICE_BUS_JE_QUEUE_PROPERTIES</td>
            <td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
            <td>Azure Service Bus properties for Js Executor queues</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.exchange_name</td>
            <td>TB_QUEUE_RABBIT_MQ_EXCHANGE_NAME</td>
            <td></td>
            <td>Default empty</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.host</td>
            <td>TB_QUEUE_RABBIT_MQ_HOST</td>
            <td>localhost</td>
            <td>RabbitMQ host used to establish connection</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.port</td>
            <td>TB_QUEUE_RABBIT_MQ_PORT</td>
            <td>5672</td>
            <td>RabbitMQ host used to establish connection</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.virtual_host</td>
            <td>TB_QUEUE_RABBIT_MQ_VIRTUAL_HOST</td>
            <td>/</td>
            <td>Virtual hosts provide logical grouping and separation of resources</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.password</td>
            <td>TB_QUEUE_RABBIT_MQ_PASSWORD</td>
            <td>YOUR_PASSWORD</td>
            <td>User password for RabbitMQ user account</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.automatic_recovery_enabled</td>
            <td>TB_QUEUE_RABBIT_MQ_AUTOMATIC_RECOVERY_ENABLED</td>
            <td>false</td>
            <td>Network connection between clients and RabbitMQ nodes can fail. RabbitMQ Java client supports automatic recovery of connections and topology (queues, exchanges, bindings, and consumers)</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.connection_timeout</td>
            <td>TB_QUEUE_RABBIT_MQ_CONNECTION_TIMEOUT</td>
            <td>60000</td>
            <td>The connection timeout for the RabbitMQ connection factory</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.handshake_timeout</td>
            <td>TB_QUEUE_RABBIT_MQ_HANDSHAKE_TIMEOUT</td>
            <td>10000</td>
            <td>RabbitMQ has a timeout for connection handshake. When clients run in heavily constrained environments, it may be necessary to increase the timeout</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.queue-properties.rule-engine</td>
            <td>TB_QUEUE_RABBIT_MQ_RE_QUEUE_PROPERTIES</td>
            <td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
            <td>RabbitMQ properties for Rule Engine queues</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.queue-properties.core</td>
            <td>TB_QUEUE_RABBIT_MQ_CORE_QUEUE_PROPERTIES</td>
            <td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
            <td>RabbitMQ properties for Core queues</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.queue-properties.transport-api</td>
            <td>TB_QUEUE_RABBIT_MQ_TA_QUEUE_PROPERTIES</td>
            <td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
            <td>RabbitMQ properties for Transport Api queues</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.queue-properties.notifications</td>
            <td>TB_QUEUE_RABBIT_MQ_NOTIFICATIONS_QUEUE_PROPERTIES</td>
            <td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
            <td>RabbitMQ properties for Notifications queues</td>
        </tr>
        <tr>
            <td>queue.rabbitmq.queue-properties.js-executor</td>
            <td>TB_QUEUE_RABBIT_MQ_JE_QUEUE_PROPERTIES</td>
            <td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
            <td>RabbitMQ properties for Js Executor queues</td>
        </tr>
        <tr>
            <td>queue.partitions.hash_function_name</td>
            <td>TB_QUEUE_PARTITIONS_HASH_FUNCTION_NAME</td>
            <td>murmur3_128</td>
            <td>Name of hash function used for consistent hash ring in Cluster Mode. See architecture docs for more details. murmur3_32, murmur3_128 or sha256</td>
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
            <td>Topic name for Core microservices</td>
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
            <td>The topic for queue of OTA updates</td>
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
            <td>The size of OTA updates notifications fetched from the queue. The queue stores pairs of firmware and device ids.</td>
        </tr>
        <tr>
            <td>queue.core.usage-stats-topic</td>
            <td>TB_QUEUE_US_TOPIC</td>
            <td>tb_usage_stats</td>
            <td>The parameter to store usage statistics</td>
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
            <td>queue.js.max_eval_requests_timeout</td>
            <td>REMOTE_JS_MAX_EVAL_REQUEST_TIMEOUT</td>
            <td>60000</td>
            <td>JS Eval max request timeout</td>
        </tr>
        <tr>
            <td>queue.js.max_requests_timeout</td>
            <td>REMOTE_JS_MAX_REQUEST_TIMEOUT</td>
            <td>10000</td>
            <td>JS max request timeout</td>
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
            <td>Topic name for Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.poll-interval</td>
            <td>TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS</td>
            <td>25</td>
            <td>Interval in milliseconds to poll messages by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.pack-processing-timeout</td>
            <td>TB_QUEUE_RULE_ENGINE_PACK_PROCESSING_TIMEOUT_MS</td>
            <td>2000</td>
            <td>Timeout for processing a message pack</td>
        </tr>
        <tr>
            <td>queue.rule-engine.stats.enabled</td>
            <td>TB_QUEUE_RULE_ENGINE_STATS_ENABLED</td>
            <td>true</td>
            <td>Enable/disable statistics for Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.stats.print-interval-ms</td>
            <td>TB_QUEUE_RULE_ENGINE_STATS_PRINT_INTERVAL_MS</td>
            <td>60000</td>
            <td>Statistics printing interval for Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.transport.notifications_topic</td>
            <td>TB_QUEUE_TRANSPORT_NOTIFICATIONS_TOPIC</td>
            <td>tb_transport.notifications</td>
            <td>Transport notifications topic</td>
        </tr>
        <tr>
            <td>queue.transport.poll_interval</td>
            <td>TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS</td>
            <td>25</td>
            <td>Interval in milliseconds to poll messages by Core microservices</td>
        </tr>
        <tr>
            <td>queue.vc.topic</td>
            <td>TB_QUEUE_VC_TOPIC</td>
            <td>tb_version_control</td>
            <td>Topic for storing Version Control synchronization tasks</td>
        </tr>
        <tr>
            <td>queue.vc.partitions</td>
            <td>TB_QUEUE_VC_PARTITIONS</td>
            <td>10</td>
            <td>Amount of partitions used by Version Control microservices</td>
        </tr>
        <tr>
            <td>queue.vc.poll-interval</td>
            <td>TB_QUEUE_VC_INTERVAL_MS</td>
            <td>10</td>
            <td>Interval in milliseconds to poll messages by Version Control microservices</td>
        </tr>
        <tr>
            <td>queue.vc.pack-processing-timeout</td>
            <td>TB_QUEUE_VC_PACK_PROCESSING_TIMEOUT_MS</td>
            <td>10</td>
            <td>Timeout for processing a message pack</td>
        </tr>
    </tbody>
</table>