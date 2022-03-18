# Publish client-side attributes update. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
cat new-attributes-values.json | mqtt pub -d -h "$THINGSBOARD_HOST_NAME" -t "v1/devices/me/attributes" -u '$ACCESS_TOKEN' -s -m ""
# For example, $THINGSBOARD_HOST_NAME reference your local installation, $ACCESS_TOKEN is ABC123:
cat new-attributes-values.json | mqtt pub -d -h "127.0.0.1" -t "v1/devices/me/attributes" -u 'ABC123' -s -m ""