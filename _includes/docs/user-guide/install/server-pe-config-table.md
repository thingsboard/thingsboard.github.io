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
          <td>Server bind address</td>
      </tr>
      <tr>
          <td>server.port</td>
          <td>HTTP_BIND_PORT</td>
          <td>8080</td>
          <td>Server bind port</td>
      </tr>
      <tr>
          <td>server.forward_headers_strategy</td>
          <td>HTTP_FORWARD_HEADERS_STRATEGY</td>
          <td>NONE</td>
          <td>Server forward headers strategy</td>
      </tr>
      <tr>
          <td>server.ssl.enabled</td>
          <td>SSL_ENABLED</td>
          <td>false</td>
          <td>Enable/disable SSL support</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.type</td>
          <td>SSL_CREDENTIALS_TYPE</td>
          <td>PEM</td>
          <td>Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.pem.cert_file</td>
          <td>SSL_PEM_CERT</td>
          <td>server.pem</td>
          <td>Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.pem.key_file</td>
          <td>SSL_PEM_KEY</td>
          <td>server_key.pem</td>
          <td>Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.pem.key_password</td>
          <td>SSL_PEM_KEY_PASSWORD</td>
          <td>server_key_password</td>
          <td>Server certificate private key password (optional)</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.type</td>
          <td>SSL_KEY_STORE_TYPE</td>
          <td>PKCS12</td>
          <td>Type of the key store (JKS or PKCS12)</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.store_file</td>
          <td>SSL_KEY_STORE</td>
          <td>classpath:keystore/keystore.p12</td>
          <td>Path to the key store that holds the SSL certificate</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.store_password</td>
          <td>SSL_KEY_STORE_PASSWORD</td>
          <td>thingsboard</td>
          <td>Password used to access the key store</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.key_alias</td>
          <td>SSL_KEY_ALIAS</td>
          <td>tomcat</td>
          <td>Key alias</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.key_password</td>
          <td>SSL_KEY_PASSWORD</td>
          <td>thingsboard</td>
          <td>Password used to access the key</td>
      </tr>
      <tr>
          <td>server.http2.enabled</td>
          <td>HTTP2_ENABLED</td>
          <td>true</td>
          <td>Enable/disable HTTP/2 support</td>
      </tr>
      <tr>
          <td>server.log_controller_error_stack_trace</td>
          <td>HTTP_LOG_CONTROLLER_ERROR_STACK_TRACE</td>
          <td>false</td>
          <td></td>
      </tr>
      <tr>
          <td>server.ws.send_timeout</td>
          <td>TB_SERVER_WS_SEND_TIMEOUT</td>
          <td>5000</td>
          <td></td>
      </tr>
      <tr>
          <td>server.ws.ping_timeout</td>
          <td>TB_SERVER_WS_PING_TIMEOUT</td>
          <td>30000</td>
          <td>recommended timeout >= 30 seconds. Platform will attempt to send 'ping' request 3 times within the timeout</td>
      </tr>
      <tr>
          <td>server.ws.dynamic_page_link.refresh_interval</td>
          <td>TB_SERVER_WS_DYNAMIC_PAGE_LINK_REFRESH_INTERVAL_SEC</td>
          <td>60</td>
          <td></td>
      </tr>
      <tr>
          <td>server.ws.dynamic_page_link.refresh_pool_size</td>
          <td>TB_SERVER_WS_DYNAMIC_PAGE_LINK_REFRESH_POOL_SIZE</td>
          <td>1</td>
          <td></td>
      </tr>
      <tr>
          <td>server.ws.dynamic_page_link.max_alarm_queries_per_refresh_interval</td>
          <td>TB_SERVER_WS_MAX_ALARM_QUERIES_PER_REFRESH_INTERVAL</td>
          <td>10</td>
          <td></td>
      </tr>
      <tr>
          <td>server.ws.dynamic_page_link.max_per_user</td>
          <td>TB_SERVER_WS_DYNAMIC_PAGE_LINK_MAX_PER_USER</td>
          <td>10</td>
          <td></td>
      </tr>
      <tr>
          <td>server.ws.max_entities_per_data_subscription</td>
          <td>TB_SERVER_WS_MAX_ENTITIES_PER_DATA_SUBSCRIPTION</td>
          <td>10000</td>
          <td></td>
      </tr>
      <tr>
          <td>server.ws.max_entities_per_alarm_subscription</td>
          <td>TB_SERVER_WS_MAX_ENTITIES_PER_ALARM_SUBSCRIPTION</td>
          <td>10000</td>
          <td></td>
      </tr>
      <tr>
          <td>server.ws.max_queue_messages_per_session</td>
          <td>TB_SERVER_WS_DEFAULT_QUEUE_MESSAGES_PER_SESSION</td>
          <td>1000</td>
          <td></td>
      </tr>
      <tr>
          <td>server.rest.server_side_rpc.min_timeout</td>
          <td>MIN_SERVER_SIDE_RPC_TIMEOUT</td>
          <td>5000</td>
          <td>Minimum value of the server side RPC timeout. May override value provided in the REST API call. Since 2.5 migration to queues, the RPC delay depends on the size of the pending messages in the queue, so default UI parameter of 500ms may not be sufficient for loaded environments.</td>
      </tr>
      <tr>
          <td>server.rest.server_side_rpc.default_timeout</td>
          <td>DEFAULT_SERVER_SIDE_RPC_TIMEOUT</td>
          <td>10000</td>
          <td>Default value of the server side RPC timeout.</td>
      </tr>
      <tr>
          <td>server.rest.rate_limits.reset_password_per_user</td>
          <td>RESET_PASSWORD_PER_USER_RATE_LIMIT_CONFIGURATION</td>
          <td>5:3600</td>
          <td></td>
      </tr>
  </tbody>
</table>
