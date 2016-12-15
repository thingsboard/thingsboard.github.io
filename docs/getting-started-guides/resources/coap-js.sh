# Publish serial number and firmware version attributes
cat attributes-data.json | coap post coap://$THINGSBOARD_HOST/api/v1/$ACCESS_TOKEN/attributes
# Publish timeseries data as an object without timestamp (server-side timestamp will be used)
cat telemetry-data.json | coap post coap://$THINGSBOARD_HOST/api/v1/$ACCESS_TOKEN/telemetry