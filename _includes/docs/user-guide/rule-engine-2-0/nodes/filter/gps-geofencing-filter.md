Extracts latitude and longitude from the incoming message and checks whether the point lies **inside** a configured geofence (polygon or circle).
If it matches, the message is routed via `True`; otherwise via `False`.

## Preconditions

The incoming message **data** must be a valid JSON object. The configured coordinate keys must be present in the message (either in data or metadata; they may come from different
sources), and their values must be **parseable as decimal numbers**.

## Configuration

### Field descriptions

* **Latitude field name** — name of the key that contains the latitude of the point to check.
* **Longitude field name** — name of the key that contains the longitude of the point to check.
* **Perimeter type** — defines the shape of the geofence to check against. Can be either *Polygon* or *Circle*.
* **Fetch perimeter information from metadata** — if enabled, the geofence is read from message **metadata**. If disabled, the node uses the perimeter defined in the static
  configuration.
* **Perimeter key name** — metadata key that stores the perimeter definition. Used only when **Fetch perimeter information from metadata** is enabled.
  Behavior depends on configured **perimeter type**:
    * If *Polygon*: the metadata key must contain a string representing a JSON array of coordinates that define the polygon.
    * If *Circle*: the metadata key must contain a string representing a JSON object that defines the circle.

Field below are required when the **Perimeter type** is set to *Polygon* and **Fetch perimeter information from metadata** is disabled:

* **Polygon definition** — a string representing a JSON array of coordinates that define the polygon.

Fields below are required when the **Perimeter type** is set to *Circle* and **Fetch perimeter information from metadata** is disabled:

* **Center latitude** — the latitude of the center point of the circular geofence.
* **Center longitude** — the longitude of the center point of the circular geofence.
* **Range** — the radius of the circle, representing how far from the center the geofence extends. Must be a positive number.
* **Range units** — the unit of measurement used for the range. Can be one of the following: *Meter*, *Kilometer*, *Foot*, *Mile*, *Nautical mile*.

### Perimeter definition formats

#### Polygon definition formats

Polygon definitions must be strings containing a valid JSON array of coordinates. Each coordinate is a two-element array: `[latitude, longitude]`.

**Single polygon**

A basic polygon must have at least three points (with the last point automatically closed to form a loop):

```json
[[48.195,24.645],[48.200,24.655],[48.205,24.645]]
```

**Rectangle (two corners)**

You can define a rectangle using only two diagonally opposite points — the node automatically computes the other corners:

```json
[[48.195,24.645],[48.205,24.655]]
```

**Multi-polygon**

You can provide multiple polygons by wrapping them in an additional array:

```json
[
  [[48.195,24.645],[48.200,24.655],[48.205,24.645]],
  [[48.210,24.650],[48.215,24.660],[48.220,24.650]]
]
```

**Polygon with hole**

If a polygon is completely contained inside another, it is treated as a **hole** and excluded from the area:

```json
[
  [[48.190,24.640],[48.210,24.640],[48.210,24.660],[48.190,24.660]],
  [[48.197,24.647],[48.203,24.647],[48.203,24.653],[48.197,24.653]]
]
```

{% capture defining_polygons_in_metadata_note %}
When defining polygons in metadata, the value must be a **string**, even if the content is a JSON array.
{% endcapture %}
{% include templates/info-banner.md content=defining_polygons_in_metadata_note %}

---

#### Circle definition format

Circle definitions are JSON objects with the following fields:

```json
{
  "latitude": 48.1986,
  "longitude": 24.6532,
  "radius": 100.0,
  "radiusUnit": "METER"
}
```

* `latitude` — center latitude of the circle.
* `longitude` — center longitude of the circle.
* `radius` — radius of the circle (must be a positive number).
* `radiusUnit` — unit of measurement (optional and defaults to `"METER"` if not specified); one of:
    * `"METER"`
    * `"KILOMETER"`
    * `"FOOT"`
    * `"MILE"`
    * `"NAUTICAL_MILE"`

