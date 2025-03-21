- Select the argument type **Time series rolling**;
- Specify the **Time series key**;
- Set the **Time window** for data collection. This defines the duration over which historical telemetry data is gathered for calculations;
- Set the **Maximum number of values** to be processed. This defines the duration over which historical telemetry data is gathered for calculations;
  > **Note**: This setting is configured in the [Tenant profile](/docs/{{docsPrefix}}user-guide/tenant-profiles/#api-limits--usage){:target="_blank"} by the system administrator.
- Finally, click **Add** button.

A new argument has been added.

{% include images-gallery.html imageCollection="time-series-rolling-argument-type" %}

##### Built-in methods for rolling arguments

Time series rolling arguments support built-in functions for calculations. These functions accept an optional `ignoreNaN` boolean parameter.

| Method          | Default Behavior (`ignoreNaN = true`)               | Alternative (`ignoreNaN = false`)           |
|-----------------|-----------------------------------------------------|---------------------------------------------|
| `max()`         | Returns the highest value, ignoring NaN values.     | Returns NaN if any NaN values exist.        |
| `min()`         | Returns the lowest value, ignoring NaN values.      | Returns NaN if any NaN values exist.        |
| `mean(), avg()` | Computes the average value, ignoring NaN values.    | Returns NaN if any NaN values exist.        |
| `std()`         | Calculates the standard deviation, ignoring NaN.    | Returns NaN if any NaN values exist.        |
| `median()`      | Returns the median value, ignoring NaN values.      | Returns NaN if any NaN values exist.        |
| `count()`       | Counts values, ignoring NaN values.                 | Counts all values, including NaN.           |
| `last()`        | Returns the most recent value, skipping NaN values. | Returns the last value, even if it is NaN.  |
| `first()`       | Returns the oldest value, skipping NaN values.      | Returns the first value, even if it is NaN. |
| `sum()`         | Computes the total sum, ignoring NaN values.        | Returns NaN if any NaN values exist.        |

#### Assuming the following time series rolling argument:

```json
{
  "temperature": {
    "timeWindow": {
      "startTs": 1740643762896,
      "endTs": 1740644662896
    },
    "values": [
      { "ts": 1740644350000, "value": 72.32 },
      { "ts": 1740644360000, "value": 72.86 },
      { "ts": 1740644370000, "value": 73.58 },
      { "ts": 1740644380000, "value": "NaN" }
    ]
  }
}
```

#### Usage and result:

```javascript
var avgTemp = temperature.mean(); // Returns 72.92
var tempMax = temperature.max(); // Returns 73.58
var valueCount = temperature.count(); // Returns 3

var avgTempNaN = temperature.mean(false);  // Returns NaN
var tempMaxNaN = temperature.max(false);   // Returns NaN
var valueCountNaN = temperature.count(false); // Returns 4
```

**Where it can be useful**

- **statistical analysis**: computing mean, median, and standard deviation for trend analysis. 
- **data filtering**: identifying maximum and minimum values within a time window. 
- **quality control**: detecting missing or outlier values with count() and std(). 
- **energy efficiency monitoring**: summing up power consumption over a period to evaluate energy usage patterns.

##### Merging Time Series Arguments

Time series rolling arguments can be **merged** to align timestamps across multiple datasets.
The merge function combines two or more rolling arguments by taking all timestamps from all arguments and merging the values based on these timestamps. 
If value by timestamp does not exist in an argument, it assigns the previous value from that argument; if no previous value exists, it assigns `NaN`. 
The result is a new rolling argument that contains a time window and an array of values corresponding to each argument value by each timestamp.

| Method                       | Description                                                                                                               | Returns                                             |
|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| `merge(other, settings)`     | Merges with another rolling argument. Aligns timestamps and filling missing values with the previous available value.     | Merged object with `timeWindow` and aligned values. |
| `mergeAll(others, settings)` | Merges multiple rolling arguments. Aligns timestamps and filling missing values with the previous available value.        | Merged object with `timeWindow` and aligned values. |

##### Parameters

| Parameter            | Description                                                                                                                                                |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `other` or `others`  | Another rolling argument or array of rolling arguments to merge with.                                                                                      |
| `settings`(optional) | Configuration object that supports: <br> - `ignoreNaN` - controls whether NaN values should be ignored.<br> - `timeWindow` - defines a custom time window. |

**Assuming the following arguments and their values:**

```json
{
  "humidity": {
    "timeWindow": {
      "startTs": 1741356332086,
      "endTs": 1741357232086
    },
    "values": [{
      "ts": 1741356882759,
      "value": 43
    }, {
      "ts": 1741356918779,
      "value": 46
    }]
  },
  "pressure": {
    "timeWindow": {
      "startTs": 1741356332086,
      "endTs": 1741357232086
    },
    "values": [{
      "ts": 1741357047945,
      "value": 1023
    }, {
      "ts": 1741357056144,
      "value": 1026
    }, {
      "ts": 1741357147391,
      "value": 1025
    }]
  },
  "temperature": {
    "timeWindow": {
      "startTs": 1741356332086,
      "endTs": 1741357232086
    },
    "values": [{
      "ts": 1741356874943,
      "value": 76
    }, {
      "ts": 1741357063689,
      "value": 77
    }]
  }
}
```

**Usage:**

```javascript
var mergedData = temperature.merge(humidity, { ignoreNaN: false });
```

**Output:**

```json
{
  "mergedData": {
    "timeWindow": {
      "startTs": 1741356332086,
      "endTs": 1741357232086
    },
    "values": [{
      "ts": 1741356874943,
      "values": [76.0, "NaN"]
    }, {
      "ts": 1741356882759,
      "values": [76.0, 43.0]
    }, {
      "ts": 1741356918779,
      "values": [76.0, 46.0]
    }, {
      "ts": 1741357063689,
      "values": [77.0, 46.0]
    }]
  }
}
```

**Usage:**

```javascript
var mergedData = temperature.mergeAll([humidity, pressure], { ignoreNaN: true });
```

**Output:**

```json
{
  "mergedData": {
    "timeWindow": {
      "startTs": 1741356332086,
      "endTs": 1741357232086
    },
    "values": [{
      "ts": 1741357047945,
      "values": [76.0, 46.0, 1023.0]
    }, {
      "ts": 1741357056144,
      "values": [76.0, 46.0, 1026.0]
    }, {
      "ts": 1741357063689,
      "values": [77.0, 46.0, 1026.0]
    }, {
      "ts": 1741357147391,
      "values": [77.0, 46.0, 1025.0]
    }]
  }
}
```

**Where it can be useful**

Merging time series arguments is useful in scenarios where multiple sensors provide data streams at different intervals. 
By aligning timestamps and filling missing values, merging enables:

- **sensor data synchronization**: aligns readings from different sensors measuring related parameters, such as temperature and humidity. 
- **anomaly detection**: merges multiple telemetry sources to identify inconsistencies or deviations in system performance. 
- **energy consumption analysis**: combines power usage data from various devices to provide a unified view of energy trends. 
- **predictive maintenance**: merges vibration, temperature, and operational status data to predict equipment failures.
