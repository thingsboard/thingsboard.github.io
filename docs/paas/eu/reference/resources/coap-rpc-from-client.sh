# Post client-side rpc request. Replace $ACCESS_TOKEN with corresponding value.
cat rpc-client-request.json | coap post coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/rpc
# For example, $ACCESS_TOKEN is ABC123:
cat rpc-client-request.json | coap post coap://{{coapHostName}}/api/v1/ABC123/rpc