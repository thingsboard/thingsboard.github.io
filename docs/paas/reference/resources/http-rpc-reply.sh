# Publish response to RPC request. Replace $ACCESS_TOKEN with corresponding value.
curl -v -X POST -d @rpc-response.json {{httpsUrl}}/api/v1/$ACCESS_TOKEN/rpc/1 --header "Content-Type:application/json"
# For example, $ACCESS_TOKEN is ABC123:
curl -v -X POST -d @rpc-response.json {{httpsUrl}}/api/v1/ABC123/rpc/1 --header "Content-Type:application/json"