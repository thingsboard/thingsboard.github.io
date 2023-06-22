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
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.bind_address</td>
          <td>LWM2M_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.bind_port</td>
          <td>LWM2M_BIND_PORT</td>
          <td>5685</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.bind_address</td>
          <td>LWM2M_SECURITY_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.server.security.bind_port</td>
          <td>LWM2M_SECURITY_BIND_PORT</td>
          <td>5686</td>
          <td></td>
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
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.id</td>
          <td>LWM2M_SERVER_ID_BS</td>
          <td>111</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.bind_address</td>
          <td>LWM2M_BS_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.bind_port</td>
          <td>LWM2M_BS_BIND_PORT</td>
          <td>5687</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.bind_address</td>
          <td>LWM2M_BS_SECURITY_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.bootstrap.security.bind_port</td>
          <td>LWM2M_BS_SECURITY_BIND_PORT</td>
          <td>5688</td>
          <td></td>
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
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.security.recommended_supported_groups</td>
          <td>LWM2M_RECOMMENDED_SUPPORTED_GROUPS</td>
          <td>true</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.timeout</td>
          <td>LWM2M_TIMEOUT</td>
          <td>120000</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.uplink_pool_size</td>
          <td>LWM2M_UPLINK_POOL_SIZE</td>
          <td>10</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.downlink_pool_size</td>
          <td>LWM2M_DOWNLINK_POOL_SIZE</td>
          <td>10</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.ota_pool_size</td>
          <td>LWM2M_OTA_POOL_SIZE</td>
          <td>10</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.clean_period_in_sec</td>
          <td>LWM2M_CLEAN_PERIOD_IN_SEC</td>
          <td>2</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.log_max_length</td>
          <td>LWM2M_LOG_MAX_LENGTH</td>
          <td>1024</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.psm_activity_timer</td>
          <td>LWM2M_PSM_ACTIVITY_TIMER</td>
          <td>10000</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.paging_transmission_window</td>
          <td>LWM2M_PAGING_TRANSMISSION_WINDOW</td>
          <td>10000</td>
          <td></td>
      </tr>
      <tr>
          <td>transport.lwm2m.network_config</td>
          <td></td>
          <td></td>
          <td>In this section you can specify custom parameters for LwM2M network configuration and expose the env variables to configure outside</td>
      </tr>
  </tbody>
</table>
