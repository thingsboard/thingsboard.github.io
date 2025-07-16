# Send subscribe attributes request with 20 seconds timeout. Replace $ACCESS_TOKEN with corresponding value.
curl -v -X GET {{httpsUrl}}/api/v1/$ACCESS_TOKEN/attributes/updates?timeout=20000
# For example, $ACCESS_TOKEN is ABC123:
curl -v -X GET {{httpsUrl}}/api/v1/ABC123/attributes/updates?timeout=20000
