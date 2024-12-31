# Publish response to RPC request. Replace $ACCESS_TOKEN with corresponding value.
cat rpc-response.json | coap post coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/rpc/1
# For example, $ACCESS_TOKEN is ABC123:
cat rpc-response.json | coap post coap://{{coapHostName}}/api/v1/ABC123/rpc/1