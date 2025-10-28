Periodically generates messages with configurable content and timing.

## Configuration

### Generation parameters

- **Generated messages limit**: Number of messages to generate before stopping. Set to 0 for unlimited message generation.
- **Generation frequency in seconds**: Time interval between message generations in seconds.

### Originator

Specifies the originator entity for generated messages. The configuration depends on the selected entity type:

- **Type**: The entity type that will be set as the originator of generated messages. Supported types include:
    - Device
    - Asset
    - Entity View
    - Current Tenant
    - Customer
    - User
    - Dashboard
    - Edge
    - Current Rule Node
    - Converter
    - Integration
    - Scheduler Event
    - Blob Entity
    - Role
    - Entity Group

#### Configuration by originator type:

- **Current Tenant / Current Rule Node**: No additional configuration required. Uses the current tenant or the generator node itself as the originator.

- **Entity Group**: Requires additional group configuration:
    - **Group Owner**: The owner of the group
    - **Entity Type**: The type of entities contained within the group
    - **Group**: The specific entity group to use

- **All other types**: Requires selecting the specific entity to use as the originator.

### Generator function

The code entered into the script editor acts as the body of a generator function. This function implicitly receives three arguments that are available as variables in your script:

- `prevMsg` - the data of the previously generated message, typically as a JSON object.
- `prevMetadata` - the metadata of the previously generated message, as a key-value object where all values are strings.
- `prevMsgType` - the type of the previously generated message, as a string.

For the very first generated message, when no previous message exists:

- `prevMsg` will be an empty JSON object `{}`
- `prevMetadata` will be an empty JSON object `{}`
- `prevMsgType` will be an empty string `""`

The function must **return** an object containing the following keys:

- `msg` - the data for the new outgoing message.
- `metadata` - the metadata for the new message.
- `msgType` - the type for the new message.

### Queue

- **Queue**: Selects the queue where the generated message will be placed for persistence and durability. The "Main" queue is used when not selected.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbMsgGeneratorNodeConfiguration",
  "type": "object",
  "properties": {
    "msgCount": {
      "type": "integer",
      "description": "Number of messages to generate (0 = unlimited)"
    },
    "periodInSeconds": {
      "type": "integer",
      "description": "Generation frequency in seconds"
    },
    "originatorId": {
      "type": "string",
      "description": "ID of the originator entity"
    },
    "originatorType": {
      "type": "string",
      "enum": [
        "DEVICE",
        "ASSET",
        "ENTITY_VIEW",
        "TENANT",
        "CUSTOMER",
        "USER",
        "DASHBOARD",
        "EDGE",
        "RULE_NODE",
        "CONVERTER",
        "INTEGRATION",
        "SCHEDULER_EVENT",
        "BLOB_ENTITY",
        "ROLE",
        "ENTITY_GROUP"
      ],
      "description": "Type of the originator entity"
    },
    "scriptLang": {
      "type": "string",
      "enum": [
        "TBEL",
        "JS"
      ],
      "description": "Script language for generator function"
    },
    "jsScript": {
      "type": "string",
      "description": "JavaScript generator function"
    },
    "tbelScript": {
      "type": "string",
      "description": "TBEL generator function"
    }
  }
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

The generator node operates independently of incoming messages, meaning it does not accept messages from other rule nodes (only self-scheduled messages trigger generation).
The processing follows this cycle:

1. Node receives a self-scheduled `GENERATOR_NODE_SELF_MSG` message
2. Executes the generator function with access to previous generated message
3. Creates a new message with:
    - Originator set to the configured entity
    - Data, metadata, and type from script execution result
4. Routes the generated message through the `Success` connection
5. If message count limit not reached, schedules the next generation cycle
6. Increments the current message count

## Output connections

- `Success`
    - Generated messages
- `Failure`
    - Self-scheduled message if generator script fails or another unexpect error occurs during generation

## Examples

### Example 1 — Basic daily message generation

**Node configuration**

```json
{
  "msgCount": 0,
  "periodInSeconds": 86400,
  "originatorType": "RULE_NODE",
  "scriptLang": "TBEL",
  "tbelScript": "var msg = {};\nvar metadata = {};\nvar msgType = \"CUSTOM\";\n\nreturn { msg: msg, metadata: metadata, msgType: msgType };"
}
```

**Generated message**

Type: `CUSTOM`

Data:

```json
{}
```

Metadata:

```json
{}
```

Originator: `RULE_NODE` (the generator node itself)

**Result**

Once per day (every 86400 seconds), the node generates an empty message, running indefinitely.

### Example 2 — Sequential counter messages

**Node configuration**

```json
{
  "msgCount": 3,
  "periodInSeconds": 60,
  "originatorType": "DEVICE",
  "originatorId": "3bc2eb60-8d77-11f0-8a6c-59050cd4204f",
  "scriptLang": "TBEL",
  "tbelScript": "var counter = 1;\nif (!prevMsg.isEmpty()) {\n    counter = prevMsg.counter + 1;\n}\n\nvar msg = {\n    counter: counter\n};\n\nvar metadata = {};\nvar msgType = \"POST_TELEMETRY_REQUEST\";\n\nreturn { msg: msg, metadata: metadata, msgType: msgType };"
}
```

**Outgoing messages**

**1st message**

Type: `POST_TELEMETRY_REQUEST`

Data:

```json
{
  "counter": 1
}
```

Originator: `DEVICE` with ID `3bc2eb60-8d77-11f0-8a6c-59050cd4204f`

**2nd message**

Type: `POST_TELEMETRY_REQUEST`

Data:

```json
{
  "counter": 2
}
```

Originator: `DEVICE` with ID `3bc2eb60-8d77-11f0-8a6c-59050cd4204f`

**3rd message**

Type: `POST_TELEMETRY_REQUEST`

Data:

```json
{
  "counter": 3
}
```

Originator: `DEVICE` with ID `3bc2eb60-8d77-11f0-8a6c-59050cd4204f`

**Result**

The node generates exactly 3 messages, one per minute, with a counter field that increments from 1 to 3, then stops.
