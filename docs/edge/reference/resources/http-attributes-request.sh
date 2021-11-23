
# for ThingsBoard Cloud

# Send HTTP attributes request
curl -v -X GET "https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2"

# for local ThingsBoard

# Send HTTP attributes request
curl -v -X GET http://localhost:8080/api/v1/$ACCESS_TOKEN/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2