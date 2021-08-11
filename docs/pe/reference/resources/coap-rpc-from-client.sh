
# for ThingsBoard Cloud

# Post client-side rpc request
coap-client -m post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc -f rpc-client-request.json

# for local ThingsBoard

# Post client-side rpc request
coap-client -m post coap://localhost/api/v1/$ACCESS_TOKEN/rpc -f rpc-client-request.json
