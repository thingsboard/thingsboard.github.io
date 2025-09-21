Stores the incoming message data as attribute data of the message originator.

## Preconditions

The node accepts messages of type `POST_ATTRIBUTES_REQUEST` and expects message data to be a JSON object where each property name represents an attribute key, and its corresponding
value is the attribute value. For example:

```json
{
  "firmware_version": "1.0.1",
  "serial_number": "SN-001"
}
```

## Configuration

### Processing settings

The save attributes node can perform three distinct actions, each governed by configurable processing strategies:

- **Attributes**: saves attribute data to the database.
- **WebSockets**: notifies WebSocket subscriptions about updates to the attribute data.
- **Calculated fields**: notifies calculated fields about updates to the attribute data.

For each of these actions, you can choose from the following **processing strategies**:
{% include docs/user-guide/rule-engine-2-0/processing-strategies-explanation.md %}

> **Note**: Processing strategies are available since TB version 4.0.

Processing strategies can be set using either **Basic** or **Advanced processing settings**.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-processing-settings-modes-switcher-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-processing-settings-modes-switcher-pe.png)
{% endif %}

- **Basic processing settings** - provide predefined strategies for all actions:
    - On every message: applies the **On every message** strategy to all actions. All actions are performed for all messages.
    - Deduplicate: applies the **Deduplicate** strategy (with a specified interval) to all actions.
    - WebSockets only: for all actions except WebSocket notifications, the **Skip** strategy is applied, while WebSocket notifications use the **On every message** strategy.
      Effectively, nothing is stored in a database; data is available only in real-time via WebSocket subscriptions.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-basic-processing-settings-options-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-basic-processing-settings-options-pe.png)
{% endif %}

- **Advanced processing settings** - allow you to configure each action’s processing strategy independently.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-attributes-advanced-processing-settings-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-attributes-advanced-processing-settings-pe.png)
{% endif %}

When configuring the processing strategies in advanced mode, certain combinations can lead to unexpected behavior. Consider the following scenarios:

{% include docs/user-guide/rule-engine-2-0/advanced-processing-strategies-hazards.md %}

Due to the scenarios described above, the ability to configure each persistence action independently—including setting different deduplication intervals—should be treated as a
performance optimization rather than a strict processing guarantee.

### Scope

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-attributes-scope-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/action-save-attributes-scope-pe.png)
{% endif %}

The node supports three attribute scopes: *Client attributes*, *Shared attributes*, and *Server attributes*. You can set the default scope in the node configuration, or override it
by specifying a valid `scope` property in the message metadata.

The supported `scope` values are:

- `CLIENT_SCOPE` corresponds to *Client attributes*
- `SHARED_SCOPE` corresponds to *Shared attributes*
- `SERVER_SCOPE` corresponds to *Server attributes*

If the message metadata contains an invalid `scope` (e.g. `INVALID_SCOPE`) value, the message processing will fail.

### Advanced settings

![image](/images/user-guide/rule-engine-2-0/nodes/action-save-attributes-advanced-settings.png)

* **Save attributes only if the value changes** – if enabled, the node compares incoming attributes with their current stored values and only saves attributes that are new, have
  changed values, or have different data types.

  > **Note**: Avoid concurrent writes of the same attributes because change-detection is not transactional and may produce unexpected results in such cases.

  > **Note**: If the attribute save is skipped because the value has not changed, the attribute’s last updated timestamp will not be updated.

* **Send attributes updated notification** – if enabled, the node sends an [Attributes Updated](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types)
  event to the originator's default rule chain for `SHARED_SCOPE` and `SERVER_SCOPE` attributes.
