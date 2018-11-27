---
layout: docwithnav
assignees:
- vparomskiy
title: Configuration properties
description: ThingsBoard configuration properties and environment variables

---

* TOC
{:toc}

This guide will help you to get familiar with ThingsBoard configuration files and parameters. 

Configuration files location depends on the ThingsBoard installation type. If ThingsBoard is installed as a **monolithic application**, 
you can find configuration files in the following directory:

```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /etc/thingsboard/conf
```

But if ThingsBoard is installed as a **microservice**, then each component of the platform will have separate configuration files.

In this guide all application properties will be devided by components where they are applied. **Note** that in case of **monolithic application**
all application properties are located in the single file - **thingsboard.yml** and all environment variables are in **thingsboard.conf**


#### ThingsBoard Core Settings

This is the main configuration file that contains configuration properties 
for transports (HTTP, MQTT, CoAP), database (Cassandra), clustering (Zookeeper and gRPC), etc.
The configuration file is written in YAML. 

All configuration parameters have corresponding environment variable name and default value. In order to change configuration parameter you can simply change it's default value.
For example:

```bash
server:
  address: "${HTTP_BIND_ADDRESS:0.0.0.0}"
```

In this case, *'HTTP_BIND_ADDRESS'* is environment variable name and *'0.0.0.0'* is a default value.
Environment variables are useful in case of docker installation. 
See [docker documentation](https://docs.docker.com/compose/environment-variables/#/the-envfile-configuration-option) for more details.

There is **190+** configuration parameters in **thingsboard.yml** file. You can review their description in the [**configuration file**](https://raw.githubusercontent.com/thingsboard/thingsboard/master/application/src/main/resources/thingsboard.yml) itself.
We will list only main configuration parameters below to avoid duplication of the parameter descriptions and to simplify maintenance of this documentation page.


<table>
  <thead>
      <tr>
          <td><b>Property</b></td><td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>server.address</td>
          <td>HTTP_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>HTTP Server bind address</td>
      </tr>
      <tr>
          <td>server.port</td>
          <td>HTTP_BIND_PORT</td>
          <td>8080</td>
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
          <td>thingsboard</td>
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
          <td>zk.enabled</td>
          <td>ZOOKEEPER_ENABLED</td>
          <td>false</td>
          <td>Enable/disable zookeeper discovery service. Used for ThingsBoard cluster</td>
      </tr>
      <tr>
          <td>zk.url</td>
          <td>ZOOKEEPER_URL</td>
          <td>localhost:2181</td>
          <td>Zookeeper connect string</td>
      </tr>
      <tr>
          <td>zk.retry_interval_ms</td>
          <td>ZOOKEEPER_RETRY_INTERVAL_MS</td>
          <td>3000</td>
          <td>Zookeeper retry interval in milliseconds</td>
      </tr>
      <tr>
          <td>zk.connection_timeout_ms</td>
          <td>ZOOKEEPER_CONNECTION_TIMEOUT_MS</td>
          <td>3000</td>
          <td>Zookeeper connection timeout in milliseconds</td>
      </tr>
      <tr>
          <td>zk.session_timeout_ms</td>
          <td>ZOOKEEPER_SESSION_TIMEOUT_MS</td>
          <td>3000</td>
          <td>Zookeeper session timeout in milliseconds</td>
      </tr>
      <tr>
          <td>zk.zk_dir</td>
          <td>ZOOKEEPER_NODES_DIR</td>
          <td>/thingsboard</td>
          <td>Name of the directory in zookeeper 'filesystem'</td>
      </tr>
      <tr>
          <td>rpc.bind_host</td>
          <td>RPC_HOST</td>
          <td>localhost</td>
          <td>gRPC connection host. Used only in cluster mode only.</td>
      </tr>
      <tr>
          <td>rpc.bind_port</td>
          <td>RPC_PORT</td>
          <td>9001</td>
          <td>gRPC connection port. Used only in cluster mode only.</td>
      </tr>
      <tr>
          <td>cluster.hash_function_name</td>
          <td>CLUSTER_HASH_FUNCTION_NAME</td>
          <td>murmur3_128</td>
          <td>Name of hash function used for consistent hash ring in Cluster Mode. See architecture docs for more details.</td>
      </tr>
      <tr>
          <td>cluster.vitrual_nodes_size</td>
          <td>CLUSTER_VIRTUAL_NODES_SIZE</td>
          <td>16</td>
          <td>Amount of virtual nodes in consistent hash ring.</td>
      </tr>
      <tr>
          <td>cluster.partition_id</td>
          <td>QUEUE_PARTITION_ID</td>
          <td>0</td>
          <td>Queue partition id for current node in the Cluster</td>
      </tr>
      <tr>
          <td>plugins.scan_packages</td>
          <td>PLUGINS_SCAN_PACKAGES</td>
          <td>org.thingsboard.server.extensions, org.thingsboard.rule.engine</td>
          <td>Comma separated package list used during classpath scanning for plugins</td>
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
          <td>security.user_token_access_enabled</td>
          <td>SECURITY_USER_TOKEN_ACCESS_ENABLED</td>
          <td>true</td>
          <td>Enable/disable access to Tenant Administrators JWT token by System Administrator or Customer Users JWT token by Tenant Administrator</td>
      </tr>
      <tr>
          <td>dashboard.max_datapoints_limit</td>
          <td>DASHBOARD_MAX_DATAPOINTS_LIMIT</td>
          <td>50000</td>
          <td>Maximum allowed datapoints fetched by Thingsboard UI widgets</td>
      </tr>
      <tr>
          <td>database.ts_max_intervals</td>
          <td>DATABASE_TS_MAX_INTERVALS</td>
          <td>700</td>
          <td>Max number of DB queries generated by single API call to fetch telemetry records</td>
      </tr>
      <tr>
          <td>database.entities.type</td>
          <td>DATABASE_ENTITIES_TYPE</td>
          <td>sql</td>
          <td>Database type for Thingsboard entities (assets, devices, customers, etc.). Allowed values - **cassandra** OR **sql**</td>
      </tr>
      <tr>
          <td>database.ts.type</td>
          <td>DATABASE_TS_TYPE</td>
          <td>sql</td>
          <td>Database type for Thingsboard timeseries data. Allowed values - **cassandra** OR **sql**. For hybrid mode, only this value should be **cassandra**</td>
      </tr>
      <tr>
          <td>cassandra.cluster_name</td>
          <td>CASSANDRA_CLUSTER_NAME</td>
          <td>Thingsboard Cluster</td>
          <td>Thingsboard Cassandra cluster name</td>
      </tr>
      <tr>
          <td>cassandra.keyspace_name</td>
          <td>CASSANDRA_KEYSPACE_NAME</td>
          <td>thingsboard</td>
          <td>Thingsboard keyspace name</td>
      </tr>
      <tr>
          <td>cassandra.url</td>
          <td>CASSANDRA_URL</td>
          <td>127.0.0.1:9042</td>
          <td>Cassandra seed nodes, comma separated</td>
      </tr>
      <tr>
          <td>cassandra.ssl</td>
          <td>CASSANDRA_USE_SSL</td>
          <td>false</td>
          <td>Enable/disable Cassandra secure connection</td>
      </tr>
      <tr>
          <td>cassandra.jmx</td>
          <td>CASSANDRA_USE_JMX</td>
          <td>true</td>
          <td>Enable/disable Casandra JMX</td>
      </tr>
      <tr>
          <td>cassandra.metrics</td>
          <td>CASSANDRA_DISABLE_METRICS</td>
          <td>true</td>
          <td>Enable/disable Cassandra metrics collection.</td>
      </tr>
      <tr>
          <td>cassandra.compression</td>
          <td>CASSANDRA_COMPRESSION</td>
          <td>none</td>
          <td>Cassandra compression type. Allowed values - NONE SNAPPY LZ4</td>
      </tr>
      <tr>
          <td>cassandra.init_timeout_ms</td>
          <td>CASSANDRA_CLUSTER_INIT_TIMEOUT_MS</td>
          <td>300000</td>
          <td>Specify cassandra cluster initialization timeout in milliseconds (if no hosts available during startup)</td>
      </tr>
      <tr>
          <td>cassandra.init_retry_interval_ms</td>
          <td>CASSANDRA_CLUSTER_INIT_RETRY_INTERVAL_MS</td>
          <td>3000</td>
          <td>Specify cassandra cluster initialization retry interval in milliseconds (if no hosts available during startup)</td>
      </tr>
      <tr>
          <td>cassandra.max_requests_per_connection_local</td>
          <td>CASSANDRA_MAX_REQUESTS_PER_CONNECTION_LOCAL</td>
          <td>32768</td>
          <td>Cassandra max local requests per connection</td>
      </tr>
      <tr>
          <td>cassandra.max_requests_per_connection_remote</td>
          <td>CASSANDRA_MAX_REQUESTS_PER_CONNECTION_REMOTE</td>
          <td>32768</td>
          <td>Cassandra max remote requests per connection</td>
      </tr>
      <tr>
          <td>cassandra.credentials</td>
          <td>CASSANDRA_USE_CREDENTIALS</td>
          <td>false</td>
          <td>Enable/Disable Cassandra credentials</td>
      </tr>
      <tr>
          <td>cassandra.username</td>
          <td>CASSANDRA_USERNAME</td>
          <td></td>
          <td>Casandra username</td>
      </tr>
      <tr>
          <td>cassandra.password</td>
          <td>CASSANDRA_PASSWORD</td>
          <td></td>
          <td>Cassandra password</td>
      </tr>
      <tr>
          <td>cassandra.socket.connect_timeout</td>
          <td>CASSANDRA_SOCKET_TIMEOUT</td>
          <td>5000</td>
          <td></td>
      </tr>
      <tr>
          <td>cassandra.socket.read_timeout</td>
          <td>CASSANDRA_SOCKET_READ_TIMEOUT</td>
          <td>20000</td>
          <td></td>
      </tr>
      <tr>
          <td>cassandra.socket.keep_alive</td>
          <td>CASSANDRA_SOCKET_KEEP_ALIVE</td>
          <td>true</td>
          <td></td>
      </tr>
      <tr>
          <td>cassandra.socket.reuse_address</td>
          <td>CASSANDRA_SOCKET_REUSE_ADDRESS</td>
          <td>true</td>
          <td></td>
      </tr>
      <tr>
          <td>cassandra.socket.so_linger</td>
          <td>CASSANDRA_SOCKET_SO_LINGER</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>cassandra.socket.tcp_no_delay</td>
          <td>CASSANDRA_SOCKET_TCP_NO_DELAY</td>
          <td>false</td>
          <td></td>
      </tr>
      <tr>
          <td>cassandra.socket.receive_buffer_size</td>
          <td>CASSANDRA_SOCKET_RECEIVE_BUFFER_SIZE</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>cassandra.socket.send_buffer_size</td>
          <td>CASSANDRA_SOCKET_SEND_BUFFER_SIZE</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>cassandra.query.read_consistency_level</td>
          <td>CASSANDRA_READ_CONSISTENCY_LEVEL</td>
          <td>ONE</td>
          <td>Cassandra read consistency level</td>
      </tr>
      <tr>
          <td>cassandra.query.write_consistency_level</td>
          <td>CASSANDRA_WRITE_CONSISTENCY_LEVEL</td>
          <td>ONE</td>
          <td>Cassandra write consistency level</td>
      </tr>
      <tr>
          <td>cassandra.query.default_fetch_size</td>
          <td>CASSANDRA_DEFAULT_FETCH_SIZE</td>
          <td>2000</td>
          <td>Cassandra query fetch size</td>
      </tr>
      <tr>
          <td>cassandra.query.ts_key_value_partitioning</td>
          <td>TS_KV_PARTITIONING</td>
          <td>MONTHS</td>
          <td>Specify partitioning size for timestamp key-value storage. Allowed values **MINUTES**, **HOURS**, **DAYS**, **MONTHS**,**INDEFINITE**. In case of **INDEFINITE** - timeseries data partitioning is disabled</td>
      </tr>
      <tr>
          <td>cassandra.query.ts_key_value_ttl</td>
          <td>TS_KV_TTL</td>
          <td>0</td>
          <td>Time To Live (in seconds) for Cassandra Record. 0 - record is never expired.</td>
      </tr>
      <tr>
          <td>cassandra.query.buffer_size</td>
          <td>CASSANDRA_QUERY_BUFFER_SIZE</td>
          <td>200000</td>
          <td>Max number of Cassandra queries that are waiting for execution</td>
      </tr>
      <tr>
          <td>cassandra.query.concurrent_limit</td>
          <td>CASSANDRA_QUERY_CONCURRENT_LIMIT</td>
          <td>1000</td>
          <td>MAx number of concurrent Cassandra queries</td>
      </tr>
      <tr>
          <td>cassandra.query.permit_max_wait_time</td>
          <td>PERMIT_MAX_WAIT_TIME</td>
          <td>120000</td>
          <td>Max Time in milliseconds query waits for execution</td>
      </tr>
      <tr>
          <td>cassandra.query.rate_limit_print_interval_ms</td>
          <td>CASSANDRA_QUERY_RATE_LIMIT_PRINT_MS</td>
          <td>10000</td>
          <td>Internal in milliseconds for printing Cassandra query queue statistic</td>
      </tr>
      <tr>
          <td>sql.ts_inserts_executor_type</td>
          <td>SQL_TS_INSERTS_EXECUTOR_TYPE</td>
          <td>fixed</td>
          <td>Specify executor service type used to perform timeseries insert tasks: **SINGLE** **FIXED** **CACHED**</td>
      </tr>
      <tr>
          <td>sql.ts_inserts_fixed_thread_pool_size</td>
          <td>SQL_TS_INSERTS_FIXED_THREAD_POOL_SIZE</td>
          <td>10</td>
          <td>Specify thread pool size for **FIXED** executor service type</td>
      </tr>
      <tr>
          <td>actors.tenant.create_components_on_init</td>
          <td>ACTORS_TENANT_CREATE_COMPONENTS_ON_INIT</td>
          <td>true</td>
          <td>Create components in initialization</td>
      </tr>
      <tr>
          <td>actors.tenant.create_components_on_init</td>
          <td>ACTORS_TENANT_CREATE_COMPONENTS_ON_INIT</td>
          <td>true</td>
          <td>Create components in initialization</td>
      </tr>
      <tr>
          <td>actors.session.max_concurrent_sessions_per_device</td>
          <td>ACTORS_MAX_CONCURRENT_SESSION_PER_DEVICE</td>
          <td>1</td>
          <td>Max number of concurrent sessions per device</td>
      </tr>
      <tr>
          <td>actors.session.sync.timeout</td>
          <td>ACTORS_SESSION_SYNC_TIMEOUT</td>
          <td>10000</td>
          <td>Default timeout for processing request using synchronous session (HTTP, CoAP) in milliseconds</td>
      </tr>
      <tr>
          <td>actors.rule.db_callback_thread_pool_size</td>
          <td>ACTORS_RULE_DB_CALLBACK_THREAD_POOL_SIZE</td>
          <td>1</td>
          <td>Specify thread pool size for database request callbacks executor service</td>
      </tr>
      <tr>
          <td>actors.rule.js_thread_pool_size</td>
          <td>ACTORS_RULE_JS_THREAD_POOL_SIZE</td>
          <td>10</td>
          <td>Specify thread pool size for javascript executor service</td>
      </tr>
      <tr>
          <td>actors.rule.mail_thread_pool_size</td>
          <td>ACTORS_RULE_MAIL_THREAD_POOL_SIZE</td>
          <td>10</td>
          <td>Specify thread pool size for mail sender executor service</td>
      </tr>
      <tr>
          <td>actors.rule.allow_system_mail_service</td>
          <td>ACTORS_RULE_ALLOW_SYSTEM_MAIL_SERVICE</td>
          <td>true</td>
          <td>Whether to allow usage of system mail service for rules</td>
      </tr>
      <tr>
          <td>actors.rule.external_call_thread_pool_size</td>
          <td>ACTORS_RULE_EXTERNAL_CALL_THREAD_POOL_SIZE</td>
          <td>10</td>
          <td>Specify thread pool size for external call service</td>
      </tr>
      <tr>
          <td>actors.rule.chain.error_persist_frequency</td>
          <td>ACTORS_RULE_CHAIN_ERROR_FREQUENCY</td>
          <td>3000</td>
          <td>Errors for particular actor are persisted once per specified amount of milliseconds</td>
      </tr>
      <tr>
          <td>actors.rule.node.error_persist_frequency</td>
          <td>ACTORS_RULE_NODE_ERROR_FREQUENCY</td>
          <td>3000</td>
          <td>Errors for particular actor are persisted once per specified amount of milliseconds</td>
      </tr>
      <tr>
          <td>actors.statistics.enabled</td>
          <td>ACTORS_STATISTICS_ENABLED</td>
          <td>true</td>
          <td>Enable/disable actor statistics</td>
      </tr>
      <tr>
          <td>actors.statistics.persist_frequency</td>
          <td>ACTORS_STATISTICS_PERSIST_FREQUENCY</td>
          <td>3600000</td>
          <td>Actors statistic persistence frequency in milliseconds</td>
      </tr>
      <tr>
          <td>actors.queue.enabled</td>
          <td>ACTORS_QUEUE_ENABLED</td>
          <td>true</td>
          <td>Enable/disable persistence of un-processed messages to the queue</td>
      </tr>
      <tr>
          <td>actors.queue.timeout</td>
          <td>ACTORS_QUEUE_PERSISTENCE_TIMEOUT</td>
          <td>30000</td>
          <td>Maximum allowed timeout for persistence into the queue in milliseconds</td>
      </tr>
      <tr>
          <td>actors.client_side_rpc.timeout</td>
          <td>CLIENT_SIDE_RPC_TIMEOUT</td>
          <td>60000</td>
          <td>Client side RPC timeout in milliseconds</td>
      </tr>
      <tr>
          <td>cache.type</td>
          <td>CACHE_TYPE</td>
          <td>caffeine</td>
          <td>Cache provider. **caffeine** for stand alone installations and **redis** for clustered installations</td>
      </tr>
      <tr>
          <td>caffeine.specs.relations.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td>**Relations** cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.relations.maxSize</td>
          <td></td>
          <td>100000</td>
          <td>**Relations** cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.deviceCredentials.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td>**deviceCredentials** cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.deviceCredentials.maxSize</td>
          <td></td>
          <td>100000</td>
          <td>**deviceCredentials** cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.devices.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td>**devices** cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.devices.maxSize</td>
          <td></td>
          <td>100000</td>
          <td>**devices** cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.sessions.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td>**sessions** cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.sessions.maxSize</td>
          <td></td>
          <td>100000</td>
          <td>**sessions** cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.assets.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td>**assets** cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.assets.maxSize</td>
          <td></td>
          <td>100000</td>
          <td>**assets** cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.entityViews.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td>**entityViews** cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.entityViews.maxSize</td>
          <td></td>
          <td>100000</td>
          <td>**entityViews** cache max size</td>
      </tr>
      <tr>
          <td>redis.connection.type</td>
          <td></td>
          <td>standalone</td>
          <td>Redis connection type - **standalone** or **cluster**</td>
      </tr>
      <tr>
          <td>redis.connection.host</td>
          <td>REDIS_HOST</td>
          <td>localhost</td>
          <td>Redis connection host</td>
      </tr>
      <tr>
          <td>redis.connection.port</td>
          <td>REDIS_PORT</td>
          <td>6379</td>
          <td>Redis connection port</td>
      </tr>
      <tr>
          <td>redis.connection.db</td>
          <td>REDIS_DB</td>
          <td>0</td>
          <td>Redis database index</td>
      </tr>
      <tr>
          <td>redis.connection.password</td>
          <td>REDIS_PASSWORD</td>
          <td></td>
          <td>Redis password</td>
      </tr>
      <tr>
          <td>updates.enabled</td>
          <td>UPDATES_ENABLED</td>
          <td>true</td>
          <td>Enable/disable thingsboard updates checking</td>
      </tr>
      <tr>
          <td>spring.mvc.cors.mappings.*</td>
          <td></td>
          <td></td>
          <td>Spring CORS configuration</td>
      </tr>
      <tr>
          <td>spring.resources.chain.gzipped</td>
          <td></td>
          <td>true</td>
          <td></td>
      </tr>
      <tr>
          <td>spring.resources.chain.strategy.content.enabled</td>
          <td></td>
          <td>true</td>
          <td></td>
      </tr>
      <tr>
          <td>spring.jpa.database-platform</td>
          <td>SPRING_JPA_DATABASE_PLATFORM</td>
          <td>org.hibernate.dialect.HSQLDialect</td>
          <td>Database SQL dialect for Spring JPA - **org.hibernate.dialect.HSQLDialect** or **org.hibernate.dialect.PostgreSQLDialect**</td>
      </tr>
      <tr>
          <td>spring.datasource.driverClassName</td>
          <td>SPRING_DRIVER_CLASS_NAME</td>
          <td>org.hsqldb.jdbc.JDBCDriver</td>
          <td>Database driver for Spring JPA - **org.hsqldb.jdbc.JDBCDriver** or **org.postgresql.Driver**</td>
      </tr>
      <tr>
          <td>spring.datasource.url</td>
          <td>SPRING_DATASOURCE_URL</td>
          <td></td>
          <td>Database URL</td>
      </tr>
      <tr>
          <td>spring.datasource.username</td>
          <td>SPRING_DATASOURCE_USERNAME</td>
          <td>sa</td>
          <td>Database Username</td>
      </tr>
      <tr>
          <td>spring.datasource.password</td>
          <td>SPRING_DATASOURCE_PASSWORD</td>
          <td></td>
          <td>Database password</td>
      </tr>
      <tr>
          <td>audit_log.enabled</td>
          <td>AUDIT_LOG_ENABLED</td>
          <td>true</td>
          <td>Enable/disable audit log functionality.</td>
      </tr>
      <tr>
          <td>audit_log.by_tenant_partitioning</td>
          <td>AUDIT_LOG_BY_TENANT_PARTITIONING</td>
          <td>MONTHS</td>
          <td>Specify partitioning size for audit log by tenant id storage. Example MINUTES, HOURS, DAYS, MONTHS</td>
      </tr>
      <tr>
          <td>audit_log.default_query_period</td>
          <td>AUDIT_LOG_DEFAULT_QUERY_PERIOD</td>
          <td>30</td>
          <td>Number of days as history period if startTime and endTime are not specified</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."device"</td>
          <td>AUDIT_LOG_MASK_DEVICE</td>
          <td>W</td>
          <td>Device logging levels. Allowed values: **OFF** (disable), **W** (log write operations), **RW** (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."asset"</td>
          <td>AUDIT_LOG_MASK_ASSET</td>
          <td>W</td>
          <td>Asset logging levels. Allowed values: **OFF** (disable), **W** (log write operations), **RW** (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."dashboard"</td>
          <td>AUDIT_LOG_MASK_DASHBOARD</td>
          <td>W</td>
          <td>Dashboard logging levels. Allowed values: **OFF** (disable), **W** (log write operations), **RW** (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."customer"</td>
          <td>AUDIT_LOG_MASK_CUSTOMER</td>
          <td>W</td>
          <td>Customer logging levels. Allowed values: **OFF** (disable), **W** (log write operations), **RW** (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."user"</td>
          <td>AUDIT_LOG_MASK_USER</td>
          <td>W</td>
          <td>User logging levels. Allowed values: **OFF** (disable), **W** (log write operations), **RW** (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."rule_chain"</td>
          <td>AUDIT_LOG_MASK_RULE_CHAIN</td>
          <td>W</td>
          <td>Rule Chain logging levels. Allowed values: **OFF** (disable), **W** (log write operations), **RW** (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."alarm"</td>
          <td>AUDIT_LOG_MASK_ALARM</td>
          <td>W</td>
          <td>Alarm logging levels. Allowed values: **OFF** (disable), **W** (log write operations), **RW** (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."entity_view"</td>
          <td>AUDIT_LOG_MASK_ENTITY_VIEW</td>
          <td>W</td>
          <td>Entity View logging levels. Allowed values: **OFF** (disable), **W** (log write operations), **RW** (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.sink.type</td>
          <td>AUDIT_LOG_SINK_TYPE</td>
          <td>none</td>
          <td>Type of external sink. possible options: none, elasticsearch</td>
      </tr>
      <tr>
          <td>audit_log.sink.index_pattern</td>
          <td>AUDIT_LOG_SINK_INDEX_PATTERN</td>
          <td>@{TENANT}_AUDIT_LOG_@{DATE}</td>
          <td>Name of the index where audit logs stored. Index name could contain next placeholders (not mandatory): @{TENANT} - substituted by tenant ID @{DATE} - substituted by current date in format provided in audit_log.sink.date_format</td>
      </tr>
      <tr>
          <td>audit_log.sink.date_format</td>
          <td>AUDIT_LOG_SINK_DATE_FORMAT</td>
          <td>YYYY.MM.DD</td>
          <td>Date format. Details of the pattern could be found <a href="https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html">in this link</a></td>
      </tr>
      <tr>
          <td>audit_log.sink.scheme_name</td>
          <td>AUDIT_LOG_SINK_SCHEME_NAME</td>
          <td>http</td>
          <td>http or https</td>
      </tr>
      <tr>
          <td>audit_log.sink.host</td>
          <td>AUDIT_LOG_SINK_HOST</td>
          <td>localhost</td>
          <td>DDDDDDDDDDDDDDDDDDD</td>
      </tr>
      <tr>
          <td>audit_log.sink.port</td>
          <td>AUDIT_LOG_SINK_PORT</td>
          <td>9200</td>
          <td>DDDDDDDDDDDDDDDDDDD</td>
      </tr>
      <tr>
          <td>audit_log.sink.user_name</td>
          <td>AUDIT_LOG_SINK_USER_NAME</td>
          <td></td>
          <td>DDDDDDDDDDDDDDDDDDD</td>
      </tr>
      <tr>
          <td>audit_log.sink.password</td>
          <td>AUDIT_LOG_SINK_PASSWORD</td>
          <td></td>
          <td>DDDDDDDDDDDDDDDDDDD</td>
      </tr>
      <tr>
          <td>state.defaultInactivityTimeoutInSec</td>
          <td>DEFAULT_INACTIVITY_TIMEOUT</td>
          <td>10</td>
          <td>Device inactivity timeout in seconds</td>
      </tr>
      <tr>
          <td>state.defaultStateCheckIntervalInSec</td>
          <td>DEFAULT_STATE_CHECK_INTERVAL</td>
          <td>10</td>
          <td>Device inactivity check period in seconds</td>
      </tr>
      <tr>
          <td>kafka.rule_engine.poll_interval</td>
          <td>TB_RULE_ENGINE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td></td>
      </tr>
      <tr>
          <td>kafka.rule_engine.auto_commit_interval</td>
          <td>TB_RULE_ENGINE_AUTO_COMMIT_INTERVAL_MS</td>
          <td>100</td>
          <td></td>
      </tr>
      <tr>
          <td>js.evaluator</td>
          <td>JS_EVALUATOR</td>
          <td>local</td>
          <td>Javascript evaluator type - **local** (Built-in JVM JavaScript environment properties) or **remote** (Remote JavaScript environment )</td>
      </tr>
      <tr>
          <td>js.local.use_js_sandbox</td>
          <td>USE_LOCAL_JS_SANDBOX</td>
          <td>true</td>
          <td>Use Sandboxed (secured) JVM JavaScript environment</td>
      </tr>
      <tr>
          <td>js.local.monitor_thread_pool_size</td>
          <td>LOCAL_JS_SANDBOX_MONITOR_THREAD_POOL_SIZE</td>
          <td>4</td>
          <td>Specify thread pool size for JavaScript sandbox resource monitor</td>
      </tr>
      <tr>
          <td>js.local.max_cpu_time</td>
          <td>LOCAL_JS_SANDBOX_MAX_CPU_TIME</td>
          <td>100</td>
          <td>Maximum CPU time in milliseconds allowed for script execution</td>
      </tr>
      <tr>
          <td>js.local.max_errors</td>
          <td>LOCAL_JS_SANDBOX_MAX_ERRORS</td>
          <td>3</td>
          <td>Maximum allowed JavaScript execution errors before JavaScript will be blacklisted</td>
      </tr>
      <tr>
          <td>js.remote.request_topic</td>
          <td>REMOTE_JS_EVAL_REQUEST_TOPIC</td>
          <td>js.eval.requests</td>
          <td>JS Eval request topic</td>
      </tr>
      <tr>
          <td>js.remote.response_topic_prefix</td>
          <td>REMOTE_JS_EVAL_RESPONSE_TOPIC</td>
          <td>js.eval.responses</td>
          <td>JS Eval responses topic prefix that is combined with node id</td>
      </tr>
      <tr>
          <td>js.remote.max_pending_requests</td>
          <td>REMOTE_JS_MAX_PENDING_REQUESTS</td>
          <td>10000</td>
          <td>JS Eval max pending requests</td>
      </tr>
      <tr>
          <td>js.remote.max_requests_timeout</td>
          <td>REMOTE_JS_MAX_REQUEST_TIMEOUT</td>
          <td>10000</td>
          <td>JS Eval max request timeout</td>
      </tr>
      <tr>
          <td>js.remote.response_poll_interval</td>
          <td>REMOTE_JS_RESPONSE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>JS response poll interval</td>
      </tr>
      <tr>
          <td>js.remote.response_auto_commit_interval</td>
          <td>REMOTE_JS_RESPONSE_AUTO_COMMIT_INTERVAL_MS</td>
          <td>100</td>
          <td>JS response auto commit interval</td>
      </tr>
      <tr>
          <td>js.remote.max_errors</td>
          <td>REMOTE_JS_SANDBOX_MAX_ERRORS</td>
          <td>3</td>
          <td>Maximum allowed JavaScript execution errors before JavaScript will be blacklisted</td>
      </tr>
      <tr>
          <td>transport.type</td>
          <td>TRANSPORT_TYPE</td>
          <td>local</td>
          <td>Transport type : **local** for monolithic application and **remote** for microservices</td>
      </tr>
      <tr>
          <td>transport.remote.transport_api.requests_topic</td>
          <td>TB_TRANSPORT_API_REQUEST_TOPIC</td>
          <td>tb.transport.api.requests</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.remote.transport_api.responses_topic</td>
          <td>TB_TRANSPORT_API_RESPONSE_TOPIC</td>
          <td>tb.transport.api.responses</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.remote.transport_api.max_pending_requests</td>
          <td>TB_TRANSPORT_MAX_PENDING_REQUESTS</td>
          <td>10000</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.remote.transport_api.request_timeout</td>
          <td>TB_TRANSPORT_MAX_REQUEST_TIMEOUT</td>
          <td>10000</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.remote.transport_api.request_poll_interval</td>
          <td>TB_TRANSPORT_RESPONSE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.remote.transport_api.request_auto_commit_interval</td>
          <td>TB_TRANSPORT_RESPONSE_AUTO_COMMIT_INTERVAL_MS</td>
          <td>1000</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.remote.rule_engine.poll_interval</td>
          <td>TB_RULE_ENGINE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.remote.rule_engine.auto_commit_interval</td>
          <td>TB_RULE_ENGINE_AUTO_COMMIT_INTERVAL_MS</td>
          <td>100</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.remote.rule_engine.poll_records_pack_size</td>
          <td>TB_RULE_ENGINE_MAX_POLL_RECORDS</td>
          <td>1000</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.remote.rule_engine.max_poll_records_per_second</td>
          <td>TB_RULE_ENGINE_MAX_POLL_RECORDS_PER_SECOND</td>
          <td>10000</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.remote.rule_engine.max_poll_records_per_minute</td>
          <td>TB_RULE_ENGINE_MAX_POLL_RECORDS_PER_MINUTE</td>
          <td>120000</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.remote.rule_engine.topic</td>
          <td>TB_RULE_ENGINE_TOPIC</td>
          <td>tb.rule-engine</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.remote.notifications.topic</td>
          <td>TB_TRANSPORT_NOTIFICATIONS_TOPIC</td>
          <td>tb.transport.notifications</td>
          <td></td>
      </tr>      
      <tr>
          <td>transport.http.enabled</td>
          <td>HTTP_ENABLED</td>
          <td>true</td>
          <td>Enable\Disable Device HTTP transport</td>
      </tr>
      <tr>
          <td>transport.mqtt.enabled</td>
          <td>MQTT_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable MQTT transport</td>
      </tr>
      <tr>
          <td>transport.coap.enabled</td>
          <td>COAP_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable CoAP transport</td>
      </tr>
  </tbody>
</table>

#### MQTT Transport Settings

<table>
  <thead>
      <tr>
          <td><b>Property</b></td><td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>spring.main.web-environment</td>
          <td> </td>
          <td>false</td>
          <td></td>
      </tr>
      <tr>
          <td>spring.main.web-application-type</td>
          <td></td>
          <td>none</td>
          <td></td>
      </tr>        
      <tr>
          <td>transport.mqtt.bind_address</td>
          <td>MQTT_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>MQTT bind address</td>
      </tr>
      <tr>
          <td>transport.mqtt.bind_port</td>
          <td>MQTT_BIND_PORT</td>
          <td>1883</td>
          <td>MQTT bind port</td>
      </tr>
      <tr>
          <td>transport.mqtt.adaptor</td>
          <td>MQTT_ADAPTOR_NAME</td>
          <td>JsonMqttAdaptor</td>
          <td>MQTT Adaptor name</td>
      </tr>      
      <tr>
          <td>transport.mqtt.timeout</td>
          <td>MQTT_TIMEOUT</td>
          <td>10000</td>
          <td>MQTT processing timeout in milliseconds</td>
      </tr>
      <tr>
          <td>transport.mqtt.netty.leak_detector_level</td>
          <td>NETTY_LEAK_DETECTOR_LVL</td>
          <td>DISABLED</td>
          <td>Netty leak detector level</td>
      </tr>
      <tr>
          <td>transport.mqtt.netty.boss_group_thread_count</td>
          <td>NETTY_BOSS_GROUP_THREADS</td>
          <td>1</td>
          <td>Netty BOSS threads count</td>
      </tr>
      <tr>
          <td>transport.mqtt.netty.worker_group_thread_count</td>
          <td>NETTY_WORKER_GROUP_THREADS</td>
          <td>12</td>
          <td>Netty worker threads count</td>
      </tr>
      <tr>
          <td>transport.mqtt.netty.max_payload_size</td>
          <td>NETTY_MAX_PAYLOAD_SIZE</td>
          <td>65536</td>
          <td>Max payload size in bytes</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.enabled</td>
          <td>MQTT_SSL_ENABLED</td>
          <td>false</td>
          <td>Enable/disable SSL support</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.protocol</td>
          <td>MQTT_SSL_PROTOCOL</td>
          <td>TLSv1.2</td>
          <td>SSL protocol: See <a href="http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#SSLContext">this link</a></td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.key_store</td>
          <td>MQTT_SSL_KEY_STORE</td>
          <td>mqttserver.jks</td>
          <td>Path to the key store that holds the SSL certificate</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.key_store_password</td>
          <td>MQTT_SSL_KEY_STORE_PASSWORD</td>
          <td>server_ks_password</td>
          <td>Password used to access the key store</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.key_password</td>
          <td>MQTT_SSL_KEY_PASSWORD</td>
          <td>server_key_password</td>
          <td>Password used to access the key</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.key_store_type</td>
          <td>MQTT_SSL_KEY_STORE_TYPE</td>
          <td>JKS</td>
          <td>Type of the key store</td>
      </tr>  
      <tr>
            <td>transport.sessions.inactivity_timeout</td>
            <td>TB_TRANSPORT_SESSIONS_INACTIVITY_TIMEOUT</td>
            <td>300000</td>
            <td></td>
        </tr>
        <tr>
            <td>transport.sessions.report_timeout</td>
            <td>TB_TRANSPORT_SESSIONS_REPORT_TIMEOUT</td>
            <td>30000</td>
            <td></td>
        </tr>
        <tr>
            <td>transport.rate_limits.enabled</td>
            <td>TB_TRANSPORT_RATE_LIMITS_ENABLED</td>
            <td>false</td>
            <td>Enabel/Disable rate limits on transport layer</td>
        </tr>
        <tr>
            <td>transport.rate_limits.tenant</td>
            <td>TB_TRANSPORT_RATE_LIMITS_TENANT</td>
            <td>1000:1,20000:60</td>
            <td>Tenant Rate limit policy x:y where x = number of messages per time unit, y = timeunit size in seconds</td>
        </tr>
        <tr>
            <td>transport.rate_limits.device</td>
            <td>TB_TRANSPORT_RATE_LIMITS_DEVICE</td>
            <td>10:1,300:60</td>
            <td>Device Rate limit policy x:y where x = number of messages per time unit, y = timeunit size in seconds</td>
        </tr>
        <tr>
            <td>transport.json.type_cast_enabled</td>
            <td>JSON_TYPE_CAST_ENABLED</td>
            <td>true</td>
            <td>Cast String data types to Numeric if possible when processing Telemetry/Attributes JSON</td>
        </tr>
        <tr>
                  <td>kafka.enabled</td>
                  <td></td>
                  <td>true</td>
                  <td>Enable/Disable Kafka service</td>
              </tr>
              <tr>
                  <td>kafka.bootstrap.servers</td>
                  <td>TB_KAFKA_SERVERS</td>
                  <td>localhost:9092</td>
                  <td>Kafka seed nodes</td>
              </tr>
              <tr>
                  <td>kafka.acks</td>
                  <td>TB_KAFKA_ACKS</td>
                  <td>all</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.retries</td>
                  <td>TB_KAFKA_RETRIES</td>
                  <td>1</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.batch.size</td>
                  <td>TB_KAFKA_BATCH_SIZE</td>
                  <td>16384</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.linger.ms</td>
                  <td>TB_KAFKA_LINGER_MS</td>
                  <td>1</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.buffer.memory</td>
                  <td>TB_BUFFER_MEMORY</td>
                  <td>33554432</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.requests_topic</td>
                  <td>TB_TRANSPORT_API_REQUEST_TOPIC</td>
                  <td>tb.transport.api.requests</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.responses_topic</td>
                  <td>TB_TRANSPORT_API_RESPONSE_TOPIC</td>
                  <td>tb.transport.api.responses</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.max_pending_requests</td>
                  <td>TB_TRANSPORT_MAX_PENDING_REQUESTS</td>
                  <td>10000</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.max_requests_timeout</td>
                  <td>TB_TRANSPORT_MAX_REQUEST_TIMEOUT</td>
                  <td>10000</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.request_poll_interval</td>
                  <td>TB_TRANSPORT_REQUEST_POLL_INTERVAL_MS</td>
                  <td>25</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.request_auto_commit_interval</td>
                  <td>TB_TRANSPORT_REQUEST_AUTO_COMMIT_INTERVAL_MS</td>
                  <td>100</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.rule_engine.topic</td>
                  <td>TB_RULE_ENGINE_TOPIC</td>
                  <td>tb.rule-engine</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.notifications.topic</td>
                  <td>TB_TRANSPORT_NOTIFICATIONS_TOPIC</td>
                  <td>tb.transport.notifications</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.notifications.poll_interval</td>
                  <td>TB_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS</td>
                  <td>25</td>
                  <td></td>
              </tr>             
              <tr>
                  <td>kafka.notifications.auto_commit_interval</td>
                  <td>TB_TRANSPORT_NOTIFICATIONS_AUTO_COMMIT_INTERVAL_MS</td>
                  <td>100</td>
                  <td></td>
              </tr>                   
  </tbody>
</table>

#### HTTP Transport Settings

<table>
  <thead>
      <tr>
          <td><b>Property</b></td><td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>server.address</td>
          <td>HTTP_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>HTTP Server bind address</td>
      </tr>
      <tr>
          <td>server.port</td>
          <td>HTTP_BIND_PORT</td>
          <td>8081</td>
          <td>HTTP Server bind port</td>
      </tr> 
        <tr>
            <td>transport.http.request_timeout</td>
            <td>HTTP_REQUEST_TIMEOUT</td>
            <td>60000</td>
            <td>Http request processing timeout in milliseconds</td>
        </tr>            
      <tr>
            <td>transport.sessions.inactivity_timeout</td>
            <td>TB_TRANSPORT_SESSIONS_INACTIVITY_TIMEOUT</td>
            <td>300000</td>
            <td></td>
        </tr>
        <tr>
            <td>transport.sessions.report_timeout</td>
            <td>TB_TRANSPORT_SESSIONS_REPORT_TIMEOUT</td>
            <td>30000</td>
            <td></td>
        </tr>
        <tr>
            <td>transport.rate_limits.enabled</td>
            <td>TB_TRANSPORT_RATE_LIMITS_ENABLED</td>
            <td>false</td>
            <td>Enabel/Disable rate limits on transport layer</td>
        </tr>
        <tr>
            <td>transport.rate_limits.tenant</td>
            <td>TB_TRANSPORT_RATE_LIMITS_TENANT</td>
            <td>1000:1,20000:60</td>
            <td>Tenant Rate limit policy x:y where x = number of messages per time unit, y = timeunit size in seconds</td>
        </tr>
        <tr>
            <td>transport.rate_limits.device</td>
            <td>TB_TRANSPORT_RATE_LIMITS_DEVICE</td>
            <td>10:1,300:60</td>
            <td>Device Rate limit policy x:y where x = number of messages per time unit, y = timeunit size in seconds</td>
        </tr>
        <tr>
            <td>transport.json.type_cast_enabled</td>
            <td>JSON_TYPE_CAST_ENABLED</td>
            <td>true</td>
            <td>Cast String data types to Numeric if possible when processing Telemetry/Attributes JSON</td>
        </tr>
        <tr>
                  <td>kafka.enabled</td>
                  <td></td>
                  <td>true</td>
                  <td>Enable/Disable Kafka service</td>
              </tr>
              <tr>
                  <td>kafka.bootstrap.servers</td>
                  <td>TB_KAFKA_SERVERS</td>
                  <td>localhost:9092</td>
                  <td>Kafka seed nodes</td>
              </tr>
              <tr>
                  <td>kafka.acks</td>
                  <td>TB_KAFKA_ACKS</td>
                  <td>all</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.retries</td>
                  <td>TB_KAFKA_RETRIES</td>
                  <td>1</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.batch.size</td>
                  <td>TB_KAFKA_BATCH_SIZE</td>
                  <td>16384</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.linger.ms</td>
                  <td>TB_KAFKA_LINGER_MS</td>
                  <td>1</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.buffer.memory</td>
                  <td>TB_BUFFER_MEMORY</td>
                  <td>33554432</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.requests_topic</td>
                  <td>TB_TRANSPORT_API_REQUEST_TOPIC</td>
                  <td>tb.transport.api.requests</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.responses_topic</td>
                  <td>TB_TRANSPORT_API_RESPONSE_TOPIC</td>
                  <td>tb.transport.api.responses</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.max_pending_requests</td>
                  <td>TB_TRANSPORT_MAX_PENDING_REQUESTS</td>
                  <td>10000</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.max_requests_timeout</td>
                  <td>TB_TRANSPORT_MAX_REQUEST_TIMEOUT</td>
                  <td>10000</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.request_poll_interval</td>
                  <td>TB_TRANSPORT_REQUEST_POLL_INTERVAL_MS</td>
                  <td>25</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.request_auto_commit_interval</td>
                  <td>TB_TRANSPORT_REQUEST_AUTO_COMMIT_INTERVAL_MS</td>
                  <td>100</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.rule_engine.topic</td>
                  <td>TB_RULE_ENGINE_TOPIC</td>
                  <td>tb.rule-engine</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.notifications.topic</td>
                  <td>TB_TRANSPORT_NOTIFICATIONS_TOPIC</td>
                  <td>tb.transport.notifications</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.notifications.poll_interval</td>
                  <td>TB_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS</td>
                  <td>25</td>
                  <td></td>
              </tr>             
              <tr>
                  <td>kafka.notifications.auto_commit_interval</td>
                  <td>TB_TRANSPORT_NOTIFICATIONS_AUTO_COMMIT_INTERVAL_MS</td>
                  <td>100</td>
                  <td></td>
              </tr>                   
  </tbody>
</table>



#### CoAP Transport Settings


<table>
  <thead>
      <tr>
          <td><b>Property</b></td><td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>spring.main.web-environment</td>
          <td> </td>
          <td>false</td>
          <td></td>
      </tr>
      <tr>
          <td>spring.main.web-application-type</td>
          <td></td>
          <td>none</td>
          <td></td>
      </tr>    
      <tr>
          <td>transport.coap.bind_address</td>
          <td>COAP_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>CoAP bind address</td>
      </tr>
      <tr>
          <td>transport.coap.bind_port</td>
          <td>COAP_BIND_PORT</td>
          <td>5683</td>
          <td>CoAP bind port</td>
      </tr>
      <tr>
          <td>transport.coap.timeout</td>
          <td>COAP_TIMEOUT</td>
          <td>10000</td>
          <td>CoaP processing timeout in milliseconds</td>
      </tr>          
      <tr>
            <td>transport.sessions.inactivity_timeout</td>
            <td>TB_TRANSPORT_SESSIONS_INACTIVITY_TIMEOUT</td>
            <td>300000</td>
            <td></td>
        </tr>
        <tr>
            <td>transport.sessions.report_timeout</td>
            <td>TB_TRANSPORT_SESSIONS_REPORT_TIMEOUT</td>
            <td>30000</td>
            <td></td>
        </tr>
        <tr>
            <td>transport.rate_limits.enabled</td>
            <td>TB_TRANSPORT_RATE_LIMITS_ENABLED</td>
            <td>false</td>
            <td>Enabel/Disable rate limits on transport layer</td>
        </tr>
        <tr>
            <td>transport.rate_limits.tenant</td>
            <td>TB_TRANSPORT_RATE_LIMITS_TENANT</td>
            <td>1000:1,20000:60</td>
            <td>Tenant Rate limit policy x:y where x = number of messages per time unit, y = timeunit size in seconds</td>
        </tr>
        <tr>
            <td>transport.rate_limits.device</td>
            <td>TB_TRANSPORT_RATE_LIMITS_DEVICE</td>
            <td>10:1,300:60</td>
            <td>Device Rate limit policy x:y where x = number of messages per time unit, y = timeunit size in seconds</td>
        </tr>
        <tr>
            <td>transport.json.type_cast_enabled</td>
            <td>JSON_TYPE_CAST_ENABLED</td>
            <td>true</td>
            <td>Cast String data types to Numeric if possible when processing Telemetry/Attributes JSON</td>
        </tr>
        <tr>
                  <td>kafka.enabled</td>
                  <td></td>
                  <td>true</td>
                  <td>Enable/Disable Kafka service</td>
              </tr>
              <tr>
                  <td>kafka.bootstrap.servers</td>
                  <td>TB_KAFKA_SERVERS</td>
                  <td>localhost:9092</td>
                  <td>Kafka seed nodes</td>
              </tr>
              <tr>
                  <td>kafka.acks</td>
                  <td>TB_KAFKA_ACKS</td>
                  <td>all</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.retries</td>
                  <td>TB_KAFKA_RETRIES</td>
                  <td>1</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.batch.size</td>
                  <td>TB_KAFKA_BATCH_SIZE</td>
                  <td>16384</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.linger.ms</td>
                  <td>TB_KAFKA_LINGER_MS</td>
                  <td>1</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.buffer.memory</td>
                  <td>TB_BUFFER_MEMORY</td>
                  <td>33554432</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.requests_topic</td>
                  <td>TB_TRANSPORT_API_REQUEST_TOPIC</td>
                  <td>tb.transport.api.requests</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.responses_topic</td>
                  <td>TB_TRANSPORT_API_RESPONSE_TOPIC</td>
                  <td>tb.transport.api.responses</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.max_pending_requests</td>
                  <td>TB_TRANSPORT_MAX_PENDING_REQUESTS</td>
                  <td>10000</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.max_requests_timeout</td>
                  <td>TB_TRANSPORT_MAX_REQUEST_TIMEOUT</td>
                  <td>10000</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.request_poll_interval</td>
                  <td>TB_TRANSPORT_REQUEST_POLL_INTERVAL_MS</td>
                  <td>25</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.transport_api.request_auto_commit_interval</td>
                  <td>TB_TRANSPORT_REQUEST_AUTO_COMMIT_INTERVAL_MS</td>
                  <td>100</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.rule_engine.topic</td>
                  <td>TB_RULE_ENGINE_TOPIC</td>
                  <td>tb.rule-engine</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.notifications.topic</td>
                  <td>TB_TRANSPORT_NOTIFICATIONS_TOPIC</td>
                  <td>tb.transport.notifications</td>
                  <td></td>
              </tr>
              <tr>
                  <td>kafka.notifications.poll_interval</td>
                  <td>TB_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS</td>
                  <td>25</td>
                  <td></td>
              </tr>             
              <tr>
                  <td>kafka.notifications.auto_commit_interval</td>
                  <td>TB_TRANSPORT_NOTIFICATIONS_AUTO_COMMIT_INTERVAL_MS</td>
                  <td>100</td>
                  <td></td>
              </tr>                   
  </tbody>
</table>



#### Logging


#### thingsboard.conf

The configuration file for the startup script. Contains Java options and classpath related parameters.

#### actor-system.conf

Actor system configuration. Contains general actor system properties and configuration of [Akka dispatchers](http://doc.akka.io/docs/akka/current/java/dispatchers.html).
Allows performance tuning for specific use cases.

#### logback.xml

The configuration file for logging. Allows controlling the log level, the size of log files and the total size/volume of logs.

