# Publish data as an object without timestamp (server-side timestamp will be used)
cat telemetry-data-as-object.json | coap post coap://localhost/api/v1/$ACCESS_TOKEN/telemetry
# Publish data as an array of objects without timestamp (server-side timestamp will be used)
cat telemetry-data-as-array.json | coap post coap://localhost/api/v1/$ACCESS_TOKEN/telemetry
# Publish data as an object with timestamp (server-side timestamp will be used)
cat telemetry-data-with-ts.json | coap post coap://localhost/api/v1/$ACCESS_TOKEN/telemetry