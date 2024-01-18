<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
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
        <td>LwM2M server bind address. Bind to all interfaces by default.</td>
    </tr>
    <tr>
        <td>transport.lwm2m.server.bind_port</td>
        <td>LWM2M_BIND_PORT</td>
        <td>5685</td>
        <td>LwM2M server bind port.</td>
    </tr>
    <tr>
        <td>transport.lwm2m.server.security.bind_address</td>
        <td>LWM2M_SECURITY_BIND_ADDRESS</td>
        <td>0.0.0.0</td>
        <td>LwM2M server bind address for DTLS. Bind to all interfaces by default.</td>
    </tr>
    <tr>
        <td>transport.lwm2m.server.security.bind_port</td>
        <td>LWM2M_SECURITY_BIND_PORT</td>
        <td>5686</td>
        <td>LwM2M server bind port for DTLS.</td>
    </tr>
    <tr>
        <td>transport.lwm2m.server.security.credentials.enabled</td>
        <td>LWM2M_SERVER_CREDENTIALS_ENABLED</td>
        <td>true</td>
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
        <td>Path to the server certificate file (holds server certificate or certificate chain, may include server
            private key)
        </td>
    </tr>
    <tr>
        <td>transport.lwm2m.server.security.credentials.pem.key_file</td>
        <td>LWM2M_SERVER_PEM_KEY</td>
        <td>lwm2mserver_key.pem</td>
        <td>Path to the server certificate private key file (optional)</td>
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
        <td>Type of the key store</td>
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
        <td>Only Certificate_x509</td>
    </tr>
    <tr>
        <td>transport.lwm2m.bootstrap.enable</td>
        <td>LWM2M_ENABLED_BS</td>
        <td>true</td>
        <td>Enable/disable Bootstrap Server</td>
    </tr>
    <tr>
        <td>transport.lwm2m.bootstrap.id</td>
        <td>LWM2M_SERVER_ID_BS</td>
        <td>111</td>
        <td>This is:<br>
            * Default value in Lwm2mClient after start in mode Bootstrap for the object : name "LWM2M Security" field:
            "Short Server ID" (deviceProfile: Bootstrap.BOOTSTRAP SERVER.Short ID)
        </td>
    </tr>
    <tr>
        <td>transport.lwm2m.bootstrap.bind_address</td>
        <td>LWM2M_BS_BIND_ADDRESS</td>
        <td>0.0.0.0</td>
        <td>LwM2M bootstrap server bind address. Bind to all interfaces by default.</td>
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
        <td>LwM2M bootstrap server bind address for DTLS. Bind to all interfaces by default.</td>
    </tr>
    <tr>
        <td>transport.lwm2m.bootstrap.security.bind_port</td>
        <td>LWM2M_BS_SECURITY_BIND_PORT</td>
        <td>5688</td>
        <td>LwM2M bootstrap server bind port for DTLS.</td>
    </tr>
    <tr>
        <td>transport.lwm2m.bootstrap.security.credentials.enabled</td>
        <td>LWM2M_BS_CREDENTIALS_ENABLED</td>
        <td>true</td>
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
        <td>Path to the server certificate file (holds server certificate or certificate chain, may include server
            private key)
        </td>
    </tr>
    <tr>
        <td>transport.lwm2m.bootstrap.security.credentials.pem.key_file</td>
        <td>LWM2M_BS_PEM_KEY</td>
        <td>lwm2mserver_key.pem</td>
        <td>Path to the server certificate private key file (optional)</td>
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
        <td>Type of the key store</td>
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
        <td>true</td>
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
        <td>lwm2mserver.pem</td>
        <td>Path to the certificates file (holds trust certificates)</td>
    </tr>
    <tr>
        <td>transport.lwm2m.security.trust-credentials.keystore.type</td>
        <td>LWM2M_TRUST_KEY_STORE_TYPE</td>
        <td>JKS</td>
        <td>Type of the key store</td>
    </tr>
    <tr>
        <td>transport.lwm2m.security.trust-credentials.keystore.store_file</td>
        <td>LWM2M_TRUST_KEY_STORE</td>
        <td>lwm2mserver.jks</td>
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
        <td> Set usage of recommended cipher suites.<br>
            * Params DTLS Connector config:<br>
            -- recommendedCipherSuitesOnly = true allow only recommended cipher suites,<br>
            -- recommendedCipherSuitesOnly = false, also allow not recommended cipher suites.
        </td>
    </tr>
    <tr>
        <td>transport.lwm2m.security.recommended_supported_groups</td>
        <td>LWM2M_RECOMMENDED_SUPPORTED_GROUPS</td>
        <td>true</td>
        <td>Set usage of recommended supported groups (curves).<br>
            * Params DTLS Connector config:<br>
            -- recommendedSupportedGroupsOnly = true allow only recommended supported groups,<br>
            -- recommendedSupportedGroupsOnly = false, also allow not recommended supported groups. Default value is
            true
        </td>
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
        <td>transport.lwm2m.redis.enabled</td>
        <td>LWM2M_REDIS_ENABLED</td>
        <td>false</td>
        <td>Enable/disable Redis for lvm2m transport</td>
    </tr>
    </tbody>
</table>