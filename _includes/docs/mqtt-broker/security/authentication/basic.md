* TOC
{:toc}

**MQTT Basic Authentication** is a straightforward and widely supported method for verifying client identity using a **username and password**. 
It offers a simple way to secure MQTT connections and is commonly used in systems where ease of configuration and compatibility are priorities.

### Basic authentication overview

Basic Authentication is handled during the MQTT `CONNECT` phase, where the client includes its username and password in the request.
The broker forwards these credentials to the configured authentication provider, which may validate them using a local user database, an external identity system (such as LDAP or OAuth-based services), or custom logic.
This method is easy to configure and suitable for scenarios where secure credential storage and transmission (e.g., over TLS) can be ensured.

### Configure provider

{% include docs/mqtt-broker/user-guide/ui/authentication-provider-control.md %}

### Authentication

TBMQ supports flexible credential matching strategies for Basic Authentication, allowing different combinations of MQTT client identifiers—such as **clientId, username, and password** — to be used for authentication. 
This enables administrators to define how strictly clients must identify themselves when connecting. 

The system uses these fields to generate a unique `credentialsId`, which is then used to locate and validate stored credentials. 
This approach ensures consistent and configurable authentication behavior across a variety of deployment scenarios.

#### Credentials matching

The following are the **possible combinations** of `Basic` credentials matchers:
- **clientId** - checks if the connecting client has specified clientId.
- **username** - checks if the connecting client has specified a username.
- **clientId and username** - checks if the connecting client has specified both clientId and username.
- **username and password** - checks if the connecting client has specified both username and password.
- **clientId and password** - checks if the connecting client has specified both clientId and password.
- **clientId, username and password** - checks if the connecting client has specified clientId, username, and password.

#### Credentials ID

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
