# Publish client-side attributes update. Replace $ACCESS_TOKEN with corresponding value.
cat new-attributes-values.json | coap post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes
# For example, $ACCESS_TOKEN is ABC123:
cat new-attributes-values.json | coap post coap://coap.thingsboard.cloud/api/v1/ABC123/attributes