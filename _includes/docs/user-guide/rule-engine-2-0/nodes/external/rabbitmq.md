Publishes messages to [RabbitMQ](https://www.rabbitmq.com/){:target="_blank"} exchanges, sending the incoming message data as the message body.

## Configuration

### Exchange and routing configuration

Define the target RabbitMQ exchange and routing behavior.

- **Exchange name pattern** – The name of the RabbitMQ exchange to publish messages to. Leave empty to publish to the default exchange. 
  Supports templates for dynamic exchange selection based on message data and metadata.
- **Routing key pattern** – The routing key used to route messages within the exchange. For direct and topic exchanges, this determines which queue(s) receive the message. 
  Supports templates for dynamic routing based on message data and metadata. Leave empty if no routing key is needed (e.g., for fanout exchanges).

#### Message properties

Predefined AMQP message properties to attach to published messages. Message properties control delivery mode, content type, and persistence.

Available options:

- **BASIC** – Non-persistent, no specific content type
- **TEXT_PLAIN** – Non-persistent, text/plain content type
- **MINIMAL_BASIC** – Minimal non-persistent properties
- **MINIMAL_PERSISTENT_BASIC** – Minimal persistent properties (messages survive broker restart)
- **PERSISTENT_BASIC** – Persistent, no specific content type
- **PERSISTENT_TEXT_PLAIN** – Persistent, text/plain content type

{% capture persistence_note %}
**Warning**: Messages published with **BASIC**, **TEXT_PLAIN**, **MINIMAL_BASIC** properties, or without message properties set, are non-persistent. 
These messages will be lost if the RabbitMQ broker restarts or fails. Use **MINIMAL_PERSISTENT_BASIC**, **PERSISTENT_BASIC**, or **PERSISTENT_TEXT_PLAIN** for message persistence.
{% endcapture %}
{% include templates/warn-banner.md content=persistence_note %}

Leave empty for no predefined properties.

### Connection configuration

Configure the connection to your RabbitMQ broker.

- **Host** – The hostname or IP address of the RabbitMQ server.
- **Port** – The port number for the AMQP connection. Default: `5672` (standard AMQP port).
- **Virtual host** – The RabbitMQ virtual host to connect to. Default: `/` (the default virtual host).
- **Username** – The username for authentication to the RabbitMQ broker. Default: `guest`.
- **Password** – The password for authentication to the RabbitMQ broker. Default: `guest`.

{% capture credentials_note %}
**Note**: If you use Professional Edition, we highly recommend using [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} to securely store your password.
{% endcapture %}
{% include templates/info-banner.md content=credentials_note %}

### Advanced settings

Configure connection behavior and custom client properties.

- **Automatic recovery** – Enable automatic recovery of connections and topology (exchanges, queues, bindings) after network failures. Default: `false`. When enabled, the RabbitMQ
  client automatically attempts to reconnect and restore topology if the connection is lost.
- **Connection timeout (ms)** – The timeout in milliseconds for establishing a connection to the RabbitMQ broker. Default: `60000` (60 seconds).
- **Handshake timeout (ms)** – The timeout in milliseconds for completing the AMQP handshake after the TCP connection is established. Default: `10000` (10 seconds).

- **Client properties** – Custom key-value pairs to send to the RabbitMQ broker during connection. Both keys and values are sent as strings to RabbitMQ.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbRabbitMqNodeConfiguration",
  "type": "object",
  "properties": {
    "exchangeNamePattern": {
      "type": "string",
      "description": "Name of the RabbitMQ exchange (supports templatization). Empty string publishes to default exchange."
    },
    "routingKeyPattern": {
      "type": "string",
      "description": "Routing key for message routing (supports templatization)."
    },
    "messageProperties": {
      "type": [
        "string",
        "null"
      ],
      "enum": [
        null,
        "BASIC",
        "TEXT_PLAIN",
        "MINIMAL_BASIC",
        "MINIMAL_PERSISTENT_BASIC",
        "PERSISTENT_BASIC",
        "PERSISTENT_TEXT_PLAIN"
      ],
      "description": "Predefined AMQP message properties."
    },
    "host": {
      "type": "string",
      "minLength": 1,
      "description": "Hostname or IP address of the RabbitMQ server."
    },
    "port": {
      "type": "integer",
      "minimum": 1,
      "maximum": 65535,
      "description": "Port number for the AMQP connection."
    },
    "virtualHost": {
      "type": "string",
      "description": "RabbitMQ virtual host."
    },
    "username": {
      "type": "string",
      "minLength": 1,
      "description": "Username for RabbitMQ authentication."
    },
    "password": {
      "type": "string",
      "description": "Password for RabbitMQ authentication."
    },
    "automaticRecoveryEnabled": {
      "type": "boolean",
      "description": "Enable automatic connection recovery after failures."
    },
    "connectionTimeout": {
      "type": "integer",
      "minimum": 0,
      "description": "Connection timeout in milliseconds."
    },
    "handshakeTimeout": {
      "type": "integer",
      "minimum": 0,
      "description": "AMQP handshake timeout in milliseconds."
    },
    "clientProperties": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "description": "Custom client properties sent to RabbitMQ during connection."
    }
  },
  "required": [
    "host"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Output message format

The node preserves the original message data and metadata in both success and failure cases. In case of failure, error details are added to the message metadata.

### Success case

When a message is successfully published to RabbitMQ, the outgoing message passes through unchanged. The original message data and metadata are preserved exactly as received.

### Failure case

When publishing fails, the following field is added to the outgoing message metadata:

- `error` – Contains the exception class name and error message in the format: `class <ExceptionClass>: <error message>`

**Example:**

Original message metadata:

```json
{
  "deviceType": "sensor"
}
```

After a failure (e.g., connection timeout), metadata becomes:

```json
{
  "deviceType": "sensor",
  "error": "class java.net.SocketTimeoutException: connect timed out"
}
```

The message data remains unchanged.

## Message acknowledgement behavior

The node's message acknowledgement behavior is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable:

- **When set to `true`** – The incoming message is acknowledged and marked as successfully processed immediately upon receipt. A new message is created with the updated metadata
  and is enqueued for processing by the next node.
- **When set to `false`** (default) – The incoming message remains in an in-processing state throughout the entire RabbitMQ publish operation. The message is transformed in place,
  its metadata is updated if an error occurs, and the modified message is passed to the next node after the publish completes.

## Message processing algorithm

1. The node constructs a RabbitMQ publish request:
    - If the **exchange name pattern** is configured, templates are resolved using values from the incoming message data and metadata. If empty, the default exchange is used.
    - If the **routing key pattern** is configured, templates are resolved using values from the incoming message data and metadata.
    - If **message properties** are specified, the corresponding AMQP BasicProperties are retrieved.
2. The message data is converted to bytes using UTF-8 encoding.
3. The publish operation is executed asynchronously:
    - The message is published to the specified exchange with the resolved routing key.
    - If message properties are configured, they are included in the publish.
4. When RabbitMQ accepts the message successfully:
    - The original message passes through unchanged.
    - The resulting message is forwarded via the `Success` connection.
5. If an error occurs during publishing:
    - Error details are added to the outgoing message metadata under the `error` key.
    - The message is forwarded via the `Failure` connection.

## Output connections

- **Success**
    - The message was successfully published to RabbitMQ.
    - The original message passes through unchanged.
- **Failure**
    - **Publishing error**: The RabbitMQ broker rejected the message or the exchange/routing configuration is invalid.
    - **Unexpected error**: An unexpected error occurred during message processing.

## Examples

### Example 1 — Basic telemetry publishing

Publish telemetry data to a dedicated telemetry exchange with device-type-based routing.

**Incoming message**

Data:

```json
{
  "temperature": 25.5,
  "humidity": 60.2
}
```

Metadata:

```json
{
  "deviceType": "TH-Sensor",
  "deviceName": "Sensor-001"
}
```

**Node configuration**

```json
{
  "exchangeNamePattern": "telemetry",
  "routingKeyPattern": "${deviceType}",
  "messageProperties": "PERSISTENT_TEXT_PLAIN",
  "host": "rabbitmq.example.com",
  "port": 5672,
  "virtualHost": "/",
  "username": "iot-user",
  "password": "secure-password",
  "automaticRecoveryEnabled": true,
  "connectionTimeout": 60000,
  "handshakeTimeout": 10000,
  "clientProperties": {
    "application": "thingsboard",
    "environment": "production"
  }
}
```

**Outgoing message**

Data and metadata: unchanged.

Routed via the `Success` connection.

**Result**

The telemetry data was successfully published to the "telemetry" exchange with routing key "TH-Sensor". The message is persistent and will survive a broker restart. RabbitMQ will
route the message to queues bound to the exchange with matching routing key patterns.

### Example 2 — Dynamic exchange and routing key

Publish alarm messages to severity-specific exchanges with hierarchical routing keys based on alarm data.

**Incoming message**

Data:

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "bfb13620-7737-400b-9c89-d569a0835de6"
  },
  "type": "HighTemperature",
  "severity": "CRITICAL",
  "originator": {
    "entityType": "DEVICE",
    "id": "b3e86d40-78f5-11f0-8e01-57f51829cedc"
  },
  "status": "ACTIVE_UNACK",
  "details": {
    "temperature": 95.5
  }
}
```

Metadata:

```json
{
  "tenantId": "888e6780-78f5-11f0-8e01-57f51829cedc",
  "deviceType": "temperature-sensor"
}
```

**Node configuration**

```json
{
  "exchangeNamePattern": "alarms-$[severity]",
  "routingKeyPattern": "alarm.$[type].${deviceType}",
  "messageProperties": "PERSISTENT_BASIC",
  "host": "rabbitmq.example.com",
  "port": 5672,
  "virtualHost": "/iot",
  "username": "alarm-publisher",
  "password": "secure-password",
  "automaticRecoveryEnabled": true,
  "connectionTimeout": 60000,
  "handshakeTimeout": 10000,
  "clientProperties": {}
}
```

**Outgoing message**

Data and metadata: unchanged.

Routed via the `Success` connection.

**Result**

The alarm was published to the "alarms-CRITICAL" exchange with routing key "alarm.HighTemperature.temperature-sensor". This allows consumers to subscribe to specific alarm
severities and types using topic exchange patterns.

### Example 3 — Using client properties for monitoring

Publish messages with custom client properties that help identify the connection in RabbitMQ management interface.

**Incoming message**

Data:

```json
{
  "value": 42
}
```

**Node configuration**

```json
{
  "exchangeNamePattern": "metrics",
  "routingKeyPattern": "performance",
  "messageProperties": "TEXT_PLAIN",
  "host": "rabbitmq.example.com",
  "port": 5672,
  "virtualHost": "/monitoring",
  "username": "metrics-user",
  "password": "secure-password",
  "automaticRecoveryEnabled": true,
  "connectionTimeout": 60000,
  "handshakeTimeout": 10000,
  "clientProperties": {
    "application": "thingsboard",
    "version": "3.6.0",
    "environment": "production",
    "node_id": "rule-engine-1"
  }
}
```

**Outgoing message**

Data and metadata: unchanged.

Routed via the `Success` connection.

**Result**

The message was successfully published. The client properties appear in the RabbitMQ management interface, making it easy to identify which ThingsBoard rule engine node created the
connection. This is useful for monitoring, debugging, and capacity planning.
