
* TOC
{:toc}

{% if docsPrefix != "pe/" %}
{% assign sinceVersion = "2.0" %}
{% include templates/mqtt-broker/since.md %}
{% endif %}

TBMQ provides a dedicated Settings page that allows administrators to manage key system configurations directly from the user interface.
The Settings page is divided into three tabs, each focused on a specific category of system configuration.

## Security settings

Configure the execution order of MQTT authentication providers, controlling the priority in which client credentials are validated.
Define broker user password policies, including password strength requirements, expiration settings, and reuse restrictions to enforce strong account security.

### MQTT Authentication

{% include docs/mqtt-broker/user-guide/ui/authentication-settings.md %}

### Password policy

To log into TBMQ, the [user](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/users/) uses an email and password.
You can enhance the security of your account by updating your security settings, including the **password policy**.

For example, you can increase a minimum password length, require a mix of uppercase and lowercase letters, and specify the minimum number of digits and special characters.
Additionally, you can set a password expiration period to ensure that passwords are updated regularly.

These measures will help ensure stronger and more secure passwords, thereby promoting better overall account security.

The password policy sets the rules that passwords for the TBMQ users must meet. You can specify the following options to ensure stronger security:
- **Minimum password length** - the parameter determines the minimum number of characters in the password. Minimum password length should be in a range from 6 to 50 and is the only required field.
- **Maximum password length** - the parameter determines the maximum number of characters in the password. Maximum password length should be greater than minimum length.
- **Minimum number of uppercase letters** - set the minimum number of uppercase letters in the password.
- **Minimum number of lowercase letters** - set the minimum number of lowercase letters in the password.
- **Minimum number of digits** - specify minimum number of digits in the password.
- **Minimum number of special characters** - specify the minimum number of special characters in the password.
- **Password expiration period in days** - force expiration of the password. After the password expires, TBMQ will require the user to change it. This ensures users regularly update their passwords.
- **Password reuse frequency in days** - disallow to use the same password for the defined number of days. For example, if the Password reuse frequency is set to 90 days, users will not be able to reuse any of their previous passwords for 90 days after changing their password.
- **Allow whitespace** - if the checkbox is checked, spaces are allowed in the password.
- **Force to reset password if not valid** - users with a password that fails the validation will need to reset their password via email. **Please be careful when enabling this feature**: it will require users with not valid password to reset their password via [email](#mail-server-settings).

After configuring the desired password policy settings, apply the changes by pressing the "Save" button. 

When the password policy is updated, new users will be required to adhere to the new password rules. 
Note that if you have enabled the **Force to reset password if not valid** option, all users (not only new ones) who do not meet the new requirements will be forced to update their passwords.

{% capture securityDocumentation %}
To see other security-related settings, please refer to our [Security documentation](/docs/{{docsPrefix}}mqtt-broker/security/overview/).
{% endcapture %}
{% include templates/info-banner.md content=securityDocumentation %}

#### Change password

To change your account password to comply with the new requirements, you should follow these steps:

1. Open account settings by clicking on the menu icon in the top right corner and select 'Account'.
2. Click on the 'Security' tab.
3. Change the password according to the new rules.
4. Click 'Change password'.

{% include images-gallery.html imageCollection="settings-password-policy" %}

## General settings

Define global MQTT connectivity settings used across the TBMQ UI (such as default host and port values) and configure WebSocket client behavior,
including activity logging options and message retention limits for the in-browser message table.

### Connectivity

{% include docs/mqtt-broker/user-guide/ui/connectivity-settings.md %}

### WebSocket client

In this section, you can configure additional settings related to the [WebSocket Client](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/websocket-client/) - a browser-accessible tool that provides management of MQTT clients, subscription to topics, receiving messages, and publishing messages.

* **Log MQTT client activity** feature can be helpful in debugging connection issues and monitoring message flows by providing real-time client activity logs. 
If set to true, you will see logs for the following [MQTT.js](https://github.com/mqttjs/MQTT.js) events in the browser developer console:
  1. **Connect**. Triggered when a client successfully connects to the broker.
  2. **Disconnect**. Triggered when a client disconnects from the broker.
  3. **Reconnect**. Triggered when a client attempts to reconnect after a disconnection.
  4. **Message**. Triggered when a message is received by the client.
  5. **Error**. Triggered when an error occurs during communication.
  6. **End**. Triggered when the client ends the connection gracefully.
  7. **Close**. Triggered when the connection is closed by the client or broker.
  8. **Packet receive**. Triggered when a packet is received from the broker.
  9. **Packet send**. Triggered when a packet is sent to the broker.
  10. **Offline**. Triggered when the client goes offline.
  11. **Outgoing empty**. Triggered when all outgoing messages have been sent.

* **Maximum messages in WebSocket Client table** setting allows you to control the limit of messages per WebSocket connection to be persisted in the browser's memory.

## Mail server settings

{% include docs/mqtt-broker/user-guide/ui/mail-server.md %}
