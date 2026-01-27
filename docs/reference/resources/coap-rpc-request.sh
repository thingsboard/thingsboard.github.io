# Publish response to RPC request
cat rpc-request.json | coap post coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc