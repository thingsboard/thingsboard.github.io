---
layout: docwithnav-pe-mqtt-broker
title: JWT Authentication
description: JWT Authentication

configure-jwt-auth-provider:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/configure-jwt-auth-provider.png
    title: 'Open the Authentication > Providers page, select the JWT row, and click the "Edit" button to configure the provider.'
configure-signature-verifier-mechanism:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/configure-signature-verifier-mechanism.png
    title: 'Select the verification type that matches how your tokens are issued. If unsure, HMAC-based is usually the easiest to start with during testing.'
configure-hmac-based-verifier-mechanism:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/configure-hmac-based-verifier-mechanism.png
    title: 'Enter a raw shared secret. This secret will be used to verify JWTs signed using symmetric algorithms such as HS256, HS384, or HS512.'
configure-pem-based-verifier-mechanism:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/configure-pem-based-verifier-mechanism.png
    title: 'Upload a PEM-encoded public key file. TBMQ will use this key to verify JWTs signed with the corresponding private key.'
configure-jwks-based-verifier-mechanism:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/configure-jwks-based-verifier-mechanism-0.png
    title: 'Enter the JWKS endpoint URL, which TBMQ will use to fetch the JSON Web Key Set for token signature verification.'
  1:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/configure-jwks-based-verifier-mechanism-1.png
    title: 'Set the refresh interval in seconds. This controls how often TBMQ retrieves the JWKS from the remote endpoint.'
  2:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/configure-jwks-based-verifier-mechanism-2.png
    title: 'Select the credentials type for accessing the JWKS endpoint. In this case, Anonymous is selected, meaning no authentication is required.'
  3:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/configure-jwks-based-verifier-mechanism-3.png
    title: 'Add a custom HTTP header to JWKS requests. This example shows the Content-Type: application/json header and a placeholder for an additional custom header.'
configure-auth-claims:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/configure-auth-claims.png
    title: 'Authentication claims example: "sub" and "mqtt_user" match MQTT client ID and username; "env" is checked against static value "prod".'
configure-client-type:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/configure-client-type.png
    title: 'Client type is set to "DEVICE" by default. If the JWT contains claim "role" with the value "app", the client will be classified as "APPLICATION".'
configure-jwt-authorization:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/configure-jwt-authorization.png
    title: 'The JWT claim "pub_rules" restricts publish access to "devices/.*/data", while claim "sub_rules" expands subscribe access to include "alerts/.*".'
enable-and-save-jwt-provider:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/enable-and-save-jwt-provider.png
    title: 'Enable the JWT authentication provider and save the configuration.'
jwt-validate:
  0:
    image: /images/mqtt-broker/security/auth-providers/jwt/jwt-validate.png
    title: ''
jwt-mqtt-example:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/jwt-mqtt-example.png
    title: ''
jwt-mqtts-example:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/jwt/jwt-mqtts-example.png
    title: ''
---

{% assign docsPrefix = "pe/" %}
{% include docs/mqtt-broker/security/authentication/jwt.md %}
