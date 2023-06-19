* TOC
{:toc}

This guide provides an overview of the various options you have to manage **authentication** and **authorization** for MQTT clients in accordance with your specific requirements 
and infrastructure. 

Authentication refers to the process of verifying the identity of MQTT clients connecting to the broker. 
It ensures that only authenticated clients can access the system. 
The guide will explore different authentication mechanisms such as basic authentication, and SSL/TLS client certificate authentication. 
It will explain how to configure and enable these authentication methods based on your security needs.

Authorization, on the other hand, involves granting or denying access to specific resources or actions based on the authenticated client's privileges. 
You will learn how to assign topic authorization rules to clients to control their permissions and restrict their actions within the MQTT system.

By understanding and implementing the authentication and authorization options outlined in this guide, 
you can ensure secure and controlled access to the MQTT broker, protecting your infrastructure and data from unauthorized access or misuse.

## MQTT Listeners

TBMQ provides the flexibility to configure its listening capabilities for both the TCP and SSL/TLS protocols.

### TCP Listener

By default, TBMQ has the TCP listener enabled on port `1883`.
However, if you wish to disable the TCP listener, you can set the `LISTENER_TCP_ENABLED` environment variable to `false`.

Furthermore, if you need to change the host address that the broker is binding to or the port it is listening on, 
you can modify the `LISTENER_TCP_BIND_ADDRESS` and `LISTENER_TCP_BIND_PORT` variables, respectively. 
This gives you the flexibility to configure the broker to listen on a specific network interface and port of your choice.

By adjusting these environment variables, you can customize the TCP listening behavior of TBMQ to suit your specific requirements.

### TLS Listener

To enable the SSL/TLS listener, set the `LISTENER_SSL_ENABLED` environment variable to `true`. By default, the broker is listening on the `8883` port.
To change the host and/or port that the broker is listening to, update the `LISTENER_SSL_BIND_ADDRESS` and `LISTENER_SSL_BIND_PORT` variables, respectively.

Choose the type of credentials you want to use by setting the `LISTENER_SSL_CREDENTIALS_TYPE` parameter. Currently, the supported options are `PEM` and `KEYSTORE`.
Note that you can find a list of all available properties in the [configuration documentation](/docs/mqtt-broker/install/config/).

If you choose KeyStore as the credentials type, you need to configure the following:
- Set `LISTENER_SSL_KEY_STORE` variable to the path to your `.jks` file with the server certificate chain.
- Set `LISTENER_SSL_KEY_STORE_PASSWORD` variable to the password used to access the key store.
- Set `LISTENER_SSL_KEY_PASSWORD` variable to the password for the server certificate.

If you choose Pem as the credentials type, you need to configure the following:
- Set `LISTENER_SSL_PEM_CERT` variable to the path of your server certificate file.
- Set `LISTENER_SSL_PEM_KEY` variable to the path of your server certificate private key file.
- Set `LISTENER_SSL_PEM_KEY_PASSWORD` variable to the password of your server certificate private key.

If you require two-way TLS, you also need to configure the TrustStore by adding the trusted certificates/chains to the configured KeyStore/PEM files.
For more information about configuration possibilities and certificate generation, please review the following ThingsBoard security [pages](/docs/user-guide/mqtt-over-ssl/).

## Authentication

### Basic Authentication

To enable basic authentication based on a **username, password, and clientId** in your system, follow these steps:

1. Set the `SECURITY_MQTT_BASIC_ENABLED` environment variable to `true`.
2. Create MQTT client credentials of type `Basic` using either the [Web UI guide](/docs/mqtt-broker/user-guide/ui/mqtt-client-credentials/) or the [REST API guide](/docs/mqtt-broker/mqtt-client-credentials-management/). 
3. Once the credentials are created, the `credentialsId` field is auto-generated. See below for more information.

#### Credentials Matching

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
- credentialsId = `mixed|$CLIENT_USERNAME|$CLIENT_ID` when both username and client ID are present;

Where `$CLIENT_USERNAME` refers to the specified username, `$CLIENT_ID` refers to the specified client ID from the `CONNECT` packet.

### TLS Authentication

TBMQ supports authentication using TLS. 
To enable TLS authentication, you must first [enable the TLS listener](/docs/mqtt-broker/security/#tls-listener) so that the client's certificate chain is involved in the authentication process.

After enabling the TLS listener, you need to do the following to enable TLS authentication:

1. Set the `SECURITY_MQTT_SSL_ENABLED` environment variable to `true`.
2. Create MQTT client credentials of type `X.509 Certificate Chain` using either the [Web UI guide](/docs/mqtt-broker/user-guide/ui/mqtt-client-credentials/) or the [REST API guide](/docs/mqtt-broker/mqtt-client-credentials-management/).
3. Once the credentials are created, the `credentialsId` field is auto-generated. See below for more information.

#### Credentials Matching

When authentication is enabled, only clients connecting using certificates with common names (CN) that match the persisted common names will be authenticated. 
This matching process is done by comparing the CN of each certificate in the chain with the common names of the persisted credentials.

#### Credentials ID

The generation of `credentialsId` is done as follows:

- credentialsId = `ssl|$CERTIFICATE_COMMON_NAME`. 

Where `$CERTIFICATE_COMMON_NAME` is the common name of the certificate from the chain.

{% include images-gallery.html imageCollection="security-authentication" %}

### Strategies

TBMQ allows to set the authentication strategy by setting the environment variable `SECURITY_MQTT_AUTH_STRATEGY`, which has two possible values:

1. **BOTH** (default). When both Basic and TLS authentications are enabled, 
the MQTT Broker will prioritize `Basic` authentication. 
This means that if a client successfully authenticates with basic credentials, the system will not attempt to authenticate it using `TLS` authentication. 
However, if `Basic` authentication fails, the system will continue with the authentication process using `TLS`. 
If one of the authentication types is disabled, the other type will be used.
2. **SINGLE**. The broker will only use one type of authentication depending on the listener to which the client is connected. 
For example, if the client connects to the TCP listener, only `Basic` authentication will be used. 
On the other hand, if the client connects to the TLS listener, only `TLS` authentication will be used.

## Authorization

After the user has been authenticated, it is possible to restrict the client's access to topics they can publish or subscribe to for both TLS and Basic authentications.

To provide flexible control over authorization rules, TBMQ uses regular expressions. 

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
The following configuration allows clients to publish messages to topics that start with **country/** and subscribe to topics that start with **city/**.

### TLS

For TLS type, authorization is configured using the **authRulesMapping** field of the corresponding MQTT Client Credentials.
Here is a model of the credentials value:

```
{
    "certCommonName": $certCommonName,
    "authRulesMapping": $authRulesMapping
}
```
{: .copy-code}

Where:
- $certCommonName - the common name that should be present in the certificate chain.
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

**Note**, if either **pubAuthRulePatterns** or **subAuthRulePatterns** is set to `null` or an empty list (`[]`), the client will not be able to publish to or subscribe to any topics.

{% include images-gallery.html imageCollection="security-authorization" %}
