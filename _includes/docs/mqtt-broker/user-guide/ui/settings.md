
* TOC
{:toc}

### Security settings

To log into TBMQ, the [user](/docs/mqtt-broker/user-guide/ui/users/) uses a username and password. You can enhance the security of your account by updating your security settings.

#### Password policy

The password policy sets the rules that passwords for the TBMQ users must meet. You can specify the following options to ensure stronger security:
- **Minimum password length** - the parameter determines the minimum number of characters in the password. Minimum password length should be in a range from 6 to 50;
- **Maximum password length** - the parameter determines the maximum number of characters in the password. Maximum password length should be greater than minimum length;
- **Minimum number of uppercase letters** - set the minimum number of uppercase letters in the password;
- **Minimum number of uppercase letters** - set the minimum number of lowercase letters in the password;
- **Minimum number of digits** - specify minimum number of digits in the password;
- **Minimum number of special characters** - specify the minimum number of special characters in the password;
- **Password expiration period in days** - force expiration of the password. After the password expires, TBMQ will require the user to change it. This ensures users regularly update their passwords;
- **Password reuse frequency in days** - disallow to use the same password for the defined number of days;
- **Allow whitespace** - if the checkbox is checked, spaces are allowed in the password;
- **Force to reset password if not valid** - users with a password that fails the validation will need to reset their password via email.

After configuring the desired password policy settings, apply the changes by pressing the "Save" button.

For more information and to see other security-related settings, please refer to the [Security documentation](/docs/mqtt-broker/security/).

![image](/images/mqtt-broker/user-guide/ui/settings-password-policy.png)

### Connectivity settings

In this section, you can override the default **host** and **port** for **MQTT, MQTTS, WS**, and **WSS** protocols.
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

### WebSocket Client settings

In this section, you can configure additional settings related to the [WebSocket Client](/docs/mqtt-broker/user-guide/ui/websocket-client/) - a browser-accessible tool that provides management of MQTT clients, subscription to topics, receiving messages, and publishing messages.

**Log MQTT client activity** feature can be helpful in debugging connection issues and monitoring message flows by providing real-time client activity logs. 
If set to true, you will see logs for the following [MQTT.js](https://github.com/mqttjs/MQTT.js) events in the browser developer console:
  1. **Connect**. Triggered when a client successfully connects to the broker.
  2. **Disconnect**. Triggered when a client disconnects from the broker.
  3. **Reconnect**. Triggered when a client attempts to reconnect after a disconnection.
  4. **Message**. Triggered when a message is received by the client.
  5. **Error**. Triggered when an error occurs during communication.
  6. **End**. Triggered when the client ends the connection gracefully.
  7. **Close**. Triggered when the connection is closed by the client or broker.
  8. **Packet receive**. Triggered when a packet is received from the broker.
  9. **Packet send**. Triggered when a packet is sent to the broker.
  10. **Offline**. Triggered when the client goes offline.
  11. **Outgoing empty**. Triggered when all outgoing messages have been sent.

To apply changes press the "Save" button.
