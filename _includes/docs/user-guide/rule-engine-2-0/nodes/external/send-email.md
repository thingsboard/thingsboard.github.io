Sends email messages via SMTP server with configurable authentication and transport security options. 
This node expects messages with `SEND_EMAIL` type that were created using the ["to email"](/docs/user-guide/rule-engine-2-0/nodes/transformation/to-email/){:target="_blank"}* transformation node.

## Configuration

### Use system SMTP settings

Controls whether to use platform-wide SMTP settings or node-specific configuration:

- **Enabled** (default) – The node uses SMTP settings configured at the system administrator level. When enabled, all other SMTP configuration fields are hidden and ignored.
- **Disabled** – The node uses custom SMTP settings specified in the node configuration. This allows different email nodes to use different SMTP servers or credentials.

### SMTP settings

- **Protocol** – Specifies the email transport protocol to use. Available options:
    - **SMTP** (default) – Standard SMTP protocol
    - **SMTPS** – SMTP over SSL/TLS
- **SMTP host** – The hostname or IP address of the SMTP mail server.
- **SMTP port** – The port number of the SMTP server.
- **Timeout (ms)** – Socket read timeout in milliseconds. **Default**: `10000` (10 seconds). If the socket read operation exceeds this timeout, the node fails and routes the message via the `Failure` connection.

### Security settings

- **Enable TLS** – Controls whether to use TLS encryption for the SMTP connection.
    - **Disabled** (default) – Connection uses plain SMTP without encryption.
    - **Enabled** – Connection uses STARTTLS to upgrade the connection to TLS encryption after initial handshake.
- **TLS version** – Specifies which TLS protocol version to use when **Enable TLS** is enabled. **Default**: `TLSv1.2`.
- **Username** – The username for SMTP server authentication. Leave empty if the SMTP server allows anonymous access (not recommended for production environments).
- **Password** – The password for SMTP server authentication. Leave empty if the SMTP server allows anonymous access.

{% capture credentials_note %}
**Note**: SMTP credentials can be stored in [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} for enhanced security.
{% endcapture %}
{% include templates/info-banner.md content=credentials_note %}

### Proxy settings

- **Enable proxy** – Controls whether to route SMTP traffic through a proxy server.
    - **Disabled** (default) – Connect directly to the SMTP server.
    - **Enabled** – Route traffic through the specified proxy server. When enabled, you must configure the proxy host and port. Proxy authentication credentials are optional.
- **Proxy host** – The hostname or IP address of the proxy server.
- **Proxy port** – The port number of the proxy server.
- **Proxy user** – Optional username for proxy authentication. Leave empty if the proxy server does not require authentication.
- **Proxy password** – Optional password for proxy authentication. Leave empty if the proxy server does not require authentication.

{% capture proxy_note %}
**Note**: Proxy credentials can be stored in [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} for enhanced security.
{% endcapture %}
{% include templates/info-banner.md content=proxy_note %}

### Advanced settings

#### Force acknowledgement

The force acknowledgement mechanism is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable. When this variable is set to `true`, it applies to all external nodes including this email node.

**Behavior when force acknowledgement is enabled**:

- The incoming message is acknowledged immediately and a copy is created
- The email send operation executes asynchronously
- Once the send operation completes, the message copy is added to the queue for processing by the next node
- This prevents message processing timeouts for slow SMTP servers or large email attachments

**Behavior when force acknowledgement is disabled** (default):

