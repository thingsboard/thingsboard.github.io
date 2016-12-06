# Publish data as an object without timestamp (server-side timestamp will be used)
curl -v -X POST -d @telemetry-data-as-object.json http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
# Publish data as an array of objects without timestamp (server-side timestamp will be used)
curl -v -X POST -d @telemetry-data-as-array.json http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
# Publish data as an object with timestamp (server-side timestamp will be used)
curl -v -X POST -d @telemetry-data-with-ts.json http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"