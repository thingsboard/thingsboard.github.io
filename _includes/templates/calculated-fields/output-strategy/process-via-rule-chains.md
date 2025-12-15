In this mode, the result is **NOT written directly to the database**.   
Instead, ThingsBoard generates an internal message:
- <span class="code-light">POST_TELEMETRY_REQUEST</span>, or
- <span class="code-light">POST_ATTRIBUTES_REQUEST</span>

and routes it to the entity&#39;s **Default Rule Chain**.

Use this option when you need to:
- execute complex processing logic
- apply filters, scripts, or conversions
- control data persistence based on conditions
- perform enrichment, routing, or forwarding

To actually store the result, the Rule Chain must include a [save time series](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node){:target="_blank"} or [save attributes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-attributes-node){:target="_blank"} node.

> This is the classic Calculated Field processing model used prior to the introduction of direct processing.
