You can override the default **host** and **port** for **MQTT, MQTTS, WS**, and **WSS** protocols.
These custom values will be used in various parts of the TBMQ application where protocol-specific connectivity is required.

* **Host**. The hostname or IP address of the server. The default value is set to `window.location.hostname`, which is the hostname of the web page's URL.
* **Port**. Default values:
    * **MQTT** - `1883`. The TCP listener port for plain MQTT connections (`LISTENER_TCP_BIND_PORT` environment variable).
    * **MQTTS** - `8883`. The SSL/TLS port for secure MQTT connections (`LISTENER_SSL_BIND_PORT`).
    * **WS** - `8084`. The WebSocket listener port for MQTT over WebSockets (`LISTENER_WS_BIND_PORT`).
    * **WSS** - `8085`. The secure WebSocket listener port for MQTT over secure WebSockets (`LISTENER_WSS_BIND_PORT`).

Here are two examples of pages where the custom host and port settings are applied:
* **Check connectivity** window. Uses the **MQTT** connectivity settings to generate commands with custom host and port.
* **Add WebSocket Connection** window. Uses the **WS** connectivity settings to auto-generate a WebSocket connection URL address with a custom host and port.

{% include images-gallery.html imageCollection="settings-connectivity-settings" %}
