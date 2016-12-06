# Post client-side rpc request
curl -X POST -d @rpc-client-request.json http://localhost:8080/api/v1/$ACCESS_TOKEN/rpc --header "Content-Type:application/json"