Pushes the incoming message as a downlink message to a selected integration. The message is routed to either the `Success` connection (if successfully submitted to the
integration) or the `Failure` connection (if an error occurs during submission).

## Usage

The typical workflow for sending downlink messages through integrations follows these steps:

1. A message arrives at the integration downlink node containing the data you want to send to the device. This could be a command, configuration update, or any other payload.

2. The message is pushed to the integration, where it is processed according to its protocol-specific logic (e.g., publishing to an MQTT topic).

3. If the message is successfully submitted to the integration, it's routed via the `Success` connection. If an error occurs during submission, it's routed via the `Failure`
   connection.

{% capture async_note %}
**Asynchronous processing:** The `Success` connection indicates that the message was successfully submitted to the integration for processing, not that the downlink was delivered
to the device. The actual delivery to the device happens asynchronously by the integration.
{% endcapture %}
{% include templates/warn-banner.md content=async_note %}

{% capture integration_note %}
**Integration setup required:** Before using this node, ensure that the target integration is properly configured and enabled in your ThingsBoard instance.
{% endcapture %}
{% include templates/info-banner.md content=integration_note %}

## Configuration

The configuration specifies which integration should receive the downlink messages.

- **Integration** - The integration to which downlink messages will be pushed.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbIntegrationDownlinkConfiguration",
  "type": "object",
  "properties": {
    "integrationId": {
      "type": "string",
      "format": "uuid",
      "description": "The UUID of the integration to push downlink messages to."
    }
  },
  "required": [
    "integrationId"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node pushes the entire incoming message to the integration.
2. When the message is successfully submitted to the integration, it's forwarded via the `Success` connection.

## Output connections

- `Success`
    - The message was successfully submitted to the integration for processing. The outgoing message is the same as the incoming message.
- `Failure`
    - An error occurred during submission, such as:
        - The integration does not exist
        - The integration is disabled
        - Failed to submit the message to the integration

## Examples

### Example 1 — Forward telemetry to external MQTT broker

**Incoming message**

Originator: `DEVICE`.

Data:

```json
{
  "voltage": 230.5,
  "current": 12.3,
  "power": 2835.15,
  "energy": 145.6
}
```

Metadata:

```json
{
  "deviceName": "smart-meter-001",
  "deviceType": "smart-meter"
}
```

**Node configuration**

```json
{
  "integrationId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"
}
```

**Outgoing message**

The outgoing message is the same as the incoming message. Routed via the `Success` connection.

**Result**

The telemetry data is successfully submitted to an MQTT integration configured to forward data to an external analytics platform. The integration will publish the message
to the appropriate MQTT topic on the external broker for further processing.
