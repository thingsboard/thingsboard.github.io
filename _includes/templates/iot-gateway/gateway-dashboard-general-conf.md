![](https://img.thingsboard.io/gateway/dashboard/gateway-dashboard-general-conf.png)

General - this tab contains the main settings, namely:
- Remote Configuration - enables remote configuration and management of the gateway;
- Remote Shell - enables remote control of the operating system with the gateway from the Remote Shell widget;
- ThingsBoard host - hostname or IP address of ThingsBoard server;
- ThingsBoard port - port of MQTT service on ThingsBoard server;
- Security type (you can read more about them [here](/docs/iot-gateway/configuration/#subsection-security)) - currently 3 types of security are supported for remote configuration:
  - Access Token;
  - TLS + Access Token;
  - Username and Password;
  - TLS + Private Key (**unsupported yet**).
