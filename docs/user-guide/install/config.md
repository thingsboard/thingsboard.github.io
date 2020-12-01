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
Linux: /usr/share/thingsboard/conf
```

But if ThingsBoard is installed as a **microservice**, then each component of the platform will have separate configuration files.

In this guide all application properties will be divided by components where they are applied. **Note** that in case of **monolithic application**
all application properties are located in the single file - **thingsboard.yml** and all environment variables are in **thingsboard.conf**


#### ThingsBoard Core Settings

This is the main configuration file that contains configuration properties 
for transports (HTTP, MQTT, CoAP), database (Cassandra, PostgreSQL, TimescaleDB), clustering (Zookeeper and gRPC), etc.
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
          <td>server.ws.send_timeout</td>
          <td>TB_SERVER_WS_SEND_TIMEOUT</td>
          <td>5000</td>
          <td>Timeout for sending data to client WebSocket session in milliseconds</td>
      </tr>      
      <tr>
          <td>server.ws.limits.max_sessions_per_tenant</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_TENANT</td>
          <td>0</td>
          <td>Limit the amount of WebSocket sessions per each tenant available on each server. Zero value disables limitation.</td>
      </tr>      
      <tr>
          <td>server.ws.limits.max_sessions_per_customer</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_CUSTOMER</td>
          <td>0</td>
          <td>Limit the amount of WebSocket sessions per each customer available on each server. Zero value disables limitation.</td>
      </tr>      
      <tr>
          <td>server.ws.limits.max_sessions_per_regular_user</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_REGULAR_USER</td>
          <td>0</td>
          <td>Limit the amount of WebSocket sessions per each regular user available on each server. Zero value disables limitation.</td>
      </tr>      
      <tr>
          <td>server.ws.limits.max_sessions_per_public_user</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_PUBLIC_USER</td>
          <td>0</td>
          <td>Limit the amount of WebSocket sessions per each public user available on each server. Zero value disables limitation.</td>
      </tr>      
      <tr>
          <td>server.ws.limits.max_queue_per_ws_session</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_QUEUE_PER_WS_SESSION</td>
          <td>500</td>
          <td>Limit the size of pending message queue per each WebSocket session.</td>
      </tr>      
      <tr>
          <td>server.ws.limits.max_subscriptions_per_tenant</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_TENANT</td>
          <td>0</td>
          <td>Limit the amount of WebSocket subscriptions per each tenant available on each server. Zero value disables limitation.</td>
      </tr>      
      <tr>
          <td>server.ws.limits.max_subscriptions_per_customer</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_CUSTOMER</td>
          <td>0</td>
          <td>Limit the amount of WebSocket subscriptions per each customer available on each server. Zero value disables limitation.</td>
      </tr>      
      <tr>
          <td>server.ws.limits.max_subscriptions_per_regular_user</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_REGULAR_USER</td>
          <td>0</td>
          <td>Limit the amount of WebSocket subscriptions per each regular user available on each server. Zero value disables limitation.</td>
      </tr>      
      <tr>
          <td>server.ws.limits.max_subscriptions_per_public_user</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_PUBLIC_USER</td>
          <td>0</td>
          <td>Limit the amount of WebSocket subscriptions per each public user available on each server. Zero value disables limitation.</td>
      </tr>      
      <tr>
          <td>server.ws.limits.max_updates_per_session</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_UPDATES_PER_SESSION</td>
          <td>300:1,3000:60</td>
          <td>Limit the maximum data updates sent to WebSocket session for specified time intervals in seconds. Comma separated list of limit:seconds pairs.</td>
      </tr>      
      <tr>
          <td>server.rest.limits.tenant.enabled</td>
          <td>TB_SERVER_REST_LIMITS_TENANT_ENABLED</td>
          <td>false</td>
          <td>Enable/disable REST API rate limits per tenant.</td>
      </tr>      
      <tr>
          <td>server.rest.limits.tenant.configuration</td>
          <td>TB_SERVER_REST_LIMITS_TENANT_CONFIGURATION</td>
          <td>100:1,2000:60</td>
          <td>Limit the maximum REST API calls per tenant on each server for specified time intervals in seconds. Comma separated list of limit:seconds pairs.</td>
      </tr>      
      <tr>
          <td>server.rest.limits.customer.enabled</td>
          <td>TB_SERVER_REST_LIMITS_CUSTOMER_ENABLED</td>
          <td>false</td>
          <td>Enable/disable REST API rate limits per customer.</td>
      </tr>      
      <tr>
          <td>server.rest.limits.customer.configuration</td>
          <td>TB_SERVER_REST_LIMITS_CUSTOMER_CONFIGURATION</td>
          <td>50:1,1000:60</td>
          <td>Limit the maximum REST API calls per customer on each server for specified time intervals in seconds. Comma separated list of limit:seconds pairs.</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Zookeeper connection parameters</span></td>
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
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Cluster stats parameters</span></td>
      </tr>
      <tr>
          <td>cluster.stats.enabled</td>
          <td>TB_CLUSTER_STATS_ENABLED</td>
          <td>false</td>
          <td></td>
      </tr>
      <tr>
          <td>cluster.stats.print_interval_ms</td>
          <td>TB_CLUSTER_STATS_PRINT_INTERVAL_MS</td>
          <td>10000</td>
          <td></td>
      </tr>
      <tr>
          <td>plugins.scan_packages</td>
          <td>PLUGINS_SCAN_PACKAGES</td>
          <td>org.thingsboard.server.extensions, org.thingsboard.rule.engine</td>
          <td>Comma separated package list used during classpath scanning for plugins</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Security parameters</span></td>
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
          <td>security.user_login_case_sensitive</td>
          <td>SECURITY_USER_LOGIN_CASE_SENSITIVE</td>
          <td>true</td>
          <td>Enable/disable case-sensitive username login</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Dashboard parameters</span></td>
      </tr>  
      <tr>
          <td>dashboard.max_datapoints_limit</td>
          <td>DASHBOARD_MAX_DATAPOINTS_LIMIT</td>
          <td>50000</td>
          <td>Maximum allowed datapoints fetched by ThingsBoard UI widgets</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Common database parameters</span></td>
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
          <td>Database type for ThingsBoard entities (assets, devices, customers, etc.). Allowed values - <b>cassandra</b> OR <b>sql</b></td>
      </tr>
      <tr>
          <td>database.ts.type</td>
          <td>DATABASE_TS_TYPE</td>
          <td>sql</td>
          <td>Database type for ThingsBoard timeseries data. 
          Allowed values - <b>cassandra</b>, <b>sql</b> OR <b>timescale</b>. For hybrid mode or for using PostgreSQL + TimescaleDB extension)
          this value should be <b>cassandra</b> or <b>timescale</b> in accordance.
          Please, note that in these cases the database type for ThingsBoard entities should be <b>sql</b></td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Cassandra database parameters</span></td>
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
          <td>Specify partitioning size for timestamp key-value storage. Allowed values <b>MINUTES</b>, <b>HOURS</b>, <b>DAYS</b>, <b>MONTHS</b>, <b>INDEFINITE</b>. In case of <b>INDEFINITE</b> - timeseries data partitioning is disabled</td>
      </tr>
      <tr>
          <td>cassandra.query.ts_key_value_ttl</td>
          <td>TS_KV_TTL</td>
          <td>0</td>
          <td>Timeseries Time To Live (in seconds) for Cassandra Record. 0 - record is never expired.</td>
      </tr>
      <tr>
          <td>cassandra.query.events_ttl</td>
          <td>TS_EVENTS_TTL</td>
          <td>0</td>
          <td>Events(LC_EVENT, STATS) Time To Live (in seconds) for Cassandra Record. 0 - record is never expired.</td>
      </tr>
      <tr>
          <td>cassandra.query.debug_events_ttl</td>
          <td>DEBUG_EVENTS_TTL</td>
          <td>604800</td>
          <td>Debug Events(DEBUG_CONVERTER, DEBUG_INTEGRATION, DEBUG_RULE_NODE, DEBUG_RULE_CHAIN) Time To Live (in seconds) for Cassandra Record. 0 - record is never expired.</td>
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
          <td>Max time in milliseconds query waits for execution</td>
      </tr>
      <tr>
          <td>cassandra.query.dispatcher_threads</td>
          <td>CASSANDRA_QUERY_DISPATCHER_THREADS</td>
          <td>2</td>
          <td>Amount of threads to dispatch cassandra queries</td>
      </tr>
      <tr>
          <td>cassandra.query.callback_threads</td>
          <td>CASSANDRA_QUERY_CALLBACK_THREADS</td>
          <td>4</td>
          <td>Amount of threads used to invoke callbacks for queries results</td>
      </tr>
      <tr>
          <td>cassandra.query.poll_ms</td>
          <td>CASSANDRA_QUERY_POLL_MS</td>
          <td>50</td>
          <td>Cassandra query queue polling interval in milliseconds</td>
      </tr>
      <tr>
          <td>cassandra.query.rate_limit_print_interval_ms</td>
          <td>CASSANDRA_QUERY_RATE_LIMIT_PRINT_MS</td>
          <td>10000</td>
          <td>Interval in milliseconds for printing Cassandra query queue statistic</td>
      </tr>
      <tr>
          <td>cassandra.query.tenant_rate_limits.enabled</td>
          <td>CASSANDRA_QUERY_TENANT_RATE_LIMITS_ENABLED</td>
          <td>false</td>
          <td>Enable/disable cassandra query rate limits per tenant</td>
      </tr>
      <tr>
          <td>cassandra.query.tenant_rate_limits.configuration</td>
          <td>CASSANDRA_QUERY_TENANT_RATE_LIMITS_CONFIGURATION</td>
          <td>1000:1,30000:60</td>
          <td>Limit the maximum Cassandra queries per tenant on each server for specified time intervals in seconds. Comma separated list of limit:seconds pairs.</td>
      </tr>
      <tr>
          <td>cassandra.query.tenant_rate_limits.print_tenant_names</td>
          <td>CASSANDRA_QUERY_TENANT_RATE_LIMITS_PRINT_TENANT_NAMES</td>
          <td>false</td>
          <td>Whether to print rate-limited tenant names when printing Cassandra query queue statistic</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Common SQL database parameters</span></td>
      </tr>  
      <tr>
          <td>sql.attributes.batch_size</td>
          <td>SQL_ATTRIBUTES_BATCH_SIZE</td>
          <td>10000</td>
          <td>Batch size for persisting attribute updates</td>
      </tr>
      <tr>
          <td>sql.attributes.batch_max_delay</td>
          <td>SQL_ATTRIBUTES_BATCH_MAX_DELAY_MS</td>
          <td>100</td>
          <td>Max timeout for attributes entries queue polling. Value set in milliseconds.</td>
      </tr>
      <tr>
          <td>sql.attributes.stats_print_interval_ms</td>
          <td>SQL_ATTRIBUTES_BATCH_STATS_PRINT_MS</td>
          <td>10000</td>
          <td>Interval in milliseconds for printing attributes updates statistic</td>
      </tr>
      <tr>
          <td>sql.ts.batch_size</td>
          <td>SQL_TS_BATCH_SIZE</td>
          <td>10000</td>
          <td>Batch size for persisting timeseries inserts</td>
      </tr>
      <tr>
          <td>sql.ts.batch_max_delay</td>
          <td>SQL_TS_BATCH_MAX_DELAY_MS</td>
          <td>100</td>
          <td>Max timeout for time-series entries queue polling. Value set in milliseconds.</td>
      </tr>
      <tr>
          <td>sql.ts.stats_print_interval_ms</td>
          <td>SQL_TS_BATCH_STATS_PRINT_MS</td>
          <td>10000</td>
          <td>Interval in milliseconds for printing timeseries insert statistic</td>
      </tr>
      <tr>
        <td>sql.ts_latest.batch_size</td>
        <td>SQL_TS_LATEST_BATCH_SIZE</td>
        <td>10000</td>
        <td>Batch size for persisting latest telemetry updates</td>
      </tr>
      <tr>
        <td>sql.ts_latest.batch_max_delay</td>
        <td>SQL_TS_LATEST_BATCH_MAX_DELAY_MS</td>
        <td>100</td>
        <td>Max timeout for latest telemetry entries queue polling. The value set in milliseconds.</td>
      </tr>
      <tr>
          <td>sql.ts_latest.stats_print_interval_ms</td>
          <td>SQL_TS_LATEST_BATCH_STATS_PRINT_MS</td>
          <td>10000</td>
          <td>Interval in milliseconds for printing latest telemetry updates statistic</td>
      </tr>
      <tr>
          <td>sql.remove_null_chars</td>
          <td>SQL_REMOVE_NULL_CHARS</td>
          <td>true</td>
          <td>Parameter to specify whether to remove null characters from strValue of attributes and timeseries before insert execution</td>
      </tr>
      <tr>
          <td>sql.ttl.ts.enabled</td>
          <td>SQL_TTL_TS_ENABLED</td>
          <td>true</td>
          <td>The parameter to specify whether to use TTL (Time To Live) for timeseries records.</td>
      </tr>
      <tr>
          <td>sql.ttl.ts.execution_interval_ms</td>
          <td>SQL_TTL_TS_EXECUTION_INTERVAL</td>
          <td>86400000</td>
          <td>The parameter to specify the period of execution TTL task for timeseries records. Value set in milliseconds. Default value corresponds to one day.</td>
      </tr>
      <tr>
          <td>sql.ttl.ts.ts_key_value_ttl</td>
          <td>SQL_TTL_TS_TS_KEY_VALUE_TTL</td>
          <td>0</td>
          <td>The parameter to specify system TTL(Time To Live) value for timeseries records. Value set in seconds. 0 - records are never expired. System TTL value can be overwritten for a particular Tenant, or parent Customer entity by setting the server-side attribute TTL to the corresponding Tenant or parent Customer entity. 
              Please, note that the value should be set as long value, otherwise the TTL will be used from the higher level(Tenant or System).</td>
      </tr>
      <tr>
          <td>sql.ttl.events.enabled</td>
          <td>SQL_TTL_EVENTS_ENABLED</td>
          <td>true</td>
          <td>The parameter to specify whether to use TTL (Time To Live) for events records.</td>
      </tr>
      <tr>
        <td>sql.ttl.events.execution_interval_ms</td>
        <td>SQL_TTL_EVENTS_EXECUTION_INTERVAL</td>
        <td>86400000</td>
        <td>The parameter to specify the period of execution TTL task for events records. Value set in milliseconds. Default value corresponds to one day.</td>
      </tr>
      <tr>
        <td>sql.ttl.events.events_ttl</td>
        <td>SQL_TTL_EVENTS_EVENTS_TTL</td>
        <td>0</td>
            <td>The parameter to specify TTL(Time To Live) value for Events(LC_EVENT, STATS) records. Value set in seconds. 0 - records are never expired.</td>
      </tr>
      <tr>
         <td>sql.ttl.events.debug_events_ttl</td>
         <td>SQL_TTL_EVENTS_DEBUG_EVENTS_TTL</td>
         <td>604800</td>
         <td>The parameter to specify TTL(Time To Live) value for Debug Events(DEBUG_CONVERTER, DEBUG_INTEGRATION, DEBUG_RULE_NODE, DEBUG_RULE_CHAIN) records. Value set in seconds. 0 - records are never expired. Default value corresponds to one week.</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">PostgreSQL database parameters</span></td>
      </tr>  
      <tr>
          <td>sql.postgres.ts_key_value_partitioning</td>
          <td>SQL_POSTGRES_TS_KV_PARTITIONING</td>
          <td>MONTHS</td>
          <td>Parameter to specify partitioning size for timestamp key-value storage. Allowed values <b>DAYS</b>, <b>MONTHS</b>, <b>YEARS</b>, <b>INDEFINITE</b>. In case of <b>INDEFINITE</b> - timeseries data partitioning is disabled. Please, note that this value can be set only once.</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">TimescaleDB database parameters</span></td>
      </tr>  
      <tr>
           <td>sql.timescale.chunk_time_interval</td>
          <td>SQL_TIMESCALE_CHUNK_TIME_INTERVAL</td>
          <td>604800000</td>
          <td>The parameter to specify the interval size for data chunks storage. Value set in milliseconds. Default value corresponds to one week. Please, note that this value can be set only once.</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Actor system parameters</span></td>
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
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Cache parameters</span></td>
      </tr>  
      <tr>
          <td>cache.type</td>
          <td>CACHE_TYPE</td>
          <td>caffeine</td>
          <td>Cache provider. <b>caffeine</b> for stand alone installations and <b>redis</b> for clustered installations</td>
      </tr>
      <tr>
          <td>caffeine.specs.relations.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>Relations</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.relations.maxSize</td>
          <td></td>
          <td>100000</td>
          <td><b>Relations</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.deviceCredentials.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>deviceCredentials</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.deviceCredentials.maxSize</td>
          <td></td>
          <td>100000</td>
          <td><b>deviceCredentials</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.devices.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>devices</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.devices.maxSize</td>
          <td></td>
          <td>100000</td>
          <td><b>devices</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.sessions.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>sessions</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.sessions.maxSize</td>
          <td></td>
          <td>100000</td>
          <td><b>sessions</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.assets.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>assets</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.assets.maxSize</td>
          <td></td>
          <td>100000</td>
          <td><b>assets</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.entityViews.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>entityViews</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.entityViews.maxSize</td>
          <td></td>
          <td>100000</td>
          <td><b>entityViews</b> cache max size</td>
      </tr>
      <tr>
          <td>redis.connection.type</td>
          <td></td>
          <td>standalone</td>
          <td>Redis connection type - <b>standalone</b> or <b>cluster</b></td>
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
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Check new version updates parameters</span></td>
      </tr>  
      <tr>
          <td>updates.enabled</td>
          <td>UPDATES_ENABLED</td>
          <td>true</td>
          <td>Enable/disable thingsboard updates checking</td>
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
          <td>spring.resources.chain.gzipped</td>
          <td></td>
          <td>true</td>
          <td>Enable/disable gzip compression of static resources</td>
      </tr>
      <tr>
          <td>spring.resources.chain.strategy.content.enabled</td>
          <td></td>
          <td>true</td>
          <td></td>
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
          <td>spring.datasource.hikari.maximumPoolSize</td>
          <td>SPRING_DATASOURCE_MAXIMUM_POOL_SIZE</td>
          <td>5</td>
          <td>This property allows the number of connections in the pool to increase as demand increases. 
                          At the same time, the property ensures that the pool doesn't grow to the point of exhausting a system's resources,
                           which ultimately affects an application's performance and availability.</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Audit log parameters</span></td>
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
          <td>Device logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."asset"</td>
          <td>AUDIT_LOG_MASK_ASSET</td>
          <td>W</td>
          <td>Asset logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."dashboard"</td>
          <td>AUDIT_LOG_MASK_DASHBOARD</td>
          <td>W</td>
          <td>Dashboard logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."customer"</td>
          <td>AUDIT_LOG_MASK_CUSTOMER</td>
          <td>W</td>
          <td>Customer logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."user"</td>
          <td>AUDIT_LOG_MASK_USER</td>
          <td>W</td>
          <td>User logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."rule_chain"</td>
          <td>AUDIT_LOG_MASK_RULE_CHAIN</td>
          <td>W</td>
          <td>Rule Chain logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."alarm"</td>
          <td>AUDIT_LOG_MASK_ALARM</td>
          <td>W</td>
          <td>Alarm logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.logging_level.mask."entity_view"</td>
          <td>AUDIT_LOG_MASK_ENTITY_VIEW</td>
          <td>W</td>
          <td>Entity View logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log read and write operations)</td>
      </tr>
      <tr>
          <td>audit_log.sink.type</td>
          <td>AUDIT_LOG_SINK_TYPE</td>
          <td>none</td>
          <td>Type of external sink system to forward audit logs records. Possible options: none, elasticsearch</td>
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
          <td>Host of external sink system</td>
      </tr>
      <tr>
          <td>audit_log.sink.port</td>
          <td>AUDIT_LOG_SINK_PORT</td>
          <td>9200</td>
          <td>Port of external sink system</td>
      </tr>
      <tr>
          <td>audit_log.sink.user_name</td>
          <td>AUDIT_LOG_SINK_USER_NAME</td>
          <td></td>
          <td>Username used to access external sink system</td>
      </tr>
      <tr>
          <td>audit_log.sink.password</td>
          <td>AUDIT_LOG_SINK_PASSWORD</td>
          <td></td>
          <td>Password used to access external sink system</td>
      </tr>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Device connectivity state parameters</span></td>
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
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">JavaScript evaluator parameters</span></td>
      </tr>  
      <tr>
          <td>js.evaluator</td>
          <td>JS_EVALUATOR</td>
          <td>local</td>
          <td>Javascript evaluator type - <b>local</b> (Built-in JVM JavaScript environment properties) or <b>remote</b> (Remote JavaScript environment )</td>
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
          <td>js.local.max_requests_timeout</td>
          <td>LOCAL_JS_MAX_REQUEST_TIMEOUT</td>
          <td>0</td>
          <td>JS Eval max request timeout. 0 - no timeout</td>
      </tr>      
      <tr>
          <td>js.local.max_black_list_duration_sec</td>
          <td>max_black_list_duration_sec</td>
          <td>60</td>
          <td>Maximum time in seconds for black listed function to stay in the list</td>
      </tr>            
      <tr>
          <td>js.remote.max_errors</td>
          <td>REMOTE_JS_SANDBOX_MAX_ERRORS</td>
          <td>3</td>
          <td>Maximum allowed JavaScript execution errors before JavaScript will be blacklisted</td>
      </tr>
      <tr>
          <td>js.remote.max_black_list_duration_sec</td>
          <td>max_black_list_duration_sec</td>
          <td>60</td>
          <td>Maximum time in seconds for black listed function to stay in the list</td>
      </tr> 
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Transport parameters</span></td>
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
          <td></td>
      </tr>
      <tr>
          <td>transport.rate_limits.tenant</td>
          <td>TB_TRANSPORT_RATE_LIMITS_TENANT</td>
          <td>1000:1,20000:60</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.rate_limits.device</td>
          <td>TB_TRANSPORT_RATE_LIMITS_DEVICE</td>
          <td>10:1,300:60</td>
          <td></td>
      </tr>            
      <tr>
          <td>transport.json.type_cast_enabled</td>
          <td>JSON_TYPE_CAST_ENABLED</td>
          <td>true</td>
          <td>Cast String data types to Numeric if possible when processing Telemetry/Attributes JSON</td>
      </tr>            
      <tr>
          <td>transport.json.max_string_value_length</td>
          <td>JSON_MAX_STRING_VALUE_LENGTH</td>
          <td>0</td>
          <td>Maximum allowed string value length when processing Telemetry/Attributes JSON (0 value disables string value length check)</td>
      </tr>
      <tr>
          <td>transport.client_side_rpc.timeout</td>
          <td>CLIENT_SIDE_RPC_TIMEOUT</td>
          <td>60000</td>
          <td></td>
      </tr>     
      <tr>
          <td>transport.http.enabled</td>
          <td>HTTP_ENABLED</td>
          <td>true</td>
          <td>Enable\Disable local HTTP transport</td>
      </tr>
      <tr>
          <td>transport.http.request_timeout</td>
          <td>HTTP_REQUEST_TIMEOUT</td>
          <td>60000</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.mqtt.enabled</td>
          <td>MQTT_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable local MQTT transport</td>
      </tr>
      <tr>
          <td>transport.mqtt.bind_address</td>
          <td>MQTT_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.mqtt.bind_port</td>
          <td>MQTT_BIND_PORT</td>
          <td>1883</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.mqtt.timeout</td>
          <td>MQTT_TIMEOUT</td>
          <td>10000</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.mqtt.netty.leak_detector_level</td>
          <td>NETTY_LEAK_DETECTOR_LVL</td>
          <td>DISABLED</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.mqtt.netty.boss_group_thread_count</td>
          <td>NETTY_BOSS_GROUP_THREADS</td>
          <td>1</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.mqtt.netty.worker_group_thread_count</td>
          <td>NETTY_WORKER_GROUP_THREADS</td>
          <td>12</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.mqtt.netty.max_payload_size</td>
          <td>NETTY_MAX_PAYLOAD_SIZE</td>
          <td>65536</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.mqtt.netty.so_keep_alive</td>
          <td>NETTY_SO_KEEPALIVE</td>
          <td>false</td>
          <td></td>
      </tr>      
      <tr>
          <td>transport.mqtt.ssl.enabled</td>
          <td>MQTT_SSL_ENABLED</td>
          <td>false</td>
          <td>Enable/disable MQTTS support</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.protocol</td>
          <td>MQTT_SSL_PROTOCOL</td>
          <td>TLSv1.2</td>
          <td>SSL protocol</td>
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
          <td>transport.coap.enabled</td>
          <td>COAP_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable local CoAP transport</td>
      </tr>
      <tr>
          <td>transport.coap.bind_address</td>
          <td>COAP_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.coap.bind_port</td>
          <td>COAP_BIND_PORT</td>
          <td>5683</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.coap.timeout</td>
          <td>COAP_TIMEOUT</td>
          <td>10000</td>
          <td></td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Queue parameters</span></td>
      </tr>  
      <tr>
          <td>queue.type</td>
          <td>TB_QUEUE_TYPE</td>
          <td>in-memory</td>
          <td>Queue type. Can be: in-memory or kafka (Apache Kafka) or aws-sqs (AWS SQS) or pubsub (PubSub) or service-bus (Azure Service Bus) or rabbitmq (RabbitMQ)</td>
      </tr>
      <tr>
          <td>queue.kafka.bootstrap.servers</td>
          <td>TB_KAFKA_SERVERS</td>
          <td>localhost:9092</td>
          <td>List of kafka bootstrap servers used to establish connection</td>
      </tr>
      <tr>
          <td>queue.kafka.acks</td>
          <td>TB_KAFKA_ACKS</td>
          <td>all</td>
          <td>The number of acknowledgments the producer requires the leader to have received before considering a request complete</td>
      </tr>
      <tr>
          <td>queue.kafka.retries</td>
          <td>TB_KAFKA_RETRIES</td>
          <td>1</td>
          <td>Setting a value greater than zero will cause the client to resend any record whose send fails with a potentially transient error</td>
      </tr>
      <tr>
          <td>queue.kafka.batch.size</td>
          <td>TB_KAFKA_BATCH_SIZE</td>
          <td>16384</td>
          <td>The producer will attempt to batch records together into fewer requests whenever multiple records are being sent to the same partition</td>
      </tr>
      <tr>
          <td>queue.kafka.linger.ms</td>
          <td>TB_KAFKA_LINGER_MS</td>
          <td>1</td>
          <td>The producer groups together any records that arrive in between request transmissions into a single batched request</td>
      </tr>
      <tr>
          <td>queue.kafka.buffer.memory</td>
          <td>TB_BUFFER_MEMORY</td>
          <td>33554432</td>
          <td>The total bytes of memory the producer can use to buffer records waiting to be sent to the server</td>
      </tr>
      <tr>
          <td>queue.kafka.replication_factor</td>
          <td>TB_QUEUE_KAFKA_REPLICATION_FACTOR</td>
          <td>1</td>
          <td>Replication factor defines the number of copies of a topic in a Kafka cluster</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.rule-engine</td>
          <td>TB_QUEUE_KAFKA_RE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Rule Engine topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.core</td>
          <td>TB_QUEUE_KAFKA_CORE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Core topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.transport-api</td>
          <td>TB_QUEUE_KAFKA_TA_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Transport Api topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.notifications</td>
          <td>TB_QUEUE_KAFKA_NOTIFICATIONS_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Notifications topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.js-executor</td>
          <td>TB_QUEUE_KAFKA_JE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Js Executor topics</td>
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
          <td>AWS SQS properties for Rule Engine queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.core</td>
          <td>TB_QUEUE_AWS_SQS_CORE_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Core queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.transport-api</td>
          <td>TB_QUEUE_AWS_SQS_TA_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Transport Api queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.notifications</td>
          <td>TB_QUEUE_AWS_SQS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Notifications queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.js-executor</td>
          <td>TB_QUEUE_AWS_SQS_JE_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Transport Api queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
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
          <td>Pub/Sub max message size. In bytes</td>
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
          <td>queue.rabbitmq.username</td>
          <td>TB_QUEUE_RABBIT_MQ_USERNAME</td>
          <td>YOUR_USERNAME</td>
          <td>User name for RabbitMQ user account</td>
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
          <td>Network connection between clients and RabbitMQ nodes can fail. RabbitMQ Java client supports automatic recovery of connections and topology (queues, exchanges, bindings, and consumers).</td>
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
          <td>RabbitMQ has a timeout for connection handshake. When clients run in heavily constrained environments, it may be necessary to increase the timeout.</td>
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
          <td>Name of hash function used for consistent hash ring in Cluster Mode. See architecture docs for more details.</td>
      </tr>
      <tr>
          <td>queue.partitions.virtual_nodes_size</td>
          <td>TB_QUEUE_PARTITIONS_VIRTUAL_NODES_SIZE</td>
          <td>16</td>
          <td>Amount of virtual nodes in consistent hash ring.</td>
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
          <td>queue.transport_api.request_timeout</td>
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
          <td>60000</td>
          <td>Timeout for processing a message pack by Core microservices</td>
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
          <td>Queue topic used for producing JavaScript evaluation requests</td>
      </tr>
      <tr>
          <td>queue.js.response_topic_prefix</td>
          <td>REMOTE_JS_EVAL_RESPONSE_TOPIC</td>
          <td>js_eval.responses</td>
          <td>Prefix queue topic used to consume JavaScript evaluation responses</td>
      </tr>
      <tr>
          <td>queue.js.max_pending_requests</td>
          <td>REMOTE_JS_MAX_PENDING_REQUESTS</td>
          <td>10000</td>
          <td>Maximum pending JavaScript evaluation requests</td>
      </tr>
      <tr>
          <td>queue.js.max_eval_requests_timeout</td>
          <td>REMOTE_JS_MAX_EVAL_REQUEST_TIMEOUT</td>
          <td>60000</td>
          <td>Maximum timeout in milliseconds for JavaScript evaluation</td>
      </tr>
      <tr>
          <td>queue.js.max_requests_timeout</td>
          <td>REMOTE_JS_MAX_REQUEST_TIMEOUT</td>
          <td>10000</td>
          <td>Maximum timeout in milliseconds for JavaScript execution</td>
      </tr>
      <tr>
          <td>queue.js.response_poll_interval</td>
          <td>REMOTE_JS_RESPONSE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>JavaScript evaluation responses poll interval</td>
      </tr>
      <tr>
          <td>queue.js.response_auto_commit_interval</td>
          <td>REMOTE_JS_RESPONSE_AUTO_COMMIT_INTERVAL_MS</td>
          <td>100</td>
          <td>JavaScript evaluation responses auto commit interval</td>
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
          <td>60000</td>
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
          <td>10000</td>
          <td>Statistics printing interval for Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.name</td>
          <td>TB_QUEUE_RE_MAIN_QUEUE_NAME</td>
          <td>Main</td>
          <td>Rule Engine Main queue (mustn't be renamed)</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.topic</td>
          <td>TB_QUEUE_RE_MAIN_TOPIC</td>
          <td>tb_rule_engine.main</td>
          <td>Topic for Main queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.poll-interval</td>
          <td>TB_QUEUE_RE_MAIN_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll messages from Main queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.partitions</td>
          <td>TB_QUEUE_RE_MAIN_PARTITIONS</td>
          <td>10</td>
          <td>Main queue amount of partitions used by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.pack-processing-timeout</td>
          <td>TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS</td>
          <td>60000</td>
          <td>Timeout for processing a message pack from Main queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.type</td>
          <td>TB_QUEUE_RE_MAIN_SUBMIT_STRATEGY_TYPE</td>
          <td>BURST</td>
          <td>Main queue submit strategy. Can be: BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_WITHIN_TENANT, SEQUENTIAL</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.batch-size</td>
          <td>TB_QUEUE_RE_MAIN_SUBMIT_STRATEGY_BATCH_SIZE</td>
          <td>1000</td>
          <td>Maximum number of messages in batch. Only for submit strategy type: BATCH</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.type</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_TYPE</td>
          <td>SKIP_ALL_FAILURES</td>
          <td>Main queue processing strategy. Can be: SKIP_ALL_FAILURES, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.retries</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_RETRIES</td>
          <td>3</td>
          <td>Number of retries, 0 is unlimited. Use for RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT processing strategies</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.failure-percentage</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
          <td>0</td>
          <td>Skip retry if failures or timeouts are less then X percentage of messages</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.pause-between-retries</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_RETRY_PAUSE</td>
          <td>3</td>
          <td>Time in seconds to wait in consumer thread before retries</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.max-pause-between-retries</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
          <td>3</td>
          <td>Max allowed time in seconds for pause between retries</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.name</td>
          <td>TB_QUEUE_RE_HP_QUEUE_NAME</td>
          <td>HighPriority</td>
          <td>Rule Engine HighPriority queue</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.topic</td>
          <td>TB_QUEUE_RE_HP_TOPIC</td>
          <td>tb_rule_engine.hp</td>
          <td>Topic for HighPriority queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.poll-interval</td>
          <td>TB_QUEUE_RE_HP_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll messages from HighPriority queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.partitions</td>
          <td>TB_QUEUE_RE_HP_PARTITIONS</td>
          <td>10</td>
          <td>HighPriority queue amount of partitions used by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.pack-processing-timeout</td>
          <td>TB_QUEUE_RE_HP_PACK_PROCESSING_TIMEOUT_MS</td>
          <td>60000</td>
          <td>Timeout for processing a message pack from HighPriority queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.type</td>
          <td>TB_QUEUE_RE_HP_SUBMIT_STRATEGY_TYPE</td>
          <td>BURST</td>
          <td>HighPriority queue submit strategy. Can be: BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_WITHIN_TENANT, SEQUENTIAL</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.batch-size</td>
          <td>TB_QUEUE_RE_HP_SUBMIT_STRATEGY_BATCH_SIZE</td>
          <td>100</td>
          <td>Maximum number of messages in batch. Only for submit strategy type: BATCH</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.type</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_TYPE</td>
          <td>RETRY_FAILED_AND_TIMED_OUT</td>
          <td>SKIP_ALL_FAILURES, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.retries</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_RETRIES</td>
          <td>0</td>
          <td>Number of retries, 0 is unlimited. Use for RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT processing strategies</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.failure-percentage</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
          <td>0</td>
          <td>Skip retry if failures or timeouts are less then X percentage of messages</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.pause-between-retries</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_RETRY_PAUSE</td>
          <td>5</td>
          <td>Time in seconds to wait in consumer thread before retries</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.max-pause-between-retries</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
          <td>5</td>
          <td>Max allowed time in seconds for pause between retries</td>
      </tr>
      <tr>
            <td>queue.rule-engine.queues.name</td>
            <td>TB_QUEUE_RE_SQ_QUEUE_NAME</td>
            <td>SequentialByOriginator</td>
            <td>Rule Engine SequentialByOriginator queue</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.topic</td>
            <td>TB_QUEUE_RE_SQ_TOPIC</td>
            <td>tb_rule_engine.sq</td>
            <td>Topic for SequentialByOriginator queue by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.poll-interval</td>
            <td>TB_QUEUE_RE_SQ_POLL_INTERVAL_MS</td>
            <td>25</td>
            <td>Interval in milliseconds to poll messages from SequentialByOriginator queue by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.partitions</td>
            <td>TB_QUEUE_RE_SQ_PARTITIONS</td>
            <td>10</td>
            <td>SequentialByOriginator queue amount of partitions used by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.pack-processing-timeout</td>
            <td>TB_QUEUE_RE_SQ_PACK_PROCESSING_TIMEOUT_MS</td>
            <td>60000</td>
            <td>Timeout for processing a message pack from SequentialByOriginator queue by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.submit-strategy.type</td>
            <td>TB_QUEUE_RE_SQ_SUBMIT_STRATEGY_TYPE</td>
            <td>SEQUENTIAL_BY_ORIGINATOR</td>
            <td>SequentialByOriginator queue submit strategy. Can be: BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_WITHIN_TENANT, SEQUENTIAL</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.submit-strategy.batch-size</td>
            <td>TB_QUEUE_RE_SQ_SUBMIT_STRATEGY_BATCH_SIZE</td>
            <td>100</td>
            <td>Maximum number of messages in batch. Only for submit strategy type: BATCH</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.type</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_TYPE</td>
            <td>RETRY_FAILED_AND_TIMED_OUT</td>
            <td>SKIP_ALL_FAILURES, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.retries</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_RETRIES</td>
            <td>3</td>
            <td>Number of retries, 0 is unlimited. Use for RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT processing strategies</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.failure-percentage</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
            <td>0</td>
            <td>Skip retry if failures or timeouts are less then X percentage of messages</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.pause-between-retries</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_RETRY_PAUSE</td>
            <td>5</td>
            <td>Time in seconds to wait in consumer thread before retries</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.max-pause-between-retries</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
            <td>5</td>
            <td>Max allowed time in seconds for pause between retries</td>
        </tr>
        <tr>
           <td>queue.transport.notifications_topic</td>
           <td>TB_QUEUE_TRANSPORT_NOTIFICATIONS_TOPIC</td>
           <td>tb_transport.notifications</td>
           <td>Transport nottifications topic</td>
       </tr>
       <tr>
           <td>queue.transport.poll_interval</td>
           <td>TB_QUEUE_CORE_POLL_INTERVAL_MS</td>
           <td>25</td>
           <td>Interval in milliseconds to poll messages by Core microservices</td>
       </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">ThingsBoard service parameters</span></td>
      </tr>
       <tr>
           <td>service.type.</td>
           <td>TB_SERVICE_TYPE</td>
           <td>monolith</td>
           <td>Tb Queue service type. Can be: monolith or tb-core or tb-rule-engine</td>
       </tr>
       <tr>
           <td>service.id.</td>
           <td>TB_SERVICE_ID</td>
           <td></td>
           <td>Unique id for this service (autogenerated if empty)</td>
       </tr>     
       <tr>
           <td>service.tenant_id.</td>
           <td>TB_SERVICE_TENANT_ID</td>
           <td></td>
           <td>Empty or specific tenant id</td>
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
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Zookeeper connection parameters</span></td>
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
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">MQTT server parameters</span></td>
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
          <td>transport.json.max_string_value_length</td>
          <td>JSON_MAX_STRING_VALUE_LENGTH</td>
          <td>0</td>
          <td>Maximum allowed string value length when processing Telemetry/Attributes JSON (0 value disables string value length check)</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Queue parameters</span></td>
      </tr>  
      <tr>
          <td>queue.type</td>
          <td>TB_QUEUE_TYPE</td>
          <td>kafka</td>
          <td>Queue type. Can be: kafka (Apache Kafka) or aws-sqs (AWS SQS) or pubsub (PubSub) or service-bus (Azure Service Bus) or rabbitmq (RabbitMQ)</td>
      </tr>
      <tr>
          <td>queue.kafka.bootstrap.servers</td>
          <td>TB_KAFKA_SERVERS</td>
          <td>localhost:9092</td>
          <td>List of kafka bootstrap servers used to establish connection</td>
      </tr>
      <tr>
          <td>queue.kafka.acks</td>
          <td>TB_KAFKA_ACKS</td>
          <td>all</td>
          <td>The number of acknowledgments the producer requires the leader to have received before considering a request complete</td>
      </tr>
      <tr>
          <td>queue.kafka.retries</td>
          <td>TB_KAFKA_RETRIES</td>
          <td>1</td>
          <td>Setting a value greater than zero will cause the client to resend any record whose send fails with a potentially transient error</td>
      </tr>
      <tr>
          <td>queue.kafka.batch.size</td>
          <td>TB_KAFKA_BATCH_SIZE</td>
          <td>16384</td>
          <td>The producer will attempt to batch records together into fewer requests whenever multiple records are being sent to the same partition</td>
      </tr>
      <tr>
          <td>queue.kafka.linger.ms</td>
          <td>TB_KAFKA_LINGER_MS</td>
          <td>1</td>
          <td>The producer groups together any records that arrive in between request transmissions into a single batched request</td>
      </tr>
      <tr>
          <td>queue.kafka.buffer.memory</td>
          <td>TB_BUFFER_MEMORY</td>
          <td>33554432</td>
          <td>The total bytes of memory the producer can use to buffer records waiting to be sent to the server</td>
      </tr>
      <tr>
          <td>queue.kafka.replication_factor</td>
          <td>TB_QUEUE_KAFKA_REPLICATION_FACTOR</td>
          <td>1</td>
          <td>Replication factor defines the number of copies of a topic in a Kafka cluster</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.rule-engine</td>
          <td>TB_QUEUE_KAFKA_RE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Rule Engine topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.core</td>
          <td>TB_QUEUE_KAFKA_CORE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Core topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.transport-api</td>
          <td>TB_QUEUE_KAFKA_TA_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Transport Api topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.notifications</td>
          <td>TB_QUEUE_KAFKA_NOTIFICATIONS_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Notifications topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.js-executor</td>
          <td>TB_QUEUE_KAFKA_JE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Js Executor topics</td>
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
          <td>AWS SQS properties for Rule Engine queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.core</td>
          <td>TB_QUEUE_AWS_SQS_CORE_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Core queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.transport-api</td>
          <td>TB_QUEUE_AWS_SQS_TA_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Transport Api queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.notifications</td>
          <td>TB_QUEUE_AWS_SQS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Notifications queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.js-executor</td>
          <td>TB_QUEUE_AWS_SQS_JE_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Transport Api queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
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
          <td>Pub/Sub max message size. In bytes</td>
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
          <td>queue.rabbitmq.username</td>
          <td>TB_QUEUE_RABBIT_MQ_USERNAME</td>
          <td>YOUR_USERNAME</td>
          <td>User name for RabbitMQ user account</td>
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
          <td>Network connection between clients and RabbitMQ nodes can fail. RabbitMQ Java client supports automatic recovery of connections and topology (queues, exchanges, bindings, and consumers).</td>
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
          <td>RabbitMQ has a timeout for connection handshake. When clients run in heavily constrained environments, it may be necessary to increase the timeout.</td>
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
          <td>Name of hash function used for consistent hash ring in Cluster Mode. See architecture docs for more details.</td>
      </tr>
      <tr>
          <td>queue.partitions.virtual_nodes_size</td>
          <td>TB_QUEUE_PARTITIONS_VIRTUAL_NODES_SIZE</td>
          <td>16</td>
          <td>Amount of virtual nodes in consistent hash ring.</td>
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
          <td>queue.transport_api.request_timeout</td>
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
          <td>60000</td>
          <td>Timeout for processing a message pack by Core microservices</td>
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
          <td>Queue topic used for producing JavaScript evaluation requests</td>
      </tr>
      <tr>
          <td>queue.js.response_topic_prefix</td>
          <td>REMOTE_JS_EVAL_RESPONSE_TOPIC</td>
          <td>js_eval.responses</td>
          <td>Prefix queue topic used to consume JavaScript evaluation responses</td>
      </tr>
      <tr>
          <td>queue.js.max_pending_requests</td>
          <td>REMOTE_JS_MAX_PENDING_REQUESTS</td>
          <td>10000</td>
          <td>Maximum pending JavaScript evaluation requests</td>
      </tr>
      <tr>
          <td>queue.js.max_eval_requests_timeout</td>
          <td>REMOTE_JS_MAX_EVAL_REQUEST_TIMEOUT</td>
          <td>60000</td>
          <td>Maximum timeout in milliseconds for JavaScript evaluation</td>
      </tr>
      <tr>
          <td>queue.js.max_requests_timeout</td>
          <td>REMOTE_JS_MAX_REQUEST_TIMEOUT</td>
          <td>10000</td>
          <td>Maximum timeout in milliseconds for JavaScript execution</td>
      </tr>
      <tr>
          <td>queue.js.response_poll_interval</td>
          <td>REMOTE_JS_RESPONSE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>JavaScript evaluation responses poll interval</td>
      </tr>
      <tr>
          <td>queue.js.response_auto_commit_interval</td>
          <td>REMOTE_JS_RESPONSE_AUTO_COMMIT_INTERVAL_MS</td>
          <td>100</td>
          <td>JavaScript evaluation responses auto commit interval</td>
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
          <td>60000</td>
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
          <td>10000</td>
          <td>Statistics printing interval for Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.name</td>
          <td>TB_QUEUE_RE_MAIN_QUEUE_NAME</td>
          <td>Main</td>
          <td>Rule Engine Main queue (mustn't be renamed)</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.topic</td>
          <td>TB_QUEUE_RE_MAIN_TOPIC</td>
          <td>tb_rule_engine.main</td>
          <td>Topic for Main queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.poll-interval</td>
          <td>TB_QUEUE_RE_MAIN_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll messages from Main queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.partitions</td>
          <td>TB_QUEUE_RE_MAIN_PARTITIONS</td>
          <td>10</td>
          <td>Main queue amount of partitions used by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.pack-processing-timeout</td>
          <td>TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS</td>
          <td>60000</td>
          <td>Timeout for processing a message pack from Main queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.type</td>
          <td>TB_QUEUE_RE_MAIN_SUBMIT_STRATEGY_TYPE</td>
          <td>BURST</td>
          <td>Main queue submit strategy. Can be: BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_WITHIN_TENANT, SEQUENTIAL</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.batch-size</td>
          <td>TB_QUEUE_RE_MAIN_SUBMIT_STRATEGY_BATCH_SIZE</td>
          <td>1000</td>
          <td>Maximum number of messages in batch. Only for submit strategy type: BATCH</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.type</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_TYPE</td>
          <td>SKIP_ALL_FAILURES</td>
          <td>Main queue processing strategy. Can be: SKIP_ALL_FAILURES, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.retries</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_RETRIES</td>
          <td>3</td>
          <td>Number of retries, 0 is unlimited. Use for RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT processing strategies</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.failure-percentage</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
          <td>0</td>
          <td>Skip retry if failures or timeouts are less then X percentage of messages</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.pause-between-retries</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_RETRY_PAUSE</td>
          <td>3</td>
          <td>Time in seconds to wait in consumer thread before retries</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.max-pause-between-retries</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
          <td>3</td>
          <td>Max allowed time in seconds for pause between retries</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.name</td>
          <td>TB_QUEUE_RE_HP_QUEUE_NAME</td>
          <td>HighPriority</td>
          <td>Rule Engine HighPriority queue</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.topic</td>
          <td>TB_QUEUE_RE_HP_TOPIC</td>
          <td>tb_rule_engine.hp</td>
          <td>Topic for HighPriority queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.poll-interval</td>
          <td>TB_QUEUE_RE_HP_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll messages from HighPriority queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.partitions</td>
          <td>TB_QUEUE_RE_HP_PARTITIONS</td>
          <td>10</td>
          <td>HighPriority queue amount of partitions used by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.pack-processing-timeout</td>
          <td>TB_QUEUE_RE_HP_PACK_PROCESSING_TIMEOUT_MS</td>
          <td>60000</td>
          <td>Timeout for processing a message pack from HighPriority queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.type</td>
          <td>TB_QUEUE_RE_HP_SUBMIT_STRATEGY_TYPE</td>
          <td>BURST</td>
          <td>HighPriority queue submit strategy. Can be: BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_WITHIN_TENANT, SEQUENTIAL</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.batch-size</td>
          <td>TB_QUEUE_RE_HP_SUBMIT_STRATEGY_BATCH_SIZE</td>
          <td>100</td>
          <td>Maximum number of messages in batch. Only for submit strategy type: BATCH</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.type</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_TYPE</td>
          <td>RETRY_FAILED_AND_TIMED_OUT</td>
          <td>SKIP_ALL_FAILURES, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.retries</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_RETRIES</td>
          <td>0</td>
          <td>Number of retries, 0 is unlimited. Use for RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT processing strategies</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.failure-percentage</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
          <td>0</td>
          <td>Skip retry if failures or timeouts are less then X percentage of messages</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.pause-between-retries</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_RETRY_PAUSE</td>
          <td>5</td>
          <td>Time in seconds to wait in consumer thread before retries</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.max-pause-between-retries</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
          <td>5</td>
          <td>Max allowed time in seconds for pause between retries</td>
      </tr>
      <tr>
            <td>queue.rule-engine.queues.name</td>
            <td>TB_QUEUE_RE_SQ_QUEUE_NAME</td>
            <td>SequentialByOriginator</td>
            <td>Rule Engine SequentialByOriginator queue</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.topic</td>
            <td>TB_QUEUE_RE_SQ_TOPIC</td>
            <td>tb_rule_engine.sq</td>
            <td>Topic for SequentialByOriginator queue by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.poll-interval</td>
            <td>TB_QUEUE_RE_SQ_POLL_INTERVAL_MS</td>
            <td>25</td>
            <td>Interval in milliseconds to poll messages from SequentialByOriginator queue by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.partitions</td>
            <td>TB_QUEUE_RE_SQ_PARTITIONS</td>
            <td>10</td>
            <td>SequentialByOriginator queue amount of partitions used by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.pack-processing-timeout</td>
            <td>TB_QUEUE_RE_SQ_PACK_PROCESSING_TIMEOUT_MS</td>
            <td>60000</td>
            <td>Timeout for processing a message pack from SequentialByOriginator queue by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.submit-strategy.type</td>
            <td>TB_QUEUE_RE_SQ_SUBMIT_STRATEGY_TYPE</td>
            <td>SEQUENTIAL_BY_ORIGINATOR</td>
            <td>SequentialByOriginator queue submit strategy. Can be: BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_WITHIN_TENANT, SEQUENTIAL</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.submit-strategy.batch-size</td>
            <td>TB_QUEUE_RE_SQ_SUBMIT_STRATEGY_BATCH_SIZE</td>
            <td>100</td>
            <td>Maximum number of messages in batch. Only for submit strategy type: BATCH</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.type</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_TYPE</td>
            <td>RETRY_FAILED_AND_TIMED_OUT</td>
            <td>SKIP_ALL_FAILURES, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.retries</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_RETRIES</td>
            <td>3</td>
            <td>Number of retries, 0 is unlimited. Use for RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT processing strategies</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.failure-percentage</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
            <td>0</td>
            <td>Skip retry if failures or timeouts are less then X percentage of messages</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.pause-between-retries</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_RETRY_PAUSE</td>
            <td>5</td>
            <td>Time in seconds to wait in consumer thread before retries</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.max-pause-between-retries</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
            <td>5</td>
            <td>Max allowed time in seconds for pause between retries</td>
        </tr>     
       <tr>
           <td>queue.transport.notifications_topic</td>
           <td>TB_QUEUE_TRANSPORT_NOTIFICATIONS_TOPIC</td>
           <td>tb_transport.notifications</td>
           <td>Transport nottifications topic</td>
       </tr>
       <tr>
           <td>queue.transport.poll_interval</td>
           <td>TB_QUEUE_CORE_POLL_INTERVAL_MS</td>
           <td>25</td>
           <td>Interval in milliseconds to poll messages by Core microservices</td>
       </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">ThingsBoard service parameters</span></td>
      </tr>
       <tr>
           <td>service.type.</td>
           <td>TB_SERVICE_TYPE</td>
           <td>monolith</td>
           <td>Tb Queue service type. Can be: monolith or tb-core or tb-rule-engine</td>
       </tr>
       <tr>
           <td>service.id.</td>
           <td>TB_SERVICE_ID</td>
           <td></td>
           <td>Unique id for this service (autogenerated if empty)</td>
       </tr>     
       <tr>
           <td>service.tenant_id.</td>
           <td>TB_SERVICE_TENANT_ID</td>
           <td></td>
           <td>Empty or specific tenant id</td>
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
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Zookeeper connection parameters</span></td>
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
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">HTTP server parameters</span></td>
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
          <td>transport.json.max_string_value_length</td>
          <td>JSON_MAX_STRING_VALUE_LENGTH</td>
          <td>0</td>
          <td>Maximum allowed string value length when processing Telemetry/Attributes JSON (0 value disables string value length check)</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Queue parameters</span></td>
      </tr>  
      <tr>
          <td>queue.type</td>
          <td>TB_QUEUE_TYPE</td>
          <td>kafka</td>
          <td>Queue type. Can be: kafka (Apache Kafka) or aws-sqs (AWS SQS) or pubsub (PubSub) or service-bus (Azure Service Bus) or rabbitmq (RabbitMQ)</td>
      </tr>
      <tr>
          <td>queue.kafka.bootstrap.servers</td>
          <td>TB_KAFKA_SERVERS</td>
          <td>localhost:9092</td>
          <td>List of kafka bootstrap servers used to establish connection</td>
      </tr>
      <tr>
          <td>queue.kafka.acks</td>
          <td>TB_KAFKA_ACKS</td>
          <td>all</td>
          <td>The number of acknowledgments the producer requires the leader to have received before considering a request complete</td>
      </tr>
      <tr>
          <td>queue.kafka.retries</td>
          <td>TB_KAFKA_RETRIES</td>
          <td>1</td>
          <td>Setting a value greater than zero will cause the client to resend any record whose send fails with a potentially transient error</td>
      </tr>
      <tr>
          <td>queue.kafka.batch.size</td>
          <td>TB_KAFKA_BATCH_SIZE</td>
          <td>16384</td>
          <td>The producer will attempt to batch records together into fewer requests whenever multiple records are being sent to the same partition</td>
      </tr>
      <tr>
          <td>queue.kafka.linger.ms</td>
          <td>TB_KAFKA_LINGER_MS</td>
          <td>1</td>
          <td>The producer groups together any records that arrive in between request transmissions into a single batched request</td>
      </tr>
      <tr>
          <td>queue.kafka.buffer.memory</td>
          <td>TB_BUFFER_MEMORY</td>
          <td>33554432</td>
          <td>The total bytes of memory the producer can use to buffer records waiting to be sent to the server</td>
      </tr>
      <tr>
          <td>queue.kafka.replication_factor</td>
          <td>TB_QUEUE_KAFKA_REPLICATION_FACTOR</td>
          <td>1</td>
          <td>Replication factor defines the number of copies of a topic in a Kafka cluster</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.rule-engine</td>
          <td>TB_QUEUE_KAFKA_RE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Rule Engine topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.core</td>
          <td>TB_QUEUE_KAFKA_CORE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Core topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.transport-api</td>
          <td>TB_QUEUE_KAFKA_TA_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Transport Api topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.notifications</td>
          <td>TB_QUEUE_KAFKA_NOTIFICATIONS_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Notifications topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.js-executor</td>
          <td>TB_QUEUE_KAFKA_JE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Js Executor topics</td>
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
          <td>AWS SQS properties for Rule Engine queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.core</td>
          <td>TB_QUEUE_AWS_SQS_CORE_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Core queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.transport-api</td>
          <td>TB_QUEUE_AWS_SQS_TA_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Transport Api queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.notifications</td>
          <td>TB_QUEUE_AWS_SQS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Notifications queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.js-executor</td>
          <td>TB_QUEUE_AWS_SQS_JE_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Transport Api queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
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
          <td>Pub/Sub max message size. In bytes</td>
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
          <td>queue.rabbitmq.username</td>
          <td>TB_QUEUE_RABBIT_MQ_USERNAME</td>
          <td>YOUR_USERNAME</td>
          <td>User name for RabbitMQ user account</td>
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
          <td>Network connection between clients and RabbitMQ nodes can fail. RabbitMQ Java client supports automatic recovery of connections and topology (queues, exchanges, bindings, and consumers).</td>
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
          <td>RabbitMQ has a timeout for connection handshake. When clients run in heavily constrained environments, it may be necessary to increase the timeout.</td>
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
          <td>Name of hash function used for consistent hash ring in Cluster Mode. See architecture docs for more details.</td>
      </tr>
      <tr>
          <td>queue.partitions.virtual_nodes_size</td>
          <td>TB_QUEUE_PARTITIONS_VIRTUAL_NODES_SIZE</td>
          <td>16</td>
          <td>Amount of virtual nodes in consistent hash ring.</td>
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
          <td>queue.transport_api.request_timeout</td>
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
          <td>60000</td>
          <td>Timeout for processing a message pack by Core microservices</td>
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
          <td>Queue topic used for producing JavaScript evaluation requests</td>
      </tr>
      <tr>
          <td>queue.js.response_topic_prefix</td>
          <td>REMOTE_JS_EVAL_RESPONSE_TOPIC</td>
          <td>js_eval.responses</td>
          <td>Prefix queue topic used to consume JavaScript evaluation responses</td>
      </tr>
      <tr>
          <td>queue.js.max_pending_requests</td>
          <td>REMOTE_JS_MAX_PENDING_REQUESTS</td>
          <td>10000</td>
          <td>Maximum pending JavaScript evaluation requests</td>
      </tr>
      <tr>
          <td>queue.js.max_eval_requests_timeout</td>
          <td>REMOTE_JS_MAX_EVAL_REQUEST_TIMEOUT</td>
          <td>60000</td>
          <td>Maximum timeout in milliseconds for JavaScript evaluation</td>
      </tr>
      <tr>
          <td>queue.js.max_requests_timeout</td>
          <td>REMOTE_JS_MAX_REQUEST_TIMEOUT</td>
          <td>10000</td>
          <td>Maximum timeout in milliseconds for JavaScript execution</td>
      </tr>
      <tr>
          <td>queue.js.response_poll_interval</td>
          <td>REMOTE_JS_RESPONSE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>JavaScript evaluation responses poll interval</td>
      </tr>
      <tr>
          <td>queue.js.response_auto_commit_interval</td>
          <td>REMOTE_JS_RESPONSE_AUTO_COMMIT_INTERVAL_MS</td>
          <td>100</td>
          <td>JavaScript evaluation responses auto commit interval</td>
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
          <td>60000</td>
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
          <td>10000</td>
          <td>Statistics printing interval for Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.name</td>
          <td>TB_QUEUE_RE_MAIN_QUEUE_NAME</td>
          <td>Main</td>
          <td>Rule Engine Main queue (mustn't be renamed)</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.topic</td>
          <td>TB_QUEUE_RE_MAIN_TOPIC</td>
          <td>tb_rule_engine.main</td>
          <td>Topic for Main queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.poll-interval</td>
          <td>TB_QUEUE_RE_MAIN_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll messages from Main queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.partitions</td>
          <td>TB_QUEUE_RE_MAIN_PARTITIONS</td>
          <td>10</td>
          <td>Main queue amount of partitions used by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.pack-processing-timeout</td>
          <td>TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS</td>
          <td>60000</td>
          <td>Timeout for processing a message pack from Main queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.type</td>
          <td>TB_QUEUE_RE_MAIN_SUBMIT_STRATEGY_TYPE</td>
          <td>BURST</td>
          <td>Main queue submit strategy. Can be: BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_WITHIN_TENANT, SEQUENTIAL</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.batch-size</td>
          <td>TB_QUEUE_RE_MAIN_SUBMIT_STRATEGY_BATCH_SIZE</td>
          <td>1000</td>
          <td>Maximum number of messages in batch. Only for submit strategy type: BATCH</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.type</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_TYPE</td>
          <td>SKIP_ALL_FAILURES</td>
          <td>Main queue processing strategy. Can be: SKIP_ALL_FAILURES, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.retries</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_RETRIES</td>
          <td>3</td>
          <td>Number of retries, 0 is unlimited. Use for RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT processing strategies</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.failure-percentage</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
          <td>0</td>
          <td>Skip retry if failures or timeouts are less then X percentage of messages</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.pause-between-retries</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_RETRY_PAUSE</td>
          <td>3</td>
          <td>Time in seconds to wait in consumer thread before retries</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.max-pause-between-retries</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
          <td>3</td>
          <td>Max allowed time in seconds for pause between retries</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.name</td>
          <td>TB_QUEUE_RE_HP_QUEUE_NAME</td>
          <td>HighPriority</td>
          <td>Rule Engine HighPriority queue</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.topic</td>
          <td>TB_QUEUE_RE_HP_TOPIC</td>
          <td>tb_rule_engine.hp</td>
          <td>Topic for HighPriority queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.poll-interval</td>
          <td>TB_QUEUE_RE_HP_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll messages from HighPriority queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.partitions</td>
          <td>TB_QUEUE_RE_HP_PARTITIONS</td>
          <td>10</td>
          <td>HighPriority queue amount of partitions used by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.pack-processing-timeout</td>
          <td>TB_QUEUE_RE_HP_PACK_PROCESSING_TIMEOUT_MS</td>
          <td>60000</td>
          <td>Timeout for processing a message pack from HighPriority queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.type</td>
          <td>TB_QUEUE_RE_HP_SUBMIT_STRATEGY_TYPE</td>
          <td>BURST</td>
          <td>HighPriority queue submit strategy. Can be: BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_WITHIN_TENANT, SEQUENTIAL</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.batch-size</td>
          <td>TB_QUEUE_RE_HP_SUBMIT_STRATEGY_BATCH_SIZE</td>
          <td>100</td>
          <td>Maximum number of messages in batch. Only for submit strategy type: BATCH</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.type</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_TYPE</td>
          <td>RETRY_FAILED_AND_TIMED_OUT</td>
          <td>SKIP_ALL_FAILURES, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.retries</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_RETRIES</td>
          <td>0</td>
          <td>Number of retries, 0 is unlimited. Use for RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT processing strategies</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.failure-percentage</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
          <td>0</td>
          <td>Skip retry if failures or timeouts are less then X percentage of messages</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.pause-between-retries</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_RETRY_PAUSE</td>
          <td>5</td>
          <td>Time in seconds to wait in consumer thread before retries</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.max-pause-between-retries</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
          <td>5</td>
          <td>Max allowed time in seconds for pause between retries</td>
      </tr>
      <tr>
            <td>queue.rule-engine.queues.name</td>
            <td>TB_QUEUE_RE_SQ_QUEUE_NAME</td>
            <td>SequentialByOriginator</td>
            <td>Rule Engine SequentialByOriginator queue</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.topic</td>
            <td>TB_QUEUE_RE_SQ_TOPIC</td>
            <td>tb_rule_engine.sq</td>
            <td>Topic for SequentialByOriginator queue by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.poll-interval</td>
            <td>TB_QUEUE_RE_SQ_POLL_INTERVAL_MS</td>
            <td>25</td>
            <td>Interval in milliseconds to poll messages from SequentialByOriginator queue by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.partitions</td>
            <td>TB_QUEUE_RE_SQ_PARTITIONS</td>
            <td>10</td>
            <td>SequentialByOriginator queue amount of partitions used by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.pack-processing-timeout</td>
            <td>TB_QUEUE_RE_SQ_PACK_PROCESSING_TIMEOUT_MS</td>
            <td>60000</td>
            <td>Timeout for processing a message pack from SequentialByOriginator queue by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.submit-strategy.type</td>
            <td>TB_QUEUE_RE_SQ_SUBMIT_STRATEGY_TYPE</td>
            <td>SEQUENTIAL_BY_ORIGINATOR</td>
            <td>SequentialByOriginator queue submit strategy. Can be: BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_WITHIN_TENANT, SEQUENTIAL</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.submit-strategy.batch-size</td>
            <td>TB_QUEUE_RE_SQ_SUBMIT_STRATEGY_BATCH_SIZE</td>
            <td>100</td>
            <td>Maximum number of messages in batch. Only for submit strategy type: BATCH</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.type</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_TYPE</td>
            <td>RETRY_FAILED_AND_TIMED_OUT</td>
            <td>SKIP_ALL_FAILURES, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.retries</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_RETRIES</td>
            <td>3</td>
            <td>Number of retries, 0 is unlimited. Use for RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT processing strategies</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.failure-percentage</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
            <td>0</td>
            <td>Skip retry if failures or timeouts are less then X percentage of messages</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.pause-between-retries</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_RETRY_PAUSE</td>
            <td>5</td>
            <td>Time in seconds to wait in consumer thread before retries</td>
        </tr>      
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.max-pause-between-retries</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
            <td>5</td>
            <td>Max allowed time in seconds for pause between retries</td>
        </tr>
       <tr>
           <td>queue.transport.notifications_topic</td>
           <td>TB_QUEUE_TRANSPORT_NOTIFICATIONS_TOPIC</td>
           <td>tb_transport.notifications</td>
           <td>Transport nottifications topic</td>
       </tr>
       <tr>
           <td>queue.transport.poll_interval</td>
           <td>TB_QUEUE_CORE_POLL_INTERVAL_MS</td>
           <td>25</td>
           <td>Interval in milliseconds to poll messages by Core microservices</td>
       </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">ThingsBoard service parameters</span></td>
      </tr>
       <tr>
           <td>service.type.</td>
           <td>TB_SERVICE_TYPE</td>
           <td>monolith</td>
           <td>Tb Queue service type. Can be: monolith or tb-core or tb-rule-engine</td>
       </tr>
       <tr>
           <td>service.id.</td>
           <td>TB_SERVICE_ID</td>
           <td></td>
           <td>Unique id for this service (autogenerated if empty)</td>
       </tr>     
       <tr>
           <td>service.tenant_id.</td>
           <td>TB_SERVICE_TENANT_ID</td>
           <td></td>
           <td>Empty or specific tenant id</td>
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
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Zookeeper connection parameters</span></td>
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
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">COAP server parameters</span></td>
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
          <td>transport.json.max_string_value_length</td>
          <td>JSON_MAX_STRING_VALUE_LENGTH</td>
          <td>0</td>
          <td>Maximum allowed string value length when processing Telemetry/Attributes JSON (0 value disables string value length check)</td>
      </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">Queue parameters</span></td>
      </tr>  
      <tr>
          <td>queue.type</td>
          <td>TB_QUEUE_TYPE</td>
          <td>kafka</td>
          <td>Queue type. Can be: kafka (Apache Kafka) or aws-sqs (AWS SQS) or pubsub (PubSub) or service-bus (Azure Service Bus) or rabbitmq (RabbitMQ)</td>
      </tr>
      <tr>
          <td>queue.kafka.bootstrap.servers</td>
          <td>TB_KAFKA_SERVERS</td>
          <td>localhost:9092</td>
          <td>List of kafka bootstrap servers used to establish connection</td>
      </tr>
      <tr>
          <td>queue.kafka.acks</td>
          <td>TB_KAFKA_ACKS</td>
          <td>all</td>
          <td>The number of acknowledgments the producer requires the leader to have received before considering a request complete</td>
      </tr>
      <tr>
          <td>queue.kafka.retries</td>
          <td>TB_KAFKA_RETRIES</td>
          <td>1</td>
          <td>Setting a value greater than zero will cause the client to resend any record whose send fails with a potentially transient error</td>
      </tr>
      <tr>
          <td>queue.kafka.batch.size</td>
          <td>TB_KAFKA_BATCH_SIZE</td>
          <td>16384</td>
          <td>The producer will attempt to batch records together into fewer requests whenever multiple records are being sent to the same partition</td>
      </tr>
      <tr>
          <td>queue.kafka.linger.ms</td>
          <td>TB_KAFKA_LINGER_MS</td>
          <td>1</td>
          <td>The producer groups together any records that arrive in between request transmissions into a single batched request</td>
      </tr>
      <tr>
          <td>queue.kafka.buffer.memory</td>
          <td>TB_BUFFER_MEMORY</td>
          <td>33554432</td>
          <td>The total bytes of memory the producer can use to buffer records waiting to be sent to the server</td>
      </tr>
      <tr>
          <td>queue.kafka.replication_factor</td>
          <td>TB_QUEUE_KAFKA_REPLICATION_FACTOR</td>
          <td>1</td>
          <td>Replication factor defines the number of copies of a topic in a Kafka cluster</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.rule-engine</td>
          <td>TB_QUEUE_KAFKA_RE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Rule Engine topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.core</td>
          <td>TB_QUEUE_KAFKA_CORE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Core topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.transport-api</td>
          <td>TB_QUEUE_KAFKA_TA_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Transport Api topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.notifications</td>
          <td>TB_QUEUE_KAFKA_NOTIFICATIONS_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Notifications topics</td>
      </tr>
      <tr>
          <td>queue.kafka.topic-properties.js-executor</td>
          <td>TB_QUEUE_KAFKA_JE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000</td>
          <td>Kafka properties for Js Executor topics</td>
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
          <td>AWS SQS properties for Rule Engine queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.core</td>
          <td>TB_QUEUE_AWS_SQS_CORE_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Core queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.transport-api</td>
          <td>TB_QUEUE_AWS_SQS_TA_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Transport Api queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.notifications</td>
          <td>TB_QUEUE_AWS_SQS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Notifications queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.js-executor</td>
          <td>TB_QUEUE_AWS_SQS_JE_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS properties for Transport Api queues, messages which will commit after visibility timeout period can be consume again. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
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
          <td>Pub/Sub max message size. In bytes</td>
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
          <td>queue.rabbitmq.username</td>
          <td>TB_QUEUE_RABBIT_MQ_USERNAME</td>
          <td>YOUR_USERNAME</td>
          <td>User name for RabbitMQ user account</td>
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
          <td>Network connection between clients and RabbitMQ nodes can fail. RabbitMQ Java client supports automatic recovery of connections and topology (queues, exchanges, bindings, and consumers).</td>
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
          <td>RabbitMQ has a timeout for connection handshake. When clients run in heavily constrained environments, it may be necessary to increase the timeout.</td>
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
          <td>Name of hash function used for consistent hash ring in Cluster Mode. See architecture docs for more details.</td>
      </tr>
      <tr>
          <td>queue.partitions.virtual_nodes_size</td>
          <td>TB_QUEUE_PARTITIONS_VIRTUAL_NODES_SIZE</td>
          <td>16</td>
          <td>Amount of virtual nodes in consistent hash ring.</td>
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
          <td>queue.transport_api.request_timeout</td>
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
          <td>60000</td>
          <td>Timeout for processing a message pack by Core microservices</td>
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
          <td>Queue topic used for producing JavaScript evaluation requests</td>
      </tr>
      <tr>
          <td>queue.js.response_topic_prefix</td>
          <td>REMOTE_JS_EVAL_RESPONSE_TOPIC</td>
          <td>js_eval.responses</td>
          <td>Prefix queue topic used to consume JavaScript evaluation responses</td>
      </tr>
      <tr>
          <td>queue.js.max_pending_requests</td>
          <td>REMOTE_JS_MAX_PENDING_REQUESTS</td>
          <td>10000</td>
          <td>Maximum pending JavaScript evaluation requests</td>
      </tr>
      <tr>
          <td>queue.js.max_eval_requests_timeout</td>
          <td>REMOTE_JS_MAX_EVAL_REQUEST_TIMEOUT</td>
          <td>60000</td>
          <td>Maximum timeout in milliseconds for JavaScript evaluation</td>
      </tr>
      <tr>
          <td>queue.js.max_requests_timeout</td>
          <td>REMOTE_JS_MAX_REQUEST_TIMEOUT</td>
          <td>10000</td>
          <td>Maximum timeout in milliseconds for JavaScript execution</td>
      </tr>
      <tr>
          <td>queue.js.response_poll_interval</td>
          <td>REMOTE_JS_RESPONSE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>JavaScript evaluation responses poll interval</td>
      </tr>
      <tr>
          <td>queue.js.response_auto_commit_interval</td>
          <td>REMOTE_JS_RESPONSE_AUTO_COMMIT_INTERVAL_MS</td>
          <td>100</td>
          <td>JavaScript evaluation responses auto commit interval</td>
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
          <td>60000</td>
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
          <td>10000</td>
          <td>Statistics printing interval for Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.name</td>
          <td>TB_QUEUE_RE_MAIN_QUEUE_NAME</td>
          <td>Main</td>
          <td>Rule Engine Main queue (mustn't be renamed)</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.topic</td>
          <td>TB_QUEUE_RE_MAIN_TOPIC</td>
          <td>tb_rule_engine.main</td>
          <td>Topic for Main queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.poll-interval</td>
          <td>TB_QUEUE_RE_MAIN_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll messages from Main queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.partitions</td>
          <td>TB_QUEUE_RE_MAIN_PARTITIONS</td>
          <td>10</td>
          <td>Main queue amount of partitions used by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.pack-processing-timeout</td>
          <td>TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS</td>
          <td>60000</td>
          <td>Timeout for processing a message pack from Main queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.type</td>
          <td>TB_QUEUE_RE_MAIN_SUBMIT_STRATEGY_TYPE</td>
          <td>BURST</td>
          <td>Main queue submit strategy. Can be: BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_WITHIN_TENANT, SEQUENTIAL</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.batch-size</td>
          <td>TB_QUEUE_RE_MAIN_SUBMIT_STRATEGY_BATCH_SIZE</td>
          <td>1000</td>
          <td>Maximum number of messages in batch. Only for submit strategy type: BATCH</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.type</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_TYPE</td>
          <td>SKIP_ALL_FAILURES</td>
          <td>Main queue processing strategy. Can be: SKIP_ALL_FAILURES, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.retries</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_RETRIES</td>
          <td>3</td>
          <td>Number of retries, 0 is unlimited. Use for RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT processing strategies</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.failure-percentage</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
          <td>0</td>
          <td>Skip retry if failures or timeouts are less then X percentage of messages</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.pause-between-retries</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_RETRY_PAUSE</td>
          <td>3</td>
          <td>Time in seconds to wait in consumer thread before retries</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.max-pause-between-retries</td>
          <td>TB_QUEUE_RE_MAIN_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
          <td>3</td>
          <td>Max allowed time in seconds for pause between retries</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.name</td>
          <td>TB_QUEUE_RE_HP_QUEUE_NAME</td>
          <td>HighPriority</td>
          <td>Rule Engine HighPriority queue</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.topic</td>
          <td>TB_QUEUE_RE_HP_TOPIC</td>
          <td>tb_rule_engine.hp</td>
          <td>Topic for HighPriority queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.poll-interval</td>
          <td>TB_QUEUE_RE_HP_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll messages from HighPriority queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.partitions</td>
          <td>TB_QUEUE_RE_HP_PARTITIONS</td>
          <td>10</td>
          <td>HighPriority queue amount of partitions used by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.pack-processing-timeout</td>
          <td>TB_QUEUE_RE_HP_PACK_PROCESSING_TIMEOUT_MS</td>
          <td>60000</td>
          <td>Timeout for processing a message pack from HighPriority queue by Rule Engine microservices</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.type</td>
          <td>TB_QUEUE_RE_HP_SUBMIT_STRATEGY_TYPE</td>
          <td>BURST</td>
          <td>HighPriority queue submit strategy. Can be: BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_WITHIN_TENANT, SEQUENTIAL</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.submit-strategy.batch-size</td>
          <td>TB_QUEUE_RE_HP_SUBMIT_STRATEGY_BATCH_SIZE</td>
          <td>100</td>
          <td>Maximum number of messages in batch. Only for submit strategy type: BATCH</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.type</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_TYPE</td>
          <td>RETRY_FAILED_AND_TIMED_OUT</td>
          <td>SKIP_ALL_FAILURES, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.retries</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_RETRIES</td>
          <td>0</td>
          <td>Number of retries, 0 is unlimited. Use for RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT processing strategies</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.failure-percentage</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
          <td>0</td>
          <td>Skip retry if failures or timeouts are less then X percentage of messages</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.pause-between-retries</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_RETRY_PAUSE</td>
          <td>5</td>
          <td>Time in seconds to wait in consumer thread before retries</td>
      </tr>
      <tr>
          <td>queue.rule-engine.queues.processing-strategy.max-pause-between-retries</td>
          <td>TB_QUEUE_RE_HP_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
          <td>5</td>
          <td>Max allowed time in seconds for pause between retries</td>
      </tr> 
      <tr>
            <td>queue.rule-engine.queues.name</td>
            <td>TB_QUEUE_RE_SQ_QUEUE_NAME</td>
            <td>SequentialByOriginator</td>
            <td>Rule Engine SequentialByOriginator queue</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.topic</td>
            <td>TB_QUEUE_RE_SQ_TOPIC</td>
            <td>tb_rule_engine.sq</td>
            <td>Topic for SequentialByOriginator queue by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.poll-interval</td>
            <td>TB_QUEUE_RE_SQ_POLL_INTERVAL_MS</td>
            <td>25</td>
            <td>Interval in milliseconds to poll messages from SequentialByOriginator queue by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.partitions</td>
            <td>TB_QUEUE_RE_SQ_PARTITIONS</td>
            <td>10</td>
            <td>SequentialByOriginator queue amount of partitions used by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.pack-processing-timeout</td>
            <td>TB_QUEUE_RE_SQ_PACK_PROCESSING_TIMEOUT_MS</td>
            <td>60000</td>
            <td>Timeout for processing a message pack from SequentialByOriginator queue by Rule Engine microservices</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.submit-strategy.type</td>
            <td>TB_QUEUE_RE_SQ_SUBMIT_STRATEGY_TYPE</td>
            <td>SEQUENTIAL_BY_ORIGINATOR</td>
            <td>SequentialByOriginator queue submit strategy. Can be: BURST, BATCH, SEQUENTIAL_BY_ORIGINATOR, SEQUENTIAL_WITHIN_TENANT, SEQUENTIAL</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.submit-strategy.batch-size</td>
            <td>TB_QUEUE_RE_SQ_SUBMIT_STRATEGY_BATCH_SIZE</td>
            <td>100</td>
            <td>Maximum number of messages in batch. Only for submit strategy type: BATCH</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.type</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_TYPE</td>
            <td>RETRY_FAILED_AND_TIMED_OUT</td>
            <td>SKIP_ALL_FAILURES, RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.retries</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_RETRIES</td>
            <td>3</td>
            <td>Number of retries, 0 is unlimited. Use for RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT, RETRY_FAILED_AND_TIMED_OUT processing strategies</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.failure-percentage</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_FAILURE_PERCENTAGE</td>
            <td>0</td>
            <td>Skip retry if failures or timeouts are less then X percentage of messages</td>
        </tr>
        <tr>
            <td>queue.rule-engine.queues.processing-strategy.pause-between-retries</td>
            <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_RETRY_PAUSE</td>
            <td>5</td>
            <td>Time in seconds to wait in consumer thread before retries</td>
        </tr>      
        <tr>
             <td>queue.rule-engine.queues.processing-strategy.max-pause-between-retries</td>
             <td>TB_QUEUE_RE_SQ_PROCESSING_STRATEGY_MAX_RETRY_PAUSE</td>
             <td>5</td>
             <td>Max allowed time in seconds for pause between retries</td>
        </tr>      
       <tr>
           <td>queue.transport.notifications_topic</td>
           <td>TB_QUEUE_TRANSPORT_NOTIFICATIONS_TOPIC</td>
           <td>tb_transport.notifications</td>
           <td>Transport nottifications topic</td>
       </tr>
       <tr>
           <td>queue.transport.poll_interval</td>
           <td>TB_QUEUE_CORE_POLL_INTERVAL_MS</td>
           <td>25</td>
           <td>Interval in milliseconds to poll messages by Core microservices</td>
       </tr>
      <tr>
           <td colspan="4"><span style="font-weight: bold; font-size: 24px;">ThingsBoard service parameters</span></td>
      </tr>
       <tr>
           <td>service.type.</td>
           <td>TB_SERVICE_TYPE</td>
           <td>monolith</td>
           <td>Tb Queue service type. Can be: monolith or tb-core or tb-rule-engine</td>
       </tr>
       <tr>
           <td>service.id.</td>
           <td>TB_SERVICE_ID</td>
           <td></td>
           <td>Unique id for this service (autogenerated if empty)</td>
       </tr>     
       <tr>
           <td>service.tenant_id.</td>
           <td>TB_SERVICE_TENANT_ID</td>
           <td></td>
           <td>Empty or specific tenant id</td>
       </tr>                                                
  </tbody>
</table>



#### Logging


#### thingsboard.conf

The configuration file for the startup script. Contains Java options and classpath related parameters.

#### logback.xml

The configuration file for logging. Allows controlling the log level, the size of log files and the total size/volume of logs.