- The original incoming message is held until the email send operation completes
- The message is then passed to the next node

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbSendEmailNodeConfiguration",
  "type": "object",
  "properties": {
    "useSystemSmtpSettings": {
      "type": "boolean",
      "description": "Whether to use platform-wide SMTP settings."
    },
    "smtpHost": {
      "type": "string",
      "description": "Hostname or IP address of the SMTP server."
    },
    "smtpPort": {
      "type": "integer",
      "minimum": 1,
      "maximum": 65535,
      "description": "Port number of the SMTP server."
    },
    "smtpProtocol": {
      "type": "string",
      "enum": ["smtp", "smtps"],
      "description": "Email transport protocol."
    },
    "timeout": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum time to wait for SMTP operations (milliseconds)."
    },
    "enableTls": {
      "type": "boolean",
      "description": "Whether to use STARTTLS encryption."
    },
    "tlsVersion": {
      "type": "string",
      "description": "TLS protocol version to use."
    },
    "enableProxy": {
      "type": "boolean",
      "description": "Whether to route traffic through a proxy server."
    },
    "proxyHost": {
      "type": "string",
      "description": "Hostname or IP address of the proxy server."
    },
    "proxyPort": {
      "type": "string",
      "description": "Port number of the proxy server."
    },
    "proxyUser": {
      "type": "string",
      "description": "Optional username for proxy authentication."
    },
    "proxyPassword": {
      "type": "string",
      "description": "Optional password for proxy authentication."
    },
    "username": {
      "type": "string",
      "description": "Username for SMTP server authentication."
    },
    "password": {
      "type": "string",
      "description": "Password for SMTP server authentication."
    }
  },
  "required": [
    "useSystemSmtpSettings"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

This node only processes messages with type `SEND_EMAIL`. Messages must be created using the "to email" transformation node, which converts message data into the proper email format.

For each incoming message, the node performs the following steps:

1. **Message type validation** – Verifies the message type is `SEND_EMAIL`. If not, the node fails immediately with an error message and routes via the `Failure` connection.

2. **Acknowledgement** – If **Force acknowledgement** is enabled, the incoming message is acknowledged immediately and a copy is created for further processing.

3. **Asynchronous email sending** – The email is sent asynchronously:
    - If **Use system SMTP settings** is enabled, the platform's mail service sends the email using system configuration
    - If **Use system SMTP settings** is disabled, the email is sent using node-specific configuration

4. **Result routing**:
    - On success, the original message (or the message copy if force acknowledgement is enabled) is forwarded via the `Success` connection
    - On failure, error details are added to the message metadata under the `error` key, and the message is forwarded via the `Failure` connection

{% capture message_type_note %}
**Important**: This node expects messages created by the "to email" transformation node. Connect the "to email" node to this node using the `Success` connection. Direct messages without proper email formatting will fail validation.
{% endcapture %}
{% include templates/warn-banner.md content=message_type_note %}

## Output connections

- **Success**
    - The email was successfully sent via the SMTP server.
- **Failure**
    - Message type is not `SEND_EMAIL`.
    - Incorrect SMTP configuration.
    - Email sending operation timed out.
    - An unexpected error occurred during processing.

## Examples

### Example 1 — Sending alert emails using system SMTP settings

A temperature monitoring system sends alert emails when temperature exceeds thresholds. The platform is configured with system-wide SMTP settings for a Gmail account. Force acknowledgement is disabled.

**Incoming message**

Type: `SEND_EMAIL`

Data (prepared by "to Email" transformation node):

```json
{
  "to": "alerts@company.com",
  "subject": "High Temperature Alert",
  "body": "<html><body><h2>Temperature Alert</h2><p>Warehouse temperature has exceeded 30°C.</p><p>Current reading: 32.5°C</p></body></html>"
}
```

**Node configuration**

```json
{
  "useSystemSmtpSettings": true,
  "smtpHost": "localhost",
  "smtpPort": 25,
  "smtpProtocol": "smtp",
  "timeout": 10000,
  "enableTls": false,
  "tlsVersion": "TLSv1.2",
  "enableProxy": false
}
```

**Outgoing message**

The outgoing message is the same as the incoming message. Since force acknowledgement is disabled, the original incoming message is passed to the next node after the email is successfully sent.

**Result**

The email is sent to `alerts@company.com` using the platform's system SMTP configuration. The HTML body is rendered properly in the recipient's email client. The message is then routed via the `Success` connection.
