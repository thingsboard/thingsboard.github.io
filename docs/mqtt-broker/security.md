---
layout: docwithnav-mqtt-broker
title: Security
description: Security Configuration

---

* TOC
{:toc}

## Authentication

### TLS

ThingsBoard MQTT Broker supports authentication using TLS.
To enable TLS authentication first of all you need to [enable TLS listener](/docs/mqtt-broker/mqtt-listeners/).

Afterwards you need to set `SECURITY_MQTT_SSL_ENABLED` environment variable to `true` and create MQTT Client Credentials of type `SSL`.
Please follow [this guide](/docs/mqtt-broker/mqtt-client-credentials-management/) on how to create SSL credentials.

For each certificate in the chain the common name (CN) is compared to the common names of the persisted credentials.
This means that if authentication is enabled, only clients connecting using certificates with the persisted common names will have access to publishing and subscribing to topics.

### Basic Authentication

To enable basic authentication (based on username, password and clientId) you need to set `SECURITY_MQTT_BASIC_ENABLED` environment variable to `true` and create MQTT Client Credentials of type `MQTT_BASIC`.
Please follow [this guide](/docs/mqtt-broker/mqtt-client-credentials-management/) on how to create MQTT_BASIC credentials.

Possible combinations of MQTT_BASIC credentials:
- **clientId** - will check if connecting client has specified clientId
- **clientId and username** - will check if connecting client has both specified clientId and username
- **username and password** - will check if connecting client has both specified username and password
- **clientId, username and password** - will check if connecting client has specified clientId, username and password

## Authorization

After the user is authenticated it's possible to restrict the access to some topics.
You can do it both for TLS and Basic auth.

For both types of authorization ThingsBoard MQTT Broker uses regular expressions in order to allow users flexible control over auth rules.

For example to allow clients to publish/subscribe to all topics that start with **city/** you need to create auth rule **city/.***.

### TLS

For TLS type, authorization is configured by the **authorizationRulesMapping** value of corresponding MQTT Client Credentials.
Here's a model of the credentials value:

```
{
    "parentCertCommonName": $parentCertCommonName,
    "authorizationRulesMapping": $authorizationRulesMapping
}
```
{: .copy-code}

Where:
- $parentCertCommonName - the common name that should be in the certificate from the chain
- $authorizationRulesMapping - the mappings to configure what restrictions do different keywords have.
  For example,
  ```
  {
      "example_1": "example_topic/.*",
      "example_2": ".*"
  }
  ```
  {: .copy-code}
  will allow clients connecting with the certificate that contains **example_1** in it's CN pub/sub only to topics that start with **example_topic/** 
  and clients with the certificate that contains **example_2** to pub/sub every topic.

### Basic

For Basic type, authorization is configured by the **authorizationRulePatterns** of the corresponding MQTT Client Credentials.
So for each basic MQTT Client credentials you can configure the authorization rules for the topics these clients can access.
As for TLS authorization, **authorizationRulePatterns** is based on regular expression syntax.
For example,
```
["country/.*", "city/.*"]
```
{: .copy-code}
will allow clients pub/sub to topics that start with **country/** and **city/**.
