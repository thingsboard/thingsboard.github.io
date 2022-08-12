* TOC 
{:toc}

This guide will help you to get familiar with ThingsBoard Edge configuration files and parameters. We **recommend** to
configure ThingsBoard Edge using environment variables. This way you do not need to merge the configuration files when new
edge release arrives. List of available configuration parameters and corresponding environment variables is
located [here](#configuration-parameters).

## How to change configuration parameters?

#### Linux

If ThingsBoard Edge is installed on **Linux**, you may specify the environment variables in the tb-edge.conf file:

```bash
sudo nano /usr/share/tb-edge/conf/tb-edge.conf
```

Use simple example below to add new environment variable 'HTTP_BIND_PORT' with value '8081'.

```bash
...
export HTTP_BIND_PORT=8081
```

#### Windows

If ThingsBoard Edge is installed on **Windows**, you may specify the environment variables in
the tb-edge.yml file located in the following directory:

```bash
YOUR_INSTALL_DIR/conf
```

The configuration file is written in YAML.

All configuration parameters have corresponding environment variable name and default value. In order to change
configuration parameter you can simply change it's default value. For example:

```bash
server:
  address: "${HTTP_BIND_ADDRESS:0.0.0.0}"
```

In this case, *'HTTP_BIND_ADDRESS'* is environment variable name and *'0.0.0.0'* is a default value.

#### Docker based deployment

If ThingsBoard Edge is installed in a docker compose environment, you may edit the scripts and add environment variables for
the corresponding containers.
See [docker documentation](https://docs.docker.com/compose/environment-variables/#/the-envfile-configuration-option) for
more details.

## Configuration parameters

The parameters are grouped by system components. The list contains the name (address in tb-edge.yml file),
environment variable, default value and description.

### ThingsBoard Edge Core/Rule Engine Parameters

#### Cloud parameters

<table>
  <thead>
      <tr>
          <td><b>Property</b></td><td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>cloud.routingKey</td>
          <td>CLOUD_ROUTING_KEY</td>
          <td></td>
          <td>Your edge key # e.g. <b>19ea7ee8-5e6d-e642-4f32-05440a529015</b></td>
      </tr>
      <tr>
          <td>cloud.secret</td>
          <td>CLOUD_ROUTING_SECRET</td>
          <td></td>
          <td>Your edge secret # e.g. <b>bztvkvfqsye7omv9uxlp</b></td>
      </tr>
      <tr>
          <td>cloud.reconnect_timeout</td>
          <td>CLOUD_RECONNECT_TIMEOUT</td>
          <td>3000</td>
          <td>Time to wait before reconnecting to cloud in case connectivity was lost</td>
      </tr>
      <tr>
          <td>cloud.rpc.host</td>
          <td>CLOUD_RPC_HOST</td>
          <td>localhost</td>
          <td>IP address of the machine with the ThingsBoard platform # e.g. <b>thingsboard.cloud</b>, <b>demo.thingsboard.io</b>, <b>X.X.X.X</b>, <b>localhost</b> </td>
      </tr>
      <tr>
          <td>cloud.rpc.port</td>
          <td>CLOUD_RPC_PORT</td>
          <td>7070</td>
          <td>Edge RPC port according to ThingsBoard server configuration</td>
      </tr>
      <tr>
          <td>cloud.rpc.timeout</td>
          <td>CLOUD_RPC_TIMEOUT</td>
          <td>5</td>
          <td>Timeout in seconds for channel termination</td>
      </tr>
      <tr>
          <td>cloud.rpc.keep_alive_time_sec</td>
          <td>CLOUD_RPC_KEEP_ALIVE_TIME_SEC</td>
          <td>360</td>
          <td>Number of seconds to keep alive connection. If after X seconds keep alive messages will not be colivered consider connection to cloud as lost</td>
      </tr>
      <tr>
          <td>cloud.rpc.ssl.enabled</td>
          <td>CLOUD_RPC_SSL_ENABLED</td>
          <td>false</td>
          <td>Enable TLS communication between cloud and edge</td>
      </tr>
      <tr>
          <td>cloud.rpc.ssl.cert</td>
          <td>CLOUD_RPC_SSL_CERT</td>
          <td></td>
          <td>Cert file to be used during TLS connectivity to cloud</td>
      </tr>
      <tr>
          <td>cloud.rpc.storage.max_read_records_count</td>
          <td>CLOUD_RPC_STORAGE_MAX_READ_RECORDS_COUNT</td>
          <td>50</td>
          <td>Max records of cloud event to read from local DB and sent to cloud</td>
      </tr>
      <tr>
          <td>cloud.rpc.storage.no_read_records_sleep</td>
          <td>CLOUD_RPC_NO_READ_RECORDS_SLEEP</td>
          <td>1000</td>
          <td>Number of milliseconds to wait before next check of cloud events in local DB</td>
      </tr>
      <tr>
          <td>cloud.rpc.storage.sleep_between_batches</td>
          <td>CLOUD_RPC_SLEEP_BETWEEN_BATCHES</td>
          <td>1000</td>
          <td>Number of milliseconds to wait before send failed batch of cloud events to cloud</td>
      </tr>
  </tbody>
</table>

#### HTTP server parameters

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
          <td>thingsboard</td>
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
          <td>thingsboard</td>
          <td>Password used to access the key</td>
      </tr>
      <tr>
          <td>server.http2.enabled</td>
          <td>HTTP2_ENABLED</td>
          <td>true</td>
          <td>Enable/disable HTTP/2 support</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.key_password</td>
          <td>SSL_KEY_PASSWORD</td>
          <td>thingsboard</td>
          <td>Password used to access the key in the keystore</td>
      </tr>
      <tr>
          <td>server.http2</td>
          <td>HTTP2_ENABLED</td>
          <td>true</td>
          <td>Enable/disable HTTP/2 support (takes effect only if server SSL is enabled)</td>
      </tr>
      <tr>
          <td>server.log_controller_error_stack_trace</td>
          <td>HTTP_LOG_CONTROLLER_ERROR_STACK_TRACE</td>
          <td>false</td>
          <td>Log errors with stacktrace when REST API throws exception</td>
      </tr>
      <tr>
          <td>server.ws.send_timeout</td>
          <td>TB_SERVER_WS_SEND_TIMEOUT</td>
          <td>5000</td>
          <td>Timeout for sending data to client WebSocket session in milliseconds</td>
      </tr>
      <tr>
          <td>server.ws.ping_timeout</td>
          <td>TB_SERVER_WS_PING_TIMEOUT</td>
          <td>30000</td>
          <td></td>
      </tr>
      <tr>
          <td>server.ws.limits.max_sessions_per_tenant</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_TENANT</td>
          <td>0</td>
          <td>Limit the amount of WebSocket sessions per each tenant available on each server. Zero value disables limitation</td>
      </tr>
      <tr>
          <td>server.ws.limits.max_sessions_per_customer</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_CUSTOMER</td>
          <td>0</td>
          <td>Limit the amount of WebSocket sessions per each customer available on each server. Zero value disables limitation</td>
      </tr>
      <tr>
          <td>server.ws.limits.max_sessions_per_regular_user</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_REGULAR_USER</td>
          <td>0</td>
          <td>Limit the amount of WebSocket sessions per each regular user available on each server. Zero value disables limitation</td>
      </tr>
      <tr>
          <td>server.ws.limits.max_sessions_per_public_user</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_PUBLIC_USER</td>
          <td>0</td>
          <td>Limit the amount of WebSocket sessions per each public user available on each server. Zero value disables limitation</td>
      </tr>
      <tr>
          <td>server.ws.limits.max_queue_per_ws_session</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_QUEUE_PER_WS_SESSION</td>
          <td>500</td>
          <td>Limit the size of pending message queue per each WebSocket session</td>
      </tr>
      <tr>
          <td>server.ws.limits.max_subscriptions_per_tenant</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_TENANT</td>
          <td>0</td>
          <td>Limit the amount of WebSocket subscriptions per each tenant available on each server. Zero value disables limitation</td>
      </tr>
      <tr>
          <td>server.ws.limits.max_subscriptions_per_customer</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_CUSTOMER</td>
          <td>0</td>
          <td>Limit the amount of WebSocket subscriptions per each customer available on each server. Zero value disables limitation</td>
      </tr>
      <tr>
          <td>server.ws.limits.max_subscriptions_per_regular_user</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_REGULAR_USER</td>
          <td>0</td>
          <td>Limit the amount of WebSocket subscriptions per each regular user available on each server. Zero value disables limitation</td>
      </tr>
      <tr>
          <td>server.ws.limits.max_subscriptions_per_public_user</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_PUBLIC_USER</td>
          <td>0</td>
          <td>Limit the amount of WebSocket subscriptions per each public user available on each server. Zero value disables limitation</td>
      </tr>
      <tr>
          <td>server.ws.limits.max_updates_per_session</td>
          <td>TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_UPDATES_PER_SESSION</td>
          <td>300:1,3000:60</td>
          <td>Limit the maximum data updates sent to WebSocket session for specified time intervals in seconds. Comma separated list of limit:seconds pairs</td>
      </tr>
      <tr>
          <td>server.ws.dynamic_page_link.refresh_interval</td>
          <td>TB_SERVER_WS_DYNAMIC_PAGE_LINK_REFRESH_INTERVAL_SEC</td>
          <td>60</td>
          <td>Refresh rate of the dynamic alarm end entity data queries.</td>
      </tr>
      <tr>
          <td>server.ws.dynamic_page_link.refresh_pool_size</td>
          <td>TB_SERVER_WS_DYNAMIC_PAGE_LINK_REFRESH_POOL_SIZE</td>
          <td>1</td>
          <td>Thread pool size to execute dynamic queries.</td>
      </tr>
      <tr>
          <td>server.ws.dynamic_page_link.max_per_user</td>
          <td>TB_SERVER_WS_DYNAMIC_PAGE_LINK_MAX_PER_USER</td>
          <td>10</td>
          <td>Maximum number of dynamic queries per user. For example, no more then 10 alarm widgets opened by user simultaneously in all browsers.</td>
      </tr>
      <tr>
          <td>server.ws.max_entities_per_data_subscription</td>
          <td>TB_SERVER_WS_MAX_ENTITIES_PER_DATA_SUBSCRIPTION</td>
          <td>10000</td>
          <td>Maximum number of entities returned for single entity subscription. For example, no more then 10 000 entities on the map widget.</td>
      </tr>
      <tr>
          <td>server.ws.max_entities_per_alarm_subscription</td>
          <td>TB_SERVER_WS_MAX_ENTITIES_PER_ALARM_SUBSCRIPTION</td>
          <td>10000</td>
          <td>Maximum number of alarms returned for single alarm subscription. For example, no more then 10 000 alarms on the alarm widget.</td>
      </tr>
      <tr>
          <td>server.rest.limits.tenant.enabled</td>
          <td>TB_SERVER_REST_LIMITS_TENANT_ENABLED</td>
          <td>false</td>
          <td>Enable/disable REST API rate limits per tenant</td>
      </tr>
      <tr>
          <td>server.rest.limits.tenant.configuration</td>
          <td>TB_SERVER_REST_LIMITS_TENANT_CONFIGURATION</td>
          <td>100:1,2000:60</td>
          <td>Limit the maximum REST API calls per tenant on each server for specified time intervals in seconds. Comma separated list of limit:seconds pairs</td>
      </tr>
      <tr>
          <td>server.rest.limits.customer.enabled</td>
          <td>TB_SERVER_REST_LIMITS_CUSTOMER_ENABLED</td>
          <td>false</td>
          <td>Enable/disable REST API rate limits per customer</td>
      </tr>
      <tr>
          <td>server.rest.limits.customer.configuration</td>
          <td>TB_SERVER_REST_LIMITS_CUSTOMER_CONFIGURATION</td>
          <td>50:1,1000:60</td>
          <td>Limit the maximum REST API calls per customer on each server for specified time intervals in seconds. Comma separated list of limit:seconds pairs</td>
      </tr>
      <tr>
          <td>server.rest.server_side_rpc.min_timeout</td>
          <td>MIN_SERVER_SIDE_RPC_TIMEOUT</td>
          <td>5000</td>
          <td>Minimum value of the server side RPC timeout</td>
      </tr>
      <tr>
          <td>server.rest.server_side_rpc.default_timeout</td>
          <td>DEFAULT_SERVER_SIDE_RPC_TIMEOUT</td>
          <td>10000</td>
          <td>Default value of the server side RPC timeout</td>
      </tr>
    </tbody>
</table>

{% include docs/user-guide/install/zookeeper-config.md %}

#### Cluster stats parameters

<table>
    <thead>
        <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>cluster.stats.enabled</td>
            <td>TB_CLUSTER_STATS_ENABLED</td>
            <td>false</td>
            <td>Enable/Disable the cluster statistics. Calculates number of messages sent between cluster nodes based on each type.</td>
        </tr>
        <tr>
            <td>cluster.stats.print_interval_ms</td>
            <td>TB_CLUSTER_STATS_PRINT_INTERVAL_MS</td>
            <td>10000</td>
            <td>Interval of printing the cluster stats to the log file.</td>
        </tr>
    </tbody>
</table>

#### Plugins configuration parameters

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>plugins.scan_packages</td>
            <td>PLUGINS_SCAN_PACKAGES</td>
            <td>org.thingsboard.server.extensions,org.thingsboard.rule.engine</td>
            <td>Comma separated package list used during classpath scanning for plugins</td>
        </tr>
    </tbody>
</table>

#### Security parameters

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
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
            <td>security.claim.allowClaimingByDefault</td>
            <td>SECURITY_CLAIM_ALLOW_CLAIMING_BY_DEFAULT</td>
            <td>true</td>
            <td>Enable/disable claiming devices, if false -> the device's [claimingAllowed] SERVER_SCOPE attribute must be set to [true] to allow claiming specific device</td>
        </tr>
        <tr>
            <td>security.claim.duration</td>
            <td>SECURITY_CLAIM_DURATION</td>
            <td>86400000</td>
            <td>Time allowed to claim the device in milliseconds. 24 hours. Note this value must equal claimDevices.timeToLiveInMinutes value</td>
        </tr>
        <tr>
            <td>security.basic.enabled</td>
            <td>SECURITY_BASIC_ENABLED</td>
            <td>false</td>
            <td></td>
        </tr>
        <tr>
            <td>security.oauth2.loginProcessingUrl</td>
            <td>SECURITY_OAUTH2_LOGIN_PROCESSING_URL</td>
            <td>/login/oauth2/code/</td>
            <td>Redirect URL where access code from external user management system will be processed</td>
        </tr>
        <tr>
            <td>security.oauth2.githubMapper.emailUrl</td>
            <td>SECURITY_OAUTH2_GITHUB_MAPPER_EMAIL_URL_KEY</td>
            <td>https://api.github.com/user/emails</td>
            <td></td>
        </tr>
    </tbody>
</table>

#### Usage statistics parameters

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
            <td>Enable/Disable collection of statistics about API usage. Collected on a system and tenant level by default.</td>
        </tr>
        <tr>
            <td>usage.stats.report.enabled_per_customer</td>
            <td>USAGE_STATS_REPORT_PER_CUSTOMER_ENABLED</td>
            <td>false</td>
            <td>Enable/Disable collection of statistics about API usage on a customer level.</td>
        </tr>
        <tr>
            <td>usage.stats.report.interval</td>
            <td>USAGE_STATS_REPORT_INTERVAL</td>
            <td>10</td>
            <td>Interval of reporting the statistics. By default, the summarized statistics is sent every 10 seconds.</td>
        </tr>
        <tr>
            <td>usage.stats.check.cycle</td>
            <td>USAGE_STATS_CHECK_CYCLE</td>
            <td>60000</td>
            <td>Interval of checking the start of next cycle and re-enabling the blocked tenants/customers.</td>
        </tr>
    </tbody>
</table>

#### UI parameters

{% if docsPrefix == null %} {% assign UI_HELP_BASE_URL_VALUE = "ui" %} {% endif %} {% if docsPrefix == "pe/" %} {%
assign UI_HELP_BASE_URL_VALUE = "pe-ui" %} {% endif %}
<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ui.dashboard.max_datapoints_limit</td>
            <td>DASHBOARD_MAX_DATAPOINTS_LIMIT</td>
            <td>50000</td>
            <td>Maximum allowed datapoints fetched by widgets</td>
        </tr>
        <tr>
            <td>ui.help.base-url</td>
            <td>UI_HELP_BASE_URL</td>
            <td>https://raw.githubusercontent.com/thingsboard/thingsboard-{{UI_HELP_BASE_URL_VALUE}}-help/release-3.3.3</td>
            <td>Base URL for UI Help Assets. This is a link to the raw files hosted in the dedicated <a href="https://github.com/thingsboard/thingsboard-ui-help">GitHub project</a>. You may fork the project, update the content of the files and put your own project link. The project should be public in order for any platfrom UI users to access help resources.</td>
        </tr>
    </tbody>
</table>

#### SQL configuration parameters

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
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
            <td>Max timeout for attributes entries queue polling. Value set in milliseconds</td>
        </tr>
        <tr>
            <td>sql.attributes.stats_print_interval_ms</td>
            <td>SQL_ATTRIBUTES_BATCH_STATS_PRINT_MS</td>
            <td>10000</td>
            <td>Interval in milliseconds for printing attributes updates statistic</td>
        </tr>
        <tr>
            <td>sql.attributes.batch_threads</td>
            <td>SQL_ATTRIBUTES_BATCH_THREADS</td>
            <td>4</td>
            <td>Number of threads that execute batch insert/update statements for attributes</td>
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
            <td>Max timeout for time-series entries queue polling. Value set in milliseconds</td>
        </tr>
        <tr>
            <td>sql.ts.stats_print_interval_ms</td>
            <td>SQL_TS_BATCH_STATS_PRINT_MS</td>
            <td>10000</td>
            <td>Interval in milliseconds for printing timeseries insert statistic</td>
        </tr>
        <tr>
            <td>sql.ts.batch_threads</td>
            <td>SQL_TS_BATCH_THREADS</td>
            <td>4</td>
            <td>Number of threads that execute batch insert/update statements for time-series data</td>
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
            <td>Max timeout for latest telemetry entries queue polling. The value set in milliseconds</td>
        </tr>
        <tr>
            <td>sql.ts_latest.stats_print_interval_ms</td>
            <td>SQL_TS_LATEST_BATCH_STATS_PRINT_MS</td>
            <td>10000</td>
            <td>Interval in milliseconds for printing latest telemetry updates statistic</td>
        </tr>
        <tr>
            <td>sql.ts_latest.batch_threads</td>
            <td>SQL_TS_LATEST_BATCH_THREADS</td>
            <td>4</td>
            <td>Number of threads that execute batch insert/update statements for latest data</td>
        </tr>
        <tr>
            <td>sql.ts_latest.update_by_latest_ts</td>
            <td>SQL_TS_UPDATE_BY_LATEST_TIMESTAMP</td>
            <td>true</td>
            <td>Update latest values only if the timestamp of the new record is greater or equals than timestamp of the previously saved latest value. 
        Latest values are stored separately from historical values for fast lookup from DB. Insert of historical value happens in any case.</td>
        </tr>
        <tr>
            <td>sql.cloud_events.batch_size</td>
            <td>SQL_CLOUD_EVENTS_BATCH_SIZE</td>
            <td>10000</td>
            <td>Batch size for persisting cloud events inserts</td>
        </tr>
        <tr>
            <td>sql.cloud_events.batch_max_delay</td>
            <td>SQL_CLOUD_EVENTS_BATCH_MAX_DELAY_MS</td>
            <td>100</td>
            <td>Max timeout for cloud events entries queue polling. Value set in milliseconds</td>
        </tr>
        <tr>
            <td>sql.cloud_events.stats_print_interval_ms</td>
            <td>SQL_CLOUD_EVENTS_BATCH_STATS_PRINT_MS</td>
            <td>10000</td>
            <td>Interval in milliseconds for printing cloud events insert statistic</td>
        </tr>
        <tr>
            <td>sql.batch_sort</td>
            <td>SQL_BATCH_SORT</td>
            <td>false</td>
            <td>Specify whether to sort entities before batch update. Should be enabled for cluster mode to avoid deadlocks</td>
        </tr>
        <tr>
            <td>sql.remove_null_chars</td>
            <td>SQL_REMOVE_NULL_CHARS</td>
            <td>true</td>
            <td>Specify whether to remove null characters from strValue of attributes and timeseries before insert</td>
        </tr>
        <tr>
            <td>sql.log_queries</td>
            <td>SQL_LOG_QUERIES</td>
            <td>false</td>
            <td>Log slow SQL queries. Slow queries are determined using SQL_LOG_QUERIES_THRESHOLD threshold</td>
        </tr>
        <tr>
            <td>sql.log_queries_threshold</td>
            <td>SQL_LOG_QUERIES_THRESHOLD</td>
            <td>5000</td>
            <td>Threshold of slow SQL queries to log.</td>
        </tr>
        <tr>
            <td>sql.postgres.ts_key_value_partitioning</td>
            <td>SQL_POSTGRES_TS_KV_PARTITIONING</td>
            <td>MONTHS</td>
            <td>Specify partitioning size for timestamp key-value storage. Example: DAYS, MONTHS, YEARS, INDEFINITE</td>
        </tr>
        <tr>
            <td>sql.timescale.chunk_time_interval</td>
            <td>SQL_TIMESCALE_CHUNK_TIME_INTERVAL</td>
            <td>604800000</td>
            <td>Specify Interval size for new data chunks storage</td>
        </tr>
        <tr>
            <td>sql.timescale.batch_threads</td>
            <td>SQL_TIMESCALE_BATCH_THREADS</td>
            <td>4</td>
            <td>Number of threads that execute batch insert/update statements for timeseries data when using Timescale DB.</td>
        </tr>
        <tr>
            <td>sql.ttl.ts.enabled</td>
            <td>SQL_TTL_TS_ENABLED</td>
            <td>true</td>
            <td>The parameter to specify whether to use TTL (Time To Live) for timeseries records</td>
        </tr>
        <tr>
            <td>sql.ttl.ts.execution_interval_ms</td>
            <td>SQL_TTL_TS_EXECUTION_INTERVAL</td>
            <td>86400000</td>
            <td>The parameter to specify the period of execution TTL task for timeseries records. Value set in milliseconds. Default value corresponds to one day</td>
        </tr>
        <tr>
            <td>sql.ttl.ts.ts_key_value_ttl</td>
            <td>SQL_TTL_TS_TS_KEY_VALUE_TTL</td>
            <td>0</td>
            <td>The parameter to specify system TTL(Time To Live) value for timeseries records. Value set in seconds. 0 - records are never expired. System TTL value can be overwritten for a particular Tenant, or parent Customer entity by setting the server-side attribute TTL to the corresponding Tenant or parent Customer entity. Please, note that the value should be set as long value, otherwise the TTL will be used from the higher level(Tenant or System)</td>
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
            <td>2220000</td>
            <td>The parameter to specify the period of execution TTL task for events records. Value set in milliseconds. (max random initial delay and fixed period). 37 minutes to avoid common interval spikes</td>
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
            <td>sql.ttl.edge_events.enabled</td>
            <td>SQL_TTL_EDGE_EVENTS_ENABLED</td>
            <td>true</td>
            <td>Enable/disable TTL(Time To Live) for edge events</td>
        </tr>
        <tr>
            <td>sql.ttl.edge_events.execution_interval_ms</td>
            <td>SQL_TTL_EDGE_EVENTS_EXECUTION_INTERVAL</td>
            <td>86400000</td>
            <td>Number of milliseconds. The current value corresponds to one day</td>
        </tr>
        <tr>
            <td>sql.ttl.edge_events.edge_events_ttl</td>
            <td>SQL_TTL_EDGE_EVENTS_TTL</td>
            <td>2628000</td>
            <td>Number of seconds. The current value corresponds to one month</td>
        </tr>
        <tr>
            <td>sql.ttl.alarms.checking_interval</td>
            <td>SQL_ALARMS_TTL_CHECKING_INTERVAL</td>
            <td>7200000</td>
            <td>Number of milliseconds. The current value corresponds to two hours</td>
        </tr>
        <tr>
            <td>sql.ttl.alarms.removal_batch_size</td>
            <td>SQL_ALARMS_TTL_REMOVAL_BATCH_SIZE</td>
            <td>3000</td>
            <td>To delete outdated alarms not all at once but in batches</td>
        </tr>
        <tr>
            <td>sql.ttl.rpc.enabled</td>
            <td>SQL_TTL_RPC_ENABLED</td>
            <td>true</td>
            <td>Parameter to enable or disable TTL(Time To Live) for Persistent RPC</td>
        </tr>
        <tr>
            <td>sql.ttl.rpc.checking_interval</td>
            <td>SQL_RPC_TTL_CHECKING_INTERVAL</td>
            <td>7200000</td>
            <td>Parameter to specify how often TTL(Time To Live) will be checked.Number of milliseconds. The current value corresponds to two hours</td>
        </tr>
        <tr>
            <td>sql.relations.max_level</td>
            <td>SQL_RELATIONS_MAX_LEVEL</td>
            <td>50</td>
            <td>This value has to be reasonable small to prevent infinite recursion as early as possible</td>
        </tr>
        <tr>
            <td>sql.ttl.cloud_events.enabled</td>
            <td>SQL_TTL_CLOUD_EVENTS_ENABLED</td>
            <td>true</td>
            <td>Parameter to enable or disable TTL(Time To Live) for cloud events.</td>
        </tr>
        <tr>
            <td>sql.ttl.cloud_events.execution_interval_ms</td>
            <td>SQL_TTL_CLOUD_EVENTS_EXECUTION_INTERVAL</td>
            <td>86400000</td>
            <td>Parameter to specify how often TTL(Time To Live) will be checked.</td>
        </tr>
        <tr>
            <td>sql.ttl.cloud_events.cloud_events_ttl</td>
            <td>SQL_TTL_CLOUD_EVENTS_TTL</td>
            <td>2628000</td>
            <td>The parameter to specify TTL(Time To Live) value for cloud event records. Value set in <b>seconds</b>. 0 - records are never expired.</td>
        </tr>
    </tbody>
</table>

#### Actor system parameters

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>actors.system.throughput</td>
            <td>ACTORS_SYSTEM_THROUGHPUT</td>
            <td>5</td>
            <td>Number of messages the actor system will process per actor before switching to processing of messages for next actor.</td>
        </tr>
        <tr>
            <td>actors.system.scheduler_pool_size</td>
            <td>ACTORS_SYSTEM_SCHEDULER_POOL_SIZE</td>
            <td>1</td>
            <td>Thread pool size for actor system scheduler.</td>
        </tr>
        <tr>
            <td>actors.system.max_actor_init_attempts</td>
            <td>ACTORS_SYSTEM_MAX_ACTOR_INIT_ATTEMPTS</td>
            <td>10</td>
            <td>Maximum number of attempts to init the actor before disabling the actor.</td>
        </tr>
        <tr>
            <td>actors.system.app_dispatcher_pool_size</td>
            <td>ACTORS_SYSTEM_APP_DISPATCHER_POOL_SIZE</td>
            <td>1</td>
            <td>Thread pool size for main actor system dispatcher.</td>
        </tr>
        <tr>
            <td>actors.system.tenant_dispatcher_pool_size</td>
            <td>ACTORS_SYSTEM_TENANT_DISPATCHER_POOL_SIZE</td>
            <td>2</td>
            <td>Thread pool size for actor system dispatcher that process messages for tenant actors.</td>
        </tr>
        <tr>
            <td>actors.system.device_dispatcher_pool_size</td>
            <td>ACTORS_SYSTEM_DEVICE_DISPATCHER_POOL_SIZE</td>
            <td>4</td>
            <td>Thread pool size for actor system dispatcher that process messages for device actors.</td>
        </tr>
        <tr>
            <td>actors.system.rule_dispatcher_pool_size</td>
            <td>ACTORS_SYSTEM_RULE_DISPATCHER_POOL_SIZE</td>
            <td>4</td>
            <td>Thread pool size for actor system dispatcher that process messages for rule engine (chain/node) actors.</td>
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
          <td>50</td>
          <td>Specify thread pool size for database request callbacks executor service</td>
      </tr>
      <tr>
          <td>actors.rule.js_thread_pool_size</td>
          <td>ACTORS_RULE_JS_THREAD_POOL_SIZE</td>
          <td>50</td>
          <td>Specify thread pool size for javascript executor service</td>
      </tr>
      <tr>
          <td>actors.rule.mail_thread_pool_size</td>
          <td>ACTORS_RULE_MAIL_THREAD_POOL_SIZE</td>
          <td>50</td>
          <td>Specify thread pool size for mail sender executor service</td>
      </tr>
        <tr>
          <td>actors.rule.sms_thread_pool_size</td>
          <td>ACTORS_RULE_SMS_THREAD_POOL_SIZE</td>
          <td>50</td>
          <td>Specify thread pool size for sms sender executor service</td>
        </tr>
      <tr>
          <td>actors.rule.allow_system_mail_service</td>
          <td>ACTORS_RULE_ALLOW_SYSTEM_MAIL_SERVICE</td>
          <td>true</td>
          <td>Whether to allow usage of system mail service for rules</td>
      </tr>
        <tr>
          <td>actors.rule.allow_system_sms_service</td>
          <td>ACTORS_RULE_ALLOW_SYSTEM_SMS_SERVICE</td>
          <td>true</td>
          <td>Whether to allow usage of system sms service for rules</td>
        </tr>
      <tr>
          <td>actors.rule.external_call_thread_pool_size</td>
          <td>ACTORS_RULE_EXTERNAL_CALL_THREAD_POOL_SIZE</td>
          <td>50</td>
          <td>Specify thread pool size for external call service</td>
      </tr>
      <tr>
          <td>actors.rule.chain.error_persist_frequency</td>
          <td>ACTORS_RULE_CHAIN_ERROR_FREQUENCY</td>
          <td>3000</td>
          <td>Errors for particular actor are persisted once per specified amount of milliseconds</td>
      </tr>
        <tr>
          <td>actors.rule.chain.debug_mode_rate_limits_per_tenant.enabled</td>
          <td>ACTORS_RULE_CHAIN_DEBUG_MODE_RATE_LIMITS_PER_TENANT_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable the rate limit of persisted debug events for all rule nodes per tenant.</td>
        </tr>
        <tr>
          <td>actors.rule.chain.debug_mode_rate_limits_per_tenant.configuration</td>
          <td>ACTORS_RULE_CHAIN_DEBUG_MODE_RATE_LIMITS_PER_TENANT_CONFIGURATION</td>
          <td>50000:3600</td>
          <td>The value of rate limit. By default, no more then 50 thousand events per hour.</td>
        </tr>
        <tr>
          <td>actors.rule.node.error_persist_frequency</td>
          <td>ACTORS_RULE_NODE_ERROR_FREQUENCY</td>
          <td>3000</td>
          <td>Errors for particular actor are persisted once per specified amount of milliseconds</td>
        </tr>
        <tr>
          <td>actors.rule.transaction.queue_size</td>
          <td>ACTORS_RULE_TRANSACTION_QUEUE_SIZE</td>
          <td>15000</td>
          <td>Size of queues which store messages for transaction rule nodes</td>
        </tr>
        <tr>
          <td>actors.rule.transaction.duration</td>
          <td>ACTORS_RULE_TRANSACTION_DURATION</td>
          <td>60000</td>
          <td>Time in milliseconds for transaction to complete</td>
        </tr>
        <tr>
          <td>actors.rpc.max_retries</td>
          <td>ACTORS_RPC_MAX_RETRIES</td>
          <td>5</td>
          <td>Maximum number of persistent RPC call retries in case of failed requests delivery.</td>
        </tr>
        <tr>
          <td>actors.rpc.sequential</td>
          <td>ACTORS_RPC_SEQUENTIAL</td>
          <td>false</td>
          <td>Enable/Disable sequential processing of RPC calls per device.</td>
        </tr>
        <tr>
          <td>actors.statistics.enabled</td>
          <td>ACTORS_STATISTICS_ENABLED</td>
          <td>true</td>
          <td>Enable/disable actor statistics</td>
        </tr>
        <tr>
          <td>actors.statistics.js_print_interval_ms</td>
          <td>ACTORS_JS_STATISTICS_PRINT_INTERVAL_MS</td>
          <td>10000</td>
          <td>Frequency of printing the JS executor statistics</td>
        </tr>
        <tr>
          <td>actors.statistics.persist_frequency</td>
          <td>ACTORS_STATISTICS_PERSIST_FREQUENCY</td>
          <td>3600000</td>
          <td>Actors statistic persistence frequency in milliseconds</td>
        </tr>
    </tbody>
</table>

{% if docsPrefix == "pe/" %}
#### Platform integrations parameters
{% endif %}

{% if docsPrefix == "pe/" %} 
{% include docs/user-guide/install/platform-integrations-and-reports-parameters.md %} 
{% endif %}

#### Cache parameters

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
          <td>caffeine</td>
          <td>Cache provider. <b>caffeine</b> for stand alone installations and <b>redis</b> for clustered installations</td>
      </tr>
      <tr>
          <td>cache.maximumPoolSize</td>
          <td>CACHE_MAXIMUM_POOL_SIZE</td>
          <td>16</td>
          <td>Maximum pool size to process futures that calls the external cache</td>
      </tr>
      <tr>
          <td>cache.attributes.enabled</td>
          <td>CACHE_ATTRIBUTES_ENABLED</td>
          <td>true</td>
          <td>Cache attribute request in <b>caffeine</b> or <b>redis</b></td>
      </tr>
    </tbody>
</table>

#### Caffeine parameters

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
      <tr>
          <td>caffeine.specs.relations.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>Relations</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.relations.maxSize</td>
          <td></td>
          <td>10000</td>
          <td><b>Relations</b> cache max size. maxSize: 0 means the cache is disabled</td>
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
          <td>10000</td>
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
          <td>10000</td>
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
          <td>10000</td>
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
          <td>10000</td>
          <td><b>assets</b> cache max size</td>
      </tr>
      <tr>
          <td class="item item-pe">caffeine.specs.downlink.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>downlink</b> cache TTL</td>
      </tr>
      <tr>
          <td class="item item-pe">caffeine.specs.downlink.maxSize</td>
          <td></td>
          <td>100000</td>
          <td><b>downlink</b> cache max size</td>
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
          <td>10000</td>
          <td><b>entityViews</b> cache max size</td>
      </tr>
      <tr>
          <td class="item item-pe">caffeine.specs.roles.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>roles</b> cache TTL</td>
      </tr>
      <tr>
          <td class="item item-pe">caffeine.specs.roles.maxSize</td>
          <td></td>
          <td>10000</td>
          <td><b>roles</b> cache max size</td>
      </tr>
      <tr>
          <td class="item item-pe">caffeine.specs.permissions.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>permissions</b> cache TTL</td>
      </tr>
      <tr>
          <td class="item item-pe">caffeine.specs.permissions.maxSize</td>
          <td></td>
          <td>10000</td>
          <td><b>permissions</b> cache max size</td>
      </tr>
      <tr>
          <td class="item item-pe">caffeine.specs.owners.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>owners</b> cache TTL</td>
      </tr>
      <tr>
          <td class="item item-pe">caffeine.specs.owners.maxSize</td>
          <td></td>
          <td>100000</td>
          <td><b>owners</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.claimDevices.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>claimDevices</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.claimDevices.maxSize</td>
          <td></td>
          <td>10000</td>
          <td><b>claimDevices</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.securitySettings.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>securitySettings</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.securitySettings.maxSize</td>
          <td></td>
          <td>10000</td>
          <td><b>securitySettings</b> cache max size</td>
      </tr>
      <tr>
          <td class="item item-pe">caffeine.specs.remoteIntegrations.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>remoteIntegrations</b> cache TTL</td>
      </tr>
      <tr>
          <td class="item item-pe">caffeine.specs.remoteIntegrations.maxSize</td>
          <td></td>
          <td>10000</td>
          <td><b>remoteIntegrations</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.tenantProfiles.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>tenantProfiles</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.tenantProfiles.maxSize</td>
          <td></td>
          <td>10000</td>
          <td><b>tenantProfiles</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.deviceProfiles.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>deviceProfiles</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.deviceProfiles.maxSize</td>
          <td></td>
          <td>10000</td>
          <td><b>deviceProfiles</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.attributes.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>attributes</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.attributes.maxSize</td>
          <td></td>
          <td>100000</td>
          <td><b>attributes</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.tokensOutdatageTime.timeToLiveInMinutes</td>
          <td></td>
          <td>20000</td>
          <td><b>tokensOutdatageTime</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.tokensOutdatageTime.maxSize</td>
          <td></td>
          <td>10000</td>
          <td><b>tokensOutdatageTime</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.otaPackages.timeToLiveInMinutes</td>
          <td></td>
          <td>60</td>
          <td><b>otaPackages</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.otaPackages.maxSize</td>
          <td></td>
          <td>10</td>
          <td><b>otaPackages</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.otaPackagesData.timeToLiveInMinutes</td>
          <td></td>
          <td>60</td>
          <td><b>otaPackagesData</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.otaPackagesData.maxSize</td>
          <td></td>
          <td>10</td>
          <td><b>otaPackagesData</b> cache max size</td>
      </tr>
      <tr>
          <td>caffeine.specs.edges.timeToLiveInMinutes</td>
          <td></td>
          <td>1440</td>
          <td><b>edges</b> cache TTL</td>
      </tr>
      <tr>
          <td>caffeine.specs.edges.maxSize</td>
          <td></td>
          <td>10000</td>
          <td><b>edges</b> cache max size</td>
      </tr>
    </tbody>
</table>

#### Redis connection parameters

{% include docs/user-guide/install/redis-config.md %}

#### Check new version updates parameters

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>updates.enabled</td>
            <td>UPDATES_ENABLED</td>
            <td>true</td>
            <td>Enable/disable ThingsBoard updates checking. If enabled, the platform will periodically request information about new releases from updates.thingsboard.io</td>
        </tr>
    </tbody>
</table>

#### Spring freemarker configuration

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>spring.freemarker.checkTemplateLocation</td>
            <td></td>
            <td>false</td>
            <td></td>
        </tr>
    </tbody>
</table>

#### Spring CORS configuration

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
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
    </tbody>
</table>

#### The default timeout for asynchronous requests in milliseconds

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>spring.mvc.async.request-timeout</td>
          <td>SPRING_MVC_ASYNC_REQUEST_TIMEOUT</td>
          <td>30000</td>
          <td>Timeout for HTTP requests.</td>
        </tr>
    </tbody>
</table>

#### Spring serve gzip compressed static resources

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>spring.resources.chain.compressed</td>
          <td></td>
          <td>true</td>
          <td>Enable/disable compression of static resources</td>
        </tr>
        <tr>
            <td>spring.resources.chain.strategy.content.enabled</td>
            <td></td>
            <td>true</td>
            <td></td>
        </tr>
        <tr>
            <td>spring.servlet.multipart.max-file-size</td>
            <td></td>
            <td>50MB</td>
            <td></td>
        </tr>
        <tr>
            <td>spring.servlet.multipart.max-request-size</td>
            <td></td>
            <td>50MB</td>
            <td></td>
        </tr>
        <tr>
            <td>spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation</td>
            <td></td>
            <td>true</td>
            <td></td>
        </tr>
        <tr>
            <td>spring.jpa.properties.hibernate.order_by.default_null_ordering</td>
            <td></td>
            <td>last</td>
            <td></td>
        </tr>
    </tbody>
</table>

#### SQL DAO Configuration

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>spring.data.jpa.repositories.enabled</td>
            <td></td>
            <td>true</td>
            <td></td>
        </tr>
        <tr>
            <td>spring.jpa.properties.javax.persistence.query.timeout</td>
            <td>JAVAX_PERSISTENCE_QUERY_TIMEOUT</td>
            <td>30000</td>
            <td>General timeout for JDBC queries</td>
        </tr>
        <tr>
            <td>spring.jpa.open-in-view</td>
            <td></td>
            <td>false</td>
            <td></td>
        </tr>
        <tr>
            <td>spring.jpa.hibernate.ddl-auto</td>
            <td></td>
            <td>none</td>
            <td></td>
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
          <td>jdbc:postgresql://localhost:5432/tb_edge</td>
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
    </tbody>
</table>

#### Audit log parameters

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>audit-log.enabled</td>
        <td>AUDIT_LOG_ENABLED</td>
        <td>true</td>
        <td>Enable/disable audit log functionality.</td>
    </tr>
    <tr>
        <td>audit-log.by_tenant_partitioning</td>
        <td>AUDIT_LOG_BY_TENANT_PARTITIONING</td>
        <td>MONTHS</td>
        <td>Specify partitioning size for audit log by tenant id storage. Example MINUTES, HOURS, DAYS, MONTHS</td>
    </tr>
    <tr>
        <td>audit-log.default_query_period</td>
        <td>AUDIT_LOG_DEFAULT_QUERY_PERIOD</td>
        <td>30</td>
        <td>Number of days as history period if startTime and endTime are not specified</td>
    </tr>
    <tr>
        <td>audit-log.logging-level.mask."device"</td>
        <td>AUDIT_LOG_MASK_DEVICE</td>
        <td>W</td>
        <td>Device logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log
            read and write operations)
        </td>
    </tr>
    <tr>
        <td>audit-log.logging-level.mask."asset"</td>
        <td>AUDIT_LOG_MASK_ASSET</td>
        <td>W</td>
        <td>Asset logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log
            read and write operations)
        </td>
    </tr>
    <tr>
        <td>audit-log.logging-level.mask."dashboard"</td>
        <td>AUDIT_LOG_MASK_DASHBOARD</td>
        <td>W</td>
        <td>Dashboard logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b>
            (log read and write operations)
        </td>
    </tr>
    <tr>
        <td>audit-log.logging-level.mask."customer"</td>
        <td>AUDIT_LOG_MASK_CUSTOMER</td>
        <td>W</td>
        <td>Customer logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b>
            (log read and write operations)
        </td>
    </tr>
    <tr>
        <td>audit-log.logging-level.mask."user"</td>
        <td>AUDIT_LOG_MASK_USER</td>
        <td>W</td>
        <td>User logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log
            read and write operations)
        </td>
    </tr>
    <tr>
        <td>audit-log.logging-level.mask."rule_chain"</td>
        <td>AUDIT_LOG_MASK_RULE_CHAIN</td>
        <td>W</td>
        <td>Rule Chain logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b>
            (log read and write operations)
        </td>
    </tr>
    <tr>
        <td>audit-log.logging-level.mask."alarm"</td>
        <td>AUDIT_LOG_MASK_ALARM</td>
        <td>W</td>
        <td>Alarm logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log
            read and write operations)
        </td>
    </tr>
    <tr>
        <td class="item item-pe">audit-log.logging-level.mask."integration"</td>
        <td>AUDIT_LOG_MASK_INTEGRATION</td>
        <td>W</td>
        <td>Integration logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log
            read and write operations)</td>
    </tr>
    <tr>
        <td class="item item-pe">audit-log.logging-level.mask."converter"</td>
        <td>AUDIT_LOG_MASK_CONVERTER</td>
        <td>W</td>
        <td>Converter logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log
            read and write operations)</td>
    </tr>
    <tr>
        <td class="item item-pe">audit-log.logging-level.mask."entity_group"</td>
        <td>AUDIT_LOG_MASK_ENTITY_GROUP</td>
        <td>W</td>
        <td>Entity Group logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log
            read and write operations)</td>
    </tr>
    <tr>
        <td class="item item-pe">audit-log.logging-level.mask."scheduler_event"</td>
        <td>AUDIT_LOG_MASK_SCHEDULER_EVENT</td>
        <td>W</td>
        <td>Scheduler Event logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log
            read and write operations)</td>
    </tr>
    <tr>
        <td class="item item-pe">audit-log.logging-level.mask."blob_entity"</td>
        <td>AUDIT_LOG_MASK_BLOB_ENTITY</td>
        <td>W</td>
        <td>Blob Entity logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log
            read and write operations)</td>
    </tr>
    <tr>
        <td>audit-log.logging-level.mask."entity_view"</td>
        <td>AUDIT_LOG_MASK_ENTITY_VIEW</td>
        <td>W</td>
        <td>Entity View logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b>
            (log read and write operations)
        </td>
    </tr>
    <tr>
        <td>audit-log.logging-level.mask."device_profile"</td>
        <td>AUDIT_LOG_MASK_DEVICE_PROFILE</td>
        <td>W</td>
        <td>Device Profile logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations),
            <b>RW</b> (log read and write operations)
        </td>
    </tr>
    <tr>
        <td>audit-log.logging-level.mask."edge"</td>
        <td>AUDIT_LOG_MASK_EDGE</td>
        <td>W</td>
        <td>Edge logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log
            read and write operations)
        </td>
    </tr>
    <tr>
        <td>audit-log.logging-level.mask."tb_resource"</td>
        <td>AUDIT_LOG_MASK_RESOURCE</td>
        <td>W</td>
        <td>ThingsBoard resource logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations),
            <b>RW</b> (log read and write operations)
        </td>
    </tr>
    <tr>
        <td>audit-log.logging-level.mask."ota_package"</td>
        <td>AUDIT_LOG_MASK_OTA_PACKAGE</td>
        <td>W</td>
        <td>Ota package logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b>
            (log read and write operations)
        </td>
    </tr>
    <tr>
        <td class="item item-pe">audit-log.logging-level.mask."role"</td>
        <td>AUDIT_LOG_MASK_ROLE</td>
        <td>W</td>
        <td>Role logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log
            read and write operations)</td>
    </tr>
    <tr>
        <td class="item item-pe">audit-log.logging-level.mask."group_permission"</td>
        <td>AUDIT_LOG_MASK_GROUP_PERMISSION</td>
        <td>W</td>
        <td>Group Permission logging levels. Allowed values: <b>OFF</b> (disable), <b>W</b> (log write operations), <b>RW</b> (log
            read and write operations)</td>
    </tr>
    <tr>
        <td>audit-log.sink.type</td>
        <td>AUDIT_LOG_SINK_TYPE</td>
        <td>none</td>
        <td>Type of external sink system to forward audit logs records. Possible options: none, elasticsearch</td>
    </tr>
    <tr>
        <td>audit-log.sink.index_pattern</td>
        <td>AUDIT_LOG_SINK_INDEX_PATTERN</td>
        <td>@{TENANT}_AUDIT_LOG_@{DATE}</td>
        <td>Name of the index where audit logs stored. Index name could contain next placeholders (not mandatory):
            @{TENANT} - substituted by tenant ID @{DATE} - substituted by current date in format provided in
            audit_log.sink.date_format
        </td>
    </tr>
    <tr>
        <td>audit-log.sink.date_format</td>
        <td>AUDIT_LOG_SINK_DATE_FORMAT</td>
        <td>YYYY.MM.DD</td>
        <td>Date format. Details of the pattern could be found <a href="https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html">in this link</a></td>
    </tr>
    <tr>
        <td>audit-log.sink.scheme_name</td>
        <td>AUDIT_LOG_SINK_SCHEME_NAME</td>
        <td>http</td>
        <td>http or https</td>
    </tr>
    <tr>
        <td>audit-log.sink.host</td>
        <td>AUDIT_LOG_SINK_HOST</td>
        <td>localhost</td>
        <td>Host of external sink system</td>
    </tr>
    <tr>
        <td>audit-log.sink.port</td>
        <td>AUDIT_LOG_SINK_PORT</td>
        <td>9200</td>
        <td>Port of external sink system</td>
    </tr>
    <tr>
        <td>audit-log.sink.user_name</td>
        <td>AUDIT_LOG_SINK_USER_NAME</td>
        <td></td>
        <td>Username used to access external sink system</td>
    </tr>
    <tr>
        <td>audit-log.sink.password</td>
        <td>AUDIT_LOG_SINK_PASSWORD</td>
        <td></td>
        <td>Password used to access external sink system</td>
    </tr>
    </tbody>
