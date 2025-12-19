Extracts latitude and longitude from the incoming message and monitors whether the entity enters, leaves, or remains inside/outside a configured geofence (polygon or circle). The
node tracks state transitions and duration thresholds to produce different event types.

When an entity **enters** the geofence, a message is routed via `Entered`. When it **leaves**, the message goes via `Left`. Messages can also be routed via `Inside` or `Outside`
based on the configured presence monitoring strategy and minimum duration requirements.

## Configuration

### Coordinate field names

Specifies which message fields contain the GPS coordinates to monitor.

* **Latitude field name** — name of the key that contains the latitude of the point to check.
* **Longitude field name** — name of the key that contains the longitude of the point to check.

Both fields are checked first in message data, then fall back to metadata if not found in data.

---

### Geofence configuration

The geofence can be either a **Polygon** or a **Circle**. Polygons are suitable for irregular boundaries like property lines or delivery zones, while circles are appropriate for
simple radius-based monitoring around a point of interest.

There are two ways to configure the geofence:

**Static configuration** — Define the geofence directly in the node settings. This approach is suitable when boundaries remain constant or when all devices share the same
monitoring area. The configuration applies to all messages processed by this node.

**Dynamic configuration** — Load the geofence definition from each message's metadata. This method is useful when different entities require different boundaries, or when zones
change frequently.

#### Configuration fields

* **Perimeter type** — specifies the geofence shape: *Polygon* or *Circle*.

* **Fetch perimeter information from metadata** — determines the configuration method:
    * **Disabled (static)**: The geofence is defined once in the node configuration. All messages use the same boundary.
    * **Enabled (dynamic)**: Each message can have its own geofence defined in metadata. The node reads the boundary from the specified metadata key.

* **Perimeter key name** — used only when dynamic configuration is enabled. Specifies which metadata key contains the geofence definition. The format of the value depends on the
  perimeter type (see format examples below).

**For static Polygon configuration**:

* **Polygon definition** — a JSON array of coordinates defining the boundary (see format examples below).

**For static Circle configuration**:

* **Center latitude** — the latitude of the circle's center point.
* **Center longitude** — the longitude of the circle's center point.
* **Range** — the radius distance from the center.
* **Range units** — the unit of measurement: *Meter*, *Kilometer*, *Foot*, *Mile*, or *Nautical mile*.

#### Geofence definition formats

The following formats apply whether using static configuration or storing definitions in metadata.

##### Polygon formats

Polygon definitions are JSON arrays of coordinates, where each coordinate is `[latitude, longitude]`.

**Single polygon**

A minimum of three points is required to form a closed shape (the node automatically connects the last point back to the first):

```json
[[48.195, 24.645], [48.200, 24.655], [48.205, 24.645]]
```

**Rectangle shorthand**

Provide two opposite corners and the node will compute the remaining corners:

```json
[[48.195, 24.645], [48.205, 24.655]]
```

**Multiple zones**

Monitor several separate areas by nesting polygon arrays:

```json
[
  [[48.195, 24.645], [48.200, 24.655], [48.205, 24.645]],
  [[48.210, 24.650], [48.215, 24.660], [48.220, 24.650]]
]
```

**Exclusion zones (holes)**

Create exclusions by placing a smaller polygon completely inside a larger one. The inner polygon becomes a "hole" that is excluded from the monitored area:

```json
[
  [[48.190, 24.640], [48.210, 24.640], [48.210, 24.660], [48.190, 24.660]],
  [[48.197, 24.647], [48.203, 24.647], [48.203, 24.653], [48.197, 24.653]]
]
```

{% capture polygon_metadata_note %}
When storing polygons in metadata, the entire JSON array must be provided as a stringified value.
{% endcapture %}
{% include templates/info-banner.md content=polygon_metadata_note %}

##### Circle format

Circle definitions are JSON objects with these fields:

```json
{
  "latitude": 48.1986,
  "longitude": 24.6532,
  "radius": 100.0,
  "radiusUnit": "METER"
}
```

* `latitude` — center point latitude
* `longitude` — center point longitude
* `radius` — distance from center (must be positive)
* `radiusUnit` — optional, defaults to `"METER"` if not specified. Valid values: `"METER"`, `"KILOMETER"`, `"FOOT"`, `"MILE"`, `"NAUTICAL_MILE"`

{% capture circle_metadata_note %}
When storing circles in metadata, stringify circle definition: `"{\"latitude\":48.1986,\"longitude\":24.6532,\"radius\":100.0,\"radiusUnit\":\"METER\"}"`
{% endcapture %}
{% include templates/info-banner.md content=circle_metadata_note %}

---

### Presence monitoring strategy

Controls how the node reports the entity's presence status after the initial entry or exit event.

#### On each message strategy

After an entity enters or leaves the geofence, every subsequent message is routed via `Inside` or `Outside` as long as the entity remains in that state. No minimum duration
requirements apply with this strategy.

#### On first message strategy

