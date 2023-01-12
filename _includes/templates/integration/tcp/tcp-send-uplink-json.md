The command to send a message to the TCP server that is running on localhost (127.0.0.1) will look like this:

```shell
echo -e -n '{"deviceName": "SN-002", "deviceType": "default", "temperature": 25.7, "humidity": 69}' | nc -q1 -w1 127.0.0.1 10560
```
{: .copy-code}

![image](/images/user-guide/integrations/tcp/tcp-terminal-json-uplink-message-1.png)

If you want to send a message back to the device using **Downlink,** the command will look like this:

```shell
echo -e -n '{"deviceName": "SN-002", "deviceType": "default", "temperature": 25.7, "humidity": 69}' | nc -w60 127.0.0.1 10560
```
{: .copy-code}

![image](/images/user-guide/integrations/tcp/tcp-terminal-json-downlink-message-1.png)