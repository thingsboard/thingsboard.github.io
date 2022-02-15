# Publish client-side attributes update. Replace $ACCESS_TOKEN with corresponding value.
cat new-attributes-values.json | mqtt pub -d -h "mqtt.thingsboard.cloud" -t "v1/devices/me/attributes" -u '$ACCESS_TOKEN' -s -m ""
# For example, $ACCESS_TOKEN is ABC123:
cat new-attributes-values.json | mqtt pub -d -h "mqtt.thingsboard.cloud" -t "v1/devices/me/attributes" -u 'ABC123' -s -m ""