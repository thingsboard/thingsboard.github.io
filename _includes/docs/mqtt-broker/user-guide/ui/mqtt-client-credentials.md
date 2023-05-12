
ThingsBoard MQTT Broker offers various options for managing MQTT client credentials via both its Web UI and [REST API](/docs/mqtt-broker/mqtt-client-credentials-management/). 

ThingsBoard MQTT Broker supports the following types of client credentials to authenticate client connections:
- [Basic](/docs/mqtt-broker/security/) - basic security measures based on combinations of client ID, username and password.
  - **Advantages:** Simple and easy to implement. Widely supported by applications and services. Low network overhead.
  - **Disadvantages:** Limited security.
- [X.509 Certificate Chain](/docs/mqtt-broker/security/) - advanced security measures based on [X509 certificate chain]() that helps in verifying the identity of clients.
  - **Advantages:** Enhanced security compared to the basic client credentials type. With SSL client credentials, both the client and the MQTT broker can authenticate each other. 
  The SSL client credentials type provides more flexibility in terms of access control, as it allows for more granular access control policies based on the certificate subject name and other attributes.
  - **Disadvantages:** Complexity and increased cost. Setting up and managing SSL client credentials can be more complex and requires more expertise. SSL encryption and decryption require more computing resources.

Before using any of the client credential types mentioned above, please ensure that they are enabled in the ThingsBoard MQTT Broker [configuration file]().
- To enable **MQTT Basic Credentials**, set `SECURITY_MQTT_BASIC_ENABLED` to `true`.
- To enable **MQTT SSL Credentials** set `SECURITY_MQTT_SSL_ENABLED` to `true`.

Note that on the Web UI's _Home page_, you can check the current state of those parameters on the Configuration card:

[image]

For more information on security issues, please consult this [guide](/docs/mqtt-broker/security/).

* TOC
{:toc}

## Adding MQTT Client Credentials

To add new client credentials, please follow these steps:

1. Go to the _Credentials_ page and click the Add _Client Credentials_ button, represented by a plus icon.

   ![image](/images/mqtt-broker/user-guide/ui/mqtt-client-creds.png)

2. Fill in the Name field (which does not need to be unique).
3. Select the appropriate _Client Type_:
   - **Device**. Use for clients that usually publish a lot of messages, but subscribe to a few topics with low message rate, i.e. IoT devices.
   - **Applications**. Use for clients that subscribe to topics with high message rates and require message persistence when the client is offline, such as applications like **ThingsBoard, AWS IoT Core** etc.
     For more information on client types, please refer to the [docs]().

4. Select the desired _Credentials Type_ and configure the authentication parameters and authorization rules.

### MQTT Basic Credentials

![image](/images/mqtt-broker/user-guide/ui/mqtt-client-credentials-save-basic.png)

#### Authentication

MQTT Basic authentication is based on different combinations of the client ID, username, and/or password:
- **Client ID** - verifies if the connecting client has a specified clientId.
- **Username** - verifies if the connecting client has a specified username.
- **Client ID and username** - verifies if the connecting client has both specified clientId and username.
- **Username and password** - verifies if the connecting client has both specified username and password.
- **Client ID and password** - verifies if the connecting client has both specified clientId and password.
- **Client ID, username and password** - verifies if the connecting client has specified clientId, username, and password.

#### Authorization Rules

Authorization rule patterns allow controlling what topics clients can publish/subscribe to based on **regular expression syntax**:

* **Allowing particular topic(s)** - the rule `country/.*` will allow clients to publish/subscribe messages only to topics that start with `country/`.
* **Allowing any topic** - the rule `.*` (default) will allow clients to publish/subscribe messages to any topic.
* **Forbidding all topics** - if the rule is `empty`, the client is forbidden to publish/subscribe to any topic.

#### Changing Password for MQTT Basic Credentials

Broker administrators can modify the password for MQTT Basic client credentials. To do this, follow these instructions:
1. Go to _Client Credentials_ page.

2. Click on the corresponding row of the Credentials.

3. Click the _Edit_ button.

4. Click the _Change password_ button. Input your current password and set a new one.

5. Click the _Change password_ button.

6. Click the _Apply changes_ button.

![image](/images/mqtt-broker/user-guide/ui/mqtt-client-credentials-change-pass.png)

### SSL credentials

**X.509 Certificate chain** is a secure two-way authentication method over TLS with a chain of public-key certificates.

#### Authentication

The **certificate's common name (CN)** should exactly match the client's or, if present, one of the parent's certificate CN. 
Authentication will fail if none of the certificates in the chain has the same CN.

#### Authorization rules

Authorization rules allow controlling what topics authenticated clients can publish/subscribe to based on the successful combination of:

* **Client certificate CN matcher regex** - should match with the CN of the Client certificate.
* **Publish/subscribe authorization rule patterns** - allow controlling what topics clients with matched Client certificate CN matcher regex can publish/subscribe to.

Please consider the following examples:
* If the client certificate has CN `cn_example_1` - set Client certificate CN matcher regex to `cn_example_1` or `example_1` or `.*example.*`.
* If Publish authorization rule patterns are set as `pub_topic/one/.*, pub_topic/two/.*` - client will be able to publish only to the topics that starts with `pub_topic/one/` or `pub_topic/two/`.
* If Subscribe authorization rule patterns is set to default value `.*` - client will be able to subscribe to any topic.
* If Publish/Subscribe authorization rules has no rules (field is empty) - client will be forbidden to publish/subscribe to any topics.

![image](/images/mqtt-broker/user-guide/ui/mqtt-client-credentials-save-ssl.png)

## Delete client credentials

Broker administrators can remove client credentials from the ThingsBoard MQTT Broker system using the Web UI or [REST Api]().

There are a few ways of deleting client credentials:
1. **Delete single**.
   - Click on the _Delete_ icon in the corresponding row of the credentials and confirm action.
   - Click on the credentials row and click the _Delete Client Credentials_ button.
2. **Delete mulptiple.** 
   * By clicking on the checkbox you can select multiple items. Then click the _Delete_ icon in the top right corner and cofirm action.

![image](/images/mqtt-broker/user-guide/ui/mqtt-client-creds-delete.png)
