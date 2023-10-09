

####  Server common properties
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>server.address</td><td>HTTP_BIND_ADDRESS</td><td>0.0.0.0</td><td> Server bind address</td></tr>
<tr><td>server.port</td><td>HTTP_BIND_PORT</td><td>8080</td><td>
 Server bind port</td></tr>
<tr><td>server.forward_headers_strategy</td><td>HTTP_FORWARD_HEADERS_STRATEGY</td><td>NONE</td><td>
 Server forward headers strategy</td></tr>
<tr><td>server.ssl.enabled</td><td>SSL_ENABLED</td><td>false</td><td> Enable/disable SSL support</td></tr>
<tr><td>server.ssl.credentials.type</td><td>SSL_CREDENTIALS_TYPE</td><td>PEM</td><td> Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td></tr>
<tr><td>server.ssl.credentials.pem.cert_file</td><td>SSL_PEM_CERT</td><td>server.pem</td><td> Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td></tr>
<tr><td>server.ssl.credentials.pem.key_file</td><td>SSL_PEM_KEY</td><td>server_key.pem</td><td>
 Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td></tr>
<tr><td>server.ssl.credentials.pem.key_password</td><td>SSL_PEM_KEY_PASSWORD</td><td>server_key_password</td><td>
 Server certificate private key password (optional)</td></tr>
<tr><td>server.ssl.credentials.keystore.type</td><td>SSL_KEY_STORE_TYPE</td><td>PKCS12</td><td> Type of the key store (JKS or PKCS12)</td></tr>
<tr><td>server.ssl.credentials.keystore.store_file</td><td>SSL_KEY_STORE</td><td>classpath:keystore/keystore.p12</td><td>
 Path to the key store that holds the SSL certificate</td></tr>
<tr><td>server.ssl.credentials.keystore.store_password</td><td>SSL_KEY_STORE_PASSWORD</td><td>thingsboard</td><td>
 Password used to access the key store</td></tr>
<tr><td>server.ssl.credentials.keystore.key_alias</td><td>SSL_KEY_ALIAS</td><td>tomcat</td><td>
 Key alias</td></tr>
<tr><td>server.ssl.credentials.keystore.key_password</td><td>SSL_KEY_PASSWORD</td><td>thingsboard</td><td>
 Password used to access the key</td></tr>
<tr><td>server.http2.enabled</td><td>HTTP2_ENABLED</td><td>true</td><td> Enable/disable HTTP/2 support</td></tr>
<tr><td>server.log_controller_error_stack_trace</td><td>HTTP_LOG_CONTROLLER_ERROR_STACK_TRACE</td><td>false</td><td> Log errors with stacktrace when REST API throws exception with message "Please contact sysadmin"</td></tr>
<tr><td>server.ws.send_timeout</td><td>TB_SERVER_WS_SEND_TIMEOUT</td><td>5000</td><td> Timeout for sending data to client WebSocket session in milliseconds</td></tr>
<tr><td>server.ws.ping_timeout</td><td>TB_SERVER_WS_PING_TIMEOUT</td><td>30000</td><td>
 recommended timeout >= 30 seconds. Platform will attempt to send 'ping' request 3 times within the timeout</td></tr>
<tr><td>server.ws.dynamic_page_link.refresh_interval</td><td>TB_SERVER_WS_DYNAMIC_PAGE_LINK_REFRESH_INTERVAL_SEC</td><td>60</td><td> Refresh rate of the dynamic alarm end entity data queries</td></tr>
<tr><td>server.ws.dynamic_page_link.refresh_pool_size</td><td>TB_SERVER_WS_DYNAMIC_PAGE_LINK_REFRESH_POOL_SIZE</td><td>1</td><td>
 Thread pool size to execute dynamic queries</td></tr>
<tr><td>server.ws.dynamic_page_link.max_alarm_queries_per_refresh_interval</td><td>TB_SERVER_WS_MAX_ALARM_QUERIES_PER_REFRESH_INTERVAL</td><td>10</td><td>
 Maximum number of dynamic queries per refresh interval. For example, no more than 10 alarm queries executed by user simultaneously in all browsers.</td></tr>
<tr><td>server.ws.dynamic_page_link.max_per_user</td><td>TB_SERVER_WS_DYNAMIC_PAGE_LINK_MAX_PER_USER</td><td>10</td><td>
 Maximum number of dynamic queries per user. For example, no more than 10 alarm widgets opened by user simultaneously in all browsers<</td></tr>
<tr><td>server.ws.max_entities_per_data_subscription</td><td>TB_SERVER_WS_MAX_ENTITIES_PER_DATA_SUBSCRIPTION</td><td>10000</td><td> Maximum number of entities returned for single entity subscription. For example, no more than 10 000 entities on the map widget</td></tr>
<tr><td>server.ws.max_entities_per_alarm_subscription</td><td>TB_SERVER_WS_MAX_ENTITIES_PER_ALARM_SUBSCRIPTION</td><td>10000</td><td>
 Maximum number of alarms returned for single alarm subscription. For example, no more than 10 000 alarms on the alarm widget</td></tr>
<tr><td>server.ws.max_queue_messages_per_session</td><td>TB_SERVER_WS_DEFAULT_QUEUE_MESSAGES_PER_SESSION</td><td>1000</td><td>
 Maximum queue size of the websocket updates per session. This restriction prevents infinite updates of WS</td></tr>
<tr><td>server.rest.server_side_rpc.min_timeout</td><td>MIN_SERVER_SIDE_RPC_TIMEOUT</td><td>5000</td><td> Minimum value of the server side RPC timeout. May override value provided in the REST API call.
 Since 2.5 migration to queues, the RPC delay depends on the size of the pending messages in the queue,
 so default UI parameter of 500ms may not be sufficient for loaded environments.</td></tr>
<tr><td>server.rest.server_side_rpc.default_timeout</td><td>DEFAULT_SERVER_SIDE_RPC_TIMEOUT</td><td>10000</td><td>
 Default value of the server side RPC timeout.</td></tr>
<tr><td>server.rest.rate_limits.reset_password_per_user</td><td>RESET_PASSWORD_PER_USER_RATE_LIMIT_CONFIGURATION</td><td>5:3600</td><td> Limit that prohibits resetting the password for the user too often. The value of rate limit. By default, no more than 5 requests per hour</td></tr>
</tbody></table>


####  Application info
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>app.version</td><td></td><td>"@project.version@"</td><td> Application version</td></tr>
</tbody></table>


####  Zookeeper connection parameters. Used for service discovery.
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>zk.enabled</td><td>ZOOKEEPER_ENABLED</td><td>false</td><td> Enable/disable zookeeper discovery service.</td></tr>
<tr><td>zk.url</td><td>ZOOKEEPER_URL</td><td>localhost:2181</td><td>
 Zookeeper connect string</td></tr>
<tr><td>zk.retry_interval_ms</td><td>ZOOKEEPER_RETRY_INTERVAL_MS</td><td>3000</td><td>
 Zookeeper retry interval in milliseconds</td></tr>
<tr><td>zk.connection_timeout_ms</td><td>ZOOKEEPER_CONNECTION_TIMEOUT_MS</td><td>3000</td><td>
 Zookeeper connection timeout in milliseconds</td></tr>
<tr><td>zk.session_timeout_ms</td><td>ZOOKEEPER_SESSION_TIMEOUT_MS</td><td>3000</td><td>
 Zookeeper session timeout in milliseconds</td></tr>
<tr><td>zk.zk_dir</td><td>ZOOKEEPER_NODES_DIR</td><td>/thingsboard</td><td>
 Name of the directory in zookeeper 'filesystem'</td></tr>
<tr><td>zk.recalculate_delay</td><td>ZOOKEEPER_RECALCULATE_DELAY_MS</td><td>0</td><td>
 The recalculate_delay property recommended in a microservices architecture setup for rule-engine services.
 This property provides a pause to ensure that when a rule-engine service is restarted, other nodes don't immediately attempt to recalculate their partitions.
 The delay is recommended because the initialization of rule chain actors is time-consuming. Avoiding unnecessary recalculations during a restart can enhance system performance and stability.</td></tr>
</tbody></table>


####  Cluster properties
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>cluster.stats.enabled</td><td>TB_CLUSTER_STATS_ENABLED</td><td>false</td><td> Enable/Disable the cluster statistics. Calculates number of messages sent between cluster nodes based on each type</td></tr>
<tr><td>cluster.stats.print_interval_ms</td><td>TB_CLUSTER_STATS_PRINT_INTERVAL_MS</td><td>10000</td><td>
 Interval of printing the cluster stats to the log file</td></tr>
</tbody></table>


####  Plugins configuration parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>plugins.scan_packages</td><td>PLUGINS_SCAN_PACKAGES</td><td>org.thingsboard.server.extensions,org.thingsboard.rule.engine</td><td> Comma separated package list used during classpath scanning for plugins</td></tr>
</tbody></table>


####  Security parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>security.jwt.tokenExpirationTime</td><td>JWT_TOKEN_EXPIRATION_TIME</td><td>9000</td><td> Number of seconds (2.5 hours)</td></tr>
<tr><td>security.jwt.refreshTokenExpTime</td><td>JWT_REFRESH_TOKEN_EXPIRATION_TIME</td><td>604800</td><td> Number of seconds (1 week).</td></tr>
<tr><td>security.jwt.tokenIssuer</td><td>JWT_TOKEN_ISSUER</td><td>thingsboard.io</td><td> User JWT Token issuer</td></tr>
<tr><td>security.jwt.tokenSigningKey</td><td>JWT_TOKEN_SIGNING_KEY</td><td>thingsboardDefaultSigningKey</td><td> Base64 encoded</td></tr>
<tr><td>security.user_token_access_enabled</td><td>SECURITY_USER_TOKEN_ACCESS_ENABLED</td><td>true</td><td> Enable/disable access to Tenant Administrators JWT token by System Administrator or Customer Users JWT token by Tenant Administrator</td></tr>
<tr><td>security.user_login_case_sensitive</td><td>SECURITY_USER_LOGIN_CASE_SENSITIVE</td><td>true</td><td>
 Enable/disable case-sensitive username login</td></tr>
<tr><td>security.claim.allowClaimingByDefault</td><td>SECURITY_CLAIM_ALLOW_CLAIMING_BY_DEFAULT</td><td>true</td><td> Enable/disable claiming devices, if false -> the device's [claimingAllowed] SERVER_SCOPE attribute must be set to [true] to allow claiming specific device</td></tr>
<tr><td>security.claim.duration</td><td>SECURITY_CLAIM_DURATION</td><td>86400000</td><td> 1 minute, note this value must equal claimDevices.timeToLiveInMinutes value</td></tr>
<tr><td>security.basic.enabled</td><td>SECURITY_BASIC_ENABLED</td><td>false</td><td> Enable/Disable basic security options</td></tr>
<tr><td>security.oauth2.loginProcessingUrl</td><td>SECURITY_OAUTH2_LOGIN_PROCESSING_URL</td><td>/login/oauth2/code/</td><td> Redirect URL where access code from external user management system will be processed</td></tr>
<tr><td>security.oauth2.githubMapper.emailUrl</td><td>SECURITY_OAUTH2_GITHUB_MAPPER_EMAIL_URL_KEY</td><td>https://api.github.com/user/emails</td><td> The email addresses that will be mapped from the URL</td></tr>
<tr><td>security.java_cacerts.path</td><td>SECURITY_JAVA_CACERTS_PATH</td><td>${java.home}/lib/security/cacerts</td><td> CA certificates keystore default path. Typically this keystore is at JAVA_HOME/lib/security/cacerts</td></tr>
<tr><td>security.java_cacerts.password</td><td>SECURITY_JAVA_CACERTS_PASSWORD</td><td>changeit</td><td>
 The password of the cacerts keystore file</td></tr>
<tr><td>mail.oauth2.refreshTokenCheckingInterval</td><td>REFRESH_TOKEN_EXPIRATION_CHECKING_INTERVAL</td><td>86400</td><td> Interval to check refresh token is going to expire in seconds(by default 1 day).</td></tr>
</tbody></table>


####  Usage statistics parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>usage.stats.report.enabled</td><td>USAGE_STATS_REPORT_ENABLED</td><td>true</td><td> Enable/Disable collection of statistics about API usage. Collected on a system and tenant level by default</td></tr>
<tr><td>usage.stats.report.enabled_per_customer</td><td>USAGE_STATS_REPORT_PER_CUSTOMER_ENABLED</td><td>false</td><td>
 Enable/Disable collection of statistics about API usage on a customer level</td></tr>
<tr><td>usage.stats.report.interval</td><td>USAGE_STATS_REPORT_INTERVAL</td><td>10</td><td>
 Interval of reporting the statistics. By default, the summarized statistics is sent every 10 seconds</td></tr>
<tr><td>usage.stats.check.cycle</td><td>USAGE_STATS_CHECK_CYCLE</td><td>60000</td><td> Interval of checking the start of next cycle and re-enabling the blocked tenants/customers</td></tr>
<tr><td>usage.stats.gauge_report_interval</td><td>USAGE_STATS_GAUGE_REPORT_INTERVAL</td><td>180000</td><td> In milliseconds. Default value is 3 minutes</td></tr>
<tr><td>usage.stats.devices.report_interval</td><td>DEVICES_STATS_REPORT_INTERVAL</td><td>60</td><td> In seconds, default value is 1 minutes. When changing, in cluster mode, make sure usage.stats.gauge_report_interval is set to x2-x3 of this value</td></tr>
</tbody></table>


####  UI parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>ui.dashboard.max_datapoints_limit</td><td>DASHBOARD_MAX_DATAPOINTS_LIMIT</td><td>50000</td><td> Maximum allowed datapoints fetched by widgets</td></tr>
<tr><td>ui.help.base-url</td><td>UI_HELP_BASE_URL</td><td>https://raw.githubusercontent.com/thingsboard/thingsboard-pe-ui-help/release-3.6</td><td> Base url for UI help assets</td></tr>
</tbody></table>


####  Database telemetry parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>database.ts_max_intervals</td><td>DATABASE_TS_MAX_INTERVALS</td><td>700</td><td> Max number of DB queries generated by single API call to fetch telemetry records</td></tr>
<tr><td>database.ts.type</td><td>DATABASE_TS_TYPE</td><td>sql</td><td> cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)</td></tr>
<tr><td>database.ts_latest.type</td><td>DATABASE_TS_LATEST_TYPE</td><td>sql</td><td> cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)</td></tr>
</tbody></table>


####  Cassandra driver configuration parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>cassandra.cluster_name</td><td>CASSANDRA_CLUSTER_NAME</td><td>Thingsboard Cluster</td><td> Thingsboard cluster name</td></tr>
<tr><td>cassandra.keyspace_name</td><td>CASSANDRA_KEYSPACE_NAME</td><td>thingsboard</td><td>
 Thingsboard keyspace name</td></tr>
<tr><td>cassandra.url</td><td>CASSANDRA_URL</td><td>127.0.0.1:9042</td><td>
 Specify node list</td></tr>
<tr><td>cassandra.local_datacenter</td><td>CASSANDRA_LOCAL_DATACENTER</td><td>datacenter1</td><td>
 Specify local datacenter name</td></tr>
<tr><td>cassandra.ssl.enabled</td><td>CASSANDRA_USE_SSL</td><td>false</td><td> Enable/disable secure connection</td></tr>
<tr><td>cassandra.ssl.hostname_validation</td><td>CASSANDRA_SSL_HOSTNAME_VALIDATION</td><td>true</td><td>
 Enable/disable validation of Cassandra server hostname
 If enabled, hostname of Cassandra server must match CN of server certificate</td></tr>
<tr><td>cassandra.ssl.trust_store</td><td>CASSANDRA_SSL_TRUST_STORE</td><td></td><td>
 Set trust store for client authentication of server (optional, uses trust store from default SSLContext if not set)</td></tr>
<tr><td>cassandra.ssl.trust_store_password</td><td>CASSANDRA_SSL_TRUST_STORE_PASSWORD</td><td></td><td>
 The password for Cassandra trust store key</td></tr>
<tr><td>cassandra.ssl.key_store</td><td>CASSANDRA_SSL_KEY_STORE</td><td></td><td>
 Set key store for server authentication of client (optional, uses key store from default SSLContext if not set)
 A key store is only needed if the Cassandra server requires client authentication</td></tr>
<tr><td>cassandra.ssl.key_store_password</td><td>CASSANDRA_SSL_KEY_STORE_PASSWORD</td><td></td><td>
 The password for Cassandra key store</td></tr>
<tr><td>cassandra.ssl.cipher_suites</td><td>CASSANDRA_SSL_CIPHER_SUITES</td><td></td><td>
 Comma separated list of cipher suites (optional, uses Java default cipher suites if not set)</td></tr>
<tr><td>cassandra.jmx</td><td>CASSANDRA_USE_JMX</td><td>false</td><td> Enable/disable JMX</td></tr>
<tr><td>cassandra.metrics</td><td>CASSANDRA_USE_METRICS</td><td>false</td><td>
 Enable/disable metrics collection.</td></tr>
<tr><td>cassandra.compression</td><td>CASSANDRA_COMPRESSION</td><td>none</td><td>
 NONE SNAPPY LZ4</td></tr>
<tr><td>cassandra.init_timeout_ms</td><td>CASSANDRA_CLUSTER_INIT_TIMEOUT_MS</td><td>300000</td><td>
 Specify cassandra cluster initialization timeout in milliseconds (if no hosts available during startup)</td></tr>
<tr><td>cassandra.init_retry_interval_ms</td><td>CASSANDRA_CLUSTER_INIT_RETRY_INTERVAL_MS</td><td>3000</td><td>
 Specify cassandra claster initialization retry interval (if no hosts available during startup)</td></tr>
<tr><td>cassandra.max_requests_per_connection_local</td><td>CASSANDRA_MAX_REQUESTS_PER_CONNECTION_LOCAL</td><td>32768</td><td>
 Cassandra max local requests per connection</td></tr>
<tr><td>cassandra.max_requests_per_connection_remote</td><td>CASSANDRA_MAX_REQUESTS_PER_CONNECTION_REMOTE</td><td>32768</td><td>
 Cassandra max remote requests per connection</td></tr>
<tr><td>cassandra.credentials</td><td>CASSANDRA_USE_CREDENTIALS</td><td>false</td><td>
 Credential parameters</td></tr>
<tr><td>cassandra.username</td><td>CASSANDRA_USERNAME</td><td></td><td>
 Specify your username</td></tr>
<tr><td>cassandra.password</td><td>CASSANDRA_PASSWORD</td><td></td><td>
 Specify your password</td></tr>
<tr><td>cassandra.cloud.secure_connect_bundle_path</td><td>CASSANDRA_CLOUD_SECURE_BUNDLE_PATH</td><td></td><td> /etc/thingsboard/astra/secure-connect-thingsboard.zip</td></tr>
<tr><td>cassandra.cloud.client_id</td><td>CASSANDRA_CLOUD_CLIENT_ID</td><td></td><td>
 DucitQPHMzPCBOZqFYexAfKk</td></tr>
<tr><td>cassandra.cloud.client_secret</td><td>CASSANDRA_CLOUD_CLIENT_SECRET</td><td></td><td>
 ZnF7FpuHp43FP5BzM+KY8wGmSb4Ql6BhT4Z7sOU13ze+gXQ-n7OkFpNuB,oACUIQObQnK0g4bSPoZhK5ejkcF9F.j6f64j71Sr.tiRe0Fsq2hPS1ZCGSfAaIgg63IydG</td></tr>
<tr><td>cassandra.socket.connect_timeout</td><td>CASSANDRA_SOCKET_TIMEOUT</td><td>5000</td><td> Sets the timeout, in millisecond, of a native connection from ThingsBoard to Cassandra. The default value is 5000</td></tr>
<tr><td>cassandra.socket.read_timeout</td><td>CASSANDRA_SOCKET_READ_TIMEOUT</td><td>20000</td><td>
 Timeout before closing the connection. Value set in milliseconds</td></tr>
<tr><td>cassandra.socket.keep_alive</td><td>CASSANDRA_SOCKET_KEEP_ALIVE</td><td>true</td><td>
 Gets if TCP keep-alive must be used</td></tr>
<tr><td>cassandra.socket.reuse_address</td><td>CASSANDRA_SOCKET_REUSE_ADDRESS</td><td>true</td><td>
 Enable/Disable reuse-address.The socket option allows for the reuse of local addresses and ports</td></tr>
<tr><td>cassandra.socket.so_linger</td><td>CASSANDRA_SOCKET_SO_LINGER</td><td></td><td>
 Sets the linger-on-close timeout. By default, this option is not set by the driver. The actual value will be the default from the underlying Netty transport</td></tr>
<tr><td>cassandra.socket.tcp_no_delay</td><td>CASSANDRA_SOCKET_TCP_NO_DELAY</td><td>false</td><td>
 Enable/Disable Nagle's algorithm</td></tr>
<tr><td>cassandra.socket.receive_buffer_size</td><td>CASSANDRA_SOCKET_RECEIVE_BUFFER_SIZE</td><td></td><td>
 Sets a hint to the size of the underlying buffers for incoming network I/O. By default, this option is not set by the driver. The actual value will be the default from the underlying Netty transport</td></tr>
