Topic filters define **MQTT-based subscriptions** and act as triggers for TBMQ HTTP Integration. When the broker receives a message matching configured **topic filters**, the integration processes it and forwards the data to the specified external system.

If the integration is configured with the topic filter:
```plaintext
tbmq/devices/+/status
```

Then, any message matching this pattern will trigger the integration, including:
```plaintext
tbmq/devices/device-01/status
tbmq/devices/gateway-01/status
```