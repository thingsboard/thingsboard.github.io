Finds a device related to the message originator, fetches its attributes and/or latest telemetry, and adds the results to the message data or metadata.

## Configuration

The configuration window is divided into two main sections: **Device relations query** and **Related device attributes**.

### Device relations query

This section defines the criteria for finding the related device, starting from the message originator.

- **Direction**: The direction of the relation to search for.
    - **From originator**: Searches for relations where the message originator is the source.
    - **To originator**: Searches for relations where the message originator is the target.
- **Max relation level**: The maximum depth of the relationship search (e.g., `1` for directly related devices).
- **Fetch last level relation only**: A toggle to process only the entities found at the last relation level.
- **Relation type**: The type of relation to look for (e.g., `Contains`, `Manages`).
- **Device profiles**: A set of device profiles to filter by. Only devices matching one of these profiles will be considered.

### Related device attributes

This section specifies which data to fetch from the related device found by the query. All input fields support templates to use values from the message or metadata.

- **Client attributes**: A set of client-side attribute keys to fetch.
- **Shared attributes**: A set of shared attribute keys to fetch.
- **Server attributes**: A set of server-side attribute keys to fetch.
- **Latest telemetry**: A set of latest telemetry keys to fetch.
- **Fetch latest telemetry with timestamp**: If enabled, the fetched telemetry value will be a JSON object containing both the value and its timestamp (e.g.,
  `{"ts":1672531200000, "value":42}`). Otherwise, only the value is fetched.
- **Add selected attributes to**: Determines where to add the fetched data.
    - *Message*: Adds the key-value pairs to the message data (payload). The message data must be a JSON object.
    - *Metadata*: Adds the key-value pairs to the message metadata.
- **Tell failure if any of the attributes are missing**: If enabled, the message will be routed to the `Failure` chain if any of the specified attribute or telemetry keys are not
  found on the related device. If disabled, missing keys are simply ignored.

## Message processing algorithm

1. The node identifies the originator of the incoming message.
2. It executes the **Device relations query** to find a related device.
3. If no related device is found, the message is routed to the `Failure` connection.
4. If multiple related devices are found, the node proceeds using only the **first one** returned by the query.
5. The node asynchronously fetches the specified attributes and telemetry from the found device.
6. If the **Tell failure if any of the attributes are missing** option is enabled and any of the requested keys do not exist on the related device, the message is routed to the
   `Failure` connection with an error detailing the missing keys.
7. The fetched data is processed:
    * **Attribute Prefixes**: Keys for fetched attributes are automatically prefixed to indicate their scope:
        * Client attributes: `cs_` (e.g., `cs_attributeKey`)
        * Shared attributes: `shared_` (e.g., `shared_attributeKey`)
        * Server attributes: `ss_` (e.g., `ss_attributeKey`)
    * **Telemetry**: Keys for latest telemetry are **not** prefixed.
8. Based on the **Add selected attributes to** setting, the new key-value pairs are added to either the message data or metadata.
9. The enriched message is sent via the `Success` connection.

## Output connections

- `Success`:
    - The message is successfully enriched with data from the related device.
- `Failure`:
    - No related device was found using the specified query.
    - The **Tell failure if any of the attributes are missing** option is enabled, and at least one specified attribute or telemetry key was not found.
    - An unexpected error occurred during processing.

## Examples

### Example 1: Enriching metadata with a Related Device's Server Attribute

This example demonstrates how to add a server-side attribute from a related device to the message metadata.

**Scenario**: A "Gateway" device sends a status message. We want to add the `buildingId` of the parent "HVAC Controller" device, which is stored as a server attribute on the
controller.

**Incoming message**

Metadata:

```json
{
  "deviceName": "Main Gateway",
  "deviceType": "gateway"
}
```

Originator: device named "Main Gateway"

**Node configuration**

```json
{
  "deviceRelationsQuery": {
    "fetchLastLevelOnly": false,
    "direction": "TO",
    "maxLevel": "1",
    "relationType": "Manages",
    "deviceTypes": [
      "hvac-controller"
    ]
  },
  "tellFailureIfAbsent": true,
  "fetchTo": "METADATA",
  "clientAttributeNames": [],
  "sharedAttributeNames": [],
  "serverAttributeNames": [
    "buildingId"
  ],
  "latestTsKeyNames": [],
  "getLatestValueWithTs": false
}
```

**State of the system**:

* A device named "HVAC-Controller-01" (with profile `hvac-controller`) has a server-side attribute `buildingId` with the value `BLD-123`.
* There is a `Manages` relation **from** "HVAC-Controller-01" **to** "Main Gateway".

**Outgoing message**

The outgoing message is identical to the incoming one, but its metadata is enriched. It is sent via the `Success` connection.

Metadata:

```json
{
  "deviceName": "Main Gateway",
  "deviceType": "gateway",
  "ss_buildingId": "BLD-123"
}
```

**Explanation**: The node searched for a relation `To` the "Main Gateway" and found the "HVAC-Controller-01" device. It then fetched the `buildingId` server attribute and added its
value to the message metadata with the prefixed key `ss_buildingId`.

### Example 2: Enriching Message Data with Telemetry

**Scenario**: A "Pump Controller" device sends a command confirmation. We need to enrich this message with the latest `pressure` reading from a "Pressure Sensor" device it
contains.

**Incoming message**

Data:

```json
{
  "command": "START",
  "status": "CONFIRMED"
}
```

Originator: device named "Pump-Controller-A"

**Node configuration**

- **Device relations query**:
    - Direction: `From originator`
    - Max relation level: `1`
    - Relation type: `Contains`
    - Device profiles: `pressure-sensor`
- **Related device attributes**:
    - Latest telemetry: `pressure`
    - Fetch latest telemetry with timestamp: `Enabled`
    - Add selected attributes to: `Message`

```json
{
  "deviceRelationsQuery": {
    "fetchLastLevelOnly": false,
    "direction": "FROM",
    "maxLevel": "1",
    "relationType": "Contains",
    "deviceTypes": [
      "pressure-sensor"
    ]
  },
  "tellFailureIfAbsent": true,
  "fetchTo": "METADATA",
  "clientAttributeNames": [],
  "sharedAttributeNames": [],
  "serverAttributeNames": [],
  "latestTsKeyNames": [
    "pressure"
  ],
  "getLatestValueWithTs": true
}
```

**State of the system**:

* A device named "Pressure-Sensor-X1" (with profile `pressure-sensor`) has a latest telemetry value for `pressure` of `120.5` at timestamp `1725282600000`.
* There is a `Contains` relation **from** "Pump-Controller-A" to "Pressure-Sensor-X1".

**Outgoing message**

The outgoing message data is enriched with the telemetry reading.

Data:

```json
{
  "command": "START",
  "status": "CONFIRMED",
  "pressure": {
    "ts": 1725282600000,
    "value": 120.5
  }
}
```

**Explanation**: The node searched for a relation `From` the "Pump-Controller-A" and found "Pressure-Sensor-X1". It fetched the latest `pressure` telemetry with its timestamp and
added the resulting JSON object to the message data with the key `pressure`.