After an entity enters or leaves and remains in the new state for the minimum duration, only the first message that satisfies the duration threshold is routed via `Inside` or
`Outside`. All subsequent messages are routed via `Success` until the state changes again.

##### Duration thresholds

Duration thresholds define how long an entity must remain inside or outside the geofence before the node routes messages via `Inside` or `Outside` connections. These thresholds
prevent false positives from brief GPS fluctuations or temporary boundary crossings.

* **Minimum inside duration** — the time period an entity must continuously remain inside the geofence before messages are routed via the `Inside` connection. Specified as a
  duration value and time unit (*Milliseconds*, *Seconds*, *Minutes*, *Hours*, *Days*).
* **Minimum outside duration** — the time period an entity must continuously remain outside the geofence before messages are routed via the `Outside` connection. Specified as a
  duration value and time unit (*Milliseconds*, *Seconds*, *Minutes*, *Hours*, *Days*).

{% capture duration_threshold_note %}
Duration thresholds only apply to `Inside` and `Outside` events. The `Entered` and `Left` events are triggered immediately upon state transition, regardless of duration settings.
{% endcapture %}
{% include templates/info-banner.md content=duration_threshold_note %}

---

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbGpsGeofencingActionNodeConfiguration",
  "type": "object",
  "required": [
    "latitudeKeyName",
    "longitudeKeyName",
    "perimeterType",
    "fetchPerimeterInfoFromMessageMetadata",
    "minInsideDuration",
    "minOutsideDuration",
    "minInsideDurationTimeUnit",
    "minOutsideDurationTimeUnit",
    "reportPresenceStatusOnEachMessage"
  ],
  "properties": {
    "latitudeKeyName": {
      "type": "string",
      "description": "Name of the key that holds the latitude of the point to check."
    },
    "longitudeKeyName": {
      "type": "string",
      "description": "Name of the key that holds the longitude of the point to check."
    },
    "perimeterType": {
      "type": "string",
      "description": "Specifies whether the geofence is a Polygon or a Circle.",
      "enum": [
        "CIRCLE",
        "POLYGON"
      ]
    },
    "fetchPerimeterInfoFromMessageMetadata": {
      "type": "boolean",
      "description": "Whether to load the geofence definition from message metadata or use static configuration."
    },
    "perimeterKeyName": {
      "type": "string",
      "description": "Name of the metadata key that contains the perimeter definition."
    },
    "polygonsDefinition": {
      "type": "string",
      "description": "String representing a JSON array of coordinates for polygon perimeter."
    },
    "centerLatitude": {
      "type": "number",
      "description": "Latitude of the center of the circle perimeter."
    },
    "centerLongitude": {
      "type": "number",
      "description": "Longitude of the center of the circle perimeter."
    },
    "range": {
      "type": "number",
      "description": "Radius of the circle perimeter."
    },
    "rangeUnit": {
      "type": "string",
      "description": "Unit of measurement for the circle radius.",
      "enum": [
        "METER",
        "KILOMETER",
        "FOOT",
        "MILE",
        "NAUTICAL_MILE"
      ]
    },
    "minInsideDuration": {
      "type": "integer",
      "description": "Minimum time an entity must remain inside before Inside event is triggered."
    },
    "minOutsideDuration": {
      "type": "integer",
      "description": "Minimum time an entity must remain outside before Outside event is triggered."
    },
    "minInsideDurationTimeUnit": {
      "type": "string",
      "description": "Time unit for minimum inside duration.",
      "enum": [
        "MILLISECONDS",
        "SECONDS",
        "MINUTES",
        "HOURS",
        "DAYS"
      ]
    },
    "minOutsideDurationTimeUnit": {
      "type": "string",
      "description": "Time unit for minimum outside duration.",
      "enum": [
        "MILLISECONDS",
        "SECONDS",
        "MINUTES",
        "HOURS",
        "DAYS"
      ]
    },
    "reportPresenceStatusOnEachMessage": {
      "type": "boolean",
      "description": "If true, report Inside/Outside on each message. If false, report only once after duration threshold is met."
    }
  },
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. **Extract coordinates to check**  
   The node retrieves latitude and longitude using the configured keys:
    * First looks in the message data.
    * If not found there, falls back to the message metadata.  
      Both values must be present and parseable as decimal numbers. Otherwise, the message is routed via `Failure`.

2. **Resolve the geofence (perimeter)**  
   The geofence is determined in one of two ways:
    * If **Fetch perimeter information from metadata** is disabled, the perimeter is built from static configuration fields.
    * If enabled, the perimeter is loaded from the metadata key specified in **Perimeter key name**. If the metadata key is missing or contains an invalid value, the message is
      routed via `Failure`.

3. **Check if point is inside the geofence**
    * For **circle** perimeters, the node calculates the geodesic distance between the point and the center. If the distance is **less than** the configured range, the point is
      considered **inside**.
    * For **polygon** perimeters, the node checks if the point is located within the defined shape. If multiple polygons are provided, any containing polygon counts. Polygons fully
      enclosed by others are treated as **holes**.

