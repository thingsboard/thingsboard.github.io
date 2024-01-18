# Send subscribe attributes request with 20 seconds timeout. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
curl -v -X GET http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes/updates?timeout=20000
# For example, $THINGSBOARD_HOST_NAME reference your local installation, $ACCESS_TOKEN is ABC123:
curl -v -X GET http://localhost:8080/api/v1/ABC123/attributes/updates?timeout=20000