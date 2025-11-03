Executes a user-defined function that returns a boolean value.
The message is routed via the `True` connection if the function returns `true`, and via the `False` connection if it returns `false`.
If script execution fails, the message is routed via the `Failure` connection.
Supports **TBEL** and **JavaScript**.

## Configuration

### Field descriptions

* **Script language** — defines which scripting language is used. Can be either *TBEL* or *JavaScript*.

* **Script body** — the body of the function used to evaluate the incoming message.
  This script must return a boolean (`true` or `false`) and can access the following arguments:
    * `msg` — the message data, typically an object or array.
    * `metadata` — the message metadata.
      In JavaScript, this is an object where all values are strings.
      In TBEL, it is a `java.util.Map<String, String>`.
    * `msgType` — the type of the message as a string.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbJsFilterNodeConfiguration",
  "type": "object",
  "required": [
    "scriptLang"
  ],
  "properties": {
    "scriptLang": {
      "type": "string",
      "description": "Scripting language used to execute the function.",
      "enum": [
        "TBEL",
        "JS"
      ]
    },
    "jsScript": {
      "type": "string",
      "description": "JavaScript function body that must return a boolean value. Used when 'scriptLang' is 'JS'."
    },
    "tbelScript": {
      "type": "string",
      "description": "TBEL function body that must return a boolean value. Used when 'scriptLang' is 'TBEL'."
    }
  },
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. Determine which script to execute based on the configured **Script language**:
    * If *TBEL*, use the configured **TBEL script**.
    * If *JS*, use the configured **JavaScript script**.
2. Execute the script as a function.
3. The script must return a boolean value:
    * If `true`, route via the `True` connection.
    * If `false`, route via the `False` connection.
4. If the script throws an exception, route via the `Failure` connection.

## Output connections

* `True`:
    * If the script returns `true`.
* `False`:
    * If the script returns `false`.
* `Failure`:
    * If the script returns a non-boolean value (e.g., a string or number).
    * If the script throws an error or cannot be evaluated.

## Examples

### Example 1 — JavaScript script with dynamic threshold check → `True`

This example checks if the message type is `POST_TELEMETRY_REQUEST`.
If so, it iterates over all numeric telemetry values in the message and compares them to threshold values from metadata.
Returns `true` if any value exceeds its threshold.

**Incoming message**

Data:

```json
{
  "temperature": 45.2,
  "humidity": 80,
  "pressure": 1010
}
```

Metadata:

```json
{
  "temperatureThreshold": "45.0",
  "humidityThreshold": "85"
}
```

Message type: `POST_TELEMETRY_REQUEST`


**Node configuration**

```json
{
  "scriptLang": "JS",
  "jsScript": "if (msgType !== 'POST_TELEMETRY_REQUEST') {\n    return false;\n}\n\nfor (var key in msg) {\n    var thresholdKey = key + 'Threshold';\n    if (typeof msg[key] === 'number' && metadata[thresholdKey] && !isNaN(metadata[thresholdKey])) {\n        if (msg[key] > Number(metadata[thresholdKey])) {\n            return true;\n        }\n    }\n}\n\nreturn false;"
}
```

**Result**: **`True`**

**Explanation**: temperature (45.2) exceeds the threshold (45.0), so the script returns `true`.

---

### Example 2 — TBEL script with dynamic threshold check → `True`

Same logic as the previous example, but implemented using TBEL.

**Incoming message**

Data:

```json
{
  "temperature": 42.1,
  "humidity": 88,
  "pressure": 1010
}
```

Metadata:

```json
{
  "temperatureThreshold": "45.0",
  "humidityThreshold": "85"
}
```

Message type: `POST_TELEMETRY_REQUEST`

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "tbelScript": "if (msgType != 'POST_TELEMETRY_REQUEST') {\n    return false;\n}\n\nforeach (key: msg.keySet()) {\n    var thresholdKey = key + 'Threshold';\n    if (metadata.containsKey(thresholdKey)) {\n        var value = msg[key];\n        var threshold = parseDouble(metadata[thresholdKey]);\n        if (value > threshold) {\n            return true;\n        }\n    }\n}\n\nreturn false;"
}
```

**Result**: **`True`**

**Explanation**: humidity (88) exceeds its threshold (85), so the script returns `true`.

---

### Example 3 — JavaScript script, runtime error → `Failure`

**Incoming message**

Data:

```json
{
  "temperature": 30
}
```

**Node configuration**

```json
{
  "scriptLang": "JS",
  "jsScript": "// This script expects temperature inside a 'data' object.\nreturn msg.data.temperature > 20;"
}
```

**Result**: **`Failure`**

**Explanation**: `msg.data` is `undefined`, so accessing its property causes a runtime error.

---

### Example 4 — TBEL script, runtime error → `Failure`

**Incoming message**

Data:

```json
{
  "temperature": 30
}
```

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "tbelScript": "// This script expects temperature inside a 'data' object.\nreturn msg.data.temperature > 20;"
}
```

**Result**: **`Failure`**

**Explanation**: `msg.data` is `null`, so accessing its property causes a runtime error.
