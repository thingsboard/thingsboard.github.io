curl -v -X POST -d @create-asset.json http://localhost:8080/api/relation \
--header "Content-Type:application/json" \
--header "X-Authorization: $JWT_TOKEN"