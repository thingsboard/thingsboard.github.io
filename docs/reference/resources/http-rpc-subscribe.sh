# Send rpc request with 20 seconds timeout. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
curl -v -X GET http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc?timeout=20000
# For example, $THINGSBOARD_HOST_NAME reference ThingsBoard Cloud (North America), $ACCESS_TOKEN is ABC123:
curl -v -X GET https://thingsboard.cloud/api/v1/ABC123/rpc?timeout=20000
# For example, $THINGSBOARD_HOST_NAME reference ThingsBoard Cloud (Europe), $ACCESS_TOKEN is ABC123:
curl -v -X GET https://eu.thingsboard.cloud/api/v1/ABC123/rpc?timeout=20000