For the TBMQ 1.3.0 version, the installation scripts were updated to contain a new 8084 port for MQTT over WebSockets.
This is needed for the correct work with the [WebSocket client page](/docs/mqtt-broker/user-guide/ui/websocket-client/).

Please pull the v1.3.0 configuration files or modify your existing ones to include a new port entry.
To find more details please visit the following [link](https://github.com/thingsboard/tbmq/pull/111/files).

Once the required changes are made, you should be able to connect the MQTT client on the WebSocket client page.
Otherwise, please [contact us](https://github.com/thingsboard/tbmq/issues), so we can answer any questions and provide our help if needed.

