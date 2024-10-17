# Send HTTP attributes request. Replace $ACCESS_TOKEN with corresponding value.
curl -X POST -d @rpc-client-request.json {{httpsUrl}}/api/v1/$ACCESS_TOKEN/rpc --header "Content-Type:application/json"
# For example, $ACCESS_TOKEN is ABC123:
curl -X POST -d @rpc-client-request.json {{httpsUrl}}/api/v1/ABC123/rpc --header "Content-Type:application/json"