---
layout: docwithnav-mqtt-broker
title: Security
description: Security Configuration

---

* TOC
{:toc}

This guide will describe the available options to be able to enable authentication and authorization of the MQTT clients.

## Authentication

### Basic Authentication

To enable basic authentication (based on username, password, and clientId) you need to set `SECURITY_MQTT_BASIC_ENABLED` environment variable to `true` 
and create MQTT Client Credentials of type `MQTT_BASIC`.
Please follow [this guide](/docs/mqtt-broker/user-guide/ui/mqtt-client-credentials/) on how to create MQTT_BASIC credentials using Web UI 
or [this guide](/docs/mqtt-broker/mqtt-client-credentials-management/) using REST API.
Once the credentials are being created, the `credentialsId` field is auto-generated. See below for more information.

When the client connects, the combination of username, password, and clientId from the _CONNECT_ packet should be matched 
with the persisted credentials in order to authenticate the client. 
The matching is done by the auto-generated `credentialsId` field from MQTT Client Credentials.

Possible combinations of MQTT_BASIC credentials matchers:
- **clientId** - will check if connecting client has specified clientId;
- **username** - will check if connecting client has specified username;
- **clientId and username** - will check if connecting client has both specified clientId and username;
- **username and password** - will check if connecting client has both specified username and password;
- **clientId and password** - will check if connecting client has both specified clientId and password;
- **clientId, username and password** - will check if connecting client has specified clientId, username and password.

Generation of `credentialsId` is done as follows:

- credentialsId = username\|$CLIENT_USERNAME (when only username is present);
- credentialsId = client_id\|$CLIENT_ID (when only client id is present);
- credentialsId = mixed\|$CLIENT_USERNAME\|$CLIENT_ID (when both username and client id are present)

where $CLIENT_USERNAME - specified username, $CLIENT_ID - specified client id from the _CONNECT_ packet.

### TLS Authentication

ThingsBoard MQTT Broker supports authentication using TLS.
To enable TLS authentication first of all you need to [enable TLS listener](/docs/mqtt-broker/mqtt-listeners/) so that client's certificate chain is involved 
in the authentication process.

Afterward, you need to set `SECURITY_MQTT_SSL_ENABLED` environment variable to `true` and create MQTT Client Credentials of type `SSL`.
Please follow [this guide](/docs/mqtt-broker/user-guide/ui/mqtt-client-credentials/) on how to create SSL credentials using Web UI
or [this guide](/docs/mqtt-broker/mqtt-client-credentials-management/) using REST API.
Once the credentials are being created, the `credentialsId` field is auto-generated. See below for more information.

For each certificate in the chain, the common name (CN) is compared to the common names of the persisted credentials.
This means that if authentication is enabled, only clients connecting using certificates with the persisted common names will be authenticated.

Generation of `credentialsId` is done as follows:

- credentialsId = ssl\|$CERTIFICATE_COMMON_NAME

where $CERTIFICATE_COMMON_NAME - common name of the certificate from the chain.

### Authentication procedure

ThingsBoard MQTT Broker has a `SECURITY_MQTT_AUTH_STRATEGY` parameter with two values available - `BOTH` (default value) or `SINGLE`.

When both Basic and TLS authentications are enabled and `BOTH` value is set, `MQTT_BASIC` authentication will have a higher priority, 
which means that if the client successfully authenticates with basic credentials, the system will not attempt to authenticate it with `TLS` authentication.
If `MQTT_BASIC` fails, the authentication using `TLS` will be continued. If one of the authentication types is disabled, then another one will only be used.

When `SECURITY_MQTT_AUTH_STRATEGY` is set to `SINGLE`, then only `MQTT_BASIC` authentication will be used in case of client's connection to the TCP listener.
Respectively, only `TLS` authentication will be used in case of client's connection to the TLS listener.

## Authorization

After the user is authenticated it's possible to restrict the access to topics the client can publish/subscribe to.
You can do it both for TLS and Basic auth.

For both types of authorization ThingsBoard MQTT Broker uses regular expressions in order to allow users flexible control over auth rules.

For example to allow clients to publish/subscribe to all topics that start with **city/** you need to create auth rule **city/.***.

### Basic

For Basic type, authorization is configured by the **pubAuthRulePatterns** and **subAuthRulePatterns** of the corresponding MQTT Client Credentials.
So for each basic MQTT Client credentials you can configure the authorization rules for the topics these clients can access.
**pubAuthRulePatterns** and **subAuthRulePatterns** is based on regular expression syntax.
For example,
```
{
    "pubAuthRulePatterns": ["country/.*"],
    "subAuthRulePatterns": ["city/.*"]
}
```
{: .copy-code}
will allow clients to publish messages to topics that start with **country/** and to subscribe to topics that start with **city/**.

### TLS

For TLS type, authorization is configured by the **authRulesMapping** value of corresponding MQTT Client Credentials.
Here's a model of the credentials value:

```
{
    "parentCertCommonName": $parentCertCommonName,
    "authRulesMapping": $authRulesMapping
}
```
{: .copy-code}

Where:
- $parentCertCommonName - the common name that should be in the certificate from the chain,
- $authRulesMapping - the mappings to configure what restrictions do different keywords have.
  For example,
  ```
  {
      "example_1": {
	      "pubAuthRulePatterns": ["example_pub_topic/.*"],
	      "subAuthRulePatterns": ["example_sub_topic/.*"]
	  },
	  "example_2": {
          "pubAuthRulePatterns": [".*"],
		  "subAuthRulePatterns": [".*"]
      }
  }
  ```
  {: .copy-code}
  will allow clients connecting with the certificate that contains **example_1** in it's CN publish only to topics that start with **example_pub_topic/**
  and subscribe to topics that start with **example_sub_topic/**,
  and clients with the certificate that contains **example_2** to publish/subscribe to every topic.

**Note**, in case **pubAuthRulePatterns** or **subAuthRulePatterns** equals to `null` or an empty list (`[]`), this means the client can pub/sub to all topics.