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
          <td>3</td>
          <td>Number of threads that execute batch insert/update statements for attributes. Batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td>
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
          <td>3</td>
          <td>Number of threads that execute batch insert/update statements for time-series data. Batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td>
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
          <td>Maximum timeout for latest telemetry entries queue polling. The value set in milliseconds</td>
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
          <td>3</td>
          <td>Number of threads that execute batch insert/update statements for time-series data. Batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td>
      </tr>
      <tr>
          <td>sql.ts_latest.update_by_latest_ts</td>
          <td>SQL_TS_UPDATE_BY_LATEST_TIMESTAMP</td>
          <td>true</td>
          <td>Update latest values only if the timestamp of the new record is greater or equals than timestamp of the previously saved latest value. Latest values are stored separately from historical values for fast lookup from DB. Insert of historical value happens in any case</td>
      </tr>
      <tr>
          <td>sql.events.batch_size</td>
          <td>SQL_EVENTS_BATCH_SIZE</td>
          <td>10000</td>
          <td>Batch size for persisting latest telemetry updates</td>
      </tr>
      <tr>
          <td>sql.events.batch_max_delay</td>
          <td>SQL_EVENTS_BATCH_MAX_DELAY_MS</td>
          <td>100</td>
          <td>Max timeout for latest telemetry entries queue polling. The value set in milliseconds</td>
      </tr>
      <tr>
          <td>sql.events.stats_print_interval_ms</td>
          <td>SQL_EVENTS_BATCH_STATS_PRINT_MS</td>
          <td>10000</td>
          <td>Interval in milliseconds for printing latest telemetry updates statistic</td>
      </tr>
      <tr>
          <td>sql.events.batch_threads</td>
          <td>SQL_EVENTS_BATCH_THREADS</td>
          <td>3</td>
          <td>Number of threads that execute batch insert/update statements for time-series data. Batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td>
      </tr>
      <tr>
          <td>sql.events.partition_size</td>
          <td>SQL_EVENTS_REGULAR_PARTITION_SIZE_HOURS</td>
          <td>168</td>
          <td>Number of hours to partition the events. The current value corresponds to one week</td>
      </tr>
      <tr>
          <td>sql.events.debug_partition_size</td>
          <td>SQL_EVENTS_DEBUG_PARTITION_SIZE_HOURS</td>
          <td>1</td>
          <td>Number of hours to partition the debug events. The current value corresponds to one hour</td>
      </tr>
      <tr>
          <td>sql.edge_events.batch_size</td>
          <td>SQL_EDGE_EVENTS_BATCH_SIZE</td>
          <td>1000</td>
          <td>Batch size for persisting latest telemetry updates</td>
      </tr>
      <tr>
          <td>sql.edge_events.batch_max_delay</td>
          <td>SQL_EDGE_EVENTS_BATCH_MAX_DELAY_MS</td>
          <td>100</td>
          <td>Max timeout for latest telemetry entries queue polling. The value set in milliseconds</td>
      </tr>
      <tr>
          <td>sql.edge_events.stats_print_interval_ms</td>
          <td>SQL_EDGE_EVENTS_BATCH_STATS_PRINT_MS</td>
          <td>10000</td>
          <td>Interval in milliseconds for printing latest telemetry updates statistic</td>
      </tr>
      <tr>
          <td>sql.edge_events.partition_size</td>
          <td>SQL_EDGE_EVENTS_PARTITION_SIZE_HOURS</td>
          <td>168</td>
          <td>Number of hours to partition the events. The current value corresponds to one week.</td>
      </tr>
      <tr>
          <td>sql.audit_logs.partition_size</td>
          <td>SQL_AUDIT_LOGS_PARTITION_SIZE_HOURS</td>
          <td>168</td>
          <td>Default value - 1 week</td>
      </tr>
      <tr>
          <td>sql.alarm_comments.partition_size</td>
          <td>SQL_ALARM_COMMENTS_PARTITION_SIZE_HOURS</td>
          <td>168</td>
          <td>Default value - 1 week</td>
      </tr>
      <tr>
          <td>sql.blob_entities.partition_size</td>
          <td>SQL_BLOB_ENTITIES_PARTITION_SIZE_HOURS</td>
          <td>168</td>
          <td>Default value - 1 week</td>
      </tr>
      <tr>
          <td>sql.notifications.partition_size</td>
          <td>SQL_NOTIFICATIONS_PARTITION_SIZE_HOURS</td>
          <td>168</td>
          <td>Default value - 1 week</td>
      </tr>
      <tr>
          <td>sql.batch_sort</td>
          <td>SQL_BATCH_SORT</td>
          <td>true</td>
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
          <td>Specify whether to log database queries and their parameters generated by entity query repository</td>
      </tr>
      <tr>
          <td>sql.log_queries_threshold</td>
          <td>SQL_LOG_QUERIES_THRESHOLD</td>
          <td>5000</td>
          <td>Threshold of slow SQL queries to log. The value set in milliseconds</td>
      </tr>
      <tr>
          <td>sql.log_tenant_stats</td>
          <td>SQL_LOG_TENANT_STATS</td>
          <td>true</td>
          <td>Enable/Disable logging statistic information about tenants</td>
      </tr>
      <tr>
          <td>sql.log_tenant_stats_interval_ms</td>
          <td>SQL_LOG_TENANT_STATS_INTERVAL_MS</td>
          <td>60000</td>
          <td>Interval in milliseconds for printing latest statistic information about tenant</td>
      </tr>
      <tr>
          <td>sql.postgres.ts_key_value_partitioning</td>
          <td>SQL_POSTGRES_TS_KV_PARTITIONING</td>
          <td>MONTHS</td>
          <td>Specify partitioning size for timestamp key-value storage. Example: DAYS, MONTHS, YEARS, INDEFINITE.</td>
      </tr>
      <tr>
          <td>sql.timescale.chunk_time_interval</td>
          <td>SQL_TIMESCALE_CHUNK_TIME_INTERVAL</td>
          <td>604800000</td>
          <td>Specify Interval size for new data chunks storage.</td>
      </tr>
      <tr>
          <td>sql.timescale.batch_threads</td>
          <td>SQL_TIMESCALE_BATCH_THREADS</td>
          <td>3</td>
          <td>batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td>
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
          <td>The parameter to specify the period of execution TTL task for timeseries records. Number of milliseconds. The current value corresponds to one day</td>
      </tr>
      <tr>
          <td>sql.ttl.ts.ts_key_value_ttl</td>
          <td>SQL_TTL_TS_TS_KEY_VALUE_TTL</td>
          <td>0</td>
          <td>The parameter to specify system TTL(Time To Live) value for timeseries records. Value set in seconds. 0 - records are never expired. System TTL value can be overwritten for a particular Tenant, or parent Customer entity by setting the server-side attribute TTL to the corresponding Tenant or parent Customer entity. Please, note that the value should be set as long value, otherwise the TTL will be used from the higher level(Tenant or System). Number of seconds</td>
      </tr>
      <tr>
          <td>sql.ttl.events.enabled</td>
          <td>SQL_TTL_EVENTS_ENABLED</td>
          <td>true</td>
          <td>The parameter to specify whether to use TTL (Time To Live) for event records</td>
      </tr>
      <tr>
          <td>sql.ttl.events.execution_interval_ms</td>
          <td>SQL_TTL_EVENTS_EXECUTION_INTERVAL</td>
          <td>3600000</td>
          <td>The parameter to specify the period of execution TTL task for events records. Value set in milliseconds. (max random initial delay and fixed period). Number of milliseconds (max random initial delay and fixed period)</td>
      </tr>
      <tr>
          <td>sql.ttl.events.events_ttl</td>
          <td>SQL_TTL_EVENTS_EVENTS_TTL</td>
          <td>0</td>
          <td>Number of seconds. TTL is disabled by default. Accuracy of the cleanup depends on the sql.events.partition_size parameter</td>
      </tr>
      <tr>
          <td>sql.ttl.events.debug_events_ttl</td>
          <td>SQL_TTL_EVENTS_DEBUG_EVENTS_TTL</td>
          <td>604800</td>
          <td>Number of seconds. The current value corresponds to one week. Accuracy of the cleanup depends on the sql.events.debug_partition_size parameter</td>
      </tr>
      <tr>
          <td>sql.ttl.edge_events.enabled</td>
          <td>SQL_TTL_EDGE_EVENTS_ENABLED</td>
          <td>true</td>
          <td>The parameter to specify whether to use TTL (Time To Live) for egde event records</td>
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
          <td>The parameter to specify whether to use TTL (Time To Live) for rpc call records</td>
      </tr>
      <tr>
          <td>sql.ttl.rpc.checking_interval</td>
          <td>SQL_RPC_TTL_CHECKING_INTERVAL</td>
          <td>7200000</td>
          <td>Number of milliseconds. The current value corresponds to two hours</td>
      </tr>
      <tr>
          <td>sql.ttl.audit_logs.enabled</td>
          <td>SQL_TTL_AUDIT_LOGS_ENABLED</td>
          <td>true</td>
          <td>The parameter to specify whether to use TTL (Time To Live) for audit log records</td>
      </tr>
      <tr>
          <td>sql.ttl.audit_logs.ttl</td>
          <td>SQL_TTL_AUDIT_LOGS_SECS</td>
          <td>0</td>
          <td>Disabled by default. Accuracy of the cleanup depends on the sql.audit_logs.partition_size</td>
      </tr>
      <tr>
          <td>sql.ttl.audit_logs.checking_interval_ms</td>
          <td>SQL_TTL_AUDIT_LOGS_CHECKING_INTERVAL_MS</td>
          <td>86400000</td>
          <td>Default value - 1 day. Value set in milliseconds</td>
      </tr>
      <tr>
          <td>sql.ttl.blob_entities.enabled</td>
          <td>SQL_TTL_BLOB_ENTITIES_ENABLED</td>
          <td>false</td>
          <td>The parameter to specify whether to use TTL (Time To Live) for blob entity records</td>
      </tr>
      <tr>
          <td>sql.ttl.blob_entities.ttl</td>
          <td>SQL_TTL_BLOB_ENTITIES_SECS</td>
          <td>0</td>
          <td>Number of seconds. TTL is disabled by default</td>
      </tr>
      <tr>
          <td>sql.ttl.blob_entities.checking_interval_ms</td>
          <td>SQL_TTL_BLOB_ENTITIES_CHECKING_INTERVAL_MS</td>
          <td>86400000</td>
          <td>Default value - 1 day</td>
      </tr>
      <tr>
          <td>sql.ttl.notifications.enabled</td>
          <td>SQL_TTL_NOTIFICATIONS_ENABLED</td>
          <td>true</td>
          <td>The parameter to specify whether to use TTL (Time To Live) for notification center records</td>
      </tr>
      <tr>
          <td>sql.ttl.notifications.ttl</td>
          <td>SQL_TTL_NOTIFICATIONS_SECS</td>
          <td>2592000</td>
          <td>Default value - 30 days</td>
      </tr>
      <tr>
          <td>sql.ttl.notifications.checking_interval_ms</td>
          <td>SQL_TTL_NOTIFICATIONS_CHECKING_INTERVAL_MS</td>
          <td>86400000</td>
          <td>Default value - 1 day</td>
      </tr>
      <tr>
          <td>sql.relations.max_level</td>
          <td>SQL_RELATIONS_MAX_LEVEL</td>
          <td>50</td>
          <td>This value has to be reasonable small to prevent infinite recursion as early as possible</td>
      </tr>
      <tr>
          <td>sql.relations.pool_size</td>
          <td>SQL_RELATIONS_POOL_SIZE</td>
          <td>4</td>
          <td>This value has to be reasonable small to prevent relation query blocking all other DB calls</td>
      </tr>
      <tr>
          <td>sql.relations.query_timeout</td>
          <td>SQL_RELATIONS_QUERY_TIMEOUT_SEC</td>
          <td>20</td>
          <td>This value has to be reasonable small to prevent relation query blocking all other DB calls</td>
      </tr>
  </tbody>
</table>
