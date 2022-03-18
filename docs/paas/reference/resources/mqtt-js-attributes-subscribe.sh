# Subscribes to attribute updates. Replace $ACCESS_TOKEN with corresponding value.
mqtt sub -v -h "mqtt.thingsboard.cloud" -t "v1/devices/me/attributes" -u '$ACCESS_TOKEN'
# For example, $ACCESS_TOKEN is ABC123:
mqtt sub -v -h "mqtt.thingsboard.cloud" -t "v1/devices/me/attributes" -u 'ABC123'