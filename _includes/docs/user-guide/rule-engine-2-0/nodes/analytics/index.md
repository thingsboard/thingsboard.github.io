Analytics nodes perform statistical calculations and aggregations on incoming data streams and data across entities.

These nodes can compute statistical metrics (minimum, maximum, sum, average, count) from streaming data, track alarm counts or periodically aggregate attributes and telemetry data of entities.

- <span class="item-pe product-label-padding">[aggregate latest](/docs/user-guide/rule-engine-2-0/nodes/analytics/aggregate-latest)</span> — Periodically does aggregation of child entities attributes or latest timeseries for specified set of parent entities.
- <span class="item-pe product-label-padding">[aggregate stream](/docs/user-guide/rule-engine-2-0/nodes/analytics/aggregate-stream)</span> — Calculates MIN/MAX/SUM/AVG/COUNT/UNIQUE based on the incoming data stream.
- <span class="item-pe product-label-padding">[alarms count](/docs/user-guide/rule-engine-2-0/nodes/analytics/alarms-count)</span> — Count alarms when receives input message about new alarm.
- <span class="item-pe product-label-padding">[alarms count (deprecated)](/docs/user-guide/rule-engine-2-0/nodes/analytics/alarms-count-deprecated)</span> — Periodically does count of alarms for selected set of entities.
