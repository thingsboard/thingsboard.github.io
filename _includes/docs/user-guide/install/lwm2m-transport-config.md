

####  Spring common parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>spring.main.web-environment</td>
			<td>WEB_APPLICATION_ENABLE</td>
			<td>false</td>
			<td> If you enabled process metrics you should also enable 'web-environment'.</td>
		</tr>
		<tr>
			<td>spring.main.web-application-type</td>
			<td>WEB_APPLICATION_TYPE</td>
			<td>none</td>
			<td> If you enabled process metrics you should set 'web-application-type' to 'servlet' value.</td>
		</tr>
		<tr>
			<td>spring.main.allow-circular-references</td>
			<td></td>
			<td>"true" </td>
			<td> Spring Boot configuration property that controls whether circular dependencies between beans are allowed.</td>
		</tr>
	</tbody>
</table>


####  Server common parameters

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
			<td> Server bind address (has no effect if web-environment is disabled).</td>
		</tr>
		<tr>
			<td>server.port</td>
			<td>HTTP_BIND_PORT</td>
			<td>8083</td>
			<td> Server bind port (has no effect if web-environment is disabled).</td>
		</tr>
	</tbody>
</table>


####  Zookeeper connection parameters. Used for service discovery.

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>zk.enabled</td>
			<td>ZOOKEEPER_ENABLED</td>
			<td>false</td>
			<td> Enable/disable zookeeper discovery service.</td>
		</tr>
		<tr>
			<td>zk.url</td>
			<td>ZOOKEEPER_URL</td>
			<td>localhost:2181</td>
			<td> Zookeeper connect string</td>
		</tr>
		<tr>
			<td>zk.retry_interval_ms</td>
			<td>ZOOKEEPER_RETRY_INTERVAL_MS</td>
			<td>3000</td>
			<td> Zookeeper retry interval in milliseconds</td>
		</tr>
		<tr>
			<td>zk.connection_timeout_ms</td>
			<td>ZOOKEEPER_CONNECTION_TIMEOUT_MS</td>
			<td>3000</td>
			<td> Zookeeper connection timeout in milliseconds</td>
		</tr>
		<tr>
			<td>zk.session_timeout_ms</td>
			<td>ZOOKEEPER_SESSION_TIMEOUT_MS</td>
			<td>3000</td>
			<td> Zookeeper session timeout in milliseconds</td>
		</tr>
		<tr>
			<td>zk.zk_dir</td>
			<td>ZOOKEEPER_NODES_DIR</td>
			<td>/thingsboard</td>
			<td> Name of the directory in zookeeper 'filesystem'</td>
		</tr>
		<tr>
			<td>zk.recalculate_delay</td>
			<td>ZOOKEEPER_RECALCULATE_DELAY_MS</td>
			<td>0</td>
			<td> The recalculate_delay property is recommended in a microservices architecture setup for rule-engine services.
 This property provides a pause to ensure that when a rule-engine service is restarted, other nodes don't immediately attempt to recalculate their partitions.
 The delay is recommended because the initialization of rule chain actors is time-consuming. Avoiding unnecessary recalculations during a restart can enhance system performance and stability.</td>
		</tr>
	</tbody>
</table>


####  Cache parameters

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
			<td>redis</td>
			<td> caffeine or redis</td>
		</tr>
		<tr>
			<td>cache.entityLimits.timeToLiveInMinutes</td>
			<td>CACHE_SPECS_ENTITY_LIMITS_TTL</td>
			<td>5</td>
			<td> Entity limits cache TTL</td>
		</tr>
		<tr>
			<td>cache.entityLimits.maxSize</td>
			<td>CACHE_SPECS_ENTITY_LIMITS_MAX_SIZE</td>
			<td>100000</td>
			<td> 0 means the cache is disabled</td>
		</tr>
	</tbody>
</table>


