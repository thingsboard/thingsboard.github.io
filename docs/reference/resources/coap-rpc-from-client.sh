# Post client-side rpc request. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
cat rpc-client-request.json | coap post coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc
# For example, $THINGSBOARD_HOST_NAME reference live demo server, $ACCESS_TOKEN is ABC123:
cat rpc-client-request.json | coap post coap://demo.thingsboard.io/api/v1/ABC123/rpc