<tr><td>cassandra.socket.send_buffer_size</td><td>CASSANDRA_SOCKET_SEND_BUFFER_SIZE</td><td></td><td>
 Returns the hint to the size of the underlying buffers for outgoing network I/O. By default, this option is not set by the driver. The actual value will be the default from the underlying Netty transport</td></tr>
<tr><td>cassandra.query.read_consistency_level</td><td>CASSANDRA_READ_CONSISTENCY_LEVEL</td><td>ONE</td><td> Consistency levels in Cassandra can be configured to manage availability versus data accuracy. The consistency level defaults to ONE for all write and read operations</td></tr>
<tr><td>cassandra.query.write_consistency_level</td><td>CASSANDRA_WRITE_CONSISTENCY_LEVEL</td><td>ONE</td><td>
 Consistency levels in Cassandra can be configured to manage availability versus data accuracy. The consistency level defaults to ONE for all write and read operations</td></tr>
<tr><td>cassandra.query.default_fetch_size</td><td>CASSANDRA_DEFAULT_FETCH_SIZE</td><td>2000</td><td>
 The fetch size specifies how many rows will be returned at once by Cassandra (in other words, it’s the size of each page)</td></tr>
<tr><td>cassandra.query.ts_key_value_partitioning</td><td>TS_KV_PARTITIONING</td><td>MONTHS</td><td>
 Specify partitioning size for timestamp key-value storage. Example: MINUTES, HOURS, DAYS, MONTHS, INDEFINITE</td></tr>
<tr><td>cassandra.query.use_ts_key_value_partitioning_on_read</td><td>USE_TS_KV_PARTITIONING_ON_READ</td><td>true</td><td>
 Enable/Disable timestamp key-value partioning on read queries</td></tr>
<tr><td>cassandra.query.ts_key_value_partitions_max_cache_size</td><td>TS_KV_PARTITIONS_MAX_CACHE_SIZE</td><td>100000</td><td>
 The number of partitions that are cached in memory of each service. Useful to decrease load of re-inserting same partitions again</td></tr>
<tr><td>cassandra.query.ts_key_value_ttl</td><td>TS_KV_TTL</td><td>0</td><td>
 Timeseries Time To Live (in seconds) for Cassandra Record. 0 - record is never expired</td></tr>
<tr><td>cassandra.query.buffer_size</td><td>CASSANDRA_QUERY_BUFFER_SIZE</td><td>200000</td><td>
 Maximum number of Cassandra queries that are waiting for execution</td></tr>
<tr><td>cassandra.query.concurrent_limit</td><td>CASSANDRA_QUERY_CONCURRENT_LIMIT</td><td>1000</td><td>
 Maximum number of concurrent Cassandra queries</td></tr>
<tr><td>cassandra.query.permit_max_wait_time</td><td>PERMIT_MAX_WAIT_TIME</td><td>120000</td><td>
 Max time in milliseconds query waits for execution</td></tr>
<tr><td>cassandra.query.dispatcher_threads</td><td>CASSANDRA_QUERY_DISPATCHER_THREADS</td><td>2</td><td>
 Amount of threads to dispatch cassandra queries</td></tr>
<tr><td>cassandra.query.callback_threads</td><td>CASSANDRA_QUERY_CALLBACK_THREADS</td><td>4</td><td> Buffered rate executor (read, write), for managing I/O rate. See "nosql-*-callback" threads in JMX</td></tr>
<tr><td>cassandra.query.result_processing_threads</td><td>CASSANDRA_QUERY_RESULT_PROCESSING_THREADS</td><td>50</td><td> Result set transformer and processing. See "cassandra-callback" threads in JMX</td></tr>
<tr><td>cassandra.query.poll_ms</td><td>CASSANDRA_QUERY_POLL_MS</td><td>50</td><td>
 Cassandra query queue polling interval in milliseconds</td></tr>
<tr><td>cassandra.query.rate_limit_print_interval_ms</td><td>CASSANDRA_QUERY_RATE_LIMIT_PRINT_MS</td><td>10000</td><td>
 Interval in milliseconds for printing Cassandra query queue statistic</td></tr>
<tr><td>cassandra.query.set_null_values_enabled</td><td>CASSANDRA_QUERY_SET_NULL_VALUES_ENABLED</td><td>false</td><td>
 set all data types values except target to null for the same ts on save</td></tr>
<tr><td>cassandra.query.print_queries_freq</td><td>CASSANDRA_QUERY_PRINT_FREQ</td><td>0</td><td>
 log one of cassandra queries with specified frequency (0 - logging is disabled)</td></tr>
<tr><td>cassandra.query.tenant_rate_limits.print_tenant_names</td><td>CASSANDRA_QUERY_TENANT_RATE_LIMITS_PRINT_TENANT_NAMES</td><td>false</td><td> Whether to print rate-limited tenant names when printing Cassandra query queue statistic</td></tr>
</tbody></table>


####  SQL configuration parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>sql.attributes.batch_size</td><td>SQL_ATTRIBUTES_BATCH_SIZE</td><td>1000</td><td> Batch size for persisting attribute updates</td></tr>
<tr><td>sql.attributes.batch_max_delay</td><td>SQL_ATTRIBUTES_BATCH_MAX_DELAY_MS</td><td>50</td><td> Max timeout for attributes entries queue polling. Value set in milliseconds</td></tr>
<tr><td>sql.attributes.stats_print_interval_ms</td><td>SQL_ATTRIBUTES_BATCH_STATS_PRINT_MS</td><td>10000</td><td> Interval in milliseconds for printing attributes updates statistic</td></tr>
<tr><td>sql.attributes.batch_threads</td><td>SQL_ATTRIBUTES_BATCH_THREADS</td><td>3</td><td> batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td></tr>
<tr><td>sql.attributes.value_no_xss_validation</td><td>SQL_ATTRIBUTES_VALUE_NO_XSS_VALIDATION</td><td>false</td><td> If true attribute values will be checked for XSS vulnerability</td></tr>
<tr><td>sql.ts.batch_size</td><td>SQL_TS_BATCH_SIZE</td><td>10000</td><td> Batch size for persisting timeseries inserts</td></tr>
<tr><td>sql.ts.batch_max_delay</td><td>SQL_TS_BATCH_MAX_DELAY_MS</td><td>100</td><td> Max timeout for time-series entries queue polling. Value set in milliseconds</td></tr>
<tr><td>sql.ts.stats_print_interval_ms</td><td>SQL_TS_BATCH_STATS_PRINT_MS</td><td>10000</td><td> Interval in milliseconds for printing timeseries insert statistic</td></tr>
<tr><td>sql.ts.batch_threads</td><td>SQL_TS_BATCH_THREADS</td><td>3</td><td> batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td></tr>
<tr><td>sql.ts.value_no_xss_validation</td><td>SQL_TS_VALUE_NO_XSS_VALIDATION</td><td>false</td><td> If true telemetry values will be checked for XSS vulnerability</td></tr>
<tr><td>sql.ts_latest.batch_size</td><td>SQL_TS_LATEST_BATCH_SIZE</td><td>1000</td><td> Batch size for persisting latest telemetry updates</td></tr>
<tr><td>sql.ts_latest.batch_max_delay</td><td>SQL_TS_LATEST_BATCH_MAX_DELAY_MS</td><td>50</td><td> Maximum timeout for latest telemetry entries queue polling. The value set in milliseconds</td></tr>
<tr><td>sql.ts_latest.stats_print_interval_ms</td><td>SQL_TS_LATEST_BATCH_STATS_PRINT_MS</td><td>10000</td><td> Interval in milliseconds for printing latest telemetry updates statistic</td></tr>
<tr><td>sql.ts_latest.batch_threads</td><td>SQL_TS_LATEST_BATCH_THREADS</td><td>3</td><td> batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td></tr>
<tr><td>sql.ts_latest.update_by_latest_ts</td><td>SQL_TS_UPDATE_BY_LATEST_TIMESTAMP</td><td>true</td><td> Update latest values only if the timestamp of the new record is greater or equals than timestamp of the previously saved latest value. Latest values are stored separately from historical values for fast lookup from DB. Insert of historical value happens in any case</td></tr>
<tr><td>sql.events.batch_size</td><td>SQL_EVENTS_BATCH_SIZE</td><td>10000</td><td> Batch size for persisting latest telemetry updates</td></tr>
<tr><td>sql.events.batch_max_delay</td><td>SQL_EVENTS_BATCH_MAX_DELAY_MS</td><td>100</td><td> Max timeout for latest telemetry entries queue polling. The value set in milliseconds</td></tr>
<tr><td>sql.events.stats_print_interval_ms</td><td>SQL_EVENTS_BATCH_STATS_PRINT_MS</td><td>10000</td><td> Interval in milliseconds for printing latest telemetry updates statistic</td></tr>
<tr><td>sql.events.batch_threads</td><td>SQL_EVENTS_BATCH_THREADS</td><td>3</td><td> batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td></tr>
<tr><td>sql.events.partition_size</td><td>SQL_EVENTS_REGULAR_PARTITION_SIZE_HOURS</td><td>168</td><td> Number of hours to partition the events. The current value corresponds to one week.</td></tr>
<tr><td>sql.events.debug_partition_size</td><td>SQL_EVENTS_DEBUG_PARTITION_SIZE_HOURS</td><td>1</td><td> Number of hours to partition the debug events. The current value corresponds to one hour.</td></tr>
<tr><td>sql.edge_events.batch_size</td><td>SQL_EDGE_EVENTS_BATCH_SIZE</td><td>1000</td><td> Batch size for persisting latest telemetry updates</td></tr>
<tr><td>sql.edge_events.batch_max_delay</td><td>SQL_EDGE_EVENTS_BATCH_MAX_DELAY_MS</td><td>100</td><td> Max timeout for latest telemetry entries queue polling. The value set in milliseconds</td></tr>
<tr><td>sql.edge_events.stats_print_interval_ms</td><td>SQL_EDGE_EVENTS_BATCH_STATS_PRINT_MS</td><td>10000</td><td> Interval in milliseconds for printing latest telemetry updates statistic</td></tr>
<tr><td>sql.edge_events.partition_size</td><td>SQL_EDGE_EVENTS_PARTITION_SIZE_HOURS</td><td>168</td><td> Number of hours to partition the events. The current value corresponds to one week.</td></tr>
<tr><td>sql.audit_logs.partition_size</td><td>SQL_AUDIT_LOGS_PARTITION_SIZE_HOURS</td><td>168</td><td> Default value - 1 week</td></tr>
<tr><td>sql.alarm_comments.partition_size</td><td>SQL_ALARM_COMMENTS_PARTITION_SIZE_HOURS</td><td>168</td><td> Default value - 1 week</td></tr>
<tr><td>sql.blob_entities.partition_size</td><td>SQL_BLOB_ENTITIES_PARTITION_SIZE_HOURS</td><td>168</td><td> Default value - 1 week</td></tr>
<tr><td>sql.notifications.partition_size</td><td>SQL_NOTIFICATIONS_PARTITION_SIZE_HOURS</td><td>168</td><td> Default value - 1 week</td></tr>
<tr><td>sql.batch_sort</td><td>SQL_BATCH_SORT</td><td>true</td><td> Specify whether to sort entities before batch update. Should be enabled for cluster mode to avoid deadlocks</td></tr>
<tr><td>sql.remove_null_chars</td><td>SQL_REMOVE_NULL_CHARS</td><td>true</td><td>
 Specify whether to remove null characters from strValue of attributes and timeseries before insert</td></tr>
<tr><td>sql.log_queries</td><td>SQL_LOG_QUERIES</td><td>false</td><td>
 Specify whether to log database queries and their parameters generated by entity query repository</td></tr>
<tr><td>sql.log_queries_threshold</td><td>SQL_LOG_QUERIES_THRESHOLD</td><td>5000</td><td>
 Threshold of slow SQL queries to log. The value set in milliseconds</td></tr>
<tr><td>sql.log_tenant_stats</td><td>SQL_LOG_TENANT_STATS</td><td>true</td><td>
 Enable/Disable logging statistic information about tenants</td></tr>
<tr><td>sql.log_tenant_stats_interval_ms</td><td>SQL_LOG_TENANT_STATS_INTERVAL_MS</td><td>60000</td><td>
 Interval in milliseconds for printing latest statistic information about tenant</td></tr>
<tr><td>sql.postgres.ts_key_value_partitioning</td><td>SQL_POSTGRES_TS_KV_PARTITIONING</td><td>MONTHS</td><td> Specify partitioning size for timestamp key-value storage. Example: DAYS, MONTHS, YEARS, INDEFINITE.</td></tr>
<tr><td>sql.timescale.chunk_time_interval</td><td>SQL_TIMESCALE_CHUNK_TIME_INTERVAL</td><td>604800000</td><td> Specify Interval size for new data chunks storage.</td></tr>
<tr><td>sql.timescale.batch_threads</td><td>SQL_TIMESCALE_BATCH_THREADS</td><td>3</td><td> batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td></tr>
<tr><td>sql.ttl.ts.enabled</td><td>SQL_TTL_TS_ENABLED</td><td>true</td><td> The parameter to specify whether to use TTL (Time To Live) for timeseries records</td></tr>
<tr><td>sql.ttl.ts.execution_interval_ms</td><td>SQL_TTL_TS_EXECUTION_INTERVAL</td><td>86400000</td><td> Number of milliseconds. The current value corresponds to one day</td></tr>
<tr><td>sql.ttl.ts.ts_key_value_ttl</td><td>SQL_TTL_TS_TS_KEY_VALUE_TTL</td><td>0</td><td> Number of seconds</td></tr>
<tr><td>sql.ttl.events.enabled</td><td>SQL_TTL_EVENTS_ENABLED</td><td>true</td><td> The parameter to specify whether to use TTL (Time To Live) for event records</td></tr>
<tr><td>sql.ttl.events.execution_interval_ms</td><td>SQL_TTL_EVENTS_EXECUTION_INTERVAL</td><td>3600000</td><td> Number of milliseconds (max random initial delay and fixed period).</td></tr>
<tr><td>sql.ttl.events.events_ttl</td><td>SQL_TTL_EVENTS_EVENTS_TTL</td><td>0</td><td>
 Number of seconds. TTL is disabled by default. Accuracy of the cleanup depends on the sql.events.partition_size parameter.</td></tr>
<tr><td>sql.ttl.events.debug_events_ttl</td><td>SQL_TTL_EVENTS_DEBUG_EVENTS_TTL</td><td>604800</td><td>
 Number of seconds. The current value corresponds to one week. Accuracy of the cleanup depends on the sql.events.debug_partition_size parameter.</td></tr>
<tr><td>sql.ttl.edge_events.enabled</td><td>SQL_TTL_EDGE_EVENTS_ENABLED</td><td>true</td><td> The parameter to specify whether to use TTL (Time To Live) for egde event records</td></tr>
<tr><td>sql.ttl.edge_events.execution_interval_ms</td><td>SQL_TTL_EDGE_EVENTS_EXECUTION_INTERVAL</td><td>86400000</td><td> Number of milliseconds. The current value corresponds to one day</td></tr>
<tr><td>sql.ttl.edge_events.edge_events_ttl</td><td>SQL_TTL_EDGE_EVENTS_TTL</td><td>2628000</td><td> Number of seconds. The current value corresponds to one month</td></tr>
<tr><td>sql.ttl.alarms.checking_interval</td><td>SQL_ALARMS_TTL_CHECKING_INTERVAL</td><td>7200000</td><td> Number of milliseconds. The current value corresponds to two hours</td></tr>
<tr><td>sql.ttl.alarms.removal_batch_size</td><td>SQL_ALARMS_TTL_REMOVAL_BATCH_SIZE</td><td>3000</td><td> To delete outdated alarms not all at once but in batches</td></tr>
<tr><td>sql.ttl.rpc.enabled</td><td>SQL_TTL_RPC_ENABLED</td><td>true</td><td> The parameter to specify whether to use TTL (Time To Live) for rpc call records</td></tr>
<tr><td>sql.ttl.rpc.checking_interval</td><td>SQL_RPC_TTL_CHECKING_INTERVAL</td><td>7200000</td><td> Number of milliseconds. The current value corresponds to two hours</td></tr>
<tr><td>sql.ttl.audit_logs.enabled</td><td>SQL_TTL_AUDIT_LOGS_ENABLED</td><td>true</td><td> The parameter to specify whether to use TTL (Time To Live) for audit log records</td></tr>
<tr><td>sql.ttl.audit_logs.ttl</td><td>SQL_TTL_AUDIT_LOGS_SECS</td><td>0</td><td> Disabled by default. Accuracy of the cleanup depends on the sql.audit_logs.partition_size</td></tr>
<tr><td>sql.ttl.audit_logs.checking_interval_ms</td><td>SQL_TTL_AUDIT_LOGS_CHECKING_INTERVAL_MS</td><td>86400000</td><td> Default value - 1 day</td></tr>
<tr><td>sql.ttl.blob_entities.enabled</td><td>SQL_TTL_BLOB_ENTITIES_ENABLED</td><td>false</td><td> The parameter to specify whether to use TTL (Time To Live) for blob entities records</td></tr>
<tr><td>sql.ttl.blob_entities.ttl</td><td>SQL_TTL_BLOB_ENTITIES_SECS</td><td>0</td><td> Disabled by default.</td></tr>
<tr><td>sql.ttl.blob_entities.checking_interval_ms</td><td>SQL_TTL_BLOB_ENTITIES_CHECKING_INTERVAL_MS</td><td>86400000</td><td> Default value - 1 day</td></tr>
<tr><td>sql.ttl.notifications.enabled</td><td>SQL_TTL_NOTIFICATIONS_ENABLED</td><td>true</td><td> The parameter to specify whether to use TTL (Time To Live) for notification center records</td></tr>
<tr><td>sql.ttl.notifications.ttl</td><td>SQL_TTL_NOTIFICATIONS_SECS</td><td>2592000</td><td> Default value - 30 days</td></tr>
<tr><td>sql.ttl.notifications.checking_interval_ms</td><td>SQL_TTL_NOTIFICATIONS_CHECKING_INTERVAL_MS</td><td>86400000</td><td> Default value - 1 day</td></tr>
<tr><td>sql.relations.max_level</td><td>SQL_RELATIONS_MAX_LEVEL</td><td>50</td><td> This value has to be reasonable small to prevent infinite recursion as early as possible</td></tr>
<tr><td>sql.relations.pool_size</td><td>SQL_RELATIONS_POOL_SIZE</td><td>4</td><td> This value has to be reasonable small to prevent relation query blocking all other DB calls</td></tr>
<tr><td>sql.relations.query_timeout</td><td>SQL_RELATIONS_QUERY_TIMEOUT_SEC</td><td>20</td><td> This value has to be reasonable small to prevent relation query blocking all other DB calls</td></tr>
</tbody></table>


####  Actor system parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>actors.system.throughput</td><td>ACTORS_SYSTEM_THROUGHPUT</td><td>5</td><td> Number of messages the actor system will process per actor before switching to processing of messages for next actor</td></tr>
<tr><td>actors.system.scheduler_pool_size</td><td>ACTORS_SYSTEM_SCHEDULER_POOL_SIZE</td><td>1</td><td> Thread pool size for actor system scheduler</td></tr>
<tr><td>actors.system.max_actor_init_attempts</td><td>ACTORS_SYSTEM_MAX_ACTOR_INIT_ATTEMPTS</td><td>10</td><td> Maximum number of attempts to init the actor before disabling the actor</td></tr>
<tr><td>actors.system.app_dispatcher_pool_size</td><td>ACTORS_SYSTEM_APP_DISPATCHER_POOL_SIZE</td><td>1</td><td> Thread pool size for main actor system dispatcher</td></tr>
<tr><td>actors.system.tenant_dispatcher_pool_size</td><td>ACTORS_SYSTEM_TENANT_DISPATCHER_POOL_SIZE</td><td>2</td><td> Thread pool size for actor system dispatcher that process messages for tenant actors</td></tr>
<tr><td>actors.system.device_dispatcher_pool_size</td><td>ACTORS_SYSTEM_DEVICE_DISPATCHER_POOL_SIZE</td><td>4</td><td> Thread pool size for actor system dispatcher that process messages for device actors</td></tr>
<tr><td>actors.system.rule_dispatcher_pool_size</td><td>ACTORS_SYSTEM_RULE_DISPATCHER_POOL_SIZE</td><td>8</td><td> Thread pool size for actor system dispatcher that process messages for rule engine (chain/node) actors</td></tr>
<tr><td>actors.tenant.create_components_on_init</td><td>ACTORS_TENANT_CREATE_COMPONENTS_ON_INIT</td><td>true</td><td> Create components in initialization</td></tr>
<tr><td>actors.session.max_concurrent_sessions_per_device</td><td>ACTORS_MAX_CONCURRENT_SESSION_PER_DEVICE</td><td>1</td><td> Max number of concurrent sessions per device</td></tr>
<tr><td>actors.session.sync.timeout</td><td>ACTORS_SESSION_SYNC_TIMEOUT</td><td>10000</td><td> Default timeout for processing request using synchronous session (HTTP, CoAP) in milliseconds</td></tr>
<tr><td>actors.rule.db_callback_thread_pool_size</td><td>ACTORS_RULE_DB_CALLBACK_THREAD_POOL_SIZE</td><td>50</td><td> Specify thread pool size for database request callbacks executor service</td></tr>
<tr><td>actors.rule.mail_thread_pool_size</td><td>ACTORS_RULE_MAIL_THREAD_POOL_SIZE</td><td>40</td><td>
 Specify thread pool size for mail sender executor service</td></tr>
