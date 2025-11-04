Creates new alarms or updates existing active alarms.

## Configuration

### Basic settings

- **Use message alarm data**: When enabled, the message data is parsed as a ThingsBoard Alarm object, and alarm configuration is extracted from the parsed message instead of using
  node configuration. If the message cannot be parsed as a valid Alarm object, the message is routed via `Failure` connection.
- **Overwrite alarm details**: When enabled with **Use message alarm data**, the details script will be executed to generate a value for alarm's `details` field.

### Alarm configuration

- **Alarm type**: Type of the alarm (e.g., "General Alarm", "High Temperature"). Supports templatization.
- **Use alarm severity pattern**: Enables dynamic severity based on message data rather than a fixed value.
    - When **enabled**:
        - **Alarm severity pattern**: A pattern that must resolve to one of the valid severity levels: `CRITICAL`, `MAJOR`, `MINOR`, `WARNING`, or `INDETERMINATE`
    - When **disabled**:
        - **Alarm severity**: Fixed severity level. One of: *Critical*, *Major*, *Minor*, *Warning*, or *Indeterminate*

### Alarm details script

A script (TBEL or JavaScript) that generates the content for the alarm's `details` field. The script must return a valid JSON value, which can be:

- Primitive values (numbers, booleans, strings)
- JSON arrays
- JSON objects

The script has access to the following variables:

- `msg`: The message data
- `metadata`: The message metadata
- `msgType`: The message type
- `metadata.prevAlarmDetails`: The previous alarm details when updating an existing alarm (provided as a JSON string)

### Propagation settings

- **Propagate alarm to related entities**: Propagates alarms to parent entities through configured relations
    - When enabled, a **Relation types to propagate** field appears
    - Select specific relation types to limit propagation paths, or leave empty to propagate through all relations
- **Propagate alarm to entity owner (Customer or Tenant)**: Propagates alarms to the entity's direct owner
- **Propagate alarm to entity owners hierarchy**: Propagates alarms up through all levels of the ownership chain
- **Propagate alarm to Tenant**: Propagates alarms directly to the tenant level, regardless of intermediate ownership

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbCreateAlarmNodeConfiguration",
  "type": "object",
  "properties": {
    "alarmType": {
      "type": "string",
      "description": "Alarm type"
    },
    "scriptLang": {
      "type": "string",
      "enum": [
        "TBEL",
        "JS"
      ],
      "description": "Script language for details builder"
    },
    "alarmDetailsBuildJs": {
      "type": "string",
      "description": "JavaScript details builder function"
    },
    "alarmDetailsBuildTbel": {
      "type": "string",
      "description": "TBEL details builder function"
    },
    "severity": {
      "type": "string",
      "enum": [
        "CRITICAL",
        "MAJOR",
        "MINOR",
        "WARNING",
        "INDETERMINATE"
      ]
    },
    "propagate": {
      "type": "boolean",
      "description": "Whether to propagate to related entities"
    },
    "propagateToOwner": {
      "type": "boolean",
      "description": "Whether to propagate to entity owner"
    },
    "propagateToOwnerHierarchy": {
      "type": "boolean",
      "description": "Whether to propagate to owner hierarchy"
    },
    "propagateToTenant": {
      "type": "boolean",
      "description": "Whether to propagate to tenant"
    },
    "useMessageAlarmData": {
      "type": "boolean",
      "description": "Read alarm config from message"
    },
    "overwriteAlarmDetails": {
      "type": "boolean",
      "description": "Whether to execute details builder when using message data"
    },
    "dynamicSeverity": {
      "type": "boolean",
      "description": "Whether to use severity pattern"
    },
    "relationTypes": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Relation types for propagation"
    }
  }
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

The node's behavior depends on the **Use message alarm data** setting:

### When using node configuration (Use message alarm data = disabled)

1. **Determine alarm type**: Processes the configured alarm type pattern, substituting any placeholders with values from message.

2. **Search for existing alarm**: Queries for an active (uncleared) alarm with:
    - Same originator as the incoming message
    - Alarm type from step 1

