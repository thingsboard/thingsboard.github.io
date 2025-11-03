Executes user-defined function to transform an incoming message into a string for logging purposes. The script can access the message data, metadata, and type to create custom log
entries that are written to the ThingsBoard log file.
Supports **TBEL** and **JavaScript**.

## Configuration

The node provides a choice of scripting language and a code editor to write the logging logic.

- **Language Selector** - choose between **TBEL** (ThingsBoard Expression Language) or **JavaScript**.
- **Script Editor** - a text area where you write the body of the log formatting function.

### Log formatting function

The code entered into the script editor acts as the body of a log formatting function. This function implicitly receives three arguments that are available as variables in your
script:

- `msg` - the data of the incoming message, typically as a JSON object.
- `metadata` - the metadata of the incoming message, as a key-value object where all values are strings.
- `msgType` - the type of the incoming message, as a string.

The function must **return** a string that will be written to the ThingsBoard log file using the INFO log level.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbLogNodeConfiguration",
  "type": "object",
  "properties": {
    "scriptLang": {
      "type": "string",
      "enum": [
        "JS",
        "TBEL"
      ],
      "description": "The scripting language to use."
    },
    "jsScript": {
      "type": "string",
      "description": "The JavaScript log formatting function body. Used when 'scriptLang' is set to 'JS'."
    },
    "tbelScript": {
      "type": "string",
      "description": "The TBEL log formatting function body. Used when 'scriptLang' is set to 'TBEL'."
    }
  },
  "required": [
    "scriptLang"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node executes the user-defined script, passing the incoming message's `msg`, `metadata`, and `msgType` as arguments.
2. The script returns a string value that represents the log message.
3. The returned string is written to the ThingsBoard log file using the INFO log level.
4. After successful logging, the original message is passed through to the `Success` chain unchanged.
5. If the script encounters an error during execution (e.g., a syntax error or runtime exception), the processing fails and message is routed to the `Failure` chain.

## Output connections

- `Success`:
    - The original incoming message is sent through this chain after successful logging.
- `Failure`:
    - If the script execution fails with an error.

## Examples

### Example 1 - Basic logging

**Incoming message**

Data:

```json
{
  "temperature": 24.3,
  "humidity": 58.7
}
```

Metadata:

```json
{
  "deviceName": "Sensor-01",
  "deviceType": "default",
  "ts": "1756380600000"
}
```

Type: `POST_TELEMETRY_REQUEST`

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "tbelScript": "return 'Message Type: ' + msgType + ' | Device: ' + metadata.deviceName + ' | Temperature: ' + msg.temperature + '°C | Humidity: ' + msg.humidity + '%';"
}
```

**Outgoing message**

Same as incoming message, routed via `Success` connection.

**Result**

The script execution results in the following log entry in thingsboard.log:

```
Message Type: POST_TELEMETRY_REQUEST | Device: Sensor-01 | Temperature: 24.3°C | Humidity: 58.7%
```