<tr><td>actors.rule.mail_password_reset_thread_pool_size</td><td>ACTORS_RULE_MAIL_PASSWORD_RESET_THREAD_POOL_SIZE</td><td>10</td><td>
 Specify thread pool size for password reset emails</td></tr>
<tr><td>actors.rule.sms_thread_pool_size</td><td>ACTORS_RULE_SMS_THREAD_POOL_SIZE</td><td>50</td><td>
 Specify thread pool size for sms sender executor service</td></tr>
<tr><td>actors.rule.allow_system_mail_service</td><td>ACTORS_RULE_ALLOW_SYSTEM_MAIL_SERVICE</td><td>true</td><td>
 Whether to allow usage of system mail service for rules</td></tr>
<tr><td>actors.rule.allow_system_sms_service</td><td>ACTORS_RULE_ALLOW_SYSTEM_SMS_SERVICE</td><td>true</td><td>
 Whether to allow usage of system sms service for rules</td></tr>
<tr><td>actors.rule.external_call_thread_pool_size</td><td>ACTORS_RULE_EXTERNAL_CALL_THREAD_POOL_SIZE</td><td>50</td><td>
 Specify thread pool size for external call service</td></tr>
<tr><td>actors.rule.chain.error_persist_frequency</td><td>ACTORS_RULE_CHAIN_ERROR_FREQUENCY</td><td>3000</td><td> Errors for particular actor are persisted once per specified amount of milliseconds</td></tr>
<tr><td>actors.rule.chain.debug_mode_rate_limits_per_tenant.enabled</td><td>ACTORS_RULE_CHAIN_DEBUG_MODE_RATE_LIMITS_PER_TENANT_ENABLED</td><td>true</td><td> Enable/Disable the rate limit of persisted debug events for all rule nodes per tenant</td></tr>
<tr><td>actors.rule.chain.debug_mode_rate_limits_per_tenant.configuration</td><td>ACTORS_RULE_CHAIN_DEBUG_MODE_RATE_LIMITS_PER_TENANT_CONFIGURATION</td><td>50000:3600</td><td>
 The value of DEBUG mode rate limit. By default, no more then 50 thousand events per hour</td></tr>
<tr><td>actors.rule.node.error_persist_frequency</td><td>ACTORS_RULE_NODE_ERROR_FREQUENCY</td><td>3000</td><td> Errors for particular actor are persisted once per specified amount of milliseconds</td></tr>
<tr><td>actors.rule.transaction.queue_size</td><td>ACTORS_RULE_TRANSACTION_QUEUE_SIZE</td><td>15000</td><td> Size of queues which store messages for transaction rule nodes</td></tr>
<tr><td>actors.rule.transaction.duration</td><td>ACTORS_RULE_TRANSACTION_DURATION</td><td>60000</td><td>
 Time in milliseconds for transaction to complete</td></tr>
<tr><td>actors.rule.external.force_ack</td><td>ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK</td><td>false</td><td> Force acknowledgement of the incoming message for external rule nodes to decrease processing latency.
 Enqueue the result of external node processing as a separate message to the rule engine.</td></tr>
<tr><td>actors.rpc.max_retries</td><td>ACTORS_RPC_MAX_RETRIES</td><td>5</td><td> Maximum number of persistent RPC call retries in case of failed requests delivery.</td></tr>
<tr><td>actors.rpc.submit_strategy</td><td>ACTORS_RPC_SUBMIT_STRATEGY_TYPE</td><td>BURST</td><td>
 RPC submit strategies. Allowed values: BURST, SEQUENTIAL_ON_ACK_FROM_DEVICE, SEQUENTIAL_ON_RESPONSE_FROM_DEVICE.</td></tr>
<tr><td>actors.rpc.response_timeout_ms</td><td>ACTORS_RPC_RESPONSE_TIMEOUT_MS</td><td>30000</td><td>
 Time in milliseconds for RPC to receive response after delivery. Used only for SEQUENTIAL_ON_RESPONSE_FROM_DEVICE submit strategy.</td></tr>
<tr><td>actors.statistics.enabled</td><td>ACTORS_STATISTICS_ENABLED</td><td>true</td><td> Enable/disable actor statistics</td></tr>
<tr><td>actors.statistics.js_print_interval_ms</td><td>ACTORS_JS_STATISTICS_PRINT_INTERVAL_MS</td><td>10000</td><td>
 Frequency of printing the JS executor statistics</td></tr>
<tr><td>actors.statistics.persist_frequency</td><td>ACTORS_STATISTICS_PERSIST_FREQUENCY</td><td>3600000</td><td>
 Actors statistic persistence frequency in milliseconds</td></tr>
</tbody></table>


####  Platform integrations parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>integrations.statistics.enabled</td><td>INTEGRATIONS_STATISTICS_ENABLED</td><td>true</td><td> Enable/disable integrations statistics</td></tr>
<tr><td>integrations.statistics.persist_frequency</td><td>INTEGRATIONS_STATISTICS_PERSIST_FREQUENCY</td><td>3600000</td><td>
 Integration statistic persistence frequency in milliseconds</td></tr>
<tr><td>integrations.reinit.enabled</td><td>INTEGRATIONS_REINIT_ENABLED</td><td>true</td><td> Enable/Disable integrations hot reinitialization</td></tr>
<tr><td>integrations.reinit.frequency</td><td>INTEGRATIONS_REINIT_FREQUENCY</td><td>300000</td><td>
 Checking interval for reinit integrations</td></tr>
<tr><td>integrations.rate_limits.enabled</td><td>TB_INTEGRATION_RATE_LIMITS_ENABLED</td><td>false</td><td> Enable/Disable integrations rate limits</td></tr>
<tr><td>integrations.rate_limits.tenant</td><td>TB_INTEGRATION_RATE_LIMITS_TENANT</td><td>1000:1,20000:60</td><td>
 The value of integrations rate limit. By default, no more than 1000 messages per second and no more 20000 messages per hour</td></tr>
<tr><td>integrations.rate_limits.device</td><td>TB_INTEGRATION_RATE_LIMITS_DEVICE</td><td>10:1,300:60</td><td>
 The value of integrations device rate limit. By default, no more than 10 messages per second and no more 300 messages per hour</td></tr>
<tr><td>integrations.allow_Local_network_hosts</td><td>INTEGRATIONS_ALLOW_LOCAL_NETWORK_HOSTS</td><td>true</td><td> Enable/Disable integrations local network hosts</td></tr>
<tr><td>integrations.rpc.enabled</td><td>INTEGRATIONS_RPC_ENABLED</td><td>true</td><td> Enable/Disable RPC call via integrations</td></tr>
<tr><td>integrations.rpc.port</td><td>INTEGRATIONS_RPC_PORT</td><td>9090</td><td>
 Integration bind port</td></tr>
<tr><td>integrations.rpc.ssl.enabled</td><td>INTEGRATIONS_RPC_SSL_ENABLED</td><td>false</td><td> Enable/disable SSL support</td></tr>
<tr><td>integrations.rpc.ssl.cert</td><td>INTEGRATIONS_RPC_SSL_CERT</td><td>certChainFile.pem</td><td>
 Integration SSL certificate name</td></tr>
<tr><td>integrations.rpc.ssl.privateKey</td><td>INTEGRATIONS_RPC_SSL_PRIVATE_KEY</td><td>privateKeyFile.pem</td><td>
 Integration SSL private key</td></tr>
<tr><td>integrations.rpc.client_max_keep_alive_time_sec</td><td>INTEGRATIONS_RPC_CLIENT_MAX_KEEP_ALIVE_TIME_SEC</td><td>300</td><td> Disconnect a client if no keepalive ping received in the specified time</td></tr>
</tbody></table>


####  Reports parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>reports.server.endpointUrl</td><td>REPORTS_SERVER_ENDPOINT_URL</td><td>http://localhost:8383</td><td> Report server endpoint</td></tr>
<tr><td>reports.server.maxResponseSize</td><td>MAX_RESPONSE_SIZE</td><td>52428800</td><td> 50MB</td></tr>
<tr><td>reports.rate_limits.enabled</td><td>REPORTS_TENANT_RATE_LIMITS_ENABLED</td><td>false</td><td> Enable/disable reports tenant rate limits</td></tr>
<tr><td>reports.rate_limits.configuration</td><td>REPORTS_TENANT_RATE_LIMITS_CONFIGURATION</td><td>5:300</td><td>
 The value of repors rate limits. By default, no more then 5 reports per 300 second</td></tr>
<tr><td>reports.scheduler.min_interval</td><td>REPORTS_SCHEDULER_MIN_INTERVAL_IN_SEC</td><td>60</td><td> minimum interval between subsequent scheduler events. Applicable for timer based events.</td></tr>
</tbody></table>


####  Cache parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>cache.type</td><td>CACHE_TYPE</td><td>caffeine</td><td> caffeine or redis</td></tr>
<tr><td>cache.maximumPoolSize</td><td>CACHE_MAXIMUM_POOL_SIZE</td><td>16</td><td> max pool size to process futures that calls the external cache</td></tr>
<tr><td>cache.attributes.enabled</td><td>CACHE_ATTRIBUTES_ENABLED</td><td>true</td><td> make sure that if cache.type is 'redis' and cache.attributes.enabled is 'true' that you change 'maxmemory-policy' Redis config property to 'allkeys-lru', 'allkeys-lfu' or 'allkeys-random'</td></tr>
<tr><td>cache.specs.relations.timeToLiveInMinutes</td><td>CACHE_SPECS_RELATIONS_TTL</td><td>1440</td><td> Relations cache max size</td></tr>
<tr><td>cache.specs.relations.maxSize</td><td>CACHE_SPECS_RELATIONS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.deviceCredentials.timeToLiveInMinutes</td><td>CACHE_SPECS_DEVICE_CREDENTIALS_TTL</td><td>1440</td><td> Device credentials cache TTL</td></tr>
<tr><td>cache.specs.deviceCredentials.maxSize</td><td>CACHE_SPECS_DEVICE_CREDENTIALS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.devices.timeToLiveInMinutes</td><td>CACHE_SPECS_DEVICES_TTL</td><td>1440</td><td> Device cache TTL</td></tr>
<tr><td>cache.specs.devices.maxSize</td><td>CACHE_SPECS_DEVICES_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.sessions.timeToLiveInMinutes</td><td>CACHE_SPECS_SESSIONS_TTL</td><td>1440</td><td> Sessions cache TTL</td></tr>
<tr><td>cache.specs.sessions.maxSize</td><td>CACHE_SPECS_SESSIONS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.assets.timeToLiveInMinutes</td><td>CACHE_SPECS_ASSETS_TTL</td><td>1440</td><td> Asset cache TTL</td></tr>
<tr><td>cache.specs.assets.maxSize</td><td>CACHE_SPECS_ASSETS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.entityViews.timeToLiveInMinutes</td><td>CACHE_SPECS_ENTITY_VIEWS_TTL</td><td>1440</td><td> Entity view cache TTL</td></tr>
<tr><td>cache.specs.entityViews.maxSize</td><td>CACHE_SPECS_ENTITY_VIEWS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.claimDevices.timeToLiveInMinutes</td><td>CACHE_SPECS_CLAIM_DEVICES_TTL</td><td>1440</td><td> Claim devices cache TTL</td></tr>
<tr><td>cache.specs.claimDevices.maxSize</td><td>CACHE_SPECS_CLAIM_DEVICES_MAX_SIZE</td><td>1000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.securitySettings.timeToLiveInMinutes</td><td>CACHE_SPECS_SECURITY_SETTINGS_TTL</td><td>1440</td><td> Security settings cache TTL</td></tr>
<tr><td>cache.specs.securitySettings.maxSize</td><td>CACHE_SPECS_SECURITY_SETTINGS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.tenantProfiles.timeToLiveInMinutes</td><td>CACHE_SPECS_TENANT_PROFILES_TTL</td><td>1440</td><td> Tenant profiles cache TTL</td></tr>
<tr><td>cache.specs.tenantProfiles.maxSize</td><td>CACHE_SPECS_TENANT_PROFILES_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.tenants.timeToLiveInMinutes</td><td>CACHE_SPECS_TENANTS_TTL</td><td>1440</td><td> Tenant cache TTL</td></tr>
<tr><td>cache.specs.tenants.maxSize</td><td>CACHE_SPECS_TENANTS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.tenantsExist.timeToLiveInMinutes</td><td>CACHE_SPECS_TENANTS_TTL</td><td>1440</td><td> environment variables are intentionally the same as in 'tenants' cache to be equal.</td></tr>
<tr><td>cache.specs.tenantsExist.maxSize</td><td>CACHE_SPECS_TENANTS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.deviceProfiles.timeToLiveInMinutes</td><td>CACHE_SPECS_DEVICE_PROFILES_TTL</td><td>1440</td><td> Device profile cache TTL</td></tr>
<tr><td>cache.specs.deviceProfiles.maxSize</td><td>CACHE_SPECS_DEVICE_PROFILES_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.assetProfiles.timeToLiveInMinutes</td><td>CACHE_SPECS_ASSET_PROFILES_TTL</td><td>1440</td><td> Asset profile cache TTL</td></tr>
<tr><td>cache.specs.assetProfiles.maxSize</td><td>CACHE_SPECS_ASSET_PROFILES_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.notificationSettings.timeToLiveInMinutes</td><td>CACHE_SPECS_NOTIFICATION_SETTINGS_TTL</td><td>10</td><td> Noification settings cache TTL</td></tr>
<tr><td>cache.specs.notificationSettings.maxSize</td><td>CACHE_SPECS_NOTIFICATION_SETTINGS_MAX_SIZE</td><td>1000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.sentNotifications.timeToLiveInMinutes</td><td>CACHE_SPECS_SENT_NOTIFICATIONS_TTL</td><td>1440</td><td> Sent notifications cache TTL</td></tr>
<tr><td>cache.specs.sentNotifications.maxSize</td><td>CACHE_SPECS_SENT_NOTIFICATIONS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.attributes.timeToLiveInMinutes</td><td>CACHE_SPECS_ATTRIBUTES_TTL</td><td>1440</td><td> Attributes cache TTL</td></tr>
<tr><td>cache.specs.attributes.maxSize</td><td>CACHE_SPECS_ATTRIBUTES_MAX_SIZE</td><td>100000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.userSessionsInvalidation.timeToLiveInMinutes</td><td></td><td>"0"</td><td> The value of this TTL is ignored and replaced by JWT refresh token expiration time</td></tr>
<tr><td>cache.specs.userSessionsInvalidation.maxSize</td><td>CACHE_SPECS_USERS_UPDATE_TIME_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.otaPackages.timeToLiveInMinutes</td><td>CACHE_SPECS_OTA_PACKAGES_TTL</td><td>60</td><td> Ota packages cache TTL</td></tr>
<tr><td>cache.specs.otaPackages.maxSize</td><td>CACHE_SPECS_OTA_PACKAGES_MAX_SIZE</td><td>10</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.otaPackagesData.timeToLiveInMinutes</td><td>CACHE_SPECS_OTA_PACKAGES_DATA_TTL</td><td>60</td><td> Ota packages data cache TTL</td></tr>
<tr><td>cache.specs.otaPackagesData.maxSize</td><td>CACHE_SPECS_OTA_PACKAGES_DATA_MAX_SIZE</td><td>10</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.edges.timeToLiveInMinutes</td><td>CACHE_SPECS_EDGES_TTL</td><td>1440</td><td> Edges cache TTL</td></tr>
<tr><td>cache.specs.edges.maxSize</td><td>CACHE_SPECS_EDGES_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.repositorySettings.timeToLiveInMinutes</td><td>CACHE_SPECS_REPOSITORY_SETTINGS_TTL</td><td>1440</td><td> Repository settings cache TTL</td></tr>
<tr><td>cache.specs.repositorySettings.maxSize</td><td>CACHE_SPECS_REPOSITORY_SETTINGS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.autoCommitSettings.timeToLiveInMinutes</td><td>CACHE_SPECS_AUTO_COMMIT_SETTINGS_TTL</td><td>1440</td><td> Autocommit settings cache TTL</td></tr>
<tr><td>cache.specs.autoCommitSettings.maxSize</td><td>CACHE_SPECS_AUTO_COMMIT_SETTINGS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.twoFaVerificationCodes.timeToLiveInMinutes</td><td>CACHE_SPECS_TWO_FA_VERIFICATION_CODES_TTL</td><td>60</td><td> Two fa carification codes cache TTL</td></tr>
<tr><td>cache.specs.twoFaVerificationCodes.maxSize</td><td>CACHE_SPECS_TWO_FA_VERIFICATION_CODES_MAX_SIZE</td><td>100000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.versionControlTask.timeToLiveInMinutes</td><td>CACHE_SPECS_VERSION_CONTROL_TASK_TTL</td><td>20</td><td> Version control task cache TTL</td></tr>
<tr><td>cache.specs.versionControlTask.maxSize</td><td>CACHE_SPECS_VERSION_CONTROL_TASK_MAX_SIZE</td><td>100000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.userSettings.timeToLiveInMinutes</td><td>CACHE_SPECS_USER_SETTINGS_TTL</td><td>1440</td><td> User settings cache TTL</td></tr>
<tr><td>cache.specs.userSettings.maxSize</td><td>CACHE_SPECS_USER_SETTINGS_MAX_SIZE</td><td>100000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.dashboardTitles.timeToLiveInMinutes</td><td>CACHE_SPECS_DASHBOARD_TITLES_TTL</td><td>1440</td><td> Dashboard titles cache TTL</td></tr>
<tr><td>cache.specs.dashboardTitles.maxSize</td><td>CACHE_SPECS_DASHBOARD_TITLES_MAX_SIZE</td><td>100000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.entityCount.timeToLiveInMinutes</td><td>CACHE_SPECS_ENTITY_COUNT_TTL</td><td>1440</td><td> Entity count cache TTL</td></tr>
<tr><td>cache.specs.entityCount.maxSize</td><td>CACHE_SPECS_ENTITY_COUNT_MAX_SIZE</td><td>100000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.resourceInfo.timeToLiveInMinutes</td><td>CACHE_SPECS_RESOURCE_INFO_TTL</td><td>1440</td><td> Resource info cache TTL</td></tr>
<tr><td>cache.specs.resourceInfo.maxSize</td><td>CACHE_SPECS_RESOURCE_INFO_MAX_SIZE</td><td>100000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.alarmTypes.timeToLiveInMinutes</td><td>CACHE_SPECS_ALARM_TYPES_TTL</td><td>60</td><td> Alarm types cache TTL</td></tr>
<tr><td>cache.specs.alarmTypes.maxSize</td><td>CACHE_SPECS_ALARM_TYPES_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.downlink.timeToLiveInMinutes</td><td>CACHE_SPECS_DOWNLINK_TTL</td><td>1440</td><td> Downlink converter cache specs TTL</td></tr>
<tr><td>cache.specs.downlink.maxSize</td><td>CACHE_SPECS_DOWNLINK_MAX_SIZE</td><td>100000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.roles.timeToLiveInMinutes</td><td>CACHE_SPECS_ROLES_TTL</td><td>1440</td><td> roles cache TTL</td></tr>
<tr><td>cache.specs.roles.maxSize</td><td>CACHE_SPECS_ROLES_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.permissions.timeToLiveInMinutes</td><td>CACHE_SPECS_PERMISSIONS_TTL</td><td>1440</td><td> permissions cache TTL</td></tr>
<tr><td>cache.specs.permissions.maxSize</td><td>CACHE_SPECS_PERMISSIONS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.owners.timeToLiveInMinutes</td><td>CACHE_SPECS_OWNERS_TTL</td><td>1440</td><td> owners cache TTL</td></tr>
<tr><td>cache.specs.owners.maxSize</td><td>CACHE_SPECS_OWNERS_MAX_SIZE</td><td>100000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.remoteIntegrations.timeToLiveInMinutes</td><td>CACHE_SPECS_REMOTE_INTEGRATIONS_TTL</td><td>1440</td><td> remote integrations cache specs TTL</td></tr>
<tr><td>cache.specs.remoteIntegrations.maxSize</td><td>CACHE_SPECS_REMOTE_INTEGRATIONS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.integrations.timeToLiveInMinutes</td><td>CACHE_SPECS_INTEGRATIONS_TTL</td><td>1440</td><td> integrations cache specs TTL</td></tr>
<tr><td>cache.specs.integrations.maxSize</td><td>CACHE_SPECS_INTEGRATIONS_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.specs.whiteLabeling.timeToLiveInMinutes</td><td>CACHE_SPECS_WHITE_LABELING_TTL</td><td>1440</td><td> White labeling cache TTL</td></tr>
<tr><td>cache.specs.whiteLabeling.maxSize</td><td>CACHE_SPECS_WHITE_LABELING_MAX_SIZE</td><td>10000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.notificationRules.timeToLiveInMinutes</td><td>CACHE_SPECS_NOTIFICATION_RULES_TTL</td><td>30</td><td> notification rules cache TTL</td></tr>
<tr><td>cache.notificationRules.maxSize</td><td>CACHE_SPECS_NOTIFICATION_RULES_MAX_SIZE</td><td>1000</td><td> 0 means the cache is disabled</td></tr>
<tr><td>cache.rateLimits.timeToLiveInMinutes</td><td>CACHE_SPECS_RATE_LIMITS_TTL</td><td>120</td><td> Rate limits cache TTL</td></tr>
<tr><td>cache.rateLimits.maxSize</td><td>CACHE_SPECS_RATE_LIMITS_MAX_SIZE</td><td>200000</td><td> 0 means the cache is disabled</td></tr>
</tbody></table>


