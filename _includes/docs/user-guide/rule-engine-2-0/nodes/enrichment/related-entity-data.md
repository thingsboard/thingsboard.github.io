Finds an entity related to the message originator, fetches its data (attributes, latest telemetry, or entity fields), and adds the results to the message data or metadata.

## Configuration

The configuration window allows you to define how to find the related entity and which data to fetch.

- **Relations query** - Defines the criteria for searching for the related entity starting from the message originator.
    - **Direction** - The direction of the relation to search for.
        - *From originator*: Searches for relations where the originator is the source.
        - *To originator*: Searches for relations where the originator is the target.
    - **Max relation level** - The maximum depth of the relationship search.
    - **Relation filters** - A set of filters to apply. Each filter specifies:
        - **Relation type**: The type of relation (e.g., `Contains`, `Manages`).
        - **Entity types**: A set of entity types to look for (e.g., `DEVICE`, `ASSET`). If empty, entities of any type are considered.
- **Data to fetch** - Specifies the type of data to retrieve from the found entity.
    - *Attributes*: Fetches server-side attributes.
    - *Latest Telemetry*: Fetches the latest time series values.
    - *Fields*: Fetches fields from the entity object itself (e.g., `Name`, `Profile name`, `Label`, `Created time`).
- **Attributes/Latest telemetry/Fields mapping** - A set of key-value pairs to define which data to fetch and what to name it.
    - The **Source attribute key/telemetry key/field** is the name of the attribute, time series key, or entity field on the related entity.
    - The **Target key** is the new key name that will be added to the message.
    - Templates like `${metadata.key}` can be used in both source and target keys.
- **Add mapped attributes/latest telemetry/fields to** - Determines the destination for the fetched data.
    - *Message*: Adds the fetched key-value pairs to the message data. The message data must be a JSON object.
    - *Metadata*: Adds the fetched key-value pairs to the message metadata.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbGetRelatedDataNodeConfiguration",
  "type": "object",
  "properties": {
    "relationsQuery": {
      "type": "object",
      "description": "Configuration for finding a related entity."
    },
    "dataToFetch": {
      "type": "string",
      "enum": [
        "ATTRIBUTES",
        "LATEST_TELEMETRY",
        "FIELDS"
      ],
      "description": "The type of data to fetch from the related entity."
    },
    "dataMapping": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "description": "Mapping of source keys on the related entity to target keys in the message."
    },
    "fetchTo": {
      "type": "string",
      "enum": [
        "DATA",
        "METADATA"
      ],
      "description": "Destination for the fetched data."
    }
  },
  "required": [
    "relationsQuery",
    "dataToFetch",
    "dataMapping",
    "fetchTo"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node identifies the originator of the incoming message (e.g., a specific Device or Asset).
2. It executes the **Relations Query** specified in the configuration to find a related entity.
3. If no related entity is found, the message is routed to the `Failure` connection with an error.
4. If multiple related entities are found, the node proceeds using only the **first one** returned by the query.
5. Based on the **Data to fetch** setting, the node asynchronously requests the specified data from the found entity using the source keys from the **Data mapping**. If a
   requested key does not exist on the related entity, it is silently ignored.
6. The node processes the **Data mapping** rules, mapping the fetched values to their corresponding target keys. Any templates used in the keys are resolved using the message data
   and metadata.
7. Based on the **Add mapped attributes/latest telemetry/fields to** setting, the new key-value pairs are added to either the message data or metadata.
8. The enriched message is sent via the `Success` connection.

## Output connections

- `Success`:
    - The message is successfully enriched with data from the related entity.
- `Failure`:
    - No related entity was found using the specified query.
    - An unexpected error occurred during processing.

## Examples

### Example 1 — Enriching metadata with a related asset's attribute

This example demonstrates how to fetch an attribute from a related asset and add it to the message metadata.

**Scenario**: A device from a specific building sends its temperature reading. We want to add the building's location, which is stored as an attribute on the parent "Building"
asset, to the message metadata.

**Incoming message**

Metadata:

```json
{
  "deviceName": "Thermostat-A7",
  "deviceType": "thermostat"
}
```

Originator: device named "Thermostat-A7"

**Node configuration**

```json
{
  "relationsQuery": {
    "direction": "TO",
    "maxLevel": 1,
    "filters": [
      {
        "relationType": "Contains",
        "entityTypes": [
          "ASSET"
        ]
      }
    ]
  },
  "fetchTo": "METADATA",
  "dataToFetch": "ATTRIBUTES",
  "dataMapping": {
    "location": "buildingLocation"
  }
}
```

**State of the system**:

* An asset named "Building-1" has a server-side attribute `location` with the value `{"city": "Kyiv"}`.
* There is a `Contains` relation from "Building-1" **to** "Thermostat-A7".

**Outgoing message**

The outgoing message is identical to the incoming one, but its metadata is enriched. It is sent via the `Success` connection.

Metadata:

```json
{
  "deviceName": "Thermostat-A7",
  "deviceType": "thermostat",
  "buildingLocation": "{\"city\": \"Kyiv\"}"
}
```

**Explanation**: The node searched for a relation originating from the device ("Thermostat-A7") with the direction `TO`. It found the "Building-1" asset via the `Contains`
relation. Then, it fetched the `location` attribute and added its value to the message metadata with the new key `buildingLocation`.

### Example 2 — Enriching data with a related device's telemetry

**Scenario**: A "Gateway" device sends a health check message. We need to enrich this message with the latest `batteryLevel` telemetry from a "Sensor" device that the gateway
manages.

**Incoming message**

Data:

```json
{
  "status": "OK",
  "uptime": 7200
}
```

Originator: device named "Main-Gateway"

**Node configuration**

```json
{
  "relationsQuery": {
    "direction": "FROM",
    "maxLevel": 1,
    "filters": [
      {
        "relationType": "Manages",
        "entityTypes": [
          "DEVICE"
        ]
      }
    ]
  },
  "fetchTo": "DATA",
  "dataToFetch": "LATEST_TELEMETRY",
  "dataMapping": {
    "batteryLevel": "sensor_battery"
  }
}
```

**System State**:

* A device named "Battery-Sensor-1" has a latest telemetry value `batteryLevel` of `87`.
* There is a `Manages` relation **from** "Main-Gateway" to "Battery-Sensor-1".

**Outgoing message**

Data:

```json
{
  "status": "OK",
  "uptime": 7200,
  "sensor_battery": 87
}
```

**Explanation**: The node searched for a relation starting `FROM` the "Main-Gateway" with type `Manages`. It found "Battery-Sensor-1", fetched its latest `batteryLevel` telemetry,
and added it to the message data with the key `sensor_battery`.