</table>

#### Device connectivity state parameters

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>state.defaultInactivityTimeoutInSec</td>
        <td>DEFAULT_INACTIVITY_TIMEOUT</td>
        <td>600</td>
        <td>Device inactivity timeout in seconds</td>
    </tr>
    <tr>
        <td>state.defaultStateCheckIntervalInSec</td>
        <td>DEFAULT_STATE_CHECK_INTERVAL</td>
        <td>60</td>
        <td>Device inactivity check period in seconds</td>
    </tr>
    <tr>
        <td>state.persistToTelemetry</td>
        <td>PERSIST_STATE_TO_TELEMETRY</td>
        <td>false</td>
        <td></td>
    </tr>
    </tbody>
</table>

#### JavaScript evaluator parameters

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
        <td>Javascript evaluator type - <b>local</b> (Built-in JVM JavaScript environment properties) or <b>remote</b>
            (Remote JavaScript environment )
        </td>
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
        <td>8000</td>
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
        <td>LOCAL_JS_SANDBOX_MAX_BLACKLIST_DURATION_SEC</td>
        <td>60</td>
        <td>Maximum time in seconds for black listed function to stay in the list</td>
    </tr>
    <tr>
        <td>js.local.stats.enabled</td>
        <td>TB_JS_LOCAL_STATS_ENABLED</td>
        <td>false</td>
        <td>Enable/Disable stats collection for local JS executor</td>
    </tr>
    <tr>
        <td>js.local.stats.print_interval_ms</td>
        <td>TB_JS_LOCAL_STATS_PRINT_INTERVAL_MS</td>
        <td>10000</td>
        <td>Interval of logging for local JS executor stats</td>
    </tr>
    <tr>
        <td>js.remote.max_errors</td>
        <td>REMOTE_JS_SANDBOX_MAX_ERRORS</td>
        <td>3</td>
        <td>Maximum allowed JavaScript execution errors before JavaScript will be blacklisted</td>
    </tr>
    <tr>
        <td>js.remote.max_black_list_duration_sec</td>
        <td>REMOTE_JS_SANDBOX_MAX_BLACKLIST_DURATION_SEC</td>
        <td>60</td>
        <td>Maximum time in seconds for black listed function to stay in the list</td>
    </tr>
    <tr>
        <td>js.remote.stats.enabled</td>
        <td>TB_JS_REMOTE_STATS_ENABLED</td>
        <td>false</td>
        <td>Enable/Disable stats collection for remote JS executor</td>
    </tr>
    <tr>
        <td>js.remote.stats.print_interval_ms</td>
        <td>TB_JS_REMOTE_STATS_PRINT_INTERVAL_MS</td>
        <td>10000</td>
        <td>Interval of logging for remote JS executor stats</td>
    </tr>
    </tbody>
