# Subscribe to RPC requests. Replace $ACCESS_TOKEN with corresponding value.
# The s option stands for subscribe and the value has to be specified in seconds
# The B options stands for break (the operation will be break after desired timeout) and the value has to be specified in seconds
coap-client -m get coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/rpc -s 100 -B 100
# For example, $ACCESS_TOKEN is ABC123:
coap-client -m get coap://{{coapHostName}}/api/v1/ABC123/rpc -s 100 -B 100