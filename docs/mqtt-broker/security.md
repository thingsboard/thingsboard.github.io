---
layout: docwithnav-mqtt-broker
title: Security
description: Security

security-authentication-basic:
  0:
    image: /images/mqtt-broker/features/security-authentication-basic-1.png
    title: 'Copy Basic credentials ID.'
  1:
    image: /images/mqtt-broker/features/security-authentication-basic-2.png
    title: 'Basic authentication credentials params: Client ID, Username and Password.'
    
security-authentication-tls:
  0:
    image: /images/mqtt-broker/features/security-authentication-tls-1.png
    title: 'Copy TLS credentials ID.'
  1:
    image: /images/mqtt-broker/features/security-authentication-tls-2.png
    title: 'TLS authentication with "Use certificate CN regex" disabled to match certificate common name by exact match.'
  2:
    image: /images/mqtt-broker/features/security-authentication-tls-3.png
    title: 'TLS authentication with "Use certificate CN regex" enabled to match certificate common name using a regex pattern.'

security-authorization-basic:
  0:
    image: /images/mqtt-broker/features/security-authorization-basic-1.png
    title: 'Examples of rule patterns that permit publishing to topics starting with "country/" and subscribing to topics starting with "city/".'
    
security-authorization-tls:
  0:
    image: /images/mqtt-broker/features/security-authorization-tls-1.png
    title: 'Examples of rule patterns for allowing all or forbidding all.'

---

{% include docs/mqtt-broker/security.md %}
