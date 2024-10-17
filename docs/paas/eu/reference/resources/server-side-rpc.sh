curl -v -X POST -d @set-gpio-request.json http://localhost:8080/api/plugins/rpc/twoway/$DEVICE_ID \
--header "Content-Type:application/json" \
--header "X-Authorization: $JWT_TOKEN"
