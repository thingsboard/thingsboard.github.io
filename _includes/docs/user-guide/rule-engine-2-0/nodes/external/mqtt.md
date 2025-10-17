Publishes messages to an external MQTT broker with QoS 1 (at least once) and configurable retention settings. Supports dynamic topic patterns populated with data from incoming
messages and multiple authentication methods including TLS/SSL encryption.

## Configuration

### Topic pattern

Specifies the MQTT topic where messages will be published. This field is required and supports [templatization](/docs/{{docsPrefix}}user-guide/templatization/) to dynamically
construct topic names based on incoming message data or metadata.

### Connection settings

- **Host** – The hostname or IP address of the MQTT broker. This field is required.
- **Port** – The port number of the MQTT broker. This field is required.
- **Connection timeout (sec)** – The maximum time in seconds to wait when establishing a connection to the MQTT broker before the connection attempt fails. This field is required.

### Client ID

An optional identifier for the MQTT client. If left empty, the node automatically generates a Client ID using the format `netty-mqtt/` followed by 8 random alphanumeric characters.

**Example of auto-generated Client ID:** `netty-mqtt/aB3dEf7G`

#### Singleton mode and cluster deployment

The rule node can operate in two modes when the platform is running in a cluster (micro-services mode):

- **Singleton mode enabled** (default) – The rule node is launched on only one rule engine instance, regardless of how many rule engine instances are running in the cluster. This
  means there is only one MQTT client connection.
- **Singleton mode disabled** – The rule node is launched on all rule engine instances. If there are three rule engine instances, three separate rule nodes are launched, creating
  three MQTT client connections.

Singleton mode can be changed in the node configuration interface using the **Singleton/Disabled** toggle.

#### Multiple connections issue

Most MQTT brokers do not allow multiple simultaneous connections with the same Client ID. When multiple rule node instances run in a cluster and attempt to connect with the same
configured Client ID, the broker rejects duplicate client connections, causing failures.

#### Solving the multiple connections issue

There are two ways to solve this issue:

**Option 1: Enable Singleton mode** – This ensures only one rule node instance is launched in the cluster, creating only one client connection to the broker. Since there is only
one client, no Client ID conflicts can occur.

**Option 2: Enable Add Service ID as suffix to Client ID** – This allows multiple rule node instances to connect simultaneously. When enabled, the Service ID is automatically
appended to the specified Client ID as a suffix. Since each rule engine instance has a unique Service ID, each rule node instance creates a client with a unique identifier.

**Example**: If Client ID is `my-client` and three rule engine instances have Service IDs `tb-rule-engine-1`, `tb-rule-engine-2`, and `tb-rule-engine-3`, the final Client IDs
become:

- `my-client_tb-rule-engine-1`
- `my-client_tb-rule-engine-2`
- `my-client_tb-rule-engine-3`

#### Client ID length restrictions

The maximum allowed Client ID length depends on the protocol version:

- **MQTT 3.1**: Maximum 23 characters
- **MQTT 3.1.1 and MQTT 5**: Maximum 256 characters

When using the **Add Service ID as suffix** setting, ensure the combined length of your Client ID and the Service ID suffix does not exceed these limits. If the generated Client ID
exceeds the maximum length, the node will fail with an error.

### Message settings

#### Parse to plain text

Controls how the message data is processed before publishing:

- **Disabled** (default) – The message data is published as-is.
- **Enabled** – If the message data is a JSON-encoded string (wrapped in double quotes), the outer JSON encoding is removed.

**Example**:

Message data: `"\"Temperature is 25.5°C\""`

- Parse to plain text **OFF**: Publishes `"\"Temperature is 25.5°C\""` (with JSON encoding)
- Parse to plain text **ON**: Publishes `"Temperature is 25.5°C"` (without outer quotes)

{% capture parse_note %}
**Note**: This setting only affects JSON-encoded strings (strings wrapped in double quotes). Regular JSON objects like `{"temperature":25.5}` are published unchanged regardless of
this setting.
{% endcapture %}
{% include templates/info-banner.md content=parse_note %}

#### Quality of Service

All messages are published with **QoS 1 (AT_LEAST_ONCE)**. This guarantees that the message will be delivered to the broker at least once, though it may be delivered multiple times
in case of network issues. The QoS level is not configurable.

#### Retained

- **Disabled** (default) – The message is not retained by the broker.
- **Enabled** – The broker stores the message and delivers it to future subscribers of the topic, even if they subscribe after the message was published.

Retained messages are useful for publishing device state or configuration that new subscribers should receive immediately upon subscription.

### Protocol version

Select the MQTT protocol version to use for the connection. Available options:

- **MQTT 3.1** – Legacy version with 23-character Client ID limit
- **MQTT 3.1.1** – Most widely supported version (default)
- **MQTT 5** – Latest version with enhanced features

{% capture protocol_note %}
**Note**: Ensure your MQTT broker supports the selected protocol version. Most modern brokers support MQTT 3.1.1 and MQTT 5.
{% endcapture %}
{% include templates/info-banner.md content=protocol_note %}

