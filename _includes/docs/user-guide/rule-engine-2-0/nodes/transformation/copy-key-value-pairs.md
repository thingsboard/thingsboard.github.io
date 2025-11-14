Copies specified key-value pairs from the incoming message data to its metadata, or from the metadata to the data.

## Preconditions

If you're copying from the message **data**, it must be a valid JSON object. If the message data is not a JSON object, the node will pass the message through without modification.

## Configuration

### Field descriptions

* **Copy key-values from** — specifies the direction of the copy operation. Can be either:
    * *Message to metadata* — copies key-value pairs from the message **data** to the **metadata**.
    * *Metadata to message* — copies key-value pairs from the **metadata** to the message **data**.
* **Keys** — a set of keys to copy from the source. **Java regular expressions are supported.** If a configured key pattern does not match any key in the source, it is ignored.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbCopyKeysNodeConfiguration",
  "type": "object",
  "properties": {
    "copyFrom": {
      "type": "string",
      "description": "The source of the key-value pairs to copy. 'DATA' means message data, 'METADATA' means message metadata.",
      "enum": [
        "DATA",
        "METADATA"
      ]
    },
    "keys": {
      "type": "array",
      "description": "A set of keys to copy from the source. Java regular expressions are supported.",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "copyFrom",
    "keys"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node checks the configured copy direction (*Message to metadata* or *Metadata to message*).
2. It iterates through all key-value pairs in the source (either message data or metadata).
3. For each key in the source, it checks if the key matches any of the patterns listed in the **Keys** configuration.
4. If a key matches, the key-value pair is copied to the destination.
    * If a key with the same name already exists in the destination, its value will be **overwritten**.
    * When copying from message **data** to **metadata**, any non-textual values (e.g., numbers, booleans, JSON objects, arrays) are converted to their string representation.
5. If at least one key-value pair was copied, a new message is created with the updated data or metadata and passed to the next node.
6. If no keys matched or the source was empty, the original message is passed through unchanged.
7. If an unexpected error occurs, the message is routed via `Failure`.

## Output connections

* `Success`:
    * if processing completes without exceptions, even if no keys were copied.
* `Failure`:
    * if an unexpected error occurs during processing.

## Examples

### Example 1 — Copy from message data to metadata

**Incoming message**

Data:

```json
{
  "temperature": 25.4,
  "humidity": 62,
  "deviceName": "Sensor-A1"
}
```

Metadata:

```json
{
  "ts": "1756280400000"
}
```

**Node configuration**

```json
{
  "copyFrom": "DATA",
  "keys": [
    "temperature",
    "humidity"
  ]
}
```

**Outgoing message**

Data:

```json
{
  "temperature": 25.4,
  "humidity": 62,
  "deviceName": "Sensor-A1"
}
```

Metadata:

```json
{
  "temperature": "25.4",
  "humidity": "62",
  "ts": "1756280400000"
}
```

**Output connections:** `Success`.

**Explanation:** The key-value pairs for `temperature` and `humidity` are copied from the message data to the metadata. Note that the numeric values are converted to strings in the
metadata.

-----

### Example 2 — Copy from metadata to message data

**Incoming message**

Data:

```json
{
  "temp": 21.3
}
```

Metadata:

```json
{
  "deviceType": "Thermostat",
  "location": "Floor 1"
}
```

**Node configuration**

```json
{
  "copyFrom": "METADATA",
  "keys": [
    "deviceType",
    "location"
  ]
}
```

**Outgoing message**

Data:

```json
{
  "temp": 21.3,
  "deviceType": "Thermostat",
  "location": "Floor 1"
}
```

Metadata:

```json
{
  "deviceType": "Thermostat",
  "location": "Floor 1"
}
```

**Output connections:** `Success`.

**Explanation:** The key-value pairs for `deviceType` and `location` are copied from the metadata into the message data.

-----

### Example 3 — Using Java regular expressions

**Incoming message**

Data:

```json
{
  "sensor_temp": 33.1,
  "sensor_humidity": 45,
  "battery_level": 98,
  "sensor_pressure": 1012
}
```

**Node configuration**

```json
{
  "copyFrom": "DATA",
  "keys": [
    "sensor_.*"
  ]
}
```

**Outgoing message**

Metadata:

```json
{
  "sensor_temp": "33.1",
  "sensor_humidity": "45",
  "sensor_pressure": "1012"
}
```

**Output connections:** `Success`.

**Explanation:** The regular expression `sensor_.*` matches `sensor_temp`, `sensor_humidity`, and `sensor_pressure`. These key-value pairs are copied to the metadata.
`battery_level` does not match and is not copied.

-----

### Example 4 — Key overwriting

**Incoming message**

Data:

```json
{
  "temperature": 22.5
}
```

Metadata:

```json
{
  "temperature": "18.0",
  "deviceType": "Thermostat"
}
```

**Node configuration**

```json
{
  "copyFrom": "DATA",
  "keys": [
    "temperature"
  ]
}
```

**Outgoing message**

Metadata:

```json
{
  "temperature": "22.5",
  "deviceType": "Thermostat"
}
```

**Output connections:** `Success`.

**Explanation:** The `temperature` key from the message data is copied to the metadata, **overwriting** the existing `temperature` value.

-----

### Example 5 — Copying a JSON object to metadata

**Incoming message**

Data:

```json
{
  "location": {
    "lat": 40.7128,
    "lon": -74.0060
  },
  "status": "active"
}
```

**Node configuration**

```json
{
  "copyFrom": "DATA",
  "keys": [
    "location"
  ]
}
```

**Outgoing message**

Metadata:

```json
{
  "location": "{\"lat\":40.7128,\"lon\":-74.0060}"
}
```

**Output connections:** `Success`.

**Explanation:** When the `location` key is copied from data to metadata, its value (a JSON object) is converted into a string.
