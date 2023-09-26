<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
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
          <td>transport.mqtt.proxy_enabled</td>
          <td>MQTT_PROXY_PROTOCOL_ENABLED</td>
          <td>false</td>
          <td>Enable proxy protocol support. Disabled by default. If enabled, supports both v1 and v2. Useful to get the real IP address of the client in the logs and for rate limits.</td>
      </tr>
      <tr>
          <td>transport.mqtt.timeout</td>
          <td>MQTT_TIMEOUT</td>
          <td>10000</td>
          <td>MQTT processing timeout in milliseconds</td>
      </tr>
      <tr>
          <td>transport.mqtt.msg_queue_size_per_device_limit</td>
          <td>MQTT_MSG_QUEUE_SIZE_PER_DEVICE_LIMIT</td>
          <td>100</td>
          <td>Messages await in the queue before device connected state. This limit works on low level before TenantProfileLimits mechanism</td>
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
          <td>transport.mqtt.netty.so_keep_alive</td>
          <td>NETTY_SO_KEEPALIVE</td>
          <td>false</td>
          <td>Enables TCP keepalive. This means that TCP starts sending keepalive probes when a connection is idle for some time</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.enabled</td>
          <td>MQTT_SSL_ENABLED</td>
          <td>false</td>
          <td>Enable/disable SSL support</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.bind_address</td>
          <td>MQTT_SSL_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>MQTT SSL bind address</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.bind_port</td>
          <td>MQTT_SSL_BIND_PORT</td>
          <td>8883</td>
          <td>MQTT SSL bind port</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.protocol</td>
          <td>MQTT_SSL_PROTOCOL</td>
          <td>TLSv1.2</td>
          <td>SSL protocol: See https://docs.oracle.com/en/java/javase/11/docs/specs/security/standard-names.html#sslcontext-algorithms</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.credentials.type</td>
          <td>MQTT_SSL_CREDENTIALS_TYPE</td>
          <td>PEM</td>
          <td>Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.credentials.pem.cert_file</td>
          <td>MQTT_SSL_PEM_CERT</td>
          <td>mqttserver.pem</td>
          <td>Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.credentials.pem.key_file</td>
          <td>MQTT_SSL_PEM_KEY</td>
          <td>mqttserver_key.pem</td>
          <td>Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.credentials.pem.key_password</td>
          <td>MQTT_SSL_PEM_KEY_PASSWORD</td>
          <td>server_key_password</td>
          <td>Server certificate private key password (optional)</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.credentials.keystore.type</td>
          <td>MQTT_SSL_KEY_STORE_TYPE</td>
          <td>JKS</td>
          <td>Type of the key store (JKS or PKCS12)</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.credentials.keystore.store_file</td>
          <td>MQTT_SSL_KEY_STORE</td>
          <td>mqttserver.jks</td>
          <td>Path to the key store that holds the SSL certificate</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.credentials.keystore.store_password</td>
          <td>MQTT_SSL_KEY_STORE_PASSWORD</td>
          <td>server_ks_password</td>
          <td>Password used to access the key store</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.credentials.keystore.key_alias</td>
          <td>MQTT_SSL_KEY_ALIAS</td>
          <td></td>
          <td>Optional alias of the private key; If not set, the platform will load the first private key from the keystore;</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.credentials.keystore.key_password</td>
          <td>MQTT_SSL_KEY_PASSWORD</td>
          <td>server_key_password</td>
          <td>Password used to access the key</td>
      </tr>
      <tr>
          <td>transport.mqtt.ssl.skip_validity_check_for_client_cert</td>
          <td>MQTT_SSL_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT</td>
          <td>false</td>
          <td>Skip certificate validity check for client certificates.</td>
      </tr>
      <tr>
          <td>transport.sessions.inactivity_timeout</td>
          <td>TB_TRANSPORT_SESSIONS_INACTIVITY_TIMEOUT</td>
          <td>300000</td>
          <td>Inactivity timeout for device session in transport service. The last activity time of the device session is updated if device sends any message, including keepalive messages</td>
      </tr>
      <tr>
          <td>transport.sessions.report_timeout</td>
          <td>TB_TRANSPORT_SESSIONS_REPORT_TIMEOUT</td>
          <td>3000</td>
          <td>Interval of periodic check for expired sessions and report of the changes to session last activity time</td>
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
          <td>transport.log.enabled</td>
          <td>TB_TRANSPORT_LOG_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable log of transport messages to telemetry. For example, logging of LwM2M registration update</td>
      </tr>
      <tr>
          <td>transport.log.max_length</td>
          <td>TB_TRANSPORT_LOG_MAX_LENGTH</td>
          <td>1024</td>
          <td>Maximum length of the log message. The content will be truncated to the specified value if needed</td>
      </tr>
      <tr>
          <td>transport.stats.enabled</td>
          <td>TB_TRANSPORT_STATS_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable collection of transport statistics</td>
      </tr>
      <tr>
          <td>transport.stats.print-interval-ms</td>
          <td>TB_TRANSPORT_STATS_PRINT_INTERVAL_MS</td>
          <td>60000</td>
          <td>Interval of transport statistics logging</td>
      </tr>
      <tr>
          <td>transport.client_side_rpc.timeout</td>
          <td>CLIENT_SIDE_RPC_TIMEOUT</td>
          <td>60000</td>
          <td>Processing timeout interval of the RPC command on the CLIENT SIDE. Time in milliseconds</td>
      </tr>
      <tr>
          <td>transport.rate_limits.ip_limits_enabled</td>
          <td>TB_TRANSPORT_IP_RATE_LIMITS_ENABLED</td>
          <td>false</td>
          <td>Enable or disable generic rate limits. Device and Tenant specific rate limits are controlled in Tenant Profile.</td>
      </tr>
      <tr>
          <td>transport.rate_limits.max_wrong_credentials_per_ip</td>
          <td>TB_TRANSPORT_MAX_WRONG_CREDENTIALS_PER_IP</td>
          <td>10</td>
          <td>Maximum number of connect attempts with invalid credentials</td>
      </tr>
      <tr>
          <td>transport.rate_limits.ip_block_timeout</td>
          <td>TB_TRANSPORT_IP_BLOCK_TIMEOUT</td>
          <td>60000</td>
          <td>Timeout to expire block IP addresses</td>
      </tr>
  </tbody>
</table>