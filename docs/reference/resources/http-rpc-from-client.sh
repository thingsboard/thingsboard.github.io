# Post client-side rpc request. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
curl -X POST -d @rpc-client-request.json http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc --header "Content-Type:application/json"
# For example, $THINGSBOARD_HOST_NAME reference ThingsBoard Cloud (North America), $ACCESS_TOKEN is ABC123:
curl -X POST -d @rpc-client-request.json https://thingsboard.cloud/api/v1/ABC123/rpc --header "Content-Type:application/json"
# For example, $THINGSBOARD_HOST_NAME reference ThingsBoard Cloud (Europe), $ACCESS_TOKEN is ABC123:
curl -X POST -d @rpc-client-request.json https://eu.thingsboard.cloud/api/v1/ABC123/rpc --header "Content-Type:application/json"