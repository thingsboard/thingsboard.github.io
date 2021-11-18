The command to send a message to the CoAP server that is hosted on **int.thingsboard.cloud** will look like this:

```shell
echo -e -n '{"deviceName": "SN-001", "deviceType": "default", "temperature": 25.7, "humidity": 69}' | coap-client -m post coap://int.thingsboard.cloud/i/2ab11247-0fd2-20d6-9e3e-02c917561b45 -t application/json -f-
```
{: .copy-code}