####  Spring data properties
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>spring.data.redis.repositories.enabled</td><td></td><td>false </td><td> Disable this because it is not required.</td></tr>
</tbody></table>


####  Redis configuration properties
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>redis.connection.type</td><td>REDIS_CONNECTION_TYPE</td><td>standalone</td><td> Redis deployment type: Standalone (single Redis node deployment) OR Cluster</td></tr>
<tr><td>redis.standalone.host</td><td>REDIS_HOST</td><td>localhost</td><td> Redis connection host</td></tr>
<tr><td>redis.standalone.port</td><td>REDIS_PORT</td><td>6379</td><td>
 Redis connection port</td></tr>
<tr><td>redis.standalone.useDefaultClientConfig</td><td>REDIS_USE_DEFAULT_CLIENT_CONFIG</td><td>true</td><td>
 Use default Redis configuration file</td></tr>
<tr><td>redis.standalone.clientName</td><td>REDIS_CLIENT_NAME</td><td>standalone</td><td>
 this value may be used only if you used not default ClientConfig</td></tr>
<tr><td>redis.standalone.connectTimeout</td><td>REDIS_CLIENT_CONNECT_TIMEOUT</td><td>30000</td><td>
 this value may be used only if you used not default ClientConfig</td></tr>
<tr><td>redis.standalone.readTimeout</td><td>REDIS_CLIENT_READ_TIMEOUT</td><td>60000</td><td>
 this value may be used only if you used not default ClientConfig</td></tr>
<tr><td>redis.standalone.usePoolConfig</td><td>REDIS_CLIENT_USE_POOL_CONFIG</td><td>false</td><td>
 this value may be used only if you used not default ClientConfig</td></tr>
<tr><td>redis.cluster.nodes</td><td>REDIS_NODES</td><td></td><td> Comma-separated list of "host:port" pairs to bootstrap from.</td></tr>
<tr><td>redis.cluster.max-redirects</td><td>REDIS_MAX_REDIRECTS</td><td>12</td><td>
 Maximum number of redirects to follow when executing commands across the cluster.</td></tr>
<tr><td>redis.cluster.useDefaultPoolConfig</td><td>REDIS_USE_DEFAULT_POOL_CONFIG</td><td>true</td><td>
 if set false will be used pool config build from values of the pool config section</td></tr>
<tr><td>redis.sentinel.master</td><td>REDIS_MASTER</td><td></td><td> name of master node</td></tr>
<tr><td>redis.sentinel.sentinels</td><td>REDIS_SENTINELS</td><td></td><td>
 comma-separated list of "host:port" pairs of sentinels</td></tr>
<tr><td>redis.sentinel.password</td><td>REDIS_SENTINEL_PASSWORD</td><td></td><td>
 password to authenticate with sentinel</td></tr>
<tr><td>redis.sentinel.useDefaultPoolConfig</td><td>REDIS_USE_DEFAULT_POOL_CONFIG</td><td>true</td><td>
 if set false will be used pool config build from values of the pool config section</td></tr>
<tr><td>redis.db</td><td>REDIS_DB</td><td>0</td><td> db index</td></tr>
<tr><td>redis.password</td><td>REDIS_PASSWORD</td><td></td><td>
 db password</td></tr>
<tr><td>redis.pool_config.maxTotal</td><td>REDIS_POOL_CONFIG_MAX_TOTAL</td><td>128</td><td> Maximum number of connections that can be allocated by the connection pool</td></tr>
<tr><td>redis.pool_config.maxIdle</td><td>REDIS_POOL_CONFIG_MAX_IDLE</td><td>128</td><td>
 Maximum number of idle connections that can be maintained in the pool without being closed</td></tr>
<tr><td>redis.pool_config.minIdle</td><td>REDIS_POOL_CONFIG_MIN_IDLE</td><td>16</td><td>
 Minumum number of idle connections that can be maintained in the pool without being closed</td></tr>
<tr><td>redis.pool_config.testOnBorrow</td><td>REDIS_POOL_CONFIG_TEST_ON_BORROW</td><td>true</td><td>
 Enable/Disable PING command send when a connection is borrowed</td></tr>
<tr><td>redis.pool_config.testOnReturn</td><td>REDIS_POOL_CONFIG_TEST_ON_RETURN</td><td>true</td><td>
 The property is used to specify whether to test the connection before returning it to the connection pool.</td></tr>
<tr><td>redis.pool_config.testWhileIdle</td><td>REDIS_POOL_CONFIG_TEST_WHILE_IDLE</td><td>true</td><td>
 The property is used in the context of connection pooling in Redis</td></tr>
<tr><td>redis.pool_config.minEvictableMs</td><td>REDIS_POOL_CONFIG_MIN_EVICTABLE_MS</td><td>60000</td><td>
 Minimum amount of time that an idle connection should be idle before it can be evicted from the connection pool. Value set in milliseconds</td></tr>
<tr><td>redis.pool_config.evictionRunsMs</td><td>REDIS_POOL_CONFIG_EVICTION_RUNS_MS</td><td>30000</td><td>
 Specifies the time interval in milliseconds between two consecutive eviction runs</td></tr>
<tr><td>redis.pool_config.maxWaitMills</td><td>REDIS_POOL_CONFIG_MAX_WAIT_MS</td><td>60000</td><td>
 Maximum time in milliseconds where a client is willing to wait for a connection from the pool when all connections are exhausted</td></tr>
<tr><td>redis.pool_config.numberTestsPerEvictionRun</td><td>REDIS_POOL_CONFIG_NUMBER_TESTS_PER_EVICTION_RUN</td><td>3</td><td>
 Specifies the number of connections to test for eviction during each eviction run</td></tr>
<tr><td>redis.pool_config.blockWhenExhausted</td><td>REDIS_POOL_CONFIG_BLOCK_WHEN_EXHAUSTED</td><td>true</td><td>
 Determines the behavior when a thread requests a connection from the pool but there are no available connections and the pool cannot create more due to the maxTotal configuration</td></tr>
<tr><td>redis.evictTtlInMs</td><td>REDIS_EVICT_TTL_MS</td><td>60000</td><td> TTL for short-living SET commands that are used to replace DEL in order to enable transaction support</td></tr>
</tbody></table>


####  Update version properties
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>updates.enabled</td><td>UPDATES_ENABLED</td><td>true</td><td> Enable/disable checks for new version</td></tr>
</tbody></table>


####  Spring CORS configuration
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>spring.mvc.cors.mappings."[/api/**]".allowed-origin-patterns</td><td></td><td>"*"</td><td>Comma-separated list of origins to allow. '*' allows all origins. When not set,CORS support is disabled.</td></tr>
<tr><td>spring.mvc.cors.mappings."[/api/**]".allowed-methods</td><td></td><td>"*"</td><td>
Comma-separated list of methods to allow. '*' allows all methods.</td></tr>
<tr><td>spring.mvc.cors.mappings."[/api/**]".allowed-headers</td><td></td><td>"*"</td><td>
Comma-separated list of headers to allow in a request. '*' allows all headers.</td></tr>
<tr><td>spring.mvc.cors.mappings."[/api/**]".max-age</td><td></td><td>"1800"</td><td>
How long, in seconds, the response from a pre-flight request can be cached by clients.</td></tr>
<tr><td>spring.mvc.cors.mappings."[/api/**]".allow-credentials</td><td></td><td>"true"</td><td>
Set whether credentials are supported. When not set, credentials are not supported.</td></tr>
</tbody></table>


####  General spring properties
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>spring.main.allow-circular-references</td><td></td><td>"true" </td><td> Spring Boot configuration property that controls whether circular dependencies between beans are allowed or not.</td></tr>
<tr><td>spring.freemarker.checkTemplateLocation</td><td></td><td>"false" </td><td> spring freemarker configuration</td></tr>
<tr><td>spring.mvc.async.request-timeout</td><td>SPRING_MVC_ASYNC_REQUEST_TIMEOUT</td><td>30000</td><td> The default timeout for asynchronous requests in milliseconds</td></tr>
<tr><td>spring.mvc.pathmatch.matching-strategy</td><td></td><td>"ANT_PATH_MATCHER" </td><td> For endpoints matching in Swagger</td></tr>
<tr><td>spring.resources.chain.compressed</td><td></td><td>"true" </td><td> This property enables or disables support for serving pre-compressed resources (for example, a .gzip or .br file)</td></tr>
<tr><td>spring.resources.chain.strategy.content.enabled</td><td></td><td>"true" </td><td> This property enables or disables the content Version Strategy. This strategy allows Spring to generate a unique version for static resources, which is based on the content of the resource</td></tr>
<tr><td>spring.servlet.multipart.max-file-size</td><td></td><td>"50MB" </td><td> Total file size cannot exceed 50MB when configuring file uploads</td></tr>
<tr><td>spring.servlet.multipart.max-request-size</td><td></td><td>"50MB" </td><td> Total request size for a multipart/form-data cannot exceed 50MB</td></tr>
<tr><td>spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation</td><td></td><td>"true" </td><td>Fix Postgres JPA Error (Method org.postgresql.jdbc.PgConnection.createClob() is not yet implemented)</td></tr>
<tr><td>spring.jpa.properties.hibernate.order_by.default_null_ordering</td><td>SPRING_JPA_PROPERTIES_HIBERNATE_ORDER_BY_DEFAULT_NULL_ORDERING</td><td>last</td><td> Note: as for current Spring JPA version, custom NullHandling for the Sort.Order is ignored and this parameter is used</td></tr>
</tbody></table>


####  SQL DAO Configuration
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>spring.data.jpa.repositories.enabled</td><td></td><td>"true" </td><td> Enable/Disable the Spring Data JPA repositories support</td></tr>
<tr><td>spring.jpa.properties.javax.persistence.query.timeout</td><td>JAVAX_PERSISTENCE_QUERY_TIMEOUT</td><td>30000</td><td> General timeout for JDBC queries</td></tr>
<tr><td>spring.jpa.open-in-view</td><td></td><td>"false" </td><td> Enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning</td></tr>
<tr><td>spring.jpa.hibernate.ddl-auto</td><td></td><td>"none"</td><td> You can set a Hibernate feature that controls the DDL behavior in a more fine-grained way. The standard Hibernate property values are none, validate, update, create-drop. Spring Boot chooses a default value for you based on whether it thinks your database is embedded (default create-drop) or not (default none)</td></tr>
<tr><td>spring.datasource.driverClassName</td><td>SPRING_DRIVER_CLASS_NAME</td><td>org.postgresql.Driver</td><td> Database driver for Spring JPA - org.postgresql.Driver</td></tr>
<tr><td>spring.datasource.url</td><td>SPRING_DATASOURCE_URL</td><td>jdbc:postgresql://localhost:5432/thingsboard</td><td>
 Database connection URL</td></tr>
<tr><td>spring.datasource.username</td><td>SPRING_DATASOURCE_USERNAME</td><td>postgres</td><td>
 Database user name</td></tr>
<tr><td>spring.datasource.password</td><td>SPRING_DATASOURCE_PASSWORD</td><td>postgres</td><td>
 Database user password</td></tr>
<tr><td>spring.datasource.hikari.leakDetectionThreshold</td><td>SPRING_DATASOURCE_HIKARI_LEAK_DETECTION_THRESHOLD</td><td>0</td><td> This property controls the amount of time that a connection can be out of the pool before a message is logged indicating a possible connection leak. A value of 0 means leak detection is disabled</td></tr>
<tr><td>spring.datasource.hikari.maximumPoolSize</td><td>SPRING_DATASOURCE_MAXIMUM_POOL_SIZE</td><td>16</td><td>
 This property allows the number of connections in the pool to increase as demand increases. At the same time, the property ensures that the pool doesn't grow to the point of exhausting a system's resources, which ultimately affects an application's performance and availability</td></tr>
<tr><td>spring.datasource.hikari.registerMbeans</td><td>SPRING_DATASOURCE_HIKARI_REGISTER_MBEANS</td><td>false</td><td> true - enable MBean to diagnose pools state via JMX</td></tr>
</tbody></table>


####  Audit log parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>audit-log.enabled</td><td>AUDIT_LOG_ENABLED</td><td>true</td><td> Enable/disable audit log functionality.</td></tr>
<tr><td>audit-log.logging-level.mask."device"</td><td>AUDIT_LOG_MASK_DEVICE</td><td>W</td><td> Device logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."asset"</td><td>AUDIT_LOG_MASK_ASSET</td><td>W</td><td> Asset logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."dashboard"</td><td>AUDIT_LOG_MASK_DASHBOARD</td><td>W</td><td> Dashboard logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."widget_type"</td><td>AUDIT_LOG_MASK_WIDGET_TYPE</td><td>W</td><td> Widget type logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."widgets_bundle"</td><td>AUDIT_LOG_MASK_WIDGETS_BUNDLE</td><td>W</td><td> Widget bundles logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."customer"</td><td>AUDIT_LOG_MASK_CUSTOMER</td><td>W</td><td> Customer logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."user"</td><td>AUDIT_LOG_MASK_USER</td><td>W</td><td> User logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."rule_chain"</td><td>AUDIT_LOG_MASK_RULE_CHAIN</td><td>W</td><td> Rule chain logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."alarm"</td><td>AUDIT_LOG_MASK_ALARM</td><td>W</td><td> Alarm logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."integration"</td><td>AUDIT_LOG_MASK_INTEGRATION</td><td>W</td><td> Integration logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operations)</td></tr>
<tr><td>audit-log.logging-level.mask."converter"</td><td>AUDIT_LOG_MASK_CONVERTER</td><td>W</td><td> Converter logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operations)</td></tr>
<tr><td>audit-log.logging-level.mask."entity_group"</td><td>AUDIT_LOG_MASK_ENTITY_GROUP</td><td>W</td><td> Entity Group logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operations)</td></tr>
<tr><td>audit-log.logging-level.mask."scheduler_event"</td><td>AUDIT_LOG_MASK_SCHEDULER_EVENT</td><td>W</td><td> Scheduler Event logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operations)</td></tr>
<tr><td>audit-log.logging-level.mask."blob_entity"</td><td>AUDIT_LOG_MASK_BLOB_ENTITY</td><td>W</td><td> Blob entity logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operations)</td></tr>
<tr><td>audit-log.logging-level.mask."entity_view"</td><td>AUDIT_LOG_MASK_ENTITY_VIEW</td><td>W</td><td> Entity view logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."device_profile"</td><td>AUDIT_LOG_MASK_DEVICE_PROFILE</td><td>W</td><td> Device profile logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."asset_profile"</td><td>AUDIT_LOG_MASK_ASSET_PROFILE</td><td>W</td><td> Asset profile logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."edge"</td><td>AUDIT_LOG_MASK_EDGE</td><td>W</td><td> Edge logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."tb_resource"</td><td>AUDIT_LOG_MASK_RESOURCE</td><td>W</td><td> TB resource logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."ota_package"</td><td>AUDIT_LOG_MASK_OTA_PACKAGE</td><td>W</td><td> Ota package logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operation</td></tr>
<tr><td>audit-log.logging-level.mask."role"</td><td>AUDIT_LOG_MASK_ROLE</td><td>W</td><td> Roles logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operations)</td></tr>
<tr><td>audit-log.logging-level.mask."group_permission"</td><td>AUDIT_LOG_MASK_GROUP_PERMISSION</td><td>W</td><td> Group permission logging levels. Allowed values: OFF (disable), W (log write operations), RW (log read and write operations)</td></tr>
<tr><td>audit-log.sink.type</td><td>AUDIT_LOG_SINK_TYPE</td><td>none</td><td> Type of external sink. possible options: none, elasticsearch</td></tr>
<tr><td>audit-log.sink.index_pattern</td><td>AUDIT_LOG_SINK_INDEX_PATTERN</td><td>@{TENANT}_AUDIT_LOG_@{DATE}</td><td>
 Name of the index where audit logs stored
 Index name could contain next placeholders (not mandatory):
 @{TENANT} - substituted by tenant ID
 @{DATE} - substituted by current date in format provided in audit_log.sink.date_format</td></tr>
<tr><td>audit-log.sink.date_format</td><td>AUDIT_LOG_SINK_DATE_FORMAT</td><td>YYYY.MM.dd</td><td>
 Date format. Details of the pattern could be found here:
 https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html</td></tr>
<tr><td>audit-log.sink.scheme_name</td><td>AUDIT_LOG_SINK_SCHEME_NAME</td><td>http</td><td> http or https</td></tr>
<tr><td>audit-log.sink.host</td><td>AUDIT_LOG_SINK_HOST</td><td>localhost</td><td> Host of external sink system</td></tr>
<tr><td>audit-log.sink.port</td><td>AUDIT_LOG_SINK_PORT</td><td>9200</td><td> Port of external sink system</td></tr>
<tr><td>audit-log.sink.user_name</td><td>AUDIT_LOG_SINK_USER_NAME</td><td></td><td> Username used to access external sink system</td></tr>
<tr><td>audit-log.sink.password</td><td>AUDIT_LOG_SINK_PASSWORD</td><td></td><td> Password used to access external sink system</td></tr>
</tbody></table>


####  State properties
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>state.defaultInactivityTimeoutInSec</td><td>DEFAULT_INACTIVITY_TIMEOUT</td><td>600</td><td> Should be greater than transport.sessions.report_timeout</td></tr>
<tr><td>state.defaultStateCheckIntervalInSec</td><td>DEFAULT_STATE_CHECK_INTERVAL</td><td>60</td><td> Interval for checking the device state after a specified period of time. Time in seconds</td></tr>
<tr><td>state.persistToTelemetry</td><td>PERSIST_STATE_TO_TELEMETRY</td><td>false</td><td>
 Controls whether we store device 'active' flag in attributes (default) or telemetry.
 If you device to change this parameter, you should re-create the device info view as one of the following:
 If 'persistToTelemetry' is changed from 'false' to 'true': 'CREATE OR REPLACE VIEW device_info_view AS SELECT * FROM device_info_active_ts_view;'
 If 'persistToTelemetry' is changed from 'true' to 'false': 'CREATE OR REPLACE VIEW device_info_view AS SELECT * FROM device_info_active_attribute_view;'</td></tr>
</tbody></table>


####  Tbel properties
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>tbel.enabled</td><td>TBEL_ENABLED</td><td>true</td><td> Enable/Disable TBEL feature.</td></tr>
<tr><td>tbel.max_total_args_size</td><td>TBEL_MAX_TOTAL_ARGS_SIZE</td><td>100000</td><td>
 Limit on the number of arguments that are passed to the function to execute the script</td></tr>
<tr><td>tbel.max_result_size</td><td>TBEL_MAX_RESULT_SIZE</td><td>300000</td><td>
 Maximum allowed symbols in a result after processing a script</td></tr>
<tr><td>tbel.max_script_body_size</td><td>TBEL_MAX_SCRIPT_BODY_SIZE</td><td>50000</td><td>
 Maximum allowed symbols in script body</td></tr>
<tr><td>tbel.max_memory_limit_mb</td><td>TBEL_MAX_MEMORY_LIMIT_MB</td><td> 8</td><td>
 Maximum allowed TBEL script execution memory</td></tr>
<tr><td>tbel.max_errors</td><td>TBEL_MAX_ERRORS</td><td>3</td><td>
 Maximum allowed TBEL script execution errors before it will be blacklisted</td></tr>
<tr><td>tbel.max_requests_timeout</td><td>TBEL_MAX_REQUEST_TIMEOUT</td><td>500</td><td>
 TBEL Eval max request timeout in milliseconds. 0 - no timeout</td></tr>
<tr><td>tbel.max_black_list_duration_sec</td><td>TBEL_MAX_BLACKLIST_DURATION_SEC</td><td>60</td><td>
 Maximum time in seconds for black listed function to stay in the list.</td></tr>
<tr><td>tbel.thread_pool_size</td><td>TBEL_THREAD_POOL_SIZE</td><td>50</td><td>
 Specify thread pool size for javascript executor service</td></tr>
<tr><td>tbel.compiled_scripts_cache_size</td><td>TBEL_COMPILED_SCRIPTS_CACHE_SIZE</td><td>1000</td><td>
 Maximum cache size of TBEL compiled scripts</td></tr>
<tr><td>tbel.stats.enabled</td><td>TB_TBEL_STATS_ENABLED</td><td>false</td><td> Enable/Disable stats collection for TBEL engine</td></tr>
<tr><td>tbel.stats.print_interval_ms</td><td>TB_TBEL_STATS_PRINT_INTERVAL_MS</td><td>10000</td><td>
 Interval of logging for TBEL stats</td></tr>
