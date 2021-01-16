
# for ThingsBoard Cloud

# Publish client-side attributes update
mosquitto_pub -d -h "thingsboard.cloud" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -m "{"attribute1": "value1", "attribute2": true}"
# Publish client-side attributes update from file
mosquitto_pub -d -h "thingsboard.cloud" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -f "new-attributes-values.json"

# for local ThingsBoard

# Publish client-side attributes update
mosquitto_pub -d -h "127.0.0.1" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -m "{"attribute1": "value1", "attribute2": true}"
# Publish client-side attributes update from file
mosquitto_pub -d -h "127.0.0.1" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -f "new-attributes-values.json"
