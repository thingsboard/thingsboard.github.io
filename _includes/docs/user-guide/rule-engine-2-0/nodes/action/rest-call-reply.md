Sends the incoming message data as a reply to a REST API call to the rule engine. The reply is routed back to the originating service and request based on metadata attributes. The
message is routed to either the `Success` connection (if successful) or the `Failure` connection (if an error occurs).

## Usage

### Making REST API calls to the rule engine

To submit a message to the rule engine via REST API, use one of the following POST endpoints:

- `POST /api/rule-engine/` — Push a message to the rule engine.
- `POST /api/rule-engine/{entityType}/{entityId}` — Push a message associated with a specific entity (e.g., device, asset).
- `POST /api/rule-engine/{entityType}/{entityId}/{timeout}` — Push an entity message with a custom timeout value (in milliseconds).
- `POST /api/rule-engine/{entityType}/{entityId}/{queueName}/{timeout}` — Push an entity message to a specific queue with a custom timeout value.

The request body should contain the message payload in JSON format. 
When no entity is specified in the endpoint, the message originator will be the user making the request. 
When an entity is specified, the message originator will be that entity. 
The platform will automatically add the service ID and request ID to the message metadata, which are required for routing the reply back to the calling client.

### Workflow

The typical workflow for handling REST API calls to the rule engine and sending replies follows these steps:

1. When an external system or user sends a REST API call to submit a message to the ThingsBoard rule engine, a rule engine message of type `REST_API_REQUEST` is automatically created. 
   The message data contains the payload from the API call, and the metadata includes the service ID and request ID needed for routing the reply back as an HTTP response.

2. In your rule chain, process this message to prepare the response. This may involve enriching the message with additional data, transforming the payload, calling external
   systems, or any other business logic required to generate the appropriate reply.

3. Once the response is ready in the message data, route the message to the "rest call reply" node. The node will use the metadata to send the reply back to the originating
   service, which will return it as the HTTP response to the initial REST API call.

4. **Important**: Ensure that the `serviceId` and `requestId` metadata attributes are preserved throughout your message processing. If these values are lost or overwritten, the reply
   cannot be routed back and the API call will time out.

{% capture timeout_warning %}
**Timeout handling:** If the REST API call times out before receiving a reply, the platform will respond with `408 REQUEST TIMEOUT`. 
This can occur even when the "rest call reply" node is present in your rule chain if a failure happens in an earlier node and prevents the message from reaching the reply node. 
When such timeout requests are made from a browser, the browser may silently retry the call, causing multiple rule engine executions for the same request. 
To avoid this issue, ensure that your rule chain handles errors appropriately and that the reply is returned before the timeout occurs. 
Set a sufficient timeout value on the original REST API call to allow for complete processing.
{% endcapture %}
{% include templates/warn-banner.md content=timeout_warning %}

## Configuration

The configuration parameters specify the metadata key names used to identify the service and request for sending a reply back.

- **Service Id** - Metadata key name for the service identifier. The default value is `serviceId`. This identifies the originating service that should receive the reply.
- **Request Id** - Metadata key name for the request identifier. The default value is `requestUUID`. This identifies the specific REST API request being replied to.

{% capture reasonable_defaults_note %}
While these parameters can be customized for advanced use cases, the defaults work well for most scenarios and typically don't need to be changed. The REST API message already
contains the routing parameters (service ID and request ID) in the metadata.
{% endcapture %}
{% include templates/info-banner.md content=reasonable_defaults_note %}

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbSendRestApiCallReplyNodeConfiguration",
  "type": "object",
  "properties": {
    "serviceIdMetaDataAttribute": {
      "type": "string",
      "description": "Metadata key name for the service identifier."
    },
    "requestIdMetaDataAttribute": {
      "type": "string",
      "description": "Metadata key name for the request identifier."
    }
  },
  "required": [
    "serviceIdMetaDataAttribute",
    "requestIdMetaDataAttribute"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node extracts the service ID and request ID from the message metadata using the configured key names. If the request ID is missing, processing fails.
2. The node validates that the service ID is present in the metadata. If missing, processing fails.
3. The node validates that the message data (reply body) is not empty. If empty, processing fails.
4. The node sends the reply back to the originating REST API call as an HTTP response.
5. When processing completes successfully, the message is forwarded via the `Success` connection.

## Output connections

- `Success`
    - The REST API reply was sent successfully. The outgoing message is the same as the incoming message.
- `Failure`
    - An error occurred during processing, such as:
        - The request ID is missing from the metadata
        - The service ID is missing from the metadata
        - The message data (reply body) is empty
        - Failed to parse the request ID as a UUID

## Examples

### Example 1 — Simple REST API reply

**Incoming message**

Originator: `DEVICE`.

Data:

```json
{
  "status": "completed",
  "fileName": "sensor_data_2024_10_02.csv",
  "fileSize": 15360,
  "recordsProcessed": 1250
}
```

Metadata:

```json
{
  "serviceId": "monolith",
  "requestUUID": "a1b2c3d4-e5f6-47a8-b9c0-d1e2f3a4b5c6"
}
```

**Node configuration**

```json
{
  "serviceIdMetaDataAttribute": "serviceId",
  "requestIdMetaDataAttribute": "requestUUID"
}
```

**Outgoing message**

The outgoing message is the same as the incoming message. Routed via the `Success` connection.

**Result**

User made a REST API call to the rule engine to trigger downloading a data file from an external FTP server. 
The rule chain processed this request by connecting to the FTP server, downloading the file, processing the records, and preparing a response with the operation results. 
The "rest api reply" node sends this data back as the HTTP response body to the original REST API call made to service `monolith` with request ID `a1b2c3d4-e5f6-47a8-b9c0-d1e2f3a4b5c6`.
