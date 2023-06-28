* TOC
{:toc}

This guide will help you become familiar with TBMQ configuration files and parameters. 
We **strongly recommend** configuring TBMQ using environment variables. 
This way, you won't need to merge the configuration files when a new platform release arrives. 

The list of available configuration parameters and corresponding environment variables can be found [here](#configuration-parameters).

## How to change configuration parameters?

#### Docker-Based deployment

If TBMQ is installed in a Docker Compose environment, you can edit the scripts and add environment variables for 
the corresponding containers. For more details, refer to the [Docker documentation](https://docs.docker.com/compose/environment-variables/#/the-envfile-configuration-option).

#### K8S-Based deployment

If TBMQ is installed in a K8S environment, you can edit the scripts and add environment variables for the 
corresponding deployments/stateful sets. For more details, refer to the [K8S documentation](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/).

## Configuration parameters

The configuration file is written in YAML format. All configuration parameters have corresponding environment variable names and default values. 
To change a configuration parameter, simply modify its default value. For example:

```bash
server:
  address: "${HTTP_BIND_ADDRESS:0.0.0.0}"
```

In this case, *'HTTP_BIND_ADDRESS'* is the environment variable name and *'0.0.0.0'* is the default value.

You can use the simple example below to add a new environment variable 'HTTP_BIND_PORT' with value '8084'.

```bash
...
export HTTP_BIND_PORT=8084
```

The parameters are grouped by system components. The list contains the name (address in **thingsboard-mqtt-broker.yml** file), 
environment variable, default value, and description.

<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
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
          <td>Netty boss group threads count</td>
      </tr>
      <tr>
          <td>listener.tcp.netty.worker_group_thread_count</td>
          <td>TCP_NETTY_WORKER_GROUP_THREADS</td>
          <td>12</td>
          <td>Netty worker group threads count</td>
      </tr>
      <tr>
          <td>listener.tcp.netty.max_payload_size</td>
          <td>TCP_NETTY_MAX_PAYLOAD_SIZE</td>
          <td>65536</td>
          <td>Max payload size in bytes</td>
      </tr>
      <tr>
          <td>listener.tcp.netty.so_keep_alive</td>
          <td>TCP_NETTY_SO_KEEPALIVE</td>
          <td>true</td>
          <td>Enable/disable keep-alive mechanism to periodically probe the other end of a connection</td>
      </tr>
      <tr>
          <td>listener.tcp.netty.shutdown_quiet_period</td>
          <td>TCP_NETTY_SHUTDOWN_QUIET_PERIOD</td>
          <td>0</td>
          <td>Period in seconds in graceful shutdown during which no new tasks are submitted</td>
      </tr>
      <tr>
          <td>listener.tcp.netty.shutdown_timeout</td>
          <td>TCP_NETTY_SHUTDOWN_TIMEOUT</td>
          <td>5</td>
          <td>The max time in seconds to wait until the executor is stopped</td>
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
          <td>Netty boss group threads count</td>
      </tr>
      <tr>
          <td>listener.ssl.netty.worker_group_thread_count</td>
          <td>SSL_NETTY_WORKER_GROUP_THREADS</td>
          <td>12</td>
          <td>Netty worker group threads count</td>
      </tr>
      <tr>
          <td>listener.ssl.netty.max_payload_size</td>
          <td>SSL_NETTY_MAX_PAYLOAD_SIZE</td>
          <td>65536</td>
          <td>Max payload size in bytes</td>
      </tr>
      <tr>
          <td>listener.ssl.netty.so_keep_alive</td>
          <td>SSL_NETTY_SO_KEEPALIVE</td>
          <td>true</td>
          <td>Enable/disable keep-alive mechanism to periodically probe the other end of a connection</td>
      </tr>
      <tr>
          <td>listener.ssl.netty.shutdown_quiet_period</td>
          <td>SSL_NETTY_SHUTDOWN_QUIET_PERIOD</td>
          <td>0</td>
          <td>Period in seconds in graceful shutdown during which no new tasks are submitted</td>
      </tr>
      <tr>
          <td>listener.ssl.netty.shutdown_timeout</td>
          <td>SSL_NETTY_SHUTDOWN_TIMEOUT</td>
          <td>5</td>
          <td>The max time in seconds to wait until the executor is stopped</td>
      </tr>
      <tr>
          <td>listener.ssl.config.protocol</td>
          <td>LISTENER_SSL_PROTOCOL</td>
          <td>TLSv1.2</td>
          <td>SSL protocol: see <a href="http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#SSLContext">this link</a></td>
      </tr>
      <tr>
          <td>listener.ssl.config.credentials.type</td>
          <td>LISTENER_SSL_CREDENTIALS_TYPE</td>
          <td>PEM</td>
          <td>Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
      </tr>
      <tr>
          <td>listener.ssl.config.credentials.pem.cert_file</td>
          <td>LISTENER_SSL_PEM_CERT</td>
          <td>mqttserver.pem</td>
          <td>Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
      </tr>
      <tr>
          <td>listener.ssl.config.credentials.pem.key_file</td>
          <td>LISTENER_SSL_PEM_KEY</td>
          <td>mqttserver_key.pem</td>
          <td>Path to the server certificate private key file (optional)</td>
      </tr>
      <tr>
          <td>listener.ssl.config.credentials.pem.key_password</td>
          <td>LISTENER_SSL_PEM_KEY_PASSWORD</td>
          <td>server_key_password</td>
          <td>Server certificate private key password (optional)</td>
      </tr>
      <tr>
          <td>listener.ssl.config.credentials.keystore.type</td>
          <td>LISTENER_SSL_KEY_STORE_TYPE</td>
          <td>JKS</td>
          <td>Type of the key store</td>
      </tr>
      <tr>
          <td>listener.ssl.config.credentials.keystore.store_file</td>
          <td>LISTENER_SSL_KEY_STORE</td>
          <td>mqttserver.jks</td>
          <td>Path to the key store that holds the SSL certificate</td>
      </tr>
      <tr>
          <td>listener.ssl.config.credentials.keystore.store_password</td>
          <td>LISTENER_SSL_KEY_STORE_PASSWORD</td>
          <td>server_ks_password</td>
          <td>Password used to access the key store</td>
      </tr>
      <tr>
          <td>listener.ssl.config.credentials.keystore.key_alias</td>
          <td>LISTENER_SSL_KEY_ALIAS</td>
          <td></td>
          <td>Key alias</td>
      </tr> 
      <tr>
          <td>listener.ssl.config.credentials.keystore.key_password</td>
          <td>LISTENER_SSL_KEY_PASSWORD</td>
          <td>server_key_password</td>
          <td>Password used to access the key</td>
      </tr>
      <tr>
          <td>listener.ssl.config.skip_validity_check_for_client_cert</td>
          <td>LISTENER_SSL_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT</td>
          <td>false</td>
          <td>Skip check of client certificate validity</td>
      </tr> 
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">HTTP server parameters</span></td>
      </tr>
      <tr>
          <td>server.shutdown</td>
          <td>SERVER_SHUTDOWN</td>
          <td>graceful</td>
          <td>Shutdown type (graceful or immediate)</td>
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
          <td>server.ssl.credentials.type</td>
          <td>SSL_CREDENTIALS_TYPE</td>
          <td>PEM</td>
          <td>Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.pem.cert_file</td>
          <td>SSL_PEM_CERT</td>
          <td>server.pem</td>
          <td>Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.pem.key_file</td>
          <td>SSL_PEM_KEY</td>
          <td>server_key.pem</td>
          <td>Path to the server certificate private key file (optional)</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.pem.key_password</td>
          <td>SSL_PEM_KEY_PASSWORD</td>
          <td>server_key_password</td>
          <td>Server certificate private key password (optional)</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.type</td>
          <td>SSL_KEY_STORE_TYPE</td>
          <td>PKCS12</td>
          <td>Type of the key store</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.store_file</td>
          <td>SSL_KEY_STORE</td>
          <td>classpath:keystore/keystore.p12</td>
          <td>Path to the key store that holds the SSL certificate</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.store_password</td>
          <td>SSL_KEY_STORE_PASSWORD</td>
          <td>thingsboard_mqtt_broker</td>
          <td>Password used to access the key store</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.key_alias</td>
          <td>SSL_KEY_ALIAS</td>
          <td>tomcat</td>
          <td>Key alias</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.key_password</td>
          <td>SSL_KEY_PASSWORD</td>
          <td>thingsboard_mqtt_broker</td>
          <td>Password used to access the key</td>
      </tr>
      <tr>
          <td>server.log_controller_error_stack_trace</td>
          <td>HTTP_LOG_CONTROLLER_ERROR_STACK_TRACE</td>
          <td>false</td>
          <td>Log errors with stacktrace when REST API throws exception</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">HTTP Security parameters</span></td>
      </tr>  
      <tr>
          <td>security.jwt.tokenExpirationTime</td>
          <td>JWT_TOKEN_EXPIRATION_TIME</td>
          <td>9000</td>
          <td>User JWT Token expiration time in seconds</td>
      </tr>
      <tr>
          <td>security.jwt.refreshTokenExpTime</td>
          <td>JWT_REFRESH_TOKEN_EXPIRATION_TIME</td>
          <td>604800</td>
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
          <td>security.user_login_case_sensitive</td>
          <td>SECURITY_USER_LOGIN_CASE_SENSITIVE</td>
          <td>true</td>
          <td>Enable/disable case-sensitive username login</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">MQTT Security parameters</span></td>
      </tr>
      <tr>
          <td>security.mqtt.auth_strategy</td>
          <td>SECURITY_MQTT_AUTH_STRATEGY</td>
          <td>BOTH</td>
          <td>BOTH or SINGLE - the former means the first attempt of client authentication will be by 'basic' provider
          and then by 'ssl' provider if 'basic' is not successful; the latter means only one attempt is done according to the listener communication chosen</td>
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
          <td>actors.system.throughput</td>
          <td>ACTORS_SYSTEM_THROUGHPUT</td>
          <td>5</td>
          <td>Number of messages the actor system will process per actor before switching to processing of messages for next actor</td>
      </tr>
      <tr>
          <td>actors.system.scheduler-pool-size</td>
          <td>ACTORS_SYSTEM_SCHEDULER_POOL_SIZE</td>
          <td>1</td>
          <td>Thread pool size for actor system scheduler</td>
      </tr>
      <tr>
          <td>actors.system.max-actor-init-attempts</td>
          <td>ACTORS_SYSTEM_MAX_ACTOR_INIT_ATTEMPTS</td>
          <td>10</td>
          <td>Maximum number of attempts to init the actor before disabling the actor</td>
      </tr>
      <tr>
          <td>actors.system.processing-metrics.enabled</td>
          <td>ACTORS_SYSTEM_PROCESSING_METRICS_ENABLED</td>
          <td>false</td>
          <td>Enable/disable actors processing metrics</td>
      </tr>
      <tr>
          <td>actors.system.disconnect-wait-timeout-ms</td>
          <td>ACTORS_SYSTEM_DISCONNECT_WAIT_TIMEOUT_MS</td>
          <td>2000</td>
          <td>Actors disconnect timeout in milliseconds</td>
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
          <td>Number of threads processing the MQTT client actors messages</td>
      </tr>
      <tr>
          <td>actors.client.wait-before-generated-actor-stop-seconds</td>
          <td>ACTORS_SYSTEM_CLIENT_WAIT_BEFORE_GENERATED_ACTOR_STOP_SECONDS</td>
          <td>10</td>
          <td>Time in seconds to wait until the actor is stopped for clients that did not specify client id</td>
      </tr>
      <tr>
          <td>actors.client.wait-before-named-actor-stop-seconds</td>
          <td>ACTORS_SYSTEM_CLIENT_WAIT_BEFORE_NAMED_ACTOR_STOP_SECONDS</td>
          <td>60</td>
          <td>Time in seconds to wait until the actor is stopped for clients that specified client id</td>
      </tr>
      <tr>
          <td>actors.rule.mail_thread_pool_size</td>
          <td>ACTORS_RULE_MAIL_THREAD_POOL_SIZE</td>
          <td>4</td>
          <td>Thread pool size for mail sender executor service</td>
      </tr>
      <tr>
          <td>actors.rule.mail_password_reset_thread_pool_size</td>
          <td>ACTORS_RULE_MAIL_PASSWORD_RESET_THREAD_POOL_SIZE</td>
          <td>4</td>
          <td>Thread pool size for password reset emails executor service</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">MQTT parameters</span></td>
      </tr>
      <tr>
          <td>mqtt.connect.threads</td>
          <td>MQTT_CONNECT_THREADS</td>
          <td>4</td>
          <td>Number of threads for clients connection thread pool</td>
      </tr>
      <tr>
          <td>mqtt.msg-subscriptions-parallel-processing</td>
          <td>MQTT_MSG_SUBSCRIPTIONS_PARALLEL_PROCESSING</td>
          <td>false</td>
          <td>Enable/disable processing of found subscriptions in parallel for published messages</td>
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
          <td>Max number of PUBLISH or PUBREL messages not yet responded</td>
      </tr>
      <tr>
          <td>mqtt.retransmission.enabled</td>
          <td>MQTT_RETRANSMISSION_ENABLED</td>
          <td>false</td>
          <td>Enable/disable MQTT msg retransmission</td>
      </tr>
      <tr>
          <td>mqtt.retransmission.scheduler-pool-size</td>
          <td>MQTT_RETRANSMISSION_SCHEDULER_POOL_SIZE</td>
          <td>0</td>
          <td>Retransmission scheduler pool size (0 means the number of processors available to the JVM multiplied by 2 will be used)</td>
      </tr>
      <tr>
          <td>mqtt.retransmission.initial-delay</td>
          <td>MQTT_RETRANSMISSION_INITIAL_DELAY</td>
          <td>10</td>
          <td>Initial delay for the msg retransmission in seconds</td>
      </tr>
      <tr>
          <td>mqtt.retransmission.period</td>
          <td>MQTT_RETRANSMISSION_PERIOD</td>
          <td>5</td>
          <td>Increment period for the subsequent retransmissions of the msg in seconds (retransmission interval is increased by period for each run)</td>
      </tr>
      <tr>
          <td>mqtt.keep-alive.monitoring-delay-ms</td>
          <td>MQTT_KEEP_ALIVE_MONITORING_DELAY_MS</td>
          <td>100</td>
          <td>Time in milliseconds between subsequent checks for the non-active clients</td>
      </tr>
      <tr>
          <td>mqtt.keep-alive.max-keep-alive</td>
          <td>MQTT_KEEP_ALIVE_MAX_KEEP_ALIVE_SEC</td>
          <td>600</td>
          <td>Max value in seconds allowed by the server for keep-alive that can be used by clients</td>
      </tr>
      <tr>
          <td>mqtt.topic.max-segments-count</td>
          <td>MQTT_TOPIC_MAX_SEGMENTS_COUNT</td>
          <td>0</td>
          <td>Maximum number of segments in topics. If it's too large, processing of topics with too much segments can lead to errors. 0 means limitation is disabled</td>
      </tr>
      <tr>
          <td>mqtt.shared-subscriptions.processing-type</td>
          <td>MQTT_SHARED_SUBSCRIPTIONS_PROCESSING_TYPE</td>
          <td>ROUND_ROBIN</td>
          <td>Processing strategy type - how messages are split between clients in shared subscription</td>
      </tr>
      <tr>
          <td>mqtt.subscription-trie.wait-for-clear-lock-ms</td>
          <td>MQTT_SUB_TRIE_WAIT_FOR_CLEAR_LOCK_MS</td>
          <td>100</td>
          <td>Maximum pause in milliseconds for clearing subscription storage from empty nodes</td>
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
          <td>mqtt.retain-msg-trie.wait-for-clear-lock-ms</td>
          <td>MQTT_RETAIN_MSG_TRIE_WAIT_FOR_CLEAR_LOCK_MS</td>
          <td>100</td>
          <td>Maximum pause in milliseconds for clearing retain msg storage from empty nodes</td>
      </tr>
      <tr>
          <td>mqtt.retain-msg-trie.clear-nodes-cron</td>
          <td>MQTT_RETAIN_MSG_TRIE_CLEAR_NODES_CRON</td>
          <td>0 0 0 * * *</td>
          <td>Cron job to schedule clearing of empty retain msg nodes. Defaults to 'every day at midnight'</td>
      </tr>
      <tr>
          <td>mqtt.retain-msg-trie.clear-nodes-zone</td>
          <td>MQTT_RETAIN_MSG_TRIE_CLEAR_NODES_ZONE</td>
          <td>UTC</td>
          <td>Timezone for retain msg clearing cron-job</td>
      </tr>
      <tr>
          <td>mqtt.client-session-expiry.cron</td>
          <td>MQTT_CLIENT_SESSION_EXPIRY_CRON</td>
          <td>0 0 * ? * *</td>
          <td>Cron job to schedule clearing of expired and not active client-sessions. Defaults to 'every hour', e.g. at 20:00:00 UTC</td>
      </tr>
      <tr>
          <td>mqtt.client-session-expiry.zone</td>
          <td>MQTT_CLIENT_SESSION_EXPIRY_ZONE</td>
          <td>UTC</td>
          <td>Timezone for the client sessions clearing cron-job</td>
      </tr>
      <tr>
          <td>mqtt.client-session-expiry.max-expiry-interval</td>
          <td>MQTT_CLIENT_SESSION_EXPIRY_MAX_EXPIRY_INTERVAL</td>
          <td>604800</td>
          <td>Max expiry interval allowed for client-sessions in seconds. Defaults to one week</td>
      </tr>
      <tr>
          <td>mqtt.client-session-expiry.ttl</td>
          <td>MQTT_CLIENT_SESSION_EXPIRY_TTL</td>
          <td>604800</td>
          <td>Administration TTL in seconds for clearing sessions that do not expire by session expiry interval</td>
      </tr>
      <tr>
          <td>mqtt.version-3-1.max-client-id-length</td>
          <td>MQTT_3_1_MAX_CLIENT_ID_LENGTH</td>
          <td>1024</td>
          <td>Max ClientId length for 3.1 version of protocol</td>
      </tr>
      <tr>
          <td>mqtt.handler.all_msg_callback_threads</td>
          <td>MQTT_HANDLER_ALL_MSG_CALLBACK_THREADS</td>
          <td>2</td>
          <td>Number of threads in thread pool for processing all publish msgs callbacks after sending them to Kafka</td>
      </tr>
      <tr>
          <td>mqtt.handler.device_msg_callback_threads</td>
          <td>MQTT_HANDLER_DEVICE_MSG_CALLBACK_THREADS</td>
          <td>2</td>
          <td>Number of threads in thread pool for processing device persisted publish msgs callbacks after sending them to Kafka</td>
      </tr>
      <tr>
          <td>mqtt.handler.app_msg_callback_threads</td>
          <td>MQTT_HANDLER_APP_MSG_CALLBACK_THREADS</td>
          <td>2</td>
          <td>Number of threads in thread pool for processing application persisted publish msgs callbacks after sending them to Kafka</td>
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
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Rate Limits parameters</span></td>
      </tr>
      <tr>
          <td>mqtt.rate-limits.enabled</td>
          <td>MQTT_RATE_LIMITS_ENABLED</td>
          <td>false</td>
          <td>Enable/disable publish rate limits per client</td>
      </tr>
      <tr>
          <td>mqtt.rate-limits.client-config</td>
          <td>MQTT_RATE_LIMITS_CLIENT_CONFIG</td>
          <td>10:1,300:60</td>
          <td>Limit the maximum publish msgs per client on each server for specified time intervals in seconds. Comma separated list of limit:seconds pairs</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Spring JPA datasource parameters</span></td>
      </tr>  
      <tr>
          <td>spring.jpa.database-platform</td>
          <td>SPRING_JPA_DATABASE_PLATFORM</td>
          <td>org.hibernate.dialect.PostgreSQLDialect</td>
          <td>Database SQL dialect for Spring JPA</td>
      </tr>
      <tr>
          <td>spring.datasource.driverClassName</td>
          <td>SPRING_DRIVER_CLASS_NAME</td>
          <td>org.postgresql.Driver</td>
          <td>Database driver for Spring JPA</td>
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
                           which ultimately affects an application's performance and availability</td>
      </tr>
      <tr>
          <td>spring.datasource.hikari.maxLifetime</td>
          <td>SPRING_DATASOURCE_MAX_LIFETIME</td>
          <td>600000</td>
          <td>This property controls the max lifetime in milliseconds of a connection. Only when it is closed will it then be removed</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">SQL configuration parameters</span></td>
      </tr>
      <tr>
          <td>database.ts_max_intervals</td>
          <td>DATABASE_TS_MAX_INTERVALS</td>
          <td>700</td>
          <td>Max number of DB queries generated by single API call to fetch telemetry records</td>
      </tr>
      <tr>
          <td>sql.batch_sort</td>
          <td>SQL_BATCH_SORT</td>
          <td>true</td>
          <td>Specify whether to sort entities before batch update. Should be enabled for cluster mode to avoid deadlocks</td>
      </tr>
      <tr>
          <td>sql.ts_key_value_partitioning</td>
          <td>SQL_TS_KV_PARTITIONING</td>
          <td>DAYS</td>
          <td>Specify partitioning size for timestamp key-value storage. Example: DAYS, MONTHS, YEARS, INDEFINITE</td>
      </tr>
      <tr>
          <td>sql.ts.batch_size</td>
          <td>SQL_TS_BATCH_SIZE</td>
          <td>10000</td>
          <td>Batch size for persisting time-series inserts</td>
      </tr>
      <tr>
          <td>sql.ts.batch_max_delay</td>
          <td>SQL_TS_BATCH_MAX_DELAY_MS</td>
          <td>100</td>
          <td>Max timeout for time-series entries queue polling. Value set in milliseconds</td>
      </tr>
      <tr>
          <td>sql.ts.batch_threads</td>
          <td>SQL_TS_BATCH_THREADS</td>
          <td>3</td>
          <td>Number of threads that execute batch insert/update statements for time-series data</td>
      </tr>
      <tr>
          <td>sql.ttl.ts.enabled</td>
          <td>SQL_TTL_TS_ENABLED</td>
          <td>true</td>
          <td>The parameter to specify whether to use TTL (Time To Live) for time-series records</td>
      </tr>
      <tr>
          <td>sql.ttl.ts.execution_interval_ms</td>
          <td>SQL_TTL_TS_EXECUTION_INTERVAL_MS</td>
          <td>86400000</td>
          <td>The parameter to specify the period of execution TTL task for time-series records. Value set in milliseconds. Default value corresponds to one day</td>
      </tr>
      <tr>
          <td>sql.ttl.ts.ts_key_value_ttl</td>
          <td>SQL_TTL_TS_KEY_VALUE_TTL</td>
          <td>604800</td>
          <td>The parameter to specify system TTL(Time To Live) value for time-series records. Value set in seconds. 0 - records are never expired. Default value corresponds to seven days</td>
      </tr>
      <tr>
          <td>db.connection-check-rate-ms</td>
          <td>DB_CONNECTION_CHECK_RATE_MS</td>
          <td>10000</td>
          <td>The parameter to specify time interval in milliseconds to periodically check if the connection to the DB is still established</td>
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
          <td>The producer will attempt to batch records together into fewer requests whenever multiple records are being sent to the same partition. Size in bytes</td>
      </tr>
      <tr>
          <td>queue.kafka.default.producer.linger-ms</td>
          <td>TB_KAFKA_DEFAULT_PRODUCER_LINGER_MS</td>
          <td>5</td>
          <td>The producer groups together any records that arrive in between request transmissions into a single batched request, set in milliseconds</td>
      </tr>
      <tr>
          <td>queue.kafka.default.producer.buffer-memory</td>
          <td>TB_KAFKA_DEFAULT_PRODUCER_BUFFER_MEMORY</td>
          <td>33554432</td>
          <td>The total bytes of memory the producer can use to buffer records waiting to be sent to the server</td>
      </tr>
      <tr>
          <td>queue.kafka.default.producer.compression-type</td>
          <td>TB_KAFKA_DEFAULT_COMPRESSION_TYPE</td>
          <td>none</td>
          <td>The compression type for all data generated by the producer. Valid values are `none`, `gzip`, `snappy`, `lz4`, or `zstd`</td>
      </tr>
      <tr>
          <td>queue.kafka.default.consumer.partition-assignment-strategy</td>
          <td>TB_KAFKA_DEFAULT_CONSUMER_PARTITION_ASSIGNMENT_STRATEGY</td>
          <td>org.apache.kafka.clients.consumer.StickyAssignor</td>
          <td>A list of class names or class types, ordered by preference, of supported partition assignment strategies 
            that the client will use to distribute partition ownership amongst consumer instances when group management is used</td>
      </tr>
      <tr>
          <td>queue.kafka.default.consumer.session-timeout-ms</td>
          <td>TB_KAFKA_DEFAULT_CONSUMER_SESSION_TIMEOUT_MS</td>
          <td>300000</td>
          <td>The timeout in milliseconds used to detect client failures when using Kafka's group management facility</td>
      </tr>
      <tr>
          <td>queue.kafka.default.consumer.max-poll-interval-ms</td>
          <td>TB_KAFKA_DEFAULT_CONSUMER_MAX_POLL_INTERVAL_MS</td>
          <td>300000</td>
          <td>The maximum delay in milliseconds between invocations of poll() when using consumer group management</td>
      </tr>
      <tr>
          <td>queue.kafka.default.consumer.max-poll-records</td>
          <td>TB_KAFKA_DEFAULT_CONSUMER_MAX_POLL_RECORDS</td>
          <td>8192</td>
          <td>The maximum number of records returned in a single call to poll()</td>
      </tr>
      <tr>
          <td>queue.kafka.default.consumer.max-partition-fetch-bytes</td>
          <td>TB_KAFKA_DEFAULT_CONSUMER_MAX_PARTITION_FETCH_BYTES</td>
          <td>16777216</td>
          <td>The maximum amount of data in bytes per-partition the server will return</td>
      </tr>
      <tr>
          <td>queue.kafka.default.consumer.fetch-max-bytes</td>
          <td>TB_KAFKA_DEFAULT_CONSUMER_FETCH_MAX_BYTES</td>
          <td>134217728</td>
          <td>The maximum amount of data in bytes the server should return for a fetch request</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Custom Kafka parameters</span></td>
      </tr>
      <tr>
          <td>queue.kafka.msg-all.topic</td>
          <td>TB_KAFKA_MSG_ALL_TOPIC</td>
          <td>tbmq.msg.all</td>
          <td>Topic for persisting incoming PUBLISH messages</td>
      </tr>
      <tr>
          <td>queue.kafka.msg-all.topic-properties</td>
          <td>TB_KAFKA_MSG_ALL_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:2147483648;partitions:24;replication.factor:1</td>
          <td>Kafka topic properties for "msg-all" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.msg-all.additional-consumer-config</td>
          <td>TB_KAFKA_MSG_ALL_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "msg-all" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.msg-all.additional-producer-config</td>
          <td>TB_KAFKA_MSG_ALL_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "msg-all" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.application-persisted-msg.topic-properties</td>
          <td>TB_KAFKA_APP_PERSISTED_MSG_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;replication.factor:1</td>
          <td>Kafka topic properties for "application-persisted-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.application-persisted-msg.additional-consumer-config</td>
          <td>TB_KAFKA_APP_PERSISTED_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
          <td>max.poll.records:512</td>
          <td>Additional Kafka consumer configs for "application-persisted-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.application-persisted-msg.additional-producer-config</td>
          <td>TB_KAFKA_APP_PERSISTED_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "application-persisted-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.application-persisted-msg.shared-topic.topic-properties</td>
          <td>TB_KAFKA_APP_PERSISTED_MSG_SHARED_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;replication.factor:1</td>
          <td>Kafka topic properties for application shared subscription topics</td>
      </tr>
      <tr>
          <td>queue.kafka.application-persisted-msg.shared-topic.additional-consumer-config</td>
          <td>TB_KAFKA_APP_PERSISTED_MSG_SHARED_ADDITIONAL_CONSUMER_CONFIG</td>
          <td>max.poll.records:512</td>
          <td>Additional Kafka consumer configs for application shared subscription topics</td>
      </tr>
      <tr>
          <td>queue.kafka.application-persisted-msg.shared-topic.additional-producer-config</td>
          <td>TB_KAFKA_APP_PERSISTED_MSG_SHARED_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for application shared subscription topics</td>
      </tr>
      <tr>
          <td>queue.kafka.device-persisted-msg.topic</td>
          <td>TB_KAFKA_DEVICE_PERSISTED_MSG_TOPIC</td>
          <td>tbmq.msg.persisted</td>
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
          <td>queue.kafka.retained-msg.topic</td>
          <td>TB_KAFKA_RETAINED_MSG_TOPIC</td>
          <td>tbmq.msg.retained</td>
          <td>Topic for retained messages</td>
      </tr>
      <tr>
          <td>queue.kafka.retained-msg.topic-properties</td>
          <td>TB_KAFKA_RETAINED_MSG_TOPIC_PROPERTIES</td>
          <td>segment.bytes:26214400;partitions:1;replication.factor:1</td>
          <td>Kafka topic properties for "retained_msg" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.retained-msg.additional-consumer-config</td>
          <td>TB_KAFKA_RETAINED_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "retained_msg" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.retained-msg.additional-producer-config</td>
          <td>TB_KAFKA_RETAINED_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
          <td>retries:3</td>
          <td>Additional Kafka producer configs for "retained_msg" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.client-session.topic</td>
          <td>TB_KAFKA_CLIENT_SESSION_TOPIC</td>
          <td>tbmq.client.session</td>
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
          <td>tbmq.client.subscriptions</td>
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
          <td>tbmq.client.session.event.request</td>
          <td>Topic for sending Client Session Event requests</td>
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
          <td>tbmq.client.session.event.response</td>
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
          <td>tbmq.client.disconnect</td>
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
          <td>queue.kafka.basic-downlink-msg.topic-prefix</td>
          <td>TB_KAFKA_BASIC_DOWNLINK_MSG_TOPIC_PREFIX</td>
          <td>tbmq.msg.downlink.basic</td>
          <td>Prefix for topics for persisting non-persistent Device messages that should be transferred to other Broker nodes</td>
      </tr>
      <tr>
          <td>queue.kafka.basic-downlink-msg.topic-properties</td>
          <td>TB_KAFKA_BASIC_DOWNLINK_MSG_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:12;replication.factor:1</td>
          <td>Kafka topic properties for "basic-downlink-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.basic-downlink-msg.additional-consumer-config</td>
          <td>TB_KAFKA_BASIC_DOWNLINK_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "basic-downlink-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.basic-downlink-msg.additional-producer-config</td>
          <td>TB_KAFKA_BASIC_DOWNLINK_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
          <td>batch.size:32768</td>
          <td>Additional Kafka producer configs for "basic-downlink-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.persisted-downlink-msg.topic-prefix</td>
          <td>TB_KAFKA_PERSISTED_DOWNLINK_MSG_TOPIC_PREFIX</td>
          <td>tbmq.msg.downlink.persisted</td>
          <td>Prefix for topics for persisting persistent Device messages that should be transferred to other Broker nodes</td>
      </tr>
      <tr>
          <td>queue.kafka.persisted-downlink-msg.topic-properties</td>
          <td>TB_KAFKA_PERSISTED_DOWNLINK_MSG_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:12;replication.factor:1</td>
          <td>Kafka topic properties for "persisted-downlink-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.persisted-downlink-msg.additional-consumer-config</td>
          <td>TB_KAFKA_PERSISTED_DOWNLINK_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "persisted-downlink-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.persisted-downlink-msg.additional-producer-config</td>
          <td>TB_KAFKA_PERSISTED_DOWNLINK_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "persisted-downlink-msg" topics</td>
      </tr>
      <tr>
          <td>queue.kafka.application-removed-event.topic</td>
          <td>TB_KAFKA_APPLICATION_REMOVED_EVENT_TOPIC</td>
          <td>tbmq.sys.app.removed</td>
          <td>Topic for sending events to remove application topics when application clients are changed to be device clients</td>
      </tr>
      <tr>
          <td>queue.kafka.application-removed-event.topic-properties</td>
          <td>TB_KAFKA_APPLICATION_REMOVED_EVENT_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;replication.factor:1</td>
          <td>Kafka topic properties for "application-removed-event" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.application-removed-event.additional-consumer-config</td>
          <td>TB_KAFKA_APPLICATION_REMOVED_EVENT_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "application-removed-event" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.application-removed-event.additional-producer-config</td>
          <td>TB_KAFKA_APPLICATION_REMOVED_EVENT_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "application-removed-event" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.historical-data-total.topic</td>
          <td>TB_KAFKA_HISTORICAL_DATA_TOTAL_TOPIC</td>
          <td>tbmq.sys.historical.data</td>
          <td>Topic for sending historical data stats to be summed from each broker</td>
      </tr>
      <tr>
          <td>queue.kafka.historical-data-total.topic-properties</td>
          <td>TB_KAFKA_HISTORICAL_DATA_TOTAL_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;replication.factor:1</td>
          <td>Kafka topic properties for "historical-data-total" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.historical-data-total.additional-consumer-config</td>
          <td>TB_KAFKA_HISTORICAL_DATA_TOTAL_ADDITIONAL_CONSUMER_CONFIG</td>
          <td></td>
          <td>Additional Kafka consumer configs for "historical-data-total" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.historical-data-total.additional-producer-config</td>
          <td>TB_KAFKA_HISTORICAL_DATA_TOTAL_ADDITIONAL_PRODUCER_CONFIG</td>
          <td></td>
          <td>Additional Kafka producer configs for "historical-data-total" topic</td>
      </tr>
      <tr>
          <td>queue.kafka.admin.config</td>
          <td>TB_KAFKA_ADMIN_CONFIG</td>
          <td>retries:1</td>
          <td>List of configs separated by semicolon used for admin kafka client creation</td>
      </tr>
      <tr>
          <td>queue.kafka.consumer-stats.enabled</td>
          <td>TB_KAFKA_CONSUMER_STATS_ENABLED</td>
          <td>true</td>
          <td>Prints lag if enabled between consumer group offset and last messages offset in Kafka topics</td>
      </tr>
      <tr>
          <td>queue.kafka.consumer-stats.print-interval-ms</td>
          <td>TB_KAFKA_CONSUMER_STATS_PRINT_INTERVAL_MS</td>
          <td>60000</td>
          <td>Statistics printing interval in milliseconds for Kafka's consumer-groups stats</td>
      </tr>
      <tr>
          <td>queue.kafka.consumer-stats.kafka-response-timeout-ms</td>
          <td>TB_KAFKA_CONSUMER_STATS_RESPONSE_TIMEOUT_MS</td>
          <td>1000</td>
          <td>Time to wait in milliseconds for the stats-loading requests to Kafka to finish</td>
      </tr>
      <tr>
          <td>queue.kafka.consumer-stats.consumer-config</td>
          <td>TB_KAFKA_CONSUMER_STATS_CONSUMER_CONFIG</td>
          <td></td>
          <td>List of configs separated by semicolon used for kafka stats consumer</td>
      </tr>
      <tr>
          <td>queue.kafka.home-page.consumer-config</td>
          <td>TB_KAFKA_HOME_PAGE_CONSUMER_CONFIG</td>
          <td></td>
          <td>List of configs separated by semicolon used for kafka admin client for home page</td>
      </tr>
      <tr>
          <td>queue.kafka.home-page.kafka-response-timeout-ms</td>
          <td>TB_KAFKA_HOME_PAGE_RESPONSE_TIMEOUT_MS</td>
          <td>1000</td>
          <td>Time to wait in milliseconds for the home page requests to Kafka to finish</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Kafka queue processing parameters</span></td>
      </tr>
      <tr>
          <td>queue.msg-all.consumers-count</td>
          <td>TB_MSG_ALL_CONSUMERS_COUNT</td>
          <td>4</td>
          <td>Number of parallel PUBLISH messages consumers</td>
      </tr>
       <tr>
          <td>queue.msg-all.threads-count</td>
          <td>TB_MSG_ALL_THREADS_COUNT</td>
          <td>4</td>
          <td>Number of threads in the pool to process consumers tasks</td>
      </tr>
      <tr>
          <td>queue.msg-all.poll-interval</td>
          <td>TB_MSG_ALL_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'msg-all' topic</td>
      </tr>
      <tr>
          <td>queue.msg-all.pack-processing-timeout</td>
          <td>TB_MSG_ALL_PACK_PROCESSING_TIMEOUT</td>
          <td>10000</td>
          <td>Timeout in milliseconds for processing a 'msg-all' pack</td>
      </tr>
      <tr>
          <td>queue.msg-all.ack-strategy.type</td>
          <td>TB_MSG_ALL_ACK_STRATEGY_TYPE</td>
          <td>SKIP_ALL</td>
          <td>'msg-all' queue processing strategy. Can be: SKIP_ALL, RETRY_ALL</td>
      </tr>
      <tr>
          <td>queue.msg-all.ack-strategy.retries</td>
          <td>TB_MSG_ALL_ACK_STRATEGY_RETRIES</td>
          <td>1</td>
          <td>Number of retries, 0 is unlimited. Use for RETRY_ALL processing strategy</td>
      </tr>
      <tr>
          <td>queue.msg-all.msg-parallel-processing</td>
          <td>TB_MSG_ALL_PARALLEL_PROCESSING</td>
          <td>false</td>
          <td>Enable/disable processing of consumed messages in parallel (grouped by publishing client id to preserve order)</td>
      </tr>
      <tr>
          <td>queue.application-persisted-msg.threads-count</td>
          <td>TB_APP_PERSISTED_MSG_THREADS_COUNT</td>
          <td>8</td>
          <td>Number of threads in the pool to process Application consumers tasks</td>
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
          <td>Timeout in milliseconds for processing an 'application-persisted-msg' pack</td>
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
          <td>queue.application-persisted-msg.client-id-validation</td>
          <td>TB_APP_PERSISTED_MSG_CLIENT_ID_VALIDATION</td>
          <td>true</td>
          <td>Enable/disable check that Application client id contains only alphanumeric chars for Kafka topic creation</td>
      </tr>
      <tr>
          <td>queue.application-persisted-msg.shared-topic-validation</td>
          <td>TB_APP_PERSISTED_MSG_SHARED_TOPIC_VALIDATION</td>
          <td>true</td>
          <td>Enable/disable check that Application shared subscription topic filter contains only alphanumeric chars or '+' or '#' for Kafka topic creation</td>
      </tr>
      <tr>
          <td>queue.device-persisted-msg.threads-count</td>
          <td>TB_DEVICE_PERSISTED_MSG_THREADS_COUNT</td>
          <td>2</td>
          <td>Number of threads in the pool to process Device consumers tasks</td>
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
          <td>queue.retained-msg.poll-interval</td>
          <td>TB_RETAINED_MSG_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'retained-msg' topic</td>
      </tr>
      <tr>
          <td>queue.retained-msg.acknowledge-wait-timeout-ms</td>
          <td>TB_RETAINED_MSG_ACK_WAIT_TIMEOUT_MS</td>
          <td>500</td>
          <td>Interval in milliseconds to wait for system messages to be delivered to 'retained-msg' topic</td>
      </tr>
      <tr>
          <td>queue.client-session.poll-interval</td>
          <td>TB_CLIENT_SESSION_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'client-session' topic</td>
      </tr>
      <tr>
          <td>queue.client-session.acknowledge-wait-timeout-ms</td>
          <td>TB_CLIENT_SESSION_ACK_WAIT_TIMEOUT_MS</td>
          <td>500</td>
          <td>Interval in milliseconds to wait for system messages to be delivered to 'client-session' topic</td>
      </tr>
      <tr>
          <td>queue.client-subscriptions.poll-interval</td>
          <td>TB_CLIENT_SUBSCRIPTIONS_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'client-subscriptions' topic</td>
      </tr>
      <tr>
          <td>queue.client-subscriptions.acknowledge-wait-timeout-ms</td>
          <td>TB_CLIENT_SUBSCRIPTIONS_ACK_WAIT_TIMEOUT_MS</td>
          <td>500</td>
          <td>Interval in milliseconds to wait for system messages to be delivered to 'client-subscriptions' topic</td>
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
          <td>queue.client-session-event.batch-wait-timeout-ms</td>
          <td>TB_CLIENT_SESSION_EVENT_BATCH_WAIT_MS</td>
          <td>2000</td>
          <td>Max interval in milliseconds to process 'client-session-event' messages when consuming</td>
      </tr>
      <tr>
          <td>queue.client-session-event-response.response-sender-threads</td>
          <td>TB_CLIENT_SESSION_EVENT_RESPONSE_SENDER_THREADS</td>
          <td>8</td>
          <td>Number of threads for sending Event responses</td>
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
          <td>Time for Client Session Events to expire in milliseconds</td>
      </tr>
      <tr>
          <td>queue.client-session-event-response.cleanup-interval</td>
          <td>TB_CLIENT_SESSION_EVENT_RESPONSE_CLEANUP_INTERVAL</td>
          <td>100</td>
          <td>Period in milliseconds to clean-up stale Client Session Events</td>
      </tr>
      <tr>
          <td>queue.disconnect-client-command.poll-interval</td>
          <td>TB_DISCONNECT_CLIENT_COMMAND_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'disconnect-client-command' topics</td>
      </tr>
      <tr>
          <td>queue.persisted-downlink-msg.threads-count</td>
          <td>TB_PERSISTED_DOWNLINK_MSG_THREADS_COUNT</td>
          <td>2</td>
          <td>Number of threads in the pool to process consumers tasks</td>
      </tr>
      <tr>
          <td>queue.persisted-downlink-msg.consumers-count</td>
          <td>TB_PERSISTED_DOWNLINK_MSG_CONSUMERS_COUNT</td>
          <td>2</td>
          <td>Number of parallel persistent downlink messages consumers</td>
      </tr>
      <tr>
          <td>queue.persisted-downlink-msg.poll-interval</td>
          <td>TB_PERSISTED_DOWNLINK_MSG_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'persisted-downlink-msg' topics</td>
      </tr>
      <tr>
          <td>queue.basic-downlink-msg.threads-count</td>
          <td>TB_BASIC_DOWNLINK_MSG_THREADS_COUNT</td>
          <td>2</td>
          <td>Number of threads in the pool to process consumers tasks</td>
      </tr>
      <tr>
          <td>queue.basic-downlink-msg.consumers-count</td>
          <td>TB_BASIC_DOWNLINK_MSG_CONSUMERS_COUNT</td>
          <td>2</td>
          <td>Number of parallel basic downlink messages consumers</td>
      </tr>
      <tr>
          <td>queue.basic-downlink-msg.poll-interval</td>
          <td>TB_BASIC_DOWNLINK_MSG_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'basic-downlink-msg' topics</td>
      </tr>
      <tr>
          <td>queue.application-removed-event.poll-interval</td>
          <td>TB_APPLICATION_REMOVED_EVENT_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'application-removed-event' topics</td>
      </tr>
      <tr>
          <td>queue.application-removed-event.processing.cron</td>
          <td>TB_APPLICATION_REMOVED_EVENT_PROCESSING_CRON</td>
          <td>0 0 3 * * *</td>
          <td>Cron expression to when execute the consuming and processing of messages</td>
      </tr>
      <tr>
          <td>queue.application-removed-event.processing.zone</td>
          <td>TB_APPLICATION_REMOVED_EVENT_PROCESSING_ZONE</td>
          <td>UTC</td>
          <td>Timezone for the Application removed events processing cron-job</td>
      </tr>
      <tr>
          <td>queue.historical-data-total.poll-interval</td>
          <td>TB_HISTORICAL_DATA_TOTAL_POLL_INTERVAL</td>
          <td>100</td>
          <td>Interval in milliseconds to poll messages from 'historical-data-total' topics</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">TBMQ cache parameters</span></td>
      </tr>
      <tr>
          <td>cache.type</td>
          <td>CACHE_TYPE</td>
          <td>caffeine</td>
          <td>Cache type</td>
      </tr>
      <tr>
          <td>cache.stats.enabled</td>
          <td>CACHE_STATS_ENABLED</td>
          <td>true</td>
          <td>Enable/disable cache stats logging</td>
      </tr>
      <tr>
          <td>cache.stats.intervalSec</td>
          <td>CACHE_STATS_INTERVAL_SEC</td>
          <td>60</td>
          <td>Cache stats logging interval in seconds</td>
      </tr>
      <tr>
          <td>caffeine.specs.packetIdAndSerialNumber.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_PACKET_ID_SERIAL_NUMBER_TTL</td>
          <td>1440</td>
          <td>packetIdAndSerialNumber cache TTL in minutes</td>
      </tr>
      <tr>
          <td>caffeine.specs.packetIdAndSerialNumber.maxSize</td>
          <td>CACHE_SPECS_PACKET_ID_SERIAL_NUMBER_MAX_SIZE</td>
          <td>10000</td>
          <td>packetIdAndSerialNumber cache max size. maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>caffeine.specs.mqttClientCredentials.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_MQTT_CLIENT_CREDENTIALS_TTL</td>
          <td>1440</td>
          <td>mqttClientCredentials cache TTL in minutes</td>
      </tr>
      <tr>
          <td>caffeine.specs.mqttClientCredentials.maxSize</td>
          <td>CACHE_SPECS_MQTT_CLIENT_CREDENTIALS_MAX_SIZE</td>
          <td>0</td>
          <td>mqttClientCredentials cache max size. maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>caffeine.specs.basicCredentialsPassword.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_BASIC_CREDENTIALS_PASSWORD_TTL</td>
          <td>1</td>
          <td>basicCredentialsPassword cache TTL in minutes</td>
      </tr>
      <tr>
          <td>caffeine.specs.basicCredentialsPassword.maxSize</td>
          <td>CACHE_SPECS_BASIC_CREDENTIALS_PASSWORD_MAX_SIZE</td>
          <td>0</td>
          <td>basicCredentialsPassword cache max size. maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">TBMQ service parameters</span></td>
      </tr>
      <tr>
          <td>service.id</td>
          <td>TB_SERVICE_ID</td>
          <td></td>
          <td>Unique id for this service (autogenerated if empty)</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Statistics parameters</span></td>
      </tr>
      <tr>
          <td>stats.enabled</td>
          <td>STATS_ENABLED</td>
          <td>true</td>
          <td>Enable/disable stats printing to the logs</td>
      </tr>
      <tr>
          <td>stats.print-interval-ms</td>
          <td>STATS_PRINT_INTERVAL_MS</td>
          <td>60000</td>
          <td>Period in milliseconds to print stats. Default value corresponds to 1 minute</td>
      </tr>
      <tr>
          <td>stats.application-processor.enabled</td>
          <td>APPLICATION_PROCESSOR_STATS_ENABLED</td>
          <td>true</td>
          <td>Enable/disable specific Application clients stats</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Historical data statistics parameters</span></td>
      </tr>
      <tr>
          <td>historical-data-report.enabled</td>
          <td>HISTORICAL_DATA_REPORT_ENABLED</td>
          <td>true</td>
          <td>Enable/disable historical data stats reporting and persistence to the time-series</td>
      </tr>
      <tr>
          <td>historical-data-report.interval</td>
          <td>HISTORICAL_DATA_REPORT_INTERVAL</td>
          <td>1</td>
          <td>Period in minutes to collect stats for each broker</td>
      </tr>
      <tr>
          <td>historical-data-report.zone</td>
          <td>HISTORICAL_DATA_REPORT_ZONE</td>
          <td>UTC</td>
          <td>Timezone for the historical data stats processing</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">TBMQ statistics and troubleshooting</span></td>
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
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">The default timeout for asynchronous requests</span></td>
      </tr>
      <tr>
          <td>spring.mvc.async.request-timeout</td>
          <td>SPRING_MVC_ASYNC_REQUEST_TIMEOUT</td>
          <td>30000</td>
          <td>Timeout for HTTP requests in milliseconds</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Spring MVC/Resources parameters</span></td>
      </tr>
      <tr>
          <td>spring.mvc.cors.mappings.[/api/**].allowed-origins</td>
          <td></td>
          <td>*</td>
          <td>Comma-separated list of origins to allow. '*' allows all origins. When not set,CORS support is disabled</td>
      </tr>
      <tr>
          <td>spring.mvc.cors.mappings.[/api/**].allowed-methods</td>
          <td></td>
          <td>*</td>
          <td>Comma-separated list of methods to allow. '*' allows all methods</td>
      </tr>
      <tr>
          <td>spring.mvc.cors.mappings.[/api/**].allowed-headers</td>
          <td></td>
          <td>*</td>
          <td>Comma-separated list of headers to allow in a request. '*' allows all headers</td>
      </tr>
      <tr>
          <td>spring.mvc.cors.mappings.[/api/**].max-age</td>
          <td></td>
          <td>1800</td>
          <td>How long, in seconds, the response from a pre-flight request can be cached by clients</td>
      </tr>
      <tr>
          <td>spring.mvc.cors.mappings.[/api/**].allow-credentials</td>
          <td></td>
          <td>true</td>
          <td>Set whether credentials are supported. When not set, credentials are not supported</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Swagger parameters</span></td>
      </tr>
      <tr>
          <td>swagger.api_path_regex</td>
          <td>SWAGGER_API_PATH_REGEX</td>
          <td>/api/.*</td>
          <td>General swagger parameters</td>
      </tr>
      <tr>
          <td>swagger.security_path_regex</td>
          <td>SWAGGER_SECURITY_PATH_REGEX</td>
          <td>/api/.*</td>
          <td>General swagger parameters</td>
      </tr>
      <tr>
          <td>swagger.non_security_path_regex</td>
          <td>SWAGGER_NON_SECURITY_PATH_REGEX</td>
          <td>/api/noauth.*</td>
          <td>General swagger parameters</td>
      </tr>
      <tr>
          <td>swagger.title</td>
          <td>SWAGGER_TITLE</td>
          <td>TBMQ REST API</td>
          <td>The title on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.description</td>
          <td>SWAGGER_DESCRIPTION</td>
          <td>TBMQ open-source REST API documentation</td>
          <td>The description on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.contact.name</td>
          <td>SWAGGER_CONTACT_NAME</td>
          <td>ThingsBoard team</td>
          <td>The contact name on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.contact.url</td>
          <td>SWAGGER_CONTACT_URL</td>
          <td>https://thingsboard.io</td>
          <td>The contact URL on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.contact.email</td>
          <td>SWAGGER_CONTACT_EMAIL</td>
          <td>info@thingsboard.io</td>
          <td>The contact email on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.license.title</td>
          <td>SWAGGER_LICENSE_TITLE</td>
          <td>Apache License Version 2.0</td>
          <td>The license title on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.license.url</td>
          <td>SWAGGER_LICENSE_URL</td>
          <td>https://github.com/thingsboard/tbmq/blob/main/LICENSE</td>
          <td>Link to the license body on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.version</td>
          <td>SWAGGER_VERSION</td>
          <td></td>
          <td>The version of the API doc to display. Default to the package version</td>
      </tr>
  </tbody>
</table>

#### logback.xml

The configuration file for logging is **logback.xml**. It allows for controlling the log level, the size of log files, and the total size/volume of logs.
