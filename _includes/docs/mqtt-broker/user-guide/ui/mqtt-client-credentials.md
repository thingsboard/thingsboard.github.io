* TOC
{:toc}

TBMQ offers various options for managing MQTT client credentials via both its Web UI and [REST API](/docs/{{docsPrefix}}mqtt-broker/mqtt-client-credentials-management/). 

TBMQ supports the following types of client credentials to authenticate client connections:
- [Basic](/docs/{{docsPrefix}}mqtt-broker/security/#basic-authentication) - basic security measures based on combinations of client ID, username and password.
  - **Advantages:** Simple and easy to implement. Widely supported by applications and services. Low network overhead.
  - **Disadvantages:** Limited security.
- [X.509 Certificate Chain](/docs/{{docsPrefix}}mqtt-broker/security/#tls-authentication) - advanced security measures based on X509 certificate chain that helps in verifying the identity of clients.
  - **Advantages:** Enhanced security compared to the basic client credentials type. With SSL client credentials, both the client and TBMQ can authenticate each other. 
  The SSL client credentials type provides more flexibility in terms of access control, as it allows for more granular access control policies based on the certificate subject name and other attributes.
  - **Disadvantages:** Complexity and increased cost. Setting up and managing SSL client credentials can be more complex and requires more expertise. SSL encryption and decryption require more computing resources.
- **SCRAM** - advanced security measure using Salted Challenge Response Authentication Mechanism (SCRAM) that provides secure, password-based authentication (MQTT 5.0 Enhanced authentication feature).
  - **Advantages:** Higher security level compared to basic authentication. It uses a challenge-response process to exchange hashed credentials, ensuring the password is never sent in plain text.
  - **Disadvantages:** Requires additional computational resources to generate and validate the salted password hashes.

Before using any of the client credential types mentioned above, please ensure that the appropriate _Authentication_ is [enabled](/docs/{{docsPrefix}}mqtt-broker/security/authentication/basic/).

For more information on security issues, please consult this [guide](/docs/{{docsPrefix}}mqtt-broker/security/overview/).

## Adding MQTT client credentials

To add new client credentials, please follow these steps:

1. Go to the _Authentication_ - _Credentials_ page and click the Add _Client Credentials_ button, represented by a plus icon.
2. Fill in the Name field (which does not need to be unique).
3. Select the appropriate _Client Type_:
   - **Device**. Use for clients that usually publish a lot of messages, but subscribe to a few topics with low message rate, i.e. IoT devices.
   - **Applications**. Use for clients that subscribe to topics with high message rates and require message persistence when the client is offline, such as applications like **ThingsBoard, AWS IoT Core** etc.
   
   For more information on client types, please refer to the [docs](/docs/{{docsPrefix}}mqtt-broker/user-guide/mqtt-client-type/).

4. Select the desired _Credentials Type_ and configure the authentication parameters and authorization rules.

{% include images-gallery.html imageCollection="add-client-credentials" %}

### MQTT Basic credentials

#### Authentication

MQTT Basic authentication is based on different combinations of the client ID, username, and/or password:
- **Client ID** - verifies if the connecting client has a specified clientId.
- **Username** - verifies if the connecting client has a specified username.
- **Client ID and username** - verifies if the connecting client has both specified clientId and username.
- **Username and password** - verifies if the connecting client has both specified username and password.
- **Client ID and password** - verifies if the connecting client has both specified clientId and password.
- **Client ID, username and password** - verifies if the connecting client has specified clientId, username, and password.

{% include templates/mqtt-broker/authorization-rules.md %}

#### Changing password for MQTT Basic credentials

Broker administrators can modify the password for MQTT Basic client credentials. To do this, follow these instructions:
1. Go to _Authentication_ - _Client Credentials_ page.
2. Click on the corresponding row of the Credentials.
3. Click the _Change password_ button.
4. Input your current password, set a new one and confirm changes.

{% include images-gallery.html imageCollection="change-password-basic-credentials" %}

### X.509 certificate chain credentials

**X.509 Certificate chain** is a secure two-way authentication method over TLS with a chain of public-key certificates.

#### Authentication

There are two authentication options based on the "Use certificate CN regex" parameter in the credentials. 
Depending on this parameter, TBMQ can either authenticate clients by exact match using the certificate's Common Name (CN) or apply specific regex patterns to match and authorize clients, 
providing flexibility for client verification.

* The **Certificate common name (CN)** should **exactly** match the client's or, if present, one of the parent's certificate CN. 
Authentication will fail if none of the certificates in the chain has the same CN.
* The **Certificate common name (CN) regex** should match with the CN of the client's certificate or, if present, one of the parent's certificate CN.
Authentication will fail if none of the certificate CN in the chain match the regex.

{% include images-gallery.html imageCollection="security-authentication-tls" %}

#### Authorization rules

Authorization rules allow controlling what topics authenticated clients can publish/subscribe to based on the successful combination of:

* **Client certificate CN matcher regex** - should match with the CN of the Client certificate.
* **Publish/subscribe authorization rule patterns** - allow controlling what topics clients with matched Client certificate CN matcher regex can publish/subscribe to.

Please consider the following examples:
* If the client certificate has CN `cn_example_1` - set Client certificate CN matcher regex to `cn_example_1` or `example_1` or `.*example.*`.
* If Publish authorization rule patterns are set as `pub_topic/one/.*, pub_topic/two/.*` - client will be able to publish only to the topics that starts with `pub_topic/one/` or `pub_topic/two/`.
* If Subscribe authorization rule patterns is set to default value `.*` - client will be able to subscribe to any topic.
* If Publish/Subscribe authorization rules has no rules (field is empty) - client will be forbidden to publish/subscribe to any topics.

{% if docsPrefix == "pe/" %}
![image](/images/pe/mqtt-broker/user-guide/ui/ssl-credentials-authorization.png)
{% else %}
![image](/images/mqtt-broker/user-guide/ui/ssl-credentials-authorization.png)
{% endif %}

### SCRAM

**SCRAM** (Salted Challenge Response Authentication Mechanism) is an enhanced authentication method for MQTT 5 clients, based on **username and password**.

#### Authentication

* **Username** - a unique identifier for the client, used in conjunction with the password in authentication.
* **Password** - a secret string known only to the user and the server. Password is salted and hashed before being stored and used in authentication.

{% include templates/mqtt-broker/authorization-rules.md %}

## Delete client credentials

Broker administrators can remove client credentials from TBMQ system using the Web UI or [REST API](/docs/{{docsPrefix}}mqtt-broker/mqtt-client-credentials-management/).

There are a few ways of deleting client credentials:
1. **Delete single**.
   - Click on the _Delete_ icon in the corresponding row of the credentials and confirm action.
   - Click on the credentials row and click the _Delete Client Credentials_ button.
2. **Delete multiple.** 
   * By clicking on the checkbox you can select multiple items. Then click the _Delete_ icon in the top right corner and cofirm action.

{% include images-gallery.html imageCollection="delete-client-credentials" %}

## Check connectivity

“Check Connectivity” is a useful tool that automatically generates commands to **subscribe to a topic** and **publish a message**.
This feature utilizes the user's host, port, and client credentials to generate the necessary commands. 

It is available only for [Basic](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/mqtt-client-credentials/#mqtt-basic-credentials) credentials.

To open a window with commands, please follow the next steps:
1. Click “Check connectivity” button to open the corresponding window.
2. In the opened window, select your operating system.
3. Install the necessary client tools using the command from the guide.
4. Copy and run commands.

{% include images-gallery.html imageCollection="check-connectivity" %}

If the client credentials include a password, please ensure you replace "$YOUR_PASSWORD" with the actual password. 
Below are examples of the generated commands for the credentials with password:

```bash
mosquitto_sub -d -q 1 -h localhost -p 1883 -t tbmq/demo/+ -i "tbmq_eJzCIh6r" -u "tbmq_un_VxUVPaF8" -P "$YOUR_PASSWORD" -v
mosquitto_pub -d -q 1 -h localhost -p 1883 -t tbmq/demo/topic -i "tbmq_eJzCIh6r" -u "tbmq_un_VxUVPaF8" -P "$YOUR_PASSWORD" -m 'Hello World'
```

Also, if the client has configured subscribe/publish **Authorization rule patterns** that differ from the default value `.*` (any topic allowed), it indicates that the client has specific topic restrictions for publishing or subscribing. 
In this case, you need to replace "$YOUR_TOPIC" with one that the client is permitted to operate.