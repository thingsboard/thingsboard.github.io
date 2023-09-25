<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>edges.enabled</td>
          <td>EDGES_ENABLED</td>
          <td>true</td>
          <td>Enable/disable Edge instance</td>
      </tr>
      <tr>
          <td>edges.rpc.port</td>
          <td>EDGES_RPC_PORT</td>
          <td>7070</td>
          <td>RPC port bind</td>
      </tr>
      <tr>
          <td>edges.rpc.client_max_keep_alive_time_sec</td>
          <td>EDGES_RPC_CLIENT_MAX_KEEP_ALIVE_TIME_SEC</td>
          <td>1</td>
          <td>Maximum time of keep alive client RPC connection. Time in seconds</td>
      </tr>
      <tr>
          <td>edges.rpc.keep_alive_time_sec</td>
          <td>EDGES_RPC_KEEP_ALIVE_TIME_SEC</td>
          <td>10</td>
          <td>Maximum time of keep alive connection. Time in seconds</td>
      </tr>
      <tr>
          <td>edges.rpc.keep_alive_timeout_sec</td>
          <td>EDGES_RPC_KEEP_ALIVE_TIMEOUT_SEC</td>
          <td>5</td>
          <td>Timeout of keep alive RPC connection. Time in seconds</td>
      </tr>
      <tr>
          <td>edges.rpc.ssl.enabled</td>
          <td>EDGES_RPC_SSL_ENABLED</td>
          <td>false</td>
          <td>Enable/disable SSL support. Enable TLS communication between cloud and edge</td>
      </tr>
      <tr>
          <td>edges.rpc.ssl.cert</td>
          <td>EDGES_RPC_SSL_CERT</td>
          <td>certChainFile.pem</td>
          <td>Cert file to be used during TLS connectivity to cloud</td>
      </tr>
      <tr>
          <td>edges.rpc.ssl.private_key</td>
          <td>EDGES_RPC_SSL_PRIVATE_KEY</td>
          <td>privateKeyFile.pem</td>
          <td>Private key file associated with the Cert certificate. This key is used in the encryption process during a secure connection</td>
      </tr>
      <tr>
          <td>edges.rpc.max_inbound_message_size</td>
          <td>EDGES_RPC_MAX_INBOUND_MESSAGE_SIZE</td>
          <td>4194304</td>
          <td>Maximum size (in bytes) of inbound messages that cloud can handle from edge. By default, it can handle messages up to 4 Megabytes</td>
      </tr>
      <tr>
          <td>edges.storage.max_read_records_count</td>
          <td>EDGES_STORAGE_MAX_READ_RECORDS_COUNT</td>
          <td>50</td>
          <td>Max records of edge event to read from DB and sent to edge</td>
      </tr>
      <tr>
          <td>edges.storage.no_read_records_sleep</td>
          <td>EDGES_NO_READ_RECORDS_SLEEP</td>
          <td>1000</td>
          <td>Number of milliseconds to wait before next check of edge events in DB</td>
      </tr>
      <tr>
          <td>edges.storage.sleep_between_batches</td>
          <td>EDGES_SLEEP_BETWEEN_BATCHES</td>
          <td>10000</td>
          <td>Number of milliseconds to wait before resend failed batch of edge events to edge</td>
      </tr>
      <tr>
          <td>edges.scheduler_pool_size</td>
          <td>EDGES_SCHEDULER_POOL_SIZE</td>
          <td>1</td>
          <td>Number of threads that used to check DB for edge events</td>
      </tr>
      <tr>
          <td>edges.send_scheduler_pool_size</td>
          <td>EDGES_SEND_SCHEDULER_POOL_SIZE</td>
          <td>1</td>
          <td>Number of threads that used to send downlink messages to edge over gRPC</td>
      </tr>
      <tr>
          <td>edges.grpc_callback_thread_pool_size</td>
          <td>EDGES_GRPC_CALLBACK_POOL_SIZE</td>
          <td>1</td>
          <td>Number of threads that used to convert edge events from DB into downlink message and send them for delivery</td>
      </tr>
      <tr>
          <td>edges.state.persistToTelemetry</td>
          <td>EDGES_PERSIST_STATE_TO_TELEMETRY</td>
          <td>false</td>
          <td>Persist state of edge (active, last connect, last disconnect) into timeseries or attributes tables. 'false' means to store edge state into attributes table</td>
      </tr>
  </tbody>
</table>
