---
layout: docwithnav-mqtt-broker
title: Basic Authentication
description: Basic Authentication

security-authentication-basic:
  0:
    image: /images/mqtt-broker/features/security-authentication-basic-1.png
    title: 'Copy Basic credentials ID.'
  1:
    image: /images/mqtt-broker/features/security-authentication-basic-2.png
    title: 'Basic authentication credentials params: Client ID, Username and Password.'

security-authorization-basic:
  0:
    image: /images/mqtt-broker/features/security-authorization-basic-1.png
    title: 'Examples of rule patterns that permit publishing to topics starting with "country/" and subscribing to topics starting with "city/".'

authentication-provider-control:
  0:
    image: /images/mqtt-broker/security/auth-providers/providers-home-card.png
    title: 'Go to the Broker Settings card on the Home page to switch authentication providers.'
  1:
    image: /images/mqtt-broker/security/auth-providers/provider-table-switch.png
    title: 'On the Authentication Providers page, use the switch button in the table’s right column to enable or disable providers.'
  2:
    image: /images/mqtt-broker/security/auth-providers/basic-overview.png
    title: 'Basic authentication provider details.'

---

{% include docs/mqtt-broker/security/authentication/basic.md %}
