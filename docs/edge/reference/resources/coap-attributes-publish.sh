# Publish client-side attributes update. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
cat new-attributes-values.json | coap post coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
# For example, $THINGSBOARD_HOST_NAME reference live demo server, $ACCESS_TOKEN is ABC123:
cat new-attributes-values.json | coap post coap://demo.thingsboard.io/api/v1/ABC123/attributes