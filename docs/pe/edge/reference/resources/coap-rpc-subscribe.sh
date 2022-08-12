# Subscribe to RPC requests. Replace $THINGSBOARD_EDGE_HOST_NAME and $ACCESS_TOKEN with corresponding values.
# The s option stands for subscribe and the value has to be specified in seconds
# The B options stands for break (the operation will be break after desired timeout) and the value has to be specified in seconds
coap-client -m get coap://$THINGSBOARD_EDGE_HOST_NAME/api/v1/$ACCESS_TOKEN/rpc -s 100 -B 100
# For example, $THINGSBOARD_EDGE_HOST_NAME reference localhost, $ACCESS_TOKEN is ABC123:
coap-client -m get coap://localhost/api/v1/ABC123/rpc -s 100 -B 100