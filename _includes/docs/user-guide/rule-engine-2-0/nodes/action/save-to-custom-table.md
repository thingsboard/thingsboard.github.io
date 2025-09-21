Stores the incoming message data in a custom Cassandra table.

## Configuration

- **Custom table name** - The name of the target custom table without the `cs_tb_` prefix. The table must already exist in the Cassandra cluster with the full name
  `cs_tb_{tableName}`. Prefix is necessary to distinguish custom tables from ThingsBoard standard tables.
- **Fields mapping** - A mapping between message field names (keys) and table column names (values). Each entry defines how a field from the message data should be stored in the
  corresponding table column.
- **Default TTL** - Time-To-Live in seconds for the inserted records. Set to 0 to disable TTL. When set to a positive value, records will automatically expire after the specified
  duration.

> Note: When **$entityId** is used as a message field key, the node will write the message originator ID to the corresponding table column instead of looking for this field in the
> message data.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbSaveToCustomCassandraTableNodeConfiguration",
  "type": "object",
  "properties": {
    "tableName": {
      "type": "string",
      "description": "Custom table name without 'cs_tb_' prefix"
    },
    "fieldsMapping": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "description": "Mapping between message field names and table column names"
    },
    "defaultTtl": {
      "type": "integer",
      "minimum": 0,
      "description": "Default TTL in seconds, 0 means no TTL"
    }
  },
  "required": [
    "tableName",
    "fieldsMapping",
    "defaultTtl"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. Parses the incoming message data as JSON and validates it's a JSON object.
2. For each field mapping entry:
    - If the message field key is `$entityId`, uses the message originator's ID
    - Otherwise, looks for the field in the message data
    - Maps JSON primitive values to appropriate Cassandra data types:
        - Numbers with decimal points → Double
        - Numbers without decimal points → Long
        - Booleans → Boolean
        - Strings → String
    - JSON objects are converted to string representation
    - Missing fields or non-primitive/non-object values cause processing to fail
3. Constructs and executes an `INSERT` statement with the mapped values.
4. If TTL is configured (> 0), applies the TTL to the inserted record.
5. On successful insertion, routes the message to `Success`. On any error, routes to `Failure`.

## Output connections

- `Success`
    - The data was successfully saved to the custom table
- `Failure`
    - Target table doesn't exist
    - Message data is not a valid JSON object
    - Required message field is missing
    - Message field value is not a JSON primitive or object
    - Database connection or insertion error

## Examples

### Example 1 — Basic data insertion

**Incoming message**

Data:

```json
{
  "temperature": 23.5,
  "humidity": 60,
  "location": "Room A",
  "active": true
}
```

**Node configuration**

```json
{
  "tableName": "sensor_data",
  "fieldsMapping": {
    "temperature": "temp_value",
    "humidity": "humidity_level",
    "location": "room_name",
    "active": "is_active"
  },
  "defaultTtl": 0
}
```

**State of the system**

- Table `cs_tb_sensor_data` exists with columns: `temp_value`, `humidity_level`, `room_name`, `is_active`.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

A new record is inserted into `cs_tb_sensor_data`:

- `temp_value`: 23.5 (Double)
- `humidity_level`: 60 (Long)
- `room_name`: "Room A" (String)
- `is_active`: true (Boolean)

### Example 2 — Using entity ID mapping

**Incoming message**

Originator: `DEVICE` with ID `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`

Data:

```json
{
  "reading": 150.7,
  "timestamp": 1640995200
}
```

**Node configuration**

```json
{
  "tableName": "device_readings",
  "fieldsMapping": {
    "$entityId": "device_id",
    "reading": "sensor_value",
    "timestamp": "read_time"
  },
  "defaultTtl": 3600
}
```

**State of the system**

- Table `cs_tb_device_readings` exists with columns: `device_id`, `sensor_value`, `read_time`.

**Outgoing message**

The outgoing message is identical to the incoming one. Routed via the `Success` connection.

**Result**

A new record is inserted into `cs_tb_device_readings` with TTL of 3600 seconds:

- `device_id`: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6` (ID of the originator device)
- `sensor_value`: 150.7 (Double)
- `read_time`: 1640995200 (Long)