{% capture defining_circles_in_metadata_note %}
When storing circle definitions in metadata, the entire object must be serialized as a **string**.
Example metadata value: `"{\"latitude\":48.1986,\"longitude\":24.6532,\"radius\":100.0,\"radiusUnit\":\"METER\"}"`
{% endcapture %}
{% include templates/info-banner.md content=defining_circles_in_metadata_note %}

---

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbGpsGeofencingFilterNodeConfiguration",
  "type": "object",
  "required": [
    "latitudeKeyName",
    "longitudeKeyName",
    "perimeterType",
    "fetchPerimeterInfoFromMessageMetadata"
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
      "description": "Unit of measurement for the circe radius.",
      "enum": [
        "METER",
        "KILOMETER",
        "FOOT",
        "MILE",
        "NAUTICAL_MILE"
      ]
    }
  },
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. **Parse the incoming message**
   The message `data` must be a valid JSON object. If it is not, the message is routed via the `Failure` connection.
2. **Extract coordinates to check**
   The node retrieves latitude and longitude using the configured keys:
    * First looks in the message data.
    * If not found there, falls back to the message metadata.
      Both values must be present and parseable as decimal numbers. Otherwise, the message is routed via `Failure`.
3. **Resolve the geofence (perimeter)**
   The geofence is determined in one of two ways:
    * If **Fetch perimeter information from metadata** is disabled, the perimeter is built from static configuration fields.
    * If enabled, the perimeter is loaded from the metadata key specified in **Perimeter key name**, and its format depends on the configured **Perimeter type**:
        * If *Polygon*: the metadata value must be a string containing a JSON array of coordinates.
        * If *Circle*: the metadata value must be a string containing a JSON object with latitude, longitude, radius, and optional radius unit.
          If the metadata key is missing or contains an invalid value, the message is routed via `Failure`.
4. **Check if point is inside the geofence**
    * For **circle** perimeters, the node calculates the geodesic distance between the point and the center. If the distance is **less than** the configured range, the point is
      considered **inside**.
    * For **polygon** perimeters, the node checks if the point is located within the defined shape. If multiple polygons are provided, any containing polygon counts. Polygons fully
      enclosed by others are treated as **holes**.
5. **Route the message**
    * If the point is **inside** the perimeter → routed via the `True` connection.
    * If the point is **outside** → routed via the `False` connection.
    * If any error occurs during parsing, coordinate extraction, or geofence resolution → routed via the `Failure` connection.

{% capture normalization_note %}
Longitudes are normalized internally, allowing support for polygons that cross the ±180° meridian.
{% endcapture %}
{% include templates/info-banner.md content=normalization_note %}

## Output connections

* `True`:
    * The extracted point lies **inside** the configured geofence (circle or polygon).
* `False`:
    * The extracted point lies **outside** the configured geofence (or exactly on a circle boundary).
* `Failure`:
    * Incoming data is not a JSON object.
    * Latitude/longitude are missing in both data and metadata or not numeric.
    * **Fetch perimeter information from metadata** is enabled but the perimeter definition is missing/invalid.
    * Other unexpected error.

## Examples

The examples below show only the **relevant** fields. Unless stated otherwise, other message fields may have any values.

