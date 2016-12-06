# Publish data as an object without timestamp (server-side timestamp will be used)
cat telemetry-data-as-object.json | mqtt pub -v -h "127.0.0.1" -t "v1/devices/me/telemetry" -u '$ACCESS_TOKEN' -s
# Publish data as an array of objects without timestamp (server-side timestamp will be used)
cat telemetry-data-as-array.json | mqtt pub -v -h "127.0.0.1" -t "v1/devices/me/telemetry" -u '$ACCESS_TOKEN' -s
# Publish data as an object with timestamp (server-side timestamp will be used)
cat telemetry-data-with-ts.json | mqtt pub -v -h "127.0.0.1" -t "v1/devices/me/telemetry" -u '$ACCESS_TOKEN' -s