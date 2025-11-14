Adds fields from the message originator's entity (e.g., name, type, label) to either the message data or the message metadata.

## Configuration

The node's configuration allows you to define a mapping from the originator's entity fields to new keys in the message.

- **Originator fields mapping** - This section defines the core logic of the node. Each entry maps a source field from the originator to a target key in the output.
    - **Source field**: A dropdown list of available fields from the originator entity (e.g., *Name*, *Profile name*, *Label*, *Created time*).
    - **Target key**: The new key that will be added to the message data or metadata. This field supports templatization, allowing you to dynamically create keys using values from
      the message data (`$[dataKey]`) or metadata (`${metadataKey}`).
- **Add mapped originator fields to** - Determines where the new key-value pairs will be placed.
    - **Message**: Adds the fetched fields to the message data payload. The message data must be a JSON object.
    - **Metadata**: Adds the fetched fields to the message metadata.
- **Skip empty fields** - If checked, any source fields on the originator that are empty or have a null value will be ignored and not added to the message.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbGetOriginatorFieldsNodeConfiguration",
  "type": "object",
  "properties": {
    "fetchTo": {
      "type": "string",
      "enum": [
        "DATA",
        "METADATA"
      ],
      "description": "Destination for the fetched data (message data or metadata)."
    },
    "dataMapping": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "description": "A map where keys are the source field names from the originator and values are the target keys for the message."
    },
    "ignoreNullStrings": {
      "type": "boolean",
      "description": "If true, fields with empty or null values will be skipped."
    }
  },
  "required": [
    "dataMapping",
    "fetchTo"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node identifies the originator of the incoming message (e.g., the specific Device or Asset).
2. It reads the **Originator fields mapping** to determine which fields to retrieve.
3. For each mapping, it processes any templates (e.g., `${metadataKey}`) in the **Target key** using the incoming message's data and metadata.
4. The node then asynchronously fetches the values of the specified **Source fields** from the originator entity.
5. If a source field does not exist on the originator, it is ignored. If **Skip empty fields** is enabled, fields with null or empty values are also ignored.
6. Based on the **Add mapped originator fields to** setting, the node adds the resulting key-value pairs (processed target key and fetched field value) to either the message data
   or the message metadata.
7. The enriched message is forwarded via the `Success` connection. If an error occurs (e.g., attempting to add fields to a non-JSON message body), the original message is routed to
   the `Failure` connection.

## Output connections

- `Success`:
    - The message has been successfully enriched with the originator's fields.
- `Failure`:
    - An error occurred during processing. For instance, if **Add mapped originator fields to** is set to `Message` but the message data is not a valid JSON object.

## Examples

### Example 1 — Adding originator name and profile name to metadata

This example shows how to enrich a message with the name and type of the device that sent it.

**Scenario**: A thermostat sends a temperature reading. For subsequent processing, we need to know the name and profile name of this thermostat, so we add them to the message
metadata.

**Incoming message**

Metadata:

```json
{
  "ts": "1756479659000"
}
```

Originator: The originator of the message is a device named **Thermostat-HVAC-1** which uses a device profile named **HVAC Thermostat**.

**Node configuration**

```json
{
  "dataMapping": {
    "name": "originatorName",
    "type": "originatorProfileName"
  },
  "fetchTo": "METADATA",
  "ignoreNullStrings": false
}
```

**Outgoing message**

Metadata:

```json
{
  "ts": "1756479659000",
  "originatorName": "Thermostat-HVAC-1",
  "originatorProfileName": "HVAC Thermostat"
}
```

**Explanation**: The node fetched the `Name` and `Profile name` fields from the originator device and added them to the message metadata under the new keys `originatorName` and
`originatorProfileName`.

### Example 2 — Adding originator fields to the message data

This example demonstrates adding the originator's creation time to the message data.

**Scenario**: For auditing purposes, we need to include the timestamp of when the sending device was first created directly within the message data.

**Incoming message**

Data:

```json
{
  "humidity": 58.2
}
```

**Node configuration**

```json
{
  "dataMapping": {
    "createdTime": "deviceCreatedTime"
  },
  "fetchTo": "DATA",
  "ignoreNullStrings": false
}
```

**Outgoing message**

The message is sent via the `Success` connection with an updated data.

Data:

```json
{
  "humidity": 58.2,
  "deviceCreatedTime": "1672531200000"
}
```

**Explanation**: The node retrieved the `Created Time` of the originator (as a Unix timestamp string) and added it to the JSON message data with the key `deviceCreatedTime`.