</tbody></table>


####  JS properties
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>js.evaluator</td><td>JS_EVALUATOR</td><td>local</td><td> local/remote</td></tr>
<tr><td>js.max_total_args_size</td><td>JS_MAX_TOTAL_ARGS_SIZE</td><td>150000</td><td>
 Limit on the number of arguments that are passed to the function to execute the script</td></tr>
<tr><td>js.max_result_size</td><td>JS_MAX_RESULT_SIZE</td><td>300000</td><td>
 Maximum allowed symbols in a result after processing a script</td></tr>
<tr><td>js.max_script_body_size</td><td>JS_MAX_SCRIPT_BODY_SIZE</td><td>50000</td><td>
 Maximum allowed symbols in script body</td></tr>
<tr><td>js.local.js_thread_pool_size</td><td>LOCAL_JS_THREAD_POOL_SIZE</td><td>50</td><td> Specify thread pool size for javascript executor service</td></tr>
<tr><td>js.local.use_js_sandbox</td><td>USE_LOCAL_JS_SANDBOX</td><td>true</td><td>
 Use Sandboxed (secured) JVM JavaScript environment</td></tr>
<tr><td>js.local.monitor_thread_pool_size</td><td>LOCAL_JS_SANDBOX_MONITOR_THREAD_POOL_SIZE</td><td>4</td><td>
 Specify thread pool size for JavaScript sandbox resource monitor</td></tr>
<tr><td>js.local.max_cpu_time</td><td>LOCAL_JS_SANDBOX_MAX_CPU_TIME</td><td>8000</td><td>
 Maximum CPU time in milliseconds allowed for script execution</td></tr>
<tr><td>js.local.max_errors</td><td>LOCAL_JS_SANDBOX_MAX_ERRORS</td><td>3</td><td>
 Maximum allowed JavaScript execution errors before JavaScript will be blacklisted</td></tr>
<tr><td>js.local.max_requests_timeout</td><td>LOCAL_JS_MAX_REQUEST_TIMEOUT</td><td>0</td><td>
 JS Eval max request timeout. 0 - no timeout</td></tr>
<tr><td>js.local.max_black_list_duration_sec</td><td>LOCAL_JS_SANDBOX_MAX_BLACKLIST_DURATION_SEC</td><td>60</td><td>
 Maximum time in seconds for black listed function to stay in the list.</td></tr>
<tr><td>js.local.stats.enabled</td><td>TB_JS_LOCAL_STATS_ENABLED</td><td>false</td><td> Enable/Disable stats collection for local JS executor</td></tr>
<tr><td>js.local.stats.print_interval_ms</td><td>TB_JS_LOCAL_STATS_PRINT_INTERVAL_MS</td><td>10000</td><td>
 Interval of logging for local JS executor stats</td></tr>
<tr><td>js.remote.js_thread_pool_size</td><td>REMOTE_JS_THREAD_POOL_SIZE</td><td>50</td><td> Specify thread pool size for javascript executor service</td></tr>
<tr><td>js.remote.max_errors</td><td>REMOTE_JS_SANDBOX_MAX_ERRORS</td><td>3</td><td>
 Maximum allowed JavaScript execution errors before JavaScript will be blacklisted</td></tr>
<tr><td>js.remote.max_black_list_duration_sec</td><td>REMOTE_JS_SANDBOX_MAX_BLACKLIST_DURATION_SEC</td><td>60</td><td>
 Maximum time in seconds for black listed function to stay in the list.</td></tr>
<tr><td>js.remote.stats.enabled</td><td>TB_JS_REMOTE_STATS_ENABLED</td><td>false</td><td> Enable/Disable stats collection for remote JS executor</td></tr>
<tr><td>js.remote.stats.print_interval_ms</td><td>TB_JS_REMOTE_STATS_PRINT_INTERVAL_MS</td><td>10000</td><td>
 Interval of logging for remote JS executor stats</td></tr>
</tbody></table>


####  Transport configuration properties
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>transport.sessions.inactivity_timeout</td><td>TB_TRANSPORT_SESSIONS_INACTIVITY_TIMEOUT</td><td>300000</td><td> Inactivity timeout for device session in transport service. The last activity time of the device session is updated if device sends any message, including keepalive messages</td></tr>
<tr><td>transport.sessions.report_timeout</td><td>TB_TRANSPORT_SESSIONS_REPORT_TIMEOUT</td><td>3000</td><td>
 Interval of periodic check for expired sessions and report of the changes to session last activity time</td></tr>
<tr><td>transport.json.type_cast_enabled</td><td>JSON_TYPE_CAST_ENABLED</td><td>true</td><td> Cast String data types to Numeric if possible when processing Telemetry/Attributes JSON</td></tr>
<tr><td>transport.json.max_string_value_length</td><td>JSON_MAX_STRING_VALUE_LENGTH</td><td>0</td><td>
 Maximum allowed string value length when processing Telemetry/Attributes JSON (0 value disables string value length check)</td></tr>
