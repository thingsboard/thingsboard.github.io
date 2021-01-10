```bash
mosquitto_pub -d -q 1 -h "localhost" -p "11883" -t "v1/devices/me/telemetry" -u "ABC123" -m {"temperature":49}
```
{: .copy-code}
