

##  HTTP server parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>server.shutdown</td>
			<td>SERVER_SHUTDOWN</td>
			<td>graceful</td>
			<td> Shutdown type (graceful or immediate)</td>
		</tr>
		<tr>
			<td>server.address</td>
			<td>HTTP_BIND_ADDRESS</td>
			<td>0.0.0.0</td>
			<td> HTTP Server bind address (has no effect if web-environment is disabled)</td>
		</tr>
		<tr>
			<td>server.port</td>
			<td>HTTP_BIND_PORT</td>
			<td>8083</td>
			<td> HTTP Server bind port (has no effect if web-environment is disabled)</td>
		</tr>
		<tr>
			<td>server.forward_headers_strategy</td>
			<td>HTTP_FORWARD_HEADERS_STRATEGY</td>
			<td>framework</td>
			<td> Server headers forwarding strategy. Required for SWAGGER UI when reverse proxy is used</td>
		</tr>
		<tr>
			<td>server.http2.enabled</td>
			<td>HTTP2_ENABLED</td>
			<td>true</td>
			<td> Enable/disable HTTP/2 support</td>
		</tr>
		<tr>
			<td>server.log_controller_error_stack_trace</td>
			<td>HTTP_LOG_CONTROLLER_ERROR_STACK_TRACE</td>
			<td>false</td>
			<td> Log errors with stacktrace when REST API throws exception</td>
		</tr>
		<tr>
			<td>server.http.max_payload_size</td>
			<td>HTTP_MAX_PAYLOAD_SIZE_LIMIT_CONFIGURATION</td>
			<td>/api/image*/**=52428800;/api/resource/**=52428800;/api/**=16777216</td>
			<td> Semi-colon-separated list of urlPattern=maxPayloadSize pairs that define max http request size in bytes for specified url pattern. After first match all other will be skipped</td>
		</tr>
		<tr>
			<td>server.ssl.enabled</td>
			<td>SSL_ENABLED</td>
			<td>false</td>
			<td> Enable/disable SSL support</td>
		</tr>
		<tr>
			<td>server.ssl.credentials.type</td>
			<td>SSL_CREDENTIALS_TYPE</td>
			<td>PEM</td>
			<td> Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
		</tr>
		<tr>
			<td>server.ssl.credentials.pem.cert_file</td>
			<td>SSL_PEM_CERT</td>
			<td>server.pem</td>
			<td> Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
		</tr>
		<tr>
			<td>server.ssl.credentials.pem.key_file</td>
			<td>SSL_PEM_KEY</td>
			<td>server_key.pem</td>
			<td> Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file</td>
		</tr>
		<tr>
			<td>server.ssl.credentials.pem.key_password</td>
			<td>SSL_PEM_KEY_PASSWORD</td>
			<td>server_key_password</td>
			<td> Server certificate private key password (optional)</td>
		</tr>
		<tr>
			<td>server.ssl.credentials.keystore.type</td>
			<td>SSL_KEY_STORE_TYPE</td>
			<td>PKCS12</td>
			<td> Type of the key store (JKS or PKCS12)</td>
		</tr>
		<tr>
			<td>server.ssl.credentials.keystore.store_file</td>
			<td>SSL_KEY_STORE</td>
			<td>classpath:keystore/keystore.p12</td>
			<td> Path to the key store that holds the SSL certificate</td>
		</tr>
		<tr>
			<td>server.ssl.credentials.keystore.store_password</td>
			<td>SSL_KEY_STORE_PASSWORD</td>
			<td>thingsboard_mqtt_broker</td>
			<td> Password used to access the key store</td>
		</tr>
		<tr>
			<td>server.ssl.credentials.keystore.key_alias</td>
			<td>SSL_KEY_ALIAS</td>
			<td>tomcat</td>
			<td> Key alias</td>
		</tr>
		<tr>
			<td>server.ssl.credentials.keystore.key_password</td>
			<td>SSL_KEY_PASSWORD</td>
			<td>thingsboard_mqtt_broker</td>
			<td> Password used to access the key</td>
		</tr>
	</tbody>
</table>


##  MQTT listeners parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>listener.proxy_enabled</td>
			<td>MQTT_PROXY_PROTOCOL_ENABLED</td>
			<td>false</td>
			<td> Enable proxy protocol support as a global setting for all listeners. Disabled by default. If enabled, supports both v1 and v2.
 Useful to get the real IP address of the client in the logs, for session details info and unauthorized clients feature</td>
		</tr>
		<tr>
			<td>listener.leak_detector_level</td>
			<td>NETTY_LEAK_DETECTOR_LVL</td>
			<td>DISABLED</td>
			<td> Netty leak detector level: DISABLED, SIMPLE, ADVANCED, PARANOID. It is set globally for all listeners</td>
		</tr>
		<tr>
			<td>listener.write_buffer_high_water_mark</td>
			<td>NETTY_WRITE_BUFFER_HIGH_WATER_MARK</td>
			<td>64</td>
			<td> The threshold (in KB) where Netty considers the channel non-writable. When the limit reached, TBMQ stops delivering data to subscriber until the channel is writable again.
 Non-persistent clients lose data in this case</td>
		</tr>
		<tr>
			<td>listener.write_buffer_low_water_mark</td>
			<td>NETTY_WRITE_BUFFER_LOW_WATER_MARK</td>
			<td>32</td>
			<td> The threshold (in KB) where Netty considers the channel writable again. When the limit reached, TBMQ starts delivering data to subscriber</td>
		</tr>
		<tr>
			<td>listener.so_receive_buffer</td>
			<td>NETTY_SO_RECEIVE_BUFFER</td>
			<td>0</td>
			<td> Socket receive buffer size for Netty in KB. If the buffer limit is reached, TCP will trigger backpressure and notify the sender to slow down.
 If set to 0 (default), the system's default buffer size will be used</td>
		</tr>
		<tr>
			<td>listener.tcp.enabled</td>
			<td>LISTENER_TCP_ENABLED</td>
			<td>true</td>
			<td> Enable/disable MQTT TCP port listener</td>
		</tr>
		<tr>
			<td>listener.tcp.bind_address</td>
			<td>LISTENER_TCP_BIND_ADDRESS</td>
			<td>0.0.0.0</td>
			<td> MQTT TCP listener bind address</td>
		</tr>
		<tr>
			<td>listener.tcp.bind_port</td>
			<td>LISTENER_TCP_BIND_PORT</td>
			<td>1883</td>
			<td> MQTT TCP listener bind port</td>
		</tr>
		<tr>
			<td>listener.tcp.proxy_enabled</td>
			<td>MQTT_TCP_PROXY_PROTOCOL_ENABLED</td>
			<td></td>
			<td> Enable proxy protocol support for the MQTT TCP listener. Unset by default – in this case it inherits the global MQTT_PROXY_PROTOCOL_ENABLED value.
 If explicitly set, supports both v1 and v2 and takes precedence over the global setting.
 Useful to get the real IP address of the client in the logs, for session details info and unauthorized clients feature</td>
		</tr>
		<tr>
			<td>listener.tcp.netty.boss_group_thread_count</td>
			<td>TCP_NETTY_BOSS_GROUP_THREADS</td>
			<td>1</td>
			<td> Netty boss group threads count</td>
		</tr>
		<tr>
			<td>listener.tcp.netty.worker_group_thread_count</td>
			<td>TCP_NETTY_WORKER_GROUP_THREADS</td>
			<td>12</td>
			<td> Netty worker group threads count</td>
		</tr>
		<tr>
			<td>listener.tcp.netty.max_payload_size</td>
			<td>TCP_NETTY_MAX_PAYLOAD_SIZE</td>
			<td>65536</td>
			<td> Max payload size in bytes</td>
		</tr>
		<tr>
			<td>listener.tcp.netty.so_keep_alive</td>
			<td>TCP_NETTY_SO_KEEPALIVE</td>
			<td>true</td>
			<td> Enable/disable keep-alive mechanism to periodically probe the other end of a connection</td>
		</tr>
		<tr>
			<td>listener.tcp.netty.shutdown_quiet_period</td>
			<td>TCP_NETTY_SHUTDOWN_QUIET_PERIOD</td>
			<td>0</td>
			<td> Period in seconds in graceful shutdown during which no new tasks are submitted</td>
		</tr>
		<tr>
			<td>listener.tcp.netty.shutdown_timeout</td>
			<td>TCP_NETTY_SHUTDOWN_TIMEOUT</td>
			<td>5</td>
			<td> The max time in seconds to wait until the executor is stopped</td>
		</tr>
		<tr>
			<td>listener.ssl.enabled</td>
			<td>LISTENER_SSL_ENABLED</td>
			<td>false</td>
			<td> Enable/disable MQTT SSL port listener</td>
		</tr>
		<tr>
			<td>listener.ssl.bind_address</td>
			<td>LISTENER_SSL_BIND_ADDRESS</td>
			<td>0.0.0.0</td>
			<td> MQTT SSL listener bind address</td>
		</tr>
		<tr>
			<td>listener.ssl.bind_port</td>
			<td>LISTENER_SSL_BIND_PORT</td>
			<td>8883</td>
			<td> MQTT SSL listener bind port</td>
		</tr>
		<tr>
			<td>listener.ssl.proxy_enabled</td>
			<td>MQTT_SSL_PROXY_PROTOCOL_ENABLED</td>
			<td></td>
			<td> Enable proxy protocol support for the MQTT TLS listener. Unset by default – in this case it inherits the global MQTT_PROXY_PROTOCOL_ENABLED value.
 If explicitly set, supports both v1 and v2 and takes precedence over the global setting.
 Useful to get the real IP address of the client in the logs, for session details info and unauthorized clients feature</td>
		</tr>
		<tr>
			<td>listener.ssl.config.protocol</td>
			<td>LISTENER_SSL_PROTOCOL</td>
			<td>TLSv1.2</td>
			<td> SSL protocol: see <a href="https://docs.oracle.com/en/java/javase/17/docs/specs/security/standard-names.html#sslcontext-algorithms">this link</a></td>
		</tr>
		<tr>
			<td>listener.ssl.config.enabled_cipher_suites</td>
			<td>LISTENER_SSL_ENABLED_CIPHER_SUITES</td>
			<td></td>
			<td> Sets the cipher suites enabled for use on mqtts listener. The value is a comma-separated list of cipher suits (e.g. TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256).
 Defaults to empty list meaning all supported cipher suites of the used provider are taken</td>
		</tr>
		<tr>
			<td>listener.ssl.config.credentials.type</td>
			<td>LISTENER_SSL_CREDENTIALS_TYPE</td>
			<td>PEM</td>
			<td> Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
		</tr>
		<tr>
			<td>listener.ssl.config.credentials.pem.cert_file</td>
			<td>LISTENER_SSL_PEM_CERT</td>
			<td>mqttserver.pem</td>
			<td> Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
		</tr>
		<tr>
			<td>listener.ssl.config.credentials.pem.key_file</td>
			<td>LISTENER_SSL_PEM_KEY</td>
			<td>mqttserver_key.pem</td>
			<td> Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file</td>
		</tr>
		<tr>
			<td>listener.ssl.config.credentials.pem.key_password</td>
			<td>LISTENER_SSL_PEM_KEY_PASSWORD</td>
			<td>server_key_password</td>
			<td> Server certificate private key password (optional)</td>
		</tr>
		<tr>
			<td>listener.ssl.config.credentials.keystore.type</td>
			<td>LISTENER_SSL_KEY_STORE_TYPE</td>
			<td>JKS</td>
			<td> Type of the key store (JKS or PKCS12)</td>
		</tr>
		<tr>
			<td>listener.ssl.config.credentials.keystore.store_file</td>
			<td>LISTENER_SSL_KEY_STORE</td>
			<td>mqttserver.jks</td>
			<td> Path to the key store that holds the SSL certificate</td>
		</tr>
		<tr>
			<td>listener.ssl.config.credentials.keystore.store_password</td>
			<td>LISTENER_SSL_KEY_STORE_PASSWORD</td>
			<td>server_ks_password</td>
			<td> Password used to access the key store</td>
		</tr>
		<tr>
			<td>listener.ssl.config.credentials.keystore.key_alias</td>
			<td>LISTENER_SSL_KEY_ALIAS</td>
			<td></td>
			<td> Optional alias of the private key. If not set, the platform will load the first private key from the keystore</td>
		</tr>
		<tr>
			<td>listener.ssl.config.credentials.keystore.key_password</td>
			<td>LISTENER_SSL_KEY_PASSWORD</td>
			<td>server_key_password</td>
			<td> Optional password to access the private key. If not set, the platform will attempt to load the private keys that are not protected with the password</td>
		</tr>
		<tr>
			<td>listener.ssl.netty.boss_group_thread_count</td>
			<td>SSL_NETTY_BOSS_GROUP_THREADS</td>
			<td>1</td>
			<td> Netty boss group threads count</td>
		</tr>
		<tr>
			<td>listener.ssl.netty.worker_group_thread_count</td>
			<td>SSL_NETTY_WORKER_GROUP_THREADS</td>
			<td>12</td>
			<td> Netty worker group threads count</td>
		</tr>
		<tr>
			<td>listener.ssl.netty.max_payload_size</td>
			<td>SSL_NETTY_MAX_PAYLOAD_SIZE</td>
			<td>65536</td>
			<td> Max payload size in bytes</td>
		</tr>
		<tr>
			<td>listener.ssl.netty.so_keep_alive</td>
			<td>SSL_NETTY_SO_KEEPALIVE</td>
			<td>true</td>
			<td> Enable/disable keep-alive mechanism to periodically probe the other end of a connection</td>
		</tr>
		<tr>
			<td>listener.ssl.netty.shutdown_quiet_period</td>
			<td>SSL_NETTY_SHUTDOWN_QUIET_PERIOD</td>
			<td>0</td>
			<td> Period in seconds in graceful shutdown during which no new tasks are submitted</td>
		</tr>
		<tr>
			<td>listener.ssl.netty.shutdown_timeout</td>
			<td>SSL_NETTY_SHUTDOWN_TIMEOUT</td>
			<td>5</td>
			<td> The max time in seconds to wait until the executor is stopped</td>
		</tr>
		<tr>
			<td>listener.ws.enabled</td>
			<td>LISTENER_WS_ENABLED</td>
			<td>true</td>
			<td> Enable/disable MQTT WS port listener</td>
		</tr>
		<tr>
			<td>listener.ws.bind_address</td>
			<td>LISTENER_WS_BIND_ADDRESS</td>
			<td>0.0.0.0</td>
			<td> MQTT WS listener bind address</td>
		</tr>
		<tr>
			<td>listener.ws.bind_port</td>
			<td>LISTENER_WS_BIND_PORT</td>
			<td>8084</td>
			<td> MQTT WS listener bind port</td>
		</tr>
		<tr>
			<td>listener.ws.proxy_enabled</td>
			<td>MQTT_WS_PROXY_PROTOCOL_ENABLED</td>
			<td></td>
			<td> Enable proxy protocol support for the MQTT WS listener. Unset by default – in this case it inherits the global MQTT_PROXY_PROTOCOL_ENABLED value.
 If explicitly set, supports both v1 and v2 and takes precedence over the global setting.
 Useful to get the real IP address of the client in the logs, for session details info and unauthorized clients feature</td>
		</tr>
		<tr>
			<td>listener.ws.netty.sub_protocols</td>
			<td>WS_NETTY_SUB_PROTOCOLS</td>
			<td>mqttv3.1,mqtt</td>
			<td> Comma-separated list of subprotocols that the WebSocket can negotiate. The subprotocol setting `mqtt` represents MQTT 3.1.1 and MQTT 5</td>
		</tr>
		<tr>
			<td>listener.ws.netty.boss_group_thread_count</td>
			<td>WS_NETTY_BOSS_GROUP_THREADS</td>
			<td>1</td>
			<td> Netty boss group threads count</td>
		</tr>
		<tr>
			<td>listener.ws.netty.worker_group_thread_count</td>
			<td>WS_NETTY_WORKER_GROUP_THREADS</td>
			<td>12</td>
			<td> Netty worker group threads count</td>
		</tr>
		<tr>
			<td>listener.ws.netty.max_payload_size</td>
			<td>WS_NETTY_MAX_PAYLOAD_SIZE</td>
			<td>65536</td>
			<td> Max payload size in bytes</td>
		</tr>
		<tr>
			<td>listener.ws.netty.so_keep_alive</td>
			<td>WS_NETTY_SO_KEEPALIVE</td>
			<td>true</td>
			<td> Enable/disable keep-alive mechanism to periodically probe the other end of a connection</td>
		</tr>
		<tr>
			<td>listener.ws.netty.shutdown_quiet_period</td>
			<td>WS_NETTY_SHUTDOWN_QUIET_PERIOD</td>
			<td>0</td>
			<td> Period in seconds in graceful shutdown during which no new tasks are submitted</td>
		</tr>
		<tr>
			<td>listener.ws.netty.shutdown_timeout</td>
			<td>WS_NETTY_SHUTDOWN_TIMEOUT</td>
			<td>5</td>
			<td> The max time in seconds to wait until the executor is stopped</td>
		</tr>
		<tr>
			<td>listener.wss.enabled</td>
			<td>LISTENER_WSS_ENABLED</td>
			<td>false</td>
			<td> Enable/disable MQTT WSS port listener</td>
		</tr>
		<tr>
			<td>listener.wss.bind_address</td>
			<td>LISTENER_WSS_BIND_ADDRESS</td>
			<td>0.0.0.0</td>
			<td> MQTT WSS listener bind address</td>
		</tr>
		<tr>
			<td>listener.wss.bind_port</td>
			<td>LISTENER_WSS_BIND_PORT</td>
			<td>8085</td>
			<td> MQTT WSS listener bind port</td>
		</tr>
		<tr>
			<td>listener.wss.proxy_enabled</td>
			<td>MQTT_WSS_PROXY_PROTOCOL_ENABLED</td>
			<td></td>
			<td> Enable proxy protocol support for the MQTT WSS listener. Unset by default – in this case it inherits the global MQTT_PROXY_PROTOCOL_ENABLED value.
 If explicitly set, supports both v1 and v2 and takes precedence over the global setting.
 Useful to get the real IP address of the client in the logs, for session details info and unauthorized clients feature</td>
		</tr>
		<tr>
			<td>listener.wss.config.protocol</td>
			<td>LISTENER_WSS_PROTOCOL</td>
			<td>TLSv1.2</td>
			<td> SSL protocol: see <a href="https://docs.oracle.com/en/java/javase/17/docs/specs/security/standard-names.html#sslcontext-algorithms">this link</a></td>
		</tr>
		<tr>
			<td>listener.wss.config.enabled_cipher_suites</td>
			<td>LISTENER_WSS_ENABLED_CIPHER_SUITES</td>
			<td></td>
			<td> Sets the cipher suites enabled for use on wss listener. The value is a comma-separated list of cipher suits (e.g. TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256).
 Defaults to empty list meaning all supported cipher suites of the used provider are taken</td>
		</tr>
		<tr>
			<td>listener.wss.config.credentials.type</td>
			<td>LISTENER_WSS_CREDENTIALS_TYPE</td>
			<td>PEM</td>
			<td> Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
		</tr>
		<tr>
			<td>listener.wss.config.credentials.pem.cert_file</td>
			<td>LISTENER_WSS_PEM_CERT</td>
			<td>ws_mqtt_server.pem</td>
			<td> Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
		</tr>
		<tr>
			<td>listener.wss.config.credentials.pem.key_file</td>
			<td>LISTENER_WSS_PEM_KEY</td>
			<td>ws_mqtt_server_key.pem</td>
			<td> Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file</td>
		</tr>
		<tr>
			<td>listener.wss.config.credentials.pem.key_password</td>
			<td>LISTENER_WSS_PEM_KEY_PASSWORD</td>
			<td>ws_server_key_password</td>
			<td> Server certificate private key password (optional)</td>
		</tr>
		<tr>
			<td>listener.wss.config.credentials.keystore.type</td>
			<td>LISTENER_WSS_KEY_STORE_TYPE</td>
			<td>JKS</td>
			<td> Type of the key store (JKS or PKCS12)</td>
		</tr>
		<tr>
			<td>listener.wss.config.credentials.keystore.store_file</td>
			<td>LISTENER_WSS_KEY_STORE</td>
			<td>ws_mqtt_server.jks</td>
			<td> Path to the key store that holds the SSL certificate</td>
		</tr>
		<tr>
			<td>listener.wss.config.credentials.keystore.store_password</td>
			<td>LISTENER_WSS_KEY_STORE_PASSWORD</td>
			<td>ws_server_ks_password</td>
			<td> Password used to access the key store</td>
		</tr>
		<tr>
			<td>listener.wss.config.credentials.keystore.key_alias</td>
			<td>LISTENER_WSS_KEY_ALIAS</td>
			<td></td>
			<td> Optional alias of the private key. If not set, the platform will load the first private key from the keystore</td>
		</tr>
		<tr>
			<td>listener.wss.config.credentials.keystore.key_password</td>
			<td>LISTENER_WSS_KEY_PASSWORD</td>
			<td>ws_server_key_password</td>
			<td> Optional password to access the private key. If not set, the platform will attempt to load the private keys that are not protected with the password</td>
		</tr>
		<tr>
			<td>listener.wss.netty.sub_protocols</td>
			<td>WSS_NETTY_SUB_PROTOCOLS</td>
			<td>mqttv3.1,mqtt</td>
			<td> Comma-separated list of subprotocols that the WebSocket can negotiate. The subprotocol setting `mqtt` represents MQTT 3.1.1 and MQTT 5</td>
		</tr>
		<tr>
			<td>listener.wss.netty.boss_group_thread_count</td>
			<td>WSS_NETTY_BOSS_GROUP_THREADS</td>
			<td>1</td>
			<td> Netty boss group threads count</td>
		</tr>
		<tr>
			<td>listener.wss.netty.worker_group_thread_count</td>
			<td>WSS_NETTY_WORKER_GROUP_THREADS</td>
			<td>12</td>
			<td> Netty worker group threads count</td>
		</tr>
		<tr>
			<td>listener.wss.netty.max_payload_size</td>
			<td>WSS_NETTY_MAX_PAYLOAD_SIZE</td>
			<td>65536</td>
			<td> Max payload size in bytes</td>
		</tr>
		<tr>
			<td>listener.wss.netty.so_keep_alive</td>
			<td>WSS_NETTY_SO_KEEPALIVE</td>
			<td>true</td>
			<td> Enable/disable keep-alive mechanism to periodically probe the other end of a connection</td>
		</tr>
		<tr>
			<td>listener.wss.netty.shutdown_quiet_period</td>
			<td>WSS_NETTY_SHUTDOWN_QUIET_PERIOD</td>
			<td>0</td>
			<td> Period in seconds in graceful shutdown during which no new tasks are submitted</td>
		</tr>
		<tr>
			<td>listener.wss.netty.shutdown_timeout</td>
			<td>WSS_NETTY_SHUTDOWN_TIMEOUT</td>
			<td>5</td>
			<td> The max time in seconds to wait until the executor is stopped</td>
		</tr>
	</tbody>
</table>


##  Kafka parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>queue.msg-all.consumers-count</td>
			<td>TB_MSG_ALL_CONSUMERS_COUNT</td>
			<td>4</td>
			<td> Number of parallel consumers for 'tbmq.msg.all' topic. Should not be more than the number of partitions in topic</td>
		</tr>
		<tr>
			<td>queue.msg-all.threads-count</td>
			<td>TB_MSG_ALL_THREADS_COUNT</td>
			<td>4</td>
			<td> Number of threads in the pool to process consumers tasks. Should not be less than number of consumers</td>
		</tr>
		<tr>
			<td>queue.msg-all.poll-interval</td>
			<td>TB_MSG_ALL_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.msg.all' topic</td>
		</tr>
		<tr>
			<td>queue.msg-all.pack-processing-timeout</td>
			<td>TB_MSG_ALL_PACK_PROCESSING_TIMEOUT</td>
			<td>20000</td>
			<td> Timeout in milliseconds for processing the pack of messages from 'tbmq.msg.all' topic</td>
		</tr>
		<tr>
			<td>queue.msg-all.ack-strategy.type</td>
			<td>TB_MSG_ALL_ACK_STRATEGY_TYPE</td>
			<td>SKIP_ALL</td>
			<td> Processing strategy for 'tbmq.msg.all' topic. Can be: SKIP_ALL, RETRY_ALL</td>
		</tr>
		<tr>
			<td>queue.msg-all.ack-strategy.retries</td>
			<td>TB_MSG_ALL_ACK_STRATEGY_RETRIES</td>
			<td>1</td>
			<td> Number of retries, 0 is unlimited. Use for RETRY_ALL processing strategy</td>
		</tr>
		<tr>
			<td>queue.msg-all.msg-parallel-processing</td>
			<td>TB_MSG_ALL_PARALLEL_PROCESSING</td>
			<td>false</td>
			<td> Enable/disable processing of consumed messages in parallel (grouped by publishing client id to preserve order).
 Helpful when the same client publishes lots of messages in a short amount of time.
 It is recommended to count the impact of this parameter before setting it on production</td>
		</tr>
		<tr>
			<td>queue.application-persisted-msg.poll-interval</td>
			<td>TB_APP_PERSISTED_MSG_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from Application topics</td>
		</tr>
		<tr>
			<td>queue.application-persisted-msg.pack-processing-timeout</td>
			<td>TB_APP_PERSISTED_MSG_PACK_PROCESSING_TIMEOUT</td>
			<td>20000</td>
			<td> Timeout in milliseconds for processing the pack of messages</td>
		</tr>
		<tr>
			<td>queue.application-persisted-msg.ack-strategy.type</td>
			<td>TB_APP_PERSISTED_MSG_ACK_STRATEGY_TYPE</td>
			<td>RETRY_ALL</td>
			<td> Processing strategy for Application topics. Can be: SKIP_ALL, RETRY_ALL</td>
		</tr>
		<tr>
			<td>queue.application-persisted-msg.ack-strategy.retries</td>
			<td>TB_APP_PERSISTED_MSG_ACK_STRATEGY_RETRIES</td>
			<td>3</td>
			<td> Number of retries, 0 is unlimited. Use for RETRY_ALL processing strategy</td>
		</tr>
		<tr>
			<td>queue.application-persisted-msg.client-id-validation</td>
			<td>TB_APP_PERSISTED_MSG_CLIENT_ID_VALIDATION</td>
			<td>true</td>
			<td> Enable/disable check that application client id contains only alphanumeric chars for Kafka topic creation</td>
		</tr>
		<tr>
			<td>queue.application-persisted-msg.shared-topic-validation</td>
			<td>TB_APP_PERSISTED_MSG_SHARED_TOPIC_VALIDATION</td>
			<td>true</td>
			<td> Enable/disable check that application shared subscription topic filter contains only alphanumeric chars or '+' or '#' for Kafka topic creation</td>
		</tr>
		<tr>
			<td>queue.device-persisted-msg.consumers-count</td>
			<td>TB_DEVICE_PERSISTED_MSG_CONSUMERS_COUNT</td>
			<td>3</td>
			<td> Number of parallel consumers for 'tbmq.msg.persisted' topic. Should not be more than the number of partitions in topic</td>
		</tr>
		<tr>
			<td>queue.device-persisted-msg.threads-count</td>
			<td>TB_DEVICE_PERSISTED_MSG_THREADS_COUNT</td>
			<td>3</td>
			<td> Number of threads in the pool to process consumers tasks</td>
		</tr>
		<tr>
			<td>queue.device-persisted-msg.poll-interval</td>
			<td>TB_DEVICE_PERSISTED_MSG_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.msg.persisted' topic</td>
		</tr>
		<tr>
			<td>queue.device-persisted-msg.pack-processing-timeout</td>
			<td>TB_DEVICE_PERSISTED_MSG_PACK_PROCESSING_TIMEOUT</td>
			<td>20000</td>
			<td> Timeout in milliseconds for processing the pack of messages from 'tbmq.msg.persisted' topic</td>
		</tr>
		<tr>
			<td>queue.device-persisted-msg.ack-strategy.type</td>
			<td>TB_DEVICE_PERSISTED_MSG_ACK_STRATEGY_TYPE</td>
			<td>RETRY_ALL</td>
			<td> Queue processing strategy. Can be: SKIP_ALL, RETRY_ALL</td>
		</tr>
		<tr>
			<td>queue.device-persisted-msg.ack-strategy.retries</td>
			<td>TB_DEVICE_PERSISTED_MSG_ACK_STRATEGY_RETRIES</td>
			<td>3</td>
			<td> Number of retries, 0 is unlimited. Use for RETRY_ALL processing strategy</td>
		</tr>
		<tr>
			<td>queue.device-persisted-msg.ack-strategy.pause-between-retries</td>
			<td>TB_DEVICE_PERSISTED_MSG_ACK_STRATEGY_PAUSE_BETWEEN_RETRIES</td>
			<td>1</td>
			<td> Time in seconds to wait in consumer thread before retries</td>
		</tr>
		<tr>
			<td>queue.retained-msg.poll-interval</td>
			<td>TB_RETAINED_MSG_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.msg.retained' topic</td>
		</tr>
		<tr>
			<td>queue.retained-msg.acknowledge-wait-timeout-ms</td>
			<td>TB_RETAINED_MSG_ACK_WAIT_TIMEOUT_MS</td>
			<td>500</td>
			<td> Interval in milliseconds to wait for system messages to be delivered to 'tbmq.msg.retained' topic</td>
		</tr>
		<tr>
			<td>queue.client-session.poll-interval</td>
			<td>TB_CLIENT_SESSION_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.client.session' topic</td>
		</tr>
		<tr>
			<td>queue.client-session.acknowledge-wait-timeout-ms</td>
			<td>TB_CLIENT_SESSION_ACK_WAIT_TIMEOUT_MS</td>
			<td>500</td>
			<td> Interval in milliseconds to wait for system messages to be delivered to 'tbmq.client.session' topic</td>
		</tr>
		<tr>
			<td>queue.client-subscriptions.poll-interval</td>
			<td>TB_CLIENT_SUBSCRIPTIONS_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.client.subscriptions' topic</td>
		</tr>
		<tr>
			<td>queue.client-subscriptions.acknowledge-wait-timeout-ms</td>
			<td>TB_CLIENT_SUBSCRIPTIONS_ACK_WAIT_TIMEOUT_MS</td>
			<td>500</td>
			<td> Interval in milliseconds to wait for system messages to be delivered to 'tbmq.client.subscriptions' topic</td>
		</tr>
		<tr>
			<td>queue.client-session-event.consumers-count</td>
			<td>TB_CLIENT_SESSION_EVENT_CONSUMERS_COUNT</td>
			<td>2</td>
			<td> Number of parallel consumers for `tbmq.client.session.event.request` topic</td>
		</tr>
		<tr>
			<td>queue.client-session-event.max-pending-requests</td>
			<td>TB_CLIENT_SESSION_EVENT_MAX_PENDING_REQUESTS</td>
			<td>10000</td>
			<td> Number of pending client session events</td>
		</tr>
		<tr>
			<td>queue.client-session-event.poll-interval</td>
			<td>TB_CLIENT_SESSION_EVENT_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.client.session.event.request' topic</td>
		</tr>
		<tr>
			<td>queue.client-session-event.batch-wait-timeout-ms</td>
			<td>TB_CLIENT_SESSION_EVENT_BATCH_WAIT_MS</td>
			<td>2000</td>
			<td> Max interval in milliseconds to process 'tbmq.client.session.event.request' messages after consuming them</td>
		</tr>
		<tr>
			<td>queue.client-session-event-response.response-sender-threads</td>
			<td>TB_CLIENT_SESSION_EVENT_RESPONSE_SENDER_THREADS</td>
			<td>8</td>
			<td> Number of threads for sending event responses to session event requests</td>
		</tr>
		<tr>
			<td>queue.client-session-event-response.poll-interval</td>
			<td>TB_CLIENT_SESSION_EVENT_RESPONSE_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.client.session.event.response' topics</td>
		</tr>
		<tr>
			<td>queue.client-session-event-response.max-request-timeout</td>
			<td>TB_CLIENT_SESSION_EVENT_RESPONSE_MAX_REQUEST_TIMEOUT</td>
			<td>100000</td>
			<td> Max time in milliseconds for client session events before they are expired</td>
		</tr>
		<tr>
			<td>queue.client-session-event-response.cleanup-interval</td>
			<td>TB_CLIENT_SESSION_EVENT_RESPONSE_CLEANUP_INTERVAL</td>
			<td>100</td>
			<td> Period in milliseconds to clean-up stale client session events</td>
		</tr>
		<tr>
			<td>queue.disconnect-client-command.poll-interval</td>
			<td>TB_DISCONNECT_CLIENT_COMMAND_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.client.disconnect' topics</td>
		</tr>
		<tr>
			<td>queue.persisted-downlink-msg.consumers-count</td>
			<td>TB_PERSISTED_DOWNLINK_MSG_CONSUMERS_COUNT</td>
			<td>2</td>
			<td> Number of parallel consumers for `tbmq.msg.downlink.persisted` topics</td>
		</tr>
		<tr>
			<td>queue.persisted-downlink-msg.threads-count</td>
			<td>TB_PERSISTED_DOWNLINK_MSG_THREADS_COUNT</td>
			<td>2</td>
			<td> Number of threads in the pool to process consumers tasks</td>
		</tr>
		<tr>
			<td>queue.persisted-downlink-msg.poll-interval</td>
			<td>TB_PERSISTED_DOWNLINK_MSG_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.msg.downlink.persisted' topics</td>
		</tr>
		<tr>
			<td>queue.basic-downlink-msg.consumers-count</td>
			<td>TB_BASIC_DOWNLINK_MSG_CONSUMERS_COUNT</td>
			<td>2</td>
			<td> Number of parallel consumers for `tbmq.msg.downlink.basic` topics</td>
		</tr>
		<tr>
			<td>queue.basic-downlink-msg.threads-count</td>
			<td>TB_BASIC_DOWNLINK_MSG_THREADS_COUNT</td>
			<td>2</td>
			<td> Number of threads in the pool to process consumers tasks</td>
		</tr>
		<tr>
			<td>queue.basic-downlink-msg.poll-interval</td>
			<td>TB_BASIC_DOWNLINK_MSG_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.msg.downlink.basic' topics</td>
		</tr>
		<tr>
			<td>queue.application-removed-event.poll-interval</td>
			<td>TB_APPLICATION_REMOVED_EVENT_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.sys.app.removed' topic</td>
		</tr>
		<tr>
			<td>queue.application-removed-event.processing.cron</td>
			<td>TB_APPLICATION_REMOVED_EVENT_PROCESSING_CRON</td>
			<td>0 0 3 * * *</td>
			<td> Cron expression to when execute the consuming and processing of messages</td>
		</tr>
		<tr>
			<td>queue.application-removed-event.processing.zone</td>
			<td>TB_APPLICATION_REMOVED_EVENT_PROCESSING_ZONE</td>
			<td>UTC</td>
			<td> Timezone for the processing cron-job</td>
		</tr>
		<tr>
			<td>queue.historical-data-total.poll-interval</td>
			<td>TB_HISTORICAL_DATA_TOTAL_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.sys.historical.data' topic</td>
		</tr>
		<tr>
			<td>queue.integration-uplink.poll-interval</td>
			<td>TB_IE_UPLINK_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.ie.uplink' topic</td>
		</tr>
		<tr>
			<td>queue.integration-uplink-notifications.poll-interval</td>
			<td>TB_IE_UPLINK_NOTIFICATIONS_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.ie.uplink.notifications' topics</td>
		</tr>
		<tr>
			<td>queue.internode-notifications.poll-interval</td>
			<td>TB_NODE_NOTIFICATION_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.sys.internode.notifications' topics</td>
		</tr>
		<tr>
			<td>queue.blocked-client.poll-interval</td>
			<td>TB_BLOCKED_CLIENT_POLL_INTERVAL</td>
			<td>100</td>
			<td> Interval in milliseconds to poll messages from 'tbmq.client.blocked' topic</td>
		</tr>
		<tr>
			<td>queue.blocked-client.acknowledge-wait-timeout-ms</td>
			<td>TB_BLOCKED_CLIENT_ACK_WAIT_TIMEOUT_MS</td>
			<td>500</td>
			<td> Interval in milliseconds to wait for system messages to be delivered to 'tbmq.client.blocked' topic</td>
		</tr>
		<tr>
			<td>queue.kafka.bootstrap.servers</td>
			<td>TB_KAFKA_SERVERS</td>
			<td>localhost:9092</td>
			<td> List of kafka bootstrap servers used to establish connection</td>
		</tr>
		<tr>
			<td>queue.kafka.enable-topic-deletion</td>
			<td>TB_KAFKA_ENABLE_TOPIC_DELETION</td>
			<td>true</td>
			<td> Controls whether TBMQ is allowed to delete Kafka topics that were created for
 Application MQTT Clients or Application Shared subscriptions.
 When set to 'true', TBMQ may automatically remove topics during cleanup
 (for example, when an Application client or shared subscription is deleted).
 When set to 'false', TBMQ will skip topic deletions and simply stop using them.
 This helps prevent accidental data loss in production environments</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.partition-assignment-strategy</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_PARTITION_ASSIGNMENT_STRATEGY</td>
			<td>org.apache.kafka.clients.consumer.StickyAssignor</td>
			<td> A list of class names or class types, ordered by preference, of supported partition assignment strategies that the client will use to distribute partition ownership amongst consumer instances when group management is used</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.session-timeout-ms</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_SESSION_TIMEOUT_MS</td>
			<td>10000</td>
			<td> The timeout in milliseconds used to detect client failures when using Kafka's group management facility</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.max-poll-interval-ms</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_MAX_POLL_INTERVAL_MS</td>
			<td>300000</td>
			<td> The maximum delay in milliseconds between invocations of poll() when using consumer group management</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.max-poll-records</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_MAX_POLL_RECORDS</td>
			<td>2000</td>
			<td> The maximum number of records returned in a single call to poll()</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.max-partition-fetch-bytes</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_MAX_PARTITION_FETCH_BYTES</td>
			<td>16777216</td>
			<td> The maximum amount of data in bytes per-partition the server will return</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.fetch-max-bytes</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_FETCH_MAX_BYTES</td>
			<td>134217728</td>
			<td> The maximum amount of data in bytes the server should return for a fetch request</td>
		</tr>
		<tr>
			<td>queue.kafka.default.consumer.heartbeat-interval-ms</td>
			<td>TB_KAFKA_DEFAULT_CONSUMER_HEARTBEAT_INTERVAL_MS</td>
			<td>3000</td>
			<td> The expected time between heartbeats to the consumer coordinator when using Kafka’s group management facilities.
 Heartbeats are used to ensure that the consumer’s session stays active and to facilitate rebalancing when new consumers join or leave the group.
 The value must be set lower than TB_KAFKA_DEFAULT_CONSUMER_SESSION_TIMEOUT_MS, but typically should be set no higher than 1/3 of that value.
 It can be adjusted even lower to control the expected time for normal rebalances. Value in milliseconds. Default is 3 sec</td>
		</tr>
		<tr>
			<td>queue.kafka.default.producer.acks</td>
			<td>TB_KAFKA_DEFAULT_PRODUCER_ACKS</td>
			<td>1</td>
			<td> The number of acknowledgments the producer requires the leader to have received before considering a request complete</td>
		</tr>
		<tr>
			<td>queue.kafka.default.producer.retries</td>
			<td>TB_KAFKA_DEFAULT_PRODUCER_RETRIES</td>
			<td>1</td>
			<td> Setting a value greater than zero will cause the client to resend any record whose send fails with a potentially transient error</td>
		</tr>
		<tr>
			<td>queue.kafka.default.producer.batch-size</td>
			<td>TB_KAFKA_DEFAULT_PRODUCER_BATCH_SIZE</td>
			<td>16384</td>
			<td> The producer will attempt to batch records together into fewer requests whenever multiple records are being sent to the same partition. Size in bytes</td>
		</tr>
		<tr>
			<td>queue.kafka.default.producer.linger-ms</td>
			<td>TB_KAFKA_DEFAULT_PRODUCER_LINGER_MS</td>
			<td>5</td>
			<td> The producer groups together any records that arrive in between request transmissions into a single batched request, set in milliseconds</td>
		</tr>
		<tr>
			<td>queue.kafka.default.producer.buffer-memory</td>
			<td>TB_KAFKA_DEFAULT_PRODUCER_BUFFER_MEMORY</td>
			<td>33554432</td>
			<td> The total bytes of memory the producer can use to buffer records waiting to be sent to the server</td>
		</tr>
		<tr>
			<td>queue.kafka.default.producer.compression-type</td>
			<td>TB_KAFKA_DEFAULT_COMPRESSION_TYPE</td>
			<td>none</td>
			<td> The compression type for all data generated by the producer. Valid values are `none`, `gzip`, `snappy`, `lz4`, or `zstd`</td>
		</tr>
		<tr>
			<td>queue.kafka.admin.config</td>
			<td>TB_KAFKA_ADMIN_CONFIG</td>
			<td>retries:1</td>
			<td> List of configs separated by semicolon used for admin kafka client creation</td>
		</tr>
		<tr>
			<td>queue.kafka.admin.command-timeout</td>
			<td>TB_KAFKA_ADMIN_COMMAND_TIMEOUT_SEC</td>
			<td>30</td>
			<td> Kafka Admin client command timeout (in seconds). Applies to operations like describeCluster, listTopics, etc</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-stats.enabled</td>
			<td>TB_KAFKA_CONSUMER_STATS_ENABLED</td>
			<td>true</td>
			<td> Prints lag if enabled between consumer group offset and last messages offset in Kafka topics</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-stats.print-interval-ms</td>
			<td>TB_KAFKA_CONSUMER_STATS_PRINT_INTERVAL_MS</td>
			<td>60000</td>
			<td> Statistics printing interval in milliseconds for Kafka's consumer-groups stats</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-stats.kafka-response-timeout-ms</td>
			<td>TB_KAFKA_CONSUMER_STATS_RESPONSE_TIMEOUT_MS</td>
			<td>1000</td>
			<td> Time to wait in milliseconds for the stats-loading requests to Kafka to finish</td>
		</tr>
		<tr>
			<td>queue.kafka.consumer-stats.consumer-config</td>
			<td>TB_KAFKA_CONSUMER_STATS_CONSUMER_CONFIG</td>
			<td></td>
			<td> List of configs separated by semicolon used for kafka stats consumer</td>
		</tr>
		<tr>
			<td>queue.kafka.home-page.consumer-config</td>
			<td>TB_KAFKA_HOME_PAGE_CONSUMER_CONFIG</td>
			<td></td>
			<td> List of configs separated by semicolon used for kafka admin client for home page</td>
		</tr>
		<tr>
			<td>queue.kafka.home-page.kafka-response-timeout-ms</td>
			<td>TB_KAFKA_HOME_PAGE_RESPONSE_TIMEOUT_MS</td>
			<td>1000</td>
			<td> Time to wait in milliseconds for the home page requests to Kafka to finish</td>
		</tr>
		<tr>
			<td>queue.kafka.msg-all.topic</td>
			<td>TB_KAFKA_MSG_ALL_TOPIC</td>
			<td>tbmq.msg.all</td>
			<td> Topic for persisting incoming PUBLISH messages</td>
		</tr>
		<tr>
			<td>queue.kafka.msg-all.topic-properties</td>
			<td>TB_KAFKA_MSG_ALL_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:2147483648;partitions:16;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.msg.all` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.msg-all.additional-consumer-config</td>
			<td>TB_KAFKA_MSG_ALL_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.msg.all` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.msg-all.additional-producer-config</td>
			<td>TB_KAFKA_MSG_ALL_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.msg.all` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.application-persisted-msg.topic-properties</td>
			<td>TB_KAFKA_APP_PERSISTED_MSG_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.msg.app` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.application-persisted-msg.additional-consumer-config</td>
			<td>TB_KAFKA_APP_PERSISTED_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
			<td>max.poll.records:200</td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.msg.app` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.application-persisted-msg.additional-producer-config</td>
			<td>TB_KAFKA_APP_PERSISTED_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.msg.app` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.application-persisted-msg.shared-topic.topic-properties</td>
			<td>TB_KAFKA_APP_PERSISTED_MSG_SHARED_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for application shared subscription topics</td>
		</tr>
		<tr>
			<td>queue.kafka.application-persisted-msg.shared-topic.additional-consumer-config</td>
			<td>TB_KAFKA_APP_PERSISTED_MSG_SHARED_ADDITIONAL_CONSUMER_CONFIG</td>
			<td>max.poll.records:500</td>
			<td> Additional Kafka consumer configs separated by semicolon for application shared subscription topics</td>
		</tr>
		<tr>
			<td>queue.kafka.application-persisted-msg.shared-topic.additional-producer-config</td>
			<td>TB_KAFKA_APP_PERSISTED_MSG_SHARED_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for application shared subscription topics</td>
		</tr>
		<tr>
			<td>queue.kafka.device-persisted-msg.topic</td>
			<td>TB_KAFKA_DEVICE_PERSISTED_MSG_TOPIC</td>
			<td>tbmq.msg.persisted</td>
			<td> Topic for persisting messages related to Device clients before saving them in Database</td>
		</tr>
		<tr>
			<td>queue.kafka.device-persisted-msg.topic-properties</td>
			<td>TB_KAFKA_DEVICE_PERSISTED_MSG_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:12;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.msg.persisted` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.device-persisted-msg.additional-consumer-config</td>
			<td>TB_KAFKA_DEVICE_PERSISTED_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.msg.persisted` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.device-persisted-msg.additional-producer-config</td>
			<td>TB_KAFKA_DEVICE_PERSISTED_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.msg.persisted` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.retained-msg.topic</td>
			<td>TB_KAFKA_RETAINED_MSG_TOPIC</td>
			<td>tbmq.msg.retained</td>
			<td> Topic for retained messages</td>
		</tr>
		<tr>
			<td>queue.kafka.retained-msg.topic-properties</td>
			<td>TB_KAFKA_RETAINED_MSG_TOPIC_PROPERTIES</td>
			<td>segment.bytes:26214400;partitions:1;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.msg.retained` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.retained-msg.additional-consumer-config</td>
			<td>TB_KAFKA_RETAINED_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.msg.retained` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.retained-msg.additional-producer-config</td>
			<td>TB_KAFKA_RETAINED_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
			<td>retries:3</td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.msg.retained` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.client-session.topic</td>
			<td>TB_KAFKA_CLIENT_SESSION_TOPIC</td>
			<td>tbmq.client.session</td>
			<td> Topic for persisting client sessions</td>
		</tr>
		<tr>
			<td>queue.kafka.client-session.topic-properties</td>
			<td>TB_KAFKA_CLIENT_SESSION_TOPIC_PROPERTIES</td>
			<td>segment.bytes:26214400;partitions:1;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.client.session` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.client-session.additional-consumer-config</td>
			<td>TB_KAFKA_CLIENT_SESSION_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.client.session` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.client-session.additional-producer-config</td>
			<td>TB_KAFKA_CLIENT_SESSION_ADDITIONAL_PRODUCER_CONFIG</td>
			<td>retries:3</td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.client.session` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.client-subscriptions.topic</td>
			<td>TB_KAFKA_CLIENT_SUBSCRIPTIONS_TOPIC</td>
			<td>tbmq.client.subscriptions</td>
			<td> Topic for persisting client subscriptions</td>
		</tr>
		<tr>
			<td>queue.kafka.client-subscriptions.topic-properties</td>
			<td>TB_KAFKA_CLIENT_SUBSCRIPTIONS_TOPIC_PROPERTIES</td>
			<td>segment.bytes:26214400;partitions:1;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.client.subscriptions` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.client-subscriptions.additional-consumer-config</td>
			<td>TB_KAFKA_CLIENT_SUBSCRIPTIONS_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.client.subscriptions` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.client-subscriptions.additional-producer-config</td>
			<td>TB_KAFKA_CLIENT_SUBSCRIPTIONS_ADDITIONAL_PRODUCER_CONFIG</td>
			<td>retries:3</td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.client.subscriptions` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.client-session-event.topic</td>
			<td>TB_KAFKA_CLIENT_SESSION_EVENT_TOPIC</td>
			<td>tbmq.client.session.event.request</td>
			<td> Topic for sending client session event requests</td>
		</tr>
		<tr>
			<td>queue.kafka.client-session-event.topic-properties</td>
			<td>TB_KAFKA_CLIENT_SESSION_EVENT_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:24;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.client.session.event.request` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.client-session-event.additional-consumer-config</td>
			<td>TB_KAFKA_CLIENT_SESSION_EVENT_ADDITIONAL_CONSUMER_CONFIG</td>
			<td>max.poll.records:1000</td>
			<td> Additional Kafka consumer configs separated by semicolon for ``tbmq.client.session.event.request`` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.client-session-event.additional-producer-config</td>
			<td>TB_KAFKA_CLIENT_SESSION_EVENT_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for ``tbmq.client.session.event.request`` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.client-session-event-response.topic-prefix</td>
			<td>TB_KAFKA_CLIENT_SESSION_EVENT_RESPONSE_TOPIC_PREFIX</td>
			<td>tbmq.client.session.event.response</td>
			<td> Prefix for topics for sending client session event responses to Broker nodes</td>
		</tr>
		<tr>
			<td>queue.kafka.client-session-event-response.topic-properties</td>
			<td>TB_KAFKA_CLIENT_SESSION_EVENT_RESPONSE_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.client.session.event.response` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.client-session-event-response.additional-consumer-config</td>
			<td>TB_KAFKA_CLIENT_SESSION_EVENT_RESPONSE_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.client.session.event.response` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.client-session-event-response.additional-producer-config</td>
			<td>TB_KAFKA_CLIENT_SESSION_EVENT_RESPONSE_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.client.session.event.response` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.disconnect-client-command.topic-prefix</td>
			<td>TB_KAFKA_DISCONNECT_CLIENT_COMMAND_TOPIC_PREFIX</td>
			<td>tbmq.client.disconnect</td>
			<td> Prefix for topics for sending disconnect client commands to Broker nodes</td>
		</tr>
		<tr>
			<td>queue.kafka.disconnect-client-command.topic-properties</td>
			<td>TB_KAFKA_DISCONNECT_CLIENT_COMMAND_RESPONSE_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.client.disconnect` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.disconnect-client-command.additional-consumer-config</td>
			<td>TB_KAFKA_DISCONNECT_CLIENT_COMMAND_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.client.disconnect` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.disconnect-client-command.additional-producer-config</td>
			<td>TB_KAFKA_DISCONNECT_CLIENT_COMMAND_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.client.disconnect` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.basic-downlink-msg.topic-prefix</td>
			<td>TB_KAFKA_BASIC_DOWNLINK_MSG_TOPIC_PREFIX</td>
			<td>tbmq.msg.downlink.basic</td>
			<td> Prefix for topics for non-persistent Device messages that should be transferred to other Broker nodes</td>
		</tr>
		<tr>
			<td>queue.kafka.basic-downlink-msg.topic-properties</td>
			<td>TB_KAFKA_BASIC_DOWNLINK_MSG_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:12;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.msg.downlink.basic` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.basic-downlink-msg.additional-consumer-config</td>
			<td>TB_KAFKA_BASIC_DOWNLINK_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.msg.downlink.basic` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.basic-downlink-msg.additional-producer-config</td>
			<td>TB_KAFKA_BASIC_DOWNLINK_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
			<td>batch.size:32768</td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.msg.downlink.basic` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.persisted-downlink-msg.topic-prefix</td>
			<td>TB_KAFKA_PERSISTED_DOWNLINK_MSG_TOPIC_PREFIX</td>
			<td>tbmq.msg.downlink.persisted</td>
			<td> Prefix for topics for persistent Device messages that should be transferred to other Broker nodes</td>
		</tr>
		<tr>
			<td>queue.kafka.persisted-downlink-msg.topic-properties</td>
			<td>TB_KAFKA_PERSISTED_DOWNLINK_MSG_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:12;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.msg.downlink.persisted` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.persisted-downlink-msg.additional-consumer-config</td>
			<td>TB_KAFKA_PERSISTED_DOWNLINK_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.msg.downlink.persisted` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.persisted-downlink-msg.additional-producer-config</td>
			<td>TB_KAFKA_PERSISTED_DOWNLINK_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.msg.downlink.persisted` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.application-removed-event.topic</td>
			<td>TB_KAFKA_APPLICATION_REMOVED_EVENT_TOPIC</td>
			<td>tbmq.sys.app.removed</td>
			<td> Topic for sending events to remove application topics when application clients are changed to be device clients</td>
		</tr>
		<tr>
			<td>queue.kafka.application-removed-event.topic-properties</td>
			<td>TB_KAFKA_APPLICATION_REMOVED_EVENT_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.sys.app.removed` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.application-removed-event.additional-consumer-config</td>
			<td>TB_KAFKA_APPLICATION_REMOVED_EVENT_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.sys.app.removed` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.application-removed-event.additional-producer-config</td>
			<td>TB_KAFKA_APPLICATION_REMOVED_EVENT_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.sys.app.removed` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.historical-data-total.topic</td>
			<td>TB_KAFKA_HISTORICAL_DATA_TOTAL_TOPIC</td>
			<td>tbmq.sys.historical.data</td>
			<td> Topic for sending historical data stats to be summed from each broker</td>
		</tr>
		<tr>
			<td>queue.kafka.historical-data-total.topic-properties</td>
			<td>TB_KAFKA_HISTORICAL_DATA_TOTAL_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.sys.historical.data` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.historical-data-total.additional-consumer-config</td>
			<td>TB_KAFKA_HISTORICAL_DATA_TOTAL_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.sys.historical.data` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.historical-data-total.additional-producer-config</td>
			<td>TB_KAFKA_HISTORICAL_DATA_TOTAL_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.sys.historical.data` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.topic-prefix</td>
			<td>TB_KAFKA_IE_DOWNLINK_TOPIC_PREFIX</td>
			<td>tbmq.ie.downlink</td>
			<td> Prefix for topics for sending integration configurations and validation requests from tbmq to integration executors</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.http.topic-properties</td>
			<td>TB_KAFKA_IE_DOWNLINK_HTTP_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:6;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.ie.downlink.http` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.http.additional-consumer-config</td>
			<td>TB_KAFKA_IE_DOWNLINK_HTTP_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.ie.downlink.http` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.http.additional-producer-config</td>
			<td>TB_KAFKA_IE_DOWNLINK_HTTP_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.ie.downlink.http` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.kafka.topic-properties</td>
			<td>TB_KAFKA_IE_DOWNLINK_KAFKA_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:6;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.ie.downlink.kafka` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.kafka.additional-consumer-config</td>
			<td>TB_KAFKA_IE_DOWNLINK_KAFKA_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.ie.downlink.kafka` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.kafka.additional-producer-config</td>
			<td>TB_KAFKA_IE_DOWNLINK_KAFKA_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.ie.downlink.kafka` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.mqtt.topic-properties</td>
			<td>TB_KAFKA_IE_DOWNLINK_MQTT_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:6;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.ie.downlink.mqtt` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.mqtt.additional-consumer-config</td>
			<td>TB_KAFKA_IE_DOWNLINK_MQTT_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.ie.downlink.mqtt` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-downlink.mqtt.additional-producer-config</td>
			<td>TB_KAFKA_IE_DOWNLINK_MQTT_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.ie.downlink.mqtt` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink.topic</td>
			<td>TB_KAFKA_IE_UPLINK_TOPIC</td>
			<td>tbmq.ie.uplink</td>
			<td> Topic for sending messages/events from integration executors to tbmq</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink.topic-properties</td>
			<td>TB_KAFKA_IE_UPLINK_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:6;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.ie.uplink` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink.additional-consumer-config</td>
			<td>TB_KAFKA_IE_UPLINK_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.ie.uplink` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink.additional-producer-config</td>
			<td>TB_KAFKA_IE_UPLINK_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.ie.uplink` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink-notifications.topic-prefix</td>
			<td>TB_KAFKA_IE_UPLINK_NOTIF_TOPIC_PREFIX</td>
			<td>tbmq.ie.uplink.notifications</td>
			<td> Prefix for topics for sending notifications or replies from integration executors to specific tbmq node</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink-notifications.topic-properties</td>
			<td>TB_KAFKA_IE_UPLINK_NOTIF_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.ie.uplink.notifications` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink-notifications.additional-consumer-config</td>
			<td>TB_KAFKA_IE_UPLINK_NOTIF_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.ie.uplink.notifications` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-uplink-notifications.additional-producer-config</td>
			<td>TB_KAFKA_IE_UPLINK_NOTIF_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.ie.uplink.notifications` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-msg.topic-properties</td>
			<td>TB_KAFKA_IE_MSG_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.msg.ie` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-msg.additional-consumer-config</td>
			<td>TB_KAFKA_IE_MSG_ADDITIONAL_CONSUMER_CONFIG</td>
			<td>max.poll.records:50</td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.msg.ie` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.integration-msg.additional-producer-config</td>
			<td>TB_KAFKA_IE_MSG_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.msg.ie` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.internode-notifications.topic-prefix</td>
			<td>TB_KAFKA_INTERNODE_NOTIFICATIONS_TOPIC_PREFIX</td>
			<td>tbmq.sys.internode.notifications</td>
			<td> Prefix for topics for sending system notifications to Broker nodes</td>
		</tr>
		<tr>
			<td>queue.kafka.internode-notifications.topic-properties</td>
			<td>TB_KAFKA_INTERNODE_NOTIFICATIONS_TOPIC_PROPERTIES</td>
			<td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:1048576000;partitions:1;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.sys.internode.notifications` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.internode-notifications.additional-consumer-config</td>
			<td>TB_KAFKA_INTERNODE_NOTIFICATIONS_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.sys.internode.notifications` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.internode-notifications.additional-producer-config</td>
			<td>TB_KAFKA_INTERNODE_NOTIFICATIONS_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.sys.internode.notifications` topics</td>
		</tr>
		<tr>
			<td>queue.kafka.blocked-client.topic</td>
			<td>TB_KAFKA_BLOCKED_CLIENT_TOPIC</td>
			<td>tbmq.client.blocked</td>
			<td> Topic for blocked clients</td>
		</tr>
		<tr>
			<td>queue.kafka.blocked-client.topic-properties</td>
			<td>TB_KAFKA_BLOCKED_CLIENT_TOPIC_PROPERTIES</td>
			<td>segment.bytes:26214400;partitions:1;replication.factor:1</td>
			<td> Kafka topic properties separated by semicolon for `tbmq.client.blocked` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.blocked-client.additional-consumer-config</td>
			<td>TB_KAFKA_BLOCKED_CLIENT_ADDITIONAL_CONSUMER_CONFIG</td>
			<td></td>
			<td> Additional Kafka consumer configs separated by semicolon for `tbmq.client.blocked` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.blocked-client.additional-producer-config</td>
			<td>TB_KAFKA_BLOCKED_CLIENT_ADDITIONAL_PRODUCER_CONFIG</td>
			<td></td>
			<td> Additional Kafka producer configs separated by semicolon for `tbmq.client.blocked` topic</td>
		</tr>
		<tr>
			<td>queue.kafka.kafka-prefix</td>
			<td>TB_KAFKA_PREFIX</td>
			<td></td>
			<td> The common prefix for all Kafka topics, producers, consumer groups, and consumers. Defaults to empty string meaning no prefix is added</td>
		</tr>
	</tbody>
</table>


##  General service parameters

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
			<td>tbmq</td>
			<td> Microservice type. Allowed value: tbmq</td>
		</tr>
		<tr>
			<td>service.id</td>
			<td>TB_SERVICE_ID</td>
			<td></td>
			<td> Unique id for this service (autogenerated if empty)</td>
		</tr>
	</tbody>
</table>


##  Actor system parameters

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
			<td> Number of messages the actor system will process per actor before switching to processing of messages for next actor</td>
		</tr>
		<tr>
			<td>actors.system.scheduler-pool-size</td>
			<td>ACTORS_SYSTEM_SCHEDULER_POOL_SIZE</td>
			<td>1</td>
			<td> Thread pool size for actor system scheduler</td>
		</tr>
		<tr>
			<td>actors.system.max-actor-init-attempts</td>
			<td>ACTORS_SYSTEM_MAX_ACTOR_INIT_ATTEMPTS</td>
			<td>10</td>
			<td> Maximum number of attempts to init the actor before disabling the actor</td>
		</tr>
		<tr>
			<td>actors.system.processing-metrics.enabled</td>
			<td>ACTORS_SYSTEM_PROCESSING_METRICS_ENABLED</td>
			<td>false</td>
			<td> Enable/disable actors processing metrics</td>
		</tr>
		<tr>
			<td>actors.system.disconnect-wait-timeout-ms</td>
			<td>ACTORS_SYSTEM_DISCONNECT_WAIT_TIMEOUT_MS</td>
			<td>2000</td>
			<td> Actors disconnect timeout in milliseconds</td>
		</tr>
		<tr>
			<td>actors.persisted-device.dispatcher-pool-size</td>
			<td>ACTORS_SYSTEM_PERSISTED_DEVICE_DISPATCHER_POOL_SIZE</td>
			<td>8</td>
			<td> Number of threads processing the Device actor's messages</td>
		</tr>
		<tr>
			<td>actors.persisted-device.wait-before-actor-stop-minutes</td>
			<td>ACTORS_SYSTEM_PERSISTED_DEVICE_WAIT_BEFORE_ACTOR_STOP_MINUTES</td>
			<td>5</td>
			<td> Minutes to wait before deleting Device actor after disconnect</td>
		</tr>
		<tr>
			<td>actors.client.dispatcher-pool-size</td>
			<td>ACTORS_SYSTEM_CLIENT_DISPATCHER_POOL_SIZE</td>
			<td>8</td>
			<td> Number of threads processing the MQTT client actors messages</td>
		</tr>
		<tr>
			<td>actors.client.wait-before-generated-actor-stop-seconds</td>
			<td>ACTORS_SYSTEM_CLIENT_WAIT_BEFORE_GENERATED_ACTOR_STOP_SECONDS</td>
			<td>10</td>
			<td> Time in seconds to wait until the actor is stopped for clients that did not specify client id</td>
		</tr>
		<tr>
			<td>actors.client.wait-before-named-actor-stop-seconds</td>
			<td>ACTORS_SYSTEM_CLIENT_WAIT_BEFORE_NAMED_ACTOR_STOP_SECONDS</td>
			<td>60</td>
			<td> Time in seconds to wait until the actor is stopped for clients that specified client id</td>
		</tr>
		<tr>
			<td>actors.rule.mail_thread_pool_size</td>
			<td>ACTORS_RULE_MAIL_THREAD_POOL_SIZE</td>
			<td>4</td>
			<td> Thread pool size for mail sender executor service</td>
		</tr>
		<tr>
			<td>actors.rule.mail_password_reset_thread_pool_size</td>
			<td>ACTORS_RULE_MAIL_PASSWORD_RESET_THREAD_POOL_SIZE</td>
			<td>4</td>
			<td> Thread pool size for password reset emails executor service</td>
		</tr>
	</tbody>
</table>


##  Platform integrations parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>integrations.init.connection-check-api-request-timeout-sec</td>
			<td>INTEGRATIONS_INIT_CONNECTION_CHECK_API_REQUEST_TIMEOUT_SEC</td>
			<td>20</td>
			<td> Connection check timeout for API request in seconds</td>
		</tr>
		<tr>
			<td>integrations.cleanup.period</td>
			<td>INTEGRATIONS_CLEANUP_PERIOD_SEC</td>
			<td>10800</td>
			<td> The parameter to specify the period of execution cleanup task for disconnected integrations. Value set in seconds. Default value corresponds to three hours</td>
		</tr>
		<tr>
			<td>integrations.cleanup.ttl</td>
			<td>INTEGRATIONS_CLEANUP_TTL_SEC</td>
			<td>604800</td>
			<td> Administration TTL (in seconds) for cleaning up disconnected integrations.
 The cleanup removes integration topics that persist messages.
 The current value is set to one week. A value of 0 or negative disables this TTL</td>
		</tr>
	</tbody>
</table>


##  Database time series parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>database.ts_max_intervals</td>
			<td>DATABASE_TS_MAX_INTERVALS</td>
			<td>700</td>
			<td> Max number of DB queries generated by single API call to fetch time series records</td>
		</tr>
	</tbody>
</table>


##  SQL configuration parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>sql.batch_sort</td>
			<td>SQL_BATCH_SORT</td>
			<td>true</td>
			<td> Specify whether to sort entities before batch update. Should be enabled for cluster mode to avoid deadlocks</td>
		</tr>
		<tr>
			<td>sql.ts_key_value_partitioning</td>
			<td>SQL_TS_KV_PARTITIONING</td>
			<td>DAYS</td>
			<td> Specify partitioning size for timestamp key-value storage. Example: DAYS, MONTHS, YEARS, INDEFINITE</td>
		</tr>
		<tr>
			<td>sql.remove_null_chars</td>
			<td>SQL_REMOVE_NULL_CHARS</td>
			<td>true</td>
			<td> Specify whether to remove null characters from strValue before insert</td>
		</tr>
		<tr>
			<td>sql.ts.batch_size</td>
			<td>SQL_TS_BATCH_SIZE</td>
			<td>1000</td>
			<td> Batch size for persisting time series inserts</td>
		</tr>
		<tr>
			<td>sql.ts.batch_max_delay</td>
			<td>SQL_TS_BATCH_MAX_DELAY_MS</td>
			<td>100</td>
			<td> Max timeout for time series entries queue polling. Value set in milliseconds</td>
		</tr>
		<tr>
			<td>sql.ts.batch_threads</td>
			<td>SQL_TS_BATCH_THREADS</td>
			<td>3</td>
			<td> Number of threads that execute batch insert/update statements for time series data. Batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td>
		</tr>
		<tr>
			<td>sql.ts_latest.batch_size</td>
			<td>SQL_TS_LATEST_BATCH_SIZE</td>
			<td>1000</td>
			<td> Batch size for persisting latest time series inserts</td>
		</tr>
		<tr>
			<td>sql.ts_latest.batch_max_delay</td>
			<td>SQL_TS_LATEST_BATCH_MAX_DELAY_MS</td>
			<td>50</td>
			<td> Max timeout for latest time series entries queue polling. Value set in milliseconds</td>
		</tr>
		<tr>
			<td>sql.ts_latest.batch_threads</td>
			<td>SQL_TS_LATEST_BATCH_THREADS</td>
			<td>3</td>
			<td> Number of threads that execute batch insert/update statements for latest time series data. Batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td>
		</tr>
		<tr>
			<td>sql.unauthorized-client.insert.batch_size</td>
			<td>SQL_UNAUTHORIZED_CLIENT_INSERT_BATCH_SIZE</td>
			<td>1000</td>
			<td> Batch size for persisting unauthorized client inserts</td>
		</tr>
		<tr>
			<td>sql.unauthorized-client.insert.batch_max_delay</td>
			<td>SQL_UNAUTHORIZED_CLIENT_INSERT_BATCH_MAX_DELAY_MS</td>
			<td>50</td>
			<td> Max timeout for unauthorized client insert entries queue polling. Value set in milliseconds</td>
		</tr>
		<tr>
			<td>sql.unauthorized-client.insert.batch_threads</td>
			<td>SQL_UNAUTHORIZED_CLIENT_INSERT_BATCH_THREADS</td>
			<td>3</td>
			<td> Number of threads that execute batch insert/update statements for unauthorized client data. Batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td>
		</tr>
		<tr>
			<td>sql.unauthorized-client.delete.batch_size</td>
			<td>SQL_UNAUTHORIZED_CLIENT_DELETE_BATCH_SIZE</td>
			<td>1000</td>
			<td> Batch size for processing unauthorized client deletes</td>
		</tr>
		<tr>
			<td>sql.unauthorized-client.delete.batch_max_delay</td>
			<td>SQL_UNAUTHORIZED_CLIENT_DELETE_BATCH_MAX_DELAY_MS</td>
			<td>50</td>
			<td> Max timeout for unauthorized client delete entries queue polling. Value set in milliseconds</td>
		</tr>
		<tr>
			<td>sql.unauthorized-client.delete.batch_threads</td>
			<td>SQL_UNAUTHORIZED_CLIENT_DELETE_BATCH_THREADS</td>
			<td>3</td>
			<td> Number of threads that execute batch delete statements for unauthorized client data. Batch thread count have to be a prime number like 3 or 5 to gain perfect hash distribution</td>
		</tr>
		<tr>
			<td>sql.events.batch_size</td>
			<td>SQL_EVENTS_BATCH_SIZE</td>
			<td>10000</td>
			<td> Batch size for persisting events updates</td>
		</tr>
		<tr>
			<td>sql.events.batch_max_delay</td>
			<td>SQL_EVENTS_BATCH_MAX_DELAY_MS</td>
			<td>100</td>
			<td> Max timeout for events entries queue polling. The value set in milliseconds</td>
		</tr>
		<tr>
			<td>sql.events.batch_threads</td>
			<td>SQL_EVENTS_BATCH_THREADS</td>
			<td>3</td>
			<td> Batch size for processing events insert/update. Batch thread count has to be a prime number like 3 or 5 to gain perfect hash distribution</td>
		</tr>
		<tr>
			<td>sql.events.partition_size</td>
			<td>SQL_EVENTS_REGULAR_PARTITION_SIZE_HOURS</td>
			<td>168</td>
			<td> Number of hours to partition the events. The current value corresponds to one week</td>
		</tr>
		<tr>
			<td>sql.events.max-symbols</td>
			<td>SQL_EVENTS_MAX_SYMBOLS</td>
			<td>4096</td>
			<td> Maximum number of symbols per event. The event content will be truncated if needed</td>
		</tr>
		<tr>
			<td>sql.ttl.ts.enabled</td>
			<td>SQL_TTL_TS_ENABLED</td>
			<td>true</td>
			<td> The parameter to specify whether to use TTL (Time To Live) for time series records</td>
		</tr>
		<tr>
			<td>sql.ttl.ts.execution_interval_ms</td>
			<td>SQL_TTL_TS_EXECUTION_INTERVAL_MS</td>
			<td>86400000</td>
			<td> The parameter to specify the period of execution TTL task for time series records. Value set in milliseconds. Default value corresponds to one day</td>
		</tr>
		<tr>
			<td>sql.ttl.ts.ts_key_value_ttl</td>
			<td>SQL_TTL_TS_KEY_VALUE_TTL</td>
			<td>604800</td>
			<td> The parameter to specify system TTL(Time To Live) value for time series records. Value set in seconds. 0 - records are never expired. Default value corresponds to seven days</td>
		</tr>
		<tr>
			<td>sql.ttl.unauthorized_client.enabled</td>
			<td>SQL_TTL_UNAUTHORIZED_CLIENT_ENABLED</td>
			<td>true</td>
			<td> The parameter to specify whether to use TTL (Time To Live) for unauthorized clients</td>
		</tr>
		<tr>
			<td>sql.ttl.unauthorized_client.execution_interval_ms</td>
			<td>SQL_TTL_UNAUTHORIZED_CLIENT_EXECUTION_INTERVAL_MS</td>
			<td>86400000</td>
			<td> The parameter to specify the period of execution TTL task for unauthorized clients. Value set in milliseconds. Default value corresponds to one day</td>
		</tr>
		<tr>
			<td>sql.ttl.unauthorized_client.ttl</td>
			<td>SQL_TTL_UNAUTHORIZED_CLIENT_TTL</td>
			<td>259200</td>
			<td> The parameter to specify system TTL(Time To Live) value for unauthorized clients. Value set in seconds. 0 - records are never expired. Default value corresponds to three days</td>
		</tr>
		<tr>
			<td>sql.ttl.events.enabled</td>
			<td>SQL_TTL_EVENTS_ENABLED</td>
			<td>true</td>
			<td> Enable/disable TTL (Time To Live) for event records</td>
		</tr>
		<tr>
			<td>sql.ttl.events.execution_interval_ms</td>
			<td>SQL_TTL_EVENTS_EXECUTION_INTERVAL_MS</td>
			<td>3600000</td>
			<td> Number of milliseconds (max random initial delay and fixed period). Defaults to 1 hour</td>
		</tr>
		<tr>
			<td>sql.ttl.events.events_ttl</td>
			<td>SQL_TTL_EVENTS_TTL_SEC</td>
			<td>1209600</td>
			<td> Number of seconds for TTL. TTL is set to 14 days by default. The accuracy of the cleanup depends on the sql.events.partition_size parameter</td>
		</tr>
	</tbody>
</table>


##  Redis lettuce configuration parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>lettuce.auto-flush</td>
			<td>REDIS_LETTUCE_CMDS_AUTO_FLUSH_ENABLED</td>
			<td>true</td>
			<td> Enable/disable auto-flush. If disabled, commands are buffered and flushed based on cmd count or time interval</td>
		</tr>
		<tr>
			<td>lettuce.buffered-cmd-count</td>
			<td>REDIS_LETTUCE_BUFFERED_CMDS_COUNT</td>
			<td>5</td>
			<td> Number of buffered commands before flush is triggered. Used when auto-flush is disabled</td>
		</tr>
		<tr>
			<td>lettuce.flush-interval-ms</td>
			<td>REDIS_LETTUCE_FLUSH_INTERVAL_MS</td>
			<td>5</td>
			<td> Maximum time in milliseconds to buffer commands before flushing, regardless of cmd count</td>
		</tr>
		<tr>
			<td>lettuce.config.command-timeout</td>
			<td>REDIS_LETTUCE_COMMAND_TIMEOUT_SEC</td>
			<td>30</td>
			<td> Maximum time (in seconds) to wait for a lettuce command to complete.
 This affects health checks and any command execution (e.g. GET, SET, PING).
 Reduce this to fail fast if Redis is unresponsive</td>
		</tr>
		<tr>
			<td>lettuce.config.shutdown-quiet-period</td>
			<td>REDIS_LETTUCE_SHUTDOWN_QUIET_PERIOD_SEC</td>
			<td>1</td>
			<td> The shutdown quiet period for lettuce client set in seconds</td>
		</tr>
		<tr>
			<td>lettuce.config.shutdown-timeout</td>
			<td>REDIS_LETTUCE_SHUTDOWN_TIMEOUT_SEC</td>
			<td>10</td>
			<td> The shutdown timeout for lettuce client set in seconds</td>
		</tr>
		<tr>
			<td>lettuce.config.cluster.topology-refresh.enabled</td>
			<td>REDIS_LETTUCE_CLUSTER_TOPOLOGY_REFRESH_ENABLED</td>
			<td>false</td>
			<td> Enables or disables periodic cluster topology updates.
 Useful for Redis Cluster setup to handle topology changes,
 such as node failover, restarts, or IP address changes</td>
		</tr>
		<tr>
			<td>lettuce.config.cluster.topology-refresh.period</td>
			<td>REDIS_LETTUCE_CLUSTER_TOPOLOGY_REFRESH_PERIOD_SEC</td>
			<td>60</td>
			<td> Specifies the interval (in seconds) for periodic cluster topology updates</td>
		</tr>
	</tbody>
</table>


##  Redis jedis configuration parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>jedis.cluster.topology-refresh.enabled</td>
			<td>REDIS_JEDIS_CLUSTER_TOPOLOGY_REFRESH_ENABLED</td>
			<td>false</td>
			<td> Enables or disables periodic cluster topology updates.
 Useful for Redis cluster setup to handle topology changes,
 such as node failover, restarts, or IP address changes</td>
		</tr>
		<tr>
			<td>jedis.cluster.topology-refresh.period</td>
			<td>REDIS_JEDIS_CLUSTER_TOPOLOGY_REFRESH_PERIOD_SEC</td>
			<td>60</td>
			<td> Specifies the interval (in seconds) for periodic cluster topology updates</td>
		</tr>
	</tbody>
</table>


##  SQL DAO configuration parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>spring.data.jpa.repositories.enabled</td>
			<td>SPRING_DATA_JPA_REPOSITORIES_ENABLED</td>
			<td>true</td>
			<td> Enable/Disable the Spring Data JPA repositories support</td>
		</tr>
		<tr>
			<td>spring.jpa.open-in-view</td>
			<td>SPRING_JPA_OPEN_IN_VIEW</td>
			<td>false</td>
			<td> Enable/disable OSIV</td>
		</tr>
		<tr>
			<td>spring.jpa.hibernate.ddl-auto</td>
			<td>SPRING_JPA_HIBERNATE_DDL_AUTO</td>
			<td>none</td>
			<td> You can set a Hibernate feature that controls the DDL behavior in a more fine-grained way.
 The standard Hibernate property values are none, validate, update, create-drop.
 Spring Boot chooses a default value for you based on whether it thinks your database is embedded (default create-drop) or not (default none)</td>
		</tr>
		<tr>
			<td>spring.datasource.driverClassName</td>
			<td>SPRING_DRIVER_CLASS_NAME</td>
			<td>org.postgresql.Driver</td>
			<td> Database driver for Spring JPA</td>
		</tr>
		<tr>
			<td>spring.datasource.url</td>
			<td>SPRING_DATASOURCE_URL</td>
			<td>jdbc:postgresql://localhost:5432/thingsboard_mqtt_broker</td>
			<td> Database connection URL</td>
		</tr>
		<tr>
			<td>spring.datasource.username</td>
			<td>SPRING_DATASOURCE_USERNAME</td>
			<td>postgres</td>
			<td> Database username</td>
		</tr>
		<tr>
			<td>spring.datasource.password</td>
			<td>SPRING_DATASOURCE_PASSWORD</td>
			<td>postgres</td>
			<td> Database user password</td>
		</tr>
		<tr>
			<td>spring.datasource.hikari.maximumPoolSize</td>
			<td>SPRING_DATASOURCE_MAXIMUM_POOL_SIZE</td>
			<td>16</td>
			<td> This property allows the number of connections in the pool to increase as demand increases.
 At the same time, the property ensures that the pool doesn't grow to the point of exhausting a system's resources, which ultimately affects an application's performance and availability</td>
		</tr>
		<tr>
			<td>spring.datasource.hikari.maxLifetime</td>
			<td>SPRING_DATASOURCE_MAX_LIFETIME</td>
			<td>600000</td>
			<td> This property controls the max lifetime in milliseconds of a connection. Only when it is closed will it then be removed. Default is 10 minutes</td>
		</tr>
		<tr>
			<td>spring.datasource.hikari.connectionTimeout</td>
			<td>SPRING_DATASOURCE_CONNECTION_TIMEOUT_MS</td>
			<td>30000</td>
			<td> Maximum time (in milliseconds) HikariCP will wait to acquire a connection from the pool.
 If exceeded, an exception is thrown. Default is 30 seconds</td>
		</tr>
	</tbody>
</table>


##  General Spring parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>spring.lifecycle.timeout-per-shutdown-phase</td>
			<td>SPRING_LIFECYCLE_TIMEOUT_PER_SHUTDOWN_PHASE</td>
			<td>1m</td>
			<td> The server will wait for active requests to finish their work up to a specified amount of time before graceful shutdown</td>
		</tr>
		<tr>
			<td>spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation</td>
			<td>SPRING_JPA_HIBERNATE_JDBC_LOB_NON_CONTEXTUAL_CREATION</td>
			<td>true</td>
			<td> Setting this property to true disables contextual LOB creation and forces the use of Hibernate's own LOB implementation. Fixes Postgres JPA Error</td>
		</tr>
		<tr>
			<td>spring.jpa.properties.hibernate.order_by.default_null_ordering</td>
			<td>SPRING_JPA_HIBERNATE_ORDER_BY_DEFAULT_NULL_ORDERING</td>
			<td>last</td>
			<td> Default ordering for null values</td>
		</tr>
		<tr>
			<td>spring.data.redis.repositories.enabled</td>
			<td>SPRING_DATA_REDIS_REPOSITORIES_ENABLED</td>
			<td>false</td>
			<td> Disables redis repositories scanning</td>
		</tr>
		<tr>
			<td>spring.freemarker.checkTemplateLocation</td>
			<td>SPRING_FREEMARKER_CHECK_TEMPLATE_LOCATION</td>
			<td>false</td>
			<td> Spring freemarker configuration to check that the templates location exists</td>
		</tr>
		<tr>
			<td>spring.mvc.async.request-timeout</td>
			<td>SPRING_MVC_ASYNC_REQUEST_TIMEOUT</td>
			<td>30000</td>
			<td> The default timeout for asynchronous requests in milliseconds</td>
		</tr>
		<tr>
			<td>spring.mvc.pathmatch.matching-strategy</td>
			<td>SPRING_MVC_PATH_MATCH_MATCHING_STRATEGY</td>
			<td>ANT_PATH_MATCHER</td>
			<td> For endpoints matching in Swagger</td>
		</tr>
		<tr>
			<td>spring.servlet.multipart.max-file-size</td>
			<td>SPRING_SERVLET_MULTIPART_MAX_FILE_SIZE</td>
			<td>50MB</td>
			<td> Total file size cannot exceed 50MB when configuring file uploads</td>
		</tr>
		<tr>
			<td>spring.servlet.multipart.max-request-size</td>
			<td>SPRING_SERVLET_MULTIPART_MAX_REQUEST_SIZE</td>
			<td>50MB</td>
			<td> Total request size for a multipart/form-data cannot exceed 50MB</td>
		</tr>
	</tbody>
</table>


##  Security parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>security.mqtt.auth_strategy</td>
			<td>SECURITY_MQTT_AUTH_STRATEGY</td>
			<td>BOTH</td>
			<td> DEPRECATED: BOTH or SINGLE - the former means the first attempt of client authentication will be by 'basic' provider
 and then by 'ssl' provider if 'basic' is not successful;
 the latter means only one attempt is done according to the listener communication chosen (see listener.tcp/listener.ssl)</td>
		</tr>
		<tr>
			<td>security.mqtt.basic.enabled</td>
			<td>SECURITY_MQTT_BASIC_ENABLED</td>
			<td>false</td>
			<td> DEPRECATED: If enabled the server will try to authenticate client with clientId and/or username and/or password</td>
		</tr>
		<tr>
			<td>security.mqtt.ssl.enabled</td>
			<td>SECURITY_MQTT_SSL_ENABLED</td>
			<td>false</td>
			<td> DEPRECATED: If enabled the server will try to authenticate client with client certificate chain</td>
		</tr>
		<tr>
			<td>security.mqtt.ssl.skip_validity_check_for_client_cert</td>
			<td>SECURITY_MQTT_SSL_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT</td>
			<td>false</td>
			<td> DEPRECATED: Skip certificate validity check for client certificates</td>
		</tr>
		<tr>
			<td>security.jwt.tokenExpirationTime</td>
			<td>JWT_TOKEN_EXPIRATION_TIME</td>
			<td>9000</td>
			<td> User JWT Token expiration time in seconds (2.5 hours)</td>
		</tr>
		<tr>
			<td>security.jwt.refreshTokenExpTime</td>
			<td>JWT_REFRESH_TOKEN_EXPIRATION_TIME</td>
			<td>604800</td>
			<td> User JWT Refresh Token expiration time in seconds (1 week)</td>
		</tr>
		<tr>
			<td>security.jwt.tokenIssuer</td>
			<td>JWT_TOKEN_ISSUER</td>
			<td>thingsboard.io</td>
			<td> User JWT Token issuer</td>
		</tr>
		<tr>
			<td>security.jwt.tokenSigningKey</td>
			<td>JWT_TOKEN_SIGNING_KEY</td>
			<td>Qk1xUnloZ0VQTlF1VlNJQXZ4cWhiNWt1cVd1ZzQ5cWpENUhMSHlaYmZIM0JrZ2pPTVlhQ3N1Z0ZMUnd0SDBieg==</td>
			<td> User JWT Token sign key</td>
		</tr>
		<tr>
			<td>security.basic.enabled</td>
			<td>SECURITY_BASIC_ENABLED</td>
			<td>false</td>
			<td> Enable/Disable basic security options</td>
		</tr>
		<tr>
			<td>security.user_token_access_enabled</td>
			<td>SECURITY_USER_TOKEN_ACCESS_ENABLED</td>
			<td>true</td>
			<td> Enable/disable access to other Administrators JWT token by System Administrator</td>
		</tr>
		<tr>
			<td>security.user_login_case_sensitive</td>
			<td>SECURITY_USER_LOGIN_CASE_SENSITIVE</td>
			<td>true</td>
			<td> Enable/disable case-sensitive username login</td>
		</tr>
		<tr>
			<td>security.oauth2.loginProcessingUrl</td>
			<td>SECURITY_OAUTH2_LOGIN_PROCESSING_URL</td>
			<td>/login/oauth2/code/</td>
			<td> Redirect URL where access code from external user management system will be processed</td>
		</tr>
		<tr>
			<td>security.oauth2.githubMapper.emailUrl</td>
			<td>SECURITY_OAUTH2_GITHUB_MAPPER_EMAIL_URL_KEY</td>
			<td>https://api.github.com/user/emails</td>
			<td> The email addresses that will be mapped from the URL</td>
		</tr>
	</tbody>
</table>


##  MQTT parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>mqtt.connect.threads</td>
			<td>MQTT_CONNECT_THREADS</td>
			<td>4</td>
			<td> Number of threads for clients connection thread pool</td>
		</tr>
		<tr>
			<td>mqtt.msg-subscriptions-parallel-processing</td>
			<td>MQTT_MSG_SUBSCRIPTIONS_PARALLEL_PROCESSING</td>
			<td>false</td>
			<td> Enable/disable processing of found subscriptions in parallel for published messages.
 Helpful when the "PUBLISH" message should be delivered to lots of subscribers.
 It is recommended to count the impact of this parameter before setting it on production</td>
		</tr>
		<tr>
			<td>mqtt.pre-connect-queue.max-size</td>
			<td>MQTT_PRE_CONNECT_QUEUE_MAX_SIZE</td>
			<td>10000</td>
			<td> Max number of messages that can be stored in queue before client gets connected and start processing them</td>
		</tr>
		<tr>
			<td>mqtt.max-in-flight-msgs</td>
			<td>MQTT_MAX_IN_FLIGHT_MSGS</td>
			<td>1000</td>
			<td> Max number of PUBLISH messages not yet responded</td>
		</tr>
		<tr>
			<td>mqtt.flow-control.enabled</td>
			<td>MQTT_FLOW_CONTROL_ENABLED</td>
			<td>true</td>
			<td> Enable/disable flow control MQTT 5 feature for server. If disabled, the server will not control the number of messages sent to subscribers by "Receive Maximum".
 This feature works for MQTT 3.x clients as well when enabled. "Receive Maximum" for MQTT 3.x clients can be set using `MQTT_FLOW_CONTROL_MQTT_3X_RECEIVE_MAX` parameter</td>
		</tr>
		<tr>
			<td>mqtt.flow-control.timeout</td>
			<td>MQTT_FLOW_CONTROL_TIMEOUT</td>
			<td>1000</td>
			<td> Timeout to wait in case there is nothing to process regarding the flow control feature. The separate thread is responsible for sending delayed messages to subscribers.
 If no clients are affected by flow control restrictions, there is no need to continuously try to find and send such messages</td>
		</tr>
		<tr>
			<td>mqtt.flow-control.ttl</td>
			<td>MQTT_FLOW_CONTROL_TTL</td>
			<td>600</td>
			<td> Time in seconds to store delayed messages for subscribers. Delayed messages are those that can not be sent immediately due to flow control restrictions.
 Default is 10 minutes</td>
		</tr>
		<tr>
			<td>mqtt.flow-control.delayed-queue-max-size</td>
			<td>MQTT_FLOW_CONTROL_DELAYED_QUEUE_MAX_SIZE</td>
			<td>1000</td>
			<td> Max allowed queue length for delayed messages - publishing messages from broker to client when in-flight window is full</td>
		</tr>
		<tr>
			<td>mqtt.flow-control.mqtt3x-receive-max</td>
			<td>MQTT_FLOW_CONTROL_MQTT_3X_RECEIVE_MAX</td>
			<td>65535</td>
			<td> Receive maximum value for MQTT 3.x clients</td>
		</tr>
		<tr>
			<td>mqtt.retransmission.enabled</td>
			<td>MQTT_RETRANSMISSION_ENABLED</td>
			<td>false</td>
			<td> Enable/disable MQTT msg retransmission</td>
		</tr>
		<tr>
			<td>mqtt.retransmission.scheduler-pool-size</td>
			<td>MQTT_RETRANSMISSION_SCHEDULER_POOL_SIZE</td>
			<td>0</td>
			<td> Retransmission scheduler pool size (0 means the number of processors available to the JVM multiplied by 2 will be used)</td>
		</tr>
		<tr>
			<td>mqtt.retransmission.initial-delay</td>
			<td>MQTT_RETRANSMISSION_INITIAL_DELAY</td>
			<td>10</td>
			<td> Initial delay for the msg retransmission in seconds</td>
		</tr>
		<tr>
			<td>mqtt.retransmission.period</td>
			<td>MQTT_RETRANSMISSION_PERIOD</td>
			<td>5</td>
			<td> Increment period for the subsequent retransmissions of the msg in seconds (retransmission interval is increased by period for each run)</td>
		</tr>
		<tr>
			<td>mqtt.keep-alive.monitoring-delay-ms</td>
			<td>MQTT_KEEP_ALIVE_MONITORING_DELAY_MS</td>
			<td>1000</td>
			<td> Time in milliseconds between subsequent checks for the non-active clients</td>
		</tr>
		<tr>
			<td>mqtt.keep-alive.max-keep-alive</td>
			<td>MQTT_KEEP_ALIVE_MAX_KEEP_ALIVE_SEC</td>
			<td>600</td>
			<td> Max value in seconds allowed by the server for keep-alive that can be used by clients. Defaults to 10 minutes, used for MQTT v5 clients</td>
		</tr>
		<tr>
			<td>mqtt.topic.max-segments-count</td>
			<td>MQTT_TOPIC_MAX_SEGMENTS_COUNT</td>
			<td>0</td>
			<td> Maximum number of segments in topics. If it's too large, processing of topics with too much segments can lead to errors. 0 means limitation is disabled</td>
		</tr>
		<tr>
			<td>mqtt.topic.alias-max</td>
			<td>MQTT_TOPIC_ALIAS_MAX</td>
			<td>10</td>
			<td> Max count of topic aliases per connection. 0 indicates that the Broker does not accept any Topic Aliases for all connections meaning the 'Topic Alias' feature is disabled</td>
		</tr>
		<tr>
			<td>mqtt.topic.min-length-for-alias-replacement</td>
			<td>MQTT_TOPIC_MIN_LENGTH_FOR_ALIAS_REPLACEMENT</td>
			<td>50</td>
			<td> Minimal required topic name length that Broker publishes to client that can be replaced with topic alias
 (e.g. if topic has more than 50 chars - it can be replaced with alias)</td>
		</tr>
		<tr>
			<td>mqtt.shared-subscriptions.processing-type</td>
			<td>MQTT_SHARED_SUBSCRIPTIONS_PROCESSING_TYPE</td>
			<td>ROUND_ROBIN</td>
			<td> Processing strategy type - how messages are split between clients in shared subscription. Supported types: ROUND_ROBIN</td>
		</tr>
		<tr>
			<td>mqtt.subscription-trie.wait-for-clear-lock-ms</td>
			<td>MQTT_SUB_TRIE_WAIT_FOR_CLEAR_LOCK_MS</td>
			<td>100</td>
			<td> Maximum pause in milliseconds for clearing subscription storage from empty nodes.
 If wait is unsuccessful the subscribing clients will be resumed, but the clear will fail</td>
		</tr>
		<tr>
			<td>mqtt.subscription-trie.clear-nodes-cron</td>
			<td>MQTT_SUB_TRIE_CLEAR_NODES_CRON</td>
			<td>0 0 0 * * *</td>
			<td> Cron job to schedule clearing of empty subscription nodes. Defaults to 'every day at midnight'</td>
		</tr>
		<tr>
			<td>mqtt.subscription-trie.clear-nodes-zone</td>
			<td>MQTT_SUB_TRIE_CLEAR_NODES_ZONE</td>
			<td>UTC</td>
			<td> Timezone for the subscription clearing cron-job</td>
		</tr>
		<tr>
			<td>mqtt.retain-msg-trie.wait-for-clear-lock-ms</td>
			<td>MQTT_RETAIN_MSG_TRIE_WAIT_FOR_CLEAR_LOCK_MS</td>
			<td>100</td>
			<td> Maximum pause in milliseconds for clearing retain msg storage from empty nodes.
 If wait is unsuccessful retain messages processing will be resumed, but the clear will fail</td>
		</tr>
		<tr>
			<td>mqtt.retain-msg-trie.clear-nodes-cron</td>
			<td>MQTT_RETAIN_MSG_TRIE_CLEAR_NODES_CRON</td>
			<td>0 0 0 * * *</td>
			<td> Cron job to schedule clearing of empty retain msg nodes. Defaults to 'every day at midnight'</td>
		</tr>
		<tr>
			<td>mqtt.retain-msg-trie.clear-nodes-zone</td>
			<td>MQTT_RETAIN_MSG_TRIE_CLEAR_NODES_ZONE</td>
			<td>UTC</td>
			<td> Timezone for retain msg clearing cron-job</td>
		</tr>
		<tr>
			<td>mqtt.retain-msg.expiry-processing-period-ms</td>
			<td>MQTT_RETAIN_MSG_EXPIRY_PROCESSING_PERIOD_MS</td>
			<td>60000</td>
			<td> Period in milliseconds to clear retained messages by expiry feature of MQTT</td>
		</tr>
		<tr>
			<td>mqtt.client-session-expiry.cron</td>
			<td>MQTT_CLIENT_SESSION_EXPIRY_CRON</td>
			<td>0 0 * ? * *</td>
			<td> Cron job to schedule clearing of expired and not active client sessions. Defaults to 'every hour', e.g. at 20:00:00 UTC</td>
		</tr>
		<tr>
			<td>mqtt.client-session-expiry.zone</td>
			<td>MQTT_CLIENT_SESSION_EXPIRY_ZONE</td>
			<td>UTC</td>
			<td> Timezone for the client sessions clearing cron-job</td>
		</tr>
		<tr>
			<td>mqtt.client-session-expiry.max-expiry-interval</td>
			<td>MQTT_CLIENT_SESSION_EXPIRY_MAX_EXPIRY_INTERVAL</td>
			<td>604800</td>
			<td> Max expiry interval allowed of inactive sessions in seconds. The current value corresponds to one week</td>
		</tr>
		<tr>
			<td>mqtt.client-session-expiry.ttl</td>
			<td>MQTT_CLIENT_SESSION_EXPIRY_TTL</td>
			<td>604800</td>
			<td> Administration TTL in seconds for clearing sessions that do not expire by session expiry interval
 (e.g. MQTTv3 cleanSession=false or MQTTv5 cleanStart=false && sessionExpiryInterval == 0).
 The current value corresponds to one week. 0 or negative value means this TTL is disabled</td>
		</tr>
		<tr>
			<td>mqtt.version-3-1.max-client-id-length</td>
			<td>MQTT_3_1_MAX_CLIENT_ID_LENGTH</td>
			<td>1024</td>
			<td> Max ClientId length for 3.1 version of protocol</td>
		</tr>
		<tr>
			<td>mqtt.write-and-flush</td>
			<td>MQTT_MSG_WRITE_AND_FLUSH</td>
			<td>true</td>
			<td> If enabled, each message is published to non-persistent subscribers with flush. When disabled, the messages are buffered in the channel and are flushed once in a while</td>
		</tr>
		<tr>
			<td>mqtt.buffered-msg-count</td>
			<td>MQTT_BUFFERED_MSG_COUNT</td>
			<td>5</td>
			<td> Number of messages buffered in the channel before the flush is made. Used when `MQTT_MSG_WRITE_AND_FLUSH` = false</td>
		</tr>
		<tr>
			<td>mqtt.buffered-delivery.session-cache-max-size</td>
			<td>MQTT_BUFFERED_CACHE_MAX_SIZE</td>
			<td>10000</td>
			<td> When either `MQTT_MSG_WRITE_AND_FLUSH` or `MQTT_PERSISTENT_MSG_WRITE_AND_FLUSH` is set to false,
 the broker buffers outgoing messages in the outbound channel to improve throughput.
 The respective buffer sizes are controlled by `MQTT_BUFFERED_MSG_COUNT` (for non-persistent clients)
 and `MQTT_PERSISTENT_BUFFERED_MSG_COUNT` (for persistent clients).
 Defines the maximum number of session entries that can be stored in the flush state cache.
 When the cache exceeds this size, the least recently used sessions are evicted
 and their pending message buffers are flushed automatically</td>
		</tr>
		<tr>
			<td>mqtt.buffered-delivery.session-cache-expiration-ms</td>
			<td>MQTT_BUFFERED_CACHE_EXPIRY_MS</td>
			<td>300000</td>
			<td> Time in milliseconds after which an inactive session entry in the flush cache expires.
 A session is considered inactive if it receives no new messages during this period.
 Upon expiration, the session is evicted from the cache and its buffer is flushed.
 Default is 5 minutes</td>
		</tr>
		<tr>
			<td>mqtt.buffered-delivery.scheduler-execution-interval-ms</td>
			<td>MQTT_BUFFERED_SCHEDULER_INTERVAL_MS</td>
			<td>100</td>
			<td> Interval in milliseconds at which the scheduler checks all sessions in the cache
 for potential flushing. A smaller value results in more frequent flush checks</td>
		</tr>
		<tr>
			<td>mqtt.buffered-delivery.idle-session-flush-timeout-ms</td>
			<td>MQTT_BUFFERED_IDLE_FLUSH_MS</td>
			<td>200</td>
			<td> Maximum duration in milliseconds that a session can remain idle (i.e., without being flushed)
 before its message buffer is automatically flushed to the client.
 In essence, a flush occurs either when the buffer limit is reached or when this timeout elapses</td>
		</tr>
		<tr>
			<td>mqtt.persistent-session.device.persisted-messages.limit</td>
			<td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_LIMIT</td>
			<td>10000</td>
			<td> Maximum number of PUBLISH messages stored for each persisted DEVICE client</td>
		</tr>
		<tr>
			<td>mqtt.persistent-session.device.persisted-messages.ttl</td>
			<td>MQTT_PERSISTENT_SESSION_DEVICE_PERSISTED_MESSAGES_TTL</td>
			<td>604800</td>
			<td> TTL of persisted DEVICE messages in seconds. The current value corresponds to one week</td>
		</tr>
		<tr>
			<td>mqtt.persistent-session.device.persisted-messages.write-and-flush</td>
			<td>MQTT_PERSISTENT_MSG_WRITE_AND_FLUSH</td>
			<td>true</td>
			<td> If enabled, each message is published to persistent DEVICE client subscribers with flush. When disabled, the messages are buffered in the channel and are flushed once in a while</td>
		</tr>
		<tr>
			<td>mqtt.persistent-session.device.persisted-messages.buffered-msg-count</td>
			<td>MQTT_PERSISTENT_BUFFERED_MSG_COUNT</td>
			<td>5</td>
			<td> Number of messages buffered in the channel before the flush is made. Used when `MQTT_PERSISTENT_MSG_WRITE_AND_FLUSH` = false</td>
		</tr>
		<tr>
			<td>mqtt.persistent-session.app.persisted-messages.write-and-flush</td>
			<td>MQTT_APP_MSG_WRITE_AND_FLUSH</td>
			<td>false</td>
			<td> If enabled, each message is published to persistent APPLICATION client subscribers with flush. When disabled, the messages are buffered in the channel and are flushed once in a while</td>
		</tr>
		<tr>
			<td>mqtt.persistent-session.app.persisted-messages.buffered-msg-count</td>
			<td>MQTT_APP_BUFFERED_MSG_COUNT</td>
			<td>10</td>
			<td> Number of messages buffered in the channel before the flush is made. Used when `MQTT_APP_MSG_WRITE_AND_FLUSH` = false</td>
		</tr>
		<tr>
			<td>mqtt.rate-limits.threads-count</td>
			<td>MQTT_RATE_LIMITS_THREADS_COUNT</td>
			<td>1</td>
			<td> The number of parallel threads dedicated to processing total rate limit checks for incoming messages</td>
		</tr>
		<tr>
			<td>mqtt.rate-limits.batch-size</td>
			<td>MQTT_RATE_LIMITS_BATCH_SIZE</td>
			<td>50</td>
			<td> The number of messages to process in each batch when checking total rate limits for incoming messages</td>
		</tr>
		<tr>
			<td>mqtt.rate-limits.period-ms</td>
			<td>MQTT_RATE_LIMITS_PERIOD_MS</td>
			<td>50</td>
			<td> The period, in milliseconds, to wait before processing a batch of messages for total rate limits for incoming messages</td>
		</tr>
		<tr>
			<td>mqtt.rate-limits.incoming-publish.enabled</td>
			<td>MQTT_INCOMING_RATE_LIMITS_ENABLED</td>
			<td>false</td>
			<td> Enable/disable publish rate limits per client for incoming messages to the broker from publishers</td>
		</tr>
		<tr>
			<td>mqtt.rate-limits.incoming-publish.client-config</td>
			<td>MQTT_INCOMING_RATE_LIMITS_CLIENT_CONFIG</td>
			<td>10:1,300:60</td>
			<td> Limit the maximum count of publish messages per publisher for specified time intervals in seconds. Comma separated list of limit:seconds pairs.
 Example: 10 messages per second or 300 messages per minute</td>
		</tr>
		<tr>
			<td>mqtt.rate-limits.outgoing-publish.enabled</td>
			<td>MQTT_OUTGOING_RATE_LIMITS_ENABLED</td>
			<td>false</td>
			<td> Enable/disable publish rate limits per client for outgoing messages from the broker to subscribers. Used only for non-persistent subscribers with QoS = 0 ("AT_MOST_ONCE")</td>
		</tr>
		<tr>
			<td>mqtt.rate-limits.outgoing-publish.client-config</td>
			<td>MQTT_OUTGOING_RATE_LIMITS_CLIENT_CONFIG</td>
			<td>10:1,300:60</td>
			<td> Limit the maximum count of publish messages per subscriber for specified time intervals in seconds. Comma separated list of limit:seconds pairs.
 Example: 10 messages per second or 300 messages per minute</td>
		</tr>
		<tr>
			<td>mqtt.rate-limits.device-persisted-messages.enabled</td>
			<td>MQTT_DEVICE_PERSISTED_MSGS_RATE_LIMITS_ENABLED</td>
			<td>false</td>
			<td> Enable/disable Device clients persisted messages rate limits for the broker (per whole cluster)</td>
		</tr>
		<tr>
			<td>mqtt.rate-limits.device-persisted-messages.config</td>
			<td>MQTT_DEVICE_PERSISTED_MSGS_RATE_LIMITS_CONFIG</td>
			<td>100:1,1000:60</td>
			<td> Limit the maximum count of Device clients persisted messages for specified time intervals in seconds. Comma separated list of limit:seconds pairs.
 Example: 100 messages per second or 1000 messages per minute</td>
		</tr>
		<tr>
			<td>mqtt.application-clients-limit</td>
			<td>MQTT_APPLICATION_CLIENTS_LIMIT</td>
			<td>0</td>
			<td> Limit the total number of Application persistent clients and external system integrations. A setting of 0 means the limitation is disabled</td>
		</tr>
		<tr>
			<td>mqtt.handler.all_msg_callback_threads</td>
			<td>MQTT_HANDLER_ALL_MSG_CALLBACK_THREADS</td>
			<td>2</td>
			<td> Number of threads in thread pool for processing all publish messages callbacks after sending them to Kafka</td>
		</tr>
		<tr>
			<td>mqtt.handler.device_msg_callback_threads</td>
			<td>MQTT_HANDLER_DEVICE_MSG_CALLBACK_THREADS</td>
			<td>2</td>
			<td> Number of threads in thread pool for processing device persisted publish messages callbacks after sending them to Kafka</td>
		</tr>
		<tr>
			<td>mqtt.handler.app_msg_callback_threads</td>
			<td>MQTT_HANDLER_APP_MSG_CALLBACK_THREADS</td>
			<td>2</td>
			<td> Number of threads in thread pool for processing application persisted publish messages callbacks after sending them to Kafka</td>
		</tr>
		<tr>
			<td>mqtt.handler.downlink_msg_callback_threads</td>
			<td>MQTT_HANDLER_DOWNLINK_MSG_CALLBACK_THREADS</td>
			<td>2</td>
			<td> Number of threads in thread pool for processing downlink messages callbacks after sending them to Kafka</td>
		</tr>
		<tr>
			<td>mqtt.response-info</td>
			<td>MQTT_RESPONSE_INFO</td>
			<td></td>
			<td> Response info value for MQTT 5 request-response feature to be returned to clients that request it.
 If not set the broker will not reply with response info to mqtt 5 clients that connect with "request response info" = 1.
 Set it to topic to be used for request-response feature, e.g. "example/"</td>
		</tr>
		<tr>
			<td>mqtt.blocked-client.cleanup.period</td>
			<td>BLOCKED_CLIENT_CLEANUP_PERIOD_MINUTES</td>
			<td>5</td>
			<td> The parameter to specify the period of execution cleanup task for expired blocked clients. Value set in minutes. Default value corresponds to five minutes</td>
		</tr>
		<tr>
			<td>mqtt.blocked-client.cleanup.ttl</td>
			<td>BLOCKED_CLIENT_CLEANUP_TTL_MINUTES</td>
			<td>10080</td>
			<td> Time to Live for expired blocked clients. After this time, the expired blocked client is removed completely. Value set in minutes. Default value corresponds to one week</td>
		</tr>
	</tbody>
</table>


##  Cache parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>cache.stats.enabled</td>
			<td>CACHE_STATS_ENABLED</td>
			<td>true</td>
			<td> Enable/disable cache stats logging</td>
		</tr>
		<tr>
			<td>cache.stats.intervalSec</td>
			<td>CACHE_STATS_INTERVAL_SEC</td>
			<td>60</td>
			<td> Cache stats logging interval in seconds</td>
		</tr>
		<tr>
			<td>cache.cache-prefix</td>
			<td>CACHE_PREFIX</td>
			<td></td>
			<td> The common prefix for all cache keys. Defaults to empty string meaning no prefix is added</td>
		</tr>
		<tr>
			<td>cache.specs.mqttClientCredentials.timeToLiveInMinutes</td>
			<td>CACHE_SPECS_MQTT_CLIENT_CREDENTIALS_TTL</td>
			<td>1440</td>
			<td> Cache TTL in minutes. Defaults to 1 day</td>
		</tr>
		<tr>
			<td>cache.specs.basicCredentialsPassword.timeToLiveInMinutes</td>
			<td>CACHE_SPECS_BASIC_CREDENTIALS_PASSWORD_TTL</td>
			<td>1</td>
			<td> Cache TTL in minutes. It is recommended to set this TTL as a small value to not store them for a long time (e.g., 1-5 minutes)</td>
		</tr>
		<tr>
			<td>cache.specs.sslRegexBasedCredentials.timeToLiveInMinutes</td>
			<td>CACHE_SPECS_SSL_REGEX_BASED_CREDENTIALS_TTL</td>
			<td>1440</td>
			<td> Cache TTL in minutes. Defaults to 1 day</td>
		</tr>
		<tr>
			<td>cache.specs.clientSessionCredentials.timeToLiveInMinutes</td>
			<td>CACHE_SPECS_CLIENT_SESSION_CREDENTIALS_TTL</td>
			<td>0</td>
			<td> Cache TTL in minutes. Defaults to 0 meaning the cache is eternal</td>
		</tr>
		<tr>
			<td>cache.specs.clientMqttVersion.timeToLiveInMinutes</td>
			<td>CACHE_SPECS_CLIENT_MQTT_VERSION_TTL</td>
			<td>0</td>
			<td> Cache TTL in minutes. Defaults to 0 meaning the cache is eternal</td>
		</tr>
		<tr>
			<td>cache.image.etag.timeToLiveInMinutes</td>
			<td>CACHE_IMAGE_ETAG_TTL</td>
			<td>10080</td>
			<td> Image ETags cache TTL in minutes. Defaults to 7 days</td>
		</tr>
		<tr>
			<td>cache.image.etag.maxSize</td>
			<td>CACHE_IMAGE_ETAG_MAX_SIZE</td>
			<td>10000</td>
			<td> Max size of entries in the cache. 0 means the cache is disabled</td>
		</tr>
		<tr>
			<td>cache.image.systemImagesBrowserTtlInMinutes</td>
			<td>CACHE_IMAGE_SYSTEM_BROWSER_TTL</td>
			<td>0</td>
			<td> Browser cache TTL for system images in minutes. 0 means the cache is disabled</td>
		</tr>
	</tbody>
</table>


##  Redis configuration parameters

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
			<td> Connection type: standalone or cluster or sentinel</td>
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
			<td> Use the default Redis configuration file</td>
		</tr>
		<tr>
			<td>redis.standalone.clientName</td>
			<td>REDIS_CLIENT_NAME</td>
			<td>standalone</td>
			<td> This value may be used only if you did not use the default ClientConfig, to specify client name</td>
		</tr>
		<tr>
			<td>redis.standalone.connectTimeout</td>
			<td>REDIS_CLIENT_CONNECT_TIMEOUT</td>
			<td>30000</td>
			<td> This value may be used only if you did not use the default ClientConfig, to specify connection timeout</td>
		</tr>
		<tr>
			<td>redis.standalone.readTimeout</td>
			<td>REDIS_CLIENT_READ_TIMEOUT</td>
			<td>60000</td>
			<td> This value may be used only if you did not use the default ClientConfig, to specify read timeout</td>
		</tr>
		<tr>
			<td>redis.standalone.usePoolConfig</td>
			<td>REDIS_CLIENT_USE_POOL_CONFIG</td>
			<td>false</td>
			<td> This value may be used only if you did not use the default ClientConfig, to use pool config section</td>
		</tr>
		<tr>
			<td>redis.cluster.nodes</td>
			<td>REDIS_NODES</td>
			<td></td>
			<td> Comma-separated list of "host:port" pairs to bootstrap from</td>
		</tr>
		<tr>
			<td>redis.cluster.maxRedirects</td>
			<td>REDIS_MAX_REDIRECTS</td>
			<td>12</td>
			<td> Maximum number of redirects to follow when executing commands across the cluster</td>
		</tr>
		<tr>
			<td>redis.cluster.useDefaultPoolConfig</td>
			<td>REDIS_CLUSTER_USE_DEFAULT_POOL_CONFIG</td>
			<td>true</td>
			<td> If set false will be used pool config build from values of the pool config section</td>
		</tr>
		<tr>
			<td>redis.sentinel.master</td>
			<td>REDIS_MASTER</td>
			<td></td>
			<td> Name of master node</td>
		</tr>
		<tr>
			<td>redis.sentinel.sentinels</td>
			<td>REDIS_SENTINELS</td>
			<td></td>
			<td> Comma-separated list of "host:port" pairs of sentinels</td>
		</tr>
		<tr>
			<td>redis.sentinel.password</td>
			<td>REDIS_SENTINEL_PASSWORD</td>
			<td></td>
			<td> Password to authenticate with sentinel</td>
		</tr>
		<tr>
			<td>redis.sentinel.useDefaultPoolConfig</td>
			<td>REDIS_SENTINEL_USE_DEFAULT_POOL_CONFIG</td>
			<td>true</td>
			<td> If set false will be used pool config build from values of the pool config section</td>
		</tr>
		<tr>
			<td>redis.db</td>
			<td>REDIS_DB</td>
			<td>0</td>
			<td> DB index</td>
		</tr>
		<tr>
			<td>redis.password</td>
			<td>REDIS_PASSWORD</td>
			<td></td>
			<td> DB password</td>
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
			<td> Minimum number of idle connections that can be maintained in the pool without being closed</td>
		</tr>
		<tr>
			<td>redis.pool_config.testOnBorrow</td>
			<td>REDIS_POOL_CONFIG_TEST_ON_BORROW</td>
			<td>true</td>
			<td> Enable/Disable PING command sent when a connection is borrowed</td>
		</tr>
		<tr>
			<td>redis.pool_config.testOnReturn</td>
			<td>REDIS_POOL_CONFIG_TEST_ON_RETURN</td>
			<td>true</td>
			<td> The property is used to specify whether to test the connection before returning it to the connection pool</td>
		</tr>
		<tr>
			<td>redis.pool_config.testWhileIdle</td>
			<td>REDIS_POOL_CONFIG_TEST_WHILE_IDLE</td>
			<td>true</td>
			<td> Indicates whether to use the ping command to monitor the connection validity during idle resource monitoring. Invalid connections will be destroyed</td>
		</tr>
		<tr>
			<td>redis.pool_config.minEvictableMs</td>
			<td>REDIS_POOL_CONFIG_MIN_EVICTABLE_MS</td>
			<td>60000</td>
			<td> Minimum time the connection should be idle before it can be evicted from the connection pool. The value is set in milliseconds</td>
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
			<td> Determines the behavior when a thread requests a connection from the pool, but there are no available connections, and the pool cannot create more due to the maxTotal configuration</td>
		</tr>
	</tbody>
</table>


##  Statistics parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>stats.enabled</td>
			<td>STATS_ENABLED</td>
			<td>true</td>
			<td> Enable/disable stats printing to the logs</td>
		</tr>
		<tr>
			<td>stats.print-interval-ms</td>
			<td>STATS_PRINT_INTERVAL_MS</td>
			<td>60000</td>
			<td> Period in milliseconds to print stats. Default value corresponds to 1 minute</td>
		</tr>
		<tr>
			<td>stats.timer.percentiles</td>
			<td>STATS_TIMER_PERCENTILES</td>
			<td>0.5</td>
			<td> Metrics percentiles returned by actuator for timer metrics. List of comma-separated (,) double values</td>
		</tr>
		<tr>
			<td>stats.application-processor.enabled</td>
			<td>APPLICATION_PROCESSOR_STATS_ENABLED</td>
			<td>true</td>
			<td> Enable/disable specific Application clients stats</td>
		</tr>
		<tr>
			<td>stats.system-info.persist-frequency</td>
			<td>STATS_SYSTEM_INFO_PERSIST_FREQUENCY_SEC</td>
			<td>60</td>
			<td> Persist frequency of system info (CPU, memory usage, etc.) in seconds</td>
		</tr>
	</tbody>
</table>


##  Historical data statistics parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>historical-data-report.enabled</td>
			<td>HISTORICAL_DATA_REPORT_ENABLED</td>
			<td>true</td>
			<td> Enable/disable historical data stats reporting and persistence to the time series</td>
		</tr>
		<tr>
			<td>historical-data-report.interval</td>
			<td>HISTORICAL_DATA_REPORT_INTERVAL</td>
			<td>1</td>
			<td> Period in minutes (1-60) to collect stats for each broker. Used in cron expression</td>
		</tr>
		<tr>
			<td>historical-data-report.zone</td>
			<td>HISTORICAL_DATA_REPORT_ZONE</td>
			<td>UTC</td>
			<td> Timezone for the historical data stats processing</td>
		</tr>
	</tbody>
</table>


##  Metrics management parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>management.health.diskspace.enabled</td>
			<td>HEALTH_DISKSPACE_ENABLED</td>
			<td>false</td>
			<td> Enable/disable disk space health check</td>
		</tr>
		<tr>
			<td>management.endpoint.health.show-details</td>
			<td>HEALTH_SHOW_DETAILS</td>
			<td>never</td>
			<td> Controls whether health endpoint shows full component details (e.g., Redis, DB, TBMQ).
 Options:
 - 'never': always hide details (default if security is enabled).
 - 'when-authorized': show details only to authenticated users.
 - 'always': always include full health details in the response</td>
		</tr>
		<tr>
			<td>management.endpoints.web.exposure.include</td>
			<td>METRICS_ENDPOINTS_EXPOSE</td>
			<td>health,info,prometheus</td>
			<td> Specify which Actuator endpoints should be exposed via HTTP.
 Use 'health,info' to expose only basic health and information endpoints.
 For exposing Prometheus metrics, update this to include 'prometheus' in the list (e.g., 'health,info,prometheus')</td>
		</tr>
	</tbody>
</table>


##  Spring CORS configuration

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>spring.mvc.cors.mappings."[/api/**]".allowed-origin-patterns</td>
			<td>MVC_CORS_API_ALLOWED_ORIGIN_PATTERNS</td>
			<td>*</td>
			<td> Comma-separated list of origins to allow. '*' allows all origins. When not set, CORS support is disabled</td>
		</tr>
		<tr>
			<td>spring.mvc.cors.mappings."[/api/**]".allowed-methods</td>
			<td>MVC_CORS_API_ALLOWED_METHODS</td>
			<td>*</td>
			<td> Comma-separated list of methods to allow. '*' allows all methods</td>
		</tr>
		<tr>
			<td>spring.mvc.cors.mappings."[/api/**]".allowed-headers</td>
			<td>MVC_CORS_API_ALLOWED_HEADERS</td>
			<td>*</td>
			<td> Comma-separated list of headers to allow in a request. '*' allows all headers</td>
		</tr>
		<tr>
			<td>spring.mvc.cors.mappings."[/api/**]".max-age</td>
			<td>MVC_CORS_API_MAX_AGE</td>
			<td>1800</td>
			<td> How long, in seconds, the response from a pre-flight request can be cached by clients</td>
		</tr>
		<tr>
			<td>spring.mvc.cors.mappings."[/api/**]".allow-credentials</td>
			<td>MVC_CORS_API_ALLOW_CREDENTIALS</td>
			<td>true</td>
			<td> Set whether credentials are supported. When not set, credentials are not supported</td>
		</tr>
		<tr>
			<td>license.secret</td>
			<td>TBMQ_LICENSE_SECRET</td>
			<td></td>
			<td> License secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)</td>
		</tr>
		<tr>
			<td>license.instance_data_file</td>
			<td>TBMQ_LICENSE_INSTANCE_DATA_FILE</td>
			<td>tbmq-instance-license.data</td>
			<td> Instance data is auto-generated and is used to identify a particular TBMQ Instance.
 Instance data is periodically updated and stored into the specified file which can be set to absolute or relative path.
 Please make sure that TBMQ process has access to the instance data file, in case you use absolute path</td>
		</tr>
	</tbody>
</table>


##  Spring doc common parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>springdoc.api-docs.enabled</td>
			<td>SWAGGER_ENABLED</td>
			<td>true</td>
			<td> If false swagger API docs will be unavailable</td>
		</tr>
		<tr>
			<td>springdoc.default-produces-media-type</td>
			<td>SWAGGER_DEFAULT_PRODUCES_MEDIA_TYPE</td>
			<td>application/json</td>
			<td> Swagger default produces media-type</td>
		</tr>
	</tbody>
</table>


##  Swagger common parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>swagger.api_path</td>
			<td>SWAGGER_API_PATH</td>
			<td>/api/**</td>
			<td> General swagger match pattern of swagger UI links</td>
		</tr>
		<tr>
			<td>swagger.security_path_regex</td>
			<td>SWAGGER_SECURITY_PATH_REGEX</td>
			<td>/api/.*</td>
			<td> General swagger match pattern path of swagger UI links</td>
		</tr>
		<tr>
			<td>swagger.non_security_path_regex</td>
			<td>SWAGGER_NON_SECURITY_PATH_REGEX</td>
			<td>/api/noauth.*</td>
			<td> Non-security API path match pattern of swagger UI links</td>
		</tr>
		<tr>
			<td>swagger.title</td>
			<td>SWAGGER_TITLE</td>
			<td>TBMQ REST API</td>
			<td> The title on the API doc UI page</td>
		</tr>
		<tr>
			<td>swagger.description</td>
			<td>SWAGGER_DESCRIPTION</td>
			<td>TBMQ Professional Edition REST API documentation</td>
			<td> The description on the API doc UI page</td>
		</tr>
		<tr>
			<td>swagger.contact.name</td>
			<td>SWAGGER_CONTACT_NAME</td>
			<td>TBMQ team</td>
			<td> The contact name on the API doc UI page</td>
		</tr>
		<tr>
			<td>swagger.contact.url</td>
			<td>SWAGGER_CONTACT_URL</td>
			<td>https://thingsboard.io/products/mqtt-broker/</td>
			<td> The contact URL on the API doc UI page</td>
		</tr>
		<tr>
			<td>swagger.contact.email</td>
			<td>SWAGGER_CONTACT_EMAIL</td>
			<td>info@thingsboard.io</td>
			<td> The contact email on the API doc UI page</td>
		</tr>
		<tr>
			<td>swagger.license.title</td>
			<td>SWAGGER_LICENSE_TITLE</td>
			<td>Apache License Version 2.0</td>
			<td> The license title on the API doc UI page</td>
		</tr>
		<tr>
			<td>swagger.license.url</td>
			<td>SWAGGER_LICENSE_URL</td>
			<td>https://github.com/thingsboard/tbmq/blob/main/LICENSE</td>
			<td> Link to the license body on the API doc UI page</td>
		</tr>
		<tr>
			<td>swagger.version</td>
			<td>SWAGGER_VERSION</td>
			<td></td>
			<td> The version of the API doc to display. Default to the package version</td>
		</tr>
		<tr>
			<td>swagger.group_name</td>
			<td>SWAGGER_GROUP_NAME</td>
			<td>TBMQ</td>
			<td> The group name (definition) on the API doc UI page</td>
		</tr>
	</tbody>
</table>


##  Application info parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>app.version</td>
			<td></td>
			<td>"@project.version@"</td>
			<td> Application version</td>
		</tr>
	</tbody>
</table>


##  Analysis parameters

<table>
	<thead>
		<tr>
			<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>analysis.log.enabled</td>
			<td>ANALYSIS_LOG_ENABLED</td>
			<td>true</td>
			<td> Enable/disable the analysis logging</td>
		</tr>
		<tr>
			<td>analysis.log.all-clients</td>
			<td>ANALYSIS_LOG_ALL_CLIENTS</td>
			<td>false</td>
			<td> If true – log events for ALL clients (ignores analyzed-client-ids)</td>
		</tr>
		<tr>
			<td>analysis.log.analyzed-client-ids</td>
			<td>ANALYSIS_LOG_CLIENT_IDS</td>
			<td></td>
			<td> List of Client Ids separated with comas. Additional events for those clients will be logged.
 Example env var: ANALYSIS_LOG_CLIENT_IDS=client1,client2</td>
		</tr>
	</tbody>
</table>
