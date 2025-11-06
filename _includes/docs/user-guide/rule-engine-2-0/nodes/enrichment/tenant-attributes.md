Retrieves server-side attributes or the latest time series from the message originator's **Tenant** and adds them to the message data or metadata.

## Configuration

The configuration allows you to specify which data to fetch from the tenant and how to map it to new keys in the outgoing message.

- **Mapping of tenant's** - Specifies the type of data to fetch from the tenant.
    - *Attributes*: Fetches server-side attributes from the tenant.
    - *Latest telemetry*: Fetches the latest value of time series key from the tenant.
- **Attributes/Latest telemetry mapping** - A list of key-value pairs to define how data is fetched and added to the message.
    - **Source attribute/telemetry key**: The name of the attribute or telemetry key on the Tenant entity.
    - **Target key**: The key that will be used to store the fetched value in the message data or metadata.
    - Both **Source attribute/telemetry key** and **Target key** keys support templatization using `${metadataKey}` or `$[dataKey]` to substitute values from the message
      metadata or data.
- **Add mapped attributes/latest telemetry to** - Determines the destination for the fetched data.
    - *Message*: Adds the fetched key-value pairs to the message data. If the original message data is not a valid JSON object, the processing will fail.
    - *Metadata*: Adds the fetched key-value pairs to the message metadata.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbGetTenantAttributeNodeConfiguration",
  "type": "object",
  "properties": {
    "dataToFetch": {
      "type": "string",
      "enum": [
        "ATTRIBUTES",
        "LATEST_TELEMETRY"
      ],
      "description": "Specifies the type of data to fetch from the tenant (server-side attributes or latest time series)."
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
      "description": "A map where keys are the source attribute/telemetry keys on the tenant and values are the target keys in the message."
    }
  },
  "required": [
    "dataToFetch",
    "fetchTo",
    "dataMapping"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node identifies the **Tenant** associated with the incoming message originator.
2. It resolves any templates in the **Source attribute/telemetry key** and **Target key** fields using the message data and metadata.
3. Based on the configuration, it asynchronously requests the specified server-side attributes or latest time series values from the Tenant entity.
4. If any of the requested keys do not exist on the tenant, they are simply ignored. The message processing continues with the data that was successfully found.
5. The fetched key-value pairs are added to either the message data or metadata, according to the **Add mapped attributes/latest telemetry to** setting.
6. The enriched message is forwarded to the `Success` connection. If an error occurs (e.g., trying to add data to a non-JSON message data), the message is routed to the
   `Failure` connection.

## Output connections

- `Success`:
    - The message is successfully enriched with the requested data from the tenant.
- `Failure`:
    - An error occurred during processing, for example, if the **Add mapped attributes/latest telemetry to** is set to *Message* but the message data is not a valid JSON object.

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
  }
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
{}
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
    "${deviceType}SourceKey": "exampleTargetKey"
  }
}
```

**Outgoing message**:

The outgoing message is sent via the `Success` connection with its data enriched.

Data:
```json
{
  "exampleTargetKey": "exampleValue"
}
```
