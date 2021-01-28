
# for ThingsBoard Cloud

# Publish data as an object without timestamp (server-side timestamp will be used)
curl -v -X POST --data "{"temperature":42,"humidity":73}" https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
# Publish data as an object without timestamp (server-side timestamp will be used) using data from file
curl -v -X POST -d @telemetry-data-as-object.json https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
# Publish data as an array of objects without timestamp (server-side timestamp will be used)  using data from file
curl -v -X POST -d @telemetry-data-as-array.json https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
# Publish data as an object with timestamp (telemetry timestamp will be used)  using data from file
curl -v -X POST -d @telemetry-data-with-ts.json https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"

# for local ThingsBoard

# Publish data as an object without timestamp (server-side timestamp will be used)
curl -v -X POST --data "{"temperature":42,"humidity":73}" http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
# Publish data as an object without timestamp (server-side timestamp will be used)  using data from file
curl -v -X POST -d @telemetry-data-as-object.json http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
# Publish data as an array of objects without timestamp (server-side timestamp will be used)  using data from file
curl -v -X POST -d @telemetry-data-as-array.json http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
# Publish data as an object with timestamp (telemetry timestamp will be used)  using data from file
curl -v -X POST -d @telemetry-data-with-ts.json http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"