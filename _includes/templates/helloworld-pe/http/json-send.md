Use this command to send the message. Replace $DEVICE_NAME, $DEVICE_TYPE and $YOUR_HTTP_ENDPOINT_URL with corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"deviceType\":\"$DEVICEtype\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json -H "$VALUE""
```
