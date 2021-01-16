
# for ThingsBoard Cloud

# Post client-side rpc request
cat rpc-client-request.json | coap post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc

# for local ThingsBoard

# Post client-side rpc request
cat rpc-client-request.json | coap post coap://localhost/api/v1/$ACCESS_TOKEN/rpc