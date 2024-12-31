---
layout: docwithnav-paas-eu
assignees:
- ashvayka
title: X.509 Certificate Based Authentication
description: ThingsBoard  X.509 Certificate based authentication for IoT devices and projects.

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}

X.509 Certificates are used to setup [mutual](https://en.wikipedia.org/wiki/Mutual_authentication) (two-way) authentication for MQTT over TLS.
It is similar to [access token](/docs/{{docsPrefix}}user-guide/access-token/) authentication, but uses X.509 Certificate instead of token.

Instructions below will describe how to connect MQTT client using X.509 Certificate to ThingsBoard Cloud.

<br>In particular, there are two strategies that can be used for establishing connection between client and ThingsBoard:

- **X.509 Certificate chain** - *recommended*. <br>
  Configure ThingsBoard to trust all client certificates from a specific trust anchor (*intermediate certificate*).
  The device name is automatically discovered from the certificate Common Name using configurable regular expression.
  This feature eliminates the need for manual certificate updates on each device when certificate rotation occurs.
  Furthermore, it allows auto-provisioning new devices over MQTT, if *Create new devices* is enabled in the configuration.
- **X.509 Certificate.** <br> Configure ThingsBoard to accept connections from the specific devices using pre-configured client certificates.

{% capture contenttogglespecx509 %}
X.509 Certificate chain <small>(recommended)</small>%,%x509Chain%,%templates/ssl/certificates-chain.md%br%
X.509 Certificate%,%X509Leaf%,%templates/ssl/certificates-leaf.md%br%{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardX509" toggle-spec=contenttogglespecx509 %}
