
# for ThingsBoard Cloud

# Subscribe to attribute updates
# The s option stands for subscribe and the value has to be specified in seconds
coap-client -m get coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes -s 100

# for local ThingsBoard

# Subscribe to attribute updates
# The s option stands for subscribe and the value has to be specified in seconds
coap-client -m get coap://localhost/api/v1/$ACCESS_TOKEN/attributes -s 100
