Use this command to send the message. Replace $YOUR_PATH_TO_FILE and $YOUR_HTTP_ENDPOINT_URL with corresponding values.

```ruby
curl -v -X POST -F "data=@$YOUR_PATH_TO_FILE" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:multipart/form-data -H "$VALUE""
```

As an example:

```ruby
{"deviceName": "Sensor T1","deviceType": "Temperature Sensor","temperature": 33,"model": "test"}
```
