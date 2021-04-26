
# for ThingsBoard Cloud

# Send CoAP attributes request
coap-client -m get "coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2"

# for local ThingsBoard

# Send CoAP attributes request
coap-client -m get "coap://localhost/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2"
