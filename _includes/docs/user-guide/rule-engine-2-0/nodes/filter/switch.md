Executes a user-defined function that returns a connection label or a list of connection labels.
The message is routed via the specified connection(s).
If the script returns a single string, it is treated as a one-element list.
If the script execution fails, the message is routed via the `Failure` connection.
Supports **TBEL** and **JavaScript**.

## Configuration

### Field descriptions

* **Script language** — defines which scripting language is used. Can be either *TBEL* or *JavaScript*.
* **Script body** — the body of the function used to evaluate the incoming message.
  This script must return either a single string or an array of strings (each string is a connection label).
  The script can access the following arguments:
    * `msg` — the message data, typically an object or array.
    * `metadata` — the message metadata.
      In JavaScript, this is an object where all values are strings.
      In TBEL, it is a `java.util.Map<String, String>`.
    * `msgType` — the type of the message as a string.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbJsSwitchNodeConfiguration",
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
      "description": "JavaScript function body that must return a string or array of strings. Used when 'scriptLang' is 'JS'."
    },
    "tbelScript": {
      "type": "string",
      "description": "TBEL function body that must return a string or array of strings. Used when 'scriptLang' is 'TBEL'."
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
3. The script must return:
    * A string — treated as a one-element array with that connection label.
    * An array of strings — used as the list of connections to route the message through.
4. If the result is not a string or string array, or if the script throws an exception, route via the `Failure` connection.

## Output connections

* Any connection name returned by the script:
    * If the returned value is a string or array of strings, the message is routed via the corresponding connection(s).
* `Failure`:
    * If the script returns an invalid type (e.g., number, object).
    * If the script throws an error.

## Examples

### Example 1 — Return a single string → `A`

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "jsScript": "return 'A';"
}
```

**Output connections:** **`A`**.

**Explanation:** the script returns a string. It is treated as a one-element array, and the message is routed via `A`.

---

### Example 2 — Return a one-element array → `A`

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "jsScript": "return ['A'];"
}
```

**Output connections:** **`A`**.

**Explanation:** the script returns a one-element array. The message is routed via `A`.

---

### Example 3 — Return multiple connections → `A`, `B`, `C`

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "jsScript": "return ['A', 'B', 'C'];"
}
```

**Output connections:** **`A`**, **`B`**, and **`C`**.

**Explanation:** the script returns an array of connection labels. The message is routed via each of them.

---

### Example 4 — Dynamic routing based on temperature → `High`, `Normal`, or `Low`

**Incoming message**

Data:

```json
{
  "temperature": 85
}
```

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "jsScript": "var t = msg.temperature;\nif (t > 80) return 'High';\nif (t > 60) return 'Normal';\nreturn 'Low';"
}
```

**Output connections:** **`High`**.

**Explanation:** temperature is greater than 80, so the script returns `"High"` and the message is routed accordingly.
