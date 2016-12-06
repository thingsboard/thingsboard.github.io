# Publish client-side attributes update
curl -v -X POST -d @new-attributes-values.json http://localhost:8080/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"