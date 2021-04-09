# Publish data as an object without timestamp (server-side timestamp will be used)
mqtt pub -v -q 1 -h "thingsboard.cloud" -t "v1/devices/me/telemetry" -u '$ACCESS_TOKEN' -s -m "{"temperature":42}"
# Publish data as an object without timestamp (server-side timestamp will be used)
cat telemetry-data-as-object.json | mqtt pub -v -h "thingsboard.cloud" -t "v1/devices/me/telemetry" -u '$ACCESS_TOKEN' -s
# Publish data as an array of objects without timestamp (server-side timestamp will be used)
cat telemetry-data-as-array.json | mqtt pub -v -h "thingsboard.cloud" -t "v1/devices/me/telemetry" -u '$ACCESS_TOKEN' -s
# Publish data as an object with timestamp (telemetry timestamp will be used)
cat telemetry-data-with-ts.json | mqtt pub -v -h "thingsboard.cloud" -t "v1/devices/me/telemetry" -u '$ACCESS_TOKEN' -s