3. **Create or update alarm**:
    - **If no active alarm exists** (new alarm):
        - Creates alarm with status `ACTIVE_UNACK`
        - Sets severity from node configuration (or pattern if **Use alarm severity pattern** enabled)
        - Applies propagation settings from node configuration
        - Executes details builder script to generate `details` field
        - Sets both alarm start time and end time to the value of the `ts` property from the metadata. If the `ts` property is not present, they are set to the message's creation
          timestamp.
        - Routes to `Created` connection with `isNewAlarm: true` in metadata
        - Sends `ENTITY_CREATED` lifecycle event with complete alarm object to the originator's root rule chain 

    - **If active alarm exists** (update):
        - Keeps existing alarm status unchanged
        - Sets severity from node configuration (or pattern if **Use alarm severity pattern** enabled)
        - Updates existing propagation settings from values from node configuration
        - Executes details builder script to generate a value for `details` field
        - Updates alarm end time to the current server time
        - Routes to `Updated` connection with `isExistingAlarm: true` in metadata
        - Sends `ENTITY_UPDATED` lifecycle event with complete alarm object to the originator's root rule chain

### When using message alarm data (Use message alarm data = enabled)

1. **Parse message as alarm**: Attempts to deserialize message data as a ThingsBoard Alarm object
    - If parsing fails, routes to `Failure` connection
    - Overwrites `tenantId` in parsed alarm with current tenant ID
    - If `originator` is null in parsed alarm, defaults to message originator

2. **Extract alarm type**: Uses the `type` field from the parsed alarm

3. **Search for existing alarm**: Same as above, using the parsed alarm type

4. **Create or update alarm**:
    - **If no active alarm exists** (new alarm):
        - Uses all fields from parsed alarm (severity, propagation settings, etc.)
        - Details handling depends on **Overwrite alarm details**:
            - If enabled: Executes details builder script, replacing parsed details
            - If disabled: Uses `details` field from parsed alarm directly
        - Routes to `Created` connection
        - Sends `ENTITY_CREATED` lifecycle event with complete alarm object to the originator's root rule chain

    - **If active alarm exists** (update):
        - Updates existing alarm with values from parsed message:
            - `severity`
            - `propagate`
            - `propagateToOwner`
            - `propagateToOwnerHierarchy`
            - `propagateToTenant`
            - `propagateRelationTypes`
        - Details handling depends on **Overwrite alarm details**:
            - If enabled: Executes details builder script with `prevAlarmDetails`
            - If disabled: Replaces with `details` from parsed alarm
        - Updates alarm end time to current server time
        - Routes to `Updated` connection
        - Sends `ENTITY_UPDATED` lifecycle event with complete alarm object to the originator's root rule chain

## Output connections

- `Created`
    - New alarm was successfully created
    - Message data is replaced with the created alarm object
    - Metadata includes `isNewAlarm: true`
    - Message type changed to `ALARM`
- `Updated`
    - Existing alarm was successfully updated
    - Message data is replaced with the updated alarm object
    - Metadata includes `isExistingAlarm: true`
    - Message type changed to `ALARM`
- `Failure`
    - Alarm severity pattern resolves to invalid value
    - Script execution error
    - Message parsing error (when using message alarm data)

## Examples

### Example 1 — Creating a new alarm

**Incoming message**

Type: `POST_TELEMETRY_REQUEST`

Data:

```json
{
  "temperature": 45.5
}
```

Metadata:

```json
{}
```

Originator: `DEVICE`

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "alarmDetailsBuildTbel": "return {\n    temperature: msg.temperature\n};",
  "alarmType": "High Temperature",
  "severity": "CRITICAL"
}
```

**State of the system**

No active "High Temperature" alarm exists for originator device.

**Outgoing message**

Data:

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "f66e9b38-6f0e-4dc7-ad57-1cb4e014b6fc"
  },
  "createdTime": 1757429087089,
  "tenantId": {
    "entityType": "TENANT",
    "id": "9c4bad70-10ac-11f0-ad7c-897c5310f06b"
  },
  "customerId": null,
  "type": "High Temperature",
  "originator": {
    "entityType": "DEVICE",
    "id": "3bc2eb60-8d77-11f0-8a6c-59050cd4204f"
  },
  "severity": "CRITICAL",
  "acknowledged": false,
  "cleared": false,
  "assigneeId": null,
  "startTs": 1757429087063,
  "endTs": 1757429087063,
  "ackTs": 0,
  "clearTs": 0,
  "assignTs": 0,
  "propagate": false,
  "propagateToOwner": false,
  "propagateToTenant": false,
  "propagateRelationTypes": [],
  "originatorName": "device",
  "originatorLabel": "device",
  "assignee": null,
  "name": "High Temperature",
  "status": "ACTIVE_UNACK",
  "details": {
    "temperature": 45.5
  }
}
```

