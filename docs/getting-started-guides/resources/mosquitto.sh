# Publish serial number and firmware version attributes
mosquitto_pub -d -h "127.0.0.1" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -f "attributes-data.json"
# Publish timeseries data as an object without timestamp (server-side timestamp will be used)
mosquitto_pub -d -h "127.0.0.1" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -f "telemetry-data.json"
