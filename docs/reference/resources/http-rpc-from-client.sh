# Post client-side rpc request. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
curl -X POST -d @rpc-client-request.json http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc --header "Content-Type:application/json"
# For example, $THINGSBOARD_HOST_NAME reference live demo server, $ACCESS_TOKEN is ABC123:
curl -X POST -d @rpc-client-request.json https://demo.thingsboard.io/api/v1/ABC123/rpc --header "Content-Type:application/json"