In the **Connectivity Settings** page you can override the default **host** and **port** for the following protocols:
* **MQTT**. The TCP listener port for plain MQTT connections.
* **MQTTS**.  The SSL/TLS port for secure MQTT connections.
* **WS**. The WebSocket listener port for MQTT over WebSockets.
* **WSS**. The secure WebSocket listener port for MQTT over secure WebSockets.

Host refers to the hostname or IP address the server binds to. The **default host** for the UI is `window.location.hostname`, which dynamically uses the hostname of the web page's URL.

| Protocol  | Default Port | Port Variable              | Bind Address Variable        |
|-----------|--------------|----------------------------|------------------------------|
| **MQTT**  | `1883`       | `LISTENER_TCP_BIND_PORT`   | `LISTENER_TCP_BIND_ADDRESS`  |
| **MQTTS** | `8883`       | `LISTENER_SSL_BIND_PORT`   | `LISTENER_SSL_BIND_ADDRESS`  |
| **WS**    | `8084`       | `LISTENER_WS_BIND_PORT`    | `LISTENER_WS_BIND_ADDRESS`   |
| **WSS**   | `8085`       | `LISTENER_WSS_BIND_PORT`   | `LISTENER_WSS_BIND_ADDRESS`  |

These custom values will be used in various parts of the TBMQ application where protocol-specific connectivity is required. Here are two key examples:

* **Check connectivity** window. Uses the **MQTT** connectivity settings to generate commands with custom host and port.
* **Add WebSocket Connection** window. Uses the **WS** connectivity settings to auto-generate a WebSocket connection URL address with a custom host and port.

{% include images-gallery.html imageCollection="settings-connectivity-settings" %}
