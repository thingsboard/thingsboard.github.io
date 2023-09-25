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
          <td>Number of messages the actor system will process per actor before switching to processing of messages for next actor</td>
      </tr>
      <tr>
          <td>actors.system.scheduler_pool_size</td>
          <td>ACTORS_SYSTEM_SCHEDULER_POOL_SIZE</td>
          <td>1</td>
          <td>Thread pool size for actor system scheduler</td>
      </tr>
      <tr>
          <td>actors.system.max_actor_init_attempts</td>
          <td>ACTORS_SYSTEM_MAX_ACTOR_INIT_ATTEMPTS</td>
          <td>10</td>
          <td>Maximum number of attempts to init the actor before disabling the actor</td>
      </tr>
      <tr>
          <td>actors.system.app_dispatcher_pool_size</td>
          <td>ACTORS_SYSTEM_APP_DISPATCHER_POOL_SIZE</td>
          <td>1</td>
          <td>Thread pool size for main actor system dispatcher</td>
      </tr>
      <tr>
          <td>actors.system.tenant_dispatcher_pool_size</td>
          <td>ACTORS_SYSTEM_TENANT_DISPATCHER_POOL_SIZE</td>
          <td>2</td>
          <td>Thread pool size for actor system dispatcher that process messages for tenant actors</td>
      </tr>
      <tr>
          <td>actors.system.device_dispatcher_pool_size</td>
          <td>ACTORS_SYSTEM_DEVICE_DISPATCHER_POOL_SIZE</td>
          <td>4</td>
          <td>Thread pool size for actor system dispatcher that process messages for device actors</td>
      </tr>
      <tr>
          <td>actors.system.rule_dispatcher_pool_size</td>
          <td>ACTORS_SYSTEM_RULE_DISPATCHER_POOL_SIZE</td>
          <td>4</td>
          <td>Thread pool size for actor system dispatcher that process messages for rule engine (chain/node) actors</td>
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
          <td>actors.rule.mail_thread_pool_size</td>
          <td>ACTORS_RULE_MAIL_THREAD_POOL_SIZE</td>
          <td>40</td>
          <td>Specify thread pool size for mail sender executor service</td>
      </tr>
      <tr>
          <td>actors.rule.mail_password_reset_thread_pool_size</td>
          <td>ACTORS_RULE_MAIL_PASSWORD_RESET_THREAD_POOL_SIZE</td>
          <td>10</td>
          <td>Specify thread pool size for password reset emails</td>
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
          <td>Enable/Disable the rate limit of persisted debug events for all rule nodes per tenant</td>
      </tr>
      <tr>
          <td>actors.rule.chain.debug_mode_rate_limits_per_tenant.configuration</td>
          <td>ACTORS_RULE_CHAIN_DEBUG_MODE_RATE_LIMITS_PER_TENANT_CONFIGURATION</td>
          <td>50000:3600</td>
          <td>The value of DEBUG mode rate limit. By default, no more then 50 thousand events per hour</td>
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
          <td>Maximum number of persistent RPC call retries in case of failed requests delivery</td>
      </tr>
      <tr>
          <td>actors.rpc.sequential</td>
          <td>ACTORS_RPC_SEQUENTIAL</td>
          <td>false</td>
          <td>Enable/Disable sequential processing of RPC calls per device</td>
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
