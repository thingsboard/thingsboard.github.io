Use this command to send the message. Replace $DEVICE_NAME, $DEVICE_TYPE and $YOUR_HTTP_ENDPOINT_URL with corresponding values.

```ruby
curl -v -X POST -d "$DEVICE_NAME,$DEVICE_TYPE,33,test" $YOUR_HTTP_ENDPOINT_URL  -H "Content-Type:text/plain -H "$VALUE"" 
```
