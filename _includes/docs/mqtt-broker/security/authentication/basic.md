* TOC
{:toc}

**MQTT Basic Authentication** is a simple and widely supported method that verifies clients using a username and password.
The client provides these credentials during the MQTT CONNECT request. 
The broker then validates them against the configured authentication provider, which may use a local user database, an external identity service, or custom logic.
This method is easy to configure and suitable for scenarios where secure credential storage and transmission (e.g., over TLS) can be ensured.

{% include docs/mqtt-broker/user-guide/ui/authentication-provider-control.md %}

To enable basic authentication based on a **username, password, and clientId** in your system, follow these steps:

1. Set the `SECURITY_MQTT_BASIC_ENABLED` environment variable to `true`.
2. Create MQTT client credentials of type `Basic` using either the [Web UI guide](/docs/mqtt-broker/user-guide/ui/mqtt-client-credentials/) or the [REST API guide](/docs/mqtt-broker/mqtt-client-credentials-management/).
3. Once the credentials are created, the `credentialsId` field is auto-generated. See below for more information.

### Credentials Matching

The following are the **possible combinations** of `Basic` credentials matchers:
- **clientId** - checks if the connecting client has specified clientId.
- **username** - checks if the connecting client has specified a username.
- **clientId and username** - checks if the connecting client has specified both clientId and username.
- **username and password** - checks if the connecting client has specified both username and password.
- **clientId and password** - checks if the connecting client has specified both clientId and password.
- **clientId, username and password** - checks if the connecting client has specified clientId, username, and password.

### Credentials ID

When a client connects, the combination of the username, password, and clientId from the `CONNECT` packet is matched with the persisted credentials to authenticate the client.
The matching is based on the auto-generated `credentialsId` field from the MQTT client credentials. 

The `credentialsId` is generated as follows:

- credentialsId = `username|$CLIENT_USERNAME` when only username is present;
- credentialsId = `client_id|$CLIENT_ID` when only client ID is present;
- credentialsId = `mixed|$CLIENT_USERNAME|$CLIENT_ID` when both username and client ID are present.

Where `$CLIENT_USERNAME` refers to the specified username, `$CLIENT_ID` refers to the specified client ID from the `CONNECT` packet.

{% include images-gallery.html imageCollection="security-authentication-basic" %}

### Authorization

After the user has been authenticated, it is possible to restrict the client's access to topics they can publish or subscribe to.

To provide flexible control over authorization rules, TBMQ uses regular expressions. 

For example, to **allow clients to publish or subscribe to all topics** that begin with **city/**, an authorization rule should be created with the value **city/.***.

For the Basic type authorization is configured through the **pubAuthRulePatterns** and **subAuthRulePatterns** of the corresponding MQTT client credentials. 
Therefore, for each Basic MQTT client credential, you can configure the authorization rules for the topics that these clients can access. 

The **pubAuthRulePatterns** and **subAuthRulePatterns** are based on regular expression syntax. For example,
```
{
    "pubAuthRulePatterns": ["country/.*"],
    "subAuthRulePatterns": ["city/.*"]
}
```
{: .copy-code}
The following configuration allows clients to publish messages to topics that start with **country/** and subscribe to topics that start with **city/**.

{% include images-gallery.html imageCollection="security-authorization-basic" %}

## Next steps

{% assign currentGuide = "SecurityGuide" %}{% include templates/mqtt-broker-guides-banner.md %}
