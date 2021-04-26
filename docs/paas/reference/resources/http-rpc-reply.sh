# Publish response to RPC request
curl -v -X POST -d @rpc-response.json http://localhost:8080/api/v1/$ACCESS_TOKEN/rpc/1 --header "Content-Type:application/json"