### Session settings

#### Clean session

- **Enabled** (default) – The broker does not store any session state for the client. When the client reconnects, it starts with a clean state.
- **Disabled** – The broker stores session state and undelivered QoS 1 and QoS 2 messages for the client. When the client reconnects, it can receive any messages that were queued
  during disconnection.

For this rule node, clean session should typically remain enabled since the node only publishes messages and does not subscribe to any topics.

### Security settings

#### Enable SSL

- **Disabled** (default) – Connection uses plain TCP without encryption.
- **Enabled** – Connection uses TLS/SSL encryption. When enabled, you must configure credentials.

### Credentials

Authentication credentials for connecting to the MQTT broker. The available credential types are:

#### Anonymous

No authentication is required. Use this when the MQTT broker allows anonymous connections.

#### Basic

Username and password authentication.

**Configuration**:

- **Username** – The username for MQTT broker authentication
- **Password** – The password for MQTT broker authentication

#### PEM Certificate

Certificate-based authentication using PEM-encoded files. This provides the strongest security through mutual TLS authentication.

**Configuration**:

- **Server CA certificate file** – The Certificate Authority (CA) certificate that signed the broker's certificate. Used to verify the broker's identity.
- **Client certificate file** – The client's public certificate. Sent to the broker for client authentication.
- **Client private key file** – The client's private key corresponding to the client certificate.
- **Private key password** – Optional password if the private key file is encrypted.

{% capture cert_requirement_note %}
**Note**: At minimum, a Server CA certificate file or a pair of Client certificate and Client private key files is required when using PEM credentials.
{% endcapture %}
{% include templates/info-banner.md content=cert_requirement_note %}

{% capture credentials_note %}
**Note**: Certificate and key files can be uploaded directly or referenced from [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} for enhanced security.
{% endcapture %}
{% include templates/info-banner.md content=credentials_note %}

### Advanced settings

#### Force acknowledgement

The force acknowledgement mechanism is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable. When this variable is set to `true`, it applies to all external
nodes including this MQTT node.

**Behavior when force acknowledgement is enabled**:

- The incoming message is acknowledged immediately and a copy is created
- The MQTT publish operation executes
- Once the publish operation completes, the message copy is added to the queue for processing by the next node
- This prevents message processing timeouts for slow MQTT brokers

**Behavior when force acknowledgement is disabled** (default):

- The original incoming message is held until the MQTT publish operation completes
- The message is then passed to the next node

#### MQTT retransmission

The node uses the platform's internal MQTT client, which includes a retransmission mechanism to improve reliability for QoS 1 messages. When a PUBLISH message is sent, the client
waits for an acknowledgment from the broker. If no acknowledgment is received within a configurable delay period, the message is retransmitted.

The delay between retransmissions follows an exponential backoff strategy with jitter:

- The delay starts from an initial value and doubles with each retry attempt
- A jitter factor introduces random variance (±percentage) to prevent synchronized retries across multiple clients

**Example**: With three maximum attempts, 5,000 ms initial delay, and 0.15 jitter factor, retransmissions occur at approximately:

- 5,000 ms (±15%)
- 10,000 ms (±15%)
- 20,000 ms (±15%)

If no acknowledgment is received after all retry attempts, the message is dropped and routed via the `Failure` connection with an appropriate error message.

**Configuration**:

Retransmission parameters are configured globally in the `thingsboard.yml` file and apply to all MQTT clients on the platform:

