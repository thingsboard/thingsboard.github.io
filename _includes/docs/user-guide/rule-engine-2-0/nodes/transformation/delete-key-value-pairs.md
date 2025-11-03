Deletes specified key-value pairs from the incoming message data or its metadata.

## Preconditions

If you're deleting from the message **data**, it must be a valid JSON object. If the message data is not a JSON object, the node will pass the message through without modification.

## Configuration

### Field descriptions

* **Delete key-values from** — specifies where the deletion should happen. Can be either:
    * *Message* — deletes key-value pairs from the message **data**.
    * *Metadata* — deletes key-value pairs from the **metadata**.
* **Keys** — a set of keys to delete from the source. **Java regular expressions are supported.** If a configured key pattern does not match any key in the source, it is ignored.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbDeleteKeysNodeConfiguration",
  "type": "object",
  "properties": {
    "deleteFrom": {
      "type": "string",
      "enum": [
        "DATA",
        "METADATA"
      ],
      "description": "Where to delete key-value pairs from: message data or metadata."
    },
    "keys": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "A set of keys to delete from the source. Java regular expressions are supported."
    }
  },
  "required": [
    "deleteFrom",
    "keys"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node checks the configured source for deletion (*Message* or *Metadata*).
2. It iterates through all keys in the source.
3. For each key, it checks if the key matches any of the patterns listed in the **Keys** configuration.
4. All matching key-value pairs are removed from the source.
5. If at least one key-value pair was deleted, a new message is created with the updated data or metadata and passed to the next node via `Success`.
6. If no keys matched or the source was empty, the original message is passed through unchanged via `Success`.
7. If an unexpected error occurs, the message is routed via `Failure`.

## Output connections

* `Success`:
    * if processing completes without exceptions, even if no keys were deleted.
* `Failure`:
    * if an unexpected error occurs during processing.

## Examples

### Example 1 — Delete from data

**Incoming message**

Data:

```json
{
  "temperature": 25.4,
  "humidity": 62,
  "internal_id": "xyz-123",
  "deviceName": "Sensor-A1"
}
```

**Node configuration**

```json
{
  "deleteFrom": "DATA",
  "keys": [
    "internal_id",
    "deviceName"
  ]
}
```

**Outgoing message**

Data:

```json
{
  "temperature": 25.4,
  "humidity": 62
}
```

**Output connections:** `Success`.

**Explanation:** The key-value pairs for `internal_id` and `deviceName` are deleted from the message data.

-----

### Example 2 — Delete from metadata

**Incoming message**

Metadata:

```json
{
  "deviceType": "Thermostat",
  "location": "Floor 1",
  "rssi": "-56",
  "snr": "12.1"
}
```

**Node configuration**

```json
{
  "deleteFrom": "METADATA",
  "keys": [
    "rssi",
    "snr"
  ]
}
```

**Outgoing message**

Metadata:

```json
{
  "deviceType": "Thermostat",
  "location": "Floor 1"
}
```

**Output connections:** `Success`.

**Explanation:** The key-value pairs for `rssi` and `snr` are deleted from the metadata.

-----

### Example 3 — Using Java regular expressions

**Incoming message**

Data:

```json
{
  "temp_main": 33.1,
  "humidity": 45,
  "pressure": 1012,
  "temp_ambient": 21.5
}
```

**Node configuration**

```json
{
  "deleteFrom": "DATA",
  "keys": [
    "temp_.*"
  ]
}
```

**Outgoing message**

Data:

```json
{
  "humidity": 45,
  "pressure": 1012
}
```

**Output connections:** `Success`.

**Explanation:** The regular expression `temp_.*` matches `temp_main` and `temp_ambient`. These key-value pairs are deleted from the message data.

-----

### Example 4 — No matching keys

**Incoming message**

Data:

```json
{
  "temperature": 22.5,
  "humidity": 55
}
```

**Node configuration**

```json
{
  "deleteFrom": "DATA",
  "keys": [
    "pressure"
  ]
}
```

**Outgoing message**

Data:

```json
{
  "temperature": 22.5,
  "humidity": 55
}
```

**Output connections:** `Success`.

**Explanation:** The key `pressure` does not exist in the message data, so nothing is deleted. The original message is passed through unchanged.
