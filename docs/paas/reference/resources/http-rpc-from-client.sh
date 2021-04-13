
# for ThingsBoard Cloud

# Send HTTP attributes request
curl -X POST -d @rpc-client-request.json https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc --header "Content-Type:application/json"

# for local ThingsBoard

# Post client-side rpc request
curl -X POST -d @rpc-client-request.json http://localhost:8080/api/v1/$ACCESS_TOKEN/rpc --header "Content-Type:application/json"