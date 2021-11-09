
# for ThingsBoard Cloud

# Subscribe to RPC requests
# The s option stands for subscribe and the value has to be specified in seconds
# The B options stands for break (the operation will be break after desired timeout) and the value has to be specified in seconds
coap-client -m get coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/rpc -s 100 -B 100

# for local ThingsBoard

# Subscribe to RPC requests
# The s option stands for subscribe and the value has to be specified in seconds
# The B options stands for break (the operation will be break after desired timeout) and the value has to be specified in seconds
coap-client -m get coap://localhost/api/v1/$ACCESS_TOKEN/rpc -s 100 -B 100
