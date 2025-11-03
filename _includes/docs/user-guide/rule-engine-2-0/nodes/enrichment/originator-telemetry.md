Retrieves time series data for the message originator within a specified time range and adds the result to the message metadata.

## Configuration

The node's configuration is divided into three main sections: selecting the data, defining the time window, and specifying the fetching strategy.

- **Time series keys** - A list of time series keys to fetch from the message originator. You can use substitution patterns to use keys from the message data (`$[dataKey]`) or
  metadata (`$[metadataKey]`).
- **Fetch interval** - Defines the time window for the time series query.
    - **Relative time window** (default): Fetches data from a time range relative to the current moment. For example, setting **Interval start** to *2 Minutes* and **Interval end**
      to *1 Minute* will fetch data from two minutes ago up to one minute ago.
    - **Use dynamic interval**: When enabled, the start and end of the interval are determined by values from the message or metadata. The substituted values must be a Unix
      timestamp in milliseconds.
        - **Interval start**: The template for the start of the interval (e.g., `${startMillis}`).
        - **Interval end**: The template for the end of the interval (e.g., `${endMillis}`).
- **Fetch strategy** - Determines how data points are selected from the specified interval.
    - **First**: Retrieves the single data point with the earliest timestamp within the interval.
    - **Last**: Retrieves the single data point with the latest timestamp within the interval.
    - **All**: Retrieves a set of data points from the interval. This mode enables additional query parameters:
        - **Data aggregation function**: An optional function to apply to all data points within the interval. Options include *None*, *Min*, *Max*, *Average*, *Sum*, *Count*. When
          an aggregation function is used, the node returns a single aggregated data point.
        - **Order by timestamp**: Sorts the fetched data by timestamp in *Ascending* or *Descending* order. This is used only if an aggregation function *None* is selected.
        - **Limit**: Sorts the fetched data by timestamp in *Ascending* or *Descending* order. This is used only if an aggregation function *None* is selected.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbGetTelemetryNodeConfiguration",
  "type": "object",
  "properties": {
    "latestTsKeyNames": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Set of time series keys to fetch."
    },
    "useMetadataIntervalPatterns": {
      "type": "boolean",
      "description": "If true, use templates for the interval; otherwise, use a relative time window."
    },
    "startInterval": {
      "type": "integer",
      "description": "Value for the relative interval start."
    },
    "startIntervalTimeUnit": {
      "type": "string",
      "enum": [
        "MILLISECONDS",
        "SECONDS",
        "MINUTES",
        "HOURS",
        "DAYS"
      ],
      "description": "Time unit for the relative interval start (e.g., 'MINUTES')."
    },
    "endInterval": {
      "type": "integer",
      "description": "Value for the relative interval end."
    },
    "endIntervalTimeUnit": {
      "type": "string",
      "enum": [
        "MILLISECONDS",
        "SECONDS",
        "MINUTES",
        "HOURS",
        "DAYS"
      ],
      "description": "Time unit for the relative interval end (e.g., 'MINUTES')."
    },
    "startIntervalPattern": {
      "type": "string",
      "description": "Template for the dynamic interval start timestamp (in ms)."
    },
    "endIntervalPattern": {
      "type": "string",
      "description": "Template for the dynamic interval end timestamp (in ms)."
    },
    "fetchMode": {
      "type": "string",
      "enum": [
        "FIRST",
        "LAST",
        "ALL"
      ],
      "description": "Strategy for fetching data points."
    },
    "orderBy": {
      "type": "object",
      "description": "Sort order for the 'ALL' fetch mode."
    },
    "aggregation": {
      "type": "string",
      "enum": [
        "MIN",
        "MAX",
        "AVG",
        "SUM",
        "COUNT",
        "NONE"
      ],
      "description": "Aggregation function for the 'ALL' fetch mode."
    },
    "limit": {
      "type": "integer",
      "description": "Maximum number of data points to fetch in 'ALL' mode.",
      "minimum": 2,
      "maximum": 1000
    }
  },
  "required": [
    "latestTsKeyNames",
    "fetchMode"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node identifies the **originator** of the incoming message (e.g., a specific Device or Asset).
2. It determines the fetch interval `[startTs, endTs]` based on the configuration:
    * If using a **relative time window**, it calculates the timestamps based on the current time (e.g., `now - startInterval` to `now - endInterval`).
    * If using a **dynamic interval**, it resolves the patterns from the message or metadata to get the start and end timestamps.
3. The node asynchronously queries the database for the specified telemetry keys within the calculated interval, applying the configured **fetch strategy**.
4. The fetched data is added to the message **metadata**. The value added is always a string.
    * For `First` and `Last` strategies, the result is the single telemetry value, converted to a string (e.g., `"25.5"`).
    * For the `All` strategy, the result is a JSON array of data points, which is then converted into a single string (e.g.,
      `'[{"ts":1672531200000,"value":25.5},{"ts":1672531260000,"value":26.1}]'`).
    * If an aggregation function is used, the result is a stringified JSON array containing a single aggregated data point.
5. The enriched message is passed to the `Success` connection. If an error occurs (e.g., an invalid interval where `startTs > endTs`), the original message is
   passed to the `Failure` connection.

## Output connections

- `Success`: The message is successfully enriched with the requested telemetry data.
- `Failure`: An error occurred during processing. This can happen if the time interval is invalid (e.g., start time is after end time) or if there is a database communication
  issue.

## Examples

### Example 1 — Fetching the first value in an interval

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
  "latestTsKeyNames": [
    "temperature"
  ],
  "useMetadataIntervalPatterns": false,
  "startInterval": 60,
  "startIntervalTimeUnit": "MINUTES",
  "endInterval": 1,
  "endIntervalTimeUnit": "MILLISECONDS",
  "fetchMode": "FIRST"
}
```

**State of the system**

The device `Thermostat-A7` has several temperature readings in the last hour. The earliest one is `22.4`.

**Outgoing message**

The outgoing message is identical to the incoming one, but its metadata is enriched with the fetched value. It is sent via the `Success` connection.

Metadata:

```json
{
  "deviceName": "Thermostat-A7",
  "deviceType": "thermostat",
  "temperature": "22.4"
}
```

### Example 2 — Fetching all values in an interval

**Incoming message**

Metadata:

```json
{
  "deviceName": "Humidifier-B1"
}
```

**Node configuration**

```json
{
  "latestTsKeyNames": [
    "humidity"
  ],
  "useMetadataIntervalPatterns": false,
  "startInterval": 5,
  "startIntervalTimeUnit": "MINUTES",
  "endInterval": 1,
  "endIntervalTimeUnit": "MILLISECONDS",
  "fetchMode": "ALL",
  "orderBy": "ASC",
  "aggregation": "NONE",
  "limit": 3
}
```

**Outgoing message**

The `humidity` key is added to the metadata. Its value is a string containing a JSON array of all data points found in the interval.

Metadata:

```json
{
  "deviceName": "Humidifier-B1",
  "humidity": "[{\"ts\":1756479300000,\"value\":45.2},{\"ts\":1756479360000,\"value\":45.8},{\"ts\":1756479420000,\"value\":46.1}]"
}
```

### Example 3 — Aggregating data over an interval

**Incoming message**

Metadata: `{}`

**Node configuration**

```json
{
  "latestTsKeyNames": [
    "temperature"
  ],
  "useMetadataIntervalPatterns": false,
  "startInterval": 10,
  "startIntervalTimeUnit": "MINUTES",
  "endInterval": 1,
  "endIntervalTimeUnit": "MILLISECONDS",
  "fetchMode": "ALL",
  "orderBy": "ASC",
  "aggregation": "AVG",
  "limit": 1000
}
```

**Outgoing message**

The result of the aggregation is returned as a stringified JSON array containing a single object.

Metadata:

```json
{
  "temperature": "[{\"ts\":1756479000000,\"value\":24.75}]"
}
```

{% capture aggregation_timestamp_note %}
**Note**: The timestamp (`ts`) in the result corresponds to the start of the aggregation interval.
{% endcapture %}
{% include templates/info-banner.md content=aggregation_timestamp_note %}

### Example 4 — Using a dynamic interval from message data

**Incoming message**

Data:

```json
{
  "start": 1756470000000,
  "end": 1756473600000
}
```

**Node configuration**

```json
{
  "latestTsKeyNames": [
    "vibration"
  ],
  "useMetadataIntervalPatterns": true,
  "startIntervalPattern": "${start}",
  "endIntervalPattern": "${end}",
  "fetchMode": "ALL",
  "orderBy": "DESC",
  "aggregation": "NONE",
  "limit": 50
}
```

**Outgoing message**

The node uses `start` and `end` from the message data to define the query interval. The fetched `vibration` data is added to the metadata.

Metadata:

```json
{
  "vibration": "[{\"ts\":1756473540000,\"value\":0.12},{\"ts\":1756473480000,\"value\":0.15}]"
}
```
