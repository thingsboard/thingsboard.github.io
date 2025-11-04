Renames keys in the incoming message or its metadata based on a configured mapping.

## Configuration

### Field descriptions

* **Rename keys in** — specifies where the renaming should happen. Can be either:
    * *Message* — rename keys inside the message **data**.
    * *Message metadata* — rename keys inside the **metadata**.
* **Message keys mapping** — defines how to rename keys. Each mapping contains:
    * **Current key name** — the name of the existing key.
    * **New key name** — the name the key will be changed to.

If the current key does not exist, the mapping is skipped.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbRenameKeysNodeConfiguration",
  "type": "object",
  "properties": {
    "renameIn": {
      "type": "string",
      "enum": [
        "DATA",
        "METADATA"
      ],
      "description": "Where to rename keys: message data or metadata."
    },
    "renameKeysMapping": {
      "type": "object",
      "description": "Key-value map where the key is the original key and the value is the new name.",
      "additionalProperties": {
        "type": "string"
      }
    }
  },
  "required": [
    "renameIn",
    "renameKeysMapping"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. Determine whether to rename keys in message **data** or **metadata**, based on the configuration.
2. For each mapping:
    * If the key exists in the selected source:
        * Copy the value to the new key.
        * Remove the old key.
3. If at least one key was renamed:
    * Create a new message with the updated data or metadata.
4. If no keys were renamed:
    * Pass the original message unchanged.
5. If an unexpected error occurs, route the message via `Failure`.

## Output connections

* `Success`:
    * if processing completes without exceptions (even if no keys were renamed).
* `Failure`:
    * if an unexpected error occurs during processing.

## Examples

### Example 1 — Rename a key in message data

**Incoming message**

Data:

```json
{
  "temperatureCelsius": 22.5
}
```

**Node configuration**

```json
{
  "renameIn": "DATA",
  "renameKeysMapping": {
    "temperatureCelsius": "temperature"
  }
}
```

**Outgoing message**

Data:

```json
{
  "temperature": 22.5
}
```

**Output connections:** `Success`.

**Explanation:** key `temperatureCelsius` is renamed to `temperature` in the message data.

---

### Example 2 — Rename a key in message metadata

**Incoming message**

Metadata:

```json
{
  "deviceModel": "BME250"
}
```

**Node configuration**

```json
{
  "renameIn": "METADATA",
  "renameKeysMapping": {
    "deviceModel": "model"
  }
}
```

**Outgoing message**

Metadata:

```json
{
  "model": "BME250"
}
```

**Output connections:** `Success`.

**Explanation:** key `deviceModel` is renamed to `model` in metadata.

---

### Example 3 — Key not present → no changes

**Incoming message**

Data:

```json
{
  "humidity": 55
}
```

**Node configuration**

```json
{
  "renameIn": "DATA",
  "renameKeysMapping": {
    "temperatureCelsius": "temperature"
  }
}
```

**Outgoing message**

Data:

```json
{
  "humidity": 55
}
```

**Output connections:** `Success`.

**Explanation:** no matching keys found in message data; original message is passed through.

### Example 4 — Misconfiguration causes key overwrite

**Incoming message**

Data:

```json
{
  "temperatureCelsius": 21.5,
  "temperature": 99
}
```

**Node configuration**

```json
{
  "renameIn": "DATA",
  "renameKeysMapping": {
    "temperatureCelsius": "temperature"
  }
}
```

**Outgoing message**

Data:

```json
{
  "temperature": 21.5
}
```

**Output connections:** `Success`.

**Explanation:** the key `temperatureCelsius` is renamed to temperature. The original `temperature` key is overwritten with the new value `21.5`.
This behavior reflects the configured mapping and is not treated as an error.

---

### Example 5 — Rename multiple keys (one key not found → skipped)

**Incoming message**

Metadata:

```json
{
  "deviceName": "Boiler-21",
  "deviceType": "Heater"
}
```

**Node configuration**

```json
{
  "renameIn": "METADATA",
  "renameKeysMapping": {
    "deviceName": "name",
    "deviceType": "type",
    "firmwareVersion": "fw"
  }
}
```

**Result**

```json
{
  "name": "Boiler-21",
  "type": "Heater"
}
```

**Explanation:**
* `deviceName` is renamed to `name`
* `deviceType` is renamed to `type`
* `firmwareVersion` does not exist in the metadata and is skipped without error
