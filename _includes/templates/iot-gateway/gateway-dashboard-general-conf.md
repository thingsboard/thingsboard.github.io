General - this tab contains the main settings, namely:
- Remote Configuration - enables remote configuration and management of the gateway.
- Remote Shell - enables remote control of the operating system with the gateway from the Remote Shell widget.
- Platform host - hostname or IP address of platform server.
- Platform port - port of MQTT service on platform server.
- Security type (you can read more about them [here](/docs/iot-gateway/configuration/#subsection-security)) - currently 3 types of security are supported for remote configuration:
  - Access Token.
  - TLS + Access Token.
  - Username and Password.
  - TLS + Private Key (**unsupported yet**).
- Report strategy (you can read more [here](/docs/iot-gateway/features-overview/report-strategy/)) - strategy for sending gateway status to ThingsBoard:
  - On report period - sends gateway status after the report period.
  - On value change - sends gateway status when the value changes.
  - On value change or report period - sends gateway status when the value changes or report period.
  - On received - sends gateway status after receiving data from the device (default strategy).

![](/images/gateway/dashboard/gateway-dashboard-general-conf.png)
