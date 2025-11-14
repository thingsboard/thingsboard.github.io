* TOC
{:toc}

TBMQ provides set of security features designed to protect MQTT communication, control client access, and enforce topic-level permissions. 
These features cover key aspects of MQTT security — from connection level settings to fine-grained authorization rules — and offer flexible configuration options for a variety of deployment scenarios.

The overview page introduces the three core areas of MQTT security in TBMQ: connection level security, authentication, and authorization.
Each section below explains the role of these components, how they can be configured, and how they interact within the broker's security model.

## Connection level security

Connection-level security focuses on configuring how clients connect to the broker. 
It defines supported transport protocols, encryption options, and network-level parameters — all essential to establishing a secure communication channel before authentication and authorization are applied.
In TBMQ, this is achieved through the configuration of [MQTT listeners](/docs/{{docsPrefix}}mqtt-broker/security/listeners/), which support both encrypted and unencrypted protocols (TCP, TLS, WebSockets). 
Each listener exposes configurable properties — such as ports, host addresses, and performance tuning options — that can be set via configuration files or overridden using environment variables. 
For TLS and WebSocket Secure (WSS) listeners, encryption parameters such as certificates and supported protocols can also be configured.

## Authentication

Authentication verifies the identity of clients attempting to connect. It is the process of validating client credentials before granting access to the broker.
Supported authentication methods include: Basic (username/password), X.509 Certificate Chain, JWT, and SCRAM.


### Providers management

{% if docsPrefix != "pe/" %}
{% assign sinceVersion = "2.2" %}
{% include templates/mqtt-broker/since.md %}
{% endif %}

Authentication methods are implemented as pluggable authentication providers:

- [Basic](/docs/{{docsPrefix}}mqtt-broker/security/authentication/basic/) — Authenticates clients using a clientId, username, and password sent in the `CONNECT` packet.
- [X.509 Certificate Chain](/docs/{{docsPrefix}}mqtt-broker/security/authentication/x509/) — Uses the client’s X.509 certificate chain during TLS handshake for authentication.
- [JWT (JSON Web Token)](/docs/{{docsPrefix}}mqtt-broker/security/authentication/jwt/) — Authenticates clients using a signed JWT passed in the **password** field of the `CONNECT` packet.
- [SCRAM](/docs/{{docsPrefix}}mqtt-broker/security/authentication/scram/) — Performs a secure challenge-response using hashed credentials to authenticate without sending the actual password (MQTT 5.0 only).

Each provider can be individually enabled, disabled, and configured to meet requirements for different deployment use cases.

{% capture providerEditOnly %}
Adding or deleting authentication providers is not allowed. Users can only edit their configuration.
{% endcapture %}
{% include templates/warn-banner.md content=providerEditOnly %}

{% include docs/mqtt-broker/user-guide/ui/authentication-provider-control.md %}

### Providers execution order

{% if docsPrefix != "pe/" %}
{% assign sinceVersion = "2.2" %}
{% include templates/mqtt-broker/since.md %}
{% endif %}

TBMQ processes authentication providers in a configurable execution order.
This can be configured from the [MQTT Authentication Settings](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/settings/#mqtt-authentication) page designed to configure key MQTT authentication-related parameters.

{% include docs/mqtt-broker/user-guide/ui/authentication-settings.md %}

## Authorization

Authorization involves granting or denying access to specific resources or actions based on the authenticated client’s privileges.
To achieve this, define topic-level access control by applying configurable rules that determine whether a client can publish to or subscribe from specific topics. TBMQ uses regular expression–based topic patterns to enforce these rules. 
Authorization settings are typically configured per [client credentials](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/mqtt-client-credentials). Only JWT-based authentication supports defining authorization rules at the provider level, allowing dynamic, token-driven access control.

## Next steps

{% assign currentGuide = "SecurityGuide" %}{% include templates/mqtt-broker-guides-banner.md %}
