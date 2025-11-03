Publishes messages to [Azure IoT Hub](https://azure.microsoft.com/en-us/products/iot-hub) with QoS 1 (at least once) using
the [MQTT protocol](https://learn.microsoft.com/en-us/azure/iot/iot-mqtt-connect-to-iot-hub#sending-device-to-cloud-messages) over secure TLS connection. Supports dynamic topic
patterns populated with data from incoming
messages and multiple authentication methods including SAS tokens and certificate-based authentication.

## Configuration

### Topic

Specifies the Azure IoT Hub topic where messages will be published. Supports [templatization](/docs/{{docsPrefix}}user-guide/templatization/).

### Hostname

The hostname of your Azure IoT Hub in the format `<iot-hub-name>.azure-devices.net`.

{% capture port_note %}
**Note**: The port is fixed at 8883 (Azure IoT Hub standard MQTT port).
{% endcapture %}
{% include templates/info-banner.md content=port_note %}

{% capture connection_behavior_note %}
**Note**: All connections to Azure IoT Hub use the following fixed settings: SSL enabled, clean session enabled, QoS 1 (at least once), and no retained messages.
{% endcapture %}
{% include templates/info-banner.md content=connection_behavior_note %}

### Device ID

The device identifier for connecting to Azure IoT Hub. This field is required and must match a device ID registered in your Azure IoT Hub.

### Protocol version

The MQTT protocol version used for the connection. Only **MQTT 3.1.1** is supported.

### Credentials

Authentication credentials for connecting to Azure IoT Hub. The node supports two credential types:

#### SAS Token (Shared Access Signature)

Token-based authentication
using [Azure IoT Hub Shared Access Signatures](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-authenticate-downstream-device#symmetric-key-authentication). This is the
most common authentication method for Azure IoT Hub.

**Configuration**:

- **SAS Key** – The shared access key for the device. This is generated when you register a device in Azure IoT Hub. The node automatically generates the SAS token from this key.
- **CA certificate file** – Optional. The Certificate Authority (CA) certificate for verifying the Azure IoT Hub server. If not provided, the node automatically uses the DigiCert
  Global Root G2 certificate.

{% capture sas_credentials_note %}
**Note**: The SAS key and CA certificate file can be uploaded directly or referenced from [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} for enhanced
security.
{% endcapture %}
{% include templates/info-banner.md content=sas_credentials_note %}

#### PEM Certificate (X.509)

Certificate-based authentication using [X.509 certificates](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-authenticate-downstream-device#x509-ca-signed-authentication).
This provides enhanced security through certificate-based mutual [TLS authentication](https://learn.microsoft.com/en-us/azure/iot/iot-mqtt-connect-to-iot-hub#tls-configuration).

**Configuration**:

- **CA certificate file** – Optional. The Azure IoT Hub CA certificate. If not provided, the node automatically uses the DigiCert Global Root G2 certificate.
- **Client certificate file** – The X.509 client certificate registered with your device in Azure IoT Hub. This certificate must be uploaded to Azure IoT Hub before use.
- **Client private key file** – The private key corresponding to the client certificate.
- **Private key password** – Optional password if the private key file is encrypted.

{% capture cert_credentials_note %}
**Note**: Certificate and key files can be uploaded directly or referenced from [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} for enhanced security.
{% endcapture %}
{% include templates/info-banner.md content=cert_credentials_note %}

### Additional information

#### Singleton mode

The Azure IoT Hub node operates exclusively in **Singleton mode**. This means:

- The rule node is launched on only one rule engine instance, regardless of how many rule engine instances are running in the cluster
- There is only one MQTT client connection to Azure IoT Hub
- This prevents conflicts with Azure IoT Hub's device connection policies

{% capture singleton_note %}
**Note**: Singleton mode cannot be disabled for the Azure IoT Hub node. This is a platform requirement to ensure proper device identity management with Azure IoT Hub.
{% endcapture %}
{% include templates/info-banner.md content=singleton_note %}

#### Force acknowledgement

The force acknowledgement mechanism is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable. When this variable is set to `true`, it applies to all external
nodes including the Azure IoT Hub node.

**Behavior when force acknowledgement is enabled**:

- The incoming message is acknowledged immediately and a copy is created
- The Azure IoT Hub publish operation executes
- Once the publish operation completes, the message copy is added to the queue for processing by the next node
- This prevents message processing timeouts for slow network connections or Azure IoT Hub throttling

**Behavior when force acknowledgement is disabled** (default):

- The original incoming message is held until the Azure IoT Hub publish operation completes
- The message is then passed to the next node

#### MQTT retransmission

The node uses the platform's internal MQTT client, which includes a retransmission mechanism to improve reliability for QoS 1 messages. When a PUBLISH message is sent, the client
waits for an acknowledgment from Azure IoT Hub. If no acknowledgment is received within a configurable delay period, the message is retransmitted.

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
  "title": "TbAzureIotHubNodeConfiguration",
  "type": "object",
  "properties": {
    "topicPattern": {
      "type": "string",
      "minLength": 1,
      "default": "devices/<device_id>/messages/events/",
      "description": "Azure IoT Hub topic where messages will be published (supports templatization)."
    },
    "host": {
      "type": "string",
      "minLength": 1,
      "description": "Azure IoT Hub hostname in format <iot-hub-name>.azure-devices.net"
    },
    "port": {
      "type": "integer",
      "const": 8883,
      "description": "Port number (fixed at 8883 for Azure IoT Hub)."
    },
    "clientId": {
      "type": "string",
      "minLength": 1,
      "description": "Device identifier (must match Azure IoT Hub device ID)."
    },
    "cleanSession": {
      "type": "boolean",
      "const": true,
      "description": "Always true for Azure IoT Hub (no stored state)."
    },
    "ssl": {
      "type": "boolean",
      "const": true,
      "description": "Always true for Azure IoT Hub (TLS/SSL required)."
    },
    "protocolVersion": {
      "type": "string",
      "const": "MQTT_3_1_1",
      "description": "MQTT protocol version (only MQTT 3.1.1 is supported)."
    },
    "credentials": {
      "type": "object",
      "oneOf": [
        {
          "properties": {
            "type": {
              "const": "SAS"
            },
            "sasKey": {
              "type": "string",
              "description": "Azure IoT Hub shared access key."
            },
            "caCert": {
              "type": "string",
              "description": "Azure IoT Hub CA certificate (optional, defaults to Azure's CA)."
            }
          },
          "required": [
            "type",
            "sasKey"
          ]
        },
        {
          "properties": {
            "type": {
              "const": "CERT_PEM"
            },
            "caCert": {
              "type": "string",
              "description": "Azure IoT Hub CA certificate (optional, defaults to Azure's CA)."
            },
            "cert": {
              "type": "string",
              "description": "X.509 client certificate."
            },
            "privateKey": {
              "type": "string",
              "description": "Client private key."
            },
            "password": {
              "type": "string",
              "description": "Private key password (optional)."
            }
          },
          "required": [
            "type",
            "cert",
            "privateKey"
          ]
        }
      ],
      "description": "Authentication credentials (SAS or X.509 certificate)."
    }
  },
  "required": [
    "topicPattern",
    "host",
    "port",
    "cleanSession",
    "ssl",
    "protocolVersion",
    "credentials"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Rule node initialization

When the rule node is initialized, it establishes a secure connection to Azure IoT Hub. If no CA certificate is provided, the node automatically uses the DigiCert Global Root G2
certificate. Once the connection is established, it remains open for the lifetime of the rule node, ready to publish messages to Azure IoT Hub.

## Message processing

For each incoming message, the node performs the following steps:

1. If **Force acknowledgement** is enabled, the incoming message is acknowledged immediately and a copy is created.
2. The node processes the **Topic** pattern, replacing templates with values from the incoming message data and metadata to construct the final Azure IoT Hub topic.
3. The node publishes the message data to Azure IoT Hub:
    - The message is published to the constructed topic with **QoS 1 (AT_LEAST_ONCE)**.
    - The connection uses the automatically configured Azure IoT Hub credentials and settings.
4. When the publish operation completes:
    - On success, the original message (or the message copy if force acknowledgement is enabled) is forwarded via the `Success` connection.
    - On failure, error details are added to the message metadata under the `error` key, and the message is forwarded via the `Failure` connection.

## Rule node shutdown

When the rule node is shut down, it disconnects from Azure IoT Hub and releases all associated resources.

Shutdown occurs in the following scenarios:

- **Rule node configuration is updated** – The node is destroyed and then re-initialized with the new configuration.
- **Rule node is deleted** – The node is destroyed without re-initialization.

{% capture shutdown_note %}
**Note**: The shutdown process is not executed if the rule engine instance crashes or is forcibly terminated (e.g., SIGTERM, SIGKILL).
{% endcapture %}
{% include templates/info-banner.md content=shutdown_note %}

## Outgoing message format

**On success**:

- The message is forwarded unchanged via the `Success` connection

**On failure**:

- Error details are added to the message metadata under the `error` key in the format: `ExceptionClass: error message`
- All other message properties remain unchanged

## Output connections

- **Success**
    - The message was successfully published to Azure IoT Hub.
    - Azure IoT Hub acknowledged receipt of the message (QoS 1).
- **Failure**
    - The publish operation failed.
    - An unexpected error occurred during processing.

## Examples

### Example 1 — Publishing device telemetry to Azure IoT Hub using SAS token

A temperature sensor sends telemetry data that needs to be forwarded to Azure IoT Hub. The device is registered in Azure IoT Hub and uses SAS token authentication. Force
acknowledgement is disabled.

**Incoming message**

Originator: `DEVICE` (Temperature Sensor)

Metadata:

```json
{
  "deviceId": "temp-sensor-001",
  "deviceType": "TemperatureSensor",
  "ts": 1672531200000
}
```

Data:

```json
{
  "temperature": 22.5,
  "humidity": 65,
  "pressure": 1013.25
}
```

**Node configuration**

```json
{
  "topicPattern": "devices/${deviceId}/messages/events/",
  "host": "my-company-hub.azure-devices.net",
  "port": 8883,
  "clientId": "temp-sensor-001",
  "cleanSession": true,
  "ssl": true,
  "protocolVersion": "MQTT_3_1_1",
  "credentials": {
    "type": "SAS",
    "sasKey": "xlR3T8vK2mN5hQ7wP1jY9sZ4fG6bV0cX=="
  }
}
```

**Outgoing message**

The outgoing message is the same as the incoming message. Since force acknowledgement is disabled, the original incoming message is passed to the next node after successful
publish.

**Result**

The node automatically:

1. Constructs the MQTT username: `my-company-hub.azure-devices.net/temp-sensor-001/?api-version=2020-09-30`
2. Generates a SAS token from the provided SAS key
3. Establishes a secure TLS connection on port 8883
4. Publishes the message to topic `devices/temp-sensor-001/messages/events/`

The message data is sent to Azure IoT Hub and becomes available for routing and processing by Azure services. The message is then routed via the `Success` connection.
