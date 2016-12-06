# Send subscribe attributes request with 20 seconds timeout
curl -v -X GET http://localhost:8080/api/v1/$ACCESS_TOKEN/attributes/updates?timeout=20000