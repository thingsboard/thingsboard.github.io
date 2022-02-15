# Subscribes to attribute updates. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
mosquitto_sub -d -h "$THINGSBOARD_HOST_NAME" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN"
# For example, $THINGSBOARD_HOST_NAME reference your local installation, $ACCESS_TOKEN is ABC123:
mosquitto_sub -d -h "127.0.0.1" -t "v1/devices/me/attributes" -u "ABC123"