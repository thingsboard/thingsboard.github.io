mosquitto_pub -d -h "$THINGSBOARD_EDGE_HOST_NAME" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -f "new-attributes-values.json"