Metadata:

```json
{
  "isNewAlarm": "true"
}
```

Routed via `Created` connection.

**Result**

The following actions occur:

- New alarm created: A "High Temperature" alarm with CRITICAL severity is created in the database for the device.
- Details generated: The details builder script executes and stores `{"temperature": 45.5}` in the alarm's `details` field.
- Message transformed: The original telemetry message is replaced with an `ALARM` message containing the complete alarm object. The message is routed through the `Created`
  connection with the `isNewAlarm: true` metadata flag.
- Lifecycle event triggered: An `ENTITY_CREATED` lifecycle event for the new alarm is automatically sent to the device's root rule chain.

### Example 2 — Updating existing alarm

**Incoming message**

Type: `POST_TELEMETRY_REQUEST`

Data:

```json
{
  "temperature": 47.2
}
```

Metadata:

```json
{}
```

Originator: `DEVICE`

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "alarmDetailsBuildTbel": "return {\n    temperature: msg.temperature\n};",
  "alarmType": "High Temperature",
  "severity": "CRITICAL"
}
```

**State of the system**

An active "High Temperature" alarm exists for the originator device with:

- Status: `ACTIVE_UNACK`
- Details: `{"temperature": 45.5}`
- Start time: 1757429087063
- End time: 1757429087063

**Outgoing message**

Data:

```json
{
  "id": {
    "entityType": "ALARM",
    "id": "f66e9b38-6f0e-4dc7-ad57-1cb4e014b6fc"
  },
  "createdTime": 1757429087089,
  "tenantId": {
    "entityType": "TENANT",
    "id": "9c4bad70-10ac-11f0-ad7c-897c5310f06b"
  },
  "customerId": null,
  "type": "High Temperature",
  "originator": {
    "entityType": "DEVICE",
    "id": "3bc2eb60-8d77-11f0-8a6c-59050cd4204f"
  },
  "severity": "CRITICAL",
  "acknowledged": false,
  "cleared": false,
  "assigneeId": null,
  "startTs": 1757429087063,
  "endTs": 1757429195123,
  "ackTs": 0,
  "clearTs": 0,
  "assignTs": 0,
  "propagate": false,
  "propagateToOwner": false,
  "propagateToTenant": false,
  "propagateRelationTypes": [],
  "originatorName": "device",
  "originatorLabel": "device",
  "assignee": null,
  "name": "High Temperature",
  "status": "ACTIVE_UNACK",
  "details": {
    "temperature": 47.2
  }
}
```

Metadata:

```json
{
  "isExistingAlarm": "true"
}
```

Routed via `Updated` connection.

**Result**

The following actions occur:

- **Existing alarm updated**: The active "High Temperature" alarm is updated in the database. The alarm status remains `ACTIVE_UNACK` (unchanged).
- **Details regenerated**: The details builder script executes with access to previous details through `metadata.prevAlarmDetails`. It updates the temperature reading, resulting in
  `{"temperature": 47.2}`.
- **End time updated**: The alarm's `endTs` is updated to the current system time (1757429195123), while `startTs` remains at the original creation time.
- **Message transformed**: The original telemetry message is replaced with an `ALARM` message containing the updated alarm object. The message is routed through the `Updated`
  connection with the `isExistingAlarm: true` metadata flag.
- **Lifecycle event triggered**: An `ENTITY_UPDATED` lifecycle event for the updated alarm is automatically sent to the device's root rule chain.
