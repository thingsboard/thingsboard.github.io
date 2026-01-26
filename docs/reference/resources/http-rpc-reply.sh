# Publish response to RPC request. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
curl -v -X POST -d @rpc-response.json http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc/1 --header "Content-Type:application/json"
# For example, $THINGSBOARD_HOST_NAME reference ThingsBoard Cloud (North America), $ACCESS_TOKEN is ABC123:
curl -v -X POST -d @rpc-response.json https://thingsboard.cloud/api/v1/ABC123/rpc/1 --header "Content-Type:application/json"
# For example, $THINGSBOARD_HOST_NAME reference ThingsBoard Cloud (Europe), $ACCESS_TOKEN is ABC123:
curl -v -X POST -d @rpc-response.json https://eu.thingsboard.cloud/api/v1/ABC123/rpc/1 --header "Content-Type:application/json"