4. **Load entity state**  
   The node loads the current geofencing state for the message originator from server-scope attributes. The state includes:
    * `inside` — whether the entity was previously inside the geofence.
    * `stateSwitchTime` — timestamp of the last state transition.
    * `stayed` — whether the minimum duration threshold has been met.  
      If no state exists, the node initializes a new state with `inside=false`, `stateSwitchTime=0`, and `stayed=false`.

5. **Detect state transitions**  
   The node compares the current geofence check result with the stored state. When a state change is detected (first message or entity crossing the boundary), the message is
   immediately routed via `Entered` or `Left` accordingly. The state is updated and persisted to server attributes with the new status and timestamp.

6. **Handle messages with no state transition**  
   When the entity remains in the same state (inside or outside), routing depends on the configured strategy:

    * **"On each message" strategy**: Every message is routed via `Inside` or `Outside` based on the entity's current location.

    * **"On first message" strategy**: The node checks whether the configured minimum duration has elapsed. The first message after meeting the duration threshold is routed via
      `Inside` or `Outside`. All subsequent messages are routed via `Success` until the entity crosses the boundary again.

{% capture longitude_normalization_note %}
Longitudes are normalized internally, allowing support for polygons that cross the ±180° meridian. A two-point polygon is interpreted as a rectangle defined by opposite corners.
{% endcapture %}
{% include templates/info-banner.md content=longitude_normalization_note %}

## Output connections

* `Entered`:
    * The entity has just **entered** the geofence (transitioned from outside to inside).
    * Triggered immediately on state transition, regardless of duration settings.

* `Left`:
    * The entity has just **left** the geofence (transitioned from inside to outside).
    * Triggered immediately on state transition, regardless of duration settings.

* `Inside`:
    * The entity is currently inside the geofence **and** one of the following conditions is met:
        * **"On each message" strategy**: Every message while inside the geofence.
        * **"On first message" strategy**: The first message after the entity has stayed inside for at least `minInsideDuration`.

* `Outside`:
    * The entity is currently outside the geofence **and** one of the following conditions is met:
        * **"On each message" strategy**: Every message while outside the geofence.
        * **"On first message" strategy**: The first message after the entity has stayed outside for at least `minOutsideDuration`.

* `Success`:
    * Used when **"On first message" strategy** is enabled and:
        * The entity has not changed state (still inside or outside).
        * The duration threshold was already met in a previous message, so subsequent messages don't need to be routed via `Inside` or `Outside` again.

* `Failure`:
    * Incoming data is not a JSON object.
    * Latitude/longitude are missing in both data and metadata or not numeric.
    * **Fetch perimeter information from metadata** is enabled but the perimeter definition is missing/invalid.
    * Other unexpected error.

## Examples

### Example 1 — "On each message" strategy

**State of the system**

Entity is inside the geofence (entered 3 minutes ago).

**Incoming message**

Data:

```json
{
  "latitude": 48.199,
  "longitude": 24.653
}
```

**Node configuration**

```json
{
  "latitudeKeyName": "latitude",
  "longitudeKeyName": "longitude",
  "fetchPerimeterInfoFromMessageMetadata": false,
  "perimeterType": "CIRCLE",
  "centerLatitude": 48.1986,
  "centerLongitude": 24.6532,
  "range": 150.0,
  "rangeUnit": "METER",
  "minInsideDuration": 5,
  "minInsideDurationTimeUnit": "MINUTES",
  "minOutsideDuration": 5,
  "minOutsideDurationTimeUnit": "MINUTES",
  "reportPresenceStatusOnEachMessage": true
}
```

**Result**

Routed via **`Inside`**

**Explanation**

With "On each message" strategy enabled, every message while the entity is inside the geofence is routed via `Inside`, regardless of how
long it has been there or whether the duration threshold was previously met.

---

### Example 2 — "On first message" strategy

**State of the system**

Entity is inside the geofence (entered 6 minutes ago, duration threshold not yet marked as met).

**Incoming message**

Data:

```json
{
  "latitude": 48.199,
  "longitude": 24.653
}
```

**Node configuration**

```json
{
  "latitudeKeyName": "latitude",
  "longitudeKeyName": "longitude",
  "fetchPerimeterInfoFromMessageMetadata": false,
  "perimeterType": "CIRCLE",
  "centerLatitude": 48.1986,
  "centerLongitude": 24.6532,
  "range": 150.0,
  "rangeUnit": "METER",
  "minInsideDuration": 5,
  "minInsideDurationTimeUnit": "MINUTES",
  "minOutsideDuration": 5,
  "minOutsideDurationTimeUnit": "MINUTES",
  "reportPresenceStatusOnEachMessage": false
}
```

**Result**

Routed via **`Inside`**

**Explanation**

The entity has been inside for 6 minutes, exceeding the 5-minute threshold. This is the first message after the threshold was met, so it's routed via `Inside`. The duration
threshold is now marked as met. Subsequent messages (until the entity crosses the boundary) will be routed via `Success`.
