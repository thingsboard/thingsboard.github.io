Extracts a part of the incoming message **data** using a JSONPath expression and sets it as the new message data.

## Preconditions

The incoming message **data** must be a valid JSON object or array. If the data is not valid JSON, the message will be routed to the `Failure` chain.

## Configuration

### Fields description

* **JSONPath** — The JSONPath expression used to query the incoming message data. The result of this query will completely replace the
  original message data.
    * The default value is `$`, which represents the entire root JSON object or array. Using the default value will result in the original message passing through unchanged.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbJsonPathNodeConfiguration",
  "type": "object",
  "properties": {
    "jsonPath": {
      "type": "string",
      "description": "The JSONPath expression to apply to the message data."
    }
  },
  "required": [
    "jsonPath"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node applies the configured **JSONPath** expression to the incoming message data.
2. If the expression successfully finds one or more elements:
    * The **data** of the message is replaced with the result of the JSONPath query.
    * The message is sent via the `Success` chain.
3. If the configured JSONPath is not found within the message data, the original message is sent to the `Failure` chain.
4. If the incoming message data is not valid JSON, the message is sent to the `Failure` chain.

## Output connections

* `Success`:
    * If the JSONPath expression is evaluated successfully.
* `Failure`:
    * If the message data is not valid JSON.
    * If the specified JSONPath expression is not found in the message data.
    * If an unexpected error occurs during processing.

## Examples

The examples below show only the **relevant** parts of the incoming message, rule node configuration, and system state.

-----

### Example 1 — Select a nested property

**Incoming message**

Data:

```json
{
  "device": {
    "name": "Thermostat A1",
    "type": "TH-01"
  },
  "telemetry": {
    "temperature": 23.5,
    "humidity": 55
  }
}
```

**Node configuration**

```json
{
  "jsonPath": "$.telemetry"
}
```

**Outgoing message**

Data:

```json
{
  "temperature": 23.5,
  "humidity": 55
}
```

**Output connections:** `Success`.

**Explanation:** The JSONPath expression `$.telemetry` selects the `telemetry` object. This object becomes the new message data, replacing the original content.

-----

### Example 2 — Select an array element

**Incoming message**

Data:

```json
{
  "device_profiles": [
    {
      "name": "default",
      "isDefault": true
    },
    {
      "name": "low_power",
      "isDefault": false
    }
  ]
}
```

**Node configuration**

```json
{
  "jsonPath": "$.device_profiles[1].name"
}
```

**Outgoing message**

Data:

```json
"low_power"
```

**Output connections:** `Success`.

**Explanation:** The expression selects the `name` property from the second element (index 1) of the `device_profiles` array. The resulting string `"low_power"` becomes the new
message data.

-----

### Example 3 — path not found

**Incoming message**

Data:

```json
{
  "temperature": 25.1
}
```

**Node configuration**

```json
{
  "jsonPath": "$.humidity"
}
```

**Outgoing message**

The original message is routed to the `Failure` chain.

**Output connections:** `Failure`.

**Explanation:** The message data does not contain a `humidity` key at the root. Because the path was not found, the message is considered a failure.

-----

### Example 4 — Select a subset with a filter

**Incoming message**

Data:

```json
{
  "readings": [
    {
      "type": "temperature",
      "value": 19
    },
    {
      "type": "humidity",
      "value": 78
    },
    {
      "type": "temperature",
      "value": 21
    }
  ]
}
```

**Node configuration**

```json
{
  "jsonPath": "$.readings[?(@.type == 'temperature')]"
}
```

**Outgoing message**

Data:

```json
[
  {
    "type": "temperature",
    "value": 19
  },
  {
    "type": "temperature",
    "value": 21
  }
]
```

**Output connections:** `Success`.

**Explanation:** The JSONPath filter expression `[?(@.type == 'temperature')]` selects all objects within the `readings` array where the `type` is "temperature". The resulting
array becomes the new message data.
