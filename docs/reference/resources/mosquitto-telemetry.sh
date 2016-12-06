# Publish data as an object without timestamp (server-side timestamp will be used)
mosquitto_pub -d -h "127.0.0.1" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-as-object.json"
# Publish data as an array of objects without timestamp (server-side timestamp will be used)
mosquitto_pub -d -h "127.0.0.1" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-as-array.json"
# Publish data as an object with timestamp (server-side timestamp will be used)
mosquitto_pub -d -h "127.0.0.1" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data-with-ts.json"