# Publish client-side attributes update. Replace $ACCESS_TOKEN with corresponding value.
mosquitto_pub -d -h "mqtt.thingsboard.cloud" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -m "{"attribute1": "value1", "attribute2": true}"
# For example, $ACCESS_TOKEN is ABC123:
mosquitto_pub -d -h "mqtt.thingsboard.cloud" -t "v1/devices/me/attributes" -u "ABC123" -m "{"attribute1": "value1", "attribute2": true}"

# Publish client-side attributes update from file. Replace $ACCESS_TOKEN with corresponding value.
mosquitto_pub -d -h "mqtt.thingsboard.cloud" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -f "new-attributes-values.json"
# For example, $ACCESS_TOKEN is ABC123:
mosquitto_pub -d -h "mqtt.thingsboard.cloud" -t "v1/devices/me/attributes" -u "ABC123" -f "new-attributes-values.json"