</table>

#### Transport parameters

{% assign JSON_TYPE_CAST_ENABLED_VALUE = "true" %} {% include
docs/user-guide/install/transport-sessions-json-client_side_rpc-api_enabled-log-stats-parameters.md %}

##### Local HTTP transport parameters

<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>transport.http.enabled</td>
        <td>HTTP_ENABLED</td>
        <td>true</td>
        <td>Enable/Disable local HTTP transport protocol</td>
    </tr>
    </tbody>
</table>

{% include docs/user-guide/install/http-transport.md %}

##### Local MQTT transport parameters

<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>transport.mqtt.enabled</td>
        <td>MQTT_ENABLED</td>
        <td>true</td>
        <td>Enable/Disable local MQTT transport protocol</td>
    </tr>
    </tbody>
</table>

{% include docs/user-guide/install/mqtt-transport.md %}

##### Local CoAP transport parameters

<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>transport.coap.enabled</td>
        <td>COAP_ENABLED</td>
        <td>true</td>
        <td>Enable/Disable local CoAP transport protocol</td>
    </tr>
    </tbody>
</table>

{% include docs/user-guide/install/coap-transport.md %}

##### Local LwM2M transport parameters

<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>transport.lwm2m.enabled</td>
        <td>LWM2M_ENABLED</td>
        <td>false</td>
        <td>Enable/disable lvm2m transport protocol</td>
    </tr>
    </tbody>
