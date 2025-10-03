Pushes the incoming message from cloud to edge by converting it into an edge event and storing it in the edge queue. The message is routed to either the `Success` connection (if
the edge event is successfully pushed to persistent storage) or the `Failure` connection (if an error occurs during processing or the message type is unsupported).

## Usage

This node enables selective synchronization of data from cloud to edge instances. It is designed for scenarios where automatic synchronization of all data would be
resource-intensive or unnecessary. For example, edge instances typically don't need the full historical telemetry from all devices - they only need specific data relevant to their
local operations. Using this node, you can explicitly control which messages are synchronized to which edges, avoiding the overhead of transferring large volumes of data that won't
be used.

The typical workflow for pushing messages to edge follows these steps:

1. A message arrives at the "push to edge" node containing data that needs to be synchronized to edge instances (telemetry, attributes, alarms, etc.).

2. The node converts the message into an edge event based on the message type and stores it in persistent storage (edge queue).

3. The edge instance retrieves pending edge events from the queue for synchronization.

4. If the edge event is successfully pushed to persistent storage, the message is routed via the `Success` connection. If an error occurs, it's routed via the `Failure` connection.

{% capture async_note %}
**Asynchronous processing:** The `Success` connection indicates that the edge event was successfully pushed to persistent storage, not that it was delivered to the edge. The actual
delivery to the edge happens asynchronously.
{% endcapture %}
{% include templates/warn-banner.md content=async_note %}

{% capture originator_note %}
**Message originator requirements:** The message originator must either be assigned to a particular edge instance or be an `EDGE` entity itself. If the originator is an `EDGE`
entity, the event is pushed only to that edge. If the originator is another entity type (e.g., `DEVICE`, `ASSET`), the event is pushed to all edges that the entity is assigned to.
{% endcapture %}
{% include templates/info-banner.md content=originator_note %}

## Configuration

The configuration specifies the default attribute scope for attribute-related messages.

- **Attributes scope** - The default scope for attributes (`SERVER_SCOPE`, `CLIENT_SCOPE`, or `SHARED_SCOPE`). This value can be dynamically overridden by including a `scope` key
  in the message metadata.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbMsgPushToEdgeNodeConfiguration",
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
- `POST_ATTRIBUTES_REQUEST` - Attribute data posted to the device
- `ATTRIBUTES_UPDATED` - Device attributes have been updated
- `ATTRIBUTES_DELETED` - Device attributes have been deleted
- `TIMESERIES_UPDATED` - Time series data has been updated
- `ALARM` - Alarm created, updated, or cleared
- `ALARM_ACK` - Alarm acknowledged
- `ALARM_CLEAR` - Alarm cleared
- `CONNECT_EVENT` - Device connected
- `DISCONNECT_EVENT` - Device disconnected
- `ACTIVITY_EVENT` - Device activity detected
- `INACTIVITY_EVENT` - Device inactivity detected
- `TO_SERVER_RPC_REQUEST` - RPC request from device to server

## Message processing algorithm

1. The node validates that the message type is supported. If not, the message is routed via the `Failure` connection.

2. Based on the message type, the node builds an appropriate edge event.

3. If the message originator is an `EDGE` entity:
    - The edge event is pushed to persistent storage for that specific edge instance

4. If the message originator is another entity type:
    - The node finds all edges that the originator entity is assigned to
    - The edge event is pushed to persistent storage for each edge
    - If the entity is not assigned to any edges, the message is acknowledged without further processing

5. The message is routed via the `Success` connection if all edge events are successfully pushed to persistent storage, or via the `Failure` connection if any error occurs.

## Output connections

- `Success`
    - The edge event(s) were successfully pushed to persistent storage. The outgoing message is the same as the incoming message.
- `Failure`
    - An error occurred during processing, such as:
        - Unsupported message type
        - Unexpected error

## Examples

### Example 1 — Push device telemetry to edge

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

An edge event is created and pushed to persistent storage for all edges that originator device is assigned to. The edge event contains the telemetry data and timestamp.
When the edge instances retrieve this event, they will process it accordingly.
