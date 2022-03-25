# Publish data as an object without timestamp (server-side timestamp will be used). Replace $THINGSBOARD_EDGE_HOST_NAME and $ACCESS_TOKEN with corresponding values.
mosquitto_pub -d -q 1 -h "$THINGSBOARD_EDGE_HOST_NAME" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m "{"temperature":42}"
# For example, $THINGSBOARD_EDGE_HOST_NAME reference localhost, $ACCESS_TOKEN is ABC123:
mosquitto_pub -d -q 1 -h "localhost" -t "v1/devices/me/telemetry" -u "ABC123" -m "{"temperature":42}"

# Publish data as an object without timestamp (server-side timestamp will be used) using data from file. Replace $THINGSBOARD_EDGE_HOST_NAME and $ACCESS_TOKEN with corresponding values.
mosquitto_pub -d -q 1 -h "$THINGSBOARD_EDGE_HOST_NAME" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-as-object.json"
# For example, $THINGSBOARD_EDGE_HOST_NAME reference localhost, $ACCESS_TOKEN is ABC123:
mosquitto_pub -d -q 1 -h "localhost" -t "v1/devices/me/telemetry" -u "ABC123" -f "telemetry-data-as-object.json"

# Publish data as an array of objects without timestamp (server-side timestamp will be used) using data from file. Replace $THINGSBOARD_EDGE_HOST_NAME and $ACCESS_TOKEN with corresponding values.
mosquitto_pub -d -q 1 -h "$THINGSBOARD_EDGE_HOST_NAME" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-as-array.json"
# For example, $THINGSBOARD_EDGE_HOST_NAME reference localhost, $ACCESS_TOKEN is ABC123:
mosquitto_pub -d -q 1 -h "localhost" -t "v1/devices/me/telemetry" -u "ABC123" -f "telemetry-data-as-array.json"

# Publish data as an object with timestamp (telemetry timestamp will be used) using data from file. Replace $THINGSBOARD_EDGE_HOST_NAME and $ACCESS_TOKEN with corresponding values.
mosquitto_pub -d -q 1 -h "$THINGSBOARD_EDGE_HOST_NAME" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-with-ts.json"
# For example, $THINGSBOARD_EDGE_HOST_NAME reference localhost, $ACCESS_TOKEN is ABC123:
mosquitto_pub -d -q 1 -h "localhost" -t "v1/devices/me/telemetry" -u "ABC123" -f "telemetry-data-with-ts.json"