* **Force notification to the device** - if enabled, the node always sends attribute update notifications to devices with active subscriptions. If disabled, device notifications
  are controlled by the `notifyDevice` property in the message metadata (defaults to `true` when absent).

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbMsgAttributesNodeConfiguration",
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "description": "Scope for attribute processing (e.g., SERVER_SCOPE, CLIENT_SCOPE, SHARED_SCOPE)"
    },
    "notifyDevice": {
      "type": "boolean",
      "description": "Whether to notify the device about attribute changes"
    },
    "sendAttributesUpdatedNotification": {
      "type": "boolean",
      "description": "Whether to send 'ATTRIBUTES_UPDATED' event to the originator's default rule chain"
    },
    "updateAttributesOnlyOnValueChange": {
      "type": "boolean",
      "description": "Whether to update attributes only when values change"
    },
    "processingSettings": {
      "$ref": "#/$defs/ProcessingSettings"
    }
  },
  "required": [
    "scope",
    "notifyDevice",
    "sendAttributesUpdatedNotification",
    "updateAttributesOnlyOnValueChange",
    "processingSettings"
  ],
  "additionalProperties": false,
  "$defs": {
    "ProcessingSettings": {
      "description": "Polymorphic processing settings for attributes data",
      "discriminator": {
        "propertyName": "type"
      },
      "oneOf": [
        {
          "$ref": "#/$defs/OnEveryMessage"
        },
        {
          "$ref": "#/$defs/WebSocketsOnly"
        },
        {
          "$ref": "#/$defs/Deduplicate"
        },
        {
          "$ref": "#/$defs/Advanced"
        }
      ]
    },
    "OnEveryMessage": {
      "type": "object",
      "properties": {
        "type": {
          "const": "ON_EVERY_MESSAGE"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false
    },
    "WebSocketsOnly": {
      "type": "object",
      "properties": {
        "type": {
          "const": "WEBSOCKETS_ONLY"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false
    },
    "Deduplicate": {
      "type": "object",
      "properties": {
        "type": {
          "const": "DEDUPLICATE"
        },
        "deduplicationIntervalSecs": {
          "type": "integer",
          "minimum": 1,
          "maximum": 86400,
          "description": "Deduplication interval in seconds (1 second to 1 day)"
        }
      },
      "required": [
        "type",
        "deduplicationIntervalSecs"
      ],
      "additionalProperties": false
    },
    "Advanced": {
      "type": "object",
      "properties": {
        "type": {
          "const": "ADVANCED"
        },
        "attributes": {
          "$ref": "#/$defs/ProcessingStrategy"
        },
        "webSockets": {
          "$ref": "#/$defs/ProcessingStrategy"
        },
        "calculatedFields": {
          "$ref": "#/$defs/ProcessingStrategy"
        }
      },
      "required": [
        "type",
        "attributes",
        "webSockets",
        "calculatedFields"
      ],
      "additionalProperties": false
    },
    "ProcessingStrategy": {
      "description": "Polymorphic processing strategy",
      "discriminator": {
        "propertyName": "type"
      },
      "oneOf": [
        {
          "$ref": "#/$defs/OnEveryMessageStrategy"
        },
        {
          "$ref": "#/$defs/DeduplicateStrategy"
        },
        {
          "$ref": "#/$defs/SkipStrategy"
        }
      ]
    },
    "OnEveryMessageStrategy": {
      "type": "object",
      "properties": {
        "type": {
          "const": "ON_EVERY_MESSAGE"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false
    },
    "DeduplicateStrategy": {
      "type": "object",
      "properties": {
        "type": {
          "const": "DEDUPLICATE"
        },
        "deduplicationIntervalSecs": {
          "type": "integer",
          "minimum": 1,
          "maximum": 86400,
          "description": "Deduplication interval in seconds (1 second to 1 day)"
        }
      },
      "required": [
        "type",
        "deduplicationIntervalSecs"
      ],
      "additionalProperties": false
    },
    "SkipStrategy": {
      "type": "object",
      "properties": {
        "type": {
          "const": "SKIP"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false
    }
  }
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node verifies that the message type is `POST_ATTRIBUTES_REQUEST`. If not, the processing fails and the message is routed to the `Failure` connection.

2. The node parses the message data to extract attribute key-value pairs. If the data is empty, the processing ends and message is routed to the `Success` connection.

3. The node determines the attribute scope using the following priority:
    - Message metadata `scope` property value, if present and valid (`CLIENT_SCOPE`, `SHARED_SCOPE`, or `SERVER_SCOPE`)
    - If an invalid scope (e.g. `INVALID_SCOPE`) is provided in metadata, processing fails and the message is routed to the `Failure` connection.
    - Node's configured default scope, if metadata scope value is not provided

4. If **Save attributes only if the value changes** is enabled, the node performs change detection:
    - Retrieves current attribute values for all incoming attribute keys from the database
    - Compares each incoming attribute with its current stored value
    - Filters the attributes list to include only those that:
        - Are new (not currently stored)
        - Have different values from what's currently stored
        - Have different data types from what's currently stored
    - If no changes are detected, the processing ends and the message is routed to the `Success` connection.

5. The node determines device notification settings using the following priority:
    - Always notify if **Force notification to the device** is enabled in configuration
    - Otherwise, check the message metadata `notifyDevice` property:
        - If absent or empty string: defaults to sending notification
        - If present: sends notification only if the value is `true` (case-insensitive)

6. Saves the attributes to the database according to the configured processing strategy. Once the save operation completes:
    - On success: the processing is successful and the message is routed to the `Success` connection
    - On failure: the processing fails and the message is routed to the `Failure` connection
    - If **Send attributes updated notification** was enabled, an `ATTRIBUTES_UPDATED` event is published to the originator default rule chain for `SHARED_SCOPE` and `SERVER_SCOPE`
      attributes.

## Output connections

- `Success`
    - If an incoming message was successfully processed.
- `Failure`
    - If an incoming message type is not `POST_ATTRIBUTES_REQUEST`.
    - If an incoming message payload cannot be parsed to attribute key-value pairs.
    - If the incoming message metadata includes a non-empty `scope` property whose value does not match one of the valid attribute scopes (i.e. `CLIENT_SCOPE`, `SHARED_SCOPE`,
      or `SERVER_SCOPE`).
    - If unexpected error occurs during message processing.

## Examples

### Example 1 — On every message strategy

**Incoming message**

Type: `POST_ATTRIBUTES_REQUEST`

Originator: `DEVICE`

Data:

```json
{
  "firmware_version": "1.0.1",
  "serial_number": "SN-001",
  "last_maintenance": "2025-01-15"
}
```

**Node configuration**

```json
{
  "scope": "SERVER_SCOPE",
  "notifyDevice": false,
  "sendAttributesUpdatedNotification": true,
  "updateAttributesOnlyOnValueChange": false,
  "processingSettings": {
    "type": "ON_EVERY_MESSAGE"
  }
}
```

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

Three server attributes are saved:

- `firmware_version`: "1.0.1"
- `serial_number`: "SN-001"
- `last_maintenance`: "2025-01-15"

WebSocket subscriptions and calculated fields are notified. An `ATTRIBUTES_UPDATED` event is sent to the originator's default rule chain since the scope is `SERVER_SCOPE`.

### Example 2 — Attributes with Deduplicate strategy

**Incoming message**

Type: `POST_ATTRIBUTES_REQUEST`

Originator: `DEVICE`

Data:

```json
{
  "battery_level": 85,
  "signal_strength": -65,
  "location": "Building A, Floor 2"
}
```

**Node configuration**

```json
{
  "scope": "CLIENT_SCOPE",
  "notifyDevice": true,
  "sendAttributesUpdatedNotification": false,
  "updateAttributesOnlyOnValueChange": false,
  "processingSettings": {
    "type": "DEDUPLICATE",
    "deduplicationIntervalSecs": 120
  }
}
```

**State of the system**

Message for this device that falls within current 120-second interval was already processed.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

Since deduplication is enabled with a 120-second interval and the message was already processed, the attributes are not saved to the database. WebSocket notifications and
calculated fields are also not triggered.

### Example 3 — Advanced processing with mixed strategies

**Incoming message**

Type: `POST_ATTRIBUTES_REQUEST`

Originator: `DEVICE`

Data:

```json
{
  "cpu_usage": 45.7,
  "memory_usage": 78.2,
  "disk_usage": 62.5
}
```

**Node configuration**

```json
{
  "scope": "SHARED_SCOPE",
  "notifyDevice": false,
  "sendAttributesUpdatedNotification": true,
  "updateAttributesOnlyOnValueChange": false,
  "processingSettings": {
    "type": "ADVANCED",
    "attributes": {
      "type": "DEDUPLICATE",
      "deduplicationIntervalSecs": 300
    },
    "webSockets": {
      "type": "ON_EVERY_MESSAGE"
    },
    "calculatedFields": {
      "type": "SKIP"
    }
  }
}
```

**State of the system**

Message for this device that falls within current deduplication interval was already processed.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

- Attributes are NOT saved to the database due to deduplication
- WebSocket subscriptions ARE notified
- Calculated fields are NOT triggered (SKIP strategy)
- An `ATTRIBUTES_UPDATED` event is NOT sent since attributes weren't saved

### Example 4 — Save attributes only if value changes

**Incoming message**

Type: `POST_ATTRIBUTES_REQUEST`

Originator: `DEVICE`

Data:

```json
{
  "temperature_threshold": 25.0,
  "humidity_threshold": 70.0,
  "maintenance_scheduled": true
}
```

**Node configuration**

```json
{
  "scope": "SERVER_SCOPE",
  "notifyDevice": false,
  "sendAttributesUpdatedNotification": true,
  "updateAttributesOnlyOnValueChange": true,
  "processingSettings": {
    "type": "ON_EVERY_MESSAGE"
  }
}
```

**State of the system**

Current stored attributes:

- `temperature_threshold`: 25.0 (same value)
- `humidity_threshold`: 65.0 (different value)
- `maintenance_scheduled`: not stored (new attribute)

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

Only two attributes are saved due to change detection:

- `humidity_threshold`: 70.0 (value changed from 65.0)
- `maintenance_scheduled`: true (new attribute)

The `temperature_threshold` is not saved since its value hasn't changed. WebSocket subscriptions and calculated fields are notified only for the changed attributes.

### Example 5 — Scope override from message metadata

**Incoming message**

Type: `POST_ATTRIBUTES_REQUEST`

Originator: `DEVICE`

Data:

```json
{
  "power_setting": "low"
}
```

Metadata:

```json
{
  "scope": "CLIENT_SCOPE"
}
```

**Node configuration**

```json
{
  "scope": "SERVER_SCOPE",
  "notifyDevice": false,
  "sendAttributesUpdatedNotification": true,
  "updateAttributesOnlyOnValueChange": false,
  "processingSettings": {
    "type": "ON_EVERY_MESSAGE"
  }
}
```

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

One client attributes is saved (using scope from metadata):

- `power_setting`: "low"

No `ATTRIBUTES_UPDATED` event is sent since client attributes don't trigger this notification.