</table>

{% include docs/user-guide/install/lwm2m-transport.md %}

##### Local SNMP transport parameters

<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>transport.snmp.enabled</td>
        <td>SNMP_ENABLED</td>
        <td>false</td>
        <td>Enable/disable SNMP transport protocol</td>
    </tr>
    </tbody>
</table>

{% include docs/user-guide/install/snmp-transport.md %}

{% if docsPrefix == "pe/" %} 
#### License parameters

<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>license.instance_data_file</td>
            <td>EDGE_LICENSE_INSTANCE_DATA_FILE</td>
            <td>instance-edge-license.data</td>
            <td>Instance data is auto-generated and is used to identify particular ThingsBoard Edge Instance.<br>
                Instance data is periodically updated and stored into the specified file which can be set to absolute or relative path.<br>
                Please make sure that thingsboard edge process has access to the instance data file, in case you use absolute path.</td>
        </tr>
    </tbody>
</table>
{% endif %}

#### Swagger parameters

{% if docsPrefix == null %} {% assign SWAGGER_DESCRIPTION_VALUE = "open-source" %} {% assign SWAGGER_CONTACT_NAME_VALUE
= "ThingsBoard team" %} {% endif %} {% if docsPrefix == "pe/" %} {% assign SWAGGER_DESCRIPTION_VALUE = "Edge PE" %} {% assign SWAGGER_CONTACT_NAME_VALUE = "ThingsBoard, Inc." %} {% endif %}
<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
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
            <td>/api/(?:noauth|v1)/.*</td>
            <td>General swagger parameters</td>
        </tr>
        <tr>
            <td>swagger.title</td>
            <td>SWAGGER_TITLE</td>
            <td>ThingsBoard REST API</td>
            <td>The title on the API doc UI page</td>
        </tr>
        <tr>
            <td>swagger.description</td>
            <td>SWAGGER_DESCRIPTION</td>
            <td>ThingsBoard {{SWAGGER_DESCRIPTION_VALUE}} IoT platform REST API documentation.</td>
            <td>The description on the API doc UI page</td>
        </tr>
        <tr>
            <td>swagger.contact.name</td>
            <td>SWAGGER_CONTACT_NAME</td>
            <td>{{SWAGGER_CONTACT_NAME_VALUE}}</td>
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
            <td>https://github.com/thingsboard/thingsboard/blob/master/LICENSE</td>
            <td>Link to the license body on the API doc UI page</td>
        </tr>
        <tr>
            <td>swagger.version</td>
            <td>SWAGGER_VERSION</td>
            <td></td>
            <td>The version of the API doc to display. Default to the package version.</td>
        </tr>
    </tbody>
