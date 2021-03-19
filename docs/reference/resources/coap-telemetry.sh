
# for ThingsBoard Cloud

# Publish data as an object without timestamp (server-side timestamp will be used)
coap-client -m post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry -f telemetry-data-as-object.json
# Publish data as an array of objects without timestamp (server-side timestamp will be used)
coap-client -m post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry -f telemetry-data-as-array.json
# Publish data as an object with timestamp (telemetry timestamp will be used)
coap-client -m post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry -f telemetry-data-with-ts.json

# for local ThingsBoard

# Publish data as an object without timestamp (server-side timestamp will be used)
coap-client -m post coap://localhost/api/v1/$ACCESS_TOKEN/telemetry -f telemetry-data-as-object.json
# Publish data as an array of objects without timestamp (server-side timestamp will be used)
coap-client -m post coap://localhost/api/v1/$ACCESS_TOKEN/telemetry -f telemetry-data-as-array.json
# Publish data as an object with timestamp (telemetry timestamp will be used)
coap-client -m post coap://localhost/api/v1/$ACCESS_TOKEN/telemetry -f telemetry-data-with-ts.json
