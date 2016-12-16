# Publish serial number and firmware version attributes
cat attributes-data.json | mqtt pub -v -h "$THINGSBOARD_HOST" -t "v1/devices/me/attributes" -u '$ACCESS_TOKEN' -s
# Publish timeseries data as an object without timestamp (server-side timestamp will be used)
cat telemetry-data.json | mqtt pub -v -h "$THINGSBOARD_HOST" -t "v1/devices/me/telemetry" -u '$ACCESS_TOKEN' -s