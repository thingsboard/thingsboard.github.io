---
layout: docwithnav-mqtt-broker
title: Security
description: Security Configuration

---

* TOC
{:toc}

This guide describes the options available to enable **authentication** and **authorization** of the MQTT clients depending on your requirements and infrastructure.

## Authentication

### Basic Authentication

To enable basic authentication based on username, password, and clientId, you need to do the following:

1. Set the `SECURITY_MQTT_BASIC_ENABLED` environment variable to `true`.
2. Create MQTT client credentials of type `MQTT_BASIC` using either the [Web UI guide](/docs/mqtt-broker/user-guide/ui/mqtt-client-credentials/) or the [REST API guide](/docs/mqtt-broker/mqtt-client-credentials-management/). 
3. Once the credentials are created, the credentialsId field is auto-generated. See below for more information.

When a client connects, the combination of the username, password, and clientId from the _CONNECT_ packet is matched with the persisted credentials to authenticate the client. 
The matching is based on the auto-generated `credentialsId` field from the MQTT client credentials.

The following are the **possible combinations** of MQTT_BASIC credentials matchers:
- **clientId** - checks if the connecting client has specified clientId.
- **username** - checks if the connecting client has specified a username.
- **clientId and username** - checks if the connecting client has specified both clientId and username.
- **username and password** - checks if the connecting client has specified both username and password.
- **clientId and password** - checks if the connecting client has specified both clientId and password.
- **clientId, username and password** - checks if the connecting client has specified clientId, username, and password.

The `credentialsId` is generated as follows:

- credentialsId = username\|$CLIENT_USERNAME (when only username is present);
- credentialsId = client_id\|$CLIENT_ID (when only client ID is present);
- credentialsId = mixed\|$CLIENT_USERNAME\|$CLIENT_ID (when both username and client ID are present)

where $CLIENT_USERNAME refers to the specified username  and $CLIENT_ID refers to the specified client ID from the _CONNECT_ packet.

### TLS Authentication

ThingsBoard MQTT Broker supports authentication using TLS. 
To enable TLS authentication, you must first [enable the TLS listener](/docs/mqtt-broker/mqtt-listeners/) so that the client's certificate chain is involved in the authentication process.

After enabling the TLS listener, you need to do the following to enable TLS authentication:

1. Set the `SECURITY_MQTT_SSL_ENABLED` environment variable to `true`.
2. Create MQTT client credentials of type `SSL` using either the [Web UI guide](/docs/mqtt-broker/user-guide/ui/mqtt-client-credentials/) or the [REST API guide](/docs/mqtt-broker/mqtt-client-credentials-management/).
3. Once the credentials are created, the `credentialsId` field is auto-generated. See below for more information.

When authentication is enabled, only clients connecting using certificates with common names (CN) that match the persisted common names will be authenticated. 
This matching process is done by comparing the CN of each certificate in the chain with the common names of the persisted credentials.

The generation of `credentialsId` is done as follows:

- credentialsId = ssl|$CERTIFICATE_COMMON_NAME

where $CERTIFICATE_COMMON_NAME is the common name of the certificate from the chain.

### Authentication procedure

ThingsBoard MQTT Broker has the parameter named `SECURITY_MQTT_AUTH_STRATEGY`, which has two possible values: `BOTH` (the default value) or `SINGLE`.

1. **BOTH**. When both Basic and TLS authentications are enabled and the `SECURITY_MQTT_AUTH_STRATEGY` parameter is set to default `BOTH`, 
the MQTT Broker will prioritize `MQTT_BASIC` authentication. 
This means that if a client successfully authenticates with basic credentials, the system will not attempt to authenticate it using `TLS` authentication. 
However, if `MQTT_BASIC` authentication fails, the system will continue with the authentication process using `TLS`. 
If one of the authentication types is disabled, the other type will be used.
2. **SINGLE**. When `SECURITY_MQTT_AUTH_STRATEGY` is set to `SINGLE`, the broker will only use one type of authentication depending on the listener to which the client is connected. 
For example, if the client connects to the TCP listener, only `MQTT_BASIC` authentication will be used. 
On the other hand, if the client connects to the TLS listener, only `TLS` authentication will be used.

## Authorization

After the user has been authenticated, it is possible to restrict the client's access to topics they can publish or subscribe to for both TLS and Basic authentication.

To provide flexible control over authorization rules, ThingsBoard MQTT Broker uses regular expressions. 

For example, to **allow clients to publish or subscribe to all topics** that begin with **city/**, an authorization rule should be created with the value **city/.***.

### Basic

For the Basic type, authorization is configured through the **pubAuthRulePatterns** and **subAuthRulePatterns** of the corresponding MQTT client credentials. 
Therefore, for each Basic MQTT client credential, you can configure the authorization rules for the topics that these clients can access. 

The **pubAuthRulePatterns** and **subAuthRulePatterns** are based on regular expression syntax. For example,
```
{
    "pubAuthRulePatterns": ["country/.*"],
    "subAuthRulePatterns": ["city/.*"]
}
```
{: .copy-code}
The following configuration allows clients to publish messages to topics that start with **country/** and subscribe to topics that start with **city/**:

### TLS

For TLS type, authorization is configured using the **authRulesMapping** field of the corresponding MQTT Client Credentials

Here is a model of the credentials value:

```
{
    "parentCertCommonName": $parentCertCommonName,
    "authRulesMapping": $authRulesMapping
}
```
{: .copy-code}

Where:
- $parentCertCommonName - the common name that should be present in the certificate chain.
- $authRulesMapping - the mapping used to configure the access restrictions for different keywords.
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

This allows clients to connect with a certificate containing **example_1** in its CN to publish only to topics that start with **example_pub_topic/** and 
subscribe to topics that start with **example_sub_topic/**. Clients with a certificate containing **example_2** are allowed to publish and subscribe to any topic.

**Note** that if either **pubAuthRulePatterns** or **subAuthRulePatterns** is set to `null` or an empty list (`[]`), the client will not be able to publish to or subscribe to any topics.
