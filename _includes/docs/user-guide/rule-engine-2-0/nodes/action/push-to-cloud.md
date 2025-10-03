Pushes the incoming message from edge to cloud by converting it into a cloud event and storing it in the cloud queue. The message is routed to either the `Success` connection (if
the cloud event is successfully pushed to persistent storage) or the `Failure` connection (if an error occurs during processing or the message type is unsupported).

## Usage

This node is used exclusively on edge instances to synchronize data from edge to cloud. Most configuration changes made on edge instances (such as updating device names or
relations) are automatically synchronized with the cloud. However, certain types of data synchronization would be resource-intensive if done automatically - for
example, streaming all local telemetry data to the cloud. This node enables selective synchronization of such data, allowing you to explicitly control
which messages are pushed to the cloud.

When a message arrives at this node, it's converted into a cloud event and saved to the local edge database in a cloud queue. The actual delivery to the cloud happens
asynchronously - the edge synchronization service retrieves these queued events and transmits them to the cloud.

The typical workflow for pushing messages to cloud follows these steps:

1. A message arrives at the "push to cloud" node on the edge instance containing data that needs to be synchronized to the cloud (telemetry, attributes, alarms, etc.).

2. The node converts the message into a cloud event based on the message type and stores it in persistent storage (cloud queue).

3. The edge synchronization service retrieves pending cloud events from the queue and transmits them to the cloud platform.

4. If the cloud event is successfully pushed to persistent storage, the message is routed via the `Success` connection. If an error occurs, it's routed via the `Failure`
   connection.

{% capture async_note %}
**Asynchronous processing:** The `Success` connection indicates that the cloud event was successfully pushed to persistent storage on the edge, not that it was delivered to the
cloud. The actual delivery to the cloud happens asynchronously through the edge synchronization process.
{% endcapture %}
{% include templates/warn-banner.md content=async_note %}

## Configuration

The configuration specifies the default attribute scope for attribute-related messages.

- **Attributes scope** - The default scope for attributes (`SERVER_SCOPE`, `CLIENT_SCOPE`, or `SHARED_SCOPE`). This value can be dynamically overridden by including a `scope` key
  in the message metadata.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbMsgPushToCloudNodeConfiguration",
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "description": "The default attribute scope for attribute-related messages.",
      "enum": [
        "SERVER_SCOPE",
        "CLIENT_SCOPE",
        "SHARED_SCOPE"
      ]
    }
  },
  "required": [
    "scope"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Supported message types

The node supports the following message types:

- `POST_TELEMETRY_REQUEST` - Time series data posted to the device
- `TIMESERIES_UPDATED` - Time series data has been updated
- `TIMESERIES_UPDATED` - Time series data has been deleted
- `POST_ATTRIBUTES_REQUEST` - Attribute data posted to the device
- `ATTRIBUTES_UPDATED` - Device attributes have been updated
- `ATTRIBUTES_DELETED` - Device attributes have been deleted

## Message processing algorithm

1. The node validates that the message type is supported. If not, the message is routed via the `Failure` connection.

2. Based on the message type, the node builds an appropriate cloud event.

3. The cloud event is saved to persistent storage.

4. The message is routed via the `Success` connection if the cloud event is successfully pushed to persistent storage, or via the `Failure` connection if any error occurs.

## Output connections

- `Success`
    - The cloud event was successfully pushed to persistent storage on the edge. The outgoing message is the same as the incoming message.
- `Failure`
    - An error occurred during processing, such as:
        - Unsupported message type
        - Unexpected error

## Examples

### Example 1 — Push device time series to cloud

**Incoming message**

Originator: `DEVICE`.

Type: `POST_TELEMETRY_REQUEST`.

Data:

```json
{
  "temperature": 22.5,
  "humidity": 65.3
}
```

Metadata:

```json
{
  "ts": "1609459200000"
}
```

**Node configuration**

```json
{
  "scope": "SERVER_SCOPE"
}
```

**Outgoing message**

The outgoing message is the same as the incoming message. Routed via the `Success` connection.

**Result**

A cloud event is created and pushed to persistent storage in the edge's cloud queue. The event contains the telemetry data and timestamp. When the edge synchronization service
retrieves this event, it will be transmitted to the cloud platform where it will be processed.
