Sends a [Remote Procedure Call (RPC)](/docs/{{docsPrefix}}user-guide/rpc){:target="_blank"} to a device. The device's response is returned as the outgoing message data and routed to either the
`Success` connection (if successful) or the `Failure` connection (if an error occurs).

## Configuration

- **Timeout in seconds** - Specifies the maximum time (in seconds) to wait for a response from the device before the RPC times out. The default value is 60 seconds. This
  timeout is used when no explicit expiration time is provided in the message metadata.

### Optional parameters from message

The node also processes the following optional parameters from the incoming message:

**From message metadata:**

- **oneway** (boolean) - Determines if a response is expected (default: `false`).
- **persistent** (boolean) - Indicates if the request should be persisted (default: `false`).
- **requestUUID** (string) - Unique identifier for the request, used internally for request tracking and database persistence. Generates a time-based UUID if not present.
- **originServiceId** (string) - Identifies the originating service, used to route the response to the correct service.
- **expirationTime** (long) - Request expiration timestamp in milliseconds, or calculates based on the configured timeout if not present.
- **retries** (integer) - Number of retry attempts.

**From message data:**

- **requestId** (integer) - Request identifier, or generates a random integer if not present. Used to match a response to its original request.
- **additionalInfo** (JSON) - Additional request information.

**Message type handling:**

- If the message type is `RPC_CALL_FROM_SERVER_TO_DEVICE`, the request is treated as REST API originated, and the response should be returned to that REST API call.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbSendRpcRequestNodeConfiguration",
  "type": "object",
  "properties": {
    "timeoutInSeconds": {
      "type": "integer",
      "description": "Maximum time to wait for device response in seconds."
    }
  },
  "required": [
    "timeoutInSeconds"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node validates that the message **originator** is a `DEVICE` entity type and that the message data contains the required **method** and **params** fields. If any validation
   fails, processing fails.
2. The node collects optional parameters from the message data and metadata and constructs the RPC.
3. The node sends the RPC to the originator device.
4. When a response is received:
    - **If successful**: The response data is forwarded via the `Success` connection
    - **If failed**: An error message containing the error name is forwarded via the `Failure` connection
5. The original message is acknowledged immediately after sending the RPC, regardless of the response.

## Output connections

- `Success`
    - The device responded successfully to the RPC. The outgoing message data contains the response from the device.
- `Failure`
    - An error occurred during processing, such as:
        - The originator is not a `DEVICE`
        - The required `method` field is missing from the message data
        - The required `params` field is missing from the message data
        - The device failed to respond or returned an error

## Examples

### Example 1 — Simple RPC with response

**Incoming message**

Originator: `DEVICE`.

Data:

```json
{
  "method": "setGpio",
  "params": {
    "pin": 7,
    "value": 1
  }
}
```

**Node configuration**

```json
{
  "timeoutInSeconds": 30
}
```

**Outgoing message**

Data:

```json
{
  "success": true
}
```

Routed via the `Success` connection.

**Result**

The RPC request "setGpio" is sent to the device with parameters specifying pin 7 should be set to value 1. The device acknowledges the command and responds with a success
confirmation.

### Example 2 — One-way RPC request

**Incoming message**

Originator: `DEVICE`.

Data:

```json
{
  "method": "reboot",
  "params": {}
}
```

Metadata:

```json
{
  "oneway": "true"
}
```

**Node configuration**

```json
{
  "timeoutInSeconds": 60
}
```

**Outgoing message**

The outgoing message metadata is an empty JSON, other message fields are the same. Routed via the `Success` connection.

Data: 

```json
{}
```

**Result**

The one-way RPC request "reboot" is sent to the device. Since this is a one-way call (indicated by the `oneway` metadata), the node does not wait for a detailed response from the
device.
