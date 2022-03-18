# Publish data as an object without timestamp (server-side timestamp will be used). Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
cat telemetry-data-as-object.json | coap post coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry
# For example, $THINGSBOARD_HOST_NAME reference live demo server, $ACCESS_TOKEN is ABC123:
cat telemetry-data-as-object.json | coap post coap://demo.thingsboard.io/api/v1/ABC123/telemetry

# Publish data as an array of objects without timestamp (server-side timestamp will be used). Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
cat telemetry-data-as-array.json | coap post coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry
# For example, $THINGSBOARD_HOST_NAME reference live demo server, $ACCESS_TOKEN is ABC123:
cat telemetry-data-as-array.json | coap post coap://demo.thingsboard.io/api/v1/ABC123/telemetry

# Publish data as an object with timestamp (telemetry timestamp will be used). Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
cat telemetry-data-with-ts.json | coap post coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry
# For example, $THINGSBOARD_HOST_NAME reference live demo server, $ACCESS_TOKEN is ABC123:
cat telemetry-data-with-ts.json | coap post coap://demo.thingsboard.io/api/v1/ABC123/telemetry