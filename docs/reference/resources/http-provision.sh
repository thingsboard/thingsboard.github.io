# Provision device
curl -v -X POST -d @provision-request.json http://localhost:8080/api/v1/provision --header "Content-Type:application/json"