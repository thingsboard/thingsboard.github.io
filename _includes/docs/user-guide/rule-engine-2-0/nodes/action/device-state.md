Sends device connectivity events for the message originator.

## Configuration

- **Device connectivity event**: Specifies the type of connectivity event to send.
    - *Connect Event*: Sends a device connection event
    - *Activity Event*: Sends a device activity event
    - *Disconnect Event*: Sends a device disconnection event
    - *Inactivity Event*: Sends a device inactivity event

### Device connectivity event types

Each connectivity event type performs specific actions when triggered. The keys mentioned below can be stored as either attributes or time series data depending on system
configuration.

#### Connect Event

- **Updates**: `lastConnectTime` key with event timestamp
- **Sends**: `CONNECT_EVENT` message to device default rule chain
- **Activity status**: Does not affect device activity status

**Example `CONNECT_EVENT` message:**

Data:

```json
{
  "lastConnectTime": 1758038320471,
  "lastActivityTime": 1758035087437,
  "lastDisconnectTime": 1757953973722,
  "lastInactivityAlarmTime": 1758035693342,
  "inactivityTimeout": 600000
}
```

Metadata:

```json
{
  "deviceLabel": "MyDeviceLabel",
  "deviceName": "MyDeviceName",
  "deviceType": "default",
  "scope": "SERVER_SCOPE"
}
```

#### Activity Event

- **Updates**: `lastActivityTime` key with event timestamp
- **Sends**: `ACTIVITY_EVENT` message to device default rule chain (only if device activity status changed from `false` to `true`)
- **Activity status**: Changes device activity status to `true`

**Example `ACTIVITY_EVENT` message:**

Data:

```json
{
  "active": true,
  "lastConnectTime": 0,
  "lastActivityTime": 1758103455789,
  "lastDisconnectTime": 0,
  "lastInactivityAlarmTime": 0,
  "inactivityTimeout": 600000
}
```

Metadata: same as above

#### Disconnect Event

- **Updates**: `lastDisconnectTime` key with event timestamp
- **Sends**: `DISCONNECT_EVENT` message to device default rule chain
- **Activity status**: Does not affect device activity status

**Example `DISCONNECT_EVENT` message:**

Data:

```json
{
  "active": true,
  "lastConnectTime": 1758103455789,
  "lastActivityTime": 1758103455789,
  "lastDisconnectTime": 1758103866706,
  "lastInactivityAlarmTime": 0,
  "inactivityTimeout": 600000
}
```

Metadata: same as above

#### Inactivity Event

- **Updates**: `lastInactivityAlarmTime` key with event timestamp
- **Sends**: `INACTIVITY_EVENT` message to device default rule chain
- **Activity status**: Changes device activity status from `true` to `false`

**Example `INACTIVITY_EVENT` message:**

Data:

```json
{
  "active": false,
  "lastConnectTime": 0,
  "lastActivityTime": 1758103455789,
  "lastDisconnectTime": 1758103866706,
  "lastInactivityAlarmTime": 1758103974516,
  "inactivityTimeout": 600000
}
```

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbDeviceStateNodeConfiguration",
  "type": "object",
  "properties": {
    "event": {
      "type": "string",
      "enum": [
        "CONNECT_EVENT",
        "ACTIVITY_EVENT",
        "DISCONNECT_EVENT",
        "INACTIVITY_EVENT"
      ],
      "description": "Type of device connectivity event to trigger"
    }
  },
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. **Validate originator**: Checks if the message originator is a device entity. If not, processing fails and message is routed to `Failure`.
2. **Rate limiting check**: Applies rate limiting per device to prevent excessive connectivity events. Uses configurable (using `DEVICE_STATE_NODE_RATE_LIMIT_CONFIGURATION`
   environment variable) rate limits (default: `1:1,30:60,60:3600` - 1 event per second, 30 events per minute, 60 events per hour).
3. **Extract timestamp**: Uses the `ts` metadata property if present, otherwise uses the message timestamp as the event timestamp.
4. **Triggers event**: Triggers the connectivity event based on the configured type.
5. **Route message**: Routes the original message based on the result:
    - `Success` if event was triggered successfully
    - `Failure` if an error occurred during processing
    - `Rate limited` if the rate limit was exceeded

## Output connections

- `Success`
    - Device connectivity event was successfully triggered
- `Failure`
    - Message originator is not a `DEVICE`
    - Unexpected error occurred during processing
- `Rate limited`
    - Rate limit for connectivity events was exceeded for this device

## Examples

### Example 1 — Activity event

**Incoming message**

Originator: `DEVICE`

Metadata:

```json
{
  "ts": "1694887200000"
}
```

**Node configuration**

```json
{
  "event": "ACTIVITY_EVENT"
}
```

**State of the system**

- Originator device is inactive (`active` is set to `false`)
- `lastActivityTime` is set to `1694887100000`

**Outgoing message**

Same as incoming message, routed via `Success` connection.

**Result**

The following actions occur:

- `lastActivityTime` is updated to `1694887200000`
- Activity status changes from `false` to `true`
- `ACTIVITY_EVENT` message is sent to the device's default rule chain.
