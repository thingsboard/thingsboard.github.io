Checks whether the specified fields are present in the incoming message **data** and/or **metadata**.
By default, the node requires **all** specified fields to be present; you can switch to “at least one” mode.

## Preconditions

Incoming message data must be a JSON object.

## Configuration

### Field descriptions

* **Message field names** — optional. A set of **top-level** JSON field names to look for in the message data.
* **Metadata field names** — optional. A set of metadata key names to look for in the message metadata.

{% capture at_least_one_set_required_note %}
Although each set is optional, at least one of them must be provided with at least one field (i.e., at least one set must be non-empty).
{% endcapture %}
{% include templates/info-banner.md content=at_least_one_set_required_note %}

* **Check that all specified fields are present** — toggle.
    * **Enabled:** route `True` only if **all** listed message/metadata fields are present.
    * **Disabled:** route `True` if **at least one** listed message/metadata field is present.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbCheckMessageNodeConfiguration",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "messageNames": {
      "description": "Field names to check in the message data.",
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "uniqueItems": true
    },
    "metadataNames": {
      "description": "Field names to check in the message metadata.",
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "uniqueItems": true
    },
    "checkAllKeys": {
      "description": "If true, require all listed fields. If false, require at least one.",
      "type": "boolean",
      "default": true
    }
  },
  "anyOf": [
    {
      "properties": {
        "messageNames": {
          "minItems": 1
        }
      }
    },
    {
      "properties": {
        "metadataNames": {
          "minItems": 1
        }
      }
    }
  ]
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. Extract **data** as a JSON object and **metadata** as key–value pairs.
2. Evaluate presence:
    * If **Check all keys** is enabled: route `True` if **every** listed field in `messageNames` exists in data **and** every listed field in `metadataNames` exists in metadata.
    * If **Check all keys** is disabled: route `True` if **any** listed field exists in data **or** metadata.
3. Otherwise, route `False`. If an error occurs (e.g., payload is not a JSON object), route `Failure`.

{% capture top_level_keys_note %}
Only **top-level** keys are checked; nested paths (e.g., `sensor.temp`) are not supported.
{% endcapture %}
{% include templates/info-banner.md content=top_level_keys_note %}

{% capture presence_meaning_note %}
Presence means the **key exists**, regardless of its value (including `null` or empty string).
{% endcapture %}
{% include templates/info-banner.md content=presence_meaning_note %}

## Output connections

* `True`:
    * If the configured presence condition is satisfied.
* `False`:
    * If the configured presence condition is not satisfied.
* `Failure`:
    * If the incoming message data cannot be parsed as a JSON object
    * If another unexpected error occurred during message processing.

## Examples

The examples below show only the **relevant** fields of the incoming message. Unless explicitly stated otherwise, other message fields may have any values.

---

### Example 1 — All required data fields present → `True`

**Incoming message**

Data:
```json
{
  "temp": 22.5,
  "humidity": 55
}
```

**Node configuration**

```json
{
  "messageNames": [
    "temp",
    "humidity"
  ],
  "metadataNames": [],
  "checkAllKeys": true
}
```

**State of the system**

Not relevant.

**Result**

Routed via **`True`**.

**Explanation**

Both `temp` and `humidity` exist in the payload.

---

### Example 2 — Missing one required data field → `False`

**Incoming message**

Data:
```json
{
  "temp": 22.5
}
```

**Node configuration**

```json
{
  "messageNames": [
    "temp",
    "humidity"
  ],
  "metadataNames": [],
  "checkAllKeys": true
}
```

**State of the system**

Not relevant.

**Result**

Routed via **`False`**.

**Explanation**

`humidity` is not present.

---

### Example 3 — At least one metadata field present → `True`

**Incoming message**

Metadata:
```json
{
  "deviceName": "Pump-42",
  "token": "abc123"
}
```

**Node configuration**

```json
{
  "messageNames": [],
  "metadataNames": [
    "token",
    "tenantId"
  ],
  "checkAllKeys": false
}
```

**State of the system**

Not relevant.

**Result**

Routed via **`True`**.

**Explanation**

At least one listed metadata key (`token`) is present.

---

### Example 4 — At least one data field present → `True`

**Incoming message**

Data:
```json
{
  "temperature": 123,
  "humidity": 42
}
```

Metadata:
```json
{
  "deviceName": "Sensor-1",
  "deviceType": "TemperatureSensor"
}
```

**Node configuration**

```json
{
  "messageNames": [
    "temperature"
  ],
  "metadataNames": [
    "token",
    "tenantId"
  ],
  "checkAllKeys": false
}
```

**State of the system**

Not relevant.

**Result**

Routed via **`True`**.

**Explanation**

At least one listed key (`temperature`) is present.

---

### Example 5 — Invalid message format → `Failure`

**Incoming message data**

```
"not a JSON object"
```

**Node configuration**

```json
{
  "messageNames": [
    "temp"
  ],
  "metadataNames": [],
  "checkAllKeys": true
}
```

**State of the system**

Not relevant.

**Result**

**`Failure`**.

**Explanation**

Message data is not a JSON object, so the node cannot check data keys.
