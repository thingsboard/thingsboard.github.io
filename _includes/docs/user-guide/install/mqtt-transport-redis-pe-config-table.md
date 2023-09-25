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
          <td></td>
      </tr>
      <tr>
          <td>redis.standalone.host</td>
          <td>REDIS_HOST</td>
          <td>localhost</td>
          <td>Redis connection host</td>
      </tr>
      <tr>
          <td>redis.standalone.port</td>
          <td>REDIS_PORT</td>
          <td>6379</td>
          <td>Redis connection port</td>
      </tr>
      <tr>
          <td>redis.standalone.useDefaultClientConfig</td>
          <td>REDIS_USE_DEFAULT_CLIENT_CONFIG</td>
          <td>true</td>
          <td>Use default Redis configuration file</td>
      </tr>
      <tr>
          <td>redis.standalone.clientName</td>
          <td>REDIS_CLIENT_NAME</td>
          <td>standalone</td>
          <td>This value may be used only if you used not default ClientConfig. The client name as set by CLIENT SETNAME</td>
      </tr>
      <tr>
          <td>redis.standalone.connectTimeout</td>
          <td>REDIS_CLIENT_CONNECT_TIMEOUT</td>
          <td>30000</td>
          <td>This value may be used only if you used not default ClientConfig. This setting determines the amount of time a Redis client will wait for a connection to be established with the server</td>
      </tr>
      <tr>
          <td>redis.standalone.readTimeout</td>
          <td>REDIS_CLIENT_READ_TIMEOUT</td>
          <td>60000</td>
          <td>This value may be used only if you used not default ClientConfig. The configuration parameter that determines the amount of time a Redis client will wait for a response from the server</td>
      </tr>
      <tr>
          <td>redis.standalone.usePoolConfig</td>
          <td>REDIS_CLIENT_USE_POOL_CONFIG</td>
          <td>false</td>
          <td>This value may be used only if you used not default ClientConfig. Enable/Disable client pool config to the Redis server</td>
      </tr>
      <tr>
          <td>redis.cluster.nodes</td>
          <td>REDIS_NODES</td>
          <td></td>
          <td>Comma-separated list of "host:port" pairs to bootstrap from.</td>
      </tr>
      <tr>
          <td>redis.cluster.max-redirects</td>
          <td>REDIS_MAX_REDIRECTS</td>
          <td>12</td>
          <td>Maximum number of redirects to follow when executing commands across the cluster.</td>
      </tr>
      <tr>
          <td>redis.cluster.useDefaultPoolConfig</td>
          <td>REDIS_USE_DEFAULT_POOL_CONFIG</td>
          <td>true</td>
          <td></td>
      </tr>
      <tr>
          <td>redis.db</td>
          <td>REDIS_DB</td>
          <td>0</td>
          <td>db index</td>
      </tr>
      <tr>
          <td>redis.password</td>
          <td>REDIS_PASSWORD</td>
          <td></td>
          <td>db password</td>
      </tr>
      <tr>
          <td>redis.pool_config.maxTotal</td>
          <td>REDIS_POOL_CONFIG_MAX_TOTAL</td>
          <td>128</td>
          <td>Maximum number of connections that can be allocated by the connection pool</td>
      </tr>
      <tr>
          <td>redis.pool_config.maxIdle</td>
          <td>REDIS_POOL_CONFIG_MAX_IDLE</td>
          <td>128</td>
          <td>Maximum number of idle connections that can be maintained in the pool without being closed</td>
      </tr>
      <tr>
          <td>redis.pool_config.minIdle</td>
          <td>REDIS_POOL_CONFIG_MIN_IDLE</td>
          <td>16</td>
          <td>Minumum number of idle connections that can be maintained in the pool without being closed</td>
      </tr>
      <tr>
          <td>redis.pool_config.testOnBorrow</td>
          <td>REDIS_POOL_CONFIG_TEST_ON_BORROW</td>
          <td>true</td>
          <td>Enable/Disable PING command send when a connection is borrowed</td>
      </tr>
      <tr>
          <td>redis.pool_config.testOnReturn</td>
          <td>REDIS_POOL_CONFIG_TEST_ON_RETURN</td>
          <td>true</td>
          <td>The property is used to specify whether or not to test the connection before returning it to the connection pool.</td>
      </tr>
      <tr>
          <td>redis.pool_config.testWhileIdle</td>
          <td>REDIS_POOL_CONFIG_TEST_WHILE_IDLE</td>
          <td>true</td>
          <td>The property is used in the context of connection pooling in Redis</td>
      </tr>
      <tr>
          <td>redis.pool_config.minEvictableMs</td>
          <td>REDIS_POOL_CONFIG_MIN_EVICTABLE_MS</td>
          <td>60000</td>
          <td>Minimum amount of time that an idle connection should be idle before it can be evicted from the connection pool. Value set in milliseconds</td>
      </tr>
      <tr>
          <td>redis.pool_config.evictionRunsMs</td>
          <td>REDIS_POOL_CONFIG_EVICTION_RUNS_MS</td>
          <td>30000</td>
          <td>Specifies the time interval in milliseconds between two consecutive eviction runs</td>
      </tr>
      <tr>
          <td>redis.pool_config.maxWaitMills</td>
          <td>REDIS_POOL_CONFIG_MAX_WAIT_MS</td>
          <td>60000</td>
          <td>Maximum time in milliseconds where a client is willing to wait for a connection from the pool when all connections are exhausted</td>
      </tr>
      <tr>
          <td>redis.pool_config.numberTestsPerEvictionRun</td>
          <td>REDIS_POOL_CONFIG_NUMBER_TESTS_PER_EVICTION_RUN</td>
          <td>3</td>
          <td>Specifies the number of connections to test for eviction during each eviction run</td>
      </tr>
      <tr>
          <td>redis.pool_config.blockWhenExhausted</td>
          <td>REDIS_POOL_CONFIG_BLOCK_WHEN_EXHAUSTED</td>
          <td>true</td>
          <td>Determines the behavior when a thread requests a connection from the pool but there are no available connections and the pool cannot create more due to the maxTotal configuration</td>
      </tr>
  </tbody>
</table>