</table>

#### Queue parameters

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
            <td>in-memory</td>
            <td>In-memory or kafka (Apache Kafka) or aws-sqs (AWS SQS) or pubsub (PubSub) or service-bus (Azure Service Bus) or rabbitmq (RabbitMQ)</td>
        </tr>
        <tr>
            <td>queue.in_memory.stats.print-interval-ms</td>
            <td>TB_QUEUE_IN_MEMORY_STATS_PRINT_INTERVAL_MS</td>
            <td>60000</td>
            <td>For debug lvl</td>
        </tr>
    </tbody>
</table>
{% include docs/user-guide/install/queue-parameters.md %}

#### ThingsBoard event parameters

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>event.debug.max-symbols</td>
            <td>TB_MAX_DEBUG_EVENT_SYMBOLS</td>
            <td>4096</td>
            <td>Maximum number of symbols per debug event. The event content will be truncated if needed.</td>
        </tr>
    </tbody>
</table>

#### ThingsBoard service parameters

{% if docsPrefix == "pe/" %} {% assign TB_SERVICE_TYPE_VALUE = " or tb-integration" %} {% endif %}
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
            <td>monolith</td>
            <td>Allowed values: monolith or tb-core or tb-rule-engine{{TB_SERVICE_TYPE_VALUE}}</td>
        </tr>
        <tr>
            <td>service.id</td>
            <td>TB_SERVICE_ID</td>
            <td></td>
            <td>Unique id for this service (autogenerated if empty)</td>
        </tr>
        <tr>
            <td>service.tenant_id</td>
            <td>TB_SERVICE_TENANT_ID</td>
            <td></td>
            <td>Empty or specific tenant id</td>
        </tr>
    </tbody>
</table>

#### ThingsBoard metrics parameters

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
            <td>Enable/disable actuator metrics</td>
        </tr>
        <tr>
            <td>metrics.timer.percentiles</td>
            <td>METRICS_TIMER_PERCENTILES</td>
            <td>0.5</td>
            <td>Metrics percentiles returned by actuator for timer metrics. List of double values (divided by ,)</td>
        </tr>
        <tr>
            <td>management.endpoints.web.exposure.include</td>
            <td>METRICS_ENDPOINTS_EXPOSE</td>
            <td>info</td>
            <td>Expose metrics endpoint (use value 'prometheus' to enable prometheus metrics)</td>
        </tr>
    </tbody>
</table>

### logback.xml

The configuration file for logging. Allows controlling the log level, the size of log files and the total size/volume of
logs.
