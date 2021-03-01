
# for ThingsBoard Cloud

# Publish data as an object without timestamp (server-side timestamp will be used)
mosquitto_pub -d -q 1 -h "thingsboard.cloud" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m "{"temperature":42}"
# Publish data as an object without timestamp (server-side timestamp will be used) using data from file
mosquitto_pub -d -q 1 -h "thingsboard.cloud" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-as-object.json"
# Publish data as an array of objects without timestamp (server-side timestamp will be used)  using data from file
mosquitto_pub -d -q 1 -h "thingsboard.cloud" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-as-array.json"
# Publish data as an object with timestamp (telemetry timestamp will be used)  using data from file
mosquitto_pub -d -q 1 -h "thingsboard.cloud" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-with-ts.json"

# for local ThingsBoard

# Publish data as an object without timestamp (server-side timestamp will be used)
mosquitto_pub -d -q 1 -h "127.0.0.1" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m "{"temperature":42}"
# Publish data as an object without timestamp (server-side timestamp will be used) using data from file
mosquitto_pub -d -q 1 -h "127.0.0.1" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-as-object.json"
# Publish data as an array of objects without timestamp (server-side timestamp will be used) using data from file
mosquitto_pub -d -q 1 -h "127.0.0.1" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-as-array.json"
# Publish data as an object with timestamp (telemetry timestamp will be used) using data from file
mosquitto_pub -d -q 1 -h "127.0.0.1" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-with-ts.json"