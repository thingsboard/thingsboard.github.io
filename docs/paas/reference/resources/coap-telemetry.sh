# Publish data as an object without timestamp (server-side timestamp will be used). Replace $ACCESS_TOKEN with corresponding value.
cat telemetry-data-as-object.json | coap post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry
# For example, $ACCESS_TOKEN is ABC123:
cat telemetry-data-as-object.json | coap post coap://coap.thingsboard.cloud/api/v1/ABC123/telemetry

# Publish data as an array of objects without timestamp (server-side timestamp will be used). Replace $ACCESS_TOKEN with corresponding value.
cat telemetry-data-as-array.json | coap post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry
# For example, $ACCESS_TOKEN is ABC123:
cat telemetry-data-as-array.json | coap post coap://coap.thingsboard.cloud/api/v1/ABC123/telemetry

# Publish data as an object with timestamp (telemetry timestamp will be used). Replace $ACCESS_TOKEN with corresponding value.
cat telemetry-data-with-ts.json | coap post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry
# For example, $ACCESS_TOKEN is ABC123:
cat telemetry-data-with-ts.json | coap post coap://coap.thingsboard.cloud/api/v1/ABC123/telemetry