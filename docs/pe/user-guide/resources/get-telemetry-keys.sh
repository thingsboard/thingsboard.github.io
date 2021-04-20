curl -v -X GET http://localhost:8080/api/plugins/telemetry/DEVICE/ac8e6020-ae99-11e6-b9bd-2b15845ada4e/keys/timeseries \
--header "Content-Type:application/json" \
--header "X-Authorization: $JWT_TOKEN"