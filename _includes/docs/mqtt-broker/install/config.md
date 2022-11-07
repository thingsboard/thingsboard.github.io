* TOC
{:toc}

This guide will help you to get familiar with ThingsBoard MQTT Broker configuration files and parameters.

You can find configuration files in the following directory:

```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /usr/share/thingsboard-mqtt-broker/conf
```

#### ThingsBoard MQTT Broker Settings

All configuration parameters have corresponding environment variable name and default value. In order to change configuration parameter you can simply change it's default value.
For example:

```bash
server:
  address: "${HTTP_BIND_ADDRESS:0.0.0.0}"
```

In this case, *'HTTP_BIND_ADDRESS'* is environment variable name and *'0.0.0.0'* is a default value.
Environment variables are useful in case of docker installation.
See [docker documentation](https://docs.docker.com/compose/environment-variables/#/the-envfile-configuration-option) for more details.

There is **190+** configuration parameters in **thingsboard-mqtt-broker.yml** file. You can review their description in the [**configuration file**](https://raw.githubusercontent.com/thingsboard/thingsboard-mqtt-broker/main/application/src/main/resources/thingsboard-mqtt-broker.yml) itself.
We will list only main configuration parameters below to avoid duplication of the parameter descriptions and to simplify maintenance of this documentation page.


<table>
  <thead>
      <tr>
          <td><b>Property</b></td><td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">TCP MQTT listener parameters</span></td>
      </tr>   
      <tr>
          <td>listener.tcp.enabled</td>
          <td>LISTENER_TCP_ENABLED</td>
          <td>true</td>
          <td>Enable/disable MQTT TCP port listener</td>
      </tr>  
      <tr>
          <td>listener.tcp.bind_address</td>
          <td>LISTENER_TCP_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>MQTT TCP listener bind address</td>
      </tr>
      <tr>
          <td>listener.tcp.bind_port</td>
          <td>LISTENER_TCP_BIND_PORT</td>
          <td>1883</td>
          <td>MQTT TCP listener bind port</td>
      </tr>
      <tr>
          <td>listener.tcp.netty.leak_detector_level</td>
          <td>TCP_NETTY_LEAK_DETECTOR_LVL</td>
          <td>DISABLED</td>
          <td>Netty leak detector level</td>
      </tr>
      <tr>
          <td>listener.tcp.netty.boss_group_thread_count</td>
          <td>TCP_NETTY_BOSS_GROUP_THREADS</td>
          <td>1</td>
          <td>Netty BOSS threads count</td>
      </tr>
      <tr>
          <td>listener.tcp.netty.worker_group_thread_count</td>
          <td>TCP_NETTY_WORKER_GROUP_THREADS</td>
          <td>12</td>
          <td>Netty worker threads count</td>
      </tr>
      <tr>
          <td>listener.tcp.netty.max_payload_size</td>
          <td>TCP_NETTY_MAX_PAYLOAD_SIZE</td>
          <td>65536</td>
          <td>Max payload size in bytes</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">SSL MQTT listener parameters</span></td>
      </tr>   
      <tr>
          <td>listener.ssl.enabled</td>
          <td>LISTENER_SSL_ENABLED</td>
          <td>false</td>
          <td>Enable/disable MQTT SSL port listener</td>
      </tr>  
      <tr>
          <td>listener.ssl.bind_address</td>
          <td>LISTENER_SSL_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>MQTT SSL listener bind address</td>
      </tr>
      <tr>
          <td>listener.ssl.bind_port</td>
          <td>LISTENER_SSL_BIND_PORT</td>
          <td>8883</td>
          <td>MQTT SSL listener bind port</td>
      </tr>
      <tr>
          <td>listener.ssl.netty.leak_detector_level</td>
          <td>SSL_NETTY_LEAK_DETECTOR_LVL</td>
          <td>DISABLED</td>
          <td>Netty leak detector level</td>
      </tr>
      <tr>
          <td>listener.ssl.netty.boss_group_thread_count</td>
          <td>SSL_NETTY_BOSS_GROUP_THREADS</td>
          <td>1</td>
          <td>Netty BOSS threads count</td>
      </tr>
      <tr>
          <td>listener.ssl.netty.worker_group_thread_count</td>
          <td>SSL_NETTY_WORKER_GROUP_THREADS</td>
          <td>12</td>
          <td>Netty worker threads count</td>
      </tr>
      <tr>
          <td>listener.ssl.netty.max_payload_size</td>
          <td>SSL_NETTY_MAX_PAYLOAD_SIZE</td>
          <td>65536</td>
          <td>Max payload size in bytes</td>
      </tr>
      <tr>
          <td>listener.ssl.config.protocol</td>
          <td>LISTENER_SSL_PROTOCOL</td>
          <td>TLSv1.2</td>
          <td>SSL protocol: See <a href="http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#SSLContext">this link</a></td>
      </tr>
      <tr>
          <td>listener.ssl.config.key_store</td>
          <td>LISTENER_SSL_KEY_STORE</td>
          <td>mqtt_server.jks</td>
          <td>Path to the key store that holds the SSL certificate</td>
      </tr>
      <tr>
          <td>listener.ssl.config.key_store_password</td>
          <td>LISTENER_SSL_KEY_STORE_PASSWORD</td>
          <td>server_ks_password</td>
          <td>Password used to access the key store</td>
      </tr>
      <tr>
          <td>listener.ssl.config.key_password</td>
          <td>LISTENER_SSL_KEY_PASSWORD</td>
          <td>server_key_password</td>
          <td>Password used to access the key</td>
      </tr>
      <tr>
          <td>listener.ssl.config.key_store_type</td>
          <td>LISTENER_SSL_KEY_STORE_TYPE</td>
          <td>JKS</td>
          <td>Type of the key store</td>
      </tr> 
      <tr>
          <td>listener.ssl.config.trust_store</td>
          <td>LISTENER_SSL_TRUST_STORE</td>
          <td>root_truststore.jks</td>
          <td>Path to the trust store that holds the SSL certificate</td>
      </tr> 
      <tr>
          <td>listener.ssl.config.trust_store_password</td>
          <td>LISTENER_SSL_TRUST_STORE_PASSWORD</td>
          <td>truststore_password</td>
          <td>Password used to access the trust store</td>
      </tr> 
      <tr>
          <td>listener.ssl.config.trust_store_type</td>
          <td>SECURITY_MQTT_SSL_TRUST_STORE_TYPE</td>
          <td>JKS</td>
          <td>Type of the trust store</td>
      </tr> 
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">HTTP server parameters</span></td>
      </tr>  
      <tr>
          <td>server.address</td>
          <td>HTTP_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>HTTP Server bind address</td>
      </tr>
      <tr>
          <td>server.port</td>
          <td>HTTP_BIND_PORT</td>
          <td>8083</td>
          <td>HTTP Server bind port</td>
      </tr>
      <tr>
          <td>server.ssl.enabled</td>
          <td>SSL_ENABLED</td>
          <td>false</td>
          <td>Enable/disable SSL support</td>
      </tr>
      <tr>
          <td>server.ssl.key-store</td>
          <td>SSL_KEY_STORE</td>
          <td>classpath:keystore/keystore.p12</td>
          <td>Path to the key store that holds the SSL certificate</td>
      </tr>
      <tr>
          <td>server.ssl.key-store-password</td>
          <td>SSL_KEY_STORE_PASSWORD</td>
          <td>thingsboard_mqtt_broker</td>
          <td>Password used to access the key store</td>
      </tr>
      <tr>
          <td>server.ssl.key-store-type</td>
          <td>SSL_KEY_STORE_TYPE</td>
          <td>PKCS12</td>
          <td>Type of the key store</td>
      </tr>
      <tr>
          <td>server.ssl.key-alias</td>
          <td>SSL_KEY_ALIAS</td>
          <td>tomcat</td>
          <td>Alias that identifies the key in the key store</td>
      </tr>
      <tr>
          <td>server.log_controller_error_stack_trace</td>
          <td>HTTP_LOG_CONTROLLER_ERROR_STACK_TRACE</td>
          <td>true</td>
          <td>Log errors with stacktrace when REST API throws exception</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">HTTP Security parameters</span></td>
      </tr>  
      <tr>
          <td>security.jwt.tokenExpirationTime</td>
          <td>JWT_TOKEN_EXPIRATION_TIME</td>
          <td>900</td>
          <td>User JWT Token expiration time in seconds</td>
      </tr>
      <tr>
          <td>security.jwt.refreshTokenExpTime</td>
          <td>JWT_REFRESH_TOKEN_EXPIRATION_TIME</td>
          <td>3600</td>
          <td>User JWT Refresh Token expiration time in seconds</td>
      </tr>
      <tr>
          <td>security.jwt.tokenIssuer</td>
          <td>JWT_TOKEN_ISSUER</td>
          <td>thingsboard.io</td>
          <td>User JWT Token issuer</td>
      </tr>
      <tr>
          <td>security.jwt.tokenSigningKey</td>
          <td>JWT_TOKEN_SIGNING_KEY</td>
          <td>thingsboardDefaultSigningKey</td>
          <td>User JWT Token sign key</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">MQTT Security parameters</span></td>
      </tr>  
      <tr>
          <td>security.mqtt.basic.enabled</td>
          <td>SECURITY_MQTT_BASIC_ENABLED</td>
          <td>false</td>
          <td>Enable/disable basic MQTT auth</td>
      </tr>
      <tr>
          <td>security.mqtt.ssl.enabled</td>
          <td>SECURITY_MQTT_SSL_ENABLED</td>
          <td>false</td>
          <td>Enable/disable SSL MQTT auth</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Actor system parameters</span></td>
      </tr>  
      <tr>
          <td>actors.persisted-device.dispatcher-pool-size</td>
          <td>ACTORS_SYSTEM_PERSISTED_DEVICE_DISPATCHER_POOL_SIZE</td>
          <td>4</td>
          <td>Number of threads processing the Device actor's messages</td>
      </tr>
      <tr>
          <td>actors.persisted-device.wait-before-actor-stop-minutes</td>
          <td>ACTORS_SYSTEM_PERSISTED_DEVICE_WAIT_BEFORE_ACTOR_STOP_MINUTES</td>
          <td>5</td>
          <td>Minutes to wait before deleting Device actor after disconnect</td>
      </tr>
      <tr>
          <td>actors.client.dispatcher-pool-size</td>
          <td>ACTORS_SYSTEM_CLIENT_DISPATCHER_POOL_SIZE</td>
          <td>4</td>
          <td>Number of threads processing the MQTT client actor's messages</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">MQTT parameters</span></td>
      </tr>  
      <tr>
          <td>mqtt.pre-connect-queue.max-size</td>
          <td>MQTT_PRE_CONNECT_QUEUE_MAX_SIZE</td>
          <td>10000</td>
          <td>Max number of messages stored in queue before client gets connected</td>
      </tr>
      <tr>
          <td>mqtt.max-in-flight-msgs</td>
          <td>MQTT_MAX_IN_FLIGHT_MSGS</td>
          <td>1000</td>
          <td>Max number of unresponsed PUBLISH or PUBREL messages</td>
      </tr>
      <tr>
          <td>mqtt.keep-alive.monitoring-delay-ms</td>
          <td>MQTT_KEEP_ALIVE_MONITORING_DELAY_MS</td>
          <td>100</td>
          <td>Time between subsequent checks for the non-active clients</td>
      </tr>
      <tr>
          <td>mqtt.topic.max-segments-count</td>
          <td>MQTT_TOPIC_MAX_SEGMENTS_COUNT</td>
          <td>6000</td>
          <td>Maximum number of segments in topics. If it's too large, processing of topics with too much segments can lead to errors</td>
      </tr>
      <tr>
          <td>mqtt.subscription-trie.wait-for-clear-lock-ms</td>
          <td>MQTT_SUB_TRIE_WAIT_FOR_CLEAR_LOCK_MS</td>
          <td>100</td>
          <td>Maximum pause for clearing subscription-storage from empty nodes</td>
      </tr>
      <tr>
          <td>mqtt.subscription-trie.clear-nodes-cron</td>
          <td>MQTT_SUB_TRIE_CLEAR_NODES_CRON</td>
          <td>0 0 0 * * *</td>
          <td>Cron job to schedule clearing of empty subscription nodes. Defaults to 'every day at midnight'</td>
      </tr>
      <tr>
          <td>mqtt.subscription-trie.clear-nodes-zone</td>
          <td>MQTT_SUB_TRIE_CLEAR_NODES_ZONE</td>
          <td>UTC</td>
          <td>Timezone for the subscription clearing cron-job</td>
      </tr>
      <tr>
          <td>mqtt.client-session-cleanup.cron</td>
          <td>MQTT_CLIENT_SESSION_CLEANUP_CRON</td>
          <td>0 0 1 * * *</td>
          <td>Cron job to schedule clearing of expired and not active client-sessions. Defaults to 'every day at 1 o'clock'</td>
      </tr>
      <tr>
          <td>mqtt.client-session-cleanup.zone</td>
          <td>MQTT_CLIENT_SESSION_CLEANUP_ZONE</td>
          <td>UTC</td>
          <td>Timezone for the client-sessions clearing cron-job</td>
      </tr>
      <tr>
          <td>mqtt.client-session-cleanup.inactive-session-ttl</td>
          <td>MQTT_CLIENT_SESSION_CLEANUP_INACTIVE_SESSION_TTL</td>
          <td>UT604800</td>
          <td>TTL of inactive sessions. Defaults to one week</td>
      </tr>
      <tr>
          <td>mqtt.version-3-1.max-client-id-length</td>
          <td>MQTT_3_1_MAX_CLIENT_ID_LENGTH</td>
          <td>1024</td>
          <td>Max ClientId length for 3.1 version of protocol</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">MQTT Persistence parameters</span></td>
      </tr>  
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.limit</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_LIMIT</td>
          <td>1000</td>
          <td>Maximum number of PUBLISH messages stored for each persisted DEVICE client</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.ttl</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_TTL</td>
          <td>604800</td>
          <td>TTL of persisted DEVICE messages in seconds. The current value corresponds to one week</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.clean-up.cron</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_CLEAN_UP_CRON</td>
          <td>0 0 2 * * *</td>
          <td>Cron job to schedule clearing of outdated persisted DEVICE messages. Defaults to 'every day at 2 o'clock'</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.clean-up.zone</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_CLEAN_UP_ZONE</td>
          <td>UTC</td>
          <td>Timezone for the DEVICE messages clearing cron-job</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.clean-up.session-ctx-page-size</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_CLEAN_UP_SESSION_CTX_PAGE_SIZE</td>
          <td>1000</td>
          <td>Max number of ClientSessionCtx in one SELECT request</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.sql.update-packet-queue.batch-threads</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_SQL_UPDATE_PACKET_QUEUE_BATCH_THREADS</td>
          <td>1</td>
          <td>Number of parallel threads that process UpdatePacketQueue</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.sql.update-packet-queue.batch-size</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_SQL_UPDATE_PACKET_QUEUE_BATCH_SIZE</td>
          <td>100</td>
          <td>Batch size for processing packet updates</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.sql.update-packet-queue.max-delay</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_SQL_UPDATE_PACKET_QUEUE_MAX_DELAY</td>
          <td>50</td>
          <td>Max timeout for packet updates queue polling. Value set in milliseconds</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.sql.delete-packet-queue.batch-threads</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_SQL_DELETE_PACKET_QUEUE_BATCH_THREADS</td>
          <td>1</td>
          <td>Number of parallel threads that process DeletePacketQueue</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.sql.delete-packet-queue.batch-size</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_SQL_DELETE_PACKET_QUEUE_BATCH_SIZE</td>
          <td>100</td>
          <td>Batch size for processing packet deletes</td>
      </tr>
      <tr>
          <td>mqtt.persistent-session.device.persisted-messages.sql.delete-packet-queue.max-delay</td>
          <td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_SQL_DELETE_PACKET_QUEUE_MAX_DELAY</td>
          <td>50</td>
          <td>Max timeout for packet deletes queue polling. Value set in milliseconds</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Spring MVC/Resources parameters</span></td>
      </tr>  
      <tr>
          <td>spring.mvc.cors.mappings.*</td>
          <td></td>
          <td></td>
          <td>Spring CORS configuration</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Spring JPA datasource parameters (for SQL database)</span></td>
      </tr>  
      <tr>
          <td>spring.jpa.database-platform</td>
          <td>SPRING_JPA_DATABASE_PLATFORM</td>
          <td>org.hibernate.dialect.PostgreSQLDialect</td>
          <td>Database SQL dialect for Spring JPA - <b>org.hibernate.dialect.PostgreSQLDialect</b> or <b>org.hibernate.dialect.HSQLDialect</b></td>
      </tr>
      <tr>
          <td>spring.datasource.driverClassName</td>
          <td>SPRING_DRIVER_CLASS_NAME</td>
          <td>org.postgresql.Driver</td>
          <td>Database driver for Spring JPA - <b>org.postgresql.Driver</b> or <b>org.hsqldb.jdbc.JDBCDriver</b></td>
      </tr>
      <tr>
          <td>spring.datasource.url</td>
          <td>SPRING_DATASOURCE_URL</td>
          <td>jdbc:postgresql://localhost:5432/thingsboard_mqtt_broker</td>
          <td>Database URL</td>
      </tr>
      <tr>
          <td>spring.datasource.username</td>
          <td>SPRING_DATASOURCE_USERNAME</td>
          <td>postgres</td>
          <td>Database Username</td>
      </tr>
      <tr>
          <td>spring.datasource.password</td>
          <td>SPRING_DATASOURCE_PASSWORD</td>
          <td>postgres</td>
          <td>Database password</td>
      </tr>
      <tr>
          <td>spring.datasource.hikari.maximumPoolSize</td>
          <td>SPRING_DATASOURCE_MAXIMUM_POOL_SIZE</td>
          <td>16</td>
          <td>This property allows the number of connections in the pool to increase as demand increases. 
                          At the same time, the property ensures that the pool doesn't grow to the point of exhausting a system's resources,
                           which ultimately affects an application's performance and availability.</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Default Kafka parameters</span></td>
      </tr>  
      <tr>
          <td>queue.kafka.bootstrap.servers</td>
          <td>TB_KAFKA_SERVERS</td>
          <td>localhost:9092</td>
          <td>List of kafka bootstrap servers used to establish connection</td>
      </tr>
      <tr>
          <td>queue.kafka.enable-topic-deletion</td>
          <td>TB_KAFKA_ENABLE_TOPIC_DELETION</td>
          <td>true</td>
          <td>Enable/disable deletion of topics for Application MQTT Clients</td>
      </tr>
      <tr>
          <td>queue.kafka.default.producer.acks</td>
          <td>TB_KAFKA_DEFAULT_PRODUCER_ACKS</td>
          <td>1</td>
          <td>The number of acknowledgments the producer requires the leader to have received before considering a request complete</td>
      </tr>
      <tr>
          <td>queue.kafka.default.producer.retries</td>
          <td>TB_KAFKA_DEFAULT_PRODUCER_RETRIES</td>
          <td>1</td>
          <td>Setting a value greater than zero will cause the client to resend any record whose send fails with a potentially transient error</td>
      </tr>
      <tr>
          <td>queue.kafka.default.producer.batch-size</td>
          <td>TB_KAFKA_DEFAULT_PRODUCER_BATCH_SIZE</td>
          <td>16384</td>
          <td>The producer will attempt to batch records together into fewer requests whenever multiple records are being sent to the same partition</td>
      </tr>
      <tr>
          <td>queue.kafka.default.producer.linger-ms</td>
          <td>TB_KAFKA_DEFAULT_PRODUCER_LINGER_MS</td>
          <td>5</td>
          <td>The producer groups together any records that arrive in between request transmissions into a single batched request</td>
      </tr>
      <tr>
          <td>queue.kafka.default.producer.buffer-memory</td>
          <td>TB_KAFKA_DEFAULT_PRODUCER_BUFFER_MEMORY</td>
          <td>33554432</td>
          <td>The total bytes of memory the producer can use to buffer records waiting to be sent to the server</td>
      </tr>
      <tr>
          <td>queue.kafka.default.consumer.session-timeout-ms</td>
          <td>TB_KAFKA_DEFAULT_CONSUMER_SESSION_TIMEOUT_MS</td>
          <td>300000</td>
          <td>The timeout used to detect client failures when using Kafka's group management facility</td>
      </tr>
      <tr>
          <td>queue.kafka.default.consumer.max-poll-interval-ms</td>
          <td>TB_KAFKA_DEFAULT_CONSUMER_MAX_POLL_INTERVAL_MS</td>
          <td>300000</td>
          <td>The maximum delay between invocations of poll() when using consumer group management</td>
      </tr>
      <tr>
          <td>queue.kafka.default.consumer.max-poll-records</td>
          <td>TB_KAFKA_DEFAULT_CONSUMER_MAX_POLL_RECORDS</td>
          <td>8192</td>
          <td>The maximum number of records returned in a single call to poll()</td>
      </tr>
      <tr>
          <td>queue.kafka.default.consumer.fetch-max-bytes</td>
          <td>TB_KAFKA_DEFAULT_CONSUMER_FETCH_MAX_BYTES</td>
          <td>134217728</td>
          <td>The maximum amount of data the server should return for a fetch request</td>
      </tr>  
      <tr>
          <td>queue.kafka.consumer-stats.enabled</td>
          <td>TB_KAFKA_CONSUMER_STATS_ENABLED</td>
          <td>true</td>
          <td>Prints lag between consumer group offset and last messages offset in Kafka topics</td>
      </tr>
      <tr>
          <td>queue.kafka.consumer-stats.print-interval-ms</td>
          <td>TB_KAFKA_CONSUMER_STATS_PRINT_INTERVAL_MS</td>
          <td>60000</td>
          <td>Statistics printing interval for Kafka's consumer-groups stats</td>
      </tr>
      <tr>
          <td>queue.kafka.consumer-stats.kafka-response-timeout-ms</td>
          <td>TB_KAFKA_CONSUMER_STATS_RESPONSE_TIMEOUT_MS</td>
          <td>1000</td>
          <td>Time to wait for the stats-loading requests to Kafka to finish</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Custom Kafka parameters</span></td>
      </tr>
      <tr>
          <td>queue.kafka.publish-msg.topic</td>
          <td>TB_KAFKA_PUBLISH_MSG_TOPIC</td>
          <td>publish_msg</td>
          <td>Topic for persisting incoming PUBLISH messages</td>
      </tr>
      <tr>
          <td>queue.kafka.publish-msg.topic-properties</td>
          <td>TB_KAFKA_PUBLISH_MSG_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:2147483648;partitions:24;replication.factor:1</td>
          <td>Kafka topic properties for "publish-msg" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.publish-msg.additional-consumer-config</td>
          <td>TB_KAFKA_PUBLISH_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "publish-msg" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.publish-msg.additional-producer-config</td>
          <td>TB_KAFKA_PUBLISH_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "publish-msg" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.application-persisted-msg.topic-properties</td>
          <td>TB_KAFKA_APP_PERSISTED_MSG_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;replication.factor:1</td>
          <td>Kafka topic properties for "application-persisted-msg" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.application-persisted-msg.additional-consumer-config</td>
          <td>TB_KAFKA_APP_PERSISTED_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
          <td>max.poll.records:512</td>
          <td>Additional Kafka consumer configs for "application-persisted-msg" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.application-persisted-msg.additional-producer-config</td>
          <td>TB_KAFKA_APP_PERSISTED_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "application-persisted-msg" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.device-persisted-msg.topic</td>
          <td>TB_KAFKA_DEVICE_PERSISTED_MSG_TOPIC</td>
          <td>device_persisted_msg</td>
          <td>Topic for persisting Device messages before saving them in Database</td>
      </tr>
      <tr>
          <td>queue.kafka.device-persisted-msg.topic-properties</td>
          <td>TB_KAFKA_DEVICE_PERSISTED_MSG_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:12;replication.factor:1</td>
          <td>Kafka topic properties for "device-persisted-msg" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.device-persisted-msg.additional-consumer-config</td>
          <td>TB_KAFKA_DEVICE_PERSISTED_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "device-persisted-msg" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.device-persisted-msg.additional-producer-config</td>
          <td>TB_KAFKA_DEVICE_PERSISTED_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "device-persisted-msg" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session.topic</td>
          <td>TB_KAFKA_CLIENT_SESSION_TOPIC</td>
          <td>client_session</td>
          <td>Topic for persisting Client Sessions</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session.topic-properties</td>
          <td>TB_KAFKA_CLIENT_SESSION_TOPIC_PROPERTIES</td>
          <td>segment.bytes:26214400;partitions:1;replication.factor:1</td>
          <td>Kafka topic properties for "client-session" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session.additional-consumer-config</td>
          <td>TB_KAFKA_CLIENT_SESSION_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "client-session" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session.additional-producer-config</td>
          <td>TB_KAFKA_CLIENT_SESSION_ADDITIONAL_PRODUCER_CONFIG</td>
          <td>retries:3</td>
          <td>Additional Kafka producer configs for "client-session" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.client-subscriptions.topic</td>
          <td>TB_KAFKA_CLIENT_SUBSCRIPTIONS_TOPIC</td>
          <td>client_subscriptions</td>
          <td>Topic for persisting Client Subscriptions</td>
      </tr>
      <tr>
          <td>queue.kafka.client-subscriptions.topic-properties</td>
          <td>TB_KAFKA_CLIENT_SUBSCRIPTIONS_TOPIC_PROPERTIES</td>
          <td>segment.bytes:26214400;partitions:1;replication.factor:1</td>
          <td>Kafka topic properties for "client-subscriptions" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.client-subscriptions.additional-consumer-config</td>
          <td>TB_KAFKA_CLIENT_SUBSCRIPTIONS_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "client-subscriptions" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.client-subscriptions.additional-producer-config</td>
          <td>TB_KAFKA_CLIENT_SUBSCRIPTIONS_ADDITIONAL_PRODUCER_CONFIG</td>
          <td>retries:3</td>
          <td>Additional Kafka producer configs for "client-subscriptions" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session-event.topic</td>
          <td>TB_KAFKA_CLIENT_SESSION_EVENT_TOPIC</td>
          <td>client_session_event</td>
          <td>Topic for sending Client Session Events</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session-event.topic-properties</td>
          <td>TB_KAFKA_CLIENT_SESSION_EVENT_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:48;replication.factor:1</td>
          <td>Kafka topic properties for "client-session-event" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session-event.additional-consumer-config</td>
          <td>TB_KAFKA_CLIENT_SESSION_EVENT_ADDITIONAL_CONSUMER_CONFIG</td>
          <td>max.poll.records:1024</td>
          <td>Additional Kafka consumer configs for "client-session-event" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session-event.additional-producer-config</td>
          <td>TB_KAFKA_CLIENT_SESSION_EVENT_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "client-session-event" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session-event-response.topic-prefix</td>
          <td>TB_KAFKA_CLIENT_SESSION_EVENT_RESPONSE_TOPIC_PREFIX</td>
          <td>client_session_event_response</td>
          <td>Prefix for topics for sending Client Session Event Responses to Broker nodes</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session-event-response.topic-properties</td>
          <td>TB_KAFKA_CLIENT_SESSION_EVENT_RESPONSE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;replication.factor:1</td>
          <td>Kafka topic properties for "client-session-event-response" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session-event-response.additional-consumer-config</td>
          <td>TB_KAFKA_CLIENT_SESSION_EVENT_RESPONSE_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "client-session-event-response" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session-event-response.additional-producer-config</td>
          <td>TB_KAFKA_CLIENT_SESSION_EVENT_RESPONSE_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "client-session-event-response" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.disconnect-client-command.topic-prefix</td>
          <td>TB_KAFKA_DISCONNECT_CLIENT_COMMAND_TOPIC_PREFIX</td>
          <td>disconnect_client_command</td>
          <td>Prefix for topics for sending Disconnect Client Commands to Broker nodes</td>
      </tr>
      <tr>
          <td>queue.kafka.disconnect-client-command.topic-properties</td>
          <td>TB_KAFKA_DISCONNECT_CLIENT_COMMAND_RESPONSE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;replication.factor:1</td>
          <td>Kafka topic properties for "disconnect-client-command" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.disconnect-client-command.additional-consumer-config</td>
          <td>TB_KAFKA_DISCONNECT_CLIENT_COMMAND_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "disconnect-client-command" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.disconnect-client-command.additional-producer-config</td>
          <td>TB_KAFKA_DISCONNECT_CLIENT_COMMAND_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "disconnect-client-command" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.basic-downlink-publish-msg.topic-prefix</td>
          <td>TB_KAFKA_BASIC_DOWNLINK_PUBLISH_MSG_TOPIC_PREFIX</td>
          <td>basic_downlink_publish_msg</td>
          <td>Prefix for topics for persisting non-persistent messages to Broker nodes</td>
      </tr>
      <tr>
          <td>queue.kafka.basic-downlink-publish-msg.topic-properties</td>
          <td>TB_KAFKA_BASIC_DOWNLINK_PUBLISH_MSG_RESPONSE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:12;replication.factor:1</td>
          <td>Kafka topic properties for "basic-downlink-publish-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.basic-downlink-publish-msg.additional-consumer-config</td>
          <td>TB_KAFKA_BASIC_DOWNLINK_PUBLISH_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "basic-downlink-publish-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.basic-downlink-publish-msg.additional-producer-config</td>
          <td>TB_KAFKA_BASIC_DOWNLINK_PUBLISH_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "basic-downlink-publish-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.persistent-downlink-publish-msg.topic-prefix</td>
          <td>TB_KAFKA_PERSISTENT_DOWNLINK_PUBLISH_MSG_TOPIC_PREFIX</td>
          <td>persistent_downlink_publish_msg</td>
          <td>Prefix for topics for persisting persistent Device messages to Broker nodes</td>
      </tr>
      <tr>
          <td>queue.kafka.persistent-publish-msg.topic-properties</td>
          <td>TB_KAFKA_PERSISTENT_DOWNLINK_PUBLISH_MSG_RESPONSE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:12;replication.factor:1</td>
          <td>Kafka topic properties for "persistent-downlink-publish-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.persistent-downlink-publish-msg.additional-consumer-config</td>
          <td>TB_KAFKA_PERSISTENT_DOWNLINK_PUBLISH_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "persistent-downlink-publish-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.persistent-downlink-publish-msg.additional-producer-config</td>
          <td>TB_KAFKA_PERSISTENT_DOWNLINK_PUBLISH_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "persistent-downlink-publish-msg" topics</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Kafka queue processing params</span></td>
      </tr>
      <tr>
          <td>queue.publish-msg.publisher-thread-max-delay</td>
          <td>TB_PUBLISH_MSG_PUBLISHER_THREAD_MAX_DELAY</td>
          <td>50</td>
          <td>Max timeout for PUBLISH messages producer-queue polling. Value set in milliseconds</td>
      </tr>
      <tr>
          <td>queue.publish-msg.consumers-count</td>
          <td>TB_PUBLISH_MSG_CONSUMERS_COUNT</td>
          <td>2</td>
          <td>Number of parallel PUBLISH messages consumers</td>
      </tr>
      <tr>
          <td>queue.publish-msg.poll-interval</td>
          <td>TB_PUBLISH_MSG_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'publish-msg' topic</td>
      </tr>
      <tr>
          <td>queue.publish-msg.pack-processing-timeout</td>
          <td>TB_PUBLISH_MSG_PACK_PROCESSING_TIMEOUT</td>
          <td>10000</td>
          <td>Timeout for processing a 'publish-msg' pack</td>
      </tr>
      <tr>
          <td>queue.publish-msg.ack-strategy.type</td>
          <td>TB_PUBLISH_MSG_ACK_STRATEGY_TYPE</td>
          <td>SKIP_ALL</td>
          <td>'publish-msg' queue processing strategy. Can be: SKIP_ALL, RETRY_ALL</td>
      </tr>
      <tr>
          <td>queue.publish-msg.ack-strategy.retries</td>
          <td>TB_PUBLISH_MSG_ACK_STRATEGY_RETRIES</td>
          <td>1</td>
          <td>Number of retries, 0 is unlimited. Use for RETRY_ALL processing strategy</td>
      </tr>
      <tr>
          <td>queue.application-persisted-msg.publisher-thread-max-delay</td>
          <td>TB_APP_PERSISTED_MSG_PUBLISHER_THREAD_MAX_DELAY</td>
          <td>50</td>
          <td>Max timeout for Application persisted messages producer-queue polling. Value set in milliseconds</td>
      </tr>
      <tr>
          <td>queue.application-persisted-msg.poll-interval</td>
          <td>TB_APP_PERSISTED_MSG_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'application-persisted-msg' topic</td>
      </tr>
      <tr>
          <td>queue.application-persisted-msg.pack-processing-timeout</td>
          <td>TB_APP_PERSISTED_MSG_PACK_PROCESSING_TIMEOUT</td>
          <td>2000</td>
          <td>Timeout for processing a 'application-persisted-msg' pack</td>
      </tr>
      <tr>
          <td>queue.application-persisted-msg.ack-strategy.type</td>
          <td>TB_APP_PERSISTED_MSG_ACK_STRATEGY_TYPE</td>
          <td>SKIP_ALL</td>
          <td>'application-persisted-msg' queue processing strategy. Can be: SKIP_ALL, RETRY_ALL</td>
      </tr>
      <tr>
          <td>queue.application-persisted-msg.ack-strategy.retries</td>
          <td>TB_APP_PERSISTED_MSG_ACK_STRATEGY_RETRIES</td>
          <td>1</td>
          <td>Number of retries, 0 is unlimited. Use for RETRY_ALL processing strategy</td>
      </tr>
      <tr>
          <td>queue.device-persisted-msg.publisher-thread-max-delay</td>
          <td>TB_DEVICE_PERSISTED_MSG_PUBLISHER_THREAD_MAX_DELAY</td>
          <td>50</td>
          <td>Max timeout for Device persisted messages producer-queue polling. Value set in milliseconds</td>
      </tr>
      <tr>
          <td>queue.device-persisted-msg.consumers-count</td>
          <td>TB_DEVICE_PERSISTED_MSG_CONSUMERS_COUNT</td>
          <td>2</td>
          <td>Number of parallel persistent Device messages consumers</td>
      </tr>
      <tr>
          <td>queue.device-persisted-msg.poll-interval</td>
          <td>TB_DEVICE_PERSISTED_MSG_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'device-persisted-msg' topic</td>
      </tr>
      <tr>
          <td>queue.device-persisted-msg.ack-strategy.type</td>
          <td>TB_DEVICE_PERSISTED_MSG_ACK_STRATEGY_TYPE</td>
          <td>RETRY_ALL</td>
          <td>'device-persisted-msg' queue processing strategy. Can be: SKIP_ALL, RETRY_ALL</td>
      </tr>
      <tr>
          <td>queue.device-persisted-msg.ack-strategy.retries</td>
          <td>TB_DEVICE_PERSISTED_MSG_ACK_STRATEGY_RETRIES</td>
          <td>3</td>
          <td>Number of retries, 0 is unlimited. Use for RETRY_ALL processing strategy</td>
      </tr>
      <tr>
          <td>queue.device-persisted-msg.ack-strategy.pause-between-retries</td>
          <td>TB_DEVICE_PERSISTED_MSG_ACK_STRATEGY_PAUSE_BETWEEN_RETRIES</td>
          <td>3</td>
          <td>Time in seconds to wait in consumer thread before retries</td>
      </tr>
      <tr>
          <td>queue.client-session.poll-interval</td>
          <td>TB_CLIENT_SESSION_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'client-session' topic</td>
      </tr>
      <tr>
          <td>queue.client-subscriptions.poll-interval</td>
          <td>TB_CLIENT_SUBSCRIPTIONS_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'client-subscriptions' topic</td>
      </tr>
      <tr>
          <td>queue.client-session-event.consumers-count</td>
          <td>TB_CLIENT_SESSION_EVENT_CONSUMERS_COUNT</td>
          <td>2</td>
          <td>Number of parallel Client Session Event consumers</td>
      </tr>
      <tr>
          <td>queue.client-session-event.max-pending-requests</td>
          <td>TB_CLIENT_SESSION_EVENT_MAX_PENDING_REQUESTS</td>
          <td>10000</td>
          <td>Number of pending Client Session Events/Requests</td>
      </tr>
      <tr>
          <td>queue.client-session-event.poll-interval</td>
          <td>TB_CLIENT_SESSION_EVENT_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'client-session-event' topic</td>
      </tr>
      <tr>
          <td>queue.client-session-event-response.response-sender-threads</td>
          <td>TB_CLIENT_SESSION_EVENT_RESPONSE_SENDER_THREADS</td>
          <td>8</td>
          <td>Number of threads for sending Evente responses</td>
      </tr>
      <tr>
          <td>queue.client-session-event-response.poll-interval</td>
          <td>TB_CLIENT_SESSION_EVENT_RESPONSE_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'client-session-event-response' topics</td>
      </tr>
      <tr>
          <td>queue.client-session-event-response.max-request-timeout</td>
          <td>TB_CLIENT_SESSION_EVENT_RESPONSE_MAX_REQUEST_TIMEOUT</td>
          <td>100000</td>
          <td>Time for Client Session Events to expire</td>
      </tr>
      <tr>
          <td>queue.client-session-event-response.cleanup-interval</td>
          <td>TB_CLIENT_SESSION_EVENT_RESPONSE_CLEANUP_INTERVAL</td>
          <td>100</td>
          <td>Period to clean-up stale Client Session Events</td>
      </tr>
      <tr>
          <td>queue.disconnect-client-command.poll-interval</td>
          <td>TB_DISCONNECT_CLIENT_COMMAND_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'disconnect-client-command' topics</td>
      </tr>
      <tr>
          <td>queue.persistent-downlink-publish-msg.publisher-thread-max-delay</td>
          <td>TB_PUBLISH_MSG_PUBLISHER_THREAD_MAX_DELAY</td>
          <td>50</td>
          <td>Max timeout for persistent downlink messages producer-queue polling. Value set in milliseconds</td>
      </tr>
      <tr>
          <td>queue.persistent-downlink-publish-msg.consumers-count</td>
          <td>TB_PERSISTENT_DOWNLINK_PUBLISH_MSG_CONSUMERS_COUNT</td>
          <td>1</td>
          <td>Number of parallel persistent downlink messages consumers</td>
      </tr>
      <tr>
          <td>queue.persistent-downlink-publish-msg.poll-interval</td>
          <td>TB_PERSISTENT_DOWNLINK_PUBLISH_MSG_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'persistent-downlink-publish-msg' topics</td>
      </tr>
      <tr>
          <td>queue.basic-downlink-publish-msg.publisher-thread-max-delay</td>
          <td>TB_PUBLISH_MSG_PUBLISHER_THREAD_MAX_DELAY</td>
          <td>50</td>
          <td>Max timeout for basic downlink messages producer-queue polling. Value set in milliseconds</td>
      </tr>
      <tr>
          <td>queue.basic-downlink-publish-msg.consumers-count</td>
          <td>TB_BASIC_DOWNLINK_PUBLISH_MSG_CONSUMERS_COUNT</td>
          <td>1</td>
          <td>Number of parallel basic downlink messages consumers</td>
      </tr>
      <tr>
          <td>queue.basic-downlink-publish-msg.poll-interval</td>
          <td>TB_BASIC_DOWNLINK_PUBLISH_MSG_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'basic-downlink-publish-msg' topics</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">ThingsBoard MQTT Broker service parameters</span></td>
      </tr>
      <tr>
          <td>service.id</td>
          <td>TB_SERVICE_ID</td>
          <td></td>
          <td>Unique id for this service (autogenerated if empty)</td>
      </tr>  
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">ThingsBoard MQTT Broker statistics and troubleshooting</span></td>
      </tr>
      <tr>
          <td>management.endpoints.web.exposure.include</td>
          <td>METRICS_ENDPOINTS_EXPOSE</td>
          <td>prometheus</td>
          <td>Expose metrics endpoint (use value 'info' to disable prometheus metrics)</td>
      </tr>  
      <tr>
          <td>analysis.log.analyzed-client-ids</td>
          <td>ANALYSIS_LOG_CLIENT_IDS</td>
          <td></td>
          <td>List of ClientIds separated with comas. Events for those clients will be logged</td>
      </tr>     
  </tbody>
</table>

#### Logging


#### thingsboard-mqtt-broker.conf

The configuration file for the startup script. Contains Java options and classpath related parameters.

#### logback.xml

The configuration file for logging. Allows controlling the log level, the size of log files and the total size/volume of logs.