### Example 1 — Point inside static circle → `True`

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
  "rangeUnit": "METER"
}
```

**Result**

Routed via **`True`**

**Explanation**

The point is within 150 meters of the configured circle center.

---

### Example 2 — Point outside static circle → `False`

**Incoming message**

Data:

```json
{
  "latitude": 48.205,
  "longitude": 24.660
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
  "range": 100.0,
  "rangeUnit": "METER"
}
```

**Result**

Routed via **`False`**

**Explanation**

The point is farther than 100 meters from the center, so it lies outside the geofence.

---

### Example 3 — Point inside static polygon → `True`

**Incoming message**

Data:

```json
{
  "latitude": 48.200,
  "longitude": 24.650
}
```

**Node configuration**

```json
{
  "latitudeKeyName": "latitude",
  "longitudeKeyName": "longitude",
  "fetchPerimeterInfoFromMessageMetadata": false,
  "perimeterType": "POLYGON",
  "polygonsDefinition": "[[48.195,24.645],[48.205,24.645],[48.205,24.655],[48.195,24.655]]"
}
```

**Result**

Routed via **`True`**

**Explanation**

The point lies inside the defined rectangular polygon.

---

### Example 4 — Point inside polygon with hole → `False`

**Incoming message**

Data:

```json
{
  "latitude": 48.200,
  "longitude": 24.650
}
```

**Node configuration**

```json
{
  "latitudeKeyName": "latitude",
  "longitudeKeyName": "longitude",
  "fetchPerimeterInfoFromMessageMetadata": false,
  "perimeterType": "POLYGON",
  "polygonsDefinition": "[[[48.190,24.640],[48.210,24.640],[48.210,24.660],[48.190,24.660]], [[48.197,24.647],[48.203,24.647],[48.203,24.653],[48.197,24.653]]]"
}
```

**Result**

Routed via **`False`**

**Explanation**

The outer polygon contains the point, but it lies inside an internal hole.

---

### Example 5 — Point inside circle perimeter from metadata → `True`

**Incoming message**

Data:

```json
{
  "latitude": 48.1988,
  "longitude": 24.6531
}
```

Metadata:

```json
{
  "geofence": "{\"latitude\":48.1986,\"longitude\":24.6532,\"radius\":100.0,\"radiusUnit\":\"METER\"}"
}
```

**Node configuration**

```json
{
  "latitudeKeyName": "latitude",
  "longitudeKeyName": "longitude",
  "fetchPerimeterInfoFromMessageMetadata": true,
  "perimeterKeyName": "geofence",
  "perimeterType": "CIRCLE"
}
```

**Result**

Routed via **`True`**

**Explanation**

The perimeter is loaded from metadata and the point lies within the defined circle.

---

### Example 6 — Point outside polygon perimeter from metadata → `False`

**Incoming message**

Data:

```json
{
  "latitude": 48.210,
  "longitude": 24.670
}
```

Metadata:

```json
{
  "zone": "[[48.195,24.645],[48.205,24.645],[48.205,24.655],[48.195,24.655]]"
}
```

**Node configuration**

```json
{
  "latitudeKeyName": "latitude",
  "longitudeKeyName": "longitude",
  "fetchPerimeterInfoFromMessageMetadata": true,
  "perimeterKeyName": "zone",
  "perimeterType": "POLYGON"
}
```

**Result**

Routed via **`False`**

**Explanation**

The point lies outside the polygon defined in metadata.

---

### Example 7 — Coordinates taken from metadata → `True`

**Incoming message**

Data:

```json
{
  "type": "location-report"
}
```

Metadata:

```json
{
  "latitude": "48.199",
  "longitude": "24.653",
  "geofence": "{\"latitude\":48.1986,\"longitude\":24.6532,\"radius\":200.0}"
}
```

**Node configuration**

```json
{
  "latitudeKeyName": "latitude",
  "longitudeKeyName": "longitude",
  "fetchPerimeterInfoFromMessageMetadata": true,
  "perimeterKeyName": "geofence",
  "perimeterType": "CIRCLE"
}
```

**Result**

Routed via **`True`**

**Explanation**

The coordinates were found in metadata and match the geofence.

---

### Example 8 — Missing coordinates → `Failure`

**Incoming message**

Data:

```json
{
  "type": "heartbeat"
}
```

Metadata:

```json
{}
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
  "range": 100.0,
  "rangeUnit": "METER"
}
```

**Result**

Routed via **`Failure`**

**Explanation**

Neither `latitude` nor `longitude` keys are present in data or metadata, so the node cannot extract coordinates.

---

### Example 9 — Invalid perimeter metadata → `Failure`

**Incoming message**

Data:
```json
{
  "latitude": 48.1989,
  "longitude": 24.6531
}
```

Metadata:
```json
{
  "zone": "not-a-valid-json"
}
```

**Node configuration**

```json
{
  "latitudeKeyName": "latitude",
  "longitudeKeyName": "longitude",
  "fetchPerimeterInfoFromMessageMetadata": true,
  "perimeterKeyName": "zone",
  "perimeterType": "POLYGON"
}
```

**Result**

Routed via **`Failure`**

**Explanation**

The value in the metadata key is not a valid JSON string, so the perimeter cannot be parsed.
