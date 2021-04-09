curl -v -X GET "http://localhost:8080/api/plugins/telemetry/DEVICE/ac8e6020-ae99-11e6-b9bd-2b15845ada4e/values/timeseries?keys=gas,temperature&startTs=1479735870785&endTs=1479735871858&interval=60000&limit=100&agg=AVG" \
--header "Content-Type:application/json" \
--header "X-Authorization: $JWT_TOKEN"