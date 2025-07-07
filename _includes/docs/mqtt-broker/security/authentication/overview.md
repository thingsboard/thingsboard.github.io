* TOC
{:toc}

ThingsBoard MQTT Broker supports multiple authentication methods to validate clients connecting via MQTT protocol:
- **Basic** — Username and password-based authentication.
- **X.509 Certificate Chain** — Client authentication using an X.509 certificate presented during the TLS handshake.
- **JWT (JSON Web Token)** — Authenticates clients using a signed JWT passed in the password field of the CONNECT packet.
- **SCRAM** — Performs a secure challenge-response using hashed credentials to authenticate without sending the actual password (MQTT 5.0 only)

Each authentication method can be enabled or disabled based on your security requirements.

### Managing Authentication Providers

{% include docs/mqtt-broker/user-guide/ui/authentication-provider-control.md %}

Changes to provider status (enabled/disabled) affect how the **Authentication Execution Order** operates, since disabled methods are automatically skipped.

### Authentication Execution Order

The Authentication Execution Order setting in the **MQTT Authentication Settings** defines the priority in which the broker will evaluate the enabled authentication providers. How It Works:

- The broker attempts to authenticate an incoming MQTT client using the first available (enabled) method in the list.
- If authentication fails or the method is disabled, the broker moves to the next one in order.
- The process stops as soon as one provider successfully authenticates the client.
- Disabled providers are completely skipped.

**Example:** If the order is set to `X.509 Certificate Chain → Basic → JWT` and the certificate validation fails or the provider is disabled, the broker will attempt to authenticate using Basic credentials, and finally JWT if needed.

This ordered approach ensures flexibility and performance optimization by allowing the most reliable or secure method to be attempted first.

## Next steps

{% assign currentGuide = "SecurityGuide" %}{% include templates/mqtt-broker-guides-banner.md %}
