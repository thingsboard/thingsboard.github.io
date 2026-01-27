# Post client-side rpc request. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
cat rpc-client-request.json | coap post coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc
# For example, $THINGSBOARD_HOST_NAME reference to ThingsBoard Cloud (North America), $ACCESS_TOKEN is ABC123:
cat rpc-client-request.json | coap post coap://coap.thingsboard.cloud/api/v1/ABC123/rpc
# For example, $THINGSBOARD_HOST_NAME reference to ThingsBoard Cloud (Europe), $ACCESS_TOKEN is ABC123:
cat rpc-client-request.json | coap post coap://coap.eu.thingsboard.cloud/api/v1/ABC123/rpc