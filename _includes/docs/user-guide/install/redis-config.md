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
            <td>Redis connection type - <b>standalone</b> or <b>cluster</b> or <b>sentinel</b></td>
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
            <td>Redis connection port</td>
        </tr>
        <tr>
            <td>redis.standalone.clientName</td>
            <td>REDIS_CLIENT_NAME</td>
            <td>standalone</td>
            <td>This value may be used only if you used not default ClientConfig</td>
        </tr>
        <tr>
            <td>redis.standalone.connectTimeout</td>
            <td>REDIS_CLIENT_CONNECT_TIMEOUT</td>
            <td>30000</td>
            <td>This value may be used only if you used not default ClientConfig</td>
        </tr>
        <tr>
            <td>redis.standalone.readTimeout</td>
            <td>REDIS_CLIENT_READ_TIMEOUT</td>
            <td>60000</td>
            <td>This value may be used only if you used not default ClientConfig</td>
        </tr>
        <tr>
            <td>redis.standalone.usePoolConfig</td>
            <td>REDIS_CLIENT_USE_POOL_CONFIG</td>
            <td>false</td>
            <td>This value may be used only if you used not default ClientConfig</td>
        </tr>
        <tr>
            <td>redis.cluster.nodes</td>
            <td>REDIS_NODES</td>
            <td></td>
            <td>Comma-separated list of "host:port" pairs to bootstrap from</td>
        </tr>
        <tr>
            <td>redis.cluster.max-redirects</td>
            <td>REDIS_MAX_REDIRECTS</td>
            <td>12</td>
            <td>Maximum number of redirects to follow when executing commands across the cluster</td>
        </tr>
        <tr>
            <td>redis.cluster.useDefaultPoolConfig</td>
            <td>REDIS_USE_DEFAULT_POOL_CONFIG</td>
            <td>true</td>
            <td>Use default redis pool configuration. If set to "true", the REDIS_POOL_CONFIG_* properties will be ignored.</td>
        </tr>
        <tr>
            <td>redis.sentinel.master</td>
            <td>REDIS_MASTER</td>
            <td></td>
            <td>Redis sentinel master name</td>
        </tr>
	    <tr>
            <td>redis.sentinel.sentinels</td>
            <td>REDIS_SENTINELS</td>
            <td></td>
            <td>Comma-separated list of "host:port" pairs of sentinels. Default is located on port 26379 of your redis server.</td>
        </tr>
	    <tr>
            <td>redis.sentinel.password</td>
            <td>REDIS_SENTINEL_PASSWORD</td>
            <td></td>
            <td>Password to authenticate with this sentinel and to authenticate to other sentinels.</td>
        </tr>
	    <tr>
            <td>redis.sentinel.useDefaultPoolConfig</td>
            <td>REDIS_USE_DEFAULT_POOL_CONFIG</td>
            <td>true</td>
            <td>Use default redis pool configuration. If set to "true", the REDIS_POOL_CONFIG_* properties will be ignored.</td>
        </tr>
        <tr>
            <td>redis.db</td>
            <td>REDIS_DB</td>
            <td>0</td>
            <td>Redis database index</td>
        </tr>
        <tr>
            <td>redis.password</td>
            <td>REDIS_PASSWORD</td>
            <td></td>
            <td>Redis database password</td>
        </tr>
        <tr>
            <td>redis.pool_config.maxTotal</td>
            <td>REDIS_POOL_CONFIG_MAX_TOTAL</td>
            <td>128</td>
            <td>General redis pool settings</td>
        </tr>
        <tr>
            <td>redis.pool_config.maxIdle</td>
            <td>REDIS_POOL_CONFIG_MAX_IDLE</td>
            <td>128</td>
            <td>General redis pool settings</td>
        </tr>
        <tr>
            <td>redis.pool_config.minIdle</td>
            <td>REDIS_POOL_CONFIG_MIN_IDLE</td>
            <td>16</td>
            <td>General redis pool settings</td>
        </tr>
        <tr>
            <td>redis.pool_config.testOnBorrow</td>
            <td>REDIS_POOL_CONFIG_TEST_ON_BORROW</td>
            <td>true</td>
            <td>General redis pool settings</td>
        </tr>
        <tr>
            <td>redis.pool_config.testOnReturn</td>
            <td>REDIS_POOL_CONFIG_TEST_ON_RETURN</td>
            <td>true</td>
            <td>General redis pool settings</td>
        </tr>
        <tr>
            <td>redis.pool_config.testWhileIdle</td>
            <td>REDIS_POOL_CONFIG_TEST_WHILE_IDLE</td>
            <td>true</td>
            <td>General redis pool settings</td>
        </tr>
        <tr>
            <td>redis.pool_config.minEvictableMs</td>
            <td>REDIS_POOL_CONFIG_MIN_EVICTABLE_MS</td>
            <td>60000</td>
            <td>General redis pool settings</td>
        </tr>
        <tr>
            <td>redis.pool_config.evictionRunsMs</td>
            <td>REDIS_POOL_CONFIG_EVICTION_RUNS_MS</td>
            <td>30000</td>
            <td>General redis pool settings</td>
        </tr>
        <tr>
            <td>redis.pool_config.maxWaitMills</td>
            <td>REDIS_POOL_CONFIG_MAX_WAIT_MS</td>
            <td>60000</td>
            <td>General redis pool settings</td>
        </tr>
        <tr>
            <td>redis.pool_config.numberTestsPerEvictionRun</td>
            <td>REDIS_POOL_CONFIG_NUMBER_TESTS_PER_EVICTION_RUN</td>
            <td>3</td>
            <td>General redis pool settings</td>
        </tr>
        <tr>
            <td>redis.pool_config.blockWhenExhausted</td>
            <td>REDIS_POOL_CONFIG_BLOCK_WHEN_EXHAUSTED</td>
            <td>true</td>
            <td>General redis pool settings</td>
        </tr>
    </tbody>
</table>