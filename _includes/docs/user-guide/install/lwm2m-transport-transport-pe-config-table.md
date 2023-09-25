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
          <td>false</td>
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
          <td>Processing timeout interval of the RPC command on the CLIENT side. Time in milliseconds</td>
      </tr>
      <tr>
          <td>transport.api_enabled</td>
          <td>TB_TRANSPORT_API_ENABLED</td>
          <td>true</td>
          <td>Enable/disable http/mqtt/coap transport protocols (has higher priority than certain protocol's 'enabled' property)</td>
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
          <td>transport.lwm2m.enabled</td>
          <td>LWM2M_ENABLED</td>
          <td>true</td>
          <td>Enable/disable lvm2m transport protocol.</td>
      </tr>
      <tr>
          <td>transport.lwm2m.dtls.retransmission_timeout</td>
          <td>LWM2M_DTLS_RETRANSMISSION_TIMEOUT_MS</td>
          <td>9000</td>
          <td>RFC7925_RETRANSMISSION_TIMEOUT_IN_MILLISECONDS = 9000</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.id</td>
          <td>LWM2M_SERVER_ID</td>
          <td>123</td>
          <td>LwM2M Server ID</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.bind_address</td>
          <td>LWM2M_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>LwM2M server bind address. Bind to all interfaces by default</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.bind_port</td>
          <td>LWM2M_BIND_PORT</td>
          <td>5685</td>
          <td>LwM2M server bind port</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.bind_address</td>
          <td>LWM2M_SECURITY_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>LwM2M server bind address for DTLS. Bind to all interfaces by default</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.bind_port</td>
          <td>LWM2M_SECURITY_BIND_PORT</td>
          <td>5686</td>
          <td>LwM2M server bind port for DTLS</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.credentials.enabled</td>
          <td>LWM2M_SERVER_CREDENTIALS_ENABLED</td>
          <td>false</td>
          <td>Whether to enable LWM2M server X509 Certificate/RPK support</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.credentials.type</td>
          <td>LWM2M_SERVER_CREDENTIALS_TYPE</td>
          <td>PEM</td>
          <td>Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.credentials.pem.cert_file</td>
          <td>LWM2M_SERVER_PEM_CERT</td>
          <td>lwm2mserver.pem</td>
          <td>Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.credentials.pem.key_file</td>
          <td>LWM2M_SERVER_PEM_KEY</td>
          <td>lwm2mserver_key.pem</td>
          <td>Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.credentials.pem.key_password</td>
          <td>LWM2M_SERVER_PEM_KEY_PASSWORD</td>
          <td>server_key_password</td>
          <td>Server certificate private key password (optional)</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.credentials.keystore.type</td>
          <td>LWM2M_SERVER_KEY_STORE_TYPE</td>
          <td>JKS</td>
          <td>Type of the key store (JKS or PKCS12)</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.credentials.keystore.store_file</td>
          <td>LWM2M_SERVER_KEY_STORE</td>
          <td>lwm2mserver.jks</td>
          <td>Path to the key store that holds the SSL certificate</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.credentials.keystore.store_password</td>
          <td>LWM2M_SERVER_KEY_STORE_PASSWORD</td>
          <td>server_ks_password</td>
          <td>Password used to access the key store</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.credentials.keystore.key_alias</td>
          <td>LWM2M_SERVER_KEY_ALIAS</td>
          <td>server</td>
          <td>Key alias</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.credentials.keystore.key_password</td>
          <td>LWM2M_SERVER_KEY_PASSWORD</td>
          <td>server_ks_password</td>
          <td>Password used to access the key</td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.skip_validity_check_for_client_cert</td>
          <td>TB_LWM2M_SERVER_SECURITY_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT</td>
          <td>false</td>
          <td>Only Certificate_x509:</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.enabled</td>
          <td>LWM2M_ENABLED_BS</td>
          <td>true</td>
          <td>Enable/disable Bootstrap Server</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.id</td>
          <td>LWM2M_SERVER_ID_BS</td>
          <td>111</td>
          <td>Default value in Lwm2mClient after start in mode Bootstrap for the object : name "LWM2M Security" field: "Short Server ID" (deviceProfile: Bootstrap.BOOTSTRAP SERVER.Short ID)</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.bind_address</td>
          <td>LWM2M_BS_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>LwM2M bootstrap server bind address. Bind to all interfaces by default</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.bind_port</td>
          <td>LWM2M_BS_BIND_PORT</td>
          <td>5687</td>
          <td>LwM2M bootstrap server bind port</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.bind_address</td>
          <td>LWM2M_BS_SECURITY_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>LwM2M bootstrap server bind address for DTLS. Bind to all interfaces by default</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.bind_port</td>
          <td>LWM2M_BS_SECURITY_BIND_PORT</td>
          <td>5688</td>
          <td>LwM2M bootstrap server bind port</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.credentials.enabled</td>
          <td>LWM2M_BS_CREDENTIALS_ENABLED</td>
          <td>false</td>
          <td>Whether to enable LWM2M bootstrap server X509 Certificate/RPK support</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.credentials.type</td>
          <td>LWM2M_BS_CREDENTIALS_TYPE</td>
          <td>PEM</td>
          <td>Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.credentials.pem.cert_file</td>
          <td>LWM2M_BS_PEM_CERT</td>
          <td>lwm2mserver.pem</td>
          <td>Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.credentials.pem.key_file</td>
          <td>LWM2M_BS_PEM_KEY</td>
          <td>lwm2mserver_key.pem</td>
          <td>Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.credentials.pem.key_password</td>
          <td>LWM2M_BS_PEM_KEY_PASSWORD</td>
          <td>server_key_password</td>
          <td>Server certificate private key password (optional)</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.credentials.keystore.type</td>
          <td>LWM2M_BS_KEY_STORE_TYPE</td>
          <td>JKS</td>
          <td>Type of the key store (JKS or PKCS12)</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.credentials.keystore.store_file</td>
          <td>LWM2M_BS_KEY_STORE</td>
          <td>lwm2mserver.jks</td>
          <td>Path to the key store that holds the SSL certificate</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.credentials.keystore.store_password</td>
          <td>LWM2M_BS_KEY_STORE_PASSWORD</td>
          <td>server_ks_password</td>
          <td>Password used to access the key store</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.credentials.keystore.key_alias</td>
          <td>LWM2M_BS_KEY_ALIAS</td>
          <td>bootstrap</td>
          <td>Key alias</td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.credentials.keystore.key_password</td>
          <td>LWM2M_BS_KEY_PASSWORD</td>
          <td>server_ks_password</td>
          <td>Password used to access the key</td>
      </tr>
      <tr>
          <td>transport.lwm2m.security.trust-credentials.enabled</td>
          <td>LWM2M_TRUST_CREDENTIALS_ENABLED</td>
          <td>false</td>
          <td>Whether to load X509 trust certificates</td>
      </tr>
      <tr>
          <td>transport.lwm2m.security.trust-credentials.type</td>
          <td>LWM2M_TRUST_CREDENTIALS_TYPE</td>
          <td>PEM</td>
          <td>Trust certificates store type (PEM - pem certificates file; KEYSTORE - java keystore)</td>
      </tr>
      <tr>
          <td>transport.lwm2m.security.trust-credentials.pem.cert_file</td>
          <td>LWM2M_TRUST_PEM_CERT</td>
          <td>lwm2mtruststorechain.pem</td>
          <td>Path to the certificates file (holds trust certificates)</td>
      </tr>
      <tr>
          <td>transport.lwm2m.security.trust-credentials.keystore.type</td>
          <td>LWM2M_TRUST_KEY_STORE_TYPE</td>
          <td>JKS</td>
          <td>Type of the key store (JKS or PKCS12)</td>
      </tr>
      <tr>
          <td>transport.lwm2m.security.trust-credentials.keystore.store_file</td>
          <td>LWM2M_TRUST_KEY_STORE</td>
          <td>lwm2mtruststorechain.jks</td>
          <td>Path to the key store that holds the X509 certificates</td>
      </tr>
      <tr>
          <td>transport.lwm2m.security.trust-credentials.keystore.store_password</td>
          <td>LWM2M_TRUST_KEY_STORE_PASSWORD</td>
          <td>server_ks_password</td>
          <td>Password used to access the key store</td>
      </tr>
      <tr>
          <td>transport.lwm2m.security.recommended_ciphers</td>
          <td>LWM2M_RECOMMENDED_CIPHERS</td>
          <td>false</td>
          <td>Set usage of recommended cipher suites; true - allow only recommended cipher suites; false - allow not recommended cipher suites</td>
      </tr>
      <tr>
          <td>transport.lwm2m.security.recommended_supported_groups</td>
          <td>LWM2M_RECOMMENDED_SUPPORTED_GROUPS</td>
          <td>true</td>
          <td>Set usage of recommended supported groups (curves); true - allow only recommended supported groups, false - allow not recommended supported groups</td>
      </tr>
      <tr>
          <td>transport.lwm2m.timeout</td>
          <td>LWM2M_TIMEOUT</td>
          <td>120000</td>
          <td>Timeout of LwM2M operation</td>
      </tr>
      <tr>
          <td>transport.lwm2m.uplink_pool_size</td>
          <td>LWM2M_UPLINK_POOL_SIZE</td>
          <td>10</td>
          <td>Thread pool size for processing of the LwM2M uplinks</td>
      </tr>
      <tr>
          <td>transport.lwm2m.downlink_pool_size</td>
          <td>LWM2M_DOWNLINK_POOL_SIZE</td>
          <td>10</td>
          <td>Thread pool size for processing of the LwM2M downlinks</td>
      </tr>
      <tr>
          <td>transport.lwm2m.ota_pool_size</td>
          <td>LWM2M_OTA_POOL_SIZE</td>
          <td>10</td>
          <td>Thread pool size for processing of the OTA updates</td>
      </tr>
      <tr>
          <td>transport.lwm2m.clean_period_in_sec</td>
          <td>LWM2M_CLEAN_PERIOD_IN_SEC</td>
          <td>2</td>
          <td>Period of cleanup for the registrations in store</td>
      </tr>
      <tr>
          <td>transport.lwm2m.psm_activity_timer</td>
          <td>LWM2M_PSM_ACTIVITY_TIMER</td>
          <td>10000</td>
          <td>PSM Activity Timer if not specified in device profile</td>
      </tr>
      <tr>
          <td>transport.lwm2m.paging_transmission_window</td>
          <td>LWM2M_PAGING_TRANSMISSION_WINDOW</td>
          <td>10000</td>
          <td>Paging Transmission Window for eDRX support if not specified in the device profile</td>
      </tr>
      <tr>
          <td>transport.lwm2m.network_config</td>
          <td></td>
          <td></td>
          <td>In this section you can specify custom parameters for LwM2M network configuration and expose the env variables to configure outside</td>
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
  </tbody>
</table>
