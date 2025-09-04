![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/originator-telemetry-node.png)

Adds message originator's time series data, found using configured **Fetch interval** and **Fetch strategy**, into message metadata.

**Configuration: general**
- **Time series keys** - list of time series keys that will be used to fetch originator's time series data.
  > **Note:** All input keys support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-time-series-keys.png)

**Configuration: Fetch interval**

Fetch interval is the time period for which time series data will be fetched. The fetch interval can be configured in one of two ways:

- **Fixed interval** - both **Interval start** and **Interval end** are configured by specifying a duration value and a time unit. This interval is relative, meaning that for each message, the start and end times are calculated by subtracting the specified duration from the time the message is processed.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fixed-interval.png)

- **Use dynamic interval** - if enabled, **Interval start** and **Interval end** are configured by specifying templates. Values extracted using these templates are considered to be [UNIX millisecond timestamps](https://en.wikipedia.org/wiki/Unix_time). This interval is absolute, meaning that start and end times are based on specific points in time provided by the templates.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-dynamic-interval.png)

> **Note:** In both cases, interval start must be before the interval end.

**Configuration: Fetch strategy**

Fetch strategy controls what values to fetch from the specified **Fetch interval**. There are three strategies:
- **First** - fetch the first time series entry within the interval.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-strategy-first.png)

- **Last** - fetch the last time series entry within the interval.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-strategy-last.png)

The fetched time series entry will be placed in the outgoing message metadata as a simple key-value entry. Example:
```json
{
  "frequency": "67.88"
}
```

- **All** - fetch all time series entries within the interval.

By default, the node is not configured to aggregate fetched data (**None** option selected in **Data aggregation function**).
In this case, you can specify **Order by timestamp** direction and **Limit** for number of entries fetched.

> **Note:** Maximum number of time series entries fetched is 1000.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-strategy-all-none-aggregation.png)

Fetched time series entries will be placed in the outgoing message metadata as an array of objects, each containing a `ts` (timestamp) and `value` fields. Example:
```json
{
  "velocity": "[{\"ts\":1718874345362,\"value\":45.777},{\"ts\":1718874365362,\"value\":50.346},{\"ts\":1718875365362,\"value\":60.117}]"
}
```

You can specify a **Data aggregation function** to apply to fetched data. Available functions: Min, Max, Average, Sum and Count.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-originator-telemetry-fetch-strategy-all-average-aggregation.png)

Aggregated data will be placed in the outgoing message's metadata as a simple key-value entry, like in the **First** or **Last** strategies.

**Output connections**
* **Success:**
  * If time series data is found and added to the outgoing message metadata.
  * If time series data is not found.
* **Failure:**
  * If **Use dynamic interval** is enabled, and one or both templates are not found in the incoming message.
  * If **Use dynamic interval** is enabled, and value extracted using one or both templates cannot be parsed into a number.
  * If unexpected error occurs during message processing.

> **Note:** The outgoing message is not a new message, it is an incoming message with modified metadata.

**Usage example: [telemetry delta calculation](/docs/user-guide/rule-engine-2-0/tutorials/telemetry-delta-validation/) tutorial**

**Tips**

> **Tip:** If you want to fetch a time series entry with a specific timestamp, toggle **Use dynamic interval** and provide templates such that the **Interval end** is equal to **Interval start** *plus one millisecond*. This will effectively create a one-millisecond interval, capturing the entry at **Interval start**.

> **Tip:** All data in metadata is stored as strings, so in other nodes you can use `JSON.parse()` to convert data to a JSON format.
