# Publish client-side attributes update. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
curl -v -X POST --data "{"attribute1": "value1", "attribute2":true, "attribute3": 43.0}" http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
# For example, $THINGSBOARD_HOST_NAME reference ThingsBoard Cloud (North America), $ACCESS_TOKEN is ABC123:
curl -v -X POST --data "{"attribute1": "value1", "attribute2":true, "attribute3": 43.0}" https://thingsboard.cloud/api/v1/ABC123/attributes --header "Content-Type:application/json"
# For example, $THINGSBOARD_HOST_NAME reference ThingsBoard Cloud (Europe), $ACCESS_TOKEN is ABC123:
curl -v -X POST --data "{"attribute1": "value1", "attribute2":true, "attribute3": 43.0}" https://eu.thingsboard.cloud/api/v1/ABC123/attributes --header "Content-Type:application/json"

# Publish client-side attributes update from file. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
curl -v -X POST -d @new-attributes-values.json http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
# For example, $THINGSBOARD_HOST_NAME reference ThingsBoard Cloud (North America), $ACCESS_TOKEN is ABC123:
curl -v -X POST -d @new-attributes-values.json https://thingsboard.cloud/api/v1/ABC123/attributes --header "Content-Type:application/json"
# For example, $THINGSBOARD_HOST_NAME reference ThingsBoard Cloud (Europe), $ACCESS_TOKEN is ABC123:
curl -v -X POST -d @new-attributes-values.json https://eu.thingsboard.cloud/api/v1/ABC123/attributes --header "Content-Type:application/json"