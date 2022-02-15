# Send CoAP attributes request. Replace $ACCESS_TOKEN with corresponding value.
coap-client -m get "coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2"
# For example, $ACCESS_TOKEN is ABC123:
coap-client -m get "coap://coap.thingsboard.cloud/api/v1/ABC123/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2"
