* TOC
{:toc}

In the same way as other ThingsBoard family products, TBMQ uses [JWT](https://jwt.io/) (JSON Web Tokens) to securely represent claims between the API client (such as browsers and scripts) and the platform. 
JWT tokens serve as a mechanism to exchange information securely. When a user logs in, their credentials are exchanged for a pair of JWT tokens: 
an access token, which is used to authenticate API calls, and a refresh token, which is used to obtain a new access token once the original expires.
These tokens contain essential information about the user’s identity and permissions, enabling secure communication with the platform.
For more information, please refer to the [Administration REST API](https://thingsboard.io/docs/mqtt-broker/rest-api/#swagger-ui) documentation.

Starting from version [2.2.0](/docs/mqtt-broker/releases/#v210-april-29-2025), TBMQ also supports JWT-based authentication for MQTT clients as one of its pluggable MQTT authentication providers.
This enables secure, flexible, and scalable identity verification without relying on static credentials like usernames or passwords.
Instead, clients present a signed token that contains all the necessary authentication information, allowing integration with centralized identity systems and improving overall security.

#### Authentication Flow

The MQTT client includes a signed JWT token in its connection request by placing it in the password field of the MQTT CONNECT packet.
TBMQ uses the configured secret key, public key, or JWKS endpoint to verify the token’s signature. 
If a JWKS endpoint is configured, TBMQ retrieves the list of public keys from the endpoint and uses them to validate the token dynamically.

If the signature is valid, TBMQ proceeds to check the token’s claims. It validates:

 - `exp` (expiration) claim to ensure the token is not expired
 - `nbf` (not before) claim to ensure the token is currently valid

Custom claim validations can also be configured — for example, requiring that specific claims match the client's `username` or `clientId`.

TBMQ also supports extracting role-based authorization patterns and client type from token claims. 
These values determine the client’s type (e.g., `DEVICE` or `APPLICATION`) and which topics they are allowed to publish or subscribe to.

The client is granted access only if the signature is valid and all required claims pass validation.

Currently, TBMQ performs JWT validation only at the time of connection. 
If the token expires after the connection is established, the client remains connected. 
This behavior may become configurable in a future release.

### Authorization

## Next steps

{% assign currentGuide = "SecurityGuide" %}{% include templates/mqtt-broker-guides-banner.md %}
