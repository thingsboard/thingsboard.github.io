Retrieves attributes and/or the latest time series data from the message originator and adds the results to either the message data or the message metadata.

## Configuration

The node's configuration allows you to specify which keys to fetch from different data sources and where to place the results.

- **Client attributes** - A list of client-side attribute keys to fetch. The fetched keys will be prefixed with `cs_`.
- **Shared attributes** - A list of shared attribute keys to fetch. The fetched keys will be prefixed with `shared_`.
- **Server attributes** - A list of server-side attribute keys to fetch. The fetched keys will be prefixed with `ss_`.
- **Latest telemetry** - A list of time series keys for which to fetch the latest values. These keys are not prefixed.
    - **Fetch latest telemetry with timestamp** - If checked, the latest telemetry values are returned as a JSON object containing the value and its timestamp (e.g.,
      `{"ts":1672531200000, "value": "42"}`). If unchecked, only the raw value is returned.
- **Add originator attributes to** - Determines the destination for the fetched data.
    - *Message*: Adds the fetched key-value pairs to the message data. The message data must be a JSON object.
    - *Metadata*: Adds the fetched key-value pairs to the message metadata.
- **Tell failure if attribute or telemetry are missing** - If checked, the message is routed via `Failure` connected if any of the specified keys do not exist on the originator
  entity. If unchecked, missing keys are simply ignored, and the message proceeds to the `Success` connection with the data that was found.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbGetAttributesNodeConfiguration",
  "type": "object",
  "properties": {
    "fetchTo": {
      "type": "string",
      "enum": [
        "DATA",
        "METADATA"
      ],
      "description": "Destination for the fetched data (message data or metadata)."
    },
    "clientAttributeNames": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Set of client-side attribute keys to fetch."
    },
    "sharedAttributeNames": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Set of shared attribute keys to fetch."
    },
    "serverAttributeNames": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Set of server-side attribute keys to fetch."
    },
    "latestTsKeyNames": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Set of time series keys for which to fetch the latest values."
    },
    "getLatestValueWithTs": {
      "type": "boolean",
      "description": "If true, fetches telemetry with its timestamp as a JSON object."
    },
    "tellFailureIfAbsent": {
      "type": "boolean",
      "description": "If true, routes the message to 'Failure' if any key is not found."
    }
  },
  "required": [
    "fetchTo"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node identifies the originator of the incoming message (e.g., the specific Device or Asset).
2. It asynchronously requests the attributes and latest telemetry values specified in the configuration for that originator.
3. The node checks if all requested keys were found. If the **Tell failure if attribute or telemetry are missing** option is enabled and any key is missing, the original message is
   routed to the `Failure` connection with an error detailing the missing keys.
4. For each successfully fetched attribute, a prefix is added to its key:
    * Client attributes: `cs_`
    * Shared attributes: `shared_`
    * Server attributes: `ss_`
    * Time series keys are **not** prefixed.
5. Based on the **Add originator attributes to** setting, the node adds the new key-value pairs to either the message data or the message metadata.
6. The enriched message is sent via the `Success` connection.

## Output connections

- `Success`:
    - The message is successfully enriched with the requested data.
- `Failure`:
    - An error occurred during data fetching.
    - A requested key was not found, and the **Tell failure if attribute or telemetry are missing** option was enabled.

## Examples

### Example 1 — Enriching metadata with attributes

This example demonstrates how to fetch a server-side attribute and add it to the message metadata for use in a subsequent filter node.

**Scenario**: A device sends a temperature reading. We need to enrich the message with a `tempThreshold` attribute stored on the device, so a later "script" node can check if the
temperature exceeds this threshold.

**Incoming message**

Metadata:

```json
{
  "deviceName": "Thermostat-A7",
  "deviceType": "thermostat"
}
```

**Node configuration**

```json
{
  "fetchTo": "METADATA",
  "serverAttributeNames": [
    "tempThreshold"
  ],
  "clientAttributeNames": [],
  "sharedAttributeNames": [],
  "latestTsKeyNames": [],
  "tellFailureIfAbsent": true,
  "getLatestValueWithTs": false
}
```

**State of the system**

The originator of the message (device) has the server-side attribute `tempThreshold` with value `25`.

**Outgoing message**

The outgoing message is identical to the incoming one, but its metadata is enriched. It is sent via the `Success` connection.

Metadata:

```json
{
  "deviceName": "Thermostat-A7",
  "deviceType": "thermostat",
  "ss_tempThreshold": "25"
}
```

**Explanation**: The node identified the message originator, fetched its server-side attribute `tempThreshold`, prefixed it with `ss_`, and added the key-value pair
`ss_tempThreshold: "25"` to the message metadata.

### Example 2 — Enriching data with latest time series values (without timestamp)

**Incoming message**

Data:

```json
{
  "pressure": 1013
}
```

**Node configuration**

```json
{
  "fetchTo": "DATA",
  "serverAttributeNames": [],
  "clientAttributeNames": [],
  "sharedAttributeNames": [],
  "latestTsKeyNames": [
    "temperature",
    "humidity"
  ],
  "tellFailureIfAbsent": false,
  "getLatestValueWithTs": false
}
```

**Outgoing message**

Data:

```json
{
  "pressure": 1013,
  "temperature": 25.5,
  "humidity": 40.7
}
```

### Example 3 — Enriching metadata with latest time series values (without timestamp)

**Incoming message**

Metadata:

```json
{
  "deviceName": "Thermostat-A7",
  "deviceType": "thermostat"
}
```

**Node configuration**

```json
{
  "fetchTo": "METADATA",
  "serverAttributeNames": [],
  "clientAttributeNames": [],
  "sharedAttributeNames": [],
  "latestTsKeyNames": [
    "temperature",
    "humidity"
  ],
  "tellFailureIfAbsent": false,
  "getLatestValueWithTs": false
}
```

**Outgoing message**

Metadata:

```json
{
  "deviceName": "Thermostat-A7",
  "deviceType": "thermostat",
  "humidity": "40.7",
  "temperature": "32.2"
}
```

### Example 4 — Enriching data with latest time series values (with timestamp)

**Incoming message**

Data:

```json
{
  "pressure": 1013
}
```

**Node configuration**

```json
{
  "fetchTo": "DATA",
  "serverAttributeNames": [],
  "clientAttributeNames": [],
  "sharedAttributeNames": [],
  "latestTsKeyNames": [
    "temperature",
    "humidity"
  ],
  "tellFailureIfAbsent": false,
  "getLatestValueWithTs": true
}
```

**Outgoing message**

Data:

```json
{
  "pressure": 1013,
  "temperature": {
    "ts": 1756479586801,
    "value": 32.2
  },
  "humidity": {
    "ts": 1756479659223,
    "value": 40.7
  }
}
```

### Example 5 — Enriching metadata with latest time series values (with timestamp)

**Incoming message**

Metadata:

```json
{
  "deviceName": "Thermostat-A7",
  "deviceType": "thermostat"
}
```

**Node configuration**

```json
{
  "fetchTo": "METADATA",
  "serverAttributeNames": [],
  "clientAttributeNames": [],
  "sharedAttributeNames": [],
  "latestTsKeyNames": [
    "temperature",
    "humidity"
  ],
  "tellFailureIfAbsent": false,
  "getLatestValueWithTs": true
}
```

**Outgoing message**

Metadata:

```json
{
  "deviceName": "Thermostat-A7",
  "deviceType": "thermostat",
  "humidity": "{\"ts\":1756479659223,\"value\":40.7}",
  "temperature": "{\"ts\":1756479586801,\"value\":32.2}"
}
```