<tr><td>transport.client_side_rpc.timeout</td><td>CLIENT_SIDE_RPC_TIMEOUT</td><td>60000</td><td> Processing timeout interval of the RPC command on the CLIENT SIDE. Time in milliseconds</td></tr>
<tr><td>transport.api_enabled</td><td>TB_TRANSPORT_API_ENABLED</td><td>true</td><td> Enable/disable http/mqtt/coap transport protocols (has higher priority than certain protocol's 'enabled' property)</td></tr>
<tr><td>transport.log.enabled</td><td>TB_TRANSPORT_LOG_ENABLED</td><td>true</td><td> Enable/Disable log of transport messages to telemetry. For example, logging of LwM2M registration update</td></tr>
<tr><td>transport.log.max_length</td><td>TB_TRANSPORT_LOG_MAX_LENGTH</td><td>1024</td><td>
 Maximum length of the log message. The content will be truncated to the specified value if needed</td></tr>
<tr><td>transport.rate_limits.ip_limits_enabled</td><td>TB_TRANSPORT_IP_RATE_LIMITS_ENABLED</td><td>false</td><td> Enable or disable generic rate limits. Device and Tenant specific rate limits are controlled in Tenant Profile.</td></tr>
<tr><td>transport.rate_limits.max_wrong_credentials_per_ip</td><td>TB_TRANSPORT_MAX_WRONG_CREDENTIALS_PER_IP</td><td>10</td><td>
 Maximum number of connect attempts with invalid credentials</td></tr>
<tr><td>transport.rate_limits.ip_block_timeout</td><td>TB_TRANSPORT_IP_BLOCK_TIMEOUT</td><td>60000</td><td>
 Timeout to expire block IP addresses</td></tr>
<tr><td>transport.http.enabled</td><td>HTTP_ENABLED</td><td>true</td><td> Enable/Disable local HTTP transport protocol</td></tr>
<tr><td>transport.http.request_timeout</td><td>HTTP_REQUEST_TIMEOUT</td><td>60000</td><td>
 HTTP request processing timeout in milliseconds</td></tr>
<tr><td>transport.http.max_request_timeout</td><td>HTTP_MAX_REQUEST_TIMEOUT</td><td>300000</td><td>
 HTTP maximum request processing timeout in milliseconds</td></tr>
<tr><td>transport.mqtt.enabled</td><td>MQTT_ENABLED</td><td>true</td><td> Enable/disable mqtt transport protocol.</td></tr>
<tr><td>transport.mqtt.bind_address</td><td>MQTT_BIND_ADDRESS</td><td>0.0.0.0</td><td>
 MQTT bind address</td></tr>
<tr><td>transport.mqtt.bind_port</td><td>MQTT_BIND_PORT</td><td>1883</td><td>
 MQTT bind port</td></tr>
<tr><td>transport.mqtt.proxy_enabled</td><td>MQTT_PROXY_PROTOCOL_ENABLED</td><td>false</td><td>
 Enable proxy protocol support. Disabled by default. If enabled, supports both v1 and v2.
 Useful to get the real IP address of the client in the logs and for rate limits.</td></tr>
<tr><td>transport.mqtt.timeout</td><td>MQTT_TIMEOUT</td><td>10000</td><td>
 MQTT processing timeout in milliseconds</td></tr>
<tr><td>transport.mqtt.msg_queue_size_per_device_limit</td><td>MQTT_MSG_QUEUE_SIZE_PER_DEVICE_LIMIT</td><td>100</td><td> messages await in the queue before device connected state. This limit works on low level before TenantProfileLimits mechanism</td></tr>
<tr><td>transport.mqtt.netty.leak_detector_level</td><td>NETTY_LEAK_DETECTOR_LVL</td><td>DISABLED</td><td> Netty leak detector level</td></tr>
<tr><td>transport.mqtt.netty.boss_group_thread_count</td><td>NETTY_BOSS_GROUP_THREADS</td><td>1</td><td>
 Netty BOSS threads count</td></tr>
<tr><td>transport.mqtt.netty.worker_group_thread_count</td><td>NETTY_WORKER_GROUP_THREADS</td><td>12</td><td>
 Netty worker threads count</td></tr>
<tr><td>transport.mqtt.netty.max_payload_size</td><td>NETTY_MAX_PAYLOAD_SIZE</td><td>65536</td><td>
 Max payload size in bytes</td></tr>
<tr><td>transport.mqtt.netty.so_keep_alive</td><td>NETTY_SO_KEEPALIVE</td><td>false</td><td>
 Enables TCP keepalive. This means that TCP starts sending keepalive probes when a connection is idle for some time</td></tr>
<tr><td>transport.mqtt.ssl.enabled</td><td>MQTT_SSL_ENABLED</td><td>false</td><td> Enable/disable SSL support</td></tr>
<tr><td>transport.mqtt.ssl.bind_address</td><td>MQTT_SSL_BIND_ADDRESS</td><td>0.0.0.0</td><td>
 MQTT SSL bind address</td></tr>
<tr><td>transport.mqtt.ssl.bind_port</td><td>MQTT_SSL_BIND_PORT</td><td>8883</td><td>
 MQTT SSL bind port</td></tr>
<tr><td>transport.mqtt.ssl.protocol</td><td>MQTT_SSL_PROTOCOL</td><td>TLSv1.2</td><td>
 SSL protocol: See https://docs.oracle.com/en/java/javase/11/docs/specs/security/standard-names.html#sslcontext-algorithms</td></tr>
<tr><td>transport.mqtt.ssl.credentials.type</td><td>MQTT_SSL_CREDENTIALS_TYPE</td><td>PEM</td><td> Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td></tr>
<tr><td>transport.mqtt.ssl.credentials.pem.cert_file</td><td>MQTT_SSL_PEM_CERT</td><td>mqttserver.pem</td><td> Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td></tr>
<tr><td>transport.mqtt.ssl.credentials.pem.key_file</td><td>MQTT_SSL_PEM_KEY</td><td>mqttserver_key.pem</td><td>
 Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td></tr>
<tr><td>transport.mqtt.ssl.credentials.pem.key_password</td><td>MQTT_SSL_PEM_KEY_PASSWORD</td><td>server_key_password</td><td>
 Server certificate private key password (optional)</td></tr>
<tr><td>transport.mqtt.ssl.credentials.keystore.type</td><td>MQTT_SSL_KEY_STORE_TYPE</td><td>JKS</td><td> Type of the key store (JKS or PKCS12)</td></tr>
<tr><td>transport.mqtt.ssl.credentials.keystore.store_file</td><td>MQTT_SSL_KEY_STORE</td><td>mqttserver.jks</td><td>
 Path to the key store that holds the SSL certificate</td></tr>
<tr><td>transport.mqtt.ssl.credentials.keystore.store_password</td><td>MQTT_SSL_KEY_STORE_PASSWORD</td><td>server_ks_password</td><td>
 Password used to access the key store</td></tr>
<tr><td>transport.mqtt.ssl.credentials.keystore.key_alias</td><td>MQTT_SSL_KEY_ALIAS</td><td></td><td>
 Optional alias of the private key; If not set, the platform will load the first private key from the keystore;</td></tr>
<tr><td>transport.mqtt.ssl.credentials.keystore.key_password</td><td>MQTT_SSL_KEY_PASSWORD</td><td>server_key_password</td><td>
 Optional password to access the private key. If not set, the platform will attempt to load the private keys that are not protected with the password;</td></tr>
<tr><td>transport.mqtt.ssl.skip_validity_check_for_client_cert</td><td>MQTT_SSL_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT</td><td>false</td><td> Skip certificate validity check for client certificates.</td></tr>
<tr><td>transport.coap.enabled</td><td>COAP_ENABLED</td><td>true</td><td> Enable/disable coap transport protocol.</td></tr>
<tr><td>transport.coap.timeout</td><td>COAP_TIMEOUT</td><td>10000</td><td>
 CoaP processing timeout in milliseconds</td></tr>
<tr><td>transport.coap.piggyback_timeout</td><td>COAP_PIGGYBACK_TIMEOUT</td><td>500</td><td>
 CoaP piggyback response timeout in milliseconds</td></tr>
<tr><td>transport.coap.psm_activity_timer</td><td>COAP_PSM_ACTIVITY_TIMER</td><td>10000</td><td>
 Default PSM Activity Timer if not specified in device profile</td></tr>
<tr><td>transport.coap.paging_transmission_window</td><td>COAP_PAGING_TRANSMISSION_WINDOW</td><td>10000</td><td>
 Default PSM Activity Timer if not specified in device profile</td></tr>
<tr><td>transport.coap.dtls.enabled</td><td>COAP_DTLS_ENABLED</td><td>false</td><td> Enable/disable DTLS 1.2 support</td></tr>
<tr><td>transport.coap.dtls.retransmission_timeout</td><td>COAP_DTLS_RETRANSMISSION_TIMEOUT_MS</td><td>9000</td><td>
 RFC7925_RETRANSMISSION_TIMEOUT_IN_MILLISECONDS = 9000</td></tr>
<tr><td>transport.lwm2m.enabled</td><td>LWM2M_ENABLED</td><td>true</td><td> Enable/disable lvm2m transport protocol.</td></tr>
<tr><td>transport.lwm2m.dtls.retransmission_timeout</td><td>LWM2M_DTLS_RETRANSMISSION_TIMEOUT_MS</td><td>9000</td><td> RFC7925_RETRANSMISSION_TIMEOUT_IN_MILLISECONDS = 9000</td></tr>
<tr><td>transport.lwm2m.server.id</td><td>LWM2M_SERVER_ID</td><td>123</td><td> LwM2M Server ID</td></tr>
<tr><td>transport.lwm2m.server.bind_address</td><td>LWM2M_BIND_ADDRESS</td><td>0.0.0.0</td><td>
 LwM2M server bind address. Bind to all interfaces by default</td></tr>
<tr><td>transport.lwm2m.server.bind_port</td><td>LWM2M_BIND_PORT</td><td>5685</td><td>
 LwM2M server bind port</td></tr>
<tr><td>transport.lwm2m.server.security.bind_address</td><td>LWM2M_SECURITY_BIND_ADDRESS</td><td>0.0.0.0</td><td> LwM2M server bind address for DTLS. Bind to all interfaces by default</td></tr>
<tr><td>transport.lwm2m.server.security.bind_port</td><td>LWM2M_SECURITY_BIND_PORT</td><td>5686</td><td>
 LwM2M server bind port for DTLS</td></tr>
<tr><td>transport.lwm2m.server.security.credentials.enabled</td><td>LWM2M_SERVER_CREDENTIALS_ENABLED</td><td>false</td><td> Whether to enable LWM2M server X509 Certificate/RPK support</td></tr>
<tr><td>transport.lwm2m.server.security.credentials.type</td><td>LWM2M_SERVER_CREDENTIALS_TYPE</td><td>PEM</td><td>
 Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td></tr>
<tr><td>transport.lwm2m.server.security.credentials.pem.cert_file</td><td>LWM2M_SERVER_PEM_CERT</td><td>lwm2mserver.pem</td><td> Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td></tr>
<tr><td>transport.lwm2m.server.security.credentials.pem.key_file</td><td>LWM2M_SERVER_PEM_KEY</td><td>lwm2mserver_key.pem</td><td>
 Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td></tr>
<tr><td>transport.lwm2m.server.security.credentials.pem.key_password</td><td>LWM2M_SERVER_PEM_KEY_PASSWORD</td><td>server_key_password</td><td>
 Server certificate private key password (optional)</td></tr>
<tr><td>transport.lwm2m.server.security.credentials.keystore.type</td><td>LWM2M_SERVER_KEY_STORE_TYPE</td><td>JKS</td><td> Type of the key store (JKS or PKCS12)</td></tr>
<tr><td>transport.lwm2m.server.security.credentials.keystore.store_file</td><td>LWM2M_SERVER_KEY_STORE</td><td>lwm2mserver.jks</td><td>
 Path to the key store that holds the SSL certificate</td></tr>
<tr><td>transport.lwm2m.server.security.credentials.keystore.store_password</td><td>LWM2M_SERVER_KEY_STORE_PASSWORD</td><td>server_ks_password</td><td>
 Password used to access the key store</td></tr>
<tr><td>transport.lwm2m.server.security.credentials.keystore.key_alias</td><td>LWM2M_SERVER_KEY_ALIAS</td><td>server</td><td>
 Key alias</td></tr>
<tr><td>transport.lwm2m.server.security.credentials.keystore.key_password</td><td>LWM2M_SERVER_KEY_PASSWORD</td><td>server_ks_password</td><td>
 Password used to access the key</td></tr>
<tr><td>transport.lwm2m.server.security.skip_validity_check_for_client_cert</td><td>TB_LWM2M_SERVER_SECURITY_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT</td><td>false</td><td> Only Certificate_x509:</td></tr>
<tr><td>transport.lwm2m.bootstrap.enabled</td><td>LWM2M_ENABLED_BS</td><td>true</td><td> Enable/disable Bootstrap Server</td></tr>
<tr><td>transport.lwm2m.bootstrap.id</td><td>LWM2M_SERVER_ID_BS</td><td>111</td><td>
 Default value in Lwm2mClient after start in mode Bootstrap for the object : name "LWM2M Security" field: "Short Server ID" (deviceProfile: Bootstrap.BOOTSTRAP SERVER.Short ID)</td></tr>
<tr><td>transport.lwm2m.bootstrap.bind_address</td><td>LWM2M_BS_BIND_ADDRESS</td><td>0.0.0.0</td><td>
 LwM2M bootstrap server bind address. Bind to all interfaces by default</td></tr>
<tr><td>transport.lwm2m.bootstrap.bind_port</td><td>LWM2M_BS_BIND_PORT</td><td>5687</td><td>
 LwM2M bootstrap server bind port</td></tr>
<tr><td>transport.lwm2m.bootstrap.security.bind_address</td><td>LWM2M_BS_SECURITY_BIND_ADDRESS</td><td>0.0.0.0</td><td> LwM2M bootstrap server bind address for DTLS. Bind to all interfaces by default</td></tr>
<tr><td>transport.lwm2m.bootstrap.security.bind_port</td><td>LWM2M_BS_SECURITY_BIND_PORT</td><td>5688</td><td>
 LwM2M bootstrap server bind address for DTLS. Bind to all interfaces by default</td></tr>
<tr><td>transport.lwm2m.bootstrap.security.credentials.enabled</td><td>LWM2M_BS_CREDENTIALS_ENABLED</td><td>false</td><td> Whether to enable LWM2M bootstrap server X509 Certificate/RPK support</td></tr>
<tr><td>transport.lwm2m.bootstrap.security.credentials.type</td><td>LWM2M_BS_CREDENTIALS_TYPE</td><td>PEM</td><td>
 Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td></tr>
<tr><td>transport.lwm2m.bootstrap.security.credentials.pem.cert_file</td><td>LWM2M_BS_PEM_CERT</td><td>lwm2mserver.pem</td><td> Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td></tr>
<tr><td>transport.lwm2m.bootstrap.security.credentials.pem.key_file</td><td>LWM2M_BS_PEM_KEY</td><td>lwm2mserver_key.pem</td><td>
 Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td></tr>
<tr><td>transport.lwm2m.bootstrap.security.credentials.pem.key_password</td><td>LWM2M_BS_PEM_KEY_PASSWORD</td><td>server_key_password</td><td>
 Server certificate private key password (optional)</td></tr>
<tr><td>transport.lwm2m.bootstrap.security.credentials.keystore.type</td><td>LWM2M_BS_KEY_STORE_TYPE</td><td>JKS</td><td> Type of the key store (JKS or PKCS12)</td></tr>
<tr><td>transport.lwm2m.bootstrap.security.credentials.keystore.store_file</td><td>LWM2M_BS_KEY_STORE</td><td>lwm2mserver.jks</td><td>
 Path to the key store that holds the SSL certificate</td></tr>
<tr><td>transport.lwm2m.bootstrap.security.credentials.keystore.store_password</td><td>LWM2M_BS_KEY_STORE_PASSWORD</td><td>server_ks_password</td><td>
 Password used to access the key store</td></tr>
<tr><td>transport.lwm2m.bootstrap.security.credentials.keystore.key_alias</td><td>LWM2M_BS_KEY_ALIAS</td><td>bootstrap</td><td>
 Key alias</td></tr>
<tr><td>transport.lwm2m.bootstrap.security.credentials.keystore.key_password</td><td>LWM2M_BS_KEY_PASSWORD</td><td>server_ks_password</td><td>
 Password used to access the key</td></tr>
<tr><td>transport.lwm2m.security.trust-credentials.enabled</td><td>LWM2M_TRUST_CREDENTIALS_ENABLED</td><td>false</td><td> Whether to load X509 trust certificates</td></tr>
<tr><td>transport.lwm2m.security.trust-credentials.type</td><td>LWM2M_TRUST_CREDENTIALS_TYPE</td><td>PEM</td><td>
 Trust certificates store type (PEM - pem certificates file; KEYSTORE - java keystore)</td></tr>
<tr><td>transport.lwm2m.security.trust-credentials.pem.cert_file</td><td>LWM2M_TRUST_PEM_CERT</td><td>lwm2mtruststorechain.pem</td><td> Path to the certificates file (holds trust certificates)</td></tr>
<tr><td>transport.lwm2m.security.trust-credentials.keystore.type</td><td>LWM2M_TRUST_KEY_STORE_TYPE</td><td>JKS</td><td> Type of the key store (JKS or PKCS12)</td></tr>
<tr><td>transport.lwm2m.security.trust-credentials.keystore.store_file</td><td>LWM2M_TRUST_KEY_STORE</td><td>lwm2mtruststorechain.jks</td><td>
 Path to the key store that holds the X509 certificates</td></tr>
<tr><td>transport.lwm2m.security.trust-credentials.keystore.store_password</td><td>LWM2M_TRUST_KEY_STORE_PASSWORD</td><td>server_ks_password</td><td>
 Password used to access the key store</td></tr>
<tr><td>transport.lwm2m.security.recommended_ciphers</td><td>LWM2M_RECOMMENDED_CIPHERS</td><td>false</td><td> Set usage of recommended cipher suites; true - allow only recommended cipher suites; false - allow not recommended cipher suites</td></tr>
<tr><td>transport.lwm2m.security.recommended_supported_groups</td><td>LWM2M_RECOMMENDED_SUPPORTED_GROUPS</td><td>true</td><td>
 Set usage of recommended supported groups (curves); true - allow only recommended supported groups, false - allow not recommended supported groups</td></tr>
<tr><td>transport.lwm2m.timeout</td><td>LWM2M_TIMEOUT</td><td>120000</td><td> Timeout of LwM2M operation</td></tr>
<tr><td>transport.lwm2m.uplink_pool_size</td><td>LWM2M_UPLINK_POOL_SIZE</td><td>10</td><td>
 Thread pool size for processing of the LwM2M uplinks</td></tr>
<tr><td>transport.lwm2m.downlink_pool_size</td><td>LWM2M_DOWNLINK_POOL_SIZE</td><td>10</td><td>
 Thread pool size for processing of the LwM2M downlinks</td></tr>
<tr><td>transport.lwm2m.ota_pool_size</td><td>LWM2M_OTA_POOL_SIZE</td><td>10</td><td>
 Thread pool size for processing of the OTA updates</td></tr>
<tr><td>transport.lwm2m.clean_period_in_sec</td><td>LWM2M_CLEAN_PERIOD_IN_SEC</td><td>2</td><td>
 Period of cleanup for the registrations in store</td></tr>
<tr><td>transport.lwm2m.log_max_length</td><td>LWM2M_LOG_MAX_LENGTH</td><td>1024</td><td>
 Maximum log size</td></tr>
<tr><td>transport.lwm2m.psm_activity_timer</td><td>LWM2M_PSM_ACTIVITY_TIMER</td><td>10000</td><td>
 PSM Activity Timer if not specified in device profile</td></tr>
<tr><td>transport.lwm2m.paging_transmission_window</td><td>LWM2M_PAGING_TRANSMISSION_WINDOW</td><td>10000</td><td>
 Paging Transmission Window for eDRX support if not specified in the device profile</td></tr>
<tr><td>transport.snmp.enabled</td><td>SNMP_ENABLED</td><td>true</td><td> Enable/disable SNMP transport protocol</td></tr>
<tr><td>transport.snmp.bind_port</td><td>SNMP_BIND_PORT</td><td>1620</td><td>
 Snmp bind port</td></tr>
<tr><td>transport.snmp.response_processing.parallelism_level</td><td>SNMP_RESPONSE_PROCESSING_PARALLELISM_LEVEL</td><td>20</td><td> parallelism level for executor (workStealingPool) that is responsible for handling responses from SNMP devices</td></tr>
<tr><td>transport.snmp.underlying_protocol</td><td>SNMP_UNDERLYING_PROTOCOL</td><td>udp</td><td> to configure SNMP to work over UDP or TCP</td></tr>
<tr><td>transport.snmp.max_request_oids</td><td>SNMP_MAX_REQUEST_OIDS</td><td>100</td><td>
 Batch size to request OID mappings from device (useful when device profile has multiple hundreds of OID mappings)</td></tr>
<tr><td>transport.snmp.response.ignore_type_cast_errors</td><td>SNMP_RESPONSE_IGNORE_TYPE_CAST_ERRORS</td><td>false</td><td> To ignore SNMP response values that do not match data type of the configured OID mapping (by default false - will throw error if any value of the response not matches configured data types)</td></tr>
<tr><td>transport.stats.enabled</td><td>TB_TRANSPORT_STATS_ENABLED</td><td>true</td><td> Enable/Disable collection of transport statistics</td></tr>
<tr><td>transport.stats.print-interval-ms</td><td>TB_TRANSPORT_STATS_PRINT_INTERVAL_MS</td><td>60000</td><td>
 Interval of transport statistics logging</td></tr>
</tbody></table>


####  CoAP server parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>coap.enabled</td><td>COAP_SERVER_ENABLED</td><td>true</td><td> Enable/disable coap transport protocol.</td></tr>
<tr><td>coap.bind_address</td><td>COAP_BIND_ADDRESS</td><td>0.0.0.0</td><td>
 CoAP bind address</td></tr>
<tr><td>coap.bind_port</td><td>COAP_BIND_PORT</td><td>5683</td><td>
 CoAP bind port</td></tr>
<tr><td>coap.dtls.enabled</td><td>COAP_DTLS_ENABLED</td><td>false</td><td> Enable/disable DTLS 1.2 support</td></tr>
<tr><td>coap.dtls.bind_address</td><td>COAP_DTLS_BIND_ADDRESS</td><td>0.0.0.0</td><td>
 CoAP DTLS bind address</td></tr>
<tr><td>coap.dtls.bind_port</td><td>COAP_DTLS_BIND_PORT</td><td>5684</td><td>
 CoAP DTLS bind port</td></tr>
<tr><td>coap.dtls.credentials.type</td><td>COAP_DTLS_CREDENTIALS_TYPE</td><td>PEM</td><td> Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td></tr>
<tr><td>coap.dtls.credentials.pem.cert_file</td><td>COAP_DTLS_PEM_CERT</td><td>coapserver.pem</td><td> Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td></tr>
<tr><td>coap.dtls.credentials.pem.key_file</td><td>COAP_DTLS_PEM_KEY</td><td>coapserver_key.pem</td><td>
 Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td></tr>
<tr><td>coap.dtls.credentials.pem.key_password</td><td>COAP_DTLS_PEM_KEY_PASSWORD</td><td>server_key_password</td><td>
 Server certificate private key password (optional)</td></tr>
<tr><td>coap.dtls.credentials.keystore.type</td><td>COAP_DTLS_KEY_STORE_TYPE</td><td>JKS</td><td> Type of the key store (JKS or PKCS12)</td></tr>
<tr><td>coap.dtls.credentials.keystore.store_file</td><td>COAP_DTLS_KEY_STORE</td><td>coapserver.jks</td><td>
 Path to the key store that holds the SSL certificate</td></tr>
<tr><td>coap.dtls.credentials.keystore.store_password</td><td>COAP_DTLS_KEY_STORE_PASSWORD</td><td>server_ks_password</td><td>
 Password used to access the key store</td></tr>
<tr><td>coap.dtls.credentials.keystore.key_alias</td><td>COAP_DTLS_KEY_ALIAS</td><td>serveralias</td><td>
 Key alias</td></tr>
<tr><td>coap.dtls.credentials.keystore.key_password</td><td>COAP_DTLS_KEY_PASSWORD</td><td>server_key_password</td><td>
 Password used to access the key</td></tr>
<tr><td>coap.dtls.x509.skip_validity_check_for_client_cert</td><td>TB_COAP_X509_DTLS_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT</td><td>false</td><td> Skip certificate validity check for client certificates.</td></tr>
<tr><td>coap.dtls.x509.dtls_session_inactivity_timeout</td><td>TB_COAP_X509_DTLS_SESSION_INACTIVITY_TIMEOUT</td><td>86400000</td><td>
 Inactivity timeout of DTLS session. Used to cleanup cache</td></tr>
<tr><td>coap.dtls.x509.dtls_session_report_timeout</td><td>TB_COAP_X509_DTLS_SESSION_REPORT_TIMEOUT</td><td>1800000</td><td>
 Interval of periodic eviction of the timed-out DTLS sessions</td></tr>
</tbody></table>


####  Device connectivity properties to publish telemetry
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>device.connectivity.http.enabled</td><td>DEVICE_CONNECTIVITY_HTTP_ENABLED</td><td>true</td><td> If true check-connectivity service will include curl command to the list of all test commands using DEVICE_CONNECTIVITY_HTTP_HOST and DEVICE_CONNECTIVITY_HTTP_PORT variables</td></tr>
<tr><td>device.connectivity.http.host</td><td>DEVICE_CONNECTIVITY_HTTP_HOST</td><td></td><td>
 Host of http transport service. If empty base url will be used.</td></tr>
<tr><td>device.connectivity.http.port</td><td>DEVICE_CONNECTIVITY_HTTP_PORT</td><td>8080</td><td>
 Port of http transport service. If empty default http port will be used.</td></tr>
<tr><td>device.connectivity.https.enabled</td><td>DEVICE_CONNECTIVITY_HTTPS_ENABLED</td><td>false</td><td> If true check-connectivity service will include curl command to the list of all test commands using DEVICE_CONNECTIVITY_HTTPS_HOST and DEVICE_CONNECTIVITY_HTTPS_PORT variables</td></tr>
<tr><td>device.connectivity.https.host</td><td>DEVICE_CONNECTIVITY_HTTPS_HOST</td><td></td><td>
 Host of http transport service. If empty base url will be used.</td></tr>
<tr><td>device.connectivity.https.port</td><td>DEVICE_CONNECTIVITY_HTTPS_PORT</td><td>443</td><td>
 Port of http transport service. If empty default https port will be used.</td></tr>
<tr><td>device.connectivity.mqtt.enabled</td><td>DEVICE_CONNECTIVITY_MQTT_ENABLED</td><td>true</td><td> If true mosquito command will be included to the list of all test commands using DEVICE_CONNECTIVITY_MQTT_HOST and DEVICE_CONNECTIVITY_MQTT_PORT</td></tr>
<tr><td>device.connectivity.mqtt.host</td><td>DEVICE_CONNECTIVITY_MQTT_HOST</td><td></td><td>
 Host of mqtt transport service. If empty base url host will be used.</td></tr>
<tr><td>device.connectivity.mqtt.port</td><td>DEVICE_CONNECTIVITY_MQTT_PORT</td><td>1883</td><td>
 Port of mqtt transport service</td></tr>
<tr><td>device.connectivity.mqtts.enabled</td><td>DEVICE_CONNECTIVITY_MQTTS_ENABLED</td><td>false</td><td> If true mosquito command will be included to the list of all test commands using DEVICE_CONNECTIVITY_MQTTS_HOST and DEVICE_CONNECTIVITY_MQTTS_PORT<</td></tr>
<tr><td>device.connectivity.mqtts.host</td><td>DEVICE_CONNECTIVITY_MQTTS_HOST</td><td></td><td>
 Host of mqtt transport service. If empty base url host will be used.</td></tr>
<tr><td>device.connectivity.mqtts.port</td><td>DEVICE_CONNECTIVITY_MQTTS_PORT</td><td>8883</td><td>
 Port of mqtt transport service. If empty default port for mqtts will be used.</td></tr>
<tr><td>device.connectivity.mqtts.pem_cert_file</td><td>DEVICE_CONNECTIVITY_MQTT_SSL_PEM_CERT</td><td>mqttserver.pem</td><td>
 Path to the server certificate file</td></tr>
<tr><td>device.connectivity.coap.enabled</td><td>DEVICE_CONNECTIVITY_COAP_ENABLED</td><td>true</td><td> If true coap command will be included to the list of all test commands using DEVICE_CONNECTIVITY_COAP_HOST and DEVICE_CONNECTIVITY_COAP_PORT.</td></tr>
<tr><td>device.connectivity.coap.host</td><td>DEVICE_CONNECTIVITY_COAP_HOST</td><td></td><td>
 Host of coap transport service. If empty base url host will be used.</td></tr>
<tr><td>device.connectivity.coap.port</td><td>DEVICE_CONNECTIVITY_COAP_PORT</td><td>5683</td><td>
 Port of coap transport service. If empty default port for coap will be used.</td></tr>
<tr><td>device.connectivity.coaps.enabled</td><td>DEVICE_CONNECTIVITY_COAPS_ENABLED</td><td>false</td><td> If true coap command will be included to the list of all test commands using DEVICE_CONNECTIVITY_COAPS_HOST and DEVICE_CONNECTIVITY_COAPS_PORT.</td></tr>
<tr><td>device.connectivity.coaps.host</td><td>DEVICE_CONNECTIVITY_COAPS_HOST</td><td></td><td>
 Host of coap transport service. If empty base url host will be used.</td></tr>
<tr><td>device.connectivity.coaps.port</td><td>DEVICE_CONNECTIVITY_COAPS_PORT</td><td>5684</td><td>
 Port of coap transport service. If empty default port for coaps will be used.</td></tr>
</tbody></table>


####  Edges parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>edges.enabled</td><td>EDGES_ENABLED</td><td>true</td><td> Enable/disable Edge instance</td></tr>
<tr><td>edges.rpc.port</td><td>EDGES_RPC_PORT</td><td>7070</td><td> RPC port bind</td></tr>
<tr><td>edges.rpc.client_max_keep_alive_time_sec</td><td>EDGES_RPC_CLIENT_MAX_KEEP_ALIVE_TIME_SEC</td><td>1</td><td>
 Maximum time of keep alive client RPC connection. Time in seconds</td></tr>
<tr><td>edges.rpc.keep_alive_time_sec</td><td>EDGES_RPC_KEEP_ALIVE_TIME_SEC</td><td>10</td><td>
 Maximum time of keep alive connection. Time in seconds</td></tr>
<tr><td>edges.rpc.keep_alive_timeout_sec</td><td>EDGES_RPC_KEEP_ALIVE_TIMEOUT_SEC</td><td>5</td><td>
 Timeout of keep alive RPC connection. Time in seconds</td></tr>
<tr><td>edges.rpc.ssl.enabled</td><td>EDGES_RPC_SSL_ENABLED</td><td>false</td><td> Enable/disable SSL support</td></tr>
<tr><td>edges.rpc.ssl.cert</td><td>EDGES_RPC_SSL_CERT</td><td>certChainFile.pem</td><td>
 Cert file to be used during TLS connectivity to cloud</td></tr>
<tr><td>edges.rpc.ssl.private_key</td><td>EDGES_RPC_SSL_PRIVATE_KEY</td><td>privateKeyFile.pem</td><td>
 Private key file associated with the Cert certificate. This key is used in the encryption process during a secure connection</td></tr>
<tr><td>edges.rpc.max_inbound_message_size</td><td>EDGES_RPC_MAX_INBOUND_MESSAGE_SIZE</td><td>4194304</td><td> Maximum size (in bytes) of inbound messages that cloud can handle from edge. By default, it can handle messages up to 4 Megabytes</td></tr>
<tr><td>edges.storage.max_read_records_count</td><td>EDGES_STORAGE_MAX_READ_RECORDS_COUNT</td><td>50</td><td> Max records of edge event to read from DB and sent to edge</td></tr>
<tr><td>edges.storage.no_read_records_sleep</td><td>EDGES_NO_READ_RECORDS_SLEEP</td><td>1000</td><td>
 Number of milliseconds to wait before next check of edge events in DB</td></tr>
<tr><td>edges.storage.sleep_between_batches</td><td>EDGES_SLEEP_BETWEEN_BATCHES</td><td>10000</td><td>
 Number of milliseconds to wait before resend failed batch of edge events to edge</td></tr>
<tr><td>edges.scheduler_pool_size</td><td>EDGES_SCHEDULER_POOL_SIZE</td><td>1</td><td> Number of threads that used to check DB for edge events</td></tr>
<tr><td>edges.send_scheduler_pool_size</td><td>EDGES_SEND_SCHEDULER_POOL_SIZE</td><td>1</td><td>
 Number of threads that used to send downlink messages to edge over gRPC</td></tr>
<tr><td>edges.grpc_callback_thread_pool_size</td><td>EDGES_GRPC_CALLBACK_POOL_SIZE</td><td>1</td><td>
 Number of threads that used to convert edge events from DB into downlink message and send them for delivery</td></tr>
<tr><td>edges.state.persistToTelemetry</td><td>EDGES_PERSIST_STATE_TO_TELEMETRY</td><td>false</td><td> Persist state of edge (active, last connect, last disconnect) into timeseries or attributes tables. 'false' means to store edge state into attributes table</td></tr>
</tbody></table>


####  Swagger common properties
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>swagger.enabled</td><td>SWAGGER_ENABLED</td><td>true</td><td> If false swagger api docs will be unavailable</td></tr>
<tr><td>swagger.api_path_regex</td><td>SWAGGER_API_PATH_REGEX</td><td>/api/.*</td><td>
 General swagger match pattern of swaggerUI links</td></tr>
<tr><td>swagger.security_path_regex</td><td>SWAGGER_SECURITY_PATH_REGEX</td><td>/api/.*</td><td>
 General swagger match pattern path of swaggerUI links</td></tr>
<tr><td>swagger.non_security_path_regex</td><td>SWAGGER_NON_SECURITY_PATH_REGEX</td><td>/api/(?:noauth|v1)/.*</td><td>
 Non security API path match pattern of swaggerUI links</td></tr>
<tr><td>swagger.title</td><td>SWAGGER_TITLE</td><td>ThingsBoard REST API</td><td>
 The title on the API doc UI page</td></tr>
<tr><td>swagger.description</td><td>SWAGGER_DESCRIPTION</td><td> ThingsBoard Professional Edition IoT platform REST API documentation.</td><td>
 The description on the API doc UI page</td></tr>
<tr><td>swagger.contact.name</td><td>SWAGGER_CONTACT_NAME</td><td>ThingsBoard, Inc.</td><td> The contact name on the API doc UI page</td></tr>
<tr><td>swagger.contact.url</td><td>SWAGGER_CONTACT_URL</td><td>https://thingsboard.io</td><td>
 The contact URL on the API doc UI page</td></tr>
<tr><td>swagger.contact.email</td><td>SWAGGER_CONTACT_EMAIL</td><td>info@thingsboard.io</td><td>
 The contact email on the API doc UI page</td></tr>
<tr><td>swagger.license.title</td><td>SWAGGER_LICENSE_TITLE</td><td>Apache License Version 2.0</td><td> The license title on the API doc UI page</td></tr>
<tr><td>swagger.license.url</td><td>SWAGGER_LICENSE_URL</td><td>https://github.com/thingsboard/thingsboard/blob/master/LICENSE</td><td>
 Link to the license body on the API doc UI page</td></tr>
<tr><td>swagger.version</td><td>SWAGGER_VERSION</td><td></td><td> The version of the API doc to display. Default to the package version.</td></tr>
</tbody></table>


####  Queue configuration parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>queue.type</td><td>TB_QUEUE_TYPE</td><td>in-memory</td><td> in-memory or kafka (Apache Kafka) or aws-sqs (AWS SQS) or pubsub (PubSub) or service-bus (Azure Service Bus) or rabbitmq (RabbitMQ)</td></tr>
<tr><td>queue.in_memory.stats.print-interval-ms</td><td>TB_QUEUE_IN_MEMORY_STATS_PRINT_INTERVAL_MS</td><td>60000</td><td> For debug lvl</td></tr>
<tr><td>queue.kafka.bootstrap.servers</td><td>TB_KAFKA_SERVERS</td><td>localhost:9092</td><td> Kafka Bootstrap Servers</td></tr>
<tr><td>queue.kafka.ssl.enabled</td><td>TB_KAFKA_SSL_ENABLED</td><td>false</td><td> Enable/Disable SSL Kafka communication</td></tr>
<tr><td>queue.kafka.ssl.truststore.location</td><td>TB_KAFKA_SSL_TRUSTSTORE_LOCATION</td><td></td><td>
 The location of the trust store file</td></tr>
<tr><td>queue.kafka.ssl.truststore.password</td><td>TB_KAFKA_SSL_TRUSTSTORE_PASSWORD</td><td></td><td>
 The password of trust store file if specified</td></tr>
<tr><td>queue.kafka.ssl.keystore.location</td><td>TB_KAFKA_SSL_KEYSTORE_LOCATION</td><td></td><td>
 The location of the key store file. This is optional for client and can be used for two-way authentication for client</td></tr>
<tr><td>queue.kafka.ssl.keystore.password</td><td>TB_KAFKA_SSL_KEYSTORE_PASSWORD</td><td></td><td>
 The store password for the key store file. This is optional for client and only needed if ‘ssl.keystore.location’ is configured. Key store password is not supported for PEM format</td></tr>
<tr><td>queue.kafka.ssl.key.password</td><td>TB_KAFKA_SSL_KEY_PASSWORD</td><td></td><td>
 The password of the private key in the key store file or the PEM key specified in ‘keystore.key’</td></tr>
<tr><td>queue.kafka.acks</td><td>TB_KAFKA_ACKS</td><td>all</td><td> The number of acknowledgments the producer requires the leader to have received before considering a request complete. This controls the durability of records that are sent. The following settings are allowed:0,1 and all</td></tr>
<tr><td>queue.kafka.retries</td><td>TB_KAFKA_RETRIES</td><td>1</td><td>
 Number of retries. Resend any record whose send fails with a potentially transient error</td></tr>
<tr><td>queue.kafka.compression.type</td><td>TB_KAFKA_COMPRESSION_TYPE</td><td>none</td><td> none or gzip</td></tr>
<tr><td>queue.kafka.batch.size</td><td>TB_KAFKA_BATCH_SIZE</td><td>16384</td><td>
 Default batch size. This setting gives the upper bound of the batch size to be sent</td></tr>
<tr><td>queue.kafka.linger.ms</td><td>TB_KAFKA_LINGER_MS</td><td>1</td><td>
 This variable creates a small amount of artificial delay—that is, rather than immediately sending out a record</td></tr>
<tr><td>queue.kafka.max.request.size</td><td>TB_KAFKA_MAX_REQUEST_SIZE</td><td>1048576</td><td>
 The maximum size of a request in bytes. This setting will limit the number of record batches the producer will send in a single request to avoid sending huge requests</td></tr>
<tr><td>queue.kafka.max.in.flight.requests.per.connection</td><td>TB_KAFKA_MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION</td><td>5</td><td>
 The maximum number of unacknowledged requests the client will send on a single connection before blocking</td></tr>
<tr><td>queue.kafka.buffer.memory</td><td>TB_BUFFER_MEMORY</td><td>33554432</td><td>
 The total bytes of memory the producer can use to buffer records waiting to be sent to the server</td></tr>
<tr><td>queue.kafka.replication_factor</td><td>TB_QUEUE_KAFKA_REPLICATION_FACTOR</td><td>1</td><td>
 The multiple copies of data over the multiple brokers of Kafka</td></tr>
<tr><td>queue.kafka.max_poll_interval_ms</td><td>TB_QUEUE_KAFKA_MAX_POLL_INTERVAL_MS</td><td>300000</td><td>
 The maximum delay between invocations of poll() when using consumer group management. This places an upper bound on the amount of time that the consumer can be idle before fetching more records</td></tr>
<tr><td>queue.kafka.max_poll_records</td><td>TB_QUEUE_KAFKA_MAX_POLL_RECORDS</td><td>8192</td><td>
 The maximum number of records returned in a single call to poll()</td></tr>
<tr><td>queue.kafka.max_partition_fetch_bytes</td><td>TB_QUEUE_KAFKA_MAX_PARTITION_FETCH_BYTES</td><td>16777216</td><td>
 The maximum amount of data per-partition the server will return. Records are fetched in batches by the consumer</td></tr>
<tr><td>queue.kafka.fetch_max_bytes</td><td>TB_QUEUE_KAFKA_FETCH_MAX_BYTES</td><td>134217728</td><td>
 The maximum amount of data the server will return. Records are fetched in batches by the consumer</td></tr>
<tr><td>queue.kafka.request.timeout.ms</td><td>TB_QUEUE_KAFKA_REQUEST_TIMEOUT_MS</td><td>30000</td><td> (30 seconds) </td></tr>
<tr><td>queue.kafka.session.timeout.ms</td><td>TB_QUEUE_KAFKA_SESSION_TIMEOUT_MS</td><td>10000</td><td> (10 seconds) </td></tr>
<tr><td>queue.kafka.auto_offset_reset</td><td>TB_QUEUE_KAFKA_AUTO_OFFSET_RESET</td><td>earliest</td><td> earliest, latest or none</td></tr>
<tr><td>queue.kafka.use_confluent_cloud</td><td>TB_QUEUE_KAFKA_USE_CONFLUENT_CLOUD</td><td>false</td><td>
 Enable/Disable using of Confluent Cloud</td></tr>
<tr><td>queue.kafka.confluent.ssl.algorithm</td><td>TB_QUEUE_KAFKA_CONFLUENT_SSL_ALGORITHM</td><td>https</td><td> The endpoint identification algorithm used by clients to validate server host name. The default value is https</td></tr>
<tr><td>queue.kafka.confluent.sasl.mechanism</td><td>TB_QUEUE_KAFKA_CONFLUENT_SASL_MECHANISM</td><td>PLAIN</td><td>
 The mechanism used to authenticate Schema Registry requests. SASL/PLAIN should only be used with TLS/SSL as transport layer to ensure that clear passwords are not transmitted on the wire without encryption</td></tr>
<tr><td>queue.kafka.confluent.sasl.config</td><td>TB_QUEUE_KAFKA_CONFLUENT_SASL_JAAS_CONFIG</td><td>org.apache.kafka.common.security.plain.PlainLoginModule required username=\"CLUSTER_API_KEY\" password=\"CLUSTER_API_SECRET\";</td><td>
 Using JAAS Configuration for specifying multiple SASL mechanisms on a broker</td></tr>
<tr><td>queue.kafka.confluent.security.protocol</td><td>TB_QUEUE_KAFKA_CONFLUENT_SECURITY_PROTOCOL</td><td>SASL_SSL</td><td>
 Protocol used to communicate with brokers. Valid values are: PLAINTEXT, SSL, SASL_PLAINTEXT, SASL_SSL</td></tr>
<tr><td>queue.kafka.consumer-properties-per-topic.tb_ota_package.key</td><td></td><td>max.poll.records</td><td> Key-value properties for Kafka consumer per specific topic, e.g. tb_ota_package is a topic name for ota, tb_rule_engine.sq is a topic name for default SequentialByOriginator queue. Check TB_QUEUE_CORE_OTA_TOPIC and TB_QUEUE_RE_SQ_TOPIC params</td></tr>
<tr><td>queue.kafka.consumer-properties-per-topic.tb_ota_package.key.value</td><td>TB_QUEUE_KAFKA_OTA_MAX_POLL_RECORDS</td><td>10</td><td> Example of specific consumer properties value per topic</td></tr>
<tr><td>queue.kafka.consumer-properties-per-topic.tb_version_control.key</td><td></td><td>max.poll.interval.ms</td><td> Example of specific consumer properties value per topic for VC</td></tr>
<tr><td>queue.kafka.consumer-properties-per-topic.tb_version_control.key.value</td><td>TB_QUEUE_KAFKA_VC_MAX_POLL_INTERVAL_MS</td><td>600000</td><td> Example of specific consumer properties value per topic for VC</td></tr>
<tr><td>queue.kafka.other-inline</td><td>TB_QUEUE_KAFKA_OTHER_PROPERTIES</td><td></td><td> In this section you can specify custom parameters (semicolon separated) for Kafka consumer/producer/admin </td></tr>
<tr><td>queue.kafka.topic-properties.rule-engine</td><td>TB_QUEUE_KAFKA_RE_TOPIC_PROPERTIES</td><td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td><td> Kafka properties for Rule Engine</td></tr>
<tr><td>queue.kafka.topic-properties.core</td><td>TB_QUEUE_KAFKA_CORE_TOPIC_PROPERTIES</td><td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td><td>
 Kafka properties for Core topics</td></tr>
<tr><td>queue.kafka.topic-properties.transport-api</td><td>TB_QUEUE_KAFKA_TA_TOPIC_PROPERTIES</td><td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:10;min.insync.replicas:1</td><td>
 Kafka properties for Transport Api topics</td></tr>
<tr><td>queue.kafka.topic-properties.notifications</td><td>TB_QUEUE_KAFKA_NOTIFICATIONS_TOPIC_PROPERTIES</td><td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td><td>
 Kafka properties for Notifications topics</td></tr>
<tr><td>queue.kafka.topic-properties.js-executor</td><td>TB_QUEUE_KAFKA_JE_TOPIC_PROPERTIES</td><td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:104857600;partitions:100;min.insync.replicas:1</td><td>
 Kafka properties for JS Executor topics</td></tr>
<tr><td>queue.kafka.topic-properties.ota-updates</td><td>TB_QUEUE_KAFKA_OTA_TOPIC_PROPERTIES</td><td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:10;min.insync.replicas:1</td><td>
 Kafka properties for OTA updates topic</td></tr>
<tr><td>queue.kafka.topic-properties.version-control</td><td>TB_QUEUE_KAFKA_VC_TOPIC_PROPERTIES</td><td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:10;min.insync.replicas:1</td><td>
 Kafka properties for Version Control topic</td></tr>
<tr><td>queue.kafka.topic-properties.integration-api</td><td>TB_QUEUE_KAFKA_INTEGRATION_TOPIC_PROPERTIES</td><td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:10;min.insync.replicas:1</td><td>
 Kafka properties for Integration Api topics</td></tr>
<tr><td>queue.kafka.consumer-stats.enabled</td><td>TB_QUEUE_KAFKA_CONSUMER_STATS_ENABLED</td><td>true</td><td> Prints lag between consumer group offset and last messages offset in Kafka topics</td></tr>
<tr><td>queue.kafka.consumer-stats.print-interval-ms</td><td>TB_QUEUE_KAFKA_CONSUMER_STATS_MIN_PRINT_INTERVAL_MS</td><td>60000</td><td>
 Statistics printing interval for Kafka's consumer-groups stats</td></tr>
<tr><td>queue.kafka.consumer-stats.kafka-response-timeout-ms</td><td>TB_QUEUE_KAFKA_CONSUMER_STATS_RESPONSE_TIMEOUT_MS</td><td>1000</td><td>
 Time to wait for the stats-loading requests to Kafka to finis</td></tr>
<tr><td>queue.aws_sqs.use_default_credential_provider_chain</td><td>TB_QUEUE_AWS_SQS_USE_DEFAULT_CREDENTIAL_PROVIDER_CHAIN</td><td>false</td><td> Use default credentials provider for AWS SQS</td></tr>
<tr><td>queue.aws_sqs.access_key_id</td><td>TB_QUEUE_AWS_SQS_ACCESS_KEY_ID</td><td>YOUR_KEY</td><td>
 Access key ID from AWS IAM user</td></tr>
<tr><td>queue.aws_sqs.secret_access_key</td><td>TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY</td><td>YOUR_SECRET</td><td>
 Secret access key from AWS IAM user</td></tr>
<tr><td>queue.aws_sqs.region</td><td>TB_QUEUE_AWS_SQS_REGION</td><td>YOUR_REGION</td><td>
 Region from AWS account</td></tr>
<tr><td>queue.aws_sqs.threads_per_topic</td><td>TB_QUEUE_AWS_SQS_THREADS_PER_TOPIC</td><td>1</td><td>
 Number of threads per each AWS SQS queue in consumer</td></tr>
<tr><td>queue.aws_sqs.queue-properties.rule-engine</td><td>TB_QUEUE_AWS_SQS_RE_QUEUE_PROPERTIES</td><td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td><td> AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td></tr>
<tr><td>queue.aws_sqs.queue-properties.core</td><td>TB_QUEUE_AWS_SQS_CORE_QUEUE_PROPERTIES</td><td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td><td>
 AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td></tr>
<tr><td>queue.aws_sqs.queue-properties.transport-api</td><td>TB_QUEUE_AWS_SQS_TA_QUEUE_PROPERTIES</td><td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td><td>
 AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td></tr>
<tr><td>queue.aws_sqs.queue-properties.notifications</td><td>TB_QUEUE_AWS_SQS_NOTIFICATIONS_QUEUE_PROPERTIES</td><td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td><td>
 AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td></tr>
<tr><td>queue.aws_sqs.queue-properties.js-executor</td><td>TB_QUEUE_AWS_SQS_JE_QUEUE_PROPERTIES</td><td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td><td>
 VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td></tr>
<tr><td>queue.aws_sqs.queue-properties.ota-updates</td><td>TB_QUEUE_AWS_SQS_OTA_QUEUE_PROPERTIES</td><td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td><td>
 VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td></tr>
<tr><td>queue.aws_sqs.queue-properties.version-control</td><td>TB_QUEUE_AWS_SQS_VC_QUEUE_PROPERTIES</td><td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td><td>
 VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td></tr>
<tr><td>queue.aws_sqs.queue-properties.integration-api</td><td>TB_QUEUE_AWS_SQS_INTEGRATION_QUEUE_PROPERTIES</td><td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td><td>
 VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td></tr>
<tr><td>queue.pubsub.project_id</td><td>TB_QUEUE_PUBSUB_PROJECT_ID</td><td>YOUR_PROJECT_ID</td><td> Project ID from Google Cloud</td></tr>
<tr><td>queue.pubsub.service_account</td><td>TB_QUEUE_PUBSUB_SERVICE_ACCOUNT</td><td>YOUR_SERVICE_ACCOUNT</td><td>
 API Credentials in JSON format</td></tr>
<tr><td>queue.pubsub.max_msg_size</td><td>TB_QUEUE_PUBSUB_MAX_MSG_SIZE</td><td>1048576</td><td>
 Message size for PubSub queue.Value in bytes</td></tr>
<tr><td>queue.pubsub.max_messages</td><td>TB_QUEUE_PUBSUB_MAX_MESSAGES</td><td>1000</td><td>
 Number of messages per a consumer</td></tr>
<tr><td>queue.pubsub.queue-properties.rule-engine</td><td>TB_QUEUE_PUBSUB_RE_QUEUE_PROPERTIES</td><td>ackDeadlineInSec:30;messageRetentionInSec:604800</td><td> Pub/Sub properties for Rule Engine subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td></tr>
<tr><td>queue.pubsub.queue-properties.core</td><td>TB_QUEUE_PUBSUB_CORE_QUEUE_PROPERTIES</td><td>ackDeadlineInSec:30;messageRetentionInSec:604800</td><td>
 Pub/Sub properties for Core subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td></tr>
<tr><td>queue.pubsub.queue-properties.transport-api</td><td>TB_QUEUE_PUBSUB_TA_QUEUE_PROPERTIES</td><td>ackDeadlineInSec:30;messageRetentionInSec:604800</td><td>
 Pub/Sub properties for Transport API subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td></tr>
<tr><td>queue.pubsub.queue-properties.notifications</td><td>TB_QUEUE_PUBSUB_NOTIFICATIONS_QUEUE_PROPERTIES</td><td>ackDeadlineInSec:30;messageRetentionInSec:604800</td><td>
 Pub/Sub properties for Version Control subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td></tr>
<tr><td>queue.pubsub.queue-properties.js-executor</td><td>TB_QUEUE_PUBSUB_JE_QUEUE_PROPERTIES</td><td>ackDeadlineInSec:30;messageRetentionInSec:604800</td><td>
 PubSub queue properties</td></tr>
<tr><td>queue.pubsub.queue-properties.version-control</td><td>TB_QUEUE_PUBSUB_VC_QUEUE_PROPERTIES</td><td>ackDeadlineInSec:30;messageRetentionInSec:604800</td><td>
 Pub/Sub properties for Transport Api subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td></tr>
<tr><td>queue.pubsub.queue-properties.integration-api</td><td>TB_QUEUE_PUBSUB_INTEGRATION_QUEUE_PROPERTIES</td><td>ackDeadlineInSec:30;messageRetentionInSec:604800</td><td>
 Pub/Sub properties for Transport Api subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td></tr>
<tr><td>queue.service_bus.namespace_name</td><td>TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME</td><td>YOUR_NAMESPACE_NAME</td><td> Azure namespace</td></tr>
<tr><td>queue.service_bus.sas_key_name</td><td>TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME</td><td>YOUR_SAS_KEY_NAME</td><td>
 Azure Service Bus Shared Access Signatures key name</td></tr>
<tr><td>queue.service_bus.sas_key</td><td>TB_QUEUE_SERVICE_BUS_SAS_KEY</td><td>YOUR_SAS_KEY</td><td>
 Azure Service Bus Shared Access Signatures key</td></tr>
<tr><td>queue.service_bus.max_messages</td><td>TB_QUEUE_SERVICE_BUS_MAX_MESSAGES</td><td>1000</td><td>
 Number of messages per a consumer</td></tr>
<tr><td>queue.service_bus.queue-properties.rule-engine</td><td>TB_QUEUE_SERVICE_BUS_RE_QUEUE_PROPERTIES</td><td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td><td> Azure Service Bus properties for Rule Engine queues</td></tr>
<tr><td>queue.service_bus.queue-properties.core</td><td>TB_QUEUE_SERVICE_BUS_CORE_QUEUE_PROPERTIES</td><td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td><td>
 Azure Service Bus properties for Core queues</td></tr>
<tr><td>queue.service_bus.queue-properties.transport-api</td><td>TB_QUEUE_SERVICE_BUS_TA_QUEUE_PROPERTIES</td><td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td><td>
 Azure Service Bus properties for Transport Api queues</td></tr>
<tr><td>queue.service_bus.queue-properties.notifications</td><td>TB_QUEUE_SERVICE_BUS_NOTIFICATIONS_QUEUE_PROPERTIES</td><td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td><td>
 Azure Service Bus properties for Notification queues</td></tr>
<tr><td>queue.service_bus.queue-properties.js-executor</td><td>TB_QUEUE_SERVICE_BUS_JE_QUEUE_PROPERTIES</td><td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td><td>
 Azure Service Bus queue properties</td></tr>
<tr><td>queue.service_bus.queue-properties.version-control</td><td>TB_QUEUE_SERVICE_BUS_VC_QUEUE_PROPERTIES</td><td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td><td>
 Azure Service Bus properties for Version Control queues</td></tr>
<tr><td>queue.service_bus.queue-properties.integration-api</td><td>TB_QUEUE_SERVICE_BUS_INTEGRATION_QUEUE_PROPERTIES</td><td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td><td>
 Azure Service Bus properties for Integration Api queues</td></tr>
<tr><td>queue.rabbitmq.exchange_name</td><td>TB_QUEUE_RABBIT_MQ_EXCHANGE_NAME</td><td></td><td> By default empty</td></tr>
<tr><td>queue.rabbitmq.host</td><td>TB_QUEUE_RABBIT_MQ_HOST</td><td>localhost</td><td>
 RabbitMQ host used to establish connection</td></tr>
<tr><td>queue.rabbitmq.port</td><td>TB_QUEUE_RABBIT_MQ_PORT</td><td>5672</td><td>
 RabbitMQ host used to establish connection</td></tr>
<tr><td>queue.rabbitmq.virtual_host</td><td>TB_QUEUE_RABBIT_MQ_VIRTUAL_HOST</td><td>/</td><td>
 Virtual hosts provide logical grouping and separation of resources</td></tr>
<tr><td>queue.rabbitmq.username</td><td>TB_QUEUE_RABBIT_MQ_USERNAME</td><td>YOUR_USERNAME</td><td>
 Username for RabbitMQ user account</td></tr>
<tr><td>queue.rabbitmq.password</td><td>TB_QUEUE_RABBIT_MQ_PASSWORD</td><td>YOUR_PASSWORD</td><td>
 User password for RabbitMQ user account</td></tr>
<tr><td>queue.rabbitmq.automatic_recovery_enabled</td><td>TB_QUEUE_RABBIT_MQ_AUTOMATIC_RECOVERY_ENABLED</td><td>false</td><td>
 Network connection between clients and RabbitMQ nodes can fail. RabbitMQ Java client supports automatic recovery of connections and topology (queues, exchanges, bindings, and consumers)</td></tr>
<tr><td>queue.rabbitmq.connection_timeout</td><td>TB_QUEUE_RABBIT_MQ_CONNECTION_TIMEOUT</td><td>60000</td><td>
 The connection timeout for the RabbitMQ connection factory</td></tr>
<tr><td>queue.rabbitmq.handshake_timeout</td><td>TB_QUEUE_RABBIT_MQ_HANDSHAKE_TIMEOUT</td><td>10000</td><td>
 RabbitMQ has a timeout for connection handshake. When clients run in heavily constrained environments, it may be necessary to increase the timeout</td></tr>
<tr><td>queue.rabbitmq.queue-properties.rule-engine</td><td>TB_QUEUE_RABBIT_MQ_RE_QUEUE_PROPERTIES</td><td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td><td> RabbitMQ properties for Rule Engine queues</td></tr>
<tr><td>queue.rabbitmq.queue-properties.core</td><td>TB_QUEUE_RABBIT_MQ_CORE_QUEUE_PROPERTIES</td><td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td><td>
 RabbitMQ properties for Core queues</td></tr>
<tr><td>queue.rabbitmq.queue-properties.transport-api</td><td>TB_QUEUE_RABBIT_MQ_TA_QUEUE_PROPERTIES</td><td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td><td>
 RabbitMQ properties for Transport API queues</td></tr>
<tr><td>queue.rabbitmq.queue-properties.notifications</td><td>TB_QUEUE_RABBIT_MQ_NOTIFICATIONS_QUEUE_PROPERTIES</td><td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td><td>
 RabbitMQ properties for Notification queues</td></tr>
<tr><td>queue.rabbitmq.queue-properties.js-executor</td><td>TB_QUEUE_RABBIT_MQ_JE_QUEUE_PROPERTIES</td><td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td><td>
 RabbitMQ queue properties</td></tr>
<tr><td>queue.rabbitmq.queue-properties.version-control</td><td>TB_QUEUE_RABBIT_MQ_VC_QUEUE_PROPERTIES</td><td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td><td>
 RabbitMQ properties for Version Control queues</td></tr>
<tr><td>queue.rabbitmq.queue-properties.integration-api</td><td>TB_QUEUE_RABBIT_MQ_INTEGRATION_QUEUE_PROPERTIES</td><td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td><td>
 RabbitMQ properties for Integration Api queues</td></tr>
<tr><td>queue.partitions.hash_function_name</td><td>TB_QUEUE_PARTITIONS_HASH_FUNCTION_NAME</td><td>murmur3_128</td><td> murmur3_32, murmur3_128 or sha256</td></tr>
<tr><td>queue.transport_api.requests_topic</td><td>TB_QUEUE_TRANSPORT_API_REQUEST_TOPIC</td><td>tb_transport.api.requests</td><td> Topic used to consume api requests from transport microservices</td></tr>
<tr><td>queue.transport_api.responses_topic</td><td>TB_QUEUE_TRANSPORT_API_RESPONSE_TOPIC</td><td>tb_transport.api.responses</td><td>
 Topic used to produce api responses to transport microservices</td></tr>
<tr><td>queue.transport_api.max_pending_requests</td><td>TB_QUEUE_TRANSPORT_MAX_PENDING_REQUESTS</td><td>10000</td><td>
 Maximum pending api requests from transport microservices to be handled by server</td></tr>
<tr><td>queue.transport_api.max_requests_timeout</td><td>TB_QUEUE_TRANSPORT_MAX_REQUEST_TIMEOUT</td><td>10000</td><td>
 Maximum timeout in milliseconds to handle api request from transport microservice by server</td></tr>
<tr><td>queue.transport_api.max_callback_threads</td><td>TB_QUEUE_TRANSPORT_MAX_CALLBACK_THREADS</td><td>10</td><td>
 Amount of threads used to invoke callbacks</td></tr>
<tr><td>queue.transport_api.request_poll_interval</td><td>TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS</td><td>25</td><td>
 Interval in milliseconds to poll api requests from transport microservices</td></tr>
<tr><td>queue.transport_api.response_poll_interval</td><td>TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS</td><td>25</td><td>
 Interval in milliseconds to poll api response from transport microservices</td></tr>
<tr><td>queue.core.topic</td><td>TB_QUEUE_CORE_TOPIC</td><td>tb_core</td><td> Default topic name of Kafka, RabbitMQ, etc. queue</td></tr>
<tr><td>queue.core.poll-interval</td><td>TB_QUEUE_CORE_POLL_INTERVAL_MS</td><td>25</td><td>
 Interval in milliseconds to poll messages by Core microservices</td></tr>
<tr><td>queue.core.partitions</td><td>TB_QUEUE_CORE_PARTITIONS</td><td>10</td><td>
 Amount of partitions used by Core microservices</td></tr>
<tr><td>queue.core.pack-processing-timeout</td><td>TB_QUEUE_CORE_PACK_PROCESSING_TIMEOUT_MS</td><td>2000</td><td>
 Timeout for processing a message pack by Core microservices</td></tr>
<tr><td>queue.core.ota.topic</td><td>TB_QUEUE_CORE_OTA_TOPIC</td><td>tb_ota_package</td><td> Default topic name for OTA updates</td></tr>
<tr><td>queue.core.ota.pack-interval-ms</td><td>TB_QUEUE_CORE_OTA_PACK_INTERVAL_MS</td><td>60000</td><td>
 The interval of processing the OTA updates for devices. Used to avoid any harm to network due to many parallel OTA updates</td></tr>
<tr><td>queue.core.ota.pack-size</td><td>TB_QUEUE_CORE_OTA_PACK_SIZE</td><td>100</td><td>
 The size of OTA updates notifications fetched from the queue. The queue stores pairs of firmware and device ids</td></tr>
<tr><td>queue.core.usage-stats-topic</td><td>TB_QUEUE_US_TOPIC</td><td>tb_usage_stats</td><td> Default topic name for queue Kafka, RabbitMQ, etc.</td></tr>
<tr><td>queue.core.stats.enabled</td><td>TB_QUEUE_CORE_STATS_ENABLED</td><td>true</td><td> Enable/disable statistics for Core microservices</td></tr>
<tr><td>queue.core.stats.print-interval-ms</td><td>TB_QUEUE_CORE_STATS_PRINT_INTERVAL_MS</td><td>60000</td><td>
 Statistics printing interval for Core microservices</td></tr>
<tr><td>queue.vc.topic</td><td>TB_QUEUE_VC_TOPIC</td><td>tb_version_control</td><td> Default topic name for Kafka, RabbitMQ, etc.</td></tr>
<tr><td>queue.vc.partitions</td><td>TB_QUEUE_VC_PARTITIONS</td><td>10</td><td>
 Number of partitions to associate with this queue. Used for scaling the number of messages that can be processed in parallel</td></tr>
<tr><td>queue.vc.poll-interval</td><td>TB_QUEUE_VC_INTERVAL_MS</td><td>25</td><td>
 Interval in milliseconds between polling of the messages if no new messages arrive</td></tr>
<tr><td>queue.vc.pack-processing-timeout</td><td>TB_QUEUE_VC_PACK_PROCESSING_TIMEOUT_MS</td><td>180000</td><td>
 Timeout before retry all failed and timed-out messages from processing pack</td></tr>
<tr><td>queue.vc.request-timeout</td><td>TB_QUEUE_VC_REQUEST_TIMEOUT</td><td>180000</td><td>
 Timeout for a request to VC-executor (for a request for the version of the entity, for a commit charge, etc.)</td></tr>
<tr><td>queue.vc.msg-chunk-size</td><td>TB_QUEUE_VC_MSG_CHUNK_SIZE</td><td>250000</td><td>
 Queue settings for Kafka, RabbitMQ, etc. Limit for single message size</td></tr>
<tr><td>queue.js.request_topic</td><td>REMOTE_JS_EVAL_REQUEST_TOPIC</td><td>js_eval.requests</td><td> JS Eval request topic</td></tr>
<tr><td>queue.js.response_topic_prefix</td><td>REMOTE_JS_EVAL_RESPONSE_TOPIC</td><td>js_eval.responses</td><td>
 JS Eval responses topic prefix that is combined with node id</td></tr>
<tr><td>queue.js.max_pending_requests</td><td>REMOTE_JS_MAX_PENDING_REQUESTS</td><td>10000</td><td>
 JS Eval max pending requests</td></tr>
<tr><td>queue.js.max_eval_requests_timeout</td><td>REMOTE_JS_MAX_EVAL_REQUEST_TIMEOUT</td><td>60000</td><td>
 JS Eval max request timeout</td></tr>
<tr><td>queue.js.max_requests_timeout</td><td>REMOTE_JS_MAX_REQUEST_TIMEOUT</td><td>10000</td><td>
 JS max request timeout</td></tr>
<tr><td>queue.js.max_exec_requests_timeout</td><td>REMOTE_JS_MAX_EXEC_REQUEST_TIMEOUT</td><td>2000</td><td>
 JS execution max request timeout</td></tr>
<tr><td>queue.js.response_poll_interval</td><td>REMOTE_JS_RESPONSE_POLL_INTERVAL_MS</td><td>25</td><td>
 JS response poll interval</td></tr>
<tr><td>queue.rule-engine.topic</td><td>TB_QUEUE_RULE_ENGINE_TOPIC</td><td>tb_rule_engine</td><td> Deprecated. Will be removed in nearest releases</td></tr>
<tr><td>queue.rule-engine.poll-interval</td><td>TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS</td><td>25</td><td>
 Interval in milliseconds to poll messages by Rule Engine</td></tr>
<tr><td>queue.rule-engine.pack-processing-timeout</td><td>TB_QUEUE_RULE_ENGINE_PACK_PROCESSING_TIMEOUT_MS</td><td>2000</td><td>
 Timeout for processing a message pack of Rule Engine</td></tr>
<tr><td>queue.rule-engine.stats.enabled</td><td>TB_QUEUE_RULE_ENGINE_STATS_ENABLED</td><td>true</td><td> Enable/disable statistics for Rule Engine</td></tr>
<tr><td>queue.rule-engine.stats.print-interval-ms</td><td>TB_QUEUE_RULE_ENGINE_STATS_PRINT_INTERVAL_MS</td><td>60000</td><td>
 Statistics printing interval for Rule Engine</td></tr>
<tr><td>queue.rule-engine.stats.max-error-message-length</td><td>TB_QUEUE_RULE_ENGINE_MAX_ERROR_MESSAGE_LENGTH</td><td>4096</td><td>
 Max length of error message that is printed by statistics</td></tr>
<tr><td>queue.rule-engine.queues.name</td><td>TB_QUEUE_RE_SQ_QUEUE_NAME</td><td>SequentialByOriginator</td><td> queue name</td></tr>
<tr><td>queue.rule-engine.queues.name.topic</td><td>TB_QUEUE_RE_SQ_TOPIC</td><td>tb_rule_engine.sq</td><td> queue topic</td></tr>
<tr><td>queue.rule-engine.queues.name.poll-interval</td><td>TB_QUEUE_RE_SQ_POLL_INTERVAL_MS</td><td>25</td><td> poll interval</td></tr>
<tr><td>queue.rule-engine.queues.name.partitions</td><td>TB_QUEUE_RE_SQ_PARTITIONS</td><td>10</td><td> number queue partitions</td></tr>
<tr><td>queue.rule-engine.queues.name.consumer-per-partition</td><td>TB_QUEUE_RE_SQ_CONSUMER_PER_PARTITION</td><td>true</td><td> if true - use for each customer different partition</td></tr>
<tr><td>queue.rule-engine.queues.name.pack-processing-timeout</td><td>TB_QUEUE_RE_SQ_PACK_PROCESSING_TIMEOUT_MS</td><td>2000</td><td> Timeout for processing a message pack</td></tr>
<tr><td>queue.rule-engine.queues.name.submit-strategy.type</td><td>TB_QUEUE_RE_SQ_SUBMIT_STRATEGY_TYPE</td><td>SEQUENTIAL_BY_ORIGINATOR</td><td> BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_BY_TENANT, SEQUENTIAL</td></tr>
<tr><td>queue.rule-engine.queues.name.submit-strategy.batch-size</td><td>TB_QUEUE_RE_SQ_SUBMIT_STRATEGY_BATCH_SIZE</td><td>100</td><td> Maximum number of messages in batch</td></tr>
<tr><td>queue.rule-engine.queues.name.processing-strategy.type</td><td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_TYPE</td><td>RETRY_FAILED_AND_TIMED_OUT</td><td> SKIP_ALL_FAILURES, SKIP_ALL_FAILURES_AND_TIMED_OUT, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td></tr>
<tr><td>queue.rule-engine.queues.name.processing-strategy.retries</td><td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_RETRIES</td><td>3</td><td> Number of retries, 0 is unlimited</td></tr>
<tr><td>queue.rule-engine.queues.name.processing-strategy.failure-percentage</td><td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td><td>0</td><td> Skip retry if failures or timeouts are less then X percentage of messages;</td></tr>
<tr><td>queue.rule-engine.queues.name.processing-strategy.pause-between-retries</td><td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_RETRY_PAUSE</td><td>5</td><td> Time in seconds to wait in consumer thread before retries;</td></tr>
<tr><td>queue.rule-engine.queues.name.processing-strategy.max-pause-between-retries</td><td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td><td>5</td><td> Max allowed time in seconds for pause between retries.</td></tr>
<tr><td>queue.rule-engine.topic-deletion-delay</td><td>TB_QUEUE_RULE_ENGINE_TOPIC_DELETION_DELAY_SEC</td><td>30</td><td> After a queue is deleted (or profile's isolation option was disabled), Rule Engine will continue reading related topics during this period, before deleting the actual topics</td></tr>
<tr><td>queue.transport.notifications_topic</td><td>TB_QUEUE_TRANSPORT_NOTIFICATIONS_TOPIC</td><td>tb_transport.notifications</td><td> For high priority notifications that require minimum latency and processing time</td></tr>
<tr><td>queue.transport.poll_interval</td><td>TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS</td><td>25</td><td>
 Interval in milliseconds to poll messages</td></tr>
<tr><td>queue.integration.partitions</td><td>TB_QUEUE_INTEGRATION_PARTITIONS</td><td>3</td><td> Name of hash function used for consistent hash ring in Cluster Mode. See architecture docs for more details. Valid values - murmur3_32, murmur3_128 or sha256</td></tr>
<tr><td>queue.integration.notifications_topic</td><td>TB_QUEUE_INTEGRATION_NOTIFICATIONS_TOPIC</td><td>tb_ie.notifications</td><td>
 Default notification topic name used by queue</td></tr>
<tr><td>queue.integration.downlink_topic</td><td>TB_QUEUE_INTEGRATION_DOWNLINK_TOPIC</td><td>tb_ie.downlink</td><td>
 Default downlink topic name used by queue</td></tr>
<tr><td>queue.integration.uplink_topic</td><td>TB_QUEUE_INTEGRATION_UPLINK_TOPIC</td><td>tb_ie.uplink</td><td>
 Default uplink topic name used by queue</td></tr>
<tr><td>queue.integration.poll_interval</td><td>TB_QUEUE_INTEGRATION_POLL_INTERVAL_MS</td><td>25</td><td>
 Interval in milliseconds to poll messages by integrations</td></tr>
<tr><td>queue.integration.pack-processing-timeout</td><td>TB_QUEUE_INTEGRATION_PACK_PROCESSING_TIMEOUT_MS</td><td>10000</td><td>
 Timeout for processing a message pack by integrations</td></tr>
<tr><td>queue.integration_api.requests_topic</td><td>TB_QUEUE_INTEGRATION_EXECUTOR_API_REQUEST_TOPIC</td><td>tb_ie.api.requests</td><td> Default Integration Api request topic name used by queue</td></tr>
<tr><td>queue.integration_api.responses_topic</td><td>TB_QUEUE_INTEGRATION_EXECUTOR_API_RESPONSE_TOPIC</td><td>tb_ie.api.responses</td><td>
 Default Integration Api response topic name used by queue</td></tr>
<tr><td>queue.integration_api.max_pending_requests</td><td>TB_QUEUE_INTEGRATION_EXECUTOR_MAX_PENDING_REQUESTS</td><td>10000</td><td>
 Maximum pending api requests from integration executor to be handled by server<</td></tr>
<tr><td>queue.integration_api.max_requests_timeout</td><td>TB_QUEUE_INTEGRATION_EXECUTOR_MAX_REQUEST_TIMEOUT</td><td>10000</td><td>
 Maximum timeout in milliseconds to handle api request from integration executor microservice by server</td></tr>
<tr><td>queue.integration_api.max_callback_threads</td><td>TB_QUEUE_INTEGRATION_EXECUTOR_MAX_CALLBACK_THREADS</td><td>10</td><td>
 Amount of threads used to invoke callbacks</td></tr>
<tr><td>queue.integration_api.request_poll_interval</td><td>TB_QUEUE_INTEGRATION_EXECUTOR_REQUEST_POLL_INTERVAL_MS</td><td>25</td><td>
 Interval in milliseconds to poll api requests from integration executor microservices</td></tr>
<tr><td>queue.integration_api.response_poll_interval</td><td>TB_QUEUE_INTEGRATION_EXECUTOR_RESPONSE_POLL_INTERVAL_MS</td><td>25</td><td>
 Interval in milliseconds to poll api response from integration executor microservices</td></tr>
</tbody></table>


####  Event configuration parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>event.debug.max-symbols</td><td>TB_MAX_DEBUG_EVENT_SYMBOLS</td><td>4096</td><td> Maximum number of symbols per debug event. The event content will be truncated if needed</td></tr>
<tr><td>event.debug.rate_limits.enabled</td><td>DEBUG_MODE_RATE_LIMITS_PER_TENANT_ENABLED</td><td>true</td><td> If true rate limits will be active</td></tr>
<tr><td>event.debug.rate_limits.integration</td><td>INTEGRATION_DEBUG_MODE_RATE_LIMITS_PER_TENANT</td><td>50000:3600</td><td>
 No more than 50000 messages per hour</td></tr>
<tr><td>event.debug.rate_limits.converter</td><td>CONVERTER_DEBUG_MODE_RATE_LIMITS_PER_TENANT</td><td>50000:3600</td><td>
 No more than 50000 messages per hour</td></tr>
</tbody></table>


####  General service parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>service.type</td><td>TB_SERVICE_TYPE</td><td>monolith</td><td> Allowed values: monolith, tb-core, tb-rule-engine</td></tr>
<tr><td>service.id</td><td>TB_SERVICE_ID</td><td></td><td>
 Unique id for this service (autogenerated if empty)</td></tr>
<tr><td>service.integrations.supported</td><td>TB_SERVICE_INTEGRATIONS_SUPPORTED</td><td>ALL</td><td> Allow to enable integration on service/microservice integration executor. Allowed values: OCEANCONNECT, SIGFOX, THINGPARK, TPE, CHIRPSTACK, TUYA, UDP, TCP, TTN, TTI, AZURE_EVENT_HUB, OPC_UA, IBM_WATSON_IOT, AWS_IOT, AWS_SQS, LORIOT, COAP, AZURE_SERVICE_BUS, HTTP, MQTT or ALL to allow all</td></tr>
<tr><td>service.integrations.excluded</td><td>TB_SERVICE_INTEGRATIONS_EXCLUDED</td><td>NONE</td><td>
 List of integrations to exclude from processing on service/microservice integration executor. Allowed values: OCEANCONNECT, SIGFOX, THINGPARK, TPE, CHIRPSTACK, TUYA, UDP, TCP, TTN, TTI, AZURE_EVENT_HUB, OPC_UA, IBM_WATSON_IOT, AWS_IOT, AWS_SQS, LORIOT, COAP, AZURE_SERVICE_BUS, HTTP, MQTT. By default NONE</td></tr>
<tr><td>service.rule_engine.assigned_tenant_profiles</td><td>TB_RULE_ENGINE_ASSIGNED_TENANT_PROFILES</td><td></td><td> Comma-separated list of tenant profiles ids assigned to this Rule Engine.
 This Rule Engine will only be responsible for tenants with these profiles (in case 'isolation' option is enabled in profile).</td></tr>
</tbody></table>


####  Metrics parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>metrics.enabled</td><td>METRICS_ENABLED</td><td>false</td><td> Enable/disable actuator metrics.</td></tr>
<tr><td>metrics.timer.percentiles</td><td>METRICS_TIMER_PERCENTILES</td><td>0.5</td><td> Metrics percentiles returned by actuator for timer metrics. List of double values (divided by ,).</td></tr>
<tr><td>metrics.system_info.persist_frequency</td><td>METRICS_SYSTEM_INFO_PERSIST_FREQUENCY_SECONDS</td><td>60</td><td> Persist frequency of system info (CPU, memory usage, etc.) in seconds</td></tr>
<tr><td>metrics.system_info.ttl</td><td>METRICS_SYSTEM_INFO_TTL_DAYS</td><td>7</td><td>
 TTL in days for system info timeseries</td></tr>
</tbody></table>


####  Version control parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>vc.thread_pool_size</td><td>TB_VC_POOL_SIZE</td><td>2</td><td> Pool size for handling export tasks</td></tr>
<tr><td>vc.git.io_pool_size</td><td>TB_VC_GIT_POOL_SIZE</td><td>3</td><td> Pool size for handling the git IO operations</td></tr>
<tr><td>vc.git.repositories-folder</td><td>TB_VC_GIT_REPOSITORIES_FOLDER</td><td>${java.io.tmpdir}/repositories</td><td>
 Default storing repository path</td></tr>
</tbody></table>


####  Notification system parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>notification_system.thread_pool_size</td><td>TB_NOTIFICATION_SYSTEM_THREAD_POOL_SIZE</td><td>10</td><td> Specify thread pool size for Notification System processing notification rules and notification sending. Recommend value < =10</td></tr>
<tr><td>notification_system.rules.deduplication_durations</td><td>TB_NOTIFICATION_RULES_DEDUPLICATION_DURATIONS</td><td>NEW_PLATFORM_VERSION:0;RATE_LIMITS:14400000;</td><td> Semicolon-separated deduplication durations (in millis) for trigger types. Format: 'NotificationRuleTriggerType1:123;NotificationRuleTriggerType2:456'</td></tr>
</tbody></table>


####  General management parameters
<table>
<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>
<tr><td>management.endpoints.web.exposure.include</td><td></td><td>'${METRICS_ENDPOINTS_EXPOSE:info}'</td><td> Expose metrics endpoint (use value 'prometheus' to enable prometheus metrics).</td></tr>
</tbody></table>
