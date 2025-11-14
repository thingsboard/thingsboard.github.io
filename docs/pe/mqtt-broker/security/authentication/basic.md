---
layout: docwithnav-pe-mqtt-broker
title: Basic Authentication
description: Basic Authentication

security-authentication-basic:
  0:
    image: /images/pe/mqtt-broker/features/security-authentication-basic-1.png
    title: 'Copy Basic credentials ID.'
  1:
    image: /images/pe/mqtt-broker/features/security-authentication-basic-2.png
    title: 'Basic authentication credentials params: Client ID, Username and Password.'

security-authorization-basic:
  0:
    image: /images/pe/mqtt-broker/features/security-authorization-basic-1.png
    title: 'Examples of rule patterns that permit publishing to topics starting with "country/" and subscribing to topics starting with "city/".'

authentication-provider-control:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/provider-home-switch.png
    title: 'Go to the Broker Settings card on the Home page to switch authentication providers.'
  1:
    image: /images/pe/mqtt-broker/security/auth-providers/provider-table-switch.png
    title: 'On the Authentication > Providers page, use the switch button in the table’s right column to enable or disable providers.'
  2:
    image: /images/pe/mqtt-broker/security/auth-providers/basic/basic-overview.png
    title: 'Open the Authentication > Providers page, select the Basic row, and click the "Edit" button to configure the provider.'

tbmq-client-id-username-and-password:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/basic/auth-client-id-username-and-password.png
    title: ''
    
tbmq-tls-client-id-username-and-password:
  0:
    image: /images/pe/mqtt-broker/security/auth-providers/basic/tls-auth-client-id-username-and-password.png
    title: ''

---

{% assign docsPrefix = "pe/" %}
{% include docs/mqtt-broker/security/authentication/basic.md %}
