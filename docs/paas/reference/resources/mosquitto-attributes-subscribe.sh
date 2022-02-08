# Subscribes to attribute updates. Replace $ACCESS_TOKEN with corresponding value.
mosquitto_sub -d -h "mqtt.thingsboard.cloud" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN"
# For example, $ACCESS_TOKEN is ABC123:
mosquitto_sub -d -h "mqtt.thingsboard.cloud" -t "v1/devices/me/attributes" -u "ABC123"