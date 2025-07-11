* TOC
{:toc}

TBMQ includes comprehensive security features designed to protect MQTT communication and control client access. These features cover connection-level security, authentication, and authorization.

**MQTT Listeners** support both encrypted and unencrypted protocols, including TCP, TLS, and WebSockets. Each listener can be configured with custom ports, host addresses, and credential types to meet the security needs of different environments.

**Authentication** ensures that only verified MQTT clients can connect to the broker. TBMQ supports several authentication methods such as Basic, X.509 certificates, JWT, and SCRAM, all of which can be enabled, disabled, and prioritized.

### MQTT listeners

TBMQ provides flexible options for configuring how it accepts client connections across multiple protocols, including **MQTT over TCP**, **SSL/TLS**, and **WebSockets**.
Each listener can be enabled or disabled and customized to use specific host addresses and ports, allowing the broker to adapt to different network environments. 
Secure connections support standard credential formats and optional two-way TLS authentication.
Additionally, custom host and port values can be set through the UI, making it easy to adjust connectivity settings without modifying configuration files.

### Authentication

TBMQ offers various options to manage **authentication** and **authorization** for MQTT clients in accordance with your specific requirements and infrastructure.

**Authentication** refers to the process of verifying the identity of MQTT clients connecting to the broker.
It ensures that only authenticated clients can access the system.
The guide will explore different authentication mechanisms such as basic authentication, and SSL/TLS client certificate authentication.
It will explain how to configure and enable these authentication methods based on your security needs.

**Authorization**, on the other hand, involves granting or denying access to specific resources or actions based on the authenticated client's privileges.
You will learn how to assign topic authorization rules to clients to control their permissions and restrict their actions within the MQTT system.

By understanding and implementing the authentication and authorization options outlined in this guide,
you can ensure secure and controlled access to the MQTT broker, protecting your infrastructure and data from unauthorized access or misuse.

#### Providers management

ThingsBoard MQTT Broker supports multiple authentication methods to validate clients connecting via MQTT protocol:
- **Basic** — Username and password-based authentication.
- **X.509 Certificate Chain** — Client authentication using an X.509 certificate presented during the TLS handshake.
- **JWT (JSON Web Token)** — Authenticates clients using a signed JWT passed in the password field of the CONNECT packet.
- **SCRAM** — Performs a secure challenge-response using hashed credentials to authenticate without sending the actual password (MQTT 5.0 only).

{% assign sinceVersion = "2.2" %}
{% include templates/mqtt-broker/since.md %}

{% include docs/mqtt-broker/user-guide/ui/authentication-provider-control.md %}

#### Settings

{% assign sinceVersion = "2.2" %}
{% include templates/mqtt-broker/since.md %}

The **MQTT Authentication Settings** page provides a place in the UI to configure key authentication-related parameters for MQTT clients. 

##### Authentication execution order

{% include docs/mqtt-broker/user-guide/ui/authentication-settings.md %}

**Example:** If the order is set to `X.509 Certificate Chain → Basic → JWT` and the certificate validation fails or the provider is disabled, the broker will attempt to authenticate using Basic credentials, and finally JWT if needed.

This ordered approach ensures flexibility and performance optimization by allowing the most reliable or secure method to be attempted first.

## Next steps

{% assign currentGuide = "SecurityGuide" %}{% include templates/mqtt-broker-guides-banner.md %}
