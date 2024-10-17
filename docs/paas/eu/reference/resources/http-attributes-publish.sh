# Publish client-side attributes update. Replace $ACCESS_TOKEN with corresponding value.
curl -v -X POST --data "{"attribute1": "value1", "attribute2":true, "attribute3": 43.0}" {{httpsUrl}}/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
# For example, $ACCESS_TOKEN is ABC123:
curl -v -X POST --data "{"attribute1": "value1", "attribute2":true, "attribute3": 43.0}" {{httpsUrl}}/api/v1/ABC123/attributes --header "Content-Type:application/json"

# Publish client-side attributes update from file. Replace $ACCESS_TOKEN with corresponding value.
curl -v -X POST -d @new-attributes-values.json {{httpsUrl}}/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
# For example, $ACCESS_TOKEN is ABC123:
curl -v -X POST -d @new-attributes-values.json {{httpsUrl}}/api/v1/ABC123/attributes --header "Content-Type:application/json"