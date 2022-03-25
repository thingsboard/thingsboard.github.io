# Subscribes to attribute updates. Replace $THINGSBOARD_EDGE_HOST_NAME and $ACCESS_TOKEN with corresponding values.
mosquitto_sub -d -h "$THINGSBOARD_EDGE_HOST_NAME" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN"
# For example, $THINGSBOARD_EDGE_HOST_NAME reference localhost, $ACCESS_TOKEN is ABC123:
mosquitto_sub -d -h "localhost" -t "v1/devices/me/attributes" -u "ABC123"