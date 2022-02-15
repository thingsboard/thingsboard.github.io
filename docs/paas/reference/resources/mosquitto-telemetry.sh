# Publish data as an object without timestamp (server-side timestamp will be used). Replace $ACCESS_TOKEN with corresponding value.
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m "{"temperature":42}"
# For example, $ACCESS_TOKEN is ABC123:
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u "ABC123" -m "{"temperature":42}"

# Publish data as an object without timestamp (server-side timestamp will be used) using data from file. Replace $ACCESS_TOKEN with corresponding value.
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-as-object.json"
# For example, $ACCESS_TOKEN is ABC123:
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u "ABC123" -f "telemetry-data-as-object.json"

# Publish data as an array of objects without timestamp (server-side timestamp will be used)  using data from file. Replace $ACCESS_TOKEN with corresponding value.
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-as-array.json"
# For example, $ACCESS_TOKEN is ABC123:
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u "ABC123" -f "telemetry-data-as-array.json"

# Publish data as an object with timestamp (telemetry timestamp will be used)  using data from file. Replace $ACCESS_TOKEN with corresponding value.
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-with-ts.json"
# For example, $ACCESS_TOKEN is ABC123:
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u "ABC123" -f "telemetry-data-with-ts.json"
