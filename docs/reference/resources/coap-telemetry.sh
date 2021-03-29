
# for ThingsBoard Cloud

# Publish data as an object without timestamp (server-side timestamp will be used)
cat telemetry-data-as-object.json | coap post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry
# Publish data as an array of objects without timestamp (server-side timestamp will be used)
cat telemetry-data-as-array.json | coap post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry
# Publish data as an object with timestamp (telemetry timestamp will be used)
cat telemetry-data-with-ts.json | coap post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry

# for local ThingsBoard

# Publish data as an object without timestamp (server-side timestamp will be used)
cat telemetry-data-as-object.json | coap post coap://localhost/api/v1/$ACCESS_TOKEN/telemetry
# Publish data as an array of objects without timestamp (server-side timestamp will be used)
cat telemetry-data-as-array.json | coap post coap://localhost/api/v1/$ACCESS_TOKEN/telemetry
# Publish data as an object with timestamp (telemetry timestamp will be used)
cat telemetry-data-with-ts.json | coap post coap://localhost/api/v1/$ACCESS_TOKEN/telemetry
