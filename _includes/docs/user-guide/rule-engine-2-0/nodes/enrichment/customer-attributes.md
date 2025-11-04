Retrieves server-side attributes or the latest time series from the message originator's **Customer** and adds them to the message data or metadata.

## Configuration

The configuration allows you to specify which data to fetch from the customer and how to map it to new keys in the outgoing message.

- **Mapping of customer's** - Specifies the type of data to fetch from the customer.
    - *Attributes*: Fetches server-side attributes from the customer.
    - *Latest telemetry*: Fetches the latest value of a time series key from the customer.
- **Attributes/Latest telemetry mapping** - A list of key-value pairs to define how data is fetched and added to the message.
    - **Source attribute/telemetry key**: The name of the attribute or telemetry key on the Customer entity.
    - **Target key**: The key that will be used to store the fetched value in the message data or metadata.
    - Both **Source attribute/telemetry key** and **Target key** support templatization using `${metadataKey}` or `$[dataKey]` to substitute values from the message metadata or
      data.
- **Add mapped attributes/latest telemetry to** - Determines the destination for the fetched data.
    - *Message*: Adds the fetched key-value pairs to the message data. If the original message data is not a valid JSON object, the processing will fail.
    - *Metadata*: Adds the fetched key-value pairs to the message metadata.
- **Fetch originator's attributes if originator is customer** - A boolean flag that is relevant only when the message originator is a Customer entity.
    - If *enabled*, the node fetches data directly from that Customer originator.
    - If *disabled*, the node will fail to find a parent customer for the Customer originator, and the message will be routed to the `Failure` connection.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbGetCustomerAttributeNodeConfiguration",
  "type": "object",
  "properties": {
    "dataToFetch": {
      "type": "string",
      "enum": [
        "ATTRIBUTES",
        "LATEST_TELEMETRY"
      ],
      "description": "Specifies the type of data to fetch from the customer (server-side attributes or latest time series)."
    },
    "fetchTo": {
      "type": "string",
      "enum": [
        "DATA",
        "METADATA"
      ],
      "description": "Destination for the fetched data (message data or metadata)."
    },
    "dataMapping": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "description": "A map where keys are the source attribute/telemetry keys on the customer and values are the target keys in the message."
    },
    "preserveOriginatorIfCustomer": {
      "type": "boolean",
      "description": "If the originator is a customer, fetch attributes from the originator itself."
    }
  },
  "required": [
    "dataToFetch",
    "fetchTo",
    "dataMapping",
    "preserveOriginatorIfCustomer"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node identifies the **Customer** associated with the incoming message originator (e.g., the customer of the device that sent the message). If a customer cannot be found, the
   message is routed to the `Failure` connection.
2. It resolves any templates in the **Source attribute/telemetry key** and **Target key** fields using the message data and metadata.
3. Based on the configuration, it asynchronously requests the specified server-side attributes or latest time series values from the Customer entity.
4. If any of the requested keys do not exist on the customer, they are simply ignored. The message processing continues with the data that was successfully found.
5. The fetched key-value pairs are added to either the message data or metadata, according to the **Add mapped attributes/latest telemetry to** setting.
6. The enriched message is forwarded to the `Success` connection. If an error occurs (e.g., trying to add data to a non-JSON message data), the message is routed to the `Failure`
   connection.

## Output connections

- `Success`:
    - The message is successfully enriched with the requested data from the customer.
- `Failure`:
    - An error occurred during processing. For example, if the originator has no customer, or if the **Add mapped attributes/latest telemetry to** is set to *Message* but the
      message data is not a valid JSON object.

## Examples

### Example 1 — Enriching metadata

**Incoming message**:

Metadata:

```json
{
  "deviceName": "Thermostat-A7",
  "deviceType": "thermostat"
}
```

**Node configuration**:

```json
{
  "dataToFetch": "ATTRIBUTES",
  "fetchTo": "METADATA",
  "dataMapping": {
    "exampleSourceKey": "exampleTargetKey"
  },
  "preserveOriginatorIfCustomer": false
}
```

**Outgoing message**:

The outgoing message is sent via the `Success` connection with its metadata enriched.

Metadata:

```json
{
  "deviceName": "Thermostat-A7",
  "deviceType": "thermostat",
  "exampleTargetKey": "exampleValue"
}
```

### Example 2 — Enriching data

**Incoming message**:

Data:

```json
{
  "pressure": 125
}
```

Metadata:

```json
{
  "deviceName": "Boiler-B2",
  "deviceType": "boiler"
}
```

**Node configuration**:

```json
{
  "dataToFetch": "ATTRIBUTES",
  "fetchTo": "DATA",
  "dataMapping": {
    "${deviceType}AlarmThreshold": "alarmThreshold"
  },
  "preserveOriginatorIfCustomer": false
}
```

**Outgoing message**:

The outgoing message is sent via the `Success` connection with its data enriched with the customer's specific alarm threshold.

Data:

```json
{
  "pressure": 125,
  "alarmThreshold": 120
}
```
