 - **Advanced configuration**

See configuration yml file below for a list of possible configuration parameters, corresponding environment variables and their default values.
For example, default client id of the integration, that is used in integration debug messages is *"remote"* and can be altered by setting *"RPC_CLIENT_ID"* environment variable.


```bash
server:
  # Server bind address
  address: "${HTTP_BIND_ADDRESS:0.0.0.0}"
  # Server bind port
  port: "${HTTP_BIND_PORT:8082}"

integration:
  routingKey: "${INTEGRATION_ROUTING_KEY:PUT_YOUR_ROUTING_KEY_HERE}"
  secret: "${INTEGRATION_SECRET:PUT_YOUR_SECRET_HERE}"
  # Allows connection to the localhost resources. For example, local MQTT broker, etc.
  allow_local_network_hosts: "${INTEGRATION_ALLOW_LOCAL_NETWORK_HOSTS:true}"
  statistics:
    # Enable/disable integration statistics
    enabled: "${INTEGRATION_STATISTICS_ENABLED:true}"
    # Send statistics interval. Dfault value is once per hour
    persist_frequency: "${INTEGRATION_STATISTICS_PERSIST_FREQUENCY:3600000}"

storage:
  # Location of the folder to store data files
  data_folder_path: "${INTEGRATION_STORAGE_DATA_FOLDER_PATH:./}"
  # Max amount of data files to maintain
  max_file_count: "${INTEGRATION_STORAGE_MAX_FILE_COUNT:100}"
  # Max records per data file
  max_records_per_file: "${INTEGRATION_STORAGE_MAX_RECORDS_PER_FILE:30}"
  # Max records between persistence of data file
  max_records_between_fsync: "${INTEGRATION_STORAGE_MAX_RECORDS_BETWEEN_FSYNC:100}"
  # Size of the upload chunk
  max_read_records_count: "${INTEGRATION_STORAGE_MAX_READ_RECORDS_COUNT:50}"
  # Sleep interval while no new records
  no_read_records_sleep: "${INTEGRATION_STORAGE_NO_READ_RECORDS_SLEEP:1000}"

executors:
  # Size of the thread pool to handle incoming messages and tasks
  thread_pool_size: "${EXECUTORS_SIZE:1}"
  # Timeout to reconnect to ThingsBoard
  reconnect_timeout: "${EXECUTORS_RECONNECT_TIMEOUT:3000}" # in milliseconds

rpc:
  # Host of the ThingsBoard server
  host: "${PRC_HOST:thingsboard.cloud}"
  # Port of the ThingsBoard server
  port: "${RPC_PORT:9090}"
  # No reply timeout
  timeout: "${RPC_TIMEOUT:5}" # Timeout in seconds for channel termination
  # ID of the RPC client
  client_id: "${RPC_CLIENT_ID:remote}"
  ssl:
    # SSL enabled/disabled
    enabled: "${RPC_SSL_ENABLED:false}"
    # SSL certificate
    cert: "${RPC_SSL_CERT:roots.pem}"

js:
  evaluator: "${JS_EVALUATOR:local}"
  # Built-in JVM JavaScript environment properties
  local:
    # Use Sandboxed (secured) JVM JavaScript environment
    use_js_sandbox: "${USE_LOCAL_JS_SANDBOX:true}"
    # Specify thread pool size for JavaScript sandbox resource monitor
    monitor_thread_pool_size: "${LOCAL_JS_SANDBOX_MONITOR_THREAD_POOL_SIZE:4}"
    # Maximum CPU time in milliseconds allowed for script execution
    max_cpu_time: "${LOCAL_JS_SANDBOX_MAX_CPU_TIME:5000}"
    # Maximum allowed JavaScript execution errors before JavaScript will be blacklisted
    max_errors: "${LOCAL_JS_SANDBOX_MAX_ERRORS:3}"
``` 