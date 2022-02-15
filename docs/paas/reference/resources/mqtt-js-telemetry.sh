# Publish data as an object without timestamp (server-side timestamp will be used). Replace $ACCESS_TOKEN with corresponding value.
mqtt pub -v -q 1 -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u '$ACCESS_TOKEN' -m "{"temperature":42}"
# For example, $ACCESS_TOKEN is ABC123:
mqtt pub -v -q 1 -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u 'ABC123' -m "{"temperature":42}"

# Publish data as an object without timestamp (server-side timestamp will be used). Replace $ACCESS_TOKEN with corresponding value.
cat telemetry-data-as-object.json | mqtt pub -v -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u '$ACCESS_TOKEN' -s -m ""
# For example, $ACCESS_TOKEN is ABC123:
cat telemetry-data-as-object.json | mqtt pub -v -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u 'ABC123' -s -m ""

# Publish data as an array of objects without timestamp (server-side timestamp will be used). Replace $ACCESS_TOKEN with corresponding value.
cat telemetry-data-as-array.json | mqtt pub -v -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u '$ACCESS_TOKEN' -s -m ""
# For example, $ACCESS_TOKEN is ABC123:
cat telemetry-data-as-array.json | mqtt pub -v -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u 'ABC123' -s -m ""

# Publish data as an object with timestamp (telemetry timestamp will be used). Replace $ACCESS_TOKEN with corresponding value.
cat telemetry-data-with-ts.json | mqtt pub -v -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u '$ACCESS_TOKEN' -s -m ""
# For example, $ACCESS_TOKEN is ABC123:
cat telemetry-data-with-ts.json | mqtt pub -v -h "mqtt.thingsboard.cloud" -t "v1/devices/me/telemetry" -u 'ABC123' -s -m ""