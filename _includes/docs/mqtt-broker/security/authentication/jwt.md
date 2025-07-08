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

## Authentication Flow

The MQTT client includes a signed JWT token in its connection request by placing it in the `password` field of the `MQTT CONNECT` packet.
TBMQ uses the configured secret key, public key, or JWKS endpoint to verify the token’s signature. 
If a JWKS endpoint is configured, TBMQ retrieves the list of public keys from the endpoint and uses them to validate the token dynamically.

If the signature is valid, TBMQ proceeds to check the token’s claims. It validates:

 - `exp` (expiration) claim to ensure the token is not expired
 - `nbf` (not before) claim to ensure the token is currently valid

Custom claim validations can also be configured — for example, requiring that specific claims match the client's `username` or `clientId`.

TBMQ also supports extracting role-based authorization patterns and client type from token claims. 
These values determine the client’s type (e.g., `DEVICE` or `APPLICATION`) and which topics they are allowed to publish or subscribe to.

The client is granted access only if the signature is valid and all required claims pass validation.

{% capture future-release-tip %}

Currently, TBMQ performs JWT validation only at the time of connection.
If the token expires after the connection is established, the client remains connected.
This behavior may become configurable in a future release.

{% endcapture %}
{% include templates/info-banner.md content=future-release-tip %}

## Configure Provider

JWT authentication for MQTT clients is configured through the TBMQ Admin UI. 

{% include images-gallery.html imageCollection="configure-jwt-auth-provider" %}

This section explains how to set up:

- signature verification
- authorization rules
- custom claim checks (optional)
- dynamic client type classification (optional)

Once the configuration is complete, you can enable the provider to start authenticating clients using JWT tokens.

### Signature Verification

The Signature verifier mechanism determines how TBMQ validates the JWT token's signature 
to ensure the token was issued by a trusted authority and hasn’t been tampered with. There are two options:

 - Algorithm-based (HMAC or PEM) - Uses preconfigured secret or public key to verify incoming tokens.
 - JWKS (JSON Web Key Set) - Dynamically fetch a list of public keys from a remote JWKS endpoint. 
   This is commonly used with identity platforms that publish key sets (e.g., Auth0, AWS Cognito, Keycloak).

{% include images-gallery.html imageCollection="configure-signature-verifier-mechanism" %}

#### HMAC-based

HMAC is a symmetric algorithm that uses the same secret for both signing and verifying JWTs.
This is often used in internal systems or when tokens are issued by a trusted service you control.

{% include images-gallery.html imageCollection="configure-hmac-based-verifier-mechanism" %}

Supported algorithms: **HS256, HS384, HS512**. The secret should match the one used to sign the tokens.

#### Public key (PEM)

Use this method if your JWTs are signed with an asymmetric private key.
TBMQ will use the matching public key in PEM format to verify the signature.

{% include images-gallery.html imageCollection="configure-pem-based-verifier-mechanism" %}

Supported key types: **RSA, EC, and Ed25519**. Make sure the uploaded key matches the private key used to sign the JWTs.

#### JWKS

JWKS (JSON Web Key Set) allows TBMQ to fetch a list of public keys from a remote endpoint.
This is especially useful when using identity providers that rotate signing keys automatically.
TBMQ will periodically download and cache keys from the endpoint and use them to verify incoming tokens.

{% include images-gallery.html imageCollection="configure-jwks-based-verifier-mechanism" %}

### JWT Claims and Access Control Flow

After the JWT token is successfully verified, TBMQ performs a multi-stage validation and classification process 
to determine if the client is allowed to connect, how it should be identified, and what topics it can access.

#### Standard Claim Validation

Before anything else, TBMQ checks a few standard claims embedded in the JWT:

- `exp` (expiration) claim to ensure the token is not expired
- `nbf` (not before) claim to ensure the token is currently valid

If the token is expired or not yet valid, the client connection is rejected immediately. 
These checks happen automatically and do not require any configuration.

#### Authentication Claims (Optional)

You can define custom claim validation rules as key-value pairs, where each pair consists of:

 - Claim – the name of the claim in the JWT
 - Value – the expected value to compare against

If any listed claim does not match the actual value in the token, the client’s authentication will fail — even if the token’s signature is valid.

To support dynamic checks, you can use placeholders like <code>${username}</code> and <code>${clientId}</code>. 
These will resolve to the MQTT client’s username or client ID at connection time. 
This mechanism adds an extra layer of security by ensuring that the JWT is not only valid, but also intended for the specific MQTT client making the request.

{% include images-gallery.html imageCollection="configure-auth-claims" %}

#### Client Type Configuration (Optional)

This section configures how the broker determines the client type during authentication. Either `DEVICE` or `APPLICATION`.

By default, all clients are assigned the type selected using the "Device / Application" toggle. 
You can optionally define one or more claim conditions. If all conditions match, TBMQ will assign the opposite client type.
This allows you to classify clients dynamically during authentication.

{% include images-gallery.html imageCollection="configure-client-type" %}

#### Authorization

After a client has successfully passed the validation and classification steps, TBMQ applies topic-level authorization rules
to determine which topics the client is allowed to publish to and subscribe from.

For JWT-based clients, TBMQ supports two layers of regex-based authorization rules:

 - Default authorization rules – manually configured topic filters defined in the provider settings
 - Dynamic authorization rules – topic filters extracted from JWT claims at runtime (if configured)

You can define default topic filters for both publish and subscribe directions using regular expressions. 
These rules are always required and serve as a fallback if dynamic rules are not configured or cannot be applied.

Examples of regex filters:

 - `.*` – allow all topics
 - `sensors/.*` – allow access only to topics that begin with `sensors/`
 - (empty field) – deny access to that direction

To enable dynamic authorization, specify the names of JWT claims that contain the publish and/or subscribe topic filters (e.g., pub, sub). 
If present, TBMQ will attempt to extract a list of topic patterns from these claims and apply them as the client's effective authorization rules.

{% capture dynamic-filters-claim-type-warn %}

Dynamic claims must contain an array of strings. Each string will be treated as a topic filter pattern and compiled as a regular expression.

{% endcapture %}
{% include templates/info-banner.md content=dynamic-filters-claim-type-warn %}

If the claim is missing or malformed, TBMQ gracefully falls back to the default rule for that direction.
This fallback behavior is independent for publish and subscribe. You can use a dynamic rule for one and a default for the other.

To better understand how default and dynamic authorization rules work together, consider the following example.

A client connects with a JWT that includes these claims:

```json
{
  "pub": ["devices/.*/data"],
  "sub": ["sensors/.*/cmd", "alerts/.*"]
}
```

In this case:

 - The `pub` claim overrides the default publish rule and **restricts** access to `devices/.*/data`.
 - The `sub` claim **extends** the default subscribe rule by additionally allowing `alerts/.*`.

{% include images-gallery.html imageCollection="configure-jwt-authorization" %}

This demonstrates how dynamic rules can be used to customize access per client while still providing reliable fallbacks when needed.

## Next steps

{% assign currentGuide = "SecurityGuide" %}{% include templates/mqtt-broker-guides-banner.md %}