####  Redis configuration parameters

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
			<td> standalone or cluster or sentinel</td>
		</tr>
		<tr>
			<td>redis.standalone.host</td>
			<td>REDIS_HOST</td>
			<td>localhost</td>
			<td> Redis connection host</td>
		</tr>
		<tr>
			<td>redis.standalone.port</td>
			<td>REDIS_PORT</td>
			<td>6379</td>
			<td> Redis connection port</td>
		</tr>
		<tr>
			<td>redis.standalone.useDefaultClientConfig</td>
			<td>REDIS_USE_DEFAULT_CLIENT_CONFIG</td>
			<td>true</td>
			<td> Use default Redis configuration file</td>
		</tr>
		<tr>
			<td>redis.standalone.clientName</td>
			<td>REDIS_CLIENT_NAME</td>
			<td>standalone</td>
			<td> this value may be used only if you used not default ClientConfig</td>
		</tr>
		<tr>
			<td>redis.standalone.connectTimeout</td>
			<td>REDIS_CLIENT_CONNECT_TIMEOUT</td>
			<td>30000</td>
			<td> this value may be used only if you used not default ClientConfig</td>
		</tr>
		<tr>
			<td>redis.standalone.readTimeout</td>
			<td>REDIS_CLIENT_READ_TIMEOUT</td>
			<td>60000</td>
			<td> this value may be used only if you used not default ClientConfig</td>
		</tr>
		<tr>
			<td>redis.standalone.usePoolConfig</td>
			<td>REDIS_CLIENT_USE_POOL_CONFIG</td>
			<td>false</td>
			<td> this value may be used only if you used not default ClientConfig</td>
		</tr>
		<tr>
			<td>redis.cluster.nodes</td>
			<td>REDIS_NODES</td>
			<td></td>
			<td> Comma-separated list of "host:port" pairs to bootstrap from.</td>
		</tr>
		<tr>
			<td>redis.cluster.max-redirects</td>
			<td>REDIS_MAX_REDIRECTS</td>
			<td>12</td>
			<td> Maximum number of redirects to follow when executing commands across the cluster.</td>
		</tr>
		<tr>
			<td>redis.cluster.useDefaultPoolConfig</td>
			<td>REDIS_USE_DEFAULT_POOL_CONFIG</td>
			<td>true</td>
			<td> if set false will be used pool config build from values of the pool config section</td>
		</tr>
		<tr>
			<td>redis.sentinel.master</td>
			<td>REDIS_MASTER</td>
			<td></td>
			<td> name of master node</td>
		</tr>
		<tr>
			<td>redis.sentinel.sentinels</td>
			<td>REDIS_SENTINELS</td>
			<td></td>
			<td> comma-separated list of "host:port" pairs of sentinels</td>
		</tr>
		<tr>
			<td>redis.sentinel.password</td>
			<td>REDIS_SENTINEL_PASSWORD</td>
			<td></td>
			<td> password to authenticate with sentinel</td>
		</tr>
		<tr>
			<td>redis.sentinel.useDefaultPoolConfig</td>
			<td>REDIS_USE_DEFAULT_POOL_CONFIG</td>
			<td>true</td>
			<td> if set false will be used pool config build from values of the pool config section</td>
		</tr>
		<tr>
			<td>redis.db</td>
			<td>REDIS_DB</td>
			<td>0</td>
			<td> db index</td>
		</tr>
		<tr>
			<td>redis.password</td>
			<td>REDIS_PASSWORD</td>
			<td></td>
			<td> db password</td>
		</tr>
		<tr>
			<td>redis.pool_config.maxTotal</td>
			<td>REDIS_POOL_CONFIG_MAX_TOTAL</td>
			<td>128</td>
			<td> Maximum number of connections that can be allocated by the connection pool</td>
		</tr>
		<tr>
			<td>redis.pool_config.maxIdle</td>
			<td>REDIS_POOL_CONFIG_MAX_IDLE</td>
			<td>128</td>
			<td> Maximum number of idle connections that can be maintained in the pool without being closed</td>
		</tr>
		<tr>
			<td>redis.pool_config.minIdle</td>
			<td>REDIS_POOL_CONFIG_MIN_IDLE</td>
			<td>16</td>
			<td> Minumum number of idle connections that can be maintained in the pool without being closed</td>
		</tr>
		<tr>
			<td>redis.pool_config.testOnBorrow</td>
			<td>REDIS_POOL_CONFIG_TEST_ON_BORROW</td>
			<td>true</td>
			<td> Enable/Disable PING command send when a connection is borrowed</td>
		</tr>
		<tr>
			<td>redis.pool_config.testOnReturn</td>
			<td>REDIS_POOL_CONFIG_TEST_ON_RETURN</td>
			<td>true</td>
			<td> The property is used to specify whether to test the connection before returning it to the connection pool.</td>
		</tr>
		<tr>
			<td>redis.pool_config.testWhileIdle</td>
			<td>REDIS_POOL_CONFIG_TEST_WHILE_IDLE</td>
			<td>true</td>
			<td> The property is used in the context of connection pooling in Redis</td>
		</tr>
		<tr>
			<td>redis.pool_config.minEvictableMs</td>
			<td>REDIS_POOL_CONFIG_MIN_EVICTABLE_MS</td>
			<td>60000</td>
			<td> Minimum amount of time that an idle connection should be idle before it can be evicted from the connection pool. Value set in milliseconds</td>
		</tr>
		<tr>
			<td>redis.pool_config.evictionRunsMs</td>
			<td>REDIS_POOL_CONFIG_EVICTION_RUNS_MS</td>
			<td>30000</td>
			<td> Specifies the time interval in milliseconds between two consecutive eviction runs</td>
		</tr>
		<tr>
			<td>redis.pool_config.maxWaitMills</td>
			<td>REDIS_POOL_CONFIG_MAX_WAIT_MS</td>
			<td>60000</td>
			<td> Maximum time in milliseconds where a client is willing to wait for a connection from the pool when all connections are exhausted</td>
		</tr>
		<tr>
			<td>redis.pool_config.numberTestsPerEvictionRun</td>
			<td>REDIS_POOL_CONFIG_NUMBER_TESTS_PER_EVICTION_RUN</td>
			<td>3</td>
			<td> Specifies the number of connections to test for eviction during each eviction run</td>
		</tr>
		<tr>
			<td>redis.pool_config.blockWhenExhausted</td>
			<td>REDIS_POOL_CONFIG_BLOCK_WHEN_EXHAUSTED</td>
			<td>true</td>
			<td> Determines the behavior when a thread requests a connection from the pool but there are no available connections and the pool cannot create more due to the maxTotal configuration</td>
		</tr>
	</tbody>
</table>


