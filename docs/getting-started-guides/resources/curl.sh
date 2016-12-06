# Publish serial number and firmware version attributes
curl -v -X POST -d @attributes-data.json http://localhost:8080/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
# Publish timeseries data as an object without timestamp (server-side timestamp will be used)
curl -v -X POST -d @telemetry-data.json http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"