```yaml
mqtt:
  client:
    retransmission:
      max_attempts: "${TB_MQTT_CLIENT_RETRANSMISSION_MAX_ATTEMPTS:3}"
      initial_delay_millis: "${TB_MQTT_CLIENT_RETRANSMISSION_INITIAL_DELAY_MILLIS:5000}"
      jitter_factor: "${TB_MQTT_CLIENT_RETRANSMISSION_JITTER_FACTOR:0.15}"
```

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbMqttNodeConfiguration",
  "type": "object",
  "properties": {
    "topicPattern": {
      "type": "string",
      "minLength": 1,
      "description": "MQTT topic where messages will be published (supports templatization)."
    },
    "host": {
      "type": "string",
      "minLength": 1,
      "description": "Hostname or IP address of the MQTT broker."
    },
    "port": {
      "type": "integer",
      "minimum": 1,
      "maximum": 65535,
      "description": "Port number of the MQTT broker."
    },
    "connectTimeoutSec": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum time to wait for connection establishment (seconds)."
    },
    "clientId": {
      "type": "string",
      "description": "Optional MQTT client identifier. Leave empty for auto-generated ID."
    },
    "appendClientIdSuffix": {
      "type": "boolean",
      "description": "Whether to append Service ID as suffix to Client ID."
    },
    "retainedMessage": {
      "type": "boolean",
      "description": "Whether the broker should retain the message for future subscribers."
    },
    "cleanSession": {
      "type": "boolean",
      "description": "Whether to start with a clean session (no stored state)."
    },
    "ssl": {
      "type": "boolean",
      "description": "Whether to use TLS/SSL encryption."
    },
    "parseToPlainText": {
      "type": "boolean",
      "description": "Whether to convert JSON message data to plain text."
    },
    "protocolVersion": {
      "type": "string",
      "enum": [
        "MQTT_3_1",
        "MQTT_3_1_1",
        "MQTT_5"
      ],
      "description": "MQTT protocol version to use."
    },
    "credentials": {
      "type": "object",
      "description": "Authentication credentials for the MQTT broker."
    }
  },
  "required": [
    "topicPattern",
    "host",
    "port",
    "connectTimeoutSec",
    "cleanSession",
    "ssl",
    "retainedMessage",
    "parseToPlainText",
    "protocolVersion",
    "credentials"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Rule node initialization

When the rule node is initialized, it establishes a connection to the MQTT broker:

1. The node connects to the broker at the configured **Host** and **Port** using the specified **Credentials**.
2. The connection uses the configured **Protocol version** and **Clean session** settings.
3. If **SSL** is enabled, a secure TLS connection is established.
4. The connection must complete within the specified **Connection timeout** period, otherwise initialization fails.

Once the connection is established, it remains open for the lifetime of the rule node, ready to publish messages.

## Message processing

For each incoming message, the node performs the following steps:

1. If **Force acknowledgement** is enabled, the incoming message is acknowledged immediately and a copy is created.
2. The node processes the **Topic pattern**, replacing templates with values from the incoming message data and metadata to construct the final MQTT topic.
3. If **Parse to plain text** is enabled, the message data is processed to remove outer JSON encoding.
4. The node publishes the message payload to the MQTT broker:
    - The message is published to the constructed topic with **QoS 1 (AT_LEAST_ONCE)**.
    - The **Retained** flag is applied according to the configuration.
5. When the publish operation completes:
    - On success, the original message (or the message copy if force acknowledgement is enabled) is forwarded via the `Success` connection.
    - On failure, error details are added to the message metadata under the `error` key, and the message is forwarded via the `Failure` connection.

## Rule node shutdown

When the rule node is shut down, it disconnects from the MQTT broker and releases all associated resources.

Shutdown occurs in the following scenarios:

- **Rule node configuration is updated** – The node is destroyed and then re-initialized with the new configuration.
- **Rule node is deleted** – The node is destroyed without re-initialization.

{% capture shutdown_note %}
**Note**: The shutdown process is not executed if the rule engine instance crashes or is forcibly terminated (e.g., SIGTERM, SIGKILL).
{% endcapture %}
{% include templates/info-banner.md content=shutdown_note %}

## Outgoing message format

The outgoing message format depends on the **Force acknowledgement** setting:

**When force acknowledgement is disabled** (default):

- The outgoing message is the original incoming message
- The message data, metadata, originator, and type remain unchanged

**When force acknowledgement is enabled**:

- The outgoing message is a copy of the original incoming message
- The copy is a separate message instance but contains the same data, metadata, originator, and type

**On failure**:

- Error details are added to the message metadata under the `error` key in the format: `ExceptionClass: error message`
- All other message properties remain unchanged

## Output connections

- **Success**
    - The message was successfully published to the MQTT broker.
- **Failure**
    - The publish operation failed due to network issues or broker errors.
    - An unexpected error occurred during processing.

## Examples

### Example 1 — Publishing telemetry to a cloud MQTT broker

A temperature sensor sends telemetry data that needs to be forwarded to a cloud-based MQTT broker. Messages are published to topics organized by device type and name. Force
acknowledgement is disabled.

**Incoming message**

Originator: `DEVICE` (Temperature Sensor)

Metadata:

```json
{
  "deviceType": "temperature",
  "deviceName": "sensor-warehouse-01",
  "ts": 1672531200000
}
```

Data:

```json
{
  "temperature": 22.5,
  "humidity": 65
}
```

**Node configuration**

```json
{
  "topicPattern": "factory/sensors/${deviceType}/${deviceName}",
  "host": "mqtt.cloud-provider.com",
  "port": 8883,
  "connectTimeoutSec": 10,
  "clientId": "thingsboard-publisher",
  "appendClientIdSuffix": true,
  "retainedMessage": false,
  "cleanSession": true,
  "ssl": true,
  "parseToPlainText": false,
  "protocolVersion": "MQTT_3_1_1",
  "credentials": {
    "type": "basic",
    "username": "factory-user",
    "password": "secure-password"
  }
}
```

**Outgoing message**

The outgoing message is the same as the incoming message. Since force acknowledgement is disabled, the original incoming message is passed to the next node after successful
publish.

**Result**

The message is published to topic `factory/sensors/temperature/sensor-warehouse-01` on the cloud MQTT broker using secure TLS connection with username/password authentication. The
JSON payload is published as-is. The message is then routed via the `Success` connection.