####  LWM2M server parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>transport.sessions.inactivity_timeout</td>
			<td>TB_TRANSPORT_SESSIONS_INACTIVITY_TIMEOUT</td>
			<td>300000</td>
			<td> Inactivity timeout for device session in transport service. The last activity time of the device session is updated if the device sends any message, including keepalive messages</td>
		</tr>
		<tr>
			<td>transport.sessions.report_timeout</td>
			<td>TB_TRANSPORT_SESSIONS_REPORT_TIMEOUT</td>
			<td>3000</td>
			<td> Interval of periodic check for expired sessions and report of the changes to session last activity time</td>
		</tr>
		<tr>
			<td>transport.json.type_cast_enabled</td>
			<td>JSON_TYPE_CAST_ENABLED</td>
			<td>false</td>
			<td> Cast String data types to Numeric if possible when processing Telemetry/Attributes JSON</td>
		</tr>
		<tr>
			<td>transport.json.max_string_value_length</td>
			<td>JSON_MAX_STRING_VALUE_LENGTH</td>
			<td>0</td>
			<td> Maximum allowed string value length when processing Telemetry/Attributes JSON (0 value disables string value length check)</td>
		</tr>
		<tr>
			<td>transport.client_side_rpc.timeout</td>
			<td>CLIENT_SIDE_RPC_TIMEOUT</td>
			<td>60000</td>
			<td> Processing timeout interval of the RPC command on the CLIENT SIDE. Time in milliseconds</td>
		</tr>
		<tr>
			<td>transport.api_enabled</td>
			<td>TB_TRANSPORT_API_ENABLED</td>
			<td>true</td>
			<td> Enable/disable http/mqtt/coap transport protocols (has higher priority than certain protocol's 'enabled' property)</td>
		</tr>
		<tr>
			<td>transport.log.enabled</td>
			<td>TB_TRANSPORT_LOG_ENABLED</td>
			<td>true</td>
			<td> Enable/Disable log of transport messages to telemetry. For example, logging of LwM2M registration update</td>
		</tr>
		<tr>
			<td>transport.log.max_length</td>
			<td>TB_TRANSPORT_LOG_MAX_LENGTH</td>
			<td>1024</td>
			<td> Maximum length of the log message. The content will be truncated to the specified value if needed</td>
		</tr>
		<tr>
			<td>transport.lwm2m.enabled</td>
			<td>LWM2M_ENABLED</td>
			<td>true</td>
			<td> Enable/disable lvm2m transport protocol.</td>
		</tr>
		<tr>
			<td>transport.lwm2m.dtls.retransmission_timeout</td>
			<td>LWM2M_DTLS_RETRANSMISSION_TIMEOUT_MS</td>
			<td>9000</td>
			<td> RFC7925_RETRANSMISSION_TIMEOUT_IN_MILLISECONDS = 9000</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.id</td>
			<td>LWM2M_SERVER_ID</td>
			<td>123</td>
			<td> LwM2M Server ID</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.bind_address</td>
			<td>LWM2M_BIND_ADDRESS</td>
			<td>0.0.0.0</td>
			<td> LwM2M server bind address. Bind to all interfaces by default</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.bind_port</td>
			<td>LWM2M_BIND_PORT</td>
			<td>5685</td>
			<td> LwM2M server bind port</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.bind_address</td>
			<td>LWM2M_SECURITY_BIND_ADDRESS</td>
			<td>0.0.0.0</td>
			<td> LwM2M server bind address for DTLS. Bind to all interfaces by default</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.bind_port</td>
			<td>LWM2M_SECURITY_BIND_PORT</td>
			<td>5686</td>
			<td> LwM2M server bind port for DTLS</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.credentials.enabled</td>
			<td>LWM2M_SERVER_CREDENTIALS_ENABLED</td>
			<td>false</td>
			<td> Whether to enable LWM2M server X509 Certificate/RPK support</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.credentials.type</td>
			<td>LWM2M_SERVER_CREDENTIALS_TYPE</td>
			<td>PEM</td>
			<td> Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.credentials.pem.cert_file</td>
			<td>LWM2M_SERVER_PEM_CERT</td>
			<td>lwm2mserver.pem</td>
			<td> Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.credentials.pem.key_file</td>
			<td>LWM2M_SERVER_PEM_KEY</td>
			<td>lwm2mserver_key.pem</td>
			<td> Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.credentials.pem.key_password</td>
			<td>LWM2M_SERVER_PEM_KEY_PASSWORD</td>
			<td>server_key_password</td>
			<td> Server certificate private key password (optional)</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.credentials.keystore.type</td>
			<td>LWM2M_SERVER_KEY_STORE_TYPE</td>
			<td>JKS</td>
			<td> Type of the key store (JKS or PKCS12)</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.credentials.keystore.store_file</td>
			<td>LWM2M_SERVER_KEY_STORE</td>
			<td>lwm2mserver.jks</td>
			<td> Path to the key store that holds the SSL certificate</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.credentials.keystore.store_password</td>
			<td>LWM2M_SERVER_KEY_STORE_PASSWORD</td>
			<td>server_ks_password</td>
			<td> Password used to access the key store</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.credentials.keystore.key_alias</td>
			<td>LWM2M_SERVER_KEY_ALIAS</td>
			<td>server</td>
			<td> Key alias</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.credentials.keystore.key_password</td>
			<td>LWM2M_SERVER_KEY_PASSWORD</td>
			<td>server_ks_password</td>
			<td> Password used to access the key</td>
		</tr>
		<tr>
			<td>transport.lwm2m.server.security.skip_validity_check_for_client_cert</td>
			<td>TB_LWM2M_SERVER_SECURITY_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT</td>
			<td>false</td>
			<td> Only Certificate_x509:</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.enabled</td>
			<td>LWM2M_ENABLED_BS</td>
			<td>true</td>
			<td> Enable/disable Bootstrap Server</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.id</td>
			<td>LWM2M_SERVER_ID_BS</td>
			<td>111</td>
			<td> Default value in Lwm2mClient after start in mode Bootstrap for the object : name "LWM2M Security" field: "Short Server ID" (deviceProfile: Bootstrap.BOOTSTRAP SERVER.Short ID)</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.bind_address</td>
			<td>LWM2M_BS_BIND_ADDRESS</td>
			<td>0.0.0.0</td>
			<td> LwM2M bootstrap server bind address. Bind to all interfaces by default</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.bind_port</td>
			<td>LWM2M_BS_BIND_PORT</td>
			<td>5687</td>
			<td> LwM2M bootstrap server bind port</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.security.bind_address</td>
			<td>LWM2M_BS_SECURITY_BIND_ADDRESS</td>
			<td>0.0.0.0</td>
			<td> LwM2M bootstrap server bind address for DTLS. Bind to all interfaces by default</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.security.bind_port</td>
			<td>LWM2M_BS_SECURITY_BIND_PORT</td>
			<td>5688</td>
			<td> LwM2M bootstrap server bind address for DTLS. Bind to all interfaces by default</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.security.credentials.enabled</td>
			<td>LWM2M_BS_CREDENTIALS_ENABLED</td>
			<td>false</td>
			<td> Whether to enable LWM2M bootstrap server X509 Certificate/RPK support</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.security.credentials.type</td>
			<td>LWM2M_BS_CREDENTIALS_TYPE</td>
			<td>PEM</td>
			<td> Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.security.credentials.pem.cert_file</td>
			<td>LWM2M_BS_PEM_CERT</td>
			<td>lwm2mserver.pem</td>
			<td> Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.security.credentials.pem.key_file</td>
			<td>LWM2M_BS_PEM_KEY</td>
			<td>lwm2mserver_key.pem</td>
			<td> Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.security.credentials.pem.key_password</td>
			<td>LWM2M_BS_PEM_KEY_PASSWORD</td>
			<td>server_key_password</td>
			<td> Server certificate private key password (optional)</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.security.credentials.keystore.type</td>
			<td>LWM2M_BS_KEY_STORE_TYPE</td>
			<td>JKS</td>
			<td> Type of the key store (JKS or PKCS12)</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.security.credentials.keystore.store_file</td>
			<td>LWM2M_BS_KEY_STORE</td>
			<td>lwm2mserver.jks</td>
			<td> Path to the key store that holds the SSL certificate</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.security.credentials.keystore.store_password</td>
			<td>LWM2M_BS_KEY_STORE_PASSWORD</td>
			<td>server_ks_password</td>
			<td> Password used to access the key store</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.security.credentials.keystore.key_alias</td>
			<td>LWM2M_BS_KEY_ALIAS</td>
			<td>bootstrap</td>
			<td> Key alias</td>
		</tr>
		<tr>
			<td>transport.lwm2m.bootstrap.security.credentials.keystore.key_password</td>
			<td>LWM2M_BS_KEY_PASSWORD</td>
			<td>server_ks_password</td>
			<td> Password used to access the key</td>
		</tr>
		<tr>
			<td>transport.lwm2m.security.trust-credentials.enabled</td>
			<td>LWM2M_TRUST_CREDENTIALS_ENABLED</td>
			<td>false</td>
			<td> Whether to load X509 trust certificates</td>
		</tr>
		<tr>
			<td>transport.lwm2m.security.trust-credentials.type</td>
			<td>LWM2M_TRUST_CREDENTIALS_TYPE</td>
			<td>PEM</td>
			<td> Trust certificates store type (PEM - pem certificates file; KEYSTORE - java keystore)</td>
		</tr>
		<tr>
			<td>transport.lwm2m.security.trust-credentials.pem.cert_file</td>
			<td>LWM2M_TRUST_PEM_CERT</td>
			<td>lwm2mtruststorechain.pem</td>
			<td> Path to the certificates file (holds trust certificates)</td>
		</tr>
		<tr>
			<td>transport.lwm2m.security.trust-credentials.keystore.type</td>
			<td>LWM2M_TRUST_KEY_STORE_TYPE</td>
			<td>JKS</td>
			<td> Type of the key store (JKS or PKCS12)</td>
		</tr>
		<tr>
			<td>transport.lwm2m.security.trust-credentials.keystore.store_file</td>
			<td>LWM2M_TRUST_KEY_STORE</td>
			<td>lwm2mtruststorechain.jks</td>
			<td> Path to the key store that holds the X509 certificates</td>
		</tr>
		<tr>
			<td>transport.lwm2m.security.trust-credentials.keystore.store_password</td>
			<td>LWM2M_TRUST_KEY_STORE_PASSWORD</td>
			<td>server_ks_password</td>
			<td> Password used to access the key store</td>
		</tr>
		<tr>
			<td>transport.lwm2m.security.recommended_ciphers</td>
			<td>LWM2M_RECOMMENDED_CIPHERS</td>
			<td>false</td>
			<td> Set usage of recommended cipher suites; true - allow only recommended cipher suites; false - allow not recommended cipher suites</td>
		</tr>
		<tr>
			<td>transport.lwm2m.security.recommended_supported_groups</td>
			<td>LWM2M_RECOMMENDED_SUPPORTED_GROUPS</td>
			<td>true</td>
			<td> Set usage of recommended supported groups (curves); true - allow only recommended supported groups, false - allow not recommended supported groups</td>
		</tr>
		<tr>
			<td>transport.lwm2m.timeout</td>
			<td>LWM2M_TIMEOUT</td>
			<td>120000</td>
			<td> Timeout of LwM2M operation</td>
		</tr>
		<tr>
			<td>transport.lwm2m.uplink_pool_size</td>
			<td>LWM2M_UPLINK_POOL_SIZE</td>
			<td>10</td>
			<td> Thread pool size for processing of the LwM2M uplinks</td>
		</tr>
		<tr>
			<td>transport.lwm2m.downlink_pool_size</td>
			<td>LWM2M_DOWNLINK_POOL_SIZE</td>
			<td>10</td>
			<td> Thread pool size for processing of the LwM2M downlinks</td>
		</tr>
		<tr>
			<td>transport.lwm2m.ota_pool_size</td>
			<td>LWM2M_OTA_POOL_SIZE</td>
			<td>10</td>
			<td> Thread pool size for processing of the OTA updates</td>
		</tr>
		<tr>
			<td>transport.lwm2m.clean_period_in_sec</td>
			<td>LWM2M_CLEAN_PERIOD_IN_SEC</td>
			<td>2</td>
			<td> Period of cleanup for the registrations in store</td>
		</tr>
		<tr>
			<td>transport.lwm2m.psm_activity_timer</td>
			<td>LWM2M_PSM_ACTIVITY_TIMER</td>
			<td>10000</td>
			<td> PSM Activity Timer if not specified in the device profile</td>
		</tr>
		<tr>
			<td>transport.lwm2m.paging_transmission_window</td>
			<td>LWM2M_PAGING_TRANSMISSION_WINDOW</td>
			<td>10000</td>
			<td> Paging Transmission Window for eDRX support if not specified in the device profile</td>
		</tr>
		<tr>
			<td>transport.stats.enabled</td>
			<td>TB_TRANSPORT_STATS_ENABLED</td>
			<td>true</td>
			<td> Enable/Disable the collection of transport statistics</td>
		</tr>
		<tr>
			<td>transport.stats.print-interval-ms</td>
			<td>TB_TRANSPORT_STATS_PRINT_INTERVAL_MS</td>
			<td>60000</td>
			<td> Interval of transport statistics logging</td>
		</tr>
	</tbody>
</table>


####  Queue configuration properties

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
			<td>kafka</td>
			<td> kafka (Apache Kafka) or aws-sqs (AWS SQS) or pubsub (PubSub) or service-bus (Azure Service Bus) or rabbitmq (RabbitMQ)</td>
		</tr>
		<tr>
			<td>queue.prefix</td>
			<td>TB_QUEUE_PREFIX</td>
			<td></td>
			<td> Global queue prefix. If specified, prefix is added before default topic name: 'prefix.default_topic_name'. Prefix is applied to all topics (and consumer groups for kafka) except of js executor topics (please use REMOTE_JS_EVAL_REQUEST_TOPIC and REMOTE_JS_EVAL_RESPONSE_TOPIC to specify custom topic names)</td>
		</tr>
		<tr>
			<td>queue.kafka.bootstrap.servers</td>
			<td>TB_KAFKA_SERVERS</td>
			<td>localhost:9092</td>
			<td> Kafka Bootstrap Servers</td>
		</tr>
		<tr>
			<td>queue.kafka.ssl.enabled</td>
			<td>TB_KAFKA_SSL_ENABLED</td>
			<td>false</td>
			<td> Enable/Disable SSL Kafka communication</td>
		</tr>
		<tr>
			<td>queue.kafka.ssl.truststore.location</td>
			<td>TB_KAFKA_SSL_TRUSTSTORE_LOCATION</td>
			<td></td>
			<td> The location of the trust store file</td>
		</tr>
		<tr>
			<td>queue.kafka.ssl.truststore.password</td>
			<td>TB_KAFKA_SSL_TRUSTSTORE_PASSWORD</td>
			<td></td>
			<td> The password of trust store file if specified</td>
		</tr>
		<tr>
			<td>queue.kafka.ssl.keystore.location</td>
			<td>TB_KAFKA_SSL_KEYSTORE_LOCATION</td>
			<td></td>
			<td> The location of the key store file. This is optional for the client and can be used for two-way authentication for the client</td>
		</tr>
		<tr>
			<td>queue.kafka.ssl.keystore.password</td>
			<td>TB_KAFKA_SSL_KEYSTORE_PASSWORD</td>
			<td></td>
			<td> The store password for the key store file. This is optional for the client and only needed if ‘ssl.keystore.location’ is configured. Key store password is not supported for PEM format</td>
		</tr>
		<tr>
			<td>queue.kafka.ssl.key.password</td>
			<td>TB_KAFKA_SSL_KEY_PASSWORD</td>
			<td></td>
			<td> The password of the private key in the key store file or the PEM key specified in ‘keystore.key’</td>
		</tr>
		<tr>
			<td>queue.kafka.acks</td>
			<td>TB_KAFKA_ACKS</td>
			<td>all</td>
			<td> The number of acknowledgments the producer requires the leader to have received before considering a request complete. This controls the durability of records that are sent. The following settings are allowed:0,1 and all</td>
		</tr>
		<tr>
			<td>queue.kafka.retries</td>
			<td>TB_KAFKA_RETRIES</td>
			<td>1</td>
			<td> Number of retries. Resend any record whose send fails with a potentially transient error</td>
		</tr>
		<tr>
			<td>queue.kafka.compression.type</td>
			<td>TB_KAFKA_COMPRESSION_TYPE</td>
			<td>none</td>
			<td> none or gzip</td>
		</tr>
		<tr>
			<td>queue.kafka.batch.size</td>
			<td>TB_KAFKA_BATCH_SIZE</td>
			<td>16384</td>
			<td> Default batch size. This setting gives the upper bound of the batch size to be sent</td>
		</tr>
		<tr>
			<td>queue.kafka.linger.ms</td>
			<td>TB_KAFKA_LINGER_MS</td>
			<td>1</td>
			<td> This variable creates a small amount of artificial delay—that is, rather than immediately sending out a record</td>
		</tr>
		<tr>
			<td>queue.kafka.max.request.size</td>
			<td>TB_KAFKA_MAX_REQUEST_SIZE</td>
			<td>1048576</td>
			<td> The maximum size of a request in bytes. This setting will limit the number of record batches the producer will send in a single request to avoid sending huge requests</td>
		</tr>
		<tr>
			<td>queue.kafka.max.in.flight.requests.per.connection</td>
			<td>TB_KAFKA_MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION</td>
			<td>5</td>
			<td> The maximum number of unacknowledged requests the client will send on a single connection before blocking</td>
		</tr>
		<tr>
			<td>queue.kafka.buffer.memory</td>
			<td>TB_BUFFER_MEMORY</td>
			<td>33554432</td>
			<td> The total bytes of memory the producer can use to buffer records waiting to be sent to the server</td>
		</tr>
		<tr>
			<td>queue.kafka.replication_factor</td>
			<td>TB_QUEUE_KAFKA_REPLICATION_FACTOR</td>
			<td>1</td>
			<td> The multiple copies of data over the multiple brokers of Kafka</td>
		</tr>
		<tr>
			<td>queue.kafka.max_poll_interval_ms</td>
			<td>TB_QUEUE_KAFKA_MAX_POLL_INTERVAL_MS</td>
			<td>300000</td>
			<td> The maximum delay between invocations of poll() when using consumer group management. This places an upper bound on the amount of time that the consumer can be idle before fetching more records</td>
		</tr>
		<tr>
			<td>queue.kafka.max_poll_records</td>
			<td>TB_QUEUE_KAFKA_MAX_POLL_RECORDS</td>
			<td>8192</td>
			<td> The maximum number of records returned in a single call to poll()</td>
		</tr>
		<tr>
			<td>queue.kafka.max_partition_fetch_bytes</td>
			<td>TB_QUEUE_KAFKA_MAX_PARTITION_FETCH_BYTES</td>
			<td>16777216</td>
			<td> The maximum amount of data per-partition the server will return. Records are fetched in batches by the consumer</td>
		</tr>
		<tr>
			<td>queue.kafka.fetch_max_bytes</td>
			<td>TB_QUEUE_KAFKA_FETCH_MAX_BYTES</td>
			<td>134217728</td>
			<td> The maximum amount of data the server will return. Records are fetched in batches by the consumer</td>
		</tr>
		<tr>
			<td>queue.kafka.request.timeout.ms</td>
			<td>TB_QUEUE_KAFKA_REQUEST_TIMEOUT_MS</td>
			<td>30000</td>
			<td> (30 seconds) </td>
		</tr>
		<tr>
			<td>queue.kafka.session.timeout.ms</td>
			<td>TB_QUEUE_KAFKA_SESSION_TIMEOUT_MS</td>
			<td>10000</td>
			<td> (10 seconds) </td>
		</tr>
		<tr>
			<td>queue.kafka.auto_offset_reset</td>
			<td>TB_QUEUE_KAFKA_AUTO_OFFSET_RESET</td>
			<td>earliest</td>
			<td> earliest, latest or none</td>
		</tr>
		<tr>
			<td>queue.kafka.use_confluent_cloud</td>
			<td>TB_QUEUE_KAFKA_USE_CONFLUENT_CLOUD</td>
			<td>false</td>
			<td> Enable/Disable using of Confluent Cloud</td>
		</tr>
		<tr>
			<td>queue.kafka.confluent.ssl.algorithm</td>
			<td>TB_QUEUE_KAFKA_CONFLUENT_SSL_ALGORITHM</td>
			<td>https</td>
			<td> The endpoint identification algorithm used by clients to validate server hostname. The default value is https</td>
		</tr>
		<tr>
			<td>queue.kafka.confluent.sasl.mechanism</td>
			<td>TB_QUEUE_KAFKA_CONFLUENT_SASL_MECHANISM</td>
			<td>PLAIN</td>
			<td> The mechanism used to authenticate Schema Registry requests. SASL/PLAIN should only be used with TLS/SSL as a transport layer to ensure that clear passwords are not transmitted on the wire without encryption</td>
		</tr>
		<tr>
			<td>queue.kafka.confluent.sasl.config</td>
			<td>TB_QUEUE_KAFKA_CONFLUENT_SASL_JAAS_CONFIG</td>
			<td>org.apache.kafka.common.security.plain.PlainLoginModule required username=\"CLUSTER_API_KEY\" password=\"CLUSTER_API_SECRET\";</td>
			<td> Using JAAS Configuration for specifying multiple SASL mechanisms on a broker</td>
		</tr>
		<tr>
			<td>queue.kafka.confluent.security.protocol</td>
			<td>TB_QUEUE_KAFKA_CONFLUENT_SECURITY_PROTOCOL</td>
			<td>SASL_SSL</td>
			<td> Protocol used to communicate with brokers. Valid values are: PLAINTEXT, SSL, SASL_PLAINTEXT, SASL_SSL</td>
		</tr>
		<tr>
			<td>queue.kafka.other-inline</td>
			<td>TB_QUEUE_KAFKA_OTHER_PROPERTIES</td>
			<td></td>
			<td> In this section you can specify custom parameters (semicolon separated) for Kafka consumer/producer/admin </td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.rule-engine</td>
			<td>TB_QUEUE_KAFKA_RE_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
			<td> Kafka properties for Rule Engine</td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.core</td>
			<td>TB_QUEUE_KAFKA_CORE_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
			<td> Kafka properties for Core topics</td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.transport-api</td>
			<td>TB_QUEUE_KAFKA_TA_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:10;min.insync.replicas:1</td>
			<td> Kafka properties for Transport Api topics</td>
		</tr>
		<tr>
			<td>queue.kafka.topic-properties.notifications</td>
			<td>TB_QUEUE_KAFKA_NOTIFICATIONS_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;min.insync.replicas:1</td>
			<td> Kafka properties for Notifications topics</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.use_default_credential_provider_chain</td>
			<td>TB_QUEUE_AWS_SQS_USE_DEFAULT_CREDENTIAL_PROVIDER_CHAIN</td>
			<td>false</td>
			<td> Use the default credentials provider for AWS SQS</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.access_key_id</td>
			<td>TB_QUEUE_AWS_SQS_ACCESS_KEY_ID</td>
			<td>YOUR_KEY</td>
			<td> Access key ID from AWS IAM user</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.secret_access_key</td>
			<td>TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY</td>
			<td>YOUR_SECRET</td>
			<td> Secret access key from AWS IAM user</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.region</td>
			<td>TB_QUEUE_AWS_SQS_REGION</td>
			<td>YOUR_REGION</td>
			<td> Region from AWS account</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.threads_per_topic</td>
			<td>TB_QUEUE_AWS_SQS_THREADS_PER_TOPIC</td>
			<td>1</td>
			<td> Number of threads per each AWS SQS queue in consumer</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.queue-properties.rule-engine</td>
			<td>TB_QUEUE_AWS_SQS_RE_QUEUE_PROPERTIES</td>
			<td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
			<td> AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.queue-properties.core</td>
			<td>TB_QUEUE_AWS_SQS_CORE_QUEUE_PROPERTIES</td>
			<td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
			<td> AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.queue-properties.transport-api</td>
			<td>TB_QUEUE_AWS_SQS_TA_QUEUE_PROPERTIES</td>
			<td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
			<td> AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
		</tr>
		<tr>
			<td>queue.aws_sqs.queue-properties.notifications</td>
			<td>TB_QUEUE_AWS_SQS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
			<td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
			<td> AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
		</tr>
		<tr>
			<td>queue.pubsub.project_id</td>
			<td>TB_QUEUE_PUBSUB_PROJECT_ID</td>
			<td>YOUR_PROJECT_ID</td>
			<td> Project ID from Google Cloud</td>
		</tr>
		<tr>
			<td>queue.pubsub.service_account</td>
			<td>TB_QUEUE_PUBSUB_SERVICE_ACCOUNT</td>
			<td>YOUR_SERVICE_ACCOUNT</td>
			<td> API Credentials in JSON format</td>
		</tr>
		<tr>
			<td>queue.pubsub.max_msg_size</td>
			<td>TB_QUEUE_PUBSUB_MAX_MSG_SIZE</td>
			<td>1048576</td>
			<td> Message size for PubSub queue. Value in bytes</td>
		</tr>
		<tr>
			<td>queue.pubsub.max_messages</td>
			<td>TB_QUEUE_PUBSUB_MAX_MESSAGES</td>
			<td>1000</td>
			<td> Number of messages per consumer</td>
		</tr>
		<tr>
			<td>queue.pubsub.executor_thread_pool_size</td>
			<td>TB_QUEUE_PUBSUB_EXECUTOR_THREAD_POOL_SIZE</td>
			<td>0</td>
			<td> Thread pool size for pubsub queue executor provider. If not set - default pubsub executor provider value will be used (5 * number of available processors)</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.rule-engine</td>
			<td>TB_QUEUE_PUBSUB_RE_QUEUE_PROPERTIES</td>
			<td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
			<td> Pub/Sub properties for Rule Engine subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.core</td>
			<td>TB_QUEUE_PUBSUB_CORE_QUEUE_PROPERTIES</td>
			<td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
			<td> Pub/Sub properties for Core subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.transport-api</td>
			<td>TB_QUEUE_PUBSUB_TA_QUEUE_PROPERTIES</td>
			<td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
			<td> Pub/Sub properties for Transport API subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td>
		</tr>
		<tr>
			<td>queue.pubsub.queue-properties.notifications</td>
			<td>TB_QUEUE_PUBSUB_NOTIFICATIONS_QUEUE_PROPERTIES</td>
			<td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
			<td> Pub/Sub properties for Version Control subscribers, messages which will commit after ackDeadlineInSec period can be consumed again</td>
		</tr>
		<tr>
			<td>queue.service_bus.namespace_name</td>
			<td>TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME</td>
			<td>YOUR_NAMESPACE_NAME</td>
			<td> Azure namespace</td>
		</tr>
		<tr>
			<td>queue.service_bus.sas_key_name</td>
			<td>TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME</td>
			<td>YOUR_SAS_KEY_NAME</td>
			<td> Azure Service Bus Shared Access Signatures key name</td>
		</tr>
		<tr>
			<td>queue.service_bus.sas_key</td>
			<td>TB_QUEUE_SERVICE_BUS_SAS_KEY</td>
			<td>YOUR_SAS_KEY</td>
			<td> Azure Service Bus Shared Access Signatures key</td>
		</tr>
		<tr>
			<td>queue.service_bus.max_messages</td>
			<td>TB_QUEUE_SERVICE_BUS_MAX_MESSAGES</td>
			<td>1000</td>
			<td> Number of messages per a consumer</td>
		</tr>
		<tr>
			<td>queue.service_bus.queue-properties.rule-engine</td>
			<td>TB_QUEUE_SERVICE_BUS_RE_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus properties for Rule Engine queues</td>
		</tr>
		<tr>
			<td>queue.service_bus.queue-properties.core</td>
			<td>TB_QUEUE_SERVICE_BUS_CORE_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus properties for Core queues</td>
		</tr>
		<tr>
			<td>queue.service_bus.queue-properties.transport-api</td>
			<td>TB_QUEUE_SERVICE_BUS_TA_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus properties for Transport Api queues</td>
		</tr>
		<tr>
			<td>queue.service_bus.queue-properties.notifications</td>
			<td>TB_QUEUE_SERVICE_BUS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
			<td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
			<td> Azure Service Bus properties for Notification queues</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.exchange_name</td>
			<td>TB_QUEUE_RABBIT_MQ_EXCHANGE_NAME</td>
			<td></td>
			<td> By default empty</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.host</td>
			<td>TB_QUEUE_RABBIT_MQ_HOST</td>
			<td>localhost</td>
			<td> RabbitMQ host used to establish connection</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.port</td>
			<td>TB_QUEUE_RABBIT_MQ_PORT</td>
			<td>5672</td>
			<td> RabbitMQ host used to establish a connection</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.virtual_host</td>
			<td>TB_QUEUE_RABBIT_MQ_VIRTUAL_HOST</td>
			<td>/</td>
			<td> Virtual hosts provide logical grouping and separation of resources</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.username</td>
			<td>TB_QUEUE_RABBIT_MQ_USERNAME</td>
			<td>YOUR_USERNAME</td>
			<td> Username for RabbitMQ user account</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.password</td>
			<td>TB_QUEUE_RABBIT_MQ_PASSWORD</td>
			<td>YOUR_PASSWORD</td>
			<td> User password for RabbitMQ user account</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.automatic_recovery_enabled</td>
			<td>TB_QUEUE_RABBIT_MQ_AUTOMATIC_RECOVERY_ENABLED</td>
			<td>false</td>
			<td> Network connection between clients and RabbitMQ nodes can fail. RabbitMQ Java client supports automatic recovery of connections and topology (queues, exchanges, bindings, and consumers)</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.connection_timeout</td>
			<td>TB_QUEUE_RABBIT_MQ_CONNECTION_TIMEOUT</td>
			<td>60000</td>
			<td> The connection timeout for the RabbitMQ connection factory</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.handshake_timeout</td>
			<td>TB_QUEUE_RABBIT_MQ_HANDSHAKE_TIMEOUT</td>
			<td>10000</td>
			<td> RabbitMQ has a timeout for connection handshake. When clients run in heavily constrained environments, it may be necessary to increase the timeout</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.queue-properties.rule-engine</td>
			<td>TB_QUEUE_RABBIT_MQ_RE_QUEUE_PROPERTIES</td>
			<td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
			<td> RabbitMQ properties for Rule Engine queues</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.queue-properties.core</td>
			<td>TB_QUEUE_RABBIT_MQ_CORE_QUEUE_PROPERTIES</td>
			<td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
			<td> RabbitMQ properties for Core queues</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.queue-properties.transport-api</td>
			<td>TB_QUEUE_RABBIT_MQ_TA_QUEUE_PROPERTIES</td>
			<td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
			<td> RabbitMQ properties for Transport API queues</td>
		</tr>
		<tr>
			<td>queue.rabbitmq.queue-properties.notifications</td>
			<td>TB_QUEUE_RABBIT_MQ_NOTIFICATIONS_QUEUE_PROPERTIES</td>
			<td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
			<td> RabbitMQ properties for Notification queues</td>
		</tr>
		<tr>
			<td>queue.partitions.hash_function_name</td>
			<td>TB_QUEUE_PARTITIONS_HASH_FUNCTION_NAME</td>
			<td>murmur3_128</td>
			<td> murmur3_32, murmur3_128 or sha256</td>
		</tr>
		<tr>
			<td>queue.transport_api.requests_topic</td>
			<td>TB_QUEUE_TRANSPORT_API_REQUEST_TOPIC</td>
			<td>tb_transport.api.requests</td>
			<td> Topic used to consume api requests from transport microservices</td>
		</tr>
		<tr>
			<td>queue.transport_api.responses_topic</td>
			<td>TB_QUEUE_TRANSPORT_API_RESPONSE_TOPIC</td>
			<td>tb_transport.api.responses</td>
			<td> Topic used to produce api responses to transport microservices</td>
		</tr>
		<tr>
			<td>queue.transport_api.max_pending_requests</td>
			<td>TB_QUEUE_TRANSPORT_MAX_PENDING_REQUESTS</td>
			<td>10000</td>
			<td> Maximum pending api requests from transport microservices to be handled by server</td>
		</tr>
		<tr>
			<td>queue.transport_api.max_requests_timeout</td>
			<td>TB_QUEUE_TRANSPORT_MAX_REQUEST_TIMEOUT</td>
			<td>10000</td>
			<td> Maximum timeout in milliseconds to handle api request from transport microservice by server</td>
		</tr>
		<tr>
			<td>queue.transport_api.max_callback_threads</td>
			<td>TB_QUEUE_TRANSPORT_MAX_CALLBACK_THREADS</td>
			<td>100</td>
			<td> Amount of threads used to invoke callbacks</td>
		</tr>
		<tr>
			<td>queue.transport_api.request_poll_interval</td>
			<td>TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds to poll api requests from transport microservices</td>
		</tr>
		<tr>
			<td>queue.transport_api.response_poll_interval</td>
			<td>TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds to poll api response from transport microservices</td>
		</tr>
		<tr>
			<td>queue.core.topic</td>
			<td>TB_QUEUE_CORE_TOPIC</td>
			<td>tb_core</td>
			<td> Default topic name of Kafka, RabbitMQ, etc. queue</td>
		</tr>
		<tr>
			<td>queue.core.poll-interval</td>
			<td>TB_QUEUE_CORE_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds to poll messages by Core microservices</td>
		</tr>
		<tr>
			<td>queue.core.partitions</td>
			<td>TB_QUEUE_CORE_PARTITIONS</td>
			<td>10</td>
			<td> Amount of partitions used by Core microservices</td>
		</tr>
		<tr>
			<td>queue.core.pack-processing-timeout</td>
			<td>TB_QUEUE_CORE_PACK_PROCESSING_TIMEOUT_MS</td>
			<td>60000</td>
			<td> Timeout for processing a message pack by Core microservices</td>
		</tr>
		<tr>
			<td>queue.core.stats.enabled</td>
			<td>TB_QUEUE_CORE_STATS_ENABLED</td>
			<td>false</td>
			<td> Enable/disable statistics for Core microservices</td>
		</tr>
		<tr>
			<td>queue.core.stats.print-interval-ms</td>
			<td>TB_QUEUE_CORE_STATS_PRINT_INTERVAL_MS</td>
			<td>10000</td>
			<td> Statistics printing interval for Core microservices</td>
		</tr>
		<tr>
			<td>queue.js.request_topic</td>
			<td>REMOTE_JS_EVAL_REQUEST_TOPIC</td>
			<td>js_eval.requests</td>
			<td> JS Eval request topic</td>
		</tr>
		<tr>
			<td>queue.js.response_topic_prefix</td>
			<td>REMOTE_JS_EVAL_RESPONSE_TOPIC</td>
			<td>js_eval.responses</td>
			<td> JS Eval responses topic prefix that is combined with node id</td>
		</tr>
		<tr>
			<td>queue.js.max_pending_requests</td>
			<td>REMOTE_JS_MAX_PENDING_REQUESTS</td>
			<td>10000</td>
			<td> JS Eval max pending requests</td>
		</tr>
		<tr>
			<td>queue.js.max_requests_timeout</td>
			<td>REMOTE_JS_MAX_REQUEST_TIMEOUT</td>
			<td>10000</td>
			<td> JS Eval max request timeout</td>
		</tr>
		<tr>
			<td>queue.js.response_poll_interval</td>
			<td>REMOTE_JS_RESPONSE_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> JS response poll interval</td>
		</tr>
		<tr>
			<td>queue.js.response_auto_commit_interval</td>
			<td>REMOTE_JS_RESPONSE_AUTO_COMMIT_INTERVAL_MS</td>
			<td>100</td>
			<td> JS response auto commit interval</td>
		</tr>
		<tr>
			<td>queue.rule-engine.topic</td>
			<td>TB_QUEUE_RULE_ENGINE_TOPIC</td>
			<td>tb_rule_engine</td>
			<td> Deprecated. It will be removed in the nearest releases</td>
		</tr>
		<tr>
			<td>queue.rule-engine.poll-interval</td>
			<td>TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds to poll messages by Rule Engine</td>
		</tr>
		<tr>
			<td>queue.rule-engine.pack-processing-timeout</td>
			<td>TB_QUEUE_RULE_ENGINE_PACK_PROCESSING_TIMEOUT_MS</td>
			<td>60000</td>
			<td> Timeout for processing a message pack of Rule Engine</td>
		</tr>
		<tr>
			<td>queue.rule-engine.stats.enabled</td>
			<td>TB_QUEUE_RULE_ENGINE_STATS_ENABLED</td>
			<td>true</td>
			<td> Enable/disable statistics for Rule Engine</td>
		</tr>
		<tr>
			<td>queue.rule-engine.stats.print-interval-ms</td>
			<td>TB_QUEUE_RULE_ENGINE_STATS_PRINT_INTERVAL_MS</td>
			<td>60000</td>
			<td> Statistics printing interval for Rule Engine</td>
		</tr>
		<tr>
			<td>queue.transport.notifications_topic</td>
			<td>TB_QUEUE_TRANSPORT_NOTIFICATIONS_TOPIC</td>
			<td>tb_transport.notifications</td>
			<td> For high priority notifications that require minimum latency and processing time</td>
		</tr>
		<tr>
			<td>queue.transport.poll_interval</td>
			<td>TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS</td>
			<td>25</td>
			<td> Interval in milliseconds to poll messages</td>
		</tr>
	</tbody>
</table>


####  Service common parameters

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
			<td>tb-transport</td>
			<td> service type</td>
		</tr>
		<tr>
			<td>service.id</td>
			<td>TB_SERVICE_ID</td>
			<td></td>
			<td> Unique id for this service (autogenerated if empty)</td>
		</tr>
	</tbody>
</table>


####  Usage statistics parameters

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
			<td> Enable/Disable the collection of statistics about API usage. Collected on a system and tenant level by default</td>
		</tr>
		<tr>
			<td>usage.stats.report.enabled_per_customer</td>
			<td>USAGE_STATS_REPORT_PER_CUSTOMER_ENABLED</td>
			<td>false</td>
			<td> Enable/Disable collection of statistics about API usage on a customer level</td>
		</tr>
		<tr>
			<td>usage.stats.report.interval</td>
			<td>USAGE_STATS_REPORT_INTERVAL</td>
			<td>10</td>
			<td> Interval of reporting the statistics. By default, the summarized statistics are sent every 10 seconds</td>
		</tr>
	</tbody>
</table>


####  Metrics parameters

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
			<td> Enable/disable actuator metrics.</td>
		</tr>
	</tbody>
</table>


####  General management parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>management.endpoints.web.exposure.include</td>
			<td></td>
			<td>'${METRICS_ENDPOINTS_EXPOSE:info}'</td>
			<td> Expose metrics endpoint (use value 'prometheus' to enable prometheus metrics).</td>
		</tr>
	</tbody>
</table>


####  Notification system parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>notification_system.rules.deduplication_durations</td>
			<td>TB_NOTIFICATION_RULES_DEDUPLICATION_DURATIONS</td>
			<td>RATE_LIMITS:14400000;</td>
			<td> Semicolon-separated deduplication durations (in millis) for trigger types. Format: 'NotificationRuleTriggerType1:123;NotificationRuleTriggerType2:456'</td>
		</tr>
	</tbody>
</table>
