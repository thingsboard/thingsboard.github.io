Sends the incoming message data as a [reply](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial) to a [Remote Procedure Call (RPC)](/docs/{{docsPrefix}}user-guide/rpc){:target="_blank"} from a device. 
The reply is routed back to the originating service and session based on metadata attributes. 
The message is routed to either the `Success` connection (if successful) or the `Failure` connection (if an error occurs).

## Usage

The typical workflow for handling device RPC requests and sending replies follows these steps:

1. When a device sends an RPC request to the platform, a rule engine message of type `TO_SERVER_RPC_REQUEST` is automatically created. The message data contains the RPC payload
   from the device, and the metadata includes the service ID, session ID, and request ID needed for routing the reply.

2. In your rule chain, process this message to prepare the response. This may involve enriching the message with additional data, transforming the payload, calling external
   systems, or any other business logic required to generate the appropriate reply.

3. Once the response is ready in the message data, route the message to the RPC call reply node. The node will use the metadata to send the reply back to the originating device.

4. **Important**: Ensure that the service ID, session ID, and request ID metadata attributes are preserved throughout your message processing. If these values are lost or
   overwritten, the reply cannot be routed back to the device.

## Configuration

The configuration parameters specify the metadata key names used to identify the service, session, and request for sending a reply back.

- **Service Id** - Metadata key name for the service identifier. The default value is `serviceId`. This identifies the originating service that should receive the reply.
- **Session Id** - Metadata key name for the session identifier. The default value is `sessionId`. This identifies the specific session within the service.
- **Request Id** - Metadata key name for the request identifier. The default value is `requestId`. This identifies the specific RPC request being replied to.

{% capture reasonable_defaults_note %}
While these parameters can be customized for advanced use cases, the defaults work well for most scenarios and typically don't need to be changed. The RPC message already contains
the routing parameters (service ID, session ID, and request ID) in the metadata.
{% endcapture %}
{% include templates/info-banner.md content=reasonable_defaults_note %}

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbSendRpcReplyNodeConfiguration",
  "type": "object",
  "properties": {
    "serviceIdMetaDataAttribute": {
      "type": "string",
      "description": "Metadata key name for the service identifier."
    },
    "sessionIdMetaDataAttribute": {
      "type": "string",
      "description": "Metadata key name for the session identifier."
    },
    "requestIdMetaDataAttribute": {
      "type": "string",
      "description": "Metadata key name for the request identifier."
    }
  },
  "required": [
    "serviceIdMetaDataAttribute",
    "sessionIdMetaDataAttribute",
    "requestIdMetaDataAttribute"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node validates that the message*originator is a `DEVICE`. If validation fails, processing fails.
2. The node extracts the service ID, session ID, and request ID from the message metadata using the configured key names. If any of these values are missing, processing fails.
3. The node validates that the message data (reply body) is not empty. If empty, processing fails.
4. The node checks if the message is from an edge device by looking for an `edgeId` in the metadata:
    - If edge ID is present: The reply is saved to the edge event queue for asynchronous delivery to the edge.
    - If edge ID is not present: The reply is sent directly to the device using the RPC service.
5. When processing completes successfully, the message is forwarded via the `Success` connection.

## Output connections

- `Success`
    - The RPC reply was sent successfully (either directly or queued for edge delivery). The outgoing message is the same as the incoming message.
- `Failure`
    - An error occurred during processing, such as:
        - The originator is not a `DEVICE`
        - The service ID is missing from the metadata
        - The session ID is missing from the metadata
        - The request ID is missing from the metadata
        - The message data (reply body) is empty
        - Failed to parse edge ID or device ID from metadata
        - Failed to save the edge event

## Examples

### Example 1 — Simple RPC reply

**Incoming message**

Originator: `DEVICE`.

Data:

```json
{
  "timestamp": 1727712000000
}
```

Metadata:

```json
{
  "serviceId": "monolith",
  "sessionId": "550e8400-e29b-41d4-a716-446655440000",
  "requestId": "12345"
}
```

**Node configuration**

```json
{
  "serviceIdMetaDataAttribute": "serviceId",
  "sessionIdMetaDataAttribute": "sessionId",
  "requestIdMetaDataAttribute": "requestId"
}
```

**Outgoing message**

The outgoing message is the same as the incoming message. Routed via the `Success` connection.

**Result**

The device requested the current server time, and the server responds with the current UNIX timestamp (in milliseconds). The RPC reply is sent back to service `monolith`, session
`550e8400-e29b-41d4-a716-446655440000`, for request ID `12345`.
