Clears existing active alarms for the message originator.

## Configuration

- **Alarm type**: Type of the alarm to clear (e.g., "General Alarm", "High Temperature"). Supports templatization.
- **Alarm details script**: A script (TBEL or JavaScript) that generates the content for the alarm's `details` field when clearing. The script must return a valid JSON value, which
  can be:
    - Primitive values (numbers, booleans, strings)
    - JSON arrays
    - JSON objects

  The script has access to the following variables:
    - `msg`: The message data
    - `metadata`: The message metadata
    - `msgType`: The message type
    - `metadata.prevAlarmDetails`: The previous alarm details from the existing alarm (provided as a JSON string)

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbClearAlarmNodeConfiguration",
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
    }
  }
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. **Determine alarm type**: Processes the configured alarm type pattern, substituting any placeholders with values from the message.

2. **Search for alarm to clear**:
    - **If message originator is an `ALARM`**: Fetches the that alarm by its ID
    - **Otherwise**: Queries for the latest active alarm with:
        - Same originator as the incoming message
        - Alarm type from step 1

3. **Clear alarm**:
    - **If alarm exists and is not cleared**:
        - Changes alarm status to cleared
        - Sets clear time to current system time
        - Executes details builder script with access to previous alarm details via `metadata.prevAlarmDetails`
        - Updates the `details` field with the script result
        - Routes to `Cleared` connection with `isClearedAlarm: true` in metadata
        - Message data is replaced with the cleared alarm object
        - Message type changed to `ALARM`
        - Sends `ALARM_CLEAR` lifecycle event with complete alarm object to the originator's root rule chain

    - **If no active alarm exists or alarm is already cleared**:
        - Routes original message to `False` connection unchanged
        - No alarm modifications occur

## Output connections

- `Cleared`
    - Alarm was successfully cleared
    - Message data is replaced with the cleared alarm object
    - Metadata includes `isClearedAlarm: true`
    - Message type changed to `ALARM`
- `False`
    - No active alarm found for the specified type and originator
    - Alarm was already in cleared state

## Examples

### Example 1 — Clearing an active alarm

**Incoming message**

Data:

```json
{
  "temperature": 25.0
}
```

Originator: `DEVICE`

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "alarmDetailsBuildTbel": "return {\n    clearedAt: msg.temperature\n};",
  "alarmType": "High Temperature"
}
```

**State of the system**

An active "High Temperature" alarm exists for the originator device with:

- Status: `ACTIVE_UNACK`
- Details: `{"temperature": 47.2}`
- Start time: 1757429087063
- End time: 1757429195123

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
  "cleared": true,
  "assigneeId": null,
  "startTs": 1757429087063,
  "endTs": 1757429195123,
  "ackTs": 0,
  "clearTs": 1757429287456,
  "assignTs": 0,
  "propagate": false,
  "propagateToOwner": false,
  "propagateToTenant": false,
  "propagateRelationTypes": [],
  "originatorName": "device",
  "originatorLabel": "device",
  "assignee": null,
  "name": "High Temperature",
  "status": "CLEARED_UNACK",
  "details": {
    "clearedAt": 25.0
  }
}
```

Metadata:

```json
{
  "isClearedAlarm": "true"
}
```

Routed via `Cleared` connection.

**Result**

The following actions occur:

- **Alarm cleared**: The active "High Temperature" alarm status changes from `ACTIVE_UNACK` to `CLEARED_UNACK`.
- **Clear timestamp set**: The alarm's `clearTs` is set to the current system time (1757429287456).
- **Details updated**: The details builder script executes with access to previous details through `metadata.prevAlarmDetails`. It adds a `clearedAt` field, resulting in
  `{"clearedAt": 25.0}`.
- **Message transformed**: The original telemetry message is replaced with an `ALARM` message containing the cleared alarm object. The message is routed through the `Cleared`
  connection with the `isClearedAlarm: true` metadata flag.
- **Lifecycle event triggered**: An `ALARM_CLEAR` lifecycle event for the cleared alarm is automatically sent to the device's root rule chain.

### Example 2 — No active alarm to clear

**Incoming message**

Originator: `DEVICE`

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "alarmDetailsBuildTbel": "return {};",
  "alarmType": "High Temperature"
}
```

**State of the system**

No active "High Temperature" alarm exists for the originator device (either no alarm was ever created or any existing alarms are already cleared).

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `False` connection.

**Result**
 
The following actions occur:

- **No alarm modification**: Since no active alarm exists, no database changes occur.
- **Original message preserved**: The incoming telemetry message passes through unchanged via the `False` connection.
- **No lifecycle events**: No alarm lifecycle events are triggered.

### Example 3 — Clearing alarm by alarm ID

**Incoming message**

Originator: `ALARM` with ID `f66e9b38-6f0e-4dc7-ad57-1cb4e014b6fc`

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "alarmDetailsBuildJs": "return {};",
  "alarmType": "High Temperature"
}
```

**State of the system**

The alarm with ID `f66e9b38-6f0e-4dc7-ad57-1cb4e014b6fc` exists and has status `ACTIVE_ACK`.

**Outgoing message**

The alarm object is fetched by ID and cleared, with the message routed via `Cleared` connection containing the updated alarm with `status: "CLEARED_ACK"`.

**Result**

When the message originator is an alarm entity, the node directly fetches and clears that specific alarm by ID, regardless of the configured alarm type.
